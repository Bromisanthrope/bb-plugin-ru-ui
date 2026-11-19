import { RU_STRINGS } from "../locales/ru";

const ATTRS = ["aria-label", "title", "placeholder", "alt"] as const;
const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "TEXTAREA",
  "INPUT",
  "SELECT",
  "CODE",
  "PRE",
  "KBD",
  "SAMP",
]);
const ORIG_ATTR = "data-bb-ru-orig";
const ORIG_HTML_ATTR = "data-bb-ru-orig-html";
const MARK_ATTR = "data-bb-ru";
const INLINE_OK = new Set(["CODE", "KBD", "SAMP", "SPAN", "STRONG", "EM", "B", "I", "A"]);

let exactMap: Map<string, string> | null = null;

function getExactMap(): Map<string, string> {
  if (exactMap) return exactMap;
  const entries = Object.entries(RU_STRINGS).sort(
    (a, b) => b[0].length - a[0].length,
  );
  exactMap = new Map(entries);
  return exactMap;
}

function translateText(value: string): string | null {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const mapped = getExactMap().get(trimmed);
  if (mapped === undefined) return null;
  if (trimmed === value) return mapped;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  return `${leading}${mapped}${trailing}`;
}

function shouldSkip(node: Node): boolean {
  let el: Element | null =
    node.nodeType === Node.ELEMENT_NODE
      ? (node as Element)
      : node.parentElement;
  while (el) {
    if (SKIP_TAGS.has(el.tagName)) return true;
    if (el.getAttribute("contenteditable") === "true") return true;
    if (el.closest?.("[data-bb-ru-skip]")) return true;
    // Keep agent transcript / composer body in the original language.
    if (
      el.getAttribute("data-message-role") ||
      el.getAttribute("data-testid") === "composer" ||
      el.classList?.contains("cm-editor")
    ) {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}

function translateTextNode(node: Text): void {
  if (shouldSkip(node)) return;
  const raw = node.nodeValue;
  if (raw === null || raw.trim() === "") return;
  const parent = node.parentElement;
  if (!parent) return;
  if (parent.childNodes.length === 1) {
    if (!parent.hasAttribute(ORIG_ATTR)) {
      parent.setAttribute(ORIG_ATTR, raw);
    }
    const source = parent.getAttribute(ORIG_ATTR) ?? raw;
    const next = translateText(source);
    if (next !== null && next !== node.nodeValue) {
      node.nodeValue = next;
      parent.setAttribute(MARK_ATTR, "1");
    }
    return;
  }
  const next = translateText(raw);
  if (next !== null && next !== raw) {
    node.nodeValue = next;
  }
}

function translateElementAttrs(el: Element): void {
  if (shouldSkip(el)) return;
  for (const name of ATTRS) {
    const current = el.getAttribute(name);
    if (current === null || current.trim() === "") continue;
    const key = `${ORIG_ATTR}-${name}`;
    if (!el.hasAttribute(key)) {
      el.setAttribute(key, current);
    }
    const source = el.getAttribute(key) ?? current;
    const next = translateText(source);
    if (next !== null && next !== current) {
      el.setAttribute(name, next);
      el.setAttribute(MARK_ATTR, "1");
    }
  }
}

/** Translate labels that mix text with <code>/inline nodes (e.g. Run `claude` …). */
function translateMixedElement(el: Element): boolean {
  if (shouldSkip(el)) return false;
  if (el.childNodes.length <= 1) return false;
  for (const child of Array.from(el.childNodes)) {
    if (child.nodeType === Node.TEXT_NODE) continue;
    if (child.nodeType === Node.ELEMENT_NODE) {
      const childEl = child as Element;
      if (!INLINE_OK.has(childEl.tagName)) return false;
      if (childEl.childNodes.length !== 1 || childEl.firstChild?.nodeType !== Node.TEXT_NODE) {
        return false;
      }
      continue;
    }
    return false;
  }
  const sourceKey = el.hasAttribute(ORIG_HTML_ATTR)
    ? (el.textContent ?? "")
    : (el.textContent ?? "");
  // Prefer original English textContent if we already rewrote HTML once.
  const english = el.getAttribute("data-bb-ru-text") ?? sourceKey;
  const trimmed = english.trim();
  if (trimmed === "") return false;
  const mapped = getExactMap().get(trimmed);
  if (mapped === undefined) return false;
  if (!el.hasAttribute(ORIG_HTML_ATTR)) {
    el.setAttribute(ORIG_HTML_ATTR, el.innerHTML);
    el.setAttribute("data-bb-ru-text", trimmed);
  }
  el.textContent = mapped;
  el.setAttribute(MARK_ATTR, "1");
  return true;
}

function walk(root: Node): void {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text);
    return;
  }
  if (root.nodeType === Node.ELEMENT_NODE) {
    const el = root as Element;
    if (SKIP_TAGS.has(el.tagName)) return;
    translateElementAttrs(el);
    if (translateMixedElement(el)) return;
    const children = Array.from(el.childNodes);
    for (const child of children) walk(child);
  }
}

function restore(root: ParentNode = document.body): void {
  root.querySelectorAll(`[${ORIG_HTML_ATTR}]`).forEach((el) => {
    const html = el.getAttribute(ORIG_HTML_ATTR);
    if (html !== null) el.innerHTML = html;
    el.removeAttribute(ORIG_HTML_ATTR);
    el.removeAttribute("data-bb-ru-text");
    el.removeAttribute(MARK_ATTR);
  });
  root.querySelectorAll(`[${ORIG_ATTR}]`).forEach((el) => {
    const orig = el.getAttribute(ORIG_ATTR);
    if (orig !== null && el.childNodes.length === 1 && el.firstChild?.nodeType === Node.TEXT_NODE) {
      el.firstChild.nodeValue = orig;
    }
    el.removeAttribute(ORIG_ATTR);
    el.removeAttribute(MARK_ATTR);
  });
  for (const name of ATTRS) {
    const key = `${ORIG_ATTR}-${name}`;
    root.querySelectorAll(`[${key}]`).forEach((el) => {
      const orig = el.getAttribute(key);
      if (orig !== null) el.setAttribute(name, orig);
      el.removeAttribute(key);
      el.removeAttribute(MARK_ATTR);
    });
  }
}

export type TranslateController = {
  setEnabled: (enabled: boolean) => void;
  dispose: () => void;
};

export function startDomTranslator(
  root: ParentNode = document.body,
  signal?: AbortSignal,
): TranslateController {
  let enabled = true;
  let queued = false;

  const run = () => {
    queued = false;
    if (!enabled || signal?.aborted) return;
    walk(root);
  };

  const schedule = () => {
    if (queued || !enabled || signal?.aborted) return;
    queued = true;
    queueMicrotask(run);
  };

  const observer = new MutationObserver((mutations) => {
    if (!enabled) return;
    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        translateTextNode(mutation.target as Text);
      } else if (mutation.type === "attributes" && mutation.target instanceof Element) {
        translateElementAttrs(mutation.target);
      } else if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => walk(node));
      }
    }
  });

  observer.observe(root, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: [...ATTRS],
  });

  document.documentElement.lang = "ru";
  run();

  const onAbort = () => {
    observer.disconnect();
    restore(root);
    document.documentElement.lang = "en";
  };
  signal?.addEventListener("abort", onAbort, { once: true });

  return {
    setEnabled(next) {
      if (enabled === next) return;
      enabled = next;
      if (!enabled) {
        restore(root);
        document.documentElement.lang = "en";
        return;
      }
      document.documentElement.lang = "ru";
      schedule();
    },
    dispose() {
      observer.disconnect();
      restore(root);
      document.documentElement.lang = "en";
      signal?.removeEventListener("abort", onAbort);
    },
  };
}
