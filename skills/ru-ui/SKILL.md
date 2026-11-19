---
name: ru-ui
description: "Enable, disable, or check the Russian UI chrome translation plugin (bb ru-ui)."
---

# Russian UI plugin

The `ru-ui` plugin overlays Russian labels on bb chrome (settings, menus,
buttons). It does not change agent chat text.

```sh
bb ru-ui status [--json]
bb ru-ui on
bb ru-ui off
```

Toggle also lives at Settings → Russian UI → Translate chrome labels.
Extend the dictionary in the plugin's `locales/ru.ts`.
