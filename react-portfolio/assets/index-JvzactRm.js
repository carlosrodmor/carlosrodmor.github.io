function V1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i)
          o &&
            Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === 'childList')
        for (const a of o.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function Gp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Qp = { exports: {} },
  Da = {},
  Xp = { exports: {} },
  F = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qi = Symbol.for('react.element'),
  W1 = Symbol.for('react.portal'),
  H1 = Symbol.for('react.fragment'),
  Y1 = Symbol.for('react.strict_mode'),
  K1 = Symbol.for('react.profiler'),
  G1 = Symbol.for('react.provider'),
  Q1 = Symbol.for('react.context'),
  X1 = Symbol.for('react.forward_ref'),
  Z1 = Symbol.for('react.suspense'),
  q1 = Symbol.for('react.memo'),
  J1 = Symbol.for('react.lazy'),
  xf = Symbol.iterator
function ev(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (xf && e[xf]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Zp = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  qp = Object.assign,
  Jp = {}
function Ur(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Jp), (this.updater = n || Zp)
}
Ur.prototype.isReactComponent = {}
Ur.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function em() {}
em.prototype = Ur.prototype
function Lu(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Jp), (this.updater = n || Zp)
}
var zu = (Lu.prototype = new em())
zu.constructor = Lu
qp(zu, Ur.prototype)
zu.isPureReactComponent = !0
var kf = Array.isArray,
  tm = Object.prototype.hasOwnProperty,
  Fu = { current: null },
  nm = { key: !0, ref: !0, __self: !0, __source: !0 }
function rm(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = '' + t.key), t))
      tm.call(t, r) && !nm.hasOwnProperty(r) && (i[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2]
    i.children = s
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
  return { $$typeof: Qi, type: e, key: o, ref: a, props: i, _owner: Fu.current }
}
function tv(e, t) {
  return {
    $$typeof: Qi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function Du(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Qi
}
function nv(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Sf = /\/+/g
function Ml(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? nv('' + e.key)
    : t.toString(36)
}
function Do(e, t, n, r, i) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        a = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Qi:
          case W1:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + Ml(a, 0) : r),
      kf(i)
        ? ((n = ''),
          e != null && (n = e.replace(Sf, '$&/') + '/'),
          Do(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (Du(i) &&
            (i = tv(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Sf, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((a = 0), (r = r === '' ? '.' : r + ':'), kf(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l]
      var s = r + Ml(o, l)
      a += Do(o, t, n, s, i)
    }
  else if (((s = ev(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ml(o, l++)), (a += Do(o, t, n, s, i))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return a
}
function uo(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Do(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function rv(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Le = { current: null },
  Uo = { transition: null },
  iv = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: Uo, ReactCurrentOwner: Fu }
F.Children = {
  map: uo,
  forEach: function (e, t, n) {
    uo(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      uo(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      uo(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Du(e))
      throw Error('React.Children.only expected to receive a single React element child.')
    return e
  }
}
F.Component = Ur
F.Fragment = H1
F.Profiler = K1
F.PureComponent = Lu
F.StrictMode = Y1
F.Suspense = Z1
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iv
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = qp({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Fu.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (s in t)
      tm.call(t, s) &&
        !nm.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    l = Array(s)
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: Qi, type: e.type, key: i, ref: o, props: r, _owner: a }
}
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Q1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: G1, _context: e }),
    (e.Consumer = e)
  )
}
F.createElement = rm
F.createFactory = function (e) {
  var t = rm.bind(null, e)
  return (t.type = e), t
}
F.createRef = function () {
  return { current: null }
}
F.forwardRef = function (e) {
  return { $$typeof: X1, render: e }
}
F.isValidElement = Du
F.lazy = function (e) {
  return { $$typeof: J1, _payload: { _status: -1, _result: e }, _init: rv }
}
F.memo = function (e, t) {
  return { $$typeof: q1, type: e, compare: t === void 0 ? null : t }
}
F.startTransition = function (e) {
  var t = Uo.transition
  Uo.transition = {}
  try {
    e()
  } finally {
    Uo.transition = t
  }
}
F.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
F.useCallback = function (e, t) {
  return Le.current.useCallback(e, t)
}
F.useContext = function (e) {
  return Le.current.useContext(e)
}
F.useDebugValue = function () {}
F.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e)
}
F.useEffect = function (e, t) {
  return Le.current.useEffect(e, t)
}
F.useId = function () {
  return Le.current.useId()
}
F.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n)
}
F.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t)
}
F.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t)
}
F.useMemo = function (e, t) {
  return Le.current.useMemo(e, t)
}
F.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n)
}
F.useRef = function (e) {
  return Le.current.useRef(e)
}
F.useState = function (e) {
  return Le.current.useState(e)
}
F.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n)
}
F.useTransition = function () {
  return Le.current.useTransition()
}
F.version = '18.2.0'
Xp.exports = F
var x = Xp.exports
const G = Gp(x),
  ki = V1({ __proto__: null, default: G }, [x])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ov = x,
  av = Symbol.for('react.element'),
  lv = Symbol.for('react.fragment'),
  sv = Object.prototype.hasOwnProperty,
  uv = ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cv = { key: !0, ref: !0, __self: !0, __source: !0 }
function im(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) sv.call(t, r) && !cv.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: av, type: e, key: o, ref: a, props: i, _owner: uv.current }
}
Da.Fragment = lv
Da.jsx = im
Da.jsxs = im
Qp.exports = Da
var S = Qp.exports,
  ws = {},
  om = { exports: {} },
  Je = {},
  am = { exports: {} },
  lm = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(T, M) {
    var I = T.length
    T.push(M)
    e: for (; 0 < I; ) {
      var te = (I - 1) >>> 1,
        de = T[te]
      if (0 < i(de, M)) (T[te] = M), (T[I] = de), (I = te)
      else break e
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0]
  }
  function r(T) {
    if (T.length === 0) return null
    var M = T[0],
      I = T.pop()
    if (I !== M) {
      T[0] = I
      e: for (var te = 0, de = T.length, Zn = de >>> 1; te < Zn; ) {
        var je = 2 * (te + 1) - 1,
          Xt = T[je],
          dt = je + 1,
          qn = T[dt]
        if (0 > i(Xt, I))
          dt < de && 0 > i(qn, Xt)
            ? ((T[te] = qn), (T[dt] = I), (te = dt))
            : ((T[te] = Xt), (T[je] = I), (te = je))
        else if (dt < de && 0 > i(qn, I)) (T[te] = qn), (T[dt] = I), (te = dt)
        else break e
      }
    }
    return M
  }
  function i(T, M) {
    var I = T.sortIndex - M.sortIndex
    return I !== 0 ? I : T.id - M.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var a = Date,
      l = a.now()
    e.unstable_now = function () {
      return a.now() - l
    }
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    p = 3,
    y = !1,
    g = !1,
    v = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function h(T) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u)
      else if (M.startTime <= T) r(u), (M.sortIndex = M.expirationTime), t(s, M)
      else break
      M = n(u)
    }
  }
  function w(T) {
    if (((v = !1), h(T), !g))
      if (n(s) !== null) (g = !0), $e(b)
      else {
        var M = n(u)
        M !== null && At(w, M.startTime - T)
      }
  }
  function b(T, M) {
    ;(g = !1), v && ((v = !1), m(_), (_ = -1)), (y = !0)
    var I = p
    try {
      for (h(M), f = n(s); f !== null && (!(f.expirationTime > M) || (T && !D())); ) {
        var te = f.callback
        if (typeof te == 'function') {
          ;(f.callback = null), (p = f.priorityLevel)
          var de = te(f.expirationTime <= M)
          ;(M = e.unstable_now()),
            typeof de == 'function' ? (f.callback = de) : f === n(s) && r(s),
            h(M)
        } else r(s)
        f = n(s)
      }
      if (f !== null) var Zn = !0
      else {
        var je = n(u)
        je !== null && At(w, je.startTime - M), (Zn = !1)
      }
      return Zn
    } finally {
      ;(f = null), (p = I), (y = !1)
    }
  }
  var E = !1,
    C = null,
    _ = -1,
    j = 5,
    O = -1
  function D() {
    return !(e.unstable_now() - O < j)
  }
  function Y() {
    if (C !== null) {
      var T = e.unstable_now()
      O = T
      var M = !0
      try {
        M = C(!0, T)
      } finally {
        M ? fe() : ((E = !1), (C = null))
      }
    } else E = !1
  }
  var fe
  if (typeof d == 'function')
    fe = function () {
      d(Y)
    }
  else if (typeof MessageChannel < 'u') {
    var he = new MessageChannel(),
      Fe = he.port2
    ;(he.port1.onmessage = Y),
      (fe = function () {
        Fe.postMessage(null)
      })
  } else
    fe = function () {
      k(Y, 0)
    }
  function $e(T) {
    ;(C = T), E || ((E = !0), fe())
  }
  function At(T, M) {
    _ = k(function () {
      T(e.unstable_now())
    }, M)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), $e(b))
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (j = 0 < T ? Math.floor(1e3 / T) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (T) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var M = 3
          break
        default:
          M = p
      }
      var I = p
      p = M
      try {
        return T()
      } finally {
        p = I
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, M) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          T = 3
      }
      var I = p
      p = T
      try {
        return M()
      } finally {
        p = I
      }
    }),
    (e.unstable_scheduleCallback = function (T, M, I) {
      var te = e.unstable_now()
      switch (
        (typeof I == 'object' && I !== null
          ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? te + I : te))
          : (I = te),
        T)
      ) {
        case 1:
          var de = -1
          break
        case 2:
          de = 250
          break
        case 5:
          de = 1073741823
          break
        case 4:
          de = 1e4
          break
        default:
          de = 5e3
      }
      return (
        (de = I + de),
        (T = {
          id: c++,
          callback: M,
          priorityLevel: T,
          startTime: I,
          expirationTime: de,
          sortIndex: -1
        }),
        I > te
          ? ((T.sortIndex = I),
            t(u, T),
            n(s) === null &&
              T === n(u) &&
              (v ? (m(_), (_ = -1)) : (v = !0), At(w, I - te)))
          : ((T.sortIndex = de), t(s, T), g || y || ((g = !0), $e(b))),
        T
      )
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (T) {
      var M = p
      return function () {
        var I = p
        p = M
        try {
          return T.apply(this, arguments)
        } finally {
          p = I
        }
      }
    })
})(lm)
am.exports = lm
var fv = am.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sm = x,
  qe = fv
function P(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var um = new Set(),
  Si = {}
function Gn(e, t) {
  Rr(e, t), Rr(e + 'Capture', t)
}
function Rr(e, t) {
  for (Si[e] = t, e = 0; e < t.length; e++) um.add(t[e])
}
var Dt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  xs = Object.prototype.hasOwnProperty,
  dv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bf = {},
  Cf = {}
function pv(e) {
  return xs.call(Cf, e)
    ? !0
    : xs.call(bf, e)
    ? !1
    : dv.test(e)
    ? (Cf[e] = !0)
    : ((bf[e] = !0), !1)
}
function mv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function hv(e, t, n, r) {
  if (t === null || typeof t > 'u' || mv(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ze(e, t, n, r, i, o, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a)
}
var Oe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new ze(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  Oe[t] = new ze(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Oe[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    Oe[e] = new ze(e, 2, !1, e, null, !1, !1)
  }
)
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Oe[e] = new ze(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Oe[e] = new ze(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Oe[e] = new ze(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Oe[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Uu = /[\-:]([a-z])/g
function Bu(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Uu, Bu)
    Oe[t] = new ze(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Uu, Bu)
    Oe[t] = new ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Uu, Bu)
  Oe[t] = new ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Oe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Oe.xlinkHref = new ze(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Oe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Vu(e, t, n, r) {
  var i = Oe.hasOwnProperty(t) ? Oe[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (hv(t, n, i, r) && (n = null),
    r || i === null
      ? pv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Gt = sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  co = Symbol.for('react.element'),
  ar = Symbol.for('react.portal'),
  lr = Symbol.for('react.fragment'),
  Wu = Symbol.for('react.strict_mode'),
  ks = Symbol.for('react.profiler'),
  cm = Symbol.for('react.provider'),
  fm = Symbol.for('react.context'),
  Hu = Symbol.for('react.forward_ref'),
  Ss = Symbol.for('react.suspense'),
  bs = Symbol.for('react.suspense_list'),
  Yu = Symbol.for('react.memo'),
  Jt = Symbol.for('react.lazy'),
  dm = Symbol.for('react.offscreen'),
  Ef = Symbol.iterator
function Kr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ef && e[Ef]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var ie = Object.assign,
  Il
function ri(e) {
  if (Il === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Il = (t && t[1]) || ''
    }
  return (
    `
` +
    Il +
    e
  )
}
var Ll = !1
function zl(e, t) {
  if (!e || Ll) return ''
  Ll = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];

      )
        l--
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l])) {
                var s =
                  `
` + i[a].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= a && 0 <= l)
          break
        }
    }
  } finally {
    ;(Ll = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? ri(e) : ''
}
function vv(e) {
  switch (e.tag) {
    case 5:
      return ri(e.type)
    case 16:
      return ri('Lazy')
    case 13:
      return ri('Suspense')
    case 19:
      return ri('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = zl(e.type, !1)), e
    case 11:
      return (e = zl(e.type.render, !1)), e
    case 1:
      return (e = zl(e.type, !0)), e
    default:
      return ''
  }
}
function Cs(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case lr:
      return 'Fragment'
    case ar:
      return 'Portal'
    case ks:
      return 'Profiler'
    case Wu:
      return 'StrictMode'
    case Ss:
      return 'Suspense'
    case bs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case fm:
        return (e.displayName || 'Context') + '.Consumer'
      case cm:
        return (e._context.displayName || 'Context') + '.Provider'
      case Hu:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Yu:
        return (t = e.displayName || null), t !== null ? t : Cs(e.type) || 'Memo'
      case Jt:
        ;(t = e._payload), (e = e._init)
        try {
          return Cs(e(t))
        } catch {}
    }
  return null
}
function gv(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Cs(t)
    case 8:
      return t === Wu ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function gn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function pm(e) {
  var t = e.type
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  )
}
function yv(e) {
  var t = pm(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (a) {
          ;(r = '' + a), o.call(this, a)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (a) {
          r = '' + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function fo(e) {
  e._valueTracker || (e._valueTracker = yv(e))
}
function mm(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = pm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function oa(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Es(e, t) {
  var n = t.checked
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Pf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function hm(e, t) {
  ;(t = t.checked), t != null && Vu(e, 'checked', t, !1)
}
function Ps(e, t) {
  hm(e, t)
  var n = gn(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Os(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Os(e, t.type, gn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Of(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null)))
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Os(e, t, n) {
  ;(t !== 'number' || oa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ii = Array.isArray
function kr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + gn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Ts(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91))
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function Tf(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92))
      if (ii(n)) {
        if (1 < n.length) throw Error(P(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: gn(n) }
}
function vm(e, t) {
  var n = gn(t.value),
    r = gn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function _f(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function gm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function _s(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? gm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var po,
  ym = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        po = po || document.createElement('div'),
          po.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = po.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function bi(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var si = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  wv = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(si).forEach(function (e) {
  wv.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (si[t] = si[e])
  })
})
function wm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (si.hasOwnProperty(e) && si[e])
    ? ('' + t).trim()
    : t + 'px'
}
function xm(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = wm(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var xv = ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function Ns(e, t) {
  if (t) {
    if (xv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(P(62))
  }
}
function Rs(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var As = null
function Ku(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var $s = null,
  Sr = null,
  br = null
function Nf(e) {
  if ((e = qi(e))) {
    if (typeof $s != 'function') throw Error(P(280))
    var t = e.stateNode
    t && ((t = Ha(t)), $s(e.stateNode, e.type, t))
  }
}
function km(e) {
  Sr ? (br ? br.push(e) : (br = [e])) : (Sr = e)
}
function Sm() {
  if (Sr) {
    var e = Sr,
      t = br
    if (((br = Sr = null), Nf(e), t)) for (e = 0; e < t.length; e++) Nf(t[e])
  }
}
function bm(e, t) {
  return e(t)
}
function Cm() {}
var Fl = !1
function Em(e, t, n) {
  if (Fl) return e(t, n)
  Fl = !0
  try {
    return bm(e, t, n)
  } finally {
    ;(Fl = !1), (Sr !== null || br !== null) && (Cm(), Sm())
  }
}
function Ci(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Ha(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(P(231, t, typeof n))
  return n
}
var js = !1
if (Dt)
  try {
    var Gr = {}
    Object.defineProperty(Gr, 'passive', {
      get: function () {
        js = !0
      }
    }),
      window.addEventListener('test', Gr, Gr),
      window.removeEventListener('test', Gr, Gr)
  } catch {
    js = !1
  }
function kv(e, t, n, r, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var ui = !1,
  aa = null,
  la = !1,
  Ms = null,
  Sv = {
    onError: function (e) {
      ;(ui = !0), (aa = e)
    }
  }
function bv(e, t, n, r, i, o, a, l, s) {
  ;(ui = !1), (aa = null), kv.apply(Sv, arguments)
}
function Cv(e, t, n, r, i, o, a, l, s) {
  if ((bv.apply(this, arguments), ui)) {
    if (ui) {
      var u = aa
      ;(ui = !1), (aa = null)
    } else throw Error(P(198))
    la || ((la = !0), (Ms = u))
  }
}
function Qn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Pm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Rf(e) {
  if (Qn(e) !== e) throw Error(P(188))
}
function Ev(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(P(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Rf(i), e
        if (o === r) return Rf(i), t
        o = o.sibling
      }
      throw Error(P(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          ;(a = !0), (n = i), (r = o)
          break
        }
        if (l === r) {
          ;(a = !0), (r = i), (n = o)
          break
        }
        l = l.sibling
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            ;(a = !0), (n = o), (r = i)
            break
          }
          if (l === r) {
            ;(a = !0), (r = o), (n = i)
            break
          }
          l = l.sibling
        }
        if (!a) throw Error(P(189))
      }
    }
    if (n.alternate !== r) throw Error(P(190))
  }
  if (n.tag !== 3) throw Error(P(188))
  return n.stateNode.current === n ? e : t
}
function Om(e) {
  return (e = Ev(e)), e !== null ? Tm(e) : null
}
function Tm(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Tm(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var _m = qe.unstable_scheduleCallback,
  Af = qe.unstable_cancelCallback,
  Pv = qe.unstable_shouldYield,
  Ov = qe.unstable_requestPaint,
  ue = qe.unstable_now,
  Tv = qe.unstable_getCurrentPriorityLevel,
  Gu = qe.unstable_ImmediatePriority,
  Nm = qe.unstable_UserBlockingPriority,
  sa = qe.unstable_NormalPriority,
  _v = qe.unstable_LowPriority,
  Rm = qe.unstable_IdlePriority,
  Ua = null,
  Tt = null
function Nv(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == 'function')
    try {
      Tt.onCommitFiberRoot(Ua, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : $v,
  Rv = Math.log,
  Av = Math.LN2
function $v(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rv(e) / Av) | 0)) | 0
}
var mo = 64,
  ho = 4194304
function oi(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function ua(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455
  if (a !== 0) {
    var l = a & ~i
    l !== 0 ? (r = oi(l)) : ((o &= a), o !== 0 && (r = oi(o)))
  } else (a = n & ~i), a !== 0 ? (r = oi(a)) : o !== 0 && (r = oi(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function jv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Mv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - yt(o),
      l = 1 << a,
      s = i[a]
    s === -1 ? (!(l & n) || l & r) && (i[a] = jv(l, t)) : s <= t && (e.expiredLanes |= l),
      (o &= ~l)
  }
}
function Is(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Am() {
  var e = mo
  return (mo <<= 1), !(mo & 4194240) && (mo = 64), e
}
function Dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Xi(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n)
}
function Iv(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - yt(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function Qu(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var W = 0
function $m(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var jm,
  Xu,
  Mm,
  Im,
  Lm,
  Ls = !1,
  vo = [],
  sn = null,
  un = null,
  cn = null,
  Ei = new Map(),
  Pi = new Map(),
  tn = [],
  Lv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function $f(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      sn = null
      break
    case 'dragenter':
    case 'dragleave':
      un = null
      break
    case 'mouseover':
    case 'mouseout':
      cn = null
      break
    case 'pointerover':
    case 'pointerout':
      Ei.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Pi.delete(t.pointerId)
  }
}
function Qr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
      }),
      t !== null && ((t = qi(t)), t !== null && Xu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function zv(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (sn = Qr(sn, e, t, n, r, i)), !0
    case 'dragenter':
      return (un = Qr(un, e, t, n, r, i)), !0
    case 'mouseover':
      return (cn = Qr(cn, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return Ei.set(o, Qr(Ei.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (o = i.pointerId), Pi.set(o, Qr(Pi.get(o) || null, e, t, n, r, i)), !0
  }
  return !1
}
function zm(e) {
  var t = Nn(e.target)
  if (t !== null) {
    var n = Qn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pm(n)), t !== null)) {
          ;(e.blockedOn = t),
            Lm(e.priority, function () {
              Mm(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Bo(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(As = r), n.target.dispatchEvent(r), (As = null)
    } else return (t = qi(n)), t !== null && Xu(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function jf(e, t, n) {
  Bo(e) && n.delete(t)
}
function Fv() {
  ;(Ls = !1),
    sn !== null && Bo(sn) && (sn = null),
    un !== null && Bo(un) && (un = null),
    cn !== null && Bo(cn) && (cn = null),
    Ei.forEach(jf),
    Pi.forEach(jf)
}
function Xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ls || ((Ls = !0), qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Fv)))
}
function Oi(e) {
  function t(i) {
    return Xr(i, e)
  }
  if (0 < vo.length) {
    Xr(vo[0], e)
    for (var n = 1; n < vo.length; n++) {
      var r = vo[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    sn !== null && Xr(sn, e),
      un !== null && Xr(un, e),
      cn !== null && Xr(cn, e),
      Ei.forEach(t),
      Pi.forEach(t),
      n = 0;
    n < tn.length;
    n++
  )
    (r = tn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); )
    zm(n), n.blockedOn === null && tn.shift()
}
var Cr = Gt.ReactCurrentBatchConfig,
  ca = !0
function Dv(e, t, n, r) {
  var i = W,
    o = Cr.transition
  Cr.transition = null
  try {
    ;(W = 1), Zu(e, t, n, r)
  } finally {
    ;(W = i), (Cr.transition = o)
  }
}
function Uv(e, t, n, r) {
  var i = W,
    o = Cr.transition
  Cr.transition = null
  try {
    ;(W = 4), Zu(e, t, n, r)
  } finally {
    ;(W = i), (Cr.transition = o)
  }
}
function Zu(e, t, n, r) {
  if (ca) {
    var i = zs(e, t, n, r)
    if (i === null) Xl(e, t, r, fa, n), $f(e, r)
    else if (zv(i, e, t, n, r)) r.stopPropagation()
    else if (($f(e, r), t & 4 && -1 < Lv.indexOf(e))) {
      for (; i !== null; ) {
        var o = qi(i)
        if (
          (o !== null && jm(o),
          (o = zs(e, t, n, r)),
          o === null && Xl(e, t, r, fa, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else Xl(e, t, r, null, n)
  }
}
var fa = null
function zs(e, t, n, r) {
  if (((fa = null), (e = Ku(r)), (e = Nn(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Pm(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (fa = e), null
}
function Fm(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Tv()) {
        case Gu:
          return 1
        case Nm:
          return 4
        case sa:
        case _v:
          return 16
        case Rm:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var rn = null,
  qu = null,
  Vo = null
function Dm() {
  if (Vo) return Vo
  var e,
    t = qu,
    n = t.length,
    r,
    i = 'value' in rn ? rn.value : rn.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Vo = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Wo(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function go() {
  return !0
}
function Mf() {
  return !1
}
function et(e) {
  function t(n, r, i, o, a) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null)
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? go
        : Mf),
      (this.isPropagationStopped = Mf),
      this
    )
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = go))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = go))
      },
      persist: function () {},
      isPersistent: go
    }),
    t
  )
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Ju = et(Br),
  Zi = ie({}, Br, { view: 0, detail: 0 }),
  Bv = et(Zi),
  Ul,
  Bl,
  Zr,
  Ba = ie({}, Zi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ec,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Zr &&
            (Zr && e.type === 'mousemove'
              ? ((Ul = e.screenX - Zr.screenX), (Bl = e.screenY - Zr.screenY))
              : (Bl = Ul = 0),
            (Zr = e)),
          Ul)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Bl
    }
  }),
  If = et(Ba),
  Vv = ie({}, Ba, { dataTransfer: 0 }),
  Wv = et(Vv),
  Hv = ie({}, Zi, { relatedTarget: 0 }),
  Vl = et(Hv),
  Yv = ie({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kv = et(Yv),
  Gv = ie({}, Br, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  Qv = et(Gv),
  Xv = ie({}, Br, { data: 0 }),
  Lf = et(Xv),
  Zv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  qv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  Jv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function eg(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Jv[e]) ? !!t[e] : !1
}
function ec() {
  return eg
}
var tg = ie({}, Zi, {
    key: function (e) {
      if (e.key) {
        var t = Zv[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Wo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? qv[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ec,
    charCode: function (e) {
      return e.type === 'keypress' ? Wo(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Wo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  ng = et(tg),
  rg = ie({}, Ba, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  zf = et(rg),
  ig = ie({}, Zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ec
  }),
  og = et(ig),
  ag = ie({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lg = et(ag),
  sg = ie({}, Ba, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  ug = et(sg),
  cg = [9, 13, 27, 32],
  tc = Dt && 'CompositionEvent' in window,
  ci = null
Dt && 'documentMode' in document && (ci = document.documentMode)
var fg = Dt && 'TextEvent' in window && !ci,
  Um = Dt && (!tc || (ci && 8 < ci && 11 >= ci)),
  Ff = ' ',
  Df = !1
function Bm(e, t) {
  switch (e) {
    case 'keyup':
      return cg.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Vm(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var sr = !1
function dg(e, t) {
  switch (e) {
    case 'compositionend':
      return Vm(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Df = !0), Ff)
    case 'textInput':
      return (e = t.data), e === Ff && Df ? null : e
    default:
      return null
  }
}
function pg(e, t) {
  if (sr)
    return e === 'compositionend' || (!tc && Bm(e, t))
      ? ((e = Dm()), (Vo = qu = rn = null), (sr = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Um && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var mg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function Uf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!mg[e.type] : t === 'textarea'
}
function Wm(e, t, n, r) {
  km(r),
    (t = da(t, 'onChange')),
    0 < t.length &&
      ((n = new Ju('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var fi = null,
  Ti = null
function hg(e) {
  th(e, 0)
}
function Va(e) {
  var t = fr(e)
  if (mm(t)) return e
}
function vg(e, t) {
  if (e === 'change') return t
}
var Hm = !1
if (Dt) {
  var Wl
  if (Dt) {
    var Hl = 'oninput' in document
    if (!Hl) {
      var Bf = document.createElement('div')
      Bf.setAttribute('oninput', 'return;'), (Hl = typeof Bf.oninput == 'function')
    }
    Wl = Hl
  } else Wl = !1
  Hm = Wl && (!document.documentMode || 9 < document.documentMode)
}
function Vf() {
  fi && (fi.detachEvent('onpropertychange', Ym), (Ti = fi = null))
}
function Ym(e) {
  if (e.propertyName === 'value' && Va(Ti)) {
    var t = []
    Wm(t, Ti, e, Ku(e)), Em(hg, t)
  }
}
function gg(e, t, n) {
  e === 'focusin'
    ? (Vf(), (fi = t), (Ti = n), fi.attachEvent('onpropertychange', Ym))
    : e === 'focusout' && Vf()
}
function yg(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Va(Ti)
}
function wg(e, t) {
  if (e === 'click') return Va(t)
}
function xg(e, t) {
  if (e === 'input' || e === 'change') return Va(t)
}
function kg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var kt = typeof Object.is == 'function' ? Object.is : kg
function _i(e, t) {
  if (kt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!xs.call(t, i) || !kt(e[i], t[i])) return !1
  }
  return !0
}
function Wf(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Hf(e, t) {
  var n = Wf(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Wf(n)
  }
}
function Km(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Km(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Gm() {
  for (var e = window, t = oa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = oa(e.document)
  }
  return t
}
function nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Sg(e) {
  var t = Gm(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && Km(n.ownerDocument.documentElement, n)) {
    if (r !== null && nc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Hf(n, o))
        var a = Hf(n, r)
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var bg = Dt && 'documentMode' in document && 11 >= document.documentMode,
  ur = null,
  Fs = null,
  di = null,
  Ds = !1
function Yf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Ds ||
    ur == null ||
    ur !== oa(r) ||
    ((r = ur),
    'selectionStart' in r && nc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (di && _i(di, r)) ||
      ((di = r),
      (r = da(Fs, 'onSelect')),
      0 < r.length &&
        ((t = new Ju('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ur))))
}
function yo(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var cr = {
    animationend: yo('Animation', 'AnimationEnd'),
    animationiteration: yo('Animation', 'AnimationIteration'),
    animationstart: yo('Animation', 'AnimationStart'),
    transitionend: yo('Transition', 'TransitionEnd')
  },
  Yl = {},
  Qm = {}
Dt &&
  ((Qm = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  'TransitionEvent' in window || delete cr.transitionend.transition)
function Wa(e) {
  if (Yl[e]) return Yl[e]
  if (!cr[e]) return e
  var t = cr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Qm) return (Yl[e] = t[n])
  return e
}
var Xm = Wa('animationend'),
  Zm = Wa('animationiteration'),
  qm = Wa('animationstart'),
  Jm = Wa('transitionend'),
  eh = new Map(),
  Kf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function Sn(e, t) {
  eh.set(e, t), Gn(t, [e])
}
for (var Kl = 0; Kl < Kf.length; Kl++) {
  var Gl = Kf[Kl],
    Cg = Gl.toLowerCase(),
    Eg = Gl[0].toUpperCase() + Gl.slice(1)
  Sn(Cg, 'on' + Eg)
}
Sn(Xm, 'onAnimationEnd')
Sn(Zm, 'onAnimationIteration')
Sn(qm, 'onAnimationStart')
Sn('dblclick', 'onDoubleClick')
Sn('focusin', 'onFocus')
Sn('focusout', 'onBlur')
Sn(Jm, 'onTransitionEnd')
Rr('onMouseEnter', ['mouseout', 'mouseover'])
Rr('onMouseLeave', ['mouseout', 'mouseover'])
Rr('onPointerEnter', ['pointerout', 'pointerover'])
Rr('onPointerLeave', ['pointerout', 'pointerover'])
Gn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Gn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Gn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Gn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Gn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Gn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var ai =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Pg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ai))
function Gf(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Cv(r, t, void 0, e), (e.currentTarget = null)
}
function th(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget
          if (((l = l.listener), s !== o && i.isPropagationStopped())) break e
          Gf(i, l, u), (o = s)
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && i.isPropagationStopped())
          )
            break e
          Gf(i, l, u), (o = s)
        }
    }
  }
  if (la) throw ((e = Ms), (la = !1), (Ms = null), e)
}
function Q(e, t) {
  var n = t[Hs]
  n === void 0 && (n = t[Hs] = new Set())
  var r = e + '__bubble'
  n.has(r) || (nh(t, e, 2, !1), n.add(r))
}
function Ql(e, t, n) {
  var r = 0
  t && (r |= 4), nh(n, e, r, t)
}
var wo = '_reactListening' + Math.random().toString(36).slice(2)
function Ni(e) {
  if (!e[wo]) {
    ;(e[wo] = !0),
      um.forEach(function (n) {
        n !== 'selectionchange' && (Pg.has(n) || Ql(n, !1, e), Ql(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[wo] || ((t[wo] = !0), Ql('selectionchange', !1, t))
  }
}
function nh(e, t, n, r) {
  switch (Fm(t)) {
    case 1:
      var i = Dv
      break
    case 4:
      i = Uv
      break
    default:
      i = Zu
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !js || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function Xl(e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var a = r.tag
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return
            a = a.return
          }
        for (; l !== null; ) {
          if (((a = Nn(l)), a === null)) return
          if (((s = a.tag), s === 5 || s === 6)) {
            r = o = a
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  Em(function () {
    var u = o,
      c = Ku(n),
      f = []
    e: {
      var p = eh.get(e)
      if (p !== void 0) {
        var y = Ju,
          g = e
        switch (e) {
          case 'keypress':
            if (Wo(n) === 0) break e
          case 'keydown':
          case 'keyup':
            y = ng
            break
          case 'focusin':
            ;(g = 'focus'), (y = Vl)
            break
          case 'focusout':
            ;(g = 'blur'), (y = Vl)
            break
          case 'beforeblur':
          case 'afterblur':
            y = Vl
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = If
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Wv
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = og
            break
          case Xm:
          case Zm:
          case qm:
            y = Kv
            break
          case Jm:
            y = lg
            break
          case 'scroll':
            y = Bv
            break
          case 'wheel':
            y = ug
            break
          case 'copy':
          case 'cut':
          case 'paste':
            y = Qv
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = zf
        }
        var v = (t & 4) !== 0,
          k = !v && e === 'scroll',
          m = v ? (p !== null ? p + 'Capture' : null) : p
        v = []
        for (var d = u, h; d !== null; ) {
          h = d
          var w = h.stateNode
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w), m !== null && ((w = Ci(d, m)), w != null && v.push(Ri(d, w, h)))),
            k)
          )
            break
          d = d.return
        }
        0 < v.length &&
          ((p = new y(p, g, null, n, c)), f.push({ event: p, listeners: v }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p && n !== As && (g = n.relatedTarget || n.fromElement) && (Nn(g) || g[Ut]))
        )
          break e
        if (
          (y || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = u),
              (g = g ? Nn(g) : null),
              g !== null &&
                ((k = Qn(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = u)),
          y !== g)
        ) {
          if (
            ((v = If),
            (w = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = zf), (w = 'onPointerLeave'), (m = 'onPointerEnter'), (d = 'pointer')),
            (k = y == null ? p : fr(y)),
            (h = g == null ? p : fr(g)),
            (p = new v(w, d + 'leave', y, n, c)),
            (p.target = k),
            (p.relatedTarget = h),
            (w = null),
            Nn(c) === u &&
              ((v = new v(m, d + 'enter', g, n, c)),
              (v.target = h),
              (v.relatedTarget = k),
              (w = v)),
            (k = w),
            y && g)
          )
            t: {
              for (v = y, m = g, d = 0, h = v; h; h = Jn(h)) d++
              for (h = 0, w = m; w; w = Jn(w)) h++
              for (; 0 < d - h; ) (v = Jn(v)), d--
              for (; 0 < h - d; ) (m = Jn(m)), h--
              for (; d--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t
                ;(v = Jn(v)), (m = Jn(m))
              }
              v = null
            }
          else v = null
          y !== null && Qf(f, p, y, v, !1), g !== null && k !== null && Qf(f, k, g, v, !0)
        }
      }
      e: {
        if (
          ((p = u ? fr(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var b = vg
        else if (Uf(p))
          if (Hm) b = xg
          else {
            b = yg
            var E = gg
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (b = wg)
        if (b && (b = b(e, u))) {
          Wm(f, b, n, c)
          break e
        }
        E && E(e, p, u),
          e === 'focusout' &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === 'number' &&
            Os(p, 'number', p.value)
      }
      switch (((E = u ? fr(u) : window), e)) {
        case 'focusin':
          ;(Uf(E) || E.contentEditable === 'true') && ((ur = E), (Fs = u), (di = null))
          break
        case 'focusout':
          di = Fs = ur = null
          break
        case 'mousedown':
          Ds = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Ds = !1), Yf(f, n, c)
          break
        case 'selectionchange':
          if (bg) break
        case 'keydown':
        case 'keyup':
          Yf(f, n, c)
      }
      var C
      if (tc)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart'
              break e
            case 'compositionend':
              _ = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              _ = 'onCompositionUpdate'
              break e
          }
          _ = void 0
        }
      else
        sr
          ? Bm(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart')
      _ &&
        (Um &&
          n.locale !== 'ko' &&
          (sr || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && sr && (C = Dm())
            : ((rn = c), (qu = 'value' in rn ? rn.value : rn.textContent), (sr = !0))),
        (E = da(u, _)),
        0 < E.length &&
          ((_ = new Lf(_, e, null, n, c)),
          f.push({ event: _, listeners: E }),
          C ? (_.data = C) : ((C = Vm(n)), C !== null && (_.data = C)))),
        (C = fg ? dg(e, n) : pg(e, n)) &&
          ((u = da(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Lf('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)))
    }
    th(f, t)
  })
}
function Ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function da(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ci(e, n)),
      o != null && r.unshift(Ri(e, o, i)),
      (o = Ci(e, t)),
      o != null && r.push(Ri(e, o, i))),
      (e = e.return)
  }
  return r
}
function Jn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Qf(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode
    if (s !== null && s === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = Ci(n, o)), s != null && a.unshift(Ri(n, s, l)))
        : i || ((s = Ci(n, o)), s != null && a.push(Ri(n, s, l)))),
      (n = n.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var Og = /\r\n?/g,
  Tg = /\u0000|\uFFFD/g
function Xf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Og,
      `
`
    )
    .replace(Tg, '')
}
function xo(e, t, n) {
  if (((t = Xf(t)), Xf(e) !== t && n)) throw Error(P(425))
}
function pa() {}
var Us = null,
  Bs = null
function Vs(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ws = typeof setTimeout == 'function' ? setTimeout : void 0,
  _g = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Zf = typeof Promise == 'function' ? Promise : void 0,
  Ng =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Zf < 'u'
      ? function (e) {
          return Zf.resolve(null).then(e).catch(Rg)
        }
      : Ws
function Rg(e) {
  setTimeout(function () {
    throw e
  })
}
function Zl(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Oi(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Oi(t)
}
function fn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function qf(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Vr = Math.random().toString(36).slice(2),
  Pt = '__reactFiber$' + Vr,
  Ai = '__reactProps$' + Vr,
  Ut = '__reactContainer$' + Vr,
  Hs = '__reactEvents$' + Vr,
  Ag = '__reactListeners$' + Vr,
  $g = '__reactHandles$' + Vr
function Nn(e) {
  var t = e[Pt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ut] || n[Pt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = qf(e); e !== null; ) {
          if ((n = e[Pt])) return n
          e = qf(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function qi(e) {
  return (
    (e = e[Pt] || e[Ut]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(P(33))
}
function Ha(e) {
  return e[Ai] || null
}
var Ys = [],
  dr = -1
function bn(e) {
  return { current: e }
}
function Z(e) {
  0 > dr || ((e.current = Ys[dr]), (Ys[dr] = null), dr--)
}
function K(e, t) {
  dr++, (Ys[dr] = e.current), (e.current = t)
}
var yn = {},
  Ae = bn(yn),
  Be = bn(!1),
  Dn = yn
function Ar(e, t) {
  var n = e.type.contextTypes
  if (!n) return yn
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Ve(e) {
  return (e = e.childContextTypes), e != null
}
function ma() {
  Z(Be), Z(Ae)
}
function Jf(e, t, n) {
  if (Ae.current !== yn) throw Error(P(168))
  K(Ae, t), K(Be, n)
}
function rh(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(P(108, gv(e) || 'Unknown', i))
  return ie({}, n, r)
}
function ha(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    (Dn = Ae.current),
    K(Ae, e),
    K(Be, Be.current),
    !0
  )
}
function ed(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(P(169))
  n
    ? ((e = rh(e, t, Dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(Be),
      Z(Ae),
      K(Ae, e))
    : Z(Be),
    K(Be, n)
}
var Mt = null,
  Ya = !1,
  ql = !1
function ih(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e)
}
function jg(e) {
  ;(Ya = !0), ih(e)
}
function Cn() {
  if (!ql && Mt !== null) {
    ql = !0
    var e = 0,
      t = W
    try {
      var n = Mt
      for (W = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Mt = null), (Ya = !1)
    } catch (i) {
      throw (Mt !== null && (Mt = Mt.slice(e + 1)), _m(Gu, Cn), i)
    } finally {
      ;(W = t), (ql = !1)
    }
  }
  return null
}
var pr = [],
  mr = 0,
  va = null,
  ga = 0,
  it = [],
  ot = 0,
  Un = null,
  Lt = 1,
  zt = ''
function Tn(e, t) {
  ;(pr[mr++] = ga), (pr[mr++] = va), (va = e), (ga = t)
}
function oh(e, t, n) {
  ;(it[ot++] = Lt), (it[ot++] = zt), (it[ot++] = Un), (Un = e)
  var r = Lt
  e = zt
  var i = 32 - yt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - yt(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Lt = (1 << (32 - yt(t) + i)) | (n << i) | r),
      (zt = o + e)
  } else (Lt = (1 << o) | (n << i) | r), (zt = e)
}
function rc(e) {
  e.return !== null && (Tn(e, 1), oh(e, 1, 0))
}
function ic(e) {
  for (; e === va; ) (va = pr[--mr]), (pr[mr] = null), (ga = pr[--mr]), (pr[mr] = null)
  for (; e === Un; )
    (Un = it[--ot]),
      (it[ot] = null),
      (zt = it[--ot]),
      (it[ot] = null),
      (Lt = it[--ot]),
      (it[ot] = null)
}
var Xe = null,
  Qe = null,
  ee = !1,
  vt = null
function ah(e, t) {
  var n = lt(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function td(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Qe = fn(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Qe = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Un !== null ? { id: Lt, overflow: zt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Qe = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Gs(e) {
  if (ee) {
    var t = Qe
    if (t) {
      var n = t
      if (!td(e, t)) {
        if (Ks(e)) throw Error(P(418))
        t = fn(n.nextSibling)
        var r = Xe
        t && td(e, t)
          ? ah(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Xe = e))
      }
    } else {
      if (Ks(e)) throw Error(P(418))
      ;(e.flags = (e.flags & -4097) | 2), (ee = !1), (Xe = e)
    }
  }
}
function nd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Xe = e
}
function ko(e) {
  if (e !== Xe) return !1
  if (!ee) return nd(e), (ee = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Vs(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (Ks(e)) throw (lh(), Error(P(418)))
    for (; t; ) ah(e, t), (t = fn(t.nextSibling))
  }
  if ((nd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Qe = fn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Qe = null
    }
  } else Qe = Xe ? fn(e.stateNode.nextSibling) : null
  return !0
}
function lh() {
  for (var e = Qe; e; ) e = fn(e.nextSibling)
}
function $r() {
  ;(Qe = Xe = null), (ee = !1)
}
function oc(e) {
  vt === null ? (vt = [e]) : vt.push(e)
}
var Mg = Gt.ReactCurrentBatchConfig
function mt(e, t) {
  if (e && e.defaultProps) {
    ;(t = ie({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var ya = bn(null),
  wa = null,
  hr = null,
  ac = null
function lc() {
  ac = hr = wa = null
}
function sc(e) {
  var t = ya.current
  Z(ya), (e._currentValue = t)
}
function Qs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Er(e, t) {
  ;(wa = e),
    (ac = hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null))
}
function ut(e) {
  var t = e._currentValue
  if (ac !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
      if (wa === null) throw Error(P(308))
      ;(hr = e), (wa.dependencies = { lanes: 0, firstContext: e })
    } else hr = hr.next = e
  return t
}
var Rn = null
function uc(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e)
}
function sh(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), uc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  )
}
function Bt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var en = !1
function cc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function uh(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function Ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function dn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), U & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Bt(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), uc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  )
}
function Ho(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Qu(e, n)
  }
}
function rd(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function xa(e, t, n, r) {
  var i = e.updateQueue
  en = !1
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending
  if (l !== null) {
    i.shared.pending = null
    var s = l,
      u = s.next
    ;(s.next = null), a === null ? (o = u) : (a.next = u), (a = s)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = s)))
  }
  if (o !== null) {
    var f = i.baseState
    ;(a = 0), (c = u = s = null), (l = o)
    do {
      var p = l.lane,
        y = l.eventTime
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null
            })
        e: {
          var g = e,
            v = l
          switch (((p = t), (y = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == 'function')) {
                f = g.call(y, f, p)
                break e
              }
              f = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (
                ((g = v.payload),
                (p = typeof g == 'function' ? g.call(y, f, p) : g),
                p == null)
              )
                break e
              f = ie({}, f, p)
              break e
            case 2:
              en = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (p = i.effects), p === null ? (i.effects = [l]) : p.push(l))
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        }),
          c === null ? ((u = c = y), (s = f)) : (c = c.next = y),
          (a |= p)
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break
        ;(p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (a |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(Vn |= a), (e.lanes = a), (e.memoizedState = f)
  }
}
function id(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(P(191, i))
        i.call(r)
      }
    }
}
var ch = new sm.Component().refs
function Xs(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ka = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Ie(),
      i = mn(e),
      o = Ft(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (wt(t, e, i, r), Ho(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Ie(),
      i = mn(e),
      o = Ft(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (wt(t, e, i, r), Ho(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ie(),
      r = mn(e),
      i = Ft(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = dn(e, i, r)),
      t !== null && (wt(t, e, r, n), Ho(t, e, r))
  }
}
function od(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !_i(n, r) || !_i(i, o)
      : !0
  )
}
function fh(e, t, n) {
  var r = !1,
    i = yn,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = ut(o))
      : ((i = Ve(t) ? Dn : Ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ar(e, i) : yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ka),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function ad(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ka.enqueueReplaceState(t, t.state, null)
}
function Zs(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = ch), cc(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = ut(o))
    : ((o = Ve(t) ? Dn : Ae.current), (i.context = Ar(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Xs(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && Ka.enqueueReplaceState(i, i.state, null),
      xa(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function qr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309))
        var r = n.stateNode
      }
      if (!r) throw Error(P(147, e))
      var i = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var l = i.refs
            l === ch && (l = i.refs = {}), a === null ? delete l[o] : (l[o] = a)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(P(284))
    if (!n._owner) throw Error(P(290, e))
  }
  return e
}
function So(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function ld(e) {
  var t = e._init
  return t(e._payload)
}
function dh(e) {
  function t(m, d) {
    if (e) {
      var h = m.deletions
      h === null ? ((m.deletions = [d]), (m.flags |= 16)) : h.push(d)
    }
  }
  function n(m, d) {
    if (!e) return null
    for (; d !== null; ) t(m, d), (d = d.sibling)
    return null
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling)
    return m
  }
  function i(m, d) {
    return (m = hn(m, d)), (m.index = 0), (m.sibling = null), m
  }
  function o(m, d, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((m.flags |= 2), d) : h)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    )
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function l(m, d, h, w) {
    return d === null || d.tag !== 6
      ? ((d = os(h, m.mode, w)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d)
  }
  function s(m, d, h, w) {
    var b = h.type
    return b === lr
      ? c(m, d, h.props.children, w, h.key)
      : d !== null &&
        (d.elementType === b ||
          (typeof b == 'object' && b !== null && b.$$typeof === Jt && ld(b) === d.type))
      ? ((w = i(d, h.props)), (w.ref = qr(m, d, h)), (w.return = m), w)
      : ((w = Zo(h.type, h.key, h.props, null, m.mode, w)),
        (w.ref = qr(m, d, h)),
        (w.return = m),
        w)
  }
  function u(m, d, h, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = as(h, m.mode, w)), (d.return = m), d)
      : ((d = i(d, h.children || [])), (d.return = m), d)
  }
  function c(m, d, h, w, b) {
    return d === null || d.tag !== 7
      ? ((d = Ln(h, m.mode, w, b)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d)
  }
  function f(m, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = os('' + d, m.mode, h)), (d.return = m), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case co:
          return (
            (h = Zo(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = qr(m, null, d)),
            (h.return = m),
            h
          )
        case ar:
          return (d = as(d, m.mode, h)), (d.return = m), d
        case Jt:
          var w = d._init
          return f(m, w(d._payload), h)
      }
      if (ii(d) || Kr(d)) return (d = Ln(d, m.mode, h, null)), (d.return = m), d
      So(m, d)
    }
    return null
  }
  function p(m, d, h, w) {
    var b = d !== null ? d.key : null
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return b !== null ? null : l(m, d, '' + h, w)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case co:
          return h.key === b ? s(m, d, h, w) : null
        case ar:
          return h.key === b ? u(m, d, h, w) : null
        case Jt:
          return (b = h._init), p(m, d, b(h._payload), w)
      }
      if (ii(h) || Kr(h)) return b !== null ? null : c(m, d, h, w, null)
      So(m, h)
    }
    return null
  }
  function y(m, d, h, w, b) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (m = m.get(h) || null), l(d, m, '' + w, b)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case co:
          return (m = m.get(w.key === null ? h : w.key) || null), s(d, m, w, b)
        case ar:
          return (m = m.get(w.key === null ? h : w.key) || null), u(d, m, w, b)
        case Jt:
          var E = w._init
          return y(m, d, h, E(w._payload), b)
      }
      if (ii(w) || Kr(w)) return (m = m.get(h) || null), c(d, m, w, b, null)
      So(d, w)
    }
    return null
  }
  function g(m, d, h, w) {
    for (
      var b = null, E = null, C = d, _ = (d = 0), j = null;
      C !== null && _ < h.length;
      _++
    ) {
      C.index > _ ? ((j = C), (C = null)) : (j = C.sibling)
      var O = p(m, C, h[_], w)
      if (O === null) {
        C === null && (C = j)
        break
      }
      e && C && O.alternate === null && t(m, C),
        (d = o(O, d, _)),
        E === null ? (b = O) : (E.sibling = O),
        (E = O),
        (C = j)
    }
    if (_ === h.length) return n(m, C), ee && Tn(m, _), b
    if (C === null) {
      for (; _ < h.length; _++)
        (C = f(m, h[_], w)),
          C !== null &&
            ((d = o(C, d, _)), E === null ? (b = C) : (E.sibling = C), (E = C))
      return ee && Tn(m, _), b
    }
    for (C = r(m, C); _ < h.length; _++)
      (j = y(C, m, _, h[_], w)),
        j !== null &&
          (e && j.alternate !== null && C.delete(j.key === null ? _ : j.key),
          (d = o(j, d, _)),
          E === null ? (b = j) : (E.sibling = j),
          (E = j))
    return (
      e &&
        C.forEach(function (D) {
          return t(m, D)
        }),
      ee && Tn(m, _),
      b
    )
  }
  function v(m, d, h, w) {
    var b = Kr(h)
    if (typeof b != 'function') throw Error(P(150))
    if (((h = b.call(h)), h == null)) throw Error(P(151))
    for (
      var E = (b = null), C = d, _ = (d = 0), j = null, O = h.next();
      C !== null && !O.done;
      _++, O = h.next()
    ) {
      C.index > _ ? ((j = C), (C = null)) : (j = C.sibling)
      var D = p(m, C, O.value, w)
      if (D === null) {
        C === null && (C = j)
        break
      }
      e && C && D.alternate === null && t(m, C),
        (d = o(D, d, _)),
        E === null ? (b = D) : (E.sibling = D),
        (E = D),
        (C = j)
    }
    if (O.done) return n(m, C), ee && Tn(m, _), b
    if (C === null) {
      for (; !O.done; _++, O = h.next())
        (O = f(m, O.value, w)),
          O !== null &&
            ((d = o(O, d, _)), E === null ? (b = O) : (E.sibling = O), (E = O))
      return ee && Tn(m, _), b
    }
    for (C = r(m, C); !O.done; _++, O = h.next())
      (O = y(C, m, _, O.value, w)),
        O !== null &&
          (e && O.alternate !== null && C.delete(O.key === null ? _ : O.key),
          (d = o(O, d, _)),
          E === null ? (b = O) : (E.sibling = O),
          (E = O))
    return (
      e &&
        C.forEach(function (Y) {
          return t(m, Y)
        }),
      ee && Tn(m, _),
      b
    )
  }
  function k(m, d, h, w) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === lr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case co:
          e: {
            for (var b = h.key, E = d; E !== null; ) {
              if (E.key === b) {
                if (((b = h.type), b === lr)) {
                  if (E.tag === 7) {
                    n(m, E.sibling), (d = i(E, h.props.children)), (d.return = m), (m = d)
                    break e
                  }
                } else if (
                  E.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === Jt &&
                    ld(b) === E.type)
                ) {
                  n(m, E.sibling),
                    (d = i(E, h.props)),
                    (d.ref = qr(m, E, h)),
                    (d.return = m),
                    (m = d)
                  break e
                }
                n(m, E)
                break
              } else t(m, E)
              E = E.sibling
            }
            h.type === lr
              ? ((d = Ln(h.props.children, m.mode, w, h.key)), (d.return = m), (m = d))
              : ((w = Zo(h.type, h.key, h.props, null, m.mode, w)),
                (w.ref = qr(m, d, h)),
                (w.return = m),
                (m = w))
          }
          return a(m)
        case ar:
          e: {
            for (E = h.key; d !== null; ) {
              if (d.key === E)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(m, d.sibling), (d = i(d, h.children || [])), (d.return = m), (m = d)
                  break e
                } else {
                  n(m, d)
                  break
                }
              else t(m, d)
              d = d.sibling
            }
            ;(d = as(h, m.mode, w)), (d.return = m), (m = d)
          }
          return a(m)
        case Jt:
          return (E = h._init), k(m, d, E(h._payload), w)
      }
      if (ii(h)) return g(m, d, h, w)
      if (Kr(h)) return v(m, d, h, w)
      So(m, h)
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = i(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = os(h, m.mode, w)), (d.return = m), (m = d)),
        a(m))
      : n(m, d)
  }
  return k
}
var jr = dh(!0),
  ph = dh(!1),
  Ji = {},
  _t = bn(Ji),
  $i = bn(Ji),
  ji = bn(Ji)
function An(e) {
  if (e === Ji) throw Error(P(174))
  return e
}
function fc(e, t) {
  switch ((K(ji, t), K($i, e), K(_t, Ji), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _s(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _s(t, e))
  }
  Z(_t), K(_t, t)
}
function Mr() {
  Z(_t), Z($i), Z(ji)
}
function mh(e) {
  An(ji.current)
  var t = An(_t.current),
    n = _s(t, e.type)
  t !== n && (K($i, e), K(_t, n))
}
function dc(e) {
  $i.current === e && (Z(_t), Z($i))
}
var ne = bn(0)
function ka(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Jl = []
function pc() {
  for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null
  Jl.length = 0
}
var Yo = Gt.ReactCurrentDispatcher,
  es = Gt.ReactCurrentBatchConfig,
  Bn = 0,
  re = null,
  ve = null,
  we = null,
  Sa = !1,
  pi = !1,
  Mi = 0,
  Ig = 0
function Te() {
  throw Error(P(321))
}
function mc(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1
  return !0
}
function hc(e, t, n, r, i, o) {
  if (
    ((Bn = o),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yo.current = e === null || e.memoizedState === null ? Dg : Ug),
    (e = n(r, i)),
    pi)
  ) {
    o = 0
    do {
      if (((pi = !1), (Mi = 0), 25 <= o)) throw Error(P(301))
      ;(o += 1),
        (we = ve = null),
        (t.updateQueue = null),
        (Yo.current = Bg),
        (e = n(r, i))
    } while (pi)
  }
  if (
    ((Yo.current = ba),
    (t = ve !== null && ve.next !== null),
    (Bn = 0),
    (we = ve = re = null),
    (Sa = !1),
    t)
  )
    throw Error(P(300))
  return e
}
function vc() {
  var e = Mi !== 0
  return (Mi = 0), e
}
function bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return we === null ? (re.memoizedState = we = e) : (we = we.next = e), we
}
function ct() {
  if (ve === null) {
    var e = re.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ve.next
  var t = we === null ? re.memoizedState : we.next
  if (t !== null) (we = t), (ve = e)
  else {
    if (e === null) throw Error(P(310))
    ;(ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null
      }),
      we === null ? (re.memoizedState = we = e) : (we = we.next = e)
  }
  return we
}
function Ii(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function ts(e) {
  var t = ct(),
    n = t.queue
  if (n === null) throw Error(P(311))
  n.lastRenderedReducer = e
  var r = ve,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var a = i.next
      ;(i.next = o.next), (o.next = a)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var l = (a = null),
      s = null,
      u = o
    do {
      var c = u.lane
      if ((Bn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }
        s === null ? ((l = s = f), (a = r)) : (s = s.next = f), (re.lanes |= c), (Vn |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    s === null ? (a = r) : (s.next = l),
      kt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (re.lanes |= o), (Vn |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function ns(e) {
  var t = ct(),
    n = t.queue
  if (n === null) throw Error(P(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var a = (i = i.next)
    do (o = e(o, a.action)), (a = a.next)
    while (a !== i)
    kt(o, t.memoizedState) || (Ue = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function hh() {}
function vh(e, t) {
  var n = re,
    r = ct(),
    i = t(),
    o = !kt(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Ue = !0)),
    (r = r.queue),
    gc(wh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Li(9, yh.bind(null, n, r, i, t), void 0, null), xe === null))
      throw Error(P(349))
    Bn & 30 || gh(n, t, i)
  }
  return i
}
function gh(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (re.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function yh(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), xh(t) && kh(e)
}
function wh(e, t, n) {
  return n(function () {
    xh(t) && kh(e)
  })
}
function xh(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !kt(e, n)
  } catch {
    return !0
  }
}
function kh(e) {
  var t = Bt(e, 1)
  t !== null && wt(t, e, 1, -1)
}
function sd(e) {
  var t = bt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ii,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = Fg.bind(null, re, e)),
    [t.memoizedState, e]
  )
}
function Li(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Sh() {
  return ct().memoizedState
}
function Ko(e, t, n, r) {
  var i = bt()
  ;(re.flags |= e), (i.memoizedState = Li(1 | t, n, void 0, r === void 0 ? null : r))
}
function Ga(e, t, n, r) {
  var i = ct()
  r = r === void 0 ? null : r
  var o = void 0
  if (ve !== null) {
    var a = ve.memoizedState
    if (((o = a.destroy), r !== null && mc(r, a.deps))) {
      i.memoizedState = Li(t, n, o, r)
      return
    }
  }
  ;(re.flags |= e), (i.memoizedState = Li(1 | t, n, o, r))
}
function ud(e, t) {
  return Ko(8390656, 8, e, t)
}
function gc(e, t) {
  return Ga(2048, 8, e, t)
}
function bh(e, t) {
  return Ga(4, 2, e, t)
}
function Ch(e, t) {
  return Ga(4, 4, e, t)
}
function Eh(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Ph(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Ga(4, 4, Eh.bind(null, t, e), n)
}
function yc() {}
function Oh(e, t) {
  var n = ct()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && mc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function Th(e, t) {
  var n = ct()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && mc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function _h(e, t, n) {
  return Bn & 21
    ? (kt(n, t) || ((n = Am()), (re.lanes |= n), (Vn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n))
}
function Lg(e, t) {
  var n = W
  ;(W = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = es.transition
  es.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(W = n), (es.transition = r)
  }
}
function Nh() {
  return ct().memoizedState
}
function zg(e, t, n) {
  var r = mn(e)
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Rh(e))
  )
    Ah(t, n)
  else if (((n = sh(e, t, n, r)), n !== null)) {
    var i = Ie()
    wt(n, e, r, i), $h(n, t, r)
  }
}
function Fg(e, t, n) {
  var r = mn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Rh(e)) Ah(t, i)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = o(a, n)
        if (((i.hasEagerState = !0), (i.eagerState = l), kt(l, a))) {
          var s = t.interleaved
          s === null ? ((i.next = i), uc(t)) : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = sh(e, t, i, r)), n !== null && ((i = Ie()), wt(n, e, r, i), $h(n, t, r))
  }
}
function Rh(e) {
  var t = e.alternate
  return e === re || (t !== null && t === re)
}
function Ah(e, t) {
  pi = Sa = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function $h(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Qu(e, n)
  }
}
var ba = {
    readContext: ut,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
  },
  Dg = {
    readContext: ut,
    useCallback: function (e, t) {
      return (bt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: ut,
    useEffect: ud,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), Ko(4194308, 4, Eh.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Ko(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ko(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = bt()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = bt()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = zg.bind(null, re, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = bt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: sd,
    useDebugValue: yc,
    useDeferredValue: function (e) {
      return (bt().memoizedState = e)
    },
    useTransition: function () {
      var e = sd(!1),
        t = e[0]
      return (e = Lg.bind(null, e[1])), (bt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        i = bt()
      if (ee) {
        if (n === void 0) throw Error(P(407))
        n = n()
      } else {
        if (((n = t()), xe === null)) throw Error(P(349))
        Bn & 30 || gh(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        ud(wh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Li(9, yh.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = bt(),
        t = xe.identifierPrefix
      if (ee) {
        var n = zt,
          r = Lt
        ;(n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Mi++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Ig++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  Ug = {
    readContext: ut,
    useCallback: Oh,
    useContext: ut,
    useEffect: gc,
    useImperativeHandle: Ph,
    useInsertionEffect: bh,
    useLayoutEffect: Ch,
    useMemo: Th,
    useReducer: ts,
    useRef: Sh,
    useState: function () {
      return ts(Ii)
    },
    useDebugValue: yc,
    useDeferredValue: function (e) {
      var t = ct()
      return _h(t, ve.memoizedState, e)
    },
    useTransition: function () {
      var e = ts(Ii)[0],
        t = ct().memoizedState
      return [e, t]
    },
    useMutableSource: hh,
    useSyncExternalStore: vh,
    useId: Nh,
    unstable_isNewReconciler: !1
  },
  Bg = {
    readContext: ut,
    useCallback: Oh,
    useContext: ut,
    useEffect: gc,
    useImperativeHandle: Ph,
    useInsertionEffect: bh,
    useLayoutEffect: Ch,
    useMemo: Th,
    useReducer: ns,
    useRef: Sh,
    useState: function () {
      return ns(Ii)
    },
    useDebugValue: yc,
    useDeferredValue: function (e) {
      var t = ct()
      return ve === null ? (t.memoizedState = e) : _h(t, ve.memoizedState, e)
    },
    useTransition: function () {
      var e = ns(Ii)[0],
        t = ct().memoizedState
      return [e, t]
    },
    useMutableSource: hh,
    useSyncExternalStore: vh,
    useId: Nh,
    unstable_isNewReconciler: !1
  }
function Ir(e, t) {
  try {
    var n = '',
      r = t
    do (n += vv(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function rs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function qs(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Vg = typeof WeakMap == 'function' ? WeakMap : Map
function jh(e, t, n) {
  ;(n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Ea || ((Ea = !0), (su = r)), qs(e, t)
    }),
    n
  )
}
function Mh(e, t, n) {
  ;(n = Ft(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        qs(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        qs(e, t),
          typeof r != 'function' && (pn === null ? (pn = new Set([this])) : pn.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    n
  )
}
function cd(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Vg()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = ry.bind(null, e, t, n)), t.then(e, e))
}
function fd(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function dd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ft(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Wg = Gt.ReactCurrentOwner,
  Ue = !1
function Me(e, t, n, r) {
  t.child = e === null ? ph(t, null, n, r) : jr(t, e.child, n, r)
}
function pd(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    Er(t, i),
    (r = hc(e, t, n, r, o, i)),
    (n = vc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Vt(e, t, i))
      : (ee && n && rc(t), (t.flags |= 1), Me(e, t, r, i), t.child)
  )
}
function md(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Pc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ih(e, t, o, r, i))
      : ((e = Zo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : _i), n(a, r) && e.ref === t.ref))
      return Vt(e, t, i)
  }
  return (t.flags |= 1), (e = hn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function Ih(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (_i(o, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ue = !0)
      else return (t.lanes = e.lanes), Vt(e, t, i)
  }
  return Js(e, t, n, r, i)
}
function Lh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(gr, Ke),
        (Ke |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          K(gr, Ke),
          (Ke |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        K(gr, Ke),
        (Ke |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(gr, Ke),
      (Ke |= r)
  return Me(e, t, i, n), t.child
}
function zh(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Js(e, t, n, r, i) {
  var o = Ve(n) ? Dn : Ae.current
  return (
    (o = Ar(t, o)),
    Er(t, i),
    (n = hc(e, t, n, r, o, i)),
    (r = vc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Vt(e, t, i))
      : (ee && r && rc(t), (t.flags |= 1), Me(e, t, n, i), t.child)
  )
}
function hd(e, t, n, r, i) {
  if (Ve(n)) {
    var o = !0
    ha(t)
  } else o = !1
  if ((Er(t, i), t.stateNode === null)) Go(e, t), fh(t, n, r), Zs(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps
    a.props = l
    var s = a.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = ut(u))
      : ((u = Ve(n) ? Dn : Ae.current), (u = Ar(t, u)))
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && ad(t, a, r, u)),
      (en = !1)
    var p = t.memoizedState
    ;(a.state = p),
      xa(t, r, a, i),
      (s = t.memoizedState),
      l !== r || p !== s || Be.current || en
        ? (typeof c == 'function' && (Xs(t, n, c, r), (s = t.memoizedState)),
          (l = en || od(t, n, l, r, p, s, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
  } else {
    ;(a = t.stateNode),
      uh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : mt(t.type, l)),
      (a.props = u),
      (f = t.pendingProps),
      (p = a.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = ut(s))
        : ((s = Ve(n) ? Dn : Ae.current), (s = Ar(t, s)))
    var y = n.getDerivedStateFromProps
    ;(c = typeof y == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== f || p !== s) && ad(t, a, r, s)),
      (en = !1),
      (p = t.memoizedState),
      (a.state = p),
      xa(t, r, a, i)
    var g = t.memoizedState
    l !== f || p !== g || Be.current || en
      ? (typeof y == 'function' && (Xs(t, n, y, r), (g = t.memoizedState)),
        (u = en || od(t, n, u, r, p, g, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, g, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, g, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return eu(e, t, n, r, o, i)
}
function eu(e, t, n, r, i, o) {
  zh(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && ed(t, n, !1), Vt(e, t, o)
  ;(r = t.stateNode), (Wg.current = t)
  var l = a && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = jr(t, e.child, null, o)), (t.child = jr(t, null, l, o)))
      : Me(e, t, l, o),
    (t.memoizedState = r.state),
    i && ed(t, n, !0),
    t.child
  )
}
function Fh(e) {
  var t = e.stateNode
  t.pendingContext
    ? Jf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jf(e, t.context, !1),
    fc(e, t.containerInfo)
}
function vd(e, t, n, r, i) {
  return $r(), oc(i), (t.flags |= 256), Me(e, t, n, r), t.child
}
var tu = { dehydrated: null, treeContext: null, retryLane: 0 }
function nu(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Dh(e, t, n) {
  var r = t.pendingProps,
    i = ne.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l
  if (
    ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    K(ne, i & 1),
    e === null)
  )
    return (
      Gs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = Za(a, r, 0, null)),
              (e = Ln(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = nu(n)),
              (t.memoizedState = tu),
              e)
            : wc(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Hg(e, t, a, r, l, i, n)
  if (o) {
    ;(o = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = hn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = hn(l, o)) : ((o = Ln(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? nu(n)
          : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = tu),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hn(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function wc(e, t) {
  return (
    (t = Za({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function bo(e, t, n, r) {
  return (
    r !== null && oc(r),
    jr(t, e.child, null, n),
    (e = wc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Hg(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = rs(Error(P(422)))), bo(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Za({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Ln(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && jr(t, e.child, null, a),
        (t.child.memoizedState = nu(a)),
        (t.memoizedState = tu),
        o)
  if (!(t.mode & 1)) return bo(e, t, a, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (o = Error(P(419))), (r = rs(o, r, void 0)), bo(e, t, a, r)
  }
  if (((l = (a & e.childLanes) !== 0), Ue || l)) {
    if (((r = xe), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), Bt(e, i), wt(r, e, i, -1))
    }
    return Ec(), (r = rs(Error(P(421)))), bo(e, t, a, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = iy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Qe = fn(i.nextSibling)),
      (Xe = t),
      (ee = !0),
      (vt = null),
      e !== null &&
        ((it[ot++] = Lt),
        (it[ot++] = zt),
        (it[ot++] = Un),
        (Lt = e.id),
        (zt = e.overflow),
        (Un = t)),
      (t = wc(t, r.children)),
      (t.flags |= 4096),
      t)
}
function gd(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Qs(e.return, t, n)
}
function is(e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function Uh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((Me(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gd(e, n, t)
        else if (e.tag === 19) gd(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((K(ne, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && ka(e) === null && (i = n), (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          is(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ka(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        is(t, !0, n, null, o)
        break
      case 'together':
        is(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Go(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(P(153))
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Yg(e, t, n) {
  switch (t.tag) {
    case 3:
      Fh(t), $r()
      break
    case 5:
      mh(t)
      break
    case 1:
      Ve(t.type) && ha(t)
      break
    case 4:
      fc(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      K(ya, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dh(e, t, n)
          : (K(ne, ne.current & 1), (e = Vt(e, t, n)), e !== null ? e.sibling : null)
      K(ne, ne.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Uh(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        K(ne, ne.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Lh(e, t, n)
  }
  return Vt(e, t, n)
}
var Bh, ru, Vh, Wh
Bh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
ru = function () {}
Vh = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), An(_t.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = Es(e, i)), (r = Es(e, r)), (o = [])
        break
      case 'select':
        ;(i = ie({}, i, { value: void 0 })), (r = ie({}, r, { value: void 0 })), (o = [])
        break
      case 'textarea':
        ;(i = Ts(e, i)), (r = Ts(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = pa)
    }
    Ns(n, r)
    var a
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u]
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Si.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in r) {
      var s = r[u]
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''))
            for (a in s)
              s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), (n[a] = s[a]))
          } else n || (o || (o = []), o.push(u, n)), (n = s)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (o = o || []).push(u, s))
            : u === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(u, '' + s)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Si.hasOwnProperty(u)
                ? (s != null && u === 'onScroll' && Q('scroll', e),
                  o || l === s || (o = []))
                : (o = o || []).push(u, s))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Wh = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Jr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Kg(e, t, n) {
  var r = t.pendingProps
  switch ((ic(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null
    case 1:
      return Ve(t.type) && ma(), _e(t), null
    case 3:
      return (
        (r = t.stateNode),
        Mr(),
        Z(Be),
        Z(Ae),
        pc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ko(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (fu(vt), (vt = null)))),
        ru(e, t),
        _e(t),
        null
      )
    case 5:
      dc(t)
      var i = An(ji.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Vh(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166))
          return _e(t), null
        }
        if (((e = An(_t.current)), ko(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Pt] = t), (r[Ai] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Q('cancel', r), Q('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Q('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < ai.length; i++) Q(ai[i], r)
              break
            case 'source':
              Q('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              Q('error', r), Q('load', r)
              break
            case 'details':
              Q('toggle', r)
              break
            case 'input':
              Pf(r, o), Q('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }), Q('invalid', r)
              break
            case 'textarea':
              Tf(r, o), Q('invalid', r)
          }
          Ns(n, o), (i = null)
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a]
              a === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 && xo(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 && xo(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Si.hasOwnProperty(a) && l != null && a === 'onScroll' && Q('scroll', r)
            }
          switch (n) {
            case 'input':
              fo(r), Of(r, o, !0)
              break
            case 'textarea':
              fo(r), _f(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = pa)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = gm(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === 'select' &&
                    ((a = e),
                    r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Pt] = t),
            (e[Ai] = r),
            Bh(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Rs(n, r)), n)) {
              case 'dialog':
                Q('cancel', e), Q('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Q('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < ai.length; i++) Q(ai[i], e)
                i = r
                break
              case 'source':
                Q('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                Q('error', e), Q('load', e), (i = r)
                break
              case 'details':
                Q('toggle', e), (i = r)
                break
              case 'input':
                Pf(e, r), (i = Es(e, r)), Q('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ie({}, r, { value: void 0 })),
                  Q('invalid', e)
                break
              case 'textarea':
                Tf(e, r), (i = Ts(e, r)), Q('invalid', e)
                break
              default:
                i = r
            }
            Ns(n, i), (l = i)
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o]
                o === 'style'
                  ? xm(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && ym(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && bi(e, s)
                    : typeof s == 'number' && bi(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Si.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && Q('scroll', e)
                      : s != null && Vu(e, o, s, a))
              }
            switch (n) {
              case 'input':
                fo(e), Of(e, r, !1)
                break
              case 'textarea':
                fo(e), _f(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + gn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? kr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && kr(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = pa)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return _e(t), null
    case 6:
      if (e && t.stateNode != null) Wh(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(P(166))
        if (((n = An(ji.current)), An(_t.current), ko(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (o = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                xo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r)
      }
      return _e(t), null
    case 13:
      if (
        (Z(ne),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Qe !== null && t.mode & 1 && !(t.flags & 128))
          lh(), $r(), (t.flags |= 98560), (o = !1)
        else if (((o = ko(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318))
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
              throw Error(P(317))
            o[Pt] = t
          } else $r(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          _e(t), (o = !1)
        } else vt !== null && (fu(vt), (vt = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || ne.current & 1 ? ge === 0 && (ge = 3) : Ec())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null)
    case 4:
      return Mr(), ru(e, t), e === null && Ni(t.stateNode.containerInfo), _e(t), null
    case 10:
      return sc(t.type._context), _e(t), null
    case 17:
      return Ve(t.type) && ma(), _e(t), null
    case 19:
      if ((Z(ne), (o = t.memoizedState), o === null)) return _e(t), null
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Jr(o, !1)
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = ka(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Jr(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling)
                return K(ne, (ne.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            ue() > Lr &&
            ((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = ka(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !ee)
            )
              return _e(t), null
          } else
            2 * ue() - o.renderingStartTime > Lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last), n !== null ? (n.sibling = a) : (t.child = a), (o.last = a))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ue()),
          (t.sibling = null),
          (n = ne.current),
          K(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null)
    case 22:
    case 23:
      return (
        Cc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(P(156, t.tag))
}
function Gg(e, t) {
  switch ((ic(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && ma(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Mr(),
        Z(Be),
        Z(Ae),
        pc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return dc(t), null
    case 13:
      if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340))
        $r()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return Z(ne), null
    case 4:
      return Mr(), null
    case 10:
      return sc(t.type._context), null
    case 22:
    case 23:
      return Cc(), null
    case 24:
      return null
    default:
      return null
  }
}
var Co = !1,
  Re = !1,
  Qg = typeof WeakSet == 'function' ? WeakSet : Set,
  R = null
function vr(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        le(e, t, r)
      }
    else n.current = null
}
function iu(e, t, n) {
  try {
    n()
  } catch (r) {
    le(e, t, r)
  }
}
var yd = !1
function Xg(e, t) {
  if (((Us = ca), (e = Gm()), nc(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            p = null
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (p = f), (f = y)
            for (;;) {
              if (f === e) break t
              if (
                (p === n && ++u === i && (l = a),
                p === o && ++c === r && (s = a),
                (y = f.nextSibling) !== null)
              )
                break
              ;(f = p), (p = f.parentNode)
            }
            f = y
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Bs = { focusedElem: e, selectionRange: n }, ca = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e)
    else
      for (; R !== null; ) {
        t = R
        try {
          var g = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    k = g.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : mt(t.type, v),
                      k
                    )
                  m.__reactInternalSnapshotBeforeUpdate = d
                }
                break
              case 3:
                var h = t.stateNode.containerInfo
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(P(163))
            }
        } catch (w) {
          le(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (R = e)
          break
        }
        R = t.return
      }
  return (g = yd), (yd = !1), g
}
function mi(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && iu(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function Qa(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function ou(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Hh(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Hh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[Ai], delete t[Hs], delete t[Ag], delete t[$g])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Yh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function wd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yh(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function au(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pa))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (au(e, t, n), e = e.sibling; e !== null; ) au(e, t, n), (e = e.sibling)
}
function lu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lu(e, t, n), e = e.sibling; e !== null; ) lu(e, t, n), (e = e.sibling)
}
var be = null,
  ht = !1
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) Kh(e, t, n), (n = n.sibling)
}
function Kh(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == 'function')
    try {
      Tt.onCommitFiberUnmount(Ua, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Re || vr(n, t)
    case 6:
      var r = be,
        i = ht
      ;(be = null),
        Zt(e, t, n),
        (be = r),
        (ht = i),
        be !== null &&
          (ht
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode))
      break
    case 18:
      be !== null &&
        (ht
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8 ? Zl(e.parentNode, n) : e.nodeType === 1 && Zl(e, n),
            Oi(e))
          : Zl(be, n.stateNode))
      break
    case 4:
      ;(r = be),
        (i = ht),
        (be = n.stateNode.containerInfo),
        (ht = !0),
        Zt(e, t, n),
        (be = r),
        (ht = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Re && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next
        do {
          var o = i,
            a = o.destroy
          ;(o = o.tag), a !== void 0 && (o & 2 || o & 4) && iu(n, t, a), (i = i.next)
        } while (i !== r)
      }
      Zt(e, t, n)
      break
    case 1:
      if (
        !Re &&
        (vr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          le(n, t, l)
        }
      Zt(e, t, n)
      break
    case 21:
      Zt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Zt(e, t, n), (Re = r))
        : Zt(e, t, n)
      break
    default:
      Zt(e, t, n)
  }
}
function xd(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Qg()),
      t.forEach(function (r) {
        var i = oy.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function pt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          a = t,
          l = a
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(be = l.stateNode), (ht = !1)
              break e
            case 3:
              ;(be = l.stateNode.containerInfo), (ht = !0)
              break e
            case 4:
              ;(be = l.stateNode.containerInfo), (ht = !0)
              break e
          }
          l = l.return
        }
        if (be === null) throw Error(P(160))
        Kh(o, a, i), (be = null), (ht = !1)
        var s = i.alternate
        s !== null && (s.return = null), (i.return = null)
      } catch (u) {
        le(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gh(t, e), (t = t.sibling)
}
function Gh(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), St(e), r & 4)) {
        try {
          mi(3, e, e.return), Qa(3, e)
        } catch (v) {
          le(e, e.return, v)
        }
        try {
          mi(5, e, e.return)
        } catch (v) {
          le(e, e.return, v)
        }
      }
      break
    case 1:
      pt(t, e), St(e), r & 512 && n !== null && vr(n, n.return)
      break
    case 5:
      if ((pt(t, e), St(e), r & 512 && n !== null && vr(n, n.return), e.flags & 32)) {
        var i = e.stateNode
        try {
          bi(i, '')
        } catch (v) {
          le(e, e.return, v)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && hm(i, o), Rs(l, a)
            var u = Rs(l, o)
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                f = s[a + 1]
              c === 'style'
                ? xm(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? ym(i, f)
                : c === 'children'
                ? bi(i, f)
                : Vu(i, c, f, u)
            }
            switch (l) {
              case 'input':
                Ps(i, o)
                break
              case 'textarea':
                vm(i, o)
                break
              case 'select':
                var p = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var y = o.value
                y != null
                  ? kr(i, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? kr(i, !!o.multiple, o.defaultValue, !0)
                      : kr(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Ai] = o
          } catch (v) {
            le(e, e.return, v)
          }
      }
      break
    case 6:
      if ((pt(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (v) {
          le(e, e.return, v)
        }
      }
      break
    case 3:
      if ((pt(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Oi(t.containerInfo)
        } catch (v) {
          le(e, e.return, v)
        }
      break
    case 4:
      pt(t, e), St(e)
      break
    case 13:
      pt(t, e),
        St(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Sc = ue())),
        r & 4 && xd(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (u = Re) || c), pt(t, e), (Re = u)) : pt(t, e),
        St(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (f = R = c; R !== null; ) {
              switch (((p = R), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mi(4, p, p.return)
                  break
                case 1:
                  vr(p, p.return)
                  var g = p.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount()
                    } catch (v) {
                      le(r, n, v)
                    }
                  }
                  break
                case 5:
                  vr(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    Sd(f)
                    continue
                  }
              }
              y !== null ? ((y.return = p), (R = y)) : Sd(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = f.stateNode),
                      (s = f.memoizedProps.style),
                      (a = s != null && s.hasOwnProperty('display') ? s.display : null),
                      (l.style.display = wm('display', a)))
              } catch (v) {
                le(e, e.return, v)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (v) {
                le(e, e.return, v)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      pt(t, e), St(e), r & 4 && xd(e)
      break
    case 21:
      break
    default:
      pt(t, e), St(e)
  }
}
function St(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yh(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(P(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (bi(i, ''), (r.flags &= -33))
          var o = wd(e)
          lu(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = wd(e)
          au(e, l, a)
          break
        default:
          throw Error(P(161))
      }
    } catch (s) {
      le(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Zg(e, t, n) {
  ;(R = e), Qh(e)
}
function Qh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Co
      if (!a) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || Re
        l = Co
        var u = Re
        if (((Co = a), (Re = s) && !u))
          for (R = i; R !== null; )
            (a = R),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? bd(i)
                : s !== null
                ? ((s.return = a), (R = s))
                : bd(i)
        for (; o !== null; ) (R = o), Qh(o), (o = o.sibling)
        ;(R = i), (Co = l), (Re = u)
      }
      kd(e)
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : kd(e)
  }
}
function kd(e) {
  for (; R !== null; ) {
    var t = R
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Qa(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && id(t, o, r)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                id(t, a, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && Oi(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(P(163))
          }
        Re || (t.flags & 512 && ou(t))
      } catch (p) {
        le(t, t.return, p)
      }
    }
    if (t === e) {
      R = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (R = n)
      break
    }
    R = t.return
  }
}
function Sd(e) {
  for (; R !== null; ) {
    var t = R
    if (t === e) {
      R = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (R = n)
      break
    }
    R = t.return
  }
}
function bd(e) {
  for (; R !== null; ) {
    var t = R
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Qa(4, t)
          } catch (s) {
            le(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              le(t, i, s)
            }
          }
          var o = t.return
          try {
            ou(t)
          } catch (s) {
            le(t, o, s)
          }
          break
        case 5:
          var a = t.return
          try {
            ou(t)
          } catch (s) {
            le(t, a, s)
          }
      }
    } catch (s) {
      le(t, t.return, s)
    }
    if (t === e) {
      R = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (R = l)
      break
    }
    R = t.return
  }
}
var qg = Math.ceil,
  Ca = Gt.ReactCurrentDispatcher,
  xc = Gt.ReactCurrentOwner,
  st = Gt.ReactCurrentBatchConfig,
  U = 0,
  xe = null,
  me = null,
  Pe = 0,
  Ke = 0,
  gr = bn(0),
  ge = 0,
  zi = null,
  Vn = 0,
  Xa = 0,
  kc = 0,
  hi = null,
  De = null,
  Sc = 0,
  Lr = 1 / 0,
  jt = null,
  Ea = !1,
  su = null,
  pn = null,
  Eo = !1,
  on = null,
  Pa = 0,
  vi = 0,
  uu = null,
  Qo = -1,
  Xo = 0
function Ie() {
  return U & 6 ? ue() : Qo !== -1 ? Qo : (Qo = ue())
}
function mn(e) {
  return e.mode & 1
    ? U & 2 && Pe !== 0
      ? Pe & -Pe
      : Mg.transition !== null
      ? (Xo === 0 && (Xo = Am()), Xo)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fm(e.type))),
        e)
    : 1
}
function wt(e, t, n, r) {
  if (50 < vi) throw ((vi = 0), (uu = null), Error(P(185)))
  Xi(e, n, r),
    (!(U & 2) || e !== xe) &&
      (e === xe && (!(U & 2) && (Xa |= n), ge === 4 && nn(e, Pe)),
      We(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Lr = ue() + 500), Ya && Cn()))
}
function We(e, t) {
  var n = e.callbackNode
  Mv(e, t)
  var r = ua(e, e === xe ? Pe : 0)
  if (r === 0) n !== null && Af(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Af(n), t === 1))
      e.tag === 0 ? jg(Cd.bind(null, e)) : ih(Cd.bind(null, e)),
        Ng(function () {
          !(U & 6) && Cn()
        }),
        (n = null)
    else {
      switch ($m(r)) {
        case 1:
          n = Gu
          break
        case 4:
          n = Nm
          break
        case 16:
          n = sa
          break
        case 536870912:
          n = Rm
          break
        default:
          n = sa
      }
      n = r0(n, Xh.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Xh(e, t) {
  if (((Qo = -1), (Xo = 0), U & 6)) throw Error(P(327))
  var n = e.callbackNode
  if (Pr() && e.callbackNode !== n) return null
  var r = ua(e, e === xe ? Pe : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Oa(e, r)
  else {
    t = r
    var i = U
    U |= 2
    var o = qh()
    ;(xe !== e || Pe !== t) && ((jt = null), (Lr = ue() + 500), In(e, t))
    do
      try {
        ty()
        break
      } catch (l) {
        Zh(e, l)
      }
    while (!0)
    lc(),
      (Ca.current = o),
      (U = i),
      me !== null ? (t = 0) : ((xe = null), (Pe = 0), (t = ge))
  }
  if (t !== 0) {
    if ((t === 2 && ((i = Is(e)), i !== 0 && ((r = i), (t = cu(e, i)))), t === 1))
      throw ((n = zi), In(e, 0), nn(e, r), We(e, ue()), n)
    if (t === 6) nn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Jg(i) &&
          ((t = Oa(e, r)),
          t === 2 && ((o = Is(e)), o !== 0 && ((r = o), (t = cu(e, o)))),
          t === 1))
      )
        throw ((n = zi), In(e, 0), nn(e, r), We(e, ue()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345))
        case 2:
          _n(e, De, jt)
          break
        case 3:
          if ((nn(e, r), (r & 130023424) === r && ((t = Sc + 500 - ue()), 10 < t))) {
            if (ua(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = Ws(_n.bind(null, e, De, jt), t)
            break
          }
          _n(e, De, jt)
          break
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - yt(r)
            ;(o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o)
          }
          if (
            ((r = i),
            (r = ue() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ws(_n.bind(null, e, De, jt), r)
            break
          }
          _n(e, De, jt)
          break
        case 5:
          _n(e, De, jt)
          break
        default:
          throw Error(P(329))
      }
    }
  }
  return We(e, ue()), e.callbackNode === n ? Xh.bind(null, e) : null
}
function cu(e, t) {
  var n = hi
  return (
    e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
    (e = Oa(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && fu(t)),
    e
  )
}
function fu(e) {
  De === null ? (De = e) : De.push.apply(De, e)
}
function Jg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!kt(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function nn(e, t) {
  for (
    t &= ~kc, t &= ~Xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Cd(e) {
  if (U & 6) throw Error(P(327))
  Pr()
  var t = ua(e, 0)
  if (!(t & 1)) return We(e, ue()), null
  var n = Oa(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Is(e)
    r !== 0 && ((t = r), (n = cu(e, r)))
  }
  if (n === 1) throw ((n = zi), In(e, 0), nn(e, t), We(e, ue()), n)
  if (n === 6) throw Error(P(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _n(e, De, jt),
    We(e, ue()),
    null
  )
}
function bc(e, t) {
  var n = U
  U |= 1
  try {
    return e(t)
  } finally {
    ;(U = n), U === 0 && ((Lr = ue() + 500), Ya && Cn())
  }
}
function Wn(e) {
  on !== null && on.tag === 0 && !(U & 6) && Pr()
  var t = U
  U |= 1
  var n = st.transition,
    r = W
  try {
    if (((st.transition = null), (W = 1), e)) return e()
  } finally {
    ;(W = r), (st.transition = n), (U = t), !(U & 6) && Cn()
  }
}
function Cc() {
  ;(Ke = gr.current), Z(gr)
}
function In(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), _g(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n
      switch ((ic(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && ma()
          break
        case 3:
          Mr(), Z(Be), Z(Ae), pc()
          break
        case 5:
          dc(r)
          break
        case 4:
          Mr()
          break
        case 13:
          Z(ne)
          break
        case 19:
          Z(ne)
          break
        case 10:
          sc(r.type._context)
          break
        case 22:
        case 23:
          Cc()
      }
      n = n.return
    }
  if (
    ((xe = e),
    (me = e = hn(e.current, null)),
    (Pe = Ke = t),
    (ge = 0),
    (zi = null),
    (kc = Xa = Vn = 0),
    (De = hi = null),
    Rn !== null)
  ) {
    for (t = 0; t < Rn.length; t++)
      if (((n = Rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var a = o.next
          ;(o.next = i), (r.next = a)
        }
        n.pending = r
      }
    Rn = null
  }
  return e
}
function Zh(e, t) {
  do {
    var n = me
    try {
      if ((lc(), (Yo.current = ba), Sa)) {
        for (var r = re.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Sa = !1
      }
      if (
        ((Bn = 0),
        (we = ve = re = null),
        (pi = !1),
        (Mi = 0),
        (xc.current = null),
        n === null || n.return === null)
      ) {
        ;(ge = 1), (zi = t), (me = null)
        break
      }
      e: {
        var o = e,
          a = n.return,
          l = n,
          s = t
        if (
          ((t = Pe),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            c = l,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var y = fd(a)
          if (y !== null) {
            ;(y.flags &= -257),
              dd(y, a, l, o, t),
              y.mode & 1 && cd(o, u, t),
              (t = y),
              (s = u)
            var g = t.updateQueue
            if (g === null) {
              var v = new Set()
              v.add(s), (t.updateQueue = v)
            } else g.add(s)
            break e
          } else {
            if (!(t & 1)) {
              cd(o, u, t), Ec()
              break e
            }
            s = Error(P(426))
          }
        } else if (ee && l.mode & 1) {
          var k = fd(a)
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), dd(k, a, l, o, t), oc(Ir(s, l))
            break e
          }
        }
        ;(o = s = Ir(s, l)),
          ge !== 4 && (ge = 2),
          hi === null ? (hi = [o]) : hi.push(o),
          (o = a)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var m = jh(o, s, t)
              rd(o, m)
              break e
            case 1:
              l = s
              var d = o.type,
                h = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (pn === null || !pn.has(h))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var w = Mh(o, l, t)
                rd(o, w)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      e0(n)
    } catch (b) {
      ;(t = b), me === n && n !== null && (me = n = n.return)
      continue
    }
    break
  } while (!0)
}
function qh() {
  var e = Ca.current
  return (Ca.current = ba), e === null ? ba : e
}
function Ec() {
  ;(ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    xe === null || (!(Vn & 268435455) && !(Xa & 268435455)) || nn(xe, Pe)
}
function Oa(e, t) {
  var n = U
  U |= 2
  var r = qh()
  ;(xe !== e || Pe !== t) && ((jt = null), In(e, t))
  do
    try {
      ey()
      break
    } catch (i) {
      Zh(e, i)
    }
  while (!0)
  if ((lc(), (U = n), (Ca.current = r), me !== null)) throw Error(P(261))
  return (xe = null), (Pe = 0), ge
}
function ey() {
  for (; me !== null; ) Jh(me)
}
function ty() {
  for (; me !== null && !Pv(); ) Jh(me)
}
function Jh(e) {
  var t = n0(e.alternate, e, Ke)
  ;(e.memoizedProps = e.pendingProps), t === null ? e0(e) : (me = t), (xc.current = null)
}
function e0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gg(n, t)), n !== null)) {
        ;(n.flags &= 32767), (me = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ge = 6), (me = null)
        return
      }
    } else if (((n = Kg(n, t, Ke)), n !== null)) {
      me = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      me = t
      return
    }
    me = t = e
  } while (t !== null)
  ge === 0 && (ge = 5)
}
function _n(e, t, n) {
  var r = W,
    i = st.transition
  try {
    ;(st.transition = null), (W = 1), ny(e, t, n, r)
  } finally {
    ;(st.transition = i), (W = r)
  }
  return null
}
function ny(e, t, n, r) {
  do Pr()
  while (on !== null)
  if (U & 6) throw Error(P(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (Iv(e, o),
    e === xe && ((me = xe = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Eo ||
      ((Eo = !0),
      r0(sa, function () {
        return Pr(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = st.transition), (st.transition = null)
    var a = W
    W = 1
    var l = U
    ;(U |= 4),
      (xc.current = null),
      Xg(e, n),
      Gh(n, e),
      Sg(Bs),
      (ca = !!Us),
      (Bs = Us = null),
      (e.current = n),
      Zg(n),
      Ov(),
      (U = l),
      (W = a),
      (st.transition = o)
  } else e.current = n
  if (
    (Eo && ((Eo = !1), (on = e), (Pa = i)),
    (o = e.pendingLanes),
    o === 0 && (pn = null),
    Nv(n.stateNode),
    We(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Ea) throw ((Ea = !1), (e = su), (su = null), e)
  return (
    Pa & 1 && e.tag !== 0 && Pr(),
    (o = e.pendingLanes),
    o & 1 ? (e === uu ? vi++ : ((vi = 0), (uu = e))) : (vi = 0),
    Cn(),
    null
  )
}
function Pr() {
  if (on !== null) {
    var e = $m(Pa),
      t = st.transition,
      n = W
    try {
      if (((st.transition = null), (W = 16 > e ? 16 : e), on === null)) var r = !1
      else {
        if (((e = on), (on = null), (Pa = 0), U & 6)) throw Error(P(331))
        var i = U
        for (U |= 4, R = e.current; R !== null; ) {
          var o = R,
            a = o.child
          if (R.flags & 16) {
            var l = o.deletions
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s]
                for (R = u; R !== null; ) {
                  var c = R
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mi(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (R = f)
                  else
                    for (; R !== null; ) {
                      c = R
                      var p = c.sibling,
                        y = c.return
                      if ((Hh(c), c === u)) {
                        R = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = y), (R = p)
                        break
                      }
                      R = y
                    }
                }
              }
              var g = o.alternate
              if (g !== null) {
                var v = g.child
                if (v !== null) {
                  g.child = null
                  do {
                    var k = v.sibling
                    ;(v.sibling = null), (v = k)
                  } while (v !== null)
                }
              }
              R = o
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (R = a)
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mi(9, o, o.return)
                }
              var m = o.sibling
              if (m !== null) {
                ;(m.return = o.return), (R = m)
                break e
              }
              R = o.return
            }
        }
        var d = e.current
        for (R = d; R !== null; ) {
          a = R
          var h = a.child
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (R = h)
          else
            e: for (a = d; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qa(9, l)
                  }
                } catch (b) {
                  le(l, l.return, b)
                }
              if (l === a) {
                R = null
                break e
              }
              var w = l.sibling
              if (w !== null) {
                ;(w.return = l.return), (R = w)
                break e
              }
              R = l.return
            }
        }
        if (((U = i), Cn(), Tt && typeof Tt.onPostCommitFiberRoot == 'function'))
          try {
            Tt.onPostCommitFiberRoot(Ua, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(W = n), (st.transition = t)
    }
  }
  return !1
}
function Ed(e, t, n) {
  ;(t = Ir(n, t)),
    (t = jh(e, t, 1)),
    (e = dn(e, t, 1)),
    (t = Ie()),
    e !== null && (Xi(e, 1, t), We(e, t))
}
function le(e, t, n) {
  if (e.tag === 3) Ed(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ed(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (pn === null || !pn.has(r)))
        ) {
          ;(e = Ir(n, e)),
            (e = Mh(t, e, 1)),
            (t = dn(t, e, 1)),
            (e = Ie()),
            t !== null && (Xi(t, 1, e), We(t, e))
          break
        }
      }
      t = t.return
    }
}
function ry(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Pe & n) === n &&
      (ge === 4 || (ge === 3 && (Pe & 130023424) === Pe && 500 > ue() - Sc)
        ? In(e, 0)
        : (kc |= n)),
    We(e, t)
}
function t0(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = ho), (ho <<= 1), !(ho & 130023424) && (ho = 4194304)) : (t = 1))
  var n = Ie()
  ;(e = Bt(e, t)), e !== null && (Xi(e, t, n), We(e, n))
}
function iy(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), t0(e, n)
}
function oy(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(P(314))
  }
  r !== null && r.delete(t), t0(e, n)
}
var n0
n0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ue = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), Yg(e, t, n)
      Ue = !!(e.flags & 131072)
    }
  else (Ue = !1), ee && t.flags & 1048576 && oh(t, ga, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Go(e, t), (e = t.pendingProps)
      var i = Ar(t, Ae.current)
      Er(t, n), (i = hc(null, t, r, e, i, n))
      var o = vc()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((o = !0), ha(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            cc(t),
            (i.updater = Ka),
            (t.stateNode = i),
            (i._reactInternals = t),
            Zs(t, r, e, n),
            (t = eu(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && rc(t), Me(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Go(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = ly(r)),
          (e = mt(r, e)),
          i)
        ) {
          case 0:
            t = Js(null, t, r, e, n)
            break e
          case 1:
            t = hd(null, t, r, e, n)
            break e
          case 11:
            t = pd(null, t, r, e, n)
            break e
          case 14:
            t = md(null, t, r, mt(r.type, e), n)
            break e
        }
        throw Error(P(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        Js(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        hd(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((Fh(t), e === null)) throw Error(P(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          uh(e, t),
          xa(t, r, null, n)
        var a = t.memoizedState
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = Ir(Error(P(423)), t)), (t = vd(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Ir(Error(P(424)), t)), (t = vd(e, t, r, n, i))
            break e
          } else
            for (
              Qe = fn(t.stateNode.containerInfo.firstChild),
                Xe = t,
                ee = !0,
                vt = null,
                n = ph(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if (($r(), r === i)) {
            t = Vt(e, t, n)
            break e
          }
          Me(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        mh(t),
        e === null && Gs(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Vs(r, i) ? (a = null) : o !== null && Vs(r, o) && (t.flags |= 32),
        zh(e, t),
        Me(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && Gs(t), null
    case 13:
      return Dh(e, t, n)
    case 4:
      return (
        fc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        pd(e, t, r, i, n)
      )
    case 7:
      return Me(e, t, t.pendingProps, n), t.child
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          K(ya, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (kt(o.value, a)) {
            if (o.children === i.children && !Be.current) {
              t = Vt(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies
              if (l !== null) {
                a = o.child
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      ;(s = Ft(-1, n & -n)), (s.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)),
                          (u.pending = s)
                      }
                    }
                    ;(o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Qs(o.return, n, t),
                      (l.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(P(341))
                ;(a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Qs(a, n, t),
                  (a = o.sibling)
              } else a = o.child
              if (a !== null) a.return = o
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((o = a.sibling), o !== null)) {
                    ;(o.return = a.return), (a = o)
                    break
                  }
                  a = a.return
                }
              o = a
            }
        Me(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Er(t, n),
        (i = ut(i)),
        (r = r(i)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type), (i = mt(r, t.pendingProps)), (i = mt(r.type, i)), md(e, t, r, i, n)
      )
    case 15:
      return Ih(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        Go(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), ha(t)) : (e = !1),
        Er(t, n),
        fh(t, r, i),
        Zs(t, r, i, n),
        eu(null, t, r, !0, e, n)
      )
    case 19:
      return Uh(e, t, n)
    case 22:
      return Lh(e, t, n)
  }
  throw Error(P(156, t.tag))
}
function r0(e, t) {
  return _m(e, t)
}
function ay(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function lt(e, t, n, r) {
  return new ay(e, t, n, r)
}
function Pc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function ly(e) {
  if (typeof e == 'function') return Pc(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Hu)) return 11
    if (e === Yu) return 14
  }
  return 2
}
function hn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Zo(e, t, n, r, i, o) {
  var a = 2
  if (((r = e), typeof e == 'function')) Pc(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case lr:
        return Ln(n.children, i, o, t)
      case Wu:
        ;(a = 8), (i |= 8)
        break
      case ks:
        return (e = lt(12, n, t, i | 2)), (e.elementType = ks), (e.lanes = o), e
      case Ss:
        return (e = lt(13, n, t, i)), (e.elementType = Ss), (e.lanes = o), e
      case bs:
        return (e = lt(19, n, t, i)), (e.elementType = bs), (e.lanes = o), e
      case dm:
        return Za(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case cm:
              a = 10
              break e
            case fm:
              a = 9
              break e
            case Hu:
              a = 11
              break e
            case Yu:
              a = 14
              break e
            case Jt:
              ;(a = 16), (r = null)
              break e
          }
        throw Error(P(130, e == null ? e : typeof e, ''))
    }
  return (t = lt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
}
function Ln(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e
}
function Za(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = dm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function os(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e
}
function as(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function sy(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Dl(0)),
    (this.expirationTimes = Dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Dl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Oc(e, t, n, r, i, o, a, l, s) {
  return (
    (e = new sy(e, t, n, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = lt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    cc(o),
    e
  )
}
function uy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: ar,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function i0(e) {
  if (!e) return yn
  e = e._reactInternals
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(P(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(P(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ve(n)) return rh(e, n, t)
  }
  return t
}
function o0(e, t, n, r, i, o, a, l, s) {
  return (
    (e = Oc(n, r, !0, e, i, o, a, l, s)),
    (e.context = i0(null)),
    (n = e.current),
    (r = Ie()),
    (i = mn(n)),
    (o = Ft(r, i)),
    (o.callback = t ?? null),
    dn(n, o, i),
    (e.current.lanes = i),
    Xi(e, i, r),
    We(e, r),
    e
  )
}
function qa(e, t, n, r) {
  var i = t.current,
    o = Ie(),
    a = mn(i)
  return (
    (n = i0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ft(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(i, t, a)),
    e !== null && (wt(e, i, a, o), Ho(e, i, a)),
    a
  )
}
function Ta(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Pd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Tc(e, t) {
  Pd(e, t), (e = e.alternate) && Pd(e, t)
}
function cy() {
  return null
}
var a0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function _c(e) {
  this._internalRoot = e
}
Ja.prototype.render = _c.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(P(409))
  qa(e, t, null, null)
}
Ja.prototype.unmount = _c.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Wn(function () {
      qa(null, e, null, null)
    }),
      (t[Ut] = null)
  }
}
function Ja(e) {
  this._internalRoot = e
}
Ja.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Im()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
    tn.splice(n, 0, e), n === 0 && zm(e)
  }
}
function Nc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function el(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Od() {}
function fy(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = Ta(a)
        o.call(u)
      }
    }
    var a = o0(t, r, e, 0, null, !1, !1, '', Od)
    return (
      (e._reactRootContainer = a),
      (e[Ut] = a.current),
      Ni(e.nodeType === 8 ? e.parentNode : e),
      Wn(),
      a
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = Ta(s)
      l.call(u)
    }
  }
  var s = Oc(e, 0, !1, null, null, !1, !1, '', Od)
  return (
    (e._reactRootContainer = s),
    (e[Ut] = s.current),
    Ni(e.nodeType === 8 ? e.parentNode : e),
    Wn(function () {
      qa(t, s, n, r)
    }),
    s
  )
}
function tl(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var a = o
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var s = Ta(a)
        l.call(s)
      }
    }
    qa(t, a, e, i)
  } else a = fy(n, t, e, i, r)
  return Ta(a)
}
jm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = oi(t.pendingLanes)
        n !== 0 && (Qu(t, n | 1), We(t, ue()), !(U & 6) && ((Lr = ue() + 500), Cn()))
      }
      break
    case 13:
      Wn(function () {
        var r = Bt(e, 1)
        if (r !== null) {
          var i = Ie()
          wt(r, e, 1, i)
        }
      }),
        Tc(e, 1)
  }
}
Xu = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728)
    if (t !== null) {
      var n = Ie()
      wt(t, e, 134217728, n)
    }
    Tc(e, 134217728)
  }
}
Mm = function (e) {
  if (e.tag === 13) {
    var t = mn(e),
      n = Bt(e, t)
    if (n !== null) {
      var r = Ie()
      wt(n, e, t, r)
    }
    Tc(e, t)
  }
}
Im = function () {
  return W
}
Lm = function (e, t) {
  var n = W
  try {
    return (W = e), t()
  } finally {
    W = n
  }
}
$s = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ps(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = Ha(r)
            if (!i) throw Error(P(90))
            mm(r), Ps(r, i)
          }
        }
      }
      break
    case 'textarea':
      vm(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && kr(e, !!n.multiple, t, !1)
  }
}
bm = bc
Cm = Wn
var dy = { usingClientEntryPoint: !1, Events: [qi, fr, Ha, km, Sm, bc] },
  ei = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  py = {
    bundleType: ei.bundleType,
    version: ei.version,
    rendererPackageName: ei.rendererPackageName,
    rendererConfig: ei.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Om(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ei.findFiberByHostInstance || cy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Po.isDisabled && Po.supportsFiber)
    try {
      ;(Ua = Po.inject(py)), (Tt = Po)
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Nc(t)) throw Error(P(200))
  return uy(e, t, null, n)
}
Je.createRoot = function (e, t) {
  if (!Nc(e)) throw Error(P(299))
  var n = !1,
    r = '',
    i = a0
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Oc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ut] = t.current),
    Ni(e.nodeType === 8 ? e.parentNode : e),
    new _c(t)
  )
}
Je.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(P(188))
      : ((e = Object.keys(e).join(',')), Error(P(268, e)))
  return (e = Om(t)), (e = e === null ? null : e.stateNode), e
}
Je.flushSync = function (e) {
  return Wn(e)
}
Je.hydrate = function (e, t, n) {
  if (!el(t)) throw Error(P(200))
  return tl(null, e, t, !0, n)
}
Je.hydrateRoot = function (e, t, n) {
  if (!Nc(e)) throw Error(P(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = a0
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = o0(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Ut] = t.current),
    Ni(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new Ja(t)
}
Je.render = function (e, t, n) {
  if (!el(t)) throw Error(P(200))
  return tl(null, e, t, !1, n)
}
Je.unmountComponentAtNode = function (e) {
  if (!el(e)) throw Error(P(40))
  return e._reactRootContainer
    ? (Wn(function () {
        tl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Ut] = null)
        })
      }),
      !0)
    : !1
}
Je.unstable_batchedUpdates = bc
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!el(n)) throw Error(P(200))
  if (e == null || e._reactInternals === void 0) throw Error(P(38))
  return tl(e, t, n, !1, r)
}
Je.version = '18.2.0-next-9e3b772b8-20220608'
function l0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l0)
    } catch (e) {
      console.error(e)
    }
}
l0(), (om.exports = Je)
var my = om.exports,
  Td = my
;(ws.createRoot = Td.createRoot), (ws.hydrateRoot = Td.hydrateRoot)
var hy = Object.defineProperty,
  vy = (e, t, n) =>
    t in e
      ? hy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ls = (e, t, n) => (vy(e, typeof t != 'symbol' ? t + '' : t, n), n)
let gy = class {
    constructor() {
      ls(this, 'current', this.detect()),
        ls(this, 'handoffState', 'pending'),
        ls(this, 'currentId', 0)
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = 'pending'), (this.currentId = 0), (this.current = t))
    }
    reset() {
      this.set(this.detect())
    }
    nextId() {
      return ++this.currentId
    }
    get isServer() {
      return this.current === 'server'
    }
    get isClient() {
      return this.current === 'client'
    }
    detect() {
      return typeof window > 'u' || typeof document > 'u' ? 'server' : 'client'
    }
    handoff() {
      this.handoffState === 'pending' && (this.handoffState = 'complete')
    }
    get isHandoffComplete() {
      return this.handoffState === 'complete'
    }
  },
  zn = new gy(),
  _a = (e, t) => {
    zn.isServer ? x.useEffect(e, t) : x.useLayoutEffect(e, t)
  }
function yy(e) {
  let t = x.useRef(e)
  return (
    _a(() => {
      t.current = e
    }, [e]),
    t
  )
}
let gi = function (e) {
  let t = yy(e)
  return G.useCallback((...n) => t.current(...n), [t])
}
function wy() {
  let e = typeof document > 'u'
  return 'useSyncExternalStore' in ki
    ? (t => t.useSyncExternalStore)(ki)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1
}
function xy() {
  let e = wy(),
    [t, n] = x.useState(zn.isHandoffComplete)
  return (
    t && zn.isHandoffComplete === !1 && n(!1),
    x.useEffect(() => {
      t !== !0 && n(!0)
    }, [t]),
    x.useEffect(() => zn.handoff(), []),
    e ? !1 : t
  )
}
var _d
let s0 =
  (_d = G.useId) != null
    ? _d
    : function () {
        let e = xy(),
          [t, n] = G.useState(e ? () => zn.nextId() : null)
        return (
          _a(() => {
            t === null && n(zn.nextId())
          }, [t]),
          t != null ? '' + t : void 0
        )
      }
function eo(e, t, ...n) {
  if (e in t) {
    let i = t[e]
    return typeof i == 'function' ? i(...n) : i
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map(i => `"${i}"`)
      .join(', ')}.`
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(r, eo), r)
}
function ky(e) {
  return zn.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty('current') && e.current instanceof Node
    ? e.current.ownerDocument
    : document
}
function Nd(e) {
  var t
  if (e.type) return e.type
  let n = (t = e.as) != null ? t : 'button'
  if (typeof n == 'string' && n.toLowerCase() === 'button') return 'button'
}
function Sy(e, t) {
  let [n, r] = x.useState(() => Nd(e))
  return (
    _a(() => {
      r(Nd(e))
    }, [e.type, e.as]),
    _a(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute('type') &&
          r('button'))
    }, [n, t]),
    n
  )
}
let u0 = Symbol()
function by(e, t = !0) {
  return Object.assign(e, { [u0]: t })
}
function Rc(...e) {
  let t = x.useRef(e)
  x.useEffect(() => {
    t.current = e
  }, [e])
  let n = gi(r => {
    for (let i of t.current)
      i != null && (typeof i == 'function' ? i(r) : (i.current = r))
  })
  return e.every(r => r == null || (r == null ? void 0 : r[u0])) ? void 0 : n
}
function Rd(...e) {
  return Array.from(new Set(e.flatMap(t => (typeof t == 'string' ? t.split(' ') : []))))
    .filter(Boolean)
    .join(' ')
}
var du = (e => (
    (e[(e.None = 0)] = 'None'),
    (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
    (e[(e.Static = 2)] = 'Static'),
    e
  ))(du || {}),
  Cy = (e => ((e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e))(
    Cy || {}
  )
function Ac({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: o = !0,
  name: a
}) {
  let l = c0(t, e)
  if (o) return Oo(l, n, r, a)
  let s = i ?? 0
  if (s & 2) {
    let { static: u = !1, ...c } = l
    if (u) return Oo(c, n, r, a)
  }
  if (s & 1) {
    let { unmount: u = !0, ...c } = l
    return eo(u ? 0 : 1, {
      0() {
        return null
      },
      1() {
        return Oo({ ...c, hidden: !0, style: { display: 'none' } }, n, r, a)
      }
    })
  }
  return Oo(l, n, r, a)
}
function Oo(e, t = {}, n, r) {
  let { as: i = n, children: o, refName: a = 'ref', ...l } = ss(e, ['unmount', 'static']),
    s = e.ref !== void 0 ? { [a]: e.ref } : {},
    u = typeof o == 'function' ? o(t) : o
  'className' in l &&
    l.className &&
    typeof l.className == 'function' &&
    (l.className = l.className(t))
  let c = {}
  if (t) {
    let f = !1,
      p = []
    for (let [y, g] of Object.entries(t))
      typeof g == 'boolean' && (f = !0), g === !0 && p.push(y)
    f && (c['data-headlessui-state'] = p.join(' '))
  }
  if (i === x.Fragment && Object.keys(Ad(l)).length > 0) {
    if (!x.isValidElement(u) || (Array.isArray(u) && u.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          '',
          `The current component <${r} /> is rendering a "Fragment".`,
          'However we need to passthrough the following props:',
          Object.keys(l).map(g => `  - ${g}`).join(`
`),
          '',
          'You can apply a few solutions:',
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            'Render a single element as the child so that we can forward the props onto that element.'
          ].map(g => `  - ${g}`).join(`
`)
        ].join(`
`)
      )
    let f = u.props,
      p =
        typeof (f == null ? void 0 : f.className) == 'function'
          ? (...g) => Rd(f == null ? void 0 : f.className(...g), l.className)
          : Rd(f == null ? void 0 : f.className, l.className),
      y = p ? { className: p } : {}
    return x.cloneElement(
      u,
      Object.assign({}, c0(u.props, Ad(ss(l, ['ref']))), c, s, Ey(u.ref, s.ref), y)
    )
  }
  return x.createElement(
    i,
    Object.assign({}, ss(l, ['ref']), i !== x.Fragment && s, i !== x.Fragment && c),
    u
  )
}
function Ey(...e) {
  return {
    ref: e.every(t => t == null)
      ? void 0
      : t => {
          for (let n of e) n != null && (typeof n == 'function' ? n(t) : (n.current = t))
        }
  }
}
function c0(...e) {
  if (e.length === 0) return {}
  if (e.length === 1) return e[0]
  let t = {},
    n = {}
  for (let r of e)
    for (let i in r)
      i.startsWith('on') && typeof r[i] == 'function'
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i])
  if (t.disabled || t['aria-disabled'])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])))
  for (let r in n)
    Object.assign(t, {
      [r](i, ...o) {
        let a = n[r]
        for (let l of a) {
          if (
            (i instanceof Event ||
              (i == null ? void 0 : i.nativeEvent) instanceof Event) &&
            i.defaultPrevented
          )
            return
          l(i, ...o)
        }
      }
    })
  return t
}
function $c(e) {
  var t
  return Object.assign(x.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name
  })
}
function Ad(e) {
  let t = Object.assign({}, e)
  for (let n in t) t[n] === void 0 && delete t[n]
  return t
}
function ss(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function Py(e) {
  let t = e.parentElement,
    n = null
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement)
  let r = (t == null ? void 0 : t.getAttribute('disabled')) === ''
  return r && Oy(n) ? !1 : r
}
function Oy(e) {
  if (!e) return !1
  let t = e.previousElementSibling
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1
    t = t.previousElementSibling
  }
  return !0
}
let jc = x.createContext(null)
jc.displayName = 'OpenClosedContext'
var Fi = (e => (
  (e[(e.Open = 1)] = 'Open'),
  (e[(e.Closed = 2)] = 'Closed'),
  (e[(e.Closing = 4)] = 'Closing'),
  (e[(e.Opening = 8)] = 'Opening'),
  e
))(Fi || {})
function Ty() {
  return x.useContext(jc)
}
function _y({ value: e, children: t }) {
  return G.createElement(jc.Provider, { value: e }, t)
}
var or = (e => (
    (e.Space = ' '),
    (e.Enter = 'Enter'),
    (e.Escape = 'Escape'),
    (e.Backspace = 'Backspace'),
    (e.Delete = 'Delete'),
    (e.ArrowLeft = 'ArrowLeft'),
    (e.ArrowUp = 'ArrowUp'),
    (e.ArrowRight = 'ArrowRight'),
    (e.ArrowDown = 'ArrowDown'),
    (e.Home = 'Home'),
    (e.End = 'End'),
    (e.PageUp = 'PageUp'),
    (e.PageDown = 'PageDown'),
    (e.Tab = 'Tab'),
    e
  ))(or || {}),
  $d
let Ny =
  ($d = G.startTransition) != null
    ? $d
    : function (e) {
        e()
      }
var Ry = (e => ((e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e))(Ry || {}),
  Ay = (e => (
    (e[(e.ToggleDisclosure = 0)] = 'ToggleDisclosure'),
    (e[(e.CloseDisclosure = 1)] = 'CloseDisclosure'),
    (e[(e.SetButtonId = 2)] = 'SetButtonId'),
    (e[(e.SetPanelId = 3)] = 'SetPanelId'),
    (e[(e.LinkPanel = 4)] = 'LinkPanel'),
    (e[(e.UnlinkPanel = 5)] = 'UnlinkPanel'),
    e
  ))(Ay || {})
let $y = {
    0: e => ({ ...e, disclosureState: eo(e.disclosureState, { 0: 1, 1: 0 }) }),
    1: e => (e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }),
    4(e) {
      return e.linkedPanel === !0 ? e : { ...e, linkedPanel: !0 }
    },
    5(e) {
      return e.linkedPanel === !1 ? e : { ...e, linkedPanel: !1 }
    },
    2(e, t) {
      return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId }
    },
    3(e, t) {
      return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId }
    }
  },
  Mc = x.createContext(null)
Mc.displayName = 'DisclosureContext'
function Ic(e) {
  let t = x.useContext(Mc)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Ic), n)
  }
  return t
}
let Lc = x.createContext(null)
Lc.displayName = 'DisclosureAPIContext'
function f0(e) {
  let t = x.useContext(Lc)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, f0), n)
  }
  return t
}
let zc = x.createContext(null)
zc.displayName = 'DisclosurePanelContext'
function jy() {
  return x.useContext(zc)
}
function My(e, t) {
  return eo(t.type, $y, e, t)
}
let Iy = x.Fragment
function Ly(e, t) {
  let { defaultOpen: n = !1, ...r } = e,
    i = x.useRef(null),
    o = Rc(
      t,
      by(k => {
        i.current = k
      }, e.as === void 0 || e.as === x.Fragment)
    ),
    a = x.useRef(null),
    l = x.useRef(null),
    s = x.useReducer(My, {
      disclosureState: n ? 0 : 1,
      linkedPanel: !1,
      buttonRef: l,
      panelRef: a,
      buttonId: null,
      panelId: null
    }),
    [{ disclosureState: u, buttonId: c }, f] = s,
    p = gi(k => {
      f({ type: 1 })
      let m = ky(i)
      if (!m || !c) return
      let d = k
        ? k instanceof HTMLElement
          ? k
          : k.current instanceof HTMLElement
          ? k.current
          : m.getElementById(c)
        : m.getElementById(c)
      d == null || d.focus()
    }),
    y = x.useMemo(() => ({ close: p }), [p]),
    g = x.useMemo(() => ({ open: u === 0, close: p }), [u, p]),
    v = { ref: o }
  return G.createElement(
    Mc.Provider,
    { value: s },
    G.createElement(
      Lc.Provider,
      { value: y },
      G.createElement(
        _y,
        { value: eo(u, { 0: Fi.Open, 1: Fi.Closed }) },
        Ac({ ourProps: v, theirProps: r, slot: g, defaultTag: Iy, name: 'Disclosure' })
      )
    )
  )
}
let zy = 'button'
function Fy(e, t) {
  let n = s0(),
    { id: r = `headlessui-disclosure-button-${n}`, ...i } = e,
    [o, a] = Ic('Disclosure.Button'),
    l = jy(),
    s = l === null ? !1 : l === o.panelId,
    u = x.useRef(null),
    c = Rc(u, t, s ? null : o.buttonRef)
  x.useEffect(() => {
    if (!s)
      return (
        a({ type: 2, buttonId: r }),
        () => {
          a({ type: 2, buttonId: null })
        }
      )
  }, [r, a, s])
  let f = gi(m => {
      var d
      if (s) {
        if (o.disclosureState === 1) return
        switch (m.key) {
          case or.Space:
          case or.Enter:
            m.preventDefault(),
              m.stopPropagation(),
              a({ type: 0 }),
              (d = o.buttonRef.current) == null || d.focus()
            break
        }
      } else
        switch (m.key) {
          case or.Space:
          case or.Enter:
            m.preventDefault(), m.stopPropagation(), a({ type: 0 })
            break
        }
    }),
    p = gi(m => {
      switch (m.key) {
        case or.Space:
          m.preventDefault()
          break
      }
    }),
    y = gi(m => {
      var d
      Py(m.currentTarget) ||
        e.disabled ||
        (s
          ? (a({ type: 0 }), (d = o.buttonRef.current) == null || d.focus())
          : a({ type: 0 }))
    }),
    g = x.useMemo(() => ({ open: o.disclosureState === 0 }), [o]),
    v = Sy(e, u),
    k = s
      ? { ref: c, type: v, onKeyDown: f, onClick: y }
      : {
          ref: c,
          id: r,
          type: v,
          'aria-expanded': o.disclosureState === 0,
          'aria-controls': o.linkedPanel ? o.panelId : void 0,
          onKeyDown: f,
          onKeyUp: p,
          onClick: y
        }
  return Ac({
    ourProps: k,
    theirProps: i,
    slot: g,
    defaultTag: zy,
    name: 'Disclosure.Button'
  })
}
let Dy = 'div',
  Uy = du.RenderStrategy | du.Static
function By(e, t) {
  let n = s0(),
    { id: r = `headlessui-disclosure-panel-${n}`, ...i } = e,
    [o, a] = Ic('Disclosure.Panel'),
    { close: l } = f0('Disclosure.Panel'),
    s = Rc(t, o.panelRef, y => {
      Ny(() => a({ type: y ? 4 : 5 }))
    })
  x.useEffect(
    () => (
      a({ type: 3, panelId: r }),
      () => {
        a({ type: 3, panelId: null })
      }
    ),
    [r, a]
  )
  let u = Ty(),
    c = u !== null ? (u & Fi.Open) === Fi.Open : o.disclosureState === 0,
    f = x.useMemo(() => ({ open: o.disclosureState === 0, close: l }), [o, l]),
    p = { ref: s, id: r }
  return G.createElement(
    zc.Provider,
    { value: o.panelId },
    Ac({
      ourProps: p,
      theirProps: i,
      slot: f,
      defaultTag: Dy,
      features: Uy,
      visible: c,
      name: 'Disclosure.Panel'
    })
  )
}
let Vy = $c(Ly),
  Wy = $c(Fy),
  Hy = $c(By),
  To = Object.assign(Vy, { Button: Wy, Panel: Hy })
function Yy({ title: e, titleId: t, ...n }, r) {
  return x.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t
      },
      n
    ),
    e ? x.createElement('title', { id: t }, e) : null,
    x.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
    })
  )
}
const Ky = x.forwardRef(Yy),
  Gy = Ky
function Qy({ title: e, titleId: t, ...n }, r) {
  return x.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t
      },
      n
    ),
    e ? x.createElement('title', { id: t }, e) : null,
    x.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M6 18 18 6M6 6l12 12'
    })
  )
}
const Xy = x.forwardRef(Qy),
  Zy = Xy
var d0 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  jd = G.createContext && G.createContext(d0),
  vn = function () {
    return (
      (vn =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n]
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }
          return e
        }),
      vn.apply(this, arguments)
    )
  },
  qy = function (e, t) {
    var n = {}
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]])
    return n
  }
function p0(e) {
  return (
    e &&
    e.map(function (t, n) {
      return G.createElement(t.tag, vn({ key: n }, t.attr), p0(t.child))
    })
  )
}
function nl(e) {
  return function (t) {
    return G.createElement(Jy, vn({ attr: vn({}, e.attr) }, t), p0(e.child))
  }
}
function Jy(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      a = qy(e, ['attr', 'size', 'title']),
      l = i || n.size || '1em',
      s
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      G.createElement(
        'svg',
        vn(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          a,
          {
            className: s,
            style: vn(vn({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: 'http://www.w3.org/2000/svg'
          }
        ),
        o && G.createElement('title', null, o),
        e.children
      )
    )
  }
  return jd !== void 0
    ? G.createElement(jd.Consumer, null, function (n) {
        return t(n)
      })
    : t(d0)
}
function m0(e) {
  return nl({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
        }
      }
    ]
  })(e)
}
function h0(e) {
  return nl({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
        }
      }
    ]
  })(e)
}
const Md = [
  { name: 'Projects', href: '#projects-section', current: !1, target: '_self' },
  { name: 'Timeline', href: '#timeline-section', current: !1, target: '_self' },
  { name: 'Contact', href: '#contact-section', current: !1, target: '_self' },
  {
    name: 'CV',
    href: 'https://drive.google.com/file/d/1wfQCNERgzwD91Bij1jwx5c2snKrmac62/view?usp=sharing',
    current: !1,
    target: '_blank'
  }
]
function Id(...e) {
  return e.filter(Boolean).join(' ')
}
function e2() {
  return S.jsx(To, {
    as: 'nav',
    className: 'bg-black allNavbar',
    children: ({ open: e }) =>
      S.jsxs(S.Fragment, {
        children: [
          S.jsx('div', {
            className: 'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8',
            children: S.jsxs('div', {
              className: 'relative flex h-16 items-center justify-between',
              children: [
                S.jsx('div', {
                  className: 'absolute inset-y-0 left-0 flex items-center sm:hidden',
                  children: S.jsxs(To.Button, {
                    className:
                      'relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
                    children: [
                      S.jsx('span', { className: 'absolute -inset-0.5' }),
                      S.jsx('span', { className: 'sr-only', children: 'Open main menu' }),
                      e
                        ? S.jsx(Zy, { className: 'block h-6 w-6', 'aria-hidden': 'true' })
                        : S.jsx(Gy, { className: 'block h-6 w-6', 'aria-hidden': 'true' })
                    ]
                  })
                }),
                S.jsxs('div', {
                  className:
                    'flex flex-1 items-center justify-center sm:items-stretch sm:justify-start buttonsNavbar',
                  children: [
                    S.jsx('div', { className: 'flex flex-shrink-0 items-center' }),
                    S.jsx('div', {
                      className: 'flex flex-1 justify-center items-center',
                      children: S.jsx('div', {
                        className: 'flex space-x-4',
                        children: Md.map(t =>
                          S.jsx(
                            'a',
                            {
                              href: t.href,
                              target: t.target,
                              className: Id(
                                t.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:text-white',
                                'rounded-md px-3 py-2 text-lg font-medium hidden md:inline'
                              ),
                              'aria-current': t.current ? 'page' : void 0,
                              children: t.icon ? t.icon : t.name
                            },
                            t.name
                          )
                        )
                      })
                    })
                  ]
                }),
                S.jsxs('div', {
                  className:
                    'absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0',
                  children: [
                    S.jsx('a', {
                      href: 'https://www.github.com/carlosrodmor',
                      className: 'text-gray-300 hover:text-white mx-2',
                      target: '_blank',
                      children: S.jsx(m0, { size: 24 })
                    }),
                    S.jsx('a', {
                      href: 'https://www.linkedin.com/in/carlos-rodr%C3%ADguez-morales/',
                      className: 'text-gray-300 hover:text-white mx-2',
                      target: '_blank',
                      children: S.jsx(h0, { size: 24 })
                    })
                  ]
                })
              ]
            })
          }),
          S.jsx(To.Panel, {
            className: 'sm:hidden',
            children: S.jsx('div', {
              className: 'space-y-1 px-2 pb-3 pt-2',
              children: Md.map(t =>
                S.jsx(
                  To.Button,
                  {
                    as: 'a',
                    href: t.href,
                    className: Id(
                      t.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    ),
                    'aria-current': t.current ? 'page' : void 0,
                    children: t.name
                  },
                  t.name
                )
              )
            })
          })
        ]
      })
  })
}
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Na() {
  return (
    (Na = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Na.apply(this, arguments)
  )
}
var an
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(an || (an = {}))
const Ld = 'popstate'
function t2(e) {
  e === void 0 && (e = {})
  function t(r, i) {
    let { pathname: o, search: a, hash: l } = r.location
    return pu(
      '',
      { pathname: o, search: a, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    )
  }
  function n(r, i) {
    return typeof i == 'string' ? i : v0(i)
  }
  return r2(t, n, null, e)
}
function He(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Fc(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function n2() {
  return Math.random().toString(36).substr(2, 8)
}
function zd(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function pu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Na(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? rl(t) : t,
      { state: n, key: (t && t.key) || r || n2() }
    )
  )
}
function v0(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function rl(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e)
  }
  return t
}
function r2(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    l = an.Pop,
    s = null,
    u = c()
  u == null && ((u = 0), a.replaceState(Na({}, a.state, { idx: u }), ''))
  function c() {
    return (a.state || { idx: null }).idx
  }
  function f() {
    l = an.Pop
    let k = c(),
      m = k == null ? null : k - u
    ;(u = k), s && s({ action: l, location: v.location, delta: m })
  }
  function p(k, m) {
    l = an.Push
    let d = pu(v.location, k, m)
    n && n(d, k), (u = c() + 1)
    let h = zd(d, u),
      w = v.createHref(d)
    try {
      a.pushState(h, '', w)
    } catch (b) {
      if (b instanceof DOMException && b.name === 'DataCloneError') throw b
      i.location.assign(w)
    }
    o && s && s({ action: l, location: v.location, delta: 1 })
  }
  function y(k, m) {
    l = an.Replace
    let d = pu(v.location, k, m)
    n && n(d, k), (u = c())
    let h = zd(d, u),
      w = v.createHref(d)
    a.replaceState(h, '', w), o && s && s({ action: l, location: v.location, delta: 0 })
  }
  function g(k) {
    let m = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      d = typeof k == 'string' ? k : v0(k)
    return (
      He(m, 'No window.location.(origin|href) available to create URL for href: ' + d),
      new URL(d, m)
    )
  }
  let v = {
    get action() {
      return l
    },
    get location() {
      return e(i, a)
    },
    listen(k) {
      if (s) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(Ld, f),
        (s = k),
        () => {
          i.removeEventListener(Ld, f), (s = null)
        }
      )
    },
    createHref(k) {
      return t(i, k)
    },
    createURL: g,
    encodeLocation(k) {
      let m = g(k)
      return { pathname: m.pathname, search: m.search, hash: m.hash }
    },
    push: p,
    replace: y,
    go(k) {
      return a.go(k)
    }
  }
  return v
}
var Fd
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(Fd || (Fd = {}))
function i2(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? rl(t) : t,
    i = w0(r.pathname || '/', n)
  if (i == null) return null
  let o = g0(e)
  o2(o)
  let a = null
  for (let l = 0; a == null && l < o.length; ++l) a = m2(o[l], g2(i))
  return a
}
function g0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let i = (o, a, l) => {
    let s = {
      relativePath: l === void 0 ? o.path || '' : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o
    }
    s.relativePath.startsWith('/') &&
      (He(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)))
    let u = Or([r, s.relativePath]),
      c = n.concat(s)
    o.children &&
      o.children.length > 0 &&
      (He(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      g0(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: d2(u, o.index), routesMeta: c })
  }
  return (
    e.forEach((o, a) => {
      var l
      if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, a)
      else for (let s of y0(o.path)) i(o, a, s)
    }),
    t
  )
}
function y0(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [o, ''] : [o]
  let a = y0(r.join('/')),
    l = []
  return (
    l.push(...a.map(s => (s === '' ? o : [o, s].join('/')))),
    i && l.push(...a),
    l.map(s => (e.startsWith('/') && s === '' ? '/' : s))
  )
}
function o2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : p2(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex)
        )
  )
}
const a2 = /^:\w+$/,
  l2 = 3,
  s2 = 2,
  u2 = 1,
  c2 = 10,
  f2 = -2,
  Dd = e => e === '*'
function d2(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(Dd) && (r += f2),
    t && (r += s2),
    n.filter(i => !Dd(i)).reduce((i, o) => i + (a2.test(o) ? l2 : o === '' ? u2 : c2), r)
  )
}
function p2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function m2(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = []
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = h2({ path: l.relativePath, caseSensitive: l.caseSensitive, end: s }, u)
    if (!c) return null
    Object.assign(r, c.params)
    let f = l.route
    o.push({
      params: r,
      pathname: Or([i, c.pathname]),
      pathnameBase: w2(Or([i, c.pathnameBase])),
      route: f
    }),
      c.pathnameBase !== '/' && (i = Or([i, c.pathnameBase]))
  }
  return o
}
function h2(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = v2(e.path, e.caseSensitive, e.end),
    i = t.match(n)
  if (!i) return null
  let o = i[0],
    a = o.replace(/(.)\/+$/, '$1'),
    l = i.slice(1)
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: p, isOptional: y } = c
      if (p === '*') {
        let v = l[f] || ''
        a = o.slice(0, o.length - v.length).replace(/(.)\/+$/, '$1')
      }
      const g = l[f]
      return y && !g ? (u[p] = void 0) : (u[p] = y2(g || '', p)), u
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e
  }
}
function v2(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Fc(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (a, l, s) => (
            r.push({ paramName: l, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  )
}
function g2(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      Fc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function y2(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      Fc(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    )
  }
}
function w0(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
const Or = e => e.join('/').replace(/\/\/+/g, '/'),
  w2 = e => e.replace(/\/+$/, '').replace(/^\/*/, '/')
function x2(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const x0 = ['post', 'put', 'patch', 'delete']
new Set(x0)
const k2 = ['get', ...x0]
new Set(k2)
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ra() {
  return (
    (Ra = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ra.apply(this, arguments)
  )
}
const S2 = x.createContext(null),
  b2 = x.createContext(null),
  k0 = x.createContext(null),
  il = x.createContext(null),
  ol = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  S0 = x.createContext(null)
function Dc() {
  return x.useContext(il) != null
}
function C2() {
  return Dc() || He(!1), x.useContext(il).location
}
function E2(e, t) {
  return P2(e, t)
}
function P2(e, t, n, r) {
  Dc() || He(!1)
  let { navigator: i } = x.useContext(k0),
    { matches: o } = x.useContext(ol),
    a = o[o.length - 1],
    l = a ? a.params : {}
  a && a.pathname
  let s = a ? a.pathnameBase : '/'
  a && a.route
  let u = C2(),
    c
  if (t) {
    var f
    let k = typeof t == 'string' ? rl(t) : t
    s === '/' || ((f = k.pathname) != null && f.startsWith(s)) || He(!1), (c = k)
  } else c = u
  let p = c.pathname || '/',
    y = s === '/' ? p : p.slice(s.length) || '/',
    g = i2(e, { pathname: y }),
    v = R2(
      g &&
        g.map(k =>
          Object.assign({}, k, {
            params: Object.assign({}, l, k.params),
            pathname: Or([
              s,
              i.encodeLocation ? i.encodeLocation(k.pathname).pathname : k.pathname
            ]),
            pathnameBase:
              k.pathnameBase === '/'
                ? s
                : Or([
                    s,
                    i.encodeLocation
                      ? i.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase
                  ])
          })
        ),
      o,
      n,
      r
    )
  return t && v
    ? x.createElement(
        il.Provider,
        {
          value: {
            location: Ra(
              { pathname: '/', search: '', hash: '', state: null, key: 'default' },
              c
            ),
            navigationType: an.Pop
          }
        },
        v
      )
    : v
}
function O2() {
  let e = M2(),
    t = x2(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null
  return x.createElement(
    x.Fragment,
    null,
    x.createElement('h2', null, 'Unexpected Application Error!'),
    x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? x.createElement('pre', { style: i }, n) : null,
    o
  )
}
const T2 = x.createElement(O2, null)
class _2 extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          ol.Provider,
          { value: this.props.routeContext },
          x.createElement(S0.Provider, {
            value: this.state.error,
            children: this.props.component
          })
        )
      : this.props.children
  }
}
function N2(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(S2)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(ol.Provider, { value: t }, r)
  )
}
function R2(e, t, n, r) {
  var i
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o
    if ((o = n) != null && o.errors) e = n.matches
    else return null
  }
  let a = e,
    l = (i = n) == null ? void 0 : i.errors
  if (l != null) {
    let c = a.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]))
    c >= 0 || He(!1), (a = a.slice(0, Math.min(a.length, c + 1)))
  }
  let s = !1,
    u = -1
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let f = a[c]
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: p, errors: y } = n,
          g =
            f.route.loader && p[f.route.id] === void 0 && (!y || y[f.route.id] === void 0)
        if (f.route.lazy || g) {
          ;(s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]])
          break
        }
      }
    }
  return a.reduceRight((c, f, p) => {
    let y,
      g = !1,
      v = null,
      k = null
    n &&
      ((y = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || T2),
      s &&
        (u < 0 && p === 0
          ? (I2('route-fallback', !1), (g = !0), (k = null))
          : u === p && ((g = !0), (k = f.route.hydrateFallbackElement || null))))
    let m = t.concat(a.slice(0, p + 1)),
      d = () => {
        let h
        return (
          y
            ? (h = v)
            : g
            ? (h = k)
            : f.route.Component
            ? (h = x.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = c),
          x.createElement(N2, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: h
          })
        )
      }
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? x.createElement(_2, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: y,
          children: d(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 }
        })
      : d()
  }, null)
}
var mu = (function (e) {
  return (
    (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId'),
    e
  )
})(mu || {})
function A2(e) {
  let t = x.useContext(b2)
  return t || He(!1), t
}
function $2(e) {
  let t = x.useContext(ol)
  return t || He(!1), t
}
function j2(e) {
  let t = $2(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || He(!1), n.route.id
}
function M2() {
  var e
  let t = x.useContext(S0),
    n = A2(mu.UseRouteError),
    r = j2(mu.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
const Ud = {}
function I2(e, t, n) {
  !t && !Ud[e] && (Ud[e] = !0)
}
function hu(e) {
  He(!1)
}
function L2(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = an.Pop,
    navigator: o,
    static: a = !1,
    future: l
  } = e
  Dc() && He(!1)
  let s = t.replace(/^\/*/, '/'),
    u = x.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: a,
        future: Ra({ v7_relativeSplatPath: !1 }, l)
      }),
      [s, l, o, a]
    )
  typeof r == 'string' && (r = rl(r))
  let {
      pathname: c = '/',
      search: f = '',
      hash: p = '',
      state: y = null,
      key: g = 'default'
    } = r,
    v = x.useMemo(() => {
      let k = w0(c, s)
      return k == null
        ? null
        : {
            location: { pathname: k, search: f, hash: p, state: y, key: g },
            navigationType: i
          }
    }, [s, c, f, p, y, g, i])
  return v == null
    ? null
    : x.createElement(
        k0.Provider,
        { value: u },
        x.createElement(il.Provider, { children: n, value: v })
      )
}
function z2(e) {
  let { children: t, location: n } = e
  return E2(vu(t), n)
}
new Promise(() => {})
function vu(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return
      let o = [...t, i]
      if (r.type === x.Fragment) {
        n.push.apply(n, vu(r.props.children, o))
        return
      }
      r.type !== hu && He(!1), !r.props.index || !r.props.children || He(!1)
      let a = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy
      }
      r.props.children && (a.children = vu(r.props.children, o)), n.push(a)
    }),
    n
  )
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const F2 = 'startTransition',
  Bd = ki[F2]
function D2(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = x.useRef()
  o.current == null && (o.current = t2({ window: i, v5Compat: !0 }))
  let a = o.current,
    [l, s] = x.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      f => {
        u && Bd ? Bd(() => s(f)) : s(f)
      },
      [s, u]
    )
  return (
    x.useLayoutEffect(() => a.listen(c), [a, c]),
    x.createElement(L2, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: r
    })
  )
}
var Vd
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(Vd || (Vd = {}))
var Wd
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Wd || (Wd = {}))
function U2() {
  return S.jsx(S.Fragment, {})
}
const B2 = ({ text: e, typingDelay: t, className: n, repeatDelay: r }) => {
  const [i, o] = x.useState(''),
    [a, l] = x.useState(0)
  return (
    x.useEffect(() => {
      if (a < e.length) {
        const s = setTimeout(() => {
          o(i + e.charAt(a)), l(a + 1)
        }, t)
        return () => clearTimeout(s)
      } else {
        const s = setTimeout(() => {
          o(''), l(0)
        }, r)
        return () => clearTimeout(s)
      }
    }, [a, e, t, r]),
    S.jsx('h1', { className: n, children: i })
  )
}
function $() {
  return (
    ($ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    $.apply(this, arguments)
  )
}
function ke(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    o
  for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
var b0 = { exports: {} },
  V2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  W2 = V2,
  H2 = W2
function C0() {}
function E0() {}
E0.resetWarningCache = C0
var Y2 = function () {
  function e(r, i, o, a, l, s) {
    if (s !== H2) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      )
      throw ((u.name = 'Invariant Violation'), u)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: E0,
    resetWarningCache: C0
  }
  return (n.PropTypes = n), n
}
b0.exports = Y2()
var K2 = b0.exports
const z = Gp(K2)
function P0(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length
      for (t = 0; t < i; t++) e[t] && (n = P0(e[t])) && (r && (r += ' '), (r += n))
    } else for (n in e) e[n] && (r && (r += ' '), (r += n))
  return r
}
function Ce() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = P0(e)) && (r && (r += ' '), (r += t))
  return r
}
function It(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object
}
function O0(e) {
  if (!It(e)) return e
  const t = {}
  return (
    Object.keys(e).forEach(n => {
      t[n] = O0(e[n])
    }),
    t
  )
}
function xt(e, t, n = { clone: !0 }) {
  const r = n.clone ? $({}, e) : e
  return (
    It(e) &&
      It(t) &&
      Object.keys(t).forEach(i => {
        i !== '__proto__' &&
          (It(t[i]) && i in e && It(e[i])
            ? (r[i] = xt(e[i], t[i], n))
            : n.clone
            ? (r[i] = It(t[i]) ? O0(t[i]) : t[i])
            : (r[i] = t[i]))
      }),
    r
  )
}
function zr(e) {
  let t = 'https://mui.com/production-error/?code=' + e
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.'
}
function Fn(e) {
  if (typeof e != 'string') throw new Error(zr(7))
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function G2(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t)
}
const Q2 = typeof window < 'u' ? x.useLayoutEffect : x.useEffect,
  X2 = Q2
function _o(e) {
  const t = x.useRef(e)
  return (
    X2(() => {
      t.current = e
    }),
    x.useRef((...n) => (0, t.current)(...n)).current
  )
}
function Hd(...e) {
  return x.useMemo(
    () =>
      e.every(t => t == null)
        ? null
        : t => {
            e.forEach(n => {
              G2(n, t)
            })
          },
    e
  )
}
let al = !0,
  gu = !1,
  Yd
const Z2 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  'datetime-local': !0
}
function q2(e) {
  const { type: t, tagName: n } = e
  return !!(
    (n === 'INPUT' && Z2[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  )
}
function J2(e) {
  e.metaKey || e.altKey || e.ctrlKey || (al = !0)
}
function us() {
  al = !1
}
function ew() {
  this.visibilityState === 'hidden' && gu && (al = !0)
}
function tw(e) {
  e.addEventListener('keydown', J2, !0),
    e.addEventListener('mousedown', us, !0),
    e.addEventListener('pointerdown', us, !0),
    e.addEventListener('touchstart', us, !0),
    e.addEventListener('visibilitychange', ew, !0)
}
function nw(e) {
  const { target: t } = e
  try {
    return t.matches(':focus-visible')
  } catch {}
  return al || q2(t)
}
function rw() {
  const e = x.useCallback(i => {
      i != null && tw(i.ownerDocument)
    }, []),
    t = x.useRef(!1)
  function n() {
    return t.current
      ? ((gu = !0),
        window.clearTimeout(Yd),
        (Yd = window.setTimeout(() => {
          gu = !1
        }, 100)),
        (t.current = !1),
        !0)
      : !1
  }
  function r(i) {
    return nw(i) ? ((t.current = !0), !0) : !1
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e }
}
function T0(e, t) {
  const n = $({}, t)
  return (
    Object.keys(e).forEach(r => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = $({}, e[r], n[r])
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const i = e[r] || {},
          o = t[r]
        ;(n[r] = {}),
          !o || !Object.keys(o)
            ? (n[r] = i)
            : !i || !Object.keys(i)
            ? (n[r] = o)
            : ((n[r] = $({}, o)),
              Object.keys(i).forEach(a => {
                n[r][a] = T0(i[a], o[a])
              }))
      } else n[r] === void 0 && (n[r] = e[r])
    }),
    n
  )
}
function Xn(e, t, n = void 0) {
  const r = {}
  return (
    Object.keys(e).forEach(i => {
      r[i] = e[i]
        .reduce((o, a) => {
          if (a) {
            const l = t(a)
            l !== '' && o.push(l), n && n[a] && o.push(n[a])
          }
          return o
        }, [])
        .join(' ')
    }),
    r
  )
}
const Kd = e => e,
  iw = () => {
    let e = Kd
    return {
      configure(t) {
        e = t
      },
      generate(t) {
        return e(t)
      },
      reset() {
        e = Kd
      }
    }
  },
  ow = iw(),
  aw = ow,
  lw = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected'
  }
function En(e, t, n = 'Mui') {
  const r = lw[t]
  return r ? `${n}-${r}` : `${aw.generate(e)}-${t}`
}
function Pn(e, t, n = 'Mui') {
  const r = {}
  return (
    t.forEach(i => {
      r[i] = En(e, i, n)
    }),
    r
  )
}
function sw(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var uw =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  cw = sw(function (e) {
    return (
      uw.test(e) ||
      (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    )
  })
function fw(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function dw(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var pw = (function () {
    function e(n) {
      var r = this
      ;(this._insertTag = function (i) {
        var o
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i)
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null)
    }
    var t = e.prototype
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag)
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(dw(this))
        var i = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var o = fw(i)
          try {
            o.insertRule(r, o.cssRules.length)
          } catch {}
        } else i.appendChild(document.createTextNode(r))
        this.ctr++
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r)
        }),
          (this.tags = []),
          (this.ctr = 0)
      }),
      e
    )
  })(),
  Ne = '-ms-',
  Aa = '-moz-',
  B = '-webkit-',
  _0 = 'comm',
  Uc = 'rule',
  Bc = 'decl',
  mw = '@import',
  N0 = '@keyframes',
  hw = '@layer',
  vw = Math.abs,
  ll = String.fromCharCode,
  gw = Object.assign
function yw(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^ Ee(e, 3)
    : 0
}
function R0(e) {
  return e.trim()
}
function ww(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function V(e, t, n) {
  return e.replace(t, n)
}
function yu(e, t) {
  return e.indexOf(t)
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0
}
function Di(e, t, n) {
  return e.slice(t, n)
}
function Ct(e) {
  return e.length
}
function Vc(e) {
  return e.length
}
function No(e, t) {
  return t.push(e), e
}
function xw(e, t) {
  return e.map(t).join('')
}
var sl = 1,
  Fr = 1,
  A0 = 0,
  Ye = 0,
  pe = 0,
  Wr = ''
function ul(e, t, n, r, i, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: sl,
    column: Fr,
    length: a,
    return: ''
  }
}
function ti(e, t) {
  return gw(ul('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function kw() {
  return pe
}
function Sw() {
  return (pe = Ye > 0 ? Ee(Wr, --Ye) : 0), Fr--, pe === 10 && ((Fr = 1), sl--), pe
}
function Ze() {
  return (pe = Ye < A0 ? Ee(Wr, Ye++) : 0), Fr++, pe === 10 && ((Fr = 1), sl++), pe
}
function Nt() {
  return Ee(Wr, Ye)
}
function qo() {
  return Ye
}
function to(e, t) {
  return Di(Wr, e, t)
}
function Ui(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function $0(e) {
  return (sl = Fr = 1), (A0 = Ct((Wr = e))), (Ye = 0), []
}
function j0(e) {
  return (Wr = ''), e
}
function Jo(e) {
  return R0(to(Ye - 1, wu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function bw(e) {
  for (; (pe = Nt()) && pe < 33; ) Ze()
  return Ui(e) > 2 || Ui(pe) > 3 ? '' : ' '
}
function Cw(e, t) {
  for (
    ;
    --t && Ze() && !(pe < 48 || pe > 102 || (pe > 57 && pe < 65) || (pe > 70 && pe < 97));

  );
  return to(e, qo() + (t < 6 && Nt() == 32 && Ze() == 32))
}
function wu(e) {
  for (; Ze(); )
    switch (pe) {
      case e:
        return Ye
      case 34:
      case 39:
        e !== 34 && e !== 39 && wu(pe)
        break
      case 40:
        e === 41 && wu(e)
        break
      case 92:
        Ze()
        break
    }
  return Ye
}
function Ew(e, t) {
  for (; Ze() && e + pe !== 57; ) if (e + pe === 84 && Nt() === 47) break
  return '/*' + to(t, Ye - 1) + '*' + ll(e === 47 ? e : Ze())
}
function Pw(e) {
  for (; !Ui(Nt()); ) Ze()
  return to(e, Ye)
}
function Ow(e) {
  return j0(ea('', null, null, null, [''], (e = $0(e)), 0, [0], e))
}
function ea(e, t, n, r, i, o, a, l, s) {
  for (
    var u = 0,
      c = 0,
      f = a,
      p = 0,
      y = 0,
      g = 0,
      v = 1,
      k = 1,
      m = 1,
      d = 0,
      h = '',
      w = i,
      b = o,
      E = r,
      C = h;
    k;

  )
    switch (((g = d), (d = Ze()))) {
      case 40:
        if (g != 108 && Ee(C, f - 1) == 58) {
          yu((C += V(Jo(d), '&', '&\f')), '&\f') != -1 && (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        C += Jo(d)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        C += bw(g)
        break
      case 92:
        C += Cw(qo() - 1, 7)
        continue
      case 47:
        switch (Nt()) {
          case 42:
          case 47:
            No(Tw(Ew(Ze(), qo()), t, n), s)
            break
          default:
            C += '/'
        }
        break
      case 123 * v:
        l[u++] = Ct(C) * m
      case 125 * v:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            k = 0
          case 59 + c:
            m == -1 && (C = V(C, /\f/g, '')),
              y > 0 &&
                Ct(C) - f &&
                No(
                  y > 32
                    ? Qd(C + ';', r, n, f - 1)
                    : Qd(V(C, ' ', '') + ';', r, n, f - 2),
                  s
                )
            break
          case 59:
            C += ';'
          default:
            if (
              (No((E = Gd(C, t, n, u, c, i, l, h, (w = []), (b = []), f)), o), d === 123)
            )
              if (c === 0) ea(C, t, E, E, w, o, f, l, b)
              else
                switch (p === 99 && Ee(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ea(
                      e,
                      E,
                      E,
                      r && No(Gd(e, E, E, 0, 0, i, l, h, i, (w = []), f), b),
                      i,
                      b,
                      f,
                      l,
                      r ? w : b
                    )
                    break
                  default:
                    ea(C, E, E, E, [''], b, 0, l, b)
                }
        }
        ;(u = c = y = 0), (v = m = 1), (h = C = ''), (f = a)
        break
      case 58:
        ;(f = 1 + Ct(C)), (y = g)
      default:
        if (v < 1) {
          if (d == 123) --v
          else if (d == 125 && v++ == 0 && Sw() == 125) continue
        }
        switch (((C += ll(d)), d * v)) {
          case 38:
            m = c > 0 ? 1 : ((C += '\f'), -1)
            break
          case 44:
            ;(l[u++] = (Ct(C) - 1) * m), (m = 1)
            break
          case 64:
            Nt() === 45 && (C += Jo(Ze())),
              (p = Nt()),
              (c = f = Ct((h = C += Pw(qo())))),
              d++
            break
          case 45:
            g === 45 && Ct(C) == 2 && (v = 0)
        }
    }
  return o
}
function Gd(e, t, n, r, i, o, a, l, s, u, c) {
  for (var f = i - 1, p = i === 0 ? o : [''], y = Vc(p), g = 0, v = 0, k = 0; g < r; ++g)
    for (var m = 0, d = Di(e, f + 1, (f = vw((v = a[g])))), h = e; m < y; ++m)
      (h = R0(v > 0 ? p[m] + ' ' + d : V(d, /&\f/g, p[m]))) && (s[k++] = h)
  return ul(e, t, n, i === 0 ? Uc : l, s, u, c)
}
function Tw(e, t, n) {
  return ul(e, t, n, _0, ll(kw()), Di(e, 2, -2), 0)
}
function Qd(e, t, n, r) {
  return ul(e, t, n, Bc, Di(e, 0, r), Di(e, r + 1, -1), r)
}
function Tr(e, t) {
  for (var n = '', r = Vc(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ''
  return n
}
function _w(e, t, n, r) {
  switch (e.type) {
    case hw:
      if (e.children.length) break
    case mw:
    case Bc:
      return (e.return = e.return || e.value)
    case _0:
      return ''
    case N0:
      return (e.return = e.value + '{' + Tr(e.children, r) + '}')
    case Uc:
      e.value = e.props.join(',')
  }
  return Ct((n = Tr(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function Nw(e) {
  var t = Vc(e)
  return function (n, r, i, o) {
    for (var a = '', l = 0; l < t; l++) a += e[l](n, r, i, o) || ''
    return a
  }
}
function Rw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var Aw = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = Nt()), i === 38 && o === 12 && (n[r] = 1), !Ui(o);

    )
      Ze()
    return to(t, Ye)
  },
  $w = function (t, n) {
    var r = -1,
      i = 44
    do
      switch (Ui(i)) {
        case 0:
          i === 38 && Nt() === 12 && (n[r] = 1), (t[r] += Aw(Ye - 1, n, r))
          break
        case 2:
          t[r] += Jo(i)
          break
        case 4:
          if (i === 44) {
            ;(t[++r] = Nt() === 58 ? '&\f' : ''), (n[r] = t[r].length)
            break
          }
        default:
          t[r] += ll(i)
      }
    while ((i = Ze()))
    return t
  },
  jw = function (t, n) {
    return j0($w($0(t), n))
  },
  Xd = new WeakMap(),
  Mw = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xd.get(r)) && !i) {
        Xd.set(t, !0)
        for (var o = [], a = jw(n, o), l = r.props, s = 0, u = 0; s < a.length; s++)
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = o[s] ? a[s].replace(/&\f/g, l[c]) : l[c] + ' ' + a[s]
      }
    }
  },
  Iw = function (t) {
    if (t.type === 'decl') {
      var n = t.value
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''))
    }
  }
function M0(e, t) {
  switch (yw(e, t)) {
    case 5103:
      return B + 'print-' + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return B + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + Aa + e + Ne + e + e
    case 6828:
    case 4268:
      return B + e + Ne + e + e
    case 6165:
      return B + e + Ne + 'flex-' + e + e
    case 5187:
      return B + e + V(e, /(\w+).+(:[^]+)/, B + 'box-$1$2' + Ne + 'flex-$1$2') + e
    case 5443:
      return B + e + Ne + 'flex-item-' + V(e, /flex-|-self/, '') + e
    case 4675:
      return B + e + Ne + 'flex-line-pack' + V(e, /align-content|flex-|-self/, '') + e
    case 5548:
      return B + e + Ne + V(e, 'shrink', 'negative') + e
    case 5292:
      return B + e + Ne + V(e, 'basis', 'preferred-size') + e
    case 6060:
      return B + 'box-' + V(e, '-grow', '') + B + e + Ne + V(e, 'grow', 'positive') + e
    case 4554:
      return B + V(e, /([^-])(transform)/g, '$1' + B + '$2') + e
    case 6187:
      return V(V(V(e, /(zoom-|grab)/, B + '$1'), /(image-set)/, B + '$1'), e, '') + e
    case 5495:
    case 3959:
      return V(e, /(image-set\([^]*)/, B + '$1$`$1')
    case 4968:
      return (
        V(
          V(e, /(.+:)(flex-)?(.*)/, B + 'box-pack:$3' + Ne + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        B +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(e, /(.+)-inline(.+)/, B + '$1$2') + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ct(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break
          case 102:
            return (
              V(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + B + '$2-$3$1' + Aa + (Ee(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~yu(e, 'stretch') ? M0(V(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (Ee(e, t + 1) !== 115) break
    case 6444:
      switch (Ee(e, Ct(e) - 3 - (~yu(e, '!important') && 10))) {
        case 107:
          return V(e, ':', ':' + B) + e
        case 101:
          return (
            V(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                B +
                (Ee(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                B +
                '$2$3$1' +
                Ne +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return B + e + Ne + V(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return B + e + Ne + V(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return B + e + Ne + V(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return B + e + Ne + e + e
  }
  return e
}
var Lw = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Bc:
          t.return = M0(t.value, t.length)
          break
        case N0:
          return Tr([ti(t, { value: V(t.value, '@', '@' + B) })], i)
        case Uc:
          if (t.length)
            return xw(t.props, function (o) {
              switch (ww(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Tr([ti(t, { props: [V(o, /:(read-\w+)/, ':' + Aa + '$1')] })], i)
                case '::placeholder':
                  return Tr(
                    [
                      ti(t, { props: [V(o, /:(plac\w+)/, ':' + B + 'input-$1')] }),
                      ti(t, { props: [V(o, /:(plac\w+)/, ':' + Aa + '$1')] }),
                      ti(t, { props: [V(o, /:(plac\w+)/, Ne + 'input-$1')] })
                    ],
                    i
                  )
              }
              return ''
            })
      }
  },
  zw = [Lw],
  Fw = function (t) {
    var n = t.key
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (v) {
        var k = v.getAttribute('data-emotion')
        k.indexOf(' ') !== -1 &&
          (document.head.appendChild(v), v.setAttribute('data-s', ''))
      })
    }
    var i = t.stylisPlugins || zw,
      o = {},
      a,
      l = []
    ;(a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var k = v.getAttribute('data-emotion').split(' '), m = 1;
            m < k.length;
            m++
          )
            o[k[m]] = !0
          l.push(v)
        }
      )
    var s,
      u = [Mw, Iw]
    {
      var c,
        f = [
          _w,
          Rw(function (v) {
            c.insert(v)
          })
        ],
        p = Nw(u.concat(i, f)),
        y = function (k) {
          return Tr(Ow(k), p)
        }
      s = function (k, m, d, h) {
        ;(c = d),
          y(k ? k + '{' + m.styles + '}' : m.styles),
          h && (g.inserted[m.name] = !0)
      }
    }
    var g = {
      key: n,
      sheet: new pw({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: s
    }
    return g.sheet.hydrate(l), g
  },
  I0 = { exports: {} },
  H = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Se = typeof Symbol == 'function' && Symbol.for,
  Wc = Se ? Symbol.for('react.element') : 60103,
  Hc = Se ? Symbol.for('react.portal') : 60106,
  cl = Se ? Symbol.for('react.fragment') : 60107,
  fl = Se ? Symbol.for('react.strict_mode') : 60108,
  dl = Se ? Symbol.for('react.profiler') : 60114,
  pl = Se ? Symbol.for('react.provider') : 60109,
  ml = Se ? Symbol.for('react.context') : 60110,
  Yc = Se ? Symbol.for('react.async_mode') : 60111,
  hl = Se ? Symbol.for('react.concurrent_mode') : 60111,
  vl = Se ? Symbol.for('react.forward_ref') : 60112,
  gl = Se ? Symbol.for('react.suspense') : 60113,
  Dw = Se ? Symbol.for('react.suspense_list') : 60120,
  yl = Se ? Symbol.for('react.memo') : 60115,
  wl = Se ? Symbol.for('react.lazy') : 60116,
  Uw = Se ? Symbol.for('react.block') : 60121,
  Bw = Se ? Symbol.for('react.fundamental') : 60117,
  Vw = Se ? Symbol.for('react.responder') : 60118,
  Ww = Se ? Symbol.for('react.scope') : 60119
function tt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Wc:
        switch (((e = e.type), e)) {
          case Yc:
          case hl:
          case cl:
          case dl:
          case fl:
          case gl:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ml:
              case vl:
              case wl:
              case yl:
              case pl:
                return e
              default:
                return t
            }
        }
      case Hc:
        return t
    }
  }
}
function L0(e) {
  return tt(e) === hl
}
H.AsyncMode = Yc
H.ConcurrentMode = hl
H.ContextConsumer = ml
H.ContextProvider = pl
H.Element = Wc
H.ForwardRef = vl
H.Fragment = cl
H.Lazy = wl
H.Memo = yl
H.Portal = Hc
H.Profiler = dl
H.StrictMode = fl
H.Suspense = gl
H.isAsyncMode = function (e) {
  return L0(e) || tt(e) === Yc
}
H.isConcurrentMode = L0
H.isContextConsumer = function (e) {
  return tt(e) === ml
}
H.isContextProvider = function (e) {
  return tt(e) === pl
}
H.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Wc
}
H.isForwardRef = function (e) {
  return tt(e) === vl
}
H.isFragment = function (e) {
  return tt(e) === cl
}
H.isLazy = function (e) {
  return tt(e) === wl
}
H.isMemo = function (e) {
  return tt(e) === yl
}
H.isPortal = function (e) {
  return tt(e) === Hc
}
H.isProfiler = function (e) {
  return tt(e) === dl
}
H.isStrictMode = function (e) {
  return tt(e) === fl
}
H.isSuspense = function (e) {
  return tt(e) === gl
}
H.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === cl ||
    e === hl ||
    e === dl ||
    e === fl ||
    e === gl ||
    e === Dw ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === wl ||
        e.$$typeof === yl ||
        e.$$typeof === pl ||
        e.$$typeof === ml ||
        e.$$typeof === vl ||
        e.$$typeof === Bw ||
        e.$$typeof === Vw ||
        e.$$typeof === Ww ||
        e.$$typeof === Uw))
  )
}
H.typeOf = tt
I0.exports = H
var Hw = I0.exports,
  z0 = Hw,
  Yw = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Kw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  F0 = {}
F0[z0.ForwardRef] = Yw
F0[z0.Memo] = Kw
var Gw = !0
function Qw(e, t, n) {
  var r = ''
  return (
    n.split(' ').forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ';') : (r += i + ' ')
    }),
    r
  )
}
var D0 = function (t, n, r) {
    var i = t.key + '-' + n.name
    ;(r === !1 || Gw === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles)
  },
  Xw = function (t, n, r) {
    D0(t, n, r)
    var i = t.key + '-' + n.name
    if (t.inserted[n.name] === void 0) {
      var o = n
      do t.insert(n === o ? '.' + i : '', o, t.sheet, !0), (o = o.next)
      while (o !== void 0)
    }
  }
function Zw(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
var qw = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}
function Jw(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var e3 = /[A-Z]|^ms/g,
  t3 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  U0 = function (t) {
    return t.charCodeAt(1) === 45
  },
  Zd = function (t) {
    return t != null && typeof t != 'boolean'
  },
  cs = Jw(function (e) {
    return U0(e) ? e : e.replace(e3, '-$&').toLowerCase()
  }),
  qd = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(t3, function (r, i, o) {
            return (Et = { name: i, styles: o, next: Et }), i
          })
    }
    return qw[t] !== 1 && !U0(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n
  }
function Bi(e, t, n) {
  if (n == null) return ''
  if (n.__emotion_styles !== void 0) return n
  switch (typeof n) {
    case 'boolean':
      return ''
    case 'object': {
      if (n.anim === 1) return (Et = { name: n.name, styles: n.styles, next: Et }), n.name
      if (n.styles !== void 0) {
        var r = n.next
        if (r !== void 0)
          for (; r !== void 0; )
            (Et = { name: r.name, styles: r.styles, next: Et }), (r = r.next)
        var i = n.styles + ';'
        return i
      }
      return n3(e, t, n)
    }
    case 'function': {
      if (e !== void 0) {
        var o = Et,
          a = n(e)
        return (Et = o), Bi(e, t, a)
      }
      break
    }
  }
  if (t == null) return n
  var l = t[n]
  return l !== void 0 ? l : n
}
function n3(e, t, n) {
  var r = ''
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Bi(e, t, n[i]) + ';'
  else
    for (var o in n) {
      var a = n[o]
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (r += o + '{' + t[a] + '}')
          : Zd(a) && (r += cs(o) + ':' + qd(o, a) + ';')
      else if (
        Array.isArray(a) &&
        typeof a[0] == 'string' &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          Zd(a[l]) && (r += cs(o) + ':' + qd(o, a[l]) + ';')
      else {
        var s = Bi(e, t, a)
        switch (o) {
          case 'animation':
          case 'animationName': {
            r += cs(o) + ':' + s + ';'
            break
          }
          default:
            r += o + '{' + s + '}'
        }
      }
    }
  return r
}
var Jd = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Et,
  B0 = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0]
    var i = !0,
      o = ''
    Et = void 0
    var a = t[0]
    a == null || a.raw === void 0 ? ((i = !1), (o += Bi(r, n, a))) : (o += a[0])
    for (var l = 1; l < t.length; l++) (o += Bi(r, n, t[l])), i && (o += a[l])
    Jd.lastIndex = 0
    for (var s = '', u; (u = Jd.exec(o)) !== null; ) s += '-' + u[1]
    var c = Zw(o) + s
    return { name: c, styles: o, next: Et }
  },
  r3 = function (t) {
    return t()
  },
  i3 = ki.useInsertionEffect ? ki.useInsertionEffect : !1,
  o3 = i3 || r3,
  V0 = x.createContext(typeof HTMLElement < 'u' ? Fw({ key: 'css' }) : null)
V0.Provider
var a3 = function (t) {
    return x.forwardRef(function (n, r) {
      var i = x.useContext(V0)
      return t(n, i, r)
    })
  },
  W0 = x.createContext({})
function l3() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return B0(t)
}
var Kc = function () {
    var t = l3.apply(void 0, arguments),
      n = 'animation-' + t.name
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
      }
    }
  },
  s3 = cw,
  u3 = function (t) {
    return t !== 'theme'
  },
  ep = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? s3 : u3
  },
  tp = function (t, n, r) {
    var i
    if (n) {
      var o = n.shouldForwardProp
      i =
        t.__emotion_forwardProp && o
          ? function (a) {
              return t.__emotion_forwardProp(a) && o(a)
            }
          : o
    }
    return typeof i != 'function' && r && (i = t.__emotion_forwardProp), i
  },
  c3 = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag
    return (
      D0(n, r, i),
      o3(function () {
        return Xw(n, r, i)
      }),
      null
    )
  },
  f3 = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      a
    n !== void 0 && ((o = n.label), (a = n.target))
    var l = tp(t, n, r),
      s = l || ep(i),
      u = !s('as')
    return function () {
      var c = arguments,
        f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if (
        (o !== void 0 && f.push('label:' + o + ';'), c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c)
      else {
        f.push(c[0][0])
        for (var p = c.length, y = 1; y < p; y++) f.push(c[y], c[0][y])
      }
      var g = a3(function (v, k, m) {
        var d = (u && v.as) || i,
          h = '',
          w = [],
          b = v
        if (v.theme == null) {
          b = {}
          for (var E in v) b[E] = v[E]
          b.theme = x.useContext(W0)
        }
        typeof v.className == 'string'
          ? (h = Qw(k.registered, w, v.className))
          : v.className != null && (h = v.className + ' ')
        var C = B0(f.concat(w), k.registered, b)
        ;(h += k.key + '-' + C.name), a !== void 0 && (h += ' ' + a)
        var _ = u && l === void 0 ? ep(d) : s,
          j = {}
        for (var O in v) (u && O === 'as') || (_(O) && (j[O] = v[O]))
        return (
          (j.className = h),
          (j.ref = m),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(c3, {
              cache: k,
              serialized: C,
              isStringTag: typeof d == 'string'
            }),
            x.createElement(d, j)
          )
        )
      })
      return (
        (g.displayName =
          o !== void 0
            ? o
            : 'Styled(' +
              (typeof i == 'string' ? i : i.displayName || i.name || 'Component') +
              ')'),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = i),
        (g.__emotion_styles = f),
        (g.__emotion_forwardProp = l),
        Object.defineProperty(g, 'toString', {
          value: function () {
            return '.' + a
          }
        }),
        (g.withComponent = function (v, k) {
          return e(v, $({}, n, k, { shouldForwardProp: tp(g, k, !0) })).apply(void 0, f)
        }),
        g
      )
    }
  },
  d3 = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
  ],
  xu = f3.bind()
d3.forEach(function (e) {
  xu[e] = xu(e)
})
function p3(e, t) {
  return xu(e, t)
}
const m3 = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
  },
  h3 = ['values', 'unit', 'step'],
  v3 = e => {
    const t = Object.keys(e).map(n => ({ key: n, val: e[n] })) || []
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => $({}, n, { [r.key]: r.val }), {})
    )
  }
function g3(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5
    } = e,
    i = ke(e, h3),
    o = v3(t),
    a = Object.keys(o)
  function l(p) {
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == 'number' ? t[p] : p) - r / 100}${n})`
  }
  function u(p, y) {
    const g = a.indexOf(y)
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n}) and (max-width:${
      (g !== -1 && typeof t[a[g]] == 'number' ? t[a[g]] : y) - r / 100
    }${n})`
  }
  function c(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p)
  }
  function f(p) {
    const y = a.indexOf(p)
    return y === 0
      ? l(a[1])
      : y === a.length - 1
      ? s(a[y])
      : u(p, a[a.indexOf(p) + 1]).replace('@media', '@media not all and')
  }
  return $(
    { keys: a, values: o, up: l, down: s, between: u, only: c, not: f, unit: n },
    i
  )
}
const y3 = { borderRadius: 4 },
  w3 = y3
function yi(e, t) {
  return t ? xt(e, t, { clone: !1 }) : e
}
const Gc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  np = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: e => `@media (min-width:${Gc[e]}px)` }
function Wt(e, t, n) {
  const r = e.theme || {}
  if (Array.isArray(t)) {
    const o = r.breakpoints || np
    return t.reduce((a, l, s) => ((a[o.up(o.keys[s])] = n(t[s])), a), {})
  }
  if (typeof t == 'object') {
    const o = r.breakpoints || np
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(o.values || Gc).indexOf(l) !== -1) {
        const s = o.up(l)
        a[s] = n(t[l], l)
      } else {
        const s = l
        a[s] = t[s]
      }
      return a
    }, {})
  }
  return n(t)
}
function x3(e = {}) {
  var t
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, i) => {
          const o = e.up(i)
          return (r[o] = {}), r
        }, {})) || {}
  )
}
function k3(e, t) {
  return e.reduce((n, r) => {
    const i = n[r]
    return (!i || Object.keys(i).length === 0) && delete n[r], n
  }, t)
}
function xl(e, t, n = !0) {
  if (!t || typeof t != 'string') return null
  if (e && e.vars && n) {
    const r = `vars.${t}`.split('.').reduce((i, o) => (i && i[o] ? i[o] : null), e)
    if (r != null) return r
  }
  return t.split('.').reduce((r, i) => (r && r[i] != null ? r[i] : null), e)
}
function $a(e, t, n, r = n) {
  let i
  return (
    typeof e == 'function'
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = xl(e, n) || r),
    t && (i = t(i, r, e)),
    i
  )
}
function ce(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = a => {
      if (a[t] == null) return null
      const l = a[t],
        s = a.theme,
        u = xl(s, r) || {}
      return Wt(a, l, f => {
        let p = $a(u, i, f)
        return (
          f === p &&
            typeof f == 'string' &&
            (p = $a(u, i, `${t}${f === 'default' ? '' : Fn(f)}`, f)),
          n === !1 ? p : { [n]: p }
        )
      })
    }
  return (o.propTypes = {}), (o.filterProps = [t]), o
}
function S3(e) {
  const t = {}
  return n => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const b3 = { m: 'margin', p: 'padding' },
  C3 = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  },
  rp = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  E3 = S3(e => {
    if (e.length > 2)
      if (rp[e]) e = rp[e]
      else return [e]
    const [t, n] = e.split(''),
      r = b3[t],
      i = C3[n] || ''
    return Array.isArray(i) ? i.map(o => r + o) : [r + i]
  }),
  Qc = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd'
  ],
  Xc = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd'
  ]
;[...Qc, ...Xc]
function no(e, t, n, r) {
  var i
  const o = (i = xl(e, t, !1)) != null ? i : n
  return typeof o == 'number'
    ? a => (typeof a == 'string' ? a : o * a)
    : Array.isArray(o)
    ? a => (typeof a == 'string' ? a : o[a])
    : typeof o == 'function'
    ? o
    : () => {}
}
function H0(e) {
  return no(e, 'spacing', 8)
}
function ro(e, t) {
  if (typeof t == 'string' || t == null) return t
  const n = Math.abs(t),
    r = e(n)
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`
}
function P3(e, t) {
  return n => e.reduce((r, i) => ((r[i] = ro(t, n)), r), {})
}
function O3(e, t, n, r) {
  if (t.indexOf(n) === -1) return null
  const i = E3(n),
    o = P3(i, r),
    a = e[n]
  return Wt(e, a, o)
}
function Y0(e, t) {
  const n = H0(e.theme)
  return Object.keys(e)
    .map(r => O3(e, t, r, n))
    .reduce(yi, {})
}
function oe(e) {
  return Y0(e, Qc)
}
oe.propTypes = {}
oe.filterProps = Qc
function ae(e) {
  return Y0(e, Xc)
}
ae.propTypes = {}
ae.filterProps = Xc
function T3(e = 8) {
  if (e.mui) return e
  const t = H0({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map(o => {
          const a = t(o)
          return typeof a == 'number' ? `${a}px` : a
        })
        .join(' ')
  return (n.mui = !0), n
}
function kl(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach(o => {
          r[o] = i
        }),
        r
      ),
      {}
    ),
    n = r => Object.keys(r).reduce((i, o) => (t[o] ? yi(i, t[o](r)) : i), {})
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  )
}
function at(e) {
  return typeof e != 'number' ? e : `${e}px solid`
}
function ft(e, t) {
  return ce({ prop: e, themeKey: 'borders', transform: t })
}
const _3 = ft('border', at),
  N3 = ft('borderTop', at),
  R3 = ft('borderRight', at),
  A3 = ft('borderBottom', at),
  $3 = ft('borderLeft', at),
  j3 = ft('borderColor'),
  M3 = ft('borderTopColor'),
  I3 = ft('borderRightColor'),
  L3 = ft('borderBottomColor'),
  z3 = ft('borderLeftColor'),
  F3 = ft('outline', at),
  D3 = ft('outlineColor'),
  Sl = e => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = no(e.theme, 'shape.borderRadius', 4),
        n = r => ({ borderRadius: ro(t, r) })
      return Wt(e, e.borderRadius, n)
    }
    return null
  }
Sl.propTypes = {}
Sl.filterProps = ['borderRadius']
kl(_3, N3, R3, A3, $3, j3, M3, I3, L3, z3, Sl, F3, D3)
const bl = e => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = no(e.theme, 'spacing', 8),
      n = r => ({ gap: ro(t, r) })
    return Wt(e, e.gap, n)
  }
  return null
}
bl.propTypes = {}
bl.filterProps = ['gap']
const Cl = e => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = no(e.theme, 'spacing', 8),
      n = r => ({ columnGap: ro(t, r) })
    return Wt(e, e.columnGap, n)
  }
  return null
}
Cl.propTypes = {}
Cl.filterProps = ['columnGap']
const El = e => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = no(e.theme, 'spacing', 8),
      n = r => ({ rowGap: ro(t, r) })
    return Wt(e, e.rowGap, n)
  }
  return null
}
El.propTypes = {}
El.filterProps = ['rowGap']
const U3 = ce({ prop: 'gridColumn' }),
  B3 = ce({ prop: 'gridRow' }),
  V3 = ce({ prop: 'gridAutoFlow' }),
  W3 = ce({ prop: 'gridAutoColumns' }),
  H3 = ce({ prop: 'gridAutoRows' }),
  Y3 = ce({ prop: 'gridTemplateColumns' }),
  K3 = ce({ prop: 'gridTemplateRows' }),
  G3 = ce({ prop: 'gridTemplateAreas' }),
  Q3 = ce({ prop: 'gridArea' })
kl(bl, Cl, El, U3, B3, V3, W3, H3, Y3, K3, G3, Q3)
function _r(e, t) {
  return t === 'grey' ? t : e
}
const X3 = ce({ prop: 'color', themeKey: 'palette', transform: _r }),
  Z3 = ce({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: _r
  }),
  q3 = ce({ prop: 'backgroundColor', themeKey: 'palette', transform: _r })
kl(X3, Z3, q3)
function Ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const J3 = ce({ prop: 'width', transform: Ge }),
  Zc = e => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = n => {
        var r, i
        const o =
          ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null
            ? void 0
            : r[n]) || Gc[n]
        return o
          ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !==
            'px'
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: Ge(n) }
      }
      return Wt(e, e.maxWidth, t)
    }
    return null
  }
Zc.filterProps = ['maxWidth']
const e5 = ce({ prop: 'minWidth', transform: Ge }),
  t5 = ce({ prop: 'height', transform: Ge }),
  n5 = ce({ prop: 'maxHeight', transform: Ge }),
  r5 = ce({ prop: 'minHeight', transform: Ge })
ce({ prop: 'size', cssProperty: 'width', transform: Ge })
ce({ prop: 'size', cssProperty: 'height', transform: Ge })
const i5 = ce({ prop: 'boxSizing' })
kl(J3, Zc, e5, t5, n5, r5, i5)
const o5 = {
    border: { themeKey: 'borders', transform: at },
    borderTop: { themeKey: 'borders', transform: at },
    borderRight: { themeKey: 'borders', transform: at },
    borderBottom: { themeKey: 'borders', transform: at },
    borderLeft: { themeKey: 'borders', transform: at },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    outline: { themeKey: 'borders', transform: at },
    outlineColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: Sl },
    color: { themeKey: 'palette', transform: _r },
    bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: _r },
    backgroundColor: { themeKey: 'palette', transform: _r },
    p: { style: ae },
    pt: { style: ae },
    pr: { style: ae },
    pb: { style: ae },
    pl: { style: ae },
    px: { style: ae },
    py: { style: ae },
    padding: { style: ae },
    paddingTop: { style: ae },
    paddingRight: { style: ae },
    paddingBottom: { style: ae },
    paddingLeft: { style: ae },
    paddingX: { style: ae },
    paddingY: { style: ae },
    paddingInline: { style: ae },
    paddingInlineStart: { style: ae },
    paddingInlineEnd: { style: ae },
    paddingBlock: { style: ae },
    paddingBlockStart: { style: ae },
    paddingBlockEnd: { style: ae },
    m: { style: oe },
    mt: { style: oe },
    mr: { style: oe },
    mb: { style: oe },
    ml: { style: oe },
    mx: { style: oe },
    my: { style: oe },
    margin: { style: oe },
    marginTop: { style: oe },
    marginRight: { style: oe },
    marginBottom: { style: oe },
    marginLeft: { style: oe },
    marginX: { style: oe },
    marginY: { style: oe },
    marginInline: { style: oe },
    marginInlineStart: { style: oe },
    marginInlineEnd: { style: oe },
    marginBlock: { style: oe },
    marginBlockStart: { style: oe },
    marginBlockEnd: { style: oe },
    displayPrint: {
      cssProperty: !1,
      transform: e => ({ '@media print': { display: e } })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: bl },
    rowGap: { style: El },
    columnGap: { style: Cl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: Ge },
    maxWidth: { style: Zc },
    minWidth: { transform: Ge },
    height: { transform: Ge },
    maxHeight: { transform: Ge },
    minHeight: { transform: Ge },
    boxSizing: {},
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' }
  },
  Pl = o5
function a5(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t)
  return e.every(r => n.size === Object.keys(r).length)
}
function l5(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function s5() {
  function e(n, r, i, o) {
    const a = { [n]: r, theme: i },
      l = o[n]
    if (!l) return { [n]: r }
    const { cssProperty: s = n, themeKey: u, transform: c, style: f } = l
    if (r == null) return null
    if (u === 'typography' && r === 'inherit') return { [n]: r }
    const p = xl(i, u) || {}
    return f
      ? f(a)
      : Wt(a, r, g => {
          let v = $a(p, c, g)
          return (
            g === v &&
              typeof g == 'string' &&
              (v = $a(p, c, `${n}${g === 'default' ? '' : Fn(g)}`, g)),
            s === !1 ? v : { [s]: v }
          )
        })
  }
  function t(n) {
    var r
    const { sx: i, theme: o = {} } = n || {}
    if (!i) return null
    const a = (r = o.unstable_sxConfig) != null ? r : Pl
    function l(s) {
      let u = s
      if (typeof s == 'function') u = s(o)
      else if (typeof s != 'object') return s
      if (!u) return null
      const c = x3(o.breakpoints),
        f = Object.keys(c)
      let p = c
      return (
        Object.keys(u).forEach(y => {
          const g = l5(u[y], o)
          if (g != null)
            if (typeof g == 'object')
              if (a[y]) p = yi(p, e(y, g, o, a))
              else {
                const v = Wt({ theme: o }, g, k => ({ [y]: k }))
                a5(v, g) ? (p[y] = t({ sx: g, theme: o })) : (p = yi(p, v))
              }
            else p = yi(p, e(y, g, o, a))
        }),
        k3(f, p)
      )
    }
    return Array.isArray(i) ? i.map(l) : l(i)
  }
  return t
}
const K0 = s5()
K0.filterProps = ['sx']
const qc = K0,
  u5 = ['breakpoints', 'palette', 'spacing', 'shape']
function Jc(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    a = ke(e, u5),
    l = g3(n),
    s = T3(i)
  let u = xt(
    {
      breakpoints: l,
      direction: 'ltr',
      components: {},
      palette: $({ mode: 'light' }, r),
      spacing: s,
      shape: $({}, w3, o)
    },
    a
  )
  return (
    (u = t.reduce((c, f) => xt(c, f), u)),
    (u.unstable_sxConfig = $({}, Pl, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return qc({ sx: f, theme: this })
    }),
    u
  )
}
function c5(e) {
  return Object.keys(e).length === 0
}
function f5(e = null) {
  const t = x.useContext(W0)
  return !t || c5(t) ? e : t
}
const d5 = Jc()
function p5(e = d5) {
  return f5(e)
}
const m5 = ['sx'],
  h5 = e => {
    var t, n
    const r = { systemProps: {}, otherProps: {} },
      i =
        (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null
          ? t
          : Pl
    return (
      Object.keys(e).forEach(o => {
        i[o] ? (r.systemProps[o] = e[o]) : (r.otherProps[o] = e[o])
      }),
      r
    )
  }
function v5(e) {
  const { sx: t } = e,
    n = ke(e, m5),
    { systemProps: r, otherProps: i } = h5(n)
  let o
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == 'function'
      ? (o = (...a) => {
          const l = t(...a)
          return It(l) ? $({}, r, l) : r
        })
      : (o = $({}, r, t)),
    $({}, i, { sx: o })
  )
}
const g5 = ['variant']
function ip(e) {
  return e.length === 0
}
function G0(e) {
  const { variant: t } = e,
    n = ke(e, g5)
  let r = t || ''
  return (
    Object.keys(n)
      .sort()
      .forEach(i => {
        i === 'color'
          ? (r += ip(r) ? e[i] : Fn(e[i]))
          : (r += `${ip(r) ? i : Fn(i)}${Fn(e[i].toString())}`)
      }),
    r
  )
}
const y5 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver']
function w5(e) {
  return Object.keys(e).length === 0
}
function x5(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96
}
const k5 = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  ja = e => {
    let t = 0
    const n = {}
    return (
      e &&
        e.forEach(r => {
          let i = ''
          typeof r.props == 'function'
            ? ((i = `callback${t}`), (t += 1))
            : (i = G0(r.props)),
            (n[i] = r.style)
        }),
      n
    )
  },
  S5 = (e, t) => {
    let n = []
    return (
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants),
      ja(n)
    )
  },
  Ma = (e, t, n) => {
    const { ownerState: r = {} } = e,
      i = []
    let o = 0
    return (
      n &&
        n.forEach(a => {
          let l = !0
          if (typeof a.props == 'function') {
            const s = $({}, e, r)
            l = a.props(s)
          } else
            Object.keys(a.props).forEach(s => {
              r[s] !== a.props[s] && e[s] !== a.props[s] && (l = !1)
            })
          l &&
            (typeof a.props == 'function'
              ? i.push(t[`callback${o}`])
              : i.push(t[G0(a.props)])),
            typeof a.props == 'function' && (o += 1)
        }),
      i
    )
  },
  b5 = (e, t, n, r) => {
    var i
    const o =
      n == null || (i = n.components) == null || (i = i[r]) == null ? void 0 : i.variants
    return Ma(e, t, o)
  }
function ta(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
const C5 = Jc(),
  E5 = e => e && e.charAt(0).toLowerCase() + e.slice(1)
function na({ defaultTheme: e, theme: t, themeId: n }) {
  return w5(t) ? e : t[n] || t
}
function P5(e) {
  return e ? (t, n) => n[e] : null
}
const op = ({ styledArg: e, props: t, defaultTheme: n, themeId: r }) => {
  const i = e($({}, t, { theme: na($({}, t, { defaultTheme: n, themeId: r })) }))
  let o
  if ((i && i.variants && ((o = i.variants), delete i.variants), o)) {
    const a = Ma(t, ja(o), o)
    return [i, ...a]
  }
  return i
}
function O5(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = C5,
      rootShouldForwardProp: r = ta,
      slotShouldForwardProp: i = ta
    } = e,
    o = a => qc($({}, a, { theme: na($({}, a, { defaultTheme: n, themeId: t })) }))
  return (
    (o.__mui_systemSx = !0),
    (a, l = {}) => {
      m3(a, w => w.filter(b => !(b != null && b.__mui_systemSx)))
      const {
          name: s,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: p = P5(E5(u))
        } = l,
        y = ke(l, y5),
        g = c !== void 0 ? c : (u && u !== 'Root' && u !== 'root') || !1,
        v = f || !1
      let k,
        m = ta
      u === 'Root' || u === 'root' ? (m = r) : u ? (m = i) : x5(a) && (m = void 0)
      const d = p3(a, $({ shouldForwardProp: m, label: k }, y)),
        h = (w, ...b) => {
          const E = b
            ? b.map(O => {
                if (typeof O == 'function' && O.__emotion_real !== O)
                  return D => op({ styledArg: O, props: D, defaultTheme: n, themeId: t })
                if (It(O)) {
                  let D = O,
                    Y
                  return (
                    O &&
                      O.variants &&
                      ((Y = O.variants),
                      delete D.variants,
                      (D = fe => {
                        let he = O
                        return (
                          Ma(fe, ja(Y), Y).forEach($e => {
                            he = xt(he, $e)
                          }),
                          he
                        )
                      })),
                    D
                  )
                }
                return O
              })
            : []
          let C = w
          if (It(w)) {
            let O
            w &&
              w.variants &&
              ((O = w.variants),
              delete C.variants,
              (C = D => {
                let Y = w
                return (
                  Ma(D, ja(O), O).forEach(he => {
                    Y = xt(Y, he)
                  }),
                  Y
                )
              }))
          } else
            typeof w == 'function' &&
              w.__emotion_real !== w &&
              (C = O => op({ styledArg: w, props: O, defaultTheme: n, themeId: t }))
          s &&
            p &&
            E.push(O => {
              const D = na($({}, O, { defaultTheme: n, themeId: t })),
                Y = k5(s, D)
              if (Y) {
                const fe = {}
                return (
                  Object.entries(Y).forEach(([he, Fe]) => {
                    fe[he] = typeof Fe == 'function' ? Fe($({}, O, { theme: D })) : Fe
                  }),
                  p(O, fe)
                )
              }
              return null
            }),
            s &&
              !g &&
              E.push(O => {
                const D = na($({}, O, { defaultTheme: n, themeId: t }))
                return b5(O, S5(s, D), D, s)
              }),
            v || E.push(o)
          const _ = E.length - b.length
          if (Array.isArray(w) && _ > 0) {
            const O = new Array(_).fill('')
            ;(C = [...w, ...O]), (C.raw = [...w.raw, ...O])
          }
          const j = d(C, ...E)
          return a.muiName && (j.muiName = a.muiName), j
        }
      return d.withConfig && (h.withConfig = d.withConfig), h
    }
  )
}
function T5(e) {
  const { theme: t, name: n, props: r } = e
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps
    ? r
    : T0(t.components[n].defaultProps, r)
}
function _5({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = p5(n)
  return r && (i = i[r] || i), T5({ theme: i, name: t, props: e })
}
function ef(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n)
}
function N5(e) {
  e = e.slice(1)
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g')
  let n = e.match(t)
  return (
    n && n[0].length === 1 && (n = n.map(r => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n
          .map((r, i) =>
            i < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(', ')})`
      : ''
  )
}
function Hn(e) {
  if (e.type) return e
  if (e.charAt(0) === '#') return Hn(N5(e))
  const t = e.indexOf('('),
    n = e.substring(0, t)
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1) throw new Error(zr(9, e))
  let r = e.substring(t + 1, e.length - 1),
    i
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(i) === -1)
    )
      throw new Error(zr(10, i))
  } else r = r.split(',')
  return (r = r.map(o => parseFloat(o))), { type: n, values: r, colorSpace: i }
}
function Ol(e) {
  const { type: t, colorSpace: n } = e
  let { values: r } = e
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1 ? (r = `${n} ${r.join(' ')}`) : (r = `${r.join(', ')}`),
    `${t}(${r})`
  )
}
function R5(e) {
  e = Hn(e)
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    a = (u, c = (u + n / 30) % 12) => i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1)
  let l = 'rgb'
  const s = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)]
  return e.type === 'hsla' && ((l += 'a'), s.push(t[3])), Ol({ type: l, values: s })
}
function ap(e) {
  e = Hn(e)
  let t = e.type === 'hsl' || e.type === 'hsla' ? Hn(R5(e)).values : e.values
  return (
    (t = t.map(
      n => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  )
}
function A5(e, t) {
  const n = ap(e),
    r = ap(t)
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
}
function lp(e, t) {
  return (
    (e = Hn(e)),
    (t = ef(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Ol(e)
  )
}
function $5(e, t) {
  if (((e = Hn(e)), (t = ef(t)), e.type.indexOf('hsl') !== -1)) e.values[2] *= 1 - t
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
  return Ol(e)
}
function j5(e, t) {
  if (((e = Hn(e)), (t = ef(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
  return Ol(e)
}
function M5(e, t) {
  return $(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 }
      }
    },
    t
  )
}
const I5 = { black: '#000', white: '#fff' },
  Vi = I5,
  L5 = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
  },
  z5 = L5,
  F5 = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  },
  er = F5,
  D5 = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  },
  tr = D5,
  U5 = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  },
  ni = U5,
  B5 = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  },
  nr = B5,
  V5 = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  },
  rr = V5,
  W5 = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  },
  ir = W5,
  H5 = ['mode', 'contrastThreshold', 'tonalOffset'],
  sp = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Vi.white, default: Vi.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  },
  fs = {
    text: {
      primary: Vi.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Vi.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  }
function up(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = j5(e.main, i))
      : t === 'dark' && (e.dark = $5(e.main, o)))
}
function Y5(e = 'light') {
  return e === 'dark'
    ? { main: nr[200], light: nr[50], dark: nr[400] }
    : { main: nr[700], light: nr[400], dark: nr[800] }
}
function K5(e = 'light') {
  return e === 'dark'
    ? { main: er[200], light: er[50], dark: er[400] }
    : { main: er[500], light: er[300], dark: er[700] }
}
function G5(e = 'light') {
  return e === 'dark'
    ? { main: tr[500], light: tr[300], dark: tr[700] }
    : { main: tr[700], light: tr[400], dark: tr[800] }
}
function Q5(e = 'light') {
  return e === 'dark'
    ? { main: rr[400], light: rr[300], dark: rr[700] }
    : { main: rr[700], light: rr[500], dark: rr[900] }
}
function X5(e = 'light') {
  return e === 'dark'
    ? { main: ir[400], light: ir[300], dark: ir[700] }
    : { main: ir[800], light: ir[500], dark: ir[900] }
}
function Z5(e = 'light') {
  return e === 'dark'
    ? { main: ni[400], light: ni[300], dark: ni[700] }
    : { main: '#ed6c02', light: ni[500], dark: ni[900] }
}
function q5(e) {
  const { mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2 } = e,
    i = ke(e, H5),
    o = e.primary || Y5(t),
    a = e.secondary || K5(t),
    l = e.error || G5(t),
    s = e.info || Q5(t),
    u = e.success || X5(t),
    c = e.warning || Z5(t)
  function f(v) {
    return A5(v, fs.text.primary) >= n ? fs.text.primary : sp.text.primary
  }
  const p = ({
      color: v,
      name: k,
      mainShade: m = 500,
      lightShade: d = 300,
      darkShade: h = 700
    }) => {
      if (((v = $({}, v)), !v.main && v[m] && (v.main = v[m]), !v.hasOwnProperty('main')))
        throw new Error(zr(11, k ? ` (${k})` : '', m))
      if (typeof v.main != 'string')
        throw new Error(zr(12, k ? ` (${k})` : '', JSON.stringify(v.main)))
      return (
        up(v, 'light', d, r),
        up(v, 'dark', h, r),
        v.contrastText || (v.contrastText = f(v.main)),
        v
      )
    },
    y = { dark: fs, light: sp }
  return xt(
    $(
      {
        common: $({}, Vi),
        mode: t,
        primary: p({ color: o, name: 'primary' }),
        secondary: p({
          color: a,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700'
        }),
        error: p({ color: l, name: 'error' }),
        warning: p({ color: c, name: 'warning' }),
        info: p({ color: s, name: 'info' }),
        success: p({ color: u, name: 'success' }),
        grey: z5,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: p,
        tonalOffset: r
      },
      y[t]
    ),
    i
  )
}
const J5 = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem'
]
function ex(e) {
  return Math.round(e * 1e5) / 1e5
}
const cp = { textTransform: 'uppercase' },
  fp = '"Roboto", "Helvetica", "Arial", sans-serif'
function tx(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = fp,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: s = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f
    } = n,
    p = ke(n, J5),
    y = i / 14,
    g = f || (m => `${(m / u) * y}rem`),
    v = (m, d, h, w, b) =>
      $(
        { fontFamily: r, fontWeight: m, fontSize: g(d), lineHeight: h },
        r === fp ? { letterSpacing: `${ex(w / d)}em` } : {},
        b,
        c
      ),
    k = {
      h1: v(o, 96, 1.167, -1.5),
      h2: v(o, 60, 1.2, -0.5),
      h3: v(a, 48, 1.167, 0),
      h4: v(a, 34, 1.235, 0.25),
      h5: v(a, 24, 1.334, 0),
      h6: v(l, 20, 1.6, 0.15),
      subtitle1: v(a, 16, 1.75, 0.15),
      subtitle2: v(l, 14, 1.57, 0.1),
      body1: v(a, 16, 1.5, 0.15),
      body2: v(a, 14, 1.43, 0.15),
      button: v(l, 14, 1.75, 0.4, cp),
      caption: v(a, 12, 1.66, 0.4),
      overline: v(a, 12, 2.66, 1, cp),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      }
    }
  return xt(
    $(
      {
        htmlFontSize: u,
        pxToRem: g,
        fontFamily: r,
        fontSize: i,
        fontWeightLight: o,
        fontWeightRegular: a,
        fontWeightMedium: l,
        fontWeightBold: s
      },
      k
    ),
    p,
    { clone: !1 }
  )
}
const nx = 0.2,
  rx = 0.14,
  ix = 0.12
function J(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${nx})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${rx})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ix})`
  ].join(',')
}
const ox = [
    'none',
    J(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    J(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    J(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    J(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    J(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    J(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    J(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    J(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    J(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    J(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    J(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    J(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    J(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    J(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    J(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    J(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    J(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    J(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    J(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    J(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    J(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    J(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    J(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    J(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ],
  ax = ox,
  lx = ['duration', 'easing', 'delay'],
  sx = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  ux = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  }
function dp(e) {
  return `${Math.round(e)}ms`
}
function cx(e) {
  if (!e) return 0
  const t = e / 36
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10)
}
function fx(e) {
  const t = $({}, sx, e.easing),
    n = $({}, ux, e.duration)
  return $(
    {
      getAutoHeightDuration: cx,
      create: (i = ['all'], o = {}) => {
        const { duration: a = n.standard, easing: l = t.easeInOut, delay: s = 0 } = o
        return (
          ke(o, lx),
          (Array.isArray(i) ? i : [i])
            .map(
              u =>
                `${u} ${typeof a == 'string' ? a : dp(a)} ${l} ${
                  typeof s == 'string' ? s : dp(s)
                }`
            )
            .join(',')
        )
      }
    },
    e,
    { easing: t, duration: n }
  )
}
const dx = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  px = dx,
  mx = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape'
  ]
function hx(e = {}, ...t) {
  const { mixins: n = {}, palette: r = {}, transitions: i = {}, typography: o = {} } = e,
    a = ke(e, mx)
  if (e.vars) throw new Error(zr(18))
  const l = q5(r),
    s = Jc(e)
  let u = xt(s, {
    mixins: M5(s.breakpoints, n),
    palette: l,
    shadows: ax.slice(),
    typography: tx(l, o),
    transitions: fx(i),
    zIndex: $({}, px)
  })
  return (
    (u = xt(u, a)),
    (u = t.reduce((c, f) => xt(c, f), u)),
    (u.unstable_sxConfig = $({}, Pl, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return qc({ sx: f, theme: this })
    }),
    u
  )
}
const vx = hx(),
  Q0 = vx,
  X0 = '$$material',
  gx = e => ta(e) && e !== 'classes',
  yx = O5({ themeId: X0, defaultTheme: Q0, rootShouldForwardProp: gx }),
  Rt = yx
function On({ props: e, name: t }) {
  return _5({ props: e, name: t, defaultTheme: Q0, themeId: X0 })
}
const wx = e => {
    let t
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    )
  },
  pp = wx
function xx(e) {
  return En('MuiPaper', e)
}
Pn('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24'
])
const kx = ['className', 'component', 'elevation', 'square', 'variant'],
  Sx = e => {
    const { square: t, elevation: n, variant: r, classes: i } = e,
      o = { root: ['root', r, !t && 'rounded', r === 'elevation' && `elevation${n}`] }
    return Xn(o, xx, i)
  },
  bx = Rt('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === 'elevation' && t[`elevation${n.elevation}`]
      ]
    }
  })(({ theme: e, ownerState: t }) => {
    var n
    return $(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create('box-shadow')
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === 'outlined' && {
        border: `1px solid ${(e.vars || e).palette.divider}`
      },
      t.variant === 'elevation' &&
        $(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === 'dark' && {
              backgroundImage: `linear-gradient(${lp('#fff', pp(t.elevation))}, ${lp(
                '#fff',
                pp(t.elevation)
              )})`
            },
          e.vars && {
            backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
          }
        )
    )
  }),
  Cx = x.forwardRef(function (t, n) {
    const r = On({ props: t, name: 'MuiPaper' }),
      {
        className: i,
        component: o = 'div',
        elevation: a = 1,
        square: l = !1,
        variant: s = 'elevation'
      } = r,
      u = ke(r, kx),
      c = $({}, r, { component: o, elevation: a, square: l, variant: s }),
      f = Sx(c)
    return S.jsx(bx, $({ as: o, ownerState: c, className: Ce(f.root, i), ref: n }, u))
  }),
  Ex = Cx
function Px(e) {
  return En('MuiCard', e)
}
Pn('MuiCard', ['root'])
const Ox = ['className', 'raised'],
  Tx = e => {
    const { classes: t } = e
    return Xn({ root: ['root'] }, Px, t)
  },
  _x = Rt(Ex, { name: 'MuiCard', slot: 'Root', overridesResolver: (e, t) => t.root })(
    () => ({ overflow: 'hidden' })
  ),
  Nx = x.forwardRef(function (t, n) {
    const r = On({ props: t, name: 'MuiCard' }),
      { className: i, raised: o = !1 } = r,
      a = ke(r, Ox),
      l = $({}, r, { raised: o }),
      s = Tx(l)
    return S.jsx(
      _x,
      $({ className: Ce(s.root, i), elevation: o ? 8 : void 0, ref: n, ownerState: l }, a)
    )
  }),
  Rx = Nx
function Ax(e) {
  return En('MuiCardContent', e)
}
Pn('MuiCardContent', ['root'])
const $x = ['className', 'component'],
  jx = e => {
    const { classes: t } = e
    return Xn({ root: ['root'] }, Ax, t)
  },
  Mx = Rt('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ padding: 16, '&:last-child': { paddingBottom: 24 } })),
  Ix = x.forwardRef(function (t, n) {
    const r = On({ props: t, name: 'MuiCardContent' }),
      { className: i, component: o = 'div' } = r,
      a = ke(r, $x),
      l = $({}, r, { component: o }),
      s = jx(l)
    return S.jsx(Mx, $({ as: o, className: Ce(s.root, i), ownerState: l, ref: n }, a))
  }),
  Lx = Ix
function zx(e) {
  return En('MuiCardMedia', e)
}
Pn('MuiCardMedia', ['root', 'media', 'img'])
const Fx = ['children', 'className', 'component', 'image', 'src', 'style'],
  Dx = e => {
    const { classes: t, isMediaComponent: n, isImageComponent: r } = e
    return Xn({ root: ['root', n && 'media', r && 'img'] }, zx, t)
  },
  Ux = Rt('div', {
    name: 'MuiCardMedia',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { isMediaComponent: r, isImageComponent: i } = n
      return [t.root, r && t.media, i && t.img]
    }
  })(({ ownerState: e }) =>
    $(
      {
        display: 'block',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      },
      e.isMediaComponent && { width: '100%' },
      e.isImageComponent && { objectFit: 'cover' }
    )
  ),
  Bx = ['video', 'audio', 'picture', 'iframe', 'img'],
  Vx = ['picture', 'img'],
  Wx = x.forwardRef(function (t, n) {
    const r = On({ props: t, name: 'MuiCardMedia' }),
      { children: i, className: o, component: a = 'div', image: l, src: s, style: u } = r,
      c = ke(r, Fx),
      f = Bx.indexOf(a) !== -1,
      p = !f && l ? $({ backgroundImage: `url("${l}")` }, u) : u,
      y = $({}, r, {
        component: a,
        isMediaComponent: f,
        isImageComponent: Vx.indexOf(a) !== -1
      }),
      g = Dx(y)
    return S.jsx(
      Ux,
      $(
        {
          className: Ce(g.root, o),
          as: a,
          role: !f && l ? 'img' : void 0,
          ref: n,
          style: p,
          ownerState: y,
          src: f ? l || s : void 0
        },
        c,
        { children: i }
      )
    )
  }),
  Hx = Wx
function Yx(e) {
  return En('MuiTypography', e)
}
Pn('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph'
])
const Kx = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping'
  ],
  Gx = e => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: i,
        variant: o,
        classes: a
      } = e,
      l = {
        root: [
          'root',
          o,
          e.align !== 'inherit' && `align${Fn(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          i && 'paragraph'
        ]
      }
    return Xn(l, Yx, a)
  },
  Qx = Rt('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${Fn(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph
      ]
    }
  })(({ theme: e, ownerState: t }) =>
    $(
      { margin: 0 },
      t.variant === 'inherit' && { font: 'inherit' },
      t.variant !== 'inherit' && e.typography[t.variant],
      t.align !== 'inherit' && { textAlign: t.align },
      t.noWrap && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
      t.gutterBottom && { marginBottom: '0.35em' },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  mp = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
  },
  Xx = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  },
  Zx = e => Xx[e] || e,
  qx = x.forwardRef(function (t, n) {
    const r = On({ props: t, name: 'MuiTypography' }),
      i = Zx(r.color),
      o = v5($({}, r, { color: i })),
      {
        align: a = 'inherit',
        className: l,
        component: s,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: p = 'body1',
        variantMapping: y = mp
      } = o,
      g = ke(o, Kx),
      v = $({}, o, {
        align: a,
        color: i,
        className: l,
        component: s,
        gutterBottom: u,
        noWrap: c,
        paragraph: f,
        variant: p,
        variantMapping: y
      }),
      k = s || (f ? 'p' : y[p] || mp[p]) || 'span',
      m = Gx(v)
    return S.jsx(Qx, $({ as: k, ref: n, ownerState: v, className: Ce(m.root, l) }, g))
  }),
  hp = qx
function ku(e, t) {
  return (
    (ku = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r
        }),
    ku(e, t)
  )
}
function Jx(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ku(e, t)
}
const vp = G.createContext(null)
function e4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function tf(e, t) {
  var n = function (o) {
      return t && x.isValidElement(o) ? t(o) : o
    },
    r = Object.create(null)
  return (
    e &&
      x.Children.map(e, function (i) {
        return i
      }).forEach(function (i) {
        r[i.key] = n(i)
      }),
    r
  )
}
function t4(e, t) {
  ;(e = e || {}), (t = t || {})
  function n(c) {
    return c in t ? t[c] : e[c]
  }
  var r = Object.create(null),
    i = []
  for (var o in e) o in t ? i.length && ((r[o] = i), (i = [])) : i.push(o)
  var a,
    l = {}
  for (var s in t) {
    if (r[s])
      for (a = 0; a < r[s].length; a++) {
        var u = r[s][a]
        l[r[s][a]] = n(u)
      }
    l[s] = n(s)
  }
  for (a = 0; a < i.length; a++) l[i[a]] = n(i[a])
  return l
}
function $n(e, t, n) {
  return n[t] != null ? n[t] : e.props[t]
}
function n4(e, t) {
  return tf(e.children, function (n) {
    return x.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: $n(n, 'appear', e),
      enter: $n(n, 'enter', e),
      exit: $n(n, 'exit', e)
    })
  })
}
function r4(e, t, n) {
  var r = tf(e.children),
    i = t4(t, r)
  return (
    Object.keys(i).forEach(function (o) {
      var a = i[o]
      if (x.isValidElement(a)) {
        var l = o in t,
          s = o in r,
          u = t[o],
          c = x.isValidElement(u) && !u.props.in
        s && (!l || c)
          ? (i[o] = x.cloneElement(a, {
              onExited: n.bind(null, a),
              in: !0,
              exit: $n(a, 'exit', e),
              enter: $n(a, 'enter', e)
            }))
          : !s && l && !c
          ? (i[o] = x.cloneElement(a, { in: !1 }))
          : s &&
            l &&
            x.isValidElement(u) &&
            (i[o] = x.cloneElement(a, {
              onExited: n.bind(null, a),
              in: u.props.in,
              exit: $n(a, 'exit', e),
              enter: $n(a, 'enter', e)
            }))
      }
    }),
    i
  )
}
var i4 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    },
  o4 = {
    component: 'div',
    childFactory: function (t) {
      return t
    }
  },
  nf = (function (e) {
    Jx(t, e)
    function t(r, i) {
      var o
      o = e.call(this, r, i) || this
      var a = o.handleExited.bind(e4(o))
      return (
        (o.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0
        }),
        o
      )
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        ;(this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } })
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1
      }),
      (t.getDerivedStateFromProps = function (i, o) {
        var a = o.children,
          l = o.handleExited,
          s = o.firstRender
        return { children: s ? n4(i, l) : r4(i, a, l), firstRender: !1 }
      }),
      (n.handleExited = function (i, o) {
        var a = tf(this.props.children)
        i.key in a ||
          (i.props.onExited && i.props.onExited(o),
          this.mounted &&
            this.setState(function (l) {
              var s = $({}, l.children)
              return delete s[i.key], { children: s }
            }))
      }),
      (n.render = function () {
        var i = this.props,
          o = i.component,
          a = i.childFactory,
          l = ke(i, ['component', 'childFactory']),
          s = this.state.contextValue,
          u = i4(this.state.children).map(a)
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          o === null
            ? G.createElement(vp.Provider, { value: s }, u)
            : G.createElement(vp.Provider, { value: s }, G.createElement(o, l, u))
        )
      }),
      t
    )
  })(G.Component)
nf.propTypes = {}
nf.defaultProps = o4
const a4 = nf
function l4(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: i,
      rippleY: o,
      rippleSize: a,
      in: l,
      onExited: s,
      timeout: u
    } = e,
    [c, f] = x.useState(!1),
    p = Ce(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    y = { width: a, height: a, top: -(a / 2) + o, left: -(a / 2) + i },
    g = Ce(n.child, c && n.childLeaving, r && n.childPulsate)
  return (
    !l && !c && f(!0),
    x.useEffect(() => {
      if (!l && s != null) {
        const v = setTimeout(s, u)
        return () => {
          clearTimeout(v)
        }
      }
    }, [s, l, u]),
    S.jsx('span', { className: p, style: y, children: S.jsx('span', { className: g }) })
  )
}
const s4 = Pn('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
  ]),
  rt = s4,
  u4 = ['center', 'classes', 'className']
let Tl = e => e,
  gp,
  yp,
  wp,
  xp
const Su = 550,
  c4 = 80,
  f4 = Kc(
    gp ||
      (gp = Tl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  d4 = Kc(
    yp ||
      (yp = Tl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  p4 = Kc(
    wp ||
      (wp = Tl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  m4 = Rt('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
  }),
  h4 = Rt(l4, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    xp ||
      (xp = Tl`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    rt.rippleVisible,
    f4,
    Su,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    rt.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    rt.child,
    rt.childLeaving,
    d4,
    Su,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    rt.childPulsate,
    p4,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  v4 = x.forwardRef(function (t, n) {
    const r = On({ props: t, name: 'MuiTouchRipple' }),
      { center: i = !1, classes: o = {}, className: a } = r,
      l = ke(r, u4),
      [s, u] = x.useState([]),
      c = x.useRef(0),
      f = x.useRef(null)
    x.useEffect(() => {
      f.current && (f.current(), (f.current = null))
    }, [s])
    const p = x.useRef(!1),
      y = x.useRef(0),
      g = x.useRef(null),
      v = x.useRef(null)
    x.useEffect(
      () => () => {
        y.current && clearTimeout(y.current)
      },
      []
    )
    const k = x.useCallback(
        w => {
          const { pulsate: b, rippleX: E, rippleY: C, rippleSize: _, cb: j } = w
          u(O => [
            ...O,
            S.jsx(
              h4,
              {
                classes: {
                  ripple: Ce(o.ripple, rt.ripple),
                  rippleVisible: Ce(o.rippleVisible, rt.rippleVisible),
                  ripplePulsate: Ce(o.ripplePulsate, rt.ripplePulsate),
                  child: Ce(o.child, rt.child),
                  childLeaving: Ce(o.childLeaving, rt.childLeaving),
                  childPulsate: Ce(o.childPulsate, rt.childPulsate)
                },
                timeout: Su,
                pulsate: b,
                rippleX: E,
                rippleY: C,
                rippleSize: _
              },
              c.current
            )
          ]),
            (c.current += 1),
            (f.current = j)
        },
        [o]
      ),
      m = x.useCallback(
        (w = {}, b = {}, E = () => {}) => {
          const { pulsate: C = !1, center: _ = i || b.pulsate, fakeElement: j = !1 } = b
          if ((w == null ? void 0 : w.type) === 'mousedown' && p.current) {
            p.current = !1
            return
          }
          ;(w == null ? void 0 : w.type) === 'touchstart' && (p.current = !0)
          const O = j ? null : v.current,
            D = O ? O.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 }
          let Y, fe, he
          if (
            _ ||
            w === void 0 ||
            (w.clientX === 0 && w.clientY === 0) ||
            (!w.clientX && !w.touches)
          )
            (Y = Math.round(D.width / 2)), (fe = Math.round(D.height / 2))
          else {
            const { clientX: Fe, clientY: $e } =
              w.touches && w.touches.length > 0 ? w.touches[0] : w
            ;(Y = Math.round(Fe - D.left)), (fe = Math.round($e - D.top))
          }
          if (_)
            (he = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3)),
              he % 2 === 0 && (he += 1)
          else {
            const Fe = Math.max(Math.abs((O ? O.clientWidth : 0) - Y), Y) * 2 + 2,
              $e = Math.max(Math.abs((O ? O.clientHeight : 0) - fe), fe) * 2 + 2
            he = Math.sqrt(Fe ** 2 + $e ** 2)
          }
          w != null && w.touches
            ? g.current === null &&
              ((g.current = () => {
                k({ pulsate: C, rippleX: Y, rippleY: fe, rippleSize: he, cb: E })
              }),
              (y.current = setTimeout(() => {
                g.current && (g.current(), (g.current = null))
              }, c4)))
            : k({ pulsate: C, rippleX: Y, rippleY: fe, rippleSize: he, cb: E })
        },
        [i, k]
      ),
      d = x.useCallback(() => {
        m({}, { pulsate: !0 })
      }, [m]),
      h = x.useCallback((w, b) => {
        if (
          (clearTimeout(y.current),
          (w == null ? void 0 : w.type) === 'touchend' && g.current)
        ) {
          g.current(),
            (g.current = null),
            (y.current = setTimeout(() => {
              h(w, b)
            }))
          return
        }
        ;(g.current = null), u(E => (E.length > 0 ? E.slice(1) : E)), (f.current = b)
      }, [])
    return (
      x.useImperativeHandle(n, () => ({ pulsate: d, start: m, stop: h }), [d, m, h]),
      S.jsx(
        m4,
        $({ className: Ce(rt.root, o.root, a), ref: v }, l, {
          children: S.jsx(a4, { component: null, exit: !0, children: s })
        })
      )
    )
  }),
  g4 = v4
function y4(e) {
  return En('MuiButtonBase', e)
}
const w4 = Pn('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  x4 = w4,
  k4 = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type'
  ],
  S4 = e => {
    const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: i } = e,
      a = Xn({ root: ['root', t && 'disabled', n && 'focusVisible'] }, y4, i)
    return n && r && (a.root += ` ${r}`), a
  },
  b4 = Rt('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${x4.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' }
  }),
  C4 = x.forwardRef(function (t, n) {
    const r = On({ props: t, name: 'MuiButtonBase' }),
      {
        action: i,
        centerRipple: o = !1,
        children: a,
        className: l,
        component: s = 'button',
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: f = !1,
        focusRipple: p = !1,
        LinkComponent: y = 'a',
        onBlur: g,
        onClick: v,
        onContextMenu: k,
        onDragLeave: m,
        onFocus: d,
        onFocusVisible: h,
        onKeyDown: w,
        onKeyUp: b,
        onMouseDown: E,
        onMouseLeave: C,
        onMouseUp: _,
        onTouchEnd: j,
        onTouchMove: O,
        onTouchStart: D,
        tabIndex: Y = 0,
        TouchRippleProps: fe,
        touchRippleRef: he,
        type: Fe
      } = r,
      $e = ke(r, k4),
      At = x.useRef(null),
      T = x.useRef(null),
      M = Hd(T, he),
      { isFocusVisibleRef: I, onFocus: te, onBlur: de, ref: Zn } = rw(),
      [je, Xt] = x.useState(!1)
    u && je && Xt(!1),
      x.useImperativeHandle(
        i,
        () => ({
          focusVisible: () => {
            Xt(!0), At.current.focus()
          }
        }),
        []
      )
    const [dt, qn] = x.useState(!1)
    x.useEffect(() => {
      qn(!0)
    }, [])
    const O1 = dt && !c && !u
    x.useEffect(() => {
      je && p && !c && dt && T.current.pulsate()
    }, [c, p, je, dt])
    function $t(L, yf, B1 = f) {
      return _o(wf => (yf && yf(wf), !B1 && T.current && T.current[L](wf), !0))
    }
    const T1 = $t('start', E),
      _1 = $t('stop', k),
      N1 = $t('stop', m),
      R1 = $t('stop', _),
      A1 = $t('stop', L => {
        je && L.preventDefault(), C && C(L)
      }),
      $1 = $t('start', D),
      j1 = $t('stop', j),
      M1 = $t('stop', O),
      I1 = $t(
        'stop',
        L => {
          de(L), I.current === !1 && Xt(!1), g && g(L)
        },
        !1
      ),
      L1 = _o(L => {
        At.current || (At.current = L.currentTarget),
          te(L),
          I.current === !0 && (Xt(!0), h && h(L)),
          d && d(L)
      }),
      $l = () => {
        const L = At.current
        return s && s !== 'button' && !(L.tagName === 'A' && L.href)
      },
      jl = x.useRef(!1),
      z1 = _o(L => {
        p &&
          !jl.current &&
          je &&
          T.current &&
          L.key === ' ' &&
          ((jl.current = !0),
          T.current.stop(L, () => {
            T.current.start(L)
          })),
          L.target === L.currentTarget && $l() && L.key === ' ' && L.preventDefault(),
          w && w(L),
          L.target === L.currentTarget &&
            $l() &&
            L.key === 'Enter' &&
            !u &&
            (L.preventDefault(), v && v(L))
      }),
      F1 = _o(L => {
        p &&
          L.key === ' ' &&
          T.current &&
          je &&
          !L.defaultPrevented &&
          ((jl.current = !1),
          T.current.stop(L, () => {
            T.current.pulsate(L)
          })),
          b && b(L),
          v &&
            L.target === L.currentTarget &&
            $l() &&
            L.key === ' ' &&
            !L.defaultPrevented &&
            v(L)
      })
    let so = s
    so === 'button' && ($e.href || $e.to) && (so = y)
    const Yr = {}
    so === 'button'
      ? ((Yr.type = Fe === void 0 ? 'button' : Fe), (Yr.disabled = u))
      : (!$e.href && !$e.to && (Yr.role = 'button'), u && (Yr['aria-disabled'] = u))
    const D1 = Hd(n, Zn, At),
      gf = $({}, r, {
        centerRipple: o,
        component: s,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: p,
        tabIndex: Y,
        focusVisible: je
      }),
      U1 = S4(gf)
    return S.jsxs(
      b4,
      $(
        {
          as: so,
          className: Ce(U1.root, l),
          ownerState: gf,
          onBlur: I1,
          onClick: v,
          onContextMenu: _1,
          onFocus: L1,
          onKeyDown: z1,
          onKeyUp: F1,
          onMouseDown: T1,
          onMouseLeave: A1,
          onMouseUp: R1,
          onDragLeave: N1,
          onTouchEnd: j1,
          onTouchMove: M1,
          onTouchStart: $1,
          ref: D1,
          tabIndex: u ? -1 : Y,
          type: Fe
        },
        Yr,
        $e,
        { children: [a, O1 ? S.jsx(g4, $({ ref: M, center: o }, fe)) : null] }
      )
    )
  }),
  E4 = C4
function P4(e) {
  return En('MuiCardActionArea', e)
}
const O4 = Pn('MuiCardActionArea', ['root', 'focusVisible', 'focusHighlight']),
  ds = O4,
  T4 = ['children', 'className', 'focusVisibleClassName'],
  _4 = e => {
    const { classes: t } = e
    return Xn({ root: ['root'], focusHighlight: ['focusHighlight'] }, P4, t)
  },
  N4 = Rt(E4, {
    name: 'MuiCardActionArea',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(({ theme: e }) => ({
    display: 'block',
    textAlign: 'inherit',
    borderRadius: 'inherit',
    width: '100%',
    [`&:hover .${ds.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.hoverOpacity,
      '@media (hover: none)': { opacity: 0 }
    },
    [`&.${ds.focusVisible} .${ds.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.focusOpacity
    }
  })),
  R4 = Rt('span', {
    name: 'MuiCardActionArea',
    slot: 'FocusHighlight',
    overridesResolver: (e, t) => t.focusHighlight
  })(({ theme: e }) => ({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    opacity: 0,
    backgroundColor: 'currentcolor',
    transition: e.transitions.create('opacity', {
      duration: e.transitions.duration.short
    })
  })),
  A4 = x.forwardRef(function (t, n) {
    const r = On({ props: t, name: 'MuiCardActionArea' }),
      { children: i, className: o, focusVisibleClassName: a } = r,
      l = ke(r, T4),
      s = r,
      u = _4(s)
    return S.jsxs(
      N4,
      $(
        {
          className: Ce(u.root, o),
          focusVisibleClassName: Ce(a, u.focusVisible),
          ref: n,
          ownerState: s
        },
        l,
        { children: [i, S.jsx(R4, { className: u.focusHighlight, ownerState: s })] }
      )
    )
  }),
  $4 = A4
function ps({ title: e, description: t, imageUrl: n, url: r }) {
  const i = () => {
    window.open(r, '_blank')
  }
  return S.jsx(Rx, {
    sx: { backgroundColor: 'transparent', color: 'white' },
    children: S.jsxs($4, {
      onClick: i,
      children: [
        S.jsx(Hx, { component: 'img', height: '140', image: n }),
        S.jsxs(Lx, {
          children: [
            S.jsx(hp, { gutterBottom: !0, variant: 'h5', component: 'div', children: e }),
            S.jsx(hp, { variant: 'body2', color: 'white', children: t })
          ]
        })
      ]
    })
  })
}
const j4 = './assets/firstproject-BXtYO2ec.jpeg',
  M4 = './assets/secondproject-_kmcLcwg.jpeg',
  I4 = './assets/finalproject-MZ9jlHal.jpeg',
  L4 = () =>
    S.jsxs('section', {
      className: 'design-section',
      children: [
        S.jsxs('div', {
          className: 'timeline',
          children: [
            S.jsx('div', { className: 'timeline-empty' }),
            S.jsx('div', {
              className: 'timeline-middle',
              children: S.jsx('div', { className: 'timeline-circle' })
            }),
            S.jsxs('div', {
              className: 'timeline-component timeline-content',
              children: [
                S.jsx('h3', { children: 'Ironhack (2023)' }),
                S.jsx('p', {
                  children:
                    'Full Stack Developer (HTML, CSS, JavaScript, MongoDB, Express.js, React.js, Node.js)'
                })
              ]
            }),
            S.jsxs('div', {
              className: 'timeline-component timeline-content',
              children: [
                S.jsx('h3', { children: 'British Council (2023)' }),
                S.jsx('p', { children: 'C1 Advanced (Aptis ESOL) ' })
              ]
            }),
            S.jsx('div', {
              className: 'timeline-middle',
              children: S.jsx('div', { className: 'timeline-circle' })
            }),
            S.jsx('div', { className: 'timeline-empty' }),
            S.jsx('div', { className: 'timeline-empty' }),
            S.jsx('div', {
              className: 'timeline-middle',
              children: S.jsx('div', { className: 'timeline-circle' })
            }),
            S.jsxs('div', {
              className: 'timeline-component timeline-content',
              children: [
                S.jsx('h3', { children: 'Antonio de Nebrija University (2016 - 2020)' }),
                S.jsx('p', {
                  children: "Bachelor's Degree in Bilingual Primary Education"
                })
              ]
            }),
            S.jsxs('div', {
              className: 'timeline-component timeline-content',
              children: [
                S.jsx('h3', { children: 'Rockbotic (2017 - 2018)' }),
                S.jsx('p', {
                  children:
                    'Primary school robotics teacher for children using Scratch and Arduino.'
                })
              ]
            }),
            S.jsx('div', {
              className: 'timeline-middle',
              children: S.jsx('div', { className: 'timeline-circle' })
            }),
            S.jsx('div', { className: 'timeline-empty' }),
            S.jsx('div', { className: 'timeline-empty' }),
            S.jsx('div', {
              className: 'timeline-middle',
              children: S.jsx('div', { className: 'timeline-circle' })
            }),
            S.jsxs('div', {
              className: 'timeline-component timeline-content',
              children: [
                S.jsx('h3', { children: 'ECAM (2014 - 2016)' }),
                S.jsx('p', { children: 'Diploma in Cinematography.' })
              ]
            })
          ]
        }),
        S.jsx('div', {
          className: 'timeline-middle',
          children: S.jsx('div', { className: 'timeline-circle' })
        })
      ]
    })
function kp(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? kp(Object(n), !0).forEach(function (r) {
          ye(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : kp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Ia(e) {
  '@babel/helpers - typeof'
  return (
    (Ia =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Ia(e)
  )
}
function z4(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Sp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function F4(e, t, n) {
  return (
    t && Sp(e.prototype, t),
    n && Sp(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
function ye(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function rf(e, t) {
  return U4(e) || V4(e, t) || Z0(e, t) || H4()
}
function io(e) {
  return D4(e) || B4(e) || Z0(e) || W4()
}
function D4(e) {
  if (Array.isArray(e)) return bu(e)
}
function U4(e) {
  if (Array.isArray(e)) return e
}
function B4(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e)
}
function V4(e, t) {
  var n =
    e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      l
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (s) {
      ;(o = !0), (l = s)
    } finally {
      try {
        !i && n.return != null && n.return()
      } finally {
        if (o) throw l
      }
    }
    return r
  }
}
function Z0(e, t) {
  if (e) {
    if (typeof e == 'string') return bu(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bu(e, t)
  }
}
function bu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function W4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function H4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var bp = function () {},
  of = {},
  q0 = {},
  J0 = null,
  e1 = { mark: bp, measure: bp }
try {
  typeof window < 'u' && (of = window),
    typeof document < 'u' && (q0 = document),
    typeof MutationObserver < 'u' && (J0 = MutationObserver),
    typeof performance < 'u' && (e1 = performance)
} catch {}
var Y4 = of.navigator || {},
  Cp = Y4.userAgent,
  Ep = Cp === void 0 ? '' : Cp,
  wn = of,
  q = q0,
  Pp = J0,
  Ro = e1
wn.document
var Qt =
    !!q.documentElement &&
    !!q.head &&
    typeof q.addEventListener == 'function' &&
    typeof q.createElement == 'function',
  t1 = ~Ep.indexOf('MSIE') || ~Ep.indexOf('Trident/'),
  Ao,
  $o,
  jo,
  Mo,
  Io,
  Ht = '___FONT_AWESOME___',
  Cu = 16,
  n1 = 'fa',
  r1 = 'svg-inline--fa',
  Yn = 'data-fa-i2svg',
  Eu = 'data-fa-pseudo-element',
  K4 = 'data-fa-pseudo-element-pending',
  af = 'data-prefix',
  lf = 'data-icon',
  Op = 'fontawesome-i2svg',
  G4 = 'async',
  Q4 = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  i1 = (function () {
    try {
      return !0
    } catch {
      return !1
    }
  })(),
  X = 'classic',
  se = 'sharp',
  sf = [X, se]
function oo(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[X]
    }
  })
}
var Wi = oo(
    ((Ao = {}),
    ye(Ao, X, {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
      fak: 'kit',
      fakd: 'kit',
      'fa-kit': 'kit',
      'fa-kit-duotone': 'kit'
    }),
    ye(Ao, se, {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin'
    }),
    Ao)
  ),
  Hi = oo(
    (($o = {}),
    ye($o, X, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak'
    }),
    ye($o, se, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    $o)
  ),
  Yi = oo(
    ((jo = {}),
    ye(jo, X, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin'
    }),
    ye(jo, se, {
      fass: 'fa-solid',
      fasr: 'fa-regular',
      fasl: 'fa-light',
      fast: 'fa-thin'
    }),
    jo)
  ),
  X4 = oo(
    ((Mo = {}),
    ye(Mo, X, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat'
    }),
    ye(Mo, se, {
      'fa-solid': 'fass',
      'fa-regular': 'fasr',
      'fa-light': 'fasl',
      'fa-thin': 'fast'
    }),
    Mo)
  ),
  Z4 = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  o1 = 'fa-layers-text',
  q4 =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  J4 = oo(
    ((Io = {}),
    ye(Io, X, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    ye(Io, se, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    Io)
  ),
  a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ek = a1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  tk = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  jn = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  },
  Ki = new Set()
Object.keys(Hi[X]).map(Ki.add.bind(Ki))
Object.keys(Hi[se]).map(Ki.add.bind(Ki))
var nk = []
    .concat(sf, io(Ki), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      jn.GROUP,
      jn.SWAP_OPACITY,
      jn.PRIMARY,
      jn.SECONDARY
    ])
    .concat(
      a1.map(function (e) {
        return ''.concat(e, 'x')
      })
    )
    .concat(
      ek.map(function (e) {
        return 'w-'.concat(e)
      })
    ),
  wi = wn.FontAwesomeConfig || {}
function rk(e) {
  var t = q.querySelector('script[' + e + ']')
  if (t) return t.getAttribute(e)
}
function ik(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e
}
if (q && typeof q.querySelector == 'function') {
  var ok = [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons']
  ]
  ok.forEach(function (e) {
    var t = rf(e, 2),
      n = t[0],
      r = t[1],
      i = ik(rk(n))
    i != null && (wi[r] = i)
  })
}
var l1 = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: n1,
  replacementClass: r1,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
}
wi.familyPrefix && (wi.cssPrefix = wi.familyPrefix)
var Dr = N(N({}, l1), wi)
Dr.autoReplaceSvg || (Dr.observeMutations = !1)
var A = {}
Object.keys(l1).forEach(function (e) {
  Object.defineProperty(A, e, {
    enumerable: !0,
    set: function (n) {
      ;(Dr[e] = n),
        xi.forEach(function (r) {
          return r(A)
        })
    },
    get: function () {
      return Dr[e]
    }
  })
})
Object.defineProperty(A, 'familyPrefix', {
  enumerable: !0,
  set: function (t) {
    ;(Dr.cssPrefix = t),
      xi.forEach(function (n) {
        return n(A)
      })
  },
  get: function () {
    return Dr.cssPrefix
  }
})
wn.FontAwesomeConfig = A
var xi = []
function ak(e) {
  return (
    xi.push(e),
    function () {
      xi.splice(xi.indexOf(e), 1)
    }
  )
}
var qt = Cu,
  Ot = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 }
function lk(e) {
  if (!(!e || !Qt)) {
    var t = q.createElement('style')
    t.setAttribute('type', 'text/css'), (t.innerHTML = e)
    for (var n = q.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var o = n[i],
        a = (o.tagName || '').toUpperCase()
      ;['STYLE', 'LINK'].indexOf(a) > -1 && (r = o)
    }
    return q.head.insertBefore(t, r), e
  }
}
var sk = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function Gi() {
  for (var e = 12, t = ''; e-- > 0; ) t += sk[(Math.random() * 62) | 0]
  return t
}
function Hr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n]
  return t
}
function uf(e) {
  return e.classList
    ? Hr(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t
      })
}
function s1(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
function uk(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(s1(e[n]), '" ')
    }, '')
    .trim()
}
function _l(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';')
  }, '')
}
function cf(e) {
  return (
    e.size !== Ot.size ||
    e.x !== Ot.x ||
    e.y !== Ot.y ||
    e.rotate !== Ot.rotate ||
    e.flipX ||
    e.flipY
  )
}
function ck(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: 'translate('.concat(n / 2, ' 256)') },
    o = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    a = 'scale('
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    l = 'rotate('.concat(t.rotate, ' 0 0)'),
    s = { transform: ''.concat(o, ' ').concat(a, ' ').concat(l) },
    u = { transform: 'translate('.concat((r / 2) * -1, ' -256)') }
  return { outer: i, inner: s, path: u }
}
function fk(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Cu : n,
    i = e.height,
    o = i === void 0 ? Cu : i,
    a = e.startCentered,
    l = a === void 0 ? !1 : a,
    s = ''
  return (
    l && t1
      ? (s += 'translate('
          .concat(t.x / qt - r / 2, 'em, ')
          .concat(t.y / qt - o / 2, 'em) '))
      : l
      ? (s += 'translate(calc(-50% + '
          .concat(t.x / qt, 'em), calc(-50% + ')
          .concat(t.y / qt, 'em)) '))
      : (s += 'translate('.concat(t.x / qt, 'em, ').concat(t.y / qt, 'em) ')),
    (s += 'scale('
      .concat((t.size / qt) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / qt) * (t.flipY ? -1 : 1), ') ')),
    (s += 'rotate('.concat(t.rotate, 'deg) ')),
    s
  )
}
var dk = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`
function u1() {
  var e = n1,
    t = r1,
    n = A.cssPrefix,
    r = A.replacementClass,
    i = dk
  if (n !== e || r !== t) {
    var o = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      a = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      l = new RegExp('\\.'.concat(t), 'g')
    i = i
      .replace(o, '.'.concat(n, '-'))
      .replace(a, '--'.concat(n, '-'))
      .replace(l, '.'.concat(r))
  }
  return i
}
var Tp = !1
function ms() {
  A.autoAddCss && !Tp && (lk(u1()), (Tp = !0))
}
var pk = {
    mixout: function () {
      return { dom: { css: u1, insertCss: ms } }
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          ms()
        },
        beforeI2svg: function () {
          ms()
        }
      }
    }
  },
  Yt = wn || {}
Yt[Ht] || (Yt[Ht] = {})
Yt[Ht].styles || (Yt[Ht].styles = {})
Yt[Ht].hooks || (Yt[Ht].hooks = {})
Yt[Ht].shims || (Yt[Ht].shims = [])
var gt = Yt[Ht],
  c1 = [],
  mk = function e() {
    q.removeEventListener('DOMContentLoaded', e),
      (La = 1),
      c1.map(function (t) {
        return t()
      })
  },
  La = !1
Qt &&
  ((La = (q.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    q.readyState
  )),
  La || q.addEventListener('DOMContentLoaded', mk))
function hk(e) {
  Qt && (La ? setTimeout(e, 0) : c1.push(e))
}
function ao(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    o = i === void 0 ? [] : i
  return typeof e == 'string'
    ? s1(e)
    : '<'
        .concat(t, ' ')
        .concat(uk(r), '>')
        .concat(o.map(ao).join(''), '</')
        .concat(t, '>')
}
function _p(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] }
}
var vk = function (t, n) {
    return function (r, i, o, a) {
      return t.call(n, r, i, o, a)
    }
  },
  hs = function (t, n, r, i) {
    var o = Object.keys(t),
      a = o.length,
      l = i !== void 0 ? vk(n, i) : n,
      s,
      u,
      c
    for (r === void 0 ? ((s = 1), (c = t[o[0]])) : ((s = 0), (c = r)); s < a; s++)
      (u = o[s]), (c = l(c, t[u], u, t))
    return c
  }
function gk(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++)
    if (i >= 55296 && i <= 56319 && n < r) {
      var o = e.charCodeAt(n++)
      ;(o & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (o & 1023) + 65536)
        : (t.push(i), n--)
    } else t.push(i)
  }
  return t
}
function Pu(e) {
  var t = gk(e)
  return t.length === 1 ? t[0].toString(16) : null
}
function yk(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r
}
function Np(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t
  }, {})
}
function Ou(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    o = Np(t)
  typeof gt.hooks.addPack == 'function' && !i
    ? gt.hooks.addPack(e, Np(t))
    : (gt.styles[e] = N(N({}, gt.styles[e] || {}), o)),
    e === 'fas' && Ou('fa', t)
}
var Lo,
  zo,
  Fo,
  yr = gt.styles,
  wk = gt.shims,
  xk =
    ((Lo = {}), ye(Lo, X, Object.values(Yi[X])), ye(Lo, se, Object.values(Yi[se])), Lo),
  ff = null,
  f1 = {},
  d1 = {},
  p1 = {},
  m1 = {},
  h1 = {},
  kk = ((zo = {}), ye(zo, X, Object.keys(Wi[X])), ye(zo, se, Object.keys(Wi[se])), zo)
function Sk(e) {
  return ~nk.indexOf(e)
}
function bk(e, t) {
  var n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-')
  return r === e && i !== '' && !Sk(i) ? i : null
}
var v1 = function () {
  var t = function (o) {
    return hs(
      yr,
      function (a, l, s) {
        return (a[s] = hs(l, o, {})), a
      },
      {}
    )
  }
  ;(f1 = t(function (i, o, a) {
    if ((o[3] && (i[o[3]] = a), o[2])) {
      var l = o[2].filter(function (s) {
        return typeof s == 'number'
      })
      l.forEach(function (s) {
        i[s.toString(16)] = a
      })
    }
    return i
  })),
    (d1 = t(function (i, o, a) {
      if (((i[a] = a), o[2])) {
        var l = o[2].filter(function (s) {
          return typeof s == 'string'
        })
        l.forEach(function (s) {
          i[s] = a
        })
      }
      return i
    })),
    (h1 = t(function (i, o, a) {
      var l = o[2]
      return (
        (i[a] = a),
        l.forEach(function (s) {
          i[s] = a
        }),
        i
      )
    }))
  var n = 'far' in yr || A.autoFetchSvg,
    r = hs(
      wk,
      function (i, o) {
        var a = o[0],
          l = o[1],
          s = o[2]
        return (
          l === 'far' && !n && (l = 'fas'),
          typeof a == 'string' && (i.names[a] = { prefix: l, iconName: s }),
          typeof a == 'number' &&
            (i.unicodes[a.toString(16)] = { prefix: l, iconName: s }),
          i
        )
      },
      { names: {}, unicodes: {} }
    )
  ;(p1 = r.names),
    (m1 = r.unicodes),
    (ff = Nl(A.styleDefault, { family: A.familyDefault }))
}
ak(function (e) {
  ff = Nl(e.styleDefault, { family: A.familyDefault })
})
v1()
function df(e, t) {
  return (f1[e] || {})[t]
}
function Ck(e, t) {
  return (d1[e] || {})[t]
}
function Mn(e, t) {
  return (h1[e] || {})[t]
}
function g1(e) {
  return p1[e] || { prefix: null, iconName: null }
}
function Ek(e) {
  var t = m1[e],
    n = df('fas', e)
  return (
    t || (n ? { prefix: 'fas', iconName: n } : null) || { prefix: null, iconName: null }
  )
}
function xn() {
  return ff
}
var pf = function () {
  return { prefix: null, iconName: null, rest: [] }
}
function Nl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? X : n,
    i = Wi[r][e],
    o = Hi[r][e] || Hi[r][i],
    a = e in gt.styles ? e : null
  return o || a || null
}
var Rp = ((Fo = {}), ye(Fo, X, Object.keys(Yi[X])), ye(Fo, se, Object.keys(Yi[se])), Fo)
function Rl(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    o =
      ((t = {}),
      ye(t, X, ''.concat(A.cssPrefix, '-').concat(X)),
      ye(t, se, ''.concat(A.cssPrefix, '-').concat(se)),
      t),
    a = null,
    l = X
  ;(e.includes(o[X]) ||
    e.some(function (u) {
      return Rp[X].includes(u)
    })) &&
    (l = X),
    (e.includes(o[se]) ||
      e.some(function (u) {
        return Rp[se].includes(u)
      })) &&
      (l = se)
  var s = e.reduce(function (u, c) {
    var f = bk(A.cssPrefix, c)
    if (
      (yr[c]
        ? ((c = xk[l].includes(c) ? X4[l][c] : c), (a = c), (u.prefix = c))
        : kk[l].indexOf(c) > -1
        ? ((a = c), (u.prefix = Nl(c, { family: l })))
        : f
        ? (u.iconName = f)
        : c !== A.replacementClass && c !== o[X] && c !== o[se] && u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var p = a === 'fa' ? g1(u.iconName) : {},
        y = Mn(u.prefix, u.iconName)
      p.prefix && (a = null),
        (u.iconName = p.iconName || y || u.iconName),
        (u.prefix = p.prefix || u.prefix),
        u.prefix === 'far' && !yr.far && yr.fas && !A.autoFetchSvg && (u.prefix = 'fas')
    }
    return u
  }, pf())
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (s.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (s.prefix = 'fad'),
    !s.prefix &&
      l === se &&
      (yr.fass || A.autoFetchSvg) &&
      ((s.prefix = 'fass'), (s.iconName = Mn(s.prefix, s.iconName) || s.iconName)),
    (s.prefix === 'fa' || a === 'fa') && (s.prefix = xn() || 'fas'),
    s
  )
}
var Pk = (function () {
    function e() {
      z4(this, e), (this.definitions = {})
    }
    return (
      F4(e, [
        {
          key: 'add',
          value: function () {
            for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o]
            var a = i.reduce(this._pullDefinitions, {})
            Object.keys(a).forEach(function (l) {
              ;(n.definitions[l] = N(N({}, n.definitions[l] || {}), a[l])), Ou(l, a[l])
              var s = Yi[X][l]
              s && Ou(s, a[l]), v1()
            })
          }
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {}
          }
        },
        {
          key: '_pullDefinitions',
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r
            return (
              Object.keys(i).map(function (o) {
                var a = i[o],
                  l = a.prefix,
                  s = a.iconName,
                  u = a.icon,
                  c = u[2]
                n[l] || (n[l] = {}),
                  c.length > 0 &&
                    c.forEach(function (f) {
                      typeof f == 'string' && (n[l][f] = u)
                    }),
                  (n[l][s] = u)
              }),
              n
            )
          }
        }
      ]),
      e
    )
  })(),
  Ap = [],
  wr = {},
  Nr = {},
  Ok = Object.keys(Nr)
function Tk(e, t) {
  var n = t.mixoutsTo
  return (
    (Ap = e),
    (wr = {}),
    Object.keys(Nr).forEach(function (r) {
      Ok.indexOf(r) === -1 && delete Nr[r]
    }),
    Ap.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {}
      if (
        (Object.keys(i).forEach(function (a) {
          typeof i[a] == 'function' && (n[a] = i[a]),
            Ia(i[a]) === 'object' &&
              Object.keys(i[a]).forEach(function (l) {
                n[a] || (n[a] = {}), (n[a][l] = i[a][l])
              })
        }),
        r.hooks)
      ) {
        var o = r.hooks()
        Object.keys(o).forEach(function (a) {
          wr[a] || (wr[a] = []), wr[a].push(o[a])
        })
      }
      r.provides && r.provides(Nr)
    }),
    n
  )
}
function Tu(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i]
  var o = wr[e] || []
  return (
    o.forEach(function (a) {
      t = a.apply(null, [t].concat(r))
    }),
    t
  )
}
function Kn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r]
  var i = wr[e] || []
  i.forEach(function (o) {
    o.apply(null, n)
  })
}
function Kt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1)
  return Nr[e] ? Nr[e].apply(null, t) : void 0
}
function _u(e) {
  e.prefix === 'fa' && (e.prefix = 'fas')
  var t = e.iconName,
    n = e.prefix || xn()
  if (t) return (t = Mn(n, t) || t), _p(y1.definitions, n, t) || _p(gt.styles, n, t)
}
var y1 = new Pk(),
  _k = function () {
    ;(A.autoReplaceSvg = !1), (A.observeMutations = !1), Kn('noAuto')
  },
  Nk = {
    i2svg: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      return Qt
        ? (Kn('beforeI2svg', t), Kt('pseudoElements2svg', t), Kt('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.')
    },
    watch: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot
      A.autoReplaceSvg === !1 && (A.autoReplaceSvg = !0),
        (A.observeMutations = !0),
        hk(function () {
          Ak({ autoReplaceSvgRoot: n }), Kn('watch', t)
        })
    }
  },
  Rk = {
    icon: function (t) {
      if (t === null) return null
      if (Ia(t) === 'object' && t.prefix && t.iconName)
        return { prefix: t.prefix, iconName: Mn(t.prefix, t.iconName) || t.iconName }
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = Nl(t[0])
        return { prefix: r, iconName: Mn(r, n) || n }
      }
      if (
        typeof t == 'string' &&
        (t.indexOf(''.concat(A.cssPrefix, '-')) > -1 || t.match(Z4))
      ) {
        var i = Rl(t.split(' '), { skipLookups: !0 })
        return {
          prefix: i.prefix || xn(),
          iconName: Mn(i.prefix, i.iconName) || i.iconName
        }
      }
      if (typeof t == 'string') {
        var o = xn()
        return { prefix: o, iconName: Mn(o, t) || t }
      }
    }
  },
  nt = {
    noAuto: _k,
    config: A,
    dom: Nk,
    parse: Rk,
    library: y1,
    findIconDefinition: _u,
    toHtml: ao
  },
  Ak = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? q : n
    ;(Object.keys(gt.styles).length > 0 || A.autoFetchSvg) &&
      Qt &&
      A.autoReplaceSvg &&
      nt.dom.i2svg({ node: r })
  }
function Al(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return ao(r)
        })
      }
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (Qt) {
          var r = q.createElement('div')
          return (r.innerHTML = e.html), r.children
        }
      }
    }),
    e
  )
}
function $k(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    o = e.styles,
    a = e.transform
  if (cf(a) && n.found && !r.found) {
    var l = n.width,
      s = n.height,
      u = { x: l / s / 2, y: 0.5 }
    i.style = _l(
      N(
        N({}, o),
        {},
        {
          'transform-origin': ''
            .concat(u.x + a.x / 16, 'em ')
            .concat(u.y + a.y / 16, 'em')
        }
      )
    )
  }
  return [{ tag: 'svg', attributes: i, children: t }]
}
function jk(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    o = e.symbol,
    a = o === !0 ? ''.concat(t, '-').concat(A.cssPrefix, '-').concat(n) : o
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: N(N({}, i), {}, { id: a }), children: r }]
    }
  ]
}
function mf(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    o = e.iconName,
    a = e.transform,
    l = e.symbol,
    s = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    p = e.watchable,
    y = p === void 0 ? !1 : p,
    g = r.found ? r : n,
    v = g.width,
    k = g.height,
    m = i === 'fak',
    d = [A.replacementClass, o ? ''.concat(A.cssPrefix, '-').concat(o) : '']
      .filter(function (j) {
        return f.classes.indexOf(j) === -1
      })
      .filter(function (j) {
        return j !== '' || !!j
      })
      .concat(f.classes)
      .join(' '),
    h = {
      children: [],
      attributes: N(
        N({}, f.attributes),
        {},
        {
          'data-prefix': i,
          'data-icon': o,
          class: d,
          role: f.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(v, ' ').concat(k)
        }
      )
    },
    w =
      m && !~f.classes.indexOf('fa-fw')
        ? { width: ''.concat((v / k) * 16 * 0.0625, 'em') }
        : {}
  y && (h.attributes[Yn] = ''),
    s &&
      (h.children.push({
        tag: 'title',
        attributes: { id: h.attributes['aria-labelledby'] || 'title-'.concat(c || Gi()) },
        children: [s]
      }),
      delete h.attributes.title)
  var b = N(
      N({}, h),
      {},
      {
        prefix: i,
        iconName: o,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: l,
        styles: N(N({}, w), f.styles)
      }
    ),
    E =
      r.found && n.found
        ? Kt('generateAbstractMask', b) || { children: [], attributes: {} }
        : Kt('generateAbstractIcon', b) || { children: [], attributes: {} },
    C = E.children,
    _ = E.attributes
  return (b.children = C), (b.attributes = _), l ? jk(b) : $k(b)
}
function $p(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    o = e.title,
    a = e.extra,
    l = e.watchable,
    s = l === void 0 ? !1 : l,
    u = N(
      N(N({}, a.attributes), o ? { title: o } : {}),
      {},
      { class: a.classes.join(' ') }
    )
  s && (u[Yn] = '')
  var c = N({}, a.styles)
  cf(i) &&
    ((c.transform = fk({ transform: i, startCentered: !0, width: n, height: r })),
    (c['-webkit-transform'] = c.transform))
  var f = _l(c)
  f.length > 0 && (u.style = f)
  var p = []
  return (
    p.push({ tag: 'span', attributes: u, children: [t] }),
    o && p.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
    p
  )
}
function Mk(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = N(
      N(N({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(' ') }
    ),
    o = _l(r.styles)
  o.length > 0 && (i.style = o)
  var a = []
  return (
    a.push({ tag: 'span', attributes: i, children: [t] }),
    n && a.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    a
  )
}
var vs = gt.styles
function Nu(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = rf(r, 1),
    o = i[0],
    a = null
  return (
    Array.isArray(o)
      ? (a = {
          tag: 'g',
          attributes: { class: ''.concat(A.cssPrefix, '-').concat(jn.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(A.cssPrefix, '-').concat(jn.SECONDARY),
                fill: 'currentColor',
                d: o[0]
              }
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(A.cssPrefix, '-').concat(jn.PRIMARY),
                fill: 'currentColor',
                d: o[1]
              }
            }
          ]
        })
      : (a = { tag: 'path', attributes: { fill: 'currentColor', d: o } }),
    { found: !0, width: t, height: n, icon: a }
  )
}
var Ik = { found: !1, width: 512, height: 512 }
function Lk(e, t) {
  !i1 &&
    !A.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    )
}
function Ru(e, t) {
  var n = t
  return (
    t === 'fa' && A.styleDefault !== null && (t = xn()),
    new Promise(function (r, i) {
      if ((Kt('missingIconAbstract'), n === 'fa')) {
        var o = g1(e) || {}
        ;(e = o.iconName || e), (t = o.prefix || t)
      }
      if (e && t && vs[t] && vs[t][e]) {
        var a = vs[t][e]
        return r(Nu(a))
      }
      Lk(e, t),
        r(
          N(
            N({}, Ik),
            {},
            { icon: A.showMissingIcons && e ? Kt('missingIconAbstract') || {} : {} }
          )
        )
    })
  )
}
var jp = function () {},
  Au =
    A.measurePerformance && Ro && Ro.mark && Ro.measure ? Ro : { mark: jp, measure: jp },
  li = 'FA "6.5.1"',
  zk = function (t) {
    return (
      Au.mark(''.concat(li, ' ').concat(t, ' begins')),
      function () {
        return w1(t)
      }
    )
  },
  w1 = function (t) {
    Au.mark(''.concat(li, ' ').concat(t, ' ends')),
      Au.measure(
        ''.concat(li, ' ').concat(t),
        ''.concat(li, ' ').concat(t, ' begins'),
        ''.concat(li, ' ').concat(t, ' ends')
      )
  },
  hf = { begin: zk, end: w1 },
  ra = function () {}
function Mp(e) {
  var t = e.getAttribute ? e.getAttribute(Yn) : null
  return typeof t == 'string'
}
function Fk(e) {
  var t = e.getAttribute ? e.getAttribute(af) : null,
    n = e.getAttribute ? e.getAttribute(lf) : null
  return t && n
}
function Dk(e) {
  return (
    e && e.classList && e.classList.contains && e.classList.contains(A.replacementClass)
  )
}
function Uk() {
  if (A.autoReplaceSvg === !0) return ia.replace
  var e = ia[A.autoReplaceSvg]
  return e || ia.replace
}
function Bk(e) {
  return q.createElementNS('http://www.w3.org/2000/svg', e)
}
function Vk(e) {
  return q.createElement(e)
}
function x1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? Bk : Vk) : n
  if (typeof e == 'string') return q.createTextNode(e)
  var i = r(e.tag)
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a])
  })
  var o = e.children || []
  return (
    o.forEach(function (a) {
      i.appendChild(x1(a, { ceFn: r }))
    }),
    i
  )
}
function Wk(e) {
  var t = ' '.concat(e.outerHTML, ' ')
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t
}
var ia = {
  replace: function (t) {
    var n = t[0]
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(x1(i), n)
        }),
        n.getAttribute(Yn) === null && A.keepOriginalSource)
      ) {
        var r = q.createComment(Wk(n))
        n.parentNode.replaceChild(r, n)
      } else n.remove()
  },
  nest: function (t) {
    var n = t[0],
      r = t[1]
    if (~uf(n).indexOf(A.replacementClass)) return ia.replace(t)
    var i = new RegExp(''.concat(A.cssPrefix, '-.*'))
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var o = r[0].attributes.class.split(' ').reduce(
        function (l, s) {
          return (
            s === A.replacementClass || s.match(i) ? l.toSvg.push(s) : l.toNode.push(s), l
          )
        },
        { toNode: [], toSvg: [] }
      )
      ;(r[0].attributes.class = o.toSvg.join(' ')),
        o.toNode.length === 0
          ? n.removeAttribute('class')
          : n.setAttribute('class', o.toNode.join(' '))
    }
    var a = r.map(function (l) {
      return ao(l)
    }).join(`
`)
    n.setAttribute(Yn, ''), (n.innerHTML = a)
  }
}
function Ip(e) {
  e()
}
function k1(e, t) {
  var n = typeof t == 'function' ? t : ra
  if (e.length === 0) n()
  else {
    var r = Ip
    A.mutateApproach === G4 && (r = wn.requestAnimationFrame || Ip),
      r(function () {
        var i = Uk(),
          o = hf.begin('mutate')
        e.map(i), o(), n()
      })
  }
}
var vf = !1
function S1() {
  vf = !0
}
function $u() {
  vf = !1
}
var za = null
function Lp(e) {
  if (Pp && A.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? ra : t,
      r = e.nodeCallback,
      i = r === void 0 ? ra : r,
      o = e.pseudoElementsCallback,
      a = o === void 0 ? ra : o,
      l = e.observeMutationsRoot,
      s = l === void 0 ? q : l
    ;(za = new Pp(function (u) {
      if (!vf) {
        var c = xn()
        Hr(u).forEach(function (f) {
          if (
            (f.type === 'childList' &&
              f.addedNodes.length > 0 &&
              !Mp(f.addedNodes[0]) &&
              (A.searchPseudoElements && a(f.target), n(f.target)),
            f.type === 'attributes' &&
              f.target.parentNode &&
              A.searchPseudoElements &&
              a(f.target.parentNode),
            f.type === 'attributes' && Mp(f.target) && ~tk.indexOf(f.attributeName))
          )
            if (f.attributeName === 'class' && Fk(f.target)) {
              var p = Rl(uf(f.target)),
                y = p.prefix,
                g = p.iconName
              f.target.setAttribute(af, y || c), g && f.target.setAttribute(lf, g)
            } else Dk(f.target) && i(f.target)
        })
      }
    })),
      Qt &&
        za.observe(s, { childList: !0, attributes: !0, characterData: !0, subtree: !0 })
  }
}
function Hk() {
  za && za.disconnect()
}
function Yk(e) {
  var t = e.getAttribute('style'),
    n = []
  return (
    t &&
      (n = t.split(';').reduce(function (r, i) {
        var o = i.split(':'),
          a = o[0],
          l = o.slice(1)
        return a && l.length > 0 && (r[a] = l.join(':').trim()), r
      }, {})),
    n
  )
}
function Kk(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = Rl(uf(e))
  return (
    i.prefix || (i.prefix = xn()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName = Ck(i.prefix, e.innerText) || df(i.prefix, Pu(e.innerText))),
      !i.iconName &&
        A.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  )
}
function Gk(e) {
  var t = Hr(e.attributes).reduce(function (i, o) {
      return i.name !== 'class' && i.name !== 'style' && (i[o.name] = o.value), i
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id')
  return (
    A.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(A.replacementClass, '-title-')
            .concat(r || Gi()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  )
}
function Qk() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ot,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} }
  }
}
function zp(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = Kk(e),
    r = n.iconName,
    i = n.prefix,
    o = n.rest,
    a = Gk(e),
    l = Tu('parseNodeAttributes', {}, e),
    s = t.styleParser ? Yk(e) : []
  return N(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: Ot,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: s, attributes: a }
    },
    l
  )
}
var Xk = gt.styles
function b1(e) {
  var t = A.autoReplaceSvg === 'nest' ? zp(e, { styleParser: !1 }) : zp(e)
  return ~t.extra.classes.indexOf(o1)
    ? Kt('generateLayersText', e, t)
    : Kt('generateSvgReplacementMutation', e, t)
}
var kn = new Set()
sf.map(function (e) {
  kn.add('fa-'.concat(e))
})
Object.keys(Wi[X]).map(kn.add.bind(kn))
Object.keys(Wi[se]).map(kn.add.bind(kn))
kn = io(kn)
function Fp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  if (!Qt) return Promise.resolve()
  var n = q.documentElement.classList,
    r = function (f) {
      return n.add(''.concat(Op, '-').concat(f))
    },
    i = function (f) {
      return n.remove(''.concat(Op, '-').concat(f))
    },
    o = A.autoFetchSvg
      ? kn
      : sf
          .map(function (c) {
            return 'fa-'.concat(c)
          })
          .concat(Object.keys(Xk))
  o.includes('fa') || o.push('fa')
  var a = ['.'.concat(o1, ':not([').concat(Yn, '])')]
    .concat(
      o.map(function (c) {
        return '.'.concat(c, ':not([').concat(Yn, '])')
      })
    )
    .join(', ')
  if (a.length === 0) return Promise.resolve()
  var l = []
  try {
    l = Hr(e.querySelectorAll(a))
  } catch {}
  if (l.length > 0) r('pending'), i('complete')
  else return Promise.resolve()
  var s = hf.begin('onTree'),
    u = l.reduce(function (c, f) {
      try {
        var p = b1(f)
        p && c.push(p)
      } catch (y) {
        i1 || (y.name === 'MissingIcon' && console.error(y))
      }
      return c
    }, [])
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (p) {
        k1(p, function () {
          r('active'),
            r('complete'),
            i('pending'),
            typeof t == 'function' && t(),
            s(),
            c()
        })
      })
      .catch(function (p) {
        s(), f(p)
      })
  })
}
function Zk(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  b1(e).then(function (n) {
    n && k1([n], t)
  })
}
function qk(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : _u(t || {}),
      i = n.mask
    return i && (i = (i || {}).icon ? i : _u(i || {})), e(r, N(N({}, n), {}, { mask: i }))
  }
}
var Jk = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? Ot : r,
      o = n.symbol,
      a = o === void 0 ? !1 : o,
      l = n.mask,
      s = l === void 0 ? null : l,
      u = n.maskId,
      c = u === void 0 ? null : u,
      f = n.title,
      p = f === void 0 ? null : f,
      y = n.titleId,
      g = y === void 0 ? null : y,
      v = n.classes,
      k = v === void 0 ? [] : v,
      m = n.attributes,
      d = m === void 0 ? {} : m,
      h = n.styles,
      w = h === void 0 ? {} : h
    if (t) {
      var b = t.prefix,
        E = t.iconName,
        C = t.icon
      return Al(N({ type: 'icon' }, t), function () {
        return (
          Kn('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          A.autoA11y &&
            (p
              ? (d['aria-labelledby'] = ''
                  .concat(A.replacementClass, '-title-')
                  .concat(g || Gi()))
              : ((d['aria-hidden'] = 'true'), (d.focusable = 'false'))),
          mf({
            icons: {
              main: Nu(C),
              mask: s ? Nu(s.icon) : { found: !1, width: null, height: null, icon: {} }
            },
            prefix: b,
            iconName: E,
            transform: N(N({}, Ot), i),
            symbol: a,
            title: p,
            maskId: c,
            titleId: g,
            extra: { attributes: d, styles: w, classes: k }
          })
        )
      })
    }
  },
  eS = {
    mixout: function () {
      return { icon: qk(Jk) }
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Fp), (n.nodeCallback = Zk), n
        }
      }
    },
    provides: function (t) {
      ;(t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? q : r,
          o = n.callback,
          a = o === void 0 ? function () {} : o
        return Fp(i, a)
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            o = r.title,
            a = r.titleId,
            l = r.prefix,
            s = r.transform,
            u = r.symbol,
            c = r.mask,
            f = r.maskId,
            p = r.extra
          return new Promise(function (y, g) {
            Promise.all([
              Ru(i, l),
              c.iconName
                ? Ru(c.iconName, c.prefix)
                : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} })
            ])
              .then(function (v) {
                var k = rf(v, 2),
                  m = k[0],
                  d = k[1]
                y([
                  n,
                  mf({
                    icons: { main: m, mask: d },
                    prefix: l,
                    iconName: i,
                    transform: s,
                    symbol: u,
                    maskId: f,
                    title: o,
                    titleId: a,
                    extra: p,
                    watchable: !0
                  })
                ])
              })
              .catch(g)
          })
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            o = n.main,
            a = n.transform,
            l = n.styles,
            s = _l(l)
          s.length > 0 && (i.style = s)
          var u
          return (
            cf(a) &&
              (u = Kt('generateAbstractTransformGrouping', {
                main: o,
                transform: a,
                containerWidth: o.width,
                iconWidth: o.width
              })),
            r.push(u || o.icon),
            { children: r, attributes: i }
          )
        })
    }
  },
  tS = {
    mixout: function () {
      return {
        layer: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.classes,
            o = i === void 0 ? [] : i
          return Al({ type: 'layer' }, function () {
            Kn('beforeDOMElementCreation', { assembler: n, params: r })
            var a = []
            return (
              n(function (l) {
                Array.isArray(l)
                  ? l.map(function (s) {
                      a = a.concat(s.abstract)
                    })
                  : (a = a.concat(l.abstract))
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(A.cssPrefix, '-layers')].concat(io(o)).join(' ')
                  },
                  children: a
                }
              ]
            )
          })
        }
      }
    }
  },
  nS = {
    mixout: function () {
      return {
        counter: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.title,
            o = i === void 0 ? null : i,
            a = r.classes,
            l = a === void 0 ? [] : a,
            s = r.attributes,
            u = s === void 0 ? {} : s,
            c = r.styles,
            f = c === void 0 ? {} : c
          return Al({ type: 'counter', content: n }, function () {
            return (
              Kn('beforeDOMElementCreation', { content: n, params: r }),
              Mk({
                content: n.toString(),
                title: o,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: [''.concat(A.cssPrefix, '-layers-counter')].concat(io(l))
                }
              })
            )
          })
        }
      }
    }
  },
  rS = {
    mixout: function () {
      return {
        text: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.transform,
            o = i === void 0 ? Ot : i,
            a = r.title,
            l = a === void 0 ? null : a,
            s = r.classes,
            u = s === void 0 ? [] : s,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            p = r.styles,
            y = p === void 0 ? {} : p
          return Al({ type: 'text', content: n }, function () {
            return (
              Kn('beforeDOMElementCreation', { content: n, params: r }),
              $p({
                content: n,
                transform: N(N({}, Ot), o),
                title: l,
                extra: {
                  attributes: f,
                  styles: y,
                  classes: [''.concat(A.cssPrefix, '-layers-text')].concat(io(u))
                }
              })
            )
          })
        }
      }
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          o = r.transform,
          a = r.extra,
          l = null,
          s = null
        if (t1) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect()
          ;(l = c.width / u), (s = c.height / u)
        }
        return (
          A.autoA11y && !i && (a.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            n,
            $p({
              content: n.innerHTML,
              width: l,
              height: s,
              transform: o,
              title: i,
              extra: a,
              watchable: !0
            })
          ])
        )
      }
    }
  },
  iS = new RegExp('"', 'ug'),
  Dp = [1105920, 1112319]
function oS(e) {
  var t = e.replace(iS, ''),
    n = yk(t, 0),
    r = n >= Dp[0] && n <= Dp[1],
    i = t.length === 2 ? t[0] === t[1] : !1
  return { value: Pu(i ? t[0] : t), isSecondary: r || i }
}
function Up(e, t) {
  var n = ''.concat(K4).concat(t.replace(':', '-'))
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r()
    var o = Hr(e.children),
      a = o.filter(function (C) {
        return C.getAttribute(Eu) === t
      })[0],
      l = wn.getComputedStyle(e, t),
      s = l.getPropertyValue('font-family').match(q4),
      u = l.getPropertyValue('font-weight'),
      c = l.getPropertyValue('content')
    if (a && !s) return e.removeChild(a), r()
    if (s && c !== 'none' && c !== '') {
      var f = l.getPropertyValue('content'),
        p = ~['Sharp'].indexOf(s[2]) ? se : X,
        y = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(
          s[2]
        )
          ? Hi[p][s[2].toLowerCase()]
          : J4[p][u],
        g = oS(f),
        v = g.value,
        k = g.isSecondary,
        m = s[0].startsWith('FontAwesome'),
        d = df(y, v),
        h = d
      if (m) {
        var w = Ek(v)
        w.iconName && w.prefix && ((d = w.iconName), (y = w.prefix))
      }
      if (d && !k && (!a || a.getAttribute(af) !== y || a.getAttribute(lf) !== h)) {
        e.setAttribute(n, h), a && e.removeChild(a)
        var b = Qk(),
          E = b.extra
        ;(E.attributes[Eu] = t),
          Ru(d, y)
            .then(function (C) {
              var _ = mf(
                  N(
                    N({}, b),
                    {},
                    {
                      icons: { main: C, mask: pf() },
                      prefix: y,
                      iconName: h,
                      extra: E,
                      watchable: !0
                    }
                  )
                ),
                j = q.createElementNS('http://www.w3.org/2000/svg', 'svg')
              t === '::before' ? e.insertBefore(j, e.firstChild) : e.appendChild(j),
                (j.outerHTML = _.map(function (O) {
                  return ao(O)
                }).join(`
`)),
                e.removeAttribute(n),
                r()
            })
            .catch(i)
      } else r()
    } else r()
  })
}
function aS(e) {
  return Promise.all([Up(e, '::before'), Up(e, '::after')])
}
function lS(e) {
  return (
    e.parentNode !== document.head &&
    !~Q4.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Eu) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  )
}
function Bp(e) {
  if (Qt)
    return new Promise(function (t, n) {
      var r = Hr(e.querySelectorAll('*')).filter(lS).map(aS),
        i = hf.begin('searchPseudoElements')
      S1(),
        Promise.all(r)
          .then(function () {
            i(), $u(), t()
          })
          .catch(function () {
            i(), $u(), n()
          })
    })
}
var sS = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Bp), n
        }
      }
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? q : r
        A.searchPseudoElements && Bp(i)
      }
    }
  },
  Vp = !1,
  uS = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            S1(), (Vp = !0)
          }
        }
      }
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Lp(Tu('mutationObserverCallbacks', {}))
        },
        noAuto: function () {
          Hk()
        },
        watch: function (n) {
          var r = n.observeMutationsRoot
          Vp ? $u() : Lp(Tu('mutationObserverCallbacks', { observeMutationsRoot: r }))
        }
      }
    }
  },
  Wp = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
    return t
      .toLowerCase()
      .split(' ')
      .reduce(function (r, i) {
        var o = i.toLowerCase().split('-'),
          a = o[0],
          l = o.slice(1).join('-')
        if (a && l === 'h') return (r.flipX = !0), r
        if (a && l === 'v') return (r.flipY = !0), r
        if (((l = parseFloat(l)), isNaN(l))) return r
        switch (a) {
          case 'grow':
            r.size = r.size + l
            break
          case 'shrink':
            r.size = r.size - l
            break
          case 'left':
            r.x = r.x - l
            break
          case 'right':
            r.x = r.x + l
            break
          case 'up':
            r.y = r.y - l
            break
          case 'down':
            r.y = r.y + l
            break
          case 'rotate':
            r.rotate = r.rotate + l
            break
        }
        return r
      }, n)
  },
  cS = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Wp(n)
          }
        }
      }
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-transform')
          return i && (n.transform = Wp(i)), n
        }
      }
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          o = n.containerWidth,
          a = n.iconWidth,
          l = { transform: 'translate('.concat(o / 2, ' 256)') },
          s = 'translate('.concat(i.x * 32, ', ').concat(i.y * 32, ') '),
          u = 'scale('
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ', ')
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ') '),
          c = 'rotate('.concat(i.rotate, ' 0 0)'),
          f = { transform: ''.concat(s, ' ').concat(u, ' ').concat(c) },
          p = { transform: 'translate('.concat((a / 2) * -1, ' -256)') },
          y = { outer: l, inner: f, path: p }
        return {
          tag: 'g',
          attributes: N({}, y.outer),
          children: [
            {
              tag: 'g',
              attributes: N({}, y.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: N(N({}, r.icon.attributes), y.path)
                }
              ]
            }
          ]
        }
      }
    }
  },
  gs = { x: 0, y: 0, width: '100%', height: '100%' }
function Hp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
}
function fS(e) {
  return e.tag === 'g' ? e.children : [e]
}
var dS = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-mask'),
            o = i
              ? Rl(
                  i.split(' ').map(function (a) {
                    return a.trim()
                  })
                )
              : pf()
          return (
            o.prefix || (o.prefix = xn()),
            (n.mask = o),
            (n.maskId = r.getAttribute('data-fa-mask-id')),
            n
          )
        }
      }
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          o = n.main,
          a = n.mask,
          l = n.maskId,
          s = n.transform,
          u = o.width,
          c = o.icon,
          f = a.width,
          p = a.icon,
          y = ck({ transform: s, containerWidth: f, iconWidth: u }),
          g = { tag: 'rect', attributes: N(N({}, gs), {}, { fill: 'white' }) },
          v = c.children ? { children: c.children.map(Hp) } : {},
          k = {
            tag: 'g',
            attributes: N({}, y.inner),
            children: [
              Hp(N({ tag: c.tag, attributes: N(N({}, c.attributes), y.path) }, v))
            ]
          },
          m = { tag: 'g', attributes: N({}, y.outer), children: [k] },
          d = 'mask-'.concat(l || Gi()),
          h = 'clip-'.concat(l || Gi()),
          w = {
            tag: 'mask',
            attributes: N(
              N({}, gs),
              {},
              { id: d, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }
            ),
            children: [g, m]
          },
          b = {
            tag: 'defs',
            children: [{ tag: 'clipPath', attributes: { id: h }, children: fS(p) }, w]
          }
        return (
          r.push(b, {
            tag: 'rect',
            attributes: N(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(h, ')'),
                mask: 'url(#'.concat(d, ')')
              },
              gs
            )
          }),
          { children: r, attributes: i }
        )
      }
    }
  },
  pS = {
    provides: function (t) {
      var n = !1
      wn.matchMedia && (n = wn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: 'currentColor' },
            o = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' }
          r.push({
            tag: 'path',
            attributes: N(
              N({}, i),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
              }
            )
          })
          var a = N(N({}, o), {}, { attributeName: 'opacity' }),
            l = {
              tag: 'circle',
              attributes: N(N({}, i), {}, { cx: '256', cy: '364', r: '28' }),
              children: []
            }
          return (
            n ||
              l.children.push(
                {
                  tag: 'animate',
                  attributes: N(
                    N({}, o),
                    {},
                    { attributeName: 'r', values: '28;14;28;28;14;28;' }
                  )
                },
                {
                  tag: 'animate',
                  attributes: N(N({}, a), {}, { values: '1;0;1;1;0;1;' })
                }
              ),
            r.push(l),
            r.push({
              tag: 'path',
              attributes: N(
                N({}, i),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: 'animate',
                      attributes: N(N({}, a), {}, { values: '1;0;0;0;0;1;' })
                    }
                  ]
            }),
            n ||
              r.push({
                tag: 'path',
                attributes: N(
                  N({}, i),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
                  }
                ),
                children: [
                  {
                    tag: 'animate',
                    attributes: N(N({}, a), {}, { values: '0;0;1;1;0;0;' })
                  }
                ]
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: r }
          )
        })
    }
  },
  mS = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-symbol'),
            o = i === null ? !1 : i === '' ? !0 : i
          return (n.symbol = o), n
        }
      }
    }
  },
  hS = [pk, eS, tS, nS, rS, sS, uS, cS, dS, pS, mS]
Tk(hS, { mixoutsTo: nt })
nt.noAuto
nt.config
nt.library
nt.dom
var ju = nt.parse
nt.findIconDefinition
nt.toHtml
var vS = nt.icon
nt.layer
nt.text
nt.counter
function Yp(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Yp(Object(n), !0).forEach(function (r) {
          xr(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Yp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Fa(e) {
  '@babel/helpers - typeof'
  return (
    (Fa =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Fa(e)
  )
}
function xr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function gS(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    o
  for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function yS(e, t) {
  if (e == null) return {}
  var n = gS(e, t),
    r,
    i
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r])
  }
  return n
}
function Mu(e) {
  return wS(e) || xS(e) || kS(e) || SS()
}
function wS(e) {
  if (Array.isArray(e)) return Iu(e)
}
function xS(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e)
}
function kS(e, t) {
  if (e) {
    if (typeof e == 'string') return Iu(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Iu(e, t)
  }
}
function Iu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function SS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function bS(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    o = e.bounce,
    a = e.shake,
    l = e.flash,
    s = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    f = e.pulse,
    p = e.fixedWidth,
    y = e.inverse,
    g = e.border,
    v = e.listItem,
    k = e.flip,
    m = e.size,
    d = e.rotation,
    h = e.pull,
    w =
      ((t = {
        'fa-beat': n,
        'fa-fade': r,
        'fa-beat-fade': i,
        'fa-bounce': o,
        'fa-shake': a,
        'fa-flash': l,
        'fa-spin': s,
        'fa-spin-reverse': c,
        'fa-spin-pulse': u,
        'fa-pulse': f,
        'fa-fw': p,
        'fa-inverse': y,
        'fa-border': g,
        'fa-li': v,
        'fa-flip': k === !0,
        'fa-flip-horizontal': k === 'horizontal' || k === 'both',
        'fa-flip-vertical': k === 'vertical' || k === 'both'
      }),
      xr(t, 'fa-'.concat(m), typeof m < 'u' && m !== null),
      xr(t, 'fa-rotate-'.concat(d), typeof d < 'u' && d !== null && d !== 0),
      xr(t, 'fa-pull-'.concat(h), typeof h < 'u' && h !== null),
      xr(t, 'fa-swap-opacity', e.swapOpacity),
      t)
  return Object.keys(w)
    .map(function (b) {
      return w[b] ? b : null
    })
    .filter(function (b) {
      return b
    })
}
function CS(e) {
  return (e = e - 0), e === e
}
function C1(e) {
  return CS(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : ''
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1))
}
var ES = ['style']
function PS(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function OS(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim()
    })
    .filter(function (t) {
      return t
    })
    .reduce(function (t, n) {
      var r = n.indexOf(':'),
        i = C1(n.slice(0, r)),
        o = n.slice(r + 1).trim()
      return i.startsWith('webkit') ? (t[PS(i)] = o) : (t[i] = o), t
    }, {})
}
function E1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  if (typeof t == 'string') return t
  var r = (t.children || []).map(function (s) {
      return E1(e, s)
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var c = t.attributes[u]
        switch (u) {
          case 'class':
            ;(s.attrs.className = c), delete t.attributes.class
            break
          case 'style':
            s.attrs.style = OS(c)
            break
          default:
            u.indexOf('aria-') === 0 || u.indexOf('data-') === 0
              ? (s.attrs[u.toLowerCase()] = c)
              : (s.attrs[C1(u)] = c)
        }
        return s
      },
      { attrs: {} }
    ),
    o = n.style,
    a = o === void 0 ? {} : o,
    l = yS(n, ES)
  return (
    (i.attrs.style = ln(ln({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, ln(ln({}, i.attrs), l)].concat(Mu(r)))
  )
}
var P1 = !1
try {
  P1 = !0
} catch {}
function TS() {
  if (!P1 && console && typeof console.error == 'function') {
    var e
    ;(e = console).error.apply(e, arguments)
  }
}
function Kp(e) {
  if (e && Fa(e) === 'object' && e.prefix && e.iconName && e.icon) return e
  if (ju.icon) return ju.icon(e)
  if (e === null) return null
  if (e && Fa(e) === 'object' && e.prefix && e.iconName) return e
  if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] }
  if (typeof e == 'string') return { prefix: 'fas', iconName: e }
}
function ys(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? xr({}, e, t)
    : {}
}
var lo = G.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    o = e.className,
    a = e.title,
    l = e.titleId,
    s = e.maskId,
    u = Kp(n),
    c = ys('classes', [].concat(Mu(bS(e)), Mu(o.split(' ')))),
    f = ys(
      'transform',
      typeof e.transform == 'string' ? ju.transform(e.transform) : e.transform
    ),
    p = ys('mask', Kp(r)),
    y = vS(
      u,
      ln(ln(ln(ln({}, c), f), p), {}, { symbol: i, title: a, titleId: l, maskId: s })
    )
  if (!y) return TS('Could not find icon', u), null
  var g = y.abstract,
    v = { ref: t }
  return (
    Object.keys(e).forEach(function (k) {
      lo.defaultProps.hasOwnProperty(k) || (v[k] = e[k])
    }),
    _S(g[0], v)
  )
})
lo.displayName = 'FontAwesomeIcon'
lo.propTypes = {
  beat: z.bool,
  border: z.bool,
  beatFade: z.bool,
  bounce: z.bool,
  className: z.string,
  fade: z.bool,
  flash: z.bool,
  mask: z.oneOfType([z.object, z.array, z.string]),
  maskId: z.string,
  fixedWidth: z.bool,
  inverse: z.bool,
  flip: z.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: z.oneOfType([z.object, z.array, z.string]),
  listItem: z.bool,
  pull: z.oneOf(['right', 'left']),
  pulse: z.bool,
  rotation: z.oneOf([0, 90, 180, 270]),
  shake: z.bool,
  size: z.oneOf([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x'
  ]),
  spin: z.bool,
  spinPulse: z.bool,
  spinReverse: z.bool,
  symbol: z.oneOfType([z.bool, z.string]),
  title: z.string,
  titleId: z.string,
  transform: z.oneOfType([z.string, z.object]),
  swapOpacity: z.bool
}
lo.defaultProps = {
  border: !1,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: !1
}
var _S = E1.bind(null, G.createElement)
function NS(e) {
  return nl({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'
        }
      }
    ]
  })(e)
}
var RS = {
    prefix: 'fab',
    iconName: 'css3-alt',
    icon: [
      384,
      512,
      [],
      'f38b',
      'M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z'
    ]
  },
  AS = {
    prefix: 'fab',
    iconName: 'react',
    icon: [
      512,
      512,
      [],
      'f41b',
      'M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z'
    ]
  },
  $S = {
    prefix: 'fab',
    iconName: 'html5',
    icon: [
      384,
      512,
      [],
      'f13b',
      'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z'
    ]
  },
  jS = {
    prefix: 'fab',
    iconName: 'js',
    icon: [
      448,
      512,
      [],
      'f3b8',
      'M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z'
    ]
  },
  MS = {
    prefix: 'fab',
    iconName: 'node-js',
    icon: [
      448,
      512,
      [],
      'f3d3',
      'M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z'
    ]
  }
const IS = () => {
  const e = [$S, RS, jS, AS, MS, S.jsx(NS, {})],
    t = r =>
      r.iconName
        ? S.jsx(lo, { icon: r, style: { fontSize: '100px' } })
        : G.cloneElement(r, { style: { fontSize: '100px' } }),
    n = []
  for (let r = 0; r < 100; r++) n.push(...e.map(t))
  return S.jsx('div', {
    className: 'slider-container',
    children: S.jsx('div', { className: 'slider', children: n })
  })
}
function LS(e) {
  return nl({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
      {
        tag: 'path',
        attr: {
          d: 'M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
        }
      }
    ]
  })(e)
}
function zS() {
  return S.jsxs('div', {
    className: 'HomePage ',
    children: [
      S.jsx('div', {
        className: 'grid grid-cols-1 gap-2 allDescription',
        children: S.jsxs('div', {
          className: 'allText',
          children: [
            S.jsx('div', {
              className: 'carlosText',
              children: S.jsx(B2, {
                text: 'Carlos Rodríguez',
                typingDelay: 200,
                repeatDelay: 5e3,
                className: 'nameHome text-lg md:text-xl'
              })
            }),
            S.jsxs('p', {
              className: 'descriptionCarlos text-base md:text-lg',
              children: [
                'I am an enthusiastic and proactive web developer with a strong understanding of ',
                S.jsx('span', { className: 'languages', children: 'HTML5' }),
                ',',
                S.jsx('span', { className: 'languages', children: ' CSS' }),
                ' and',
                ' ',
                S.jsx('span', { className: 'languages', children: 'JavaScript' }),
                ', including a JavaScript library like ',
                S.jsx('span', { className: 'languages', children: 'React.js' }),
                ' and back-end technologies such as ',
                S.jsx('span', { className: 'languages', children: 'Node.js' }),
                ' and',
                S.jsx('span', { className: 'languages', children: ' MongoDB' }),
                '. Committed to continuous learning, I excel at problem solving and adapting quickly to new challenges. My effective communication and teamwork skills are evident both in professional settings and in my passion for sports and outdoor activities. These interests not only enrich me personally, but also enhance my collaboration and leadership skills.'
              ]
            })
          ]
        })
      }),
      S.jsxs('div', {
        children: [
          S.jsx('h2', {
            className: 'text-2xl md:text-3xl lg:text-4xl font-bold skillsTitle',
            children: 'Skills'
          }),
          S.jsx(IS, {})
        ]
      }),
      S.jsx('div', {
        className: 'projects grid grid-cols-1 md:grid-cols-2 gap-2',
        id: 'projects-section',
        children: S.jsx('h2', {
          className: 'text-2xl md:text-3xl lg:text-4xl font-bold projectsTitle',
          children: 'Projects'
        })
      }),
      S.jsxs('div', {
        className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6',
        children: [
          S.jsx(ps, {
            title: 'Ironhack DOM Project',
            description:
              "This was my first project manipulating the DOM (If you have a high frame rate (FPS) while gaming, it's advisable to lower it for optimal performance.)",
            imageUrl: j4,
            url: 'https://carlosrodmor.github.io/octopus-game/'
          }),
          S.jsx(ps, {
            title: 'Ironhack Back-end Project',
            description:
              'This was my second project using Node.js, Express.js and AXIOS and also adding some extra front-end development.',
            imageUrl: M4,
            url: 'https://movies-project2.fly.dev/'
          }),
          S.jsx(ps, {
            title: 'Ironhack Final Project ',
            description:
              'This is the most important project I have worked on so far, alongside two colleagues, using the MERN stack.',
            imageUrl: I4,
            url: 'https://code-connectt.netlify.app/'
          })
        ]
      }),
      S.jsxs('div', {
        id: 'timeline-section',
        children: [
          S.jsx('h2', {
            className: 'text-2xl md:text-3xl lg:text-4xl font-bold timelineTitle',
            children: 'My timeline'
          }),
          S.jsx(L4, {})
        ]
      }),
      S.jsxs('div', {
        className: 'socialIcons',
        id: 'contact-section',
        children: [
          S.jsx('a', {
            target: '_blank',
            href: 'https://www.github.com/carlosrodmor',
            className: 'text-gray-300 hover:text-white mx-10',
            children: S.jsx(m0, { size: 72, className: 'icons' })
          }),
          S.jsx('a', {
            target: '_blank',
            href: 'https://www.linkedin.com/in/carlos-rodr%C3%ADguez-morales/',
            className: 'text-gray-300 hover:text-white mx-10',
            children: S.jsx(h0, { size: 72, className: 'icons' })
          }),
          S.jsx('a', {
            target: '_blank',
            href: 'mailto:carlos97sdg@gmail.com',
            style: { display: 'inline-block' },
            className: 'text-gray-300 hover:text-white mx-10',
            children: S.jsx(LS, {
              size: 72,
              style: { cursor: 'pointer' },
              className: 'icons'
            })
          })
        ]
      })
    ]
  })
}
const FS = () =>
    S.jsxs(z2, {
      children: [
        S.jsx(hu, { path: '/', element: S.jsx(zS, {}) }),
        S.jsx(hu, { path: '/proyectos', element: S.jsx(U2, {}) })
      ]
    }),
  DS = () =>
    S.jsx('div', {
      className: 'container',
      children: S.jsx('div', {
        className: 'footerText',
        children: '© 2024 Carlos Rodríguez'
      })
    })
function US() {
  return S.jsx(D2, {
    children: S.jsxs('div', {
      className: 'App',
      children: [S.jsx(e2, {}), S.jsx(FS, {}), S.jsx(DS, {})]
    })
  })
}
ws.createRoot(document.getElementById('root')).render(
  S.jsx(G.StrictMode, { children: S.jsx(US, {}) })
)
