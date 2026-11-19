import { useEffect, useState } from "react";
import {
  definePluginApp,
  useRealtime,
  useSettings,
} from "@get-bb/plugin-sdk/app";
import { startDomTranslator } from "./lib/translate-dom";

const CONFIG_EVENT = "bb-ru-ui:config";

type ConfigDetail = { enabled: boolean };

function publishConfig(enabled: boolean) {
  window.dispatchEvent(
    new CustomEvent<ConfigDetail>(CONFIG_EVENT, { detail: { enabled } }),
  );
}

/** Keeps the content-script translator in sync with plugin settings. */
function LocaleBridge() {
  const { values, isLoading } = useSettings<{ enabled: boolean }>();
  const [liveEnabled, setLiveEnabled] = useState<boolean | null>(null);

  useRealtime("ru-ui-config", (payload: { enabled?: boolean }) => {
    if (typeof payload?.enabled === "boolean") {
      setLiveEnabled(payload.enabled);
    }
  });

  useEffect(() => {
    if (isLoading) return;
    const enabled = liveEnabled ?? values.enabled ?? true;
    publishConfig(enabled);
  }, [isLoading, values.enabled, liveEnabled]);

  return null;
}

function AboutSection() {
  return (
    <p style={{ fontSize: 14, opacity: 0.75, margin: 0 }}>
      Словарь: <code>locales/ru.ts</code>. Покрытие частичное — добавляйте
      строки по мере появления новых экранов. Выключить: тумблер выше или{" "}
      <code>bb ru-ui off</code>.
    </p>
  );
}

export default definePluginApp((app) => {
  app.slots.experimental_appOverlay({
    id: "locale-bridge",
    component: LocaleBridge,
  });

  app.slots.settingsSection({
    id: "about",
    title: "Русский интерфейс",
    description:
      "Переводит подписи chrome bb. Текст чата агента не меняется.",
    component: AboutSection,
  });

  app.contentScripts.register({
    id: "ru-chrome",
    mount({ signal }) {
      const controller = startDomTranslator(document.body, signal);
      const onConfig = (event: Event) => {
        const detail = (event as CustomEvent<ConfigDetail>).detail;
        if (detail && typeof detail.enabled === "boolean") {
          controller.setEnabled(detail.enabled);
        }
      };
      window.addEventListener(CONFIG_EVENT, onConfig, { signal });
      return () => {
        window.removeEventListener(CONFIG_EVENT, onConfig);
        controller.dispose();
      };
    },
  });
});
