/**
 * Exact English UI → Russian map for bb chrome.
 * Longer phrases first (sorted at runtime). Prefer exact full-string matches.
 */
export const RU_STRINGS: Record<string, string> = {
  // Settings nav
  General: "Общие",
  Providers: "Провайдеры",
  "AI services": "AI-сервисы",
  Appearance: "Оформление",
  Keyboard: "Клавиатура",
  Browser: "Браузер",
  Files: "Файлы",
  Projects: "Проекты",
  Machines: "Машины",
  Mobile: "Мобильные",
  "Environment variables": "Переменные окружения",
  Updates: "Обновления",
  "Installed plugins": "Установленные плагины",
  "Plugin marketplaces": "Маркетплейсы плагинов",
  Experiments: "Эксперименты",
  Community: "Сообщество",
  PLUGINS: "ПЛАГИНЫ",
  Plugins: "Плагины",

  // Plugin names in settings sidebar (display names)
  "ACP providers": "Провайдеры ACP",
  "Ask User Question": "Спросить пользователя",
  "bb account": "Аккаунт bb",
  "bb connect": "bb connect",
  "BB guide": "Справка bb",
  "Claude Code provider": "Провайдер Claude Code",
  "Codex provider": "Провайдер Codex",
  "Concurrency limit": "Лимит параллельности",
  "Custom instructions": "Свои инструкции",
  Git: "Git",
  "GitHub PR Status": "Статус GitHub PR",
  "Keep Awake": "Не засыпать",
  "Provider retry": "Повтор провайдера",
  "Provider usage": "Использование провайдера",
  "Push notifications": "Push-уведомления",
  "Russian UI": "Русский интерфейс",

  // Settings → General (continued)
  "Threads & editing": "Треды и редактирование",
  "Navigate to threads on creation": "Открывать тред при создании",
  "Default thread followup behavior": "Поведение ответа в треде по умолчанию",
  Steer: "Перенаправить",
  Queue: "В очередь",
  "Thread archive confirmation": "Подтверждение архивации треда",
  "Show messages from before a context clear":
    "Показывать сообщения до очистки контекста",
  "Resume interrupted threads after a restart":
    "Возобновлять прерванные треды после перезапуска",
  "Summarize shell commands": "Суммировать команды оболочки",
  "Setup guide": "Мастер настройки",
  "Show setup guide": "Показать мастер настройки",
  "What Enter does in the prompt box while the thread runs.":
    "Что делает Enter в поле промпта, пока тред выполняется.",
  "Ask before archiving a thread with unarchived child threads.":
    "Спрашивать перед архивацией треда с неархивированными дочерними тредами.",
  "Earlier messages stay in the thread for you to read. The agent doesn't see them.":
    "Ранние сообщения остаются в треде для чтения. Агент их не видит.",
  "Resume threads interrupted by an update, crash or restart, and tell the agent what was cut off. Queued messages send afterward.":
    "Возобновлять треды, прерванные обновлением, сбоем или перезапуском, и сообщать агенту, что оборвалось. Сообщения из очереди отправятся после.",
  "Show short summaries for commands that read, list, or search files. Turn off to show command text and let you expand each command to view its output.":
    "Показывать краткие сводки для команд чтения, списка и поиска файлов. Выключите, чтобы видеть текст команды и раскрывать вывод.",
  "Walk through connecting an agent, adding projects, plugins, and devices again.":
    "Снова пройти подключение агента, добавление проектов, плагинов и устройств.",
  Links: "Ссылки",
  "Open links in the in-app browser": "Открывать ссылки во встроенном браузере",
  "Open web links inside bb.": "Открывать веб-ссылки внутри bb.",
  "Rewrite localhost links": "Переписывать localhost-ссылки",
  "When enabled, localhost URLs are rewritten to use the same host or IP address you use to open BB. For example: http://localhost:3000/ → http://127.0.0.1:3000/":
    "Если включено, localhost URL переписываются на тот же хост или IP, с которого открыт BB. Например: http://localhost:3000/ → http://127.0.0.1:3000/",
  "When enabled, localhost URLs are rewritten to use the same host or IP address you use to open BB. For example: http://localhost:3000/ -> http://127.0.0.1:3000/":
    "Если включено, localhost URL переписываются на тот же хост или IP, с которого открыт BB. Например: http://localhost:3000/ → http://127.0.0.1:3000/",
  "App links": "Ссылки приложений",
  "BB asks before opening links like linear:// in another app. Approvals stay on this device and aren't synced.":
    "BB спрашивает перед открытием ссылок вроде linear:// в другом приложении. Разрешения остаются на этом устройстве и не синхронизируются.",
  "No apps are always allowed.": "Нет приложений с постоянным разрешением.",
  Terminals: "Терминалы",
  "Copy on select": "Копировать при выделении",
  "Automatically copy selected terminal text and show a notification. Does not affect text elsewhere in the app. Linux middle-click paste uses the primary selection independently.":
    "Автоматически копировать выделенный текст терминала и показывать уведомление. Не влияет на текст в остальном приложении. Вставка средней кнопкой мыши в Linux использует primary selection отдельно.",
  "New branch prefix": "Префикс новой ветки",
  "bb puts this in front of every branch it creates for a worktree, such as bb/fix-login-flow-thr_ab12cd34ef. Leave it empty for no prefix.":
    "bb ставит это перед каждой веткой, которую создаёт для worktree, например bb/fix-login-flow-thr_ab12cd34ef. Оставьте пустым, если префикс не нужен.",
  "Command line": "Командная строка",
  "bb CLI": "bb CLI",
  "Install the bb CLI for use outside bb. You can control bb from any terminal, and so can agents outside bb, such as Claude Code or Codex. Threads in bb already have it.":
    "Установите bb CLI для использования вне bb. Управлять bb можно из любого терминала — так же и агенты вне bb, например Claude Code или Codex. В тредах bb CLI уже есть.",
  Install: "Установить",
  Skills: "Скиллы",
  "bb CLI skills": "Скиллы bb CLI",
  "Not installed": "Не установлены",
  "Install them into ~/.agents/skills and ~/.claude/skills so agents outside bb can use the bb CLI.":
    "Установите их в ~/.agents/skills и ~/.claude/skills, чтобы агенты вне bb могли использовать bb CLI.",
  "Voice input": "Голосовой ввод",
  Microphone: "Микрофон",
  "Used for prompt voice input.": "Используется для голосового ввода промпта.",
  "System default": "Системный по умолчанию",
  "Privacy & diagnostics": "Конфиденциальность и диагностика",
  "Streamer mode": "Режим стримера",
  "Hide the custom models from config.json in every model picker, so a screen share does not show them.":
    "Скрывать пользовательские модели из config.json во всех списках моделей, чтобы при демонстрации экрана они не были видны.",
  "Share anonymous usage data": "Отправлять анонимную статистику",
  "Send anonymous usage data, such as app starts, setup progress and feature use, to help improve bb. Turning this off takes effect immediately for this server.":
    "Отправлять анонимные данные об использовании (запуски, прогресс настройки, функции), чтобы улучшать bb. Отключение действует сразу для этого сервера.",
  "Show diagnostic events": "Показывать диагностические события",
  "Show provider environment resolution and unhandled provider events for troubleshooting.":
    "Показывать разрешение окружения провайдера и необработанные события для отладки.",

  // Providers
  "Choose which agents you use in BB. Drag to reorder them in provider pickers.":
    "Выберите агентов для BB. Перетаскивайте, чтобы менять порядок в списках провайдеров.",
  "По умолчанию": "По умолчанию",
  Configuration: "Конфигурация",
  "Allow faster service tiers": "Разрешить более быстрые тарифы сервиса",
  "Turn this off to use the default service tier for all new turns, including those from queued messages and automations.":
    "Выключите, чтобы для всех новых ходов использовать тариф по умолчанию, включая очередь и автоматизации.",
  "Release idle agent sessions": "Освобождать простаивающие сессии агентов",
  "Stop agents that have been idle this long to free memory. Threads keep their history and pick up on your next message. Checked every 5 minutes.":
    "Останавливать агентов после указанного простоя, чтобы освободить память. История тредов сохраняется, работа продолжится со следующего сообщения. Проверка каждые 5 минут.",
  "30 minutes": "30 минут",
  "15 minutes": "15 минут",
  "60 minutes": "60 минут",
  "5 minutes": "5 минут",
  "Collapse finished turns": "Сворачивать завершённые ходы",
  "When a turn finishes, fold its work into one Worked for row and keep the final answer visible. Turn off collapsing to keep every step of a finished turn visible.":
    "Когда ход завершён, свернуть работу в одну строку «Worked for» и оставить видимым финальный ответ. Выключите, чтобы видеть все шаги завершённого хода.",

  // AI services
  "Choose services for thread titles, commit messages, and voice input. Automatic prefers bb cloud, then other available services. A service you choose stays selected.":
    "Выберите сервисы для заголовков тредов, сообщений коммитов и голосового ввода. «Автоматически» предпочитает bb cloud, затем другие доступные. Выбранный сервис сохраняется.",
  "Thread titles": "Заголовки тредов",
  "Branch names follow the title. Using Codex.":
    "Имена веток следуют заголовку. Используется Codex.",
  "Commit messages": "Сообщения коммитов",
  "Written when you use the Commit action. Using Codex.":
    "Пишутся при действии Commit. Используется Codex.",
  "Transcribes the microphone in the composer. Using Codex.":
    "Распознаёт микрофон в композиторе. Используется Codex.",
  Test: "Проверить",
  Automatic: "Автоматически",

  // Appearance
  Theme: "Тема",
  System: "Системная",
  Light: "Светлая",
  Dark: "Тёмная",
  Palette: "Палитра",
  "Change the app's colors. Themes can be contributed by plugins.":
    "Меняет цвета приложения. Темы могут добавлять плагины.",
  "Favicon color": "Цвет favicon",
  "Color of the bb mark in browser tabs and the dock. Matches the palette by default.":
    "Цвет знака bb во вкладках браузера и в dock. По умолчанию совпадает с палитрой.",
  "Fade inactive splits": "Приглушать неактивные панели",
  "Dim panes that are not focused when the window is split.":
    "Приглушать панели без фокуса при разделении окна.",
  Interface: "Интерфейс",
  Navigation: "Навигация",
  "What draws New thread, Plugins, Skills, and plugin pages in the sidebar.":
    "Что рисует «Новый тред», плагины, скиллы и страницы плагинов в боковой панели.",
  "Sidebar thread list": "Список тредов в боковой панели",
  Composer: "Композитор",
  "The prompt box in threads, the New thread screen, and message editors.":
    "Поле промпта в тредах, на экране нового треда и в редакторах сообщений.",
  "Sidebar footer": "Нижняя часть боковой панели",
  "Drag to reorder.": "Перетащите, чтобы изменить порядок.",
  "Mobile apps": "Мобильные приложения",
  "Report a bug": "Сообщить об ошибке",

  // Keyboard
  "Keyboard shortcuts": "Горячие клавиши",
  "Click a shortcut, then press its new keys. Changes sync to every bb window.":
    "Нажмите сочетание, затем задайте новые клавиши. Изменения синхронизируются во всех окнах bb.",
  "Reset all": "Сбросить все",
  "Show keyboard hints when holding CMD / Control":
    "Показывать подсказки при удержании CMD / Control",
  "Show shortcut badges after holding Command or Control.":
    "Показывать значки сочетаний после удержания Command или Control.",
  "Search shortcuts": "Поиск сочетаний",
  "Start a thread in the active project.":
    "Создать тред в активном проекте.",
  "Search threads": "Поиск тредов",
  "Search threads in the quick palette.":
    "Искать треды в быстрой палитре.",
  "Rename thread": "Переименовать тред",
  "Rename the focused thread.": "Переименовать выбранный тред.",
  "Archive thread": "Архивировать тред",
  "Archive the focused thread.": "Архивировать выбранный тред.",
  "Mark thread read or unread": "Прочитано / непрочитано",
  "Mark the focused thread read or unread.":
    "Отметить выбранный тред прочитанным или нет.",
  "Pin or unpin thread": "Закрепить / открепить тред",
  "Pin or unpin the focused thread.":
    "Закрепить или открепить выбранный тред.",
  "Previous thread": "Предыдущий тред",
  "Open the previous visible sidebar thread.":
    "Открыть предыдущий видимый тред в боковой панели.",
  "Next thread": "Следующий тред",
  "Open the next visible sidebar thread.":
    "Открыть следующий видимый тред в боковой панели.",
  "Open thread 1": "Открыть тред 1",
  "Open visible sidebar thread 1.":
    "Открыть видимый тред 1 в боковой панели.",
  "Open thread 2": "Открыть тред 2",
  "Open visible sidebar thread 2.":
    "Открыть видимый тред 2 в боковой панели.",
  Defaults: "По умолчанию",
  Web: "Web",
  Desktop: "Desktop",
  Unassigned: "Не назначено",

  // Mobile
  "Use bb from your phone": "Используйте bb с телефона",
  "Accessing bb from your phone": "Доступ к bb с телефона",
  "Choose how your devices reach this bb server.":
    "Выберите, как устройства будут достучаться до этого сервера bb.",
  "Use a private getbb.app address. Sign in to your bb account to use bb connect":
    "Используйте приватный адрес getbb.app. Войдите в аккаунт bb, чтобы пользоваться bb connect",
  "Set up bb connect": "Настроить bb connect",
  iOS: "iOS",
  "Available through TestFlight": "Доступно через TestFlight",
  "Install TestFlight, then join the bb beta to install the app on your iPhone.":
    "Установите TestFlight, затем вступите в bb beta, чтобы поставить приложение на iPhone.",
  "Join iOS TestFlight": "Присоединиться к iOS TestFlight",
  Android: "Android",
  "Direct download for Android phones":
    "Прямая загрузка для телефонов Android",
  "Download the APK and open it on your phone to install. Allow installation from your browser if prompted. Google Play access is under review. For now, return here for updates.":
    "Скачайте APK и откройте на телефоне для установки. При запросе разрешите установку из браузера. Доступ в Google Play на проверке. Пока обновления берите здесь.",
  Version: "Версия",
  Updated: "Обновлено",
  "Download size": "Размер загрузки",
  "Download Android APK": "Скачать Android APK",

  // Environment variables
  "Global variables are available to BB-managed processes on every connected machine. Project variables override them for work in that project.":
    "Глобальные переменные доступны процессам BB на каждой подключённой машине. Переменные проекта перекрывают их для работы в этом проекте.",
  "Showing variables for": "Показаны переменные для",
  "All projects": "Все проекты",
  "Not available": "Недоступно",
  "Automatic · GitHub is not logged in. Run gh auth login on the server, or add your own GH_TOKEN.":
    "Автоматически · GitHub не авторизован. Выполните gh auth login на сервере или добавьте свой GH_TOKEN.",
  "Add variable": "Добавить переменную",
  "Import from .env": "Импорт из .env",
  "Save variables": "Сохранить переменные",

  // Experiments
  "Early features that are off by default. Opt in to try them.":
    "Ранние функции по умолчанию выключены. Включите, чтобы попробовать.",
  "Become an early adopter": "Стать ранним участником",
  "Get new experiments turned on by default sooner and help us try out features before they reach everyone. Turn this off anytime; experiments you switch yourself keep your choice.":
    "Новые эксперименты будут включаться раньше по умолчанию — помогите опробовать функции до общего релиза. Можно выключить в любой момент; то, что вы переключили сами, сохранится.",
  "Early adopter": "Ранний доступ",
  "Lower agent CPU priority": "Понизить приоритет CPU агентов",
  "Keep bb responsive when agents saturate the CPU by running their processes at a lower priority.":
    "Сохранять отзывчивость bb, когда агенты загружают CPU: их процессы идут с пониженным приоритетом.",
  "Compact before resuming expired sessions":
    "Уплотнять контекст перед возобновлением просроченных сессий",
  "When an idle thread holds at least 100k tokens and its provider session expired, compact before the next turn so resume stays under the context limit.":
    "Если простойный тред держит ≥100k токенов и сессия провайдера истекла, уплотнить контекст перед следующим ходом, чтобы уложиться в лимит.",
  "Faster styles inside plugins": "Быстрее стили внутри плагинов",
  "Load each plugin's stylesheet so the browser can skip it when unused, instead of injecting CSS text.":
    "Загружать stylesheet плагина так, чтобы браузер мог пропускать неиспользуемый, вместо вставки CSS-текста.",
  "Server move": "Перенос сервера",
  "Move the bb server to another machine from Settings → Machines.":
    "Перенести сервер bb на другую машину из Настройки → Машины.",
  "Plugin updates": "Обновления плагинов",
  "List plugins with updates on the Updates page and install them from there.":
    "Показывать плагины с обновлениями на странице «Обновления» и ставить их оттуда.",
  "Keep machines connected through network drops":
    "Держать машины на связи при кратких обрывах сети",
  "When a machine's connection to the server drops for under 30 seconds, keep it listed as connected and resume automatically.":
    "Если связь машины с сервером пропала меньше чем на 30 секунд, оставлять её подключённой и возобновлять автоматически.",
  "Skip notifications for the thread you're viewing":
    "Не уведомлять о просматриваемом треде",
  "Don't show a system notification for a thread that is open and focused in this window.":
    "Не показывать системное уведомление для треда, который открыт и в фокусе в этом окне.",
  "Thread context card": "Карточка контекста треда",
  "Show a thread's changes, pull request, and parent and child threads in a card next to the transcript.":
    "Показывать изменения, pull request, родительские и дочерние треды в карточке рядом с транскриптом.",
  "Background database checkpoints": "Фоновые checkpoint базы данных",
  "Copy recent writes into bb's database files on a background thread so a crash loses less work.":
    "Копировать недавние записи в файлы БД bb в фоне, чтобы при сбое терялось меньше работы.",

  // Common chrome
  Settings: "Настройки",
  Search: "Поиск",
  Cancel: "Отмена",
  Save: "Сохранить",
  Delete: "Удалить",
  Remove: "Удалить",
  Rename: "Переименовать",
  Create: "Создать",
  Close: "Закрыть",
  Back: "Назад",
  Next: "Далее",
  Done: "Готово",
  Apply: "Применить",
  Enable: "Включить",
  Disable: "Выключить",
  Enabled: "Включено",
  Disabled: "Выключено",
  Active: "Активные",
  Archived: "Архив",
  Archive: "Архивировать",
  Unarchive: "Разархивировать",
  Pin: "Закрепить",
  Unpin: "Открепить",
  More: "Ещё",
  Filter: "Фильтр",
  Refresh: "Обновить",
  Retry: "Повторить",
  Stop: "Остановить",
  Continue: "Продолжить",
  Confirm: "Подтвердить",
  Loading: "Загрузка",
  "Loading…": "Загрузка…",
  Error: "Ошибка",
  Warning: "Предупреждение",
  New: "Новый",
  Open: "Открыть",
  Edit: "Изменить",
  Copy: "Копировать",
  Paste: "Вставить",
  Cut: "Вырезать",
  Undo: "Отменить",
  Redo: "Повторить",
  Yes: "Да",
  No: "Нет",
  All: "Все",
  None: "Нет",
  Default: "По умолчанию",
  Advanced: "Дополнительно",
  About: "О программе",
  Help: "Справка",
  Documentation: "Документация",
  Feedback: "Обратная связь",
  "Sign in": "Войти",
  "Sign out": "Выйти",
  Account: "Аккаунт",
  Language: "Язык",
  Notifications: "Уведомления",
  Privacy: "Конфиденциальность",

  // Threads / projects
  Threads: "Треды",
  Thread: "Тред",
  "New thread": "Новый тред",
  "Create thread": "Создать тред",
  Project: "Проект",
  Environment: "Окружение",
  Environments: "Окружения",
  Machine: "Машина",
  Provider: "Провайдер",
  Model: "Модель",
  Models: "Модели",
  Skill: "Скилл",
  Plugin: "Плагин",
  Marketplace: "Маркетплейс",
  Automation: "Автоматизация",
  Automations: "Автоматизации",
  Workflow: "Воркфлоу",
  Workflows: "Воркфлоу",
  Terminal: "Терминал",
  Prompt: "Промпт",
  Agent: "Агент",
  Agents: "Агенты",
  Attachment: "Вложение",
  Attachments: "Вложения",
  Artifact: "Артефакт",
  Artifacts: "Артефакты",
  Sidebar: "Боковая панель",
  Home: "Главная",
  Homepage: "Главная",
  Unread: "Непрочитанные",
  Pinned: "Закреплённые",
  Sections: "Секции",
  Section: "Секция",
  Status: "Статус",
  Compact: "Уплотнить",
  "Clear context": "Очистить контекст",
  Fork: "Форкнуть",
  Spawn: "Создать",
  "Pull request": "Pull request",
  Diff: "Diff",
  Changes: "Изменения",
  Commit: "Коммит",
  Branch: "Ветка",
  Worktree: "Worktree",

  // Empty / status
  "No threads": "Нет тредов",
  "No projects": "Нет проектов",
  "No results": "Нет результатов",
  "Nothing here": "Здесь пока пусто",
  "Something went wrong": "Что-то пошло не так",
  "Try again": "Попробуйте снова",

  // Provider usage popover
  "Run `claude` on the machine to sign in.":
    "Выполните `claude` на машине, чтобы войти.",
  "Run claude on the machine to sign in.":
    "Выполните claude на машине, чтобы войти.",
  "Plan usage": "Использование плана",
  Pro: "Pro",

  // Plugin detail pages
  "Plugin details": "Сведения о плагине",
  On: "Вкл",
  Off: "Выкл",
  "Question timeout": "Таймаут вопроса",
  "How long a question card stays open waiting for your answer.":
    "Как долго карточка вопроса ждёт ваш ответ.",
  "Let any provider ask the user a multiple-choice question, the way Claude Code's AskUserQuestion does natively.":
    "Позволяет любому провайдеру задать пользователю вопрос с вариантами ответа, как AskUserQuestion в Claude Code.",

  // ACP providers
  "A JSON array of ACP agents to add. Each entry needs id, displayName and command; see the guide for the optional fields.":
    "JSON-массив ACP-агентов для добавления. У каждой записи нужны id, displayName и command; опциональные поля — в руководстве.",
  "Agent registry": "Реестр агентов",
  "Agents from the official ACP registry. Adding one makes it a provider in the thread composer; it runs through npx or uvx on the machine that hosts the thread.":
    "Агенты из официального реестра ACP. Добавление делает их провайдером в композиторе треда; запуск через npx или uvx на машине треда.",
  "Search agents": "Поиск агентов",
  "Manual install": "Ручная установка",
  Add: "Добавить",
  "ACP wrapper for Amp - the frontier coding agent":
    "ACP-обёртка для Amp — передового coding-агента",
  "Google's AI coding agent": "AI coding-агент Google",
  "Augment Code's powerful software agent that understands your whole codebase":
    "Мощный software-агент Augment Code, который понимает весь кодовой базы",
  "Autohand Code CLI with native ACP support":
    "Autohand Code CLI со встроенной поддержкой ACP",
  "IBM Bob is your AI-Powered Development Partner":
    "IBM Bob — ваш AI-партнёр по разработке",
  "ACP wrapper for Anthropic's Claude": "ACP-обёртка для Claude от Anthropic",
  "Agent marketplace with 174+ AI capabilities for coding, research, writing, and automation":
    "Маркетплейс агентов со 174+ AI-возможностями для кода, исследований, текстов и автоматизации",

  // Plugin self
  "Translate bb chrome to Russian": "Перевод интерфейса bb на русский",
  "Interface language": "Язык интерфейса",
  Russian: "Русский",
  English: "English",
  "Translate chrome labels": "Переводить подписи интерфейса",
  "When on, common bb chrome strings are shown in Russian. Agent chat content stays as written. Reload is not required.":
    "Если включено, типичные подписи bb показываются на русском. Содержимое чата агента не меняется. Перезагрузка не нужна.",
};
