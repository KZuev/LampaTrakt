# LampaTrakt — контекст проекта

## Проект

Репозиторий: `KZuev/LampaTrakt` (публичный).
Основной файл: `trakttv.js` — плагин Trakt.tv для медиа-интерфейса Lampa (3.0+, Maker/ContentRows API).
Общение с пользователем — **на русском**.

Плагин добавляет на главную/категории строки Trakt (Up Next, Watchlist, Recommendations, Calendar), полноэкранные каталоги, scrobbling (отметка просмотренного).

## Текущая версия

**v3.0.25** — Авто-торрент: кликабельная кнопка «Прервать автозапуск» (отмена мышью) + понятный текст подсказки.

## История фиксов

| Версия | Коммит | Суть |
|--------|--------|------|
| v2.9.6 | `2913abc` | Убран `scroll--nopadding` → фикс прыжка постера при фокусе |
| v2.9.7 | `f1968d2` | Отметка серии на `stop`/`ended` когда `progress >= threshold` |
| v2.9.9  | `a0d833f` | Фикс краша `items-line__head` (prefetchMainRows без `displayTitle`) |
| v2.9.10 | `5c12bf0` | Фикс залезания постеров под кнопки фильтра/сортировки в хабах |
| v2.9.11 | `ff91754` | «Мои сериалы»: фикс эндпоинта `/users/hidden/{section}`, секция `dropped` |
| v2.9.12 | `1d22068` | Бейдж даты в Истории; «Мои сериалы» хаб с табами |
| v2.9.13 | `fe95555` | История: серия в названии «Футурама (S01E04)»; фикс навигации |
| v2.9.14–17 | — | Цвет вкладки, счётчик брошенных, прогресс-бар, «Бросить/Возобновить», «Избранное» |
| v2.9.18 | `94a5cf3` | Три бага multiwatch: row cache, recommendations, «Мои сериалы» |
| v2.9.19 | `4cf75c1` | Бейджи «хочу посмотреть» и «дата цифрового релиза» — фиолетовые |
| v2.9.20 | `c60172f` | Галочка на завершённых сериалах через `completedShows` / `aired_episodes` |
| v2.9.21 | `4e0c41d` | Фикс галочек у сериалов в хабах |
| v2.9.22–31 | — | Итерации SVG-иконки бейджа просмотренного |
| v2.9.32 | `d4bd8d7` | Бейджи «просмотрено» и «хочу посмотреть» одного размера |
| v2.9.33 | `c4bb4e7` | Бейджи уменьшены в 1.5× |
| v2.9.34 | `7b26b0b` | Бейдж «Смотрю» + настройки видимости бейджей |
| v2.9.35–37 | — | Итерации стиля бейджа «Смотрю» |
| v3.0.0  | `578fd68` | **Авто-торрент**: автовыбор торрента, раздельные настройки озвучки |
| v3.0.1  | `3cee003` | История: вкладки по датам (`historyHub`, `start_at`/`end_at`) |
| v3.0.2  | `cc32b00` | Фикс навигации в Избранном + группировка годов в фильтрах |
| v3.0.3  | `d5123d7` | Умная группировка годов (2026…2020 раздельно, потом пятилетками) |
| v3.0.4  | `9caeabb` | Фикс scrobbling: Player `'destroy'` вместо `'stop'/'ended'` |
| v3.0.5  | `c7380d7` | Диагностический лог попыток scrobbling |
| v3.0.6  | `22f9d5c` | UI rename: «Magic Play» → «Авто-торрент» |
| v3.0.7  | `c79dabc` | Code rename: `_magic*` → `_at*`; авто-миграция storage |
| v3.0.8  | `188e06b` | Фикс Script error: `_atMigrateStorage` в scope модуля |
| v3.0.9–11 | `5e6eed6` | Авто-торрент: оверлей со спиннером и живым статусом |
| v3.0.12 | `806fb42` | «Авто торрент» → «Авто-торрент» (пунктуация) |
| v3.0.13–14 | `9b8a11b` | Расширенная диагностика scrobbling; лог в title (Apple TV) |
| v3.0.15 | `c564d61` | Дата в логе отметок: `MM-DD HH:mm:ss` |
| v3.0.16 | `428ce08` | Диагностика регистрации слушателей `init_done [tl:X,pl:X]` |
| v3.0.17 | `6ac080b` | Фикс потери лога при рестарте; `min:X` в `timeline_low_pct` |
| v3.0.18 | `d186133` | ~~Убран `_isPlayerActive` guard~~ — ОШИБКА, вызвала ложные отметки |
| v3.0.19 | `aad20d7` | **Фикс scrobbling**: вернуть guard + 500 мс delay на `'destroy'` |
| v3.0.20 | `b994c03` | Клик на версию в настройках открывает README.md из репозитория |
| v3.0.21 | `cf56e97` | Полноценный Markdown-рендерер (таблицы, списки, код-блоки) |
| v3.0.22 | `08eb698` | README-окно: `size: 'large'`, стиль как нативный диалог Lampa |
| v3.0.23 | `7986e22` | Авто-торрент: сброс/восстановление фильтра торрентов Lampa перед автовыбором |
| v3.0.24 | `54d8590` | Авто-торрент: перебор торрентов при неудаче, 30с/попытку, отмена Назад, настройка числа попыток |
| v3.0.25 | TBD | Авто-торрент: кликабельная кнопка «Прервать автозапуск» (отмена мышью) + текст подсказки |

## Архитектура scrobbling

**Пути отметки:**
- **Path A (основной)**: `Lampa.Timeline.listener 'update'` → `processTimelineUpdate` → при `progress >= threshold && _isPlayerActive` → `finish(media)` → `addToHistory`
- **Path B (резервный)**: `Lampa.Player.listener 'destroy'` → `setTimeout(500ms)` → `routeFinishIntent` (только если Path A не сработал)

**`_isPlayerActive` guard** — НЕ ТРОГАТЬ:
- Защищает от ложных отметок когда `Lampa.Timeline` шлёт `'update'` при открытии списка файлов торрента (с сохранённым прогрессом ≥ порога)
- Снимается в `routeFinishIntent` (при `'destroy'`)
- 500 мс задержка в Path B нужна для Apple TV: `destroy` → `_isPlayerActive=false` → Timeline `'update'` 100% приходит ПОСЛЕ; задержка позволяет Timeline сработать пока флаг ещё true

**`_watchMarkLog`**: массив до 50 записей, хранится в `Lampa.Storage('trakt_watch_log')`, восстанавливается при `watching.init` до первого вызова `_watchLogAdd`. Просматривается через Настройки → Trakt.TV → Отладка → История отметок.

## Авто-торрент — архитектура

1. Кнопка добавляется в `.buttons--container` только при `trakt_at_enabled: true`.
2. **Сериал**: следующий эпизод через `/search/tmdb/{id}?type=show` → `/shows/{traktId}/progress/watched` → `next_episode`.
3. **Сброс фильтра** перед открытием `torrents`: `_atSaveAndClearTorrentFilter()` сохраняет и очищает `torrents_filter` + `torrents_filter_data`, иначе ручной фильтр качества Lampa скрыл бы часть торрентов (например 4K) ещё до `render`-событий. `_atRestoreTorrentFilter()` возвращает фильтр после выбора торрента (идемпотентно).
4. **Сортировка кандидатов** (`Lampa.Listener.follow('torrent', ...)`): `render`-события собираются 400 мс, затем `_atSortTorrentCandidates` строит ВЕСЬ отсортированный список (сезон / озвучка / качество / популярность) для перебора.
5. **Перебор + автовыбор файла** (`Lampa.Listener.follow('torrent_file', ...)`): `_atTryCurrentTorrent` открывает кандидата с таймаутом `AT_ATTEMPT_MS` (30с). Успех — нужный `season`/`episode` (сериал) или лучший файл (фильм) → `_atSucceed()` + `hover:enter`. Неудача (пустой `list_open`, нет нужной серии после `AT_SETTLE_MS`=2.5с, или 30с-таймаут) → `_atTorrentFailed()` → `Lampa.Controller.back()` закрывает модал → ветка `list_close` с флагом `_atRetrying` открывает следующего кандидата. Лимит — `_atMaxAttempts()` (`trakt_at_max_attempts`: all/5/3).

**Прерываемость:** слой-контроллер `trakt_at` (`_atControllerEnable/Disable`, в Lampa нет `Controller.remove` — возврат через `toggle('content')`) с `back: _atCancel` активен между попытками; во время модала Назад отменяет через `list_close` (не `_atRetrying`). `Lampa.Listener.follow('activity', destroy/torrents)` ловит выход с экрана торрентов до выбора. Для мыши/касания в оверлее есть кликабельная кнопка `.trakt-at-overlay__cancel` (`pointer-events:auto` при `pointer-events:none` у оверлея) → `_atCancel`; `_atCancel` закрывает открытый модал (`.modal`) явно, т.к. клик его не закрывает. `_atCancel/_atFailAll` чистят таймеры/состояние, восстанавливают фильтр, прячут оверлей.

**Ключевые паттерны:**
- `$(btn).on('hover:enter', ...)` — обязательно jQuery (меню «Смотреть» активирует через jQuery trigger)
- `_atNormalizeCard(card)` — нормализует вложенные контейнеры
- `_atSearchString(card)` — строит поисковую строку по `parse_lang`
- `_atTitleMatchesSeason(title, season)` — паттерны из фильтра Lampa
- `_atIsDubbed(title)` — паттерн озвучки (voice p==1)
- `_atHasRusAudio(e)` — `languages: ru` или ключевые слова
- `_atSaveAndClearTorrentFilter()` / `_atRestoreTorrentFilter()` — бэкап/сброс/возврат фильтра торрентов; восстановление на всех путях тимдауна (выбор сделан, `list_close`, таймаут, ошибка API, отмена)
- Состояние перебора: `_atTorrentCandidates/_atTorrentIndex/_atAttemptTimer/_atSettleTimer/_atRetrying`; `_atResetState()` — полный сброс

## Бейджи на постерах — архитектура

- `_watchedCache`: `{ movies, shows, completedShows, watchingShows, moviesWatchedAt }` — три API параллельно
- `renderWatchedBadge` — галочка для фильмов (`movies`) и завершённых сериалов (`completedShows`)
- `renderWatchingBadge` — полукруг для сериалов в процессе (`shows - completedShows - droppedShows`)
- `renderWatchlistBadge` — закладка; пропускает сериалы из `watchingShows`
- `applyBadgeVisibility()` — CSS-скрытие по настройкам `trakt_badge_completed/watching/watchlist`

## Важные детали

**Lampa source:**
- `/tmp/lampa-source` — может отсутствовать в новой сессии; клонировать при надобности
- `cf.lampa.mx` недоступен из облачной сессии (403 `host_not_allowed`)

**Механика Lampa (не трогать):**
- `Line.create()` удаляет `.items-line__head` если `!data.title && !has(Icon)` → `prefetchMainRows` должен передавать `displayTitle`
- `more.onVisible` делает `find('.items-line__head').append` без проверки null при `total_pages > 1`
- `Lampa.Player.listener` НЕ отправляет `'stop'`/`'ended'` — только `'start'`, `'destroy'`, `'create'`, `'ready'`, `'external'`
- Timeline `'update'` срабатывает: (1) каждые 2 мин через `saveTimeLoop`, (2) при закрытии плеера через `destroy()` → `saveTimeView()`
- `torrent_file` event `list_open` отправляется ДО `Arrays.extend` файлов — `season`/`episode` ещё не проставлены; слушать `render`
- `Element.prototype.on` в Lampa = `addEventListener`; для jQuery-событий (`hover:enter`) нужно `$(el).on(...)`

**Хуки Agentfy (`.claude/settings.json`):**
- Хуки: `SessionStart`, `PermissionRequest`, `Stop`, `Notification` → POST на `https://webhook.getagentfy.com`
- Токен **не в репо** (репо публичный!) — берётся из env `AGENTFY_TOKEN`, без него `exit 0`
- Проверка в новой сессии: `echo ${AGENTFY_TOKEN:+задан}`

**Git:**
- PR не создавать без явной просьбы
- Пушить в `origin/main` и синхронизировать сессионную ветку:
  `git push origin HEAD:main && git push origin HEAD:SESSION_BRANCH --force`
  где `SESSION_BRANCH` = `git branch --show-current`

## Ветки

- `main` — основная, всегда актуальна
- Текущая рабочая ветка сессии: `claude/agentfy-hooks-check-cvf7vu`
