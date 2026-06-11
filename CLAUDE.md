# LampaTrakt — контекст проекта

## Проект

Репозиторий: `KZuev/LampaTrakt` (публичный).
Основной файл: `trakttv.js` — плагин Trakt.tv для медиа-интерфейса Lampa (3.0+, Maker/ContentRows API).
Общение с пользователем — **на русском**.

Плагин добавляет на главную/категории строки Trakt (Up Next, Watchlist, Recommendations, Calendar), полноэкранные каталоги, scrobbling (отметка просмотренного).

## Текущая версия

**v2.9.10** — последний релиз, ждёт проверки.

## История фиксов (v2.9.x)

| Версия | Коммит | Суть |
|--------|--------|------|
| v2.9.6 | `2913abc` | Убран `scroll--nopadding` → фикс прыжка постера при фокусе |
| v2.9.7 | `f1968d2` | Отметка серии на `stop`/`ended` когда `progress >= threshold` |
| v2.9.8 | `4cabff4` | Восстановление `Base.start` внутри `.then()` (не помогло — краш был не там) |
| v2.9.9  | `a0d833f` | **Настоящий фикс краша** `items-line__head` (см. ниже) |
| —       | `e874ccb` | Хуки Agentfy в `.claude/settings.json` |
| v2.9.10 | TBD       | Фикс залезания постеров под кнопки фильтра/сортировки в хабах (`margin-bottom:-15px` → `0`) |

## Механика краша v2.9.9 (для понимания)

`prefetchMainRows` сохранял строки в кэш без `displayTitle` → `title: undefined` → Lampa удаляет `.items-line__head` у безымянных линий → `more.onVisible` крашится `null.append` при `total_pages > 1` (watchlist/upnext > 36 элементов), когда live API не успевает к дедлайну и отдаётся stale-кэш.

Три исправления в v2.9.9:
- `prefetchMainRows` — конфиги дополнены `displayTitle`/`component` как в `registerRows`
- `loadRowFromCache` — отбрасывает и чистит записи без `title` (отравленный кэш в localStorage)
- `saveRowToCache` — не сохраняет строки без `title`

## Открытые задачи

- [ ] Подтвердить, что краш `items-line__head` ушёл (v2.9.9) — ждём проверки на Apple TV
- [ ] Подтвердить отметку просмотренной серии и отсутствие ложных отметок (v2.9.7 + `_isPlayerActive`)
- [ ] Проверить Stop-хук Agentfy в конце сессии
- [ ] Подтвердить, что постеры больше не заходят под кнопки фильтра/сортировки (v2.9.10)

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

**Хуки Agentfy (`.claude/settings.json`):**
- Хуки: `SessionStart`, `PermissionRequest`, `Stop`, `Notification` → POST на `https://webhook.getagentfy.com`
- Токен **не в репо** (репо публичный!) — берётся из env `AGENTFY_TOKEN`, без него `exit 0`
- Ошибки curl глушатся (`|| true`)
- Проверка в новой сессии: `echo ${AGENTFY_TOKEN:+задан}`, `curl -s -o /dev/null -w "%{http_code}" -m 10 https://webhook.getagentfy.com` (ожидается 405)

**Git:**
- PR не создавать без явной просьбы
- Пушить только в `origin/main`: `git push origin HEAD:main`

## Ветки

- `main` — основная, всегда актуальна
- Рабочие ветки сессий: `claude/simplify-trakt-plugin-3PgnH` (прошлая), `claude/agentfy-hooks-check-cvf7vu` (текущая)
