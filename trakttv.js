(function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      if (r) i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n;else {
        function o(r, n) {
          _regeneratorDefine(e, r, function (e) {
            return this._invoke(r, n, e);
          });
        }
        o("next", 0), o("throw", 1), o("return", 2);
      }
    }, _regeneratorDefine(e, r, n, t);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  /**
   * Создаёт изображение с текстом через Canvas API.
   * @param {string} text - Текст для отображения на изображении.
   * @returns {string} - URL изображения в формате data:image/png;base64.
   */
  function textToImage(text) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = 400;
    var height = 600;
    canvas.width = width;
    canvas.height = height;

    context.fillStyle = '#1a202c';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#ffffff';
    context.font = 'bold 48px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    var words = text.split(' ');
    var lines = [];
    var currentLine = words[0] || '';
    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var testLine = currentLine + ' ' + word;
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > width - 40 && currentLine !== '') {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    var lineHeight = 58;
    var startY = (height - lines.length * lineHeight) / 2 + lineHeight / 2;
    lines.forEach(function (line, index) {
      context.fillText(line, width / 2, startY + index * lineHeight);
    });
    return canvas.toDataURL('image/png');
  }

  var PREFIX = 'TraktTV';
  var onceKeys = new Set();
  function isDebugEnabled() {
    try {
      return !!(typeof Lampa !== 'undefined' && Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function' && Lampa.Storage.field('trakt_enable_logging'));
    } catch (e) {
      return false;
    }
  }
  function write(level, message, meta) {
    var targetLevel = level === 'error' || level === 'warn' || level === 'log' ? level : 'log';
    var writer = typeof console !== 'undefined' && typeof console[targetLevel] === 'function' ? console[targetLevel].bind(console) : typeof console !== 'undefined' && typeof console.log === 'function' ? console.log.bind(console) : null;
    if (!writer) return;
    if (typeof meta === 'undefined') writer(PREFIX, message);else writer(PREFIX, message, meta);
  }
  function debugEnabled() {
    return isDebugEnabled();
  }
  function logWarn(message, meta) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$debugOnly = _ref2.debugOnly,
      debugOnly = _ref2$debugOnly === void 0 ? true : _ref2$debugOnly;
    if (debugOnly && !isDebugEnabled()) return;
    write('warn', message, meta);
  }
  function logError(message, meta) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref3$debugOnly = _ref3.debugOnly,
      debugOnly = _ref3$debugOnly === void 0 ? false : _ref3$debugOnly;
    if (debugOnly && !isDebugEnabled()) return;
    write('error', message, meta);
  }
  function logDebug(message, meta) {
    if (!isDebugEnabled()) return;
    write('log', message, meta);
  }
  function logDebugOnce(key, message, meta) {
    if (!isDebugEnabled()) return;
    if (!key) return logDebug(message, meta);
    if (onceKeys.has(key)) return;
    onceKeys.add(key);
    write('log', message, meta);
  }

  var API_URL = 'https://api.trakt.tv';
  var PLUGIN_VERSION = '2.5.27';
  function getClientId() { return Lampa.Storage && Lampa.Storage.get('trakt_client_id') || ''; }
  function getClientSecret() { return Lampa.Storage && Lampa.Storage.get('trakt_client_secret') || ''; }
  var TOKEN_EXPIRY_SKEW_MS = 2 * 60 * 1000;
  var DEVICE_AUTH_STALE_MS = 20 * 60 * 1000;
  var MAX_RETRY_ATTEMPTS = 2; // 3 спроби загалом
  var RETRY_BASE_DELAY_MS = 600;
  var RETRY_MAX_DELAY_MS = 15000;
  var HOT_CACHE_TTL_FEED_MS = 25 * 1000;
  var HOT_CACHE_TTL_USER_MS = 45 * 1000;
  var HOT_CACHE_TTL_REFERENCE_MS = 5 * 60 * 1000;
  var MUTATION_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
  var inFlightRequests = new Map();
  var responseCache = new Map();
  var AUTH_BLOCK_STORAGE_KEY = 'trakt_auth_blocked';
  var AUTH_RATE_LIMIT_STORAGE_KEY = 'trakt_auth_rate_limited_until';

  // ── Global Rate Limiter ──────────────────────────────────────────────────
  // Sliding-window rate limiter that also enters global cooldown after 429.
  // Prevents runaway concurrent requests from different modules.

  var RL_MAX_REQUESTS_PER_WINDOW = 50; // max requests per window
  var RL_WINDOW_MS = 10 * 1000; // sliding window: 10 seconds
  var RL_MAX_AUTH_PER_WINDOW = 5; // auth (/oauth/*) requests per window
  var RL_DEFAULT_COOLDOWN_MS = 60 * 1000; // default cooldown after 429
  var RL_MIN_COOLDOWN_MS = 10 * 1000; // minimum cooldown
  var RL_MAX_COOLDOWN_MS = 5 * 60 * 1000; // maximum cooldown
  var RL_POLL_INTERVAL_MS = 300; // how often waitForSlot re-checks
  var AUTH_RATE_LIMIT_DEFAULT_COOLDOWN_MS = 60 * 1000;
  var AUTH_RATE_LIMIT_MAX_COOLDOWN_MS = 5 * 60 * 1000;
  var rlRequestLog = []; // { ts: number } timestamps of recent requests
  var rlAuthRequestLog = []; // timestamps of recent auth requests
  var rlCooldownUntil = 0; // 0 = no cooldown

  function rlIsAuthEndpoint(url) {
    if (!url || typeof url !== 'string') return false;
    return url.indexOf('/oauth/') !== -1;
  }
  function rlIsOnCooldown() {
    var remaining = rlCooldownUntil - Date.now();
    if (remaining <= 0) {
      rlCooldownUntil = 0;
      return false;
    }
    return true;
  }
  function rlEnterCooldown(retryAfterSeconds) {
    var durationMs = RL_DEFAULT_COOLDOWN_MS;
    if (typeof retryAfterSeconds === 'number' && Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
      durationMs = retryAfterSeconds * 1000;
    }
    durationMs = Math.max(RL_MIN_COOLDOWN_MS, Math.min(RL_MAX_COOLDOWN_MS, durationMs));
    rlCooldownUntil = Date.now() + durationMs;
  }
  function rlPruneLog(log) {
    var cutoff = Date.now() - RL_WINDOW_MS;
    while (log.length > 0 && log[0].ts < cutoff) log.shift();
  }
  function rlCanMakeRequest(url) {
    var isAuth = rlIsAuthEndpoint(url);
    var log = isAuth ? rlAuthRequestLog : rlRequestLog;
    var max = isAuth ? RL_MAX_AUTH_PER_WINDOW : RL_MAX_REQUESTS_PER_WINDOW;
    rlPruneLog(log);
    return log.length < max;
  }
  function rlRecordRequest(url, status) {
    var isAuth = rlIsAuthEndpoint(url);
    var log = isAuth ? rlAuthRequestLog : rlRequestLog;
    log.push({
      ts: Date.now()
    });
    rlPruneLog(log);
    if (status === 429) {
      rlEnterCooldown();
    }
  }
  function rlGetCooldownRemainingMs() {
    return Math.max(0, rlCooldownUntil - Date.now());
  }
  function rlWaitForSlot(_x) {
    return _rlWaitForSlot.apply(this, arguments);
  } // ── end Rate Limiter ─────────────────────────────────────────────────────
  function _rlWaitForSlot() {
    _rlWaitForSlot = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url) {
      var isAuth;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            // Auth requests bypass cooldown but still respect sliding window
            isAuth = rlIsAuthEndpoint(url);
          case 1:
            if (!(!isAuth && rlIsOnCooldown())) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return sleep$1(RL_POLL_INTERVAL_MS);
          case 2:
            return _context.a(3, 1);
          case 3:
            if (!rlCanMakeRequest(url)) {
              _context.n = 4;
              break;
            }
            return _context.a(2);
          case 4:
            _context.n = 5;
            return sleep$1(RL_POLL_INTERVAL_MS);
          case 5:
            _context.n = 1;
            break;
          case 6:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _rlWaitForSlot.apply(this, arguments);
  }
  var authBlocked = false;
  var authBlockedReason = '';
  var authBlockedAt = 0;
  var authBlockedNotified = false;
  var authBlockedTokenFingerprint = '';
  function getAccessTokenFingerprint() {
    var token = String(Lampa.Storage.get('trakt_token') || '');
    if (!token) return '';
    return "".concat(token.length, ":").concat(token.slice(-12));
  }
  function getStorageNumber(name) {
    var value = Number(Lampa.Storage.get(name));
    return Number.isFinite(value) ? value : null;
  }
  function clearTokenExpiryMeta() {
    Lampa.Storage.set('trakt_token_created_at', null);
    Lampa.Storage.set('trakt_token_expires_in', null);
    Lampa.Storage.set('trakt_token_expires_at', null);
  }
  function clearAuthStorage() {
    Lampa.Storage.set('trakt_token', null);
    Lampa.Storage.set('trakt_refresh_token', null);
    clearTokenExpiryMeta();
    clearAuthRateLimitCooldown();
    Lampa.Storage.set('trakt_active_device_auth', false);
    Lampa.Storage.set('trakt_active_device_auth_started_at', null);
  }
  function setAuthBlocked() {
    var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'reauth_required';
    authBlocked = true;
    authBlockedReason = String(reason || 'reauth_required');
    authBlockedAt = Date.now();
    authBlockedNotified = false;
    authBlockedTokenFingerprint = getAccessTokenFingerprint();
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(AUTH_BLOCK_STORAGE_KEY, true);
      }
    } catch (error) {/* noop */}
  }
  function clearAuthBlocked() {
    authBlocked = false;
    authBlockedReason = '';
    authBlockedAt = 0;
    authBlockedNotified = false;
    authBlockedTokenFingerprint = '';
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(AUTH_BLOCK_STORAGE_KEY, false);
      }
    } catch (error) {/* noop */}
  }
  function isAuthBlocked() {
    if (authBlocked) return true;
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        return Lampa.Storage.get(AUTH_BLOCK_STORAGE_KEY) === true;
      }
    } catch (error) {
      return authBlocked;
    }
    return authBlocked;
  }
  function buildAuthBlockedError() {
    var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'reauth_required';
    return Object.assign(new Error('Trakt auth is blocked, reauthorization required'), {
      status: 401,
      code: 'reauth_required',
      reason: reason || 'reauth_required',
      blocked: true,
      blockedAt: authBlockedAt || Date.now()
    });
  }
  function clearAuthRateLimitCooldown() {
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(AUTH_RATE_LIMIT_STORAGE_KEY, null);
      }
    } catch (error) {/* noop */}
  }
  function getAuthRateLimitRemainingMs() {
    var cooldownUntil = 0;
    try {
      cooldownUntil = Number(Lampa.Storage.get(AUTH_RATE_LIMIT_STORAGE_KEY) || 0);
    } catch (error) {
      cooldownUntil = 0;
    }
    if (!Number.isFinite(cooldownUntil) || cooldownUntil <= Date.now()) {
      clearAuthRateLimitCooldown();
      return 0;
    }
    return cooldownUntil - Date.now();
  }
  function buildAuthRateLimitError(error) {
    return Object.assign(new Error('Trakt auth is temporarily rate limited'), {
      status: 503,
      code: 'auth_rate_limited',
      retryAfterMs: getAuthRateLimitRemainingMs(),
      originalError: error || null
    });
  }
  function setAuthRateLimitCooldown(error) {
    var retryAfterMs = parseRetryAfterMs$1(error && error.headers ? error.headers : {});
    var cooldownMs = Math.min(AUTH_RATE_LIMIT_MAX_COOLDOWN_MS, Math.max(1000, retryAfterMs || AUTH_RATE_LIMIT_DEFAULT_COOLDOWN_MS));
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(AUTH_RATE_LIMIT_STORAGE_KEY, Date.now() + cooldownMs);
      }
    } catch (storageError) {/* noop */}
    return cooldownMs;
  }
  function isAuthRateLimitStatus(status) {
    return status === 429 || status === 503;
  }
  function notifyAuthBlockedOnce() {
    if (authBlockedNotified) return;
    authBlockedNotified = true;
    try {
      if (Lampa && Lampa.Bell && typeof Lampa.Bell.push === 'function') {
        var text = Lampa.Lang && typeof Lampa.Lang.translate === 'function' ? Lampa.Lang.translate('trakttvAuthMissed') || 'Trakt authorization required' : 'Trakt authorization required';
        Lampa.Bell.push({
          text: text
        });
      }
    } catch (error) {/* noop */}
  }
  function hasUsableAccessToken() {
    var token = String(Lampa.Storage.get('trakt_token') || '');
    return !!token;
  }
  function hasNewAccessTokenSinceBlock() {
    var current = getAccessTokenFingerprint();
    if (!current) return false;
    if (!authBlockedTokenFingerprint) return true;
    return current !== authBlockedTokenFingerprint;
  }
  function saveTokens() {
    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!response || _typeof(response) !== 'object') return;
    if (response.access_token) {
      Lampa.Storage.set('trakt_token', response.access_token);
    }
    if (response.refresh_token) {
      Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
    }
    var expiresIn = Number(response.expires_in);
    var createdAt = Number(response.created_at) || Math.floor(Date.now() / 1000);
    if (Number.isFinite(expiresIn) && expiresIn > 0) {
      var expiresAt = createdAt * 1000 + expiresIn * 1000;
      Lampa.Storage.set('trakt_token_created_at', createdAt);
      Lampa.Storage.set('trakt_token_expires_in', expiresIn);
      Lampa.Storage.set('trakt_token_expires_at', expiresAt);
    } else if (response.access_token || response.refresh_token) {
      clearTokenExpiryMeta();
    }
    if (response.access_token) {
      clearAuthBlocked();
      clearAuthRateLimitCooldown();
    }
    multiAccountSnapshotActive();
  }
  // ── Multi-Account Storage Layer ──────────────────────────────────────────
  var MULTI_MAX_SLOTS = 5;
  function multiAccountGetAll() {
    try {
      var r = Lampa.Storage.get('trakt_accounts');
      if (Array.isArray(r)) return r;
      r = JSON.parse(typeof r === 'string' ? r : '[]');
      return Array.isArray(r) ? r : [];
    } catch (e) { return []; }
  }
  function multiAccountSaveAll(slots) {
    Lampa.Storage.set('trakt_accounts', slots);
  }
  function multiAccountGetActiveSlot() {
    return parseInt(Lampa.Storage.get('trakt_active_slot') || '0', 10) || 0;
  }
  function multiAccountGetSlot(slotIndex) {
    return multiAccountGetAll().find(function (s) { return s.slot === slotIndex; }) || null;
  }
  function getSlotDisplayName(slotIndex) {
    var d = multiAccountGetSlot(slotIndex);
    if (!d) return t$1('trakt_account_slot', 'Аккаунт') + ' ' + (slotIndex + 1);
    if (d.alias && d.alias.trim()) return d.alias.trim();
    if (d.label && d.label !== '…') return d.label;
    return t$1('trakt_account_slot', 'Аккаунт') + ' ' + (slotIndex + 1);
  }
  function multiAccountUpdateSlot(slotIndex, patch) {
    var slots = multiAccountGetAll();
    var idx = slots.findIndex(function (s) { return s.slot === slotIndex; });
    if (idx >= 0) Object.assign(slots[idx], patch);
    else slots.push(Object.assign({ slot: slotIndex }, patch));
    multiAccountSaveAll(slots);
  }
  function multiAccountSnapshotActive() {
    var slotIndex = multiAccountGetActiveSlot();
    multiAccountUpdateSlot(slotIndex, {
      token: Lampa.Storage.get('trakt_token') || null,
      refresh_token: Lampa.Storage.get('trakt_refresh_token') || null,
      expires_at: Lampa.Storage.get('trakt_token_expires_at') || null,
      created_at: Lampa.Storage.get('trakt_token_created_at') || null,
      expires_in: Lampa.Storage.get('trakt_token_expires_in') || null
    });
  }
  function multiAccountActivateSlot(slotIndex) {
    multiAccountSnapshotActive();
    var data = multiAccountGetSlot(slotIndex);
    Lampa.Storage.set('trakt_active_slot', slotIndex);
    Lampa.Storage.set('trakt_token', (data && data.token) || null);
    Lampa.Storage.set('trakt_refresh_token', (data && data.refresh_token) || null);
    Lampa.Storage.set('trakt_token_expires_at', (data && data.expires_at) || null);
    Lampa.Storage.set('trakt_token_created_at', (data && data.created_at) || null);
    Lampa.Storage.set('trakt_token_expires_in', (data && data.expires_in) || null);
    clearAuthBlocked();
    clearAuthRateLimitCooldown();
  }
  function multiAccountGetMultiwatchTokens() {
    var enabled = readBooleanStorage$2('trakt_multiwatch_enabled', false);
    if (!enabled) return [];
    var selected;
    var _raw733 = Lampa.Storage.get('trakt_multiwatch_slots');
    try { selected = Array.isArray(_raw733) ? _raw733 : JSON.parse(_raw733 || '[]'); } catch (e) { selected = []; }
    if (!Array.isArray(selected)) selected = [];
    var active = multiAccountGetActiveSlot();
    return selected
      .filter(function (s) { return s !== active; })
      .map(function (slotIndex) {
        var d = multiAccountGetSlot(slotIndex);
        return d && d.token ? { slot: slotIndex, token: d.token, label: getSlotDisplayName(slotIndex) } : null;
      })
      .filter(Boolean);
  }
  var _fetchingSlots = {};
  function multiAccountMigrateToken() {
    var token = Lampa.Storage.get('trakt_token');
    if (!token) return;
    var slot0 = multiAccountGetSlot(0);
    if (!slot0 || !slot0.token) {
      multiAccountUpdateSlot(0, {
        token: token,
        refresh_token: Lampa.Storage.get('trakt_refresh_token') || null,
        expires_at: Lampa.Storage.get('trakt_token_expires_at') || null,
        created_at: Lampa.Storage.get('trakt_token_created_at') || null,
        expires_in: Lampa.Storage.get('trakt_token_expires_in') || null,
        label: '…'
      });
      Lampa.Storage.set('trakt_active_slot', 0);
    }
  }
  function multiAccountFetchMissingUsernames() {
    var slots = multiAccountGetAll();
    slots.forEach(function (d) {
      if (!d || !d.token) return;
      if (d.label && d.label !== '…') return;
      if (_fetchingSlots[d.slot]) return;
      _fetchingSlots[d.slot] = true;
      requestApiWithToken(d.token, 'GET', '/users/me').then(function (user) {
        delete _fetchingSlots[d.slot];
        if (user && user.username) {
          multiAccountUpdateSlot(d.slot, {
            label: user.username,
            avatar: (user.images && user.images.avatar && user.images.avatar.full) || '',
            vip: !!(user.vip)
          });
        } else {
          var cur = multiAccountGetSlot(d.slot);
          if (!cur || !cur.label || cur.label === '…') multiAccountUpdateSlot(d.slot, { label: null });
        }
        try { Lampa.Settings.update(); } catch (e) {}
      }).catch(function () {
        delete _fetchingSlots[d.slot];
      });
    });
  }
  // ─────────────────────────────────────────────────────────────────────────

  function getTokenExpiryMeta() {
    var createdAt = getStorageNumber('trakt_token_created_at');
    var expiresIn = getStorageNumber('trakt_token_expires_in');
    var expiresAt = getStorageNumber('trakt_token_expires_at');
    if (!expiresAt && createdAt && expiresIn) {
      expiresAt = createdAt * 1000 + expiresIn * 1000;
      Lampa.Storage.set('trakt_token_expires_at', expiresAt);
    }
    return {
      createdAt: createdAt,
      expiresIn: expiresIn,
      expiresAt: expiresAt
    };
  }
  function isTokenExpiringSoon() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$skewMs = _ref.skewMs,
      skewMs = _ref$skewMs === void 0 ? TOKEN_EXPIRY_SKEW_MS : _ref$skewMs;
    var _getTokenExpiryMeta = getTokenExpiryMeta(),
      expiresAt = _getTokenExpiryMeta.expiresAt;
    if (!expiresAt || expiresAt <= 0) return true;
    return Date.now() + skewMs >= expiresAt;
  }
  function isDeviceAuthActive() {
    if (Lampa.Storage.get('trakt_active_device_auth') !== true) {
      return false;
    }
    var startedAt = getStorageNumber('trakt_active_device_auth_started_at');
    var now = Date.now();
    var isStale = !startedAt || now - startedAt > DEVICE_AUTH_STALE_MS;
    if (isStale) {
      Lampa.Storage.set('trakt_active_device_auth', false);
      Lampa.Storage.set('trakt_active_device_auth_started_at', null);
      logWarn('Device auth flag was stale and reset', undefined, {
        debugOnly: true
      });
      return false;
    }
    return true;
  }
  function readBooleanStorage$2(name) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var parse = function parse(value) {
      if (typeof value === 'boolean') return value;
      if (value === 1 || value === '1' || value === 'true') return true;
      if (value === 0 || value === '0' || value === 'false') return false;
      return null;
    };
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        var direct = parse(Lampa.Storage.get(name));
        if (direct !== null) return direct;
      }
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
        var fromField = parse(Lampa.Storage.field(name));
        if (fromField !== null) return fromField;
      }
    } catch (error) {
      return fallback;
    }
    return fallback;
  }
  function buildRecommendationsUrl$1(type, limit, extraParams) {
    var ignoreWatchlisted = readBooleanStorage$2('trakt_source_ignore_watchlisted', false) ? 'true' : 'false';
    var ignoreWatchedOverride = extraParams && typeof extraParams.ignoreWatched === 'boolean' ? extraParams.ignoreWatched : null;
    var ignoreWatched = ignoreWatchedOverride !== null ? ignoreWatchedOverride : (readBooleanStorage$2('trakt_source_ignore_watched', false) || readBooleanStorage$2('trakt_recommendations_ignore_watched', false));
    var query = new URLSearchParams({
      extended: 'full,images',
      limit: String(Math.max(1, parseInt(limit, 10) || 36)),
      ignore_watched: ignoreWatched ? 'true' : 'false',
      ignore_watchlisted: ignoreWatchlisted,
      ignore_collected: ignoreWatchlisted
    });
    if (extraParams) {
      if (extraParams.genres) query.set('genres', extraParams.genres);
      if (extraParams.years) query.set('years', extraParams.years);
      if (extraParams.countries) query.set('countries', extraParams.countries);
    }
    return "/recommendations/".concat(type, "?").concat(query.toString());
  }
  function getImageUrl(media) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'poster';
    var imageSet = media.images && media.images[type];
    var imageUrl = '';
    if (imageSet) {
      if (_typeof(imageSet) === 'object' && !Array.isArray(imageSet)) {
        imageUrl = imageSet.medium || imageSet.thumb || imageSet.full || '';
      } else if (Array.isArray(imageSet) && imageSet.length > 0) {
        imageUrl = imageSet[0];
      } else if (typeof imageSet === 'string') {
        imageUrl = imageSet;
      }
    }
    if (imageUrl && !imageUrl.startsWith('http')) {
      var finalUrl = 'https://' + imageUrl.replace(/^\/+/, '');
      return finalUrl;
    }
    return imageUrl;
  }
  function addToHistory$1(data) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var body = {
      movies: [],
      shows: []
    };


    if (data.episodes) {
      body.shows.push({
        ids: data.ids || {},
        seasons: [{
          number: data.season_number || 1,
          episodes: data.episodes.map(function (ep) {
            return {
              number: ep.number,
              watched_at: ep.watched_at || new Date().toISOString()
            };
          })
        }]
      });
      return requestApi('POST', '/sync/history', body);
    }

    if (data.method === 'movie') {
      if (!data.id) {
        return Promise.reject(new Error(Lampa.Lang.translate('trakttv_movie_id_missed')));
      }
      body.movies.push({
        ids: {
          tmdb: data.id
        },
        watched_at: ('watched_at' in data) ? data.watched_at : new Date().toISOString()
      });
      return requestApi('POST', '/sync/history', body);
    }
    else if (data.method === 'show' || data.method === 'tv') {
      if (!data.id) {
        return Promise.reject(new Error(Lampa.Lang.translate('trakttv_show_id_missed')));
      }
      if (mode === 'all') {
        body.shows.push({
          ids: data.ids || {
            tmdb: data.id
          },
          watched_at: new Date().toISOString()
        });
        return requestApi('POST', '/sync/history', body);
      } else if (mode === 'last_season' || mode === 'last_episode') {
        var _data$ids;
        return getShowHistory(data.id, (_data$ids = data.ids) === null || _data$ids === void 0 ? void 0 : _data$ids.trakt).then(function (historyData) {
          var _data$ids2;
          return getShowInfo(data.id, (_data$ids2 = data.ids) === null || _data$ids2 === void 0 ? void 0 : _data$ids2.trakt).then(function (showInfo) {
            var lastSeason = showInfo.last_season || data.season || 1;

            var watchedEpisodes = {};
            if (historyData && historyData.length > 0) {
              historyData.forEach(function (item) {
                if (item.episode) {
                  var s = item.episode.season;
                  var e = item.episode.number;
                  if (!watchedEpisodes[s]) {
                    watchedEpisodes[s] = [];
                  }
                  if (!watchedEpisodes[s].includes(e)) {
                    watchedEpisodes[s].push(e);
                  }
                }
              });
            }

            var seasonUrl = Lampa.TMDB.api('tv/' + data.id + '/season/' + lastSeason + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
            return new Promise(function (resolve, reject) {
              var network = new Lampa.Reguest();
              network.silent(seasonUrl, function (seasonData) {
                if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                  var allEpisodes = seasonData.episodes.map(function (e) {
                    return e.episode_number;
                  }).sort(function (a, b) {
                    return a - b;
                  });

                  var unwatchedEpisodes = allEpisodes.filter(function (e) {
                    return !watchedEpisodes[lastSeason] || !watchedEpisodes[lastSeason].includes(e);
                  });
                  if (mode === 'last_episode' && unwatchedEpisodes.length > 0) {
                    var nextEpisode = unwatchedEpisodes[0];
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        episodes: [{
                          number: nextEpisode,
                          watched_at: new Date().toISOString()
                        }]
                      }]
                    });
                  } else if (mode === 'last_season' && unwatchedEpisodes.length > 0) {
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        episodes: unwatchedEpisodes.map(function (e) {
                          return {
                            number: e,
                            watched_at: new Date().toISOString()
                          };
                        })
                      }]
                    });
                  } else {
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        watched_at: new Date().toISOString()
                      }]
                    });
                  }
                  resolve(requestApi('POST', '/sync/history', body));
                } else {
                  body.shows.push({
                    ids: data.ids || {
                      tmdb: data.id
                    },
                    seasons: [{
                      number: lastSeason,
                      watched_at: new Date().toISOString()
                    }]
                  });
                  resolve(requestApi('POST', '/sync/history', body));
                }
              }, function () {
                body.shows.push({
                  ids: data.ids || {
                    tmdb: data.id
                  },
                  seasons: [{
                    number: lastSeason,
                    watched_at: new Date().toISOString()
                  }]
                });
                resolve(requestApi('POST', '/sync/history', body));
              });
            });
          });
        })["catch"](function (error) {
          var _data$ids3;
          // Fallback to original behavior if there's an error
          return getShowInfo(data.id, (_data$ids3 = data.ids) === null || _data$ids3 === void 0 ? void 0 : _data$ids3.trakt).then(function (showInfo) {
            var lastSeason = showInfo.last_season || data.season || 1;
            var lastEpisode = showInfo.last_episode || data.episode || 1;
            if (mode === 'last_season') {
              body.shows.push({
                ids: data.ids || {
                  tmdb: data.id
                },
                seasons: [{
                  number: lastSeason,
                  watched_at: new Date().toISOString()
                }]
              });
            } else if (mode === 'last_episode') {
              body.shows.push({
                ids: data.ids || {
                  tmdb: data.id
                },
                seasons: [{
                  number: lastSeason,
                  episodes: [{
                    number: lastEpisode,
                    watched_at: new Date().toISOString()
                  }]
                }]
              });
            }
            return requestApi('POST', '/sync/history', body);
          });
        });
      } else {
        body.shows.push({
          ids: data.ids || {
            tmdb: data.id
          },
          watched_at: new Date().toISOString()
        });
        return requestApi('POST', '/sync/history', body);
      }
    } else {
      return Promise.reject(new Error(Lampa.Lang.translate('trakttv_unknown_content')));
    }
  }

  function markWatchedAllAccounts(data) {
    var secondaryAccounts = multiAccountGetMultiwatchTokens();
    if (!secondaryAccounts.length) return Promise.resolve({ succeeded: 0, failed: 0 });
    var body = { movies: [], shows: [] };
    if (data.method === 'movie') {
      body.movies.push({ ids: { tmdb: data.id }, watched_at: new Date().toISOString() });
    } else {
      body.shows.push({ ids: { tmdb: data.id }, watched_at: new Date().toISOString() });
    }
    var tasks = secondaryAccounts.map(function (acc) {
      return requestApiWithToken(acc.token, 'POST', '/sync/history', body)
        .then(function () { return { ok: true, label: acc.label }; })
        .catch(function (err) {
          logWarn('Multi-watch failed for account ' + acc.label, { status: err && err.status }, { debugOnly: true });
          return { ok: false, label: acc.label };
        });
    });
    return Promise.all(tasks).then(function (results) {
      var succeeded = results.filter(function (r) { return r.ok; }).length;
      var failed = results.filter(function (r) { return !r.ok; }).length;
      return { succeeded: succeeded, failed: failed, total: secondaryAccounts.length };
    });
  }

  function getShowInfo(tmdbId) {
    var traktId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      if (traktId) {
        requestApi('GET', "/shows/".concat(traktId, "?extended=full")).then(function (showData) {
          if (showData && showData.seasons) {
            var regularSeasons = showData.seasons.filter(function (s) {
              return s.number > 0;
            });
            var lastSeasonData = regularSeasons.length > 0 ? regularSeasons.reduce(function (prev, current) {
              return prev.number > current.number ? prev : current;
            }) : null;

            if (lastSeasonData) {
              requestApi('GET', "/shows/".concat(traktId, "/seasons/").concat(lastSeasonData.number, "?extended=full")).then(function (seasonData) {
                if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                  var lastEpisodeData = seasonData.episodes.reduce(function (prev, current) {
                    return prev.number > current.number ? prev : current;
                  });
                  resolve({
                    last_season: lastSeasonData.number,
                    last_episode: lastEpisodeData.number,
                    total_seasons: regularSeasons.length,
                    total_episodes: seasonData.episodes.length
                  });
                } else {
                  resolve({
                    last_season: lastSeasonData.number,
                    last_episode: 1
                  });
                }
              })["catch"](function () {
                  resolve({
                  last_season: lastSeasonData.number,
                  last_episode: 1
                });
              });
            } else {
              resolve({
                last_season: 1,
                last_episode: 1
              });
            }
          } else {
            resolve({
              last_season: 1,
              last_episode: 1
            });
          }
        })["catch"](function () {
          resolve({
            last_season: 1,
            last_episode: 1
          });
        });
        return;
      }

      var url = Lampa.TMDB.api('tv/' + tmdbId + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
      var network = new Lampa.Reguest();
      network.silent(url, function (data) {
        if (data && data.seasons) {
          var regularSeasons = data.seasons.filter(function (s) {
            return s.season_number > 0;
          });
          var lastSeasonData = regularSeasons.length > 0 ? regularSeasons.reduce(function (prev, current) {
            return prev.season_number > current.season_number ? prev : current;
          }) : null;

          if (lastSeasonData) {
            var seasonUrl = Lampa.TMDB.api('tv/' + tmdbId + '/season/' + lastSeasonData.season_number + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
            network.silent(seasonUrl, function (seasonData) {
              if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                  var lastEpisodeData = seasonData.episodes.reduce(function (prev, current) {
                  return prev.episode_number > current.episode_number ? prev : current;
                });
                resolve({
                  last_season: lastSeasonData.season_number,
                  last_episode: lastEpisodeData.episode_number,
                  total_seasons: regularSeasons.length,
                  total_episodes: seasonData.episodes.length
                });
              } else {
                resolve({
                  last_season: lastSeasonData.season_number,
                  last_episode: 1
                });
              }
            }, function () {
              resolve({
                last_season: lastSeasonData.season_number,
                last_episode: 1
              });
            });
          } else {
            resolve({
              last_season: 1,
              last_episode: 1
            });
          }
        } else {
          resolve({
            last_season: 1,
            last_episode: 1
          });
        }
      }, function () {
        resolve({
          last_season: 1,
          last_episode: 1
        });
      });
    });
  }

  /**
   * Refresh tokens using refresh_token
   * unauthorized = true
   * Note: blocked while device auth polling is active
   */
  function refreshTokens() {
    return _refreshTokens.apply(this, arguments);
  }
  function _refreshTokens() {
    _refreshTokens = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _ref16,
        redirect_uri,
        _ref16$reason,
        reason,
        refresh_token,
        logging,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _ref16 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, redirect_uri = _ref16.redirect_uri, _ref16$reason = _ref16.reason, reason = _ref16$reason === void 0 ? 'manual' : _ref16$reason;
            refresh_token = Lampa.Storage.get('trakt_refresh_token');
            logging = Lampa.Storage.field('trakt_enable_logging');
            if (refresh_token) {
              _context2.n = 1;
              break;
            }
            if (logging) logDebug('refreshTokens skipped: no refresh token');
            setAuthBlocked('no_refresh_token');
            return _context2.a(2, Promise.reject(Object.assign(new Error('No refresh_token'), {
              status: 0,
              code: 'no_refresh_token'
            })));
          case 1:
            if (!isDeviceAuthActive()) {
              _context2.n = 2;
              break;
            }
            if (logging) logDebug('refreshTokens skipped: device auth active', {
              reason: reason
            });
            return _context2.a(2, Promise.reject(Object.assign(new Error('Device auth is active'), {
              status: 423,
              code: 'device_auth_active'
            })));
          case 2:
            return _context2.a(2, rlWaitForSlot('/oauth/token').then(function () {
              return _performRequest('POST', '/oauth/token', {
                refresh_token: refresh_token,
                redirect_uri: redirect_uri || '',
                grant_type: 'refresh_token',
                client_id: getClientId(),
                client_secret: getClientSecret()
              }, true);
            }).then(function (res) {
              rlRecordRequest('/oauth/token', 200);
              if (res && res.access_token) {
                saveTokens(res);
              }
              return res;
            })["catch"](function (error) {
              var status = Number(error && error.status) || 0;
              rlRecordRequest('/oauth/token', status);
              if (status === 429) {
                var retryAfterSec = parseRetryAfterMs$1(error && error.headers ? error.headers : {});
                rlEnterCooldown(retryAfterSec ? Math.round(retryAfterSec / 1000) : undefined);
                logWarn('Trakt rate limit on token refresh, global cooldown entered', {
                  cooldownMs: rlGetCooldownRemainingMs()
                }, {
                  debugOnly: true
                });
              }
              if (error && (error.status === 400 || error.status === 401)) {
                setAuthBlocked("refresh_failed_".concat(error.status));
                clearAuthStorage();
              }
              if (logging) logWarn('refreshTokens failed', {
                reason: reason,
                error: error
              }, {
                debugOnly: true
              });
              throw error;
            }));
        }
      }, _callee2);
    }));
    return _refreshTokens.apply(this, arguments);
  }
  var refreshPromise = null;
  function runRefreshFlow() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (refreshPromise) {
      return refreshPromise;
    }
    refreshPromise = refreshTokens(options)["finally"](function () {
      refreshPromise = null;
    });
    return refreshPromise;
  }
  function ensureValidAccessToken() {
    return _ensureValidAccessToken.apply(this, arguments);
  }
  function _ensureValidAccessToken() {
    _ensureValidAccessToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _ref17,
        _ref17$reason,
        reason,
        _ref17$force,
        force,
        _ref17$skewMs,
        skewMs,
        token,
        refreshToken,
        noAccessToken,
        shouldRefreshByExpiry,
        _args3 = arguments;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _ref17 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, _ref17$reason = _ref17.reason, reason = _ref17$reason === void 0 ? 'preflight' : _ref17$reason, _ref17$force = _ref17.force, force = _ref17$force === void 0 ? false : _ref17$force, _ref17$skewMs = _ref17.skewMs, skewMs = _ref17$skewMs === void 0 ? TOKEN_EXPIRY_SKEW_MS : _ref17$skewMs;
            token = Lampa.Storage.get('trakt_token');
            refreshToken = Lampa.Storage.get('trakt_refresh_token');
            if (refreshToken) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, null);
          case 1:
            if (!isDeviceAuthActive()) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2, null);
          case 2:
            noAccessToken = !token;
            shouldRefreshByExpiry = force || isTokenExpiringSoon({
              skewMs: Number(skewMs) || TOKEN_EXPIRY_SKEW_MS
            });
            if (!(!noAccessToken && !shouldRefreshByExpiry)) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2, null);
          case 3:
            return _context3.a(2, runRefreshFlow({
              reason: reason
            }));
        }
      }, _callee3);
    }));
    return _ensureValidAccessToken.apply(this, arguments);
  }
  function sleep$1(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, Math.max(0, Number(ms) || 0));
    });
  }
  function sortForStableSerialize(value) {
    if (Array.isArray(value)) {
      return value.map(sortForStableSerialize);
    }
    if (value && _typeof(value) === 'object') {
      var normalized = {};
      Object.keys(value).sort().forEach(function (key) {
        if (typeof value[key] === 'undefined') return;
        normalized[key] = sortForStableSerialize(value[key]);
      });
      return normalized;
    }
    return value;
  }
  function stableSerialize(value) {
    try {
      return JSON.stringify(sortForStableSerialize(value));
    } catch (error) {
      return String(value);
    }
  }
  function normalizeQueryString() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var source = String(query || '').replace(/^\?+/, '');
    if (!source) return '';
    try {
      var parsed = new URLSearchParams(source);
      var entries = [];
      parsed.forEach(function (value, key) {
        if (!key || key === '_') return;
        entries.push([String(key), String(value)]);
      });
      entries.sort(function (left, right) {
        if (left[0] === right[0]) {
          if (left[1] === right[1]) return 0;
          return left[1] > right[1] ? 1 : -1;
        }
        return left[0] > right[0] ? 1 : -1;
      });
      var normalized = new URLSearchParams();
      entries.forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];
        return normalized.append(key, value);
      });
      return normalized.toString();
    } catch (error) {
      return source;
    }
  }
  function normalizeRequestUrl() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var source = String(url || '').trim();
    if (source.indexOf(API_URL) === 0) {
      source = source.slice(API_URL.length);
    }
    var queryIndex = source.indexOf('?');
    var rawPath = queryIndex >= 0 ? source.slice(0, queryIndex) : source;
    var rawQuery = queryIndex >= 0 ? source.slice(queryIndex + 1) : '';
    var path = "/".concat(String(rawPath || '').replace(/^\/+/, '')).replace(/\/{2,}/g, '/');
    var normalizedPath = path.length > 1 ? path.replace(/\/+$/, '') : path;
    var query = normalizeQueryString(rawQuery);
    var full = query ? "".concat(normalizedPath, "?").concat(query) : normalizedPath;
    return {
      path: normalizedPath,
      query: query,
      full: full
    };
  }
  function buildAuthScope() {
    var unauthorized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (unauthorized) return 'unauthorized';
    var token = String(Lampa.Storage.get('trakt_token') || '');
    if (!token) return 'anon';
    return "token:".concat(token.length, ":").concat(token.slice(-8));
  }
  function buildRequestKey(method, url, params, unauthorized) {
    var requestOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var normalizedMethod = String(method || 'GET').toUpperCase();
    var request = normalizeRequestUrl(url);
    var authScope = buildAuthScope(unauthorized);
    var mode = requestOptions && requestOptions.withMeta ? 'meta' : 'data';
    var body = normalizedMethod === 'GET' ? '' : stableSerialize(params || {});
    return [normalizedMethod, request.path, request.query, authScope, mode, body].join('|');
  }
  function buildCacheKey(method, url, unauthorized) {
    var requestOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var normalizedMethod = String(method || 'GET').toUpperCase();
    var request = normalizeRequestUrl(url);
    var authScope = buildAuthScope(unauthorized);
    var mode = requestOptions && requestOptions.withMeta ? 'meta' : 'data';
    return [normalizedMethod, request.path, request.query, authScope, mode].join('|');
  }
  function parseRetryAfterMs$1() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var value = headers && headers['retry-after'];
    if (!value) return null;
    var numeric = Number(value);
    if (Number.isFinite(numeric) && numeric >= 0) {
      return numeric * 1000;
    }
    var dateMs = Date.parse(value);
    if (Number.isFinite(dateMs)) {
      return Math.max(0, dateMs - Date.now());
    }
    return null;
  }
  function isRetryableStatus(status) {
    return status === 429 || status === 504 || status >= 500 && status <= 599;
  }
  function resolveRetryDelayMs(status, attempt) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var step = Math.max(1, Number(attempt) || 1);
    var backoff = Math.min(RETRY_MAX_DELAY_MS, RETRY_BASE_DELAY_MS * Math.pow(2, step - 1));
    var jitter = Math.floor(Math.random() * 250);
    var backoffWithJitter = backoff + jitter;
    if (status === 429) {
      var retryAfterMs = parseRetryAfterMs$1(headers);
      if (retryAfterMs !== null) {
        return Math.max(retryAfterMs, backoffWithJitter);
      }
    }
    return backoffWithJitter;
  }
  function cloneValue(value) {
    if (!value || _typeof(value) !== 'object') return value;
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (error) {
      return value;
    }
  }
  function getCacheTtlMs(method, url) {
    var requestOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var normalizedMethod = String(method || 'GET').toUpperCase();
    if (normalizedMethod !== 'GET') return 0;
    if (requestOptions && requestOptions.cache === false) return 0;
    var request = normalizeRequestUrl(url);
    var path = request.path || '';
    if (!path) return 0;
    if (/^\/(media|movies|shows)\/(trending|popular|anticipated)(\/|$)/.test(path)) {
      return HOT_CACHE_TTL_FEED_MS;
    }
    if (/^\/recommendations(\/|$)/.test(path) || /^\/search(\/|$)/.test(path)) {
      return HOT_CACHE_TTL_FEED_MS;
    }
    if (path === '/users/me' || /^\/users\/me\/lists(\/|$)/.test(path) || /^\/users\/me\/likes\/lists(\/|$)/.test(path)) {
      return HOT_CACHE_TTL_USER_MS;
    }
    if (/^\/networks(\/|$)/.test(path)) {
      return HOT_CACHE_TTL_REFERENCE_MS;
    }
    return 0;
  }
  function getCachedResponse(cacheKey) {
    var cached = responseCache.get(cacheKey);
    if (!cached) return null;
    if ((Number(cached.expiresAt) || 0) <= Date.now()) {
      responseCache["delete"](cacheKey);
      return null;
    }
    return cloneValue(cached.value);
  }
  function setCachedResponse(cacheKey, value, ttlMs) {
    if (!cacheKey || !ttlMs) return;
    responseCache.set(cacheKey, {
      expiresAt: Date.now() + ttlMs,
      value: cloneValue(value)
    });
  }
  function clearResponseCache() {
    responseCache.clear();
  }
  function performRequestWithRetry(_x2, _x3) {
    return _performRequestWithRetry.apply(this, arguments);
  }
  function _performRequestWithRetry() {
    _performRequestWithRetry = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(method, url) {
      var params,
        unauthorized,
        requestOptions,
        logging,
        maxRetriesRaw,
        maxRetries,
        attempt,
        result,
        status,
        retryAfterSec,
        delay,
        _args4 = arguments,
        _t;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            params = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
            unauthorized = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : false;
            requestOptions = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : {};
            logging = Lampa.Storage.field('trakt_enable_logging');
            maxRetriesRaw = Number(requestOptions && requestOptions.maxRetries);
            maxRetries = Number.isFinite(maxRetriesRaw) ? Math.max(0, Math.min(5, maxRetriesRaw)) : MAX_RETRY_ATTEMPTS;
            attempt = 0;
          case 1:
            _context4.n = 2;
            return rlWaitForSlot(url);
          case 2:
            _context4.p = 2;
            _context4.n = 3;
            return _performRequest(method, url, params, unauthorized, requestOptions);
          case 3:
            result = _context4.v;
            // Record successful request in the rate limiter log
            rlRecordRequest(url, 200);
            return _context4.a(2, result);
          case 4:
            _context4.p = 4;
            _t = _context4.v;
            status = Number(_t && _t.status) || 0; // Record failure in rate limiter; trigger cooldown on 429
            rlRecordRequest(url, status);
            if (status === 429 && !rlIsOnCooldown()) {
              retryAfterSec = parseRetryAfterMs$1(_t && _t.headers ? _t.headers : {});
              rlEnterCooldown(retryAfterSec ? Math.round(retryAfterSec / 1000) : undefined);
              if (logging) {
                logWarn('Trakt rate limit: global cooldown entered', {
                  endpoint: normalizeRequestUrl(url).full,
                  method: String(method || 'GET').toUpperCase(),
                  cooldownMs: rlGetCooldownRemainingMs()
                }, {
                  debugOnly: true
                });
              }
            }
            if (!(!isRetryableStatus(status) || attempt >= maxRetries)) {
              _context4.n = 5;
              break;
            }
            // Propagate 403 as terminal for non-auth to avoid futile retries
            if (status === 403) {
              logWarn('Trakt request rejected with 403, not retrying', {
                endpoint: normalizeRequestUrl(url).full,
                method: String(method || 'GET').toUpperCase()
              }, {
                debugOnly: true
              });
            }
            throw _t;
          case 5:
            attempt += 1;
            delay = resolveRetryDelayMs(status, attempt, _t && _t.headers ? _t.headers : {});
            if (logging) {
              logWarn('Trakt request retry scheduled', {
                endpoint: normalizeRequestUrl(url).full,
                method: String(method || 'GET').toUpperCase(),
                status: status,
                retryReason: status === 429 ? 'rate_limit' : 'server_error',
                retryDelayMs: delay,
                attempt: attempt,
                maxRetries: maxRetries
              }, {
                debugOnly: true
              });
            }
            _context4.n = 6;
            return sleep$1(delay);
          case 6:
            _context4.n = 1;
            break;
          case 7:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4]]);
    }));
    return _performRequestWithRetry.apply(this, arguments);
  }
  function executeRequestWithPolicy(_x4, _x5) {
    return _executeRequestWithPolicy.apply(this, arguments);
  }
  function _executeRequestWithPolicy() {
    _executeRequestWithPolicy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(method, url) {
      var params,
        unauthorized,
        requestOptions,
        normalizedMethod,
        ttlMs,
        cacheKey,
        useCache,
        cached,
        dedupEnabled,
        requestKey,
        promise,
        _args5 = arguments;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            params = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
            unauthorized = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : false;
            requestOptions = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : {};
            normalizedMethod = String(method || 'GET').toUpperCase();
            ttlMs = getCacheTtlMs(normalizedMethod, url, requestOptions);
            cacheKey = ttlMs > 0 ? buildCacheKey(normalizedMethod, url, unauthorized, requestOptions) : '';
            useCache = ttlMs > 0 && !(requestOptions && requestOptions.forceFresh);
            if (!useCache) {
              _context5.n = 1;
              break;
            }
            cached = getCachedResponse(cacheKey);
            if (!(cached !== null)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, cached);
          case 1:
            dedupEnabled = !(requestOptions && requestOptions.dedup === false);
            requestKey = dedupEnabled ? buildRequestKey(normalizedMethod, url, params, unauthorized, requestOptions) : '';
            if (!(requestKey && inFlightRequests.has(requestKey))) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2, inFlightRequests.get(requestKey));
          case 2:
            promise = performRequestWithRetry(normalizedMethod, url, params, unauthorized, requestOptions).then(function (result) {
              if (useCache) {
                setCachedResponse(cacheKey, result, ttlMs);
              }
              if (MUTATION_METHODS.has(normalizedMethod)) {
                clearResponseCache();
              }
              return result;
            })["finally"](function () {
              if (requestKey) inFlightRequests["delete"](requestKey);
            });
            if (requestKey) {
              inFlightRequests.set(requestKey, promise);
            }
            return _context5.a(2, promise);
        }
      }, _callee5);
    }));
    return _executeRequestWithPolicy.apply(this, arguments);
  }
  function requestApi(_x6, _x7) {
    return _requestApi.apply(this, arguments);
  }
  function _requestApi() {
    _requestApi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(method, url) {
      var params,
        unauthorized,
        requestOptions,
        logging,
        normalizedMethod,
        normalizedEndpoint,
        didRefreshAfter401,
        status,
        cooldownMs,
        refreshStatus,
        _args6 = arguments,
        _t2,
        _t3,
        _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            params = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
            unauthorized = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
            requestOptions = _args6.length > 5 && _args6[5] !== undefined ? _args6[5] : {};
            logging = Lampa.Storage.field('trakt_enable_logging');
            normalizedMethod = String(method || 'GET').toUpperCase();
            normalizedEndpoint = normalizeRequestUrl(url).full;
            didRefreshAfter401 = false;

            // If auth is blocked due to prior terminal auth failure, stop user-scoped traffic until new token appears.
            if (!(!unauthorized && isAuthBlocked())) {
              _context6.n = 2;
              break;
            }
            if (!(hasUsableAccessToken() && hasNewAccessTokenSinceBlock())) {
              _context6.n = 1;
              break;
            }
            clearAuthBlocked();
            _context6.n = 2;
            break;
          case 1:
            if (logging) {
              logWarn('Auth blocked: user-scoped request rejected without network', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                reason: authBlockedReason || 'reauth_required'
              }, {
                debugOnly: true
              });
            }
            notifyAuthBlockedOnce();
            throw buildAuthBlockedError(authBlockedReason || 'reauth_required');
          case 2:
            if (!(!unauthorized && getAuthRateLimitRemainingMs() > 0)) {
              _context6.n = 3;
              break;
            }
            if (logging) {
              logWarn('Auth cooldown: user-scoped request rejected without network', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                retryAfterMs: getAuthRateLimitRemainingMs()
              }, {
                debugOnly: true
              });
            }
            throw buildAuthRateLimitError();
          case 3:
            if (!(!unauthorized && Lampa.Storage.get('trakt_refresh_token'))) {
              _context6.n = 9;
              break;
            }
            _context6.p = 4;
            _context6.n = 5;
            return ensureValidAccessToken({
              reason: "preflight:".concat(normalizedMethod, ":").concat(normalizedEndpoint)
            });
          case 5:
            _context6.n = 9;
            break;
          case 6:
            _context6.p = 6;
            _t2 = _context6.v;
            status = Number(_t2 && _t2.status) || 0;
            if (!isAuthRateLimitStatus(status)) {
              _context6.n = 7;
              break;
            }
            cooldownMs = setAuthRateLimitCooldown(_t2);
            if (logging) {
              logWarn('Preflight token refresh rate limited, auth cooldown entered', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                status: status,
                cooldownMs: cooldownMs
              }, {
                debugOnly: true
              });
            }
            throw buildAuthRateLimitError(_t2);
          case 7:
            if (!(_t2 && (_t2.status === 400 || _t2.status === 401))) {
              _context6.n = 8;
              break;
            }
            setAuthBlocked("preflight_refresh_failed_".concat(_t2.status));
            notifyAuthBlockedOnce();
            throw _t2;
          case 8:
            if (logging) {
              logWarn('Preflight token refresh failed, using current token', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                status: _t2 && _t2.status
              }, {
                debugOnly: true
              });
            }
          case 9:
            _context6.p = 10;
            _context6.n = 11;
            return executeRequestWithPolicy(normalizedMethod, url, params, unauthorized, requestOptions);
          case 11:
            return _context6.a(2, _context6.v);
          case 12:
            _context6.p = 12;
            _t3 = _context6.v;
            if (!(!unauthorized && _t3 && _t3.status === 401 && !didRefreshAfter401)) {
              _context6.n = 18;
              break;
            }
            didRefreshAfter401 = true;
            if (logging) {
              logDebug('401 received, run single refresh flow', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod
              });
            }
            _context6.p = 13;
            _context6.n = 14;
            return runRefreshFlow({
              reason: "401:".concat(normalizedMethod, ":").concat(normalizedEndpoint)
            });
          case 14:
            _context6.n = 17;
            break;
          case 15:
            _context6.p = 15;
            _t4 = _context6.v;
            refreshStatus = Number(_t4 && _t4.status) || 0;
            if (!isAuthRateLimitStatus(refreshStatus)) {
              _context6.n = 16;
              break;
            }
            setAuthRateLimitCooldown(_t4);
            throw buildAuthRateLimitError(_t4);
          case 16:
            throw _t4;
          case 17:
            return _context6.a(3, 9);
          case 18:
            if (!unauthorized && _t3 && _t3.status === 401) {
              setAuthBlocked('unauthorized_after_refresh');
              notifyAuthBlockedOnce();
            }
            if (!unauthorized && _t3 && _t3.status === 403 && normalizedEndpoint === '/users/me') {
              setAuthBlocked('users_me_forbidden');
              notifyAuthBlockedOnce();
            }
            throw _t3;
          case 19:
            return _context6.a(2);
        }
      }, _callee6, null, [[13, 15], [10, 12], [4, 6]]);
    }));
    return _requestApi.apply(this, arguments);
  }
  function _performRequest(method, url) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var unauthorized = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var requestOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    return new Promise(function (resolve, reject) {
      var headers = ensureHeaders({
        unauthorized: unauthorized
      });
      var withMeta = !!(requestOptions && requestOptions.withMeta);
      var reqUrl = API_URL + url;
      var ajaxParams = {
        url: reqUrl,
        timeout: 15000,
        headers: headers,
        type: method,
        dataType: 'json',
        crossDomain: true
      };
      if (method === 'POST' || method === 'PUT') {
        ajaxParams.data = JSON.stringify(params);
        ajaxParams.contentType = 'application/json';
        ajaxParams.processData = false;
      }
      $.ajax(ajaxParams).done(function (data, _textStatus, jqXHR) {
        var status = jqXHR && typeof jqXHR.status === 'number' ? jqXHR.status : 200;
        var responseHeaders = withMeta ? parseResponseHeaders(jqXHR) : {};
        if (withMeta) {
          resolve({
            data: data,
            status: status,
            headers: responseHeaders
          });
        } else {
          resolve(data);
        }
      }).fail(function (jqXHR) {
        var status = jqXHR && jqXHR.status ? jqXHR.status : 0;
        var responseHeaders = parseResponseHeaders(jqXHR);
        reject(Object.assign(new Error('TraktTV API Error'), {
          status: status,
          headers: responseHeaders,
          response: jqXHR && (jqXHR.responseJSON || jqXHR.responseText || null),
          originalError: jqXHR || {}
        }));
      });
    });
  }

  function fetchAllWatchlistPagesForToken(token, type) {
    var all = [];
    function go(page) {
      return requestApiWithToken(token, 'GET', '/sync/watchlist/' + type + '?extended=full&limit=100&page=' + page)
        .then(function(data) {
          var items = Array.isArray(data) ? data : [];
          all = all.concat(items);
          return items.length >= 100 ? go(page + 1) : all;
        })
        .catch(function() { return all; });
    }
    return go(1);
  }

  var _multiwatchIdsCache = null;
  var _multiwatchIdsCachePromise = null;

  function invalidateMultiwatchIdsCache() {
    _multiwatchIdsCache = null;
    _multiwatchIdsCachePromise = null;
  }

  function ensureMultiwatchIdsCache() {
    if (_multiwatchIdsCache) return Promise.resolve(_multiwatchIdsCache);
    if (_multiwatchIdsCachePromise) return _multiwatchIdsCachePromise;
    var mwTokens = multiAccountGetMultiwatchTokens();
    if (!mwTokens.length) {
      _multiwatchIdsCache = [];
      return Promise.resolve([]);
    }
    _multiwatchIdsCachePromise = Promise.all(mwTokens.map(function(acc) {
      return Promise.all([
        fetchAllWatchlistPagesForToken(acc.token, 'movies'),
        fetchAllWatchlistPagesForToken(acc.token, 'shows')
      ]).then(function(res) {
        var items = formatTraktResults(res[0].concat(res[1])).results;
        var ids = new Set(items.map(function(i) { return String(i.id || ''); }).filter(Boolean));
        return { items: items, ids: ids };
      }).catch(function() { return { items: [], ids: new Set() }; });
    })).then(function(perAccount) {
      _multiwatchIdsCache = perAccount;
      _multiwatchIdsCachePromise = null;
      return perAccount;
    });
    return _multiwatchIdsCachePromise;
  }

  function filterByMultiwatchIds(primaryResults) {
    if (!_multiwatchIdsCache || !_multiwatchIdsCache.length) return primaryResults;
    return primaryResults.filter(function(item) {
      var id = String(item.id || '');
      if (!id) return false;
      return _multiwatchIdsCache.every(function(acc) {
        return acc.ids.has(id);
      });
    });
  }

  function applyMultiwatchFilter(dataPromise) {
    var mwEnabled = readBooleanStorage$2('trakt_multiwatch_enabled', false);
    var mwTokens = mwEnabled ? multiAccountGetMultiwatchTokens() : [];
    if (!mwTokens.length) return dataPromise;
    return dataPromise.then(function(data) {
      if (!data || !Array.isArray(data.results)) return data;
      return ensureMultiwatchIdsCache().then(function() {
        return Object.assign({}, data, { results: filterByMultiwatchIds(data.results) });
      }).catch(function() { return data; });
    });
  }

  function requestApiWithToken(overrideToken, method, endpoint, data) {
    var headers = {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': getClientId(),
      'Authorization': 'Bearer ' + overrideToken
    };
    var reqUrl = API_URL + endpoint;
    var ajaxParams = {
      url: reqUrl,
      timeout: 15000,
      headers: headers,
      type: method,
      dataType: 'json',
      crossDomain: true
    };
    if (method === 'POST' || method === 'PUT') {
      ajaxParams.data = JSON.stringify(data || {});
      ajaxParams.contentType = 'application/json';
      ajaxParams.processData = false;
    }
    return new Promise(function (resolve, reject) {
      $.ajax(ajaxParams)
        .done(resolve)
        .fail(function (jqXHR) {
          reject(Object.assign(new Error('TraktTV secondary account error'), {
            status: jqXHR && jqXHR.status || 0
          }));
        });
    });
  }

  /**
   * Ensure Trakt headers (canonical).
   * Always sets:
   * - 'Content-Type': 'application/json'
   * - 'trakt-api-version': '2'
   * When unauthorized === true, DO NOT add Authorization Bearer header.
   * When unauthorized === false and access token exists, add Bearer.
   * Signature: function ensureHeaders({ unauthorized } = { unauthorized: false })
   */
  function ensureHeaders() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        unauthorized: false
      },
      unauthorized = _ref4.unauthorized;
    var headers = {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': getClientId()
    };
    if (!unauthorized) {
      var token = Lampa.Storage.get('trakt_token');
      if (token) headers['Authorization'] = "Bearer ".concat(token);
    }
    return headers;
  }
  function formatTraktResults() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return {
      results: (Array.isArray(items) ? items : []).map(function (item) {
        var media = item.movie || item.show;
        if (!media || !media.ids) return null;
        return {
          component: 'full',
          id: media.ids.tmdb || media.ids.trakt,
          ids: media.ids,
          title: media.title,
          original_title: media.title,
          release_date: media.year ? String(media.year) : '',
          vote_average: Number(media.rating || 0),
          poster: getImageUrl(media, 'poster'),
          image: getImageUrl(media, 'fanart'),
          method: item.movie ? 'movie' : 'tv',
          card_type: item.movie ? 'movie' : 'tv',
          trakt_released: item.movie ? (media.released || null) : (media.first_aired ? media.first_aired.split('T')[0] : null),
          trakt_genres: Array.isArray(media.genres) ? media.genres : [],
          trakt_country: typeof media.country === 'string' ? media.country.toLowerCase() : ''
        };
      }).filter(Boolean)
    };
  }
  function mapUpNextNitroItem() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var show = item.show || {};
    var ids = show.ids || {};
    var progress = item.progress || {};
    var nextEpisode = progress.next_episode || null;
    var lastEpisode = progress.last_episode || null;
    var id = ids.tmdb || ids.trakt;
    if (!id) return null;
    var watched = toNonNegativeInt$1(progress.completed) !== null ? toNonNegativeInt$1(progress.completed) : toNonNegativeInt$1(progress && progress.stats && progress.stats.play_count) || 0;
    var aired = toNonNegativeInt$1(progress.aired) !== null ? toNonNegativeInt$1(progress.aired) : toNonNegativeInt$1(show.aired_episodes) !== null ? toNonNegativeInt$1(show.aired_episodes) : toNonNegativeInt$1(item.cached_aired_episode_count) || 0;
    var progressTotal = aired > 0 ? aired : watched;
    var releaseDate = nextEpisode && nextEpisode.first_aired ? nextEpisode.first_aired : show.first_aired || (show.year ? String(show.year) : '');
    return {
      component: 'full',
      id: id,
      ids: ids,
      title: show.title || '',
      original_title: show.original_title || show.title || '',
      original_name: show.original_title || show.title || '',
      name: show.title || '',
      release_date: releaseDate ? String(releaseDate) : '',
      vote_average: Number(show.rating || 0),
      poster: getImageUrl(show, 'poster'),
      image: getImageUrl(show, 'fanart'),
      method: 'tv',
      type: 'tv',
      card_type: 'tv',
      source: 'tmdb',
      trakt_upnext_watched: watched,
      trakt_upnext_total: progressTotal,
      trakt_upnext_progress: "".concat(watched, "/").concat(progressTotal),
      trakt_upnext_last_watched_at: progress.last_watched_at || null,
      trakt_upnext_hidden: toNonNegativeInt$1(progress.hidden) || 0,
      trakt_upnext_reset_at: progress.reset_at || null,
      trakt_upnext_next_episode: nextEpisode,
      trakt_upnext_last_episode: lastEpisode,
      total_count: toNonNegativeInt$1(item.total_count)
    };
  }

  function mapHistoryItem(item) {
    if (!item) return null;
    var isEpisode = item.type === 'episode';
    var isMovie = item.type === 'movie';
    if (!isEpisode && !isMovie) return null;
    var media = isMovie ? item.movie : item.show;
    if (!media || !media.ids) return null;
    var card = {
      component: 'full',
      id: media.ids.tmdb || media.ids.trakt,
      ids: media.ids,
      title: media.title,
      original_title: media.title,
      release_date: media.year ? String(media.year) : '',
      vote_average: Number(media.rating || 0),
      poster: getImageUrl(media, 'poster'),
      image: getImageUrl(media, 'fanart'),
      method: isMovie ? 'movie' : 'tv',
      card_type: isMovie ? 'movie' : 'tv',
      trakt_watched_at: item.watched_at || null
    };
    if (isEpisode && item.episode) {
      card.trakt_history_episode = { season: item.episode.season, number: item.episode.number, title: item.episode.title, ids: item.episode.ids || {} };
    }
    return card;
  }

  function getShowHistory(tmdbId) {
    var traktId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      if (traktId) {
        requestApi('GET', "/shows/".concat(traktId, "/history")).then(function (historyData) {
          resolve(historyData);
        })["catch"](function (error) {
          reject(error);
        });
        return;
      }

      requestApi('GET', "/search/tmdb/".concat(tmdbId, "?type=show")).then(function (response) {
        if (response && response.length > 0 && response[0].show && response[0].show.ids.trakt) {
          var foundTraktId = response[0].show.ids.trakt;

          requestApi('GET', "/sync/history/shows/".concat(foundTraktId)).then(function (historyData) {
            resolve(historyData);
          })["catch"](function (error) {
            reject(error);
          });
        } else {
          reject(new Error('Show not found in Trakt'));
        }
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
  function getShowProgressData(tmdbId) {
    return requestApi('GET', '/search/tmdb/' + tmdbId + '?type=show').then(function(res) {
      if (!res || !res.length || !res[0].show || !res[0].show.ids || !res[0].show.ids.trakt) {
        throw new Error('Show not found');
      }
      var traktId = res[0].show.ids.trakt;
      return requestApi('GET', '/shows/' + traktId + '/progress/watched').then(function(prog) {
        return { traktId: traktId, progress: prog || {} };
      });
    });
  }

  function resolveTraktIds() {
    var _params$external_ids, _params$external_ids2, _params$external_ids3;
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rawIds = params.ids && Object.keys(params.ids).length ? _objectSpread2({}, params.ids) : {};
    var tmdbId = params.id || params.tmdb || ((_params$external_ids = params.external_ids) === null || _params$external_ids === void 0 ? void 0 : _params$external_ids.tmdb_id);
    var traktId = (_params$external_ids2 = params.external_ids) === null || _params$external_ids2 === void 0 ? void 0 : _params$external_ids2.trakt_id;
    var imdbId = ((_params$external_ids3 = params.external_ids) === null || _params$external_ids3 === void 0 ? void 0 : _params$external_ids3.imdb_id) || params.imdb;
    if (traktId && !rawIds.trakt) rawIds.trakt = traktId;
    if (tmdbId && !rawIds.tmdb) rawIds.tmdb = tmdbId;
    if (imdbId && !rawIds.imdb) rawIds.imdb = imdbId;
    return rawIds;
  }
  function normalizeMediaType() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (params.method || params.type || '').toString().toLowerCase();
    return method === 'movie' ? 'movie' : 'show';
  }
  function buildSyncPayload() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ids = resolveTraktIds(params);
    if (!ids || !Object.keys(ids).length) {
      throw new Error('TraktTV media ids are missing');
    }
    return normalizeMediaType(params) === 'movie' ? {
      movies: [{
        ids: ids
      }],
      shows: []
    } : {
      movies: [],
      shows: [{
        ids: ids
      }]
    };
  }
  function sameAnyId() {
    var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!left || !right) return false;
    var keys = ['trakt', 'tmdb', 'imdb'];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (left[key] && right[key] && String(left[key]) === String(right[key])) {
        return true;
      }
    }
    return false;
  }
  function extractMediaFromSyncItem() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (item.movie) return {
      media: item.movie,
      type: 'movie'
    };
    if (item.show) return {
      media: item.show,
      type: 'show'
    };
    return {
      media: null,
      type: null
    };
  }
  function normalizeListCardData(item) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref5$likedListIds = _ref5.likedListIds,
      likedListIds = _ref5$likedListIds === void 0 ? [] : _ref5$likedListIds,
      _ref5$wide = _ref5.wide,
      wide = _ref5$wide === void 0 ? false : _ref5$wide,
      _ref5$canManage = _ref5.canManage,
      canManage = _ref5$canManage === void 0 ? false : _ref5$canManage;
    var list = item && item.list ? item.list : item;
    if (!list) return null;
    var ids = list.ids || {};
    var listId = ids.trakt || list.id;
    if (!listId) return null;
    var likedIds = Array.isArray(likedListIds) ? likedListIds : [];
    var rawTitle = list.name || list.title || '';
    var title = rawTitle.replace(/^\s*\[\d+\]\s*/, '').trim();
    var description = list.description || '';
    var poster = getImageUrl(list, 'poster') || textToImage(title || rawTitle || 'List');
    var image = getImageUrl(list, 'fanart');
    var cardTitle = wide ? '' : title;
    var card = {
      component: 'trakt_list',
      id: listId,
      list_id: listId,
      ids: ids,
      slug: ids.slug || list.slug || '',
      title: cardTitle,
      list_title: title,
      original_title: cardTitle,
      description: description,
      overview: description,
      poster: poster,
      image: image,
      cover: image || poster,
      method: 'list',
      item_count: list.item_count || 0,
      privacy: list.privacy || '',
      display_numbers: !!list.display_numbers,
      allow_comments: !!list.allow_comments,
      updated_at: list.updated_at || list.updated || '',
      can_manage: !!canManage,
      is_liked: likedIds.includes(listId)
    };
    if (wide) {
      card.params = {
        style: {
          name: 'wide'
        }
      };
    }
    return card;
  }
  function formatListCards(items) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var results = (Array.isArray(items) ? items : []).map(function (item) {
      return normalizeListCardData(item, options);
    }).filter(Boolean);
    return {
      results: results
    };
  }
  function sanitizeListPayload() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var normalized = {};
    var name = (payload.name || payload.title || '').toString().trim();
    var description = (payload.description || '').toString().trim();
    var privacy = (payload.privacy || '').toString().trim();
    if (name) normalized.name = name;
    if (description) normalized.description = description;
    if (privacy) normalized.privacy = privacy;
    if (typeof payload.display_numbers === 'boolean') normalized.display_numbers = payload.display_numbers;
    if (typeof payload.allow_comments === 'boolean') normalized.allow_comments = payload.allow_comments;
    if (typeof payload.sort_by === 'string' && payload.sort_by) normalized.sort_by = payload.sort_by;
    if (typeof payload.sort_how === 'string' && payload.sort_how) normalized.sort_how = payload.sort_how;
    return normalized;
  }
  function makePaginationMeta(items, page, limit) {
    var count = Array.isArray(items) ? items.length : 0;
    var total = (page - 1) * limit + count;
    var total_pages = count === limit ? page + 1 : page;
    return {
      total: total,
      total_pages: total_pages,
      page: page
    };
  }
  function parseResponseHeaders(jqXHR) {
    var headers = {};
    if (!jqXHR || typeof jqXHR.getAllResponseHeaders !== 'function') {
      return headers;
    }
    var raw = jqXHR.getAllResponseHeaders();
    if (!raw) return headers;
    raw.trim().split(/[\r\n]+/).forEach(function (line) {
      var separatorIndex = line.indexOf(':');
      if (separatorIndex <= 0) return;
      var key = line.slice(0, separatorIndex).trim().toLowerCase();
      var value = line.slice(separatorIndex + 1).trim();
      if (key) headers[key] = value;
    });
    return headers;
  }
  function toPositiveInt$1(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }
  function toNonNegativeInt$1(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
  }
  function resolvePaginationFromHeaders() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var fallbackPage = toPositiveInt$1(fallback.page) || 1;
    var fallbackLimit = toPositiveInt$1(fallback.limit) || 1;
    var fallbackTotal = toNonNegativeInt$1(fallback.total) || 0;
    var page = toPositiveInt$1(headers['x-pagination-page']) || fallbackPage;
    var limit = toPositiveInt$1(headers['x-pagination-limit']) || fallbackLimit;
    var total = toNonNegativeInt$1(headers['x-pagination-item-count']);
    var pageCount = toPositiveInt$1(headers['x-pagination-page-count']);
    var safeTotal = total !== null ? total : fallbackTotal;
    var safePageCount = pageCount || Math.max(1, Math.ceil(safeTotal / limit));
    return {
      page: page,
      limit: limit,
      total: safeTotal,
      total_pages: safePageCount
    };
  }
  var WATCHLIST_SORT_FIELDS = new Set(['rank', 'added', 'title', 'released', 'runtime', 'popularity', 'random', 'percentage', 'imdb_rating', 'tmdb_rating', 'rt_tomatometer', 'rt_audience', 'metascore', 'votes', 'imdb_votes', 'tmdb_votes', 'my_rating', 'watched', 'collected']);
  var WATCHLIST_VIP_SORT_FIELDS = new Set(['imdb_rating', 'tmdb_rating', 'rt_tomatometer', 'rt_audience', 'metascore', 'votes', 'imdb_votes', 'tmdb_votes']);
  function normalizeWatchlistSort(rawSort) {
    var normalized = (rawSort || 'added/desc').toString().trim().toLowerCase().replace(/^\/+/, '');
    var parts = normalized.split('/').filter(Boolean);
    var field = WATCHLIST_SORT_FIELDS.has(parts[0]) ? parts[0] : 'added';
    var order = parts[1] === 'asc' ? 'asc' : 'desc';
    return "".concat(field, "/").concat(order);
  }
  function normalizeWatchlistMediaType(rawType) {
    var value = (rawType || '').toString().trim().toLowerCase();
    if (value === 'movie' || value === 'movies') return 'movies';
    if (value === 'show' || value === 'shows' || value === 'tv' || value === 'series' || value === 'serials') return 'shows';
    if (value === 'all' || value === 'mixed' || value === 'movies,shows') return 'movies,shows';
    return 'movies,shows';
  }
  function resolveWatchlistPagination() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 36;
    var hasHeaderPagination = !!(toPositiveInt$1(headers['x-pagination-page']) || toPositiveInt$1(headers['x-pagination-limit']) || toPositiveInt$1(headers['x-pagination-page-count']) || toNonNegativeInt$1(headers['x-pagination-item-count']) !== null);
    if (hasHeaderPagination) {
      return resolvePaginationFromHeaders(headers, {
        page: page,
        limit: limit,
        total: (Math.max(1, page) - 1) * Math.max(1, limit) + (Array.isArray(items) ? items.length : 0)
      });
    }
    var fallback = makePaginationMeta(items, page, limit);
    return {
      page: page,
      limit: limit,
      total: fallback.total,
      total_pages: fallback.total_pages
    };
  }
  function buildWatchlistUrl() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref6$mediaType = _ref6.mediaType,
      mediaType = _ref6$mediaType === void 0 ? 'movies,shows' : _ref6$mediaType,
      _ref6$sort = _ref6.sort,
      sort = _ref6$sort === void 0 ? 'added/desc' : _ref6$sort,
      _ref6$page = _ref6.page,
      page = _ref6$page === void 0 ? 1 : _ref6$page,
      _ref6$limit = _ref6.limit,
      limit = _ref6$limit === void 0 ? 36 : _ref6$limit,
      uncollected = _ref6.uncollected;
    var query = new URLSearchParams({
      extended: 'full,images',
      page: String(page),
      limit: String(limit)
    });
    if (typeof uncollected !== 'undefined' && uncollected !== null) {
      var normalized = typeof uncollected === 'string' ? uncollected.toLowerCase().trim() : uncollected;
      if (normalized === true || normalized === 'true' || normalized === 1 || normalized === '1') {
        query.set('uncollected', 'true');
      } else if (normalized === false || normalized === 'false' || normalized === 0 || normalized === '0') {
        query.set('uncollected', 'false');
      }
    }
    return "/sync/watchlist/".concat(mediaType, "/").concat(sort, "?").concat(query.toString());
  }

  var api$1 = {
    addToHistory: addToHistory$1,
    watchedMovies: function() { return requestApi('GET', '/sync/watched/movies'); },
    watchedShows: function() { return requestApi('GET', '/sync/watched/shows'); },
    watchlistMovies: function() { return requestApi('GET', '/sync/watchlist/movies?extended=full'); },
    watchlistShows: function() { return requestApi('GET', '/sync/watchlist/shows?extended=full'); },
    showWatchedProgress: function(traktId) { return requestApi('GET', '/shows/' + traktId + '/progress/watched'); },
    watchlistSortFields: Array.from(WATCHLIST_SORT_FIELDS),
    watchlistVipSortFields: Array.from(WATCHLIST_VIP_SORT_FIELDS),
    normalizeWatchlistSort: normalizeWatchlistSort,
    isWatchlistVipSort: function isWatchlistVipSort() {
      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return WATCHLIST_VIP_SORT_FIELDS.has((field || '').toString().trim().toLowerCase());
    },
    formatListsResults: function formatListsResults(items) {
      var likedListIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      try {
        return formatListCards(items, _objectSpread2({
          likedListIds: likedListIds
        }, options));
      } catch (error) {
        return {
          results: []
        };
      }
    },
    get: function get(url) {
      var unauthorized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return requestApi('GET', url, {}, unauthorized);
    },
    // Normalize ids for watchlist/history operations.
    // Prefer params.ids when filled; fall back to tmdb_id/trakt_id when needed.
    recommendations: function recommendations() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = options.limit || 36;
      var page = options.page || 1;
      var fetchLimit = limit * 5;
      var filterType = options.filterType || 'all';
      var extraParams = {};
      if (options.filterGenre) extraParams.genres = options.filterGenre;
      if (options.filterYear) extraParams.years = options.filterYear;
      if (options.filterCountry) extraParams.countries = options.filterCountry;
      if (typeof options.ignoreWatched === 'boolean') extraParams.ignoreWatched = options.ignoreWatched;
      var moviesRequest = filterType === 'tv' ? Promise.resolve([]) : requestApi('GET', buildRecommendationsUrl$1('movies', fetchLimit, extraParams));
      var showsRequest = filterType === 'movie' ? Promise.resolve([]) : requestApi('GET', buildRecommendationsUrl$1('shows', fetchLimit, extraParams));
      return Promise.allSettled([moviesRequest, showsRequest]).then(function (responses) {
        var moviesState = responses[0];
        var showsState = responses[1];
        var moviesResponse = moviesState && moviesState.status === 'fulfilled' && Array.isArray(moviesState.value) ? moviesState.value : [];
        var showsResponse = showsState && showsState.status === 'fulfilled' && Array.isArray(showsState.value) ? showsState.value : [];
        if (moviesState && moviesState.status === 'rejected') {
          logWarn('recommendations: movies request failed', moviesState.reason, {
            debugOnly: true
          });
        }
        if (showsState && showsState.status === 'rejected') {
          logWarn('recommendations: shows request failed', showsState.reason, {
            debugOnly: true
          });
        }
        var formattedMovies = moviesResponse.map(function (movie) {
          return {
            component: 'full',
            id: movie.ids.tmdb,
            ids: movie.ids,
            title: movie.title,
            original_title: movie.title,
            release_date: movie.year + '',
            vote_average: Number(movie.rating || 0),
            runtime: Number(movie.runtime || 0),
            votes: Number(movie.votes || 0),
            poster: getImageUrl(movie, 'poster'),
            method: 'movie',
            card_type: 'movie'
          };
        });
        var formattedShows = showsResponse.map(function (show) {
          return {
            component: 'full',
            id: show.ids.tmdb,
            ids: show.ids,
            title: show.title,
            original_title: show.title,
            original_name: show.original_title || show.title || '',
            release_date: show.year + '',
            vote_average: Number(show.rating || 0),
            runtime: Number(show.runtime || 0),
            votes: Number(show.votes || 0),
            poster: getImageUrl(show, 'poster'),
            type: 'tv',
            method: 'tv',
            card_type: 'tv'
          };
        });
        var combinedResults = [].concat(_toConsumableArray(formattedMovies), _toConsumableArray(formattedShows));
        if (!combinedResults.length) {
          if (moviesState.status === 'rejected' && showsState.status === 'rejected') {
            throw moviesState.reason || showsState.reason || new Error('Recommendations request failed');
          }
          return {
            results: [],
            total: 0,
            total_pages: 1,
            page: page
          };
        }
        var _sf = options.sortField || 'random';
        var _so = options.sortOrder || 'desc';
        var _numSort = function(getVal) {
          combinedResults.sort(function(a, b) { var va = getVal(a), vb = getVal(b); return _so === 'asc' ? va - vb : vb - va; });
        };
        switch (_sf) {
          case 'title':
            combinedResults.sort(function(a, b) {
              var ta = (a.title || '').toLowerCase(), tb = (b.title || '').toLowerCase();
              return _so === 'asc' ? (ta > tb ? 1 : ta < tb ? -1 : 0) : (ta < tb ? 1 : ta > tb ? -1 : 0);
            });
            break;
          case 'released':
            _numSort(function(x) { return parseInt(x.release_date, 10) || 0; });
            break;
          case 'runtime':
            _numSort(function(x) { return Number(x.runtime) || 0; });
            break;
          case 'percentage': case 'imdb_rating': case 'tmdb_rating':
          case 'rt_tomatometer': case 'rt_audience': case 'metascore':
            _numSort(function(x) { return Number(x.vote_average) || 0; });
            break;
          case 'popularity': case 'votes': case 'imdb_votes': case 'tmdb_votes':
            _numSort(function(x) { return Number(x.votes) || 0; });
            break;
          case 'rank': case 'added': case 'my_rating': case 'watched': case 'collected':
            break;
          default:
            for (var i = combinedResults.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var _ref7 = [combinedResults[j], combinedResults[i]];
              combinedResults[i] = _ref7[0];
              combinedResults[j] = _ref7[1];
            }
        }
        var total = combinedResults.length;
        var total_pages = Math.max(1, Math.ceil(total / limit));
        var offset = (page - 1) * limit;
        var paginatedResults = combinedResults.slice(offset, offset + limit);
        return enrichWithTmdbLocale({
          results: paginatedResults,
          total: total,
          total_pages: total_pages,
          page: page
        });
      });
    },
    watchlist: function watchlist() {
      var self = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = Math.max(1, parseInt(params.page, 10) || 1);
      var limit = Math.max(1, parseInt(params.limit, 10) || 36);
      var sort = normalizeWatchlistSort(params.sort || params.watchlistSort);
      var mediaType = normalizeWatchlistMediaType(params.mediaType || params.watchlistType || params.type);
      if (mediaType === 'movies,shows') {
        var half = Math.ceil(limit / 2);
        var mParams = Object.assign({}, params, { mediaType: 'movies', limit: half });
        var sParams = Object.assign({}, params, { mediaType: 'shows', limit: half });
        return Promise.all([
          self.watchlist(mParams).catch(function() { return { results: [], total: 0, total_pages: 1, page: page, limit: half }; }),
          self.watchlist(sParams).catch(function() { return { results: [], total: 0, total_pages: 1, page: page, limit: half }; })
        ]).then(function(res) {
          var combined = (res[0].results || []).concat(res[1].results || []);
          return enrichWithTmdbLocale({
            results: combined,
            total: (res[0].total || 0) + (res[1].total || 0),
            total_pages: Math.max(res[0].total_pages || 1, res[1].total_pages || 1),
            page: page,
            limit: limit
          });
        });
      }
      var url = buildWatchlistUrl({
        mediaType: mediaType,
        sort: sort,
        page: page,
        limit: limit,
        uncollected: params.uncollected
      });
      return requestApi('GET', url, {}, false, 0, {
        withMeta: true
      }).then(function (response) {
        var payload = response && Array.isArray(response.data) ? response.data : [];
        var headers = response && response.headers ? response.headers : {};
        var formatted = formatTraktResults(payload);
        var pagination = resolveWatchlistPagination(headers, payload, page, limit);
        var mwEnabled = readBooleanStorage$2('trakt_multiwatch_enabled', false);
        var mwTokens = mwEnabled ? multiAccountGetMultiwatchTokens() : [];
        var buildBase = function(results) {
          return enrichWithTmdbLocale({
            results: results,
            total: pagination.total,
            total_pages: pagination.total_pages,
            page: pagination.page,
            limit: pagination.limit
          });
        };
        if (!mwTokens.length) return buildBase(formatted.results || []);
        return ensureMultiwatchIdsCache().then(function() {
          return buildBase(filterByMultiwatchIds(formatted.results || []));
        }).catch(function() {
          return buildBase(formatted.results || []);
        });
      });
    },
    upnext: function upnext(params) {
      var requestedPage = Math.max(1, parseInt(params && params.page, 10) || 1);
      var requestedLimit = Math.max(1, parseInt(params && params.limit, 10) || 36);
      var query = new URLSearchParams({
        page: String(requestedPage),
        limit: String(requestedLimit)
      });
      var url = "/sync/progress/up_next_nitro?".concat(query.toString());
      return requestApi('GET', url, {}, false, 0, {
        withMeta: true
      }).then(function (response) {
        var payload = response && Array.isArray(response.data) ? response.data : [];
        var headers = response && response.headers ? response.headers : {};
        var mapped = payload.map(mapUpNextNitroItem).filter(Boolean);
        var bodyTotal = toNonNegativeInt$1(payload && payload[0] && payload[0].total_count);
        var fallbackTotal = bodyTotal !== null ? bodyTotal : (requestedPage - 1) * requestedLimit + mapped.length;
        var pagination = resolvePaginationFromHeaders(headers, {
          page: requestedPage,
          limit: requestedLimit,
          total: fallbackTotal
        });
        return applyMultiwatchFilter(Promise.resolve(enrichWithTmdbLocale({
          results: mapped,
          total: pagination.total,
          total_pages: pagination.total_pages,
          page: pagination.page,
          limit: pagination.limit
        })));
      });
    },
    history: function(params) {
      var page = Math.max(1, parseInt(params && params.page, 10) || 1);
      var limit = Math.max(1, parseInt(params && params.limit, 10) || 36);
      return requestApi('GET', '/sync/history?extended=full&limit=' + limit + '&page=' + page, {}, false, 0, { withMeta: true }).then(function(response) {
        var payload = response && Array.isArray(response.data) ? response.data : [];
        var headers = response && response.headers ? response.headers : {};
        var mapped = payload.map(mapHistoryItem).filter(Boolean);
        var pagination = resolvePaginationFromHeaders(headers, { page: page, limit: limit, total: (page - 1) * limit + mapped.length });
        var base = { results: mapped, total: pagination.total, total_pages: pagination.total_pages, page: pagination.page, limit: pagination.limit };
        return applyMultiwatchFilter(Promise.resolve(enrichWithTmdbLocale(base)));
      });
    },
    watching: function(params) {
      var page = Math.max(1, parseInt(params && params.page, 10) || 1);
      var limit = 36;
      var activeStatuses = ['returning series', 'in production', 'planned', 'pilot'];
      var watchedPromise = requestApi('GET', '/sync/watched/shows?extended=full', {}, false, 300);
      var hiddenPromise = requestApi('GET', '/users/me/hidden/progress_watched?type=show&limit=500', {}, false, 300).then(function(h) {
        var set = {};
        if (Array.isArray(h)) h.forEach(function(entry) {
          var ids = entry && entry.show && entry.show.ids;
          if (ids) {
            if (ids.trakt) set['trakt_' + ids.trakt] = true;
            if (ids.tmdb) set['tmdb_' + ids.tmdb] = true;
          }
        });
        return set;
      })['catch'](function() { return {}; });
      return Promise.all([watchedPromise, hiddenPromise]).then(function(results) {
        var items = results[0];
        var hiddenSet = results[1];
        if (!Array.isArray(items)) return { results: [], total: 0, total_pages: 1, page: 1, limit: limit };
        var filtered = items.filter(function(item) {
          var show = item && item.show;
          if (!show || !show.ids || !show.ids.tmdb) return false;
          var ids = show.ids;
          if (hiddenSet['trakt_' + ids.trakt] || hiddenSet['tmdb_' + ids.tmdb]) return false;
          var status = (show.status || '').toLowerCase();
          return activeStatuses.some(function(s) { return status === s; });
        });
        filtered.sort(function(a, b) {
          var da = a.last_watched_at || '';
          var db = b.last_watched_at || '';
          return da > db ? -1 : da < db ? 1 : 0;
        });
        var total = filtered.length;
        var start = (page - 1) * limit;
        var pageItems = filtered.slice(start, start + limit);
        var mapped = pageItems.map(function(item) {
          var show = item.show;
          return {
            component: 'full',
            id: show.ids.tmdb,
            ids: show.ids,
            title: show.title,
            original_title: show.title,
            release_date: show.year ? String(show.year) : '',
            vote_average: Number(show.rating || 0),
            method: 'tv',
            card_type: 'tv'
          };
        });
        return applyMultiwatchFilter(Promise.resolve(enrichWithTmdbLocale({
          results: mapped,
          total: total,
          total_pages: Math.max(1, Math.ceil(total / limit)),
          page: page,
          limit: limit
        })));
      });
    },
    removeFromHistory: function(element) {
      if (!element) return Promise.reject(new Error('No element'));
      var body;
      if (element.method === 'movie') {
        body = { movies: [{ ids: element.ids }] };
      } else {
        var ep = element.trakt_history_episode;
        if (ep) {
          body = { shows: [{ ids: element.ids, seasons: [{ number: ep.season, episodes: [{ number: ep.number }] }] }] };
        } else {
          body = { shows: [{ ids: element.ids }] };
        }
      }
      return requestApi('POST', '/sync/history/remove', body);
    },
    collection: function(params) {
      var page = Math.max(1, parseInt(params && params.page, 10) || 1);
      var limit = Math.max(1, parseInt(params && params.limit, 10) || 36);
      var safeGet = function(url) {
        return requestApi('GET', url).then(function(r) {
          return Array.isArray(r) ? r : [];
        }).catch(function() { return []; });
      };
      return Promise.all([
        safeGet('/users/me/favorites/movies?extended=full&limit=1000&page=1'),
        safeGet('/users/me/favorites/shows?extended=full&limit=1000&page=1')
      ]).then(function(results) {
        var raw = results[0].concat(results[1]);
        var mapped = formatTraktResults(raw).results;
        var start = (page - 1) * limit;
        var pageItems = mapped.slice(start, start + limit);
        var total_pages = Math.ceil(mapped.length / limit) || 1;
        var base = { results: pageItems, total: mapped.length, total_pages: total_pages, page: page, limit: limit };
        return applyMultiwatchFilter(Promise.resolve(enrichWithTmdbLocale(base)));
      });
    },
    auth: {
      /**
       * Build Standard OAuth authorize URL
       * params: { redirect_uri, state?, signup?, prompt? }
       */
      startStandardOAuth: function startStandardOAuth() {
        var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          redirect_uri = _ref8.redirect_uri,
          state = _ref8.state,
          signup = _ref8.signup,
          prompt = _ref8.prompt;
        var base = "".concat(API_URL, "oauth/authorize");
        var qs = new URLSearchParams({
          redirect_uri: redirect_uri,
          response_type: 'code'
        });
        if (state) qs.set('state', state);
        if (typeof signup !== 'undefined') qs.set('signup', String(signup));
        if (prompt) qs.set('prompt', prompt);
        return base + '?' + qs.toString();
      },
      /**
       * Exchange authorization code for tokens
       * Body: { code, redirect_uri, grant_type: 'authorization_code' }
       * unauthorized = true
       */
      exchangeCode: function exchangeCode(_ref9) {
        var code = _ref9.code,
          redirect_uri = _ref9.redirect_uri;
        return requestApi('POST', '/oauth/token', {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code',
          client_id: getClientId(),
          client_secret: getClientSecret()
        }, true).then(function (res) {
          if (res && res.access_token) {
            saveTokens(res);
          }
          return res;
        })["catch"](function (error) {
          if (error && error.status === 400) {
            setAuthBlocked('oauth_exchange_failed_400');
          }
          throw error;
        });
      },
      /**
       * Refresh tokens using refresh_token
       * unauthorized = true
       */
      refresh: function refresh() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return runRefreshFlow(_objectSpread2({
          reason: 'manual-refresh'
        }, options));
      },
      ensureValid: function ensureValid() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return ensureValidAccessToken(options);
      },
      storeTokens: function storeTokens() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        saveTokens(response);
        return response;
      },
      clear: function clear() {
        clearAuthBlocked();
        clearAuthStorage();
      },
      /**
       * Revoke token best-effort
       * unauthorized = true
       */
      revoke: function revoke(_ref0) {
        var token = _ref0.token;
        return requestApi('POST', '/oauth/revoke', {
          token: token,
          client_id: getClientId(),
          client_secret: getClientSecret()
        }, true);
      },
      device: {
        /**
         * Device OAuth: start
         */
        login: function login() {
          var url = '/oauth/device/code';
          return rlWaitForSlot(url).then(function () {
            return _performRequest('POST', url, { client_id: getClientId() }, true);
          }).then(function (res) {
            rlRecordRequest(url, 200);
            return res;
          })["catch"](function (error) {
            rlRecordRequest(url, Number(error && error.status) || 0);
            throw error;
          });
        },
        /**
         * Device OAuth: poll token
         * unauthorized = true
         */
        poll: function poll(device_code) {
          var url = '/oauth/device/token';
          return rlWaitForSlot(url).then(function () {
            return _performRequest('POST', url, {
              code: device_code,
              client_id: getClientId(),
              client_secret: getClientSecret()
            }, true);
          }).then(function (response) {
            rlRecordRequest(url, 200);
            return response;
          })["catch"](function (error) {
            var status = Number(error && error.status) || 0;
            rlRecordRequest(url, status);
            if (status === 429) {
              var retryAfterSec = parseRetryAfterMs$1(error && error.headers ? error.headers : {});
              rlEnterCooldown(retryAfterSec ? Math.round(retryAfterSec / 1000) : undefined);
              logWarn('Trakt rate limit on device auth, global cooldown entered', {
                cooldownMs: rlGetCooldownRemainingMs()
              }, {
                debugOnly: true
              });
            }
            if (error && status === 400) {
              var payload = error && error.response;
              var code = payload && _typeof(payload) === 'object' ? String(payload.error || payload.error_code || '').toLowerCase() : '';
              if (code && code !== 'authorization_pending') {
                setAuthBlocked("device_poll_failed_".concat(code));
              }
            }
            throw error;
          });
        }
      },
      logout: function logout() {
        clearAuthBlocked();
        clearAuthStorage();
      }
    },
    addToWatchlist: function addToWatchlist(params) {
      return requestApi('POST', '/sync/watchlist', buildSyncPayload(params));
    },
    removeFromWatchlist: function removeFromWatchlist(params) {
      return requestApi('POST', '/sync/watchlist/remove', buildSyncPayload(params));
    },
    inWatchlist: function inWatchlist(params) {
      var type = normalizeMediaType(params) === 'movie' ? 'movies' : 'shows';
      var ids = resolveTraktIds(params);
      return requestApi('GET', "/sync/watchlist/".concat(type, "?extended=full")).then(function (response) {
        var found = (Array.isArray(response) ? response : []).find(function (item) {
          var entity = extractMediaFromSyncItem(item);
          return entity.media && sameAnyId(entity.media.ids || {}, ids);
        });
        return !!found;
      });
    },
    inHistory: function inHistory(params) {
      var type = normalizeMediaType(params) === 'movie' ? 'movies' : 'shows';
      var ids = resolveTraktIds(params);
      return requestApi('GET', "/sync/history/".concat(type, "?extended=full")).then(function (response) {
        var found = (Array.isArray(response) ? response : []).find(function (item) {
          var entity = extractMediaFromSyncItem(item);
          return entity.media && sameAnyId(entity.media.ids || {}, ids);
        });
        return !!found;
      });
    },
    // liked lists (read-only)
    likesLists: function likesLists() {
      var _this = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = params.page || 1;
      var limit = params.limit || 36;
      return requestApi('GET', "/users/me/likes/lists?limit=".concat(limit, "&page=").concat(page, "&extended=images")).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var likedListIds = raw.map(function (item) {
          var _item$list;
          return item === null || item === void 0 || (_item$list = item.list) === null || _item$list === void 0 || (_item$list = _item$list.ids) === null || _item$list === void 0 ? void 0 : _item$list.trakt;
        }).filter(Boolean);
        var formatted = _this.formatListsResults(raw, likedListIds, {
          wide: false,
          canManage: false
        });
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    // alias for backward compatibility
    lists: function lists() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.likesLists(params);
    },
    // personal lists (CRUD enabled)
    myLists: function myLists() {
      var _this2 = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = params.page || 1;
      var limit = params.limit || 36;
      return requestApi('GET', "/users/me/lists?limit=".concat(limit, "&page=").concat(page, "&extended=images")).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = _this2.formatListsResults(raw, [], {
          wide: true,
          canManage: true
        });
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    myList: function myList() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.listId || params.id;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('GET', "/users/me/lists/".concat(encodeURIComponent(listId), "?extended=images")).then(function (response) {
        return normalizeListCardData(response, {
          wide: true,
          canManage: true
        });
      });
    },
    createList: function createList() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var body = sanitizeListPayload(payload);
      if (!body.name) return Promise.reject(new Error('List name is missing'));
      if (!body.privacy) body.privacy = 'private';
      return requestApi('POST', '/users/me/lists', body);
    },
    updateList: function updateList() {
      var _ref1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref1.listId,
        payload = _ref1.payload;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var body = sanitizeListPayload(payload);
      if (!body.name) return Promise.reject(new Error('List name is missing'));
      return requestApi('PUT', "/users/me/lists/".concat(encodeURIComponent(listId)), body);
    },
    deleteList: function deleteList() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref10.listId;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('DELETE', "/users/me/lists/".concat(encodeURIComponent(listId)));
    },
    addToList: function addToList() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref11.listId,
        item = _ref11.item;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('POST', "/users/me/lists/".concat(encodeURIComponent(listId), "/items"), buildSyncPayload(item || {}));
    },
    removeFromList: function removeFromList() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref12.listId,
        item = _ref12.item;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('POST', "/users/me/lists/".concat(encodeURIComponent(listId), "/items/remove"), buildSyncPayload(item || {}));
    },
    myListItems: function myListItems() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.listId || params.id;
      var page = params.page || 1;
      var limit = params.limit || 36;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var url = "/users/me/lists/".concat(encodeURIComponent(listId), "/items?extended=full,images&page=").concat(page, "&limit=").concat(limit);
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = formatTraktResults(raw);
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    inList: function inList() {
      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref13.listId,
        item = _ref13.item,
        _ref13$limit = _ref13.limit,
        limit = _ref13$limit === void 0 ? 100 : _ref13$limit,
        _ref13$maxPages = _ref13.maxPages,
        maxPages = _ref13$maxPages === void 0 ? 10 : _ref13$maxPages;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var ids = resolveTraktIds(item || {});
      if (!Object.keys(ids).length) return Promise.resolve(false);
      var page = 1;
      var _checkPage = function checkPage() {
        var url = "/users/me/lists/".concat(encodeURIComponent(listId), "/items?extended=images&page=").concat(page, "&limit=").concat(limit);
        return requestApi('GET', url).then(function (response) {
          var raw = Array.isArray(response) ? response : [];
          var found = raw.some(function (entry) {
            var entity = extractMediaFromSyncItem(entry);
            return entity.media && sameAnyId(entity.media.ids || {}, ids);
          });
          if (found) return true;
          if (!raw.length || raw.length < limit || page >= maxPages) return false;
          page += 1;
          return _checkPage();
        });
      };
      return _checkPage();
    },
    // public list detail (liked/shared)
    list: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.id || params.list_id || params.listId;
      var page = params.page || 1;
      var limit = params.limit || 36;
      if (!listId) {
        return Promise.reject(new Error('List ID is missing'));
      }
      var url = "/lists/".concat(encodeURIComponent(listId), "/items?extended=full,images&page=").concat(page, "&limit=").concat(limit);
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = formatTraktResults(raw);
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    getMediaLists: function getMediaLists(params) {
      return new Promise(function (resolve, reject) {
        var tmdbId = params.id;
        var mediaType = params.method; // 'movie' or 'show'

        if (!tmdbId || !mediaType) {
          reject(new Error('Media ID or type is missing'));
          return;
        }

          requestApi('GET', "/search/tmdb/".concat(tmdbId, "?type=").concat(mediaType)).then(function (searchResponse) {
          var traktId = null;
          if (searchResponse && searchResponse.length > 0) {
            if (mediaType === 'movie' && searchResponse[0].movie) {
              traktId = searchResponse[0].movie.ids.trakt;
            } else if (mediaType === 'show' && searchResponse[0].show) {
              traktId = searchResponse[0].show.ids.trakt;
            }
          }
          if (!traktId) {
            reject(new Error("Trakt ID not found for TMDB ID: ".concat(tmdbId)));
            return;
          }
          var url = '';
          if (mediaType === 'movie') {
            url = "/movies/".concat(traktId, "/lists");
          } else if (mediaType === 'show') {
            url = "/shows/".concat(traktId, "/lists");
          }
          requestApi('GET', url).then(function (response) {
            var formattedData = api$1.formatListsResults(response);
            resolve(formattedData.results);
          })["catch"](function (error) {
            reject(error);
          });
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    dvdCalendar: function dvdCalendar() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = Math.max(1, parseInt(params.limit, 10) || 36);
      var page = Math.max(1, parseInt(params.page, 10) || 1);
      var now = new Date();
      var startDate = new Date(now);
      startDate.setDate(now.getDate() - 3);
      var yyyy = startDate.getFullYear();
      var mm = String(startDate.getMonth() + 1).padStart(2, '0');
      var dd = String(startDate.getDate()).padStart(2, '0');
      var dateString = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
      var days = 31;
      var url = "/calendars/my/dvd/".concat(dateString, "/").concat(days, "?extended=full,images");
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = formatTraktResults(raw);
        var total = raw.length;
        return {
          results: formatted.results || [],
          total: total,
          total_pages: Math.max(1, Math.ceil(total / limit)),
          page: page
        };
      });
    },
    calendar: function calendar() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = Math.max(1, parseInt(params.limit, 10) || 36);
      var page = Math.max(1, parseInt(params.page, 10) || 1);

      // Calculate date range: 3 days ago to 3 days ahead (7 days total)
      var now = new Date();
      var startDate = new Date(now);
      startDate.setDate(now.getDate() - 3);
      var yyyy = startDate.getFullYear();
      var mm = String(startDate.getMonth() + 1).padStart(2, '0');
      var dd = String(startDate.getDate()).padStart(2, '0');
      var dateString = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
      var days = 7;
      var url = "/calendars/my/shows/".concat(dateString, "/").concat(days, "?extended=full,images");
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];

        // Group by show TMDB ID to deduplicate
        var showMap = {};
        raw.forEach(function (item) {
          var show = item && item.show;
          var episode = item && item.episode;
          if (!show || !show.ids) return;
          var tmdbId = show.ids.tmdb;
          if (!tmdbId) return;
          if (!showMap[tmdbId]) {
            showMap[tmdbId] = {
              show: show,
              first_aired: item.first_aired,
              episode: episode
            };
          }
        });
        var shows = Object.values(showMap);

        // Shuffle for variety
        for (var i = shows.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var _ref14 = [shows[j], shows[i]];
          shows[i] = _ref14[0];
          shows[j] = _ref14[1];
        }
        var total = shows.length;
        var offset = (page - 1) * limit;
        var paginated = shows.slice(offset, offset + limit);
        var results = paginated.map(function (_ref15) {
          var show = _ref15.show,
            first_aired = _ref15.first_aired,
            episode = _ref15.episode;
          var releaseDate = first_aired ? String(first_aired).slice(0, 10) : show.year ? String(show.year) : '';
          return {
            component: 'full',
            id: show.ids.tmdb,
            ids: show.ids,
            title: show.title,
            original_title: show.title,
            original_name: show.title,
            name: show.title,
            release_date: releaseDate,
            vote_average: Number(show.rating || 0),
            poster: getImageUrl(show, 'poster'),
            image: getImageUrl(show, 'fanart'),
            method: 'tv',
            type: 'tv',
            card_type: 'tv',
            source: 'tmdb',
            season: episode ? episode.season : null,
            episode: episode ? episode.number : null,
            episode_title: episode ? episode.title : null,
            air_date: releaseDate
          };
        });
        return applyMultiwatchFilter(Promise.resolve({
          results: results,
          total: total,
          total_pages: Math.max(1, Math.ceil(total / limit)),
          page: page
        }));
      });
    }
  };

  // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
  var Api$2 = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;
  var API_MISSING_LOG_KEY$2 = 'component-main:api-missing';
  function logApiMissing$1() {
    logDebugOnce(API_MISSING_LOG_KEY$2, 'API bridge is unavailable in component/main');
  }

  // Version check for Lampa 3.0+ modular system
  var isLampa3 = window.Lampa && window.Lampa.Manifest && window.Lampa.Manifest.app_digital >= 300;
  var DEFAULT_WATCHLIST_SORT = 'added/desc';
  var DEFAULT_WATCHLIST_SORT_FIELDS = ['rank', 'added', 'title', 'released', 'runtime', 'popularity', 'random', 'percentage', 'imdb_rating', 'tmdb_rating', 'rt_tomatometer', 'rt_audience', 'metascore', 'votes', 'imdb_votes', 'tmdb_votes', 'my_rating', 'watched', 'collected'];
  var DEFAULT_WATCHLIST_QUICK_SORT_FIELDS = ['released', 'percentage', 'added'];
  var DEFAULT_WATCHLIST_VIP_SORT_FIELDS = ['imdb_rating', 'tmdb_rating', 'rt_tomatometer', 'rt_audience', 'metascore', 'votes', 'imdb_votes', 'tmdb_votes'];
  var WATCHLIST_SORT_LABELS = {
    rank: {
      key: 'trakttv_watchlist_sort_rank',
      fallback: 'Rank'
    },
    added: {
      key: 'trakttv_watchlist_sort_added',
      fallback: 'Added'
    },
    title: {
      key: 'trakttv_watchlist_sort_title',
      fallback: 'Title'
    },
    released: {
      key: 'trakttv_watchlist_sort_released',
      fallback: 'Released'
    },
    runtime: {
      key: 'trakttv_watchlist_sort_runtime',
      fallback: 'Runtime'
    },
    popularity: {
      key: 'trakttv_watchlist_sort_popularity',
      fallback: 'Popularity'
    },
    random: {
      key: 'trakttv_watchlist_sort_random',
      fallback: 'Random'
    },
    percentage: {
      key: 'trakttv_watchlist_sort_percentage',
      fallback: 'Percentage'
    },
    imdb_rating: {
      key: 'trakttv_watchlist_sort_imdb_rating',
      fallback: 'IMDb rating'
    },
    tmdb_rating: {
      key: 'trakttv_watchlist_sort_tmdb_rating',
      fallback: 'TMDB rating'
    },
    rt_tomatometer: {
      key: 'trakttv_watchlist_sort_rt_tomatometer',
      fallback: 'RT Tomatometer'
    },
    rt_audience: {
      key: 'trakttv_watchlist_sort_rt_audience',
      fallback: 'RT Audience'
    },
    metascore: {
      key: 'trakttv_watchlist_sort_metascore',
      fallback: 'Metascore'
    },
    votes: {
      key: 'trakttv_watchlist_sort_votes',
      fallback: 'Votes'
    },
    imdb_votes: {
      key: 'trakttv_watchlist_sort_imdb_votes',
      fallback: 'IMDb votes'
    },
    tmdb_votes: {
      key: 'trakttv_watchlist_sort_tmdb_votes',
      fallback: 'TMDB votes'
    },
    my_rating: {
      key: 'trakttv_watchlist_sort_my_rating',
      fallback: 'My rating'
    },
    watched: {
      key: 'trakttv_watchlist_sort_watched',
      fallback: 'Watched'
    },
    collected: {
      key: 'trakttv_watchlist_sort_collected',
      fallback: 'Collected'
    }
  };
  var traktVipStatusCache = null;
  var traktVipStatusPromise = null;
  function resolveUpnextProgress$1() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var watched = Number(element.trakt_upnext_watched);
    var total = Number(element.trakt_upnext_total);
    var text = (element.trakt_upnext_progress || '').toString().trim();
    var safeWatched = Number.isFinite(watched) ? watched : 0;
    var safeTotal = Number.isFinite(total) ? total : 0;
    if (!text && safeTotal > 0) {
      text = "".concat(safeWatched, "/").concat(safeTotal);
    }
    if ((!safeWatched || !safeTotal) && text.indexOf('/') > -1) {
      var parts = text.split('/');
      var parsedWatched = Number(parts[0]);
      var parsedTotal = Number(parts[1]);
      if (Number.isFinite(parsedWatched) && parsedWatched >= 0) safeWatched = parsedWatched;
      if (Number.isFinite(parsedTotal) && parsedTotal > 0) safeTotal = parsedTotal;
    }
    if (!text) return null;
    var percent = safeTotal > 0 ? Math.max(0, Math.min(100, Math.round(safeWatched / safeTotal * 100))) : null;
    return {
      text: text,
      percent: percent
    };
  }
  function renderUpnextCardWatched(card, element) {
    var progress = resolveUpnextProgress$1(element || {});
    if (!progress) return;
    var cardNode = card && typeof card.render === 'function' ? card.render(true) : null;
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardView) return;
    var wrap = cardView.querySelector('.card-watched.trakt-upnext-watched');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'card-watched trakt-upnext-watched';
      wrap.innerHTML = '<div class="card-watched__inner"><div class="card-watched__body"></div></div>';
      cardView.insertBefore(wrap, cardView.firstChild);
    }
    var body = wrap.querySelector('.card-watched__body');
    if (!body) return;
    var row = body.querySelector('.card-watched__item.trakt-upnext-watched__item');
    if (!row) {
      row = document.createElement('div');
      row.className = 'card-watched__item trakt-upnext-watched__item';
      row.innerHTML = '<span></span><div class="time-line"><div></div></div>';
      body.innerHTML = '';
      body.appendChild(row);
    }
    var title = row.querySelector('span');
    if (title) title.textContent = progress.text;
    var bar = row.querySelector('.time-line > div');
    if (bar) bar.style.width = "".concat(progress.percent || 0, "%");
  }
  function renderTvTypeBadge(card, element) {
    if (!element || element.method !== 'tv' && element.type !== 'show') return;
    var cardNode = card && typeof card.render === 'function' ? card.render(true) : null;
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardNode || !cardView) return;
    cardNode.classList.add('card--tv');
    if (!cardView.querySelector('.card__type')) {
      var type = document.createElement('div');
      type.className = 'card__type';
      type.textContent = Lampa.Lang.translate('trakttv_card_type_tv');
      cardView.appendChild(type);
    }
  }
  var _tmdbLocaleCache = {};
  function enrichWithTmdbLocale(data) {
    var lang = Lampa.Storage ? Lampa.Storage.get('language', 'ru') : 'ru';
    if (!data || !Array.isArray(data.results) || !data.results.length) return Promise.resolve(data);
    if (!Lampa.TMDB || !Lampa.Reguest) return Promise.resolve(data);
    var promises = data.results.map(function (item) {
      var tmdbId = item.id;
      var type = item.method === 'movie' ? 'movie' : 'tv';
      if (!tmdbId) return Promise.resolve(item);
      var cacheKey = type + '/' + tmdbId + '/' + lang;
      if (_tmdbLocaleCache[cacheKey]) {
        var cached = _tmdbLocaleCache[cacheKey];
        if (cached.title) item.title = cached.title;
        if (cached.poster) item.poster = cached.poster;
        if (cached.image) item.image = cached.image;
        return Promise.resolve(item);
      }
      return new Promise(function (resolve) {
        var url = Lampa.TMDB.api(type + '/' + tmdbId + '?api_key=' + Lampa.TMDB.key() + '&language=' + lang);
        var network = new Lampa.Reguest();
        network.silent(url, function (d) {
          var entry = {};
          var localTitle = d && (d.title || d.name);
          if (localTitle) { item.title = localTitle; entry.title = localTitle; }
          if (d && d.poster_path) { item.poster = 'https://image.tmdb.org/t/p/w500' + d.poster_path; entry.poster = item.poster; }
          if (d && d.backdrop_path) { item.image = 'https://image.tmdb.org/t/p/w1280' + d.backdrop_path; entry.image = item.image; }
          _tmdbLocaleCache[cacheKey] = entry;
          resolve(item);
        }, function () { resolve(item); });
      });
    });
    return Promise.all(promises).then(function (enriched) {
      return Object.assign({}, data, { results: enriched });
    });
  }
  function rearrangeUpnextNotStarted(data) {
    if (!data || !Array.isArray(data.results)) return data;
    var started = [], notStarted = [];
    data.results.forEach(function (item) {
      var watched = Number(item.trakt_upnext_watched);
      if (Number.isFinite(watched) && watched === 0) {
        notStarted.push(item);
      } else {
        started.push(item);
      }
    });
    if (notStarted.length > 0) notStarted[0]._trakt_upnext_first_unstarted = true;
    return Object.assign({}, data, { results: started.concat(notStarted) });
  }
  function insertUpnextNotStartedDivider(comp) {
    var container = comp && typeof comp.render === 'function' ? comp.render(true) : null;
    if (!container) return;
    if (container.querySelector('.trakt-upnext-notstarted-section')) return;
    var firstUnstarted = container.querySelector('.trakt-upnext-first-unstarted');
    if (!firstUnstarted || !firstUnstarted.parentNode) return;
    var label = Lampa.Lang && Lampa.Lang.translate ? Lampa.Lang.translate('trakttv_upnext_not_started') || 'Не начатые' : 'Не начатые';
    var div = document.createElement('div');
    div.className = 'trakt-upcoming-section trakt-upnext-notstarted-section';
    div.textContent = label;
    firstUnstarted.parentNode.insertBefore(div, firstUnstarted);
  }
  function renderHistoryDateBadge(card, element) {
    if (!element || !element.trakt_watched_at) return;
    var cardNode = typeof card.render === 'function' ? card.render(true) : null;
    if (!cardNode) return;
    var cardView = cardNode.querySelector('.card__view');
    if (!cardView || cardView.querySelector('.trakt-history-date-badge')) return;
    var date = new Date(element.trakt_watched_at);
    var now = new Date();
    var day = date.getDate();
    var month = date.toLocaleString('ru', { month: 'short' }).replace('.', '');
    var dateStr = day + ' ' + month + (date.getFullYear() !== now.getFullYear() ? ' ' + date.getFullYear() : '');
    var epStr = '';
    if (element.trakt_history_episode) {
      var ep = element.trakt_history_episode;
      epStr = '<span class="trakt-history-ep">S' + ep.season + '·E' + ep.number + '</span>';
    }
    var badge = document.createElement('div');
    badge.className = 'trakt-history-date-badge';
    badge.innerHTML = epStr + '<span class="trakt-history-date">' + dateStr + '</span>';
    cardView.appendChild(badge);
  }

  function renderUpnextRemainingBadge(card, element) {
    var watched = Number(element.trakt_upnext_watched) || 0;
    var total = Number(element.trakt_upnext_total) || 0;
    var remaining = total - watched;
    if (remaining <= 0) return;
    var cardNode = card && typeof card.render === 'function' ? card.render(true) : null;
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardView || cardView.querySelector('.trakt-upnext-badge')) return;
    var badge = document.createElement('div');
    badge.className = 'trakt-upnext-badge';
    badge.textContent = String(remaining);
    cardView.appendChild(badge);
  }
  function insertUpcomingDivider(comp) {
    var container = comp && typeof comp.render === 'function' ? comp.render(true) : null;
    if (!container) return;
    if (container.querySelector('.trakt-upcoming-section')) return;
    var firstUpcoming = container.querySelector('.trakt-upcoming-first');
    if (!firstUpcoming || !firstUpcoming.parentNode) return;
    var label = Lampa.Lang && Lampa.Lang.translate ? Lampa.Lang.translate('trakttv_watchlist_upcoming') || 'Скоро' : 'Скоро';
    var div = document.createElement('div');
    div.className = 'trakt-upcoming-section';
    div.textContent = label;
    firstUpcoming.parentNode.insertBefore(div, firstUpcoming);
  }
  function rearrangeWatchlistUpcoming(data) {
    if (!data || !Array.isArray(data.results)) return data;
    var today = new Date();
    var todayStr = today.toISOString().slice(0, 10);
    var currentYear = today.getFullYear();
    var released = [];
    var upcoming = [];
    data.results.forEach(function (item) {
      var isUpcoming = false;
      var rel = item.trakt_released;
      if (rel && /^\d{4}-\d{2}-\d{2}/.test(String(rel))) {
        isUpcoming = String(rel).slice(0, 10) > todayStr;
      } else {
        isUpcoming = (parseInt(item.release_date, 10) || 0) > currentYear;
      }
      if (isUpcoming) {
        upcoming.push(item);
      } else {
        released.push(item);
      }
    });
    if (upcoming.length > 0) upcoming[0]._trakt_upcoming_first = true;
    return Object.assign({}, data, { results: released.concat(upcoming) });
  }
  function applyWatchlistClientFilters(data, options) {
    if (!data || !Array.isArray(data.results)) return data;
    var results = data.results;
    if (options.filterYear) {
      var fy = String(options.filterYear);
      if (fy.indexOf('-') > 0) {
        var parts = fy.split('-');
        var yFrom = parseInt(parts[0], 10), yTo = parseInt(parts[1], 10);
        results = results.filter(function(x) { var y = parseInt(x.release_date, 10); return y >= yFrom && y <= yTo; });
      } else {
        results = results.filter(function(x) { return String(x.release_date).slice(0, 4) === fy; });
      }
    }
    if (options.filterGenre) {
      var fg = String(options.filterGenre);
      results = results.filter(function(x) { return Array.isArray(x.trakt_genres) && x.trakt_genres.indexOf(fg) >= 0; });
    }
    if (options.filterCountry) {
      var fc = String(options.filterCountry).toLowerCase();
      results = results.filter(function(x) { return x.trakt_country === fc; });
    }
    return Object.assign({}, data, { results: results });
  }
  function baseComponent(object, type) {
    var comp;
    var total_pages = 0;
    var waitload = false;
    var upcomingDividerShown = false;

    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this = this;
          var params = _objectSpread2({}, object);
          if ((type === 'list' || type === 'myListItems') && object.id) {
            params.id = object.id;
          } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
            params.id = object.list_id;
          }
          params.limit = type === 'watchlist' ? 500 : 36;
          params.page = params.page || 1;
          if (!Api$2) { logApiMissing$1(); this.empty(); return; }
          Api$2[type](params).then(function (data) {
            if (data && data.total_pages) total_pages = data.total_pages;
            if (type === 'watchlist') { data = applyWatchlistClientFilters(data, object); data = rearrangeWatchlistUpcoming(data); }
            if (type === 'upnext') data = rearrangeUpnextNotStarted(data);
            _this.build(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : { results: [] });
            if (type === 'watchlist') setTimeout(function () { try { insertUpcomingDivider(_this); } catch(e) {} }, 0);
            if (type === 'upnext') setTimeout(function () { try { insertUpnextNotStartedDivider(_this); } catch(e) {} }, 0);
          })["catch"](function () { _this.empty(); });
        },
        onNext: function onNext(resolve, reject) {
          var _this2 = this;
          if (waitload) { reject.call(this); return; }
          if (object.page <= total_pages) {
            waitload = true;
            var params = _objectSpread2({}, object);
            if ((type === 'list' || type === 'myListItems') && object.id) {
              params.id = object.id;
            } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
              params.id = object.list_id;
            }
            params.limit = type === 'watchlist' ? 500 : 36;
            if (!Api$2) { waitload = false; reject.call(this); return; }
            Api$2[type](params).then(function (data) {
              if (data && data.total_pages) { total_pages = data.total_pages; _this2.total_pages = data.total_pages; }
              if (type === 'watchlist') { data = applyWatchlistClientFilters(data, object); }
              if (type === 'upnext') data = rearrangeUpnextNotStarted(data);
              resolve.call(_this2, data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : { results: [] });
              if (type === 'watchlist') setTimeout(function () { try { insertUpcomingDivider(_this2); } catch(e) {} }, 0);
              if (type === 'upnext') setTimeout(function () { try { insertUpnextNotStartedDivider(_this2); } catch(e) {} }, 0);
              waitload = false;
            })["catch"](function () { waitload = false; reject.call(_this2); });
          } else { reject.call(this); }
        },
        onController: function onController(controller) {
          if (type === 'watchlist' && object && typeof object.onHead === 'function') {
            controller.up = function () {
              if (Navigator.canmove('up')) Navigator.move('up'); else object.onHead();
            };
          }
        },
        onEmpty: function onEmpty() {
          if (type !== 'watchlist' || !object || typeof object.onHead !== 'function') return;
          if (!this.empty_class || typeof this.empty_class.use !== 'function') return;
          this.empty_class.use({ onController: function (controller) {
            controller.up = function () { if (Navigator.canmove('up')) Navigator.move('up'); else object.onHead(); };
          }});
        },
        onInstance: function onInstance(card, element) {
          card.use({
            onCreate: function onCreate() {
              renderTvTypeBadge(this, element);
              if (type === 'upnext') { renderUpnextCardWatched(this, element); renderUpnextRemainingBadge(this, element); }
              if (type === 'history') renderHistoryDateBadge(this, element);
              if (type === 'watchlist' && element._trakt_upcoming_first) {
                var node = typeof this.render === 'function' ? this.render(true) : null;
                if (node) node.classList.add('trakt-upcoming-first');
              }
              if (type === 'upnext' && element._trakt_upnext_first_unstarted) {
                var node2 = typeof this.render === 'function' ? this.render(true) : null;
                if (node2) node2.classList.add('trakt-upnext-first-unstarted');
              }
            }
          });
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() { Lampa.Activity.push(this.data); },
            onLong: function onLong() {
              if (type === 'myListItems' && object && object.can_manage && object.id) openMyListItemActions(object, element);
              else if (type === 'history') openHistoryItemActions(object, element);
            }
          });
        }
      });
    } else {
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this3 = this;
        var params = _objectSpread2({}, object);
        if ((type === 'list' || type === 'myListItems') && object.id) {
          params.id = object.id;
        } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
          params.id = object.list_id;
        }
        params.limit = type === 'watchlist' ? 500 : 36;
        params.page = params.page || 1;
        if (!Api$2) { logApiMissing$1(); return; }
        Api$2[type](params).then(function (data) {
          if (data && data.total_pages) total_pages = data.total_pages;
          if (type === 'watchlist') { data = applyWatchlistClientFilters(data, object); data = rearrangeWatchlistUpcoming(data); }
          if (type === 'upnext') data = rearrangeUpnextNotStarted(data);
          _this3.build(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : { results: [] });
          if (total_pages > 1 && _this3.activity && _this3.activity.scroll) _this3.activity.scroll.onEnd = _this3.next.bind(_this3);
          if (type === 'watchlist') setTimeout(function () { try { insertUpcomingDivider(_this3); } catch(e) {} }, 0);
          if (type === 'upnext') setTimeout(function () { try { insertUpnextNotStartedDivider(_this3); } catch(e) {} }, 0);
        })["catch"](function () { _this3.empty(); });
      };
      comp.next = function () {
        var _this4 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          if ((type === 'list' || type === 'myListItems') && object.id) {
            params.id = object.id;
          } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
            params.id = object.list_id;
          }
          params.limit = type === 'watchlist' ? 500 : 36;
          if (!Api$2) { logApiMissing$1(); return; }
          Api$2[type](params).then(function (data) {
            if (data && data.total_pages) total_pages = data.total_pages;
            if (type === 'watchlist') { data = applyWatchlistClientFilters(data, object); }
            if (type === 'upnext') data = rearrangeUpnextNotStarted(data);
            _this4.append(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : { results: [] });
            waitload = false;
          })["catch"](function () { waitload = false; });
        }
      };
      comp.cardRender = function (_, element, card) {
        renderTvTypeBadge(card, element);
        if (type === 'upnext') { renderUpnextCardWatched(card, element); renderUpnextRemainingBadge(card, element); }
        if (type === 'history') renderHistoryDateBadge(card, element);
        if (type === 'watchlist' && element._trakt_upcoming_first) {
          var node = typeof card.render === 'function' ? card.render(true) : null;
          if (node) node.classList.add('trakt-upcoming-first');
        }
        if (type === 'upnext' && element._trakt_upnext_first_unstarted) {
          var node2 = typeof card.render === 'function' ? card.render(true) : null;
          if (node2) node2.classList.add('trakt-upnext-first-unstarted');
        }
        if (Lampa.Storage.get('trakt_token')) {
          var _bd = (card && card.data) || element;
          if (_bd && _bd.id) {
            var _bt = _bd.method || _bd.card_type || _bd.type || (_bd.first_air_date ? 'tv' : 'movie');
            if (_bt === 'movie') {
              if (_renderedCardInstances.indexOf(card) < 0) _renderedCardInstances.push(card);
              renderDigitalReleaseBadge(card); renderWatchedBadge(card); renderWatchlistBadge(card);
            }
          }
        }
        if (type === 'myListItems' && object && object.can_manage && object.id) {
          card.onMenu = function () { return openMyListItemActions(object, element); };
        } else if (type === 'history') {
          card.onMenu = function () { return openHistoryItemActions(object, element); };
        } else { card.onMenu = false; }
        card.onEnter = function () { Lampa.Activity.push(card.data); };
      };
    }
    return comp;
  }
  function baseRecommendations(object) {
    var comp;
    var total_pages = 0;
    var waitload = false;
    var upcomingDividerShown = false;

    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this5 = this;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          params.page = params.page || 1;
          if (!Api$2) { logApiMissing$1(); this.empty(); return; }
          Api$2.recommendations(params).then(function (recommendations) {
            _this5.build(recommendations && _typeof(recommendations) === 'object' && Array.isArray(recommendations.results) ? recommendations : { results: [] });
            if (recommendations && recommendations.total_pages) total_pages = recommendations.total_pages;
          })["catch"](function () { _this5.empty(); });
        },
        onNext: function onNext(resolve, reject) {
          var _this6 = this;
          if (waitload) { reject.call(this); return; }
          if (object.page <= total_pages) {
            waitload = true;
            var params = _objectSpread2({}, object);
            params.limit = 36;
            if (!Api$2) { waitload = false; reject.call(this); return; }
            Api$2.recommendations(params).then(function (data) {
              if (data && data.total_pages) { total_pages = data.total_pages; _this6.total_pages = data.total_pages; }
              resolve.call(_this6, data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : { results: [] });
              waitload = false;
            })["catch"](function () { waitload = false; reject.call(_this6); });
          } else { reject.call(this); }
        },
        onInstance: function onInstance(card, element) {
          renderTvTypeBadge(card, element);
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() {
              Lampa.Activity.push({ url: '', component: 'full', id: element.id, method: element.method, card: this.data, source: 'tmdb' });
            }
          });
        },
        onController: function onController(controller) {
          if (object && typeof object.onHead === 'function') {
            controller.up = function () { if (Navigator.canmove('up')) Navigator.move('up'); else object.onHead(); };
          }
        },
        onEmpty: function onEmpty() {
          var _self = this;
          if (!object || typeof object.onHead !== 'function') return;
          if (!_self.empty_class || typeof _self.empty_class.use !== 'function') return;
          _self.empty_class.use({ onController: function (c) {
            c.up = function () { if (Navigator.canmove('up')) Navigator.move('up'); else object.onHead(); };
          }});
        }
      });
    } else {
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this7 = this;
        var params = _objectSpread2({}, object);
        params.limit = 36;
        params.page = params.page || 1;
        if (!Api$2) { logApiMissing$1(); return; }
        Api$2.recommendations(params).then(function (recommendations) {
          _this7.build(recommendations && _typeof(recommendations) === 'object' && Array.isArray(recommendations.results) ? recommendations : { results: [] });
          if (recommendations && recommendations.total_pages) total_pages = recommendations.total_pages;
          if (total_pages > 1 && _this7.activity && _this7.activity.scroll) _this7.activity.scroll.onEnd = _this7.next.bind(_this7);
        })["catch"](function () { _this7.empty(); });
      };
      comp.next = function () {
        var _this8 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          if (!Api$2) { logApiMissing$1(); return; }
          Api$2.recommendations(params).then(function (data) {
            if (data && data.total_pages) total_pages = data.total_pages;
            _this8.append(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : { results: [] });
            waitload = false;
          })["catch"](function () { waitload = false; });
        }
      };
      comp.cardRender = function (object, element, card) {
        renderTvTypeBadge(card, element);
        card.onMenu = false;
        card.onEnter = function () {
          Lampa.Activity.push({ url: '', component: 'full', id: element.id, method: element.method, card: card, source: 'tmdb' });
        };
      };
    }
    return comp;
  }
  function t$3(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    try {
      var translated = Lampa.Lang.translate(key);
      return translated || fallback || key;
    } catch (e) {
      return fallback || key;
    }
  }
  function notify$1(text) {
    Lampa.Bell.push({
      text: text
    });
  }
  function getListName() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (element.list_title || element.title || element.name || '').trim();
  }
  function restoreContentController() {
    setTimeout(function () {
      if (Lampa && Lampa.Controller) Lampa.Controller.toggle('content');
    }, 0);
  }
  function formatNamedListTitle(name, itemCount) {
    var safeName = (name || '').trim();
    var hasCount = typeof itemCount === 'number' && itemCount >= 0;
    if (safeName && hasCount) return "".concat(safeName, " (").concat(itemCount, ")");
    if (safeName) return safeName;
    return t$3('trakt_list_detail', 'List Content');
  }
  function refreshActivity(object, component) {
    if (!Lampa || !Lampa.Activity || typeof Lampa.Activity.replace !== 'function') return;
    var next = _objectSpread2(_objectSpread2({}, object), {}, {
      component: component || object.component,
      page: 1,
      refresh: Date.now()
    });
    Lampa.Activity.replace(next);
  }
  function getCurrentActivityDescriptor() {
    try {
      if (!Lampa || !Lampa.Activity || typeof Lampa.Activity.active !== 'function') return null;
      var cur = Lampa.Activity.active();
      if (!cur || typeof cur.component !== 'string' || !cur.component) return null;
      var desc = {};
      Object.keys(cur).forEach(function (k) {
        var v = cur[k];
        if (typeof v === 'function') return;
        if (v && typeof v === 'object' && typeof v.render === 'function') return;
        desc[k] = v;
      });
      return desc.component ? desc : null;
    } catch (e) { return null; }
  }
  function refreshMyListsAfterCreate(activityObject, createdList) {
    var listId = createdList && createdList.ids ? createdList.ids.trakt || createdList.id : createdList && createdList.id;
    var maxAttempts = 8;
    var delayMs = 900;
    if (!Api$2 || !listId) {
      refreshActivity(activityObject, 'trakt_my_lists');
      return;
    }
    var _attempt = function attempt(index) {
      Api$2.myLists({
        page: 1,
        limit: 100
      }).then(function (data) {
        var results = data && Array.isArray(data.results) ? data.results : [];
        var found = results.some(function (item) {
          return String(item.id) === String(listId);
        });
        if (found || index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt(index + 1);
        }, delayMs);
      })["catch"](function () {
        if (index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt(index + 1);
        }, delayMs);
      });
    };
    _attempt(1);
  }
  function refreshMyListsAfterDelete(activityObject, deletedListId) {
    var listId = deletedListId;
    var maxAttempts = 8;
    var delayMs = 900;
    if (!Api$2 || !listId) {
      refreshActivity(activityObject, 'trakt_my_lists');
      return;
    }
    var _attempt2 = function attempt(index) {
      Api$2.myLists({
        page: 1,
        limit: 100
      }).then(function (data) {
        var results = data && Array.isArray(data.results) ? data.results : [];
        var stillExists = results.some(function (item) {
          return String(item.id) === String(listId);
        });
        if (!stillExists || index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt2(index + 1);
        }, delayMs);
      })["catch"](function () {
        if (index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt2(index + 1);
        }, delayMs);
      });
    };
    _attempt2(1);
  }
  function showApiError(error) {
    var fallbackKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'trakt_list_action_error';
    var status = error && error.status;
    var message = t$3(fallbackKey, 'Trakt request failed');
    if (status === 420) message = t$3('trakt_list_limit_reached', 'List limit reached');else if (status === 409) message = t$3('trakt_list_conflict', 'Conflict while updating list');else if (status === 401 || status === 403) message = t$3('trakttvAuthMissed', 'Not logged');
    notify$1(message);
    logError('List API request failed', {
      status: status,
      error: error
    }, {
      debugOnly: true
    });
  }
  function buildCreateListCard() {
    return {
      id: '__trakt_create_list__',
      title: t$3('trakt_list_create_short', 'Create'),
      description: '',
      overview: '',
      method: 'list',
      can_manage: true,
      is_create_action: true,
      cover: './img/img_load.svg',
      poster: './img/img_load.svg',
      params: {
        style: {
          name: 'wide'
        }
      }
    };
  }
  function withCreateListAction(data, page) {
    if (page !== 1) return data;
    var normalized = data && _typeof(data) === 'object' && Array.isArray(data.results) ? _objectSpread2(_objectSpread2({}, data), {}, {
      results: data.results.slice()
    }) : {
      results: []
    };
    normalized.results.unshift(buildCreateListCard());
    return normalized;
  }
  function openListDetail(element) {
    var componentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'trakt_list_detail';
    var listName = getListName(element);
    Lampa.Activity.push({
      url: '',
      title: formatNamedListTitle(listName, element.item_count),
      component: componentName,
      id: element.id,
      list_id: element.id,
      name: listName,
      description: element.description,
      privacy: element.privacy,
      can_manage: !!element.can_manage,
      page: 1,
      source: 'tmdb'
    });
  }
  function openListEditor(list, onSubmit) {
    var source = list || {};
    var defaultName = source.list_title || source.title || source.name || '';
    var defaultDescription = source.description || '';
    var defaultPrivacy = source.privacy || 'private';
    Lampa.Input.edit({
      title: t$3('trakt_list_name_input', 'List name'),
      value: defaultName,
      free: true,
      nosave: true,
      nomic: true
    }, function (nameValue) {
      restoreContentController();
      var name = (nameValue || '').trim();
      if (!name) {
        notify$1(t$3('trakt_list_name_required', 'List name is required'));
        return;
      }
      onSubmit({
        name: name,
        description: defaultDescription,
        privacy: defaultPrivacy,
        display_numbers: !!source.display_numbers,
        allow_comments: !!source.allow_comments
      });
    });
  }
  function createMyList(activityObject) {
    if (!Api$2) return;
    openListEditor({}, function (payload) {
      Api$2.createList(payload).then(function (createdList) {
        notify$1(t$3('trakt_list_created', 'List created'));
        refreshMyListsAfterCreate(activityObject, createdList);
      })["catch"](function (error) {
        return showApiError(error, 'trakt_list_create_error');
      });
    });
  }
  function editMyList(activityObject, element) {
    if (!Api$2 || !element || !element.id) return;
    openListEditor(element, function (payload) {
      Api$2.updateList({
        listId: element.id,
        payload: payload
      }).then(function () {
        notify$1(t$3('trakt_list_updated', 'List updated'));
        refreshActivity(activityObject, 'trakt_my_lists');
      })["catch"](function (error) {
        return showApiError(error, 'trakt_list_edit_error');
      });
    });
  }
  function deleteMyList(activityObject, element) {
    if (!Api$2 || !element || !element.id) return;
    Lampa.Select.show({
      title: t$3('trakt_list_confirm_delete', 'Delete this list?'),
      items: [{
        title: t$3('trakt_list_delete_confirm_action', 'Delete'),
        confirm: true
      }, {
        title: t$3('cancel', 'Cancel')
      }],
      onSelect: function onSelect(item) {
        if (!item.confirm) {
          Lampa.Controller.toggle('content');
          return;
        }
        Api$2.deleteList({
          listId: element.id
        }).then(function () {
          notify$1(t$3('trakt_list_deleted', 'List deleted'));
          refreshMyListsAfterDelete(activityObject, element.id);
        })["catch"](function (error) {
          return showApiError(error, 'trakt_list_delete_error');
        });
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function openMyListActions(activityObject, element) {
    if (!element) return;
    if (element.is_create_action) {
      createMyList(activityObject);
      return;
    }
    Lampa.Select.show({
      title: t$3('title_action', 'Action'),
      items: [{
        title: t$3('trakt_list_open', 'Open list'),
        action: 'open'
      }, {
        title: t$3('trakt_list_edit', 'Edit list'),
        action: 'edit'
      }, {
        title: t$3('trakt_list_delete', 'Delete list'),
        action: 'delete'
      }],
      onSelect: function onSelect(item) {
        if (item.action === 'open') openListDetail(element, 'trakt_my_list_detail');
        if (item.action === 'edit') editMyList(activityObject, element);
        if (item.action === 'delete') deleteMyList(activityObject, element);
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function openMyListItemActions(object, element) {
    if (!Api$2 || !object || !object.id || !element) return;
    Lampa.Select.show({
      title: t$3('title_action', 'Action'),
      items: [{
        title: t$3('trakt_remove_from_list', 'Remove from this list'),
        action: 'remove'
      }],
      onSelect: function onSelect(item) {
        if (item.action !== 'remove') return;
        Api$2.removeFromList({
          listId: object.id,
          item: element
        }).then(function () {
          notify$1(t$3('trakt_item_removed_from_list', 'Item removed from list'));
          refreshActivity(object, 'trakt_my_list_detail');
        })["catch"](function (error) {
          return showApiError(error, 'trakt_remove_from_list_error');
        });
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function openHistoryItemActions(object, element) {
    if (!Api$2 || !element) return;
    Lampa.Select.show({
      title: t$3('title_action', 'Action'),
      items: [{
        title: t$3('trakt_history_remove_action', 'Remove from history'),
        action: 'remove'
      }],
      onSelect: function onSelect(item) {
        if (item.action !== 'remove') return;
        Lampa.Select.show({
          title: t$3('trakt_confirm_remove_history', 'Удалить из истории Trakt?'),
          items: [{ title: t$3('trakt_confirm_remove', 'Удалить'), action: 'confirm' }],
          onSelect: function onSelect2(item2) {
            if (item2.action !== 'confirm') return;
            Api$2.removeFromHistory(element).then(function () {
              invalidateWatchedCache();
              document.querySelectorAll('.trakt-watched-badge[data-tmdb="' + element.id + '"]').forEach(function(el) { el.remove(); });
              notify$1(t$3('trakt_history_removed', 'Removed from history'));
              refreshActivity(object, 'trakt_history');
            })['catch'](function (error) {
              return showApiError(error, 'trakt_history_remove_error');
            });
          },
          onBack: function onBack() {
            Lampa.Controller.toggle('content');
          }
        });
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function renderWideListCard(card, element) {
    var root = card.render();
    root.addClass('trakt-list-wide-card');
    var promo = root.find('.card__promo');
    if (element.is_create_action) {
      root.addClass('trakt-list-wide-card--create');
      return;
    }
    if (promo.length) {
      // For list cards without real posters use only generated cover text.
      promo.remove();
    }
  }
  function listCatalog(object, apiMethod) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = _objectSpread2({
      detailComponent: 'trakt_list_detail',
      manage: false,
      addCreateAction: false
    }, options);
    var comp;
    var total_pages = 0;
    var waitload = false;
    var withActions = function withActions(data, page) {
      return config.addCreateAction ? withCreateListAction(data, page) : data;
    };
    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this9 = this;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          params.page = params.page || 1;
          if (!Api$2 || !Api$2[apiMethod]) {
            this.empty();
            return;
          }
          Api$2[apiMethod](params).then(function (data) {
            total_pages = data && data.total_pages ? data.total_pages : 0;
            _this9.build(withActions(data, params.page));
          })["catch"](function () {
            return _this9.empty();
          });
        },
        onNext: function onNext(resolve, reject) {
          var _this0 = this;
          if (waitload) {
            reject.call(this);
            return;
          }
          if (object.page <= total_pages) {
            waitload = true;
            var params = _objectSpread2({}, object);
            params.limit = 36;
            if (!Api$2 || !Api$2[apiMethod]) {
              waitload = false;
              reject.call(this);
              return;
            }
            Api$2[apiMethod](params).then(function (data) {
              if (data && data.total_pages) {
                total_pages = data.total_pages;
                _this0.total_pages = data.total_pages;
              }
              resolve.call(_this0, withActions(data, params.page));
              waitload = false;
            })["catch"](function () {
              waitload = false;
              reject.call(_this0);
            });
          } else {
            reject.call(this);
          }
        },
        onInstance: function onInstance(card, element) {
          renderWideListCard(card, element);
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() {
              if (element.is_create_action) {
                createMyList(object);
                return;
              }
              openListDetail(element, config.detailComponent);
            },
            onLong: function onLong() {
              if (config.manage) openMyListActions(object, element);
            }
          });
        }
      });
    } else {
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this1 = this;
        var params = _objectSpread2({}, object);
        params.limit = 36;
        params.page = params.page || 1;
        if (!Api$2 || !Api$2[apiMethod]) return;
        Api$2[apiMethod](params).then(function (data) {
          total_pages = data && data.total_pages ? data.total_pages : 0;
          _this1.build(withActions(data, params.page));
          if (_this1.activity && _this1.activity.scroll) _this1.activity.scroll.onEnd = _this1.next.bind(_this1);
        })["catch"](function () {
          return _this1.empty();
        });
      };
      comp.next = function () {
        var _this10 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          if (!Api$2 || !Api$2[apiMethod]) return;
          Api$2[apiMethod](params).then(function (data) {
            if (data && data.total_pages) {
              total_pages = data.total_pages;
            }
            _this10.append(withActions(data, params.page));
            waitload = false;
          })["catch"](function () {
            waitload = false;
          });
        }
      };
      comp.cardRender = function (_, element, card) {
        renderWideListCard(card, element);
        card.onEnter = function () {
          if (element.is_create_action) {
            createMyList(object);
            return;
          }
          openListDetail(element, config.detailComponent);
        };
        card.onMenu = config.manage ? function () {
          return openMyListActions(object, element);
        } : false;
      };
    }
    return comp;
  }
  function getWatchlistSortFields() {
    var fields = Api$2 && Array.isArray(Api$2.watchlistSortFields) && Api$2.watchlistSortFields.length ? Api$2.watchlistSortFields : DEFAULT_WATCHLIST_SORT_FIELDS;
    return fields.slice();
  }
  function getQuickWatchlistSortFields() {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getWatchlistSortFields();
    var available = new Set((fields || []).map(function (field) {
      return String(field).trim().toLowerCase();
    }));
    return DEFAULT_WATCHLIST_QUICK_SORT_FIELDS.filter(function (field) {
      return available.has(field);
    });
  }
  function getHiddenWatchlistSortFields() {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getWatchlistSortFields();
    var quickSet = new Set(getQuickWatchlistSortFields(fields));
    return (fields || []).filter(function (field) {
      return !quickSet.has(String(field).trim().toLowerCase());
    });
  }
  function getWatchlistVipSortFieldSet() {
    var fields = Api$2 && Array.isArray(Api$2.watchlistVipSortFields) && Api$2.watchlistVipSortFields.length ? Api$2.watchlistVipSortFields : DEFAULT_WATCHLIST_VIP_SORT_FIELDS;
    return new Set(fields.map(function (field) {
      return String(field).trim().toLowerCase();
    }));
  }
  function normalizeWatchlistSortValue(rawSort) {
    if (Api$2 && typeof Api$2.normalizeWatchlistSort === 'function') {
      return Api$2.normalizeWatchlistSort(rawSort || DEFAULT_WATCHLIST_SORT);
    }
    var normalized = (rawSort || DEFAULT_WATCHLIST_SORT).toString().trim().toLowerCase().replace(/^\/+/, '');
    var parts = normalized.split('/').filter(Boolean);
    var field = getWatchlistSortFields().indexOf(parts[0]) > -1 ? parts[0] : 'added';
    var order = parts[1] === 'asc' ? 'asc' : 'desc';
    return "".concat(field, "/").concat(order);
  }
  function parseWatchlistSortValue(rawSort) {
    var normalized = normalizeWatchlistSortValue(rawSort);
    var parts = normalized.split('/');
    return {
      field: parts[0] || 'added',
      order: parts[1] === 'asc' ? 'asc' : 'desc'
    };
  }
  function buildWatchlistSortValue() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'added';
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
    return normalizeWatchlistSortValue("".concat(field, "/").concat(order === 'asc' ? 'asc' : 'desc'));
  }
  function isWatchlistVipSortField() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return getWatchlistVipSortFieldSet().has((field || '').toString().trim().toLowerCase());
  }
  function readStoredTraktVipStatus() {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.get !== 'function') return null;
    var value = Lampa.Storage.get('trakt_user_vip');
    if (value === true || value === 'true' || value === 1 || value === '1') return true;
    if (value === false || value === 'false' || value === 0 || value === '0') return false;
    return null;
  }
  function writeStoredTraktVipStatus(value) {
    traktVipStatusCache = !!value;
    if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
      Lampa.Storage.set('trakt_user_vip', !!value);
    }
  }
  function getTraktVipStatusCached() {
    if (typeof traktVipStatusCache === 'boolean') return traktVipStatusCache;
    var stored = readStoredTraktVipStatus();
    if (typeof stored === 'boolean') {
      traktVipStatusCache = stored;
      return stored;
    }
    return false;
  }
  function loadTraktVipStatus() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$force = _ref.force,
      force = _ref$force === void 0 ? false : _ref$force;
    if (!force && typeof traktVipStatusCache === 'boolean') {
      return Promise.resolve(traktVipStatusCache);
    }
    if (!Api$2 || !Lampa || !Lampa.Storage || !Lampa.Storage.get('trakt_token')) {
      return Promise.resolve(false);
    }
    if (traktVipStatusPromise) return traktVipStatusPromise;
    traktVipStatusPromise = Api$2.get('/users/me').then(function (user) {
      var vipEnabled = !!(user && user.vip);
      writeStoredTraktVipStatus(vipEnabled);
      return vipEnabled;
    })["catch"](function () {
      return getTraktVipStatusCached();
    })["finally"](function () {
      traktVipStatusPromise = null;
    });
    return traktVipStatusPromise;
  }
  function sanitizeWatchlistSortForVip(rawSort) {
    var vipEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var parsed = parseWatchlistSortValue(rawSort);
    if (!vipEnabled && isWatchlistVipSortField(parsed.field)) {
      return parseWatchlistSortValue(DEFAULT_WATCHLIST_SORT);
    }
    return parsed;
  }
  function formatWatchlistSortLabel() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var key = (field || '').toString().trim().toLowerCase();
    var known = WATCHLIST_SORT_LABELS[key];
    if (known) return t$3(known.key, known.fallback);
    return key.split('_').filter(Boolean).map(function (part) {
      return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
  }
  function formatWatchlistSortArrow() {
    var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'desc';
    return order === 'asc' ? '↑' : '↓';
  }
  function normalizeWatchlistTab(rawType) {
    var value = (rawType || '').toString().trim().toLowerCase();
    if (value === 'show' || value === 'shows' || value === 'tv' || value === 'series' || value === 'serials') {
      return 'shows';
    }
    return 'movies';
  }
  function buildWatchlistTabTitle(tabId) {
    if (tabId === 'shows') return t$3('trakttv_watchlist_tab_shows', 'Shows');
    return t$3('trakttv_watchlist_tab_movies', 'Movies');
  }
  function openSharedSortMenu(opts) {
    var fields = getWatchlistSortFields().filter(function(f) { return f !== 'random'; });
    var items = [
      { title: opts.randomLabel || 'Случайно', field: 'random', selected: opts.activeField === 'random' }
    ];
    fields.forEach(function(field) {
      var vipOnly = isWatchlistVipSortField(field);
      var isAct = field === opts.activeField;
      var arrow = isAct ? ' ' + formatWatchlistSortArrow(opts.activeOrder) : '';
      items.push({
        title: formatWatchlistSortLabel(field) + arrow,
        subtitle: vipOnly ? (opts.vipLabel || 'VIP') : '',
        selected: isAct,
        ghost: vipOnly && !opts.vipEnabled,
        field: field
      });
    });
    Lampa.Select.show({
      title: opts.title || 'Сортировка',
      items: items,
      onSelect: function(item) {
        if (!item || !item.field) { if (opts.onBack) opts.onBack(); return; }
        opts.onSelect(item.field);
      },
      onBack: opts.onBack
    });
  }
  function watchlistHub(object) {
    var WL_FILTER_CTRL = 'trakt_watchlist_controls';
    var activity, html, controls, filtersRow, body;
    var currentView = null;
    var lastFilterFocus = null;
    var activeFilters = {
      type: object.watchlistType || object.mediaType || object.type || 'all',
      year: object.filterYear || '',
      genre: object.filterGenre || '',
      country: object.filterCountry || ''
    };
    var activeSort = sanitizeWatchlistSortForVip(
      object.watchlistSort || object.sort || 'added/desc',
      getTraktVipStatusCached()
    );
    var activeSortField = activeSort.field;
    var activeSortOrder = activeSort.order;
    var vipEnabled = getTraktVipStatusCached();
    var typeBtn, yearBtn, genreBtn, countryBtn, sortBtn;

    function tr(key, fallback) {
      try { return Lampa.Lang.translate(key) || fallback || key; } catch(e) { return fallback || key; }
    }
    function notify$w(text) { try { Lampa.Bell.push({ text: text }); } catch(e) {} }

    function getTypeLabel() {
      if (activeFilters.type === 'movies') return tr('trakttv_watchlist_tab_movies', 'Фильмы');
      if (activeFilters.type === 'shows') return tr('trakttv_watchlist_tab_shows', 'Сериалы');
      return tr('trakttv_filter_all', 'Все');
    }
    function isActive(val) { return !!val && val !== 'all'; }

    function getYearLabel() {
      return activeFilters.year || tr('trakttv_filter_any_year', 'Год');
    }
    function getGenreLabel() {
      if (!activeFilters.genre) return tr('trakttv_filter_any_genre', 'Жанр');
      return TRAKT_GENRE_NAMES_RU[activeFilters.genre] || activeFilters.genre;
    }
    function getCountryLabel() {
      if (!activeFilters.country) return tr('trakttv_filter_any_country', 'Страна');
      var c = TRAKT_RECS_COUNTRIES.find(function(x) { return x.slug === activeFilters.country; });
      return c ? c.ru : activeFilters.country;
    }
    function getSortLabel() {
      var f = activeSortField;
      if (!f || f === 'random') return '…';
      return formatWatchlistSortLabel(f) + ' ' + formatWatchlistSortArrow(activeSortOrder);
    }
    function updateBtn(btn, label, active) {
      if (!btn) return;
      btn.find('.trakt-watchlist__sort-label').text(label);
      btn.toggleClass('trakt-watchlist__sort--active', !!active);
    }
    function restoreFilters() { Lampa.Controller.toggle(WL_FILTER_CTRL); }

    function getCurrentSortValue() { return buildWatchlistSortValue(activeSortField, activeSortOrder); }

    function rebuildView() {
      if (currentView && currentView.destroy) currentView.destroy();
      body.empty();
      var mediaType = activeFilters.type === 'all' ? 'movies,shows' : (activeFilters.type === 'movies' ? 'movies' : 'shows');
      var viewObject = Object.assign({}, object, {
        page: 1,
        watchlistType: mediaType,
        mediaType: mediaType,
        type: mediaType,
        watchlistSort: getCurrentSortValue(),
        sort: getCurrentSortValue(),
        filterYear: activeFilters.year,
        filterGenre: activeFilters.genre,
        filterCountry: activeFilters.country,
        onHead: function() { Lampa.Controller.toggle(WL_FILTER_CTRL); }
      });
      currentView = new baseComponent(viewObject, 'watchlist');
      currentView.activity = activity;
      currentView.create();
      body.append(currentView.render());
      if (currentView.start) currentView.start();
    }

    function makeBtn(label) {
      return $('<div class="simple-button simple-button--filter simple-button--invisible selector trakt-watchlist__sort">' +
        '<div class="trakt-watchlist__sort-label">' + label + '</div>' +
        '<div class="trakt-watchlist__sort-state"></div></div>');
    }

    function openTypeFilter() {
      Lampa.Select.show({
        title: tr('trakttv_filter_type_title', 'Тип контента'),
        items: [
          { title: tr('trakttv_filter_all', 'Все'), value: 'all', selected: activeFilters.type === 'all' },
          { title: tr('trakttv_watchlist_tab_movies', 'Фильмы'), value: 'movies', selected: activeFilters.type === 'movies' },
          { title: tr('trakttv_watchlist_tab_shows', 'Сериалы'), value: 'shows', selected: activeFilters.type === 'shows' }
        ],
        onSelect: function(item) {
          activeFilters.type = item.value || 'all';
          updateBtn(typeBtn, getTypeLabel(), isActive(activeFilters.type));
          rebuildView(); restoreFilters();
        },
        onBack: restoreFilters
      });
    }

    function openYearFilter() {
      var cur = new Date().getFullYear();
      var items = [{ title: tr('trakttv_filter_all', 'Любой'), value: '', selected: !activeFilters.year }];
      for (var y = cur; y >= 1990; y--) items.push({ title: String(y), value: String(y), selected: activeFilters.year === String(y) });
      items.push({ title: '1980-е', value: '1980-1989', selected: activeFilters.year === '1980-1989' });
      items.push({ title: '1970-е', value: '1970-1979', selected: activeFilters.year === '1970-1979' });
      items.push({ title: 'до 1970', value: '1920-1969', selected: activeFilters.year === '1920-1969' });
      Lampa.Select.show({
        title: tr('trakttv_filter_year_title', 'Год выпуска'),
        items: items,
        onSelect: function(item) {
          activeFilters.year = item.value;
          updateBtn(yearBtn, getYearLabel(), !!activeFilters.year);
          rebuildView(); restoreFilters();
        },
        onBack: restoreFilters
      });
    }

    function openGenreFilter() {
      var genres = typeof TRAKT_GENRE_NAMES_RU !== 'undefined' ? Object.keys(TRAKT_GENRE_NAMES_RU) : [];
      var items = [{ title: tr('trakttv_filter_all', 'Любой'), value: '', selected: !activeFilters.genre }];
      genres.forEach(function(g) {
        items.push({ title: TRAKT_GENRE_NAMES_RU[g] || g, value: g, selected: activeFilters.genre === g });
      });
      Lampa.Select.show({
        title: tr('trakttv_filter_genre_title', 'Жанр'),
        items: items,
        onSelect: function(item) {
          activeFilters.genre = item.value;
          updateBtn(genreBtn, getGenreLabel(), !!activeFilters.genre);
          rebuildView(); restoreFilters();
        },
        onBack: restoreFilters
      });
    }

    function openCountryFilter() {
      var items = [{ title: tr('trakttv_filter_all', 'Любая'), value: '', selected: !activeFilters.country }];
      TRAKT_RECS_COUNTRIES.forEach(function(c) {
        items.push({ title: c.ru, value: c.slug, selected: activeFilters.country === c.slug });
      });
      Lampa.Select.show({
        title: tr('trakttv_filter_country_title', 'Страна'),
        items: items,
        onSelect: function(item) {
          activeFilters.country = item.value;
          updateBtn(countryBtn, getCountryLabel(), !!activeFilters.country);
          rebuildView(); restoreFilters();
        },
        onBack: restoreFilters
      });
    }

    function applySortAndUpdate(field, order) {
      activeSortField = field;
      activeSortOrder = order;
      updateBtn(sortBtn, getSortLabel(), field !== 'added');
      rebuildView(); restoreFilters();
    }

    function switchSort(field) {
      var vipOnly = isWatchlistVipSortField(field);
      var nextOrder = field === activeSortField ? (activeSortOrder === 'desc' ? 'asc' : 'desc') : 'desc';
      if (!vipOnly) { applySortAndUpdate(field, nextOrder); return; }
      loadTraktVipStatus().then(function(status) {
        vipEnabled = !!status;
        if (!vipEnabled) { notify$w(tr('trakttv_watchlist_sort_vip_required', '')); restoreFilters(); return; }
        applySortAndUpdate(field, nextOrder);
      }).catch(function() { vipEnabled = getTraktVipStatusCached(); notify$w(tr('trakttv_watchlist_sort_vip_required', '')); restoreFilters(); });
    }

    function openSortMenu() {
      openSharedSortMenu({
        activeField: activeSortField,
        activeOrder: activeSortOrder,
        vipEnabled: vipEnabled,
        title: tr('trakttv_watchlist_sort_more_title', 'Сортировка'),
        randomLabel: tr('trakttv_watchlist_sort_random', 'Случайно'),
        vipLabel: tr('trakttv_vip_status', 'VIP'),
        onSelect: function(field) { switchSort(field); },
        onBack: restoreFilters
      });
    }

    return {
      create: function create() {
        activity = this.activity;
        html = $('<div class="trakt-watchlist-hub"></div>');
        controls = $('<div class="trakt-watchlist-hub__controls"></div>');
        body = $('<div class="trakt-watchlist-hub__body"></div>');

        filtersRow = $('<div class="trakt-watchlist-hub__sorts trakt-recs-hub__sorts"></div>');
        typeBtn = makeBtn(getTypeLabel());
        updateBtn(typeBtn, getTypeLabel(), isActive(activeFilters.type));
        typeBtn.on('hover:enter', function() { lastFilterFocus = typeBtn[0]; openTypeFilter(); });
        yearBtn = makeBtn(getYearLabel());
        updateBtn(yearBtn, getYearLabel(), !!activeFilters.year);
        yearBtn.on('hover:enter', function() { lastFilterFocus = yearBtn[0]; openYearFilter(); });
        genreBtn = makeBtn(getGenreLabel());
        updateBtn(genreBtn, getGenreLabel(), !!activeFilters.genre);
        genreBtn.on('hover:enter', function() { lastFilterFocus = genreBtn[0]; openGenreFilter(); });
        countryBtn = makeBtn(getCountryLabel());
        updateBtn(countryBtn, getCountryLabel(), !!activeFilters.country);
        countryBtn.on('hover:enter', function() { lastFilterFocus = countryBtn[0]; openCountryFilter(); });
        sortBtn = makeBtn(getSortLabel(), 'trakt-watchlist__sort--more');
        updateBtn(sortBtn, getSortLabel(), activeSortField !== 'added');
        sortBtn.on('hover:enter', function() { lastFilterFocus = sortBtn[0]; openSortMenu(); });
        filtersRow.append(typeBtn, yearBtn, genreBtn, countryBtn, sortBtn);
        controls.append(filtersRow);
        html.append(controls, body);

        Lampa.Controller.add(WL_FILTER_CTRL, {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(controls);
            var focus = lastFilterFocus && document.body && document.body.contains(lastFilterFocus) ? lastFilterFocus : filtersRow.find('.selector')[0];
            Lampa.Controller.collectionFocus(focus || false, controls);
          },
          right: function right() { if (typeof Navigator !== 'undefined') Navigator.move('right'); },
          left: function left() {
            if (typeof Navigator !== 'undefined' && Navigator.canmove('left')) Navigator.move('left');
            else Lampa.Controller.toggle('menu');
          },
          down: function down() {
            if (typeof Navigator !== 'undefined' && Navigator.canmove('down')) Navigator.move('down');
            else Lampa.Controller.toggle('content');
          },
          up: function up() {
            if (typeof Navigator !== 'undefined' && Navigator.canmove('up')) Navigator.move('up');
            else Lampa.Controller.toggle('head');
          },
          back: function back() { Lampa.Activity.backward(); }
        });

        rebuildView();

        loadTraktVipStatus({ force: true }).then(function(status) {
          vipEnabled = !!status;
          var safeSort = sanitizeWatchlistSortForVip(getCurrentSortValue(), vipEnabled);
          if (safeSort.field !== activeSortField || safeSort.order !== activeSortOrder) {
            activeSortField = safeSort.field;
            activeSortOrder = safeSort.order;
            updateBtn(sortBtn, getSortLabel(), activeSortField !== 'added');
            rebuildView();
          }
        }).catch(function() { vipEnabled = getTraktVipStatusCached(); });

        return this.render();
      },
      render: function render(js) { return js ? html[0] : html; },
      start: function start() { if (currentView && currentView.start) currentView.start(); },
      pause: function pause() {},
      stop: function stop() {},
      destroy: function destroy() {
        if (currentView && currentView.destroy) currentView.destroy();
        if (html) html.remove();
        currentView = null;
      }
    };
  }
  function watchlist$1(object) {
    if (!object.page) object.page = 1;
    return new watchlistHub(object);
  }
  function upnext(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'upnext');
  }
  var TRAKT_RECS_COUNTRIES = [
    { slug: 'us', ru: 'США' }, { slug: 'gb', ru: 'Великобритания' },
    { slug: 'fr', ru: 'Франция' }, { slug: 'de', ru: 'Германия' },
    { slug: 'it', ru: 'Италия' }, { slug: 'es', ru: 'Испания' },
    { slug: 'ru', ru: 'Россия' }, { slug: 'jp', ru: 'Япония' },
    { slug: 'kr', ru: 'Южная Корея' }, { slug: 'cn', ru: 'Китай' },
    { slug: 'dk', ru: 'Дания' }, { slug: 'se', ru: 'Швеция' },
    { slug: 'no', ru: 'Норвегия' }, { slug: 'au', ru: 'Австралия' },
    { slug: 'ca', ru: 'Канада' }, { slug: 'in', ru: 'Индия' },
    { slug: 'tr', ru: 'Турция' }, { slug: 'br', ru: 'Бразилия' },
    { slug: 'nl', ru: 'Нидерланды' }, { slug: 'pl', ru: 'Польша' },
    { slug: 'be', ru: 'Бельгия' }, { slug: 'mx', ru: 'Мексика' }
  ];
  var TRAKT_GENRE_NAMES_RU = {
    'action': 'Боевик', 'adventure': 'Приключения', 'animation': 'Анимация',
    'anime': 'Аниме', 'biography': 'Биография', 'children': 'Детский',
    'comedy': 'Комедия', 'crime': 'Криминал', 'documentary': 'Документальный',
    'donghua': 'Дунхуа', 'drama': 'Драма', 'family': 'Семейный',
    'fantasy': 'Фэнтези', 'game-show': 'Игровое шоу', 'history': 'История',
    'holiday': 'Праздничный', 'horror': 'Ужасы', 'music': 'Музыка',
    'musical': 'Мюзикл', 'mystery': 'Мистика', 'reality': 'Реалити',
    'romance': 'Романтика', 'science-fiction': 'Фантастика',
    'soap': 'Мыльная опера', 'superhero': 'Супергерой', 'suspense': 'Саспенс',
    'talk-show': 'Ток-шоу', 'thriller': 'Триллер', 'war': 'Война',
    'western': 'Вестерн', 'mini-series': 'Мини-сериал'
  };

  function recommendationsHub(object) {
    var REC_FILTER_CTRL = 'trakt_recs_filter_ctrl';
    var activity, html, controls, filtersRow, body;
    var currentView = null;
    var lastFilterFocus = null;
    var activeFilters = {
      type: object.filterType || 'all',
      year: object.filterYear || '',
      genre: object.filterGenre || '',
      country: object.filterCountry || ''
    };
    var typeBtn, yearBtn, genreBtn, countryBtn, sortBtn;
    var activeSort = { field: object.sortField || 'random', order: object.sortOrder || 'desc' };
    var vipEnabled = getTraktVipStatusCached();

    function tr(key, fallback) {
      try { return Lampa.Lang.translate(key) || fallback || key; } catch(e) { return fallback || key; }
    }
    function getTypeLabel() {
      if (activeFilters.type === 'movie') return tr('trakttv_watchlist_tab_movies', 'Фильмы');
      if (activeFilters.type === 'tv') return tr('trakttv_watchlist_tab_shows', 'Сериалы');
      return tr('trakttv_filter_all', 'Все');
    }
    function getYearLabel() { return activeFilters.year || tr('trakttv_filter_any_year', 'Год'); }
    function getGenreLabel() {
      if (!activeFilters.genre) return tr('trakttv_filter_any_genre', 'Жанр');
      return TRAKT_GENRE_NAMES_RU[activeFilters.genre] || activeFilters.genre;
    }
    function getCountryLabel() {
      if (!activeFilters.country) return tr('trakttv_filter_any_country', 'Страна');
      var c = TRAKT_RECS_COUNTRIES.find(function(x) { return x.slug === activeFilters.country; });
      return c ? c.ru : activeFilters.country;
    }
    function isActive(val) { return !!(val && val !== 'all'); }
    function updateBtn(btn, label, active) {
      btn.find('.trakt-watchlist__sort-label').text(label);
      btn.toggleClass('trakt-watchlist__sort--active active', !!active);
    }
    function getSortLabel() {
      var f = activeSort.field;
      if (!f || f === 'random') return '…';
      return formatWatchlistSortLabel(f) + ' ' + formatWatchlistSortArrow(activeSort.order);
    }
    function applySortAndUpdate(field, order) {
      activeSort.field = field;
      activeSort.order = order;
      updateBtn(sortBtn, getSortLabel(), field !== 'random');
      rebuildView();
      restoreFilters();
    }
    function switchSort(field) {
      var vipOnly = isWatchlistVipSortField(field);
      var nextOrder = field === activeSort.field ? (activeSort.order === 'desc' ? 'asc' : 'desc') : 'desc';
      if (!vipOnly) { applySortAndUpdate(field, nextOrder); return; }
      loadTraktVipStatus().then(function(status) {
        vipEnabled = !!status;
        if (!vipEnabled) { notify$1(tr('trakttv_watchlist_sort_vip_required', '')); restoreFilters(); return; }
        applySortAndUpdate(field, nextOrder);
      }).catch(function() {
        vipEnabled = getTraktVipStatusCached();
        notify$1(tr('trakttv_watchlist_sort_vip_required', ''));
        restoreFilters();
      });
    }
    function openSortMenu() {
      openSharedSortMenu({
        activeField: activeSort.field,
        activeOrder: activeSort.order,
        vipEnabled: vipEnabled,
        title: tr('trakttv_recs_sort_menu_title', 'Сортировка'),
        randomLabel: tr('trakttv_watchlist_sort_random', 'Случайно'),
        vipLabel: tr('trakttv_vip_status', 'VIP'),
        onSelect: function(field) { switchSort(field); },
        onBack: restoreFilters
      });
    }
    function rebuildView() {
      if (currentView && currentView.destroy) currentView.destroy();
      body.empty();
      var ignoreWatched = readBooleanStorage$2('trakt_source_ignore_watched', false) || readBooleanStorage$2('trakt_recommendations_ignore_watched', false);
      var viewObject = Object.assign({}, object, {
        page: 1,
        filterType: activeFilters.type,
        filterYear: activeFilters.year,
        filterGenre: activeFilters.genre,
        filterCountry: activeFilters.country,
        sortField: activeSort.field,
        sortOrder: activeSort.order,
        ignoreWatched: ignoreWatched,
        onHead: function() { Lampa.Controller.toggle(REC_FILTER_CTRL); }
      });
      currentView = new baseRecommendations(viewObject);
      currentView.activity = activity;
      currentView.create();
      body.append(currentView.render());
      if (currentView.start) currentView.start();
    }
    function restoreFilters() { Lampa.Controller.toggle(REC_FILTER_CTRL); }
    function makeBtn(label, extraClass) {
      var cls = 'simple-button simple-button--filter simple-button--invisible selector trakt-watchlist__sort' + (extraClass ? ' ' + extraClass : '');
      return $('<div class="' + cls + '"><div class="trakt-watchlist__sort-label">' + label + '</div><div class="trakt-watchlist__sort-state"></div></div>');
    }
    function openTypeFilter() {
      Lampa.Select.show({
        title: tr('trakttv_filter_type_title', 'Тип контента'),
        items: [
          { title: tr('trakttv_filter_all', 'Все'), value: 'all', selected: activeFilters.type === 'all' },
          { title: tr('trakttv_watchlist_tab_movies', 'Фильмы'), value: 'movie', selected: activeFilters.type === 'movie' },
          { title: tr('trakttv_watchlist_tab_shows', 'Сериалы'), value: 'tv', selected: activeFilters.type === 'tv' }
        ],
        onSelect: function(item) {
          activeFilters.type = item.value || 'all';
          updateBtn(typeBtn, getTypeLabel(), isActive(activeFilters.type));
          rebuildView(); restoreFilters();
        },
        onBack: restoreFilters
      });
    }
    function openYearFilter() {
      var cur = new Date().getFullYear();
      var items = [{ title: tr('trakttv_filter_all', 'Любой'), value: '', selected: !activeFilters.year }];
      for (var y = cur; y >= 1990; y--) items.push({ title: String(y), value: String(y), selected: activeFilters.year === String(y) });
      items.push({ title: '1980-е', value: '1980-1989', selected: activeFilters.year === '1980-1989' });
      items.push({ title: '1970-е', value: '1970-1979', selected: activeFilters.year === '1970-1979' });
      items.push({ title: 'до 1970', value: '1920-1969', selected: activeFilters.year === '1920-1969' });
      Lampa.Select.show({
        title: tr('trakttv_filter_year_title', 'Год выпуска'),
        items: items,
        onSelect: function(item) {
          activeFilters.year = item.value;
          updateBtn(yearBtn, getYearLabel(), !!activeFilters.year);
          rebuildView(); restoreFilters();
        },
        onBack: restoreFilters
      });
    }
    function openGenreFilter() {
      var genres = typeof TRAKT_TRENDING_GENRES !== 'undefined' ? TRAKT_TRENDING_GENRES : [];
      var items = [{ title: tr('trakttv_filter_all', 'Любой'), value: '', selected: !activeFilters.genre }];
      genres.forEach(function(g) {
        items.push({ title: TRAKT_GENRE_NAMES_RU[g.slug] || g.name, value: g.slug, selected: activeFilters.genre === g.slug });
      });
      Lampa.Select.show({
        title: tr('trakttv_filter_genre_title', 'Жанр'),
        items: items,
        onSelect: function(item) {
          activeFilters.genre = item.value;
          updateBtn(genreBtn, getGenreLabel(), !!activeFilters.genre);
          rebuildView(); restoreFilters();
        },
        onBack: restoreFilters
      });
    }
    function openCountryFilter() {
      var items = [{ title: tr('trakttv_filter_all', 'Любая'), value: '', selected: !activeFilters.country }];
      TRAKT_RECS_COUNTRIES.forEach(function(c) {
        items.push({ title: c.ru, value: c.slug, selected: activeFilters.country === c.slug });
      });
      Lampa.Select.show({
        title: tr('trakttv_filter_country_title', 'Страна'),
        items: items,
        onSelect: function(item) {
          activeFilters.country = item.value;
          updateBtn(countryBtn, getCountryLabel(), !!activeFilters.country);
          rebuildView(); restoreFilters();
        },
        onBack: restoreFilters
      });
    }
    function buildFilters() {
      filtersRow = $('<div class="trakt-watchlist-hub__sorts trakt-recs-hub__sorts"></div>');
      typeBtn = makeBtn(getTypeLabel());
      typeBtn.on('hover:focus', function() { lastFilterFocus = typeBtn[0]; });
      typeBtn.on('hover:enter', function() { lastFilterFocus = typeBtn[0]; openTypeFilter(); });
      yearBtn = makeBtn(getYearLabel());
      yearBtn.on('hover:focus', function() { lastFilterFocus = yearBtn[0]; });
      yearBtn.on('hover:enter', function() { lastFilterFocus = yearBtn[0]; openYearFilter(); });
      genreBtn = makeBtn(getGenreLabel());
      genreBtn.on('hover:focus', function() { lastFilterFocus = genreBtn[0]; });
      genreBtn.on('hover:enter', function() { lastFilterFocus = genreBtn[0]; openGenreFilter(); });
      countryBtn = makeBtn(getCountryLabel());
      countryBtn.on('hover:focus', function() { lastFilterFocus = countryBtn[0]; });
      countryBtn.on('hover:enter', function() { lastFilterFocus = countryBtn[0]; openCountryFilter(); });
      sortBtn = makeBtn(getSortLabel(), 'trakt-watchlist__sort--more');
      sortBtn.on('hover:focus', function() { lastFilterFocus = sortBtn[0]; });
      sortBtn.on('hover:enter', function() { lastFilterFocus = sortBtn[0]; openSortMenu(); });
      filtersRow.append(typeBtn, yearBtn, genreBtn, countryBtn, sortBtn);
      updateBtn(typeBtn, getTypeLabel(), isActive(activeFilters.type));
      updateBtn(yearBtn, getYearLabel(), !!activeFilters.year);
      updateBtn(genreBtn, getGenreLabel(), !!activeFilters.genre);
      updateBtn(countryBtn, getCountryLabel(), !!activeFilters.country);
      updateBtn(sortBtn, getSortLabel(), activeSort.field !== 'random');
    }
    function ensureFilterController() {
      Lampa.Controller.add(REC_FILTER_CTRL, {
        toggle: function() {
          var focus = lastFilterFocus && document.body && document.body.contains(lastFilterFocus)
            ? lastFilterFocus : (controls ? controls.find('.selector')[0] : false) || false;
          Lampa.Controller.collectionSet(controls);
          Lampa.Controller.collectionFocus(focus, controls);
        },
        right: function() { if (typeof Navigator !== 'undefined') Navigator.move('right'); },
        left: function() { if (typeof Navigator !== 'undefined' && Navigator.canmove('left')) Navigator.move('left'); else Lampa.Controller.toggle('menu'); },
        down: function() { if (typeof Navigator !== 'undefined' && Navigator.canmove('down')) Navigator.move('down'); else Lampa.Controller.toggle('content'); },
        up: function() { if (typeof Navigator !== 'undefined' && Navigator.canmove('up')) Navigator.move('up'); else Lampa.Controller.toggle('head'); },
        back: function() { Lampa.Activity.backward(); }
      });
    }
    return {
      create: function() {
        activity = this.activity;
        html = $('<div class="trakt-watchlist-hub"></div>');
        controls = $('<div class="trakt-watchlist-hub__controls"></div>');
        body = $('<div class="trakt-watchlist-hub__body"></div>');
        buildFilters();
        controls.append(filtersRow);
        html.append(controls, body);
        ensureFilterController();
        rebuildView();
        return this.render();
      },
      render: function(js) { return js ? html[0] : html; },
      start: function() { if (currentView && currentView.start) currentView.start(); },
      pause: function() { if (currentView && currentView.pause) currentView.pause(); },
      stop: function() { if (currentView && currentView.stop) currentView.stop(); },
      destroy: function() { if (currentView && currentView.destroy) currentView.destroy(); }
    };
  }

  function recommendations(object) {
    if (!object.page) object.page = 1;
    return new recommendationsHub(object);
  }
  function liked_lists(object) {
    if (!object.page) object.page = 1;
    return listCatalog(object, 'likesLists', {
      detailComponent: 'trakt_list_detail',
      manage: false,
      addCreateAction: false
    });
  }
  function lists(object) {
    return liked_lists(object);
  }
  function my_lists(object) {
    if (!object.page) object.page = 1;
    return listCatalog(object, 'myLists', {
      detailComponent: 'trakt_my_list_detail',
      manage: true,
      addCreateAction: true
    });
  }
  function list_detail(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'list');
  }
  function my_list_detail(object) {
    if (!object.page) object.page = 1;
    object.can_manage = true;
    return new baseComponent(object, 'myListItems');
  }
  function trakt_list_detail(object) {
    if (!object.page) object.page = 1;
    var paramsForBaseComponent = _objectSpread2(_objectSpread2({}, object), {}, {
      id: object.id || object.list_id,
      page: object.page,
      limit: object.limit
    });
    return new baseComponent(paramsForBaseComponent, 'list');
  }
  function history(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'history');
  }
  function collection(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'collection');
  }
  function watching(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'watching');
  }
  var Catalog = {
    watchlist: watchlist$1,
    upnext: upnext,
    recommendations: recommendations,
    lists: lists,
    liked_lists: liked_lists,
    my_lists: my_lists,
    list_detail: list_detail,
    my_list_detail: my_list_detail,
    trakt_list_detail: trakt_list_detail,
    history: history,
    collection: collection,
    watching: watching
  };

  function Main() {
    Lampa.Lang.add({
      trakttvAuthMissed: {
        ru: "Не авторизированы",
      },
      trakttvAuthOk: {
        ru: "Авторизированы",
      },
      trakttvAuthUpdated: {
        ru: "Авторизация обновлена",
      },
      trakttvAuthError: {
        ru: "Ошибка авторизации",
      },
      traktLampaRestart: {
        ru: "Перезагрузите приложение",
      },
      trakttvLoading: {
        ru: "Загрузка, а пока сделай кофе",
      },
      trakttv_remove_from_collection: {
        ru: "Удалить из watchlist",
      },
      trakttv_add_to_collection: {
        ru: "Добавить в watchlist",
      },
      trakttv_WatchlistSort: {
        ru: "Сортировка watchlist",
      },
      trakttvLogin: {
        ru: "Войти в Trakt.TV",
      },
      trakttvLogout: {
        ru: "Выйти из Trakt.TV",
      },
      trakttvLogoutNoty: {
        ru: "Вы вышли из Trakt.TV",
      },
      trakttvKeyCleanered: {
        ru: "Ключ очищен",
      },
      trakttvFullClearNoty: {
        ru: "Все очищено",
      },
      trakttvHumorMinutes: {
        ru: "Потрачено {time} минут на просмотр! Уже почти Netflix-чемпион",
      },
      trakttvStatPlays: {
        ru: "просмотров",
      },
      trakttvStatWatched: {
        ru: "просмотрено",
      },
      trakttvStatMinutes: {
        ru: "минут",
      },
      trakttv_no_series: {
        ru: "Нет релизов",
        en: "No releases",
      },
      trakttv_episodes_on: {
        ru: "Серии на",
      },
      trakttv_calendar_error: {
        ru: "Ошибка загрузки календаря Trakt",
      },
      trakttv_no_upcoming: {
        ru: "Нет предстоящих эпизодов",
      },
      trakttvFullClear: {
        ru: "Очистить все ключи Trakt.TV",
      },
      trakt_componentDisable: {
        ru: "Компонент отключен",
      },
      trakt_componentEnable: {
        ru: "Компонент включен",
      },
      trakt_history_added: {
        ru: "Добавлено в историю просмотров",
      },
      trakt_history_addError: {
        ru: "Ошибка добавления в историю",
      },
      trakt_history_all: {
        ru: "Весь сериал",
      },
      trakt_history_season: {
        ru: "Последний сезон",
      },
      trakt_history_episodes: {
        ru: "Последний эпизод",
      },
      trakt_history_title: {
        ru: "Что отправить в историю?",
      },
      trakt_history_removed: {
        ru: "Удалено из истории просмотров",
      },
      trakt_history_remove_action: {
        ru: "Удалить из истории",
      },
      trakt_history_remove_error: {
        ru: "Ошибка удаления из истории",
      },
      trakt_history_button: {
        ru: "Добавить в историю",
      },
      trakt_watchlist_button: {
        ru: "Добавить в watchlist",
      },
      trakt_watchlist_remove: {
        ru: "Убрать из списка просмотра",
      },
      trakt_watchlist_add: {
        ru: "Добавить в список просмотра",
      },
      trakt_menu_want_to_watch: {
        ru: "Хочу посмотреть",
        en: "Want to watch",
      },
      trakt_menu_wont_watch: {
        ru: "Не буду смотреть",
        en: "Not interested",
      },
      trakt_menu_not_watched: {
        ru: "Отметить как не просмотрено",
        en: "Mark as not watched",
      },
      trakt_history_in: {
        ru: "В истории",
      },
      trakt_history_not_in: {
        ru: "Добавить в историю",
      },
      trakttv_recommendations: {
        ru: "Рекомендации",
      },
      trakttv_watchlist: {
        ru: "Хочу посмотреть",
      },
      trakttv_watchlist_upcoming: {
        ru: "Скоро",
      },
      trakttv_upnext_not_started: {
        ru: "Не начатые",
      },
      trakttv_calendar: {
        ru: "Календарь",
      },
      trakt_watching: {
        ru: "Смотрю сериалы",
        en: "Watching Shows",
      },
      trakt_watching_empty: {
        ru: "Нет незавершённых сериалов с ожидаемыми эпизодами",
        en: "No ongoing shows with upcoming episodes",
      },
      trakt_switch_account: { ru: "Переключить аккаунт Trakt.TV", en: "Switch Trakt.TV Account" },
      trakt_switched_to: { ru: "Привет,", en: "Hello," },
      trakt_account_alias: { ru: "Отображать как", en: "Display as" },
      trakt_multi_account_section: { ru: "Аккаунты", en: "Accounts" },
      trakt_account_slot_empty: { ru: "Не привязан", en: "Not linked" },
      trakt_account_slot_active: { ru: "(активен)", en: "(active)" },
      trakt_account_switch: { ru: "Сделать активным", en: "Set as active" },
      trakt_account_login_slot: { ru: "Войти в этот аккаунт", en: "Login to this account" },
      trakt_account_rename: { ru: "Переименовать", en: "Rename" },
      trakt_account_logout_slot: { ru: "Выйти из аккаунта", en: "Logout this account" },
      trakt_account_link_profile: { ru: "Привязать к профилю Lampa", en: "Link to Lampa profile" },
      trakt_account_profile_bound: { ru: "Профиль:", en: "Profile:" },
      trakt_multiwatch_section: { ru: "Совместный просмотр", en: "Shared Watch" },
      trakt_multiwatch_title: { ru: "Совместный просмотр Trakt.TV", en: "Shared Watch Trakt.TV" },
      trakt_multiwatch_enabled: { ru: "Совместный просмотр", en: "Shared Watch" },
      trakt_multiwatch_enabled_descr: { ru: "Отмечать просмотренное сразу во всех выбранных аккаунтах", en: "Mark watched in all selected accounts simultaneously" },
      trakt_multiwatch_accounts: { ru: "Участники просмотра", en: "Viewing participants" },
      trakt_multiwatch_done_btn: { ru: "Готово", en: "Done" },
      trakt_multiwatch_disable: { ru: "Выключить совместный просмотр", en: "Disable shared watch" },
      trakt_multiwatch_btn: { ru: "Смотреть вместе", en: "Watch together" },
      trakt_multiwatch_confirm: { ru: "Отметить выбранных", en: "Mark selected" },
      trakt_multiwatch_done: { ru: "Отмечено в аккаунтах: {ok}/{total}", en: "Marked in accounts: {ok}/{total}" },
      trakt_multiwatch_error: { ru: "Ошибка в одном из аккаунтов", en: "Error in one of the accounts" },
      trakt_profile_map_edit: { ru: "Привязка к профилям Lampa", en: "Lampa profile mapping" },
      trakt_profile_not_available: { ru: "Профили Lampa недоступны в этой версии", en: "Lampa profiles not available in this version" },
      trakttv_menu_title: {
        ru: "Trakt.TV",
      },
      trakttv_row_upnext: {
        ru: "Trakt.TV: Смотреть дальше",
      },
      trakttv_row_recommendations_main: {
        ru: "Trakt.TV: Рекомендации (главная)",
      },
      trakttv_row_recommendations_movie: {
        ru: "Trakt.TV: Рекомендации (фильмы)",
      },
      trakttv_row_recommendations_tv: {
        ru: "Trakt.TV: Рекомендации (сериалы)",
      },
      trakttv_row_watchlist_main: {
        ru: "Trakt.TV: Хочу посмотреть",
      },
      trakttv_row_calendar_main: {
        ru: "Trakt.TV: Календарь выходов",
      },
      trakttv_row_calendar_tv: {
        ru: "Trakt.TV: Календарь выходов (сериалы)",
      },
      trakttv_row_dvd_calendar_main: {
        ru: "Trakt.TV: DVD Релизы",
      },
      trakttv_row_dvd_calendar_movies: {
        ru: "Trakt.TV: DVD Релизы (фильмы)",
      },
      trakttv_no_recommendations: {
        ru: "Нет рекомендаций",
      },
      trakttv_show_recommendations: {
        ru: "Показывать рекомендации Trakt.TV на главной",
      },
      trakttv_source_trending: {
        ru: "В тренде",
      },
      trakttv_source_anticipated: {
        ru: "Ожидаемые",
      },
      trakttv_source_popular: {
        ru: "Популярные",
      },
      trakttv_source_recommendations_movies: {
        ru: "Рекомендации: фильмы",
      },
      trakttv_source_recommendations_shows: {
        ru: "Рекомендации: сериалы",
      },
      trakttv_source_section: {
        ru: "Фильтры источника Trakt.TV",
      },
      trakttv_source_ignore_watched: {
        ru: "Источник: скрывать просмотренное",
      },
      trakttv_source_ignore_watched_descr: {
        ru: "Применяется ко всем лентам Trakt.TV (категории, рекомендации, поиск)",
      },
      trakttv_recommendations_ignore_watched: {
        ru: "Рекомендации: скрывать просмотренное",
      },
      trakttv_recommendations_ignore_watched_descr: {
        ru: "Не показывать в рекомендациях фильмы и сериалы, которые уже отмечены как просмотренные",
      },
      trakttv_lampa_section: {
        ru: "Главная страница Lampa",
      },
      trakttv_hide_lampa_continue: {
        ru: "Скрыть «Продолжить просмотр» Lampa",
      },
      trakttv_hide_lampa_continue_descr: {
        ru: "Убрать раздел с главной страницы — он дублируется разделом Trakt «Начать просмотр»",
      },
      trakttv_hide_lampa_recomend: {
        ru: "Скрыть «Рекомендуем посмотреть» Lampa",
      },
      trakttv_hide_lampa_recomend_descr: {
        ru: "Убрать раздел с главной страницы — он дублируется разделом Trakt «Рекомендации»",
      },
      trakttv_source_ignore_watchlisted: {
        ru: "Источник: скрывать watchlist",
      },
      trakttv_source_ignore_watchlisted_descr: {
        ru: "Применяется ко всем лентам Trakt.TV (категории, рекомендации, поиск)",
      },
      trakttv_filter_all: { ru: "Все" },
      trakttv_filter_type_title: { ru: "Тип контента" },
      trakttv_filter_year_title: { ru: "Год выпуска" },
      trakttv_filter_genre_title: { ru: "Жанр" },
      trakttv_filter_country_title: { ru: "Страна" },
      trakttv_filter_any_year: { ru: "Год" },
      trakttv_filter_any_genre: { ru: "Жанр" },
      trakttv_filter_any_country: { ru: "Страна" },
      trakttv_filter_type: { ru: "Тип" },
      trakttv_recs_sort_menu_title: { ru: "Сортировка" },
      trakttv_recs_sort_random: { ru: "Случайный" },
      trakttv_recs_sort_rank: { ru: "По рекомендациям" },
      trakttv_recs_sort_title_asc: { ru: "Название А-Я" },
      trakttv_recs_sort_title_desc: { ru: "Название Я-А" },
      trakttv_recs_sort_released_desc: { ru: "Год выпуска ↓" },
      trakttv_recs_sort_released_asc: { ru: "Год выпуска ↑" },
      trakttv_recs_sort_percentage_desc: { ru: "Рейтинг ↓" },
      trakttv_recs_sort_percentage_asc: { ru: "Рейтинг ↑" },
      trakt_source_search_lists: {
        ru: "Списки",
      },
      trakt_source_search_lists_more_hint: {
        ru: "Открывайте списки напрямую из результатов поиска",
      },
      trakt_progress_section: {
        ru: "Настройки прогресса",
      },
      trakttv_show_tv_progress: {
        ru: "Показывать прогресс просмотра сериалов",
      },
      trakttv_related_lists: {
        ru: "Связанные списки",
      },
      trakt_list_detail: {
        ru: "Содержимое списка",
      },
      trakt_my_lists: {
        ru: "Мои списки",
      },
      trakt_liked_lists: {
        ru: "Понравившиеся списки",
      },
      trakt_no_lists: {
        ru: "Нет списков",
      },
      trakt_list_items: {
        ru: "Элементы списка",
      },
      trakt_list_items_short: {
        ru: "элем.",
      },
      trakt_list_open: {
        ru: "Открыть список",
      },
      trakt_list_create: {
        ru: "Создать список",
      },
      trakt_list_create_short: {
        ru: "Создать",
      },
      trakt_list_create_hint: {
        ru: "Создайте новый список Trakt",
      },
      trakt_list_name_input: {
        ru: "Название списка",
      },
      trakt_list_description_input: {
        ru: "Описание списка",
      },
      trakt_list_name_required: {
        ru: "Укажите название списка",
      },
      trakt_list_privacy: {
        ru: "Приватность списка",
      },
      trakt_list_privacy_private: {
        ru: "Приватный",
      },
      trakt_list_privacy_friends: {
        ru: "Для друзей",
      },
      trakt_list_privacy_public: {
        ru: "Публичный",
      },
      trakt_list_created: {
        ru: "Список создан",
      },
      trakt_list_create_error: {
        ru: "Ошибка создания списка",
      },
      trakt_list_edit: {
        ru: "Редактировать список",
      },
      trakt_list_updated: {
        ru: "Список обновлен",
      },
      trakt_list_edit_error: {
        ru: "Ошибка обновления списка",
      },
      trakt_list_delete: {
        ru: "Удалить список",
      },
      trakt_list_confirm_delete: {
        ru: "Удалить этот список?",
      },
      trakt_list_delete_confirm_action: {
        ru: "Удалить",
      },
      trakt_list_deleted: {
        ru: "Список удален",
      },
      trakt_list_delete_error: {
        ru: "Ошибка удаления списка",
      },
      trakt_add_to_list_action: {
        ru: "Добавить в список",
      },
      trakt_remove_from_list_action: {
        ru: "Удалить из списка",
      },
      trakt_remove_from_list: {
        ru: "Удалить из этого списка",
      },
      trakt_item_added_to_list: {
        ru: "Элемент добавлен в список",
      },
      trakt_item_removed_from_list: {
        ru: "Элемент удален из списка",
      },
      trakt_remove_from_list_error: {
        ru: "Ошибка удаления элемента из списка",
      },
      trakt_list_action_error: {
        ru: "Ошибка операции со списком",
      },
      trakt_list_limit_reached: {
        ru: "Достигнут лимит списков Trakt",
      },
      trakt_list_conflict: {
        ru: "Элемент уже есть в списке",
      },
      trakt_lists_button: {
        ru: "Trakt.tv",
      },
      trakt_lists_button_in_watchlist: {
        ru: "В списке просмотра",
      },
      trakt_manage_lists_title: {
        ru: "Trakt.TV",
      },
      trakt_watchlist_action_error: {
        ru: "Ошибка операции с watchlist",
      },
      trakttv_user_info: {
        ru: "Пользователь Trakt.TV",
      },
      trakttv_username: {
        ru: "Имя пользователя",
      },
      trakttv_vip_status: {
        ru: "Trakt VIP",
      },
      trakttv_vip_enabled: {
        ru: "Активирован",
      },
      trakttv_vip_disabled: {
        ru: "Не активирован",
      },
      trakttv_movies: {
        ru: "Фильмы",
      },
      trakttv_watchlist_tab_movies: {
        ru: "Фильмы",
      },
      trakttv_watchlist_tab_shows: {
        ru: "Сериалы",
      },
      trakttv_watchlist_sort_more: {
        ru: "Ещё",
      },
      trakttv_watchlist_sort_more_title: {
        ru: "Сортировка",
      },
      trakttv_watchlist_sort_rank: {
        ru: "Ранг",
      },
      trakttv_watchlist_sort_added: {
        ru: "Дата добавления",
      },
      trakttv_watchlist_sort_title: {
        ru: "Название",
      },
      trakttv_watchlist_sort_released: {
        ru: "Релиз",
      },
      trakttv_watchlist_sort_runtime: {
        ru: "Длительность",
      },
      trakttv_watchlist_sort_popularity: {
        ru: "Популярность",
      },
      trakttv_watchlist_sort_random: {
        ru: "Случайно",
      },
      trakttv_watchlist_sort_percentage: {
        ru: "Процент",
      },
      trakttv_watchlist_sort_imdb_rating: {
        ru: "Рейтинг IMDb",
      },
      trakttv_watchlist_sort_tmdb_rating: {
        ru: "Рейтинг TMDB",
      },
      trakttv_watchlist_sort_rt_tomatometer: {
        ru: "RT Tomatometer",
      },
      trakttv_watchlist_sort_rt_audience: {
        ru: "RT Audience",
      },
      trakttv_watchlist_sort_metascore: {
        ru: "Metascore",
      },
      trakttv_watchlist_sort_votes: {
        ru: "Голоса",
      },
      trakttv_watchlist_sort_imdb_votes: {
        ru: "Голоса IMDb",
      },
      trakttv_watchlist_sort_tmdb_votes: {
        ru: "Голоса TMDB",
      },
      trakttv_watchlist_sort_my_rating: {
        ru: "Моя оценка",
      },
      trakttv_watchlist_sort_watched: {
        ru: "Просмотрено",
      },
      trakttv_watchlist_sort_collected: {
        ru: "В коллекции",
      },
      trakttv_watchlist_sort_vip_required: {
        ru: "Это сортирование доступно только для Trakt VIP",
      },
      trakttv_episodes: {
        ru: "Эпизоды",
      },
      trakttv_code: {
        ru: "Код",
      },
      trakttv_auth: {
        ru: "Авторизация Trakt",
      },
      trakttv_enable_watching: {
        ru: "Включить отслеживание просмотра",
      },
      trakttv_enable_watching_descr: {
        ru: "Автоматически отмечать просмотренные эпизоды и добавлять сериалы в \"Смотрю\"",
      },
      trakttv_min_progress_threshold: {
        ru: "Порог просмотра",
      },
      trakttv_min_progress_threshold_descr: {
        ru: "Минимальный процент просмотра для отметки эпизода на Trakt.TV",
      },
      trakttv_enable_logging: {
        ru: "Включить логирование",
      },
      trakttv_enable_logging_descr: {
        ru: "Логирование для тестирования механизма отслеживания просмотра",
      },
      trakttv_card_type_tv: {
        ru: "TV",
      },
      trakt_list_title_named: {
        ru: "Список - {name}",
      },
      trakttv_movie_id_missed: {
        ru: "Отсутствует ID фильма",
      },
      trakttv_show_id_missed: {
        ru: "Отсутствует ID сериала",
      },
      trakttv_unknown_content: {
        ru: "Неизвестный тип контента",
      },
      trakttv_show_not_found: {
        ru: "Сериал не найден в Trakt",
      },
      trakttv_params_missed: {
        ru: "Отсутствуют параметры",
      },
      trakttv_media_id_missed: {
        ru: "Отсутствует ID медиа",
      },
      trakttv_list_id_missed: {
        ru: "Отсутствует ID списка",
      },
      trakttv_upnext: {
        ru: "Смотреть дальше",
      },
      trakt_watch_history: {
        ru: "История просмотров",
      },
      trakt_collection: {
        ru: "Избранное",
      },
      trakttv_topshelf: {
        ru: "Top Shelf (Apple TV)",
      },
      trakttv_topshelf_descr: {
        ru: "Обновлять Top Shelf на Apple TV",
      },
      trakt_bookmarks_sync_section: {
        ru: "Синхронизация списков Lampa",
      },
      trakt_bookmarks_mode: {
        ru: "Режим синхронизации",
      },
      trakt_bookmarks_mode_watchlist: {
        ru: "Watchlist",
      },
      trakt_bookmarks_mode_my_lists: {
        ru: "Мои списки",
      },
      trakt_bookmarks_local_type: {
        ru: "Локальный список Lampa",
      },
      trakt_bookmarks_local_type_description: {
        ru: "Выберите локальный тип, который нужно импортировать или экспортировать",
      },
      trakt_bookmarks_import_button: {
        ru: "Импортировать выбранный список из Trakt",
      },
      trakt_bookmarks_export_button: {
        ru: "Экспортировать выбранный список в Trakt",
      },
      trakt_bookmarks_auth_required: {
        ru: "Сначала войдите в Trakt.TV",
      },
      trakt_bookmarks_local_unavailable: {
        ru: "Локальное избранное недоступно",
      },
      trakt_bookmarks_operation_in_progress: {
        ru: "Синхронизация уже выполняется",
      },
      trakt_bookmarks_import_start: {
        ru: "Запуск импорта списка",
      },
      trakt_bookmarks_export_start: {
        ru: "Запуск экспорта списка",
      },
      trakt_bookmarks_progress_prepare: {
        ru: "Подготовка",
      },
      trakt_bookmarks_progress_loading_source: {
        ru: "Загрузка источника",
      },
      trakt_bookmarks_progress_loading_target: {
        ru: "Загрузка цели",
      },
      trakt_bookmarks_progress_import: {
        ru: "Импорт элементов",
      },
      trakt_bookmarks_progress_export: {
        ru: "Экспорт элементов",
      },
      trakt_bookmarks_import_select_list: {
        ru: "Выберите список для импорта",
      },
      trakt_bookmarks_export_select_list: {
        ru: "Выберите список для экспорта",
      },
      trakt_bookmarks_no_lists: {
        ru: "Нет персональных списков",
      },
      trakt_bookmarks_lists_load_error: {
        ru: "Не удалось загрузить персональные списки",
      },
      trakt_bookmarks_added: {
        ru: "Добавлено",
      },
      trakt_bookmarks_duplicates: {
        ru: "Дубликаты",
      },
      trakt_bookmarks_skipped_unsupported: {
        ru: "Пропущено (без TMDB)",
      },
      trakt_bookmarks_failed: {
        ru: "Ошибки",
      },
      trakt_bookmarks_import_done: {
        ru: "Импорт завершен",
      },
      trakt_bookmarks_export_done: {
        ru: "Экспорт завершен",
      },
      trakt_bookmarks_canceled: {
        ru: "Операция отменена",
      },
      trakt_bookmarks_sync_failed: {
        ru: "Ошибка синхронизации списка",
      },
      trakttv_scan_qr_code: {
        ru: "Отсканируйте QR-код",
      },
      trakttv_scan_qr: {
        ru: "Отсканируйте QR-код",
      },
      trakttv_check_now: {
        ru: "Проверить",
      },
      trakt_api_section: {
        ru: "Trakt.TV API",
        en: "Trakt.TV API",
      },
      trakt_client_id_label: {
        ru: "Client ID",
        en: "Client ID",
      },
      trakt_client_id_description: {
        ru: "Введите ID",
        en: "Enter ID",
      },
      trakt_client_id_set: {
        ru: "ID указан",
        en: "ID is set",
      },
      trakt_client_secret_label: {
        ru: "Client Secret",
        en: "Client Secret",
      },
      trakt_client_secret_description: {
        ru: "Введите Secret",
        en: "Enter Secret",
      },
      trakt_client_secret_set: {
        ru: "Secret указан",
        en: "Secret is set",
      },
      trakt_api_help_btn: {
        ru: "Как получить Client ID и Secret?",
        en: "How to get Client ID and Secret?",
      },
      trakt_api_help_title: {
        ru: "Получение API ключей Trakt.TV",
        en: "Getting Trakt.TV API Keys",
      },
      trakt_reset_all: {
        ru: "Сброс всех настроек плагина Trakt.TV",
        en: "Reset all Trakt.TV plugin settings",
      },
      trakt_reset_all_descr: {
        ru: "Удалит все токены, настройки и данные аккаунтов",
        en: "Deletes all tokens, settings and account data",
      },
      trakt_reset_confirm: {
        ru: "Да, удалить всё",
        en: "Yes, delete everything",
      },
      trakt_watched_now: {
        ru: "Отметить как просмотрено сейчас",
        en: "Mark as watched now",
      },
      trakt_watched_unknown_date: {
        ru: "Отметить как просмотрено с неизвестной датой",
        en: "Mark as watched (unknown date)",
      },
      trakt_show_completed: {
        ru: "Просмотрено полностью",
      },
      trakt_menu_mark_completed: {
        ru: "Отметить как просмотрено полностью",
        en: "Mark as fully watched",
      },
      trakt_show_in_progress: {
        ru: "В процессе",
      },
      trakt_show_status_title: {
        ru: "Статус сериала",
      },
      trakt_confirm_remove_history: {
        ru: "Удалить из истории Trakt?",
      },
      trakt_confirm_remove: {
        ru: "Удалить",
      },
      trakt_watched_title: {
        ru: "Отметить как просмотренное",
      },
      trakt_watched_yes: {
        ru: "Просмотрено",
      },
      trakt_watched_no: {
        ru: "Не просмотрено",
      },
      trakt_date_unknown: {
        ru: "неизвестно",
        en: "unknown",
      },
      trakt_multiwatch_yes: { ru: 'Да', en: 'Yes' },
      trakt_multiwatch_no:  { ru: 'Нет', en: 'No' },
      trakt_digital_release: {
        ru: "Цифровой релиз фильма",
        en: "Digital film release",
      },
      trakttv_na: {
        ru: "на",
      },
      trakttv_watched_label: {
        ru: "Просмотрено",
      },
      trakt_not_set: {
        ru: "не задан",
      }
    });
  }

  /**
   * Утилиты для TraktTV timetable
   */

  /**
   * Возвращает сегодняшнюю дату в формате YYYY-MM-DD
   */
  function getTodayString() {
    var now = new Date();
    var yyyy = now.getFullYear();
    var mm = String(now.getMonth() + 1).padStart(2, '0');
    var dd = String(now.getDate()).padStart(2, '0');
    return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
  }

  /**
   * Нормализует URL постера
   * @param {Array<string>} posterArr
   * @returns {string}
   */
  function normalizePoster(posterArr) {
    if (!Array.isArray(posterArr) || !posterArr[0]) return '';
    var url = posterArr[0];
    if (url.startsWith('http')) return url;
    if (url.startsWith('//')) return 'https:' + url;
    if (url.startsWith('walter-')) return 'https://' + url;
    return url;
  }

  function TraktTimetableAll() {
    var _this2 = this;
    var Scroll = Lampa.Scroll;
    var Activity = Lampa.Activity;
    var Modal = Lampa.Modal;
    var Template = Lampa.Template;
    var Empty = Lampa.Empty;
    this.activity = null;
    var scroll = new Scroll({ mask: true, over: true, step: 300 });
    var html = $('<div></div>');
    var body = $('<div class="timetable"></div>');
    var last;
    var INITIAL_DAYS = 14;
    var CHUNK_DAYS = 14;
    var nextStartDate = null;
    var loadingMore = false;
    var movieDateCache = null;
    function dateToString(d) {
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }
    function shiftDate(dateStr, n) {
      var d = new Date(dateStr);
      d.setDate(d.getDate() + n);
      return dateToString(d);
    }
    function fetchWatchlistMoviesForCalendar() {
      if (!api$1 || typeof api$1.watchlistMovies !== 'function') return Promise.resolve({});
      if (!Lampa.TMDB || !Lampa.Reguest) return Promise.resolve({});
      var lang = Lampa.Storage ? Lampa.Storage.get('language', 'ru') : 'ru';
      var langCode = lang.slice(0, 2);
      return api$1.watchlistMovies().then(function (items) {
        if (!Array.isArray(items)) return {};
        var movies = items.map(function (item) {
          var m = item && item.movie;
          if (!m || !m.ids || !m.ids.tmdb) return null;
          return { tmdbId: m.ids.tmdb, title: m.title || '' };
        }).filter(Boolean);
        if (!movies.length) return {};
        var promises = movies.map(function (movie) {
          return new Promise(function (resolve) {
            var url = Lampa.TMDB.api('movie/' + movie.tmdbId + '?append_to_response=release_dates&api_key=' + Lampa.TMDB.key() + '&language=' + langCode);
            var network = new Lampa.Reguest();
            network.silent(url, function (d) {
              if (!d || !d.release_dates || !Array.isArray(d.release_dates.results)) { resolve(null); return; }
              var digitalDate = null, usDate = null;
              d.release_dates.results.forEach(function (entry) {
                if (!Array.isArray(entry.release_dates)) return;
                entry.release_dates.forEach(function (rd) {
                  if (rd.type === 4 && rd.release_date) {
                    if (!digitalDate) digitalDate = rd.release_date;
                    if (entry.iso_3166_1 === 'US' && !usDate) usDate = rd.release_date;
                  }
                });
              });
              var chosen = (usDate || digitalDate || '').slice(0, 10);
              if (!chosen) { resolve(null); return; }
              var posterUrl = d.poster_path ? 'https://image.tmdb.org/t/p/w500' + d.poster_path : '';
              resolve({ date: chosen, card: { id: movie.tmdbId, name: d.title || movie.title, poster: posterUrl, source: 'tmdb', isMovie: true } });
            }, function () { resolve(null); });
          });
        });
        return Promise.all(promises).then(function (results) {
          var byDate = {};
          results.forEach(function (r) {
            if (!r) return;
            if (!byDate[r.date]) byDate[r.date] = [];
            byDate[r.date].push(r.card);
          });
          return byDate;
        });
      })['catch'](function () { return {}; });
    }
    var episodeTypes = [{
      key: 'series_finale',
      color: '#8d6e63'
    }, {
      key: 'season_finale',
      color: '#e74c3c'
    }, {
      key: 'mid_season_finale',
      color: '#fbc02d'
    }, {
      key: 'series_premiere',
      color: '#40b3ff'
    }, {
      key: 'season_premiere',
      color: '#29b6f6'
    }, {
      key: 'mid_season_premiere',
      color: '#7e57c2'
    }, {
      key: 'standard',
      color: '#aaa'
    }];
    function groupEpisodesByDate(episodes) {
      var grouped = {};
      episodes.forEach(function (ep) {
        if (!grouped[ep.air_date]) grouped[ep.air_date] = [];
        grouped[ep.air_date].push(ep);
      });
      return grouped;
    }
    function groupEpisodesByShow(episodes) {
      var byShow = {};
      episodes.forEach(function (ep) {
        var sid = ep.card.id;
        if (!byShow[sid]) byShow[sid] = {
          card: ep.card,
          episodes: []
        };
        byShow[sid].episodes.push(ep);
      });
      return byShow;
    }
    function prepareTimetableData(traktData) {
      var shows = {};
      traktData.forEach(function (item) {
        var tmdbId = item.show.ids.tmdb;
        if (!tmdbId) return;
        var posterUrl = '';
        if (item.show.images && Array.isArray(item.show.images.poster)) {
          posterUrl = normalizePoster(item.show.images.poster);
        }
        if (!shows[tmdbId]) {
          shows[tmdbId] = {
            id: tmdbId,
            season: item.episode.season,
            episodes: [],
            card: {
              id: tmdbId,
              name: item.show.title,
              poster: posterUrl,
              source: 'tmdb'
            }
          };
        }
        shows[tmdbId].episodes.push({
          air_date: item.first_aired ? item.first_aired.slice(0, 10) : '',
          season_number: item.episode.season,
          episode_number: item.episode.number,
          episode_type: item.episode.episode_type,
          name: item.episode.title,
          still_path: '',
          card: shows[tmdbId].card
        });
      });
      return Object.values(shows).flatMap(function (show) {
        return show.episodes.map(function (ep) {
          return _objectSpread2(_objectSpread2({}, ep), {}, {
            card: show.card
          });
        });
      });
    }
    function enrichTimetableCards(episodes) {
      var lang = Lampa.Storage ? Lampa.Storage.get('language', 'ru') : 'ru';
      if (!episodes || !episodes.length) return Promise.resolve(episodes);
      if (!Lampa.TMDB || !Lampa.Reguest) return Promise.resolve(episodes);
      var seen = {};
      var cards = [];
      episodes.forEach(function (ep) {
        var id = ep.card && ep.card.id;
        if (id && !seen[id]) { seen[id] = true; cards.push(ep.card); }
      });
      var promises = cards.map(function (card) {
        var cacheKey = 'tv/' + card.id + '/' + lang;
        if (_tmdbLocaleCache[cacheKey]) {
          var cached = _tmdbLocaleCache[cacheKey];
          if (cached.title) card.name = cached.title;
          if (cached.poster) card.poster = cached.poster;
          return Promise.resolve();
        }
        return new Promise(function (resolve) {
          var url = Lampa.TMDB.api('tv/' + card.id + '?api_key=' + Lampa.TMDB.key() + '&language=' + lang);
          var network = new Lampa.Reguest();
          network.silent(url, function (d) {
            var entry = {};
            var localTitle = d && d.name;
            if (localTitle) { card.name = localTitle; entry.title = localTitle; }
            if (d && d.poster_path) { card.poster = 'https://image.tmdb.org/t/p/w500' + d.poster_path; entry.poster = card.poster; }
            _tmdbLocaleCache[cacheKey] = entry;
            resolve();
          }, function () { resolve(); });
        });
      });
      return Promise.all(promises).then(function () { return episodes; });
    }
    function fetchCalendarChunk(startDateStr, days) {
      return api$1.get("/calendars/my/shows/".concat(startDateStr, "/").concat(days, "?extended=images,full"))['catch'](function () {
        Lampa.Bell.push({ text: Lampa.Lang.translate('trakttv_calendar_error') });
        return [];
      });
    }
    function appendChunk(startDateStr, days, traktData) {
      var episodes = prepareTimetableData(traktData);
      return enrichTimetableCards(episodes).then(function (enriched) {
        var grouped = groupEpisodesByDate(enriched);
        for (var i = 0; i < days; i++) {
          var d = new Date(startDateStr);
          d.setDate(d.getDate() + i);
          var dateStr = dateToString(d);
          _this2.append(dateStr, grouped[dateStr] || []);
        }
      });
    }
    function loadMoreDays() {
      if (loadingMore || !nextStartDate) return;
      loadingMore = true;
      fetchCalendarChunk(nextStartDate, CHUNK_DAYS).then(function (data) {
        var chunkStart = nextStartDate;
        nextStartDate = shiftDate(nextStartDate, CHUNK_DAYS);
        return appendChunk(chunkStart, CHUNK_DAYS, data);
      }).then(function () {
        // Wait for browser to paint new items before rebuilding the Navigator
        // grid. No explicit collectionFocus — the user's next DOWN press will
        // move into the newly visible items via Navigator.move('down').
        setTimeout(function () {
          Lampa.Controller.collectionSet(scroll.render());
          loadingMore = false;
        }, 300);
      })['catch'](function () {
        loadingMore = false;
      });
    }
    this.create = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _this = this;
      var startDateStr, results, traktData, episodes, hasAny;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (this.activity) this.activity.loader(true);
            startDateStr = getTodayString();
            _context.n = 1;
            return Promise.all([fetchCalendarChunk(startDateStr, INITIAL_DAYS), fetchWatchlistMoviesForCalendar()]);
          case 1:
            results = _context.v;
            traktData = results[0];
            movieDateCache = results[1];
            episodes = prepareTimetableData(traktData);
            _context.n = 2;
            return enrichTimetableCards(episodes);
          case 2:
            hasAny = false;
            (function () {
              var grouped = groupEpisodesByDate(episodes);
              for (var i = 0; i < INITIAL_DAYS; i++) {
                var d = new Date(startDateStr);
                d.setDate(d.getDate() + i);
                var dateStr = dateToString(d);
                var dayMovies = (movieDateCache && movieDateCache[dateStr]) || [];
                if ((grouped[dateStr] || []).length || dayMovies.length) hasAny = true;
                _this.append(dateStr, grouped[dateStr] || []);
              }
            })();
            nextStartDate = shiftDate(startDateStr, INITIAL_DAYS);
            scroll.onEnd = loadMoreDays;
            if (!hasAny) this.empty();

            scroll.minus();
            scroll.append(body);

            // Color legend — added to html outside the scroll so it never scrolls away
            (function () {
              var _ll = Lampa.Storage ? Lampa.Storage.get('language', 'ru') : 'ru';
              var _lm = {
                series_finale:       { ru: 'Финал сериала',    en: 'Series Finale' },
                season_finale:       { ru: 'Финал сезона',     en: 'Season Finale' },
                mid_season_finale:   { ru: 'Финал полусезона', en: 'Mid-Season Finale' },
                series_premiere:     { ru: 'Премьера сериала', en: 'Series Premiere' },
                season_premiere:     { ru: 'Премьера сезона',  en: 'Season Premiere' },
                mid_season_premiere: { ru: 'Возобновление',    en: 'Mid-Season Return' },
                standard:            { ru: 'Серия',            en: 'Episode' }
              };
              var dot = function (color) {
                return '<span style="display:inline-block;width:.85em;height:.85em;border-radius:.2em;background:' + color + ';flex-shrink:0"></span>';
              };
              var chip = function (color, label) {
                return '<span style="display:inline-flex;align-items:center;gap:.35em;margin-right:1em;white-space:nowrap">' + dot(color) + label + '</span>';
              };
              var html_parts = episodeTypes.map(function (t) {
                var lb = _lm[t.key];
                return chip(t.color, lb ? (lb[_ll] || lb.en) : t.key);
              });
              html_parts.push(chip('#FF9800', Lampa.Lang.translate('trakt_digital_release') || (_ll === 'ru' ? 'Цифровой релиз фильма' : 'Digital film release')));
              html.append($('<div style="display:flex;flex-wrap:wrap;padding:.5em 1em .3em;font-size:.8em;opacity:.75;line-height:1.8;flex-shrink:0">' + html_parts.join('') + '</div>'));
            })();

            html.append(scroll.render());

            if (this.activity) this.activity.loader(false);

            this.body = body;
            this.scroll = scroll;
            this.html = html;

            if (this.activity && typeof this.activity.toggle === 'function') {
              this.activity.toggle();
            }
            return _context.a(2, this.render());
        }
      }, _callee, this);
    }));
    this.empty = function () {
      var empty = new Empty({
        descr: Lampa.Lang.translate('trakttv_no_upcoming')
      });
      html.append(empty.render());
      _this2.start = empty.start;
      if (_this2.activity) _this2.activity.loader(false);
    };
    this.append = function (date, eps) {
      var movies = (movieDateCache && movieDateCache[date]) || [];
      var item = $("\n            <div class=\"timetable__item selector\">\n                <div class=\"timetable__inner\">\n                    <div class=\"timetable__date\">".concat(date, "</div>\n                    <div class=\"timetable__body\"></div>\n                </div>\n            </div>\n        "));
      if (eps.length || movies.length) {
        var byShow = groupEpisodesByShow(eps);
        Object.values(byShow).forEach(function (show) {
          var card = show.card;
          var typesSet = _toConsumableArray(new Set(show.episodes.map(function (ep) {
            return ep.episode_type;
          }).filter(Boolean)));
          var foundType = episodeTypes.find(function (typeObj) {
            return typesSet.includes(typeObj.key);
          }) || episodeTypes[episodeTypes.length - 1];
          var mainTypeKey = foundType.key;
          var mainTypeColor = foundType.color;
          item.find('.timetable__body').append("\n                    <div>\n                        <span title=\"".concat(mainTypeKey, "\" style=\"display:inline-block;width:0.9em;height:0.9em;border-radius:0.2em;margin-right:0.3em;background:").concat(mainTypeColor, ";vertical-align:middle\"></span>\n                        ").concat(card.name || '', "\n                    </div>\n                "));
        });
        movies.forEach(function (card) {
          item.find('.timetable__body').append("<div><span style=\"display:inline-block;width:0.9em;height:0.9em;border-radius:0.2em;margin-right:0.3em;background:#FF9800;vertical-align:middle\" title=\"movie\"></span>".concat(card.name || '', "</div>"));
        });
        item.addClass('timetable__item--any');
      } else {
        item.find('.timetable__body').append("<div class=\"timetable__empty\">".concat(Lampa.Lang.translate('trakttv_no_series'), "</div>"));
      }
      item.on('hover:focus', function () {
        last = $(this)[0];
        scroll.update($(this));
      }).on('hover:hover', function () {
        last = $(this)[0];
      }).on('hover:enter', function () {
        last = $(this)[0];
        if (!eps.length && !movies.length) return;
        var modal = $('<div></div>');
        if (eps.length) {
          var _byShow = groupEpisodesByShow(eps);
          Object.values(_byShow).forEach(function (show) {
            var card = show.card;
            var noty = Template.get('notice_card', {
              time: date,
              title: card.name,
              descr: show.episodes.map(function (ep) {
                return "S: <b>".concat(ep.season_number, "</b> E: <b>").concat(ep.episode_number, "</b> — ").concat(ep.name);
              }).join('<br>')
            });
            noty.find('.notice__img').remove();
            if (card.poster) {
              noty.find('.notice__left').css('margin-right', '5em');
              noty.find('.notice__left').prepend("<img src=\"".concat(card.poster, "\" style=\"max-width:120px;max-height:170px;display:block;margin-bottom:1em;\">"));
            }
            noty.on('hover:enter', function () {
              Modal.close();
              Activity.push({ url: '', component: 'full', id: card.id, method: 'tv', card: card, source: card.source });
            });
            modal.append(noty);
          });
        }
        movies.forEach(function (card) {
          var noty = Template.get('notice_card', {
            time: date,
            title: card.name,
            descr: Lampa.Lang.translate('trakt_digital_release') || 'Digital release'
          });
          noty.find('.notice__img').remove();
          if (card.poster) {
            noty.find('.notice__left').css('margin-right', '5em');
            noty.find('.notice__left').prepend("<img src=\"".concat(card.poster, "\" style=\"max-width:120px;max-height:170px;display:block;margin-bottom:1em;\">"));
          }
          noty.on('hover:enter', function () {
            Modal.close();
            Activity.push({ url: '', component: 'full', id: card.id, method: 'movie', card: card, source: card.source });
          });
          modal.append(noty);
        });
        Modal.open({
          title: "".concat(Lampa.Lang.translate('trakttv_episodes_on'), " ").concat(date),
          size: 'medium',
          html: modal,
          onBack: function onBack() { Modal.close(); Lampa.Controller.toggle('content'); }
        });
      });
      body.append(item);
    };
    this.back = function () {
      Activity.backward();
    };
    this.start = function () {
      if (this.activity) this.activity.loader(false);
      Lampa.Controller.add('content', {
        link: this,
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          if (!last) last = body.find('.timetable__item.selector').get(0);
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        up: function up() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('up')) Navigator.move('up');
          else Lampa.Controller.toggle('head');
        },
        down: function down() {
          Lampa.Controller.collectionSet(scroll.render());
          if (typeof Navigator !== 'undefined' && Navigator.canmove('down')) Navigator.move('down');
        },
        left: function left() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('left')) Navigator.move('left');
          else Lampa.Controller.toggle('menu');
        },
        right: function right() {},
        back: this.back
      });
      Lampa.Controller.toggle('content');
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      scroll.destroy();
      html.remove();
    };
  }

  /**
   */

  var HEADER_STYLE = 'display:flex; align-items:center; gap:10px;';
  var ICON_STYLE = 'width:52px; height:52px;';
  var LINE_TITLE_STYLE = 'display:inline-flex; align-items:center; gap:.4em;';
  var LINE_ICON_STYLE = 'width:1em; height:1em; display:inline-block;';
  var TRAKT_ICON_CLASS = 'trakt-brand-icon';

  var TRAKT_ICON = "<svg class=\"".concat(TRAKT_ICON_CLASS, "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\">\n  <path fill=\"currentColor\" d=\"M47.87,9.58c-.05-.39-.13-.77-.23-1.15-.19-.74-.46-1.45-.79-2.14-.15-.3-.31-.6-.5-.88-.36-.6-.77-1.16-1.24-1.69C43.03,1.43,40.05,0,36.73,0H11.26C5.04,0,0,5.05,0,11.27v25.48C0,42.96,5.04,48,11.26,48h25.47c6.22,0,11.27-5.04,11.27-11.26V11.27c0-.57-.04-1.13-.13-1.69ZM47,36.74c0,5.66-4.61,10.25-10.26,10.25H11.26c-5.66,0-10.25-4.6-10.25-10.25V11.27C1,5.61,5.6,1,11.26,1h25.47c3.04,0,5.77,1.33,7.66,3.43l-22.85,22.86-8.62-8.62-1.46,1.46,14.4,14.4,1.46-1.47-4.31-4.31L45.61,6.14c.18.29.33.6.47.91l-21.69,21.7,3.62,3.62,1.46-1.46-2.16-2.16,19.47-19.48c.08.4.14.8.17,1.21l-18.26,18.27,1.46,1.46,16.83-16.84v23.36ZM15.77,15.82l7.93,7.93,1.46-1.48-7.93-7.92-1.46,1.46ZM13.62,17.98l7.92,7.93,1.47-1.48-7.93-7.92-1.46,1.47ZM6.67,35.12V12.88c0-3.42,2.78-6.2,6.2-6.2h20.79v-2.08H12.87c-4.56,0-8.28,3.71-8.28,8.28v22.23c0,4.57,3.72,8.29,8.28,8.29h22.24c4.57,0,8.28-3.72,8.28-8.29v-3.51h-2.08v3.51c0,3.42-2.78,6.21-6.2,6.21H12.87c-3.42,0-6.2-2.79-6.2-6.21Z\"/>\n</svg>");

  var WATCHLIST_ICON = "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z\"/></svg>";

  var HISTORY_ICON = "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>";

  function createHeaderWithIcon(icon, text) {
    return "<div class=\"trakt-header\" style=\"".concat(HEADER_STYLE, "\"><div class=\"trakt-icon\" style=\"").concat(ICON_STYLE, "\">").concat(icon, "</div><div class=\"trakt-title\">").concat(text, "</div></div>");
  }
  function createLineTitle(text) {
    var sizedIcon = TRAKT_ICON.replace('<svg ', "<svg style=\"width:100%; height:100%; display:block;\" ");
    var root = document.createElement('span');
    root.className = 'trakt-line-title';
    root.setAttribute('style', LINE_TITLE_STYLE);
    var iconWrap = document.createElement('span');
    iconWrap.className = 'trakt-line-title__icon';
    iconWrap.setAttribute('style', LINE_ICON_STYLE);
    iconWrap.innerHTML = sizedIcon;
    var label = document.createElement('span');
    label.textContent = text;
    root.appendChild(iconWrap);
    root.appendChild(label);
    return root;
  }

  var icons = {
    TRAKT_ICON: TRAKT_ICON,
    WATCHLIST_ICON: WATCHLIST_ICON,
    HISTORY_ICON: HISTORY_ICON,
    HEADER_STYLE: HEADER_STYLE,
    ICON_STYLE: ICON_STYLE,
    createHeaderWithIcon: createHeaderWithIcon,
    createLineTitle: createLineTitle
  };

  function t$2(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    try {
      var translated = Lampa.Lang.translate(key);
      return translated || fallback || key;
    } catch (e) {
      return fallback || key;
    }
  }
  function notify(text) {
    Lampa.Bell.push({
      text: text
    });
  }
  function normalizeCardParams(cardData) {
    var _cardData$movie, _cardData$data;
    var source = (cardData === null || cardData === void 0 ? void 0 : cardData.movie) || (cardData === null || cardData === void 0 ? void 0 : cardData.card) || (cardData === null || cardData === void 0 ? void 0 : cardData.data) || cardData || {};
    var method = (cardData === null || cardData === void 0 ? void 0 : cardData.method) || source.method || source.card_type || (source.first_air_date || source.name ? 'tv' : 'movie');
    var externalIds = (cardData === null || cardData === void 0 ? void 0 : cardData.external_ids) || source.external_ids || {};
    var ids = _objectSpread2(_objectSpread2({}, source.ids || {}), (cardData === null || cardData === void 0 ? void 0 : cardData.ids) || {});
    var rawId = source.id || (cardData === null || cardData === void 0 ? void 0 : cardData.id) || (cardData === null || cardData === void 0 || (_cardData$movie = cardData.movie) === null || _cardData$movie === void 0 ? void 0 : _cardData$movie.id) || (cardData === null || cardData === void 0 || (_cardData$data = cardData.data) === null || _cardData$data === void 0 ? void 0 : _cardData$data.id) || externalIds.tmdb_id;
    if (!ids.tmdb && externalIds.tmdb_id) ids.tmdb = externalIds.tmdb_id;
    if (!ids.trakt && externalIds.trakt_id) ids.trakt = externalIds.trakt_id;
    if (!ids.imdb && externalIds.imdb_id) ids.imdb = externalIds.imdb_id;
    if (!ids.tmdb && rawId) ids.tmdb = rawId;
    return _objectSpread2(_objectSpread2({}, source), {}, {
      method: method,
      ids: ids,
      id: rawId || ids.tmdb
    });
  }
  function loadMyListsMembership(params, lists) {
    var safeLists = Array.isArray(lists) ? lists : [];
    var checks = safeLists.map(function (list) {
      return api$1.inList({
        listId: list.id,
        item: params,
        limit: 100,
        maxPages: 5
      }).then(function (inList) {
        return _objectSpread2(_objectSpread2({}, list), {}, {
          inList: !!inList
        });
      })["catch"](function () {
        return _objectSpread2(_objectSpread2({}, list), {}, {
          inList: false
        });
      });
    });
    return Promise.all(checks);
  }
  var _listMenuCache = {};
  var _LIST_MENU_TTL = 5 * 60 * 1000;
  function _listMenuCacheKey(params) {
    var id = params && (params.id || (params.ids && (params.ids.tmdb || params.ids.trakt))) || '';
    return id + ':' + ((params && params.method) || '');
  }
  function _getListMenuCache(params) {
    var e = _listMenuCache[_listMenuCacheKey(params)];
    return (e && Date.now() - e.ts < _LIST_MENU_TTL) ? e : null;
  }
  function _setListMenuCache(params, watchlistState, withMembership) {
    _listMenuCache[_listMenuCacheKey(params)] = { ts: Date.now(), watchlistState: watchlistState, withMembership: withMembership };
  }
  function _invalidateListMenuCache(params) {
    if (params) delete _listMenuCache[_listMenuCacheKey(params)];
    else _listMenuCache = {};
  }
  function buildManagerItems(watchlistState, lists) {
    var items = [];
    items.push({
      title: watchlistState ? t$2('trakt_menu_wont_watch', 'Not interested') : t$2('trakt_menu_want_to_watch', 'Want to watch'),
      target: 'watchlist',
      inList: !!watchlistState
    });
    (lists || []).forEach(function (list) {
      var listName = (list.list_title || list.title || '').trim();
      if (!listName) return;
      var actionTitle = list.inList ? t$2('trakt_remove_from_list_action', 'Remove from list') : t$2('trakt_add_to_list_action', 'Add to list');
      items.push({
        title: "".concat(listName, " \xB7 ").concat(actionTitle),
        target: 'list',
        listId: list.id,
        listTitle: listName,
        inList: !!list.inList
      });
    });
    return items;
  }
  function updateButtonStyle(button, textNode, isAdded) {
    if (isAdded) {
      button.classList.add('added');
      button.style.color = '#9b59d0';
      if (textNode) textNode.textContent = t$2('trakt_lists_button_in_watchlist', 'In watchlist');
    } else {
      button.classList.remove('added');
      button.style.color = '';
      if (textNode) textNode.textContent = t$2('trakt_lists_button', 'Manage lists');
    }
  }
  function refreshButtonState(button, textNode, params) {
    api$1.inWatchlist(params).then(function (isAdded) {
      return updateButtonStyle(button, textNode, !!isAdded);
    })["catch"](function () {
      return updateButtonStyle(button, textNode, false);
    });
  }
  function handleSelectAction(item, params, onDone) {
    if (item.target === 'watchlist') {
      var wasInList = !!item.inList;
      var tmdbId = params && (params.ids && params.ids.tmdb || params.id);
      var request = wasInList ? api$1.removeFromWatchlist(params) : api$1.addToWatchlist(params);
      request.then(function () {
        invalidateWatchlistBadgeCache();
        if (wasInList && tmdbId) {
          document.querySelectorAll('.trakt-watchlist-badge[data-tmdb="' + tmdbId + '"]').forEach(function(el) { el.remove(); });
        } else if (!wasInList && tmdbId) {
          if (_watchlistBadgeCache) {
            var mediaType = params.method === 'movie' ? 'movies' : 'shows';
            _watchlistBadgeCache[mediaType].add(String(tmdbId));
          }
        }
        notify(wasInList ? t$2('trakt_watchlist_remove', 'Removed from watchlist') : t$2('trakt_watchlist_add', 'Added to watchlist'));
        if (onDone) onDone();
      })["catch"](function () {
        return notify(t$2('trakt_watchlist_action_error', 'Watchlist action failed'));
      });
      return;
    }
    if (item.target === 'list' && item.listId) {
      var _request = item.inList ? api$1.removeFromList({
        listId: item.listId,
        item: params
      }) : api$1.addToList({
        listId: item.listId,
        item: params
      });
      _request.then(function () {
        notify(item.inList ? t$2('trakt_item_removed_from_list', 'Item removed from list') : t$2('trakt_item_added_to_list', 'Item added to list'));
        if (onDone) onDone();
      })["catch"](function (error) {
        if (error && error.status === 409) {
          notify(t$2('trakt_list_conflict', 'Item is already in this list'));
          return;
        }
        notify(t$2('trakt_list_action_error', 'List action failed'));
      });
    }
  }
  function openListManager(params, button, textNode) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var onBack = typeof options.onBack === 'function' ? options.onBack : function () {
      Lampa.Controller.toggle('content');
    };
    Promise.all([api$1.inWatchlist(params)["catch"](function () {
      return false;
    }), api$1.myLists({
      page: 1,
      limit: 100
    })["catch"](function () {
      return {
        results: []
      };
    })]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        watchlistState = _ref2[0],
        myListsResponse = _ref2[1];
      var lists = myListsResponse && Array.isArray(myListsResponse.results) ? myListsResponse.results : [];
      loadMyListsMembership(params, lists).then(function (withMembership) {
        Lampa.Select.show({
          title: t$2('trakt_manage_lists_title', 'Manage lists'),
          items: buildManagerItems(!!watchlistState, withMembership),
          onSelect: function onSelect(item) {
            handleSelectAction(item, params, function () {
              return refreshButtonState(button, textNode, params);
            });
          },
          onBack: onBack
        });
      });
    })["catch"](function () {
      notify(t$2('trakt_list_action_error', 'List action failed'));
    });
  }
  function openManagerByCard(cardData) {
    var _params$ids, _params$ids2, _params$ids3;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!Lampa.Storage.get('trakt_token')) {
      notify(t$2('trakt_login', 'Login to Trakt.TV'));
      return false;
    }
    var params = normalizeCardParams(cardData);
    if (!params || !params.id && !(params !== null && params !== void 0 && (_params$ids = params.ids) !== null && _params$ids !== void 0 && _params$ids.tmdb) && !(params !== null && params !== void 0 && (_params$ids2 = params.ids) !== null && _params$ids2 !== void 0 && _params$ids2.trakt) && !(params !== null && params !== void 0 && (_params$ids3 = params.ids) !== null && _params$ids3 !== void 0 && _params$ids3.imdb)) {
      notify(t$2('trakt_list_action_error', 'List action failed'));
      return false;
    }
    openListManager(params, null, null, options);
    return true;
  }
  function addWatchlistButton(card) {
    var button = document.createElement('div');
    button.className = 'full-start__button selector watchlist-button trakt-list-manager-button';
    button.innerHTML = "\n        ".concat(icons.TRAKT_ICON, "\n        <span>").concat(t$2('trakt_lists_button', 'Manage lists'), "</span>\n    ");
    var textNode = button.querySelector('span');
    var params = normalizeCardParams(card);
    refreshButtonState(button, textNode, params);
    button.on('hover:enter', function () {
      openListManager(params, button, textNode);
    });
    return button;
  }
  var watchlist = {
    addWatchlistButton: addWatchlistButton,
    openManagerByCard: openManagerByCard
  };

  var TraktHistory = {
    showWatchProgress: function showWatchProgress(data, element) {
      var _A = typeof api$1 !== 'undefined' && api$1 || null;
      var method = element && element.object && element.object.method;
      var isShow = method === 'tv';
      var isMovie = method === 'movie';
      if (!isShow && !isMovie) return;

      var movieData = (data && data.movie) || data || {};
      var itemId = movieData.id;
      if (!itemId) return;

      var renderRoot = element && element.object && element.object.activity && typeof element.object.activity.render === 'function'
        ? element.object.activity.render() : null;
      if (!renderRoot) return;

      function buildProgressElement() {
        var el = document.createElement('div');
        el.className = 'full-start-new__details trakt selector trakt-status-clickable';
        el.innerHTML = '<div class="trakt-icon" style="width:1.5em;height:1.5em;color:rgba(255,255,255,0.38)">' + icons.TRAKT_ICON + '</div><span>…</span>';

        function updateVisual(labelType, season, episodeNum, watched, watchedAt) {
          var iconEl = el.querySelector('.trakt-icon');
          var spanEl = el.querySelector('span');
          if (iconEl) iconEl.style.color = watched ? '#9b59d0' : 'rgba(255,255,255,0.38)';
          if (!spanEl) return;
          var _RU_MONTHS_GEN = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
          function fmtWatchedDate(iso) {
            if (!iso) return null;
            var d = new Date(iso);
            if (isNaN(d.getTime()) || d.getFullYear() <= 1970) return null;
            return d.getDate() + ' ' + _RU_MONTHS_GEN[d.getMonth()] + ' ' + d.getFullYear();
          }
          var dateLabel = watched ? (fmtWatchedDate(watchedAt) || (Lampa.Lang.translate('trakt_date_unknown') || 'неизвестно')) : null;
          if (labelType === 'completed') {
            spanEl.textContent = Lampa.Lang.translate('trakt_show_completed') + (dateLabel ? ' (' + dateLabel + ')' : '');
          } else if (labelType === 'movie' || labelType === 'not_watched') {
            spanEl.textContent = (watched ? Lampa.Lang.translate('trakt_watched_yes') : Lampa.Lang.translate('trakt_watched_no')) + (dateLabel ? ' (' + dateLabel + ')' : '');
          } else {
            spanEl.textContent = Lampa.Lang.translate('trakttv_watched_label') + ': ' + Lampa.Lang.translate('full_season') + ' ' + season + ' \xB7 ' + Lampa.Lang.translate('full_episode') + ' ' + episodeNum;
          }
        }
        function confirmRemoveFromHistory(method) {
          Lampa.Select.show({
            title: Lampa.Lang.translate('trakt_confirm_remove_history'),
            items: [{ title: Lampa.Lang.translate('trakt_confirm_remove'), action: 'confirm' }],
            onSelect: function(a) {
              if (a.action !== 'confirm' || !_A) return;
              _A.removeFromHistory({ method: method, ids: { tmdb: itemId } }).then(function() {
                invalidateWatchedCache();
                document.querySelectorAll('.trakt-watched-badge[data-tmdb="' + itemId + '"]').forEach(function(el) { el.remove(); });
                notify$1(Lampa.Lang.translate('trakt_history_removed'));
                TraktHistory.showWatchProgress(data, element);
              }).catch(function() {});
            },
            onBack: function() { Lampa.Controller.toggle('content'); }
          });
        }
        $(el).on('hover:enter', function() {
          var listParams = normalizeCardParams(data);
          function showTraktMenu(watchlistState, withMembership) {
            var statusItems = isShow ? [
              { title: Lampa.Lang.translate('trakt_menu_mark_completed'), action: 'completed' },
              { title: Lampa.Lang.translate('trakt_menu_not_watched'), action: 'not_watched' }
            ] : [
              { title: Lampa.Lang.translate('trakt_watched_now'), action: 'now' },
              { title: Lampa.Lang.translate('trakt_watched_unknown_date'), action: 'unknown' },
              { title: Lampa.Lang.translate('trakt_menu_not_watched'), action: 'not_watched' }
            ];
            var allItems = statusItems.concat(buildManagerItems(!!watchlistState, withMembership));
            Lampa.Select.show({
              title: 'Trakt.TV',
              items: allItems,
              onSelect: function(a) {
                if (a.target === 'watchlist' || a.target === 'list') {
                  handleSelectAction(a, listParams, function() { _invalidateListMenuCache(listParams); });
                  return;
                }
                if (a.action === 'completed' && isShow && _A) {
                  _A.addToHistory({ method: 'show', id: itemId, ids: { tmdb: itemId } }, 'all').then(function() {
                    invalidateWatchedCache();
                    TraktHistory.showWatchProgress(data, element);
                  }).catch(function() {});
                } else if (a.action === 'not_watched') {
                  confirmRemoveFromHistory(isShow ? 'show' : 'movie');
                } else if (a.action === 'in_progress' && _A) {
                  TraktHistory.showWatchProgress(data, element);
                } else if ((a.action === 'now' || a.action === 'unknown') && !isShow && _A) {
                  var payload = { method: 'movie', id: itemId, ids: { tmdb: itemId } };
                  if (a.action === 'unknown') payload.watched_at = '1970-01-01T00:00:00.000Z';
                  _A.addToHistory(payload).then(function() {
                    invalidateWatchedCache();
                    TraktHistory.showWatchProgress(data, element);
                  }).catch(function() {});
                }
              },
              onBack: function() { Lampa.Controller.toggle('content'); }
            });
          }
          var cached = _getListMenuCache(listParams);
          if (cached) {
            showTraktMenu(cached.watchlistState, cached.withMembership);
            return;
          }
          el.classList.add('trakt-loading');
          Promise.all([
            (api$1 ? api$1.inWatchlist(listParams).catch(function() { return false; }) : Promise.resolve(false)),
            (api$1 ? api$1.myLists({ page: 1, limit: 100 }).catch(function() { return { results: [] }; }) : Promise.resolve({ results: [] }))
          ]).then(function(res) {
            var watchlistState = res[0];
            var myListsResponse = res[1];
            var lists = myListsResponse && Array.isArray(myListsResponse.results) ? myListsResponse.results : [];
            return loadMyListsMembership(listParams, lists).then(function(withMembership) {
              _setListMenuCache(listParams, watchlistState, withMembership);
              el.classList.remove('trakt-loading');
              showTraktMenu(watchlistState, withMembership);
            });
          }).catch(function() {
            el.classList.remove('trakt-loading');
            Lampa.Controller.toggle('content');
          });
        });
        return { el: el, updateVisual: updateVisual };
      }

      function insertElement(targetEl) {
        var taglineElement = renderRoot.find('.full-start-new__rate-line');
        if (taglineElement.length) {
          renderRoot.find('.full-start-new__details.trakt').remove();
          taglineElement.after(targetEl);
        }
      }

      var hasApplecation = isShow && Array.isArray(window.Lampa && Lampa.Manifest && Lampa.Manifest.plugins) &&
        Lampa.Manifest.plugins.some(function(p) { return p && p.name === 'Applecation'; });

      // Insert element synchronously so it is present when Lampa builds the
      // navigation graph. Then in setTimeout(0) — after Lampa's toggle('content')
      // has run and may have focused our element — explicitly rebuild the
      // collection and restore focus to the first main button.
      var progress = null;
      if (!hasApplecation) {
        progress = buildProgressElement();
        insertElement(progress.el);
        setTimeout(function() {
          if (!progress.el.parentNode) return;
          var firstBtn = renderRoot.find('.full-start-new__buttons .selector').first();
          if (!firstBtn.length) return;
          Lampa.Controller.collectionSet(renderRoot);
          Lampa.Controller.collectionFocus(firstBtn[0], renderRoot);
        }, 0);
      }

      if (isShow) {
        getShowProgressData(itemId).then(function(result) {
          var progressData = result.progress || {};
          var aired = progressData.aired || 0;
          var watchedCount = progressData.completed || 0;
          var lastEp = progressData.last_episode;
          var season = lastEp && lastEp.season;
          var ep = lastEp && lastEp.number;

          if (hasApplecation) {
            var tryInsertApplecation = function() {
              var rootNode = renderRoot && renderRoot.get ? renderRoot.get(0) : null;
              var cardRoot = (rootNode && rootNode.querySelector && rootNode.querySelector('.full-start-new.applecation')) || document.querySelector('.full-start-new.applecation');
              var applecationInfo = cardRoot && cardRoot.querySelector && cardRoot.querySelector('.applecation__info');
              if (!applecationInfo) return false;
              var existing = applecationInfo.querySelector('.trakt-applecation-progress');
              if (existing) existing.remove();
              renderRoot.find('.full-start-new__details.trakt').remove();
              if (season && ep) {
                var span = document.createElement('span');
                span.className = 'trakt-applecation-progress';
                span.innerHTML = '<span class="trakt-icon">' + icons.TRAKT_ICON + '</span><span class="trakt-applecation-progress__text">S' + season + ' · E' + ep + '</span>';
                var badges = applecationInfo.querySelector('.applecation__quality-badges');
                if (badges) badges.before(span); else applecationInfo.append(span);
              }
              return true;
            };
            if (!tryInsertApplecation()) {
              var attempts2 = 0;
              var retry = function() { if (tryInsertApplecation()) return; if (++attempts2 < 10) setTimeout(retry, 200); };
              retry();
            }
            return;
          }

          var isCompleted = aired > 0 && aired === watchedCount;
          var labelType;
          if (isCompleted) {
            labelType = 'completed';
          } else if (watchedCount > 0 && season) {
            labelType = 'watching';
          } else {
            labelType = 'not_watched';
          }
          if (progress) progress.updateVisual(labelType, season, ep, labelType !== 'not_watched', progressData.last_watched_at);
        }).catch(function(error) {
          logWarn('Failed to load show progress', error, { debugOnly: true });
        });

      } else {
        ensureWatchedCache().then(function(cache) {
          var isWatched = cache.movies.has(String(itemId));
          var watchedAt = isWatched && cache.moviesWatchedAt ? cache.moviesWatchedAt.get(String(itemId)) : null;
          if (progress) progress.updateVisual('movie', null, null, isWatched, watchedAt);
        }).catch(function() {
          if (progress) progress.updateVisual('movie', null, null, false, null);
        });
      }
    },
    addHistoryButton: function addHistoryButton(data) {
      var button = document.createElement('div');
      button.className = 'full-start__button selector trakt_history-button';
      button.innerHTML = "\n               ".concat(icons.HISTORY_ICON, " \n                <span>").concat(Lampa.Lang.translate('trakt_history_not_in'), "</span>\n");

      inHistory(data.movie, function (isInHistory) {
        updateButtonStyle(button, isInHistory);
      }, function () {
        button.style.display = 'none';
      });
      function updateButtonStyle(button, isInHistory) {
        if (isInHistory) {
          button.classList.add('added');
          button.style.color = '#37ff54';
          button.querySelector('span').textContent = Lampa.Lang.translate('trakt_history_in');
        } else {
          button.classList.remove('added');
          button.style.color = '';
          button.querySelector('span').textContent = Lampa.Lang.translate('trakt_history_not_in');
        }
      }

      $(button).on('hover:enter', function () {
        var isInHistory = button.classList.contains('added');
        if (isInHistory) {
          var _type = data.movie.first_air_date ? 'show' : 'movie';

          var _apiData = {
            method: _type === 'movie' ? 'movie' : 'show',
            id: data.movie.id,
            season: data.movie.season_number || 1,
            episode: data.movie.episode_number || 1
          };
          if (_type === 'movie') {
            removeFromHistory(_apiData).then(function () {
              Lampa.Bell.push({
                text: Lampa.Lang.translate('trakt_history_removed')
              });
              updateButtonStyle(button, false);
            })["catch"](function (err) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate('trakt_history_removeError'),
                err: err
              });
            });
          } else if (_type === 'show') {
            Lampa.Select.show({
              title: Lampa.Lang.translate('trakt_history_title'),
              items: [{
                title: Lampa.Lang.translate('trakt_history_all'),
                action: 'all'
              }, {
                title: Lampa.Lang.translate('trakt_history_season'),
                action: 'last_season'
              }, {
                title: Lampa.Lang.translate('trakt_history_episodes'),
                action: 'last_episode'
              }],
              onSelect: function onSelect(a) {
                removeFromHistory(_apiData, a.action).then(function () {
                  Lampa.Bell.push({
                    text: Lampa.Lang.translate('trakt_history_removed', {
                      type: a.title
                    })
                  });
                  updateButtonStyle(button, false);
                })["catch"](function (err) {
                  Lampa.Bell.push({
                    text: Lampa.Lang.translate('trakt_history_removeError'),
                    err: err
                  });
                });
              },
              onBack: function onBack() {
                Lampa.Controller.toggle('menu');
              }
            });
          }
          return;
        }
        var type = data.movie.first_air_date ? 'show' : 'movie';

        var apiData = {
          method: type === 'movie' ? 'movie' : 'show',
          id: data.movie.id,
          season: data.movie.season_number || 1,
          episode: data.movie.episode_number || 1
        };
        if (type === 'movie') {
          addToHistory(apiData).then(function () {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_history_added')
            });
            updateButtonStyle(button, true);
          })["catch"](function (err) {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_history_addError'),
              err: err
            });
          });
        } else if (type === 'show') {
          Lampa.Select.show({
            title: Lampa.Lang.translate('trakt_history_title'),
            items: [{
              title: Lampa.Lang.translate('trakt_history_all'),
              action: 'all'
            }, {
              title: Lampa.Lang.translate('trakt_history_season'),
              action: 'last_season'
            }, {
              title: Lampa.Lang.translate('trakt_history_episodes'),
              action: 'last_episode'
            }],
            onSelect: function onSelect(a) {
              addToHistory(apiData, a.action).then(function () {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate('trakt_history_added', {
                    type: a.title
                  })
                });
                updateButtonStyle(button, true);
              })["catch"](function (err) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate('trakt_history_addError'),
                  err: err
                });
              });
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('menu');
            }
          });
        }
      });
      return button;
    }
  };

  function showDigitalReleaseDate(data, element) {
    var movieData = (data && data.movie) || data || {};
    var movieId = movieData.id || (data && data.id);
    if (!movieId || !Lampa.TMDB || !Lampa.Reguest) return;
    var act = element && element.object && element.object.activity;
    var renderRoot = act && typeof act.render === 'function' ? act.render() : null;
    if (!renderRoot) return;

    function applyDate(isoDate) {
      if (renderRoot.find('.trakt-digital-date').length) return;
      var datePart = (isoDate || '').split('T')[0];
      var parts = datePart.split('-');
      if (parts.length !== 3 || !parts[1] || !parts[2]) return;
      var displayDate = parts[2] + '.' + parts[1] + '.' + parts[0];
      var label = (Lampa.Lang && Lampa.Lang.translate('trakt_digital_release')) || 'Digital';
      var chip = document.createElement('div');
      chip.className = 'full-start-new__details trakt-digital-date';
      chip.textContent = label + ': ' + displayDate;
      var anchor = renderRoot.find('.full-start-new__details:not(.trakt):not(.trakt-digital-date)').last();
      if (anchor.length) {
        anchor.after(chip);
      } else {
        var rateLine = renderRoot.find('.full-start-new__rate-line');
        if (rateLine.length) rateLine.before(chip);
        else renderRoot.find('.full-start-new').append(chip);
      }
    }

    var tmdbId = String(movieId);
    var lang = Lampa.Storage ? Lampa.Storage.get('language', 'ru') : 'ru';
    var langCode = lang.slice(0, 2).toUpperCase();
    var countryMap = { RU: 'RU', EN: 'US', UK: 'GB', DE: 'DE', FR: 'FR', ES: 'ES', IT: 'IT', PT: 'PT' };
    var isoCountry = countryMap[langCode] || 'US';

    // Быстрый путь: берём из общего кэша
    var cachedDates = getUpcomingMovieDates();
    if (tmdbId in cachedDates && cachedDates[tmdbId]) {
      applyDate(cachedDates[tmdbId]);
      return;
    }
    // Прямой запрос через append_to_response (тот же метод что у Календаря)
    var url = Lampa.TMDB.api('movie/' + tmdbId + '?api_key=' + Lampa.TMDB.key() + '&append_to_response=release_dates');
    var network = new Lampa.Reguest();
    network.silent(url, function(resp) {
      var results = resp && resp.release_dates && Array.isArray(resp.release_dates.results)
        ? resp.release_dates.results : null;
      if (!results) return;
      var exactDate = null, usDate = null, anyDate = null;
      results.forEach(function(entry) {
        if (!Array.isArray(entry.release_dates)) return;
        entry.release_dates.forEach(function(rd) {
          if (rd.type === 4 && rd.release_date) {
            if (!anyDate) anyDate = rd.release_date;
            if (entry.iso_3166_1 === 'US' && !usDate) usDate = rd.release_date;
            if (entry.iso_3166_1 === isoCountry) exactDate = rd.release_date;
          }
        });
      });
      var chosen = exactDate || usDate || anyDate;
      if (!chosen) return;
      var map = getUpcomingMovieDates();
      map[tmdbId] = chosen;
      saveUpcomingMovieDates(map);
      _digitalDateFetchDone.add(tmdbId);
      var today = new Date(); today.setHours(0, 0, 0, 0);
      var release = new Date(chosen); release.setHours(0, 0, 0, 0);
      if (release >= today) { _digitalDatesAvailable = true; scheduleRefreshDigitalBadgesDOM(); }
      applyDate(chosen);
    }, function() {});
  }

  /**
   * Модуль для роботи з меню TraktTV
   */
  function addMenuItems() {
    var t = function t(key) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      try {
        return Lampa.Lang.translate(key) || fallback || key;
      } catch (e) {
        return fallback || key;
      }
    };
    var watchlistTitle = t('trakttv_watchlist', 'Watchlist');
    var upNextTitle = t('trakttv_upnext', 'Up Next');
    var calendarTitle = t('trakttv_calendar', 'Calendar');
    var recommendationsTitle = t('trakttv_recommendations', 'Recommendations');
    var menuTitle = t('trakttv_menu_title', 'Trakt.TV');
    var myListsTitle = t('trakt_my_lists', 'My Lists');
    var likedListsTitle = t('trakt_liked_lists', 'Liked Lists');
    var historyTitle = t('trakt_watch_history', 'История просмотров');
    var collectionTitle = t('trakt_collection', 'Избранное');
    var watchingTitle = t('trakt_watching', 'Смотрю сериалы');
    var watchingItem = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(watchingTitle, "</div>\n    </li>"));
    var watchlist = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(watchlistTitle, "</div>\n    </li>"));
    var upnext = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(upNextTitle, "</div>\n    </li>"));
    var timetable = $("<li class=\"menu__item selector\">\n    <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, "</div>\n    <div class=\"menu__text\">").concat(calendarTitle, "</div>\n    </li>"));
    var myLists = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(myListsTitle, "</div>\n    </li>"));
    var likedLists = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(likedListsTitle, "</div>\n    </li>"));
    timetable.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: calendarTitle,
        component: 'trakt_timetable_all',
        id: 'trakt_timetable_all'
      });
    });
    watchingItem.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: watchingTitle,
        component: 'trakt_watching',
        page: 1
      });
    });
    watchlist.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: watchlistTitle,
        component: 'trakt_watchlist',
        page: 1
      });
    });
    upnext.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: upNextTitle,
        component: 'trakt_upnext',
        page: 1
      });
    });
    myLists.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: myListsTitle,
        component: 'trakt_my_lists',
        page: 1
      });
    });
    likedLists.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: likedListsTitle,
        component: 'trakt_lists',
        page: 1
      });
    });

    // Combine menu items
    var items = [{
      title: upNextTitle,
      component: 'trakt_upnext'
    }, {
      title: watchingTitle,
      component: 'trakt_watching'
    }, {
      title: watchlistTitle,
      component: 'trakt_watchlist'
    }, {
      title: historyTitle,
      component: 'trakt_history'
    }, {
      title: collectionTitle,
      component: 'trakt_collection'
    }, {
      title: calendarTitle,
      component: 'trakt_timetable_all'
    }, {
      title: recommendationsTitle,
      component: 'trakttv_recommendations',
      toggleOption: 'trakttv_show_recommendations'
    }];

    items.push({
      title: myListsTitle,
      component: 'trakt_my_lists'
    });
    items.push({
      title: likedListsTitle,
      component: 'trakt_lists'
    });
    var menuList = $('.menu .menu__list').eq(0);
    var sideMenuMap = {
      trakt_watchlist: watchlist,
      trakt_upnext: upnext,
      trakt_watching: watchingItem,
      trakt_timetable_all: timetable,
      trakt_my_lists: myLists,
      trakt_lists: likedLists
    };
    function syncSideMenuItem(key) {
      var menuItem = sideMenuMap[key];
      if (!menuItem) return;
      var shouldShow = Lampa.Storage.get(key) === true;
      var alreadyAdded = menuItem.parent().length > 0;
      if (shouldShow && !alreadyAdded) menuList.append(menuItem);
      if (!shouldShow && alreadyAdded) menuItem.remove();
    }
    var combineButton = $("<li class=\"menu__item selector\">\n    <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(menuTitle, "</div>\n    </li>"));
    combineButton.on('hover:enter', function () {
      Lampa.Select.show({
        title: menuTitle,
        items: items,
        onSelect: function onSelect(a) {
          Lampa.Activity.push({
            url: '',
            title: a.title,
            component: a.component,
            page: 1
          });
        },
        onLong: function onLong(a) {
          var toggleKey = a.toggleOption || a.component;

          var currentValue = Lampa.Storage.field(toggleKey, true);

          if (currentValue === true) {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_componentDisable')
            });
            Lampa.Storage.set(toggleKey, false);
          } else {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_componentEnable')
            });
            Lampa.Storage.set(toggleKey, true);
          }
          syncSideMenuItem(toggleKey);
        },
        onBack: function onBack() {
          Lampa.Controller.toggle('menu');
        }
      });
    });
    menuList.append(combineButton);

    items.forEach(function (item) {
      var key = item.component;
      syncSideMenuItem(key);
    });
  }

  function openMultiwatchSelector(initialSelected) {
    var allAccounts = multiAccountGetAll().filter(function (d) { return d && d.token; });
    var active = multiAccountGetActiveSlot();

    var selected;
    if (Array.isArray(initialSelected)) {
      selected = initialSelected.slice();
    } else {
      var stored;
      var _raw7358 = Lampa.Storage.get('trakt_multiwatch_slots');
      try { stored = Array.isArray(_raw7358) ? _raw7358 : JSON.parse(_raw7358 || 'null'); } catch (e) { stored = null; }
      selected = Array.isArray(stored) ? stored.slice() : [];
      if (selected.indexOf(active) < 0) selected.push(active);
    }

    var YES = t$1('trakt_multiwatch_yes', 'Да');
    var NO  = t$1('trakt_multiwatch_no',  'Нет');

    var menuItems = allAccounts.map(function (d) {
      var isSel = selected.indexOf(d.slot) >= 0;
      return {
        title:    (d.slot + 1) + '. ' + getSlotDisplayName(d.slot),
        subtitle: isSel ? YES : NO,
        slot:     d.slot
      };
    });
    var secondaries = selected.filter(function (s) { return s !== active; });
    menuItems.push({ title: t$1('trakt_multiwatch_done_btn', 'Готово'), done: true });
    if (secondaries.length > 0) {
      menuItems.push({ title: t$1('trakt_multiwatch_disable', 'Выключить совместный просмотр'), disable: true });
    }

    Lampa.Select.show({
      title: t$1('trakt_multiwatch_title', 'Совместный просмотр Trakt.TV'),
      items: menuItems,
      onSelect: function (item) {
        if (item.done || item.disable) {
          var secs = selected.filter(function (s) { return s !== active; });
          if (item.done) {
            Lampa.Storage.set('trakt_multiwatch_enabled', secs.length > 0);
            Lampa.Storage.set('trakt_multiwatch_slots', JSON.stringify(secs));
            try {
              var allParticipants = [active].concat(secs);
              var names = allParticipants.map(function(s) { return getSlotDisplayName(s); });
              Lampa.Bell.push({ text: secs.length > 0
                ? t$1('trakt_multiwatch_enabled', 'Совместный просмотр') + ': ' + names.join(', ')
                : t$1('trakt_multiwatch_enabled', 'Совместный просмотр') + ' ' + t$1('trakt_multiwatch_no', 'Нет') });
            } catch(e) {}
          } else {
            Lampa.Storage.set('trakt_multiwatch_enabled', false);
            Lampa.Storage.set('trakt_multiwatch_slots', '[]');
          }
          invalidateMultiwatchIdsCache();
          try { clearResponseCache(); } catch (e) {}
          try { invalidateWatchedCache(); } catch (e) {}
          try { invalidateWatchlistBadgeCache(); } catch (e) {}
          updateTraktAccountSwitchBadge();
          try { Lampa.Controller.toggle('head'); } catch (e) {}
          if (secs.length > 0) {
            setTimeout(function() { ensureMultiwatchIdsCache().catch(function() {}); }, 300);
          }
          setTimeout(function() { try { initTraktAccountSwitchButton(); updateTraktAccountSwitchBadge(); } catch(e) {} }, 500);
          return;
        }
        var idx = selected.indexOf(item.slot);
        if (idx >= 0) selected.splice(idx, 1); else selected.push(item.slot);
        setTimeout(function () { openMultiwatchSelector(selected); }, 0);
      },
      onBack: function () { try { Lampa.Controller.toggle('head'); } catch (e) {} }
    });
  }

  function openTraktAccountSwitchMenu() {
    try {
      var accounts = multiAccountGetAll().filter(function (d) { return d && d.token; });
      if (!accounts.length) return;
      var active = multiAccountGetActiveSlot();
      var mwEnabled = readBooleanStorage$2('trakt_multiwatch_enabled', false);
      var items = accounts.map(function (d) {
        var name = getSlotDisplayName(d.slot);
        var check = (!mwEnabled && d.slot === active) ? ' ✓' : '';
        return {
          title: (d.slot + 1) + '. ' + name + check,
          slot: d.slot
        };
      });
      var mwLabel;
      if (mwEnabled) {
        var mwTokens = multiAccountGetMultiwatchTokens();
        var nums = [active + 1].concat(mwTokens.map(function (t) { return t.slot + 1; }));
        nums.sort(function (a, b) { return a - b; });
        mwLabel = t$1('trakt_multiwatch_enabled', 'Совместный просмотр') + ': ' + nums.join('+') + ' ✓';
      } else {
        mwLabel = t$1('trakt_multiwatch_enabled', 'Совместный просмотр');
      }
      items.push({ title: mwLabel, isMultiwatch: true });
      Lampa.Select.show({
        title: t$1('trakt_switch_account', 'Переключить аккаунт Trakt.TV'),
        items: items,
        onSelect: function (item) {
          if (item.isMultiwatch) { setTimeout(openMultiwatchSelector, 0); return; }
          if (mwEnabled) {
            Lampa.Storage.set('trakt_multiwatch_enabled', false);
            Lampa.Storage.set('trakt_multiwatch_slots', '[]');
            invalidateMultiwatchIdsCache();
          }
          if (item.slot !== multiAccountGetActiveSlot()) {
            multiAccountActivateSlot(item.slot);
            try { clearResponseCache(); } catch (e) {}
            invalidateWatchedCache();
            invalidateWatchlistBadgeCache();
            loadWatchedCache();
            ensureWatchlistBadgeCache();
          }
          var name = getSlotDisplayName(item.slot);
          try { Lampa.Bell.push({ text: t$1('trakt_switched_to', 'Привет,') + ' ' + name + '!' }); } catch (e) {}
          try { Lampa.Controller.toggle('head'); } catch (e) {}
          var _desc = getCurrentActivityDescriptor();
          if (_desc) {
            try {
              Lampa.Activity.replace(Object.assign({}, _desc, { refresh: Date.now() }));
              setTimeout(function() { try { initTraktAccountSwitchButton(); updateTraktAccountSwitchBadge(); } catch(e) {} }, 800);
            } catch (e) {}
          }
        },
        onBack: function () {
          try { Lampa.Controller.toggle('head'); } catch (e) {}
        }
      });
    } catch (e) {
      try { Lampa.Bell.push({ text: 'TraktTV: ' + (e && e.message || String(e)) }); } catch (_) {}
    }
  }

  function updateTraktAccountSwitchBadge() {
    try {
      var badge = $('.trakt-account-badge');
      if (!badge.length) return;
      var active = multiAccountGetActiveSlot();
      var enabled = readBooleanStorage$2('trakt_multiwatch_enabled', false);
      if (enabled) {
        var selected;
        var _raw7490 = Lampa.Storage.get('trakt_multiwatch_slots');
        try { selected = Array.isArray(_raw7490) ? _raw7490 : JSON.parse(_raw7490 || '[]'); } catch (e) { selected = []; }
        if (!Array.isArray(selected)) selected = [];
        var extra = selected.filter(function (s) { return s !== active; });
        if (extra.length > 0) {
          var allNums = [active].concat(extra);
          allNums.sort(function (a, b) { return a - b; });
          badge.text(allNums.map(function (s) { return s + 1; }).join('+'));
          badge.addClass('trakt-account-badge--multi');
          return;
        }
      }
      badge.text(active + 1);
      badge.removeClass('trakt-account-badge--multi');
    } catch (e) {}
  }
  function initTraktAccountSwitchButton() {
    try {
      if (!window.Lampa || !Lampa.Head || typeof Lampa.Head.addIcon !== 'function') return;
      if ($('.trakt-account-switcher').length) return;
      var accounts = multiAccountGetAll().filter(function (d) { return d && d.token; });
      if (accounts.length < 2) return;
      var iconSvg = icons.TRAKT_ICON.replace('<svg ', '<svg style="width:100%;height:100%;display:block;" ');
      var btn = Lampa.Head.addIcon(
        '<span class="trakt-head-icon">' + iconSvg + '<span class="trakt-account-badge">1</span></span>',
        function() { setTimeout(openTraktAccountSwitchMenu, 0); }
      );
      btn.addClass('trakt-head-action trakt-account-switcher');
      btn.css('overflow', 'visible');
      btn.parent().css('overflow', 'visible');
      updateTraktAccountSwitchBadge();
    } catch (e) {}
  }

  var PAGE_LIMIT = 100;
  var MAX_PAGES = 100;
  var SUPPORTED_FAVORITE_TYPES = ['book', 'like', 'wath', 'look', 'viewed', 'scheduled', 'continued', 'thrown'];
  var MARK_FAVORITE_TYPES = ['look', 'viewed', 'scheduled', 'continued', 'thrown'];
  function toNumericId(value) {
    var numeric = Number(value);
    if (!Number.isFinite(numeric) || numeric <= 0) return 0;
    return numeric;
  }
  function normalizeFavoriteType(value) {
    var type = (value || 'book').toString().trim().toLowerCase();
    return SUPPORTED_FAVORITE_TYPES.indexOf(type) > -1 ? type : 'book';
  }
  function isMarkFavoriteType(type) {
    return MARK_FAVORITE_TYPES.indexOf(type) > -1;
  }
  function cancelError() {
    var error = new Error('Operation canceled');
    error.code = 'canceled';
    return error;
  }
  function isCanceled(checkCancel) {
    return typeof checkCancel === 'function' && checkCancel() === true;
  }
  function normalizeResults(response) {
    return response && Array.isArray(response.results) ? response.results : [];
  }
  function detectTraktType() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (item.method || item.type || '').toString().toLowerCase();
    return method === 'movie' ? 'movie' : 'show';
  }
  function detectLampaType() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (card.method || card.type || '').toString().toLowerCase();
    if (method === 'movie') return 'movie';
    if (method === 'tv' || method === 'show') return 'show';
    if (card.first_air_date || card.name || card.original_name || card.number_of_seasons) {
      return 'show';
    }
    return 'movie';
  }
  function buildLocalDuplicateKey() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!card || typeof card.id === 'undefined' || card.id === null) return '';
    return "".concat(detectLampaType(card), ":").concat(String(card.id));
  }
  function getComparableKeys(type) {
    var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var keys = [];
    if (!ids || _typeof(ids) !== 'object') return keys;
    if (ids.tmdb) keys.push("".concat(type, ":tmdb:").concat(String(ids.tmdb)));
    if (ids.trakt) keys.push("".concat(type, ":trakt:").concat(String(ids.trakt)));
    if (ids.imdb) keys.push("".concat(type, ":imdb:").concat(String(ids.imdb).toLowerCase()));
    return keys;
  }
  function extractIdsFromLocalCard() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var sourceIds = card && card.ids && _typeof(card.ids) === 'object' ? card.ids : {};
    var ids = {};
    if (sourceIds.tmdb) ids.tmdb = sourceIds.tmdb;
    if (sourceIds.trakt) ids.trakt = sourceIds.trakt;
    if (sourceIds.imdb) ids.imdb = sourceIds.imdb;
    if (!ids.tmdb) {
      var tmdbId = toNumericId(card.id);
      if (tmdbId) ids.tmdb = tmdbId;
    }
    return ids;
  }
  function addLocalCardToTargetSet(targetSet) {
    var card = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!targetSet || !card) return;
    var type = detectLampaType(card);
    var ids = extractIdsFromLocalCard(card);
    var duplicateKey = buildLocalDuplicateKey(card);
    getComparableKeys(type, ids).forEach(function (key) {
      return targetSet.add(key);
    });
    if (duplicateKey) targetSet.add("local:".concat(duplicateKey));
  }
  function buildLocalTargetSet() {
    var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var targetSet = new Set();
    (Array.isArray(cards) ? cards : []).forEach(function (card) {
      addLocalCardToTargetSet(targetSet, card);
    });
    return targetSet;
  }
  function isLocalDuplicate(targetSet) {
    var card = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!targetSet) return false;
    var type = detectLampaType(card);
    var ids = extractIdsFromLocalCard(card);
    var duplicateKey = buildLocalDuplicateKey(card);
    var compareKeys = getComparableKeys(type, ids);
    if (compareKeys.some(function (key) {
      return targetSet.has(key);
    })) {
      return true;
    }
    return Boolean(duplicateKey && targetSet.has("local:".concat(duplicateKey)));
  }
  function removeConflictingMarks(_ref) {
    var favorite = _ref.favorite,
      favoriteType = _ref.favoriteType,
      card = _ref.card;
    if (!favorite || !isMarkFavoriteType(favoriteType)) return;
    if (typeof favorite.check !== 'function' || typeof favorite.remove !== 'function') return;
    var status = favorite.check(card) || {};
    MARK_FAVORITE_TYPES.forEach(function (type) {
      if (type === favoriteType) return;
      if (!status[type]) return;
      try {
        favorite.remove(type, card);
      } catch (error) {}
    });
  }
  function mapTraktToLampaCard() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ids = item && item.ids && _typeof(item.ids) === 'object' ? item.ids : {};
    var tmdbId = toNumericId(ids.tmdb);
    if (!tmdbId) return null;
    var type = detectTraktType(item);
    var title = item.title || item.name || item.original_title || item.original_name || '';
    var originalTitle = item.original_title || item.original_name || title;
    var releaseDate = item.release_date || item.first_air_date || '';
    var voteAverage = Number(item.vote_average) || 0;
    var poster = item.poster || item.img || '';
    var image = item.image || item.background_image || '';
    var normalizedIds = {
      tmdb: tmdbId
    };
    if (ids.trakt) normalizedIds.trakt = ids.trakt;
    if (ids.imdb) normalizedIds.imdb = ids.imdb;
    if (type === 'movie') {
      return {
        id: tmdbId,
        ids: normalizedIds,
        title: title,
        original_title: originalTitle,
        release_date: releaseDate,
        poster: poster,
        img: poster,
        background_image: image,
        image: image,
        vote_average: voteAverage,
        method: 'movie',
        type: 'movie',
        card_type: 'movie',
        source: 'tmdb'
      };
    }
    return {
      id: tmdbId,
      ids: normalizedIds,
      title: title,
      name: title,
      original_title: originalTitle,
      original_name: originalTitle,
      first_air_date: releaseDate,
      release_date: releaseDate,
      poster: poster,
      img: poster,
      background_image: image,
      image: image,
      vote_average: voteAverage,
      number_of_seasons: Number(item.number_of_seasons) || 0,
      method: 'tv',
      type: 'tv',
      card_type: 'tv',
      source: 'tmdb'
    };
  }
  function mapLampaToTraktItem() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = detectLampaType(card);
    var ids = extractIdsFromLocalCard(card);
    if (!Object.keys(ids).length) return null;
    return {
      type: type,
      method: type === 'movie' ? 'movie' : 'show',
      ids: ids
    };
  }
  function parseWriteStatus(response, type) {
    var section = type === 'movie' ? 'movies' : 'shows';
    var added = Number(response && response.added && response.added[section]) || 0;
    var existing = Number(response && response.existing && response.existing[section]) || 0;
    var notFoundRaw = response && response.not_found ? response.not_found[section] : null;
    var notFound = Array.isArray(notFoundRaw) ? notFoundRaw.length : Number(notFoundRaw || 0);
    if (notFound > 0) return 'failed';
    if (added > 0) return 'added';
    if (existing > 0) return 'duplicate';
    return 'added';
  }
  function loadSourceItems(_x) {
    return _loadSourceItems.apply(this, arguments);
  }
  function _loadSourceItems() {
    _loadSourceItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref2) {
      var api, source, listId, checkCancel, onProgress, items, page, response, chunk, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            api = _ref2.api, source = _ref2.source, listId = _ref2.listId, checkCancel = _ref2.checkCancel, onProgress = _ref2.onProgress;
            items = [];
            page = 1;
          case 1:
            if (!(page <= MAX_PAGES)) {
              _context.n = 9;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context.n = 2;
              break;
            }
            throw cancelError();
          case 2:
            onProgress && onProgress({
              phase: 'loading_source',
              page: page,
              processed: items.length,
              total: 0,
              percent: 0
            });
            if (!(source === 'watchlist')) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return api.watchlist({
              page: page,
              limit: PAGE_LIMIT
            });
          case 3:
            _t = _context.v;
            _context.n = 6;
            break;
          case 4:
            _context.n = 5;
            return api.myListItems({
              listId: listId,
              page: page,
              limit: PAGE_LIMIT
            });
          case 5:
            _t = _context.v;
          case 6:
            response = _t;
            chunk = normalizeResults(response);
            if (chunk.length) {
              _context.n = 7;
              break;
            }
            return _context.a(3, 9);
          case 7:
            items.push.apply(items, _toConsumableArray(chunk));
            if (!(chunk.length < PAGE_LIMIT)) {
              _context.n = 8;
              break;
            }
            return _context.a(3, 9);
          case 8:
            page += 1;
            _context.n = 1;
            break;
          case 9:
            return _context.a(2, items);
        }
      }, _callee);
    }));
    return _loadSourceItems.apply(this, arguments);
  }
  function loadTargetItems(_x2) {
    return _loadTargetItems.apply(this, arguments);
  }
  function _loadTargetItems() {
    _loadTargetItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref3) {
      var api, target, listId, checkCancel, onProgress, items, page, response, chunk, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            api = _ref3.api, target = _ref3.target, listId = _ref3.listId, checkCancel = _ref3.checkCancel, onProgress = _ref3.onProgress;
            items = [];
            page = 1;
          case 1:
            if (!(page <= MAX_PAGES)) {
              _context2.n = 9;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context2.n = 2;
              break;
            }
            throw cancelError();
          case 2:
            onProgress && onProgress({
              phase: 'loading_target',
              page: page,
              processed: items.length,
              total: 0,
              percent: 0
            });
            if (!(target === 'watchlist')) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return api.watchlist({
              page: page,
              limit: PAGE_LIMIT
            });
          case 3:
            _t2 = _context2.v;
            _context2.n = 6;
            break;
          case 4:
            _context2.n = 5;
            return api.myListItems({
              listId: listId,
              page: page,
              limit: PAGE_LIMIT
            });
          case 5:
            _t2 = _context2.v;
          case 6:
            response = _t2;
            chunk = normalizeResults(response);
            if (chunk.length) {
              _context2.n = 7;
              break;
            }
            return _context2.a(3, 9);
          case 7:
            items.push.apply(items, _toConsumableArray(chunk));
            if (!(chunk.length < PAGE_LIMIT)) {
              _context2.n = 8;
              break;
            }
            return _context2.a(3, 9);
          case 8:
            page += 1;
            _context2.n = 1;
            break;
          case 9:
            return _context2.a(2, items);
        }
      }, _callee2);
    }));
    return _loadTargetItems.apply(this, arguments);
  }
  function importBookmarks(_x3) {
    return _importBookmarks.apply(this, arguments);
  }
  function _importBookmarks() {
    _importBookmarks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref4) {
      var api, favorite, _ref4$source, source, _ref4$listId, listId, _ref4$favoriteType, favoriteType, checkCancel, onProgress, resolvedFavoriteType, items, localCards, localTargetSet, summary, index, item, mappedCard;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            api = _ref4.api, favorite = _ref4.favorite, _ref4$source = _ref4.source, source = _ref4$source === void 0 ? 'watchlist' : _ref4$source, _ref4$listId = _ref4.listId, listId = _ref4$listId === void 0 ? null : _ref4$listId, _ref4$favoriteType = _ref4.favoriteType, favoriteType = _ref4$favoriteType === void 0 ? 'book' : _ref4$favoriteType, checkCancel = _ref4.checkCancel, onProgress = _ref4.onProgress;
            if (api) {
              _context3.n = 1;
              break;
            }
            throw new Error('Trakt API is not available');
          case 1:
            if (favorite) {
              _context3.n = 2;
              break;
            }
            throw new Error('Favorite API is not available');
          case 2:
            resolvedFavoriteType = normalizeFavoriteType(favoriteType);
            _context3.n = 3;
            return loadSourceItems({
              api: api,
              source: source,
              listId: listId,
              checkCancel: checkCancel,
              onProgress: onProgress
            });
          case 3:
            items = _context3.v;
            localCards = favorite.get({
              type: resolvedFavoriteType
            }) || [];
            localTargetSet = buildLocalTargetSet(localCards);
            summary = {
              favorite_type: resolvedFavoriteType,
              total: items.length,
              processed: 0,
              added: 0,
              duplicates: 0,
              skipped_unsupported: 0,
              failed: 0
            };
            index = 0;
          case 4:
            if (!(index < items.length)) {
              _context3.n = 7;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context3.n = 5;
              break;
            }
            throw cancelError();
          case 5:
            item = items[index];
            mappedCard = mapTraktToLampaCard(item);
            summary.processed += 1;
            if (!mappedCard) {
              summary.skipped_unsupported += 1;
            } else if (isLocalDuplicate(localTargetSet, mappedCard)) {
              removeConflictingMarks({
                favorite: favorite,
                favoriteType: resolvedFavoriteType,
                card: mappedCard
              });
              summary.duplicates += 1;
            } else {
              try {
                removeConflictingMarks({
                  favorite: favorite,
                  favoriteType: resolvedFavoriteType,
                  card: mappedCard
                });
                favorite.add(resolvedFavoriteType, mappedCard);
                addLocalCardToTargetSet(localTargetSet, mappedCard);
                summary.added += 1;
              } catch (error) {
                summary.failed += 1;
              }
            }
            onProgress && onProgress({
              phase: 'processing_import',
              processed: summary.processed,
              total: summary.total,
              percent: summary.total ? Math.round(summary.processed / summary.total * 100) : 100
            });
            if (!(index % 20 === 0)) {
              _context3.n = 6;
              break;
            }
            _context3.n = 6;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            });
          case 6:
            index++;
            _context3.n = 4;
            break;
          case 7:
            return _context3.a(2, summary);
        }
      }, _callee3);
    }));
    return _importBookmarks.apply(this, arguments);
  }
  function exportBookmarks(_x4) {
    return _exportBookmarks.apply(this, arguments);
  }
  function _exportBookmarks() {
    _exportBookmarks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(_ref5) {
      var api, favorite, _ref5$target, target, _ref5$listId, listId, _ref5$favoriteType, favoriteType, checkCancel, onProgress, resolvedFavoriteType, bookmarks, targetItems, targetSet, summary, index, card, mapped, compareKeys, isDuplicate, response, status, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            api = _ref5.api, favorite = _ref5.favorite, _ref5$target = _ref5.target, target = _ref5$target === void 0 ? 'watchlist' : _ref5$target, _ref5$listId = _ref5.listId, listId = _ref5$listId === void 0 ? null : _ref5$listId, _ref5$favoriteType = _ref5.favoriteType, favoriteType = _ref5$favoriteType === void 0 ? 'book' : _ref5$favoriteType, checkCancel = _ref5.checkCancel, onProgress = _ref5.onProgress;
            if (api) {
              _context4.n = 1;
              break;
            }
            throw new Error('Trakt API is not available');
          case 1:
            if (favorite) {
              _context4.n = 2;
              break;
            }
            throw new Error('Favorite API is not available');
          case 2:
            resolvedFavoriteType = normalizeFavoriteType(favoriteType);
            bookmarks = favorite.get({
              type: resolvedFavoriteType
            }) || [];
            _context4.n = 3;
            return loadTargetItems({
              api: api,
              target: target,
              listId: listId,
              checkCancel: checkCancel,
              onProgress: onProgress
            });
          case 3:
            targetItems = _context4.v;
            targetSet = new Set();
            targetItems.forEach(function (item) {
              var type = detectTraktType(item);
              var ids = item && item.ids && _typeof(item.ids) === 'object' ? item.ids : {};
              getComparableKeys(type, ids).forEach(function (key) {
                return targetSet.add(key);
              });
            });
            summary = {
              favorite_type: resolvedFavoriteType,
              total: bookmarks.length,
              processed: 0,
              added: 0,
              duplicates: 0,
              skipped_unsupported: 0,
              failed: 0
            };
            index = 0;
          case 4:
            if (!(index < bookmarks.length)) {
              _context4.n = 15;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context4.n = 5;
              break;
            }
            throw cancelError();
          case 5:
            card = bookmarks[index];
            mapped = mapLampaToTraktItem(card);
            summary.processed += 1;
            if (mapped) {
              _context4.n = 6;
              break;
            }
            summary.skipped_unsupported += 1;
            _context4.n = 13;
            break;
          case 6:
            compareKeys = getComparableKeys(mapped.type, mapped.ids);
            isDuplicate = compareKeys.some(function (key) {
              return targetSet.has(key);
            });
            if (!isDuplicate) {
              _context4.n = 7;
              break;
            }
            summary.duplicates += 1;
            _context4.n = 13;
            break;
          case 7:
            _context4.p = 7;
            if (!(target === 'watchlist')) {
              _context4.n = 9;
              break;
            }
            _context4.n = 8;
            return api.addToWatchlist({
              method: mapped.method,
              ids: mapped.ids
            });
          case 8:
            _t3 = _context4.v;
            _context4.n = 11;
            break;
          case 9:
            _context4.n = 10;
            return api.addToList({
              listId: listId,
              item: {
                method: mapped.method,
                ids: mapped.ids
              }
            });
          case 10:
            _t3 = _context4.v;
          case 11:
            response = _t3;
            status = parseWriteStatus(response, mapped.type);
            if (status === 'added') {
              summary.added += 1;
              compareKeys.forEach(function (key) {
                return targetSet.add(key);
              });
            } else if (status === 'duplicate') {
              summary.duplicates += 1;
              compareKeys.forEach(function (key) {
                return targetSet.add(key);
              });
            } else {
              summary.failed += 1;
            }
            _context4.n = 13;
            break;
          case 12:
            _context4.p = 12;
            _context4.v;
            summary.failed += 1;
          case 13:
            onProgress && onProgress({
              phase: 'processing_export',
              processed: summary.processed,
              total: summary.total,
              percent: summary.total ? Math.round(summary.processed / summary.total * 100) : 100
            });
            if (!(index % 20 === 0)) {
              _context4.n = 14;
              break;
            }
            _context4.n = 14;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            });
          case 14:
            index++;
            _context4.n = 4;
            break;
          case 15:
            return _context4.a(2, summary);
        }
      }, _callee4, null, [[7, 12]]);
    }));
    return _exportBookmarks.apply(this, arguments);
  }
  var bookmarksSync = {
    importBookmarks: importBookmarks,
    exportBookmarks: exportBookmarks,
    normalizeFavoriteType: normalizeFavoriteType,
    supportedFavoriteTypes: SUPPORTED_FAVORITE_TYPES.slice()
  };


  // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
  var Api$1 = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;
  var isBookmarksSyncRunning = false;
  var DEFAULT_BOOKMARKS_SYNC_TYPES = ['book', 'like', 'wath', 'look', 'viewed', 'scheduled', 'continued', 'thrown'];
  var API_MISSING_LOG_KEY$1 = 'config:api-missing';
  function logApiMissing() {
    logDebugOnce(API_MISSING_LOG_KEY$1, 'API bridge is unavailable in config');
  }

  function startDeviceAuthForSlot(targetSlot) {
    if (!getClientId() || !getClientSecret()) {
      Lampa.Noty.show('Сначала введите Client ID и Client Secret в настройках Trakt');
      return;
    }
    if (!Api$1) { logApiMissing(); return; }
    pendingLoginSlot = (typeof targetSlot === 'number') ? targetSlot : multiAccountGetActiveSlot();
    (Api$1.auth.device.login()).then(function (data) {
      if (!data || !data.user_code || !data.verification_url) {
        pendingLoginSlot = null;
        Lampa.Bell.push({ text: Lampa.Lang.translate('trakttvAuthError') });
        return;
      }
      var safeVerification = String(data.verification_url || '');
      var safeUserCode = String(data.user_code || '');
      var activateUrl = data.verification_url_complete || ('https://trakt.tv/activate/' + safeUserCode);
      try { window.open(activateUrl, '_blank'); } catch (e) {}
      var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=' + encodeURIComponent(activateUrl);
      var modal = $('<div class="about trakt-device-auth"><div class="trakt-device-auth__inner"><div class="trakt-device-auth__qr-col"><div class="trakt-device-auth__qr-container"><a href="' + activateUrl + '" target="_blank" rel="noopener noreferrer" class="trakt-device-auth__qr-link"><img src="' + qrCodeUrl + '" alt="Trakt.TV QR Code" class="trakt-device-auth__qr-image"></a><div class="trakt-device-auth__qr-caption">' + Lampa.Lang.translate('trakttv_scan_qr_code') + '</div></div></div><div class="trakt-device-auth__info-col"><div class="about__text trakt-device-auth__verification">' + safeVerification + '</div><div class="about__text trakt-device-auth__code">' + Lampa.Lang.translate('trakttv_code') + ': <strong>' + safeUserCode + '</strong></div><div class="modal__button selector trakt-check-btn">' + Lampa.Lang.translate('trakttv_check_now') + '</div></div></div></div>');
      modal.find('.trakt-device-auth__qr-image').on('error', function () {
        modal.find('.trakt-device-auth__qr-container').addClass('trakt-device-auth__qr-container--hidden');
      });
      Lampa.Modal.open({
        title: Lampa.Lang.translate('trakttv_auth'),
        html: modal,
        size: Lampa.Platform.screen('mobile') ? 'medium' : 'small',
        select: modal.find('.trakt-check-btn')[0],
        onSelect: function () { if (checkNowHandler) checkNowHandler(); },
        scroll: { nopadding: true },
        onBack: function () {
          pendingLoginSlot = null;
          if (currentPollTimeoutId) { clearTimeout(currentPollTimeoutId); currentPollTimeoutId = null; }
          Lampa.Storage.set('trakt_active_device_auth', false);
          Lampa.Storage.set('trakt_active_device_auth_started_at', null);
          Lampa.Modal.close();
          Lampa.Controller.toggle('settings_component');
        }
      });
      if (Lampa.Storage.get('trakt_active_device_auth') === true) {
        var startedAt = Number(Lampa.Storage.get('trakt_active_device_auth_started_at') || 0);
        var isStale = !startedAt || Date.now() - startedAt > 20 * 60 * 1000;
        if (isStale) {
          Lampa.Storage.set('trakt_active_device_auth', false);
          Lampa.Storage.set('trakt_active_device_auth_started_at', null);
        } else {
          logDebug('Device auth already active, skip duplicate start');
          return;
        }
      }
      Lampa.Storage.set('trakt_active_device_auth', true);
      Lampa.Storage.set('trakt_active_device_auth_started_at', Date.now());
      pollAuth(data, Lampa.Modal);
    })['catch'](function (error) {
      pendingLoginSlot = null;
      logError('Device auth init failed', error, { debugOnly: true });
      Lampa.Bell.push({ text: Lampa.Lang.translate('trakttvAuthError') });
    });
  }

  function main() {
    Lampa.SettingsApi.addComponent({
      component: 'trakt',
      name: 'Trakt.TV',
      icon: icons.TRAKT_ICON
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakttv_about',
        type: 'static'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        item.empty();
        item.append('<div class="settings-param__value" style="opacity:.6;font-size:.9em"><a href="https://github.com/kzuev/lampatrakt" style="color:inherit">v' + PLUGIN_VERSION + '</a> · Основан на плагине <a href="https://lampame.github.io/main/trakttv.js" style="color:inherit">lampame.github.io/main/trakttv.js</a></div>');
      }
    });

    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_userinfo',
        type: 'static'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        item.hide();
      }
    });

    // ── Секция: Trakt.TV API ──────────────────────────────────────
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: { name: 'trakt_api_section', type: 'static' },
      field: { name: '' },
      onRender: function (item) {
        item.empty();
        item.append('<div class="settings-param__name" style="opacity:.55;font-weight:700">' + t$1('trakt_api_section', 'Trakt.TV API') + '</div>');
      }
    });

    // Client ID и Client Secret
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_client_id',
        type: 'button'
      },
      field: {
        name: t$1('trakt_client_id_label', 'Client ID')
      },
      onRender: function onRender(item) {
        item.find('.trakt-field-status').remove();
        var val = Lampa.Storage.get('trakt_client_id') || '';
        var status = val ? t$1('trakt_client_id_set', 'ID указан') : t$1('trakt_client_id_description', 'Введите ID');
        item.append('<div class="settings-param__value trakt-field-status" style="font-size:.85em;opacity:.65">' + status + '</div>');
      },
      onChange: function onChange() {
        Lampa.Input.edit({
          title: t$1('trakt_client_id_label', 'Client ID'),
          value: Lampa.Storage.get('trakt_client_id') || '',
          free: true,
          nosave: true,
          nomic: true
        }, function (val) {
          Lampa.Storage.set('trakt_client_id', (val || '').trim());
          Lampa.Settings.update();
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_client_secret',
        type: 'button'
      },
      field: {
        name: t$1('trakt_client_secret_label', 'Client Secret')
      },
      onRender: function onRender(item) {
        item.find('.trakt-field-status').remove();
        var val = Lampa.Storage.get('trakt_client_secret') || '';
        var status = val ? t$1('trakt_client_secret_set', 'Secret указан') : t$1('trakt_client_secret_description', 'Введите Secret');
        item.append('<div class="settings-param__value trakt-field-status" style="font-size:.85em;opacity:.65">' + status + '</div>');
      },
      onChange: function onChange() {
        Lampa.Input.edit({
          title: t$1('trakt_client_secret_label', 'Client Secret'),
          value: Lampa.Storage.get('trakt_client_secret') || '',
          free: true,
          nosave: true,
          nomic: true
        }, function (val) {
          Lampa.Storage.set('trakt_client_secret', (val || '').trim());
          Lampa.Settings.update();
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: { name: 'trakt_api_help', type: 'button' },
      field: { name: t$1('trakt_api_help_btn', 'Как получить Client ID и Secret?') },
      onRender: function (item) { item.show(); },
      onChange: function () {
        var html = $('<div class="about" style="max-width:520px">'
          + '<div class="about__text"><b>1.</b> Откройте trakt.tv &rarr; Settings &rarr; Your API Apps</div>'
          + '<div class="about__text"><b>2.</b> Нажмите <b>New Application</b></div>'
          + '<div class="about__text"><b>3.</b> Name: любое название (например: Lampa)</div>'
          + '<div class="about__text"><b>4.</b> Redirect URI: <code>urn:ietf:wg:oauth:2.0:oob</code></div>'
          + '<div class="about__text"><b>5.</b> Permissions: отметьте <b>/checkin</b> и <b>/scrobble</b></div>'
          + '<div class="about__text"><b>6.</b> Нажмите <b>Save App</b></div>'
          + '<div class="about__text"><b>7.</b> Скопируйте <b>Client ID</b> и <b>Client Secret</b> в настройки плагина</div>'
          + '</div>');
        Lampa.Modal.open({
          title: t$1('trakt_api_help_title', 'Получение API ключей Trakt.TV'),
          html: html,
          size: 'medium',
          onBack: function () { Lampa.Modal.close(); Lampa.Controller.toggle('settings_component'); }
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_login',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvLogin'),
        description: 'Для входа укажите Client ID и Client Secret выше — без них авторизация недоступна'
      },
      onRender: function onRender(item) {
        item.hide();
      },
      onChange: function onChange() {
        startDeviceAuthForSlot(multiAccountGetActiveSlot());
      }
    });

    // Кнопка logout
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_logout',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvLogout')
      },
      onRender: function onRender(item) {
        item.hide();
        if (false && Lampa.Storage.get('trakt_token')) {
          item.show();
        } else {
          item.hide();
        }
      },
      onChange: function onChange() {
        if (!Api$1) {
          logApiMissing();
          return;
        }
        Api$1 && Api$1.auth.logout();
        Lampa.Bell.push({
          text: Lampa.Lang.translate('trakttvLogoutNoty')
        });
        Lampa.Settings.update();
      }
    });


    // ── Секция: Мультиаккаунт ───────────────────────────────────────────────
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: { name: 'trakt_multi_account_section', type: 'static' },
      field: { name: '' },
      onRender: function (item) {
        item.empty();
        item.append('<div class="settings-param__name" style="opacity:.55;font-weight:700">' + t$1('trakt_multi_account_section', 'Мультиаккаунт') + '</div>');
      }
    });

    for (var _slotIdx = 0; _slotIdx < MULTI_MAX_SLOTS; _slotIdx++) {
      (function (slotIndex) {
        Lampa.SettingsApi.addParam({
          component: 'trakt',
          param: { name: 'trakt_account_slot_' + slotIndex, type: 'button' },
          field: { name: t$1('trakt_account_slot_empty', 'Не привязан') },
          onRender: function (item) {
            if (slotIndex === 0) multiAccountMigrateToken();
            var d = multiAccountGetSlot(slotIndex);
            var active = multiAccountGetActiveSlot();
            var label;
            if (!d || !d.token) {
              // No slot data — if token exists in flat storage, show loading indicator
              label = (slotIndex === 0 && Lampa.Storage.get('trakt_token'))
                ? '...'
                : t$1('trakt_account_slot_empty', 'Не привязан');
            } else if (!d.label || d.label === '…') {
              label = '...';
            } else {
              label = getSlotDisplayName(slotIndex);
              if (d.alias && d.alias.trim() && d.label && d.label !== '…') {
                label += ' (' + d.label + ')';
              }
            }
            if (slotIndex === active && d && d.token && label !== '...') label += ' ' + t$1('trakt_account_slot_active', '(активен)');
            item.find('.settings-param__name').text((slotIndex + 1) + '. ' + label);
            // Show VIP status below the label
            item.find('.trakt-slot-userinfo').remove();
            if (d && d.token) {
              var needsLabelFetch = !d.label || d.label === '…';
              if (typeof d.vip === 'boolean' && !needsLabelFetch) {
                var vipKey = d.vip ? 'trakttv_vip_enabled' : 'trakttv_vip_disabled';
                var vipCls = d.vip ? 'trakt-vip-badge--enabled' : 'trakt-vip-badge--disabled';
                item.append('<div class="settings-param__value trakt-slot-userinfo" style="margin-top:2px">Trakt.TV VIP: <span class="trakt-vip-badge ' + vipCls + '">' + Lampa.Lang.translate(vipKey) + '</span></div>');
              }
              if (needsLabelFetch && !_fetchingSlots[slotIndex]) {
                _fetchingSlots[slotIndex] = true;
                var _active = active;
                requestApiWithToken(d.token, 'GET', '/users/me').then(function (user) {
                  delete _fetchingSlots[slotIndex];
                  if (user && user.username) {
                    multiAccountUpdateSlot(slotIndex, {
                      label: user.username,
                      avatar: (user.images && user.images.avatar && user.images.avatar.full) || '',
                      vip: !!(user.vip)
                    });
                    var newLabel = user.username;
                    if (slotIndex === _active) newLabel += ' ' + t$1('trakt_account_slot_active', '(активен)');
                    item.find('.settings-param__name').text((slotIndex + 1) + '. ' + newLabel);
                    item.find('.trakt-slot-userinfo').remove();
                    var vipEnabled = !!(user.vip);
                    var vipKey2 = vipEnabled ? 'trakttv_vip_enabled' : 'trakttv_vip_disabled';
                    var vipCls2 = vipEnabled ? 'trakt-vip-badge--enabled' : 'trakt-vip-badge--disabled';
                    item.append('<div class="settings-param__value trakt-slot-userinfo" style="margin-top:2px">Trakt.TV VIP: <span class="trakt-vip-badge ' + vipCls2 + '">' + Lampa.Lang.translate(vipKey2) + '</span></div>');
                  }
                }).catch(function () {
                  delete _fetchingSlots[slotIndex];
                });
              }
            }
          },
          onChange: function () {
            var d = multiAccountGetSlot(slotIndex);
            var active = multiAccountGetActiveSlot();
            var flatToken = (slotIndex === 0 && active === 0) ? (Lampa.Storage.get('trakt_token') || null) : null;
            var hasToken = !!(d && d.token) || !!flatToken;
            var menuItems = [];
            if (!hasToken) {
              menuItems.push({ title: t$1('trakt_account_login_slot', 'Войти в этот аккаунт'), action: 'login' });
            } else {
              if (d && typeof d.vip === 'boolean') {
                menuItems.push({ title: 'Trakt.TV VIP: ' + t$1(d.vip ? 'trakttv_vip_enabled' : 'trakttv_vip_disabled', d.vip ? 'Trakt VIP активирован' : 'Trakt VIP не активирован'), action: 'info' });
              }
              var aliasTitle = (d && d.alias && d.alias.trim())
                ? t$1('trakt_account_alias', 'Отображать как') + ': ' + d.alias.trim()
                : t$1('trakt_account_alias', 'Отображать как') + '...';
              menuItems.push({ title: aliasTitle, action: 'rename' });
              if (slotIndex !== active) {
                menuItems.push({ title: t$1('trakt_account_switch', 'Сделать активным'), action: 'switch' });
              }
              menuItems.push({ title: t$1('trakt_account_logout_slot', 'Выйти из аккаунта'), action: 'logout' });
            }
            var menuLabel = hasToken
              ? ((!d || !d.label || d.label === '…') ? '...' : getSlotDisplayName(slotIndex))
              : t$1('trakt_account_slot_empty', 'Не привязан');
            Lampa.Select.show({
              title: (slotIndex + 1) + '. ' + menuLabel,
              items: menuItems,
              onSelect: function (a) {
                if (a.action === 'info') {
                  Lampa.Controller.toggle('settings_component');
                } else if (a.action === 'rename') {
                  var _slot = multiAccountGetSlot(slotIndex);
                  var _curAlias = (_slot && _slot.alias) ? _slot.alias : '';
                  Lampa.Input.edit({
                    title: t$1('trakt_account_alias', 'Отображать как'),
                    value: _curAlias,
                    free: true,
                    nosave: true,
                    nomic: true
                  }, function (val) {
                    var trimmed = (val || '').trim();
                    multiAccountUpdateSlot(slotIndex, { alias: trimmed || null });
                    try { Lampa.Settings.update(); } catch (e) {}
                  });
                } else if (a.action === 'switch') {
                  multiAccountActivateSlot(slotIndex);
                  try { clearResponseCache(); } catch (e) {}
                  invalidateWatchedCache();
                  invalidateWatchlistBadgeCache();
                  loadWatchedCache();
                  ensureWatchlistBadgeCache();
                  updateTraktAccountSwitchBadge();
                  try { Lampa.Settings.update(); } catch (e) {}
                  var _desc = getCurrentActivityDescriptor();
                  if (_desc) {
                    try { Lampa.Activity.replace(Object.assign({}, _desc, { refresh: Date.now() })); } catch (e) {}
                  }
                } else if (a.action === 'logout') {
                  if (slotIndex === multiAccountGetActiveSlot()) {
                    if (Api$1) Api$1.auth.logout();
                  }
                  multiAccountUpdateSlot(slotIndex, { token: null, refresh_token: null, expires_at: null, label: null, alias: null });
                  try { Lampa.Settings.update(); } catch (e) {}
                } else if (a.action === 'login') {
                  startDeviceAuthForSlot(slotIndex);
                }
              },
              onBack: function () { Lampa.Controller.toggle('settings_component'); }
            });
          }
        });
      })(_slotIdx);
    }

    // ── Секция: Семейный просмотр ────────────────────────────────────────────
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: { name: 'trakt_multiwatch_section', type: 'static' },
      field: { name: '' },
      onRender: function (item) {
        item.empty();
        item.append('<div class="settings-param__name" style="opacity:.55;font-weight:700">' + t$1('trakt_multiwatch_section', 'Семейный просмотр') + '</div>');
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: { name: 'trakt_multiwatch_enabled', type: 'trigger', default: false },
      field: {
        name: t$1('trakt_multiwatch_enabled', 'Мультипросмотр'),
        description: t$1('trakt_multiwatch_enabled_descr', 'Отмечать просмотренное сразу во всех выбранных аккаунтах')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: { name: 'trakt_multiwatch_accounts', type: 'button' },
      field: { name: t$1('trakt_multiwatch_accounts', 'Аккаунты мультипросмотра') },
      onRender: function (item) {
        var enabled = readBooleanStorage$2('trakt_multiwatch_enabled', false);
        enabled ? item.show() : item.hide();
        var selected;
        var _raw8575 = Lampa.Storage.get('trakt_multiwatch_slots');
        try { selected = Array.isArray(_raw8575) ? _raw8575 : JSON.parse(_raw8575 || '[]'); } catch (e) { selected = []; }
        if (!Array.isArray(selected)) selected = [];
        var labels = selected.map(function (s) {
          var d = multiAccountGetSlot(s);
          return (d && d.label) || ('Account ' + (s + 1));
        }).join(', ');
        item.find('.settings-param__value').text(labels || '—');
      },
      onChange: function () {
        var allAccounts = multiAccountGetAll().filter(function (d) { return d && d.token; });
        if (allAccounts.length < 2) {
          Lampa.Noty.show('Добавьте хотя бы 2 аккаунта для мультипросмотра');
          return;
        }
        var selected;
        var _raw8591 = Lampa.Storage.get('trakt_multiwatch_slots');
        try { selected = Array.isArray(_raw8591) ? _raw8591 : JSON.parse(_raw8591 || '[]'); } catch (e) { selected = []; }
        if (!Array.isArray(selected)) selected = [];
        var menuItems = allAccounts.map(function (d) {
          var isSelected = selected.indexOf(d.slot) >= 0;
          return { title: (isSelected ? '✓ ' : '  ') + (d.label || ('Account ' + (d.slot + 1))), slot: d.slot, selected: isSelected };
        });
        menuItems.push({ title: Lampa.Lang.translate('cancel') || 'Отмена', cancel: true });
        Lampa.Select.show({
          title: t$1('trakt_multiwatch_accounts', 'Аккаунты мультипросмотра'),
          items: menuItems,
          onSelect: function (a) {
            if (a.cancel) { Lampa.Controller.toggle('settings_component'); return; }
            var idx = selected.indexOf(a.slot);
            if (idx >= 0) selected.splice(idx, 1); else selected.push(a.slot);
            Lampa.Storage.set('trakt_multiwatch_slots', JSON.stringify(selected));
            Lampa.Settings.update();
          },
          onBack: function () { Lampa.Controller.toggle('settings_component'); }
        });
      }
    });
    // ────────────────────────────────────────────────────────────────────────

    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_sync_section',
        type: 'static'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        item.empty();
        item.append("<div class=\"settings-param__name\" style=\"opacity:.55;font-weight:700\">".concat(t$1('trakt_bookmarks_sync_section', 'Bookmarks sync'), "</div>"));
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_mode',
        type: 'select',
        "default": 'watchlist',
        values: {
          watchlist: t$1('trakt_bookmarks_mode_watchlist', 'Watchlist'),
          my_lists: t$1('trakt_bookmarks_mode_my_lists', 'My Lists')
        }
      },
      field: {
        name: t$1('trakt_bookmarks_mode', 'Sync mode')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_favorite_type',
        type: 'select',
        "default": 'book',
        values: getBookmarksFavoriteTypeValues()
      },
      field: {
        name: t$1('trakt_bookmarks_local_type', 'Local Lampa list'),
        description: t$1('trakt_bookmarks_local_type_description', 'Choose which local Lampa list to sync')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_import',
        type: 'button'
      },
      field: {
        name: t$1('trakt_bookmarks_import_button', 'Import bookmarks from Trakt')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) item.show();else item.hide();
      },
      onChange: function onChange() {
        startBookmarksImportFlow();
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_export',
        type: 'button'
      },
      field: {
        name: t$1('trakt_bookmarks_export_button', 'Export bookmarks to Trakt')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) item.show();else item.hide();
      },
      onChange: function onChange() {
        startBookmarksExportFlow();
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_progress_section',
        type: 'static'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        item.empty();
        item.append("<div class=\"settings-param__name\" style=\"opacity:.55;font-weight:700\">".concat(t$1('trakt_progress_section', 'Progress configuration'), "</div>"));
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_source_section',
        type: 'static'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        item.empty();
        item.append("<div class=\"settings-param__name\" style=\"opacity:.55;font-weight:700\">".concat(t$1('trakttv_source_section', 'Trakt.TV source filters'), "</div>"));
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_source_ignore_watched',
        type: 'trigger',
        "default": false
      },
      field: {
        name: t$1('trakttv_source_ignore_watched', 'Source: ignore watched'),
        description: t$1('trakttv_source_ignore_watched_descr', 'Applies to all Trakt.TV source feeds (categories, recommendations, search)')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_source_ignore_watchlisted',
        type: 'trigger',
        "default": false
      },
      field: {
        name: t$1('trakttv_source_ignore_watchlisted', 'Source: ignore watchlisted'),
        description: t$1('trakttv_source_ignore_watchlisted_descr', 'Applies to all Trakt.TV source feeds (categories, recommendations, search)')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_recommendations_ignore_watched',
        type: 'trigger',
        "default": false
      },
      field: {
        name: t$1('trakttv_recommendations_ignore_watched', 'Recommendations: hide watched'),
        description: t$1('trakttv_recommendations_ignore_watched_descr', 'Hide already watched movies and shows from recommendations')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_lampa_section',
        type: 'static'
      },
      field: { name: '' },
      onRender: function onRender(item) {
        item.empty();
        item.append("<div class=\"settings-param__name\" style=\"opacity:.55;font-weight:700\">".concat(t$1('trakttv_lampa_section', 'Lampa home page'), "</div>"));
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_hide_lampa_continue',
        type: 'trigger',
        "default": false
      },
      field: {
        name: t$1('trakttv_hide_lampa_continue', 'Hide Lampa «Continue watching»'),
        description: t$1('trakttv_hide_lampa_continue_descr', 'Remove from home page — duplicated by Trakt «Up Next» row')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_hide_lampa_recomend',
        type: 'trigger',
        "default": false
      },
      field: {
        name: t$1('trakttv_hide_lampa_recomend', 'Hide Lampa «Recommended to watch»'),
        description: t$1('trakttv_hide_lampa_recomend_descr', 'Remove from home page — duplicated by Trakt Recommendations row')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakttv_show_tv_progress',
        type: 'trigger',
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('trakttv_show_tv_progress')
      }
    });
    if (Lampa.Platform.is('apple_tv') === true) {
      Lampa.SettingsApi.addParam({
        component: 'trakt',
        param: {
          name: 'trakttv_topshelf',
          type: 'trigger',
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('trakttv_topshelf'),
          description: Lampa.Lang.translate('trakttv_topshelf_descr')
        }
      });
    }

    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_enable_watching',
        type: 'trigger',
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('trakttv_enable_watching'),
        description: Lampa.Lang.translate('trakttv_enable_watching_descr')
      }
    });

    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_min_progress',
        type: 'select',
        "default": '90',
        values: {
          '50': '50%',
          '60': '60%',
          '70': '70%',
          '80': '80%',
          '85': '85%',
          '90': '90%',
          '95': '95%',
          '100': '100%'
        }
      },
      field: {
        name: Lampa.Lang.translate('trakttv_min_progress_threshold'),
        description: Lampa.Lang.translate('trakttv_min_progress_threshold_descr')
      }
    });

    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_enable_logging',
        type: 'trigger',
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('trakttv_enable_logging'),
        description: Lampa.Lang.translate('trakttv_enable_logging_descr')
      }
    });

    function _copyFallback(text) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        Lampa.Noty.show('Скопировано');
      } catch(e) { Lampa.Noty.show('Ошибка копирования'); }
    }
    function _copyToClipboard(text) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function() { Lampa.Noty.show('Скопировано'); }).catch(function() { _copyFallback(text); });
        } else { _copyFallback(text); }
      } catch(e) { Lampa.Noty.show('Ошибка: ' + e.message); }
    }
    function _showDebugBadges() {
        var datesMap = getUpcomingMovieDates();
        var dateKeys = Object.keys(datesMap);
        var soonIds = getSoonMovieIds();

        // ── Патч Lampa.Card ──────────────────────────────────────────────────
        var _cardType = window.Lampa && Lampa.Card ? typeof Lampa.Card : 'undefined';
        var _cardPatched = window.Lampa && Lampa.Card && Lampa.Card._traktPatched ? 'yes' : 'no';

        // ── Текущая страница ─────────────────────────────────────────────────
        var _actInfo = 'n/a';
        try {
          var _act = Lampa.Activity && typeof Lampa.Activity.active === 'function' && Lampa.Activity.active();
          if (_act) {
            var _actKeys = Object.keys(_act).filter(function(k) { return typeof _act[k] !== 'function'; });
            _actInfo = _actKeys.map(function(k) { var v = _act[k]; return k + '=' + (typeof v === 'object' ? '[obj]' : String(v).slice(0, 30)); }).join(' | ');
          }
        } catch(e) { _actInfo = 'err:' + e.message; }

        var _allViews = document.querySelectorAll('.card__view').length;
        var _taggedViews = document.querySelectorAll('.card__view[data-trakt-movie-id]').length;
        var _domBadges = document.querySelectorAll('.trakt-digital-release').length;

        // ── Карточки в _renderedCardInstances ────────────────────────────────
        var _movieIds = [];
        _renderedCardInstances.forEach(function(ci) {
          if (_movieIds.length >= 5) return;
          var d = ci && ci.data;
          if (!d || !d.id) return;
          var t = d.method || d.card_type || d.type || (d.first_air_date ? 'tv' : 'movie');
          if (t !== 'movie') return;
          if (_movieIds.indexOf(String(d.id)) < 0) _movieIds.push(String(d.id));
        });

        // ── Карточки с лейблом ───────────────────────────────────────────────
        var _withLabel = [], _noView = 0;
        _renderedCardInstances.forEach(function(ci) {
          var data = ci && ci.data;
          if (!data || !data.id) return;
          var type = data.method || data.card_type || data.type || (data.first_air_date ? 'tv' : 'movie');
          if (type !== 'movie') return;
          var tmdbId = String(data.id);
          var label = _buildDigitalLabel(tmdbId);
          if (!label) return;
          var cardNode = typeof ci.render === 'function' ? ci.render(true) : null;
          var cardView = cardNode && cardNode.querySelector && cardNode.querySelector('.card__view');
          if (!cardView) { _noView++; return; }
          var hasBadge = !!cardView.querySelector('.trakt-digital-release');
          _withLabel.push({ tmdbId: tmdbId, label: label, hasBadge: hasBadge });
        });

        var lines = [];

        lines.push({ title: '─── Патч Lampa.Card ─────────────────────────────' });
        lines.push({ title: 'Lampa.Card: type=' + _cardType + ' | patched=' + _cardPatched });
        lines.push({ title: 'Статус: ' + _patchStatus });

        lines.push({ title: '─── Текущая страница ────────────────────────────' });
        lines.push({ title: 'Activity: ' + _actInfo });
        lines.push({ title: '.card__view всего: ' + _allViews + ' | с data-trakt-movie-id: ' + _taggedViews + ' | DOM бейджей: ' + _domBadges });
        lines.push({ title: '_renderedCardInstances: ' + _renderedCardInstances.length + ' | movie id примеры: ' + (_movieIds.join(', ') || 'нет') });

        lines.push({ title: '─── Последнее событие catalog ───────────────────' });
        if (_lastCatalogEvent) {
          lines.push({ title: 'type=' + _lastCatalogEvent.type + ' | keys: ' + _lastCatalogEvent.keys + ' | items: ' + _lastCatalogEvent.hasItems });
        } else {
          lines.push({ title: 'событие catalog ещё не приходило' });
        }

        lines.push({ title: '─── Кэш дат ─────────────────────────────────────' });
        var _keyLen = Lampa.TMDB && typeof Lampa.TMDB.key === 'function' ? String(Lampa.TMDB.key()).length : 0;
        lines.push({ title: 'available=' + _digitalDatesAvailable + ' | dates:' + dateKeys.length + ' | soon:' + soonIds.size });
        lines.push({ title: 'done:' + _digitalDateFetchDone.size + ' | errors:' + _digitalDateErrors + ' | nodata:' + _digitalDateNoData });
        lines.push({ title: 'TMDB key len:' + _keyLen + ' | prefix:' + (_digitalDateFirstKey || '–') });
        if (dateKeys.length) {
          lines.push({ title: 'Даты: ' + dateKeys.slice(0, 5).map(function(k) { return k + ':' + datesMap[k]; }).join(', ') });
        }
        var _soonArr = Array.from(soonIds).slice(0, 5);
        if (_soonArr.length) {
          lines.push({ title: 'Скоро ids: ' + _soonArr.join(', ') });
        }

        lines.push({ title: '─── Карточки с бейджем ──────────────────────────' });
        if (_withLabel.length) {
          _withLabel.slice(0, 8).forEach(function(e) {
            lines.push({ title: 'id:' + e.tmdbId + ' label:"' + e.label + '" badge:' + e.hasBadge });
          });
          if (_noView > 0) lines.push({ title: '(ещё ' + _noView + ' без DOM view)' });
        } else {
          lines.push({ title: 'Нет карточек с лейблом в _renderedCardInstances' });
        }

        var fullText = lines.map(function(l) { return l.title; }).join('\n');

        lines.push({ title: '─── Действия ────────────────────────────────────' });
        lines.push({ title: '[ Применить бейджи сейчас ]', action: 'apply' });
        lines.push({ title: '[ Тестовый бейдж (первые 3) ]', action: 'testbadge' });
        lines.push({ title: '[ Очистить кэш дат и soonIds ]', action: 'clearcache' });
        lines.push({ title: '[ Скопировать всё ]', action: 'copy', _text: fullText });

        Lampa.Select.show({
          title: 'Отладка: показ бейджей',
          items: lines,
          onSelect: function(item) {
            if (!item) return;
            if (item.action === 'apply') {
              _renderedCardInstances.forEach(renderDigitalReleaseBadge);
              refreshDigitalBadgesDOM();
              Lampa.Noty.show('Бейджи обновлены');
              return;
            }
            if (item.action === 'testbadge') {
              var testApplied = 0;
              _renderedCardInstances.forEach(function(ci) {
                if (testApplied >= 3) return;
                var d = ci && ci.data;
                if (!d || !d.id) return;
                var tp = d.method || d.card_type || d.type || (d.first_air_date ? 'tv' : 'movie');
                if (tp !== 'movie') return;
                var cn = typeof ci.render === 'function' ? ci.render(true) : null;
                var cv = cn && cn.querySelector('.card__view');
                if (!cv) return;
                var existing = cv.querySelector('.trakt-digital-test');
                if (existing) existing.parentNode.removeChild(existing);
                var tb = document.createElement('div');
                tb.className = 'trakt-digital-release trakt-digital-test';
                tb.setAttribute('data-tmdb', String(d.id));
                tb.textContent = 'Тест';
                cv.appendChild(tb);
                testApplied++;
              });
              Lampa.Noty.show(testApplied ? ('Тестовых: ' + testApplied) : 'Нет movie-карточек');
              return;
            }
            if (item.action === 'clearcache') {
              try { localStorage.removeItem(_UPCOMING_MOVIE_DATES_KEY); } catch(e) {}
              try { localStorage.removeItem(_SOON_MOVIE_KEY); } catch(e) {}
              _digitalDateFetchDone.clear();
              _digitalDatesAvailable = false;
              Lampa.Noty.show('Кэш дат очищен — обновите страницу');
              return;
            }
            if (item.action === 'copy') { _copyToClipboard(item._text); }
          },
          onBack: function() { Lampa.Controller.toggle('settings_component'); }
        });
    }
    // ── Отладка ──────────────────────────────────────────────────────────────────
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: { name: 'trakt_debug_menu', type: 'button' },
      field: {
        name: 'Отладка',
        description: 'Бейджи, прогресс торрента, навигация Ещё, диагностика сетки'
      },
      onRender: function(item) { item.show(); },
      onChange: function() {
        Lampa.Select.show({
          title: 'Отладка',
          items: [
            { title: 'Отладка: показ бейджей',                       action: 'badges'        },
            { title: 'Отладка: прогресс торрента',                   action: 'torrent'       },
            { title: 'Отладка: навигация Ещё',                       action: 'nav'           },
            { title: 'Диагностика сетки постеров',                   action: 'grid'          },
            { title: _badgesHidden ? 'Бейджи: ВКЛ (показать)' : 'Бейджи: ВЫКЛ (скрыть)', action: 'toggle_badges' }
          ],
          onSelect: function(item) {
            if (!item) return;
            if (item.action === 'badges')        { _showDebugBadges();        }
            if (item.action === 'torrent')       { _showDebugTorrent();       }
            if (item.action === 'nav')           { _showDebugNav();           }
            if (item.action === 'grid')          { _showDebugGrid();          }
            if (item.action === 'toggle_badges') { _toggleBadgeVisibility();  }
          },
          onBack: function() { Lampa.Controller.toggle('settings_component'); }
        });
      }
    });

    function _toggleBadgeVisibility() {
      _badgesHidden = !_badgesHidden;
      var styleId = 'trakt-hide-badges-debug';
      if (_badgesHidden) {
        if (!document.getElementById(styleId)) {
          var s = document.createElement('style');
          s.id = styleId;
          s.textContent = '.trakt-digital-release,.trakt-watched-badge,.trakt-watchlist-badge,.trakt-history-date-badge,.trakt-upnext-badge{display:none!important}';
          document.head.appendChild(s);
        }
        Lampa.Noty.show('Бейджи скрыты — проверьте сетку постеров');
      } else {
        var el = document.getElementById(styleId);
        if (el) el.parentNode.removeChild(el);
        Lampa.Noty.show('Бейджи снова видны');
      }
    }

    function _showDebugGrid() {
      // Find the currently visible .category-full
      var allCF = document.querySelectorAll('.category-full');
      var catFull = null;
      for (var i = 0; i < allCF.length; i++) {
        if (allCF[i].offsetParent !== null) { catFull = allCF[i]; break; }
      }
      if (!catFull && allCF.length) catFull = allCF[allCF.length - 1];

      if (!catFull) {
        Lampa.Select.show({ title: 'Диагностика сетки', items: [{ title: '.category-full не найден' }],
          onSelect: function() {}, onBack: function() { Lampa.Controller.toggle('settings_component'); } });
        return;
      }

      var cards = catFull.querySelectorAll('.card');
      var total = cards.length;
      var withCategory = 0, withBadge = 0, cardsPerRow = 0;
      var rect0 = null, firstRowTop = null;

      for (var i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('card--category')) withCategory++;
        if (cards[i].querySelector('.trakt-digital-release')) withBadge++;
        var r = cards[i].getBoundingClientRect();
        if (i === 0) { rect0 = r; firstRowTop = Math.round(r.top); }
        if (firstRowTop !== null && Math.round(r.top) === firstRowTop) cardsPerRow++;
      }

      var cfRect = catFull.getBoundingClientRect();
      var cs0 = cards[0] ? window.getComputedStyle(cards[0]) : null;
      var computedW = cs0 ? cs0.width : 'N/A';
      var computedPB = cs0 ? cs0.paddingBottom : 'N/A';

      // Walk up the DOM and collect parent widths
      var parentLines = [];
      var node = catFull.parentElement;
      for (var depth = 0; depth < 7 && node && node !== document.body; depth++) {
        var cls = (node.className || '').toString().replace(/\s+/g, ' ').trim().slice(0, 55);
        var pw = Math.round(node.getBoundingClientRect().width);
        parentLines.push('↑ ' + (cls || node.tagName) + ' [' + pw + 'px]');
        node = node.parentElement;
      }

      var lines = [];
      lines.push('Карточек: ' + total + '  |  в 1-й строке: ' + cardsPerRow);
      lines.push('С .card--category: ' + withCategory + (total ? ' (' + Math.round(withCategory / total * 100) + '%)' : ''));
      lines.push('С бейджем цифр. релиза: ' + withBadge);
      if (rect0) lines.push('Карточка: ' + Math.round(rect0.width) + '×' + Math.round(rect0.height) + 'px  CSS width: ' + computedW + '  pb: ' + computedPB);
      lines.push('.category-full: ' + Math.round(cfRect.width) + 'px  экран: ' + window.innerWidth + 'px');
      lines = lines.concat(parentLines);
      lines.push('Бейджи: ' + (_badgesHidden ? 'СКРЫТЫ' : 'видны'));

      var fullText = lines.join('\n');
      var items = lines.map(function(l) { return { title: l }; });
      items.push({ title: '[ Скопировать ]', action: 'copy', _text: fullText });

      Lampa.Select.show({
        title: 'Диагностика сетки постеров',
        items: items,
        onSelect: function(item) {
          if (item && item.action === 'copy') _copyToClipboard(item._text);
        },
        onBack: function() { Lampa.Controller.toggle('settings_component'); }
      });
    }

    function _showDebugTorrent() {
        var dbg = Lampa.Storage.get('trakt_debug_torrent') || {};
        var sync = Lampa.Storage.get('trakt_debug_sync') || {};
        var lines = [];
        if (dbg.ts) {
          lines.push({ title: '— Список серий (' + dbg.ts.replace('T',' ').slice(0,19) + ') —' });
          if (dbg.show) lines.push({ title: dbg.show });
          lines.push({ title: 'Sync: ' + dbg.syncAgo + ' назад' + (dbg.syncTriggered ? ' (запущен)' : '') });
          if (Array.isArray(dbg.files) && dbg.files.length) {
            dbg.files.forEach(function(f) {
              var line = 'S' + String(f.s).padStart(2,'0') + 'E' + String(f.e).padStart(2,'0');
              line += ' | local:' + f['local%'] + '%';
              if (f['trakt%'] !== null) line += ' trakt:' + f['trakt%'] + '%';
              if (f.traktWatched) line += ' [просмотрено]';
              if (!f.hash) line += ' [нет hash]';
              lines.push({ title: line });
            });
          } else {
            lines.push({ title: 'Файлы без season/episode данных' });
          }
        }
        if (sync.ts) {
          lines.push({ title: '— Trakt /sync/playback (' + sync.ts.replace('T',' ').slice(0,19) + ') —' });
          if (sync.error) {
            lines.push({ title: 'Ошибка: ' + sync.error });
          } else {
            lines.push({ title: 'Всего в Trakt: ' + (sync.total || 0) });
            if (Array.isArray(sync.traktRaw) && sync.traktRaw.length) {
              sync.traktRaw.forEach(function(r) {
                var line = r.show + ' ' + r.ep + ' ' + r.pct + '%';
                if (r.paused_at) line += ' (' + r.paused_at + ')';
                lines.push({ title: line });
              });
            } else {
              lines.push({ title: '(нет данных из Trakt)' });
            }
            if (Array.isArray(sync.items) && sync.items.length) {
              lines.push({ title: '— Результат применения —' });
              sync.items.forEach(function(it) {
                var line = (it.label || '?') + ' → ' + it.action;
                if (it.traktPct) line += ' trakt:' + Math.round(it.traktPct) + '%';
                if (it.localPct !== undefined) line += ' local:' + Math.round(it.localPct) + '%';
                lines.push({ title: line });
              });
            }
          }
        }
        if (!lines.length) lines.push({ title: 'Нет данных. Откройте список серий в торренте.' });
        var fullText = lines.map(function(l) { return l.title; }).join('\n');
        lines.push({ title: '[ Скопировать в буфер обмена ]', action: 'copy', _text: fullText });
        Lampa.Select.show({
          title: 'Отладка: прогресс торрента',
          items: lines,
          onSelect: function(item) {
            if (item && item.action === 'copy') { _copyToClipboard(item._text); }
          },
          onBack: function() { Lampa.Controller.toggle('settings_component'); }
        });
    }
    function _showDebugNav() {
        var log = _navDebugLog.slice();
        var lines = [];
        if (!log.length) {
          lines.push({ title: 'Событий ещё нет. Нажмите «Ещё» на строке и снова откройте эту отладку.' });
        } else {
          log.forEach(function(entry) {
            var ts = entry.ts ? entry.ts.replace('T',' ').slice(0,19) : '?';
            var line = '[' + ts + '] ' + entry.source;
            if (entry.component && entry.component !== '—') line += ' → ' + entry.component;
            if (entry.title && entry.title !== '—') line += ' "' + entry.title + '"';
            if (entry.extra) line += ' | ' + entry.extra;
            lines.push({ title: line });
          });
        }
        var fullText = lines.map(function(l) { return l.title; }).join('\n');
        lines.push({ title: '[ Очистить лог ]', action: 'clear' });
        lines.push({ title: '[ Скопировать ]',  action: 'copy', _text: fullText });
        Lampa.Select.show({
          title: 'Отладка: навигация Ещё',
          items: lines,
          onSelect: function(item) {
            if (!item) return;
            if (item.action === 'clear') {
              _navDebugLog.length = 0;
              try { Lampa.Storage.set('trakt_debug_nav', []); } catch(e) {}
              Lampa.Noty.show('Лог очищен');
              return;
            }
            if (item.action === 'copy') { _copyToClipboard(item._text); }
          },
          onBack: function() { Lampa.Controller.toggle('settings_component'); }
        });
    }

    // ── Сброс всех настроек ───────────────────────────────────────────────────
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: { name: 'trakt_full_clear', type: 'button' },
      field: {
        name: t$1('trakt_reset_all', 'Сброс всех настроек плагина Trakt.TV'),
        description: t$1('trakt_reset_all_descr', 'Удалит все токены, настройки и данные аккаунтов')
      },
      onRender: function onRender(item) { item.show(); },
      onChange: function onChange() {
        Lampa.Select.show({
          title: t$1('trakt_reset_all', 'Сброс всех настроек плагина Trakt.TV'),
          items: [
            { title: t$1('trakt_reset_confirm', 'Да, удалить всё'), action: 'confirm' },
            { title: t$1('cancel', 'Отмена'), action: 'cancel' }
          ],
          onSelect: function (a) {
            if (a.action !== 'confirm') return;
            clearAuthBlocked();
            try {
              // Remove all trakt_* and trakt-* keys directly from localStorage
              var keysToRemove = Object.keys(localStorage).filter(function(k) {
                return k.indexOf('trakt_') === 0 || k.indexOf('trakt-') === 0;
              });
              keysToRemove.forEach(function(k) { try { localStorage.removeItem(k); } catch(e) {} });
              // Reset via Lampa.Storage to ensure in-memory state is cleared too
              Lampa.Storage.set('trakt_token', null);
              Lampa.Storage.set('trakt_refresh_token', null);
              Lampa.Storage.set('trakt_token_created_at', null);
              Lampa.Storage.set('trakt_token_expires_in', null);
              Lampa.Storage.set('trakt_token_expires_at', null);
              Lampa.Storage.set('trakt_active_device_auth', false);
              Lampa.Storage.set('trakt_active_device_auth_started_at', null);
              Lampa.Storage.set('trakt_accounts', '[]');
              Lampa.Storage.set('trakt_active_slot', 0);
              Lampa.Storage.set('trakt_multiwatch_slots', '[]');
              Lampa.Storage.set('trakt_multiwatch_enabled', false);
              Lampa.Storage.set('trakt_profile_slots', null);
              Lampa.Storage.set('trakt_upcoming_movie_ids', null);
            } catch (e) {}
            Lampa.Bell.push({ text: t$1('trakttvFullClearNoty', 'Все очищено') });
            try { Lampa.Settings.update(); } catch (e) {}
          },
          onBack: function () { Lampa.Controller.toggle('settings_component'); }
        });
      }
    });
  }
  function t$1(key, fallback) {
    if (typeof Lampa === 'undefined' || !Lampa || !Lampa.Lang || typeof Lampa.Lang.translate !== 'function') {
      return fallback || key;
    }
    var translated = Lampa.Lang.translate(key);
    if (!translated || translated === key) {
      return fallback || translated || key;
    }
    return translated;
  }
  function ensureBookmarksSyncAvailable() {
    if (!Lampa.Storage.get('trakt_token')) {
      Lampa.Bell.push({
        text: t$1('trakt_bookmarks_auth_required', 'Login to Trakt.TV first')
      });
      return false;
    }
    if (!Api$1) {
      logApiMissing();
      Lampa.Bell.push({
        text: t$1('trakt_bookmarks_sync_failed', 'Bookmarks sync failed')
      });
      return false;
    }
    if (!Lampa.Favorite) {
      Lampa.Bell.push({
        text: t$1('trakt_bookmarks_local_unavailable', 'Local bookmarks are unavailable')
      });
      return false;
    }
    return true;
  }
  function getBookmarksSyncMode() {
    var mode = Lampa.Storage.field('trakt_bookmarks_mode');
    return mode === 'my_lists' ? 'my_lists' : 'watchlist';
  }
  function getSupportedFavoriteTypes() {
    var types = bookmarksSync && Array.isArray(bookmarksSync.supportedFavoriteTypes) ? bookmarksSync.supportedFavoriteTypes : DEFAULT_BOOKMARKS_SYNC_TYPES;
    return types.length ? types : DEFAULT_BOOKMARKS_SYNC_TYPES;
  }
  function getFavoriteTypeTitle() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'book';
    return t$1("title_".concat(type), type);
  }
  function getBookmarksFavoriteTypeValues() {
    var values = {};
    getSupportedFavoriteTypes().forEach(function (type) {
      values[type] = getFavoriteTypeTitle(type);
    });
    return values;
  }
  function getBookmarksFavoriteType() {
    var type = (Lampa.Storage.field('trakt_bookmarks_favorite_type') || 'book').toString().trim().toLowerCase();
    var supportedTypes = getSupportedFavoriteTypes();
    return supportedTypes.indexOf(type) > -1 ? type : 'book';
  }
  function buildProgressBar(percent) {
    var total = 12;
    var safePercent = Math.max(0, Math.min(100, Number(percent) || 0));
    var filled = Math.round(safePercent / 100 * total);
    return '[' + '#'.repeat(filled) + '-'.repeat(Math.max(0, total - filled)) + ']';
  }
  function formatSyncProgressText(operation) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var favoriteType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'book';
    var percent = Math.max(0, Math.min(100, Number(payload.percent) || 0));
    var bar = buildProgressBar(percent);
    var favoriteTypeTitle = getFavoriteTypeTitle(favoriteType);
    var phaseText = '';
    switch (payload.phase) {
      case 'loading_source':
        phaseText = t$1('trakt_bookmarks_progress_loading_source', 'Loading source') + " (p".concat(payload.page || 1, ")");
        break;
      case 'loading_target':
        phaseText = t$1('trakt_bookmarks_progress_loading_target', 'Loading target') + " (p".concat(payload.page || 1, ")");
        break;
      case 'processing_import':
        phaseText = t$1('trakt_bookmarks_progress_import', 'Importing');
        break;
      case 'processing_export':
        phaseText = t$1('trakt_bookmarks_progress_export', 'Exporting');
        break;
      default:
        phaseText = t$1('trakt_bookmarks_progress_prepare', 'Preparing');
        break;
    }
    var counter = '';
    if (payload.total) {
      counter = " ".concat(payload.processed || 0, "/").concat(payload.total);
    }
    return "".concat(bar, " ").concat(percent, "% ").concat(phaseText).concat(counter, " \xB7 ").concat(favoriteTypeTitle);
  }
  function formatSyncSummary(operation) {
    var summary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var favoriteType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'book';
    var prefix = operation === 'import' ? t$1('trakt_bookmarks_import_done', 'Import completed') : t$1('trakt_bookmarks_export_done', 'Export completed');
    var favoriteTypeTitle = getFavoriteTypeTitle(summary.favorite_type || favoriteType);
    return "".concat(prefix, " (").concat(favoriteTypeTitle, "): ").concat(t$1('trakt_bookmarks_added', 'Added'), " ").concat(summary.added || 0, ", ").concat(t$1('trakt_bookmarks_duplicates', 'Duplicates'), " ").concat(summary.duplicates || 0, ", ").concat(t$1('trakt_bookmarks_skipped_unsupported', 'Skipped'), " ").concat(summary.skipped_unsupported || 0, ", ").concat(t$1('trakt_bookmarks_failed', 'Failed'), " ").concat(summary.failed || 0);
  }
  function selectMyList(title, _onSelect) {
    if (!Api$1) return;
    Api$1.myLists({
      page: 1,
      limit: 100
    }).then(function (response) {
      var lists = response && Array.isArray(response.results) ? response.results.filter(function (list) {
        return !!list.id;
      }) : [];
      if (!lists.length) {
        Lampa.Bell.push({
          text: t$1('trakt_bookmarks_no_lists', 'No personal lists found')
        });
        return;
      }
      var items = lists.map(function (list) {
        var listTitle = list.list_title || list.title || list.name || String(list.id);
        var itemCount = Number(list.item_count) || 0;
        return {
          title: "".concat(listTitle, " (").concat(itemCount, ")"),
          listId: list.id,
          listTitle: listTitle
        };
      });
      items.push({
        title: t$1('cancel', 'Cancel'),
        cancel: true
      });
      Lampa.Select.show({
        title: title,
        items: items,
        onSelect: function onSelect(item) {
          if (!item || item.cancel) {
            if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
            return;
          }
          if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
          _onSelect && _onSelect(item);
        },
        onBack: function onBack() {
          if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
        }
      });
    })["catch"](function () {
      Lampa.Bell.push({
        text: t$1('trakt_bookmarks_lists_load_error', 'Failed to load personal lists')
      });
    });
  }
  function runBookmarksSyncOperation(_x) {
    return _runBookmarksSyncOperation.apply(this, arguments);
  }
  function _runBookmarksSyncOperation() {
    _runBookmarksSyncOperation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(operation) {
      var _ref,
        _ref$source,
        source,
        _ref$target,
        target,
        _ref$listId,
        listId,
        _ref$favoriteType,
        favoriteType,
        resolvedFavoriteType,
        favoriteTypeTitle,
        isCanceled,
        startActionText,
        startText,
        summary,
        _args = arguments,
        _t,
        _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref$source = _ref.source, source = _ref$source === void 0 ? 'watchlist' : _ref$source, _ref$target = _ref.target, target = _ref$target === void 0 ? 'watchlist' : _ref$target, _ref$listId = _ref.listId, listId = _ref$listId === void 0 ? null : _ref$listId, _ref$favoriteType = _ref.favoriteType, favoriteType = _ref$favoriteType === void 0 ? 'book' : _ref$favoriteType;
            if (ensureBookmarksSyncAvailable()) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!isBookmarksSyncRunning) {
              _context.n = 2;
              break;
            }
            Lampa.Bell.push({
              text: t$1('trakt_bookmarks_operation_in_progress', 'Bookmarks sync already in progress')
            });
            return _context.a(2);
          case 2:
            resolvedFavoriteType = getSupportedFavoriteTypes().indexOf(favoriteType) > -1 ? favoriteType : getBookmarksFavoriteType();
            favoriteTypeTitle = getFavoriteTypeTitle(resolvedFavoriteType);
            isBookmarksSyncRunning = true;
            isCanceled = false;
            startActionText = operation === 'import' ? t$1('trakt_bookmarks_import_start', 'Starting import') : t$1('trakt_bookmarks_export_start', 'Starting export');
            startText = "".concat(startActionText, ": ").concat(favoriteTypeTitle);
            Lampa.Loading.start(function () {
              isCanceled = true;
            }, startText);
            _context.p = 3;
            if (!(operation === 'import')) {
              _context.n = 5;
              break;
            }
            _context.n = 4;
            return bookmarksSync.importBookmarks({
              api: Api$1,
              favorite: Lampa.Favorite,
              source: source,
              listId: listId,
              favoriteType: resolvedFavoriteType,
              checkCancel: function checkCancel() {
                return isCanceled;
              },
              onProgress: function onProgress(payload) {
                Lampa.Loading.setText(formatSyncProgressText(operation, payload, resolvedFavoriteType));
              }
            });
          case 4:
            _t = _context.v;
            _context.n = 7;
            break;
          case 5:
            _context.n = 6;
            return bookmarksSync.exportBookmarks({
              api: Api$1,
              favorite: Lampa.Favorite,
              target: target,
              listId: listId,
              favoriteType: resolvedFavoriteType,
              checkCancel: function checkCancel() {
                return isCanceled;
              },
              onProgress: function onProgress(payload) {
                Lampa.Loading.setText(formatSyncProgressText(operation, payload, resolvedFavoriteType));
              }
            });
          case 6:
            _t = _context.v;
          case 7:
            summary = _t;
            Lampa.Bell.push({
              text: formatSyncSummary(operation, summary, resolvedFavoriteType)
            });
            logDebug('Bookmarks sync summary', {
              operation: operation,
              summary: summary
            });
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t2 = _context.v;
            if (_t2 && _t2.code === 'canceled') {
              Lampa.Bell.push({
                text: t$1('trakt_bookmarks_canceled', 'Operation canceled')
              });
            } else {
              Lampa.Bell.push({
                text: t$1('trakt_bookmarks_sync_failed', 'Bookmarks sync failed')
              });
              logError('Bookmarks sync failed', {
                operation: operation,
                error: _t2
              }, {
                debugOnly: true
              });
            }
          case 9:
            _context.p = 9;
            Lampa.Loading.stop();
            isBookmarksSyncRunning = false;
            return _context.f(9);
          case 10:
            return _context.a(2);
        }
      }, _callee, null, [[3, 8, 9, 10]]);
    }));
    return _runBookmarksSyncOperation.apply(this, arguments);
  }
  function startBookmarksImportFlow() {
    if (!ensureBookmarksSyncAvailable()) return;
    var favoriteType = getBookmarksFavoriteType();
    var favoriteTypeTitle = getFavoriteTypeTitle(favoriteType);
    if (getBookmarksSyncMode() === 'my_lists') {
      selectMyList("".concat(t$1('trakt_bookmarks_import_select_list', 'Select source list'), ": ").concat(favoriteTypeTitle), function (item) {
        runBookmarksSyncOperation('import', {
          source: 'my_list',
          listId: item.listId,
          favoriteType: favoriteType
        });
      });
      return;
    }
    runBookmarksSyncOperation('import', {
      source: 'watchlist',
      favoriteType: favoriteType
    });
  }
  function startBookmarksExportFlow() {
    if (!ensureBookmarksSyncAvailable()) return;
    var favoriteType = getBookmarksFavoriteType();
    var favoriteTypeTitle = getFavoriteTypeTitle(favoriteType);
    if (getBookmarksSyncMode() === 'my_lists') {
      selectMyList("".concat(t$1('trakt_bookmarks_export_select_list', 'Select target list'), ": ").concat(favoriteTypeTitle), function (item) {
        runBookmarksSyncOperation('export', {
          target: 'my_list',
          listId: item.listId,
          favoriteType: favoriteType
        });
      });
      return;
    }
    runBookmarksSyncOperation('export', {
      target: 'watchlist',
      favoriteType: favoriteType
    });
  }
  var currentPollTimeoutId = null;
  var visibilityHandler = null;
  var pollInFlight = false;
  var checkNowHandler = null;
  var pendingLoginSlot = null;
  var lastMultiwatchSelection = [];

  // Centralized error handling and polling stop
  function handlePollingError(modalInstance, messageKey, defaultMessage, code) {
    var stop = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    logWarn('Device auth polling stopped', {
      code: code
    }, {
      debugOnly: true
    });
    if (stop) {
      if (currentPollTimeoutId) {
        clearTimeout(currentPollTimeoutId);
        currentPollTimeoutId = null;
      }
      if (visibilityHandler) {
        document.removeEventListener('visibilitychange', visibilityHandler);
        visibilityHandler = null;
      }
      pollInFlight = false;
      checkNowHandler = null;
      Lampa.Storage.set('trakt_active_device_auth', false);
      Lampa.Storage.set('trakt_active_device_auth_started_at', null);
    }
    if (modalInstance) {
      modalInstance.close();
    }
    Lampa.Bell.push({
      text: Lampa.Lang.translate(messageKey) || defaultMessage
    });
  }

  // Function to handle successful authentication
  function handleAuthSuccess(modalInstance, response) {
    logDebug('Device auth succeeded');
    if (currentPollTimeoutId) {
      clearTimeout(currentPollTimeoutId);
      currentPollTimeoutId = null;
    }
    if (visibilityHandler) {
      document.removeEventListener('visibilitychange', visibilityHandler);
      visibilityHandler = null;
    }
    pollInFlight = false;
    checkNowHandler = null;
    Lampa.Storage.set('trakt_active_device_auth', false);
    Lampa.Storage.set('trakt_active_device_auth_started_at', null);
    // Non-active slot: write ONLY to target slot, never touch flat storage or the active slot
    if (pendingLoginSlot !== null && pendingLoginSlot !== multiAccountGetActiveSlot()) {
      var targetSlot = pendingLoginSlot;
      pendingLoginSlot = null;
      multiAccountUpdateSlot(targetSlot, {
        token: response.access_token || null,
        refresh_token: response.refresh_token || null,
        expires_at: response.expires_in ? ((Number(response.created_at) || Math.floor(Date.now() / 1000)) * 1000 + Number(response.expires_in) * 1000) : null,
        label: multiAccountGetSlot(targetSlot) && multiAccountGetSlot(targetSlot).label || ('Account ' + (targetSlot + 1))
      });
      requestApiWithToken(response.access_token, 'GET', '/users/me').then(function (user) {
        if (user && user.username) {
          multiAccountUpdateSlot(targetSlot, {
            label: user.username,
            avatar: (user.images && user.images.avatar && user.images.avatar.full) || '',
            vip: !!(user.vip)
          });
          Lampa.Settings.update();
        }
      }).catch(function () {});
      if (modalInstance) modalInstance.close();
      Lampa.Settings.update();
      Lampa.Bell.push({ text: Lampa.Lang.translate('trakttvAuthOk') });
      return;
    }
    pendingLoginSlot = null;
    // Active slot: now safe to write to flat storage
    if (Api$1 && Api$1.auth && typeof Api$1.auth.storeTokens === 'function') {
      Api$1.auth.storeTokens(response);
    } else {
      Lampa.Storage.set('trakt_token', response.access_token);
      Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
    }
    var activeSlotForSave = multiAccountGetActiveSlot();
    multiAccountSnapshotActive();
    multiAccountUpdateSlot(activeSlotForSave, { label: '…' });
    requestApiWithToken(response.access_token || Lampa.Storage.get('trakt_token'), 'GET', '/users/me').then(function (user) {
      if (user) {
        multiAccountUpdateSlot(activeSlotForSave, {
          label: user.username || ('Account ' + (activeSlotForSave + 1)),
          avatar: (user.images && user.images.avatar && user.images.avatar.full) || '',
          vip: !!(user.vip)
        });
      }
      try { Lampa.Settings.update(); } catch (e) {}
    }).catch(function () {});
    if (modalInstance) {
      modalInstance.close();
    }
    Lampa.Settings.update();
    Lampa.Bell.push({
      text: Lampa.Lang.translate('trakttvAuthOk')
    });
  }
  function extractPollingErrorCode(error) {
    var payload = error && error.response;
    if (!payload) return '';
    if (_typeof(payload) === 'object') {
      return String(payload.error || payload.error_code || '').trim().toLowerCase();
    }
    if (typeof payload === 'string') {
      try {
        var decoded = JSON.parse(payload);
        if (decoded && _typeof(decoded) === 'object') {
          return String(decoded.error || decoded.error_code || '').trim().toLowerCase();
        }
      } catch (e) {
        return '';
      }
    }
    return '';
  }
  function parseRetryAfterMs() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var value = headers && headers['retry-after'];
    if (!value) return null;
    var numeric = Number(value);
    if (Number.isFinite(numeric) && numeric >= 0) {
      return numeric * 1000;
    }
    var dateMs = Date.parse(value);
    if (Number.isFinite(dateMs)) {
      return Math.max(0, dateMs - Date.now());
    }
    return null;
  }

  function pollAuth(data, modalInstance) {
    var originalIntervalSec = Number(data && data.interval);
    var originalIntervalMs = Number.isFinite(originalIntervalSec) && originalIntervalSec > 0 ? originalIntervalSec * 1000 : 5000;
    var currentPollingStepMs = originalIntervalMs;
    var expiresMs = Number.isFinite(Number(data && data.expires_in)) ? Number(data.expires_in) * 1000 : 600 * 1000;
    var pendingCount = 0;
    if (!data || !data.device_code) {
      handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', 'missing-device_code');
      return;
    }
    var startTime = Date.now();
    logDebug('Device auth polling started', {
      stepMs: currentPollingStepMs,
      expiresMs: expiresMs
    });

    // Clear any existing poll timeout before starting a new one
    if (currentPollTimeoutId) {
      clearTimeout(currentPollTimeoutId);
      currentPollTimeoutId = null;
    }
    var scheduleNext = function scheduleNext(delayMs) {
      if (currentPollTimeoutId) {
        clearTimeout(currentPollTimeoutId);
      }
      currentPollTimeoutId = setTimeout(executePoll, delayMs);
    };
    var executePoll = function executePoll() {
      currentPollTimeoutId = null;

      // Check for timeout BEFORE making the API call
      if (Date.now() - startTime >= expiresMs) {
        logWarn('Device auth polling timeout', {
          expiresMs: expiresMs
        }, {
          debugOnly: true
        });
        handlePollingError(modalInstance, 'trakttvExpired', 'Expired, please restart', 'timeout');
        return;
      }
      if (!Api$1) {
        logApiMissing();
        handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', 'api-missing');
        return;
      }
      pollInFlight = true;
      Api$1.auth.device.poll(data.device_code).then(function (response) {
        pollInFlight = false;
        pendingCount = 0;
        handleAuthSuccess(modalInstance, response);
      })["catch"](function (error) {
        var status = error && error.status;
        var errorCode = extractPollingErrorCode(error);
        switch (status) {
          case 400:
            if (!errorCode || errorCode === 'authorization_pending') {
              pendingCount++;
              var effectiveDelay = originalIntervalMs;
              if (pendingCount > 3) {
                var multiplier = Math.min(1.5 + (pendingCount - 4) * 0.25, 4);
                effectiveDelay = Math.min(originalIntervalMs * multiplier, 45 * 1000);
                logDebug('Adaptive backoff increased delay', {
                  pendingCount: pendingCount,
                  effectiveDelay: effectiveDelay
                });
              }
              scheduleNext(effectiveDelay);
              pollInFlight = false;
              break;
            }
            logWarn('Device auth poll returned invalid 400 state', {
              status: status,
              errorCode: errorCode
            }, {
              debugOnly: true
            });
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', errorCode || status);
            break;
          case 404:
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvInvalidCode', 'Invalid device code', status);
            break;
          case 409:
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvAuthOk', 'Already authorized', status);
            break;
          case 410:
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvExpired', 'Expired, please restart', status);
            break;
          case 418:
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvDenied', 'Access denied', status);
            break;
          case 429:
            pendingCount = 0;
            currentPollingStepMs = Math.min(currentPollingStepMs * 2, 60 * 1000);
            var jitter = Math.random() * 1000;
            var retryAfterMs = parseRetryAfterMs(error && error.headers ? error.headers : {});
            var nextStepMs = Math.max(currentPollingStepMs + jitter, retryAfterMs || 0);
            logWarn('Device auth polling slowed down by server', {
              nextStepMs: nextStepMs
            }, {
              debugOnly: true
            });
            scheduleNext(nextStepMs);
            pollInFlight = false;
            break;
          default:
            pendingCount = 0;
            logWarn('Device auth poll returned unexpected status', {
              status: status
            }, {
              debugOnly: true
            });
            handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', status || 'unknown-error');
            break;
        }
      });
    };

    // Wire up "Check now" via onSelect callback
    checkNowHandler = function checkNowHandler() {
      if (pollInFlight) return;
      if (currentPollTimeoutId) {
        clearTimeout(currentPollTimeoutId);
        currentPollTimeoutId = null;
      }
      executePoll();
    };

    // Stop polling when tab is hidden; resume when visible again
    if (visibilityHandler) {
      document.removeEventListener('visibilitychange', visibilityHandler);
    }
    visibilityHandler = function visibilityHandler() {
      if (document.hidden) {
        if (currentPollTimeoutId) {
          clearTimeout(currentPollTimeoutId);
          currentPollTimeoutId = null;
        }
      } else {
        // Tab visible again — restart a normal poll cycle
        if (!currentPollTimeoutId && Lampa.Storage.get('trakt_active_device_auth') === true) {
          currentPollingStepMs = originalIntervalMs;
          scheduleNext(originalIntervalMs);
        }
      }
    };
    document.addEventListener('visibilitychange', visibilityHandler);

    // First poll after interval — never immediately
    scheduleNext(originalIntervalMs);
  }
  var config = {
    main: main
  };

  /**
   * Simple in-memory idempotency cache and per-key lock to avoid duplicate Trakt finish calls on Smart TV.
   * Persisted in Lampa.Storage session scope under 'trakt_completion_cache'.
   * Record shape: { ts:number, token:string, status:'intent'|'finishing'|'finished' }
   */

  var completionCache = new Map(); // key -> { ts, token, status }
  var lockQueues = new Map(); // key -> array of resolvers for queued locks
  var requestInProgress = {};
  var hashMetaCache = new Map(); // hash -> { ts, card, season, episode, ids }
  var HASH_META_TTL_SEC = 60 * 60 * 24 * 7; // 7 days

  function nowSec() {
    return Math.floor(Date.now() / 1000);
  }
  function sleep(ms) {
    return new Promise(function (r) {
      return setTimeout(r, ms);
    });
  }
  function getTTL() {
    // 6h default to prevent duplicate finishes from periodic timeline saves in long sessions.
    var def = 60 * 60 * 6;
    var v = Lampa.Storage.field('trakt_completion_ttl');
    var num = parseInt(v !== undefined ? v : def);
    return isNaN(num) ? def : num;
  }
  function getDebounceMs() {
    var def = 400;
    var v = Lampa.Storage.field('trakt_finish_debounce');
    var num = parseInt(v !== undefined ? v : def);
    return isNaN(num) ? def : num;
  }
  function logEnabled() {
    return Lampa.Storage.field('trakt_enable_logging');
  }
  function shouldEmitDebugLog() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var first = typeof args[0] === 'string' ? args[0] : '';
    var second = typeof args[1] === 'string' ? args[1] : '';
    if (first === 'watching.init called while already initialized, skipping') return true;
    if (first === 'Request for key is already in progress, skipping.') return true;
    if (first === 'Episode index not resolved') return true;
    if (first === 'finish error') return true;
    if (first === 'addShowToWatching called while already adding, skipping') return true;
    if (first === 'finish') {
      if (second.indexOf('retry attempt') === 0) return true;
      if (second === 'abort on client error') return true;
      if (second === '409 conflict -> treat as finished, no retries') return true;
    }
    return false;
  }
  function slog() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!logEnabled() || !shouldEmitDebugLog(args)) return;
    if (!args.length) return;
    var message = args[0];
    var rest = args.slice(1);
    if (!rest.length) logDebug(message);else if (rest.length === 1) logDebug(message, rest[0]);else logDebug(message, rest);
  }
  function normalizeCardForCache(card) {
    if (!card) return null;
    return {
      id: card.id,
      ids: card.ids,
      original_name: card.original_name,
      name: card.name,
      original_title: card.original_title,
      title: card.title,
      first_air_date: card.first_air_date,
      created_by: card.created_by,
      number_of_seasons: card.number_of_seasons,
      number_of_episodes: card.number_of_episodes,
      episode_run_time: card.episode_run_time,
      card_type: card.card_type,
      media_type: card.media_type,
      method: card.method
    };
  }
  function loadHashMetaCache() {
    var raw = Lampa.Storage.get('trakt_hash_meta_cache');
    var now = nowSec();
    hashMetaCache.clear();
    if (raw && Array.isArray(raw.entries)) {
      raw.entries.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        if (v && now - v.ts <= HASH_META_TTL_SEC) {
          hashMetaCache.set(k, v);
        }
      });
    }
    slog('hashMetaCache restored', Object.fromEntries(hashMetaCache));
  }
  function persistHashMetaCache() {
    var now = nowSec();
    var _iterator = _createForOfIteratorHelper(hashMetaCache.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];
        if (!v || now - v.ts > HASH_META_TTL_SEC) hashMetaCache["delete"](k);
      }
      // keep cache small
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (hashMetaCache.size > 300) {
      var ordered = Array.from(hashMetaCache.entries()).sort(function (a, b) {
        return (a[1].ts || 0) - (b[1].ts || 0);
      });
      ordered.slice(0, hashMetaCache.size - 300).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          k = _ref4[0];
        return hashMetaCache["delete"](k);
      });
    }
    var payload = {
      ts: now,
      entries: Array.from(hashMetaCache.entries())
    };
    Lampa.Storage.set('trakt_hash_meta_cache', payload);
  }
  function setHashMeta(hash, meta) {
    if (!hash || !meta) return;
    var next = {
      ts: nowSec(),
      card: normalizeCardForCache(meta.card),
      season: meta.season,
      episode: meta.episode,
      ids: meta.ids || meta.card && meta.card.ids
    };
    hashMetaCache.set(hash, next);
    persistHashMetaCache();
  }
  function getHashMeta(hash) {
    if (!hash) return null;
    var rec = hashMetaCache.get(hash);
    if (!rec) return null;
    if (nowSec() - rec.ts > HASH_META_TTL_SEC) {
      hashMetaCache["delete"](hash);
      return null;
    }
    return rec;
  }
  function findHashForEpisode(tmdbShowId, season, episode) {
    var tmdbStr = String(tmdbShowId);
    var best = null;
    hashMetaCache.forEach(function(meta, hash) {
      if (!meta || !meta.card) return;
      if (String(meta.card.id) !== tmdbStr) return;
      if (String(meta.season) !== String(season) || String(meta.episode) !== String(episode)) return;
      if (!best || (meta.ts || 0) > (best.ts || 0)) best = { hash: hash, ts: meta.ts || 0 };
    });
    return best && best.hash;
  }

  function extractSeasonEpisode(obj) {
    if (!obj) return {};
    var season = obj.season_number || obj.season || obj.seasonNumber || obj.s;
    var episode = obj.episode_number || obj.episode || obj.episodeNumber || obj.e;
    return {
      season: season,
      episode: episode
    };
  }
  function collectTitleCandidates() {
    var seen = new Set();
    var candidates = [];
    for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      sources[_key2] = arguments[_key2];
    }
    sources.forEach(function (source) {
      if (!source || _typeof(source) !== 'object') return;
      [source.original_name, source.original_title, source.name, source.title].forEach(function (value) {
        if (typeof value !== 'string') return;
        var title = value.trim();
        if (!title || seen.has(title)) return;
        seen.add(title);
        candidates.push(title);
      });
    });
    return candidates;
  }

  /**
   * Build idempotency key for media card or episode
   * movie: 'movie:trakt:ID' | 'movie:tmdb:ID' | 'movie:hash:...'
   * episode: 'episode:trakt:showID:Sx:Ey' or fallback by hash
   */
  function getCompletionKey(media) {
    try {
      var type = getContentType$1(media) === 'show' ? 'episode' : 'movie';
      var ids = media.ids || {};
      if (type === 'movie') {
        if (ids.trakt) return "movie:trakt:".concat(ids.trakt);
        if (media.id) return "movie:tmdb:".concat(media.id);
        if (media.hash) return "movie:hash:".concat(media.hash);
      } else {
        // Prefer show trakt id + season/episode if present on card
        var showTrakt = ids && ids.trakt || media.show && media.show.ids && media.show.ids.trakt;
        var s = media.season_number || media.season || media.seasonNumber;
        var e = media.episode_number || media.episode || media.episodeNumber;
        if (showTrakt && s && e) return "episode:trakt:".concat(showTrakt, ":S").concat(s, ":E").concat(e);
        // fallback tmdb
        if (media.id && s && e) return "episode:tmdb:".concat(media.id, ":S").concat(s, ":E").concat(e);
        if (media.hash) return "episode:hash:".concat(media.hash);
      }
    } catch (e) {}
    // ultimate fallback: hashed title
    var title = media.original_title || media.original_name || media.name || media.title || 'unknown';
    return "unknown:".concat(Lampa.Utils.hash(title));
  }

  /**
   * Persist/restore cache in session storage with TTL cleanup
   */
  function loadSessionCache() {
    var raw = Lampa.Storage.get('trakt_completion_cache');
    var ttl = getTTL();
    var now = nowSec();
    completionCache.clear();
    if (raw && Array.isArray(raw.entries)) {
      raw.entries.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          k = _ref6[0],
          v = _ref6[1];
        if (v && now - v.ts <= ttl) {
          completionCache.set(k, v);
        }
      });
    }
    slog('completionCache restored', Object.fromEntries(completionCache));
  }
  function persistSessionCache() {
    var ttl = getTTL();
    var now = nowSec();
    // cleanup expired
    var _iterator2 = _createForOfIteratorHelper(completionCache.entries()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          k = _step2$value[0],
          v = _step2$value[1];
        if (!v || now - v.ts > ttl) completionCache["delete"](k);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var payload = {
      ts: now,
      entries: Array.from(completionCache.entries())
    };
    Lampa.Storage.set('trakt_completion_cache', payload);
  }

  /**
   * Check if finish is allowed once within TTL for a key
   * Returns { allow:boolean, reason:string }
   */
  function canFinishOnce(key) {
    var ttl = getTTL();
    var rec = completionCache.get(key);
    var now = nowSec();

    if (Lampa.Storage.field('trakt_enable_logging')) {
      slog('DEBUG - canFinishOnce check:', {
        key: key,
        record: rec,
        ttl: ttl,
        now: now,
        recordAge: rec ? now - rec.ts : null
      });
    }
    if (!rec) return {
      allow: true,
      reason: 'no_record'
    };
    if (now - rec.ts > ttl) {
      // expired
      completionCache["delete"](key);
      return {
        allow: true,
        reason: 'expired'
      };
    }
    if (rec.status === 'finished') return {
      allow: false,
      reason: 'already_finished'
    };
    if (rec.status === 'finishing') return {
      allow: false,
      reason: 'already_finishing'
    };
    // intent within debounce might still be allowed by finish() flow, but finishWithIdempotency reads allow flag
    return {
      allow: true,
      reason: 'has_intent'
    };
  }

  /**
   * Update record and persist
   */
  function markFinished(key, token, status) {
    var rec = {
      ts: nowSec(),
      token: token,
      status: status
    };
    completionCache.set(key, rec);
    persistSessionCache();
    slog('markFinished', key, rec);
  }

  /**
   * Simple per-key mutex using a queue of Promises
   */
  function withPerKeyLock(_x, _x2) {
    return _withPerKeyLock.apply(this, arguments);
  }
  /**
   * Idempotent finisher with limited retries
   * doFinish must perform actual network call; it should throw error with {status} when HTTP error known
   */
  function _withPerKeyLock() {
    _withPerKeyLock = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(key, fn) {
      var queue, release, p, prev;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            queue = lockQueues.get(key);
            if (!queue) {
              queue = [];
              lockQueues.set(key, queue);
            }
            p = new Promise(function (res) {
              return release = res;
            });
            prev = queue.length ? queue[queue.length - 1] : Promise.resolve();
            queue.push(p);
            _context.p = 1;
            _context.n = 2;
            return prev;
          case 2:
            _context.n = 3;
            return fn();
          case 3:
            return _context.a(2, _context.v);
          case 4:
            _context.p = 4;
            release(); // resolve current
            queue.shift(); // remove current
            if (!queue.length) lockQueues["delete"](key);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1,, 4, 5]]);
    }));
    return _withPerKeyLock.apply(this, arguments);
  }
  function finishWithIdempotency(_x3) {
    return _finishWithIdempotency.apply(this, arguments);
  }
  /**
   * Debounced finish intent setter
   */
  function _finishWithIdempotency() {
    _finishWithIdempotency = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref7) {
      var key, token, doFinish, _ref7$logPrefix, logPrefix;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            key = _ref7.key, token = _ref7.token, doFinish = _ref7.doFinish, _ref7$logPrefix = _ref7.logPrefix, logPrefix = _ref7$logPrefix === void 0 ? 'finish' : _ref7$logPrefix;
            return _context3.a(2, withPerKeyLock(key, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var check, delays, lastErr, attempt, res, status, _t;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    check = canFinishOnce(key);
                    slog(logPrefix, 'canFinishOnce', key, check);
                    if (check.allow) {
                      _context2.n = 1;
                      break;
                    }
                    return _context2.a(2, {
                      skipped: true,
                      reason: check.reason
                    });
                  case 1:
                    // set finishing
                    markFinished(key, token, 'finishing');
                    delays = [500, 1500, 4500];
                    lastErr = null;
                    attempt = 0;
                  case 2:
                    if (!(attempt < delays.length)) {
                      _context2.n = 10;
                      break;
                    }
                    _context2.p = 3;
                    _context2.n = 4;
                    return doFinish();
                  case 4:
                    res = _context2.v;
                    // On success 2xx
                    markFinished(key, token, 'finished');
                    return _context2.a(2, {
                      ok: true,
                      status: res && res.status,
                      data: res
                    });
                  case 5:
                    _context2.p = 5;
                    _t = _context2.v;
                    status = _t && _t.status; // Treat 409 as finished without retries
                    if (!(status === 409)) {
                      _context2.n = 6;
                      break;
                    }
                    slog(logPrefix, '409 conflict -> treat as finished, no retries');
                    markFinished(key, token, 'finished');
                    return _context2.a(2, {
                      ok: true,
                      status: 409,
                      conflict: true
                    });
                  case 6:
                    if (!(!status || status >= 500 && status < 600)) {
                      _context2.n = 8;
                      break;
                    }
                    lastErr = _t;
                    slog(logPrefix, "retry attempt ".concat(attempt + 1), {
                      status: status,
                      err: _t
                    });
                    if (!(attempt < delays.length - 1)) {
                      _context2.n = 7;
                      break;
                    }
                    _context2.n = 7;
                    return sleep(delays[attempt]);
                  case 7:
                    return _context2.a(3, 9);
                  case 8:
                    // Other 4xx => no retries
                    slog(logPrefix, 'abort on client error', {
                      status: status,
                      err: _t
                    });
                    // roll back to intent so later we might attempt again if user retriggers after TTL
                    markFinished(key, token, 'intent');
                    return _context2.a(2, {
                      ok: false,
                      status: status,
                      clientError: true
                    });
                  case 9:
                    attempt++;
                    _context2.n = 2;
                    break;
                  case 10:
                    // all retries exhausted -> rollback to intent
                    markFinished(key, token, 'intent');
                    return _context2.a(2, {
                      ok: false,
                      error: lastErr
                    });
                }
              }, _callee2, null, [[3, 5]]);
            }))));
        }
      }, _callee3);
    }));
    return _finishWithIdempotency.apply(this, arguments);
  }
  var intentTimers = new Map(); // key -> timeout id
  function markFinishIntent(key) {
    var token = Lampa.Storage.get('trakt_token');
    var ttl = getTTL();
    var now = nowSec();

    if (Lampa.Storage.field('trakt_enable_logging')) {
      slog('DEBUG - markFinishIntent called:', {
        key: key,
        tokenAvailable: !!token,
        existingRecord: completionCache.get(key),
        timestamp: new Date().toISOString()
      });
    }
    var rec = completionCache.get(key);
    var isFresh = rec && now - rec.ts <= ttl;

    // Do not downgrade terminal states to intent inside TTL window.
    if (isFresh && (rec.status === 'finished' || rec.status === 'finishing')) {
      slog('markFinishIntent skipped (terminal state preserved)', key, rec);
      return {
        skipped: true,
        reason: rec.status
      };
    }
    var next = {
      ts: now,
      token: token,
      status: 'intent'
    };
    completionCache.set(key, next);
    persistSessionCache();

    // debounce persist bursts
    var wait = getDebounceMs();
    if (intentTimers.has(key)) clearTimeout(intentTimers.get(key));
    var t = setTimeout(function () {
      var cur = completionCache.get(key);
      // keep latest ts fresh only for intent state
      if (cur && cur.status === 'intent') {
        completionCache.set(key, _objectSpread2(_objectSpread2({}, cur), {}, {
          ts: nowSec()
        }));
        persistSessionCache();
        slog('markFinishIntent debounced persisted', key);
      }
    }, wait);
    intentTimers.set(key, t);
    slog('markFinishIntent', key, next);
    return {
      ok: true
    };
  }

  /**
   * Compute finish for given media via API:
   * - movie -> /sync/history
   * - show episode -> /sync/history with show/episodes derived by hash/season/episode
   * This function is the only entry point that sends final Trakt request.
   */
  function finish(_x4) {
    return _finish.apply(this, arguments);
  }
  /**
   * Определяет тип контента (фильм или сериал) на основе данных карточки
   * @param {Object} card - Карточка контента
   * @returns {string} 'movie' или 'show'
   */
  function _finish() {
    _finish = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(media) {
      var token, key, doFinish, result;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            token = Lampa.Storage.get('trakt_token');
            if (Lampa.Storage.field('trakt_enable_logging')) {
              slog('DEBUG - finish function called:', {
                mediaId: media.id,
                mediaHash: media.hash,
                mediaType: getContentType$1(media),
                tokenAvailable: !!token,
                timestamp: new Date().toISOString()
              });
            }
            if (token) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, {
              skipped: true,
              reason: 'no_token'
            });
          case 1:
            key = getCompletionKey(media); // START -- RACE CONDITION FIX
            if (!requestInProgress[key]) {
              _context5.n = 2;
              break;
            }
            slog('Request for key is already in progress, skipping.', key);
            return _context5.a(2, {
              skipped: true,
              reason: 'in_progress'
            });
          case 2:
            requestInProgress[key] = true;
            // END -- RACE CONDITION FIX
            _context5.p = 3;
            if (Lampa.Storage.field('trakt_enable_logging')) {
              slog('DEBUG - finish function key:', {
                key: key,
                mediaIds: media.ids,
                mediaId: media.id,
                mediaHash: media.hash
              });
            }
            doFinish = /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
                var type, tmdbId, search, e, traktId, res, _tmdbId, _search, _e, traktShowId, season, episode, seasons, _e2, last, titleCandidates, found, _iterator3, _step3, s, _iterator4, _step4, ep, _iterator5, _step5, title, epHash, _e3, _res, _t2, _t3, _t4;
                return _regenerator().w(function (_context4) {
                  while (1) switch (_context4.n) {
                    case 0:
                      // replicate existing logic but only final "history" call
                      type = getContentType$1(media); // if movie -> addToHistory({method:'movie', id, ids})
                      if (!(type === 'movie')) {
                        _context4.n = 4;
                        break;
                      }
                      // look up trakt id if needed
                      tmdbId = media.id || media.ids && media.ids.tmdb;
                      _context4.n = 1;
                      return api$1.get("/search/tmdb/".concat(tmdbId, "?type=movie"));
                    case 1:
                      search = _context4.v;
                      if (!(!search || !search.length || !search[0].movie || !search[0].movie.ids)) {
                        _context4.n = 2;
                        break;
                      }
                      e = new Error('Movie not found');
                      e.status = 404;
                      throw e;
                    case 2:
                      traktId = search[0].movie.ids.trakt;
                      _context4.n = 3;
                      return api$1.addToHistory({
                        method: 'movie',
                        id: tmdbId,
                        ids: _objectSpread2(_objectSpread2({}, media.ids || {}), {}, {
                          trakt: traktId
                        })
                      });
                    case 3:
                      res = _context4.v;
                      return _context4.a(2, {
                        status: 200,
                        data: res
                      });
                    case 4:
                      // show episode
                      _tmdbId = media.id || media.ids && media.ids.tmdb;
                      _context4.n = 5;
                      return api$1.get("/search/tmdb/".concat(_tmdbId, "?type=show"));
                    case 5:
                      _search = _context4.v;
                      if (!(!_search || !_search.length || !_search[0].show || !_search[0].show.ids)) {
                        _context4.n = 6;
                        break;
                      }
                      _e = new Error('Show not found');
                      _e.status = 404;
                      throw _e;
                    case 6:
                      traktShowId = _search[0].show.ids.trakt; // Prefer season/episode from media; otherwise try to resolve by timeline hash if available
                      season = media.season_number || media.season || media.seasonNumber;
                      episode = media.episode_number || media.episode || media.episodeNumber;
                      if (!(!season || !episode)) {
                        _context4.n = 30;
                        break;
                      }
                      _context4.n = 7;
                      return api$1.get("/shows/".concat(traktShowId, "/seasons?extended=episodes"));
                    case 7:
                      seasons = _context4.v;
                      if (seasons) {
                        _context4.n = 8;
                        break;
                      }
                      _e2 = new Error('Seasons not found');
                      _e2.status = 404;
                      throw _e2;
                    case 8:
                      // Try map by timeline hash using all known title variants.
                      last = Lampa.Storage.get('trakt_last_card', media) || media;
                      titleCandidates = collectTitleCandidates(media, last);
                      _iterator3 = _createForOfIteratorHelper(seasons);
                      _context4.p = 9;
                      _iterator3.s();
                    case 10:
                      if ((_step3 = _iterator3.n()).done) {
                        _context4.n = 27;
                        break;
                      }
                      s = _step3.value;
                      if (s.episodes) {
                        _context4.n = 11;
                        break;
                      }
                      return _context4.a(3, 26);
                    case 11:
                      _iterator4 = _createForOfIteratorHelper(s.episodes);
                      _context4.p = 12;
                      _iterator4.s();
                    case 13:
                      if ((_step4 = _iterator4.n()).done) {
                        _context4.n = 22;
                        break;
                      }
                      ep = _step4.value;
                      _iterator5 = _createForOfIteratorHelper(titleCandidates);
                      _context4.p = 14;
                      _iterator5.s();
                    case 15:
                      if ((_step5 = _iterator5.n()).done) {
                        _context4.n = 17;
                        break;
                      }
                      title = _step5.value;
                      epHash = Lampa.Utils.hash([s.number, s.number > 10 ? ':' : '', ep.number, title].join(''));
                      if (!(media.hash && epHash === media.hash)) {
                        _context4.n = 16;
                        break;
                      }
                      season = s.number;
                      episode = ep.number;
                      found = true;
                      return _context4.a(3, 17);
                    case 16:
                      _context4.n = 15;
                      break;
                    case 17:
                      _context4.n = 19;
                      break;
                    case 18:
                      _context4.p = 18;
                      _t2 = _context4.v;
                      _iterator5.e(_t2);
                    case 19:
                      _context4.p = 19;
                      _iterator5.f();
                      return _context4.f(19);
                    case 20:
                      if (!found) {
                        _context4.n = 21;
                        break;
                      }
                      return _context4.a(3, 22);
                    case 21:
                      _context4.n = 13;
                      break;
                    case 22:
                      _context4.n = 24;
                      break;
                    case 23:
                      _context4.p = 23;
                      _t3 = _context4.v;
                      _iterator4.e(_t3);
                    case 24:
                      _context4.p = 24;
                      _iterator4.f();
                      return _context4.f(24);
                    case 25:
                      if (!found) {
                        _context4.n = 26;
                        break;
                      }
                      return _context4.a(3, 27);
                    case 26:
                      _context4.n = 10;
                      break;
                    case 27:
                      _context4.n = 29;
                      break;
                    case 28:
                      _context4.p = 28;
                      _t4 = _context4.v;
                      _iterator3.e(_t4);
                    case 29:
                      _context4.p = 29;
                      _iterator3.f();
                      return _context4.f(29);
                    case 30:
                      if (!(!season || !episode)) {
                        _context4.n = 31;
                        break;
                      }
                      slog('Episode index not resolved', {
                        tmdbId: _tmdbId,
                        traktShowId: traktShowId,
                        hash: media.hash,
                        mediaTitles: collectTitleCandidates(media),
                        lastCardTitles: collectTitleCandidates(Lampa.Storage.get('trakt_last_card', null)),
                        hasMediaIds: !!(media && media.ids)
                      });
                      _e3 = new Error('Episode index not resolved');
                      _e3.status = 422;
                      throw _e3;
                    case 31:
                      _context4.n = 32;
                      return api$1.addToHistory({
                        method: 'show',
                        id: _tmdbId,
                        ids: _objectSpread2(_objectSpread2({}, media.ids || {}), {}, {
                          trakt: traktShowId
                        }),
                        season_number: season,
                        episodes: [{
                          number: episode,
                          watched_at: new Date().toISOString()
                        }]
                      });
                    case 32:
                      _res = _context4.v;
                      return _context4.a(2, {
                        status: 200,
                        data: _res
                      });
                    case 33:
                      return _context4.a(2);
                  }
                }, _callee4, null, [[14, 18, 19, 20], [12, 23, 24, 25], [9, 28, 29, 30]]);
              }));
              return function doFinish() {
                return _ref9.apply(this, arguments);
              };
            }();
            _context5.n = 4;
            return finishWithIdempotency({
              key: key,
              token: token,
              doFinish: doFinish,
              logPrefix: 'finish'
            });
          case 4:
            result = _context5.v;
            slog('finish result', key, result);
            return _context5.a(2, result);
          case 5:
            _context5.p = 5;
            delete requestInProgress[key];
            return _context5.f(5);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[3,, 5, 6]]);
    }));
    return _finish.apply(this, arguments);
  }
  function getContentType$1(card) {
    if (!card) return 'movie';
    if (card.method === 'tv' || card.method === 'show') return 'show';
    if (card.card_type === 'tv' || card.card_type === 'show') return 'show';
    if (card.media_type === 'tv' || card.media_type === 'show') return 'show';
    if (card.original_name || card.name) return 'show';
    if (card.episode_run_time || card.first_air_date || card.created_by || card.number_of_seasons || card.number_of_episodes) {
      return 'show';
    }
    return 'movie';
  }
  var isAddingShowToWatching = false;
  var isInitialized$1 = false;

  /**
   * Модуль отслеживания просмотра в Trakt.TV
   */
  var watching = {
    /**
     * Проверяет, включено ли логирование
     * @returns {boolean} true если логирование включено
     */
    isLoggingEnabled: function isLoggingEnabled() {
      return Lampa.Storage.field('trakt_enable_logging');
    },
    /**
     * Инициализирует обработчики событий отслеживания просмотра
     */
    init: function init() {
      if (isInitialized$1) {
        slog('watching.init called while already initialized, skipping');
        return;
      }
      isInitialized$1 = true;

      // Restore cache from session
      loadSessionCache();
      loadHashMetaCache();
      slog('watching.init');

      if (window.Lampa && Lampa.Timeline && Lampa.Timeline.listener) {
        Lampa.Timeline.listener.follow('update', this.processTimelineUpdate.bind(this));
        slog('Timeline listener attached');
      }

      if (window.Lampa && Lampa.Player && Lampa.Player.listener) {
        Lampa.Player.listener.follow('start', this.onPlayerStart.bind(this));
        slog('Player listener attached');
      }

      if (window.Lampa && Lampa.Listener) {
        Lampa.Listener.follow('torrent_file', this.onTorrentFileList.bind(this));
      }
    },
    /**
     * Обработчик списка файлов торрента — заполняет hashMetaCache для всего сезона
     */
    onTorrentFileList: function onTorrentFileList(e) {
      if (!e || !Array.isArray(e.items) || !e.items.length) return;
      // Try multiple ways to get the active card
      var act = Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active();
      var card = act && (act.card_data || act.card || act.movie || act.object);
      // Fallback: try card from e itself or from first item with card data
      if (!card && e.card) card = e.card;
      if (!card) {
        try {
          Lampa.Storage.set('trakt_debug_torrent', {
            ts: new Date().toISOString(),
            show: 'card=null (activity=' + (act ? JSON.stringify(Object.keys(act)).slice(0,80) : 'null') + ')',
            syncAgo: '?',
            syncTriggered: false,
            files: []
          });
        } catch(dbgErr) {}
        return;
      }
      var tmdbId = String(card.id);
      // Build episode→hash map from current file list and populate hashMetaCache
      var episodeHashes = {};
      e.items.forEach(function(item) {
        var hash = item.timeline && item.timeline.hash;
        var season = item.season;
        var episode = item.episode;
        if (!hash || !season || !episode) return;
        setHashMeta(hash, { card: card, season: season, episode: episode, ids: card.ids });
        episodeHashes[String(season) + '-' + String(episode)] = hash;
      });
      var syncAgoSec = Math.round((Date.now() - _lastPlaybackSyncAt) / 1000);
      var syncTriggered = syncAgoSec > 120;
      // Apply cached Trakt playback progress directly using hashes from current file list
      var views = Lampa.Storage.get(getFileViewKey()) || {};
      var playbackUpdates = [];
      _lastTraktPlayback.forEach(function(pb) {
        if (!pb || pb.type !== 'episode' || !pb.show || !pb.episode) return;
        if (String(pb.show.ids && pb.show.ids.tmdb) !== tmdbId) return;
        var key = String(pb.episode.season) + '-' + String(pb.episode.number);
        var hash = episodeHashes[key];
        if (!hash) return;
        var traktPct = parseFloat(pb.progress || 0);
        if (!traktPct) return;
        var localPct = views[hash] ? parseFloat(views[hash].percent || 0) : 0;
        if (traktPct > localPct) {
          var dur = pb.episode.runtime ? pb.episode.runtime * 60 : 0;
          playbackUpdates.push({ hash: hash, percent: traktPct, time: dur ? Math.round(traktPct / 100 * dur) : 0, duration: dur });
        }
      });
      if (playbackUpdates.length) {
        setTimeout(function() {
          playbackUpdates.forEach(function(u) {
            setFileViewProgress(u.hash, u.percent, u.time, u.duration);
          });
        }, 0);
      }
      ensureWatchedCache().then(function() {
        views = Lampa.Storage.get(getFileViewKey()) || {};
        var updates = [];
        var debugFiles = [];
        e.items.forEach(function(item) {
          var hash = item.timeline && item.timeline.hash;
          var season = item.season;
          var episode = item.episode;
          if (!season || !episode) return;
          var localPct = hash && views[hash] ? Math.round(parseFloat(views[hash].percent || 0)) : 0;
          var traktWatched = _watchedEpisodesCache.has(tmdbId + '-' + String(season) + '-' + String(episode));
          var traktPct = null;
          for (var pi = 0; pi < _lastTraktPlayback.length; pi++) {
            var pb = _lastTraktPlayback[pi];
            if (pb && pb.type === 'episode' && pb.show && pb.episode &&
                String(pb.show.ids && pb.show.ids.tmdb) === tmdbId &&
                String(pb.episode.season) === String(season) &&
                String(pb.episode.number) === String(episode)) {
              traktPct = Math.round(parseFloat(pb.progress || 0));
              break;
            }
          }
          debugFiles.push({ s: season, e: episode, hash: hash ? hash.slice(0, 10) : null, 'local%': localPct, 'trakt%': traktPct, traktWatched: traktWatched });
          if (hash && traktWatched && localPct < 90) updates.push(hash);
        });
        try {
          Lampa.Storage.set('trakt_debug_torrent', {
            ts: new Date().toISOString(),
            show: (card.original_title || card.title || card.name || '?') + ' (tmdb:' + tmdbId + ')',
            syncAgo: syncAgoSec + 's',
            syncTriggered: syncTriggered,
            playbackApplied: playbackUpdates.length,
            files: debugFiles
          });
        } catch(dbgErr) {}
        if (updates.length) {
          setTimeout(function() {
            updates.forEach(function(hash) {
              setFileViewProgress(hash, 100, 0, 0);
            });
          }, 0);
        }
      });
      if (syncTriggered) syncPlaybackFromTrakt();
    },
    /**
     * Обработчик события старта плеера
     * @param {Object} data - Данные события
     */
    onPlayerStart: function onPlayerStart(data) {
      if (this.isLoggingEnabled()) {
        slog('Player start event received', data);
      }
      var activityCard = Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() &&
        (Lampa.Activity.active().card_data || Lampa.Activity.active().card || Lampa.Activity.active().movie);
      var card = data.card || activityCard;
      if (this.isLoggingEnabled()) {
        slog('Card determined in onPlayerStart', card);
      }
      if (!card) {
        if (this.isLoggingEnabled()) {
          slog('No card found in onPlayerStart');
        }
        return;
      }

      Lampa.Storage.set('trakt_last_card', card);
      if (this.isLoggingEnabled()) {
        slog('Card saved to storage', card);
      }

      var timeline = data && data.timeline;
      var hash = timeline && timeline.hash;
      if (hash) {
        var seData = extractSeasonEpisode(data);
        var seCard = extractSeasonEpisode(card);
        var seActivity = extractSeasonEpisode(activityCard);
        var se = {
          season: seData.season || seCard.season || seActivity.season,
          episode: seData.episode || seCard.episode || seActivity.episode
        };
        setHashMeta(hash, {
          card: card,
          season: se.season,
          episode: se.episode,
          ids: card && card.ids
        });
        if (this.isLoggingEnabled()) {
          slog('Hash meta cached from player start', {
            hash: hash,
            season: se.season,
            episode: se.episode
          });
        }
      }
    },
    /**
     * Обробник оновлень Timeline
     * @param {Object} data - Данные события
     */
    processTimelineUpdate: function processTimelineUpdate(data) {
      slog('processTimelineUpdate called with data:', data);
      if (this.isLoggingEnabled()) {
        slog('Timeline update received', data);
      }

      var enableWatching = Lampa.Storage.field('trakt_enable_watching');
      slog('trakt_enable_watching setting:', enableWatching);
      if (!enableWatching) {
        if (this.isLoggingEnabled()) {
          slog('Watching is disabled by settings');
        }
        return;
      }
      if (!data || !data.data || !data.data.hash || !data.data.road) {
        if (this.isLoggingEnabled()) {
          slog('Invalid data received', data);
        }
        slog('Invalid data - data:', data);
        slog('Invalid data - data.data:', data && data.data);
        slog('Invalid data - data.data.hash:', data && data.data && data.data.hash);
        slog('Invalid data - data.data.road:', data && data.data && data.data.road);
        return;
      }
      var hash = data.data.hash;
      var road = data.data.road || {};
      var percent = parseFloat(road.percent || 0);
      if (isNaN(percent)) percent = 0;
      var token = Lampa.Storage.get('trakt_token');
      var minProgress = parseInt(Lampa.Storage.field('trakt_min_progress') || config.minProgress);
      window.last_timeline_event = {
        data: {
          hash: hash,
          road: road
        },
        ts: Date.now()
      };
      slog('Timeline update data:', {
        hash: hash,
        percent: percent,
        token: !!token,
        minProgress: minProgress
      });
      if (this.isLoggingEnabled()) {
        slog('Processing timeline update', {
          hash: hash,
          percent: percent,
          token: !!token,
          minProgress: minProgress
        });
      }
      if (!token) {
        if (this.isLoggingEnabled()) {
          slog('No token found, skipping update');
        }
        slog('No token found');
        return;
      }
      var card = this.getCurrentCard();
      var meta = getHashMeta(hash);
      if (!card && meta && meta.card) {
        card = meta.card;
        if (this.isLoggingEnabled()) {
          slog('Card restored from hash meta cache', card);
        }
      }
      if (card && hash) {
        var se = extractSeasonEpisode(card);
        var cachedMeta = meta || getHashMeta(hash);
        var seasonValue = se.season || cachedMeta && cachedMeta.season;
        var episodeValue = se.episode || cachedMeta && cachedMeta.episode;
        var idsValue = card.ids || cachedMeta && cachedMeta.ids;
        setHashMeta(hash, {
          card: card,
          season: seasonValue,
          episode: episodeValue,
          ids: idsValue
        });
        if (this.isLoggingEnabled() && (!se.season || !se.episode) && cachedMeta && (cachedMeta.season || cachedMeta.episode)) {
          slog('Hash meta preserved season/episode from cache', {
            hash: hash,
            season: seasonValue,
            episode: episodeValue
          });
        }
      }
      slog('Card from getCurrentCard:', card);
      if (!card) {
        if (this.isLoggingEnabled()) {
          slog('No card found, skipping update');
        }
        slog('No card found, skipping update');
        return;
      }

      slog('Calling checkAndAddToShow');
      this.checkAndAddToShow(card, hash, percent, token);

      slog('Checking if should finish with idempotency, percent:', percent, 'minProgress:', minProgress);
      var watchedByPercent = (typeof percent === 'number' ? percent : 0) >= minProgress;
      var watchedByTime = road && road.time && road.duration ? road.time / road.duration * 100 >= minProgress : false;
      if (watchedByPercent || watchedByTime) {
        var media = Object.assign({}, card, {
          hash: hash
        });
        if (meta) {
          if (!media.season_number && meta.season) media.season_number = meta.season;
          if (!media.episode_number && meta.episode) media.episode_number = meta.episode;
          if (!media.ids && meta.ids) media.ids = meta.ids;
        }

        if (this.isLoggingEnabled()) {
          slog('DEBUG - Timeline route media:', {
            cardId: card.id,
            cardType: getContentType$1(card),
            percent: percent,
            minProgress: minProgress,
            currentHash: hash,
            mediaHash: media.hash
          });
        }
        var key = getCompletionKey(media);

        if (this.isLoggingEnabled()) {
          slog('DEBUG - Timeline route key generation:', {
            key: key,
            mediaIds: media.ids,
            mediaId: media.id,
            mediaHash: media.hash,
            contentType: getContentType$1(media)
          });
        }
        slog('Timeline threshold reached, finish intent and attempt', {
          key: key,
          percent: percent
        });
        // Mark intent quickly so event-driven finishes coalesce
        markFinishIntent(key);
        // Fire idempotent finish
        finish(media)["catch"](function (e) {
          return slog('finish error', e);
        });
      } else {
        slog('Below minProgress, no finish');
      }
    },
    /**
     * Получает текущую карточку
     * @returns {Object|null} Текущая карточка
     */
    getCurrentCard: function getCurrentCard() {
      var card = Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && (Lampa.Activity.active().card_data || Lampa.Activity.active().card || Lampa.Activity.active().movie) || null;
      if (!card) card = Lampa.Storage.get('trakt_last_card', null);

      slog('getCurrentCard - Activity.active():', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active());
      slog('getCurrentCard - card_data:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().card_data);
      slog('getCurrentCard - card:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().card);
      slog('getCurrentCard - movie:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().movie);
      slog('getCurrentCard - trakt_last_card from storage:', Lampa.Storage.get('trakt_last_card', null));
      slog('getCurrentCard - final card:', card);
      if (this.isLoggingEnabled()) {
        slog('Current card determined', card);
      }
      return card;
    },
    /**
     * Проверяет, нужно ли добавить сериал в "Смотрю"
     * @param {Object} card - Карточка сериала
     * @param {string} hash - Хеш эпизода
     * @param {number} percent - Процент просмотра
     * @param {string} token - Токен авторизации
     */
    checkAndAddToShow: function checkAndAddToShow(card, hash, percent, token) {
      var originalName = card.original_name || card.name || card.original_title || card.title;
      var firstEpisodeHash = Lampa.Utils.hash('11' + originalName);

      slog('checkAndAddToShow called with:', {
        card: card,
        hash: hash,
        percent: percent,
        originalName: originalName,
        firstEpisodeHash: firstEpisodeHash
      });
      if (this.isLoggingEnabled()) {
        slog('Checking if show should be added to watching', {
          card: card,
          hash: hash,
          percent: percent,
          firstEpisodeHash: firstEpisodeHash,
          shouldAdd: hash === firstEpisodeHash
        });
      }
      var shouldAdd = hash === firstEpisodeHash;
      slog('Should add show to watching:', shouldAdd);
      if (shouldAdd) {
        slog('Adding show to watching');
        this.addShowToWatching(card, token);
      } else {
        slog('Not adding show to watching');
      }
    },
    /**
     * Добавляет сериал в "Смотрю"
     * @param {Object} card - Карточка сериала
     * @param {string} token - Токен авторизации
     */
    addShowToWatching: function addShowToWatching(card, token) {
      var _this = this;
      if (isAddingShowToWatching) {
        slog('addShowToWatching called while already adding, skipping');
        return;
      }
      isAddingShowToWatching = true;
      if (this.isLoggingEnabled()) {
        slog('Adding show to watching', card);
      }

      slog('addShowToWatching called with card:', card);
      var tmdbId = card.id || card.ids && card.ids.tmdb;
      slog('Determined tmdbId:', tmdbId);
      if (!tmdbId) {
        slog('No tmdbId found, returning');
        return;
      }

      var contentType = getContentType$1(card);
      slog('Determined content type:', contentType);

      slog('Searching for content by tmdbId:', tmdbId, 'type:', contentType);
      api$1.get("/search/tmdb/".concat(tmdbId, "?type=").concat(contentType)).then(function (response) {
        slog('Search response:', response);
        if (response && response.length > 0) {
          var item = response[0];
          var traktId = item.show && item.show.ids.trakt || item.movie && item.movie.ids.trakt;
          slog('Found traktId:', traktId);

          var body = {};
          if (contentType === 'show') {
            body.shows = [{
              ids: _objectSpread2({
                trakt: traktId
              }, card.ids),
              watched_at: new Date().toISOString()
            }];
          } else {
            body.movies = [{
              ids: _objectSpread2({
                trakt: traktId
              }, card.ids),
              watched_at: new Date().toISOString()
            }];
          }
          slog('Body for adding content to watching:', body);
          if (_this.isLoggingEnabled()) {
            slog('Sending request to add content to watching', body);
          }
          return api$1.get('/sync/watchlist', body);
        } else {
          slog('No show found or no traktId in response');
        }
      })["catch"](function (error) {
        logWarn('Failed to add show to watching', error, {
          debugOnly: true
        });
      })["finally"](function () {
          isAddingShowToWatching = false;
      });
    },
    /**
     * Помечает намерение завершить (события onEnded/onStop/onHidden и пр.)
     * Используется вместо прямых финальных запросов.
     */
    markFinishIntent: markFinishIntent,
    /**
     * Получить кешированные метаданные по hash
     */
    getMetaByHash: getHashMeta,
    /**
     * Запомнить метаданные по hash
     */
    rememberHashMeta: setHashMeta,
    /**
     * Публичный доступ к генератору completion key
     */
    getCompletionKey: getCompletionKey,
    /**
     * Публичный доступ к определению типа контента
     */
    getContentType: getContentType$1,
    /**
     * Единственный путь отправки финального запроса с идемпотентностью
     */
    finish: finish,
    scrobblePause: function scrobblePause(media, percent) {
      if (!percent || percent <= 0) return Promise.resolve();
      var token = Lampa.Storage.get('trakt_token');
      if (!token) return Promise.resolve();
      var contentType = this.getContentType(media);
      var ids = media.ids || {};
      var body = contentType === 'movie'
        ? { progress: percent, movie: { ids: ids } }
        : { progress: percent,
            show: { ids: ids },
            episode: {
              season: media.season_number || media.season,
              number: media.episode_number || media.episode
            }};
      return requestApi('POST', '/scrobble/pause', body).then(function() {
        try {
          Lampa.Storage.set('trakt_debug_scrobble', {
            ts: new Date().toISOString(),
            percent: percent,
            hash: media.hash || null,
            season: media.season_number || media.season || null,
            episode: media.episode_number || media.episode || null,
            status: 'sent'
          });
        } catch(e) {}
      }).catch(function(err) {
        try {
          Lampa.Storage.set('trakt_debug_scrobble', {
            ts: new Date().toISOString(),
            percent: percent,
            hash: media.hash || null,
            status: 'error',
            error: String(err)
          });
        } catch(e2) {}
      });
    },
    /**
     * Находит информацию об эпизоде по хешу
     * @param {Object} card - Карточка сериала
     * @param {string} hash - Хеш эпизода
     * @param {Array} seasons - Сезоны сериала
     * @returns {Object|null} Информация об эпизоде
     */
    findEpisodeByHash: function findEpisodeByHash(card, hash, seasons) {
      var originalName = card.original_name || card.name || card.original_title || card.title;

      slog('findEpisodeByHash called with:', {
        card: card,
        hash: hash,
        seasons: seasons && seasons.length
      });
      slog('originalName:', originalName);
      for (var i = 0; i < seasons.length; i++) {
        var season = seasons[i];
        if (!season.episodes) continue;
        for (var j = 0; j < season.episodes.length; j++) {
          var episode = season.episodes[j];
          var episodeHashStr = [season.number, season.number > 10 ? ':' : '', episode.number, originalName].join('');
          var episodeHash = Lampa.Utils.hash(episodeHashStr);

              slog('Checking episode:', {
            season: season.number,
            episode: episode.number,
            episodeHashStr: episodeHashStr,
            episodeHash: episodeHash,
            ids: episode.ids
          });
          if (episodeHash === hash && episode.ids && episode.ids.trakt) {
            var result = {
              traktId: episode.ids.trakt,
              season: season.number,
              episode: episode.number
            };
            slog('Found matching episode:', result);
            return result;
          }
        }
      }
      slog('No matching episode found');
      return null;
    }
  };

  function getFileViewKey() {
    try {
      var permit = Lampa.Account && Lampa.Account.Permit;
      var profileId = permit && permit.account && permit.account.profile && permit.account.profile.id;
      if (profileId) return 'file_view_' + profileId;
    } catch(e) {}
    try {
      var keys = Object.keys(localStorage);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].indexOf('file_view_') === 0 && keys[i].length > 'file_view_'.length) return keys[i];
      }
    } catch(e2) {}
    return 'file_view';
  }

  var _lastPlaybackSyncAt = 0;
  var _lastTraktPlayback = [];
  function setFileViewProgress(hash, percent, time, duration) {
    try {
      var key = getFileViewKey();
      var views = Lampa.Storage.get(key) || {};
      views[hash] = { percent: percent, time: time || 0, duration: duration || 0 };
      Lampa.Storage.set(key, views);
    } catch(e) {}
  }
  function syncPlaybackFromTrakt() {
    var token = Lampa.Storage.get('trakt_token');
    if (!token) return;
    _lastPlaybackSyncAt = Date.now();
    requestApi('GET', '/sync/playback?extended=full').then(function(items) {
      _lastTraktPlayback = Array.isArray(items) ? items : [];
      var debugItems = [];
      if (Array.isArray(items)) {
        var fileViewKey = getFileViewKey();
        var views = Lampa.Storage.get(fileViewKey) || {};
        items.forEach(function(item) {
          if (!item || !item.progress) return;
          var percent = parseFloat(item.progress);
          if (!percent) return;
          var hash, durationSec, debugLabel;
          if (item.type === 'episode' && item.show && item.episode) {
            var showTmdb = item.show.ids && item.show.ids.tmdb;
            var season = item.episode.season;
            var epNum = item.episode.number;
            var runtime = item.episode.runtime;
            if (!showTmdb || !season || !epNum) return;
            hash = findHashForEpisode(showTmdb, season, epNum);
            durationSec = runtime ? runtime * 60 : 0;
            debugLabel = 'tmdb:' + showTmdb + ' S' + season + 'E' + epNum;
          } else if (item.type === 'movie' && item.movie) {
            var movieTmdb = item.movie.ids && item.movie.ids.tmdb;
            var movieRuntime = item.movie.runtime;
            if (!movieTmdb) return;
            var movieTmdbStr = String(movieTmdb);
            hashMetaCache.forEach(function(meta, h) {
              if (!meta || !meta.card || String(meta.card.id) !== movieTmdbStr) return;
              var prevMeta = hash ? hashMetaCache.get(hash) : null;
              if (!prevMeta || (meta.ts || 0) > (prevMeta.ts || 0)) hash = h;
            });
            durationSec = movieRuntime ? movieRuntime * 60 : 0;
            debugLabel = 'movie tmdb:' + movieTmdb;
          }
          if (!hash) {
            debugItems.push({ label: debugLabel, traktPct: percent, action: 'no_hash' });
            return;
          }
          var localPct = views[hash] ? parseFloat(views[hash].percent || 0) : 0;
          if (percent > localPct) {
            var timeSec = durationSec ? Math.round(percent / 100 * durationSec) : 0;
            try {
              setFileViewProgress(hash, percent, timeSec, durationSec);
              debugItems.push({ label: debugLabel, hash: hash, traktPct: percent, localPct: localPct, action: 'updated' });
            } catch(e) {
              debugItems.push({ label: debugLabel, hash: hash, traktPct: percent, localPct: localPct, action: 'error', error: String(e) });
            }
          } else {
            debugItems.push({ label: debugLabel, hash: hash, traktPct: percent, localPct: localPct, action: 'skipped_local_newer' });
          }
        });
      }
      try {
        var traktRaw = (Array.isArray(items) ? items : []).slice(0, 30).map(function(pb) {
          if (!pb) return null;
          if (pb.type === 'episode' && pb.show && pb.episode) {
            return {
              show: (pb.show.title || '') + ' (tmdb:' + (pb.show.ids && pb.show.ids.tmdb || '?') + ')',
              ep: 'S' + pb.episode.season + 'E' + pb.episode.number,
              pct: Math.round(parseFloat(pb.progress || 0)),
              paused_at: pb.paused_at ? pb.paused_at.replace('T',' ').slice(0,19) : null
            };
          }
          if (pb.type === 'movie' && pb.movie) {
            return {
              show: (pb.movie.title || '') + ' (tmdb:' + (pb.movie.ids && pb.movie.ids.tmdb || '?') + ')',
              ep: 'movie',
              pct: Math.round(parseFloat(pb.progress || 0)),
              paused_at: pb.paused_at ? pb.paused_at.replace('T',' ').slice(0,19) : null
            };
          }
          return null;
        }).filter(Boolean);
        Lampa.Storage.set('trakt_debug_sync', {
          ts: new Date().toISOString(),
          total: Array.isArray(items) ? items.length : 0,
          items: debugItems.slice(0, 20),
          traktRaw: traktRaw
        });
      } catch(e) {}
    }).catch(function(err) {
      try {
        Lampa.Storage.set('trakt_debug_sync', {
          ts: new Date().toISOString(),
          total: 0,
          items: [],
          error: String(err)
        });
      } catch(e) {}
    });
  }

  var isInitialized = false;
  var API_MISSING_LOG_KEY = 'events:api-missing';
  function resolveUpnextProgress() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var watched = Number(data.trakt_upnext_watched);
    var total = Number(data.trakt_upnext_total);
    var text = (data.trakt_upnext_progress || '').toString().trim();
    var safeWatched = Number.isFinite(watched) ? watched : 0;
    var safeTotal = Number.isFinite(total) ? total : 0;
    if (!text && safeTotal > 0) {
      text = "".concat(safeWatched, "/").concat(safeTotal);
    }
    if ((!safeWatched || !safeTotal) && text.indexOf('/') > -1) {
      var parts = text.split('/');
      var parsedWatched = Number(parts[0]);
      var parsedTotal = Number(parts[1]);
      if (Number.isFinite(parsedWatched) && parsedWatched >= 0) safeWatched = parsedWatched;
      if (Number.isFinite(parsedTotal) && parsedTotal > 0) safeTotal = parsedTotal;
    }
    if (!text) return null;
    var percent = safeTotal > 0 ? Math.max(0, Math.min(100, Math.round(safeWatched / safeTotal * 100))) : null;
    return {
      text: text,
      percent: percent
    };
  }
  function renderUpnextProgressBadge(cardInstance) {
    if (!cardInstance || !cardInstance.data || !cardInstance.render) return;
    var progress = resolveUpnextProgress(cardInstance.data);
    if (!progress) return;
    var cardNode = cardInstance.render(true);
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardView) return;
    var wrap = cardView.querySelector('.card-watched.trakt-upnext-watched');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'card-watched trakt-upnext-watched';
      wrap.innerHTML = '<div class="card-watched__inner"><div class="card-watched__body"></div></div>';
      cardView.insertBefore(wrap, cardView.firstChild);
    }
    var body = wrap.querySelector('.card-watched__body');
    if (!body) return;
    var row = body.querySelector('.card-watched__item.trakt-upnext-watched__item');
    if (!row) {
      row = document.createElement('div');
      row.className = 'card-watched__item trakt-upnext-watched__item';
      row.innerHTML = '<span></span><div class="time-line"><div></div></div>';
      body.innerHTML = '';
      body.appendChild(row);
    }
    var title = row.querySelector('span');
    if (title) title.textContent = progress.text;
    var bar = row.querySelector('.time-line > div');
    if (bar) bar.style.width = "".concat(progress.percent || 0, "%");
  }
  var _watchedCache = null;
  var _watchedCachePromise = null;

  var _UPCOMING_MOVIE_KEY = 'trakt_upcoming_movie_ids';
  function getUpcomingMovieIds() {
    try { var r = Lampa.Storage.get(_UPCOMING_MOVIE_KEY); return r ? new Set(JSON.parse(r)) : new Set(); } catch(e) { return new Set(); }
  }
  function saveUpcomingMovieIds(ids) {
    try { Lampa.Storage.set(_UPCOMING_MOVIE_KEY, JSON.stringify(Array.from(ids))); } catch(e) {}
  }
  var _UPCOMING_MOVIE_DATES_KEY = 'trakt_upcoming_movie_dates';
  function getUpcomingMovieDates() {
    try { var r = localStorage.getItem(_UPCOMING_MOVIE_DATES_KEY); return r ? JSON.parse(r) : {}; } catch(e) { return {}; }
  }
  function saveUpcomingMovieDates(map) {
    try { localStorage.setItem(_UPCOMING_MOVIE_DATES_KEY, JSON.stringify(map)); } catch(e) {}
  }
  var _SOON_MOVIE_KEY = 'trakt_soon_movie_ids';
  function getSoonMovieIds() {
    try { var r = localStorage.getItem(_SOON_MOVIE_KEY); return r ? new Set(JSON.parse(r)) : new Set(); } catch(e) { return new Set(); }
  }
  function saveSoonMovieIds(ids) {
    try { localStorage.setItem(_SOON_MOVIE_KEY, JSON.stringify(Array.from(ids))); } catch(e) {}
  }

  function ensureWatchedCache() {
    if (_watchedCache) return Promise.resolve(_watchedCache);
    if (_watchedCachePromise) return _watchedCachePromise;
    if (!Lampa.Storage.get('trakt_token')) return Promise.resolve({ movies: new Set(), shows: new Set() });
    var _A = typeof api$1 !== 'undefined' && api$1 || null;
    if (!_A) return Promise.resolve({ movies: new Set(), shows: new Set() });
    _watchedCachePromise = Promise.all([
      _A.watchedMovies().catch(function() { return []; }),
      _A.watchedShows().catch(function() { return []; })
    ]).then(function(res) {
      var ms = new Set(), ss = new Set(), mDates = new Map();
      (res[0] || []).forEach(function(x) { var id = x.movie && x.movie.ids && x.movie.ids.tmdb; if (id) { ms.add(String(id)); if (x.last_watched_at) mDates.set(String(id), x.last_watched_at); } });
      _watchedEpisodesCache.clear();
      (res[1] || []).forEach(function(x) {
        var id = x.show && x.show.ids && x.show.ids.tmdb;
        if (!id) return;
        ss.add(String(id));
        if (Array.isArray(x.seasons)) {
          x.seasons.forEach(function(s) {
            if (!s || !Array.isArray(s.episodes)) return;
            s.episodes.forEach(function(ep) {
              if (!ep || !ep.number) return;
              _watchedEpisodesCache.add(String(id) + '-' + String(s.number) + '-' + String(ep.number));
            });
          });
        }
      });
      _watchedCache = { movies: ms, shows: ss, moviesWatchedAt: mDates };
      _watchedCachePromise = null;
      return _watchedCache;
    }).catch(function() {
      _watchedCachePromise = null;
      _watchedCache = { movies: new Set(), shows: new Set(), moviesWatchedAt: new Map() };
      return _watchedCache;
    });
    return _watchedCachePromise;
  }

  function loadWatchedCache() { ensureWatchedCache(); }

  var _watchedEpisodesCache = new Set();
  function invalidateWatchedCache() { _watchedCache = null; _watchedCachePromise = null; _watchedEpisodesCache.clear(); }

  var _watchlistBadgeCache = null;
  var _watchlistBadgeCachePromise = null;
  var _renderedCardInstances = [];
  var _digitalDatesAvailable = false;
  var _patchStatus = 'not called';
  var _badgesHidden = false;
  var _lastCatalogEvent = null;

  function ensureWatchlistBadgeCache() {
    if (_watchlistBadgeCache) return Promise.resolve(_watchlistBadgeCache);
    if (_watchlistBadgeCachePromise) return _watchlistBadgeCachePromise;
    if (!Lampa.Storage.get('trakt_token')) return Promise.resolve({ movies: new Set(), shows: new Set() });
    var _A = typeof api$1 !== 'undefined' && api$1 || null;
    if (!_A) return Promise.resolve({ movies: new Set(), shows: new Set() });
    _watchlistBadgeCachePromise = Promise.all([
      _A.watchlistMovies().catch(function() { return []; }),
      _A.watchlistShows().catch(function() { return []; })
    ]).then(function(res) {
      var ms = new Set(), ss = new Set();
      (res[0] || []).forEach(function(x) { var id = x.movie && x.movie.ids && x.movie.ids.tmdb; if (id) ms.add(String(id)); });
      (res[1] || []).forEach(function(x) { var id = x.show && x.show.ids && x.show.ids.tmdb; if (id) ss.add(String(id)); });
      _watchlistBadgeCache = { movies: ms, shows: ss };
      _watchlistBadgeCachePromise = null;
      return _watchlistBadgeCache;
    }).catch(function() {
      _watchlistBadgeCachePromise = null;
      _watchlistBadgeCache = { movies: new Set(), shows: new Set() };
      return _watchlistBadgeCache;
    });
    return _watchlistBadgeCachePromise;
  }

  function invalidateWatchlistBadgeCache() { _watchlistBadgeCache = null; _watchlistBadgeCachePromise = null; }


  function isWatchedFromCache(tmdbId, type) {
    if (!_watchedCache || !tmdbId) return false;
    var s = String(tmdbId);
    return type === 'movie' ? _watchedCache.movies.has(s) : _watchedCache.shows.has(s);
  }

  function renderWatchedBadge(cardInstance) {
    if (!_watchedCache) return;
    var data = cardInstance && cardInstance.data;
    if (!data || !data.id) return;
    var type = data.method || data.card_type || data.type || (data.name ? 'tv' : 'movie');
    var isMovie = type === 'movie';
    var isShow = type === 'tv' || type === 'show';
    if (!isMovie && !isShow) return;
    var watched = isMovie ? _watchedCache.movies.has(String(data.id)) : _watchedCache.shows.has(String(data.id));
    if (!watched) return;
    var cardNode = typeof cardInstance.render === 'function' ? cardInstance.render(true) : null;
    var cardView = cardNode && cardNode.querySelector('.card__view');
    if (!cardView || cardView.querySelector('.trakt-watched-badge')) return;
    var badge = document.createElement('div');
    badge.className = 'trakt-watched-badge';
    badge.setAttribute('data-tmdb', String(data.id));
    badge.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>';
    cardView.appendChild(badge);
  }

  function renderWatchlistBadge(cardInstance) {
    if (!_watchlistBadgeCache) return;
    var data = cardInstance && cardInstance.data;
    if (!data || !data.id) return;
    var type = data.method || data.card_type || data.type || (data.name ? 'tv' : 'movie');
    var isMovie = type === 'movie';
    var isShow = type === 'tv' || type === 'show';
    if (!isMovie && !isShow) return;
    var inWL = isMovie ? _watchlistBadgeCache.movies.has(String(data.id)) : _watchlistBadgeCache.shows.has(String(data.id));
    if (!inWL) return;
    var cardNode = typeof cardInstance.render === 'function' ? cardInstance.render(true) : null;
    var cardView = cardNode && cardNode.querySelector('.card__view');
    if (!cardView || cardView.querySelector('.trakt-watchlist-badge')) return;
    var badge = document.createElement('div');
    badge.className = 'trakt-watchlist-badge';
    badge.setAttribute('data-tmdb', String(data.id));
    badge.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>';
    cardView.appendChild(badge);
  }

  var _DIGITAL_MONTHS = ['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'];
  function _buildDigitalLabel(tmdbId) {
    var datesMap = getUpcomingMovieDates();
    var digitalDate = datesMap[tmdbId];
    if (digitalDate) {
      var today = new Date(); today.setHours(0, 0, 0, 0);
      var release = new Date(digitalDate); release.setHours(0, 0, 0, 0);
      var diff = Math.round((release - today) / 86400000);
      if (diff < 0) return null;
      if (diff === 0) return 'Сегодня';
      if (diff === 1) return 'Завтра';
      if (diff === 2) return 'Через 2 дня';
      if (diff === 3) return 'Через 3 дня';
      return release.getDate() + ' ' + _DIGITAL_MONTHS[release.getMonth()];
    }
    if (getSoonMovieIds().has(tmdbId)) return 'Скоро';
    return null;
  }
  function _applyDigitalBadge(cardView, tmdbId) {
    if (!cardView || cardView.querySelector('.trakt-digital-release')) return;
    var label = _buildDigitalLabel(tmdbId);
    if (!label) return;
    var badge = document.createElement('div');
    badge.className = 'trakt-digital-release';
    badge.setAttribute('data-tmdb', tmdbId);
    badge.textContent = label;
    cardView.appendChild(badge);
  }
  var _digitalDateFetchPending = new Set();
  var _digitalDateFetchDone = new Set();
  var _refreshBadgesTimer = null;
  function scheduleRefreshDigitalBadgesDOM() {
    if (_refreshBadgesTimer) clearTimeout(_refreshBadgesTimer);
    _refreshBadgesTimer = setTimeout(function() {
      _refreshBadgesTimer = null;
      refreshDigitalBadgesDOM();
    }, 300);
  }

  var _digitalDateQueue = [];
  var _digitalDateActive = 0;
  var _DIGITAL_CONCURRENCY = 3;
  var _digitalDateErrors = 0;
  var _digitalDateNoData = 0;
  var _digitalDateFirstKey = '';

  function _drainDigitalQueue() {
    while (_digitalDateActive < _DIGITAL_CONCURRENCY && _digitalDateQueue.length > 0) {
      var item = _digitalDateQueue.shift();
      _digitalDateActive++;
      _execDigitalFetch(item.tmdbId, item.isoCountry, item.callback);
    }
  }

  function _execDigitalFetch(tmdbId, isoCountry, callback) {
    var url = Lampa.TMDB.api('movie/' + tmdbId + '?api_key=' + Lampa.TMDB.key() + '&append_to_response=release_dates');
    var network = new Lampa.Reguest();
    function _done(chosen) {
      _digitalDateFetchPending.delete(tmdbId);
      _digitalDateFetchDone.add(tmdbId);
      _digitalDateActive--;
      if (chosen) {
        var map = getUpcomingMovieDates();
        map[tmdbId] = chosen;
        saveUpcomingMovieDates(map);
        var today = new Date(); today.setHours(0, 0, 0, 0);
        var release = new Date(chosen); release.setHours(0, 0, 0, 0);
        if (release >= today) { _digitalDatesAvailable = true; scheduleRefreshDigitalBadgesDOM(); }
      }
      if (callback) callback(chosen || null);
      _drainDigitalQueue();
    }
    if (!_digitalDateFirstKey) _digitalDateFirstKey = String(Lampa.TMDB.key()).slice(0, 4);
    network.silent(url, function(resp) {
      var results = resp && resp.release_dates && Array.isArray(resp.release_dates.results)
        ? resp.release_dates.results : null;
      var exactDate = null, usDate = null, anyDate = null;
      if (results) {
        results.forEach(function(entry) {
          if (!Array.isArray(entry.release_dates)) return;
          entry.release_dates.forEach(function(rd) {
            if (rd.type === 4 && rd.release_date) {
              if (!anyDate) anyDate = rd.release_date;
              if (entry.iso_3166_1 === 'US' && !usDate) usDate = rd.release_date;
              if (entry.iso_3166_1 === isoCountry) exactDate = rd.release_date;
            }
          });
        });
      }
      var chosen = exactDate || usDate || anyDate || null;
      if (!chosen) {
        _digitalDateNoData++;
        var todayT = new Date(); todayT.setHours(0, 0, 0, 0);
        var firstPastTheatrical = null;
        if (results) {
          results.forEach(function(entry) {
            if (!Array.isArray(entry.release_dates)) return;
            entry.release_dates.forEach(function(rd) {
              if (rd.type === 3 && rd.release_date) {
                var rdDate = new Date(rd.release_date); rdDate.setHours(0, 0, 0, 0);
                if (rdDate <= todayT) {
                  if (!firstPastTheatrical || rd.release_date < firstPastTheatrical) firstPastTheatrical = rd.release_date;
                }
              }
            });
          });
        }
        if (firstPastTheatrical) {
          var tDate = new Date(firstPastTheatrical); tDate.setHours(0, 0, 0, 0);
          var diffDays = Math.round((todayT - tDate) / 86400000);
          if (diffDays <= 180) {
            var soonSet = getSoonMovieIds();
            soonSet.add(tmdbId);
            saveSoonMovieIds(soonSet);
            _digitalDatesAvailable = true;
            scheduleRefreshDigitalBadgesDOM();
          }
        }
      }
      _done(chosen);
    }, function() { _digitalDateErrors++; _done(null); });
  }

  function fetchAndCacheDigitalDate(tmdbId, callback) {
    if (_digitalDateFetchDone.has(tmdbId)) {
      var cached = getUpcomingMovieDates()[tmdbId] || null;
      if (callback) callback(cached);
      return;
    }
    if (_digitalDateFetchPending.has(tmdbId)) return;
    if (!Lampa.TMDB || !Lampa.Reguest) { if (callback) callback(null); return; }
    _digitalDateFetchPending.add(tmdbId);
    var lang = Lampa.Storage ? Lampa.Storage.get('language', 'ru') : 'ru';
    var langCode = lang.slice(0, 2).toUpperCase();
    var countryMap = { RU: 'RU', EN: 'US', UK: 'GB', DE: 'DE', FR: 'FR', ES: 'ES', IT: 'IT', PT: 'PT' };
    var isoCountry = countryMap[langCode] || 'US';
    _digitalDateQueue.push({ tmdbId: tmdbId, isoCountry: isoCountry, callback: callback });
    _drainDigitalQueue();
  }

  function renderDigitalReleaseBadge(cardInstance) {
    var data = cardInstance && cardInstance.data;
    if (!data || !data.id) return;
    var type = data.method || data.card_type || data.type || (data.first_air_date ? 'tv' : 'movie');
    if (type !== 'movie') return;
    var tmdbId = String(data.id);
    var cardNode = typeof cardInstance.render === 'function' ? cardInstance.render(true) : null;
    var cardView = cardNode && cardNode.querySelector('.card__view');
    if (cardView && !cardView.getAttribute('data-trakt-movie-id')) {
      cardView.setAttribute('data-trakt-movie-id', tmdbId);
    }
    _applyDigitalBadge(cardView, tmdbId);
    fetchAndCacheDigitalDate(tmdbId, null);
  }
  function refreshDigitalBadgesDOM() {
    document.querySelectorAll('.card__view[data-trakt-movie-id]').forEach(function(cardView) {
      if (cardView.querySelector('.trakt-digital-release')) return;
      _applyDigitalBadge(cardView, cardView.getAttribute('data-trakt-movie-id'));
    });
  }

  function _getMovieDataFromCardEl(cardEl) {
    var $ = window.jQuery || window.$;
    if (!$ || !cardEl) return null;
    try {
      var jd = $(cardEl).data();
      if (!jd) return null;
      var keys = ['card', 'data', 'movie', 'item', 'object'];
      for (var ki = 0; ki < keys.length; ki++) {
        var v = jd[keys[ki]];
        if (v && typeof v === 'object') {
          if (v.data && v.data.id) return v.data;
          if (v.id && typeof v.id === 'number') return v;
        }
      }
      for (var k in jd) {
        var vv = jd[k];
        if (vv && typeof vv === 'object' && vv.id && typeof vv.id === 'number') return vv;
      }
    } catch(e) {}
    return null;
  }

  function _tagUnlabeledCards() {
    document.querySelectorAll('.card__view:not([data-trakt-movie-id])').forEach(function(cv) {
      var movieData = _getMovieDataFromCardEl(cv.parentElement);
      if (!movieData || !movieData.id) return;
      var type = movieData.method || movieData.card_type || movieData.type || (movieData.first_air_date ? 'tv' : 'movie');
      if (type !== 'movie') return;
      var tmdbId = String(movieData.id);
      cv.setAttribute('data-trakt-movie-id', tmdbId);
      fetchAndCacheDigitalDate(tmdbId, null);
      _applyDigitalBadge(cv, tmdbId);
    });
    refreshDigitalBadgesDOM();
  }

  function _initCardObserver() {
    if (typeof MutationObserver === 'undefined') return;
    var _scanTimer = null;
    var mo = new MutationObserver(function(mutations) {
      var hasCards = false;
      for (var i = 0; i < mutations.length && !hasCards; i++) {
        var added = mutations[i].addedNodes;
        for (var j = 0; j < added.length && !hasCards; j++) {
          var n = added[j];
          if (n.nodeType !== 1) continue;
          if ((n.classList && n.classList.contains('card__view')) ||
              (n.querySelector && n.querySelector('.card__view'))) hasCards = true;
        }
      }
      if (!hasCards) return;
      if (_scanTimer) clearTimeout(_scanTimer);
      _scanTimer = setTimeout(function() { _scanTimer = null; _tagUnlabeledCards(); }, 300);
    });
    if (document.body) mo.observe(document.body, { childList: true, subtree: true });
  }

  function _patchLampaCard() {
    if (!window.Lampa || typeof Lampa.Card !== 'function') {
      _patchStatus = 'skip: Lampa.Card=' + (window.Lampa ? typeof Lampa.Card : 'no Lampa');
      return;
    }
    if (Lampa.Card._traktPatched) { _patchStatus = 'already patched'; return; }
    var _orig = Lampa.Card;
    Lampa.Card = function(data, params) {
      var inst = _orig.apply(this, arguments);
      if (!Lampa.Storage.get('trakt_token')) return inst;
      if (inst && data && data.id) {
        var type = data.method || data.card_type || data.type || (data.first_air_date ? 'tv' : 'movie');
        if (type === 'movie') {
          if (_renderedCardInstances.indexOf(inst) < 0) _renderedCardInstances.push(inst);
          setTimeout(function() {
            renderDigitalReleaseBadge(inst);
            renderWatchedBadge(inst);
            renderWatchlistBadge(inst);
          }, 0);
        }
      }
      return inst;
    };
    for (var _pk in _orig) {
      if (Object.prototype.hasOwnProperty.call(_orig, _pk)) Lampa.Card[_pk] = _orig[_pk];
    }
    Lampa.Card._traktPatched = true;
    _patchStatus = 'patched OK: Lampa.Card wrapped';
  }

  function decorateUpnextLine(event) {
    if (!event || !event.data || event.data.trakt_row !== 'upnext') return;
    if (!Array.isArray(event.items)) return;
    event.items.forEach(function(ci) {
      renderUpnextProgressBadge(ci);
      renderUpnextRemainingBadge(ci, ci.data);
    });
  }


  /**
   * Модуль обработки событий плагина
   */
  var events = {
    /**
     * Инициализирует обработчики событий
     */
    init: function init() {
      var _this = this;
      if (isInitialized) {
        logDebugOnce('events:init-repeat', 'events.init skipped: already initialized');
        return;
      }
      isInitialized = true;

      multiAccountMigrateToken();
      multiAccountFetchMissingUsernames();

      try {
        Lampa.Listener.follow('profile', function (e) {
          if (!e || e.type !== 'changed') return;
          var profileId = e.profile && (e.profile.id || e.profile.name || String(e.index || 0));
          if (!profileId) return;
          var profileSlots = {};
          try { profileSlots = JSON.parse(Lampa.Storage.get('trakt_profile_slots') || '{}'); } catch (pe) {}
          var targetSlot = profileSlots[String(profileId)];
          if (typeof targetSlot === 'number' && targetSlot !== multiAccountGetActiveSlot()) {
            multiAccountActivateSlot(targetSlot);
            Lampa.Bell.push({ text: 'Trakt: ' + (multiAccountGetSlot(targetSlot) && multiAccountGetSlot(targetSlot).label || ('Account ' + (targetSlot + 1))) });
          }
        });
      } catch (profileListenerErr) {
        logWarn('Profile listener not available, multi-account auto-switch disabled', profileListenerErr, { debugOnly: true });
      }

      // Следим за готовностью приложения
      if (window.appready) this.onAppReady();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') _this.onAppReady();
        });
      }

      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite' && Lampa.Storage.get('trakt_token')) {
          _this.onFullCardReady(e);
        }
      });
      Lampa.Listener.follow('line', function (e) {
        if (!e || !e.type) return;
        if (e.type === 'append' || e.type === 'visible' || e.type === 'toggle') {
          decorateUpnextLine(e);
          if (Lampa.Storage.get('trakt_token') && Array.isArray(e.items)) {
            e.items.forEach(function(ci) {
              if (_renderedCardInstances.indexOf(ci) < 0) _renderedCardInstances.push(ci);
              var d = ci && ci.data;
              if (!d || !d.id) return;
              var t = d.method || d.card_type || d.type || (d.first_air_date ? 'tv' : 'movie');
              if (t !== 'movie') return;
              var cn = typeof ci.render === 'function' ? ci.render(true) : null;
              var cv = cn && cn.querySelector('.card__view');
              if (cv && !cv.getAttribute('data-trakt-movie-id')) cv.setAttribute('data-trakt-movie-id', String(d.id));
            });
            e.items.forEach(renderWatchedBadge);
            e.items.forEach(renderWatchlistBadge);
            e.items.forEach(renderDigitalReleaseBadge);
            refreshDigitalBadgesDOM();
          }
        }
      });
      Lampa.Listener.follow('catalog', function (e) {
        _lastCatalogEvent = { type: e && e.type, keys: e ? Object.keys(e).join(',') : '', hasItems: !!(e && Array.isArray(e.items) && e.items.length) };
        if (!Lampa.Storage.get('trakt_token') || !Array.isArray(e.items) || !e.items.length) return;
        e.items.forEach(function(ci) {
          if (_renderedCardInstances.indexOf(ci) < 0) _renderedCardInstances.push(ci);
        });
        e.items.forEach(renderWatchedBadge);
        e.items.forEach(renderWatchlistBadge);
        e.items.forEach(renderDigitalReleaseBadge);
        refreshDigitalBadgesDOM();
      });
      _initCardObserver();
      _patchLampaCard();

      if (window.Lampa && Lampa.Player && Lampa.Player.listener) {
        // onEnded / onStop / onHidden -> markFinishIntent for the current media key
        var routeFinishIntent = function routeFinishIntent(evt) {
          try {
            if (!Lampa.Storage.field('trakt_enable_watching')) return;
            var token = Lampa.Storage.get('trakt_token');
            if (!token) return;
            var card = Lampa.Activity.active && Lampa.Activity.active() && (Lampa.Activity.active().card_data || Lampa.Activity.active().card || Lampa.Activity.active().movie) || Lampa.Storage.get('trakt_last_card');
            if (!card) return;
            // Include last known hash if available from timeline storage
            var lastTimeline = window.last_timeline_event && window.last_timeline_event.data || {};
            var media = Object.assign({}, card, {
              hash: lastTimeline.hash
            });
            var meta = watching && typeof watching.getMetaByHash === 'function' ? watching.getMetaByHash(lastTimeline.hash) : null;
            if (meta) {
              if (!media.season_number && meta.season) media.season_number = meta.season;
              if (!media.episode_number && meta.episode) media.episode_number = meta.episode;
              if (!media.ids && meta.ids) media.ids = meta.ids;
            }
            var key = watching && typeof watching.getCompletionKey === 'function' ? watching.getCompletionKey(media) : null;
            if (key && watching && typeof watching.markFinishIntent === 'function') {
              watching.markFinishIntent(key);
            }

            // Primary finish route is timeline update.
            // Fallback to direct finish only when "ended" happened without known timeline hash.
            var shouldFallbackFinish = !!(evt && evt.type === 'ended' && !lastTimeline.hash);
            if (shouldFallbackFinish && watching && typeof watching.finish === 'function') {
              var contentType = watching && typeof watching.getContentType === 'function' ? watching.getContentType(media) : 'movie';
              var season = media.season_number || media.season || media.seasonNumber;
              var episode = media.episode_number || media.episode || media.episodeNumber;
              var canFinishSafely = contentType === 'movie' || season && episode || media.hash;
              if (canFinishSafely) {
                watching.finish(media)["catch"](function (e) {
                  logWarn('Fallback finish failed', {
                    eventType: evt && evt.type,
                    error: e
                  }, {
                    debugOnly: true
                  });
                });
              }
            }
            // Scrobble pause to Trakt if progress is below the finish threshold
            var lastRoad = window.last_timeline_event && window.last_timeline_event.data && window.last_timeline_event.data.road || {};
            var lastPct = parseFloat(lastRoad.percent || 0);
            var minProg2 = parseInt(Lampa.Storage.field('trakt_min_progress') || config.minProgress);
            if (lastPct > 0 && lastPct < minProg2 && media && watching && typeof watching.scrobblePause === 'function') {
              watching.scrobblePause(media, lastPct);
            }
          } catch (e) {
            logWarn('Event finish route failed', e, {
              debugOnly: true
            });
          }
        };
        Lampa.Player.listener.follow('ended', routeFinishIntent);
        Lampa.Player.listener.follow('stop', routeFinishIntent);
        Lampa.Player.listener.follow('visibility', function (e) {
          if (e && e.hidden) routeFinishIntent({
            type: 'hidden'
          });
        });
      }
    },
    /**
     * Обработчик события готовности приложения
     */
    onAppReady: function onAppReady() {
      config.main();

      addMenuItems();
      // Кеш просмотренных и вотчлиста для бейджей
      loadWatchedCache();
      ensureWatchlistBadgeCache();
      applyLampaHideClasses();
      initTraktAccountSwitchButton();
      setTimeout(syncPlaybackFromTrakt, 2000);
      _patchLampaCard();
      // Повторная попытка патча на случай позднего создания Lampa.Card
      setTimeout(_patchLampaCard, 1000);
      setTimeout(_patchLampaCard, 3000);
      if (Object.keys(getUpcomingMovieDates()).length > 0 || getSoonMovieIds().size > 0) {
        _digitalDatesAvailable = true;
        setTimeout(function() {
          _renderedCardInstances.forEach(renderDigitalReleaseBadge);
          refreshDigitalBadgesDOM();
        }, 0);
      }
    },
    /**
     * Добавляет блок со связанными списками в карточку медиа
     * @param {Object} e - Объект события
     */
    addRelatedListsBlock: function addRelatedListsBlock(e) {
      var _e$object;
      if (!e) return;

      if (e.object && e.object.activity && typeof e.object.activity.render === 'function') {
        if (e.object.activity.render().find('.tag-count.trakttv-lists').length > 0) {
          return;
        }
      }

      var card = e.data;
      if (!card) return;

      var method = (_e$object = e.object) === null || _e$object === void 0 ? void 0 : _e$object.method; // 'tv' or 'movie'

      // Fallback через евристики з e.data.movie
      if (!method && e.data && e.data.movie) {
        method = e.data.movie.name || e.data.movie.first_air_date ? 'tv' : 'movie';
      }

      // Fallback через card евристики
      if (!method && card) {
        method = card.method || card.card_type || (card.first_air_date || card.name ? 'tv' : 'movie');
      }

      if (!card.id && (!card.external_ids || !card.external_ids.trakt_id)) return;

      var params = {
        id: card.id,
        method: method === 'tv' ? 'show' : 'movie'
      };

      if (card.external_ids && card.external_ids.trakt_id) {
        params.ids = {
          trakt: card.external_ids.trakt_id
        };
      }

      // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
      var Api = typeof api !== 'undefined' && api || window.TraktTV && window.TraktTV.api || null;
      if (!Api) {
        logDebugOnce(API_MISSING_LOG_KEY, 'API bridge is unavailable in events');
        return;
      }
      Promise.all([Api && Api.getMediaLists(params), Api && Api.likesLists({
        page: 1,
        limit: 1000
      })
      ]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          mediaListsResponse = _ref2[0],
          likedListsResponse = _ref2[1];
        var formattedMediaLists = mediaListsResponse;
        var likedListIds = likedListsResponse.results.map(function (list) {
          return list.id;
        });

        if (!formattedMediaLists || !Array.isArray(formattedMediaLists) || formattedMediaLists.length === 0) {
          return;
        }

        if (!e.object || !e.object.activity || typeof e.object.activity.render !== 'function') {
          return;
        }

        var tagsBlock = e.object.activity.render().find('.full-descr__tags');
        if (tagsBlock.length === 0) {
          return;
        }

        var listsCountElement = $("\n                <div class=\"tag-count selector trakttv-lists\">\n                    <div class=\"tag-count__name\">".concat(Lampa.Lang.translate('trakttv_related_lists'), "</div>\n                </div>\n            "));

        listsCountElement.on('hover:enter', function () {
          var selectItems = formattedMediaLists.map(function (list) {
            return {
              title: list.title,
              item_count: list.item_count,
              id: list.id,
              component: 'trakt_list_detail',
              list_id: list.id,
              page: 1,
              liked: likedListIds.includes(list.id)
            };
          });
          if (selectItems.length === 0) {
            Lampa.Noty.show(Lampa.Lang.translate('trakt_no_lists'));
            return;
          }
          Lampa.Select.show({
            title: Lampa.Lang.translate('trakttv_related_lists'),
            items: selectItems,
            onSelect: function onSelect(a) {
              var listTitle = typeof a.item_count === 'number' ? "".concat(a.title, " (").concat(a.item_count, ")") : a.title;
              Lampa.Activity.push({
                url: '',
                title: listTitle,
                component: a.component,
                list_id: a.list_id,
                page: a.page
              });
            },
            onRender: function onRender(item, element) {
              if (element.liked) {
                item.find('.selectbox__title').append('<span class="selectbox__lables"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 22 22" xml:space="preserve"><path fill="currentColor" d="M11,20c-0.3,0-0.5-0.1-0.7-0.3l-8.5-8.5c-0.9-0.9-1.4-2-1.4-3.3c0-2.6,2.1-4.7,4.7-4.7c1.4,0,2.7,0.6,3.6,1.5l2.3,2.3l2.3-2.3c0.9-0.9,2.2-1.5,3.6-1.5c2.6,0,4.7,2.1,4.7,4.7c0,1.3-0.5,2.4-1.4,3.3l-8.5,8.5C11.5,19.9,11.3,20,11,20z"></path></svg></span>');
              }
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });

        tagsBlock.append(listsCountElement);
      })["catch"](function (error) {
        logWarn('Related lists loading failed', error, {
          debugOnly: true
        });
      });
    },
    /**
     * Обработчик события готовности карточки фильма/сериала
     * @param {Object} e - Объект события
     */
    onFullCardReady: function onFullCardReady(e) {
      if (!e || !e.data) return;
      if (!e.object || !e.object.activity || typeof e.object.activity.render !== 'function') return;


      if (!e.data.id) {

        if (e.data.card && e.data.card.id) {
          e.data.id = e.data.card.id;
        } else if (e.data.data && e.data.data.id) {
          e.data.id = e.data.data.id;
        } else if (e.data.movie && e.data.movie.id) {
          e.data.id = e.data.movie.id;
        } else if (e.data.show && e.data.show.id) {
          e.data.id = e.data.show.id;
        } else if (e.data.external_ids && e.data.external_ids.tmdb_id) {
          e.data.id = e.data.external_ids.tmdb_id;
        } else {
          return;
        }
      }

      if (!e.data.external_ids) {
        e.data.external_ids = {};
      }

      var eventForLists = {
        data: JSON.parse(JSON.stringify(e.data)),
        object: {
          method: e.object.method,
          activity: e.object.activity
        }
      };

      if (!eventForLists.data.id) {
        eventForLists.data.id = e.data.id;
      }
      this.addRelatedListsBlock(eventForLists);

      // Синхронизируем Trakt playback → Lampa.Timeline при открытии карточки TV
      if (e.object.method === 'tv' && e.data && e.data.id) {
        setTimeout(syncPlaybackFromTrakt, 500);
      }

      if (e.object.method === 'tv' || e.object.method === 'movie') {
        var showProgress = Lampa.Storage.field('trakttv_show_tv_progress');
        if (showProgress === undefined || showProgress === true) {
          TraktHistory.showWatchProgress(e.data, e);
        }
      }
      if (e.object.method === 'movie') {
        showDigitalReleaseDate(e.data, e);
      }

      // Кнопка "Смотрели вместе" — мультипросмотр
      if (readBooleanStorage$2('trakt_multiwatch_enabled', false)) {
        var mwAccounts = multiAccountGetMultiwatchTokens();
        if (mwAccounts.length > 0 && e.data && e.data.id) {
          var renderRoot = e.object && e.object.activity && typeof e.object.activity.render === 'function'
            ? e.object.activity.render() : null;
          if (renderRoot) {
            var mwItemData = { id: e.data.id, method: e.object.method === 'tv' ? 'show' : 'movie' };
            // Ensure lastMultiwatchSelection contains only valid slots from the current pool
            var validSlots = mwAccounts.map(function (a) { return a.slot; });
            if (lastMultiwatchSelection.length === 0) {
              lastMultiwatchSelection = validSlots.slice();
            } else {
              lastMultiwatchSelection = lastMultiwatchSelection.filter(function (s) { return validSlots.indexOf(s) >= 0; });
              if (lastMultiwatchSelection.length === 0) lastMultiwatchSelection = validSlots.slice();
            }

            var mwBtn = document.createElement('div');
            mwBtn.className = 'full-start-new__details trakt trakt-multiwatch-btn selector';

            function buildMwBtnLabel() {
              var names = mwAccounts.map(function (a) { return a.label; }).join(', ');
              return '<div class="trakt-icon" style="width:1.5em;height:1.5em;color:rgba(255,255,255,0.55)">' + icons.TRAKT_ICON + '</div>'
                + '<span style="font-size:.85em;opacity:.75">' + Lampa.Lang.translate('trakt_multiwatch_btn') + ': ' + names + '</span>';
            }
            mwBtn.innerHTML = buildMwBtnLabel();

            $(mwBtn).on('hover:enter', function () {
              var menuItems = mwAccounts.map(function (acc) {
                var isSelected = lastMultiwatchSelection.indexOf(acc.slot) >= 0;
                return { title: (isSelected ? '✓ ' : '  ') + acc.label, slot: acc.slot, selected: isSelected };
              });
              menuItems.push({ title: '——————————', separator: true });
              menuItems.push({ title: Lampa.Lang.translate('trakt_multiwatch_confirm') || 'Отметить выбранных', action: 'confirm' });
              menuItems.push({ title: Lampa.Lang.translate('cancel') || 'Отмена', cancel: true });

              Lampa.Select.show({
                title: Lampa.Lang.translate('trakt_multiwatch_btn'),
                items: menuItems,
                onSelect: function (a) {
                  if (a.cancel) { Lampa.Controller.toggle('content'); return; }
                  if (a.separator) return;
                  if (a.action === 'confirm') {
                    if (lastMultiwatchSelection.length === 0) {
                      Lampa.Bell.push({ text: Lampa.Lang.translate('trakt_multiwatch_error') });
                      return;
                    }
                    var selectedAccounts = mwAccounts.filter(function (acc) {
                      return lastMultiwatchSelection.indexOf(acc.slot) >= 0;
                    });
                    var tasks = selectedAccounts.map(function (acc) {
                      var body = { movies: [], shows: [] };
                      if (mwItemData.method === 'movie') body.movies.push({ ids: { tmdb: mwItemData.id }, watched_at: new Date().toISOString() });
                      else body.shows.push({ ids: { tmdb: mwItemData.id }, watched_at: new Date().toISOString() });
                      return requestApiWithToken(acc.token, 'POST', '/sync/history', body)
                        .then(function () { return true; }).catch(function () { return false; });
                    });
                    Promise.all(tasks).then(function (results) {
                      var ok = results.filter(Boolean).length;
                      var msg = Lampa.Lang.translate('trakt_multiwatch_done')
                        .replace('{ok}', ok).replace('{total}', results.length);
                      Lampa.Bell.push({ text: msg });
                    });
                    Lampa.Controller.toggle('content');
                    return;
                  }
                  // Toggle selection
                  var idx = lastMultiwatchSelection.indexOf(a.slot);
                  if (idx >= 0) lastMultiwatchSelection.splice(idx, 1);
                  else lastMultiwatchSelection.push(a.slot);
                  // Reopen with updated checkmarks
                  $(mwBtn).trigger('hover:enter');
                },
                onBack: function () { Lampa.Controller.toggle('content'); }
              });
            });

            var rateLine = renderRoot.find('.full-start-new__rate-line');
            if (rateLine.length) rateLine.after(mwBtn);
          }
        }
      }
    }
  };

  /**
   * Helper functions for ContentRows integration (Lampa 3.0+)
   */

  /**
   * Check if user has permission to see UpNext content
   * @returns {boolean}
   */
  function checkUpNextPermissions() {
    if (!Lampa.Storage.get('trakt_token')) return false;
    return true;
  }

  /**
   * Check if user has permission to see Recommendations content
   * @returns {boolean}
   */
  function checkRecommendationsPermissions() {
    if (!Lampa.Storage.get('trakt_token')) return false;
    return true;
  }

  /**
   * Check if user has permission to see Calendar content
   * @returns {boolean}
   */
  function checkCalendarPermissions() {
    if (!Lampa.Storage.get('trakt_token')) return false;
    return true;
  }

  /**
   * Unified content type detection
   * @param {Object} data - Item data
   * @returns {string} - Content type: 'movie', 'tv', 'show', 'episode'
   */
  function getContentType(data) {
    if (data.method) return data.method;
    if (data.type) return data.type;
    if (data.card_type) return data.card_type;
    return data.name ? 'tv' : 'movie';
  }

  /**
   * Normalize content data for display (Lampa 3.0+)
   * Always adds params.emit for modular card system
   * @param {Array} items - Array of content items
   * @returns {Array} - Normalized items with params.emit
   */
  function normalizeContentData(items) {
    return items.map(function (item) {
      var normalized = _objectSpread2({}, item);
      var contentType = getContentType(item);
      if (contentType === 'tv' || contentType === 'show') {
        normalized.name = item.title || item.original_title;
        normalized.original_name = item.original_name || item.original_title || item.title;
        normalized.first_air_date = item.release_date;
        normalized.type = 'tv';
        normalized.card_type = 'tv';
      }
      if (contentType === 'movie') {
        delete normalized.name;
        delete normalized.original_name;
        normalized.release_date = item.release_date;
        normalized.title = item.title || item.original_title;
        normalized.type = 'movie';
        normalized.card_type = 'movie';
      }
      if (contentType === 'episode') {
        normalized.name = item.title || item.original_title;
        normalized.first_air_date = item.release_date;
        normalized.type = 'episode';
        normalized.card_type = 'episode';
      }

      // Add params.emit for Lampa 3.0+ modular system.
      // Use onlyEnter to avoid default navigation firing as well.
      // CRITICAL: Use normalized closure variables instead of this.data
      // to prevent runtime modification by Lampa.
      normalized.params = {
        emit: {
          onlyEnter: function onlyEnter() {
            var _this$data;
            // Use normalized.method (fixed at creation time) instead of getContentType(this.data)
            var fixedMethod = normalized.method || normalized.card_type || normalized.type;
            Lampa.Activity.push({
              url: ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.url) || normalized.url,
              component: 'full',
              id: normalized.id,
              // Use normalized.id (fixed)
              method: fixedMethod,
              // Use fixed method from normalized
              card: normalized,
              // Pass normalized instead of this.data
              source: normalized.source || 'tmdb',
              season: normalized.season,
              episode: normalized.episode
            });
          }
        }
      };
      return normalized;
    });
  }

  /**
   * Filter items by content type
   * @param {Array} items - Array of items to filter
   * @param {string} filterType - Type to filter: 'movie', 'tv', 'show'
   * @returns {Array} - Filtered items
   */
  function filterByContentType(items, filterType) {
    return items.filter(function (item) {
      var type = getContentType(item);
      if (filterType === 'tv') {
        return type === 'tv' || type === 'show';
      }
      return type === filterType;
    });
  }

  var STORAGE_KEY = 'appletv_topshelf';
  var CUSTOM_KEY = 'appletv_topshelf_custom';
  var SETTINGS_KEY = 'trakttv_topshelf';
  var ROW_UPNEXT = 'content_rows_TraktUpNextRow';
  var ROW_RECOMMENDATIONS = 'content_rows_TraktRecommendationsRow';
  var MAX_ITEMS = 10;
  var sectionsState = {
    upnext: null,
    recommendations: null
  };
  var listenersBound = false;
  function isEnabled() {
    if (!Lampa || !Lampa.Platform || !Lampa.Storage) return false;
    return Lampa.Platform.is('apple_tv') === true && Lampa.Storage.field(SETTINGS_KEY);
  }
  function syncCustomFlag(enabled) {
    if (typeof localStorage === 'undefined') return;
    try {
      if (enabled) localStorage.setItem(CUSTOM_KEY, 'true');else localStorage.removeItem(CUSTOM_KEY);
    } catch (error) {
      logWarn('TopShelf custom flag update failed', error, {
        debugOnly: true
      });
    }
  }
  function isRowEnabled(key) {
    var value = Lampa.Storage.get(key, 'true');
    return value === true || value === 'true';
  }
  function normalizeUrl(url) {
    if (!url) return '';
    if (String(url).startsWith('http')) return url;
    return 'https://' + String(url).replace(/^\/+/, '');
  }
  function getItemTitle(item) {
    return item.title || item.name || item.original_title || item.original_name || '';
  }
  function getItemMedia(item) {
    var type = item.method || item.card_type || item.type;
    return type === 'movie' ? 'movie' : 'tv';
  }
  function getItemImage(item, shape) {
    if (shape === 'poster') return normalizeUrl(item.poster || item.image);
    return normalizeUrl(item.image || item.poster);
  }
  function mapItems(items, shape) {
    return items.slice(0, MAX_ITEMS).map(function (item) {
      var id = item.id;
      var title = getItemTitle(item);
      var media = getItemMedia(item);
      var imageURL = getItemImage(item, shape);
      var source = item.source || 'tmdb';
      if (!id || !title || !imageURL) return null;
      return {
        id: String(id),
        title: title,
        imageURL: imageURL,
        deepLink: "lampa://topshelf?card=".concat(encodeURIComponent(id), "&media=").concat(encodeURIComponent(media), "&source=").concat(encodeURIComponent(source))
      };
    }).filter(Boolean);
  }
  function buildSections() {
    var sections = [];
    if (isRowEnabled(ROW_UPNEXT) && Array.isArray(sectionsState.upnext) && sectionsState.upnext.length) {
      sections.push({
        title: Lampa.Lang.translate('trakttv_upnext'),
        imageShape: 'poster',
        items: mapItems(sectionsState.upnext, 'poster')
      });
    }
    if (isRowEnabled(ROW_RECOMMENDATIONS) && Array.isArray(sectionsState.recommendations) && sectionsState.recommendations.length) {
      sections.push({
        title: Lampa.Lang.translate('trakttv_recommendations'),
        imageShape: 'poster',
        items: mapItems(sectionsState.recommendations, 'poster')
      });
    }
    return sections.filter(function (section) {
      return section.items && section.items.length;
    });
  }
  function writePayload() {
    if (typeof localStorage === 'undefined') return;
    var sections = buildSections();
    if (!sections.length) return;
    var payload = {
      updatedAt: Math.floor(Date.now() / 1000),
      sections: sections
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      if (typeof window !== 'undefined' && window.location && window.location.assign) {
        window.location.assign('lampa://topshelfupdate');
      }
    } catch (error) {
      logWarn('TopShelf payload update failed', error, {
        debugOnly: true
      });
    }
  }
  function bindTopshelfListeners() {
    if (listenersBound || typeof window === 'undefined') return;
    listenersBound = true;
    window.addEventListener('appletv:app-background', function () {
      if (!isEnabled()) return;
      writePayload();
    });
    window.addEventListener('appletv:app-request-topshelf-update', function () {
      if (!isEnabled()) return;
      writePayload();
    });
    if (Lampa.Storage && Lampa.Storage.listener) {
      Lampa.Storage.listener.follow('change', function (e) {
        if (e && e.name === SETTINGS_KEY) {
          syncCustomFlag(isEnabled());
        }
      });
    }
  }
  function updateTopshelf(section, items) {
    if (!isEnabled()) {
      syncCustomFlag(false);
      return;
    }
    if (!sectionsState.hasOwnProperty(section)) return;
    sectionsState[section] = Array.isArray(items) ? items : [];
    syncCustomFlag(true);
    bindTopshelfListeners();
    writePayload();
  }

  // Local safe resolver for Api
  var Api = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;
  var initialized = false;
  var UI_DEADLINE_MAIN_MS = 2800;
  var UI_DEADLINE_CATEGORY_MS = 3200;
  var STALE_PRESENT_DEADLINE_MS = 0;
  var STALE_CACHE_TTL_MS = 1000 * 60 * 60 * 6;
  var STORAGE_CACHE_PREFIX = 'trakttv_row_cache_v1_';
  var SOURCE_FILTER_FIELDS = ['trakt_source_ignore_watched', 'trakt_source_ignore_watchlisted'];
  function getUiDeadline(screen) {
    return screen === 'main' ? UI_DEADLINE_MAIN_MS : UI_DEADLINE_CATEGORY_MS;
  }
  function getAuthFingerprint() {
    try {
      if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.get !== 'function') return 'anon';
      var accessToken = String(Lampa.Storage.get('trakt_token') || '');
      var refreshToken = String(Lampa.Storage.get('trakt_refresh_token') || '');
      var token = accessToken || refreshToken;
      if (!token) return 'anon';
      return 't' + token.length + '_' + token.slice(-8);
    } catch (error) {
      return 'anon';
    }
  }
  function parseBooleanValue(value) {
    if (typeof value === 'boolean') return value;
    if (value === 1 || value === '1' || value === 'true') return true;
    if (value === 0 || value === '0' || value === 'false') return false;
    return null;
  }
  function readBooleanStorage$1(name) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        var direct = parseBooleanValue(Lampa.Storage.get(name));
        if (direct !== null) return direct;
      }
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
        var fromField = parseBooleanValue(Lampa.Storage.field(name));
        if (fromField !== null) return fromField;
      }
    } catch (error) {
      return fallback;
    }
    return fallback;
  }
  function getSourceFilterFingerprint() {
    var ignoreWatched = readBooleanStorage$1('trakt_source_ignore_watched', false) ? '1' : '0';
    var ignoreWatchlisted = readBooleanStorage$1('trakt_source_ignore_watchlisted', false) ? '1' : '0';
    return "iw:".concat(ignoreWatched, "|iwl:").concat(ignoreWatchlisted);
  }
  function buildRowCacheKey(config, params, screen) {
    var rowName = config && config.name ? config.name : 'unknown';
    var categoryContext = params && params.url ? String(params.url) : '';
    var authFingerprint = getAuthFingerprint();
    var filtersFingerprint = getSourceFilterFingerprint();
    return STORAGE_CACHE_PREFIX + [rowName, screen || 'unknown', categoryContext, authFingerprint, filtersFingerprint].join('|');
  }
  function toCacheLine(line) {
    var cached = Object.assign({}, line);
    delete cached.onMore;
    return cached;
  }
  function saveRowToCache(cacheKey, line) {
    if (!line || !Array.isArray(line.results) || !line.results.length) return;
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.set !== 'function') return;
    try {
      Lampa.Storage.set(cacheKey, {
        time: Date.now(),
        line: toCacheLine(line)
      });
    } catch (error) {
      logWarn('Rows cache save failed', error, {
        debugOnly: true
      });
    }
  }
  function clearRowCache(cacheKey) {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.set !== 'function') return;
    try {
      Lampa.Storage.set(cacheKey, null);
    } catch (error) {
      logWarn('Rows cache clear failed', error, {
        debugOnly: true
      });
    }
  }
  function loadRowFromCache(cacheKey) {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.get !== 'function') return null;
    try {
      var cached = Lampa.Storage.get(cacheKey);
      var time = Number(cached && cached.time || 0);
      var line = cached && cached.line;
      if (!time || !line || !Array.isArray(line.results) || !line.results.length) return null;
      if (Date.now() - time > STALE_CACHE_TTL_MS) return null;
      return line;
    } catch (error) {
      logWarn('Rows cache load failed', error, {
        debugOnly: true
      });
      return null;
    }
  }
  function clearAllRowCaches() {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.set !== 'function') return;
    try {
      var keys = typeof localStorage !== 'undefined' ? Object.keys(localStorage) : [];
      keys.forEach(function (key) {
        if (String(key || '').indexOf(STORAGE_CACHE_PREFIX) !== 0) return;
        Lampa.Storage.set(key, null);
      });
    } catch (error) {
      logWarn('Rows cache bulk clear failed', error, {
        debugOnly: true
      });
    }
  }
  function prefetchMainRows() {
    if (!Api) return;
    var configs = [];
    if (checkUpNextPermissions()) {
      configs.push({ name: 'TraktUpNextRow', apiMethod: 'upnext', limit: 36, displayLimit: 20, traktRow: 'upnext' });
      configs.push({ name: 'TraktWatchlistRow', apiMethod: 'watchlist', limit: 36, displayLimit: 20 });
    }
    if (checkRecommendationsPermissions()) {
      configs.push({ name: 'TraktRecommendationsRow', apiMethod: 'recommendations', limit: 36, displayLimit: 20 });
    }
    configs.forEach(function (config) {
      if (typeof Api[config.apiMethod] !== 'function') return;
      var cacheKey = buildRowCacheKey(config, {}, 'main');
      if (loadRowFromCache(cacheKey)) return;
      Api[config.apiMethod]({ limit: config.limit, page: 1 }).then(function (data) {
        var results = data && Array.isArray(data.results) ? data.results : [];
        if (!results.length) return;
        var limited = config.displayLimit > 0 ? results.slice(0, config.displayLimit) : results;
        saveRowToCache(cacheKey, createRowPayload(config, data, normalizeContentData(limited)));
      })['catch'](function () {});
    });
  }
  var _navDebugLog = [];
  var _traktRowsByTitle = {};

  function _navLogEvent(source, data) {
    var entry = { ts: new Date().toISOString(), source: source };
    if (data) {
      try {
        entry.component = data.component || data.trakt_more_component || '—';
        entry.title     = data.title || data.trakt_more_title || '—';
        entry.page      = data.page;
        var skipKeys = ['title','component','page','results','trakt_more_component','trakt_more_title','trakt_line','trakt_row'];
        entry.extra = Object.keys(data)
          .filter(function(k) { return skipKeys.indexOf(k) < 0; })
          .map(function(k) { return k + '=' + String(data[k]).slice(0, 20); }).join(' | ');
      } catch(e) {}
    }
    _navDebugLog.unshift(entry);
    if (_navDebugLog.length > 30) _navDebugLog.length = 30;
    try { Lampa.Storage.set('trakt_debug_nav', _navDebugLog); } catch(e) {}
  }
  function patchActivityPush() {
    if (!Lampa || !Lampa.Activity || typeof Lampa.Activity.push !== 'function') return;
    if (Lampa.Activity._traktNavPatched) return;
    var _orig = Lampa.Activity.push;
    Lampa.Activity.push = function(data) {
      try {
        // Lampa 3.0 игнорирует onMore и строит category_full из source:'tmdb'.
        // Перехватываем и перенаправляем на правильный Trakt-компонент.
        if (data && data.component === 'category_full' && data.title && _traktRowsByTitle[data.title]) {
          var traktComp = _traktRowsByTitle[data.title];
          _navLogEvent('activity_push_redirect', { from: 'category_full', to: traktComp, title: data.title });
          return _orig.call(this, { title: data.title, component: traktComp, page: 1 });
        }
        var comp = data && (data.component || '');
        var isTrakt = comp && (String(comp).indexOf('trakt') >= 0 || String(comp).indexOf('trakttv') >= 0);
        _navLogEvent(isTrakt ? 'activity_push_trakt' : 'activity_push', data || {});
      } catch(e) {}
      return _orig.apply(this, arguments);
    };
    Lampa.Activity._traktNavPatched = true;
  }

  function createOnMoreHandler(config) {
    return function () {
      _navLogEvent('onMore_callback', { component: config.component, title: config.displayTitle, page: 1 });
      Lampa.Activity.push({
        title: config.displayTitle,
        component: config.component,
        page: 1
      });
    };
  }
  function attachOnMore(line, config) {
    if (!line) return null;
    var payload = Object.assign({}, line);
    payload.onMore = createOnMoreHandler(config);
    return payload;
  }
  function createRowPayload(config, data, normalizedResults) {
    var payload = {
      title: config.displayTitle,
      component: config.component || undefined,
      trakt_line: true,
      trakt_line_title: config.displayTitle,
      trakt_more_component: config.component,
      trakt_more_title: config.displayTitle,
      trakt_row: config.traktRow || '',
      source: 'tmdb',
      page: data && data.page ? data.page : 1,
      total_pages: data && data.total_pages ? data.total_pages : 1,
      results: normalizedResults
    };
    return payload;
  }

  /**
   * Initialize ContentRows for TraktTV plugin (Lampa 3.0+)
   * Registers content rows for main and category screens
   */
  function initContentRows() {
    if (initialized) return;
    if (!Lampa || !Lampa.ContentRows || typeof Lampa.ContentRows.add !== 'function') return;
    initialized = true;
    patchActivityPush();

    // Cleanup deprecated cache keys
    Lampa.Storage.set('trakttv_cached_upnext', null);
    Lampa.Storage.set('trakttv_cached_recommendations', null);
    registerLineTitleDecorator();
    registerLampaRowHider();
    registerSourceFiltersCacheInvalidation();
    registerRows();
    registerCalendarRows();
    registerDvdRows();
    prefetchMainRows();
    registerMainScreenAutoLoad();
  }
  function registerMainScreenAutoLoad() {
    // Scroll-hack removed — it triggered 'visible' on items-line components before
    // their build() completed (this.html = null), causing crash in onVisible.
    // Lampa handles lazy-loading of below-fold rows natively as the user scrolls.
  }
  function registerSourceFiltersCacheInvalidation() {
    if (!Lampa || !Lampa.Storage || !Lampa.Storage.listener || typeof Lampa.Storage.listener.follow !== 'function') return;
    Lampa.Storage.listener.follow('change', function (event) {
      var name = event && event.name ? String(event.name) : '';
      if (!name || SOURCE_FILTER_FIELDS.indexOf(name) === -1) return;
      clearAllRowCaches();
    });
  }
  function registerLineTitleDecorator() {
    Lampa.Listener.follow('line', function (e) {
      if (!e || e.type !== 'create' || !e.data || !e.data.trakt_line) return;
      try {
        var titleNode = icons.createLineTitle(e.data.trakt_line_title || e.data.title || '');
        var container = e.line && e.line.render ? e.line.render().find('.items-line__title') : null;
        if (container && container.length) container.empty().append(titleNode);
      } catch (error) {
        logError('Line title decorate failed', error, {
          debugOnly: true
        });
      }
    });
    // Перехватываем событие 'more' для строк Трэкт, чтобы открывался правильный компонент.
    // Lampa 3.0 в некоторых версиях вместо вызова onMore() генерирует событие line{type:'more'},
    // которое затем Lampa обрабатывает по source:'tmdb' — и открывает пустой каталог TMDB.
    Lampa.Listener.follow('line', function (e) {
      if (!e || e.type !== 'more') return;
      _navLogEvent('line_more_event', e.data || {});
      if (!e.data || !e.data.trakt_more_component) return;
      try {
        Lampa.Activity.push({
          title: e.data.trakt_more_title || e.data.title || '',
          component: e.data.trakt_more_component,
          page: 1
        });
      } catch (err) {
        logError('Trakt line more navigation failed', err, { debugOnly: true });
      }
    });
  }
  function applyLampaHideClasses() {
    try {
      var body = document.body;
      if (!body) return;
      body.classList.toggle('trakt-hide-lampa-continue', !!Lampa.Storage.get('trakt_hide_lampa_continue'));
      body.classList.toggle('trakt-hide-lampa-recomend', !!Lampa.Storage.get('trakt_hide_lampa_recomend'));
    } catch (err) {}
  }
  function registerLampaRowHider() {
    var hideContinue = false;
    var hideRecomend = false;

    function isTraktRow(titleEl) {
      return !!(titleEl && titleEl.querySelector('svg'));
    }
    function checkLine(lineEl) {
      if (!lineEl || !hideContinue && !hideRecomend) return;
      var titleEl = lineEl.querySelector && lineEl.querySelector('.items-line__title');
      if (!titleEl || isTraktRow(titleEl)) return;
      var text = (titleEl.textContent || titleEl.innerText || '').trim().toLowerCase();
      if (!text) return;
      if (hideContinue && (text.indexOf('продолж') >= 0 || text.indexOf('continue') >= 0)) {
        lineEl.style.display = 'none';
      } else if (hideRecomend && (text.indexOf('рекомендуем') >= 0 || text.indexOf('recommended') >= 0)) {
        lineEl.style.display = 'none';
      }
    }
    function scanLines() {
      hideContinue = !!Lampa.Storage.get('trakt_hide_lampa_continue');
      hideRecomend = !!Lampa.Storage.get('trakt_hide_lampa_recomend');
      if (!hideContinue && !hideRecomend) return;
      var lines = document.querySelectorAll('.items-line');
      for (var i = 0; i < lines.length; i++) checkLine(lines[i]);
    }
    var scanTimer = null;
    function deferScan() {
      if (scanTimer) return;
      scanTimer = setTimeout(function () { scanTimer = null; scanLines(); }, 200);
    }
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length) { deferScan(); return; }
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(scanLines, 800);
    if (Lampa.Storage && Lampa.Storage.listener && typeof Lampa.Storage.listener.follow === 'function') {
      Lampa.Storage.listener.follow('change', function (event) {
        var name = event && event.name ? String(event.name) : '';
        if (name === 'trakt_hide_lampa_continue' || name === 'trakt_hide_lampa_recomend') {
          applyLampaHideClasses();
          deferScan();
        }
      });
    }
  }
  function createRowCall(config) {
    return function (params, screen) {
      if (typeof config.visibleOn === 'function' && !config.visibleOn(params, screen)) return;
      if (typeof config.checkPermission === 'function' && !config.checkPermission()) return;
      var rowLimit = Math.max(1, parseInt(config.limit, 10) || 20);
      var rowDisplayLimit = Math.max(1, parseInt(config.displayLimit, 10) || 0);
      return function (call) {
        if (!Api || typeof Api[config.apiMethod] !== 'function') {
          logWarn('Row API method unavailable', {
            row: config.name
          }, {
            debugOnly: true
          });
          return call();
        }
        var cacheKey = buildRowCacheKey(config, params, screen);
        var staleLine = attachOnMore(loadRowFromCache(cacheKey), config);
        var deadline = staleLine ? STALE_PRESENT_DEADLINE_MS : getUiDeadline(screen);
        var done = false;
        var timeoutId = null;
        var finish = function finish(line) {
          if (done) return;
          done = true;
          if (timeoutId) clearTimeout(timeoutId);
          if (line && Array.isArray(line.results) && line.results.length) call(line);else call();
        };
        timeoutId = setTimeout(function () {
          finish(staleLine);
        }, deadline);
        Api[config.apiMethod]({
          limit: rowLimit,
          page: 1
        }).then(function (data) {
          var results = data && Array.isArray(data.results) ? data.results : [];
          var filtered = typeof config.filter === 'function' ? config.filter(results, params, screen) : results;
          if (!filtered || !filtered.length) {
            clearRowCache(cacheKey);
            if (!done) finish(null);
            return;
          }
          var limitedResults = rowDisplayLimit > 0 ? filtered.slice(0, rowDisplayLimit) : filtered;
          var normalizedResults = normalizeContentData(limitedResults);
          if (screen === 'main' && config.topshelf) {
            updateTopshelf(config.topshelf, filtered);
          }
          var line = createRowPayload(config, data, normalizedResults);
          saveRowToCache(cacheKey, line);
          if (!done) finish(attachOnMore(line, config));
        })["catch"](function (error) {
          logWarn('Row load failed', {
            row: config.name,
            error: error
          }, {
            debugOnly: true
          });
          if (!done) finish(staleLine);
        });
      };
    };
  }
  function registerRows() {
    // Main-screen rows registered in display order (all index:1 — sequence equals display order)
    var mainRows = [{
      name: 'TraktUpNextRow',
      title: Lampa.Lang.translate('trakttv_row_upnext'),
      index: 1,
      screen: ['main', 'category'],
      displayTitle: Lampa.Lang.translate('trakttv_upnext'),
      apiMethod: 'upnext',
      component: 'trakt_upnext',
      limit: 36,
      displayLimit: 20,
      topshelf: 'upnext',
      traktRow: 'upnext',
      checkPermission: checkUpNextPermissions,
      visibleOn: function visibleOn(params, screen) {
        return screen !== 'category' || params.url === 'tv';
      }
    }, {
      name: 'TraktWatchlistRow',
      title: Lampa.Lang.translate('trakttv_row_watchlist_main'),
      index: 1,
      screen: ['main'],
      displayTitle: Lampa.Lang.translate('trakttv_watchlist'),
      apiMethod: 'watchlist',
      component: 'trakt_watchlist',
      limit: 36,
      displayLimit: 20,
      checkPermission: checkUpNextPermissions,
      visibleOn: function visibleOn() {
        return true;
      },
      filter: function filter(results) {
        var todayStr = new Date().toISOString().slice(0, 10);
        var currentYear = new Date().getFullYear();
        var upcomingIds = getUpcomingMovieIds();
        return results.filter(function(item) {
          if (item.card_type === 'movie') {
            // v2.1.9: Show movies with upcoming digital releases in watchlist row (with badge)
            if (item.id && upcomingIds.has(String(item.id))) return true;
            // Hide movies with no known release date (unreleased or untracked)
            if (!item.trakt_released) return false;
          }
          var rel = item.trakt_released;
          if (rel && /^\d{4}-\d{2}-\d{2}/.test(String(rel))) {
            return String(rel).slice(0, 10) <= todayStr;
          }
          return (parseInt(item.release_date, 10) || 0) <= currentYear;
        });
      }
    }];
    var catRows = [{
      name: 'TraktRecommendationsRowMovie',
      title: Lampa.Lang.translate('trakttv_row_recommendations_movie'),
      index: 2,
      screen: ['category'],
      displayTitle: Lampa.Lang.translate('trakttv_recommendations'),
      apiMethod: 'recommendations',
      component: 'trakttv_recommendations',
      limit: 36,
      displayLimit: 20,
      checkPermission: checkRecommendationsPermissions,
      visibleOn: function visibleOn(params) {
        return params.url === 'movie';
      },
      filter: function filter(results) {
        return filterByContentType(results, 'movie');
      }
    }, {
      name: 'TraktRecommendationsRowTv',
      title: Lampa.Lang.translate('trakttv_row_recommendations_tv'),
      index: 2,
      screen: ['category'],
      displayTitle: Lampa.Lang.translate('trakttv_recommendations'),
      apiMethod: 'recommendations',
      component: 'trakttv_recommendations',
      limit: 36,
      displayLimit: 20,
      checkPermission: checkRecommendationsPermissions,
      visibleOn: function visibleOn(params) {
        return params.url === 'tv';
      },
      filter: function filter(results) {
        return filterByContentType(results, 'tv');
      }
    }];
    // Lampa renders same-index rows in reverse registration order (LIFO),
    // so register in reverse display order: Recommendations → Calendar → Watchlist → UpNext
    // 4. Recommendations (registered first → shown last)
    var _recMainConfig = {
      name: 'TraktRecommendationsRow',
      displayTitle: Lampa.Lang.translate('trakttv_recommendations'),
      apiMethod: 'recommendations',
      component: 'trakttv_recommendations',
      limit: 36,
      displayLimit: 20,
      topshelf: 'recommendations',
      checkPermission: checkRecommendationsPermissions,
      visibleOn: function visibleOn() { return true; }
    };
    if (_recMainConfig.displayTitle && _recMainConfig.component) {
      _traktRowsByTitle[_recMainConfig.displayTitle] = _recMainConfig.component;
    }
    Lampa.ContentRows.add({
      name: 'TraktRecommendationsRow',
      title: Lampa.Lang.translate('trakttv_row_recommendations_main'),
      index: 1,
      screen: ['main'],
      onMore: createOnMoreHandler(_recMainConfig),
      call: createRowCall(_recMainConfig)
    });
    // 3. Calendar
    if (Api && typeof Api.get === 'function') {
      Lampa.ContentRows.add({
        name: 'TraktCalendarRow',
        title: Lampa.Lang.translate('trakttv_row_calendar_main'),
        index: 1,
        screen: ['main'],
        call: createCalendarCall(function () { return true; })
      });
    }
    // 2. Watchlist, 1. Up Next (registered last → shown first)
    mainRows.slice().reverse().forEach(function (row) {
      if (row.displayTitle && row.component) _traktRowsByTitle[row.displayTitle] = row.component;
      Lampa.ContentRows.add({
        name: row.name,
        title: row.title,
        index: row.index,
        screen: row.screen,
        onMore: createOnMoreHandler(row),
        call: createRowCall(row)
      });
    });
    // Category rows
    catRows.forEach(function (row) {
      if (row.displayTitle && row.component) _traktRowsByTitle[row.displayTitle] = row.component;
      Lampa.ContentRows.add({
        name: row.name,
        title: row.title,
        index: row.index,
        screen: row.screen,
        onMore: createOnMoreHandler(row),
        call: createRowCall(row)
      });
    });
  }

  /**
   * Register Calendar rows with Episode card format
   * (same look as title_upcoming_episodes / title_recent_episodes)
   */
  var CALENDAR_ROW_LIMIT = 20;
  function createCalendarCall(screenFilter) {
      return function (params, screen) {
        // Permission: needs Trakt auth
        if (!Lampa.Storage.get('trakt_token')) return;

        // Screen-specific visibility
        if (typeof screenFilter === 'function' && !screenFilter(params, screen)) return;
        return function (call) {
          var now = new Date();
          var nowY = now.getFullYear();
          var nowM = String(now.getMonth() + 1).padStart(2, '0');
          var nowD = String(now.getDate()).padStart(2, '0');
          var todayStr = nowY + '-' + nowM + '-' + nowD;
          var dateString = todayStr;
          var days = 14;

          var showsPromise = Api.get("/calendars/my/shows/".concat(dateString, "/").concat(days, "?extended=full,images"));
          var moviesPromise = (Api.watchlistMovies ? Api.watchlistMovies() : Promise.resolve([])).catch(function () { return []; });

          Promise.all([showsPromise, moviesPromise]).then(function (fetched) {
            var response = fetched[0];
            var movieItems = Array.isArray(fetched[1]) ? fetched[1] : [];
            var raw = Array.isArray(response) ? response : [];

            // Group by show TMDB ID (deduplicate — one card per show)
            var showMap = {};
            raw.forEach(function (item) {
              var show = item && item.show;
              var episode = item && item.episode;
              if (!show || !show.ids) return;
              var tmdbId = show.ids.tmdb;
              if (!tmdbId) return;
              if (!showMap[tmdbId]) {
                showMap[tmdbId] = { show: show, first_aired: item.first_aired, episode: episode };
              }
            });
            var shows = Object.values(showMap);

            // Sort by first_aired ascending, only today and future
            shows.sort(function (a, b) {
              return (a.first_aired || '').localeCompare(b.first_aired || '');
            });
            shows = shows.filter(function (s) {
              var d = s.first_aired ? String(s.first_aired).slice(0, 10) : '';
              return d >= todayStr;
            });

            // Fetch digital release dates for watchlist movies
            var movieReleasePromises = movieItems.slice(0, 60).map(function (item) {
              var movie = item && (item.movie || item);
              if (!movie || !movie.ids || !movie.ids.tmdb) return Promise.resolve(null);
              var tmdbId = movie.ids.tmdb;
              if (!Lampa.TMDB || !Lampa.Reguest) return Promise.resolve(null);
              return new Promise(function (resolve) {
                try {
                  var url = Lampa.TMDB.api('movie/' + tmdbId + '?api_key=' + Lampa.TMDB.key() + '&append_to_response=release_dates&language=' + Lampa.Storage.get('language', 'en'));
                  var network = new Lampa.Reguest();
                  network.silent(url, function (data) {
                    var digitalDate = null;
                    if (data && data.release_dates && data.release_dates.results) {
                      var allDates = [];
                      data.release_dates.results.forEach(function (country) {
                        (country.release_dates || []).forEach(function (rd) {
                          if (rd.type === 4 && rd.release_date) {
                            allDates.push({ country: country.iso_3166_1, date: String(rd.release_date).slice(0, 10) });
                          }
                        });
                      });
                      var us = allDates.find(function (x) { return x.country === 'US'; });
                      if (us) digitalDate = us.date;
                      else if (allDates.length) digitalDate = allDates[0].date;
                    }
                    if (digitalDate && digitalDate >= todayStr) {
                      return resolve({ movie: movie, data: data, digitalDate: digitalDate });
                    }
                    var theatrical = data && data.release_date ? String(data.release_date).slice(0, 10) : null;
                    if (!theatrical || theatrical >= todayStr) {
                      return resolve({ movie: movie, soon: true });
                    }
                    resolve(null);
                  }, function () { resolve(null); });
                } catch (e) { resolve(null); }
              });
            });

            // Resolve Episode interaction & Module from Lampa runtime
            var EpisodeClass = Lampa.Maker && Lampa.Maker.get('Episode');
            var EpisodeModule = Lampa.Maker && Lampa.Maker.module('Episode');
            var moduleMask = EpisodeModule ? EpisodeModule.only('Card', 'Callback') : undefined;

            return Promise.all(movieReleasePromises).then(function (movieFetched) {
              var validMovies = movieFetched.filter(function (m) { return m && m.digitalDate; });
              var soonMovies  = movieFetched.filter(function (m) { return m && m.soon; });

              // Persist IDs of movies with upcoming digital releases so the watchlist row can exclude them
              saveUpcomingMovieIds(new Set(
                validMovies.map(function(m) { return m.movie && m.movie.ids && String(m.movie.ids.tmdb); }).filter(Boolean)
              ));
              var _datesMap = {};
              validMovies.forEach(function(m) {
                var _id = m.movie && m.movie.ids && m.movie.ids.tmdb;
                if (_id) _datesMap[String(_id)] = m.digitalDate;
              });
              var _existingMovieDates = getUpcomingMovieDates();
              Object.assign(_existingMovieDates, _datesMap);
              saveUpcomingMovieDates(_existingMovieDates);
              var _existingSoon = getSoonMovieIds();
              soonMovies.forEach(function(m) {
                var _sid = m.movie && m.movie.ids && String(m.movie.ids.tmdb);
                if (_sid) _existingSoon.add(_sid);
              });
              saveSoonMovieIds(_existingSoon);
              _digitalDatesAvailable = true;
              _renderedCardInstances.forEach(renderDigitalReleaseBadge);
              refreshDigitalBadgesDOM();
              setTimeout(refreshDigitalBadgesDOM, 1500);
              setTimeout(refreshDigitalBadgesDOM, 4000);

              // Build show cards
              var showResults = shows.map(function (item) {
                var show = item.show;
                var first_aired = item.first_aired;
                var episode = item.episode;
                var airDate = first_aired ? String(first_aired).slice(0, 10) : '';
                var airTime = airDate ? Lampa.Utils.parseToDate(airDate).getTime() : Date.now();
                var card = {
                  id: show.ids.tmdb,
                  ids: show.ids,
                  title: show.title,
                  original_title: show.title,
                  original_name: show.title,
                  name: show.title,
                  poster: getImageUrl(show, 'poster'),
                  image: getImageUrl(show, 'fanart'),
                  source: 'tmdb'
                };
                var epData = {
                  air_date: airDate,
                  season_number: episode ? episode.season : null,
                  episode_number: episode ? episode.number : null,
                  name: episode ? episode.title : '',
                  still_path: ''
                };
                var out;
                if (EpisodeClass) {
                  out = {
                    card: card, episode: epData, time: airTime,
                    title: show.title, id: show.ids.tmdb, ids: show.ids, params: {}
                  };
                  Lampa.Arrays && Lampa.Arrays.extend
                    ? Lampa.Arrays.extend(out, epData)
                    : Object.keys(epData).forEach(function (k) { out[k] = epData[k]; });
                  out.params.createInstance = function (data) {
                    var merged = _typeof(data) === 'object' && data !== null
                      ? Object.assign({}, data, data.episode || {}, { card: data.card || data })
                      : {};
                    var instance = new EpisodeClass(merged);
                    if (typeof instance.build === 'function') { try { instance.build(); } catch(e) {} }
                    return instance;
                  };
                } else {
                  out = Object.assign({}, card, {
                    card: card, time: airTime,
                    title: show.title, id: show.ids.tmdb, ids: show.ids,
                    episode: epData, params: {}
                  });
                }
                if (moduleMask) out.params.module = moduleMask;
                out.params.emit = {
                  onlyEnter: function onlyEnter() {
                    Lampa.Activity.push({ url: '', component: 'full', id: card.id, method: 'tv', card: card, source: 'tmdb' });
                  },
                  onlyFocus: function onlyFocus() {
                    if (Lampa.Utils && Lampa.Utils.cardImgBackgroundBlur) {
                      Lampa.Background.change(Lampa.Utils.cardImgBackgroundBlur(card));
                    }
                  }
                };
                return out;
              });

              // Build movie cards from watchlist with digital release dates
              var movieCards = validMovies.map(function (m) {
                var movie = m.movie;
                var data = m.data;
                var digitalDate = m.digitalDate;
                var tmdbId = movie.ids.tmdb;
                var title = (data && (data.title || data.name)) || movie.title || '';
                var poster = data && data.poster_path ? 'https://image.tmdb.org/t/p/w500' + data.poster_path : getImageUrl(movie, 'poster');
                var image = data && data.backdrop_path ? 'https://image.tmdb.org/t/p/w1280' + data.backdrop_path : getImageUrl(movie, 'fanart');
                var stillPath = data && data.backdrop_path ? data.backdrop_path : '';
                var airTime = Lampa.Utils.parseToDate(digitalDate).getTime();
                var card = {
                  id: tmdbId, ids: movie.ids, title: title,
                  original_title: movie.title || title, original_name: title, name: title,
                  poster: poster, image: image, source: 'tmdb', type: 'movie'
                };
                // Episode-card structure with season/episode = 1 (truthy) for module validation
                var epData = {
                  air_date: digitalDate,
                  season_number: 1,
                  episode_number: 1,
                  name: title,
                  still_path: stillPath
                };
                var out;
                if (EpisodeClass) {
                  out = {
                    card: card, episode: epData, time: airTime, title: title,
                    id: tmdbId, ids: movie.ids, params: {},
                    air_date: digitalDate, still_path: stillPath, isMovie: true
                  };
                  out.params.createInstance = function (data) {
                    var merged = _typeof(data) === 'object' && data !== null
                      ? Object.assign({}, data, data.episode || {}, { card: data.card || data })
                      : {};
                    delete merged.season_number;
                    delete merged.episode_number;
                    delete merged.season;
                    delete merged.number;
                    var instance = new EpisodeClass(merged);
                    if (typeof instance.build === 'function') { try { instance.build(); } catch(e) {} }
                    return instance;
                  };
                } else {
                  out = Object.assign({}, card, {
                    card: card, time: airTime, title: title,
                    id: tmdbId, ids: movie.ids, params: {},
                    isMovie: true
                  });
                }
                if (moduleMask) out.params.module = moduleMask;
                out.params.emit = {
                  onlyEnter: function onlyEnter() {
                    Lampa.Activity.push({ url: '', component: 'full', id: tmdbId, method: 'movie', card: card, source: 'tmdb' });
                  },
                  onlyFocus: function onlyFocus() {
                    if (Lampa.Utils && Lampa.Utils.cardImgBackgroundBlur) {
                      Lampa.Background.change(Lampa.Utils.cardImgBackgroundBlur(card));
                    }
                  }
                };
                return out;
              });

              // Merge shows + movies, sort by air time, deduplicate by type:id, limit
              var combined = showResults.concat(movieCards);
              combined.sort(function (a, b) { return (a.time || 0) - (b.time || 0); });
              var _seenIds = {};
              combined = combined.filter(function (item) {
                var key = (item.isMovie ? 'movie:' : 'tv:') + item.id;
                if (_seenIds[key]) return false;
                _seenIds[key] = true;
                return true;
              });
              var baseResults = combined.slice(0, CALENDAR_ROW_LIMIT);

              // Fetch episode stills for shows
              var stillPromises = baseResults.map(function (out) {
                if (out.isMovie) return Promise.resolve('');
                var showTmdbId = out.id;
                var seasonNum = out.episode && out.episode.season_number;
                var epNum = out.episode && out.episode.episode_number;
                if (!showTmdbId || seasonNum == null || epNum == null) return Promise.resolve('');
                return new Promise(function (resolve) {
                  try {
                    var lang = Lampa.Storage.get('language', 'en');
                    var url = Lampa.TMDB.api('tv/' + showTmdbId + '/season/' + seasonNum + '/episode/' + epNum + '?api_key=' + Lampa.TMDB.key() + '&language=' + lang);
                    var network = new Lampa.Reguest();
                    network.silent(url, function (data) {
                      resolve(data && data.still_path ? String(data.still_path) : '');
                    }, function () { resolve(''); });
                  } catch (e) { resolve(''); }
                });
              });

              // Fetch locale enrichment for shows
              var _calLang = Lampa.Storage ? Lampa.Storage.get('language', 'ru') : 'ru';
              var enrichPromises = baseResults.map(function (out) {
                if (out.isMovie) return Promise.resolve();
                var tmdbId = out.id;
                if (!tmdbId || !Lampa.TMDB || !Lampa.Reguest) return Promise.resolve();
                var cacheKey = 'tv/' + tmdbId + '/' + _calLang;
                if (_tmdbLocaleCache[cacheKey]) {
                  var cached = _tmdbLocaleCache[cacheKey];
                  if (cached.title) { out.title = cached.title; if (out.card) { out.card.title = cached.title; out.card.name = cached.title; } }
                  if (cached.poster && out.card) out.card.poster = cached.poster;
                  if (cached.image && out.card) out.card.image = cached.image;
                  if (cached.backdrop_path) out._backdropRaw = cached.backdrop_path;
                  return Promise.resolve();
                }
                return new Promise(function (resolve) {
                  var url = Lampa.TMDB.api('tv/' + tmdbId + '?api_key=' + Lampa.TMDB.key() + '&language=' + _calLang);
                  var network = new Lampa.Reguest();
                  network.silent(url, function (d) {
                    var entry = {};
                    var localTitle = d && (d.title || d.name);
                    if (localTitle) { out.title = localTitle; if (out.card) { out.card.title = localTitle; out.card.name = localTitle; } entry.title = localTitle; }
                    if (d && d.poster_path) { var calPoster = 'https://image.tmdb.org/t/p/w500' + d.poster_path; if (out.card) out.card.poster = calPoster; entry.poster = calPoster; }
                    if (d && d.backdrop_path) {
                      var calImage = 'https://image.tmdb.org/t/p/w1280' + d.backdrop_path;
                      if (out.card) out.card.image = calImage;
                      entry.image = calImage;
                      entry.backdrop_path = d.backdrop_path;
                      out._backdropRaw = d.backdrop_path;
                    }
                    _tmdbLocaleCache[cacheKey] = entry;
                    resolve();
                  }, function () { resolve(); });
                });
              });

              return Promise.all([Promise.all(stillPromises), Promise.all(enrichPromises)]).then(function (res) {
                var stillPaths = res[0];
                baseResults.forEach(function (out, index) {
                  var path = stillPaths[index];
                  if (path) {
                    out.still_path = path;
                    if (out.episode) out.episode.still_path = path;
                  } else if (!out.isMovie && out._backdropRaw) {
                    out.still_path = out._backdropRaw;
                    if (out.episode) out.episode.still_path = out._backdropRaw;
                  }
                  delete out._backdropRaw;
                });
                if (!baseResults.length) return call();
                var calTitle = Lampa.Lang.translate('trakttv_calendar');
                call({
                  results: baseResults,
                  title: calTitle,
                  source: 'tmdb',
                  page: 1,
                  total_pages: 1,
                  trakt_line: true,
                  trakt_line_title: calTitle,
                  trakt_more_component: 'trakt_timetable_all',
                  trakt_more_title: calTitle,
                  onMore: function () {
                    Lampa.Activity.push({ title: calTitle, component: 'trakt_timetable_all', page: 1 });
                  }
                });
              });
            });
          }).catch(function () { call(); });
        };
      };
    }

  function registerCalendarRows() {
    if (!Api || typeof Api.get !== 'function') return;
    // Row: category / tv screen only (main screen Calendar is registered in registerRows)
    Lampa.ContentRows.add({
      name: 'TraktCalendarRowTv',
      title: Lampa.Lang.translate('trakttv_row_calendar_tv'),
      index: 2,
      screen: ['category'],
      call: createCalendarCall(function (params) {
        return params && params.url === 'tv';
      })
    });
  }

  /**
   * Register DVD calendar rows (standard poster cards)
   * Uses /calendars/all/dvd/{start_date}/{days} via createRowCall
   */
  function registerDvdRows() {
    var dvdRows = [{
      name: 'TraktDvdCalendarRowMovies',
      title: Lampa.Lang.translate('trakttv_row_dvd_calendar_movies'),
      index: 3,
      screen: ['category'],
      displayTitle: Lampa.Lang.translate('trakttv_calendar'),
      apiMethod: 'dvdCalendar',
      limit: 36,
      displayLimit: 20,
      checkPermission: checkCalendarPermissions,
      visibleOn: function visibleOn(params) {
        return params && params.url === 'movie';
      }
    }];
    dvdRows.forEach(function (row) {
      Lampa.ContentRows.add({
        name: row.name,
        title: row.title,
        index: row.index,
        screen: row.screen,
        call: createRowCall(row)
      });
    });
  }

  var SOURCE_KEY = 'trakttv';
  var DEFAULT_LIMIT = 20;
  var DEFAULT_CHUNK = 3;
  var TRAKT_TRENDING_GENRES = [{
    name: 'Action',
    slug: 'action',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Adventure',
    slug: 'adventure',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Animation',
    slug: 'animation',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Anime',
    slug: 'anime',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Biography',
    slug: 'biography',
    supported_types: ['shows']
  }, {
    name: 'Children',
    slug: 'children',
    supported_types: ['shows']
  }, {
    name: 'Comedy',
    slug: 'comedy',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Crime',
    slug: 'crime',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Documentary',
    slug: 'documentary',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Donghua',
    slug: 'donghua',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Drama',
    slug: 'drama',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Family',
    slug: 'family',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Fantasy',
    slug: 'fantasy',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Game Show',
    slug: 'game-show',
    supported_types: ['shows']
  }, {
    name: 'History',
    slug: 'history',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Holiday',
    slug: 'holiday',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Home And Garden',
    slug: 'home-and-garden',
    supported_types: ['shows']
  }, {
    name: 'Horror',
    slug: 'horror',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Mini Series',
    slug: 'mini-series',
    supported_types: ['shows']
  }, {
    name: 'Music',
    slug: 'music',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Musical',
    slug: 'musical',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Mystery',
    slug: 'mystery',
    supported_types: ['movies', 'shows']
  }, {
    name: 'News',
    slug: 'news',
    supported_types: ['shows']
  }, {
    name: 'None',
    slug: 'none',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Reality',
    slug: 'reality',
    supported_types: ['shows']
  }, {
    name: 'Romance',
    slug: 'romance',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Science Fiction',
    slug: 'science-fiction',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Short',
    slug: 'short',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Soap',
    slug: 'soap',
    supported_types: ['shows']
  }, {
    name: 'Special Interest',
    slug: 'special-interest',
    supported_types: ['shows']
  }, {
    name: 'Sporting Event',
    slug: 'sporting-event',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Superhero',
    slug: 'superhero',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Suspense',
    slug: 'suspense',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Talk Show',
    slug: 'talk-show',
    supported_types: ['shows']
  }, {
    name: 'Thriller',
    slug: 'thriller',
    supported_types: ['movies', 'shows']
  }, {
    name: 'War',
    slug: 'war',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Western',
    slug: 'western',
    supported_types: ['movies', 'shows']
  }];
  var TRAKT_TRENDING_GENRE_SLUGS = new Set(TRAKT_TRENDING_GENRES.map(function (genre) {
    return String(genre && genre.slug ? genre.slug : '').trim().toLowerCase();
  }).filter(Boolean));
  function t(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    try {
      var translated = Lampa.Lang.translate(key);
      return translated || fallback || key;
    } catch (e) {
      return fallback || key;
    }
  }
  function decodeQuery(value) {
    if (value === undefined || value === null) return '';
    if (_typeof(value) === 'object') return '';
    var source = String(value || '').trim();
    if (!source) return '';
    if (source === '[object Object]') return '';
    try {
      var decoded = decodeURIComponent(source);
      var normalized = String(decoded || '').trim();
      if (!normalized || normalized === '[object Object]') return '';
      return normalized;
    } catch (e) {
      return source === '[object Object]' ? '' : source;
    }
  }
  function toPositiveInt(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }
  function toNonNegativeInt(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
  }
  function readBooleanStorage(name) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var parse = function parse(value) {
      if (typeof value === 'boolean') return value;
      if (value === 1 || value === '1' || value === 'true') return true;
      if (value === 0 || value === '0' || value === 'false') return false;
      return null;
    };
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        var direct = parse(Lampa.Storage.get(name));
        if (direct !== null) return direct;
      }
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
        var fromField = parse(Lampa.Storage.field(name));
        if (fromField !== null) return fromField;
      }
    } catch (error) {
      return fallback;
    }
    return fallback;
  }
  function resolvePagination() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
    var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var fallbackPage = toPositiveInt(page) || 1;
    var fallbackLimit = toPositiveInt(limit) || DEFAULT_LIMIT;
    var safeCount = Math.max(0, parseInt(count, 10) || 0);
    var headerPage = toPositiveInt(headers['x-pagination-page']) || fallbackPage;
    var headerLimit = toPositiveInt(headers['x-pagination-limit']) || fallbackLimit;
    var headerTotal = toNonNegativeInt(headers['x-pagination-item-count']);
    var headerPageCount = toPositiveInt(headers['x-pagination-page-count']);
    var total = headerTotal !== null ? headerTotal : (Math.max(1, headerPage) - 1) * Math.max(1, headerLimit) + safeCount;
    var totalPages = headerPageCount || (safeCount >= headerLimit ? headerPage + 1 : Math.max(1, headerPage));
    return {
      page: headerPage,
      limit: headerLimit,
      total: total,
      total_pages: totalPages
    };
  }
  function normalizeSearchType() {
    var rawType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var value = String(rawType || '').trim().toLowerCase();
    if (value === 'movie' || value === 'movies') return 'movie';
    if (value === 'tv' || value === 'show' || value === 'shows' || value === 'series') return 'show';
    if (value === 'list' || value === 'lists') return 'list';
    return '';
  }
  function normalizePath() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return String(path || '').trim().replace(/^\/+/, '');
  }
  function applyQueryParams(query) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!params || _typeof(params) !== 'object') return query;
    Object.keys(params).forEach(function (key) {
      var value = params[key];
      if (value === undefined || value === null || value === '') return;
      var normalizedKey = String(key || '').trim();
      if (!normalizedKey || normalizedKey === '[object Object]') return;
      if (_typeof(value) === 'object') return;
      var normalizedValue = String(value).trim();
      if (!normalizedValue || normalizedValue === '[object Object]') return;
      query.set(normalizedKey, normalizedValue);
    });
    return query;
  }
  function applySourceFilters(query) {
    query.set('ignore_watched', readBooleanStorage('trakt_source_ignore_watched', false) ? 'true' : 'false');
    query.set('ignore_watchlisted', readBooleanStorage('trakt_source_ignore_watchlisted', false) ? 'true' : 'false');
    return query;
  }
  function buildFeedUrl(path) {
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
    var queryParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var query = applyQueryParams(applySourceFilters(new URLSearchParams({
      extended: 'full,images',
      page: String(Math.max(1, parseInt(page, 10) || 1)),
      limit: String(Math.max(1, parseInt(limit, 10) || DEFAULT_LIMIT))
    })), queryParams);
    return "/".concat(normalizePath(path), "?").concat(query.toString());
  }
  function buildRecommendationsUrl(type) {
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
    var queryParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var normalizedType = normalizePath(type).replace(/^recommendations\//, '');
    var query = applyQueryParams(applySourceFilters(new URLSearchParams({
      extended: 'full,images',
      page: String(Math.max(1, parseInt(page, 10) || 1)),
      limit: String(Math.max(1, parseInt(limit, 10) || DEFAULT_LIMIT))
    })), queryParams);
    query.set('ignore_collected', readBooleanStorage('trakt_source_ignore_watchlisted', false) ? 'true' : 'false');
    return "/recommendations/".concat(normalizedType, "?").concat(query.toString());
  }
  function buildSearchUrl(type, query) {
    var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_LIMIT;
    var queryParams = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var normalizedQuery = decodeQuery(query);
    if (!normalizedQuery) return '';
    var finalParams = applyQueryParams(applySourceFilters(new URLSearchParams({
      query: normalizedQuery,
      extended: 'full,images',
      page: String(Math.max(1, parseInt(page, 10) || 1)),
      limit: String(Math.max(1, parseInt(limit, 10) || DEFAULT_LIMIT))
    })), queryParams);
    return "/search/".concat(normalizePath(type), "?").concat(finalParams.toString());
  }
  function normalizeTraktGenreValue(value) {
    var normalized = String(value || '').trim().toLowerCase();
    if (!normalized || normalized === '[object object]') return '';
    if (normalized === '16') return 'animation';
    if (/^\d+$/.test(normalized)) return '';
    if (TRAKT_TRENDING_GENRE_SLUGS.has(normalized)) return normalized;
    if (/^[a-z0-9-]+$/.test(normalized)) return normalized;
    return '';
  }
  function resolveTraktGenreFilter() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var raw = params ? params.genres : null;
    if (raw === undefined || raw === null || raw === '') return '';
    var values = Array.isArray(raw) ? raw : String(raw).split(',');
    var normalizedValues = values.map(function (value) {
      return normalizeTraktGenreValue(value);
    }).filter(Boolean);
    if (!normalizedValues.length) return '';
    return Array.from(new Set(normalizedValues)).join(',');
  }
  function supportsAllGenreTypes() {
    var genre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var requiredTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (!Array.isArray(requiredTypes) || !requiredTypes.length) return true;
    var supportedTypes = Array.isArray(genre.supported_types) ? genre.supported_types : [];
    return requiredTypes.every(function (type) {
      return supportedTypes.indexOf(type) > -1;
    });
  }
  function buildTrendingGenreDefinitions(path, typeHint) {
    var requiredTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var trendingTitle = t('trakttv_source_trending', 'Trending');
    return TRAKT_TRENDING_GENRES.filter(function (genre) {
      return supportsAllGenreTypes(genre, requiredTypes);
    }).map(function (genre) {
      return {
        path: path,
        title: "".concat(trendingTitle, ": ").concat(TRAKT_GENRE_NAMES_RU[genre.slug] || genre.name),
        typeHint: typeHint,
        query: {
          genres: genre.slug
        }
      };
    });
  }
  function detectMediaType(entry) {
    var typeHint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var normalizedHint = String(typeHint || '').toLowerCase();
    if (normalizedHint === 'movie' || normalizedHint === 'movies') return 'movie';
    if (normalizedHint === 'show' || normalizedHint === 'shows' || normalizedHint === 'tv') return 'tv';
    if (entry && _typeof(entry) === 'object') {
      if (entry.movie) return 'movie';
      if (entry.show) return 'tv';
      if (entry.type === 'movie') return 'movie';
      if (entry.type === 'show' || entry.type === 'tv') return 'tv';
      if (entry.first_aired || entry.aired_episodes !== undefined) return 'tv';
    }
    return 'movie';
  }
  function mapMediaCard(entry) {
    var typeHint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (!entry || _typeof(entry) !== 'object') return null;
    var media = entry.movie || entry.show || entry;
    if (!media || _typeof(media) !== 'object') return null;
    var ids = media.ids && _typeof(media.ids) === 'object' ? _objectSpread2({}, media.ids) : {};
    var mediaType = detectMediaType(entry, typeHint);
    var id = ids.tmdb || null;
    if (!id) return null;
    var title = media.title || media.name || media.original_title || '';
    var releaseDate = mediaType === 'movie' ? media.released || (media.year ? String(media.year) : '') : media.first_aired || (media.year ? String(media.year) : '');
    var poster = getImageUrl(media, 'poster') || getImageUrl(media, 'thumb') || getImageUrl(media, 'fanart') || textToImage(title || 'No image');
    var fanart = getImageUrl(media, 'fanart') || getImageUrl(media, 'thumb') || poster;
    var card = {
      component: 'full',
      source: 'tmdb',
      id: id,
      ids: ids,
      title: title,
      original_title: media.original_title || title,
      release_date: releaseDate ? String(releaseDate) : '',
      vote_average: Number(media.rating || 0),
      vote_count: Number(media.votes || 0),
      overview: media.overview || '',
      poster: poster,
      image: fanart,
      method: mediaType === 'movie' ? 'movie' : 'tv',
      card_type: mediaType === 'movie' ? 'movie' : 'tv'
    };
    if (mediaType === 'movie') {
      card.type = 'movie';
    } else {
      card.type = 'tv';
      card.name = title;
      card.original_name = media.original_title || title;
    }
    if (ids.imdb) card.imdb_id = ids.imdb;
    if (media.runtime) card.runtime = Number(media.runtime) || 0;
    if (media.year) card.release_year = String(media.year);
    return card;
  }
  function mapListCard(entry) {
    if (!entry || _typeof(entry) !== 'object') return null;
    var list = entry.list || entry;
    var ids = list.ids && _typeof(list.ids) === 'object' ? _objectSpread2({}, list.ids) : {};
    var listId = ids.trakt || list.id;
    if (!listId) return null;
    var title = (list.name || list.title || list.slug || "List ".concat(listId)).toString().trim();
    return {
      component: 'full',
      source: SOURCE_KEY,
      id: "trakt_list_".concat(listId),
      title: title,
      original_title: title,
      release_date: '',
      vote_average: 0,
      poster: getImageUrl(list, 'poster') || textToImage(title || 'List'),
      image: getImageUrl(list, 'fanart'),
      method: 'list',
      card_type: 'list',
      trakt_search_type: 'list',
      trakt_list_id: listId,
      list_id: listId,
      ids: ids
    };
  }
  function mapCards(items) {
    var typeHint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var source = Array.isArray(items) ? items : [];
    var normalizedHint = String(typeHint || '').toLowerCase();
    if (normalizedHint === 'list') {
      return source.map(mapListCard).filter(Boolean);
    }
    return source.map(function (entry) {
      return mapMediaCard(entry, normalizedHint);
    }).filter(Boolean);
  }
  function fetchWithMeta(url) {
    return requestApi('GET', url, {}, false, 0, {
      withMeta: true
    }).then(function (response) {
      var data = response && Array.isArray(response.data) ? response.data : [];
      var headers = response && response.headers ? response.headers : {};
      return {
        data: data,
        headers: headers
      };
    });
  }
  function createLinePayload(_ref) {
    var title = _ref.title,
      path = _ref.path,
      items = _ref.items,
      headers = _ref.headers,
      page = _ref.page,
      limit = _ref.limit,
      typeHint = _ref.typeHint,
      _ref$query = _ref.query,
      query = _ref$query === void 0 ? {} : _ref$query;
    var results = mapCards(items, typeHint);
    var pagination = resolvePagination(headers, page, limit, Array.isArray(items) ? items.length : 0);
    var line = {
      title: title,
      url: normalizePath(path),
      source: SOURCE_KEY,
      page: pagination.page,
      total: pagination.total,
      total_pages: pagination.total_pages,
      results: results
    };
    var genres = query && _typeof(query) === 'object' ? String(query.genres || '').trim() : '';
    if (genres) line.genres = genres;
    return line;
  }
  function loadFeedLine(_ref2) {
    var path = _ref2.path,
      title = _ref2.title,
      _ref2$typeHint = _ref2.typeHint,
      typeHint = _ref2$typeHint === void 0 ? 'media' : _ref2$typeHint,
      _ref2$recommendations = _ref2.recommendations,
      recommendations = _ref2$recommendations === void 0 ? false : _ref2$recommendations,
      _ref2$query = _ref2.query,
      query = _ref2$query === void 0 ? {} : _ref2$query;
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
    var endpoint = recommendations ? buildRecommendationsUrl(path, page, limit, query) : buildFeedUrl(path, page, limit, query);
    return fetchWithMeta(endpoint).then(function (_ref3) {
      var data = _ref3.data,
        headers = _ref3.headers;
      var line = createLinePayload({
        title: title,
        path: path,
        items: data,
        headers: headers,
        page: page,
        limit: limit,
        typeHint: typeHint,
        query: query
      });
      return enrichWithTmdbLocale(line);
    });
  }
  function loadSearchLine(type, query) {
    var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_LIMIT;
    var extraQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var normalizedType = normalizeSearchType(type);
    var normalizedQuery = decodeQuery(query);
    if (!normalizedType || !normalizedQuery) return Promise.resolve(null);
    var endpoint = buildSearchUrl(normalizedType, normalizedQuery, page, limit, extraQuery);
    if (!endpoint) return Promise.resolve(null);
    return fetchWithMeta(endpoint).then(function (_ref4) {
      var data = _ref4.data,
        headers = _ref4.headers;
      var title = normalizedType === 'movie' ? t('menu_movies', 'Movies') : normalizedType === 'show' ? t('menu_tv', 'TV') : t('trakt_source_search_lists', 'Lists');
      var typeHint = normalizedType === 'list' ? 'list' : normalizedType === 'show' ? 'show' : 'movie';
      var line = createLinePayload({
        title: title,
        path: "search/".concat(normalizedType),
        items: data,
        headers: headers,
        page: page,
        limit: limit,
        typeHint: typeHint
      });
      line.type = normalizedType === 'show' ? 'tv' : normalizedType;
      line.search_type = normalizedType;
      line.query = normalizedQuery;
      if (normalizedType === 'list') return line;
      return enrichWithTmdbLocale(line);
    });
  }
  function buildMainDefinitions() {
    var defs = [{
      path: 'media/trending',
      title: t('trakttv_source_trending', 'Trending'),
      typeHint: 'media'
    }, {
      path: 'media/anticipated',
      title: t('trakttv_source_anticipated', 'Anticipated'),
      typeHint: 'media'
    }, {
      path: 'media/popular',
      title: t('trakttv_source_popular', 'Popular'),
      typeHint: 'media'
    }];
    if (Lampa.Storage.get('trakt_token')) {
      defs.push({
        path: 'recommendations/movies',
        title: t('trakttv_source_recommendations_movies', 'Recommendations: Movies'),
        typeHint: 'movie',
        recommendations: true
      });
      defs.push({
        path: 'recommendations/shows',
        title: t('trakttv_source_recommendations_shows', 'Recommendations: Shows'),
        typeHint: 'show',
        recommendations: true
      });
    }
    defs.push.apply(defs, _toConsumableArray(buildTrendingGenreDefinitions('media/trending', 'media', ['movies', 'shows'])));
    return defs;
  }
  function buildCategoryDefinitions() {
    var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'movies';
    var traktGenre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var isShows = section === 'shows';
    var useMediaForAnimation = !isShows && traktGenre === 'animation';
    var basePath = useMediaForAnimation ? 'media' : section;
    var baseTypeHint = useMediaForAnimation ? 'media' : isShows ? 'show' : 'movie';
    var query = traktGenre ? {
      genres: traktGenre
    } : {};
    var defs = [{
      path: "".concat(basePath, "/trending"),
      title: t('trakttv_source_trending', 'Trending'),
      typeHint: baseTypeHint,
      query: query
    }, {
      path: "".concat(basePath, "/anticipated"),
      title: t('trakttv_source_anticipated', 'Anticipated'),
      typeHint: baseTypeHint,
      query: query
    }, {
      path: "".concat(basePath, "/popular"),
      title: t('trakttv_source_popular', 'Popular'),
      typeHint: baseTypeHint,
      query: query
    }];
    if (Lampa.Storage.get('trakt_token')) {
      if (useMediaForAnimation) {
        defs.push({
          path: 'recommendations/movies',
          title: t('trakttv_source_recommendations_movies', 'Recommendations: Movies'),
          typeHint: 'movie',
          recommendations: true,
          query: query
        });
        defs.push({
          path: 'recommendations/shows',
          title: t('trakttv_source_recommendations_shows', 'Recommendations: Shows'),
          typeHint: 'show',
          recommendations: true,
          query: query
        });
      } else {
        defs.push({
          path: isShows ? 'recommendations/shows' : 'recommendations/movies',
          title: t('trakttv_recommendations', 'Recommendations'),
          typeHint: isShows ? 'show' : 'movie',
          recommendations: true,
          query: query
        });
      }
    }
    if (!traktGenre) {
      defs.push.apply(defs, _toConsumableArray(buildTrendingGenreDefinitions("".concat(basePath, "/trending"), baseTypeHint, isShows ? ['shows'] : ['movies'])));
    }
    return defs;
  }
  function createPart(definition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (call) {
      var page = Math.max(1, parseInt(params.page, 10) || 1);
      var limit = Math.max(1, parseInt(params.limit, 10) || DEFAULT_LIMIT);
      loadFeedLine(definition, page, limit).then(function (line) {
        return call(line && line.results && line.results.length ? line : null);
      })["catch"](function () {
        return call(null);
      });
    };
  }
  function nextParts() {
    var parts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CHUNK;
    var loaded = arguments.length > 2 ? arguments[2] : undefined;
    var empty = arguments.length > 3 ? arguments[3] : undefined;
    var chunk = parts.filter(Boolean).slice(0, Math.max(1, parseInt(limit, 10) || DEFAULT_CHUNK));
    if (!chunk.length) {
      if (empty) empty();
      return;
    }
    var pending = chunk.length;
    var collected = [];
    chunk.forEach(function (part) {
      if (typeof part !== 'function') {
        var index = parts.indexOf(part);
        if (index > -1) parts[index] = null;
        if (part && Array.isArray(part.results) && part.results.length) {
          collected.push(part);
        }
        pending -= 1;
        if (pending === 0) {
          if (collected.length) {
            if (loaded) loaded(collected);
          } else {
            nextParts(parts, limit, loaded, empty);
          }
        }
        return;
      }
      part(function (line) {
        var index = parts.indexOf(part);
        if (index > -1) parts[index] = null;
        if (line && Array.isArray(line.results) && line.results.length) {
          collected.push(line);
        }
        pending -= 1;
        if (pending > 0) return;
        if (collected.length) {
          if (loaded) loaded(collected);
        } else {
          nextParts(parts, limit, loaded, empty);
        }
      });
    });
  }
  function injectContentRows() {
    var screen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var parts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    try {
      if (Lampa.ContentRows && typeof Lampa.ContentRows.call === 'function') {
        Lampa.ContentRows.call(screen, params, parts);
      }
    } catch (error) {
      logWarn('ContentRows injection failed', error, {
        debugOnly: true
      });
    }
  }
  function createPartsLoader() {
    var definitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oncomplite = arguments.length > 2 ? arguments[2] : undefined;
    var onerror = arguments.length > 3 ? arguments[3] : undefined;
    var screen = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'main';
    var parts = definitions.map(function (definition) {
      return createPart(definition, params);
    });
    injectContentRows(screen, params, parts);
    var load = function load(resolve, reject) {
      if (Lampa.Api && typeof Lampa.Api.partNext === 'function') {
        Lampa.Api.partNext(parts, DEFAULT_CHUNK, resolve, reject);
        return;
      }
      nextParts(parts, DEFAULT_CHUNK, resolve, reject);
    };
    load(oncomplite, onerror);
    return load;
  }
  function resolveListPath() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var urlPath = normalizePath(params.url);
    var idPath = typeof params.id === 'string' ? normalizePath(params.id) : '';
    var genresPath = typeof params.genres === 'string' ? normalizePath(params.genres) : '';
    var traktGenre = resolveTraktGenreFilter(params);
    if (idPath.indexOf('/') > -1) return idPath;
    if (genresPath.indexOf('/') > -1) return genresPath;
    if (urlPath.indexOf('/') > -1) return urlPath;
    if (urlPath === 'tv' || urlPath === 'show' || urlPath === 'shows') return 'shows/popular';
    if ((urlPath === 'movie' || urlPath === 'movies') && traktGenre === 'animation') return 'media/popular';
    if (urlPath === 'movie' || urlPath === 'movies') return 'movies/popular';
    return 'media/popular';
  }
  function openSearchListDetail() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var listId = element.trakt_list_id || element.list_id;
    if (!listId) return;
    Lampa.Activity.push({
      url: '',
      title: element.title || t('trakt_list_detail', 'List Content'),
      component: 'trakt_list_detail',
      id: listId,
      list_id: listId,
      page: 1,
      source: 'tmdb'
    });
  }
  function delegateToTmdb(method, args) {
    try {
      var tmdb = Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.tmdb;
      if (tmdb && typeof tmdb[method] === 'function') {
        tmdb[method].apply(tmdb, args);
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }
  var TraktSourceProvider = {
    main: function main() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      return createPartsLoader(buildMainDefinitions(), params, oncomplite, onerror, 'main');
    },
    category: function category() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      var section = (params.url || '').toString().toLowerCase() === 'tv' ? 'shows' : 'movies';
      var traktGenre = resolveTraktGenreFilter(params);
      return createPartsLoader(buildCategoryDefinitions(section, traktGenre), params, oncomplite, onerror, 'category');
    },
    list: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      var page = Math.max(1, parseInt(params.page, 10) || 1);
      var limit = Math.max(1, parseInt(params.limit, 10) || DEFAULT_LIMIT);
      var query = decodeQuery(params.query);
      var traktGenre = resolveTraktGenreFilter(params);
      var extraQuery = traktGenre ? {
        genres: traktGenre
      } : {};
      var searchType = normalizeSearchType(params.search_type || (normalizePath(params.url).startsWith('search/') ? normalizePath(params.url).split('/')[1] : ''));
      if (searchType && !query) {
        if (onerror) onerror();
        return;
      }
      if (query && searchType) {
        loadSearchLine(searchType, query, page, limit, extraQuery).then(function (line) {
          if (!line || !line.results.length) {
            if (onerror) onerror();
            return;
          }
          line.title = params.title || line.title;
          oncomplite(line);
        })["catch"](function () {
          if (onerror) onerror();
        });
        return;
      }
      var path = resolveListPath(params);
      var typeHint = path.indexOf('shows/') === 0 || path === 'shows' ? 'show' : path.indexOf('movies/') === 0 || path === 'movies' ? 'movie' : path.indexOf('recommendations/shows') === 0 ? 'show' : path.indexOf('recommendations/movies') === 0 ? 'movie' : 'media';
      var recommendations = path.indexOf('recommendations/') === 0;
      loadFeedLine({
        path: path,
        title: params.title || t('title_popular', 'Popular'),
        typeHint: typeHint,
        recommendations: recommendations,
        query: extraQuery
      }, page, limit).then(function (line) {
        if (!line || !line.results.length) {
          if (onerror) onerror();
          return;
        }
        oncomplite(line);
      })["catch"](function () {
        if (onerror) onerror();
      });
    },
    menu: function menu() {
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var items = [{
        title: "".concat(t('menu_movies', 'Movies'), ": ").concat(t('trakttv_source_trending', 'Trending')),
        id: 'movies/trending'
      }, {
        title: "".concat(t('menu_movies', 'Movies'), ": ").concat(t('trakttv_source_anticipated', 'Anticipated')),
        id: 'movies/anticipated'
      }, {
        title: "".concat(t('menu_movies', 'Movies'), ": ").concat(t('trakttv_source_popular', 'Popular')),
        id: 'movies/popular'
      }, {
        title: "".concat(t('menu_tv', 'TV'), ": ").concat(t('trakttv_source_trending', 'Trending')),
        id: 'shows/trending'
      }, {
        title: "".concat(t('menu_tv', 'TV'), ": ").concat(t('trakttv_source_anticipated', 'Anticipated')),
        id: 'shows/anticipated'
      }, {
        title: "".concat(t('menu_tv', 'TV'), ": ").concat(t('trakttv_source_popular', 'Popular')),
        id: 'shows/popular'
      }];
      oncomplite(items);
    },
    menuCategory: function menuCategory() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var action = (params.action || '').toString().toLowerCase();
      var section = action === 'tv' ? 'shows' : 'movies';
      var items = [{
        title: t('trakttv_source_trending', 'Trending'),
        url: "".concat(section, "/trending")
      }, {
        title: t('trakttv_source_anticipated', 'Anticipated'),
        url: "".concat(section, "/anticipated")
      }, {
        title: t('trakttv_source_popular', 'Popular'),
        url: "".concat(section, "/popular")
      }];
      if (Lampa.Storage.get('trakt_token')) {
        items.push({
          title: t('trakttv_recommendations', 'Recommendations'),
          url: "recommendations/".concat(section)
        });
      }
      oncomplite(items);
    },
    full: function full() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('full', [_objectSpread2(_objectSpread2({}, params), {}, {
        source: 'tmdb'
      }), oncomplite, onerror])) return;
      if (onerror) onerror();
    },
    person: function person() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('person', [params, oncomplite, onerror])) return;
      if (onerror) onerror();
    },
    company: function company() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('company', [params, oncomplite, onerror])) return;
      if (onerror) onerror();
    },
    seasons: function seasons() {
      var tv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var oncomplite = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('seasons', [tv, from, oncomplite])) return;
      oncomplite && oncomplite({});
    },
    collections: function collections() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('collections', [params, oncomplite, onerror])) return;
      if (onerror) onerror();
    },
    discovery: function discovery() {
      return {
        title: 'TraktTV',
        params: {
          save: true
        },
        search: function search(params, oncomplite) {
          var query = decodeQuery(params && params.query).trim();
          if (!query) {
            oncomplite([]);
            return;
          }
          var endpoint = buildSearchUrl('movie,show,list', query, 1, DEFAULT_LIMIT * 3);
          fetchWithMeta(endpoint).then(function (_ref5) {
            var data = _ref5.data,
              headers = _ref5.headers;
            var items = data || [];
            var movies = items.filter(function (e) {
              return e.type === 'movie';
            });
            var shows = items.filter(function (e) {
              return e.type === 'show';
            });
            var lists = items.filter(function (e) {
              return e.type === 'list';
            });
            var rows = [];
            if (movies.length) {
              var line = createLinePayload({
                title: t('menu_movies', 'Movies'),
                path: 'search/movie',
                items: movies,
                headers: headers,
                page: 1,
                limit: DEFAULT_LIMIT,
                typeHint: 'movie'
              });
              line.type = 'movie';
              line.search_type = 'movie';
              line.query = query;
              rows.push(line);
            }
            if (shows.length) {
              var _line = createLinePayload({
                title: t('menu_tv', 'TV'),
                path: 'search/show',
                items: shows,
                headers: headers,
                page: 1,
                limit: DEFAULT_LIMIT,
                typeHint: 'show'
              });
              _line.type = 'tv';
              _line.search_type = 'show';
              _line.query = query;
              rows.push(_line);
            }
            if (lists.length) {
              var _line2 = createLinePayload({
                title: t('trakt_source_search_lists', 'Lists'),
                path: 'search/list',
                items: lists,
                headers: headers,
                page: 1,
                limit: DEFAULT_LIMIT,
                typeHint: 'list'
              });
              _line2.type = 'list';
              _line2.search_type = 'list';
              _line2.query = query;
              rows.push(_line2);
            }
            var enrichPromises = rows.map(function(row) {
              if (row.search_type === 'list') return Promise.resolve(row);
              return enrichWithTmdbLocale(row);
            });
            Promise.all(enrichPromises).then(function(enrichedRows) {
              oncomplite(enrichedRows);
            })["catch"](function() {
              oncomplite(rows);
            });
          })["catch"](function () {
            oncomplite([]);
          });
        },
        onSelect: function onSelect(params, close) {
          var element = params && (params.element || params.item_data) ? params.element || params.item_data : {};
          var isList = element && (element.trakt_search_type === 'list' || element.method === 'list');
          close && close();
          if (isList) {
            openSearchListDetail(element);
            return;
          }
          Lampa.Activity.push(_objectSpread2(_objectSpread2({}, element), {}, {
            component: 'full',
            source: 'tmdb'
          }));
        },
        onMore: function onMore(params, close) {
          var query = decodeQuery(params && params.query).trim();
          var row = params && params.data ? params.data : {};
          var searchType = normalizeSearchType(row.search_type || row.type);
          close && close();
          if (!query || !searchType) return;
          if (searchType === 'list') {
            Lampa.Bell.push({
              text: t('trakt_source_search_lists_more_hint', 'Open lists directly from search results')
            });
            return;
          }
          Lampa.Activity.push({
            url: "search/".concat(searchType),
            title: "".concat(t('search', 'Search'), " - ").concat(query),
            component: 'category_full',
            page: 1,
            source: SOURCE_KEY,
            query: encodeURIComponent(query),
            search_type: searchType
          });
        },
        onCancel: function onCancel() {}
      };
    },
    clear: function clear() {}
  };

  // Helper getter: prefer module api, fallback to global bridge
  function getGlobalApi() {
    try {
      if (typeof api$1 !== 'undefined' && api$1) return api$1;
    } catch (e) {/* noop */}
    try {
      if (typeof window !== 'undefined' && window.TraktTV && window.TraktTV.api) {
        return window.TraktTV.api;
      }
    } catch (e) {/* noop */}
    return null;
  }
  function registerSourceSelectorOption() {
    try {
      if (!Lampa || !Lampa.Params || typeof Lampa.Params.select !== 'function') return;
      var baseValues = Lampa.Params.values && _typeof(Lampa.Params.values.source) === 'object' ? Lampa.Params.values.source : {
        tmdb: 'TMDB',
        cub: 'CUB'
      };
      var sourceValues = _objectSpread2(_objectSpread2({}, baseValues), {}, {
        trakttv: 'TraktTV'
      });
      var paramsDefault = Lampa.Params.defaults && Lampa.Params.defaults.source ? Lampa.Params.defaults.source : 'tmdb';
      var defaultValue = sourceValues[paramsDefault] ? paramsDefault : sourceValues.tmdb ? 'tmdb' : Object.keys(sourceValues)[0];
      var storedSource = Lampa.Storage && typeof Lampa.Storage.field === 'function' ? Lampa.Storage.field('source') : '';
      var safeDefault = storedSource && sourceValues[storedSource] ? storedSource : defaultValue || 'tmdb';
      Lampa.Params.select('source', sourceValues, safeDefault);
    } catch (error) {
      logError('Source selector registration failed', error);
    }
  }
  function startPlugin() {
    window.plugin_trakt_ready = true;

    // Establish global bridge only after window is available
    try {
      if (typeof window !== 'undefined') {
        window.TraktTV = window.TraktTV || {};
        var current = typeof api$1 !== 'undefined' && api$1 ? api$1 : null;
        var existing = window.TraktTV.api || null;

        // Assign if not set or differs; keep existing if current is null
        if (!existing || existing !== current) {
          window.TraktTV.api = current || existing || null;
        }
        logDebug('API bridge ready', {
          hasModuleApi: !!current,
          hadExisting: !!existing,
          finalHas: !!window.TraktTV.api
        });
      }
    } catch (e) {/* noop */}

    Lampa.Template.add('trakt_style', "<style>@charset 'UTF-8';.full-start-new__details.trakt{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#fff}.trakt-brand-icon{width:100%;height:100%;display:block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;color:inherit}.trakt-brand-icon path{fill:currentColor}.trakt-head-action.focus .trakt-brand-icon,.trakt-head-action.hover .trakt-brand-icon,.menu__item.focus .trakt-brand-icon,.menu__item.hover .trakt-brand-icon,.menu__item.traverse .trakt-brand-icon,.settings-folder.focus .trakt-brand-icon{color:inherit}.full-start-new__details.trakt .trakt-icon{margin-right:.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.full-start-new__details.trakt .full-start-new__split{margin:0 .5em}.trakt-applecation-progress{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.4em;margin-right:.6em;margin-left:.6em}.trakt-applecation-progress .trakt-icon{width:18px;height:18px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.trakt-applecation-progress .trakt-icon svg{width:100%;height:100%}.trakt-applecation-progress__text{white-space:nowrap}.trakt-lists-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1em;padding:1em}.trakt-list-card{width:150px;background:rgba(255,255,255,0.1);-webkit-border-radius:.5em;border-radius:.5em;padding:.5em;cursor:pointer;-webkit-transition:background .3s ease;-o-transition:background .3s ease;transition:background .3s ease}.trakt-list-card:hover{background:rgba(255,255,255,0.2)}.trakt-list-card__poster{width:100%;height:225px;background-size:cover;background-position:center;-webkit-border-radius:.5em;border-radius:.5em;margin-bottom:.5em}.trakt-list-card__title{font-size:.9em;text-align:center;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.trakt-list-detail-header{padding:1em;background:rgba(0,0,0,0.3);margin-bottom:1em}.trakt-list-detail-title{font-size:1.5em;margin-bottom:.5em}.trakt-list-detail-description{font-size:1em;opacity:.8}.trakt-head-action{color:#c850c0}.trakt-head-action--ok{color:#37ff54}.trakt-head-action--error{color:#ff4d4d}.trakt-head-action svg{width:100%;height:100%;display:block}.trakt-head-icon{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.trakt-list-manager-button{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em}.trakt-list-manager-button svg{width:1.2em;height:1.2em}.trakt-watchlist-hub{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.trakt-watchlist-hub__controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.55em;padding:.8em 1.5em .2em}.trakt-watchlist-hub__tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1.2em}.trakt-watchlist-hub__tabs .simple-button{margin-right:0;-webkit-box-flex:1;-webkit-flex:1 1 8em;-ms-flex:1 1 8em;flex:1 1 8em;min-width:0;padding:1.1em 1.4em;font-size:1.6em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-border-radius:1.1em;border-radius:1.1em}.trakt-watchlist-hub__tabs .simple-button--filter>div{width:100%;margin-left:0;padding:0;background:transparent;text-align:center;font-weight:800;font-size:1em;letter-spacing:.02em}.trakt-watchlist-hub__sorts{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.55em}.trakt-watchlist__sort{margin:0;-webkit-box-flex:1;-webkit-flex:1 1 10em;-ms-flex:1 1 10em;flex:1 1 10em;min-width:7.6em;padding:.65em .85em;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.55em;-webkit-border-radius:.9em;border-radius:.9em}.trakt-watchlist__sort>div{margin-left:0}.trakt-watchlist__sort .trakt-watchlist__sort-label{min-width:0;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;font-weight:600;text-align:left}.trakt-watchlist__sort .trakt-watchlist__sort-state{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;min-width:1em;font-size:1.05em;line-height:1;font-weight:700;text-align:center;opacity:.88}.trakt-watchlist__sort .trakt-watchlist__sort-state:empty{display:none}.trakt-watchlist__sort--active{background:rgba(255,255,255,0.14);-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.16);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.16)}.trakt-watchlist__sort--more{-webkit-flex-basis:8.4em;-ms-flex-preferred-size:8.4em;flex-basis:8.4em}.trakt-watchlist__sort--desc .trakt-watchlist__sort-state,.trakt-watchlist__sort--asc .trakt-watchlist__sort-state{opacity:1}.trakt-watchlist-hub__body{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-height:0}.trakt-watchlist__view.hide{display:none}.trakt-list-wide-card__meta{margin-top:.6em;font-size:1.1em;opacity:.8}.trakt-list-wide-card:not(.trakt-list-wide-card--create) .card__promo{display:none !important}.trakt-list-wide-card--create .card__view{background:-webkit-linear-gradient(315deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));background:-o-linear-gradient(315deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));background:linear-gradient(135deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));-webkit-border-radius:1em;border-radius:1em}.trakt-list-wide-card--create .card__view::before{content:'+';position:absolute;inset:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:6em;line-height:1;color:rgba(255,255,255,0.82);font-weight:500;z-index:0}.trakt-list-wide-card--create .card__img{opacity:0}.trakt-list-wide-card--create .card__promo{z-index:2}.trakt-list-wide-card--create .card__promo-title{font-weight:700}.trakt-userinfo-name{line-height:1.35;margin-bottom:.3em}.trakt-userinfo-vip{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.35;margin-top:.1em}.trakt-userinfo-vip__label{opacity:.75}.trakt-vip-badge{display:inline-block;-webkit-border-radius:999px;border-radius:999px;padding:.2em .65em;font-size:.9em;line-height:1.25;border:1px solid transparent;vertical-align:middle}.trakt-vip-badge--enabled{color:#1be26f;border-color:rgba(27,226,111,0.45);background:rgba(27,226,111,0.14)}.trakt-vip-badge--disabled{color:#aeb5bc;border-color:rgba(174,181,188,0.45);background:rgba(174,181,188,0.12)}.trakt-device-auth{padding:.4em 1.2em 1.2em}.trakt-device-auth__inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:1.5em;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.trakt-device-auth__qr-col{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:min(45%,14em)}.trakt-device-auth__info-col{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.6em;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;padding-top:.4em}.trakt-device-auth__qr-container{width:100%}.trakt-device-auth__qr-container--hidden{display:none}.trakt-device-auth__qr-link{display:block}.trakt-device-auth__qr-image{display:block;width:100%;height:auto;background:#fff;border:2px solid #e3e3e3;-webkit-border-radius:.8em;border-radius:.8em;padding:.35em;-webkit-box-sizing:border-box;box-sizing:border-box}.trakt-device-auth__qr-caption{margin-top:.6em;font-size:.95em;opacity:.72;text-align:center}.trakt-device-auth__verification{font-size:1.05em;line-height:1.5;word-break:break-word;opacity:.9}.trakt-device-auth__code{margin:0}.trakt-device-auth__code strong{letter-spacing:.08em}.trakt-check-btn{cursor:pointer;margin-top:.4em}@media screen and (max-width:480px){.trakt-device-auth{padding:0 .6em -webkit-calc(0.8em + env(safe-area-inset-bottom));padding:0 .6em calc(0.8em + env(safe-area-inset-bottom))}.trakt-device-auth__inner{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.trakt-device-auth__qr-col{width:min(100%,18.5em)}.trakt-device-auth__info-col{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}}.trakt-watchlist-hub__tabs .trakt-watchlist__tab{border-bottom:3px solid transparent;-webkit-transition:background .2s,border-color .2s;transition:background .2s,border-color .2s}.trakt-watchlist-hub__tabs .trakt-watchlist__tab.active{background:rgba(155,89,208,0.18);border-bottom:3px solid #9b59d0;-webkit-box-shadow:inset 0 0 0 1px rgba(155,89,208,0.3);box-shadow:inset 0 0 0 1px rgba(155,89,208,0.3)}.trakt-watchlist-hub__tabs .trakt-watchlist__tab.active>div{font-weight:800;opacity:1}.trakt-upnext-badge{position:absolute;top:.3em;right:.3em;background:rgba(0,0,0,.78);color:#fff;font-size:1.35em;font-weight:800;min-width:1.6em;height:1.6em;-webkit-border-radius:999px;border-radius:999px;z-index:2;pointer-events:none;line-height:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 .3em}.trakt-upcoming-section{width:100%;flex-basis:100%;margin-top:1.8em;padding:1em 0 .5em;font-size:1.15em;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.9;color:#fff;display:flex;align-items:center;gap:.9em;pointer-events:none}.trakt-upcoming-section::before{content:'';flex:0 0 3px;height:1.2em;background:linear-gradient(180deg,#e8572a,#ff9844);border-radius:3px}.trakt-upcoming-section::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,rgba(255,255,255,.25),rgba(255,255,255,0))}.trakt-watched-badge{position:absolute;bottom:.35em;left:.35em;width:1.45em;height:1.45em;border-radius:999px;display:flex;align-items:center;justify-content:center;z-index:2;pointer-events:none;background:rgba(155,89,208,.82);color:#fff}.trakt-watched-badge svg{width:.82em;height:.82em;display:block}.trakt-watchlist-badge{position:absolute;bottom:.35em;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:1.45em;height:1.45em;border-radius:999px;display:flex;align-items:center;justify-content:center;z-index:2;pointer-events:none;background:rgba(52,152,219,.82);color:#fff}.trakt-watchlist-badge svg{width:.82em;height:.82em;display:block}.trakt-status-clickable{cursor:pointer;border-radius:.6em;padding:.15em .4em .15em .1em;transition:background .15s;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;width:-webkit-fit-content;width:fit-content}.trakt-status-clickable.hover,.trakt-status-clickable.focus{background:rgba(155,89,208,.18)}.trakt-history-date-badge{position:absolute;bottom:0;left:0;right:0;padding:.3em .45em .35em;background:linear-gradient(to top,rgba(0,0,0,.82) 0%,transparent 100%);display:flex;justify-content:space-between;align-items:flex-end;pointer-events:none;z-index:2}.trakt-history-ep{font-size:.72em;font-weight:700;color:rgba(255,255,255,.72);line-height:1.2;flex-shrink:0;margin-right:.4em}.trakt-history-date{font-size:.75em;font-weight:700;color:#fff;line-height:1.2;margin-left:auto;white-space:nowrap}@-webkit-keyframes trakt-spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes trakt-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.trakt-status-clickable.trakt-loading .trakt-icon{-webkit-animation:trakt-spin .8s linear infinite;animation:trakt-spin .8s linear infinite;opacity:.5}.trakt-recs-hub__sorts{gap:.35em;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.trakt-recs-hub__sorts .trakt-watchlist__sort{-webkit-box-flex:1;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;min-width:0}.trakt-recs-hub__sorts .trakt-watchlist__sort--more{-webkit-box-flex:1;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0}.trakt-hide-lampa-continue .items-line--continue{display:none!important}.trakt-hide-lampa-recomend .items-line--recomend{display:none!important}.trakt-hide-lampa-continue .items-line[data-component='continue']{display:none!important}.trakt-hide-lampa-recomend .items-line[data-component='recomend']{display:none!important}.trakt-account-switcher{color:#c850c0;position:relative;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;overflow:visible!important}.trakt-head-icon{position:relative;overflow:visible!important}.trakt-account-badge{position:absolute;bottom:0;right:0;-webkit-transform:translate(50%,50%);-ms-transform:translate(50%,50%);transform:translate(50%,50%);min-width:1.55em;height:1.55em;border-radius:999px;background:#fff;color:#c850c0;font-size:.83em;font-weight:800;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:1;padding:0 .3em;pointer-events:none;border:none;-webkit-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.3);box-shadow:0 1px 4px rgba(0,0,0,.3)}.trakt-account-badge--multi{font-size:.75em;letter-spacing:-.02em}.trakt-digital-release{position:absolute;top:1.4em;left:-.8em;padding:.4em .5em;line-height:1;font-size:.8em;font-weight:700;color:#fff;background:rgba(217,34,41,.9);border-radius:.3em;z-index:3;pointer-events:none;white-space:nowrap}</style>");
    $('body').append(Lampa.Template.get('trakt_style', {}, true));

    if (Lampa.Storage.get('trakt_refresh_token')) {
      var _getGlobalApi;
      var authApi = (_getGlobalApi = getGlobalApi()) === null || _getGlobalApi === void 0 ? void 0 : _getGlobalApi.auth;
      if (authApi && typeof authApi.ensureValid === 'function') {
        authApi.ensureValid({
          reason: 'startup'
        })["catch"](function (error) {
          logError('Startup token validation failed', error, {
            debugOnly: true
          });
        });
      } else if (authApi && typeof authApi.refresh === 'function') {
        authApi.refresh({
          reason: 'startup-fallback'
        })["catch"](function (error) {
          logError('Startup token refresh fallback failed', error, {
            debugOnly: true
          });
        });
      } else if (debugEnabled()) {
        logDebug('Auth API unavailable for startup token validation', {
          authApi: !!authApi
        });
      }
    }

    // Добавляем компоненты
    Lampa.Component.add('trakt_watchlist', function (object) {
      _navLogEvent('factory_trakt_watchlist', object || {});
      return new Catalog.watchlist(object);
    });

    try {
      if (Lampa.Api) {
        Lampa.Api.sources = Lampa.Api.sources || {};
        if (!Lampa.Api.sources.trakttv) {
          Lampa.Api.sources.trakttv = TraktSourceProvider;
        }
        if (Lampa.Api.sources.trakttv) {
          registerSourceSelectorOption();
        }
      }
    } catch (error) {
      logError('Source provider registration failed', error);
    }
    Lampa.Component.add('trakt_upnext', function (object) {
      _navLogEvent('factory_trakt_upnext', object || {});
      return new Catalog.upnext(object);
    });
    Lampa.Component.add('trakt_history', function (object) {
      return new Catalog.history(object);
    });
    Lampa.Component.add('trakt_watching', function (object) {
      return new Catalog.watching(object);
    });
    Lampa.Component.add('trakt_collection', function (object) {
      return new Catalog.collection(object);
    });

    Lampa.Component.add('trakt_timetable_all', TraktTimetableAll);
    Lampa.Component.add('trakttv_recommendations', function (object) {
      _navLogEvent('factory_trakttv_recommendations', object || {});
      return Catalog.recommendations(object);
    });
    Lampa.Component.add('trakt_list_detail', Catalog.list_detail);
    Lampa.Component.add('trakt_my_list_detail', Catalog.my_list_detail);
    Lampa.Component.add('trakt_lists', Catalog.lists);
    Lampa.Component.add('trakt_my_lists', Catalog.my_lists);

    Main();
    registerContextListAction();

    events.init();
    watching.init();

    // Initialize ContentRows (Lampa 3.0+ required)
    try {
      initContentRows();
    } catch (error) {
      logError('ContentRows initialization failed', error);
    }
  }
  function registerContextListAction() {
    if (typeof Lampa === 'undefined' || !Lampa.Manifest) return;
    var pluginName = Lampa.Lang.translate('trakt_manage_lists_title') || 'Trakt Lists';
    var exists = Array.isArray(Lampa.Manifest.plugins) && Lampa.Manifest.plugins.some(function (plugin) {
      return plugin && plugin.name === pluginName && plugin.component === 'trakt_context_lists';
    });
    if (exists) return;
    Lampa.Manifest.plugins = {
      type: 'video',
      version: '3.0.0',
      name: pluginName,
      component: 'trakt_context_lists',
      onContextMenu: function onContextMenu() {
        return {
          name: pluginName,
          description: ''
        };
      },
      onContextLauch: function onContextLauch(object) {
        setTimeout(function () {
          watchlist.openManagerByCard(object, {
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        }, 0);
      }
    };
  }
  if (!window.plugin_trakt_ready) {
    window.addEventListener('unhandledrejection', function (event) {
      logError('Unhandled promise rejection', event.reason, {
        debugOnly: true
      });
    });
    startPlugin();
  }

})();