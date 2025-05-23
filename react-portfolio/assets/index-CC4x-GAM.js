function Dv(e, t) {
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
function Cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
function _n(e) {
  if (e.__esModule) return e
  var t = e.default
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments)
    }
    n.prototype = t.prototype
  } else n = {}
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r)
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r]
              }
            }
      )
    }),
    n
  )
}
var Em = { exports: {} },
  Ga = {},
  Pm = { exports: {} },
  F = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var to = Symbol.for('react.element'),
  Uv = Symbol.for('react.portal'),
  Bv = Symbol.for('react.fragment'),
  Wv = Symbol.for('react.strict_mode'),
  Hv = Symbol.for('react.profiler'),
  Vv = Symbol.for('react.provider'),
  Yv = Symbol.for('react.context'),
  Kv = Symbol.for('react.forward_ref'),
  Gv = Symbol.for('react.suspense'),
  Qv = Symbol.for('react.memo'),
  Xv = Symbol.for('react.lazy'),
  Kf = Symbol.iterator
function qv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Kf && e[Kf]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var _m = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Om = Object.assign,
  Tm = {}
function Hr(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Tm), (this.updater = n || _m)
}
Hr.prototype.isReactComponent = {}
Hr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Nm() {}
Nm.prototype = Hr.prototype
function lc(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Tm), (this.updater = n || _m)
}
var sc = (lc.prototype = new Nm())
sc.constructor = lc
Om(sc, Hr.prototype)
sc.isPureReactComponent = !0
var Gf = Array.isArray,
  Rm = Object.prototype.hasOwnProperty,
  uc = { current: null },
  Am = { key: !0, ref: !0, __self: !0, __source: !0 }
function $m(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = '' + t.key), t))
      Rm.call(t, r) && !Am.hasOwnProperty(r) && (i[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2]
    i.children = s
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
  return { $$typeof: to, type: e, key: o, ref: a, props: i, _owner: uc.current }
}
function Zv(e, t) {
  return {
    $$typeof: to,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function cc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === to
}
function Jv(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Qf = /\/+/g
function ts(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Jv('' + e.key)
    : t.toString(36)
}
function Qo(e, t, n, r, i) {
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
          case to:
          case Uv:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + ts(a, 0) : r),
      Gf(i)
        ? ((n = ''),
          e != null && (n = e.replace(Qf, '$&/') + '/'),
          Qo(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (cc(i) &&
            (i = Zv(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Qf, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Gf(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l]
      var s = r + ts(o, l)
      a += Qo(o, t, n, s, i)
    }
  else if (((s = qv(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + ts(o, l++)), (a += Qo(o, t, n, s, i))
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
function yo(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Qo(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function eg(e) {
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
var Fe = { current: null },
  Xo = { transition: null },
  tg = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: Xo, ReactCurrentOwner: uc }
function jm() {
  throw Error('act(...) is not supported in production builds of React.')
}
F.Children = {
  map: yo,
  forEach: function (e, t, n) {
    yo(
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
      yo(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      yo(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!cc(e))
      throw Error('React.Children.only expected to receive a single React element child.')
    return e
  }
}
F.Component = Hr
F.Fragment = Bv
F.Profiler = Hv
F.PureComponent = lc
F.StrictMode = Wv
F.Suspense = Gv
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tg
F.act = jm
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Om({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = uc.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (s in t)
      Rm.call(t, s) &&
        !Am.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    l = Array(s)
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: to, type: e.type, key: i, ref: o, props: r, _owner: a }
}
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Yv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Vv, _context: e }),
    (e.Consumer = e)
  )
}
F.createElement = $m
F.createFactory = function (e) {
  var t = $m.bind(null, e)
  return (t.type = e), t
}
F.createRef = function () {
  return { current: null }
}
F.forwardRef = function (e) {
  return { $$typeof: Kv, render: e }
}
F.isValidElement = cc
F.lazy = function (e) {
  return { $$typeof: Xv, _payload: { _status: -1, _result: e }, _init: eg }
}
F.memo = function (e, t) {
  return { $$typeof: Qv, type: e, compare: t === void 0 ? null : t }
}
F.startTransition = function (e) {
  var t = Xo.transition
  Xo.transition = {}
  try {
    e()
  } finally {
    Xo.transition = t
  }
}
F.unstable_act = jm
F.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t)
}
F.useContext = function (e) {
  return Fe.current.useContext(e)
}
F.useDebugValue = function () {}
F.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e)
}
F.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t)
}
F.useId = function () {
  return Fe.current.useId()
}
F.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n)
}
F.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t)
}
F.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t)
}
F.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t)
}
F.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n)
}
F.useRef = function (e) {
  return Fe.current.useRef(e)
}
F.useState = function (e) {
  return Fe.current.useState(e)
}
F.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n)
}
F.useTransition = function () {
  return Fe.current.useTransition()
}
F.version = '18.3.1'
Pm.exports = F
var w = Pm.exports
const Q = Cm(w),
  Pi = Dv({ __proto__: null, default: Q }, [w])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng = w,
  rg = Symbol.for('react.element'),
  ig = Symbol.for('react.fragment'),
  og = Object.prototype.hasOwnProperty,
  ag = ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lg = { key: !0, ref: !0, __self: !0, __source: !0 }
function Mm(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) og.call(t, r) && !lg.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: rg, type: e, key: o, ref: a, props: i, _owner: ag.current }
}
Ga.Fragment = ig
Ga.jsx = Mm
Ga.jsxs = Mm
Em.exports = Ga
var S = Em.exports,
  Us = {},
  Im = { exports: {} },
  et = {},
  Lm = { exports: {} },
  zm = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(_, M) {
    var I = _.length
    _.push(M)
    e: for (; 0 < I; ) {
      var ne = (I - 1) >>> 1,
        me = _[ne]
      if (0 < i(me, M)) (_[ne] = M), (_[I] = me), (I = ne)
      else break e
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0]
  }
  function r(_) {
    if (_.length === 0) return null
    var M = _[0],
      I = _.pop()
    if (I !== M) {
      _[0] = I
      e: for (var ne = 0, me = _.length, tr = me >>> 1; ne < tr; ) {
        var Ie = 2 * (ne + 1) - 1,
          tn = _[Ie],
          gt = Ie + 1,
          nr = _[gt]
        if (0 > i(tn, I))
          gt < me && 0 > i(nr, tn)
            ? ((_[ne] = nr), (_[gt] = I), (ne = gt))
            : ((_[ne] = tn), (_[Ie] = I), (ne = Ie))
        else if (gt < me && 0 > i(nr, I)) (_[ne] = nr), (_[gt] = I), (ne = gt)
        else break e
      }
    }
    return M
  }
  function i(_, M) {
    var I = _.sortIndex - M.sortIndex
    return I !== 0 ? I : _.id - M.id
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
  function h(_) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u)
      else if (M.startTime <= _) r(u), (M.sortIndex = M.expirationTime), t(s, M)
      else break
      M = n(u)
    }
  }
  function x(_) {
    if (((v = !1), h(_), !g))
      if (n(s) !== null) (g = !0), Me(b)
      else {
        var M = n(u)
        M !== null && zt(x, M.startTime - _)
      }
  }
  function b(_, M) {
    ;(g = !1), v && ((v = !1), m(O), (O = -1)), (y = !0)
    var I = p
    try {
      for (h(M), f = n(s); f !== null && (!(f.expirationTime > M) || (_ && !W())); ) {
        var ne = f.callback
        if (typeof ne == 'function') {
          ;(f.callback = null), (p = f.priorityLevel)
          var me = ne(f.expirationTime <= M)
          ;(M = e.unstable_now()),
            typeof me == 'function' ? (f.callback = me) : f === n(s) && r(s),
            h(M)
        } else r(s)
        f = n(s)
      }
      if (f !== null) var tr = !0
      else {
        var Ie = n(u)
        Ie !== null && zt(x, Ie.startTime - M), (tr = !1)
      }
      return tr
    } finally {
      ;(f = null), (p = I), (y = !1)
    }
  }
  var E = !1,
    C = null,
    O = -1,
    j = 5,
    A = -1
  function W() {
    return !(e.unstable_now() - A < j)
  }
  function K() {
    if (C !== null) {
      var _ = e.unstable_now()
      A = _
      var M = !0
      try {
        M = C(!0, _)
      } finally {
        M ? pe() : ((E = !1), (C = null))
      }
    } else E = !1
  }
  var pe
  if (typeof d == 'function')
    pe = function () {
      d(K)
    }
  else if (typeof MessageChannel < 'u') {
    var Oe = new MessageChannel(),
      vt = Oe.port2
    ;(Oe.port1.onmessage = K),
      (pe = function () {
        vt.postMessage(null)
      })
  } else
    pe = function () {
      k(K, 0)
    }
  function Me(_) {
    ;(C = _), E || ((E = !0), pe())
  }
  function zt(_, M) {
    O = k(function () {
      _(e.unstable_now())
    }, M)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), Me(b))
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (j = 0 < _ ? Math.floor(1e3 / _) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (_) {
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
        return _()
      } finally {
        p = I
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, M) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          _ = 3
      }
      var I = p
      p = _
      try {
        return M()
      } finally {
        p = I
      }
    }),
    (e.unstable_scheduleCallback = function (_, M, I) {
      var ne = e.unstable_now()
      switch (
        (typeof I == 'object' && I !== null
          ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? ne + I : ne))
          : (I = ne),
        _)
      ) {
        case 1:
          var me = -1
          break
        case 2:
          me = 250
          break
        case 5:
          me = 1073741823
          break
        case 4:
          me = 1e4
          break
        default:
          me = 5e3
      }
      return (
        (me = I + me),
        (_ = {
          id: c++,
          callback: M,
          priorityLevel: _,
          startTime: I,
          expirationTime: me,
          sortIndex: -1
        }),
        I > ne
          ? ((_.sortIndex = I),
            t(u, _),
            n(s) === null &&
              _ === n(u) &&
              (v ? (m(O), (O = -1)) : (v = !0), zt(x, I - ne)))
          : ((_.sortIndex = me), t(s, _), g || y || ((g = !0), Me(b))),
        _
      )
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (_) {
      var M = p
      return function () {
        var I = p
        p = M
        try {
          return _.apply(this, arguments)
        } finally {
          p = I
        }
      }
    })
})(zm)
Lm.exports = zm
var sg = Lm.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ug = w,
  Je = sg
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
var Fm = new Set(),
  _i = {}
function Zn(e, t) {
  Mr(e, t), Mr(e + 'Capture', t)
}
function Mr(e, t) {
  for (_i[e] = t, e = 0; e < t.length; e++) Fm.add(t[e])
}
var Vt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Bs = Object.prototype.hasOwnProperty,
  cg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xf = {},
  qf = {}
function fg(e) {
  return Bs.call(qf, e)
    ? !0
    : Bs.call(Xf, e)
    ? !1
    : cg.test(e)
    ? (qf[e] = !0)
    : ((Xf[e] = !0), !1)
}
function dg(e, t, n, r) {
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
function pg(e, t, n, r) {
  if (t === null || typeof t > 'u' || dg(e, t, n, r)) return !0
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
function De(e, t, n, r, i, o, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a)
}
var _e = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new De(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  _e[t] = new De(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  _e[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    _e[e] = new De(e, 2, !1, e, null, !1, !1)
  }
)
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  _e[e] = new De(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  _e[e] = new De(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  _e[e] = new De(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  _e[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var fc = /[\-:]([a-z])/g
function dc(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(fc, dc)
    _e[t] = new De(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(fc, dc)
    _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(fc, dc)
  _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
_e.xlinkHref = new De(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function pc(e, t, n, r) {
  var i = _e.hasOwnProperty(t) ? _e[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (pg(t, n, i, r) && (n = null),
    r || i === null
      ? fg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Jt = ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wo = Symbol.for('react.element'),
  cr = Symbol.for('react.portal'),
  fr = Symbol.for('react.fragment'),
  mc = Symbol.for('react.strict_mode'),
  Ws = Symbol.for('react.profiler'),
  Dm = Symbol.for('react.provider'),
  Um = Symbol.for('react.context'),
  hc = Symbol.for('react.forward_ref'),
  Hs = Symbol.for('react.suspense'),
  Vs = Symbol.for('react.suspense_list'),
  vc = Symbol.for('react.memo'),
  on = Symbol.for('react.lazy'),
  Bm = Symbol.for('react.offscreen'),
  Zf = Symbol.iterator
function Zr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Zf && e[Zf]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var oe = Object.assign,
  ns
function si(e) {
  if (ns === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      ns = (t && t[1]) || ''
    }
  return (
    `
` +
    ns +
    e
  )
}
var rs = !1
function is(e, t) {
  if (!e || rs) return ''
  rs = !0
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
    ;(rs = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? si(e) : ''
}
function mg(e) {
  switch (e.tag) {
    case 5:
      return si(e.type)
    case 16:
      return si('Lazy')
    case 13:
      return si('Suspense')
    case 19:
      return si('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = is(e.type, !1)), e
    case 11:
      return (e = is(e.type.render, !1)), e
    case 1:
      return (e = is(e.type, !0)), e
    default:
      return ''
  }
}
function Ys(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case fr:
      return 'Fragment'
    case cr:
      return 'Portal'
    case Ws:
      return 'Profiler'
    case mc:
      return 'StrictMode'
    case Hs:
      return 'Suspense'
    case Vs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Um:
        return (e.displayName || 'Context') + '.Consumer'
      case Dm:
        return (e._context.displayName || 'Context') + '.Provider'
      case hc:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case vc:
        return (t = e.displayName || null), t !== null ? t : Ys(e.type) || 'Memo'
      case on:
        ;(t = e._payload), (e = e._init)
        try {
          return Ys(e(t))
        } catch {}
    }
  return null
}
function hg(e) {
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
      return Ys(t)
    case 8:
      return t === mc ? 'StrictMode' : 'Mode'
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
function Sn(e) {
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
function Wm(e) {
  var t = e.type
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  )
}
function vg(e) {
  var t = Wm(e) ? 'checked' : 'value',
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
function xo(e) {
  e._valueTracker || (e._valueTracker = vg(e))
}
function Hm(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Wm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function ma(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Ks(e, t) {
  var n = t.checked
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Jf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function Vm(e, t) {
  ;(t = t.checked), t != null && pc(e, 'checked', t, !1)
}
function Gs(e, t) {
  Vm(e, t)
  var n = Sn(t.value),
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
    ? Qs(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Qs(e, t.type, Sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function ed(e, t, n) {
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
function Qs(e, t, n) {
  ;(t !== 'number' || ma(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ui = Array.isArray
function Er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Sn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Xs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91))
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function td(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92))
      if (ui(n)) {
        if (1 < n.length) throw Error(P(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Sn(n) }
}
function Ym(e, t) {
  var n = Sn(t.value),
    r = Sn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function nd(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Km(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function qs(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Km(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ko,
  Gm = (function (e) {
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
        ko = ko || document.createElement('div'),
          ko.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ko.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Oi(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var pi = {
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
  gg = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(pi).forEach(function (e) {
  gg.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pi[t] = pi[e])
  })
})
function Qm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (pi.hasOwnProperty(e) && pi[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Xm(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Qm(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var yg = oe(
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
function Zs(e, t) {
  if (t) {
    if (yg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Js(e, t) {
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
var eu = null
function gc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var tu = null,
  Pr = null,
  _r = null
function rd(e) {
  if ((e = io(e))) {
    if (typeof tu != 'function') throw Error(P(280))
    var t = e.stateNode
    t && ((t = Ja(t)), tu(e.stateNode, e.type, t))
  }
}
function qm(e) {
  Pr ? (_r ? _r.push(e) : (_r = [e])) : (Pr = e)
}
function Zm() {
  if (Pr) {
    var e = Pr,
      t = _r
    if (((_r = Pr = null), rd(e), t)) for (e = 0; e < t.length; e++) rd(t[e])
  }
}
function Jm(e, t) {
  return e(t)
}
function eh() {}
var os = !1
function th(e, t, n) {
  if (os) return e(t, n)
  os = !0
  try {
    return Jm(e, t, n)
  } finally {
    ;(os = !1), (Pr !== null || _r !== null) && (eh(), Zm())
  }
}
function Ti(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Ja(n)
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
var nu = !1
if (Vt)
  try {
    var Jr = {}
    Object.defineProperty(Jr, 'passive', {
      get: function () {
        nu = !0
      }
    }),
      window.addEventListener('test', Jr, Jr),
      window.removeEventListener('test', Jr, Jr)
  } catch {
    nu = !1
  }
function wg(e, t, n, r, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var mi = !1,
  ha = null,
  va = !1,
  ru = null,
  xg = {
    onError: function (e) {
      ;(mi = !0), (ha = e)
    }
  }
function kg(e, t, n, r, i, o, a, l, s) {
  ;(mi = !1), (ha = null), wg.apply(xg, arguments)
}
function Sg(e, t, n, r, i, o, a, l, s) {
  if ((kg.apply(this, arguments), mi)) {
    if (mi) {
      var u = ha
      ;(mi = !1), (ha = null)
    } else throw Error(P(198))
    va || ((va = !0), (ru = u))
  }
}
function Jn(e) {
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
function nh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated
  }
  return null
}
function id(e) {
  if (Jn(e) !== e) throw Error(P(188))
}
function bg(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Jn(e)), t === null)) throw Error(P(188))
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
        if (o === n) return id(i), e
        if (o === r) return id(i), t
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
function rh(e) {
  return (e = bg(e)), e !== null ? ih(e) : null
}
function ih(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = ih(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var oh = Je.unstable_scheduleCallback,
  od = Je.unstable_cancelCallback,
  Cg = Je.unstable_shouldYield,
  Eg = Je.unstable_requestPaint,
  ce = Je.unstable_now,
  Pg = Je.unstable_getCurrentPriorityLevel,
  yc = Je.unstable_ImmediatePriority,
  ah = Je.unstable_UserBlockingPriority,
  ga = Je.unstable_NormalPriority,
  _g = Je.unstable_LowPriority,
  lh = Je.unstable_IdlePriority,
  Qa = null,
  $t = null
function Og(e) {
  if ($t && typeof $t.onCommitFiberRoot == 'function')
    try {
      $t.onCommitFiberRoot(Qa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var bt = Math.clz32 ? Math.clz32 : Rg,
  Tg = Math.log,
  Ng = Math.LN2
function Rg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Tg(e) / Ng) | 0)) | 0
}
var So = 64,
  bo = 4194304
function ci(e) {
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
function ya(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455
  if (a !== 0) {
    var l = a & ~i
    l !== 0 ? (r = ci(l)) : ((o &= a), o !== 0 && (r = ci(o)))
  } else (a = n & ~i), a !== 0 ? (r = ci(a)) : o !== 0 && (r = ci(o))
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
      (n = 31 - bt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function Ag(e, t) {
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
function $g(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - bt(o),
      l = 1 << a,
      s = i[a]
    s === -1 ? (!(l & n) || l & r) && (i[a] = Ag(l, t)) : s <= t && (e.expiredLanes |= l),
      (o &= ~l)
  }
}
function iu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function sh() {
  var e = So
  return (So <<= 1), !(So & 4194240) && (So = 64), e
}
function as(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function no(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - bt(t)),
    (e[t] = n)
}
function jg(e, t) {
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
    var i = 31 - bt(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function wc(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - bt(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var H = 0
function uh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var ch,
  xc,
  fh,
  dh,
  ph,
  ou = !1,
  Co = [],
  pn = null,
  mn = null,
  hn = null,
  Ni = new Map(),
  Ri = new Map(),
  ln = [],
  Mg =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function ad(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      pn = null
      break
    case 'dragenter':
    case 'dragleave':
      mn = null
      break
    case 'mouseover':
    case 'mouseout':
      hn = null
      break
    case 'pointerover':
    case 'pointerout':
      Ni.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ri.delete(t.pointerId)
  }
}
function ei(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
      }),
      t !== null && ((t = io(t)), t !== null && xc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function Ig(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (pn = ei(pn, e, t, n, r, i)), !0
    case 'dragenter':
      return (mn = ei(mn, e, t, n, r, i)), !0
    case 'mouseover':
      return (hn = ei(hn, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return Ni.set(o, ei(Ni.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (o = i.pointerId), Ri.set(o, ei(Ri.get(o) || null, e, t, n, r, i)), !0
  }
  return !1
}
function mh(e) {
  var t = In(e.target)
  if (t !== null) {
    var n = Jn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = nh(n)), t !== null)) {
          ;(e.blockedOn = t),
            ph(e.priority, function () {
              fh(n)
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
function qo(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = au(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(eu = r), n.target.dispatchEvent(r), (eu = null)
    } else return (t = io(n)), t !== null && xc(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function ld(e, t, n) {
  qo(e) && n.delete(t)
}
function Lg() {
  ;(ou = !1),
    pn !== null && qo(pn) && (pn = null),
    mn !== null && qo(mn) && (mn = null),
    hn !== null && qo(hn) && (hn = null),
    Ni.forEach(ld),
    Ri.forEach(ld)
}
function ti(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ou || ((ou = !0), Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Lg)))
}
function Ai(e) {
  function t(i) {
    return ti(i, e)
  }
  if (0 < Co.length) {
    ti(Co[0], e)
    for (var n = 1; n < Co.length; n++) {
      var r = Co[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    pn !== null && ti(pn, e),
      mn !== null && ti(mn, e),
      hn !== null && ti(hn, e),
      Ni.forEach(t),
      Ri.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    (r = ln[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
    mh(n), n.blockedOn === null && ln.shift()
}
var Or = Jt.ReactCurrentBatchConfig,
  wa = !0
function zg(e, t, n, r) {
  var i = H,
    o = Or.transition
  Or.transition = null
  try {
    ;(H = 1), kc(e, t, n, r)
  } finally {
    ;(H = i), (Or.transition = o)
  }
}
function Fg(e, t, n, r) {
  var i = H,
    o = Or.transition
  Or.transition = null
  try {
    ;(H = 4), kc(e, t, n, r)
  } finally {
    ;(H = i), (Or.transition = o)
  }
}
function kc(e, t, n, r) {
  if (wa) {
    var i = au(e, t, n, r)
    if (i === null) vs(e, t, r, xa, n), ad(e, r)
    else if (Ig(i, e, t, n, r)) r.stopPropagation()
    else if ((ad(e, r), t & 4 && -1 < Mg.indexOf(e))) {
      for (; i !== null; ) {
        var o = io(i)
        if (
          (o !== null && ch(o),
          (o = au(e, t, n, r)),
          o === null && vs(e, t, r, xa, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else vs(e, t, r, null, n)
  }
}
var xa = null
function au(e, t, n, r) {
  if (((xa = null), (e = gc(r)), (e = In(e)), e !== null))
    if (((t = Jn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = nh(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (xa = e), null
}
function hh(e) {
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
      switch (Pg()) {
        case yc:
          return 1
        case ah:
          return 4
        case ga:
        case _g:
          return 16
        case lh:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var cn = null,
  Sc = null,
  Zo = null
function vh() {
  if (Zo) return Zo
  var e,
    t = Sc,
    n = t.length,
    r,
    i = 'value' in cn ? cn.value : cn.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Zo = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Jo(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Eo() {
  return !0
}
function sd() {
  return !1
}
function tt(e) {
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
        ? Eo
        : sd),
      (this.isPropagationStopped = sd),
      this
    )
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Eo))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Eo))
      },
      persist: function () {},
      isPersistent: Eo
    }),
    t
  )
}
var Vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  bc = tt(Vr),
  ro = oe({}, Vr, { view: 0, detail: 0 }),
  Dg = tt(ro),
  ls,
  ss,
  ni,
  Xa = oe({}, ro, {
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
    getModifierState: Cc,
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
        : (e !== ni &&
            (ni && e.type === 'mousemove'
              ? ((ls = e.screenX - ni.screenX), (ss = e.screenY - ni.screenY))
              : (ss = ls = 0),
            (ni = e)),
          ls)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ss
    }
  }),
  ud = tt(Xa),
  Ug = oe({}, Xa, { dataTransfer: 0 }),
  Bg = tt(Ug),
  Wg = oe({}, ro, { relatedTarget: 0 }),
  us = tt(Wg),
  Hg = oe({}, Vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vg = tt(Hg),
  Yg = oe({}, Vr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  Kg = tt(Yg),
  Gg = oe({}, Vr, { data: 0 }),
  cd = tt(Gg),
  Qg = {
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
  Xg = {
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
  qg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Zg(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = qg[e]) ? !!t[e] : !1
}
function Cc() {
  return Zg
}
var Jg = oe({}, ro, {
    key: function (e) {
      if (e.key) {
        var t = Qg[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Jo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Xg[e.keyCode] || 'Unidentified'
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
    getModifierState: Cc,
    charCode: function (e) {
      return e.type === 'keypress' ? Jo(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Jo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  ey = tt(Jg),
  ty = oe({}, Xa, {
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
  fd = tt(ty),
  ny = oe({}, ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cc
  }),
  ry = tt(ny),
  iy = oe({}, Vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  oy = tt(iy),
  ay = oe({}, Xa, {
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
  ly = tt(ay),
  sy = [9, 13, 27, 32],
  Ec = Vt && 'CompositionEvent' in window,
  hi = null
Vt && 'documentMode' in document && (hi = document.documentMode)
var uy = Vt && 'TextEvent' in window && !hi,
  gh = Vt && (!Ec || (hi && 8 < hi && 11 >= hi)),
  dd = ' ',
  pd = !1
function yh(e, t) {
  switch (e) {
    case 'keyup':
      return sy.indexOf(t.keyCode) !== -1
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
function wh(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var dr = !1
function cy(e, t) {
  switch (e) {
    case 'compositionend':
      return wh(t)
    case 'keypress':
      return t.which !== 32 ? null : ((pd = !0), dd)
    case 'textInput':
      return (e = t.data), e === dd && pd ? null : e
    default:
      return null
  }
}
function fy(e, t) {
  if (dr)
    return e === 'compositionend' || (!Ec && yh(e, t))
      ? ((e = vh()), (Zo = Sc = cn = null), (dr = !1), e)
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
      return gh && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var dy = {
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
function md(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!dy[e.type] : t === 'textarea'
}
function xh(e, t, n, r) {
  qm(r),
    (t = ka(t, 'onChange')),
    0 < t.length &&
      ((n = new bc('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var vi = null,
  $i = null
function py(e) {
  Rh(e, 0)
}
function qa(e) {
  var t = hr(e)
  if (Hm(t)) return e
}
function my(e, t) {
  if (e === 'change') return t
}
var kh = !1
if (Vt) {
  var cs
  if (Vt) {
    var fs = 'oninput' in document
    if (!fs) {
      var hd = document.createElement('div')
      hd.setAttribute('oninput', 'return;'), (fs = typeof hd.oninput == 'function')
    }
    cs = fs
  } else cs = !1
  kh = cs && (!document.documentMode || 9 < document.documentMode)
}
function vd() {
  vi && (vi.detachEvent('onpropertychange', Sh), ($i = vi = null))
}
function Sh(e) {
  if (e.propertyName === 'value' && qa($i)) {
    var t = []
    xh(t, $i, e, gc(e)), th(py, t)
  }
}
function hy(e, t, n) {
  e === 'focusin'
    ? (vd(), (vi = t), ($i = n), vi.attachEvent('onpropertychange', Sh))
    : e === 'focusout' && vd()
}
function vy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return qa($i)
}
function gy(e, t) {
  if (e === 'click') return qa(t)
}
function yy(e, t) {
  if (e === 'input' || e === 'change') return qa(t)
}
function wy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Et = typeof Object.is == 'function' ? Object.is : wy
function ji(e, t) {
  if (Et(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Bs.call(t, i) || !Et(e[i], t[i])) return !1
  }
  return !0
}
function gd(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function yd(e, t) {
  var n = gd(e)
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
    n = gd(n)
  }
}
function bh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bh(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Ch() {
  for (var e = window, t = ma(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = ma(e.document)
  }
  return t
}
function Pc(e) {
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
function xy(e) {
  var t = Ch(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && bh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pc(n)) {
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
          (i = yd(n, o))
        var a = yd(n, r)
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
var ky = Vt && 'documentMode' in document && 11 >= document.documentMode,
  pr = null,
  lu = null,
  gi = null,
  su = !1
function wd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  su ||
    pr == null ||
    pr !== ma(r) ||
    ((r = pr),
    'selectionStart' in r && Pc(r)
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
    (gi && ji(gi, r)) ||
      ((gi = r),
      (r = ka(lu, 'onSelect')),
      0 < r.length &&
        ((t = new bc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pr))))
}
function Po(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var mr = {
    animationend: Po('Animation', 'AnimationEnd'),
    animationiteration: Po('Animation', 'AnimationIteration'),
    animationstart: Po('Animation', 'AnimationStart'),
    transitionend: Po('Transition', 'TransitionEnd')
  },
  ds = {},
  Eh = {}
Vt &&
  ((Eh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete mr.animationend.animation,
    delete mr.animationiteration.animation,
    delete mr.animationstart.animation),
  'TransitionEvent' in window || delete mr.transitionend.transition)
function Za(e) {
  if (ds[e]) return ds[e]
  if (!mr[e]) return e
  var t = mr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Eh) return (ds[e] = t[n])
  return e
}
var Ph = Za('animationend'),
  _h = Za('animationiteration'),
  Oh = Za('animationstart'),
  Th = Za('transitionend'),
  Nh = new Map(),
  xd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function On(e, t) {
  Nh.set(e, t), Zn(t, [e])
}
for (var ps = 0; ps < xd.length; ps++) {
  var ms = xd[ps],
    Sy = ms.toLowerCase(),
    by = ms[0].toUpperCase() + ms.slice(1)
  On(Sy, 'on' + by)
}
On(Ph, 'onAnimationEnd')
On(_h, 'onAnimationIteration')
On(Oh, 'onAnimationStart')
On('dblclick', 'onDoubleClick')
On('focusin', 'onFocus')
On('focusout', 'onBlur')
On(Th, 'onTransitionEnd')
Mr('onMouseEnter', ['mouseout', 'mouseover'])
Mr('onMouseLeave', ['mouseout', 'mouseover'])
Mr('onPointerEnter', ['pointerout', 'pointerover'])
Mr('onPointerLeave', ['pointerout', 'pointerover'])
Zn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Zn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Zn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Zn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Zn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Zn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var fi =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Cy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(fi))
function kd(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Sg(r, t, void 0, e), (e.currentTarget = null)
}
function Rh(e, t) {
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
          kd(i, l, u), (o = s)
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
          kd(i, l, u), (o = s)
        }
    }
  }
  if (va) throw ((e = ru), (va = !1), (ru = null), e)
}
function X(e, t) {
  var n = t[pu]
  n === void 0 && (n = t[pu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Ah(t, e, 2, !1), n.add(r))
}
function hs(e, t, n) {
  var r = 0
  t && (r |= 4), Ah(n, e, r, t)
}
var _o = '_reactListening' + Math.random().toString(36).slice(2)
function Mi(e) {
  if (!e[_o]) {
    ;(e[_o] = !0),
      Fm.forEach(function (n) {
        n !== 'selectionchange' && (Cy.has(n) || hs(n, !1, e), hs(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[_o] || ((t[_o] = !0), hs('selectionchange', !1, t))
  }
}
function Ah(e, t, n, r) {
  switch (hh(t)) {
    case 1:
      var i = zg
      break
    case 4:
      i = Fg
      break
    default:
      i = kc
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !nu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function vs(e, t, n, r, i) {
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
          if (((a = In(l)), a === null)) return
          if (((s = a.tag), s === 5 || s === 6)) {
            r = o = a
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  th(function () {
    var u = o,
      c = gc(n),
      f = []
    e: {
      var p = Nh.get(e)
      if (p !== void 0) {
        var y = bc,
          g = e
        switch (e) {
          case 'keypress':
            if (Jo(n) === 0) break e
          case 'keydown':
          case 'keyup':
            y = ey
            break
          case 'focusin':
            ;(g = 'focus'), (y = us)
            break
          case 'focusout':
            ;(g = 'blur'), (y = us)
            break
          case 'beforeblur':
          case 'afterblur':
            y = us
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
            y = ud
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Bg
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = ry
            break
          case Ph:
          case _h:
          case Oh:
            y = Vg
            break
          case Th:
            y = oy
            break
          case 'scroll':
            y = Dg
            break
          case 'wheel':
            y = ly
            break
          case 'copy':
          case 'cut':
          case 'paste':
            y = Kg
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = fd
        }
        var v = (t & 4) !== 0,
          k = !v && e === 'scroll',
          m = v ? (p !== null ? p + 'Capture' : null) : p
        v = []
        for (var d = u, h; d !== null; ) {
          h = d
          var x = h.stateNode
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x), m !== null && ((x = Ti(d, m)), x != null && v.push(Ii(d, x, h)))),
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
          p && n !== eu && (g = n.relatedTarget || n.fromElement) && (In(g) || g[Yt]))
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
              (g = g ? In(g) : null),
              g !== null &&
                ((k = Jn(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = u)),
          y !== g)
        ) {
          if (
            ((v = ud),
            (x = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = fd), (x = 'onPointerLeave'), (m = 'onPointerEnter'), (d = 'pointer')),
            (k = y == null ? p : hr(y)),
            (h = g == null ? p : hr(g)),
            (p = new v(x, d + 'leave', y, n, c)),
            (p.target = k),
            (p.relatedTarget = h),
            (x = null),
            In(c) === u &&
              ((v = new v(m, d + 'enter', g, n, c)),
              (v.target = h),
              (v.relatedTarget = k),
              (x = v)),
            (k = x),
            y && g)
          )
            t: {
              for (v = y, m = g, d = 0, h = v; h; h = rr(h)) d++
              for (h = 0, x = m; x; x = rr(x)) h++
              for (; 0 < d - h; ) (v = rr(v)), d--
              for (; 0 < h - d; ) (m = rr(m)), h--
              for (; d--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t
                ;(v = rr(v)), (m = rr(m))
              }
              v = null
            }
          else v = null
          y !== null && Sd(f, p, y, v, !1), g !== null && k !== null && Sd(f, k, g, v, !0)
        }
      }
      e: {
        if (
          ((p = u ? hr(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var b = my
        else if (md(p))
          if (kh) b = yy
          else {
            b = vy
            var E = hy
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (b = gy)
        if (b && (b = b(e, u))) {
          xh(f, b, n, c)
          break e
        }
        E && E(e, p, u),
          e === 'focusout' &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === 'number' &&
            Qs(p, 'number', p.value)
      }
      switch (((E = u ? hr(u) : window), e)) {
        case 'focusin':
          ;(md(E) || E.contentEditable === 'true') && ((pr = E), (lu = u), (gi = null))
          break
        case 'focusout':
          gi = lu = pr = null
          break
        case 'mousedown':
          su = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(su = !1), wd(f, n, c)
          break
        case 'selectionchange':
          if (ky) break
        case 'keydown':
        case 'keyup':
          wd(f, n, c)
      }
      var C
      if (Ec)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart'
              break e
            case 'compositionend':
              O = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              O = 'onCompositionUpdate'
              break e
          }
          O = void 0
        }
      else
        dr
          ? yh(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart')
      O &&
        (gh &&
          n.locale !== 'ko' &&
          (dr || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && dr && (C = vh())
            : ((cn = c), (Sc = 'value' in cn ? cn.value : cn.textContent), (dr = !0))),
        (E = ka(u, O)),
        0 < E.length &&
          ((O = new cd(O, e, null, n, c)),
          f.push({ event: O, listeners: E }),
          C ? (O.data = C) : ((C = wh(n)), C !== null && (O.data = C)))),
        (C = uy ? cy(e, n) : fy(e, n)) &&
          ((u = ka(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new cd('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)))
    }
    Rh(f, t)
  })
}
function Ii(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function ka(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ti(e, n)),
      o != null && r.unshift(Ii(e, o, i)),
      (o = Ti(e, t)),
      o != null && r.push(Ii(e, o, i))),
      (e = e.return)
  }
  return r
}
function rr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Sd(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode
    if (s !== null && s === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = Ti(n, o)), s != null && a.unshift(Ii(n, s, l)))
        : i || ((s = Ti(n, o)), s != null && a.push(Ii(n, s, l)))),
      (n = n.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var Ey = /\r\n?/g,
  Py = /\u0000|\uFFFD/g
function bd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Ey,
      `
`
    )
    .replace(Py, '')
}
function Oo(e, t, n) {
  if (((t = bd(t)), bd(e) !== t && n)) throw Error(P(425))
}
function Sa() {}
var uu = null,
  cu = null
function fu(e, t) {
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
var du = typeof setTimeout == 'function' ? setTimeout : void 0,
  _y = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Cd = typeof Promise == 'function' ? Promise : void 0,
  Oy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Cd < 'u'
      ? function (e) {
          return Cd.resolve(null).then(e).catch(Ty)
        }
      : du
function Ty(e) {
  setTimeout(function () {
    throw e
  })
}
function gs(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ai(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Ai(t)
}
function vn(e) {
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
function Ed(e) {
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
var Yr = Math.random().toString(36).slice(2),
  Rt = '__reactFiber$' + Yr,
  Li = '__reactProps$' + Yr,
  Yt = '__reactContainer$' + Yr,
  pu = '__reactEvents$' + Yr,
  Ny = '__reactListeners$' + Yr,
  Ry = '__reactHandles$' + Yr
function In(e) {
  var t = e[Rt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yt] || n[Rt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Ed(e); e !== null; ) {
          if ((n = e[Rt])) return n
          e = Ed(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function io(e) {
  return (
    (e = e[Rt] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function hr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(P(33))
}
function Ja(e) {
  return e[Li] || null
}
var mu = [],
  vr = -1
function Tn(e) {
  return { current: e }
}
function Z(e) {
  0 > vr || ((e.current = mu[vr]), (mu[vr] = null), vr--)
}
function G(e, t) {
  vr++, (mu[vr] = e.current), (e.current = t)
}
var bn = {},
  $e = Tn(bn),
  We = Tn(!1),
  Vn = bn
function Ir(e, t) {
  var n = e.type.contextTypes
  if (!n) return bn
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
function He(e) {
  return (e = e.childContextTypes), e != null
}
function ba() {
  Z(We), Z($e)
}
function Pd(e, t, n) {
  if ($e.current !== bn) throw Error(P(168))
  G($e, t), G(We, n)
}
function $h(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(P(108, hg(e) || 'Unknown', i))
  return oe({}, n, r)
}
function Ca(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bn),
    (Vn = $e.current),
    G($e, e),
    G(We, We.current),
    !0
  )
}
function _d(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(P(169))
  n
    ? ((e = $h(e, t, Vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(We),
      Z($e),
      G($e, e))
    : Z(We),
    G(We, n)
}
var Ut = null,
  el = !1,
  ys = !1
function jh(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e)
}
function Ay(e) {
  ;(el = !0), jh(e)
}
function Nn() {
  if (!ys && Ut !== null) {
    ys = !0
    var e = 0,
      t = H
    try {
      var n = Ut
      for (H = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Ut = null), (el = !1)
    } catch (i) {
      throw (Ut !== null && (Ut = Ut.slice(e + 1)), oh(yc, Nn), i)
    } finally {
      ;(H = t), (ys = !1)
    }
  }
  return null
}
var gr = [],
  yr = 0,
  Ea = null,
  Pa = 0,
  at = [],
  lt = 0,
  Yn = null,
  Bt = 1,
  Wt = ''
function jn(e, t) {
  ;(gr[yr++] = Pa), (gr[yr++] = Ea), (Ea = e), (Pa = t)
}
function Mh(e, t, n) {
  ;(at[lt++] = Bt), (at[lt++] = Wt), (at[lt++] = Yn), (Yn = e)
  var r = Bt
  e = Wt
  var i = 32 - bt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - bt(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Bt = (1 << (32 - bt(t) + i)) | (n << i) | r),
      (Wt = o + e)
  } else (Bt = (1 << o) | (n << i) | r), (Wt = e)
}
function _c(e) {
  e.return !== null && (jn(e, 1), Mh(e, 1, 0))
}
function Oc(e) {
  for (; e === Ea; ) (Ea = gr[--yr]), (gr[yr] = null), (Pa = gr[--yr]), (gr[yr] = null)
  for (; e === Yn; )
    (Yn = at[--lt]),
      (at[lt] = null),
      (Wt = at[--lt]),
      (at[lt] = null),
      (Bt = at[--lt]),
      (at[lt] = null)
}
var qe = null,
  Xe = null,
  te = !1,
  kt = null
function Ih(e, t) {
  var n = ut(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Od(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Xe = vn(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Xe = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yn !== null ? { id: Bt, overflow: Wt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (Xe = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function hu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function vu(e) {
  if (te) {
    var t = Xe
    if (t) {
      var n = t
      if (!Od(e, t)) {
        if (hu(e)) throw Error(P(418))
        t = vn(n.nextSibling)
        var r = qe
        t && Od(e, t)
          ? Ih(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (qe = e))
      }
    } else {
      if (hu(e)) throw Error(P(418))
      ;(e.flags = (e.flags & -4097) | 2), (te = !1), (qe = e)
    }
  }
}
function Td(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  qe = e
}
function To(e) {
  if (e !== qe) return !1
  if (!te) return Td(e), (te = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !fu(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (hu(e)) throw (Lh(), Error(P(418)))
    for (; t; ) Ih(e, t), (t = vn(t.nextSibling))
  }
  if ((Td(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Xe = vn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Xe = null
    }
  } else Xe = qe ? vn(e.stateNode.nextSibling) : null
  return !0
}
function Lh() {
  for (var e = Xe; e; ) e = vn(e.nextSibling)
}
function Lr() {
  ;(Xe = qe = null), (te = !1)
}
function Tc(e) {
  kt === null ? (kt = [e]) : kt.push(e)
}
var $y = Jt.ReactCurrentBatchConfig
function ri(e, t, n) {
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
            a === null ? delete l[o] : (l[o] = a)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(P(284))
    if (!n._owner) throw Error(P(290, e))
  }
  return e
}
function No(e, t) {
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
function Nd(e) {
  var t = e._init
  return t(e._payload)
}
function zh(e) {
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
    return (m = xn(m, d)), (m.index = 0), (m.sibling = null), m
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
  function l(m, d, h, x) {
    return d === null || d.tag !== 6
      ? ((d = Es(h, m.mode, x)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d)
  }
  function s(m, d, h, x) {
    var b = h.type
    return b === fr
      ? c(m, d, h.props.children, x, h.key)
      : d !== null &&
        (d.elementType === b ||
          (typeof b == 'object' && b !== null && b.$$typeof === on && Nd(b) === d.type))
      ? ((x = i(d, h.props)), (x.ref = ri(m, d, h)), (x.return = m), x)
      : ((x = aa(h.type, h.key, h.props, null, m.mode, x)),
        (x.ref = ri(m, d, h)),
        (x.return = m),
        x)
  }
  function u(m, d, h, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Ps(h, m.mode, x)), (d.return = m), d)
      : ((d = i(d, h.children || [])), (d.return = m), d)
  }
  function c(m, d, h, x, b) {
    return d === null || d.tag !== 7
      ? ((d = Wn(h, m.mode, x, b)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d)
  }
  function f(m, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = Es('' + d, m.mode, h)), (d.return = m), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case wo:
          return (
            (h = aa(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = ri(m, null, d)),
            (h.return = m),
            h
          )
        case cr:
          return (d = Ps(d, m.mode, h)), (d.return = m), d
        case on:
          var x = d._init
          return f(m, x(d._payload), h)
      }
      if (ui(d) || Zr(d)) return (d = Wn(d, m.mode, h, null)), (d.return = m), d
      No(m, d)
    }
    return null
  }
  function p(m, d, h, x) {
    var b = d !== null ? d.key : null
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return b !== null ? null : l(m, d, '' + h, x)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case wo:
          return h.key === b ? s(m, d, h, x) : null
        case cr:
          return h.key === b ? u(m, d, h, x) : null
        case on:
          return (b = h._init), p(m, d, b(h._payload), x)
      }
      if (ui(h) || Zr(h)) return b !== null ? null : c(m, d, h, x, null)
      No(m, h)
    }
    return null
  }
  function y(m, d, h, x, b) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (m = m.get(h) || null), l(d, m, '' + x, b)
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case wo:
          return (m = m.get(x.key === null ? h : x.key) || null), s(d, m, x, b)
        case cr:
          return (m = m.get(x.key === null ? h : x.key) || null), u(d, m, x, b)
        case on:
          var E = x._init
          return y(m, d, h, E(x._payload), b)
      }
      if (ui(x) || Zr(x)) return (m = m.get(h) || null), c(d, m, x, b, null)
      No(d, x)
    }
    return null
  }
  function g(m, d, h, x) {
    for (
      var b = null, E = null, C = d, O = (d = 0), j = null;
      C !== null && O < h.length;
      O++
    ) {
      C.index > O ? ((j = C), (C = null)) : (j = C.sibling)
      var A = p(m, C, h[O], x)
      if (A === null) {
        C === null && (C = j)
        break
      }
      e && C && A.alternate === null && t(m, C),
        (d = o(A, d, O)),
        E === null ? (b = A) : (E.sibling = A),
        (E = A),
        (C = j)
    }
    if (O === h.length) return n(m, C), te && jn(m, O), b
    if (C === null) {
      for (; O < h.length; O++)
        (C = f(m, h[O], x)),
          C !== null &&
            ((d = o(C, d, O)), E === null ? (b = C) : (E.sibling = C), (E = C))
      return te && jn(m, O), b
    }
    for (C = r(m, C); O < h.length; O++)
      (j = y(C, m, O, h[O], x)),
        j !== null &&
          (e && j.alternate !== null && C.delete(j.key === null ? O : j.key),
          (d = o(j, d, O)),
          E === null ? (b = j) : (E.sibling = j),
          (E = j))
    return (
      e &&
        C.forEach(function (W) {
          return t(m, W)
        }),
      te && jn(m, O),
      b
    )
  }
  function v(m, d, h, x) {
    var b = Zr(h)
    if (typeof b != 'function') throw Error(P(150))
    if (((h = b.call(h)), h == null)) throw Error(P(151))
    for (
      var E = (b = null), C = d, O = (d = 0), j = null, A = h.next();
      C !== null && !A.done;
      O++, A = h.next()
    ) {
      C.index > O ? ((j = C), (C = null)) : (j = C.sibling)
      var W = p(m, C, A.value, x)
      if (W === null) {
        C === null && (C = j)
        break
      }
      e && C && W.alternate === null && t(m, C),
        (d = o(W, d, O)),
        E === null ? (b = W) : (E.sibling = W),
        (E = W),
        (C = j)
    }
    if (A.done) return n(m, C), te && jn(m, O), b
    if (C === null) {
      for (; !A.done; O++, A = h.next())
        (A = f(m, A.value, x)),
          A !== null &&
            ((d = o(A, d, O)), E === null ? (b = A) : (E.sibling = A), (E = A))
      return te && jn(m, O), b
    }
    for (C = r(m, C); !A.done; O++, A = h.next())
      (A = y(C, m, O, A.value, x)),
        A !== null &&
          (e && A.alternate !== null && C.delete(A.key === null ? O : A.key),
          (d = o(A, d, O)),
          E === null ? (b = A) : (E.sibling = A),
          (E = A))
    return (
      e &&
        C.forEach(function (K) {
          return t(m, K)
        }),
      te && jn(m, O),
      b
    )
  }
  function k(m, d, h, x) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === fr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case wo:
          e: {
            for (var b = h.key, E = d; E !== null; ) {
              if (E.key === b) {
                if (((b = h.type), b === fr)) {
                  if (E.tag === 7) {
                    n(m, E.sibling), (d = i(E, h.props.children)), (d.return = m), (m = d)
                    break e
                  }
                } else if (
                  E.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === on &&
                    Nd(b) === E.type)
                ) {
                  n(m, E.sibling),
                    (d = i(E, h.props)),
                    (d.ref = ri(m, E, h)),
                    (d.return = m),
                    (m = d)
                  break e
                }
                n(m, E)
                break
              } else t(m, E)
              E = E.sibling
            }
            h.type === fr
              ? ((d = Wn(h.props.children, m.mode, x, h.key)), (d.return = m), (m = d))
              : ((x = aa(h.type, h.key, h.props, null, m.mode, x)),
                (x.ref = ri(m, d, h)),
                (x.return = m),
                (m = x))
          }
          return a(m)
        case cr:
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
            ;(d = Ps(h, m.mode, x)), (d.return = m), (m = d)
          }
          return a(m)
        case on:
          return (E = h._init), k(m, d, E(h._payload), x)
      }
      if (ui(h)) return g(m, d, h, x)
      if (Zr(h)) return v(m, d, h, x)
      No(m, h)
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = i(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = Es(h, m.mode, x)), (d.return = m), (m = d)),
        a(m))
      : n(m, d)
  }
  return k
}
var zr = zh(!0),
  Fh = zh(!1),
  _a = Tn(null),
  Oa = null,
  wr = null,
  Nc = null
function Rc() {
  Nc = wr = Oa = null
}
function Ac(e) {
  var t = _a.current
  Z(_a), (e._currentValue = t)
}
function gu(e, t, n) {
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
function Tr(e, t) {
  ;(Oa = e),
    (Nc = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null))
}
function ft(e) {
  var t = e._currentValue
  if (Nc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (Oa === null) throw Error(P(308))
      ;(wr = e), (Oa.dependencies = { lanes: 0, firstContext: e })
    } else wr = wr.next = e
  return t
}
var Ln = null
function $c(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e)
}
function Dh(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), $c(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  )
}
function Kt(e, t) {
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
var an = !1
function jc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function Uh(e, t) {
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
function Ht(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function gn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), D & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Kt(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), $c(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  )
}
function ea(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), wc(e, n)
  }
}
function Rd(e, t) {
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
function Ta(e, t, n, r) {
  var i = e.updateQueue
  an = !1
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
              f = oe({}, f, p)
              break e
            case 2:
              an = !0
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
    ;(Gn |= a), (e.lanes = a), (e.memoizedState = f)
  }
}
function Ad(e, t, n) {
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
var oo = {},
  jt = Tn(oo),
  zi = Tn(oo),
  Fi = Tn(oo)
function zn(e) {
  if (e === oo) throw Error(P(174))
  return e
}
function Mc(e, t) {
  switch ((G(Fi, t), G(zi, e), G(jt, oo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qs(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = qs(t, e))
  }
  Z(jt), G(jt, t)
}
function Fr() {
  Z(jt), Z(zi), Z(Fi)
}
function Bh(e) {
  zn(Fi.current)
  var t = zn(jt.current),
    n = qs(t, e.type)
  t !== n && (G(zi, e), G(jt, n))
}
function Ic(e) {
  zi.current === e && (Z(jt), Z(zi))
}
var re = Tn(0)
function Na(e) {
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
var ws = []
function Lc() {
  for (var e = 0; e < ws.length; e++) ws[e]._workInProgressVersionPrimary = null
  ws.length = 0
}
var ta = Jt.ReactCurrentDispatcher,
  xs = Jt.ReactCurrentBatchConfig,
  Kn = 0,
  ie = null,
  ge = null,
  xe = null,
  Ra = !1,
  yi = !1,
  Di = 0,
  jy = 0
function Te() {
  throw Error(P(321))
}
function zc(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!Et(e[n], t[n])) return !1
  return !0
}
function Fc(e, t, n, r, i, o) {
  if (
    ((Kn = o),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ta.current = e === null || e.memoizedState === null ? zy : Fy),
    (e = n(r, i)),
    yi)
  ) {
    o = 0
    do {
      if (((yi = !1), (Di = 0), 25 <= o)) throw Error(P(301))
      ;(o += 1),
        (xe = ge = null),
        (t.updateQueue = null),
        (ta.current = Dy),
        (e = n(r, i))
    } while (yi)
  }
  if (
    ((ta.current = Aa),
    (t = ge !== null && ge.next !== null),
    (Kn = 0),
    (xe = ge = ie = null),
    (Ra = !1),
    t)
  )
    throw Error(P(300))
  return e
}
function Dc() {
  var e = Di !== 0
  return (Di = 0), e
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return xe === null ? (ie.memoizedState = xe = e) : (xe = xe.next = e), xe
}
function dt() {
  if (ge === null) {
    var e = ie.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ge.next
  var t = xe === null ? ie.memoizedState : xe.next
  if (t !== null) (xe = t), (ge = e)
  else {
    if (e === null) throw Error(P(310))
    ;(ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null
      }),
      xe === null ? (ie.memoizedState = xe = e) : (xe = xe.next = e)
  }
  return xe
}
function Ui(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function ks(e) {
  var t = dt(),
    n = t.queue
  if (n === null) throw Error(P(311))
  n.lastRenderedReducer = e
  var r = ge,
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
      if ((Kn & c) === c)
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
        s === null ? ((l = s = f), (a = r)) : (s = s.next = f), (ie.lanes |= c), (Gn |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    s === null ? (a = r) : (s.next = l),
      Et(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (ie.lanes |= o), (Gn |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Ss(e) {
  var t = dt(),
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
    Et(o, t.memoizedState) || (Be = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Wh() {}
function Hh(e, t) {
  var n = ie,
    r = dt(),
    i = t(),
    o = !Et(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Be = !0)),
    (r = r.queue),
    Uc(Kh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Bi(9, Yh.bind(null, n, r, i, t), void 0, null), ke === null))
      throw Error(P(349))
    Kn & 30 || Vh(n, t, i)
  }
  return i
}
function Vh(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ie.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Yh(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Gh(t) && Qh(e)
}
function Kh(e, t, n) {
  return n(function () {
    Gh(t) && Qh(e)
  })
}
function Gh(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Et(e, n)
  } catch {
    return !0
  }
}
function Qh(e) {
  var t = Kt(e, 1)
  t !== null && Ct(t, e, 1, -1)
}
function $d(e) {
  var t = _t()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ui,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = Ly.bind(null, ie, e)),
    [t.memoizedState, e]
  )
}
function Bi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Xh() {
  return dt().memoizedState
}
function na(e, t, n, r) {
  var i = _t()
  ;(ie.flags |= e), (i.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r))
}
function tl(e, t, n, r) {
  var i = dt()
  r = r === void 0 ? null : r
  var o = void 0
  if (ge !== null) {
    var a = ge.memoizedState
    if (((o = a.destroy), r !== null && zc(r, a.deps))) {
      i.memoizedState = Bi(t, n, o, r)
      return
    }
  }
  ;(ie.flags |= e), (i.memoizedState = Bi(1 | t, n, o, r))
}
function jd(e, t) {
  return na(8390656, 8, e, t)
}
function Uc(e, t) {
  return tl(2048, 8, e, t)
}
function qh(e, t) {
  return tl(4, 2, e, t)
}
function Zh(e, t) {
  return tl(4, 4, e, t)
}
function Jh(e, t) {
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
function e0(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), tl(4, 4, Jh.bind(null, t, e), n)
}
function Bc() {}
function t0(e, t) {
  var n = dt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && zc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function n0(e, t) {
  var n = dt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && zc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function r0(e, t, n) {
  return Kn & 21
    ? (Et(n, t) || ((n = sh()), (ie.lanes |= n), (Gn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n))
}
function My(e, t) {
  var n = H
  ;(H = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = xs.transition
  xs.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(H = n), (xs.transition = r)
  }
}
function i0() {
  return dt().memoizedState
}
function Iy(e, t, n) {
  var r = wn(e)
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), o0(e))
  )
    a0(t, n)
  else if (((n = Dh(e, t, n, r)), n !== null)) {
    var i = ze()
    Ct(n, e, r, i), l0(n, t, r)
  }
}
function Ly(e, t, n) {
  var r = wn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (o0(e)) a0(t, i)
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
        if (((i.hasEagerState = !0), (i.eagerState = l), Et(l, a))) {
          var s = t.interleaved
          s === null ? ((i.next = i), $c(t)) : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Dh(e, t, i, r)), n !== null && ((i = ze()), Ct(n, e, r, i), l0(n, t, r))
  }
}
function o0(e) {
  var t = e.alternate
  return e === ie || (t !== null && t === ie)
}
function a0(e, t) {
  yi = Ra = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function l0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), wc(e, n)
  }
}
var Aa = {
    readContext: ft,
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
  zy = {
    readContext: ft,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: ft,
    useEffect: jd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), na(4194308, 4, Jh.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return na(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return na(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = _t()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = _t()
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
        (e = e.dispatch = Iy.bind(null, ie, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = _t()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: $d,
    useDebugValue: Bc,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e)
    },
    useTransition: function () {
      var e = $d(!1),
        t = e[0]
      return (e = My.bind(null, e[1])), (_t().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        i = _t()
      if (te) {
        if (n === void 0) throw Error(P(407))
        n = n()
      } else {
        if (((n = t()), ke === null)) throw Error(P(349))
        Kn & 30 || Vh(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        jd(Kh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Bi(9, Yh.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = _t(),
        t = ke.identifierPrefix
      if (te) {
        var n = Wt,
          r = Bt
        ;(n = (r & ~(1 << (32 - bt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Di++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = jy++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  Fy = {
    readContext: ft,
    useCallback: t0,
    useContext: ft,
    useEffect: Uc,
    useImperativeHandle: e0,
    useInsertionEffect: qh,
    useLayoutEffect: Zh,
    useMemo: n0,
    useReducer: ks,
    useRef: Xh,
    useState: function () {
      return ks(Ui)
    },
    useDebugValue: Bc,
    useDeferredValue: function (e) {
      var t = dt()
      return r0(t, ge.memoizedState, e)
    },
    useTransition: function () {
      var e = ks(Ui)[0],
        t = dt().memoizedState
      return [e, t]
    },
    useMutableSource: Wh,
    useSyncExternalStore: Hh,
    useId: i0,
    unstable_isNewReconciler: !1
  },
  Dy = {
    readContext: ft,
    useCallback: t0,
    useContext: ft,
    useEffect: Uc,
    useImperativeHandle: e0,
    useInsertionEffect: qh,
    useLayoutEffect: Zh,
    useMemo: n0,
    useReducer: Ss,
    useRef: Xh,
    useState: function () {
      return Ss(Ui)
    },
    useDebugValue: Bc,
    useDeferredValue: function (e) {
      var t = dt()
      return ge === null ? (t.memoizedState = e) : r0(t, ge.memoizedState, e)
    },
    useTransition: function () {
      var e = Ss(Ui)[0],
        t = dt().memoizedState
      return [e, t]
    },
    useMutableSource: Wh,
    useSyncExternalStore: Hh,
    useId: i0,
    unstable_isNewReconciler: !1
  }
function wt(e, t) {
  if (e && e.defaultProps) {
    ;(t = oe({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function yu(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ze(),
      i = wn(e),
      o = Ht(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, i)),
      t !== null && (Ct(t, e, i, r), ea(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ze(),
      i = wn(e),
      o = Ht(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, i)),
      t !== null && (Ct(t, e, i, r), ea(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ze(),
      r = wn(e),
      i = Ht(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = gn(e, i, r)),
      t !== null && (Ct(t, e, r, n), ea(t, e, r))
  }
}
function Md(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ji(n, r) || !ji(i, o)
      : !0
  )
}
function s0(e, t, n) {
  var r = !1,
    i = bn,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = ft(o))
      : ((i = He(t) ? Vn : $e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ir(e, i) : bn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = nl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function Id(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && nl.enqueueReplaceState(t, t.state, null)
}
function wu(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), jc(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = ft(o))
    : ((o = He(t) ? Vn : $e.current), (i.context = Ir(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (yu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && nl.enqueueReplaceState(i, i.state, null),
      Ta(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Dr(e, t) {
  try {
    var n = '',
      r = t
    do (n += mg(r)), (r = r.return)
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
function bs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function xu(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Uy = typeof WeakMap == 'function' ? WeakMap : Map
function u0(e, t, n) {
  ;(n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      ja || ((ja = !0), (Nu = r)), xu(e, t)
    }),
    n
  )
}
function c0(e, t, n) {
  ;(n = Ht(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        xu(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        xu(e, t),
          typeof r != 'function' && (yn === null ? (yn = new Set([this])) : yn.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    n
  )
}
function Ld(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Uy()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = t2.bind(null, e, t, n)), t.then(e, e))
}
function zd(e) {
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
function Fd(e, t, n, r, i) {
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
              : ((t = Ht(-1, 1)), (t.tag = 2), gn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var By = Jt.ReactCurrentOwner,
  Be = !1
function Le(e, t, n, r) {
  t.child = e === null ? Fh(t, null, n, r) : zr(t, e.child, n, r)
}
function Dd(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    Tr(t, i),
    (r = Fc(e, t, n, r, o, i)),
    (n = Dc()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gt(e, t, i))
      : (te && n && _c(t), (t.flags |= 1), Le(e, t, r, i), t.child)
  )
}
function Ud(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Xc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), f0(e, t, o, r, i))
      : ((e = aa(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : ji), n(a, r) && e.ref === t.ref))
      return Gt(e, t, i)
  }
  return (t.flags |= 1), (e = xn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function f0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (ji(o, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Be = !0)
      else return (t.lanes = e.lanes), Gt(e, t, i)
  }
  return ku(e, t, n, r, i)
}
function d0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(kr, Ge),
        (Ge |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          G(kr, Ge),
          (Ge |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        G(kr, Ge),
        (Ge |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(kr, Ge),
      (Ge |= r)
  return Le(e, t, i, n), t.child
}
function p0(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function ku(e, t, n, r, i) {
  var o = He(n) ? Vn : $e.current
  return (
    (o = Ir(t, o)),
    Tr(t, i),
    (n = Fc(e, t, n, r, o, i)),
    (r = Dc()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gt(e, t, i))
      : (te && r && _c(t), (t.flags |= 1), Le(e, t, n, i), t.child)
  )
}
function Bd(e, t, n, r, i) {
  if (He(n)) {
    var o = !0
    Ca(t)
  } else o = !1
  if ((Tr(t, i), t.stateNode === null)) ra(e, t), s0(t, n, r), wu(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps
    a.props = l
    var s = a.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = ft(u))
      : ((u = He(n) ? Vn : $e.current), (u = Ir(t, u)))
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && Id(t, a, r, u)),
      (an = !1)
    var p = t.memoizedState
    ;(a.state = p),
      Ta(t, r, a, i),
      (s = t.memoizedState),
      l !== r || p !== s || We.current || an
        ? (typeof c == 'function' && (yu(t, n, c, r), (s = t.memoizedState)),
          (l = an || Md(t, n, l, r, p, s, u))
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
      Uh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : wt(t.type, l)),
      (a.props = u),
      (f = t.pendingProps),
      (p = a.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = ft(s))
        : ((s = He(n) ? Vn : $e.current), (s = Ir(t, s)))
    var y = n.getDerivedStateFromProps
    ;(c = typeof y == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== f || p !== s) && Id(t, a, r, s)),
      (an = !1),
      (p = t.memoizedState),
      (a.state = p),
      Ta(t, r, a, i)
    var g = t.memoizedState
    l !== f || p !== g || We.current || an
      ? (typeof y == 'function' && (yu(t, n, y, r), (g = t.memoizedState)),
        (u = an || Md(t, n, u, r, p, g, s) || !1)
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
  return Su(e, t, n, r, o, i)
}
function Su(e, t, n, r, i, o) {
  p0(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && _d(t, n, !1), Gt(e, t, o)
  ;(r = t.stateNode), (By.current = t)
  var l = a && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = zr(t, e.child, null, o)), (t.child = zr(t, null, l, o)))
      : Le(e, t, l, o),
    (t.memoizedState = r.state),
    i && _d(t, n, !0),
    t.child
  )
}
function m0(e) {
  var t = e.stateNode
  t.pendingContext
    ? Pd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Pd(e, t.context, !1),
    Mc(e, t.containerInfo)
}
function Wd(e, t, n, r, i) {
  return Lr(), Tc(i), (t.flags |= 256), Le(e, t, n, r), t.child
}
var bu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Cu(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function h0(e, t, n) {
  var r = t.pendingProps,
    i = re.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l
  if (
    ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    G(re, i & 1),
    e === null)
  )
    return (
      vu(t),
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
                : (o = ol(a, r, 0, null)),
              (e = Wn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Cu(n)),
              (t.memoizedState = bu),
              e)
            : Wc(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Wy(e, t, a, r, l, i, n)
  if (o) {
    ;(o = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = xn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = xn(l, o)) : ((o = Wn(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Cu(n)
          : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = bu),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = xn(o, { mode: 'visible', children: r.children })),
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
function Wc(e, t) {
  return (
    (t = ol({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Ro(e, t, n, r) {
  return (
    r !== null && Tc(r),
    zr(t, e.child, null, n),
    (e = Wc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Wy(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bs(Error(P(422)))), Ro(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = ol({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Wn(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && zr(t, e.child, null, a),
        (t.child.memoizedState = Cu(a)),
        (t.memoizedState = bu),
        o)
  if (!(t.mode & 1)) return Ro(e, t, a, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (o = Error(P(419))), (r = bs(o, r, void 0)), Ro(e, t, a, r)
  }
  if (((l = (a & e.childLanes) !== 0), Be || l)) {
    if (((r = ke), r !== null)) {
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
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), Kt(e, i), Ct(r, e, i, -1))
    }
    return Qc(), (r = bs(Error(P(421)))), Ro(e, t, a, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = n2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Xe = vn(i.nextSibling)),
      (qe = t),
      (te = !0),
      (kt = null),
      e !== null &&
        ((at[lt++] = Bt),
        (at[lt++] = Wt),
        (at[lt++] = Yn),
        (Bt = e.id),
        (Wt = e.overflow),
        (Yn = t)),
      (t = Wc(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Hd(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), gu(e.return, t, n)
}
function Cs(e, t, n, r, i) {
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
function v0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((Le(e, t, r.children, n), (r = re.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hd(e, n, t)
        else if (e.tag === 19) Hd(e, n, t)
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
  if ((G(re, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && Na(e) === null && (i = n), (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Cs(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Na(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        Cs(t, !0, n, null, o)
        break
      case 'together':
        Cs(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ra(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(P(153))
  if (t.child !== null) {
    for (
      e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Hy(e, t, n) {
  switch (t.tag) {
    case 3:
      m0(t), Lr()
      break
    case 5:
      Bh(t)
      break
    case 1:
      He(t.type) && Ca(t)
      break
    case 4:
      Mc(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      G(_a, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(re, re.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? h0(e, t, n)
          : (G(re, re.current & 1), (e = Gt(e, t, n)), e !== null ? e.sibling : null)
      G(re, re.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return v0(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(re, re.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), d0(e, t, n)
  }
  return Gt(e, t, n)
}
var g0, Eu, y0, w0
g0 = function (e, t) {
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
Eu = function () {}
y0 = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), zn(jt.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = Ks(e, i)), (r = Ks(e, r)), (o = [])
        break
      case 'select':
        ;(i = oe({}, i, { value: void 0 })), (r = oe({}, r, { value: void 0 })), (o = [])
        break
      case 'textarea':
        ;(i = Xs(e, i)), (r = Xs(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Sa)
    }
    Zs(n, r)
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
            (_i.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
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
              (_i.hasOwnProperty(u)
                ? (s != null && u === 'onScroll' && X('scroll', e),
                  o || l === s || (o = []))
                : (o = o || []).push(u, s))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
w0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function ii(e, t) {
  if (!te)
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
function Ne(e) {
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
function Vy(e, t, n) {
  var r = t.pendingProps
  switch ((Oc(t), t.tag)) {
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
      return Ne(t), null
    case 1:
      return He(t.type) && ba(), Ne(t), null
    case 3:
      return (
        (r = t.stateNode),
        Fr(),
        Z(We),
        Z($e),
        Lc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (To(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && ($u(kt), (kt = null)))),
        Eu(e, t),
        Ne(t),
        null
      )
    case 5:
      Ic(t)
      var i = zn(Fi.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        y0(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166))
          return Ne(t), null
        }
        if (((e = zn(jt.current)), To(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Rt] = t), (r[Li] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              X('cancel', r), X('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              X('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < fi.length; i++) X(fi[i], r)
              break
            case 'source':
              X('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              X('error', r), X('load', r)
              break
            case 'details':
              X('toggle', r)
              break
            case 'input':
              Jf(r, o), X('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }), X('invalid', r)
              break
            case 'textarea':
              td(r, o), X('invalid', r)
          }
          Zs(n, o), (i = null)
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a]
              a === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 && Oo(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 && Oo(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : _i.hasOwnProperty(a) && l != null && a === 'onScroll' && X('scroll', r)
            }
          switch (n) {
            case 'input':
              xo(r), ed(r, o, !0)
              break
            case 'textarea':
              xo(r), nd(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = Sa)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Km(n)),
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
            (e[Rt] = t),
            (e[Li] = r),
            g0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Js(n, r)), n)) {
              case 'dialog':
                X('cancel', e), X('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                X('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < fi.length; i++) X(fi[i], e)
                i = r
                break
              case 'source':
                X('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                X('error', e), X('load', e), (i = r)
                break
              case 'details':
                X('toggle', e), (i = r)
                break
              case 'input':
                Jf(e, r), (i = Ks(e, r)), X('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = oe({}, r, { value: void 0 })),
                  X('invalid', e)
                break
              case 'textarea':
                td(e, r), (i = Xs(e, r)), X('invalid', e)
                break
              default:
                i = r
            }
            Zs(n, i), (l = i)
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o]
                o === 'style'
                  ? Xm(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Gm(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Oi(e, s)
                    : typeof s == 'number' && Oi(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (_i.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && X('scroll', e)
                      : s != null && pc(e, o, s, a))
              }
            switch (n) {
              case 'input':
                xo(e), ed(e, r, !1)
                break
              case 'textarea':
                xo(e), nd(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Sn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Er(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && Er(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = Sa)
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
      return Ne(t), null
    case 6:
      if (e && t.stateNode != null) w0(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(P(166))
        if (((n = zn(Fi.current)), zn(jt.current), To(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Rt] = t),
            (o = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Rt] = t),
            (t.stateNode = r)
      }
      return Ne(t), null
    case 13:
      if (
        (Z(re),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && Xe !== null && t.mode & 1 && !(t.flags & 128))
          Lh(), Lr(), (t.flags |= 98560), (o = !1)
        else if (((o = To(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318))
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
              throw Error(P(317))
            o[Rt] = t
          } else Lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ne(t), (o = !1)
        } else kt !== null && ($u(kt), (kt = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || re.current & 1 ? ye === 0 && (ye = 3) : Qc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null)
    case 4:
      return Fr(), Eu(e, t), e === null && Mi(t.stateNode.containerInfo), Ne(t), null
    case 10:
      return Ac(t.type._context), Ne(t), null
    case 17:
      return He(t.type) && ba(), Ne(t), null
    case 19:
      if ((Z(re), (o = t.memoizedState), o === null)) return Ne(t), null
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) ii(o, !1)
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Na(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ii(o, !1),
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
                return G(re, (re.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            ce() > Ur &&
            ((t.flags |= 128), (r = !0), ii(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Na(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ii(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !te)
            )
              return Ne(t), null
          } else
            2 * ce() - o.renderingStartTime > Ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ii(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last), n !== null ? (n.sibling = a) : (t.child = a), (o.last = a))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ce()),
          (t.sibling = null),
          (n = re.current),
          G(re, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null)
    case 22:
    case 23:
      return (
        Gc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(P(156, t.tag))
}
function Yy(e, t) {
  switch ((Oc(t), t.tag)) {
    case 1:
      return (
        He(t.type) && ba(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Fr(),
        Z(We),
        Z($e),
        Lc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Ic(t), null
    case 13:
      if ((Z(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340))
        Lr()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return Z(re), null
    case 4:
      return Fr(), null
    case 10:
      return Ac(t.type._context), null
    case 22:
    case 23:
      return Gc(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ao = !1,
  Ae = !1,
  Ky = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null
function xr(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        se(e, t, r)
      }
    else n.current = null
}
function Pu(e, t, n) {
  try {
    n()
  } catch (r) {
    se(e, t, r)
  }
}
var Vd = !1
function Gy(e, t) {
  if (((uu = wa), (e = Ch()), Pc(e))) {
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
  for (cu = { focusedElem: e, selectionRange: n }, wa = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e)
    else
      for (; N !== null; ) {
        t = N
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
                      t.elementType === t.type ? v : wt(t.type, v),
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
        } catch (x) {
          se(t, t.return, x)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (N = e)
          break
        }
        N = t.return
      }
  return (g = Vd), (Vd = !1), g
}
function wi(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Pu(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function rl(e, t) {
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
function _u(e) {
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
function x0(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), x0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Rt], delete t[Li], delete t[pu], delete t[Ny], delete t[Ry])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function k0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Yd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || k0(e.return)) return null
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
function Ou(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Sa))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ou(e, t, n), e = e.sibling; e !== null; ) Ou(e, t, n), (e = e.sibling)
}
function Tu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tu(e, t, n), e = e.sibling; e !== null; ) Tu(e, t, n), (e = e.sibling)
}
var be = null,
  xt = !1
function nn(e, t, n) {
  for (n = n.child; n !== null; ) S0(e, t, n), (n = n.sibling)
}
function S0(e, t, n) {
  if ($t && typeof $t.onCommitFiberUnmount == 'function')
    try {
      $t.onCommitFiberUnmount(Qa, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || xr(n, t)
    case 6:
      var r = be,
        i = xt
      ;(be = null),
        nn(e, t, n),
        (be = r),
        (xt = i),
        be !== null &&
          (xt
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode))
      break
    case 18:
      be !== null &&
        (xt
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8 ? gs(e.parentNode, n) : e.nodeType === 1 && gs(e, n),
            Ai(e))
          : gs(be, n.stateNode))
      break
    case 4:
      ;(r = be),
        (i = xt),
        (be = n.stateNode.containerInfo),
        (xt = !0),
        nn(e, t, n),
        (be = r),
        (xt = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ae && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next
        do {
          var o = i,
            a = o.destroy
          ;(o = o.tag), a !== void 0 && (o & 2 || o & 4) && Pu(n, t, a), (i = i.next)
        } while (i !== r)
      }
      nn(e, t, n)
      break
    case 1:
      if (
        !Ae &&
        (xr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          se(n, t, l)
        }
      nn(e, t, n)
      break
    case 21:
      nn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), nn(e, t, n), (Ae = r))
        : nn(e, t, n)
      break
    default:
      nn(e, t, n)
  }
}
function Kd(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Ky()),
      t.forEach(function (r) {
        var i = r2.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function yt(e, t) {
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
              ;(be = l.stateNode), (xt = !1)
              break e
            case 3:
              ;(be = l.stateNode.containerInfo), (xt = !0)
              break e
            case 4:
              ;(be = l.stateNode.containerInfo), (xt = !0)
              break e
          }
          l = l.return
        }
        if (be === null) throw Error(P(160))
        S0(o, a, i), (be = null), (xt = !1)
        var s = i.alternate
        s !== null && (s.return = null), (i.return = null)
      } catch (u) {
        se(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) b0(t, e), (t = t.sibling)
}
function b0(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Pt(e), r & 4)) {
        try {
          wi(3, e, e.return), rl(3, e)
        } catch (v) {
          se(e, e.return, v)
        }
        try {
          wi(5, e, e.return)
        } catch (v) {
          se(e, e.return, v)
        }
      }
      break
    case 1:
      yt(t, e), Pt(e), r & 512 && n !== null && xr(n, n.return)
      break
    case 5:
      if ((yt(t, e), Pt(e), r & 512 && n !== null && xr(n, n.return), e.flags & 32)) {
        var i = e.stateNode
        try {
          Oi(i, '')
        } catch (v) {
          se(e, e.return, v)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && Vm(i, o), Js(l, a)
            var u = Js(l, o)
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                f = s[a + 1]
              c === 'style'
                ? Xm(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? Gm(i, f)
                : c === 'children'
                ? Oi(i, f)
                : pc(i, c, f, u)
            }
            switch (l) {
              case 'input':
                Gs(i, o)
                break
              case 'textarea':
                Ym(i, o)
                break
              case 'select':
                var p = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var y = o.value
                y != null
                  ? Er(i, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Er(i, !!o.multiple, o.defaultValue, !0)
                      : Er(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Li] = o
          } catch (v) {
            se(e, e.return, v)
          }
      }
      break
    case 6:
      if ((yt(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (v) {
          se(e, e.return, v)
        }
      }
      break
    case 3:
      if ((yt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Ai(t.containerInfo)
        } catch (v) {
          se(e, e.return, v)
        }
      break
    case 4:
      yt(t, e), Pt(e)
      break
    case 13:
      yt(t, e),
        Pt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Yc = ce())),
        r & 4 && Kd(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (u = Ae) || c), yt(t, e), (Ae = u)) : yt(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (f = N = c; N !== null; ) {
              switch (((p = N), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wi(4, p, p.return)
                  break
                case 1:
                  xr(p, p.return)
                  var g = p.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount()
                    } catch (v) {
                      se(r, n, v)
                    }
                  }
                  break
                case 5:
                  xr(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    Qd(f)
                    continue
                  }
              }
              y !== null ? ((y.return = p), (N = y)) : Qd(f)
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
                      (l.style.display = Qm('display', a)))
              } catch (v) {
                se(e, e.return, v)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (v) {
                se(e, e.return, v)
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
      yt(t, e), Pt(e), r & 4 && Kd(e)
      break
    case 21:
      break
    default:
      yt(t, e), Pt(e)
  }
}
function Pt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (k0(n)) {
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
          r.flags & 32 && (Oi(i, ''), (r.flags &= -33))
          var o = Yd(e)
          Tu(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Yd(e)
          Ou(e, l, a)
          break
        default:
          throw Error(P(161))
      }
    } catch (s) {
      se(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Qy(e, t, n) {
  ;(N = e), C0(e)
}
function C0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Ao
      if (!a) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || Ae
        l = Ao
        var u = Ae
        if (((Ao = a), (Ae = s) && !u))
          for (N = i; N !== null; )
            (a = N),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Xd(i)
                : s !== null
                ? ((s.return = a), (N = s))
                : Xd(i)
        for (; o !== null; ) (N = o), C0(o), (o = o.sibling)
        ;(N = i), (Ao = l), (Ae = u)
      }
      Gd(e)
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (N = o)) : Gd(e)
  }
}
function Gd(e) {
  for (; N !== null; ) {
    var t = N
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || rl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && Ad(t, o, r)
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
                Ad(t, a, n)
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
                    f !== null && Ai(f)
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
        Ae || (t.flags & 512 && _u(t))
      } catch (p) {
        se(t, t.return, p)
      }
    }
    if (t === e) {
      N = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (N = n)
      break
    }
    N = t.return
  }
}
function Qd(e) {
  for (; N !== null; ) {
    var t = N
    if (t === e) {
      N = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (N = n)
      break
    }
    N = t.return
  }
}
function Xd(e) {
  for (; N !== null; ) {
    var t = N
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            rl(4, t)
          } catch (s) {
            se(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              se(t, i, s)
            }
          }
          var o = t.return
          try {
            _u(t)
          } catch (s) {
            se(t, o, s)
          }
          break
        case 5:
          var a = t.return
          try {
            _u(t)
          } catch (s) {
            se(t, a, s)
          }
      }
    } catch (s) {
      se(t, t.return, s)
    }
    if (t === e) {
      N = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (N = l)
      break
    }
    N = t.return
  }
}
var Xy = Math.ceil,
  $a = Jt.ReactCurrentDispatcher,
  Hc = Jt.ReactCurrentOwner,
  ct = Jt.ReactCurrentBatchConfig,
  D = 0,
  ke = null,
  ve = null,
  Pe = 0,
  Ge = 0,
  kr = Tn(0),
  ye = 0,
  Wi = null,
  Gn = 0,
  il = 0,
  Vc = 0,
  xi = null,
  Ue = null,
  Yc = 0,
  Ur = 1 / 0,
  Dt = null,
  ja = !1,
  Nu = null,
  yn = null,
  $o = !1,
  fn = null,
  Ma = 0,
  ki = 0,
  Ru = null,
  ia = -1,
  oa = 0
function ze() {
  return D & 6 ? ce() : ia !== -1 ? ia : (ia = ce())
}
function wn(e) {
  return e.mode & 1
    ? D & 2 && Pe !== 0
      ? Pe & -Pe
      : $y.transition !== null
      ? (oa === 0 && (oa = sh()), oa)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hh(e.type))),
        e)
    : 1
}
function Ct(e, t, n, r) {
  if (50 < ki) throw ((ki = 0), (Ru = null), Error(P(185)))
  no(e, n, r),
    (!(D & 2) || e !== ke) &&
      (e === ke && (!(D & 2) && (il |= n), ye === 4 && sn(e, Pe)),
      Ve(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((Ur = ce() + 500), el && Nn()))
}
function Ve(e, t) {
  var n = e.callbackNode
  $g(e, t)
  var r = ya(e, e === ke ? Pe : 0)
  if (r === 0) n !== null && od(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && od(n), t === 1))
      e.tag === 0 ? Ay(qd.bind(null, e)) : jh(qd.bind(null, e)),
        Oy(function () {
          !(D & 6) && Nn()
        }),
        (n = null)
    else {
      switch (uh(r)) {
        case 1:
          n = yc
          break
        case 4:
          n = ah
          break
        case 16:
          n = ga
          break
        case 536870912:
          n = lh
          break
        default:
          n = ga
      }
      n = A0(n, E0.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function E0(e, t) {
  if (((ia = -1), (oa = 0), D & 6)) throw Error(P(327))
  var n = e.callbackNode
  if (Nr() && e.callbackNode !== n) return null
  var r = ya(e, e === ke ? Pe : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Ia(e, r)
  else {
    t = r
    var i = D
    D |= 2
    var o = _0()
    ;(ke !== e || Pe !== t) && ((Dt = null), (Ur = ce() + 500), Bn(e, t))
    do
      try {
        Jy()
        break
      } catch (l) {
        P0(e, l)
      }
    while (!0)
    Rc(),
      ($a.current = o),
      (D = i),
      ve !== null ? (t = 0) : ((ke = null), (Pe = 0), (t = ye))
  }
  if (t !== 0) {
    if ((t === 2 && ((i = iu(e)), i !== 0 && ((r = i), (t = Au(e, i)))), t === 1))
      throw ((n = Wi), Bn(e, 0), sn(e, r), Ve(e, ce()), n)
    if (t === 6) sn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !qy(i) &&
          ((t = Ia(e, r)),
          t === 2 && ((o = iu(e)), o !== 0 && ((r = o), (t = Au(e, o)))),
          t === 1))
      )
        throw ((n = Wi), Bn(e, 0), sn(e, r), Ve(e, ce()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345))
        case 2:
          Mn(e, Ue, Dt)
          break
        case 3:
          if ((sn(e, r), (r & 130023424) === r && ((t = Yc + 500 - ce()), 10 < t))) {
            if (ya(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = du(Mn.bind(null, e, Ue, Dt), t)
            break
          }
          Mn(e, Ue, Dt)
          break
        case 4:
          if ((sn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - bt(r)
            ;(o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o)
          }
          if (
            ((r = i),
            (r = ce() - r),
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
                : 1960 * Xy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = du(Mn.bind(null, e, Ue, Dt), r)
            break
          }
          Mn(e, Ue, Dt)
          break
        case 5:
          Mn(e, Ue, Dt)
          break
        default:
          throw Error(P(329))
      }
    }
  }
  return Ve(e, ce()), e.callbackNode === n ? E0.bind(null, e) : null
}
function Au(e, t) {
  var n = xi
  return (
    e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    (e = Ia(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && $u(t)),
    e
  )
}
function $u(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e)
}
function qy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!Et(o(), i)) return !1
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
function sn(e, t) {
  for (
    t &= ~Vc, t &= ~il, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - bt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function qd(e) {
  if (D & 6) throw Error(P(327))
  Nr()
  var t = ya(e, 0)
  if (!(t & 1)) return Ve(e, ce()), null
  var n = Ia(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = iu(e)
    r !== 0 && ((t = r), (n = Au(e, r)))
  }
  if (n === 1) throw ((n = Wi), Bn(e, 0), sn(e, t), Ve(e, ce()), n)
  if (n === 6) throw Error(P(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mn(e, Ue, Dt),
    Ve(e, ce()),
    null
  )
}
function Kc(e, t) {
  var n = D
  D |= 1
  try {
    return e(t)
  } finally {
    ;(D = n), D === 0 && ((Ur = ce() + 500), el && Nn())
  }
}
function Qn(e) {
  fn !== null && fn.tag === 0 && !(D & 6) && Nr()
  var t = D
  D |= 1
  var n = ct.transition,
    r = H
  try {
    if (((ct.transition = null), (H = 1), e)) return e()
  } finally {
    ;(H = r), (ct.transition = n), (D = t), !(D & 6) && Nn()
  }
}
function Gc() {
  ;(Ge = kr.current), Z(kr)
}
function Bn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), _y(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n
      switch ((Oc(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && ba()
          break
        case 3:
          Fr(), Z(We), Z($e), Lc()
          break
        case 5:
          Ic(r)
          break
        case 4:
          Fr()
          break
        case 13:
          Z(re)
          break
        case 19:
          Z(re)
          break
        case 10:
          Ac(r.type._context)
          break
        case 22:
        case 23:
          Gc()
      }
      n = n.return
    }
  if (
    ((ke = e),
    (ve = e = xn(e.current, null)),
    (Pe = Ge = t),
    (ye = 0),
    (Wi = null),
    (Vc = il = Gn = 0),
    (Ue = xi = null),
    Ln !== null)
  ) {
    for (t = 0; t < Ln.length; t++)
      if (((n = Ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var a = o.next
          ;(o.next = i), (r.next = a)
        }
        n.pending = r
      }
    Ln = null
  }
  return e
}
function P0(e, t) {
  do {
    var n = ve
    try {
      if ((Rc(), (ta.current = Aa), Ra)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Ra = !1
      }
      if (
        ((Kn = 0),
        (xe = ge = ie = null),
        (yi = !1),
        (Di = 0),
        (Hc.current = null),
        n === null || n.return === null)
      ) {
        ;(ye = 1), (Wi = t), (ve = null)
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
          var y = zd(a)
          if (y !== null) {
            ;(y.flags &= -257),
              Fd(y, a, l, o, t),
              y.mode & 1 && Ld(o, u, t),
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
              Ld(o, u, t), Qc()
              break e
            }
            s = Error(P(426))
          }
        } else if (te && l.mode & 1) {
          var k = zd(a)
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), Fd(k, a, l, o, t), Tc(Dr(s, l))
            break e
          }
        }
        ;(o = s = Dr(s, l)),
          ye !== 4 && (ye = 2),
          xi === null ? (xi = [o]) : xi.push(o),
          (o = a)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var m = u0(o, s, t)
              Rd(o, m)
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
                    (yn === null || !yn.has(h))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var x = c0(o, l, t)
                Rd(o, x)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      T0(n)
    } catch (b) {
      ;(t = b), ve === n && n !== null && (ve = n = n.return)
      continue
    }
    break
  } while (!0)
}
function _0() {
  var e = $a.current
  return ($a.current = Aa), e === null ? Aa : e
}
function Qc() {
  ;(ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    ke === null || (!(Gn & 268435455) && !(il & 268435455)) || sn(ke, Pe)
}
function Ia(e, t) {
  var n = D
  D |= 2
  var r = _0()
  ;(ke !== e || Pe !== t) && ((Dt = null), Bn(e, t))
  do
    try {
      Zy()
      break
    } catch (i) {
      P0(e, i)
    }
  while (!0)
  if ((Rc(), (D = n), ($a.current = r), ve !== null)) throw Error(P(261))
  return (ke = null), (Pe = 0), ye
}
function Zy() {
  for (; ve !== null; ) O0(ve)
}
function Jy() {
  for (; ve !== null && !Cg(); ) O0(ve)
}
function O0(e) {
  var t = R0(e.alternate, e, Ge)
  ;(e.memoizedProps = e.pendingProps), t === null ? T0(e) : (ve = t), (Hc.current = null)
}
function T0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Yy(n, t)), n !== null)) {
        ;(n.flags &= 32767), (ve = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ye = 6), (ve = null)
        return
      }
    } else if (((n = Vy(n, t, Ge)), n !== null)) {
      ve = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      ve = t
      return
    }
    ve = t = e
  } while (t !== null)
  ye === 0 && (ye = 5)
}
function Mn(e, t, n) {
  var r = H,
    i = ct.transition
  try {
    ;(ct.transition = null), (H = 1), e2(e, t, n, r)
  } finally {
    ;(ct.transition = i), (H = r)
  }
  return null
}
function e2(e, t, n, r) {
  do Nr()
  while (fn !== null)
  if (D & 6) throw Error(P(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (jg(e, o),
    e === ke && ((ve = ke = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $o ||
      (($o = !0),
      A0(ga, function () {
        return Nr(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = ct.transition), (ct.transition = null)
    var a = H
    H = 1
    var l = D
    ;(D |= 4),
      (Hc.current = null),
      Gy(e, n),
      b0(n, e),
      xy(cu),
      (wa = !!uu),
      (cu = uu = null),
      (e.current = n),
      Qy(n),
      Eg(),
      (D = l),
      (H = a),
      (ct.transition = o)
  } else e.current = n
  if (
    ($o && (($o = !1), (fn = e), (Ma = i)),
    (o = e.pendingLanes),
    o === 0 && (yn = null),
    Og(n.stateNode),
    Ve(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (ja) throw ((ja = !1), (e = Nu), (Nu = null), e)
  return (
    Ma & 1 && e.tag !== 0 && Nr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ru ? ki++ : ((ki = 0), (Ru = e))) : (ki = 0),
    Nn(),
    null
  )
}
function Nr() {
  if (fn !== null) {
    var e = uh(Ma),
      t = ct.transition,
      n = H
    try {
      if (((ct.transition = null), (H = 16 > e ? 16 : e), fn === null)) var r = !1
      else {
        if (((e = fn), (fn = null), (Ma = 0), D & 6)) throw Error(P(331))
        var i = D
        for (D |= 4, N = e.current; N !== null; ) {
          var o = N,
            a = o.child
          if (N.flags & 16) {
            var l = o.deletions
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s]
                for (N = u; N !== null; ) {
                  var c = N
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (N = f)
                  else
                    for (; N !== null; ) {
                      c = N
                      var p = c.sibling,
                        y = c.return
                      if ((x0(c), c === u)) {
                        N = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = y), (N = p)
                        break
                      }
                      N = y
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
              N = o
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (N = a)
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wi(9, o, o.return)
                }
              var m = o.sibling
              if (m !== null) {
                ;(m.return = o.return), (N = m)
                break e
              }
              N = o.return
            }
        }
        var d = e.current
        for (N = d; N !== null; ) {
          a = N
          var h = a.child
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (N = h)
          else
            e: for (a = d; N !== null; ) {
              if (((l = N), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rl(9, l)
                  }
                } catch (b) {
                  se(l, l.return, b)
                }
              if (l === a) {
                N = null
                break e
              }
              var x = l.sibling
              if (x !== null) {
                ;(x.return = l.return), (N = x)
                break e
              }
              N = l.return
            }
        }
        if (((D = i), Nn(), $t && typeof $t.onPostCommitFiberRoot == 'function'))
          try {
            $t.onPostCommitFiberRoot(Qa, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(H = n), (ct.transition = t)
    }
  }
  return !1
}
function Zd(e, t, n) {
  ;(t = Dr(n, t)),
    (t = u0(e, t, 1)),
    (e = gn(e, t, 1)),
    (t = ze()),
    e !== null && (no(e, 1, t), Ve(e, t))
}
function se(e, t, n) {
  if (e.tag === 3) Zd(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zd(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (yn === null || !yn.has(r)))
        ) {
          ;(e = Dr(n, e)),
            (e = c0(t, e, 1)),
            (t = gn(t, e, 1)),
            (e = ze()),
            t !== null && (no(t, 1, e), Ve(t, e))
          break
        }
      }
      t = t.return
    }
}
function t2(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Pe & n) === n &&
      (ye === 4 || (ye === 3 && (Pe & 130023424) === Pe && 500 > ce() - Yc)
        ? Bn(e, 0)
        : (Vc |= n)),
    Ve(e, t)
}
function N0(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = bo), (bo <<= 1), !(bo & 130023424) && (bo = 4194304)) : (t = 1))
  var n = ze()
  ;(e = Kt(e, t)), e !== null && (no(e, t, n), Ve(e, n))
}
function n2(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), N0(e, n)
}
function r2(e, t) {
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
  r !== null && r.delete(t), N0(e, n)
}
var R0
R0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Be = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), Hy(e, t, n)
      Be = !!(e.flags & 131072)
    }
  else (Be = !1), te && t.flags & 1048576 && Mh(t, Pa, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      ra(e, t), (e = t.pendingProps)
      var i = Ir(t, $e.current)
      Tr(t, n), (i = Fc(null, t, r, e, i, n))
      var o = Dc()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((o = !0), Ca(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            jc(t),
            (i.updater = nl),
            (t.stateNode = i),
            (i._reactInternals = t),
            wu(t, r, e, n),
            (t = Su(null, t, r, !0, o, n)))
          : ((t.tag = 0), te && o && _c(t), Le(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (ra(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = o2(r)),
          (e = wt(r, e)),
          i)
        ) {
          case 0:
            t = ku(null, t, r, e, n)
            break e
          case 1:
            t = Bd(null, t, r, e, n)
            break e
          case 11:
            t = Dd(null, t, r, e, n)
            break e
          case 14:
            t = Ud(null, t, r, wt(r.type, e), n)
            break e
        }
        throw Error(P(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        ku(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        Bd(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((m0(t), e === null)) throw Error(P(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Uh(e, t),
          Ta(t, r, null, n)
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
            ;(i = Dr(Error(P(423)), t)), (t = Wd(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Dr(Error(P(424)), t)), (t = Wd(e, t, r, n, i))
            break e
          } else
            for (
              Xe = vn(t.stateNode.containerInfo.firstChild),
                qe = t,
                te = !0,
                kt = null,
                n = Fh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Lr(), r === i)) {
            t = Gt(e, t, n)
            break e
          }
          Le(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Bh(t),
        e === null && vu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        fu(r, i) ? (a = null) : o !== null && fu(r, o) && (t.flags |= 32),
        p0(e, t),
        Le(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && vu(t), null
    case 13:
      return h0(e, t, n)
    case 4:
      return (
        Mc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zr(t, null, r, n)) : Le(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        Dd(e, t, r, i, n)
      )
    case 7:
      return Le(e, t, t.pendingProps, n), t.child
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          G(_a, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Et(o.value, a)) {
            if (o.children === i.children && !We.current) {
              t = Gt(e, t, n)
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
                      ;(s = Ht(-1, n & -n)), (s.tag = 2)
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
                      gu(o.return, n, t),
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
                  gu(a, n, t),
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
        Le(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Tr(t, n),
        (i = ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type), (i = wt(r, t.pendingProps)), (i = wt(r.type, i)), Ud(e, t, r, i, n)
      )
    case 15:
      return f0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        ra(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), Ca(t)) : (e = !1),
        Tr(t, n),
        s0(t, r, i),
        wu(t, r, i, n),
        Su(null, t, r, !0, e, n)
      )
    case 19:
      return v0(e, t, n)
    case 22:
      return d0(e, t, n)
  }
  throw Error(P(156, t.tag))
}
function A0(e, t) {
  return oh(e, t)
}
function i2(e, t, n, r) {
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
function ut(e, t, n, r) {
  return new i2(e, t, n, r)
}
function Xc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function o2(e) {
  if (typeof e == 'function') return Xc(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === hc)) return 11
    if (e === vc) return 14
  }
  return 2
}
function xn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
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
function aa(e, t, n, r, i, o) {
  var a = 2
  if (((r = e), typeof e == 'function')) Xc(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case fr:
        return Wn(n.children, i, o, t)
      case mc:
        ;(a = 8), (i |= 8)
        break
      case Ws:
        return (e = ut(12, n, t, i | 2)), (e.elementType = Ws), (e.lanes = o), e
      case Hs:
        return (e = ut(13, n, t, i)), (e.elementType = Hs), (e.lanes = o), e
      case Vs:
        return (e = ut(19, n, t, i)), (e.elementType = Vs), (e.lanes = o), e
      case Bm:
        return ol(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Dm:
              a = 10
              break e
            case Um:
              a = 9
              break e
            case hc:
              a = 11
              break e
            case vc:
              a = 14
              break e
            case on:
              ;(a = 16), (r = null)
              break e
          }
        throw Error(P(130, e == null ? e : typeof e, ''))
    }
  return (t = ut(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
}
function Wn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e
}
function ol(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Bm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Es(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e
}
function Ps(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function a2(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = as(0)),
    (this.expirationTimes = as(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = as(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function qc(e, t, n, r, i, o, a, l, s) {
  return (
    (e = new a2(e, t, n, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    jc(o),
    e
  )
}
function l2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: cr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function $0(e) {
  if (!e) return bn
  e = e._reactInternals
  e: {
    if (Jn(e) !== e || e.tag !== 1) throw Error(P(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (He(t.type)) {
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
    if (He(n)) return $h(e, n, t)
  }
  return t
}
function j0(e, t, n, r, i, o, a, l, s) {
  return (
    (e = qc(n, r, !0, e, i, o, a, l, s)),
    (e.context = $0(null)),
    (n = e.current),
    (r = ze()),
    (i = wn(n)),
    (o = Ht(r, i)),
    (o.callback = t ?? null),
    gn(n, o, i),
    (e.current.lanes = i),
    no(e, i, r),
    Ve(e, r),
    e
  )
}
function al(e, t, n, r) {
  var i = t.current,
    o = ze(),
    a = wn(i)
  return (
    (n = $0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ht(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gn(i, t, a)),
    e !== null && (Ct(e, i, a, o), ea(e, i, a)),
    a
  )
}
function La(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Jd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Zc(e, t) {
  Jd(e, t), (e = e.alternate) && Jd(e, t)
}
function s2() {
  return null
}
var M0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Jc(e) {
  this._internalRoot = e
}
ll.prototype.render = Jc.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(P(409))
  al(e, t, null, null)
}
ll.prototype.unmount = Jc.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Qn(function () {
      al(null, e, null, null)
    }),
      (t[Yt] = null)
  }
}
function ll(e) {
  this._internalRoot = e
}
ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = dh()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    ln.splice(n, 0, e), n === 0 && mh(e)
  }
}
function ef(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function ep() {}
function u2(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = La(a)
        o.call(u)
      }
    }
    var a = j0(t, r, e, 0, null, !1, !1, '', ep)
    return (
      (e._reactRootContainer = a),
      (e[Yt] = a.current),
      Mi(e.nodeType === 8 ? e.parentNode : e),
      Qn(),
      a
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = La(s)
      l.call(u)
    }
  }
  var s = qc(e, 0, !1, null, null, !1, !1, '', ep)
  return (
    (e._reactRootContainer = s),
    (e[Yt] = s.current),
    Mi(e.nodeType === 8 ? e.parentNode : e),
    Qn(function () {
      al(t, s, n, r)
    }),
    s
  )
}
function ul(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var a = o
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var s = La(a)
        l.call(s)
      }
    }
    al(t, a, e, i)
  } else a = u2(n, t, e, i, r)
  return La(a)
}
ch = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = ci(t.pendingLanes)
        n !== 0 && (wc(t, n | 1), Ve(t, ce()), !(D & 6) && ((Ur = ce() + 500), Nn()))
      }
      break
    case 13:
      Qn(function () {
        var r = Kt(e, 1)
        if (r !== null) {
          var i = ze()
          Ct(r, e, 1, i)
        }
      }),
        Zc(e, 1)
  }
}
xc = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728)
    if (t !== null) {
      var n = ze()
      Ct(t, e, 134217728, n)
    }
    Zc(e, 134217728)
  }
}
fh = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = Kt(e, t)
    if (n !== null) {
      var r = ze()
      Ct(n, e, t, r)
    }
    Zc(e, t)
  }
}
dh = function () {
  return H
}
ph = function (e, t) {
  var n = H
  try {
    return (H = e), t()
  } finally {
    H = n
  }
}
tu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Gs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var i = Ja(r)
            if (!i) throw Error(P(90))
            Hm(r), Gs(r, i)
          }
        }
      }
      break
    case 'textarea':
      Ym(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Er(e, !!n.multiple, t, !1)
  }
}
Jm = Kc
eh = Qn
var c2 = { usingClientEntryPoint: !1, Events: [io, hr, Ja, qm, Zm, Kc] },
  oi = {
    findFiberByHostInstance: In,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  f2 = {
    bundleType: oi.bundleType,
    version: oi.version,
    rendererPackageName: oi.rendererPackageName,
    rendererConfig: oi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = rh(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: oi.findFiberByHostInstance || s2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!jo.isDisabled && jo.supportsFiber)
    try {
      ;(Qa = jo.inject(f2)), ($t = jo)
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c2
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!ef(t)) throw Error(P(200))
  return l2(e, t, null, n)
}
et.createRoot = function (e, t) {
  if (!ef(e)) throw Error(P(299))
  var n = !1,
    r = '',
    i = M0
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = qc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Yt] = t.current),
    Mi(e.nodeType === 8 ? e.parentNode : e),
    new Jc(t)
  )
}
et.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(P(188))
      : ((e = Object.keys(e).join(',')), Error(P(268, e)))
  return (e = rh(t)), (e = e === null ? null : e.stateNode), e
}
et.flushSync = function (e) {
  return Qn(e)
}
et.hydrate = function (e, t, n) {
  if (!sl(t)) throw Error(P(200))
  return ul(null, e, t, !0, n)
}
et.hydrateRoot = function (e, t, n) {
  if (!ef(e)) throw Error(P(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = M0
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = j0(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Yt] = t.current),
    Mi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new ll(t)
}
et.render = function (e, t, n) {
  if (!sl(t)) throw Error(P(200))
  return ul(null, e, t, !1, n)
}
et.unmountComponentAtNode = function (e) {
  if (!sl(e)) throw Error(P(40))
  return e._reactRootContainer
    ? (Qn(function () {
        ul(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Yt] = null)
        })
      }),
      !0)
    : !1
}
et.unstable_batchedUpdates = Kc
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!sl(n)) throw Error(P(200))
  if (e == null || e._reactInternals === void 0) throw Error(P(38))
  return ul(e, t, n, !1, r)
}
et.version = '18.3.1-next-f1338f8080-20240426'
function I0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)
    } catch (e) {
      console.error(e)
    }
}
I0(), (Im.exports = et)
var d2 = Im.exports,
  tp = d2
;(Us.createRoot = tp.createRoot), (Us.hydrateRoot = tp.hydrateRoot)
var p2 = Object.defineProperty,
  m2 = (e, t, n) =>
    t in e
      ? p2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _s = (e, t, n) => (m2(e, typeof t != 'symbol' ? t + '' : t, n), n)
let h2 = class {
    constructor() {
      _s(this, 'current', this.detect()),
        _s(this, 'handoffState', 'pending'),
        _s(this, 'currentId', 0)
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
  Hn = new h2(),
  za = (e, t) => {
    Hn.isServer ? w.useEffect(e, t) : w.useLayoutEffect(e, t)
  }
function v2(e) {
  let t = w.useRef(e)
  return (
    za(() => {
      t.current = e
    }, [e]),
    t
  )
}
let Si = function (e) {
  let t = v2(e)
  return Q.useCallback((...n) => t.current(...n), [t])
}
function g2() {
  let e = typeof document > 'u'
  return 'useSyncExternalStore' in Pi
    ? (t => t.useSyncExternalStore)(Pi)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1
}
function y2() {
  let e = g2(),
    [t, n] = w.useState(Hn.isHandoffComplete)
  return (
    t && Hn.isHandoffComplete === !1 && n(!1),
    w.useEffect(() => {
      t !== !0 && n(!0)
    }, [t]),
    w.useEffect(() => Hn.handoff(), []),
    e ? !1 : t
  )
}
var np
let L0 =
  (np = Q.useId) != null
    ? np
    : function () {
        let e = y2(),
          [t, n] = Q.useState(e ? () => Hn.nextId() : null)
        return (
          za(() => {
            t === null && n(Hn.nextId())
          }, [t]),
          t != null ? '' + t : void 0
        )
      }
function ao(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(r, ao), r)
}
function w2(e) {
  return Hn.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty('current') && e.current instanceof Node
    ? e.current.ownerDocument
    : document
}
function rp(e) {
  var t
  if (e.type) return e.type
  let n = (t = e.as) != null ? t : 'button'
  if (typeof n == 'string' && n.toLowerCase() === 'button') return 'button'
}
function x2(e, t) {
  let [n, r] = w.useState(() => rp(e))
  return (
    za(() => {
      r(rp(e))
    }, [e.type, e.as]),
    za(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute('type') &&
          r('button'))
    }, [n, t]),
    n
  )
}
let z0 = Symbol()
function k2(e, t = !0) {
  return Object.assign(e, { [z0]: t })
}
function tf(...e) {
  let t = w.useRef(e)
  w.useEffect(() => {
    t.current = e
  }, [e])
  let n = Si(r => {
    for (let i of t.current)
      i != null && (typeof i == 'function' ? i(r) : (i.current = r))
  })
  return e.every(r => r == null || (r == null ? void 0 : r[z0])) ? void 0 : n
}
function ip(...e) {
  return Array.from(new Set(e.flatMap(t => (typeof t == 'string' ? t.split(' ') : []))))
    .filter(Boolean)
    .join(' ')
}
var ju = (e => (
    (e[(e.None = 0)] = 'None'),
    (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
    (e[(e.Static = 2)] = 'Static'),
    e
  ))(ju || {}),
  S2 = (e => ((e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e))(
    S2 || {}
  )
function nf({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: o = !0,
  name: a,
  mergeRefs: l
}) {
  l = l ?? b2
  let s = D0(t, e)
  if (o) return Mo(s, n, r, a, l)
  let u = i ?? 0
  if (u & 2) {
    let { static: c = !1, ...f } = s
    if (c) return Mo(f, n, r, a, l)
  }
  if (u & 1) {
    let { unmount: c = !0, ...f } = s
    return ao(c ? 0 : 1, {
      0() {
        return null
      },
      1() {
        return Mo({ ...f, hidden: !0, style: { display: 'none' } }, n, r, a, l)
      }
    })
  }
  return Mo(s, n, r, a, l)
}
function Mo(e, t = {}, n, r, i) {
  let { as: o = n, children: a, refName: l = 'ref', ...s } = Os(e, ['unmount', 'static']),
    u = e.ref !== void 0 ? { [l]: e.ref } : {},
    c = typeof a == 'function' ? a(t) : a
  'className' in s &&
    s.className &&
    typeof s.className == 'function' &&
    (s.className = s.className(t))
  let f = {}
  if (t) {
    let p = !1,
      y = []
    for (let [g, v] of Object.entries(t))
      typeof v == 'boolean' && (p = !0), v === !0 && y.push(g)
    p && (f['data-headlessui-state'] = y.join(' '))
  }
  if (o === w.Fragment && Object.keys(op(s)).length > 0) {
    if (!w.isValidElement(c) || (Array.isArray(c) && c.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          '',
          `The current component <${r} /> is rendering a "Fragment".`,
          'However we need to passthrough the following props:',
          Object.keys(s).map(v => `  - ${v}`).join(`
`),
          '',
          'You can apply a few solutions:',
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            'Render a single element as the child so that we can forward the props onto that element.'
          ].map(v => `  - ${v}`).join(`
`)
        ].join(`
`)
      )
    let p = c.props,
      y =
        typeof (p == null ? void 0 : p.className) == 'function'
          ? (...v) => ip(p == null ? void 0 : p.className(...v), s.className)
          : ip(p == null ? void 0 : p.className, s.className),
      g = y ? { className: y } : {}
    return w.cloneElement(
      c,
      Object.assign(
        {},
        D0(c.props, op(Os(s, ['ref']))),
        f,
        u,
        { ref: i(c.ref, u.ref) },
        g
      )
    )
  }
  return w.createElement(
    o,
    Object.assign({}, Os(s, ['ref']), o !== w.Fragment && u, o !== w.Fragment && f),
    c
  )
}
function F0() {
  let e = w.useRef([]),
    t = w.useCallback(n => {
      for (let r of e.current)
        r != null && (typeof r == 'function' ? r(n) : (r.current = n))
    }, [])
  return (...n) => {
    if (!n.every(r => r == null)) return (e.current = n), t
  }
}
function b2(...e) {
  return e.every(t => t == null)
    ? void 0
    : t => {
        for (let n of e) n != null && (typeof n == 'function' ? n(t) : (n.current = t))
      }
}
function D0(...e) {
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
function rf(e) {
  var t
  return Object.assign(w.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name
  })
}
function op(e) {
  let t = Object.assign({}, e)
  for (let n in t) t[n] === void 0 && delete t[n]
  return t
}
function Os(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
let of = w.createContext(null)
of.displayName = 'OpenClosedContext'
var Hi = (e => (
  (e[(e.Open = 1)] = 'Open'),
  (e[(e.Closed = 2)] = 'Closed'),
  (e[(e.Closing = 4)] = 'Closing'),
  (e[(e.Opening = 8)] = 'Opening'),
  e
))(Hi || {})
function C2() {
  return w.useContext(of)
}
function E2({ value: e, children: t }) {
  return Q.createElement(of.Provider, { value: e }, t)
}
function P2(e) {
  let t = e.parentElement,
    n = null
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement)
  let r = (t == null ? void 0 : t.getAttribute('disabled')) === ''
  return r && _2(n) ? !1 : r
}
function _2(e) {
  if (!e) return !1
  let t = e.previousElementSibling
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1
    t = t.previousElementSibling
  }
  return !0
}
var ur = (e => (
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
  ))(ur || {}),
  ap
let O2 =
  (ap = Q.startTransition) != null
    ? ap
    : function (e) {
        e()
      }
var T2 = (e => ((e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e))(T2 || {}),
  N2 = (e => (
    (e[(e.ToggleDisclosure = 0)] = 'ToggleDisclosure'),
    (e[(e.CloseDisclosure = 1)] = 'CloseDisclosure'),
    (e[(e.SetButtonId = 2)] = 'SetButtonId'),
    (e[(e.SetPanelId = 3)] = 'SetPanelId'),
    (e[(e.LinkPanel = 4)] = 'LinkPanel'),
    (e[(e.UnlinkPanel = 5)] = 'UnlinkPanel'),
    e
  ))(N2 || {})
let R2 = {
    0: e => ({ ...e, disclosureState: ao(e.disclosureState, { 0: 1, 1: 0 }) }),
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
  af = w.createContext(null)
af.displayName = 'DisclosureContext'
function lf(e) {
  let t = w.useContext(af)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, lf), n)
  }
  return t
}
let sf = w.createContext(null)
sf.displayName = 'DisclosureAPIContext'
function U0(e) {
  let t = w.useContext(sf)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, U0), n)
  }
  return t
}
let uf = w.createContext(null)
uf.displayName = 'DisclosurePanelContext'
function A2() {
  return w.useContext(uf)
}
function $2(e, t) {
  return ao(t.type, R2, e, t)
}
let j2 = w.Fragment
function M2(e, t) {
  let { defaultOpen: n = !1, ...r } = e,
    i = w.useRef(null),
    o = tf(
      t,
      k2(k => {
        i.current = k
      }, e.as === void 0 || e.as === w.Fragment)
    ),
    a = w.useRef(null),
    l = w.useRef(null),
    s = w.useReducer($2, {
      disclosureState: n ? 0 : 1,
      linkedPanel: !1,
      buttonRef: l,
      panelRef: a,
      buttonId: null,
      panelId: null
    }),
    [{ disclosureState: u, buttonId: c }, f] = s,
    p = Si(k => {
      f({ type: 1 })
      let m = w2(i)
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
    y = w.useMemo(() => ({ close: p }), [p]),
    g = w.useMemo(() => ({ open: u === 0, close: p }), [u, p]),
    v = { ref: o }
  return Q.createElement(
    af.Provider,
    { value: s },
    Q.createElement(
      sf.Provider,
      { value: y },
      Q.createElement(
        E2,
        { value: ao(u, { 0: Hi.Open, 1: Hi.Closed }) },
        nf({ ourProps: v, theirProps: r, slot: g, defaultTag: j2, name: 'Disclosure' })
      )
    )
  )
}
let I2 = 'button'
function L2(e, t) {
  let n = L0(),
    { id: r = `headlessui-disclosure-button-${n}`, ...i } = e,
    [o, a] = lf('Disclosure.Button'),
    l = A2(),
    s = l === null ? !1 : l === o.panelId,
    u = w.useRef(null),
    c = tf(u, t, s ? null : o.buttonRef),
    f = F0()
  w.useEffect(() => {
    if (!s)
      return (
        a({ type: 2, buttonId: r }),
        () => {
          a({ type: 2, buttonId: null })
        }
      )
  }, [r, a, s])
  let p = Si(d => {
      var h
      if (s) {
        if (o.disclosureState === 1) return
        switch (d.key) {
          case ur.Space:
          case ur.Enter:
            d.preventDefault(),
              d.stopPropagation(),
              a({ type: 0 }),
              (h = o.buttonRef.current) == null || h.focus()
            break
        }
      } else
        switch (d.key) {
          case ur.Space:
          case ur.Enter:
            d.preventDefault(), d.stopPropagation(), a({ type: 0 })
            break
        }
    }),
    y = Si(d => {
      switch (d.key) {
        case ur.Space:
          d.preventDefault()
          break
      }
    }),
    g = Si(d => {
      var h
      P2(d.currentTarget) ||
        e.disabled ||
        (s
          ? (a({ type: 0 }), (h = o.buttonRef.current) == null || h.focus())
          : a({ type: 0 }))
    }),
    v = w.useMemo(() => ({ open: o.disclosureState === 0 }), [o]),
    k = x2(e, u),
    m = s
      ? { ref: c, type: k, onKeyDown: p, onClick: g }
      : {
          ref: c,
          id: r,
          type: k,
          'aria-expanded': o.disclosureState === 0,
          'aria-controls': o.linkedPanel ? o.panelId : void 0,
          onKeyDown: p,
          onKeyUp: y,
          onClick: g
        }
  return nf({
    mergeRefs: f,
    ourProps: m,
    theirProps: i,
    slot: v,
    defaultTag: I2,
    name: 'Disclosure.Button'
  })
}
let z2 = 'div',
  F2 = ju.RenderStrategy | ju.Static
function D2(e, t) {
  let n = L0(),
    { id: r = `headlessui-disclosure-panel-${n}`, ...i } = e,
    [o, a] = lf('Disclosure.Panel'),
    { close: l } = U0('Disclosure.Panel'),
    s = F0(),
    u = tf(t, o.panelRef, g => {
      O2(() => a({ type: g ? 4 : 5 }))
    })
  w.useEffect(
    () => (
      a({ type: 3, panelId: r }),
      () => {
        a({ type: 3, panelId: null })
      }
    ),
    [r, a]
  )
  let c = C2(),
    f = c !== null ? (c & Hi.Open) === Hi.Open : o.disclosureState === 0,
    p = w.useMemo(() => ({ open: o.disclosureState === 0, close: l }), [o, l]),
    y = { ref: u, id: r }
  return Q.createElement(
    uf.Provider,
    { value: o.panelId },
    nf({
      mergeRefs: s,
      ourProps: y,
      theirProps: i,
      slot: p,
      defaultTag: z2,
      features: F2,
      visible: f,
      name: 'Disclosure.Panel'
    })
  )
}
let U2 = rf(M2),
  B2 = rf(L2),
  W2 = rf(D2),
  Io = Object.assign(U2, { Button: B2, Panel: W2 })
function H2({ title: e, titleId: t, ...n }, r) {
  return w.createElement(
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
    e ? w.createElement('title', { id: t }, e) : null,
    w.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
    })
  )
}
const V2 = w.forwardRef(H2)
function Y2({ title: e, titleId: t, ...n }, r) {
  return w.createElement(
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
    e ? w.createElement('title', { id: t }, e) : null,
    w.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M6 18 18 6M6 6l12 12'
    })
  )
}
const K2 = w.forwardRef(Y2)
var B0 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  lp = Q.createContext && Q.createContext(B0),
  kn = function () {
    return (
      (kn =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n]
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }
          return e
        }),
      kn.apply(this, arguments)
    )
  },
  G2 = function (e, t) {
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
function W0(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Q.createElement(t.tag, kn({ key: n }, t.attr), W0(t.child))
    })
  )
}
function cl(e) {
  return function (t) {
    return Q.createElement(Q2, kn({ attr: kn({}, e.attr) }, t), W0(e.child))
  }
}
function Q2(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      a = G2(e, ['attr', 'size', 'title']),
      l = i || n.size || '1em',
      s
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      Q.createElement(
        'svg',
        kn(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          a,
          {
            className: s,
            style: kn(kn({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: 'http://www.w3.org/2000/svg'
          }
        ),
        o && Q.createElement('title', null, o),
        e.children
      )
    )
  }
  return lp !== void 0
    ? Q.createElement(lp.Consumer, null, function (n) {
        return t(n)
      })
    : t(B0)
}
function H0(e) {
  return cl({
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
function V0(e) {
  return cl({
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
const sp = [
  { name: 'Projects', href: '#projects-section', current: !1 },
  { name: 'Timeline', href: '#timeline-section', current: !1 },
  { name: 'Contact', href: '#contact-section', current: !1 },
  {
    name: 'CV',
    href: 'https://drive.google.com/file/d/1P-oaerGkAnk2qrQMLgO0HC7sqZ4rmY-V/view?usp=sharing',
    current: !1,
    target: '_blank'
  }
]
function up(...e) {
  return e.filter(Boolean).join(' ')
}
function X2() {
  return S.jsx(Io, {
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
                  children: S.jsxs(Io.Button, {
                    className:
                      'relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
                    children: [
                      S.jsx('span', { className: 'absolute -inset-0.5' }),
                      S.jsx('span', { className: 'sr-only', children: 'Open main menu' }),
                      e
                        ? S.jsx(K2, { className: 'block h-6 w-6', 'aria-hidden': 'true' })
                        : S.jsx(V2, { className: 'block h-6 w-6', 'aria-hidden': 'true' })
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
                        children: sp.map(t =>
                          S.jsx(
                            'a',
                            {
                              href: t.href,
                              target: t.target,
                              className: up(
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
                      children: S.jsx(H0, { size: 24 })
                    }),
                    S.jsx('a', {
                      href: 'https://www.linkedin.com/in/carlos-rodr%C3%ADguez-morales/',
                      className: 'text-gray-300 hover:text-white mx-2',
                      target: '_blank',
                      children: S.jsx(V0, { size: 24 })
                    })
                  ]
                })
              ]
            })
          }),
          S.jsx(Io.Panel, {
            className: 'sm:hidden',
            children: S.jsx('div', {
              className: 'space-y-1 px-2 pb-3 pt-2',
              children: sp.map(t =>
                S.jsx(
                  Io.Button,
                  {
                    as: 'a',
                    href: t.href,
                    target: t.target,
                    className: up(
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
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fa() {
  return (
    (Fa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Fa.apply(this, arguments)
  )
}
var dn
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(dn || (dn = {}))
const cp = 'popstate'
function q2(e) {
  e === void 0 && (e = {})
  function t(r, i) {
    let { pathname: o, search: a, hash: l } = r.location
    return Mu(
      '',
      { pathname: o, search: a, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    )
  }
  function n(r, i) {
    return typeof i == 'string' ? i : K0(i)
  }
  return J2(t, n, null, e)
}
function Ye(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Y0(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function Z2() {
  return Math.random().toString(36).substr(2, 8)
}
function fp(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Mu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Fa(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? fl(t) : t,
      { state: n, key: (t && t.key) || r || Z2() }
    )
  )
}
function K0(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function fl(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e)
  }
  return t
}
function J2(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    l = dn.Pop,
    s = null,
    u = c()
  u == null && ((u = 0), a.replaceState(Fa({}, a.state, { idx: u }), ''))
  function c() {
    return (a.state || { idx: null }).idx
  }
  function f() {
    l = dn.Pop
    let k = c(),
      m = k == null ? null : k - u
    ;(u = k), s && s({ action: l, location: v.location, delta: m })
  }
  function p(k, m) {
    l = dn.Push
    let d = Mu(v.location, k, m)
    u = c() + 1
    let h = fp(d, u),
      x = v.createHref(d)
    try {
      a.pushState(h, '', x)
    } catch (b) {
      if (b instanceof DOMException && b.name === 'DataCloneError') throw b
      i.location.assign(x)
    }
    o && s && s({ action: l, location: v.location, delta: 1 })
  }
  function y(k, m) {
    l = dn.Replace
    let d = Mu(v.location, k, m)
    u = c()
    let h = fp(d, u),
      x = v.createHref(d)
    a.replaceState(h, '', x), o && s && s({ action: l, location: v.location, delta: 0 })
  }
  function g(k) {
    let m = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      d = typeof k == 'string' ? k : K0(k)
    return (
      (d = d.replace(/ $/, '%20')),
      Ye(m, 'No window.location.(origin|href) available to create URL for href: ' + d),
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
        i.addEventListener(cp, f),
        (s = k),
        () => {
          i.removeEventListener(cp, f), (s = null)
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
var dp
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(dp || (dp = {}))
function ew(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? fl(t) : t,
    i = X0(r.pathname || '/', n)
  if (i == null) return null
  let o = G0(e)
  tw(o)
  let a = null
  for (let l = 0; a == null && l < o.length; ++l) {
    let s = pw(i)
    a = cw(o[l], s)
  }
  return a
}
function G0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let i = (o, a, l) => {
    let s = {
      relativePath: l === void 0 ? o.path || '' : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o
    }
    s.relativePath.startsWith('/') &&
      (Ye(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)))
    let u = Rr([r, s.relativePath]),
      c = n.concat(s)
    o.children &&
      o.children.length > 0 &&
      (Ye(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      G0(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: sw(u, o.index), routesMeta: c })
  }
  return (
    e.forEach((o, a) => {
      var l
      if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, a)
      else for (let s of Q0(o.path)) i(o, a, s)
    }),
    t
  )
}
function Q0(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [o, ''] : [o]
  let a = Q0(r.join('/')),
    l = []
  return (
    l.push(...a.map(s => (s === '' ? o : [o, s].join('/')))),
    i && l.push(...a),
    l.map(s => (e.startsWith('/') && s === '' ? '/' : s))
  )
}
function tw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : uw(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex)
        )
  )
}
const nw = /^:[\w-]+$/,
  rw = 3,
  iw = 2,
  ow = 1,
  aw = 10,
  lw = -2,
  pp = e => e === '*'
function sw(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(pp) && (r += lw),
    t && (r += iw),
    n.filter(i => !pp(i)).reduce((i, o) => i + (nw.test(o) ? rw : o === '' ? ow : aw), r)
  )
}
function uw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function cw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = []
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = fw({ path: l.relativePath, caseSensitive: l.caseSensitive, end: s }, u)
    if (!c) return null
    Object.assign(r, c.params)
    let f = l.route
    o.push({
      params: r,
      pathname: Rr([i, c.pathname]),
      pathnameBase: mw(Rr([i, c.pathnameBase])),
      route: f
    }),
      c.pathnameBase !== '/' && (i = Rr([i, c.pathnameBase]))
  }
  return o
}
function fw(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = dw(e.path, e.caseSensitive, e.end),
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
      return y && !g ? (u[p] = void 0) : (u[p] = (g || '').replace(/%2F/g, '/')), u
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e
  }
}
function dw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Y0(
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
          /\/:([\w-]+)(\?)?/g,
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
function pw(e) {
  try {
    return e
      .split('/')
      .map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      Y0(
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
function X0(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
const Rr = e => e.join('/').replace(/\/\/+/g, '/'),
  mw = e => e.replace(/\/+$/, '').replace(/^\/*/, '/')
function hw(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const q0 = ['post', 'put', 'patch', 'delete']
new Set(q0)
const vw = ['get', ...q0]
new Set(vw)
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Da() {
  return (
    (Da = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Da.apply(this, arguments)
  )
}
const gw = w.createContext(null),
  yw = w.createContext(null),
  Z0 = w.createContext(null),
  dl = w.createContext(null),
  pl = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  J0 = w.createContext(null)
function cf() {
  return w.useContext(dl) != null
}
function ww() {
  return cf() || Ye(!1), w.useContext(dl).location
}
function xw(e, t) {
  return kw(e, t)
}
function kw(e, t, n, r) {
  cf() || Ye(!1)
  let { navigator: i } = w.useContext(Z0),
    { matches: o } = w.useContext(pl),
    a = o[o.length - 1],
    l = a ? a.params : {}
  a && a.pathname
  let s = a ? a.pathnameBase : '/'
  a && a.route
  let u = ww(),
    c
  if (t) {
    var f
    let k = typeof t == 'string' ? fl(t) : t
    s === '/' || ((f = k.pathname) != null && f.startsWith(s)) || Ye(!1), (c = k)
  } else c = u
  let p = c.pathname || '/',
    y = p
  if (s !== '/') {
    let k = s.replace(/^\//, '').split('/')
    y = '/' + p.replace(/^\//, '').split('/').slice(k.length).join('/')
  }
  let g = ew(e, { pathname: y }),
    v = Pw(
      g &&
        g.map(k =>
          Object.assign({}, k, {
            params: Object.assign({}, l, k.params),
            pathname: Rr([
              s,
              i.encodeLocation ? i.encodeLocation(k.pathname).pathname : k.pathname
            ]),
            pathnameBase:
              k.pathnameBase === '/'
                ? s
                : Rr([
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
    ? w.createElement(
        dl.Provider,
        {
          value: {
            location: Da(
              { pathname: '/', search: '', hash: '', state: null, key: 'default' },
              c
            ),
            navigationType: dn.Pop
          }
        },
        v
      )
    : v
}
function Sw() {
  let e = Nw(),
    t = hw(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return w.createElement(
    w.Fragment,
    null,
    w.createElement('h2', null, 'Unexpected Application Error!'),
    w.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? w.createElement('pre', { style: i }, n) : null,
    null
  )
}
const bw = w.createElement(Sw, null)
class Cw extends w.Component {
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
      ? w.createElement(
          pl.Provider,
          { value: this.props.routeContext },
          w.createElement(J0.Provider, {
            value: this.state.error,
            children: this.props.component
          })
        )
      : this.props.children
  }
}
function Ew(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = w.useContext(gw)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(pl.Provider, { value: t }, r)
  )
}
function Pw(e, t, n, r) {
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
    let c = a.findIndex(
      f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    )
    c >= 0 || Ye(!1), (a = a.slice(0, Math.min(a.length, c + 1)))
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
      (v = f.route.errorElement || bw),
      s &&
        (u < 0 && p === 0
          ? ((g = !0), (k = null))
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
            ? (h = w.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = c),
          w.createElement(Ew, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: h
          })
        )
      }
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? w.createElement(Cw, {
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
var Iu = (function (e) {
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
})(Iu || {})
function _w(e) {
  let t = w.useContext(yw)
  return t || Ye(!1), t
}
function Ow(e) {
  let t = w.useContext(pl)
  return t || Ye(!1), t
}
function Tw(e) {
  let t = Ow(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || Ye(!1), n.route.id
}
function Nw() {
  var e
  let t = w.useContext(J0),
    n = _w(Iu.UseRouteError),
    r = Tw(Iu.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Lu(e) {
  Ye(!1)
}
function Rw(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = dn.Pop,
    navigator: o,
    static: a = !1,
    future: l
  } = e
  cf() && Ye(!1)
  let s = t.replace(/^\/*/, '/'),
    u = w.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: a,
        future: Da({ v7_relativeSplatPath: !1 }, l)
      }),
      [s, l, o, a]
    )
  typeof r == 'string' && (r = fl(r))
  let {
      pathname: c = '/',
      search: f = '',
      hash: p = '',
      state: y = null,
      key: g = 'default'
    } = r,
    v = w.useMemo(() => {
      let k = X0(c, s)
      return k == null
        ? null
        : {
            location: { pathname: k, search: f, hash: p, state: y, key: g },
            navigationType: i
          }
    }, [s, c, f, p, y, g, i])
  return v == null
    ? null
    : w.createElement(
        Z0.Provider,
        { value: u },
        w.createElement(dl.Provider, { children: n, value: v })
      )
}
function Aw(e) {
  let { children: t, location: n } = e
  return xw(zu(t), n)
}
new Promise(() => {})
function zu(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    w.Children.forEach(e, (r, i) => {
      if (!w.isValidElement(r)) return
      let o = [...t, i]
      if (r.type === w.Fragment) {
        n.push.apply(n, zu(r.props.children, o))
        return
      }
      r.type !== Lu && Ye(!1), !r.props.index || !r.props.children || Ye(!1)
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
      r.props.children && (a.children = zu(r.props.children, o)), n.push(a)
    }),
    n
  )
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const $w = '6'
try {
  window.__reactRouterVersion = $w
} catch {}
const jw = 'startTransition',
  mp = Pi[jw]
function Mw(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = w.useRef()
  o.current == null && (o.current = q2({ window: i, v5Compat: !0 }))
  let a = o.current,
    [l, s] = w.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    c = w.useCallback(
      f => {
        u && mp ? mp(() => s(f)) : s(f)
      },
      [s, u]
    )
  return (
    w.useLayoutEffect(() => a.listen(c), [a, c]),
    w.createElement(Rw, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: r
    })
  )
}
var hp
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(hp || (hp = {}))
var vp
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(vp || (vp = {}))
function Iw() {
  return S.jsx(S.Fragment, {})
}
const Lw = ({ text: e, typingDelay: t, className: n, repeatDelay: r }) => {
  const [i, o] = w.useState(''),
    [a, l] = w.useState(0)
  return (
    w.useEffect(() => {
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
function je(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue
      n[r] = e[r]
    }
  return n
}
var e1 = { exports: {} },
  zw = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Fw = zw,
  Dw = Fw
function t1() {}
function n1() {}
n1.resetWarningCache = t1
var Uw = function () {
  function e(r, i, o, a, l, s) {
    if (s !== Dw) {
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
    checkPropTypes: n1,
    resetWarningCache: t1
  }
  return (n.PropTypes = n), n
}
e1.exports = Uw()
var Bw = e1.exports
const z = Cm(Bw)
function r1(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length
      for (t = 0; t < i; t++) e[t] && (n = r1(e[t])) && (r && (r += ' '), (r += n))
    } else for (n in e) e[n] && (r && (r += ' '), (r += n))
  return r
}
function Ce() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = r1(e)) && (r && (r += ' '), (r += t))
  return r
}
function er(e, t, n = void 0) {
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
var lo = {},
  i1 = { exports: {} }
;(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n }
  }
  ;(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports)
})(i1)
var o1 = i1.exports,
  Ts = { exports: {} },
  gp
function a1() {
  return (
    gp ||
      ((gp = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var i = arguments[r]
                      for (var o in i)
                        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
                    }
                    return n
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          )
        }
        ;(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports)
      })(Ts)),
    Ts.exports
  )
}
var Ns = { exports: {} },
  yp
function Ww() {
  return (
    yp ||
      ((yp = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {}
          var i = {}
          for (var o in n)
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              if (r.indexOf(o) >= 0) continue
              i[o] = n[o]
            }
          return i
        }
        ;(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports)
      })(Ns)),
    Ns.exports
  )
}
function l1(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var Hw =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Vw = l1(function (e) {
    return (
      Hw.test(e) ||
      (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    )
  })
function Yw(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function Kw(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var Gw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Kw(this))
        var i = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var o = Yw(i)
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
  Re = '-ms-',
  Ua = '-moz-',
  U = '-webkit-',
  s1 = 'comm',
  ff = 'rule',
  df = 'decl',
  Qw = '@import',
  u1 = '@keyframes',
  Xw = '@layer',
  qw = Math.abs,
  ml = String.fromCharCode,
  Zw = Object.assign
function Jw(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^ Ee(e, 3)
    : 0
}
function c1(e) {
  return e.trim()
}
function ex(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function B(e, t, n) {
  return e.replace(t, n)
}
function Fu(e, t) {
  return e.indexOf(t)
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0
}
function Vi(e, t, n) {
  return e.slice(t, n)
}
function Ot(e) {
  return e.length
}
function pf(e) {
  return e.length
}
function Lo(e, t) {
  return t.push(e), e
}
function tx(e, t) {
  return e.map(t).join('')
}
var hl = 1,
  Br = 1,
  f1 = 0,
  Ke = 0,
  he = 0,
  Kr = ''
function vl(e, t, n, r, i, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: hl,
    column: Br,
    length: a,
    return: ''
  }
}
function ai(e, t) {
  return Zw(vl('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function nx() {
  return he
}
function rx() {
  return (he = Ke > 0 ? Ee(Kr, --Ke) : 0), Br--, he === 10 && ((Br = 1), hl--), he
}
function Ze() {
  return (he = Ke < f1 ? Ee(Kr, Ke++) : 0), Br++, he === 10 && ((Br = 1), hl++), he
}
function Mt() {
  return Ee(Kr, Ke)
}
function la() {
  return Ke
}
function so(e, t) {
  return Vi(Kr, e, t)
}
function Yi(e) {
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
function d1(e) {
  return (hl = Br = 1), (f1 = Ot((Kr = e))), (Ke = 0), []
}
function p1(e) {
  return (Kr = ''), e
}
function sa(e) {
  return c1(so(Ke - 1, Du(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function ix(e) {
  for (; (he = Mt()) && he < 33; ) Ze()
  return Yi(e) > 2 || Yi(he) > 3 ? '' : ' '
}
function ox(e, t) {
  for (
    ;
    --t && Ze() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97));

  );
  return so(e, la() + (t < 6 && Mt() == 32 && Ze() == 32))
}
function Du(e) {
  for (; Ze(); )
    switch (he) {
      case e:
        return Ke
      case 34:
      case 39:
        e !== 34 && e !== 39 && Du(he)
        break
      case 40:
        e === 41 && Du(e)
        break
      case 92:
        Ze()
        break
    }
  return Ke
}
function ax(e, t) {
  for (; Ze() && e + he !== 57; ) if (e + he === 84 && Mt() === 47) break
  return '/*' + so(t, Ke - 1) + '*' + ml(e === 47 ? e : Ze())
}
function lx(e) {
  for (; !Yi(Mt()); ) Ze()
  return so(e, Ke)
}
function sx(e) {
  return p1(ua('', null, null, null, [''], (e = d1(e)), 0, [0], e))
}
function ua(e, t, n, r, i, o, a, l, s) {
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
      x = i,
      b = o,
      E = r,
      C = h;
    k;

  )
    switch (((g = d), (d = Ze()))) {
      case 40:
        if (g != 108 && Ee(C, f - 1) == 58) {
          Fu((C += B(sa(d), '&', '&\f')), '&\f') != -1 && (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        C += sa(d)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        C += ix(g)
        break
      case 92:
        C += ox(la() - 1, 7)
        continue
      case 47:
        switch (Mt()) {
          case 42:
          case 47:
            Lo(ux(ax(Ze(), la()), t, n), s)
            break
          default:
            C += '/'
        }
        break
      case 123 * v:
        l[u++] = Ot(C) * m
      case 125 * v:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            k = 0
          case 59 + c:
            m == -1 && (C = B(C, /\f/g, '')),
              y > 0 &&
                Ot(C) - f &&
                Lo(
                  y > 32
                    ? xp(C + ';', r, n, f - 1)
                    : xp(B(C, ' ', '') + ';', r, n, f - 2),
                  s
                )
            break
          case 59:
            C += ';'
          default:
            if (
              (Lo((E = wp(C, t, n, u, c, i, l, h, (x = []), (b = []), f)), o), d === 123)
            )
              if (c === 0) ua(C, t, E, E, x, o, f, l, b)
              else
                switch (p === 99 && Ee(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ua(
                      e,
                      E,
                      E,
                      r && Lo(wp(e, E, E, 0, 0, i, l, h, i, (x = []), f), b),
                      i,
                      b,
                      f,
                      l,
                      r ? x : b
                    )
                    break
                  default:
                    ua(C, E, E, E, [''], b, 0, l, b)
                }
        }
        ;(u = c = y = 0), (v = m = 1), (h = C = ''), (f = a)
        break
      case 58:
        ;(f = 1 + Ot(C)), (y = g)
      default:
        if (v < 1) {
          if (d == 123) --v
          else if (d == 125 && v++ == 0 && rx() == 125) continue
        }
        switch (((C += ml(d)), d * v)) {
          case 38:
            m = c > 0 ? 1 : ((C += '\f'), -1)
            break
          case 44:
            ;(l[u++] = (Ot(C) - 1) * m), (m = 1)
            break
          case 64:
            Mt() === 45 && (C += sa(Ze())),
              (p = Mt()),
              (c = f = Ot((h = C += lx(la())))),
              d++
            break
          case 45:
            g === 45 && Ot(C) == 2 && (v = 0)
        }
    }
  return o
}
function wp(e, t, n, r, i, o, a, l, s, u, c) {
  for (var f = i - 1, p = i === 0 ? o : [''], y = pf(p), g = 0, v = 0, k = 0; g < r; ++g)
    for (var m = 0, d = Vi(e, f + 1, (f = qw((v = a[g])))), h = e; m < y; ++m)
      (h = c1(v > 0 ? p[m] + ' ' + d : B(d, /&\f/g, p[m]))) && (s[k++] = h)
  return vl(e, t, n, i === 0 ? ff : l, s, u, c)
}
function ux(e, t, n) {
  return vl(e, t, n, s1, ml(nx()), Vi(e, 2, -2), 0)
}
function xp(e, t, n, r) {
  return vl(e, t, n, df, Vi(e, 0, r), Vi(e, r + 1, -1), r)
}
function Ar(e, t) {
  for (var n = '', r = pf(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ''
  return n
}
function cx(e, t, n, r) {
  switch (e.type) {
    case Xw:
      if (e.children.length) break
    case Qw:
    case df:
      return (e.return = e.return || e.value)
    case s1:
      return ''
    case u1:
      return (e.return = e.value + '{' + Ar(e.children, r) + '}')
    case ff:
      e.value = e.props.join(',')
  }
  return Ot((n = Ar(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function fx(e) {
  var t = pf(e)
  return function (n, r, i, o) {
    for (var a = '', l = 0; l < t; l++) a += e[l](n, r, i, o) || ''
    return a
  }
}
function dx(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var px = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = Mt()), i === 38 && o === 12 && (n[r] = 1), !Yi(o);

    )
      Ze()
    return so(t, Ke)
  },
  mx = function (t, n) {
    var r = -1,
      i = 44
    do
      switch (Yi(i)) {
        case 0:
          i === 38 && Mt() === 12 && (n[r] = 1), (t[r] += px(Ke - 1, n, r))
          break
        case 2:
          t[r] += sa(i)
          break
        case 4:
          if (i === 44) {
            ;(t[++r] = Mt() === 58 ? '&\f' : ''), (n[r] = t[r].length)
            break
          }
        default:
          t[r] += ml(i)
      }
    while ((i = Ze()))
    return t
  },
  hx = function (t, n) {
    return p1(mx(d1(t), n))
  },
  kp = new WeakMap(),
  vx = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !kp.get(r)) && !i) {
        kp.set(t, !0)
        for (var o = [], a = hx(n, o), l = r.props, s = 0, u = 0; s < a.length; s++)
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = o[s] ? a[s].replace(/&\f/g, l[c]) : l[c] + ' ' + a[s]
      }
    }
  },
  gx = function (t) {
    if (t.type === 'decl') {
      var n = t.value
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''))
    }
  }
function m1(e, t) {
  switch (Jw(e, t)) {
    case 5103:
      return U + 'print-' + e + e
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
      return U + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + Ua + e + Re + e + e
    case 6828:
    case 4268:
      return U + e + Re + e + e
    case 6165:
      return U + e + Re + 'flex-' + e + e
    case 5187:
      return U + e + B(e, /(\w+).+(:[^]+)/, U + 'box-$1$2' + Re + 'flex-$1$2') + e
    case 5443:
      return U + e + Re + 'flex-item-' + B(e, /flex-|-self/, '') + e
    case 4675:
      return U + e + Re + 'flex-line-pack' + B(e, /align-content|flex-|-self/, '') + e
    case 5548:
      return U + e + Re + B(e, 'shrink', 'negative') + e
    case 5292:
      return U + e + Re + B(e, 'basis', 'preferred-size') + e
    case 6060:
      return U + 'box-' + B(e, '-grow', '') + U + e + Re + B(e, 'grow', 'positive') + e
    case 4554:
      return U + B(e, /([^-])(transform)/g, '$1' + U + '$2') + e
    case 6187:
      return B(B(B(e, /(zoom-|grab)/, U + '$1'), /(image-set)/, U + '$1'), e, '') + e
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, U + '$1$`$1')
    case 4968:
      return (
        B(
          B(e, /(.+:)(flex-)?(.*)/, U + 'box-pack:$3' + Re + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        U +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, U + '$1$2') + e
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
      if (Ot(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break
          case 102:
            return (
              B(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + U + '$2-$3$1' + Ua + (Ee(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~Fu(e, 'stretch') ? m1(B(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (Ee(e, t + 1) !== 115) break
    case 6444:
      switch (Ee(e, Ot(e) - 3 - (~Fu(e, '!important') && 10))) {
        case 107:
          return B(e, ':', ':' + U) + e
        case 101:
          return (
            B(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                U +
                (Ee(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                U +
                '$2$3$1' +
                Re +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return U + e + Re + B(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return U + e + Re + B(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return U + e + Re + B(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return U + e + Re + e + e
  }
  return e
}
var yx = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case df:
          t.return = m1(t.value, t.length)
          break
        case u1:
          return Ar([ai(t, { value: B(t.value, '@', '@' + U) })], i)
        case ff:
          if (t.length)
            return tx(t.props, function (o) {
              switch (ex(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Ar([ai(t, { props: [B(o, /:(read-\w+)/, ':' + Ua + '$1')] })], i)
                case '::placeholder':
                  return Ar(
                    [
                      ai(t, { props: [B(o, /:(plac\w+)/, ':' + U + 'input-$1')] }),
                      ai(t, { props: [B(o, /:(plac\w+)/, ':' + Ua + '$1')] }),
                      ai(t, { props: [B(o, /:(plac\w+)/, Re + 'input-$1')] })
                    ],
                    i
                  )
              }
              return ''
            })
      }
  },
  wx = [yx],
  h1 = function (t) {
    var n = t.key
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (v) {
        var k = v.getAttribute('data-emotion')
        k.indexOf(' ') !== -1 &&
          (document.head.appendChild(v), v.setAttribute('data-s', ''))
      })
    }
    var i = t.stylisPlugins || wx,
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
      u = [vx, gx]
    {
      var c,
        f = [
          cx,
          dx(function (v) {
            c.insert(v)
          })
        ],
        p = fx(u.concat(i, f)),
        y = function (k) {
          return Ar(sx(k), p)
        }
      s = function (k, m, d, h) {
        ;(c = d),
          y(k ? k + '{' + m.styles + '}' : m.styles),
          h && (g.inserted[m.name] = !0)
      }
    }
    var g = {
      key: n,
      sheet: new Gw({
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
  v1 = { exports: {} },
  V = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Se = typeof Symbol == 'function' && Symbol.for,
  mf = Se ? Symbol.for('react.element') : 60103,
  hf = Se ? Symbol.for('react.portal') : 60106,
  gl = Se ? Symbol.for('react.fragment') : 60107,
  yl = Se ? Symbol.for('react.strict_mode') : 60108,
  wl = Se ? Symbol.for('react.profiler') : 60114,
  xl = Se ? Symbol.for('react.provider') : 60109,
  kl = Se ? Symbol.for('react.context') : 60110,
  vf = Se ? Symbol.for('react.async_mode') : 60111,
  Sl = Se ? Symbol.for('react.concurrent_mode') : 60111,
  bl = Se ? Symbol.for('react.forward_ref') : 60112,
  Cl = Se ? Symbol.for('react.suspense') : 60113,
  xx = Se ? Symbol.for('react.suspense_list') : 60120,
  El = Se ? Symbol.for('react.memo') : 60115,
  Pl = Se ? Symbol.for('react.lazy') : 60116,
  kx = Se ? Symbol.for('react.block') : 60121,
  Sx = Se ? Symbol.for('react.fundamental') : 60117,
  bx = Se ? Symbol.for('react.responder') : 60118,
  Cx = Se ? Symbol.for('react.scope') : 60119
function nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case mf:
        switch (((e = e.type), e)) {
          case vf:
          case Sl:
          case gl:
          case wl:
          case yl:
          case Cl:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case kl:
              case bl:
              case Pl:
              case El:
              case xl:
                return e
              default:
                return t
            }
        }
      case hf:
        return t
    }
  }
}
function g1(e) {
  return nt(e) === Sl
}
V.AsyncMode = vf
V.ConcurrentMode = Sl
V.ContextConsumer = kl
V.ContextProvider = xl
V.Element = mf
V.ForwardRef = bl
V.Fragment = gl
V.Lazy = Pl
V.Memo = El
V.Portal = hf
V.Profiler = wl
V.StrictMode = yl
V.Suspense = Cl
V.isAsyncMode = function (e) {
  return g1(e) || nt(e) === vf
}
V.isConcurrentMode = g1
V.isContextConsumer = function (e) {
  return nt(e) === kl
}
V.isContextProvider = function (e) {
  return nt(e) === xl
}
V.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === mf
}
V.isForwardRef = function (e) {
  return nt(e) === bl
}
V.isFragment = function (e) {
  return nt(e) === gl
}
V.isLazy = function (e) {
  return nt(e) === Pl
}
V.isMemo = function (e) {
  return nt(e) === El
}
V.isPortal = function (e) {
  return nt(e) === hf
}
V.isProfiler = function (e) {
  return nt(e) === wl
}
V.isStrictMode = function (e) {
  return nt(e) === yl
}
V.isSuspense = function (e) {
  return nt(e) === Cl
}
V.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === gl ||
    e === Sl ||
    e === wl ||
    e === yl ||
    e === Cl ||
    e === xx ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Pl ||
        e.$$typeof === El ||
        e.$$typeof === xl ||
        e.$$typeof === kl ||
        e.$$typeof === bl ||
        e.$$typeof === Sx ||
        e.$$typeof === bx ||
        e.$$typeof === Cx ||
        e.$$typeof === kx))
  )
}
V.typeOf = nt
v1.exports = V
var Ex = v1.exports,
  y1 = Ex,
  Px = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  _x = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  w1 = {}
w1[y1.ForwardRef] = Px
w1[y1.Memo] = _x
var Ox = !0
function Tx(e, t, n) {
  var r = ''
  return (
    n.split(' ').forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ';') : (r += i + ' ')
    }),
    r
  )
}
var x1 = function (t, n, r) {
    var i = t.key + '-' + n.name
    ;(r === !1 || Ox === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles)
  },
  k1 = function (t, n, r) {
    x1(t, n, r)
    var i = t.key + '-' + n.name
    if (t.inserted[n.name] === void 0) {
      var o = n
      do t.insert(n === o ? '.' + i : '', o, t.sheet, !0), (o = o.next)
      while (o !== void 0)
    }
  }
function Nx(e) {
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
var Rx = {
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
  },
  Ax = /[A-Z]|^ms/g,
  $x = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  S1 = function (t) {
    return t.charCodeAt(1) === 45
  },
  Sp = function (t) {
    return t != null && typeof t != 'boolean'
  },
  Rs = l1(function (e) {
    return S1(e) ? e : e.replace(Ax, '-$&').toLowerCase()
  }),
  bp = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace($x, function (r, i, o) {
            return (Tt = { name: i, styles: o, next: Tt }), i
          })
    }
    return Rx[t] !== 1 && !S1(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n
  }
function Ki(e, t, n) {
  if (n == null) return ''
  if (n.__emotion_styles !== void 0) return n
  switch (typeof n) {
    case 'boolean':
      return ''
    case 'object': {
      if (n.anim === 1) return (Tt = { name: n.name, styles: n.styles, next: Tt }), n.name
      if (n.styles !== void 0) {
        var r = n.next
        if (r !== void 0)
          for (; r !== void 0; )
            (Tt = { name: r.name, styles: r.styles, next: Tt }), (r = r.next)
        var i = n.styles + ';'
        return i
      }
      return jx(e, t, n)
    }
    case 'function': {
      if (e !== void 0) {
        var o = Tt,
          a = n(e)
        return (Tt = o), Ki(e, t, a)
      }
      break
    }
  }
  if (t == null) return n
  var l = t[n]
  return l !== void 0 ? l : n
}
function jx(e, t, n) {
  var r = ''
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Ki(e, t, n[i]) + ';'
  else
    for (var o in n) {
      var a = n[o]
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (r += o + '{' + t[a] + '}')
          : Sp(a) && (r += Rs(o) + ':' + bp(o, a) + ';')
      else if (
        Array.isArray(a) &&
        typeof a[0] == 'string' &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          Sp(a[l]) && (r += Rs(o) + ':' + bp(o, a[l]) + ';')
      else {
        var s = Ki(e, t, a)
        switch (o) {
          case 'animation':
          case 'animationName': {
            r += Rs(o) + ':' + s + ';'
            break
          }
          default:
            r += o + '{' + s + '}'
        }
      }
    }
  return r
}
var Cp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Tt,
  gf = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0]
    var i = !0,
      o = ''
    Tt = void 0
    var a = t[0]
    a == null || a.raw === void 0 ? ((i = !1), (o += Ki(r, n, a))) : (o += a[0])
    for (var l = 1; l < t.length; l++) (o += Ki(r, n, t[l])), i && (o += a[l])
    Cp.lastIndex = 0
    for (var s = '', u; (u = Cp.exec(o)) !== null; ) s += '-' + u[1]
    var c = Nx(o) + s
    return { name: c, styles: o, next: Tt }
  },
  Mx = function (t) {
    return t()
  },
  b1 = Pi.useInsertionEffect ? Pi.useInsertionEffect : !1,
  Ix = b1 || Mx,
  Ep = b1 || w.useLayoutEffect,
  C1 = w.createContext(typeof HTMLElement < 'u' ? h1({ key: 'css' }) : null),
  Lx = C1.Provider,
  E1 = function (t) {
    return w.forwardRef(function (n, r) {
      var i = w.useContext(C1)
      return t(n, i, r)
    })
  },
  _l = w.createContext({})
a1()
var zx = E1(function (e, t) {
  var n = e.styles,
    r = gf([n], void 0, w.useContext(_l)),
    i = w.useRef()
  return (
    Ep(
      function () {
        var o = t.key + '-global',
          a = new t.sheet.constructor({
            key: o,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy
          }),
          l = !1,
          s = document.querySelector('style[data-emotion="' + o + ' ' + r.name + '"]')
        return (
          t.sheet.tags.length && (a.before = t.sheet.tags[0]),
          s !== null && ((l = !0), s.setAttribute('data-emotion', o), a.hydrate([s])),
          (i.current = [a, l]),
          function () {
            a.flush()
          }
        )
      },
      [t]
    ),
    Ep(
      function () {
        var o = i.current,
          a = o[0],
          l = o[1]
        if (l) {
          o[1] = !1
          return
        }
        if ((r.next !== void 0 && k1(t, r.next, !0), a.tags.length)) {
          var s = a.tags[a.tags.length - 1].nextElementSibling
          ;(a.before = s), a.flush()
        }
        t.insert('', r, a, !1)
      },
      [t, r.name]
    ),
    null
  )
})
function P1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return gf(t)
}
var Ol = function () {
    var t = P1.apply(void 0, arguments),
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
  Fx = Vw,
  Dx = function (t) {
    return t !== 'theme'
  },
  Pp = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? Fx : Dx
  },
  _p = function (t, n, r) {
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
  Ux = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag
    return (
      x1(n, r, i),
      Ix(function () {
        return k1(n, r, i)
      }),
      null
    )
  },
  Bx = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      a
    n !== void 0 && ((o = n.label), (a = n.target))
    var l = _p(t, n, r),
      s = l || Pp(i),
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
      var g = E1(function (v, k, m) {
        var d = (u && v.as) || i,
          h = '',
          x = [],
          b = v
        if (v.theme == null) {
          b = {}
          for (var E in v) b[E] = v[E]
          b.theme = w.useContext(_l)
        }
        typeof v.className == 'string'
          ? (h = Tx(k.registered, x, v.className))
          : v.className != null && (h = v.className + ' ')
        var C = gf(f.concat(x), k.registered, b)
        ;(h += k.key + '-' + C.name), a !== void 0 && (h += ' ' + a)
        var O = u && l === void 0 ? Pp(d) : s,
          j = {}
        for (var A in v) (u && A === 'as') || (O(A) && (j[A] = v[A]))
        return (
          (j.className = h),
          (j.ref = m),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(Ux, {
              cache: k,
              serialized: C,
              isStringTag: typeof d == 'string'
            }),
            w.createElement(d, j)
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
          return e(v, $({}, n, k, { shouldForwardProp: _p(g, k, !0) })).apply(void 0, f)
        }),
        g
      )
    }
  },
  Wx = [
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
  Uu = Bx.bind()
Wx.forEach(function (e) {
  Uu[e] = Uu(e)
})
let Bu
typeof document == 'object' && (Bu = h1({ key: 'css', prepend: !0 }))
function Hx(e) {
  const { injectFirst: t, children: n } = e
  return t && Bu ? S.jsx(Lx, { value: Bu, children: n }) : n
}
function Vx(e) {
  return e == null || Object.keys(e).length === 0
}
function Yx(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? i => t(Vx(i) ? n : i) : t
  return S.jsx(zx, { styles: r })
}
function Kx(e, t) {
  return Uu(e, t)
}
const Gx = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
  },
  Qx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: Yx,
        StyledEngineProvider: Hx,
        ThemeContext: _l,
        css: P1,
        default: Kx,
        internal_processStyles: Gx,
        keyframes: Ol
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Xx = _n(Qx)
function un(e) {
  if (typeof e != 'object' || e === null) return !1
  const t = Object.getPrototypeOf(e)
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  )
}
function _1(e) {
  if (!un(e)) return e
  const t = {}
  return (
    Object.keys(e).forEach(n => {
      t[n] = _1(e[n])
    }),
    t
  )
}
function It(e, t, n = { clone: !0 }) {
  const r = n.clone ? $({}, e) : e
  return (
    un(e) &&
      un(t) &&
      Object.keys(t).forEach(i => {
        i !== '__proto__' &&
          (un(t[i]) && i in e && un(e[i])
            ? (r[i] = It(e[i], t[i], n))
            : n.clone
            ? (r[i] = un(t[i]) ? _1(t[i]) : t[i])
            : (r[i] = t[i]))
      }),
    r
  )
}
const qx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: It, isPlainObject: un },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Zx = _n(qx)
function Gi(e) {
  let t = 'https://mui.com/production-error/?code=' + e
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.'
}
const Jx = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Gi }, Symbol.toStringTag, {
    value: 'Module'
  })
)
function uo(e) {
  if (typeof e != 'string') throw new Error(Gi(7))
  return e.charAt(0).toUpperCase() + e.slice(1)
}
const e3 = Object.freeze(
    Object.defineProperty({ __proto__: null, default: uo }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  t3 = _n(e3)
var O1 = { exports: {} },
  Y = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf = Symbol.for('react.element'),
  wf = Symbol.for('react.portal'),
  Tl = Symbol.for('react.fragment'),
  Nl = Symbol.for('react.strict_mode'),
  Rl = Symbol.for('react.profiler'),
  Al = Symbol.for('react.provider'),
  $l = Symbol.for('react.context'),
  n3 = Symbol.for('react.server_context'),
  jl = Symbol.for('react.forward_ref'),
  Ml = Symbol.for('react.suspense'),
  Il = Symbol.for('react.suspense_list'),
  Ll = Symbol.for('react.memo'),
  zl = Symbol.for('react.lazy'),
  r3 = Symbol.for('react.offscreen'),
  T1
T1 = Symbol.for('react.module.reference')
function mt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case yf:
        switch (((e = e.type), e)) {
          case Tl:
          case Rl:
          case Nl:
          case Ml:
          case Il:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case n3:
              case $l:
              case jl:
              case zl:
              case Ll:
              case Al:
                return e
              default:
                return t
            }
        }
      case wf:
        return t
    }
  }
}
Y.ContextConsumer = $l
Y.ContextProvider = Al
Y.Element = yf
Y.ForwardRef = jl
Y.Fragment = Tl
Y.Lazy = zl
Y.Memo = Ll
Y.Portal = wf
Y.Profiler = Rl
Y.StrictMode = Nl
Y.Suspense = Ml
Y.SuspenseList = Il
Y.isAsyncMode = function () {
  return !1
}
Y.isConcurrentMode = function () {
  return !1
}
Y.isContextConsumer = function (e) {
  return mt(e) === $l
}
Y.isContextProvider = function (e) {
  return mt(e) === Al
}
Y.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === yf
}
Y.isForwardRef = function (e) {
  return mt(e) === jl
}
Y.isFragment = function (e) {
  return mt(e) === Tl
}
Y.isLazy = function (e) {
  return mt(e) === zl
}
Y.isMemo = function (e) {
  return mt(e) === Ll
}
Y.isPortal = function (e) {
  return mt(e) === wf
}
Y.isProfiler = function (e) {
  return mt(e) === Rl
}
Y.isStrictMode = function (e) {
  return mt(e) === Nl
}
Y.isSuspense = function (e) {
  return mt(e) === Ml
}
Y.isSuspenseList = function (e) {
  return mt(e) === Il
}
Y.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Tl ||
    e === Rl ||
    e === Nl ||
    e === Ml ||
    e === Il ||
    e === r3 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === zl ||
        e.$$typeof === Ll ||
        e.$$typeof === Al ||
        e.$$typeof === $l ||
        e.$$typeof === jl ||
        e.$$typeof === T1 ||
        e.getModuleId !== void 0))
  )
}
Y.typeOf = mt
O1.exports = Y
var Op = O1.exports
const i3 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/
function N1(e) {
  const t = `${e}`.match(i3)
  return (t && t[1]) || ''
}
function R1(e, t = '') {
  return e.displayName || e.name || N1(e) || t
}
function Tp(e, t, n) {
  const r = R1(t)
  return e.displayName || (r !== '' ? `${n}(${r})` : n)
}
function o3(e) {
  if (e != null) {
    if (typeof e == 'string') return e
    if (typeof e == 'function') return R1(e, 'Component')
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Op.ForwardRef:
          return Tp(e, e.render, 'ForwardRef')
        case Op.Memo:
          return Tp(e, e.type, 'memo')
        default:
          return
      }
  }
}
const a3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: o3, getFunctionName: N1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  l3 = _n(a3),
  s3 = ['values', 'unit', 'step'],
  u3 = e => {
    const t = Object.keys(e).map(n => ({ key: n, val: e[n] })) || []
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => $({}, n, { [r.key]: r.val }), {})
    )
  }
function A1(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5
    } = e,
    i = je(e, s3),
    o = u3(t),
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
const c3 = { borderRadius: 4 }
function bi(e, t) {
  return t ? It(e, t, { clone: !1 }) : e
}
const xf = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Np = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: e => `@media (min-width:${xf[e]}px)` }
function Qt(e, t, n) {
  const r = e.theme || {}
  if (Array.isArray(t)) {
    const o = r.breakpoints || Np
    return t.reduce((a, l, s) => ((a[o.up(o.keys[s])] = n(t[s])), a), {})
  }
  if (typeof t == 'object') {
    const o = r.breakpoints || Np
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(o.values || xf).indexOf(l) !== -1) {
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
function f3(e = {}) {
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
function d3(e, t) {
  return e.reduce((n, r) => {
    const i = n[r]
    return (!i || Object.keys(i).length === 0) && delete n[r], n
  }, t)
}
function Fl(e, t, n = !0) {
  if (!t || typeof t != 'string') return null
  if (e && e.vars && n) {
    const r = `vars.${t}`.split('.').reduce((i, o) => (i && i[o] ? i[o] : null), e)
    if (r != null) return r
  }
  return t.split('.').reduce((r, i) => (r && r[i] != null ? r[i] : null), e)
}
function Ba(e, t, n, r = n) {
  let i
  return (
    typeof e == 'function'
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = Fl(e, n) || r),
    t && (i = t(i, r, e)),
    i
  )
}
function fe(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = a => {
      if (a[t] == null) return null
      const l = a[t],
        s = a.theme,
        u = Fl(s, r) || {}
      return Qt(a, l, f => {
        let p = Ba(u, i, f)
        return (
          f === p &&
            typeof f == 'string' &&
            (p = Ba(u, i, `${t}${f === 'default' ? '' : uo(f)}`, f)),
          n === !1 ? p : { [n]: p }
        )
      })
    }
  return (o.propTypes = {}), (o.filterProps = [t]), o
}
function p3(e) {
  const t = {}
  return n => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const m3 = { m: 'margin', p: 'padding' },
  h3 = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  },
  Rp = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  v3 = p3(e => {
    if (e.length > 2)
      if (Rp[e]) e = Rp[e]
      else return [e]
    const [t, n] = e.split(''),
      r = m3[t],
      i = h3[n] || ''
    return Array.isArray(i) ? i.map(o => r + o) : [r + i]
  }),
  kf = [
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
  Sf = [
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
;[...kf, ...Sf]
function co(e, t, n, r) {
  var i
  const o = (i = Fl(e, t, !1)) != null ? i : n
  return typeof o == 'number'
    ? a => (typeof a == 'string' ? a : o * a)
    : Array.isArray(o)
    ? a => (typeof a == 'string' ? a : o[a])
    : typeof o == 'function'
    ? o
    : () => {}
}
function $1(e) {
  return co(e, 'spacing', 8)
}
function fo(e, t) {
  if (typeof t == 'string' || t == null) return t
  const n = Math.abs(t),
    r = e(n)
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`
}
function g3(e, t) {
  return n => e.reduce((r, i) => ((r[i] = fo(t, n)), r), {})
}
function y3(e, t, n, r) {
  if (t.indexOf(n) === -1) return null
  const i = v3(n),
    o = g3(i, r),
    a = e[n]
  return Qt(e, a, o)
}
function j1(e, t) {
  const n = $1(e.theme)
  return Object.keys(e)
    .map(r => y3(e, t, r, n))
    .reduce(bi, {})
}
function ae(e) {
  return j1(e, kf)
}
ae.propTypes = {}
ae.filterProps = kf
function le(e) {
  return j1(e, Sf)
}
le.propTypes = {}
le.filterProps = Sf
function w3(e = 8) {
  if (e.mui) return e
  const t = $1({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map(o => {
          const a = t(o)
          return typeof a == 'number' ? `${a}px` : a
        })
        .join(' ')
  return (n.mui = !0), n
}
function Dl(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach(o => {
          r[o] = i
        }),
        r
      ),
      {}
    ),
    n = r => Object.keys(r).reduce((i, o) => (t[o] ? bi(i, t[o](r)) : i), {})
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  )
}
function st(e) {
  return typeof e != 'number' ? e : `${e}px solid`
}
function ht(e, t) {
  return fe({ prop: e, themeKey: 'borders', transform: t })
}
const x3 = ht('border', st),
  k3 = ht('borderTop', st),
  S3 = ht('borderRight', st),
  b3 = ht('borderBottom', st),
  C3 = ht('borderLeft', st),
  E3 = ht('borderColor'),
  P3 = ht('borderTopColor'),
  _3 = ht('borderRightColor'),
  O3 = ht('borderBottomColor'),
  T3 = ht('borderLeftColor'),
  N3 = ht('outline', st),
  R3 = ht('outlineColor'),
  Ul = e => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = co(e.theme, 'shape.borderRadius', 4),
        n = r => ({ borderRadius: fo(t, r) })
      return Qt(e, e.borderRadius, n)
    }
    return null
  }
Ul.propTypes = {}
Ul.filterProps = ['borderRadius']
Dl(x3, k3, S3, b3, C3, E3, P3, _3, O3, T3, Ul, N3, R3)
const Bl = e => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = r => ({ gap: fo(t, r) })
    return Qt(e, e.gap, n)
  }
  return null
}
Bl.propTypes = {}
Bl.filterProps = ['gap']
const Wl = e => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = r => ({ columnGap: fo(t, r) })
    return Qt(e, e.columnGap, n)
  }
  return null
}
Wl.propTypes = {}
Wl.filterProps = ['columnGap']
const Hl = e => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = r => ({ rowGap: fo(t, r) })
    return Qt(e, e.rowGap, n)
  }
  return null
}
Hl.propTypes = {}
Hl.filterProps = ['rowGap']
const A3 = fe({ prop: 'gridColumn' }),
  $3 = fe({ prop: 'gridRow' }),
  j3 = fe({ prop: 'gridAutoFlow' }),
  M3 = fe({ prop: 'gridAutoColumns' }),
  I3 = fe({ prop: 'gridAutoRows' }),
  L3 = fe({ prop: 'gridTemplateColumns' }),
  z3 = fe({ prop: 'gridTemplateRows' }),
  F3 = fe({ prop: 'gridTemplateAreas' }),
  D3 = fe({ prop: 'gridArea' })
Dl(Bl, Wl, Hl, A3, $3, j3, M3, I3, L3, z3, F3, D3)
function $r(e, t) {
  return t === 'grey' ? t : e
}
const U3 = fe({ prop: 'color', themeKey: 'palette', transform: $r }),
  B3 = fe({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: $r
  }),
  W3 = fe({ prop: 'backgroundColor', themeKey: 'palette', transform: $r })
Dl(U3, B3, W3)
function Qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const H3 = fe({ prop: 'width', transform: Qe }),
  bf = e => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = n => {
        var r, i
        const o =
          ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null
            ? void 0
            : r[n]) || xf[n]
        return o
          ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !==
            'px'
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: Qe(n) }
      }
      return Qt(e, e.maxWidth, t)
    }
    return null
  }
bf.filterProps = ['maxWidth']
const V3 = fe({ prop: 'minWidth', transform: Qe }),
  Y3 = fe({ prop: 'height', transform: Qe }),
  K3 = fe({ prop: 'maxHeight', transform: Qe }),
  G3 = fe({ prop: 'minHeight', transform: Qe })
fe({ prop: 'size', cssProperty: 'width', transform: Qe })
fe({ prop: 'size', cssProperty: 'height', transform: Qe })
const Q3 = fe({ prop: 'boxSizing' })
Dl(H3, bf, V3, Y3, K3, G3, Q3)
const po = {
  border: { themeKey: 'borders', transform: st },
  borderTop: { themeKey: 'borders', transform: st },
  borderRight: { themeKey: 'borders', transform: st },
  borderBottom: { themeKey: 'borders', transform: st },
  borderLeft: { themeKey: 'borders', transform: st },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: st },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Ul },
  color: { themeKey: 'palette', transform: $r },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: $r },
  backgroundColor: { themeKey: 'palette', transform: $r },
  p: { style: le },
  pt: { style: le },
  pr: { style: le },
  pb: { style: le },
  pl: { style: le },
  px: { style: le },
  py: { style: le },
  padding: { style: le },
  paddingTop: { style: le },
  paddingRight: { style: le },
  paddingBottom: { style: le },
  paddingLeft: { style: le },
  paddingX: { style: le },
  paddingY: { style: le },
  paddingInline: { style: le },
  paddingInlineStart: { style: le },
  paddingInlineEnd: { style: le },
  paddingBlock: { style: le },
  paddingBlockStart: { style: le },
  paddingBlockEnd: { style: le },
  m: { style: ae },
  mt: { style: ae },
  mr: { style: ae },
  mb: { style: ae },
  ml: { style: ae },
  mx: { style: ae },
  my: { style: ae },
  margin: { style: ae },
  marginTop: { style: ae },
  marginRight: { style: ae },
  marginBottom: { style: ae },
  marginLeft: { style: ae },
  marginX: { style: ae },
  marginY: { style: ae },
  marginInline: { style: ae },
  marginInlineStart: { style: ae },
  marginInlineEnd: { style: ae },
  marginBlock: { style: ae },
  marginBlockStart: { style: ae },
  marginBlockEnd: { style: ae },
  displayPrint: { cssProperty: !1, transform: e => ({ '@media print': { display: e } }) },
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
  gap: { style: Bl },
  rowGap: { style: Hl },
  columnGap: { style: Wl },
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
  width: { transform: Qe },
  maxWidth: { style: bf },
  minWidth: { transform: Qe },
  height: { transform: Qe },
  maxHeight: { transform: Qe },
  minHeight: { transform: Qe },
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
}
function X3(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t)
  return e.every(r => n.size === Object.keys(r).length)
}
function q3(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function M1() {
  function e(n, r, i, o) {
    const a = { [n]: r, theme: i },
      l = o[n]
    if (!l) return { [n]: r }
    const { cssProperty: s = n, themeKey: u, transform: c, style: f } = l
    if (r == null) return null
    if (u === 'typography' && r === 'inherit') return { [n]: r }
    const p = Fl(i, u) || {}
    return f
      ? f(a)
      : Qt(a, r, g => {
          let v = Ba(p, c, g)
          return (
            g === v &&
              typeof g == 'string' &&
              (v = Ba(p, c, `${n}${g === 'default' ? '' : uo(g)}`, g)),
            s === !1 ? v : { [s]: v }
          )
        })
  }
  function t(n) {
    var r
    const { sx: i, theme: o = {} } = n || {}
    if (!i) return null
    const a = (r = o.unstable_sxConfig) != null ? r : po
    function l(s) {
      let u = s
      if (typeof s == 'function') u = s(o)
      else if (typeof s != 'object') return s
      if (!u) return null
      const c = f3(o.breakpoints),
        f = Object.keys(c)
      let p = c
      return (
        Object.keys(u).forEach(y => {
          const g = q3(u[y], o)
          if (g != null)
            if (typeof g == 'object')
              if (a[y]) p = bi(p, e(y, g, o, a))
              else {
                const v = Qt({ theme: o }, g, k => ({ [y]: k }))
                X3(v, g) ? (p[y] = t({ sx: g, theme: o })) : (p = bi(p, v))
              }
            else p = bi(p, e(y, g, o, a))
        }),
        d3(f, p)
      )
    }
    return Array.isArray(i) ? i.map(l) : l(i)
  }
  return t
}
const Vl = M1()
Vl.filterProps = ['sx']
function I1(e, t) {
  const n = this
  return n.vars && typeof n.getColorSchemeSelector == 'function'
    ? { [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t }
    : n.palette.mode === e
    ? t
    : {}
}
const Z3 = ['breakpoints', 'palette', 'spacing', 'shape']
function Cf(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    a = je(e, Z3),
    l = A1(n),
    s = w3(i)
  let u = It(
    {
      breakpoints: l,
      direction: 'ltr',
      components: {},
      palette: $({ mode: 'light' }, r),
      spacing: s,
      shape: $({}, c3, o)
    },
    a
  )
  return (
    (u.applyStyles = I1),
    (u = t.reduce((c, f) => It(c, f), u)),
    (u.unstable_sxConfig = $({}, po, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Vl({ sx: f, theme: this })
    }),
    u
  )
}
const J3 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Cf,
        private_createBreakpoints: A1,
        unstable_applyStyles: I1
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  e5 = _n(J3),
  t5 = ['sx'],
  n5 = e => {
    var t, n
    const r = { systemProps: {}, otherProps: {} },
      i =
        (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null
          ? t
          : po
    return (
      Object.keys(e).forEach(o => {
        i[o] ? (r.systemProps[o] = e[o]) : (r.otherProps[o] = e[o])
      }),
      r
    )
  }
function L1(e) {
  const { sx: t } = e,
    n = je(e, t5),
    { systemProps: r, otherProps: i } = n5(n)
  let o
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == 'function'
      ? (o = (...a) => {
          const l = t(...a)
          return un(l) ? $({}, r, l) : r
        })
      : (o = $({}, r, t)),
    $({}, i, { sx: o })
  )
}
const r5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Vl,
        extendSxProp: L1,
        unstable_createStyleFunctionSx: M1,
        unstable_defaultSxConfig: po
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  i5 = _n(r5)
var Gr = o1
Object.defineProperty(lo, '__esModule', { value: !0 })
var o5 = (lo.default = y5)
lo.shouldForwardProp = ca
lo.systemDefaultTheme = void 0
var it = Gr(a1()),
  Wu = Gr(Ww()),
  Ap = d5(Xx),
  a5 = Zx
Gr(t3)
Gr(l3)
var l5 = Gr(e5),
  s5 = Gr(i5)
const u5 = ['ownerState'],
  c5 = ['variants'],
  f5 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver']
function z1(e) {
  if (typeof WeakMap != 'function') return null
  var t = new WeakMap(),
    n = new WeakMap()
  return (z1 = function (r) {
    return r ? n : t
  })(e)
}
function d5(e, t) {
  if (e && e.__esModule) return e
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e }
  var n = z1(t)
  if (n && n.has(e)) return n.get(e)
  var r = { __proto__: null },
    i = Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var a = i ? Object.getOwnPropertyDescriptor(e, o) : null
      a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o])
    }
  return (r.default = e), n && n.set(e, r), r
}
function p5(e) {
  return Object.keys(e).length === 0
}
function m5(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96
}
function ca(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
const h5 = (lo.systemDefaultTheme = (0, l5.default)()),
  v5 = e => e && e.charAt(0).toLowerCase() + e.slice(1)
function zo({ defaultTheme: e, theme: t, themeId: n }) {
  return p5(t) ? e : t[n] || t
}
function g5(e) {
  return e ? (t, n) => n[e] : null
}
function fa(e, t) {
  let { ownerState: n } = t,
    r = (0, Wu.default)(t, u5)
  const i = typeof e == 'function' ? e((0, it.default)({ ownerState: n }, r)) : e
  if (Array.isArray(i))
    return i.flatMap(o => fa(o, (0, it.default)({ ownerState: n }, r)))
  if (i && typeof i == 'object' && Array.isArray(i.variants)) {
    const { variants: o = [] } = i
    let l = (0, Wu.default)(i, c5)
    return (
      o.forEach(s => {
        let u = !0
        typeof s.props == 'function'
          ? (u = s.props((0, it.default)({ ownerState: n }, r, n)))
          : Object.keys(s.props).forEach(c => {
              ;(n == null ? void 0 : n[c]) !== s.props[c] &&
                r[c] !== s.props[c] &&
                (u = !1)
            }),
          u &&
            (Array.isArray(l) || (l = [l]),
            l.push(
              typeof s.style == 'function'
                ? s.style((0, it.default)({ ownerState: n }, r, n))
                : s.style
            ))
      }),
      l
    )
  }
  return i
}
function y5(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = h5,
      rootShouldForwardProp: r = ca,
      slotShouldForwardProp: i = ca
    } = e,
    o = a =>
      (0, s5.default)(
        (0, it.default)({}, a, {
          theme: zo((0, it.default)({}, a, { defaultTheme: n, themeId: t }))
        })
      )
  return (
    (o.__mui_systemSx = !0),
    (a, l = {}) => {
      ;(0, Ap.internal_processStyles)(a, b =>
        b.filter(E => !(E != null && E.__mui_systemSx))
      )
      const {
          name: s,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: p = g5(v5(u))
        } = l,
        y = (0, Wu.default)(l, f5),
        g = c !== void 0 ? c : (u && u !== 'Root' && u !== 'root') || !1,
        v = f || !1
      let k,
        m = ca
      u === 'Root' || u === 'root' ? (m = r) : u ? (m = i) : m5(a) && (m = void 0)
      const d = (0, Ap.default)(
          a,
          (0, it.default)({ shouldForwardProp: m, label: k }, y)
        ),
        h = b =>
          (typeof b == 'function' && b.__emotion_real !== b) || (0, a5.isPlainObject)(b)
            ? E =>
                fa(
                  b,
                  (0, it.default)({}, E, {
                    theme: zo({ theme: E.theme, defaultTheme: n, themeId: t })
                  })
                )
            : b,
        x = (b, ...E) => {
          let C = h(b)
          const O = E ? E.map(h) : []
          s &&
            p &&
            O.push(W => {
              const K = zo((0, it.default)({}, W, { defaultTheme: n, themeId: t }))
              if (!K.components || !K.components[s] || !K.components[s].styleOverrides)
                return null
              const pe = K.components[s].styleOverrides,
                Oe = {}
              return (
                Object.entries(pe).forEach(([vt, Me]) => {
                  Oe[vt] = fa(Me, (0, it.default)({}, W, { theme: K }))
                }),
                p(W, Oe)
              )
            }),
            s &&
              !g &&
              O.push(W => {
                var K
                const pe = zo((0, it.default)({}, W, { defaultTheme: n, themeId: t })),
                  Oe =
                    pe == null || (K = pe.components) == null || (K = K[s]) == null
                      ? void 0
                      : K.variants
                return fa({ variants: Oe }, (0, it.default)({}, W, { theme: pe }))
              }),
            v || O.push(o)
          const j = O.length - E.length
          if (Array.isArray(b) && j > 0) {
            const W = new Array(j).fill('')
            ;(C = [...b, ...W]), (C.raw = [...b.raw, ...W])
          }
          const A = d(C, ...O)
          return a.muiName && (A.muiName = a.muiName), A
        }
      return d.withConfig && (x.withConfig = d.withConfig), x
    }
  )
}
const $p = e => e,
  w5 = () => {
    let e = $p
    return {
      configure(t) {
        e = t
      },
      generate(t) {
        return e(t)
      },
      reset() {
        e = $p
      }
    }
  },
  x5 = w5(),
  k5 = {
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
function Rn(e, t, n = 'Mui') {
  const r = k5[t]
  return r ? `${n}-${r}` : `${x5.generate(e)}-${t}`
}
function S5(e, t) {
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
var de = {}
const b5 = _n(Jx)
function C5(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n))
}
const E5 = Object.freeze(
    Object.defineProperty({ __proto__: null, default: C5 }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  P5 = _n(E5)
var F1 = o1
Object.defineProperty(de, '__esModule', { value: !0 })
var jp = (de.alpha = W1)
de.blend = F5
de.colorChannel = void 0
var _5 = (de.darken = Pf)
de.decomposeColor = pt
de.emphasize = H1
var O5 = (de.getContrastRatio = j5)
de.getLuminance = Wa
de.hexToRgb = D1
de.hslToRgb = B1
var T5 = (de.lighten = _f)
de.private_safeAlpha = M5
de.private_safeColorChannel = void 0
de.private_safeDarken = I5
de.private_safeEmphasize = z5
de.private_safeLighten = L5
de.recomposeColor = Qr
de.rgbToHex = $5
var Mp = F1(b5),
  N5 = F1(P5)
function Ef(e, t = 0, n = 1) {
  return (0, N5.default)(e, t, n)
}
function D1(e) {
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
function R5(e) {
  const t = e.toString(16)
  return t.length === 1 ? `0${t}` : t
}
function pt(e) {
  if (e.type) return e
  if (e.charAt(0) === '#') return pt(D1(e))
  const t = e.indexOf('('),
    n = e.substring(0, t)
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error((0, Mp.default)(9, e))
  let r = e.substring(t + 1, e.length - 1),
    i
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(i) === -1)
    )
      throw new Error((0, Mp.default)(10, i))
  } else r = r.split(',')
  return (r = r.map(o => parseFloat(o))), { type: n, values: r, colorSpace: i }
}
const U1 = e => {
  const t = pt(e)
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf('hsl') !== -1 && r !== 0 ? `${n}%` : n))
    .join(' ')
}
de.colorChannel = U1
const A5 = (e, t) => {
  try {
    return U1(e)
  } catch {
    return e
  }
}
de.private_safeColorChannel = A5
function Qr(e) {
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
function $5(e) {
  if (e.indexOf('#') === 0) return e
  const { values: t } = pt(e)
  return `#${t.map((n, r) => R5(r === 3 ? Math.round(255 * n) : n)).join('')}`
}
function B1(e) {
  e = pt(e)
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    a = (u, c = (u + n / 30) % 12) => i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1)
  let l = 'rgb'
  const s = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)]
  return e.type === 'hsla' && ((l += 'a'), s.push(t[3])), Qr({ type: l, values: s })
}
function Wa(e) {
  e = pt(e)
  let t = e.type === 'hsl' || e.type === 'hsla' ? pt(B1(e)).values : e.values
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
function j5(e, t) {
  const n = Wa(e),
    r = Wa(t)
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
}
function W1(e, t) {
  return (
    (e = pt(e)),
    (t = Ef(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Qr(e)
  )
}
function M5(e, t, n) {
  try {
    return W1(e, t)
  } catch {
    return e
  }
}
function Pf(e, t) {
  if (((e = pt(e)), (t = Ef(t)), e.type.indexOf('hsl') !== -1)) e.values[2] *= 1 - t
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
  return Qr(e)
}
function I5(e, t, n) {
  try {
    return Pf(e, t)
  } catch {
    return e
  }
}
function _f(e, t) {
  if (((e = pt(e)), (t = Ef(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
  return Qr(e)
}
function L5(e, t, n) {
  try {
    return _f(e, t)
  } catch {
    return e
  }
}
function H1(e, t = 0.15) {
  return Wa(e) > 0.5 ? Pf(e, t) : _f(e, t)
}
function z5(e, t, n) {
  try {
    return H1(e, t)
  } catch {
    return e
  }
}
function F5(e, t, n, r = 1) {
  const i = (s, u) => Math.round((s ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    o = pt(e),
    a = pt(t),
    l = [
      i(o.values[0], a.values[0]),
      i(o.values[1], a.values[1]),
      i(o.values[2], a.values[2])
    ]
  return Qr({ type: 'rgb', values: l })
}
const Qi = { black: '#000', white: '#fff' },
  D5 = {
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
  ir = {
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
  or = {
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
  li = {
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
  ar = {
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
  lr = {
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
  sr = {
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
  U5 = ['mode', 'contrastThreshold', 'tonalOffset'],
  Ip = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Qi.white, default: Qi.white },
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
  As = {
    text: {
      primary: Qi.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Qi.white,
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
function Lp(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = T5(e.main, i))
      : t === 'dark' && (e.dark = _5(e.main, o)))
}
function B5(e = 'light') {
  return e === 'dark'
    ? { main: ar[200], light: ar[50], dark: ar[400] }
    : { main: ar[700], light: ar[400], dark: ar[800] }
}
function W5(e = 'light') {
  return e === 'dark'
    ? { main: ir[200], light: ir[50], dark: ir[400] }
    : { main: ir[500], light: ir[300], dark: ir[700] }
}
function H5(e = 'light') {
  return e === 'dark'
    ? { main: or[500], light: or[300], dark: or[700] }
    : { main: or[700], light: or[400], dark: or[800] }
}
function V5(e = 'light') {
  return e === 'dark'
    ? { main: lr[400], light: lr[300], dark: lr[700] }
    : { main: lr[700], light: lr[500], dark: lr[900] }
}
function Y5(e = 'light') {
  return e === 'dark'
    ? { main: sr[400], light: sr[300], dark: sr[700] }
    : { main: sr[800], light: sr[500], dark: sr[900] }
}
function K5(e = 'light') {
  return e === 'dark'
    ? { main: li[400], light: li[300], dark: li[700] }
    : { main: '#ed6c02', light: li[500], dark: li[900] }
}
function G5(e) {
  const { mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2 } = e,
    i = je(e, U5),
    o = e.primary || B5(t),
    a = e.secondary || W5(t),
    l = e.error || H5(t),
    s = e.info || V5(t),
    u = e.success || Y5(t),
    c = e.warning || K5(t)
  function f(v) {
    return O5(v, As.text.primary) >= n ? As.text.primary : Ip.text.primary
  }
  const p = ({
      color: v,
      name: k,
      mainShade: m = 500,
      lightShade: d = 300,
      darkShade: h = 700
    }) => {
      if (((v = $({}, v)), !v.main && v[m] && (v.main = v[m]), !v.hasOwnProperty('main')))
        throw new Error(Gi(11, k ? ` (${k})` : '', m))
      if (typeof v.main != 'string')
        throw new Error(Gi(12, k ? ` (${k})` : '', JSON.stringify(v.main)))
      return (
        Lp(v, 'light', d, r),
        Lp(v, 'dark', h, r),
        v.contrastText || (v.contrastText = f(v.main)),
        v
      )
    },
    y = { dark: As, light: Ip }
  return It(
    $(
      {
        common: $({}, Qi),
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
        grey: D5,
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
const Q5 = [
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
function X5(e) {
  return Math.round(e * 1e5) / 1e5
}
const zp = { textTransform: 'uppercase' },
  Fp = '"Roboto", "Helvetica", "Arial", sans-serif'
function q5(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = Fp,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: s = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f
    } = n,
    p = je(n, Q5),
    y = i / 14,
    g = f || (m => `${(m / u) * y}rem`),
    v = (m, d, h, x, b) =>
      $(
        { fontFamily: r, fontWeight: m, fontSize: g(d), lineHeight: h },
        r === Fp ? { letterSpacing: `${X5(x / d)}em` } : {},
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
      button: v(l, 14, 1.75, 0.4, zp),
      caption: v(a, 12, 1.66, 0.4),
      overline: v(a, 12, 2.66, 1, zp),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      }
    }
  return It(
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
const Z5 = 0.2,
  J5 = 0.14,
  e4 = 0.12
function ee(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Z5})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${J5})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${e4})`
  ].join(',')
}
const t4 = [
    'none',
    ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ],
  n4 = ['duration', 'easing', 'delay'],
  r4 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  i4 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  }
function Dp(e) {
  return `${Math.round(e)}ms`
}
function o4(e) {
  if (!e) return 0
  const t = e / 36
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10)
}
function a4(e) {
  const t = $({}, r4, e.easing),
    n = $({}, i4, e.duration)
  return $(
    {
      getAutoHeightDuration: o4,
      create: (i = ['all'], o = {}) => {
        const { duration: a = n.standard, easing: l = t.easeInOut, delay: s = 0 } = o
        return (
          je(o, n4),
          (Array.isArray(i) ? i : [i])
            .map(
              u =>
                `${u} ${typeof a == 'string' ? a : Dp(a)} ${l} ${
                  typeof s == 'string' ? s : Dp(s)
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
const l4 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  s4 = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape'
  ]
function u4(e = {}, ...t) {
  const { mixins: n = {}, palette: r = {}, transitions: i = {}, typography: o = {} } = e,
    a = je(e, s4)
  if (e.vars) throw new Error(Gi(18))
  const l = G5(r),
    s = Cf(e)
  let u = It(s, {
    mixins: S5(s.breakpoints, n),
    palette: l,
    shadows: t4.slice(),
    typography: q5(l, o),
    transitions: a4(i),
    zIndex: $({}, l4)
  })
  return (
    (u = It(u, a)),
    (u = t.reduce((c, f) => It(c, f), u)),
    (u.unstable_sxConfig = $({}, po, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Vl({ sx: f, theme: this })
    }),
    u
  )
}
const V1 = u4(),
  Y1 = '$$material'
function c4(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
const f4 = e => c4(e) && e !== 'classes',
  Lt = o5({ themeId: Y1, defaultTheme: V1, rootShouldForwardProp: f4 })
function K1(e, t) {
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
                n[r][a] = K1(i[a], o[a])
              }))
      } else n[r] === void 0 && (n[r] = e[r])
    }),
    n
  )
}
function d4(e) {
  const { theme: t, name: n, props: r } = e
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps
    ? r
    : K1(t.components[n].defaultProps, r)
}
function p4(e) {
  return Object.keys(e).length === 0
}
function m4(e = null) {
  const t = w.useContext(_l)
  return !t || p4(t) ? e : t
}
const h4 = Cf()
function v4(e = h4) {
  return m4(e)
}
function g4({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = v4(n)
  return r && (i = i[r] || i), d4({ theme: i, name: t, props: e })
}
function An({ props: e, name: t }) {
  return g4({ props: e, name: t, defaultTheme: V1, themeId: Y1 })
}
const Up = e => {
  let t
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2), (t / 100).toFixed(2)
  )
}
function $n(e, t, n = 'Mui') {
  const r = {}
  return (
    t.forEach(i => {
      r[i] = Rn(e, i, n)
    }),
    r
  )
}
const y4 = typeof window < 'u' ? w.useLayoutEffect : w.useEffect
function w4(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t)
}
function Fo(e) {
  const t = w.useRef(e)
  return (
    y4(() => {
      t.current = e
    }),
    w.useRef((...n) => (0, t.current)(...n)).current
  )
}
function Bp(...e) {
  return w.useMemo(
    () =>
      e.every(t => t == null)
        ? null
        : t => {
            e.forEach(n => {
              w4(n, t)
            })
          },
    e
  )
}
const Wp = {}
function x4(e, t) {
  const n = w.useRef(Wp)
  return n.current === Wp && (n.current = e(t)), n
}
const k4 = []
function S4(e) {
  w.useEffect(e, k4)
}
class Yl {
  constructor() {
    ;(this.currentId = null),
      (this.clear = () => {
        this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null))
      }),
      (this.disposeEffect = () => this.clear)
  }
  static create() {
    return new Yl()
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        ;(this.currentId = null), n()
      }, t))
  }
}
function b4() {
  const e = x4(Yl.create).current
  return S4(e.disposeEffect), e
}
let Kl = !0,
  Hu = !1
const C4 = new Yl(),
  E4 = {
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
function P4(e) {
  const { type: t, tagName: n } = e
  return !!(
    (n === 'INPUT' && E4[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  )
}
function _4(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Kl = !0)
}
function $s() {
  Kl = !1
}
function O4() {
  this.visibilityState === 'hidden' && Hu && (Kl = !0)
}
function T4(e) {
  e.addEventListener('keydown', _4, !0),
    e.addEventListener('mousedown', $s, !0),
    e.addEventListener('pointerdown', $s, !0),
    e.addEventListener('touchstart', $s, !0),
    e.addEventListener('visibilitychange', O4, !0)
}
function N4(e) {
  const { target: t } = e
  try {
    return t.matches(':focus-visible')
  } catch {}
  return Kl || P4(t)
}
function R4() {
  const e = w.useCallback(i => {
      i != null && T4(i.ownerDocument)
    }, []),
    t = w.useRef(!1)
  function n() {
    return t.current
      ? ((Hu = !0),
        C4.start(100, () => {
          Hu = !1
        }),
        (t.current = !1),
        !0)
      : !1
  }
  function r(i) {
    return N4(i) ? ((t.current = !0), !0) : !1
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e }
}
function A4(e) {
  return Rn('MuiPaper', e)
}
$n('MuiPaper', [
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
const $4 = ['className', 'component', 'elevation', 'square', 'variant'],
  j4 = e => {
    const { square: t, elevation: n, variant: r, classes: i } = e,
      o = { root: ['root', r, !t && 'rounded', r === 'elevation' && `elevation${n}`] }
    return er(o, A4, i)
  },
  M4 = Lt('div', {
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
              backgroundImage: `linear-gradient(${jp('#fff', Up(t.elevation))}, ${jp(
                '#fff',
                Up(t.elevation)
              )})`
            },
          e.vars && {
            backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
          }
        )
    )
  }),
  I4 = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiPaper' }),
      {
        className: i,
        component: o = 'div',
        elevation: a = 1,
        square: l = !1,
        variant: s = 'elevation'
      } = r,
      u = je(r, $4),
      c = $({}, r, { component: o, elevation: a, square: l, variant: s }),
      f = j4(c)
    return S.jsx(M4, $({ as: o, ownerState: c, className: Ce(f.root, i), ref: n }, u))
  })
function L4(e) {
  return Rn('MuiCard', e)
}
$n('MuiCard', ['root'])
const z4 = ['className', 'raised'],
  F4 = e => {
    const { classes: t } = e
    return er({ root: ['root'] }, L4, t)
  },
  D4 = Lt(I4, { name: 'MuiCard', slot: 'Root', overridesResolver: (e, t) => t.root })(
    () => ({ overflow: 'hidden' })
  ),
  U4 = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiCard' }),
      { className: i, raised: o = !1 } = r,
      a = je(r, z4),
      l = $({}, r, { raised: o }),
      s = F4(l)
    return S.jsx(
      D4,
      $({ className: Ce(s.root, i), elevation: o ? 8 : void 0, ref: n, ownerState: l }, a)
    )
  })
function B4(e) {
  return Rn('MuiCardContent', e)
}
$n('MuiCardContent', ['root'])
const W4 = ['className', 'component'],
  H4 = e => {
    const { classes: t } = e
    return er({ root: ['root'] }, B4, t)
  },
  V4 = Lt('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ padding: 16, '&:last-child': { paddingBottom: 24 } })),
  Y4 = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiCardContent' }),
      { className: i, component: o = 'div' } = r,
      a = je(r, W4),
      l = $({}, r, { component: o }),
      s = H4(l)
    return S.jsx(V4, $({ as: o, className: Ce(s.root, i), ownerState: l, ref: n }, a))
  })
function K4(e) {
  return Rn('MuiCardMedia', e)
}
$n('MuiCardMedia', ['root', 'media', 'img'])
const G4 = ['children', 'className', 'component', 'image', 'src', 'style'],
  Q4 = e => {
    const { classes: t, isMediaComponent: n, isImageComponent: r } = e
    return er({ root: ['root', n && 'media', r && 'img'] }, K4, t)
  },
  X4 = Lt('div', {
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
  q4 = ['video', 'audio', 'picture', 'iframe', 'img'],
  Z4 = ['picture', 'img'],
  J4 = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiCardMedia' }),
      { children: i, className: o, component: a = 'div', image: l, src: s, style: u } = r,
      c = je(r, G4),
      f = q4.indexOf(a) !== -1,
      p = !f && l ? $({ backgroundImage: `url("${l}")` }, u) : u,
      y = $({}, r, {
        component: a,
        isMediaComponent: f,
        isImageComponent: Z4.indexOf(a) !== -1
      }),
      g = Q4(y)
    return S.jsx(
      X4,
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
  })
function ek(e) {
  return Rn('MuiTypography', e)
}
$n('MuiTypography', [
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
const tk = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping'
  ],
  nk = e => {
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
          e.align !== 'inherit' && `align${uo(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          i && 'paragraph'
        ]
      }
    return er(l, ek, a)
  },
  rk = Lt('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${uo(n.align)}`],
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
  Hp = {
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
  ik = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  },
  ok = e => ik[e] || e,
  Vp = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiTypography' }),
      i = ok(r.color),
      o = L1($({}, r, { color: i })),
      {
        align: a = 'inherit',
        className: l,
        component: s,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: p = 'body1',
        variantMapping: y = Hp
      } = o,
      g = je(o, tk),
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
      k = s || (f ? 'p' : y[p] || Hp[p]) || 'span',
      m = nk(v)
    return S.jsx(rk, $({ as: k, ref: n, ownerState: v, className: Ce(m.root, l) }, g))
  })
function Vu(e, t) {
  return (
    (Vu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r
        }),
    Vu(e, t)
  )
}
function ak(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Vu(e, t)
}
const Yp = Q.createContext(null)
function lk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function Of(e, t) {
  var n = function (o) {
      return t && w.isValidElement(o) ? t(o) : o
    },
    r = Object.create(null)
  return (
    e &&
      w.Children.map(e, function (i) {
        return i
      }).forEach(function (i) {
        r[i.key] = n(i)
      }),
    r
  )
}
function sk(e, t) {
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
function Fn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t]
}
function uk(e, t) {
  return Of(e.children, function (n) {
    return w.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Fn(n, 'appear', e),
      enter: Fn(n, 'enter', e),
      exit: Fn(n, 'exit', e)
    })
  })
}
function ck(e, t, n) {
  var r = Of(e.children),
    i = sk(t, r)
  return (
    Object.keys(i).forEach(function (o) {
      var a = i[o]
      if (w.isValidElement(a)) {
        var l = o in t,
          s = o in r,
          u = t[o],
          c = w.isValidElement(u) && !u.props.in
        s && (!l || c)
          ? (i[o] = w.cloneElement(a, {
              onExited: n.bind(null, a),
              in: !0,
              exit: Fn(a, 'exit', e),
              enter: Fn(a, 'enter', e)
            }))
          : !s && l && !c
          ? (i[o] = w.cloneElement(a, { in: !1 }))
          : s &&
            l &&
            w.isValidElement(u) &&
            (i[o] = w.cloneElement(a, {
              onExited: n.bind(null, a),
              in: u.props.in,
              exit: Fn(a, 'exit', e),
              enter: Fn(a, 'enter', e)
            }))
      }
    }),
    i
  )
}
var fk =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    },
  dk = {
    component: 'div',
    childFactory: function (t) {
      return t
    }
  },
  Tf = (function (e) {
    ak(t, e)
    function t(r, i) {
      var o
      o = e.call(this, r, i) || this
      var a = o.handleExited.bind(lk(o))
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
        return { children: s ? uk(i, l) : ck(i, a, l), firstRender: !1 }
      }),
      (n.handleExited = function (i, o) {
        var a = Of(this.props.children)
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
          l = je(i, ['component', 'childFactory']),
          s = this.state.contextValue,
          u = fk(this.state.children).map(a)
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          o === null
            ? Q.createElement(Yp.Provider, { value: s }, u)
            : Q.createElement(Yp.Provider, { value: s }, Q.createElement(o, l, u))
        )
      }),
      t
    )
  })(Q.Component)
Tf.propTypes = {}
Tf.defaultProps = dk
function pk(e) {
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
    [c, f] = w.useState(!1),
    p = Ce(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    y = { width: a, height: a, top: -(a / 2) + o, left: -(a / 2) + i },
    g = Ce(n.child, c && n.childLeaving, r && n.childPulsate)
  return (
    !l && !c && f(!0),
    w.useEffect(() => {
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
const ot = $n('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
  ]),
  mk = ['center', 'classes', 'className']
let Gl = e => e,
  Kp,
  Gp,
  Qp,
  Xp
const Yu = 550,
  hk = 80,
  vk = Ol(
    Kp ||
      (Kp = Gl`
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
  gk = Ol(
    Gp ||
      (Gp = Gl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  yk = Ol(
    Qp ||
      (Qp = Gl`
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
  wk = Lt('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  xk = Lt(pk, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    Xp ||
      (Xp = Gl`
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
    ot.rippleVisible,
    vk,
    Yu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ot.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    ot.child,
    ot.childLeaving,
    gk,
    Yu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ot.childPulsate,
    yk,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  kk = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiTouchRipple' }),
      { center: i = !1, classes: o = {}, className: a } = r,
      l = je(r, mk),
      [s, u] = w.useState([]),
      c = w.useRef(0),
      f = w.useRef(null)
    w.useEffect(() => {
      f.current && (f.current(), (f.current = null))
    }, [s])
    const p = w.useRef(!1),
      y = b4(),
      g = w.useRef(null),
      v = w.useRef(null),
      k = w.useCallback(
        x => {
          const { pulsate: b, rippleX: E, rippleY: C, rippleSize: O, cb: j } = x
          u(A => [
            ...A,
            S.jsx(
              xk,
              {
                classes: {
                  ripple: Ce(o.ripple, ot.ripple),
                  rippleVisible: Ce(o.rippleVisible, ot.rippleVisible),
                  ripplePulsate: Ce(o.ripplePulsate, ot.ripplePulsate),
                  child: Ce(o.child, ot.child),
                  childLeaving: Ce(o.childLeaving, ot.childLeaving),
                  childPulsate: Ce(o.childPulsate, ot.childPulsate)
                },
                timeout: Yu,
                pulsate: b,
                rippleX: E,
                rippleY: C,
                rippleSize: O
              },
              c.current
            )
          ]),
            (c.current += 1),
            (f.current = j)
        },
        [o]
      ),
      m = w.useCallback(
        (x = {}, b = {}, E = () => {}) => {
          const { pulsate: C = !1, center: O = i || b.pulsate, fakeElement: j = !1 } = b
          if ((x == null ? void 0 : x.type) === 'mousedown' && p.current) {
            p.current = !1
            return
          }
          ;(x == null ? void 0 : x.type) === 'touchstart' && (p.current = !0)
          const A = j ? null : v.current,
            W = A ? A.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 }
          let K, pe, Oe
          if (
            O ||
            x === void 0 ||
            (x.clientX === 0 && x.clientY === 0) ||
            (!x.clientX && !x.touches)
          )
            (K = Math.round(W.width / 2)), (pe = Math.round(W.height / 2))
          else {
            const { clientX: vt, clientY: Me } =
              x.touches && x.touches.length > 0 ? x.touches[0] : x
            ;(K = Math.round(vt - W.left)), (pe = Math.round(Me - W.top))
          }
          if (O)
            (Oe = Math.sqrt((2 * W.width ** 2 + W.height ** 2) / 3)),
              Oe % 2 === 0 && (Oe += 1)
          else {
            const vt = Math.max(Math.abs((A ? A.clientWidth : 0) - K), K) * 2 + 2,
              Me = Math.max(Math.abs((A ? A.clientHeight : 0) - pe), pe) * 2 + 2
            Oe = Math.sqrt(vt ** 2 + Me ** 2)
          }
          x != null && x.touches
            ? g.current === null &&
              ((g.current = () => {
                k({ pulsate: C, rippleX: K, rippleY: pe, rippleSize: Oe, cb: E })
              }),
              y.start(hk, () => {
                g.current && (g.current(), (g.current = null))
              }))
            : k({ pulsate: C, rippleX: K, rippleY: pe, rippleSize: Oe, cb: E })
        },
        [i, k, y]
      ),
      d = w.useCallback(() => {
        m({}, { pulsate: !0 })
      }, [m]),
      h = w.useCallback(
        (x, b) => {
          if ((y.clear(), (x == null ? void 0 : x.type) === 'touchend' && g.current)) {
            g.current(),
              (g.current = null),
              y.start(0, () => {
                h(x, b)
              })
            return
          }
          ;(g.current = null), u(E => (E.length > 0 ? E.slice(1) : E)), (f.current = b)
        },
        [y]
      )
    return (
      w.useImperativeHandle(n, () => ({ pulsate: d, start: m, stop: h }), [d, m, h]),
      S.jsx(
        wk,
        $({ className: Ce(ot.root, o.root, a), ref: v }, l, {
          children: S.jsx(Tf, { component: null, exit: !0, children: s })
        })
      )
    )
  })
function Sk(e) {
  return Rn('MuiButtonBase', e)
}
const bk = $n('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  Ck = [
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
  Ek = e => {
    const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: i } = e,
      a = er({ root: ['root', t && 'disabled', n && 'focusVisible'] }, Sk, i)
    return n && r && (a.root += ` ${r}`), a
  },
  Pk = Lt('button', {
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
    [`&.${bk.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' }
  }),
  _k = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiButtonBase' }),
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
        onKeyDown: x,
        onKeyUp: b,
        onMouseDown: E,
        onMouseLeave: C,
        onMouseUp: O,
        onTouchEnd: j,
        onTouchMove: A,
        onTouchStart: W,
        tabIndex: K = 0,
        TouchRippleProps: pe,
        touchRippleRef: Oe,
        type: vt
      } = r,
      Me = je(r, Ck),
      zt = w.useRef(null),
      _ = w.useRef(null),
      M = Bp(_, Oe),
      { isFocusVisibleRef: I, onFocus: ne, onBlur: me, ref: tr } = R4(),
      [Ie, tn] = w.useState(!1)
    u && Ie && tn(!1),
      w.useImperativeHandle(
        i,
        () => ({
          focusVisible: () => {
            tn(!0), zt.current.focus()
          }
        }),
        []
      )
    const [gt, nr] = w.useState(!1)
    w.useEffect(() => {
      nr(!0)
    }, [])
    const Cv = gt && !c && !u
    w.useEffect(() => {
      Ie && p && !c && gt && _.current.pulsate()
    }, [c, p, Ie, gt])
    function Ft(L, Vf, Fv = f) {
      return Fo(Yf => (Vf && Vf(Yf), !Fv && _.current && _.current[L](Yf), !0))
    }
    const Ev = Ft('start', E),
      Pv = Ft('stop', k),
      _v = Ft('stop', m),
      Ov = Ft('stop', O),
      Tv = Ft('stop', L => {
        Ie && L.preventDefault(), C && C(L)
      }),
      Nv = Ft('start', W),
      Rv = Ft('stop', j),
      Av = Ft('stop', A),
      $v = Ft(
        'stop',
        L => {
          me(L), I.current === !1 && tn(!1), g && g(L)
        },
        !1
      ),
      jv = Fo(L => {
        zt.current || (zt.current = L.currentTarget),
          ne(L),
          I.current === !0 && (tn(!0), h && h(L)),
          d && d(L)
      }),
      Jl = () => {
        const L = zt.current
        return s && s !== 'button' && !(L.tagName === 'A' && L.href)
      },
      es = w.useRef(!1),
      Mv = Fo(L => {
        p &&
          !es.current &&
          Ie &&
          _.current &&
          L.key === ' ' &&
          ((es.current = !0),
          _.current.stop(L, () => {
            _.current.start(L)
          })),
          L.target === L.currentTarget && Jl() && L.key === ' ' && L.preventDefault(),
          x && x(L),
          L.target === L.currentTarget &&
            Jl() &&
            L.key === 'Enter' &&
            !u &&
            (L.preventDefault(), v && v(L))
      }),
      Iv = Fo(L => {
        p &&
          L.key === ' ' &&
          _.current &&
          Ie &&
          !L.defaultPrevented &&
          ((es.current = !1),
          _.current.stop(L, () => {
            _.current.pulsate(L)
          })),
          b && b(L),
          v &&
            L.target === L.currentTarget &&
            Jl() &&
            L.key === ' ' &&
            !L.defaultPrevented &&
            v(L)
      })
    let go = s
    go === 'button' && (Me.href || Me.to) && (go = y)
    const qr = {}
    go === 'button'
      ? ((qr.type = vt === void 0 ? 'button' : vt), (qr.disabled = u))
      : (!Me.href && !Me.to && (qr.role = 'button'), u && (qr['aria-disabled'] = u))
    const Lv = Bp(n, tr, zt),
      Hf = $({}, r, {
        centerRipple: o,
        component: s,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: p,
        tabIndex: K,
        focusVisible: Ie
      }),
      zv = Ek(Hf)
    return S.jsxs(
      Pk,
      $(
        {
          as: go,
          className: Ce(zv.root, l),
          ownerState: Hf,
          onBlur: $v,
          onClick: v,
          onContextMenu: Pv,
          onFocus: jv,
          onKeyDown: Mv,
          onKeyUp: Iv,
          onMouseDown: Ev,
          onMouseLeave: Tv,
          onMouseUp: Ov,
          onDragLeave: _v,
          onTouchEnd: Rv,
          onTouchMove: Av,
          onTouchStart: Nv,
          ref: Lv,
          tabIndex: u ? -1 : K,
          type: vt
        },
        qr,
        Me,
        { children: [a, Cv ? S.jsx(kk, $({ ref: M, center: o }, pe)) : null] }
      )
    )
  })
function Ok(e) {
  return Rn('MuiCardActionArea', e)
}
const js = $n('MuiCardActionArea', ['root', 'focusVisible', 'focusHighlight']),
  Tk = ['children', 'className', 'focusVisibleClassName'],
  Nk = e => {
    const { classes: t } = e
    return er({ root: ['root'], focusHighlight: ['focusHighlight'] }, Ok, t)
  },
  Rk = Lt(_k, {
    name: 'MuiCardActionArea',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(({ theme: e }) => ({
    display: 'block',
    textAlign: 'inherit',
    borderRadius: 'inherit',
    width: '100%',
    [`&:hover .${js.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.hoverOpacity,
      '@media (hover: none)': { opacity: 0 }
    },
    [`&.${js.focusVisible} .${js.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.focusOpacity
    }
  })),
  Ak = Lt('span', {
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
  $k = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiCardActionArea' }),
      { children: i, className: o, focusVisibleClassName: a } = r,
      l = je(r, Tk),
      s = r,
      u = Nk(s)
    return S.jsxs(
      Rk,
      $(
        {
          className: Ce(u.root, o),
          focusVisibleClassName: Ce(a, u.focusVisible),
          ref: n,
          ownerState: s
        },
        l,
        { children: [i, S.jsx(Ak, { className: u.focusHighlight, ownerState: s })] }
      )
    )
  })
function Ms({ title: e, description: t, imageUrl: n, url: r }) {
  return S.jsx(U4, {
    sx: { backgroundColor: 'transparent', color: 'white' },
    children: S.jsxs($k, {
      component: 'a',
      href: r,
      target: '_blank',
      rel: 'noopener noreferrer',
      children: [
        S.jsx(J4, { component: 'img', height: '140', image: n }),
        S.jsxs(Y4, {
          children: [
            S.jsx(Vp, { gutterBottom: !0, variant: 'h5', component: 'div', children: e }),
            S.jsx(Vp, { variant: 'body2', color: 'white', children: t })
          ]
        })
      ]
    })
  })
}
const jk = '../assets/firstproject-Fe1g7Z5x.jpeg',
  Mk = '../assets/secondproject-D-SZwtzC.jpeg',
  Ik = '../assets/finalproject-xn2OUdqU.jpeg',
  Lk = () =>
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
function qp(e, t) {
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
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? qp(Object(n), !0).forEach(function (r) {
          we(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Ha(e) {
  '@babel/helpers - typeof'
  return (
    (Ha =
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
    Ha(e)
  )
}
function zk(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Fk(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function Dk(e, t, n) {
  return (
    t && Fk(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
  )
}
function we(e, t, n) {
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
function Nf(e, t) {
  return Bk(e) || Hk(e, t) || G1(e, t) || Yk()
}
function mo(e) {
  return Uk(e) || Wk(e) || G1(e) || Vk()
}
function Uk(e) {
  if (Array.isArray(e)) return Ku(e)
}
function Bk(e) {
  if (Array.isArray(e)) return e
}
function Wk(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e)
}
function Hk(e, t) {
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
function G1(e, t) {
  if (e) {
    if (typeof e == 'string') return Ku(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ku(e, t)
  }
}
function Ku(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function Vk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Yk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Zp = function () {},
  Rf = {},
  Q1 = {},
  X1 = null,
  q1 = { mark: Zp, measure: Zp }
try {
  typeof window < 'u' && (Rf = window),
    typeof document < 'u' && (Q1 = document),
    typeof MutationObserver < 'u' && (X1 = MutationObserver),
    typeof performance < 'u' && (q1 = performance)
} catch {}
var Kk = Rf.navigator || {},
  Jp = Kk.userAgent,
  em = Jp === void 0 ? '' : Jp,
  Cn = Rf,
  J = Q1,
  tm = X1,
  Do = q1
Cn.document
var en =
    !!J.documentElement &&
    !!J.head &&
    typeof J.addEventListener == 'function' &&
    typeof J.createElement == 'function',
  Z1 = ~em.indexOf('MSIE') || ~em.indexOf('Trident/'),
  Uo,
  Bo,
  Wo,
  Ho,
  Vo,
  Xt = '___FONT_AWESOME___',
  Gu = 16,
  J1 = 'fa',
  ev = 'svg-inline--fa',
  Xn = 'data-fa-i2svg',
  Qu = 'data-fa-pseudo-element',
  Gk = 'data-fa-pseudo-element-pending',
  Af = 'data-prefix',
  $f = 'data-icon',
  nm = 'fontawesome-i2svg',
  Qk = 'async',
  Xk = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  tv = (function () {
    try {
      return !0
    } catch {
      return !1
    }
  })(),
  q = 'classic',
  ue = 'sharp',
  jf = [q, ue]
function ho(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[q]
    }
  })
}
var Xi = ho(
    ((Uo = {}),
    we(Uo, q, {
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
    we(Uo, ue, {
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
    Uo)
  ),
  qi = ho(
    ((Bo = {}),
    we(Bo, q, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak'
    }),
    we(Bo, ue, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    Bo)
  ),
  Zi = ho(
    ((Wo = {}),
    we(Wo, q, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin'
    }),
    we(Wo, ue, {
      fass: 'fa-solid',
      fasr: 'fa-regular',
      fasl: 'fa-light',
      fast: 'fa-thin'
    }),
    Wo)
  ),
  qk = ho(
    ((Ho = {}),
    we(Ho, q, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat'
    }),
    we(Ho, ue, {
      'fa-solid': 'fass',
      'fa-regular': 'fasr',
      'fa-light': 'fasl',
      'fa-thin': 'fast'
    }),
    Ho)
  ),
  Zk = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  nv = 'fa-layers-text',
  Jk =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  eS = ho(
    ((Vo = {}),
    we(Vo, q, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    we(Vo, ue, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    Vo)
  ),
  rv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  tS = rv.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  nS = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  Dn = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  },
  Ji = new Set()
Object.keys(qi[q]).map(Ji.add.bind(Ji))
Object.keys(qi[ue]).map(Ji.add.bind(Ji))
var rS = []
    .concat(jf, mo(Ji), [
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
      Dn.GROUP,
      Dn.SWAP_OPACITY,
      Dn.PRIMARY,
      Dn.SECONDARY
    ])
    .concat(
      rv.map(function (e) {
        return ''.concat(e, 'x')
      })
    )
    .concat(
      tS.map(function (e) {
        return 'w-'.concat(e)
      })
    ),
  Ci = Cn.FontAwesomeConfig || {}
function iS(e) {
  var t = J.querySelector('script[' + e + ']')
  if (t) return t.getAttribute(e)
}
function oS(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e
}
if (J && typeof J.querySelector == 'function') {
  var aS = [
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
  aS.forEach(function (e) {
    var t = Nf(e, 2),
      n = t[0],
      r = t[1],
      i = oS(iS(n))
    i != null && (Ci[r] = i)
  })
}
var iv = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: J1,
  replacementClass: ev,
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
Ci.familyPrefix && (Ci.cssPrefix = Ci.familyPrefix)
var Wr = T(T({}, iv), Ci)
Wr.autoReplaceSvg || (Wr.observeMutations = !1)
var R = {}
Object.keys(iv).forEach(function (e) {
  Object.defineProperty(R, e, {
    enumerable: !0,
    set: function (n) {
      ;(Wr[e] = n),
        Ei.forEach(function (r) {
          return r(R)
        })
    },
    get: function () {
      return Wr[e]
    }
  })
})
Object.defineProperty(R, 'familyPrefix', {
  enumerable: !0,
  set: function (t) {
    ;(Wr.cssPrefix = t),
      Ei.forEach(function (n) {
        return n(R)
      })
  },
  get: function () {
    return Wr.cssPrefix
  }
})
Cn.FontAwesomeConfig = R
var Ei = []
function lS(e) {
  return (
    Ei.push(e),
    function () {
      Ei.splice(Ei.indexOf(e), 1)
    }
  )
}
var rn = Gu,
  At = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 }
function sS(e) {
  if (!(!e || !en)) {
    var t = J.createElement('style')
    t.setAttribute('type', 'text/css'), (t.innerHTML = e)
    for (var n = J.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var o = n[i],
        a = (o.tagName || '').toUpperCase()
      ;['STYLE', 'LINK'].indexOf(a) > -1 && (r = o)
    }
    return J.head.insertBefore(t, r), e
  }
}
var uS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function eo() {
  for (var e = 12, t = ''; e-- > 0; ) t += uS[(Math.random() * 62) | 0]
  return t
}
function Xr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n]
  return t
}
function Mf(e) {
  return e.classList
    ? Xr(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t
      })
}
function ov(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
function cS(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(ov(e[n]), '" ')
    }, '')
    .trim()
}
function Ql(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';')
  }, '')
}
function If(e) {
  return (
    e.size !== At.size ||
    e.x !== At.x ||
    e.y !== At.y ||
    e.rotate !== At.rotate ||
    e.flipX ||
    e.flipY
  )
}
function fS(e) {
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
function dS(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Gu : n,
    i = e.height,
    o = i === void 0 ? Gu : i,
    a = e.startCentered,
    l = a === void 0 ? !1 : a,
    s = ''
  return (
    l && Z1
      ? (s += 'translate('
          .concat(t.x / rn - r / 2, 'em, ')
          .concat(t.y / rn - o / 2, 'em) '))
      : l
      ? (s += 'translate(calc(-50% + '
          .concat(t.x / rn, 'em), calc(-50% + ')
          .concat(t.y / rn, 'em)) '))
      : (s += 'translate('.concat(t.x / rn, 'em, ').concat(t.y / rn, 'em) ')),
    (s += 'scale('
      .concat((t.size / rn) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / rn) * (t.flipY ? -1 : 1), ') ')),
    (s += 'rotate('.concat(t.rotate, 'deg) ')),
    s
  )
}
var pS = `:root, :host {
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
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
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
function av() {
  var e = J1,
    t = ev,
    n = R.cssPrefix,
    r = R.replacementClass,
    i = pS
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
var rm = !1
function Is() {
  R.autoAddCss && !rm && (sS(av()), (rm = !0))
}
var mS = {
    mixout: function () {
      return { dom: { css: av, insertCss: Is } }
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Is()
        },
        beforeI2svg: function () {
          Is()
        }
      }
    }
  },
  qt = Cn || {}
qt[Xt] || (qt[Xt] = {})
qt[Xt].styles || (qt[Xt].styles = {})
qt[Xt].hooks || (qt[Xt].hooks = {})
qt[Xt].shims || (qt[Xt].shims = [])
var St = qt[Xt],
  lv = [],
  hS = function e() {
    J.removeEventListener('DOMContentLoaded', e),
      (Va = 1),
      lv.map(function (t) {
        return t()
      })
  },
  Va = !1
en &&
  ((Va = (J.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    J.readyState
  )),
  Va || J.addEventListener('DOMContentLoaded', hS))
function vS(e) {
  en && (Va ? setTimeout(e, 0) : lv.push(e))
}
function vo(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    o = i === void 0 ? [] : i
  return typeof e == 'string'
    ? ov(e)
    : '<'
        .concat(t, ' ')
        .concat(cS(r), '>')
        .concat(o.map(vo).join(''), '</')
        .concat(t, '>')
}
function im(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] }
}
var Ls = function (t, n, r, i) {
  var o = Object.keys(t),
    a = o.length,
    l = n,
    s,
    u,
    c
  for (r === void 0 ? ((s = 1), (c = t[o[0]])) : ((s = 0), (c = r)); s < a; s++)
    (u = o[s]), (c = l(c, t[u], u, t))
  return c
}
function gS(e) {
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
function Xu(e) {
  var t = gS(e)
  return t.length === 1 ? t[0].toString(16) : null
}
function yS(e, t) {
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
function om(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t
  }, {})
}
function qu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    o = om(t)
  typeof St.hooks.addPack == 'function' && !i
    ? St.hooks.addPack(e, om(t))
    : (St.styles[e] = T(T({}, St.styles[e] || {}), o)),
    e === 'fas' && qu('fa', t)
}
var Yo,
  Ko,
  Go,
  Sr = St.styles,
  wS = St.shims,
  xS =
    ((Yo = {}), we(Yo, q, Object.values(Zi[q])), we(Yo, ue, Object.values(Zi[ue])), Yo),
  Lf = null,
  sv = {},
  uv = {},
  cv = {},
  fv = {},
  dv = {},
  kS = ((Ko = {}), we(Ko, q, Object.keys(Xi[q])), we(Ko, ue, Object.keys(Xi[ue])), Ko)
function SS(e) {
  return ~rS.indexOf(e)
}
function bS(e, t) {
  var n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-')
  return r === e && i !== '' && !SS(i) ? i : null
}
var pv = function () {
  var t = function (o) {
    return Ls(
      Sr,
      function (a, l, s) {
        return (a[s] = Ls(l, o, {})), a
      },
      {}
    )
  }
  ;(sv = t(function (i, o, a) {
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
    (uv = t(function (i, o, a) {
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
    (dv = t(function (i, o, a) {
      var l = o[2]
      return (
        (i[a] = a),
        l.forEach(function (s) {
          i[s] = a
        }),
        i
      )
    }))
  var n = 'far' in Sr || R.autoFetchSvg,
    r = Ls(
      wS,
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
  ;(cv = r.names),
    (fv = r.unicodes),
    (Lf = Xl(R.styleDefault, { family: R.familyDefault }))
}
lS(function (e) {
  Lf = Xl(e.styleDefault, { family: R.familyDefault })
})
pv()
function zf(e, t) {
  return (sv[e] || {})[t]
}
function CS(e, t) {
  return (uv[e] || {})[t]
}
function Un(e, t) {
  return (dv[e] || {})[t]
}
function mv(e) {
  return cv[e] || { prefix: null, iconName: null }
}
function ES(e) {
  var t = fv[e],
    n = zf('fas', e)
  return (
    t || (n ? { prefix: 'fas', iconName: n } : null) || { prefix: null, iconName: null }
  )
}
function En() {
  return Lf
}
var Ff = function () {
  return { prefix: null, iconName: null, rest: [] }
}
function Xl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? q : n,
    i = Xi[r][e],
    o = qi[r][e] || qi[r][i],
    a = e in St.styles ? e : null
  return o || a || null
}
var am = ((Go = {}), we(Go, q, Object.keys(Zi[q])), we(Go, ue, Object.keys(Zi[ue])), Go)
function ql(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    o =
      ((t = {}),
      we(t, q, ''.concat(R.cssPrefix, '-').concat(q)),
      we(t, ue, ''.concat(R.cssPrefix, '-').concat(ue)),
      t),
    a = null,
    l = q
  ;(e.includes(o[q]) ||
    e.some(function (u) {
      return am[q].includes(u)
    })) &&
    (l = q),
    (e.includes(o[ue]) ||
      e.some(function (u) {
        return am[ue].includes(u)
      })) &&
      (l = ue)
  var s = e.reduce(function (u, c) {
    var f = bS(R.cssPrefix, c)
    if (
      (Sr[c]
        ? ((c = xS[l].includes(c) ? qk[l][c] : c), (a = c), (u.prefix = c))
        : kS[l].indexOf(c) > -1
        ? ((a = c), (u.prefix = Xl(c, { family: l })))
        : f
        ? (u.iconName = f)
        : c !== R.replacementClass && c !== o[q] && c !== o[ue] && u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var p = a === 'fa' ? mv(u.iconName) : {},
        y = Un(u.prefix, u.iconName)
      p.prefix && (a = null),
        (u.iconName = p.iconName || y || u.iconName),
        (u.prefix = p.prefix || u.prefix),
        u.prefix === 'far' && !Sr.far && Sr.fas && !R.autoFetchSvg && (u.prefix = 'fas')
    }
    return u
  }, Ff())
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (s.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (s.prefix = 'fad'),
    !s.prefix &&
      l === ue &&
      (Sr.fass || R.autoFetchSvg) &&
      ((s.prefix = 'fass'), (s.iconName = Un(s.prefix, s.iconName) || s.iconName)),
    (s.prefix === 'fa' || a === 'fa') && (s.prefix = En() || 'fas'),
    s
  )
}
var PS = (function () {
    function e() {
      zk(this, e), (this.definitions = {})
    }
    return (
      Dk(e, [
        {
          key: 'add',
          value: function () {
            for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o]
            var a = i.reduce(this._pullDefinitions, {})
            Object.keys(a).forEach(function (l) {
              ;(n.definitions[l] = T(T({}, n.definitions[l] || {}), a[l])), qu(l, a[l])
              var s = Zi[q][l]
              s && qu(s, a[l]), pv()
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
  lm = [],
  br = {},
  jr = {},
  _S = Object.keys(jr)
function OS(e, t) {
  var n = t.mixoutsTo
  return (
    (lm = e),
    (br = {}),
    Object.keys(jr).forEach(function (r) {
      _S.indexOf(r) === -1 && delete jr[r]
    }),
    lm.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {}
      if (
        (Object.keys(i).forEach(function (a) {
          typeof i[a] == 'function' && (n[a] = i[a]),
            Ha(i[a]) === 'object' &&
              Object.keys(i[a]).forEach(function (l) {
                n[a] || (n[a] = {}), (n[a][l] = i[a][l])
              })
        }),
        r.hooks)
      ) {
        var o = r.hooks()
        Object.keys(o).forEach(function (a) {
          br[a] || (br[a] = []), br[a].push(o[a])
        })
      }
      r.provides && r.provides(jr)
    }),
    n
  )
}
function Zu(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i]
  var o = br[e] || []
  return (
    o.forEach(function (a) {
      t = a.apply(null, [t].concat(r))
    }),
    t
  )
}
function qn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r]
  var i = br[e] || []
  i.forEach(function (o) {
    o.apply(null, n)
  })
}
function Zt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1)
  return jr[e] ? jr[e].apply(null, t) : void 0
}
function Ju(e) {
  e.prefix === 'fa' && (e.prefix = 'fas')
  var t = e.iconName,
    n = e.prefix || En()
  if (t) return (t = Un(n, t) || t), im(hv.definitions, n, t) || im(St.styles, n, t)
}
var hv = new PS(),
  TS = function () {
    ;(R.autoReplaceSvg = !1), (R.observeMutations = !1), qn('noAuto')
  },
  NS = {
    i2svg: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      return en
        ? (qn('beforeI2svg', t), Zt('pseudoElements2svg', t), Zt('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.')
    },
    watch: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot
      R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0),
        (R.observeMutations = !0),
        vS(function () {
          AS({ autoReplaceSvgRoot: n }), qn('watch', t)
        })
    }
  },
  RS = {
    icon: function (t) {
      if (t === null) return null
      if (Ha(t) === 'object' && t.prefix && t.iconName)
        return { prefix: t.prefix, iconName: Un(t.prefix, t.iconName) || t.iconName }
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = Xl(t[0])
        return { prefix: r, iconName: Un(r, n) || n }
      }
      if (
        typeof t == 'string' &&
        (t.indexOf(''.concat(R.cssPrefix, '-')) > -1 || t.match(Zk))
      ) {
        var i = ql(t.split(' '), { skipLookups: !0 })
        return {
          prefix: i.prefix || En(),
          iconName: Un(i.prefix, i.iconName) || i.iconName
        }
      }
      if (typeof t == 'string') {
        var o = En()
        return { prefix: o, iconName: Un(o, t) || t }
      }
    }
  },
  rt = {
    noAuto: TS,
    config: R,
    dom: NS,
    parse: RS,
    library: hv,
    findIconDefinition: Ju,
    toHtml: vo
  },
  AS = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? J : n
    ;(Object.keys(St.styles).length > 0 || R.autoFetchSvg) &&
      en &&
      R.autoReplaceSvg &&
      rt.dom.i2svg({ node: r })
  }
function Zl(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return vo(r)
        })
      }
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (en) {
          var r = J.createElement('div')
          return (r.innerHTML = e.html), r.children
        }
      }
    }),
    e
  )
}
function $S(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    o = e.styles,
    a = e.transform
  if (If(a) && n.found && !r.found) {
    var l = n.width,
      s = n.height,
      u = { x: l / s / 2, y: 0.5 }
    i.style = Ql(
      T(
        T({}, o),
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
function jS(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    o = e.symbol,
    a = o === !0 ? ''.concat(t, '-').concat(R.cssPrefix, '-').concat(n) : o
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: T(T({}, i), {}, { id: a }), children: r }]
    }
  ]
}
function Df(e) {
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
    d = [R.replacementClass, o ? ''.concat(R.cssPrefix, '-').concat(o) : '']
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
      attributes: T(
        T({}, f.attributes),
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
    x =
      m && !~f.classes.indexOf('fa-fw')
        ? { width: ''.concat((v / k) * 16 * 0.0625, 'em') }
        : {}
  y && (h.attributes[Xn] = ''),
    s &&
      (h.children.push({
        tag: 'title',
        attributes: { id: h.attributes['aria-labelledby'] || 'title-'.concat(c || eo()) },
        children: [s]
      }),
      delete h.attributes.title)
  var b = T(
      T({}, h),
      {},
      {
        prefix: i,
        iconName: o,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: l,
        styles: T(T({}, x), f.styles)
      }
    ),
    E =
      r.found && n.found
        ? Zt('generateAbstractMask', b) || { children: [], attributes: {} }
        : Zt('generateAbstractIcon', b) || { children: [], attributes: {} },
    C = E.children,
    O = E.attributes
  return (b.children = C), (b.attributes = O), l ? jS(b) : $S(b)
}
function sm(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    o = e.title,
    a = e.extra,
    l = e.watchable,
    s = l === void 0 ? !1 : l,
    u = T(
      T(T({}, a.attributes), o ? { title: o } : {}),
      {},
      { class: a.classes.join(' ') }
    )
  s && (u[Xn] = '')
  var c = T({}, a.styles)
  If(i) &&
    ((c.transform = dS({ transform: i, startCentered: !0, width: n, height: r })),
    (c['-webkit-transform'] = c.transform))
  var f = Ql(c)
  f.length > 0 && (u.style = f)
  var p = []
  return (
    p.push({ tag: 'span', attributes: u, children: [t] }),
    o && p.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
    p
  )
}
function MS(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = T(
      T(T({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(' ') }
    ),
    o = Ql(r.styles)
  o.length > 0 && (i.style = o)
  var a = []
  return (
    a.push({ tag: 'span', attributes: i, children: [t] }),
    n && a.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    a
  )
}
var zs = St.styles
function ec(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = Nf(r, 1),
    o = i[0],
    a = null
  return (
    Array.isArray(o)
      ? (a = {
          tag: 'g',
          attributes: { class: ''.concat(R.cssPrefix, '-').concat(Dn.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(R.cssPrefix, '-').concat(Dn.SECONDARY),
                fill: 'currentColor',
                d: o[0]
              }
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(R.cssPrefix, '-').concat(Dn.PRIMARY),
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
var IS = { found: !1, width: 512, height: 512 }
function LS(e, t) {
  !tv &&
    !R.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    )
}
function tc(e, t) {
  var n = t
  return (
    t === 'fa' && R.styleDefault !== null && (t = En()),
    new Promise(function (r, i) {
      if ((Zt('missingIconAbstract'), n === 'fa')) {
        var o = mv(e) || {}
        ;(e = o.iconName || e), (t = o.prefix || t)
      }
      if (e && t && zs[t] && zs[t][e]) {
        var a = zs[t][e]
        return r(ec(a))
      }
      LS(e, t),
        r(
          T(
            T({}, IS),
            {},
            { icon: R.showMissingIcons && e ? Zt('missingIconAbstract') || {} : {} }
          )
        )
    })
  )
}
var um = function () {},
  nc =
    R.measurePerformance && Do && Do.mark && Do.measure ? Do : { mark: um, measure: um },
  di = 'FA "6.5.2"',
  zS = function (t) {
    return (
      nc.mark(''.concat(di, ' ').concat(t, ' begins')),
      function () {
        return vv(t)
      }
    )
  },
  vv = function (t) {
    nc.mark(''.concat(di, ' ').concat(t, ' ends')),
      nc.measure(
        ''.concat(di, ' ').concat(t),
        ''.concat(di, ' ').concat(t, ' begins'),
        ''.concat(di, ' ').concat(t, ' ends')
      )
  },
  Uf = { begin: zS, end: vv },
  da = function () {}
function cm(e) {
  var t = e.getAttribute ? e.getAttribute(Xn) : null
  return typeof t == 'string'
}
function FS(e) {
  var t = e.getAttribute ? e.getAttribute(Af) : null,
    n = e.getAttribute ? e.getAttribute($f) : null
  return t && n
}
function DS(e) {
  return (
    e && e.classList && e.classList.contains && e.classList.contains(R.replacementClass)
  )
}
function US() {
  if (R.autoReplaceSvg === !0) return pa.replace
  var e = pa[R.autoReplaceSvg]
  return e || pa.replace
}
function BS(e) {
  return J.createElementNS('http://www.w3.org/2000/svg', e)
}
function WS(e) {
  return J.createElement(e)
}
function gv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? BS : WS) : n
  if (typeof e == 'string') return J.createTextNode(e)
  var i = r(e.tag)
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a])
  })
  var o = e.children || []
  return (
    o.forEach(function (a) {
      i.appendChild(gv(a, { ceFn: r }))
    }),
    i
  )
}
function HS(e) {
  var t = ' '.concat(e.outerHTML, ' ')
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t
}
var pa = {
  replace: function (t) {
    var n = t[0]
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(gv(i), n)
        }),
        n.getAttribute(Xn) === null && R.keepOriginalSource)
      ) {
        var r = J.createComment(HS(n))
        n.parentNode.replaceChild(r, n)
      } else n.remove()
  },
  nest: function (t) {
    var n = t[0],
      r = t[1]
    if (~Mf(n).indexOf(R.replacementClass)) return pa.replace(t)
    var i = new RegExp(''.concat(R.cssPrefix, '-.*'))
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var o = r[0].attributes.class.split(' ').reduce(
        function (l, s) {
          return (
            s === R.replacementClass || s.match(i) ? l.toSvg.push(s) : l.toNode.push(s), l
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
      return vo(l)
    }).join(`
`)
    n.setAttribute(Xn, ''), (n.innerHTML = a)
  }
}
function fm(e) {
  e()
}
function yv(e, t) {
  var n = typeof t == 'function' ? t : da
  if (e.length === 0) n()
  else {
    var r = fm
    R.mutateApproach === Qk && (r = Cn.requestAnimationFrame || fm),
      r(function () {
        var i = US(),
          o = Uf.begin('mutate')
        e.map(i), o(), n()
      })
  }
}
var Bf = !1
function wv() {
  Bf = !0
}
function rc() {
  Bf = !1
}
var Ya = null
function dm(e) {
  if (tm && R.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? da : t,
      r = e.nodeCallback,
      i = r === void 0 ? da : r,
      o = e.pseudoElementsCallback,
      a = o === void 0 ? da : o,
      l = e.observeMutationsRoot,
      s = l === void 0 ? J : l
    ;(Ya = new tm(function (u) {
      if (!Bf) {
        var c = En()
        Xr(u).forEach(function (f) {
          if (
            (f.type === 'childList' &&
              f.addedNodes.length > 0 &&
              !cm(f.addedNodes[0]) &&
              (R.searchPseudoElements && a(f.target), n(f.target)),
            f.type === 'attributes' &&
              f.target.parentNode &&
              R.searchPseudoElements &&
              a(f.target.parentNode),
            f.type === 'attributes' && cm(f.target) && ~nS.indexOf(f.attributeName))
          )
            if (f.attributeName === 'class' && FS(f.target)) {
              var p = ql(Mf(f.target)),
                y = p.prefix,
                g = p.iconName
              f.target.setAttribute(Af, y || c), g && f.target.setAttribute($f, g)
            } else DS(f.target) && i(f.target)
        })
      }
    })),
      en &&
        Ya.observe(s, { childList: !0, attributes: !0, characterData: !0, subtree: !0 })
  }
}
function VS() {
  Ya && Ya.disconnect()
}
function YS(e) {
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
function KS(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = ql(Mf(e))
  return (
    i.prefix || (i.prefix = En()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName = CS(i.prefix, e.innerText) || zf(i.prefix, Xu(e.innerText))),
      !i.iconName &&
        R.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  )
}
function GS(e) {
  var t = Xr(e.attributes).reduce(function (i, o) {
      return i.name !== 'class' && i.name !== 'style' && (i[o.name] = o.value), i
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id')
  return (
    R.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(R.replacementClass, '-title-')
            .concat(r || eo()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  )
}
function QS() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: At,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} }
  }
}
function pm(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = KS(e),
    r = n.iconName,
    i = n.prefix,
    o = n.rest,
    a = GS(e),
    l = Zu('parseNodeAttributes', {}, e),
    s = t.styleParser ? YS(e) : []
  return T(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: At,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: s, attributes: a }
    },
    l
  )
}
var XS = St.styles
function xv(e) {
  var t = R.autoReplaceSvg === 'nest' ? pm(e, { styleParser: !1 }) : pm(e)
  return ~t.extra.classes.indexOf(nv)
    ? Zt('generateLayersText', e, t)
    : Zt('generateSvgReplacementMutation', e, t)
}
var Pn = new Set()
jf.map(function (e) {
  Pn.add('fa-'.concat(e))
})
Object.keys(Xi[q]).map(Pn.add.bind(Pn))
Object.keys(Xi[ue]).map(Pn.add.bind(Pn))
Pn = mo(Pn)
function mm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  if (!en) return Promise.resolve()
  var n = J.documentElement.classList,
    r = function (f) {
      return n.add(''.concat(nm, '-').concat(f))
    },
    i = function (f) {
      return n.remove(''.concat(nm, '-').concat(f))
    },
    o = R.autoFetchSvg
      ? Pn
      : jf
          .map(function (c) {
            return 'fa-'.concat(c)
          })
          .concat(Object.keys(XS))
  o.includes('fa') || o.push('fa')
  var a = ['.'.concat(nv, ':not([').concat(Xn, '])')]
    .concat(
      o.map(function (c) {
        return '.'.concat(c, ':not([').concat(Xn, '])')
      })
    )
    .join(', ')
  if (a.length === 0) return Promise.resolve()
  var l = []
  try {
    l = Xr(e.querySelectorAll(a))
  } catch {}
  if (l.length > 0) r('pending'), i('complete')
  else return Promise.resolve()
  var s = Uf.begin('onTree'),
    u = l.reduce(function (c, f) {
      try {
        var p = xv(f)
        p && c.push(p)
      } catch (y) {
        tv || (y.name === 'MissingIcon' && console.error(y))
      }
      return c
    }, [])
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (p) {
        yv(p, function () {
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
function qS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  xv(e).then(function (n) {
    n && yv([n], t)
  })
}
function ZS(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : Ju(t || {}),
      i = n.mask
    return i && (i = (i || {}).icon ? i : Ju(i || {})), e(r, T(T({}, n), {}, { mask: i }))
  }
}
var JS = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? At : r,
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
      x = h === void 0 ? {} : h
    if (t) {
      var b = t.prefix,
        E = t.iconName,
        C = t.icon
      return Zl(T({ type: 'icon' }, t), function () {
        return (
          qn('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          R.autoA11y &&
            (p
              ? (d['aria-labelledby'] = ''
                  .concat(R.replacementClass, '-title-')
                  .concat(g || eo()))
              : ((d['aria-hidden'] = 'true'), (d.focusable = 'false'))),
          Df({
            icons: {
              main: ec(C),
              mask: s ? ec(s.icon) : { found: !1, width: null, height: null, icon: {} }
            },
            prefix: b,
            iconName: E,
            transform: T(T({}, At), i),
            symbol: a,
            title: p,
            maskId: c,
            titleId: g,
            extra: { attributes: d, styles: x, classes: k }
          })
        )
      })
    }
  },
  eb = {
    mixout: function () {
      return { icon: ZS(JS) }
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = mm), (n.nodeCallback = qS), n
        }
      }
    },
    provides: function (t) {
      ;(t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? J : r,
          o = n.callback,
          a = o === void 0 ? function () {} : o
        return mm(i, a)
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
              tc(i, l),
              c.iconName
                ? tc(c.iconName, c.prefix)
                : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} })
            ])
              .then(function (v) {
                var k = Nf(v, 2),
                  m = k[0],
                  d = k[1]
                y([
                  n,
                  Df({
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
            s = Ql(l)
          s.length > 0 && (i.style = s)
          var u
          return (
            If(a) &&
              (u = Zt('generateAbstractTransformGrouping', {
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
  tb = {
    mixout: function () {
      return {
        layer: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.classes,
            o = i === void 0 ? [] : i
          return Zl({ type: 'layer' }, function () {
            qn('beforeDOMElementCreation', { assembler: n, params: r })
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
                    class: [''.concat(R.cssPrefix, '-layers')].concat(mo(o)).join(' ')
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
  nb = {
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
          return Zl({ type: 'counter', content: n }, function () {
            return (
              qn('beforeDOMElementCreation', { content: n, params: r }),
              MS({
                content: n.toString(),
                title: o,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: [''.concat(R.cssPrefix, '-layers-counter')].concat(mo(l))
                }
              })
            )
          })
        }
      }
    }
  },
  rb = {
    mixout: function () {
      return {
        text: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.transform,
            o = i === void 0 ? At : i,
            a = r.title,
            l = a === void 0 ? null : a,
            s = r.classes,
            u = s === void 0 ? [] : s,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            p = r.styles,
            y = p === void 0 ? {} : p
          return Zl({ type: 'text', content: n }, function () {
            return (
              qn('beforeDOMElementCreation', { content: n, params: r }),
              sm({
                content: n,
                transform: T(T({}, At), o),
                title: l,
                extra: {
                  attributes: f,
                  styles: y,
                  classes: [''.concat(R.cssPrefix, '-layers-text')].concat(mo(u))
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
        if (Z1) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect()
          ;(l = c.width / u), (s = c.height / u)
        }
        return (
          R.autoA11y && !i && (a.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            n,
            sm({
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
  ib = new RegExp('"', 'ug'),
  hm = [1105920, 1112319]
function ob(e) {
  var t = e.replace(ib, ''),
    n = yS(t, 0),
    r = n >= hm[0] && n <= hm[1],
    i = t.length === 2 ? t[0] === t[1] : !1
  return { value: Xu(i ? t[0] : t), isSecondary: r || i }
}
function vm(e, t) {
  var n = ''.concat(Gk).concat(t.replace(':', '-'))
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r()
    var o = Xr(e.children),
      a = o.filter(function (C) {
        return C.getAttribute(Qu) === t
      })[0],
      l = Cn.getComputedStyle(e, t),
      s = l.getPropertyValue('font-family').match(Jk),
      u = l.getPropertyValue('font-weight'),
      c = l.getPropertyValue('content')
    if (a && !s) return e.removeChild(a), r()
    if (s && c !== 'none' && c !== '') {
      var f = l.getPropertyValue('content'),
        p = ~['Sharp'].indexOf(s[2]) ? ue : q,
        y = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(
          s[2]
        )
          ? qi[p][s[2].toLowerCase()]
          : eS[p][u],
        g = ob(f),
        v = g.value,
        k = g.isSecondary,
        m = s[0].startsWith('FontAwesome'),
        d = zf(y, v),
        h = d
      if (m) {
        var x = ES(v)
        x.iconName && x.prefix && ((d = x.iconName), (y = x.prefix))
      }
      if (d && !k && (!a || a.getAttribute(Af) !== y || a.getAttribute($f) !== h)) {
        e.setAttribute(n, h), a && e.removeChild(a)
        var b = QS(),
          E = b.extra
        ;(E.attributes[Qu] = t),
          tc(d, y)
            .then(function (C) {
              var O = Df(
                  T(
                    T({}, b),
                    {},
                    {
                      icons: { main: C, mask: Ff() },
                      prefix: y,
                      iconName: h,
                      extra: E,
                      watchable: !0
                    }
                  )
                ),
                j = J.createElementNS('http://www.w3.org/2000/svg', 'svg')
              t === '::before' ? e.insertBefore(j, e.firstChild) : e.appendChild(j),
                (j.outerHTML = O.map(function (A) {
                  return vo(A)
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
function ab(e) {
  return Promise.all([vm(e, '::before'), vm(e, '::after')])
}
function lb(e) {
  return (
    e.parentNode !== document.head &&
    !~Xk.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Qu) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  )
}
function gm(e) {
  if (en)
    return new Promise(function (t, n) {
      var r = Xr(e.querySelectorAll('*')).filter(lb).map(ab),
        i = Uf.begin('searchPseudoElements')
      wv(),
        Promise.all(r)
          .then(function () {
            i(), rc(), t()
          })
          .catch(function () {
            i(), rc(), n()
          })
    })
}
var sb = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = gm), n
        }
      }
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? J : r
        R.searchPseudoElements && gm(i)
      }
    }
  },
  ym = !1,
  ub = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            wv(), (ym = !0)
          }
        }
      }
    },
    hooks: function () {
      return {
        bootstrap: function () {
          dm(Zu('mutationObserverCallbacks', {}))
        },
        noAuto: function () {
          VS()
        },
        watch: function (n) {
          var r = n.observeMutationsRoot
          ym ? rc() : dm(Zu('mutationObserverCallbacks', { observeMutationsRoot: r }))
        }
      }
    }
  },
  wm = function (t) {
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
  cb = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return wm(n)
          }
        }
      }
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-transform')
          return i && (n.transform = wm(i)), n
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
          attributes: T({}, y.outer),
          children: [
            {
              tag: 'g',
              attributes: T({}, y.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: T(T({}, r.icon.attributes), y.path)
                }
              ]
            }
          ]
        }
      }
    }
  },
  Fs = { x: 0, y: 0, width: '100%', height: '100%' }
function xm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
}
function fb(e) {
  return e.tag === 'g' ? e.children : [e]
}
var db = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-mask'),
            o = i
              ? ql(
                  i.split(' ').map(function (a) {
                    return a.trim()
                  })
                )
              : Ff()
          return (
            o.prefix || (o.prefix = En()),
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
          y = fS({ transform: s, containerWidth: f, iconWidth: u }),
          g = { tag: 'rect', attributes: T(T({}, Fs), {}, { fill: 'white' }) },
          v = c.children ? { children: c.children.map(xm) } : {},
          k = {
            tag: 'g',
            attributes: T({}, y.inner),
            children: [
              xm(T({ tag: c.tag, attributes: T(T({}, c.attributes), y.path) }, v))
            ]
          },
          m = { tag: 'g', attributes: T({}, y.outer), children: [k] },
          d = 'mask-'.concat(l || eo()),
          h = 'clip-'.concat(l || eo()),
          x = {
            tag: 'mask',
            attributes: T(
              T({}, Fs),
              {},
              { id: d, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }
            ),
            children: [g, m]
          },
          b = {
            tag: 'defs',
            children: [{ tag: 'clipPath', attributes: { id: h }, children: fb(p) }, x]
          }
        return (
          r.push(b, {
            tag: 'rect',
            attributes: T(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(h, ')'),
                mask: 'url(#'.concat(d, ')')
              },
              Fs
            )
          }),
          { children: r, attributes: i }
        )
      }
    }
  },
  pb = {
    provides: function (t) {
      var n = !1
      Cn.matchMedia && (n = Cn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: 'currentColor' },
            o = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' }
          r.push({
            tag: 'path',
            attributes: T(
              T({}, i),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
              }
            )
          })
          var a = T(T({}, o), {}, { attributeName: 'opacity' }),
            l = {
              tag: 'circle',
              attributes: T(T({}, i), {}, { cx: '256', cy: '364', r: '28' }),
              children: []
            }
          return (
            n ||
              l.children.push(
                {
                  tag: 'animate',
                  attributes: T(
                    T({}, o),
                    {},
                    { attributeName: 'r', values: '28;14;28;28;14;28;' }
                  )
                },
                {
                  tag: 'animate',
                  attributes: T(T({}, a), {}, { values: '1;0;1;1;0;1;' })
                }
              ),
            r.push(l),
            r.push({
              tag: 'path',
              attributes: T(
                T({}, i),
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
                      attributes: T(T({}, a), {}, { values: '1;0;0;0;0;1;' })
                    }
                  ]
            }),
            n ||
              r.push({
                tag: 'path',
                attributes: T(
                  T({}, i),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
                  }
                ),
                children: [
                  {
                    tag: 'animate',
                    attributes: T(T({}, a), {}, { values: '0;0;1;1;0;0;' })
                  }
                ]
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: r }
          )
        })
    }
  },
  mb = {
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
  hb = [mS, eb, tb, nb, rb, sb, ub, cb, db, pb, mb]
OS(hb, { mixoutsTo: rt })
rt.noAuto
rt.config
rt.library
rt.dom
var ic = rt.parse
rt.findIconDefinition
rt.toHtml
var vb = rt.icon
rt.layer
rt.text
rt.counter
function km(e, t) {
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
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? km(Object(n), !0).forEach(function (r) {
          Cr(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : km(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Ka(e) {
  '@babel/helpers - typeof'
  return (
    (Ka =
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
    Ka(e)
  )
}
function Cr(e, t, n) {
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
function gb(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    o
  for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function yb(e, t) {
  if (e == null) return {}
  var n = gb(e, t),
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
function oc(e) {
  return wb(e) || xb(e) || kb(e) || Sb()
}
function wb(e) {
  if (Array.isArray(e)) return ac(e)
}
function xb(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e)
}
function kb(e, t) {
  if (e) {
    if (typeof e == 'string') return ac(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ac(e, t)
  }
}
function ac(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function Sb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function bb(e) {
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
    x =
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
      Cr(t, 'fa-'.concat(m), typeof m < 'u' && m !== null),
      Cr(t, 'fa-rotate-'.concat(d), typeof d < 'u' && d !== null && d !== 0),
      Cr(t, 'fa-pull-'.concat(h), typeof h < 'u' && h !== null),
      Cr(t, 'fa-swap-opacity', e.swapOpacity),
      t)
  return Object.keys(x)
    .map(function (b) {
      return x[b] ? b : null
    })
    .filter(function (b) {
      return b
    })
}
function Cb(e) {
  return (e = e - 0), e === e
}
function kv(e) {
  return Cb(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : ''
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1))
}
var Eb = ['style']
function Pb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function _b(e) {
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
        i = kv(n.slice(0, r)),
        o = n.slice(r + 1).trim()
      return i.startsWith('webkit') ? (t[Pb(i)] = o) : (t[i] = o), t
    }, {})
}
function Sv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  if (typeof t == 'string') return t
  var r = (t.children || []).map(function (s) {
      return Sv(e, s)
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var c = t.attributes[u]
        switch (u) {
          case 'class':
            ;(s.attrs.className = c), delete t.attributes.class
            break
          case 'style':
            s.attrs.style = _b(c)
            break
          default:
            u.indexOf('aria-') === 0 || u.indexOf('data-') === 0
              ? (s.attrs[u.toLowerCase()] = c)
              : (s.attrs[kv(u)] = c)
        }
        return s
      },
      { attrs: {} }
    ),
    o = n.style,
    a = o === void 0 ? {} : o,
    l = yb(n, Eb)
  return (
    (i.attrs.style = Nt(Nt({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, Nt(Nt({}, i.attrs), l)].concat(oc(r)))
  )
}
var bv = !1
try {
  bv = !0
} catch {}
function Ob() {
  if (!bv && console && typeof console.error == 'function') {
    var e
    ;(e = console).error.apply(e, arguments)
  }
}
function Sm(e) {
  if (e && Ka(e) === 'object' && e.prefix && e.iconName && e.icon) return e
  if (ic.icon) return ic.icon(e)
  if (e === null) return null
  if (e && Ka(e) === 'object' && e.prefix && e.iconName) return e
  if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] }
  if (typeof e == 'string') return { prefix: 'fas', iconName: e }
}
function Ds(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Cr({}, e, t)
    : {}
}
var bm = {
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
  },
  Wf = Q.forwardRef(function (e, t) {
    var n = Nt(Nt({}, bm), e),
      r = n.icon,
      i = n.mask,
      o = n.symbol,
      a = n.className,
      l = n.title,
      s = n.titleId,
      u = n.maskId,
      c = Sm(r),
      f = Ds('classes', [].concat(oc(bb(n)), oc(a.split(' ')))),
      p = Ds(
        'transform',
        typeof n.transform == 'string' ? ic.transform(n.transform) : n.transform
      ),
      y = Ds('mask', Sm(i)),
      g = vb(
        c,
        Nt(Nt(Nt(Nt({}, f), p), y), {}, { symbol: o, title: l, titleId: s, maskId: u })
      )
    if (!g) return Ob('Could not find icon', c), null
    var v = g.abstract,
      k = { ref: t }
    return (
      Object.keys(n).forEach(function (m) {
        bm.hasOwnProperty(m) || (k[m] = n[m])
      }),
      Tb(v[0], k)
    )
  })
Wf.displayName = 'FontAwesomeIcon'
Wf.propTypes = {
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
var Tb = Sv.bind(null, Q.createElement)
function Nb(e) {
  return cl({
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
var Rb = {
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
  Ab = {
    prefix: 'fab',
    iconName: 'angular',
    icon: [
      448,
      512,
      [],
      'f420',
      'M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z'
    ]
  },
  $b = {
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
  jb = {
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
  Mb = {
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
  Ib = {
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
const Lb = () => {
  const e = [jb, Rb, Mb, $b, Ab, Ib, S.jsx(Nb, {})],
    t = r =>
      r.iconName
        ? S.jsx(Wf, { icon: r, style: { fontSize: '100px' } })
        : Q.cloneElement(r, { style: { fontSize: '100px' } }),
    n = []
  for (let r = 0; r < 100; r++) n.push(...e.map(t))
  return S.jsx('div', {
    className: 'slider-container',
    children: S.jsx('div', { className: 'slider', children: n })
  })
}
function zb(e) {
  return cl({
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
function Fb() {
  return (
    w.useEffect(() => {
      const e = () => {
        const t = window.scrollY,
          n = window.innerHeight,
          r = document.documentElement.scrollHeight,
          i = t / (r - n),
          o = { r: 0, g: 0, b: 0 },
          a = { r: 0, g: 0, b: 0 },
          l = {
            r: Math.round(o.r + (a.r - o.r) * i),
            g: Math.round(o.g + (a.g - o.g) * i),
            b: Math.round(o.b + (a.b - o.b) * i)
          }
        document.body.style.backgroundColor = `rgb(${l.r}, ${l.g}, ${l.b})`
      }
      return (
        window.addEventListener('scroll', e),
        () => window.removeEventListener('scroll', e)
      )
    }, []),
    S.jsxs('div', {
      className: 'HomePage',
      children: [
        S.jsx('div', {
          className: 'grid grid-cols-1 gap-2 allDescription',
          children: S.jsxs('div', {
            className: 'allText',
            children: [
              S.jsx('div', {
                className: 'carlosText',
                children: S.jsx(Lw, {
                  text: 'Carlos Rodríguez',
                  typingDelay: 200,
                  repeatDelay: 5e3,
                  className: 'nameHome text-lg md:text-xl'
                })
              }),
              S.jsxs('p', {
                className: 'descriptionCarlos text-base md:text-lg',
                children: [
                  'Enthusiastic and positive, with a solid technical foundation in web development and programming, including key technologies such as',
                  ' ',
                  S.jsx('span', { className: 'languages', children: 'HTML5' }),
                  ',',
                  ' ',
                  S.jsx('span', { className: 'languages', children: 'CSS3' }),
                  ', and',
                  ' ',
                  S.jsx('span', { className: 'languages', children: 'JavaScript' }),
                  '. Passionate about continuous learning, I also possess skills in',
                  ' ',
                  S.jsx('span', { className: 'languages', children: 'JavaScript ' }),
                  'frameworks like ',
                  S.jsx('span', { className: 'languages', children: 'React ' }),
                  'and',
                  ' ',
                  S.jsx('span', { className: 'languages', children: 'Angular' }),
                  ', as well as back-end development with ',
                  S.jsx('span', { className: 'languages', children: 'Node.js ' }),
                  'and ',
                  S.jsx('span', { className: 'languages', children: 'MongoDB' }),
                  '. Outside of technology, I enjoy the cultural enrichment and well-being that sports and outdoor activities provide, such as mountaineering, tennis, and football.'
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
            S.jsx(Lb, {})
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
            S.jsx(Ms, {
              title: 'Ironhack DOM Project',
              description:
                "This was my first project manipulating the DOM (If you have a high frame rate (FPS) while gaming, it's advisable to lower it for optimal performance.)",
              imageUrl: jk,
              url: 'https://carlosrodmor.github.io/octopus-game/'
            }),
            S.jsx(Ms, {
              title: 'Ironhack Back-end Project',
              description:
                'This was my second project using Node.js, Express.js and AXIOS and also adding some extra front-end development.',
              imageUrl: Mk,
              url: 'https://movies-project2.fly.dev/'
            }),
            S.jsx(Ms, {
              title: 'Ironhack Final Project',
              description:
                'This is the MOST IMPORTANT project I have worked on so far, alongside two colleagues, using the MERN stack.',
              imageUrl: Ik,
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
            S.jsx(Lk, {})
          ]
        }),
        S.jsxs('div', {
          className: 'socialIcons',
          id: 'contact-section',
          children: [
            S.jsx('a', {
              href: 'https://www.github.com/carlosrodmor',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-300 hover:text-white mx-10',
              children: S.jsx(H0, { size: 72 })
            }),
            S.jsx('a', {
              href: 'https://www.linkedin.com/in/carlos-rodr%C3%ADguez-morales/',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-300 hover:text-white mx-10',
              children: S.jsx(V0, { size: 72 })
            }),
            S.jsx('a', {
              href: 'mailto:carlos97sdg@gmail.com',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { display: 'inline-block' },
              className: 'text-gray-300 hover:text-white mx-10',
              children: S.jsx(zb, { size: 72, style: { cursor: 'pointer' } })
            })
          ]
        })
      ]
    })
  )
}
const Db = () =>
    S.jsxs(Aw, {
      children: [
        S.jsx(Lu, { path: '/', element: S.jsx(Fb, {}) }),
        S.jsx(Lu, { path: '/proyectos', element: S.jsx(Iw, {}) })
      ]
    }),
  Ub = () =>
    S.jsx('div', {
      className: 'container',
      children: S.jsx('div', {
        className: 'footerText',
        children: '© 2024 Carlos Rodríguez'
      })
    })
function Bb() {
  return S.jsx(Mw, {
    children: S.jsxs('div', {
      className: 'App',
      children: [S.jsx(X2, {}), S.jsx(Db, {}), S.jsx(Ub, {})]
    })
  })
}
Us.createRoot(document.getElementById('root')).render(
  S.jsx(Q.StrictMode, { children: S.jsx(Bb, {}) })
)
