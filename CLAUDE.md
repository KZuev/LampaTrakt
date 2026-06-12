# LampaTrakt — контекст проекта

## Проект

Репозиторий: `KZuev/LampaTrakt` (публичный).
Основной файл: `trakttv.js` — плагин Trakt.tv для медиа-интерфейса Lampa (3.0+, Maker/ContentRows API).
Общение с пользователем — **на русском**.

Плагин добавляет на главную/категории строки Trakt (Up Next, Watchlist, Recommendations, Calendar), полноэкранные каталоги, scrobbling (отметка просмотренного).

## Текущая версия

**v3.0.0** — Magic Play, в работе.

## История фиксов

| Версия | Коммит | Суть |
|--------|--------|------|
| v2.9.6 | `2913abc` | Убран `scroll--nopadding` → фикс прыжка постера при фокусе |
| v2.9.7 | `f1968d2` | Отметка серии на `stop`/`ended` когда `progress >= threshold` |
| v2.9.8 | `4cabff4` | Восстановление `Base.start` внутри `.then()` (не помогло — краш был не там) |
| v2.9.9  | `a0d833f` | **Настоящий фикс краша** `items-line__head` (см. ниже) |
| —       | `e874ccb` | Хуки Agentfy в `.claude/settings.json` |
| v2.9.10 | `5c12bf0` | Фикс залезания постеров под кнопки фильтра/сортировки в хабах |
| v2.9.11 | `ff91754` | «Мои сериалы»: фикс эндпоинта `/users/hidden/{section}`, добавлена секция `dropped` |
| v2.9.12 | `1d22068` | Бейдж даты в Истории; «Мои сериалы» хаб с табами Активные/Завершённые/Брошенные/Все |
| v2.9.13 | `fe95555` | История: серия в названии «Футурама (S01E04)»; фикс навигации в «Мои сериалы» |
| v2.9.14 | — | Цвет активной вкладки; счётчик Брошенных; прогресс-бар у брошенных; начатые фильмы в Up Next |
| v2.9.15 | — | «Избранное»: фильтры и сортировка (`collectionHub`) |
| v2.9.16 | — | Добавление/удаление из избранного через меню карточки |
| v2.9.17 | — | «Мои сериалы»: кружок остатка, «Бросить/Возобновить» в меню карточки |
| v2.9.18 | `94a5cf3` | Три бага multiwatch: row cache, recommendations без фильтра, «Мои сериалы» скрывается |
| v2.9.19 | `4cf75c1` | Бейджи «хочу посмотреть» и «дата цифрового релиза» — фиолетовые |
| v2.9.20 | `c60172f` | Галочка на завершённых сериалах: `completedShows` Set через `aired_episodes` |
| v2.9.21 | `4e0c41d` | Фикс галочек у сериалов в хабах (Мои сериалы, Избранное и др.) |
| v2.9.22–31 | — | Итерации SVG-иконки бейджа просмотренного (официальный логотип Trakt без рамки) |
| v2.9.32 | `d4bd8d7` | Бейджи «просмотрено» и «хочу посмотреть» одного размера |
| v2.9.33 | `c4bb4e7` | Бейджи уменьшены в 1.5× (2.5em → 1.65em) |
| v2.9.34 | `7b26b0b` | Бейдж «Смотрю» (сериалы в процессе) + настройки видимости бейджей |
| v2.9.35 | `e843653` | Бейдж «Смотрю» — фиолетовый (как у «хочу посмотреть») |
| v2.9.36 | `9b63f41` | Бейдж «Смотрю» — логотип Trakt, кружок с полузаливкой |
| v2.9.37 | `52e5527` | Правая половина кружка «Смотрю» ярче (.28 → .52 opacity) |
| v3.0.0  | `578fd68` | **Magic Play**: автовыбор лучшего торрента в меню «Смотреть» |

## Magic Play (v3.0.0) — архитектура

**Как работает:**
1. Кнопка «Magic Play» появляется в `.buttons--container` (то же место, куда плагины добавляют источники в меню «Смотреть»). Добавляется только при включённой настройке `trakt_magic_enabled` (по умолчанию выключена).
2. **Сериал**: получает следующий эпизод через Trakt API (`/search/tmdb/{id}?type=show` → `/shows/{traktId}/progress/watched` → `next_episode`). Поисковая строка формируется как у нативной кнопки Torrents (по `parse_lang`).
3. **Автовыбор торрента** (`Lampa.Listener.follow('torrent', ...)`): `render`-события собираются, через 400мс выбирается лучший (фильтр по сезону / озвучке / качеству / популярности).
4. **Автовыбор файла** (`Lampa.Listener.follow('torrent_file', ...)`): на `render`-событии ищется файл с нужным `season`/`episode` и триггерится `hover:enter`.

**Ключевые паттерны:**
- `$(btn).on('hover:enter', ...)` — обязательно jQuery, не `btn.on(...)`: меню «Смотреть» активирует через jQuery `trigger`, нативный `addEventListener` не срабатывает
- `_magicNormalizeCard(card)` — нормализует вложенные контейнеры (`movie`, `show`, `card`, `data`)
- `_magicSearchString(card)` — строит поисковую строку по `parse_lang` как `full/start/torrents.js`
- `_magicTitleMatchesSeason(title, season)` — паттерны из фильтра Lampa (диапазоны, одиночные сезоны)
- `_magicIsDubbed(title)` — паттерн из фильтра озвучки Lampa (voice p==1)
- `_magicHasRusAudio(e)` — проверяет `languages: ru` или ключевые слова в названии

**Настройки** (секция «Magic Play» в настройках плагина):
- `trakt_magic_enabled` (trigger, default: false)
- `trakt_magic_quality`: max / 4K / 1080p / 720p
- `trakt_magic_voice_movie`: дубляж / любая русская / не фильтровать
- `trakt_magic_voice_show`: любая русская / дубляж / не фильтровать
- `trakt_magic_popularity`: quality_first / popularity_first

## Бейджи на постерах — архитектура

- `_watchedCache`: `{ movies, shows, completedShows, watchingShows, moviesWatchedAt }` — заполняется из трёх API в параллели: watched movies, watched shows extended=full, hidden/dropped
- `renderWatchedBadge` — галочка Trakt для фильмов (`movies`) и завершённых сериалов (`completedShows`)
- `renderWatchingBadge` — полукруг Trakt для сериалов в процессе (`watchingShows` = shows - completedShows - droppedShows); перекрывает бейдж watchlist
- `renderWatchlistBadge` — закладка; пропускает сериалы из `watchingShows`
- `applyBadgeVisibility()` — CSS-скрытие по настройкам `trakt_badge_completed/watching/watchlist`

## Механика краша v2.9.9 (для понимания)

`prefetchMainRows` сохранял строки в кэш без `displayTitle` → `title: undefined` → Lampa удаляет `.items-line__head` у безымянных линий → `more.onVisible` крашится `null.append` при `total_pages > 1`, когда live API не успевает к дедлайну и отдаётся stale-кэш.

## Открытые задачи

- [ ] Подтвердить краш `items-line__head` ушёл (v2.9.9) — Apple TV
- [ ] Проверить v2.9.14–v2.9.17 (не подтверждены пользователем)
- [ ] Проверить v2.9.18: multiwatch row cache / рекомендации / «Мои сериалы»
- [ ] Проверить v2.9.34–v2.9.37: бейджи «Смотрю» / «Просмотрено» / «Хочу посмотреть»
- [ ] Проверить v3.0.0: Magic Play — следующий эпизод, автовыбор торрента, фильмы с дубляжом

## Важные детали

**Lampa source:**
- `/tmp/lampa-source` — может отсутствовать в новой сессии, клонировать при надобности
- `cf.lampa.mx` недоступен из облачной сессии (403 `host_not_allowed`) — продовый `app.min.js` не скачать

**Механика Lampa (не трогать):**
- `Layer.need_visible` глобальный; `frameVisible` триггерит `visible` каскадно на все `layer--visible` элементы
- `Line.create()` удаляет `.items-line__head` если `!data.title && !has(Icon)`
- `more.onVisible` делает `find('.items-line__head').append` без проверки null при `total_pages > 1`
- `registerMainScreenAutoLoad` пустой намеренно — scroll-hack удалён (вызывал краши)
- `_isPlayerActive` guard в `processTimelineUpdate` — не трогать (защита от ложных отметок)
- `.buttons--container` — скрытый контейнер, из которого «Смотреть» читает список источников; плагины добавляют `.full-start__button.selector` сюда
- `Element.prototype.on` в Lampa = `addEventListener`; для jQuery-событий (`hover:enter`) нужно `$(el).on(...)`
- `torrent_file` event `list_open` отправляется ДО `Arrays.extend` файлов — `season`/`episode` ещё не проставлены; нужно слушать `render`

**Хуки Agentfy (`.claude/settings.json`):**
- Хуки: `SessionStart`, `PermissionRequest`, `Stop`, `Notification` → POST на `https://webhook.getagentfy.com`
- Токен **не в репо** (репо публичный!) — берётся из env `AGENTFY_TOKEN`, без него `exit 0`
- Ошибки curl глушатся (`|| true`)
- Проверка в новой сессии: `echo ${AGENTFY_TOKEN:+задан}`, `curl -s -o /dev/null -w "%{http_code}" -m 10 https://webhook.getagentfy.com` (ожидается 405)

**Git:**
- PR не создавать без явной просьбы
- Пушить в `origin/main` и синхронизировать сессионную ветку (stop-хук проверяет её):
  `git push origin HEAD:main && git push origin HEAD:SESSION_BRANCH --force`
  где `SESSION_BRANCH` — текущая рабочая ветка (`git branch --show-current`)

## Ветки

- `main` — основная, всегда актуальна
- Рабочие ветки сессий: `claude/simplify-trakt-plugin-3PgnH` (прошлая), `claude/agentfy-hooks-check-cvf7vu` (текущая)
