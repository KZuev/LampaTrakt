# LampaTrakt — контекст проекта

## Проект

Репозиторий: `KZuev/LampaTrakt` (публичный).
Основной файл: `trakttv.js` — плагин Trakt.tv для медиа-интерфейса Lampa (3.0+, Maker/ContentRows API).
Общение с пользователем — **на русском**.

Плагин добавляет на главную/категории строки Trakt (Up Next, Watchlist, Recommendations, Calendar), полноэкранные каталоги, scrobbling (отметка просмотренного).

## Текущая версия

**v3.2.20** — Значок Trakt в шапке белеет (`#fff`), когда отслеживание выключено, и остаётся фиолетовым (`#c850c0`) при включённом. CSS-класс `.trakt-account-switcher.trakt-tracking-off` (специфичность бьёт базовый цвет без `!important`), хелпер `applyTraktHeadTrackingColor()` читает `readBooleanStorage$2('trakt_enable_watching')` и тоглит класс. Вызов из `updateTraktAccountSwitchBadge` (любой рефреш) и из обоих обработчиков тумблера (мгновенно). SVG красится через `currentColor`; бейдж-кружок со своим цветом не затронут.

**v3.2.19** — Фикс записи тумблера «Включить отслеживание просмотра» в шапке: значение пишется строкой `'true'/'false'`, а не boolean. В Lampa `Storage.get` делает `value || empty`, поэтому boolean `false` в `readed`-кэше всегда перебивается дефолтом → «Нет» не сохранялось, тумблер застревал на «Да». Сам Lampa хранит триггеры строками (`params.js`). Чтение — прежнее (`readBooleanStorage$2`).

**v3.2.18** — Фикс тумблера «Включить отслеживание просмотра» в шапке: чтение через `readBooleanStorage$2('trakt_enable_watching', true)` вместо `Lampa.Storage.field` (поле могло возвращать строку `'false'`, истинную в булевом контексте → подпись всегда «Да», негация не переключала). Запись по-прежнему `Lampa.Storage.set` булевым значением.

**v3.2.17** — Тумблер «Включить отслеживание просмотра» (Да/Нет) в меню значка плагина в шапке: пункт добавлен под «Совместный просмотр» (≥2 аккаунтов) и переключает `trakt_enable_watching`. При одном аккаунте значок теперь показывается (раньше скрывался) и содержит только этот пункт. При 0 аккаунтов — без изменений (крестик → настройки). Изменены `initTraktAccountSwitchButton`/`updateTraktAccountSwitchBadge` (убран ранний выход для 1 аккаунта) и `openTraktAccountSwitchMenu` (`trackingItem` + ветка single-account).

**v3.2.16** — Карточка использует ту же логику что бейдж (`_buildDigitalLabel`: Сегодня / Завтра / Через N дней / Скоро), но дальнюю дату, которую на постере показывают коротко («12 июл»), выводит полным форматом `DD.MM.YYYY` (в карточке место позволяет). Относительные подписи и «Скоро» не тронуты.

**v3.2.15** — Дата цифрового релиза в карточке использует ту же логику, что и бейдж на постере (`_buildDigitalLabel`): относительная дата для известного будущего релиза, «Скоро» — для `soonMovieIds` (был театральный релиз ≤180 дней, цифровой даты нет), фактическая дата для уже вышедшего. `showDigitalReleaseDate` дополнен soon-детекцией (type 3 ≤180 дней) как у бейджа. Откат ошибочного v3.2.14 (`trakttv_soon`, показывал «Скоро» для любой будущей даты).

**v3.2.14** — ~~Дата цифрового релиза → «Скоро» для любой будущей даты~~ — ОШИБКА: бейдж для известной будущей даты показывает относительный формат, а не «Скоро». Исправлено в v3.2.15.

**v3.2.13** — «Открыть случайный» в «Хочу посмотреть»: кнопка добавлена в меню сортировки `watchlistHub` (через `topAction`). Хаб захватывает текущий набор результатов через `onData`-коллбэк и при выборе открывает случайный элемент через `Lampa.Activity.push`; ожидаемые (`_trakt_is_upcoming`) исключены из пула.

**v3.2.12** — Авто-торрент: приоритет ранее открытых торрентов. В `_atSortTorrentCandidates` после основной сортировки кандидаты, чей `element.hash` есть в Lampa `torrents_view`, выдвигаются в начало списка. Работает для обеих кнопок. Сторонних хранилищ не требует — Lampa сама ведёт историю открытых торрентов.

**v3.2.11** — Live-rebuild Up Next после паузы: успешный `scrobblePause` (добавление фильма/сериала в «Смотреть дальше» ниже порога) теперь запускает `rebuildUpnextLineInPlace()` (как после отметки). Если строка не жива — выставляется `_pendingMainRefresh`, обновление на возврате на главную (`'archive'`). Раньше rebuild дёргался только из `onOwnMarkSucceeded`, и фильм после паузы появлялся только после полного перезагруза страницы.

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
| v3.0.25 | `51794bd` | Авто-торрент: кликабельная кнопка «Прервать автозапуск» (отмена мышью) + текст подсказки |
| v3.0.26 | `3e1ae76` | Авто-торрент: вариант «1 торрент (без перебора)» в настройке числа попыток |
| v3.0.27 | `TBD` | Нет аккаунтов: троттлинг уведомления (одно) + значок-крестик в шапке → настройки |
| v3.0.28 | `46b324a` | Фикс: после недействительного токена (401 на refresh) очищается слот → UI показывает «Не привязан» |
| v3.0.29 | `219e74f` | Рекомендации: «Скрывать просмотренное» включено по умолчанию |
| v3.0.30 | `0597f9b` | Настройки видимости бейджа и даты цифрового релиза |
| v3.0.31 | `13ec531` | Новый раздел «Страница фильма и сериала»; переименования настроек |
| v3.0.32 | `df9ca33` | Гостевой вход на 24 часа: авто-логаут слота, toggle в меню привязки |
| v3.0.33 | `bd42aa9` | Гостевой вход: subtitle Да/Нет; пометка у авторизованного слота-гостя |
| v3.0.34 | `281b3bd` | Расширение слотов до 6; исправление документации (было «4») |
| v3.0.35 | TBD | Раздел настроек «Apple TV»; Top Shelf перенесён туда и переименован |
| v3.0.36 | TBD | При совместном просмотре иконка в шапке показывает пару людей вместо «1+2» |
| v3.0.37 | TBD | Опция «Использовать аватар профиля Trakt.TV» в настройках каждого аккаунта |
| v3.0.38 | TBD | «Скрыть рекомендацию»: `DELETE /recommendations/{type}/{id}` из хаба и с главной |
| v3.0.39 | TBD | Отметка просмотра для внешнего плеера: слушатель `'external'` + onPlayerExternal + двухуровневый сброс `_isPlayerActive` |
| v3.1.0 | TBD | Реалтайм главная: оптимистичные бейджи → реконсиляция 5с → live-rebuild Up Next; настройка `trakt_realtime_upnext`; хук в `addToHistory$1` |
| v3.1.1 | TBD | Фикс `finish_skip`: `'finishing'` от убитой сессии → `'intent'`; при `already_finished` — UI rebuild (Up Next + бейджи) |
| v3.1.2 | TBD | Фикс Up Next при внешнем плеере: `_pendingMainRefresh` потребляется в 'line' listener; `rebuildUpnextLineInPlace` сбрасывает флаг перед API-вызовом |
| v3.1.3 | TBD | Фикс ложной отметки: `_sessionFirstObservedPct` — если прогресс не вырос за сессию плеера, это хранимый прогресс (не новый просмотр); внешний плеер исключён из гарда |
| v3.1.4 | TBD | Реалтайм-статус страницы описания: `_fullCardRefreshFn` / `refreshFullCardProgress` перерисовывают `S.. · E..` / «Просмотрено» на месте после отметки (рефактор `renderProgressData`) |
| v3.1.5 | TBD | Фикс Up Next на главной: `activity 'archive'` → rebuild; диагностический лог `upnext_rebuild_skip` с причиной (`null_ref`/`not_alive`) |
| v3.1.6 | TBD | Фикс `isLineAlive`: jQuery vs DOM — `el.jquery !== undefined ? el[0] : el` перед `.isConnected`; без этого rebuild всегда видел `not_alive` |
| v3.2.0 | TBD | Русские названия/постеры в списках: `enrichWithTmdbLocale` в `Api.list/myListItems` + `listDetailHub` с фильтрами Тип/Год/Жанр/Страна и тем же меню сортировки `openSharedSortMenu` (клиентская, рабочие поля `LIST_SORT_FIELDS`) |
| v3.2.1 | TBD | «Авто-торрент (случайная серия)»: кнопка только на сериалах, `launchAtRandomShow` → случайный сезон (>0, aired>0) + случайный эпизод ≤ aired → стандартный поиск торрента |
| v3.2.2 | TBD | Убран `votes` из `LIST_SORT_FIELDS`; `collectionHub` (Избранное) → `openSharedSortMenu` с теми же полями + «Открыть случайный»; `Api.collection()` sort расширен: `rank`, `runtime`, `percentage` |
| v3.2.3 | TBD | Фикс `_atBtnReset(btn, label?)`: кнопка «Авто-торрент (случайная серия)» теперь сохраняет правильный текст после возврата с экрана торрентов |
| v3.2.4 | TBD | Бейдж «СКОРО» скрыт для элементов раздела «Ожидаемые» (`_trakt_is_upcoming` флаг в `rearrangeWatchlistUpcoming` + guard в `renderDigitalReleaseBadge`) |
| v3.2.5 | TBD | Раздел настроек «Списки» + `trakt_default_list_sort`; раздел «Отладка и сброс» → «Остальное»; `getDefaultListSort()` применяется в watchlistHub/listDetailHub/collectionHub |
| v3.2.6 | TBD | Фикс реалтайм Up Next: убран guard `total_pages>1` в `rebuildUpnextLineInPlace` (блокировал live-rebuild при непустом списке); синхронизация `data.results`/`active` после перестроения. Также: default-сортировка на главной (`apiParams` в row-конфиге), кнопка «Ещё» при `total>displayLimit`, фикс combined watchlist sort (строка `sort` парсилась как объект) |
| v3.2.7 | TBD | Фикс постеров и рамки фокуса после live-rebuild Up Next: `Line.visible()` после rebuild → `Layer.visible(scroll)` → `card.visible()` грузит постеры; `toggle()` восстанавливает рамку если пользователь был на строке |
| v3.2.8 | TBD | Live-rebuild строки «Хочу посмотреть» на главной после отметки фильма как просмотренного: `rebuildWatchlistLineInPlace()` + `_watchlistLineRef` + `_pendingWatchlistRefresh`; вызов только при `mode==='movie'` |
| v3.2.9 | TBD | Фикс «Смотреть дальше» для фильмов: `scrobblePause` восстанавливает `ids.tmdb` из `media.id` (у карточки Lampa нет `.ids`) → Trakt создаёт запись прогресса. Диагностика `scrobble_pause_sent/error/skip` в «Историю отметок» |
| v3.2.10 | TBD | Фикс «Смотреть дальше» для внешнего плеера: `scrobblePause` вызывается из ветки `timeline_low_pct` в `processTimelineUpdate` (гард `_isPlayerActive`, тротлинг `_lastScrobblePauseKey`), т.к. внешний плеер не шлёт `'destroy'` и `routeFinishIntent` не отрабатывает |
| v3.2.12 | TBD | Авто-торрент: приоритет ранее открытых торрентов — `_atSortTorrentCandidates` читает `torrents_view` (Lampa) и выдвигает совпавшие по `hash` в начало; обе кнопки |
| v3.2.11 | TBD | Live-rebuild Up Next после успешного `scrobblePause`: вызов `rebuildUpnextLineInPlace()` в success-хендлере паузы → фильм/сериал появляется в «Смотреть дальше» без полного перезагруза (раньше только из `onOwnMarkSucceeded`) |
| v3.2.13 | TBD | «Открыть случайный» в «Хочу посмотреть»: `topAction` в меню сортировки `watchlistHub`; результаты захватываются через `onData`-коллбэк |
| v3.2.14 | TBD | ~~Дата цифрового релиза → «Скоро» для любой будущей даты~~ (ОШИБКА, см. v3.2.15) |
| v3.2.15 | TBD | Дата цифрового релиза в карточке использует ту же логику что бейдж (`_buildDigitalLabel`): относительная дата / «Скоро» (soonMovieIds) / фактическая дата. `showDigitalReleaseDate` дополнен soon-детекцией (type 3 ≤180 дней) |
| v3.2.16 | TBD | Карточка: дальняя дата полным форматом `DD.MM.YYYY` вместо короткого постерного «12 июл» (`diff > 3`); относительные «Сегодня/Завтра/Через N дней» и «Скоро» не тронуты |
| v3.2.17 | TBD | Тумблер «Включить отслеживание просмотра» (`trakt_enable_watching`) в меню значка в шапке: под «Совместный просмотр» при ≥2 аккаунтов, единственный пункт при 1 аккаунте (значок больше не скрывается); 0 аккаунтов без изменений |
| v3.2.18 | TBD | Фикс тумблера отслеживания в шапке: чтение через `readBooleanStorage$2` (нормализация типа) вместо `Lampa.Storage.field` — состояние теперь переключается |
| v3.2.19 | TBD | Фикс записи тумблера: строка `'true'/'false'` вместо boolean (Lampa `get` делает `value\|\|empty` → boolean `false` затирался дефолтом, застревало на «Да») |
| v3.2.20 | TBD | Значок Trakt в шапке белеет при выключенном отслеживании, фиолетовый при включённом: класс `.trakt-account-switcher.trakt-tracking-off` + хелпер `applyTraktHeadTrackingColor()` |

## Архитектура scrobbling

**Пути отметки:**
- **Path A (основной)**: `Lampa.Timeline.listener 'update'` → `processTimelineUpdate` → при `progress >= threshold && _isPlayerActive` → `finish(media)` → `addToHistory`
- **Path B (резервный)**: `Lampa.Player.listener 'destroy'` → `setTimeout(500ms)` → `routeFinishIntent` (только если Path A не сработал)
- **Внешний плеер (v3.0.39)**: `Lampa.Player.listener 'external'` (infuse/tvOS Pro/MX и т.д. — встроенный плеер не запускается, `'start'`/`'destroy'` НЕ шлются) → `onPlayerExternal` → `onPlayerStart(data)` (флаг + hash-meta) → при возврате в Lampa приходит финальный Timeline `'update'` → Path A отмечает

**`_isPlayerActive` guard** — НЕ ТРОГАТЬ:
- Защищает от ложных отметок когда `Lampa.Timeline` шлёт `'update'` при открытии списка файлов торрента (с сохранённым прогрессом ≥ порога)
- Снимается в `routeFinishIntent` (при `'destroy'`) для встроенного плеера
- 500 мс задержка в Path B нужна для Apple TV: `destroy` → `_isPlayerActive=false` → Timeline `'update'` 100% приходит ПОСЛЕ; задержка позволяет Timeline сработать пока флаг ещё true

**Внешний плеер — сброс флага (v3.0.39):** т.к. `'destroy'` не приходит, `_isPlayerActive` снимается двухуровнево: (1) основной — сразу после `finish()` в `processTimelineUpdate` при `_externalPlayerActive`; (2) резервный — таймер `EXTERNAL_ACTIVE_WINDOW_MS` (6ч) на случай прерывания ниже порога. `_externalActiveUntil` защищает от сброса при повторном запуске. `'external'` шлётся только при реальном `Player.play`, не при просмотре списка файлов торрента → защита от ложных отметок сохранена.

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
