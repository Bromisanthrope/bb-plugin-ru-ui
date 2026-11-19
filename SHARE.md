# Как поделиться плагином Russian UI

Плагин лежит в `C:\playground\bb-plugin-ru-ui`. Другим его ставят так:

## 1. Папка / архив (быстро)

1. Отправьте папку `bb-plugin-ru-ui` (или zip).
2. У получателя:

```sh
bb plugin install /path/to/bb-plugin-ru-ui --yes
```

На Windows путь может быть `C:\Users\...\bb-plugin-ru-ui`.

## 2. GitHub / Git (удобно обновлять)

1. Создайте репозиторий и запушьте содержимое плагина.
2. Получатель:

```sh
bb plugin install https://github.com/<you>/bb-plugin-ru-ui
# или фиксированная ветка/тег:
bb plugin install git:https://github.com/<you>/bb-plugin-ru-ui.git@main
```

Обновления: `bb plugin outdated` → `bb plugin update`.

## 3. npm (если опубликуете пакет)

```sh
bb plugin install npm:bb-plugin-ru-ui@^0.1.0
```

## 4. Свой marketplace (для группы)

Опубликуйте `marketplace.json` со ссылкой на плагин; люди добавляют каталог:

```sh
bb marketplace add https://example.com/marketplace.json
bb plugin install ru-ui@your-marketplace
```

Подробности: `bb guide plugins` и Plugin Guide на getbb.app.

**Важно:** плагины — full-trust код. Ставьте только из доверенных источников.
