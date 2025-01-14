function Fv(e, t) {
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
function bm(e) {
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
var Cm = { exports: {} },
  Qa = {},
  Em = { exports: {} },
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
  Dv = Symbol.for('react.portal'),
  Uv = Symbol.for('react.fragment'),
  Bv = Symbol.for('react.strict_mode'),
  Wv = Symbol.for('react.profiler'),
  Vv = Symbol.for('react.provider'),
  Hv = Symbol.for('react.context'),
  Yv = Symbol.for('react.forward_ref'),
  Kv = Symbol.for('react.suspense'),
  Gv = Symbol.for('react.memo'),
  Qv = Symbol.for('react.lazy'),
  Kf = Symbol.iterator
function Xv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Kf && e[Kf]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Pm = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  _m = Object.assign,
  Om = {}
function Vr(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Om), (this.updater = n || Pm)
}
Vr.prototype.isReactComponent = {}
Vr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Vr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Tm() {}
Tm.prototype = Vr.prototype
function sc(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Om), (this.updater = n || Pm)
}
var uc = (sc.prototype = new Tm())
uc.constructor = sc
_m(uc, Vr.prototype)
uc.isPureReactComponent = !0
var Gf = Array.isArray,
  Nm = Object.prototype.hasOwnProperty,
  cc = { current: null },
  Rm = { key: !0, ref: !0, __self: !0, __source: !0 }
function Am(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = '' + t.key), t))
      Nm.call(t, r) && !Rm.hasOwnProperty(r) && (i[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2]
    i.children = s
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
  return { $$typeof: to, type: e, key: o, ref: a, props: i, _owner: cc.current }
}
function qv(e, t) {
  return {
    $$typeof: to,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function fc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === to
}
function Zv(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Qf = /\/+/g
function ns(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Zv('' + e.key)
    : t.toString(36)
}
function Xo(e, t, n, r, i) {
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
          case Dv:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + ns(a, 0) : r),
      Gf(i)
        ? ((n = ''),
          e != null && (n = e.replace(Qf, '$&/') + '/'),
          Xo(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (fc(i) &&
            (i = qv(
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
      var s = r + ns(o, l)
      a += Xo(o, t, n, s, i)
    }
  else if (((s = Xv(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + ns(o, l++)), (a += Xo(o, t, n, s, i))
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
function wo(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Xo(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function Jv(e) {
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
  qo = { transition: null },
  eg = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: qo, ReactCurrentOwner: cc }
function $m() {
  throw Error('act(...) is not supported in production builds of React.')
}
F.Children = {
  map: wo,
  forEach: function (e, t, n) {
    wo(
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
      wo(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      wo(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!fc(e))
      throw Error('React.Children.only expected to receive a single React element child.')
    return e
  }
}
F.Component = Vr
F.Fragment = Uv
F.Profiler = Wv
F.PureComponent = sc
F.StrictMode = Bv
F.Suspense = Kv
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg
F.act = $m
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = _m({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = cc.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (s in t)
      Nm.call(t, s) &&
        !Rm.hasOwnProperty(s) &&
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
      $$typeof: Hv,
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
F.createElement = Am
F.createFactory = function (e) {
  var t = Am.bind(null, e)
  return (t.type = e), t
}
F.createRef = function () {
  return { current: null }
}
F.forwardRef = function (e) {
  return { $$typeof: Yv, render: e }
}
F.isValidElement = fc
F.lazy = function (e) {
  return { $$typeof: Qv, _payload: { _status: -1, _result: e }, _init: Jv }
}
F.memo = function (e, t) {
  return { $$typeof: Gv, type: e, compare: t === void 0 ? null : t }
}
F.startTransition = function (e) {
  var t = qo.transition
  qo.transition = {}
  try {
    e()
  } finally {
    qo.transition = t
  }
}
F.unstable_act = $m
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
Em.exports = F
var w = Em.exports
const Q = bm(w),
  Pi = Fv({ __proto__: null, default: Q }, [w])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tg = w,
  ng = Symbol.for('react.element'),
  rg = Symbol.for('react.fragment'),
  ig = Object.prototype.hasOwnProperty,
  og = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ag = { key: !0, ref: !0, __self: !0, __source: !0 }
function jm(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) ig.call(t, r) && !ag.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: ng, type: e, key: o, ref: a, props: i, _owner: og.current }
}
Qa.Fragment = rg
Qa.jsx = jm
Qa.jsxs = jm
Cm.exports = Qa
var S = Cm.exports,
  Bs = {},
  Mm = { exports: {} },
  et = {},
  Im = { exports: {} },
  Lm = {}
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
          en = _[Ie],
          gt = Ie + 1,
          nr = _[gt]
        if (0 > i(en, I))
          gt < me && 0 > i(nr, en)
            ? ((_[ne] = nr), (_[gt] = I), (ne = gt))
            : ((_[ne] = en), (_[Ie] = I), (ne = Ie))
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
    g = !1,
    y = !1,
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
    if (((v = !1), h(_), !y))
      if (n(s) !== null) (y = !0), Me(b)
      else {
        var M = n(u)
        M !== null && Lt(x, M.startTime - _)
      }
  }
  function b(_, M) {
    ;(y = !1), v && ((v = !1), m(O), (O = -1)), (g = !0)
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
        Ie !== null && Lt(x, Ie.startTime - M), (tr = !1)
      }
      return tr
    } finally {
      ;(f = null), (p = I), (g = !1)
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
  function Lt(_, M) {
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
      y || g || ((y = !0), Me(b))
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
              (v ? (m(O), (O = -1)) : (v = !0), Lt(x, I - ne)))
          : ((_.sortIndex = me), t(s, _), y || g || ((y = !0), Me(b))),
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
})(Lm)
Im.exports = Lm
var lg = Im.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sg = w,
  Je = lg
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
var zm = new Set(),
  _i = {}
function Zn(e, t) {
  Mr(e, t), Mr(e + 'Capture', t)
}
function Mr(e, t) {
  for (_i[e] = t, e = 0; e < t.length; e++) zm.add(t[e])
}
var Vt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ws = Object.prototype.hasOwnProperty,
  ug =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xf = {},
  qf = {}
function cg(e) {
  return Ws.call(qf, e)
    ? !0
    : Ws.call(Xf, e)
    ? !1
    : ug.test(e)
    ? (qf[e] = !0)
    : ((Xf[e] = !0), !1)
}
function fg(e, t, n, r) {
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
function dg(e, t, n, r) {
  if (t === null || typeof t > 'u' || fg(e, t, n, r)) return !0
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
var dc = /[\-:]([a-z])/g
function pc(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(dc, pc)
    _e[t] = new De(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(dc, pc)
    _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(dc, pc)
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
function mc(e, t, n, r) {
  var i = _e.hasOwnProperty(t) ? _e[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (dg(t, n, i, r) && (n = null),
    r || i === null
      ? cg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Zt = sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xo = Symbol.for('react.element'),
  cr = Symbol.for('react.portal'),
  fr = Symbol.for('react.fragment'),
  hc = Symbol.for('react.strict_mode'),
  Vs = Symbol.for('react.profiler'),
  Fm = Symbol.for('react.provider'),
  Dm = Symbol.for('react.context'),
  vc = Symbol.for('react.forward_ref'),
  Hs = Symbol.for('react.suspense'),
  Ys = Symbol.for('react.suspense_list'),
  gc = Symbol.for('react.memo'),
  rn = Symbol.for('react.lazy'),
  Um = Symbol.for('react.offscreen'),
  Zf = Symbol.iterator
function Zr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Zf && e[Zf]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var oe = Object.assign,
  rs
function si(e) {
  if (rs === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      rs = (t && t[1]) || ''
    }
  return (
    `
` +
    rs +
    e
  )
}
var is = !1
function os(e, t) {
  if (!e || is) return ''
  is = !0
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
    ;(is = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? si(e) : ''
}
function pg(e) {
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
      return (e = os(e.type, !1)), e
    case 11:
      return (e = os(e.type.render, !1)), e
    case 1:
      return (e = os(e.type, !0)), e
    default:
      return ''
  }
}
function Ks(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case fr:
      return 'Fragment'
    case cr:
      return 'Portal'
    case Vs:
      return 'Profiler'
    case hc:
      return 'StrictMode'
    case Hs:
      return 'Suspense'
    case Ys:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Dm:
        return (e.displayName || 'Context') + '.Consumer'
      case Fm:
        return (e._context.displayName || 'Context') + '.Provider'
      case vc:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case gc:
        return (t = e.displayName || null), t !== null ? t : Ks(e.type) || 'Memo'
      case rn:
        ;(t = e._payload), (e = e._init)
        try {
          return Ks(e(t))
        } catch {}
    }
  return null
}
function mg(e) {
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
      return Ks(t)
    case 8:
      return t === hc ? 'StrictMode' : 'Mode'
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
function Bm(e) {
  var t = e.type
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  )
}
function hg(e) {
  var t = Bm(e) ? 'checked' : 'value',
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
function ko(e) {
  e._valueTracker || (e._valueTracker = hg(e))
}
function Wm(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Bm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function ha(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Gs(e, t) {
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
  ;(t = t.checked), t != null && mc(e, 'checked', t, !1)
}
function Qs(e, t) {
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
    ? Xs(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Xs(e, t.type, Sn(t.defaultValue)),
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
function Xs(e, t, n) {
  ;(t !== 'number' || ha(e.ownerDocument) !== e) &&
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
function qs(e, t) {
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
function Hm(e, t) {
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
function Ym(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Zs(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ym(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var So,
  Km = (function (e) {
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
        So = So || document.createElement('div'),
          So.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = So.firstChild;
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
  vg = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(pi).forEach(function (e) {
  vg.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pi[t] = pi[e])
  })
})
function Gm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (pi.hasOwnProperty(e) && pi[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Qm(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Gm(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var gg = oe(
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
function Js(e, t) {
  if (t) {
    if (gg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function eu(e, t) {
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
var tu = null
function yc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var nu = null,
  Pr = null,
  _r = null
function rd(e) {
  if ((e = io(e))) {
    if (typeof nu != 'function') throw Error(P(280))
    var t = e.stateNode
    t && ((t = el(t)), nu(e.stateNode, e.type, t))
  }
}
function Xm(e) {
  Pr ? (_r ? _r.push(e) : (_r = [e])) : (Pr = e)
}
function qm() {
  if (Pr) {
    var e = Pr,
      t = _r
    if (((_r = Pr = null), rd(e), t)) for (e = 0; e < t.length; e++) rd(t[e])
  }
}
function Zm(e, t) {
  return e(t)
}
function Jm() {}
var as = !1
function eh(e, t, n) {
  if (as) return e(t, n)
  as = !0
  try {
    return Zm(e, t, n)
  } finally {
    ;(as = !1), (Pr !== null || _r !== null) && (Jm(), qm())
  }
}
function Ti(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = el(n)
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
var ru = !1
if (Vt)
  try {
    var Jr = {}
    Object.defineProperty(Jr, 'passive', {
      get: function () {
        ru = !0
      }
    }),
      window.addEventListener('test', Jr, Jr),
      window.removeEventListener('test', Jr, Jr)
  } catch {
    ru = !1
  }
function yg(e, t, n, r, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var mi = !1,
  va = null,
  ga = !1,
  iu = null,
  wg = {
    onError: function (e) {
      ;(mi = !0), (va = e)
    }
  }
function xg(e, t, n, r, i, o, a, l, s) {
  ;(mi = !1), (va = null), yg.apply(wg, arguments)
}
function kg(e, t, n, r, i, o, a, l, s) {
  if ((xg.apply(this, arguments), mi)) {
    if (mi) {
      var u = va
      ;(mi = !1), (va = null)
    } else throw Error(P(198))
    ga || ((ga = !0), (iu = u))
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
function th(e) {
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
function Sg(e) {
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
function nh(e) {
  return (e = Sg(e)), e !== null ? rh(e) : null
}
function rh(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = rh(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var ih = Je.unstable_scheduleCallback,
  od = Je.unstable_cancelCallback,
  bg = Je.unstable_shouldYield,
  Cg = Je.unstable_requestPaint,
  ce = Je.unstable_now,
  Eg = Je.unstable_getCurrentPriorityLevel,
  wc = Je.unstable_ImmediatePriority,
  oh = Je.unstable_UserBlockingPriority,
  ya = Je.unstable_NormalPriority,
  Pg = Je.unstable_LowPriority,
  ah = Je.unstable_IdlePriority,
  Xa = null,
  At = null
function _g(e) {
  if (At && typeof At.onCommitFiberRoot == 'function')
    try {
      At.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var bt = Math.clz32 ? Math.clz32 : Ng,
  Og = Math.log,
  Tg = Math.LN2
function Ng(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Og(e) / Tg) | 0)) | 0
}
var bo = 64,
  Co = 4194304
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
function wa(e, t) {
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
function Rg(e, t) {
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
function Ag(e, t) {
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
    s === -1 ? (!(l & n) || l & r) && (i[a] = Rg(l, t)) : s <= t && (e.expiredLanes |= l),
      (o &= ~l)
  }
}
function ou(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function lh() {
  var e = bo
  return (bo <<= 1), !(bo & 4194240) && (bo = 64), e
}
function ls(e) {
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
function $g(e, t) {
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
function xc(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - bt(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var V = 0
function sh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var uh,
  kc,
  ch,
  fh,
  dh,
  au = !1,
  Eo = [],
  pn = null,
  mn = null,
  hn = null,
  Ni = new Map(),
  Ri = new Map(),
  an = [],
  jg =
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
      t !== null && ((t = io(t)), t !== null && kc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function Mg(e, t, n, r, i) {
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
function ph(e) {
  var t = In(e.target)
  if (t !== null) {
    var n = Jn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = th(n)), t !== null)) {
          ;(e.blockedOn = t),
            dh(e.priority, function () {
              ch(n)
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
function Zo(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = lu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(tu = r), n.target.dispatchEvent(r), (tu = null)
    } else return (t = io(n)), t !== null && kc(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function ld(e, t, n) {
  Zo(e) && n.delete(t)
}
function Ig() {
  ;(au = !1),
    pn !== null && Zo(pn) && (pn = null),
    mn !== null && Zo(mn) && (mn = null),
    hn !== null && Zo(hn) && (hn = null),
    Ni.forEach(ld),
    Ri.forEach(ld)
}
function ti(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    au || ((au = !0), Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Ig)))
}
function Ai(e) {
  function t(i) {
    return ti(i, e)
  }
  if (0 < Eo.length) {
    ti(Eo[0], e)
    for (var n = 1; n < Eo.length; n++) {
      var r = Eo[n]
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
    n < an.length;
    n++
  )
    (r = an[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < an.length && ((n = an[0]), n.blockedOn === null); )
    ph(n), n.blockedOn === null && an.shift()
}
var Or = Zt.ReactCurrentBatchConfig,
  xa = !0
function Lg(e, t, n, r) {
  var i = V,
    o = Or.transition
  Or.transition = null
  try {
    ;(V = 1), Sc(e, t, n, r)
  } finally {
    ;(V = i), (Or.transition = o)
  }
}
function zg(e, t, n, r) {
  var i = V,
    o = Or.transition
  Or.transition = null
  try {
    ;(V = 4), Sc(e, t, n, r)
  } finally {
    ;(V = i), (Or.transition = o)
  }
}
function Sc(e, t, n, r) {
  if (xa) {
    var i = lu(e, t, n, r)
    if (i === null) gs(e, t, r, ka, n), ad(e, r)
    else if (Mg(i, e, t, n, r)) r.stopPropagation()
    else if ((ad(e, r), t & 4 && -1 < jg.indexOf(e))) {
      for (; i !== null; ) {
        var o = io(i)
        if (
          (o !== null && uh(o),
          (o = lu(e, t, n, r)),
          o === null && gs(e, t, r, ka, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else gs(e, t, r, null, n)
  }
}
var ka = null
function lu(e, t, n, r) {
  if (((ka = null), (e = yc(r)), (e = In(e)), e !== null))
    if (((t = Jn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = th(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (ka = e), null
}
function mh(e) {
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
      switch (Eg()) {
        case wc:
          return 1
        case oh:
          return 4
        case ya:
        case Pg:
          return 16
        case ah:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var un = null,
  bc = null,
  Jo = null
function hh() {
  if (Jo) return Jo
  var e,
    t = bc,
    n = t.length,
    r,
    i = 'value' in un ? un.value : un.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Jo = i.slice(e, 1 < r ? 1 - r : void 0))
}
function ea(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Po() {
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
        ? Po
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
          (this.isDefaultPrevented = Po))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Po))
      },
      persist: function () {},
      isPersistent: Po
    }),
    t
  )
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Cc = tt(Hr),
  ro = oe({}, Hr, { view: 0, detail: 0 }),
  Fg = tt(ro),
  ss,
  us,
  ni,
  qa = oe({}, ro, {
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
    getModifierState: Ec,
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
              ? ((ss = e.screenX - ni.screenX), (us = e.screenY - ni.screenY))
              : (us = ss = 0),
            (ni = e)),
          ss)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : us
    }
  }),
  ud = tt(qa),
  Dg = oe({}, qa, { dataTransfer: 0 }),
  Ug = tt(Dg),
  Bg = oe({}, ro, { relatedTarget: 0 }),
  cs = tt(Bg),
  Wg = oe({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vg = tt(Wg),
  Hg = oe({}, Hr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  Yg = tt(Hg),
  Kg = oe({}, Hr, { data: 0 }),
  cd = tt(Kg),
  Gg = {
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
  Qg = {
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
  Xg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function qg(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Xg[e]) ? !!t[e] : !1
}
function Ec() {
  return qg
}
var Zg = oe({}, ro, {
    key: function (e) {
      if (e.key) {
        var t = Gg[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ea(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Qg[e.keyCode] || 'Unidentified'
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
    getModifierState: Ec,
    charCode: function (e) {
      return e.type === 'keypress' ? ea(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ea(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  Jg = tt(Zg),
  ey = oe({}, qa, {
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
  fd = tt(ey),
  ty = oe({}, ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ec
  }),
  ny = tt(ty),
  ry = oe({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iy = tt(ry),
  oy = oe({}, qa, {
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
  ay = tt(oy),
  ly = [9, 13, 27, 32],
  Pc = Vt && 'CompositionEvent' in window,
  hi = null
Vt && 'documentMode' in document && (hi = document.documentMode)
var sy = Vt && 'TextEvent' in window && !hi,
  vh = Vt && (!Pc || (hi && 8 < hi && 11 >= hi)),
  dd = ' ',
  pd = !1
function gh(e, t) {
  switch (e) {
    case 'keyup':
      return ly.indexOf(t.keyCode) !== -1
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
function yh(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var dr = !1
function uy(e, t) {
  switch (e) {
    case 'compositionend':
      return yh(t)
    case 'keypress':
      return t.which !== 32 ? null : ((pd = !0), dd)
    case 'textInput':
      return (e = t.data), e === dd && pd ? null : e
    default:
      return null
  }
}
function cy(e, t) {
  if (dr)
    return e === 'compositionend' || (!Pc && gh(e, t))
      ? ((e = hh()), (Jo = bc = un = null), (dr = !1), e)
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
      return vh && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var fy = {
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
  return t === 'input' ? !!fy[e.type] : t === 'textarea'
}
function wh(e, t, n, r) {
  Xm(r),
    (t = Sa(t, 'onChange')),
    0 < t.length &&
      ((n = new Cc('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var vi = null,
  $i = null
function dy(e) {
  Nh(e, 0)
}
function Za(e) {
  var t = hr(e)
  if (Wm(t)) return e
}
function py(e, t) {
  if (e === 'change') return t
}
var xh = !1
if (Vt) {
  var fs
  if (Vt) {
    var ds = 'oninput' in document
    if (!ds) {
      var hd = document.createElement('div')
      hd.setAttribute('oninput', 'return;'), (ds = typeof hd.oninput == 'function')
    }
    fs = ds
  } else fs = !1
  xh = fs && (!document.documentMode || 9 < document.documentMode)
}
function vd() {
  vi && (vi.detachEvent('onpropertychange', kh), ($i = vi = null))
}
function kh(e) {
  if (e.propertyName === 'value' && Za($i)) {
    var t = []
    wh(t, $i, e, yc(e)), eh(dy, t)
  }
}
function my(e, t, n) {
  e === 'focusin'
    ? (vd(), (vi = t), ($i = n), vi.attachEvent('onpropertychange', kh))
    : e === 'focusout' && vd()
}
function hy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Za($i)
}
function vy(e, t) {
  if (e === 'click') return Za(t)
}
function gy(e, t) {
  if (e === 'input' || e === 'change') return Za(t)
}
function yy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Et = typeof Object.is == 'function' ? Object.is : yy
function ji(e, t) {
  if (Et(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Ws.call(t, i) || !Et(e[i], t[i])) return !1
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
function Sh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sh(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function bh() {
  for (var e = window, t = ha(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = ha(e.document)
  }
  return t
}
function _c(e) {
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
function wy(e) {
  var t = bh(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && Sh(n.ownerDocument.documentElement, n)) {
    if (r !== null && _c(n)) {
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
var xy = Vt && 'documentMode' in document && 11 >= document.documentMode,
  pr = null,
  su = null,
  gi = null,
  uu = !1
function wd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  uu ||
    pr == null ||
    pr !== ha(r) ||
    ((r = pr),
    'selectionStart' in r && _c(r)
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
      (r = Sa(su, 'onSelect')),
      0 < r.length &&
        ((t = new Cc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pr))))
}
function _o(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var mr = {
    animationend: _o('Animation', 'AnimationEnd'),
    animationiteration: _o('Animation', 'AnimationIteration'),
    animationstart: _o('Animation', 'AnimationStart'),
    transitionend: _o('Transition', 'TransitionEnd')
  },
  ps = {},
  Ch = {}
Vt &&
  ((Ch = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete mr.animationend.animation,
    delete mr.animationiteration.animation,
    delete mr.animationstart.animation),
  'TransitionEvent' in window || delete mr.transitionend.transition)
function Ja(e) {
  if (ps[e]) return ps[e]
  if (!mr[e]) return e
  var t = mr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Ch) return (ps[e] = t[n])
  return e
}
var Eh = Ja('animationend'),
  Ph = Ja('animationiteration'),
  _h = Ja('animationstart'),
  Oh = Ja('transitionend'),
  Th = new Map(),
  xd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function On(e, t) {
  Th.set(e, t), Zn(t, [e])
}
for (var ms = 0; ms < xd.length; ms++) {
  var hs = xd[ms],
    ky = hs.toLowerCase(),
    Sy = hs[0].toUpperCase() + hs.slice(1)
  On(ky, 'on' + Sy)
}
On(Eh, 'onAnimationEnd')
On(Ph, 'onAnimationIteration')
On(_h, 'onAnimationStart')
On('dblclick', 'onDoubleClick')
On('focusin', 'onFocus')
On('focusout', 'onBlur')
On(Oh, 'onTransitionEnd')
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
  by = new Set('cancel close invalid load scroll toggle'.split(' ').concat(fi))
function kd(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), kg(r, t, void 0, e), (e.currentTarget = null)
}
function Nh(e, t) {
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
  if (ga) throw ((e = iu), (ga = !1), (iu = null), e)
}
function X(e, t) {
  var n = t[mu]
  n === void 0 && (n = t[mu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Rh(t, e, 2, !1), n.add(r))
}
function vs(e, t, n) {
  var r = 0
  t && (r |= 4), Rh(n, e, r, t)
}
var Oo = '_reactListening' + Math.random().toString(36).slice(2)
function Mi(e) {
  if (!e[Oo]) {
    ;(e[Oo] = !0),
      zm.forEach(function (n) {
        n !== 'selectionchange' && (by.has(n) || vs(n, !1, e), vs(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Oo] || ((t[Oo] = !0), vs('selectionchange', !1, t))
  }
}
function Rh(e, t, n, r) {
  switch (mh(t)) {
    case 1:
      var i = Lg
      break
    case 4:
      i = zg
      break
    default:
      i = Sc
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !ru || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function gs(e, t, n, r, i) {
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
  eh(function () {
    var u = o,
      c = yc(n),
      f = []
    e: {
      var p = Th.get(e)
      if (p !== void 0) {
        var g = Cc,
          y = e
        switch (e) {
          case 'keypress':
            if (ea(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = Jg
            break
          case 'focusin':
            ;(y = 'focus'), (g = cs)
            break
          case 'focusout':
            ;(y = 'blur'), (g = cs)
            break
          case 'beforeblur':
          case 'afterblur':
            g = cs
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
            g = ud
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Ug
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = ny
            break
          case Eh:
          case Ph:
          case _h:
            g = Vg
            break
          case Oh:
            g = iy
            break
          case 'scroll':
            g = Fg
            break
          case 'wheel':
            g = ay
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = Yg
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = fd
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
          ((p = new g(p, y, null, n, c)), f.push({ event: p, listeners: v }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          p && n !== tu && (y = n.relatedTarget || n.fromElement) && (In(y) || y[Ht]))
        )
          break e
        if (
          (g || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? In(y) : null),
              y !== null &&
                ((k = Jn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = ud),
            (x = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = fd), (x = 'onPointerLeave'), (m = 'onPointerEnter'), (d = 'pointer')),
            (k = g == null ? p : hr(g)),
            (h = y == null ? p : hr(y)),
            (p = new v(x, d + 'leave', g, n, c)),
            (p.target = k),
            (p.relatedTarget = h),
            (x = null),
            In(c) === u &&
              ((v = new v(m, d + 'enter', y, n, c)),
              (v.target = h),
              (v.relatedTarget = k),
              (x = v)),
            (k = x),
            g && y)
          )
            t: {
              for (v = g, m = y, d = 0, h = v; h; h = rr(h)) d++
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
          g !== null && Sd(f, p, g, v, !1), y !== null && k !== null && Sd(f, k, y, v, !0)
        }
      }
      e: {
        if (
          ((p = u ? hr(u) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && p.type === 'file'))
        )
          var b = py
        else if (md(p))
          if (xh) b = gy
          else {
            b = hy
            var E = my
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (b = vy)
        if (b && (b = b(e, u))) {
          wh(f, b, n, c)
          break e
        }
        E && E(e, p, u),
          e === 'focusout' &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === 'number' &&
            Xs(p, 'number', p.value)
      }
      switch (((E = u ? hr(u) : window), e)) {
        case 'focusin':
          ;(md(E) || E.contentEditable === 'true') && ((pr = E), (su = u), (gi = null))
          break
        case 'focusout':
          gi = su = pr = null
          break
        case 'mousedown':
          uu = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(uu = !1), wd(f, n, c)
          break
        case 'selectionchange':
          if (xy) break
        case 'keydown':
        case 'keyup':
          wd(f, n, c)
      }
      var C
      if (Pc)
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
          ? gh(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart')
      O &&
        (vh &&
          n.locale !== 'ko' &&
          (dr || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && dr && (C = hh())
            : ((un = c), (bc = 'value' in un ? un.value : un.textContent), (dr = !0))),
        (E = Sa(u, O)),
        0 < E.length &&
          ((O = new cd(O, e, null, n, c)),
          f.push({ event: O, listeners: E }),
          C ? (O.data = C) : ((C = yh(n)), C !== null && (O.data = C)))),
        (C = sy ? uy(e, n) : cy(e, n)) &&
          ((u = Sa(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new cd('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)))
    }
    Nh(f, t)
  })
}
function Ii(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Sa(e, t) {
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
var Cy = /\r\n?/g,
  Ey = /\u0000|\uFFFD/g
function bd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Cy,
      `
`
    )
    .replace(Ey, '')
}
function To(e, t, n) {
  if (((t = bd(t)), bd(e) !== t && n)) throw Error(P(425))
}
function ba() {}
var cu = null,
  fu = null
function du(e, t) {
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
var pu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Py = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Cd = typeof Promise == 'function' ? Promise : void 0,
  _y =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Cd < 'u'
      ? function (e) {
          return Cd.resolve(null).then(e).catch(Oy)
        }
      : pu
function Oy(e) {
  setTimeout(function () {
    throw e
  })
}
function ys(e, t) {
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
  Nt = '__reactFiber$' + Yr,
  Li = '__reactProps$' + Yr,
  Ht = '__reactContainer$' + Yr,
  mu = '__reactEvents$' + Yr,
  Ty = '__reactListeners$' + Yr,
  Ny = '__reactHandles$' + Yr
function In(e) {
  var t = e[Nt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Nt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Ed(e); e !== null; ) {
          if ((n = e[Nt])) return n
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
    (e = e[Nt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function hr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(P(33))
}
function el(e) {
  return e[Li] || null
}
var hu = [],
  vr = -1
function Tn(e) {
  return { current: e }
}
function Z(e) {
  0 > vr || ((e.current = hu[vr]), (hu[vr] = null), vr--)
}
function G(e, t) {
  vr++, (hu[vr] = e.current), (e.current = t)
}
var bn = {},
  $e = Tn(bn),
  We = Tn(!1),
  Hn = bn
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
function Ve(e) {
  return (e = e.childContextTypes), e != null
}
function Ca() {
  Z(We), Z($e)
}
function Pd(e, t, n) {
  if ($e.current !== bn) throw Error(P(168))
  G($e, t), G(We, n)
}
function Ah(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(P(108, mg(e) || 'Unknown', i))
  return oe({}, n, r)
}
function Ea(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bn),
    (Hn = $e.current),
    G($e, e),
    G(We, We.current),
    !0
  )
}
function _d(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(P(169))
  n
    ? ((e = Ah(e, t, Hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(We),
      Z($e),
      G($e, e))
    : Z(We),
    G(We, n)
}
var Dt = null,
  tl = !1,
  ws = !1
function $h(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e)
}
function Ry(e) {
  ;(tl = !0), $h(e)
}
function Nn() {
  if (!ws && Dt !== null) {
    ws = !0
    var e = 0,
      t = V
    try {
      var n = Dt
      for (V = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Dt = null), (tl = !1)
    } catch (i) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), ih(wc, Nn), i)
    } finally {
      ;(V = t), (ws = !1)
    }
  }
  return null
}
var gr = [],
  yr = 0,
  Pa = null,
  _a = 0,
  at = [],
  lt = 0,
  Yn = null,
  Ut = 1,
  Bt = ''
function jn(e, t) {
  ;(gr[yr++] = _a), (gr[yr++] = Pa), (Pa = e), (_a = t)
}
function jh(e, t, n) {
  ;(at[lt++] = Ut), (at[lt++] = Bt), (at[lt++] = Yn), (Yn = e)
  var r = Ut
  e = Bt
  var i = 32 - bt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - bt(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Ut = (1 << (32 - bt(t) + i)) | (n << i) | r),
      (Bt = o + e)
  } else (Ut = (1 << o) | (n << i) | r), (Bt = e)
}
function Oc(e) {
  e.return !== null && (jn(e, 1), jh(e, 1, 0))
}
function Tc(e) {
  for (; e === Pa; ) (Pa = gr[--yr]), (gr[yr] = null), (_a = gr[--yr]), (gr[yr] = null)
  for (; e === Yn; )
    (Yn = at[--lt]),
      (at[lt] = null),
      (Bt = at[--lt]),
      (at[lt] = null),
      (Ut = at[--lt]),
      (at[lt] = null)
}
var qe = null,
  Xe = null,
  te = !1,
  kt = null
function Mh(e, t) {
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
          ? ((n = Yn !== null ? { id: Ut, overflow: Bt } : null),
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
function vu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function gu(e) {
  if (te) {
    var t = Xe
    if (t) {
      var n = t
      if (!Od(e, t)) {
        if (vu(e)) throw Error(P(418))
        t = vn(n.nextSibling)
        var r = qe
        t && Od(e, t)
          ? Mh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (qe = e))
      }
    } else {
      if (vu(e)) throw Error(P(418))
      ;(e.flags = (e.flags & -4097) | 2), (te = !1), (qe = e)
    }
  }
}
function Td(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  qe = e
}
function No(e) {
  if (e !== qe) return !1
  if (!te) return Td(e), (te = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !du(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (vu(e)) throw (Ih(), Error(P(418)))
    for (; t; ) Mh(e, t), (t = vn(t.nextSibling))
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
function Ih() {
  for (var e = Xe; e; ) e = vn(e.nextSibling)
}
function Lr() {
  ;(Xe = qe = null), (te = !1)
}
function Nc(e) {
  kt === null ? (kt = [e]) : kt.push(e)
}
var Ay = Zt.ReactCurrentBatchConfig
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
function Ro(e, t) {
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
function Lh(e) {
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
      ? ((d = Ps(h, m.mode, x)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d)
  }
  function s(m, d, h, x) {
    var b = h.type
    return b === fr
      ? c(m, d, h.props.children, x, h.key)
      : d !== null &&
        (d.elementType === b ||
          (typeof b == 'object' && b !== null && b.$$typeof === rn && Nd(b) === d.type))
      ? ((x = i(d, h.props)), (x.ref = ri(m, d, h)), (x.return = m), x)
      : ((x = la(h.type, h.key, h.props, null, m.mode, x)),
        (x.ref = ri(m, d, h)),
        (x.return = m),
        x)
  }
  function u(m, d, h, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = _s(h, m.mode, x)), (d.return = m), d)
      : ((d = i(d, h.children || [])), (d.return = m), d)
  }
  function c(m, d, h, x, b) {
    return d === null || d.tag !== 7
      ? ((d = Wn(h, m.mode, x, b)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d)
  }
  function f(m, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = Ps('' + d, m.mode, h)), (d.return = m), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case xo:
          return (
            (h = la(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = ri(m, null, d)),
            (h.return = m),
            h
          )
        case cr:
          return (d = _s(d, m.mode, h)), (d.return = m), d
        case rn:
          var x = d._init
          return f(m, x(d._payload), h)
      }
      if (ui(d) || Zr(d)) return (d = Wn(d, m.mode, h, null)), (d.return = m), d
      Ro(m, d)
    }
    return null
  }
  function p(m, d, h, x) {
    var b = d !== null ? d.key : null
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return b !== null ? null : l(m, d, '' + h, x)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case xo:
          return h.key === b ? s(m, d, h, x) : null
        case cr:
          return h.key === b ? u(m, d, h, x) : null
        case rn:
          return (b = h._init), p(m, d, b(h._payload), x)
      }
      if (ui(h) || Zr(h)) return b !== null ? null : c(m, d, h, x, null)
      Ro(m, h)
    }
    return null
  }
  function g(m, d, h, x, b) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (m = m.get(h) || null), l(d, m, '' + x, b)
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case xo:
          return (m = m.get(x.key === null ? h : x.key) || null), s(d, m, x, b)
        case cr:
          return (m = m.get(x.key === null ? h : x.key) || null), u(d, m, x, b)
        case rn:
          var E = x._init
          return g(m, d, h, E(x._payload), b)
      }
      if (ui(x) || Zr(x)) return (m = m.get(h) || null), c(d, m, x, b, null)
      Ro(d, x)
    }
    return null
  }
  function y(m, d, h, x) {
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
      (j = g(C, m, O, h[O], x)),
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
      (A = g(C, m, O, A.value, x)),
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
        case xo:
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
                    b.$$typeof === rn &&
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
              : ((x = la(h.type, h.key, h.props, null, m.mode, x)),
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
            ;(d = _s(h, m.mode, x)), (d.return = m), (m = d)
          }
          return a(m)
        case rn:
          return (E = h._init), k(m, d, E(h._payload), x)
      }
      if (ui(h)) return y(m, d, h, x)
      if (Zr(h)) return v(m, d, h, x)
      Ro(m, h)
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = i(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = Ps(h, m.mode, x)), (d.return = m), (m = d)),
        a(m))
      : n(m, d)
  }
  return k
}
var zr = Lh(!0),
  zh = Lh(!1),
  Oa = Tn(null),
  Ta = null,
  wr = null,
  Rc = null
function Ac() {
  Rc = wr = Ta = null
}
function $c(e) {
  var t = Oa.current
  Z(Oa), (e._currentValue = t)
}
function yu(e, t, n) {
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
  ;(Ta = e),
    (Rc = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null))
}
function ft(e) {
  var t = e._currentValue
  if (Rc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (Ta === null) throw Error(P(308))
      ;(wr = e), (Ta.dependencies = { lanes: 0, firstContext: e })
    } else wr = wr.next = e
  return t
}
var Ln = null
function jc(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e)
}
function Fh(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), jc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Yt(e, r)
  )
}
function Yt(e, t) {
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
var on = !1
function Mc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function Dh(e, t) {
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
function Wt(e, t) {
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
      Yt(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), jc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Yt(e, n)
  )
}
function ta(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), xc(e, n)
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
function Na(e, t, n, r) {
  var i = e.updateQueue
  on = !1
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
        g = l.eventTime
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null
            })
        e: {
          var y = e,
            v = l
          switch (((p = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                f = y.call(g, f, p)
                break e
              }
              f = y
              break e
            case 3:
              y.flags = (y.flags & -65537) | 128
            case 0:
              if (
                ((y = v.payload),
                (p = typeof y == 'function' ? y.call(g, f, p) : y),
                p == null)
              )
                break e
              f = oe({}, f, p)
              break e
            case 2:
              on = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (p = i.effects), p === null ? (i.effects = [l]) : p.push(l))
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        }),
          c === null ? ((u = c = g), (s = f)) : (c = c.next = g),
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
  $t = Tn(oo),
  zi = Tn(oo),
  Fi = Tn(oo)
function zn(e) {
  if (e === oo) throw Error(P(174))
  return e
}
function Ic(e, t) {
  switch ((G(Fi, t), G(zi, e), G($t, oo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zs(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zs(t, e))
  }
  Z($t), G($t, t)
}
function Fr() {
  Z($t), Z(zi), Z(Fi)
}
function Uh(e) {
  zn(Fi.current)
  var t = zn($t.current),
    n = Zs(t, e.type)
  t !== n && (G(zi, e), G($t, n))
}
function Lc(e) {
  zi.current === e && (Z($t), Z(zi))
}
var re = Tn(0)
function Ra(e) {
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
var xs = []
function zc() {
  for (var e = 0; e < xs.length; e++) xs[e]._workInProgressVersionPrimary = null
  xs.length = 0
}
var na = Zt.ReactCurrentDispatcher,
  ks = Zt.ReactCurrentBatchConfig,
  Kn = 0,
  ie = null,
  ge = null,
  xe = null,
  Aa = !1,
  yi = !1,
  Di = 0,
  $y = 0
function Te() {
  throw Error(P(321))
}
function Fc(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!Et(e[n], t[n])) return !1
  return !0
}
function Dc(e, t, n, r, i, o) {
  if (
    ((Kn = o),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (na.current = e === null || e.memoizedState === null ? Ly : zy),
    (e = n(r, i)),
    yi)
  ) {
    o = 0
    do {
      if (((yi = !1), (Di = 0), 25 <= o)) throw Error(P(301))
      ;(o += 1),
        (xe = ge = null),
        (t.updateQueue = null),
        (na.current = Fy),
        (e = n(r, i))
    } while (yi)
  }
  if (
    ((na.current = $a),
    (t = ge !== null && ge.next !== null),
    (Kn = 0),
    (xe = ge = ie = null),
    (Aa = !1),
    t)
  )
    throw Error(P(300))
  return e
}
function Uc() {
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
function Ss(e) {
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
function bs(e) {
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
function Bh() {}
function Wh(e, t) {
  var n = ie,
    r = dt(),
    i = t(),
    o = !Et(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Be = !0)),
    (r = r.queue),
    Bc(Yh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Bi(9, Hh.bind(null, n, r, i, t), void 0, null), ke === null))
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
function Hh(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Kh(t) && Gh(e)
}
function Yh(e, t, n) {
  return n(function () {
    Kh(t) && Gh(e)
  })
}
function Kh(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Et(e, n)
  } catch {
    return !0
  }
}
function Gh(e) {
  var t = Yt(e, 1)
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
    (e = e.dispatch = Iy.bind(null, ie, e)),
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
function Qh() {
  return dt().memoizedState
}
function ra(e, t, n, r) {
  var i = _t()
  ;(ie.flags |= e), (i.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r))
}
function nl(e, t, n, r) {
  var i = dt()
  r = r === void 0 ? null : r
  var o = void 0
  if (ge !== null) {
    var a = ge.memoizedState
    if (((o = a.destroy), r !== null && Fc(r, a.deps))) {
      i.memoizedState = Bi(t, n, o, r)
      return
    }
  }
  ;(ie.flags |= e), (i.memoizedState = Bi(1 | t, n, o, r))
}
function jd(e, t) {
  return ra(8390656, 8, e, t)
}
function Bc(e, t) {
  return nl(2048, 8, e, t)
}
function Xh(e, t) {
  return nl(4, 2, e, t)
}
function qh(e, t) {
  return nl(4, 4, e, t)
}
function Zh(e, t) {
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
function Jh(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), nl(4, 4, Zh.bind(null, t, e), n)
}
function Wc() {}
function e0(e, t) {
  var n = dt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Fc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function t0(e, t) {
  var n = dt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Fc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function n0(e, t, n) {
  return Kn & 21
    ? (Et(n, t) || ((n = lh()), (ie.lanes |= n), (Gn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n))
}
function jy(e, t) {
  var n = V
  ;(V = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = ks.transition
  ks.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(V = n), (ks.transition = r)
  }
}
function r0() {
  return dt().memoizedState
}
function My(e, t, n) {
  var r = wn(e)
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), i0(e))
  )
    o0(t, n)
  else if (((n = Fh(e, t, n, r)), n !== null)) {
    var i = ze()
    Ct(n, e, r, i), a0(n, t, r)
  }
}
function Iy(e, t, n) {
  var r = wn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (i0(e)) o0(t, i)
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
          s === null ? ((i.next = i), jc(t)) : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Fh(e, t, i, r)), n !== null && ((i = ze()), Ct(n, e, r, i), a0(n, t, r))
  }
}
function i0(e) {
  var t = e.alternate
  return e === ie || (t !== null && t === ie)
}
function o0(e, t) {
  yi = Aa = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function a0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), xc(e, n)
  }
}
var $a = {
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
  Ly = {
    readContext: ft,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: ft,
    useEffect: jd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), ra(4194308, 4, Zh.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return ra(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return ra(4, 2, e, t)
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
        (e = e.dispatch = My.bind(null, ie, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = _t()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: $d,
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e)
    },
    useTransition: function () {
      var e = $d(!1),
        t = e[0]
      return (e = jy.bind(null, e[1])), (_t().memoizedState = e), [t, e]
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
        jd(Yh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Bi(9, Hh.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = _t(),
        t = ke.identifierPrefix
      if (te) {
        var n = Bt,
          r = Ut
        ;(n = (r & ~(1 << (32 - bt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Di++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = $y++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  zy = {
    readContext: ft,
    useCallback: e0,
    useContext: ft,
    useEffect: Bc,
    useImperativeHandle: Jh,
    useInsertionEffect: Xh,
    useLayoutEffect: qh,
    useMemo: t0,
    useReducer: Ss,
    useRef: Qh,
    useState: function () {
      return Ss(Ui)
    },
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      var t = dt()
      return n0(t, ge.memoizedState, e)
    },
    useTransition: function () {
      var e = Ss(Ui)[0],
        t = dt().memoizedState
      return [e, t]
    },
    useMutableSource: Bh,
    useSyncExternalStore: Wh,
    useId: r0,
    unstable_isNewReconciler: !1
  },
  Fy = {
    readContext: ft,
    useCallback: e0,
    useContext: ft,
    useEffect: Bc,
    useImperativeHandle: Jh,
    useInsertionEffect: Xh,
    useLayoutEffect: qh,
    useMemo: t0,
    useReducer: bs,
    useRef: Qh,
    useState: function () {
      return bs(Ui)
    },
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      var t = dt()
      return ge === null ? (t.memoizedState = e) : n0(t, ge.memoizedState, e)
    },
    useTransition: function () {
      var e = bs(Ui)[0],
        t = dt().memoizedState
      return [e, t]
    },
    useMutableSource: Bh,
    useSyncExternalStore: Wh,
    useId: r0,
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
function wu(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ze(),
      i = wn(e),
      o = Wt(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, i)),
      t !== null && (Ct(t, e, i, r), ta(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ze(),
      i = wn(e),
      o = Wt(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, i)),
      t !== null && (Ct(t, e, i, r), ta(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ze(),
      r = wn(e),
      i = Wt(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = gn(e, i, r)),
      t !== null && (Ct(t, e, r, n), ta(t, e, r))
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
function l0(e, t, n) {
  var r = !1,
    i = bn,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = ft(o))
      : ((i = Ve(t) ? Hn : $e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ir(e, i) : bn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rl),
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
    t.state !== e && rl.enqueueReplaceState(t, t.state, null)
}
function xu(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), Mc(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = ft(o))
    : ((o = Ve(t) ? Hn : $e.current), (i.context = Ir(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (wu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && rl.enqueueReplaceState(i, i.state, null),
      Na(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Dr(e, t) {
  try {
    var n = '',
      r = t
    do (n += pg(r)), (r = r.return)
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
function Cs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function ku(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Dy = typeof WeakMap == 'function' ? WeakMap : Map
function s0(e, t, n) {
  ;(n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Ma || ((Ma = !0), (Ru = r)), ku(e, t)
    }),
    n
  )
}
function u0(e, t, n) {
  ;(n = Wt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        ku(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        ku(e, t),
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
    r = e.pingCache = new Dy()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = e2.bind(null, e, t, n)), t.then(e, e))
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
              : ((t = Wt(-1, 1)), (t.tag = 2), gn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Uy = Zt.ReactCurrentOwner,
  Be = !1
function Le(e, t, n, r) {
  t.child = e === null ? zh(t, null, n, r) : zr(t, e.child, n, r)
}
function Dd(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    Tr(t, i),
    (r = Dc(e, t, n, r, o, i)),
    (n = Uc()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Kt(e, t, i))
      : (te && n && Oc(t), (t.flags |= 1), Le(e, t, r, i), t.child)
  )
}
function Ud(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !qc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), c0(e, t, o, r, i))
      : ((e = la(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : ji), n(a, r) && e.ref === t.ref))
      return Kt(e, t, i)
  }
  return (t.flags |= 1), (e = xn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function c0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (ji(o, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Be = !0)
      else return (t.lanes = e.lanes), Kt(e, t, i)
  }
  return Su(e, t, n, r, i)
}
function f0(e, t, n) {
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
function d0(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Su(e, t, n, r, i) {
  var o = Ve(n) ? Hn : $e.current
  return (
    (o = Ir(t, o)),
    Tr(t, i),
    (n = Dc(e, t, n, r, o, i)),
    (r = Uc()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Kt(e, t, i))
      : (te && r && Oc(t), (t.flags |= 1), Le(e, t, n, i), t.child)
  )
}
function Bd(e, t, n, r, i) {
  if (Ve(n)) {
    var o = !0
    Ea(t)
  } else o = !1
  if ((Tr(t, i), t.stateNode === null)) ia(e, t), l0(t, n, r), xu(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps
    a.props = l
    var s = a.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = ft(u))
      : ((u = Ve(n) ? Hn : $e.current), (u = Ir(t, u)))
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && Id(t, a, r, u)),
      (on = !1)
    var p = t.memoizedState
    ;(a.state = p),
      Na(t, r, a, i),
      (s = t.memoizedState),
      l !== r || p !== s || We.current || on
        ? (typeof c == 'function' && (wu(t, n, c, r), (s = t.memoizedState)),
          (l = on || Md(t, n, l, r, p, s, u))
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
      Dh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : wt(t.type, l)),
      (a.props = u),
      (f = t.pendingProps),
      (p = a.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = ft(s))
        : ((s = Ve(n) ? Hn : $e.current), (s = Ir(t, s)))
    var g = n.getDerivedStateFromProps
    ;(c = typeof g == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== f || p !== s) && Id(t, a, r, s)),
      (on = !1),
      (p = t.memoizedState),
      (a.state = p),
      Na(t, r, a, i)
    var y = t.memoizedState
    l !== f || p !== y || We.current || on
      ? (typeof g == 'function' && (wu(t, n, g, r), (y = t.memoizedState)),
        (u = on || Md(t, n, u, r, p, y, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, y, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, y, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
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
  return bu(e, t, n, r, o, i)
}
function bu(e, t, n, r, i, o) {
  d0(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && _d(t, n, !1), Kt(e, t, o)
  ;(r = t.stateNode), (Uy.current = t)
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
function p0(e) {
  var t = e.stateNode
  t.pendingContext
    ? Pd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Pd(e, t.context, !1),
    Ic(e, t.containerInfo)
}
function Wd(e, t, n, r, i) {
  return Lr(), Nc(i), (t.flags |= 256), Le(e, t, n, r), t.child
}
var Cu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Eu(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function m0(e, t, n) {
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
      gu(t),
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
                : (o = al(a, r, 0, null)),
              (e = Wn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Eu(n)),
              (t.memoizedState = Cu),
              e)
            : Vc(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return By(e, t, a, r, l, i, n)
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
          ? Eu(n)
          : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Cu),
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
function Vc(e, t) {
  return (
    (t = al({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Ao(e, t, n, r) {
  return (
    r !== null && Nc(r),
    zr(t, e.child, null, n),
    (e = Vc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function By(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Cs(Error(P(422)))), Ao(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = al({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Wn(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && zr(t, e.child, null, a),
        (t.child.memoizedState = Eu(a)),
        (t.memoizedState = Cu),
        o)
  if (!(t.mode & 1)) return Ao(e, t, a, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (o = Error(P(419))), (r = Cs(o, r, void 0)), Ao(e, t, a, r)
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
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), Yt(e, i), Ct(r, e, i, -1))
    }
    return Xc(), (r = Cs(Error(P(421)))), Ao(e, t, a, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = t2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Xe = vn(i.nextSibling)),
      (qe = t),
      (te = !0),
      (kt = null),
      e !== null &&
        ((at[lt++] = Ut),
        (at[lt++] = Bt),
        (at[lt++] = Yn),
        (Ut = e.id),
        (Bt = e.overflow),
        (Yn = t)),
      (t = Vc(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Vd(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), yu(e.return, t, n)
}
function Es(e, t, n, r, i) {
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
function h0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((Le(e, t, r.children, n), (r = re.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vd(e, n, t)
        else if (e.tag === 19) Vd(e, n, t)
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
          (e = n.alternate), e !== null && Ra(e) === null && (i = n), (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Es(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ra(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        Es(t, !0, n, null, o)
        break
      case 'together':
        Es(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ia(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Kt(e, t, n) {
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
function Wy(e, t, n) {
  switch (t.tag) {
    case 3:
      p0(t), Lr()
      break
    case 5:
      Uh(t)
      break
    case 1:
      Ve(t.type) && Ea(t)
      break
    case 4:
      Ic(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      G(Oa, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(re, re.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? m0(e, t, n)
          : (G(re, re.current & 1), (e = Kt(e, t, n)), e !== null ? e.sibling : null)
      G(re, re.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return h0(e, t, n)
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
      return (t.lanes = 0), f0(e, t, n)
  }
  return Kt(e, t, n)
}
var v0, Pu, g0, y0
v0 = function (e, t) {
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
Pu = function () {}
g0 = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), zn($t.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = Gs(e, i)), (r = Gs(e, r)), (o = [])
        break
      case 'select':
        ;(i = oe({}, i, { value: void 0 })), (r = oe({}, r, { value: void 0 })), (o = [])
        break
      case 'textarea':
        ;(i = qs(e, i)), (r = qs(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ba)
    }
    Js(n, r)
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
y0 = function (e, t, n, r) {
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
  switch ((Tc(t), t.tag)) {
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
      return Ve(t.type) && Ca(), Ne(t), null
    case 3:
      return (
        (r = t.stateNode),
        Fr(),
        Z(We),
        Z($e),
        zc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (No(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (ju(kt), (kt = null)))),
        Pu(e, t),
        Ne(t),
        null
      )
    case 5:
      Lc(t)
      var i = zn(Fi.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        g0(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166))
          return Ne(t), null
        }
        if (((e = zn($t.current)), No(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Nt] = t), (r[Li] = o), (e = (t.mode & 1) !== 0), n)) {
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
          Js(n, o), (i = null)
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a]
              a === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 && To(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 && To(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : _i.hasOwnProperty(a) && l != null && a === 'onScroll' && X('scroll', r)
            }
          switch (n) {
            case 'input':
              ko(r), ed(r, o, !0)
              break
            case 'textarea':
              ko(r), nd(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = ba)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ym(n)),
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
            (e[Nt] = t),
            (e[Li] = r),
            v0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = eu(n, r)), n)) {
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
                Jf(e, r), (i = Gs(e, r)), X('invalid', e)
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
                td(e, r), (i = qs(e, r)), X('invalid', e)
                break
              default:
                i = r
            }
            Js(n, i), (l = i)
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o]
                o === 'style'
                  ? Qm(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Km(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Oi(e, s)
                    : typeof s == 'number' && Oi(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (_i.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && X('scroll', e)
                      : s != null && mc(e, o, s, a))
              }
            switch (n) {
              case 'input':
                ko(e), ed(e, r, !1)
                break
              case 'textarea':
                ko(e), nd(e)
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
                typeof i.onClick == 'function' && (e.onclick = ba)
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
      if (e && t.stateNode != null) y0(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(P(166))
        if (((n = zn(Fi.current)), zn($t.current), No(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Nt] = t),
            (o = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                To(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  To(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Nt] = t),
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
          Ih(), Lr(), (t.flags |= 98560), (o = !1)
        else if (((o = No(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318))
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
              throw Error(P(317))
            o[Nt] = t
          } else Lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ne(t), (o = !1)
        } else kt !== null && (ju(kt), (kt = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || re.current & 1 ? ye === 0 && (ye = 3) : Xc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null)
    case 4:
      return Fr(), Pu(e, t), e === null && Mi(t.stateNode.containerInfo), Ne(t), null
    case 10:
      return $c(t.type._context), Ne(t), null
    case 17:
      return Ve(t.type) && Ca(), Ne(t), null
    case 19:
      if ((Z(re), (o = t.memoizedState), o === null)) return Ne(t), null
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) ii(o, !1)
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ra(e)), a !== null)) {
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
          if (((e = Ra(a)), e !== null)) {
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
        Qc(),
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
function Hy(e, t) {
  switch ((Tc(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && Ca(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Fr(),
        Z(We),
        Z($e),
        zc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Lc(t), null
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
      return $c(t.type._context), null
    case 22:
    case 23:
      return Qc(), null
    case 24:
      return null
    default:
      return null
  }
}
var $o = !1,
  Ae = !1,
  Yy = typeof WeakSet == 'function' ? WeakSet : Set,
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
function _u(e, t, n) {
  try {
    n()
  } catch (r) {
    se(e, t, r)
  }
}
var Hd = !1
function Ky(e, t) {
  if (((cu = xa), (e = bh()), _c(e))) {
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
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (p = f), (f = g)
            for (;;) {
              if (f === e) break t
              if (
                (p === n && ++u === i && (l = a),
                p === o && ++c === r && (s = a),
                (g = f.nextSibling) !== null)
              )
                break
              ;(f = p), (p = f.parentNode)
            }
            f = g
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (fu = { focusedElem: e, selectionRange: n }, xa = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e)
    else
      for (; N !== null; ) {
        t = N
        try {
          var y = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    k = y.memoizedState,
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
  return (y = Hd), (Hd = !1), y
}
function wi(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && _u(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function il(e, t) {
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
function Ou(e) {
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
function w0(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), w0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nt], delete t[Li], delete t[mu], delete t[Ty], delete t[Ny])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function x0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Yd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || x0(e.return)) return null
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
function Tu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ba))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tu(e, t, n), e = e.sibling; e !== null; ) Tu(e, t, n), (e = e.sibling)
}
function Nu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Nu(e, t, n), e = e.sibling; e !== null; ) Nu(e, t, n), (e = e.sibling)
}
var be = null,
  xt = !1
function tn(e, t, n) {
  for (n = n.child; n !== null; ) k0(e, t, n), (n = n.sibling)
}
function k0(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == 'function')
    try {
      At.onCommitFiberUnmount(Xa, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || xr(n, t)
    case 6:
      var r = be,
        i = xt
      ;(be = null),
        tn(e, t, n),
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
            e.nodeType === 8 ? ys(e.parentNode, n) : e.nodeType === 1 && ys(e, n),
            Ai(e))
          : ys(be, n.stateNode))
      break
    case 4:
      ;(r = be),
        (i = xt),
        (be = n.stateNode.containerInfo),
        (xt = !0),
        tn(e, t, n),
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
          ;(o = o.tag), a !== void 0 && (o & 2 || o & 4) && _u(n, t, a), (i = i.next)
        } while (i !== r)
      }
      tn(e, t, n)
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
      tn(e, t, n)
      break
    case 21:
      tn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), tn(e, t, n), (Ae = r))
        : tn(e, t, n)
      break
    default:
      tn(e, t, n)
  }
}
function Kd(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Yy()),
      t.forEach(function (r) {
        var i = n2.bind(null, e, r)
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
        k0(o, a, i), (be = null), (xt = !1)
        var s = i.alternate
        s !== null && (s.return = null), (i.return = null)
      } catch (u) {
        se(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) S0(t, e), (t = t.sibling)
}
function S0(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Pt(e), r & 4)) {
        try {
          wi(3, e, e.return), il(3, e)
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
            l === 'input' && o.type === 'radio' && o.name != null && Vm(i, o), eu(l, a)
            var u = eu(l, o)
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                f = s[a + 1]
              c === 'style'
                ? Qm(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? Km(i, f)
                : c === 'children'
                ? Oi(i, f)
                : mc(i, c, f, u)
            }
            switch (l) {
              case 'input':
                Qs(i, o)
                break
              case 'textarea':
                Hm(i, o)
                break
              case 'select':
                var p = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var g = o.value
                g != null
                  ? Er(i, !!o.multiple, g, !1)
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
            (Kc = ce())),
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
              switch (((p = N), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wi(4, p, p.return)
                  break
                case 1:
                  xr(p, p.return)
                  var y = p.stateNode
                  if (typeof y.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount()
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
              g !== null ? ((g.return = p), (N = g)) : Qd(f)
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
                      (l.style.display = Gm('display', a)))
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
          if (x0(n)) {
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
          Nu(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Yd(e)
          Tu(e, l, a)
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
function Gy(e, t, n) {
  ;(N = e), b0(e)
}
function b0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || $o
      if (!a) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || Ae
        l = $o
        var u = Ae
        if ((($o = a), (Ae = s) && !u))
          for (N = i; N !== null; )
            (a = N),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Xd(i)
                : s !== null
                ? ((s.return = a), (N = s))
                : Xd(i)
        for (; o !== null; ) (N = o), b0(o), (o = o.sibling)
        ;(N = i), ($o = l), (Ae = u)
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
              Ae || il(5, t)
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
        Ae || (t.flags & 512 && Ou(t))
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
            il(4, t)
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
            Ou(t)
          } catch (s) {
            se(t, o, s)
          }
          break
        case 5:
          var a = t.return
          try {
            Ou(t)
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
var Qy = Math.ceil,
  ja = Zt.ReactCurrentDispatcher,
  Hc = Zt.ReactCurrentOwner,
  ct = Zt.ReactCurrentBatchConfig,
  D = 0,
  ke = null,
  ve = null,
  Pe = 0,
  Ge = 0,
  kr = Tn(0),
  ye = 0,
  Wi = null,
  Gn = 0,
  ol = 0,
  Yc = 0,
  xi = null,
  Ue = null,
  Kc = 0,
  Ur = 1 / 0,
  Ft = null,
  Ma = !1,
  Ru = null,
  yn = null,
  jo = !1,
  cn = null,
  Ia = 0,
  ki = 0,
  Au = null,
  oa = -1,
  aa = 0
function ze() {
  return D & 6 ? ce() : oa !== -1 ? oa : (oa = ce())
}
function wn(e) {
  return e.mode & 1
    ? D & 2 && Pe !== 0
      ? Pe & -Pe
      : Ay.transition !== null
      ? (aa === 0 && (aa = lh()), aa)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mh(e.type))),
        e)
    : 1
}
function Ct(e, t, n, r) {
  if (50 < ki) throw ((ki = 0), (Au = null), Error(P(185)))
  no(e, n, r),
    (!(D & 2) || e !== ke) &&
      (e === ke && (!(D & 2) && (ol |= n), ye === 4 && ln(e, Pe)),
      He(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((Ur = ce() + 500), tl && Nn()))
}
function He(e, t) {
  var n = e.callbackNode
  Ag(e, t)
  var r = wa(e, e === ke ? Pe : 0)
  if (r === 0) n !== null && od(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && od(n), t === 1))
      e.tag === 0 ? Ry(qd.bind(null, e)) : $h(qd.bind(null, e)),
        _y(function () {
          !(D & 6) && Nn()
        }),
        (n = null)
    else {
      switch (sh(r)) {
        case 1:
          n = wc
          break
        case 4:
          n = oh
          break
        case 16:
          n = ya
          break
        case 536870912:
          n = ah
          break
        default:
          n = ya
      }
      n = R0(n, C0.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function C0(e, t) {
  if (((oa = -1), (aa = 0), D & 6)) throw Error(P(327))
  var n = e.callbackNode
  if (Nr() && e.callbackNode !== n) return null
  var r = wa(e, e === ke ? Pe : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = La(e, r)
  else {
    t = r
    var i = D
    D |= 2
    var o = P0()
    ;(ke !== e || Pe !== t) && ((Ft = null), (Ur = ce() + 500), Bn(e, t))
    do
      try {
        Zy()
        break
      } catch (l) {
        E0(e, l)
      }
    while (!0)
    Ac(),
      (ja.current = o),
      (D = i),
      ve !== null ? (t = 0) : ((ke = null), (Pe = 0), (t = ye))
  }
  if (t !== 0) {
    if ((t === 2 && ((i = ou(e)), i !== 0 && ((r = i), (t = $u(e, i)))), t === 1))
      throw ((n = Wi), Bn(e, 0), ln(e, r), He(e, ce()), n)
    if (t === 6) ln(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Xy(i) &&
          ((t = La(e, r)),
          t === 2 && ((o = ou(e)), o !== 0 && ((r = o), (t = $u(e, o)))),
          t === 1))
      )
        throw ((n = Wi), Bn(e, 0), ln(e, r), He(e, ce()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345))
        case 2:
          Mn(e, Ue, Ft)
          break
        case 3:
          if ((ln(e, r), (r & 130023424) === r && ((t = Kc + 500 - ce()), 10 < t))) {
            if (wa(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = pu(Mn.bind(null, e, Ue, Ft), t)
            break
          }
          Mn(e, Ue, Ft)
          break
        case 4:
          if ((ln(e, r), (r & 4194240) === r)) break
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
                : 1960 * Qy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pu(Mn.bind(null, e, Ue, Ft), r)
            break
          }
          Mn(e, Ue, Ft)
          break
        case 5:
          Mn(e, Ue, Ft)
          break
        default:
          throw Error(P(329))
      }
    }
  }
  return He(e, ce()), e.callbackNode === n ? C0.bind(null, e) : null
}
function $u(e, t) {
  var n = xi
  return (
    e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    (e = La(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && ju(t)),
    e
  )
}
function ju(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e)
}
function Xy(e) {
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
function ln(e, t) {
  for (
    t &= ~Yc, t &= ~ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
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
  var t = wa(e, 0)
  if (!(t & 1)) return He(e, ce()), null
  var n = La(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = ou(e)
    r !== 0 && ((t = r), (n = $u(e, r)))
  }
  if (n === 1) throw ((n = Wi), Bn(e, 0), ln(e, t), He(e, ce()), n)
  if (n === 6) throw Error(P(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mn(e, Ue, Ft),
    He(e, ce()),
    null
  )
}
function Gc(e, t) {
  var n = D
  D |= 1
  try {
    return e(t)
  } finally {
    ;(D = n), D === 0 && ((Ur = ce() + 500), tl && Nn())
  }
}
function Qn(e) {
  cn !== null && cn.tag === 0 && !(D & 6) && Nr()
  var t = D
  D |= 1
  var n = ct.transition,
    r = V
  try {
    if (((ct.transition = null), (V = 1), e)) return e()
  } finally {
    ;(V = r), (ct.transition = n), (D = t), !(D & 6) && Nn()
  }
}
function Qc() {
  ;(Ge = kr.current), Z(kr)
}
function Bn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Py(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n
      switch ((Tc(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Ca()
          break
        case 3:
          Fr(), Z(We), Z($e), zc()
          break
        case 5:
          Lc(r)
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
          $c(r.type._context)
          break
        case 22:
        case 23:
          Qc()
      }
      n = n.return
    }
  if (
    ((ke = e),
    (ve = e = xn(e.current, null)),
    (Pe = Ge = t),
    (ye = 0),
    (Wi = null),
    (Yc = ol = Gn = 0),
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
function E0(e, t) {
  do {
    var n = ve
    try {
      if ((Ac(), (na.current = $a), Aa)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Aa = !1
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
          var g = zd(a)
          if (g !== null) {
            ;(g.flags &= -257),
              Fd(g, a, l, o, t),
              g.mode & 1 && Ld(o, u, t),
              (t = g),
              (s = u)
            var y = t.updateQueue
            if (y === null) {
              var v = new Set()
              v.add(s), (t.updateQueue = v)
            } else y.add(s)
            break e
          } else {
            if (!(t & 1)) {
              Ld(o, u, t), Xc()
              break e
            }
            s = Error(P(426))
          }
        } else if (te && l.mode & 1) {
          var k = zd(a)
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), Fd(k, a, l, o, t), Nc(Dr(s, l))
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
              var m = s0(o, s, t)
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
                var x = u0(o, l, t)
                Rd(o, x)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      O0(n)
    } catch (b) {
      ;(t = b), ve === n && n !== null && (ve = n = n.return)
      continue
    }
    break
  } while (!0)
}
function P0() {
  var e = ja.current
  return (ja.current = $a), e === null ? $a : e
}
function Xc() {
  ;(ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    ke === null || (!(Gn & 268435455) && !(ol & 268435455)) || ln(ke, Pe)
}
function La(e, t) {
  var n = D
  D |= 2
  var r = P0()
  ;(ke !== e || Pe !== t) && ((Ft = null), Bn(e, t))
  do
    try {
      qy()
      break
    } catch (i) {
      E0(e, i)
    }
  while (!0)
  if ((Ac(), (D = n), (ja.current = r), ve !== null)) throw Error(P(261))
  return (ke = null), (Pe = 0), ye
}
function qy() {
  for (; ve !== null; ) _0(ve)
}
function Zy() {
  for (; ve !== null && !bg(); ) _0(ve)
}
function _0(e) {
  var t = N0(e.alternate, e, Ge)
  ;(e.memoizedProps = e.pendingProps), t === null ? O0(e) : (ve = t), (Hc.current = null)
}
function O0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hy(n, t)), n !== null)) {
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
  var r = V,
    i = ct.transition
  try {
    ;(ct.transition = null), (V = 1), Jy(e, t, n, r)
  } finally {
    ;(ct.transition = i), (V = r)
  }
  return null
}
function Jy(e, t, n, r) {
  do Nr()
  while (cn !== null)
  if (D & 6) throw Error(P(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    ($g(e, o),
    e === ke && ((ve = ke = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jo ||
      ((jo = !0),
      R0(ya, function () {
        return Nr(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = ct.transition), (ct.transition = null)
    var a = V
    V = 1
    var l = D
    ;(D |= 4),
      (Hc.current = null),
      Ky(e, n),
      S0(n, e),
      wy(fu),
      (xa = !!cu),
      (fu = cu = null),
      (e.current = n),
      Gy(n),
      Cg(),
      (D = l),
      (V = a),
      (ct.transition = o)
  } else e.current = n
  if (
    (jo && ((jo = !1), (cn = e), (Ia = i)),
    (o = e.pendingLanes),
    o === 0 && (yn = null),
    _g(n.stateNode),
    He(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Ma) throw ((Ma = !1), (e = Ru), (Ru = null), e)
  return (
    Ia & 1 && e.tag !== 0 && Nr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Au ? ki++ : ((ki = 0), (Au = e))) : (ki = 0),
    Nn(),
    null
  )
}
function Nr() {
  if (cn !== null) {
    var e = sh(Ia),
      t = ct.transition,
      n = V
    try {
      if (((ct.transition = null), (V = 16 > e ? 16 : e), cn === null)) var r = !1
      else {
        if (((e = cn), (cn = null), (Ia = 0), D & 6)) throw Error(P(331))
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
                        g = c.return
                      if ((w0(c), c === u)) {
                        N = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = g), (N = p)
                        break
                      }
                      N = g
                    }
                }
              }
              var y = o.alternate
              if (y !== null) {
                var v = y.child
                if (v !== null) {
                  y.child = null
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
                      il(9, l)
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
        if (((D = i), Nn(), At && typeof At.onPostCommitFiberRoot == 'function'))
          try {
            At.onPostCommitFiberRoot(Xa, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(V = n), (ct.transition = t)
    }
  }
  return !1
}
function Zd(e, t, n) {
  ;(t = Dr(n, t)),
    (t = s0(e, t, 1)),
    (e = gn(e, t, 1)),
    (t = ze()),
    e !== null && (no(e, 1, t), He(e, t))
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
            (e = u0(t, e, 1)),
            (t = gn(t, e, 1)),
            (e = ze()),
            t !== null && (no(t, 1, e), He(t, e))
          break
        }
      }
      t = t.return
    }
}
function e2(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Pe & n) === n &&
      (ye === 4 || (ye === 3 && (Pe & 130023424) === Pe && 500 > ce() - Kc)
        ? Bn(e, 0)
        : (Yc |= n)),
    He(e, t)
}
function T0(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = Co), (Co <<= 1), !(Co & 130023424) && (Co = 4194304)) : (t = 1))
  var n = ze()
  ;(e = Yt(e, t)), e !== null && (no(e, t, n), He(e, n))
}
function t2(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), T0(e, n)
}
function n2(e, t) {
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
  r !== null && r.delete(t), T0(e, n)
}
var N0
N0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Be = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), Wy(e, t, n)
      Be = !!(e.flags & 131072)
    }
  else (Be = !1), te && t.flags & 1048576 && jh(t, _a, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      ia(e, t), (e = t.pendingProps)
      var i = Ir(t, $e.current)
      Tr(t, n), (i = Dc(null, t, r, e, i, n))
      var o = Uc()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((o = !0), Ea(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Mc(t),
            (i.updater = rl),
            (t.stateNode = i),
            (i._reactInternals = t),
            xu(t, r, e, n),
            (t = bu(null, t, r, !0, o, n)))
          : ((t.tag = 0), te && o && Oc(t), Le(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (ia(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = i2(r)),
          (e = wt(r, e)),
          i)
        ) {
          case 0:
            t = Su(null, t, r, e, n)
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
        Su(e, t, r, i, n)
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
        if ((p0(t), e === null)) throw Error(P(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Dh(e, t),
          Na(t, r, null, n)
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
                n = zh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Lr(), r === i)) {
            t = Kt(e, t, n)
            break e
          }
          Le(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Uh(t),
        e === null && gu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        du(r, i) ? (a = null) : o !== null && du(r, o) && (t.flags |= 32),
        d0(e, t),
        Le(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && gu(t), null
    case 13:
      return m0(e, t, n)
    case 4:
      return (
        Ic(t, t.stateNode.containerInfo),
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
          G(Oa, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Et(o.value, a)) {
            if (o.children === i.children && !We.current) {
              t = Kt(e, t, n)
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
                      ;(s = Wt(-1, n & -n)), (s.tag = 2)
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
                      yu(o.return, n, t),
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
                  yu(a, n, t),
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
      return c0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        ia(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), Ea(t)) : (e = !1),
        Tr(t, n),
        l0(t, r, i),
        xu(t, r, i, n),
        bu(null, t, r, !0, e, n)
      )
    case 19:
      return h0(e, t, n)
    case 22:
      return f0(e, t, n)
  }
  throw Error(P(156, t.tag))
}
function R0(e, t) {
  return ih(e, t)
}
function r2(e, t, n, r) {
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
  return new r2(e, t, n, r)
}
function qc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function i2(e) {
  if (typeof e == 'function') return qc(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === vc)) return 11
    if (e === gc) return 14
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
function la(e, t, n, r, i, o) {
  var a = 2
  if (((r = e), typeof e == 'function')) qc(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case fr:
        return Wn(n.children, i, o, t)
      case hc:
        ;(a = 8), (i |= 8)
        break
      case Vs:
        return (e = ut(12, n, t, i | 2)), (e.elementType = Vs), (e.lanes = o), e
      case Hs:
        return (e = ut(13, n, t, i)), (e.elementType = Hs), (e.lanes = o), e
      case Ys:
        return (e = ut(19, n, t, i)), (e.elementType = Ys), (e.lanes = o), e
      case Um:
        return al(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Fm:
              a = 10
              break e
            case Dm:
              a = 9
              break e
            case vc:
              a = 11
              break e
            case gc:
              a = 14
              break e
            case rn:
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
function al(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Um),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ps(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e
}
function _s(e, t, n) {
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
function o2(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ls(0)),
    (this.expirationTimes = ls(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ls(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Zc(e, t, n, r, i, o, a, l, s) {
  return (
    (e = new o2(e, t, n, l, s)),
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
    Mc(o),
    e
  )
}
function a2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: cr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function A0(e) {
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
    if (Ve(n)) return Ah(e, n, t)
  }
  return t
}
function $0(e, t, n, r, i, o, a, l, s) {
  return (
    (e = Zc(n, r, !0, e, i, o, a, l, s)),
    (e.context = A0(null)),
    (n = e.current),
    (r = ze()),
    (i = wn(n)),
    (o = Wt(r, i)),
    (o.callback = t ?? null),
    gn(n, o, i),
    (e.current.lanes = i),
    no(e, i, r),
    He(e, r),
    e
  )
}
function ll(e, t, n, r) {
  var i = t.current,
    o = ze(),
    a = wn(i)
  return (
    (n = A0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gn(i, t, a)),
    e !== null && (Ct(e, i, a, o), ta(e, i, a)),
    a
  )
}
function za(e) {
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
function Jc(e, t) {
  Jd(e, t), (e = e.alternate) && Jd(e, t)
}
function l2() {
  return null
}
var j0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function ef(e) {
  this._internalRoot = e
}
sl.prototype.render = ef.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(P(409))
  ll(e, t, null, null)
}
sl.prototype.unmount = ef.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Qn(function () {
      ll(null, e, null, null)
    }),
      (t[Ht] = null)
  }
}
function sl(e) {
  this._internalRoot = e
}
sl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = fh()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++);
    an.splice(n, 0, e), n === 0 && ph(e)
  }
}
function tf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function ep() {}
function s2(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = za(a)
        o.call(u)
      }
    }
    var a = $0(t, r, e, 0, null, !1, !1, '', ep)
    return (
      (e._reactRootContainer = a),
      (e[Ht] = a.current),
      Mi(e.nodeType === 8 ? e.parentNode : e),
      Qn(),
      a
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = za(s)
      l.call(u)
    }
  }
  var s = Zc(e, 0, !1, null, null, !1, !1, '', ep)
  return (
    (e._reactRootContainer = s),
    (e[Ht] = s.current),
    Mi(e.nodeType === 8 ? e.parentNode : e),
    Qn(function () {
      ll(t, s, n, r)
    }),
    s
  )
}
function cl(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var a = o
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var s = za(a)
        l.call(s)
      }
    }
    ll(t, a, e, i)
  } else a = s2(n, t, e, i, r)
  return za(a)
}
uh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = ci(t.pendingLanes)
        n !== 0 && (xc(t, n | 1), He(t, ce()), !(D & 6) && ((Ur = ce() + 500), Nn()))
      }
      break
    case 13:
      Qn(function () {
        var r = Yt(e, 1)
        if (r !== null) {
          var i = ze()
          Ct(r, e, 1, i)
        }
      }),
        Jc(e, 1)
  }
}
kc = function (e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728)
    if (t !== null) {
      var n = ze()
      Ct(t, e, 134217728, n)
    }
    Jc(e, 134217728)
  }
}
ch = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = Yt(e, t)
    if (n !== null) {
      var r = ze()
      Ct(n, e, t, r)
    }
    Jc(e, t)
  }
}
fh = function () {
  return V
}
dh = function (e, t) {
  var n = V
  try {
    return (V = e), t()
  } finally {
    V = n
  }
}
nu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Qs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var i = el(r)
            if (!i) throw Error(P(90))
            Wm(r), Qs(r, i)
          }
        }
      }
      break
    case 'textarea':
      Hm(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Er(e, !!n.multiple, t, !1)
  }
}
Zm = Gc
Jm = Qn
var u2 = { usingClientEntryPoint: !1, Events: [io, hr, el, Xm, qm, Gc] },
  oi = {
    findFiberByHostInstance: In,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  c2 = {
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
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = nh(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: oi.findFiberByHostInstance || l2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Mo = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Mo.isDisabled && Mo.supportsFiber)
    try {
      ;(Xa = Mo.inject(c2)), (At = Mo)
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u2
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!tf(t)) throw Error(P(200))
  return a2(e, t, null, n)
}
et.createRoot = function (e, t) {
  if (!tf(e)) throw Error(P(299))
  var n = !1,
    r = '',
    i = j0
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Zc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ht] = t.current),
    Mi(e.nodeType === 8 ? e.parentNode : e),
    new ef(t)
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
  return (e = nh(t)), (e = e === null ? null : e.stateNode), e
}
et.flushSync = function (e) {
  return Qn(e)
}
et.hydrate = function (e, t, n) {
  if (!ul(t)) throw Error(P(200))
  return cl(null, e, t, !0, n)
}
et.hydrateRoot = function (e, t, n) {
  if (!tf(e)) throw Error(P(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = j0
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = $0(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Ht] = t.current),
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
  return new sl(t)
}
et.render = function (e, t, n) {
  if (!ul(t)) throw Error(P(200))
  return cl(null, e, t, !1, n)
}
et.unmountComponentAtNode = function (e) {
  if (!ul(e)) throw Error(P(40))
  return e._reactRootContainer
    ? (Qn(function () {
        cl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Ht] = null)
        })
      }),
      !0)
    : !1
}
et.unstable_batchedUpdates = Gc
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ul(n)) throw Error(P(200))
  if (e == null || e._reactInternals === void 0) throw Error(P(38))
  return cl(e, t, n, !1, r)
}
et.version = '18.3.1-next-f1338f8080-20240426'
function M0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M0)
    } catch (e) {
      console.error(e)
    }
}
M0(), (Mm.exports = et)
var f2 = Mm.exports,
  tp = f2
;(Bs.createRoot = tp.createRoot), (Bs.hydrateRoot = tp.hydrateRoot)
var d2 = Object.defineProperty,
  p2 = (e, t, n) =>
    t in e
      ? d2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Os = (e, t, n) => (p2(e, typeof t != 'symbol' ? t + '' : t, n), n)
let m2 = class {
    constructor() {
      Os(this, 'current', this.detect()),
        Os(this, 'handoffState', 'pending'),
        Os(this, 'currentId', 0)
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
  Vn = new m2(),
  Fa = (e, t) => {
    Vn.isServer ? w.useEffect(e, t) : w.useLayoutEffect(e, t)
  }
function h2(e) {
  let t = w.useRef(e)
  return (
    Fa(() => {
      t.current = e
    }, [e]),
    t
  )
}
let Si = function (e) {
  let t = h2(e)
  return Q.useCallback((...n) => t.current(...n), [t])
}
function v2() {
  let e = typeof document > 'u'
  return 'useSyncExternalStore' in Pi
    ? (t => t.useSyncExternalStore)(Pi)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1
}
function g2() {
  let e = v2(),
    [t, n] = w.useState(Vn.isHandoffComplete)
  return (
    t && Vn.isHandoffComplete === !1 && n(!1),
    w.useEffect(() => {
      t !== !0 && n(!0)
    }, [t]),
    w.useEffect(() => Vn.handoff(), []),
    e ? !1 : t
  )
}
var np
let I0 =
  (np = Q.useId) != null
    ? np
    : function () {
        let e = g2(),
          [t, n] = Q.useState(e ? () => Vn.nextId() : null)
        return (
          Fa(() => {
            t === null && n(Vn.nextId())
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
function y2(e) {
  return Vn.isServer
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
function w2(e, t) {
  let [n, r] = w.useState(() => rp(e))
  return (
    Fa(() => {
      r(rp(e))
    }, [e.type, e.as]),
    Fa(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute('type') &&
          r('button'))
    }, [n, t]),
    n
  )
}
let L0 = Symbol()
function x2(e, t = !0) {
  return Object.assign(e, { [L0]: t })
}
function nf(...e) {
  let t = w.useRef(e)
  w.useEffect(() => {
    t.current = e
  }, [e])
  let n = Si(r => {
    for (let i of t.current)
      i != null && (typeof i == 'function' ? i(r) : (i.current = r))
  })
  return e.every(r => r == null || (r == null ? void 0 : r[L0])) ? void 0 : n
}
function ip(...e) {
  return Array.from(new Set(e.flatMap(t => (typeof t == 'string' ? t.split(' ') : []))))
    .filter(Boolean)
    .join(' ')
}
var Mu = (e => (
    (e[(e.None = 0)] = 'None'),
    (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
    (e[(e.Static = 2)] = 'Static'),
    e
  ))(Mu || {}),
  k2 = (e => ((e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e))(
    k2 || {}
  )
function rf({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: o = !0,
  name: a,
  mergeRefs: l
}) {
  l = l ?? S2
  let s = F0(t, e)
  if (o) return Io(s, n, r, a, l)
  let u = i ?? 0
  if (u & 2) {
    let { static: c = !1, ...f } = s
    if (c) return Io(f, n, r, a, l)
  }
  if (u & 1) {
    let { unmount: c = !0, ...f } = s
    return ao(c ? 0 : 1, {
      0() {
        return null
      },
      1() {
        return Io({ ...f, hidden: !0, style: { display: 'none' } }, n, r, a, l)
      }
    })
  }
  return Io(s, n, r, a, l)
}
function Io(e, t = {}, n, r, i) {
  let { as: o = n, children: a, refName: l = 'ref', ...s } = Ts(e, ['unmount', 'static']),
    u = e.ref !== void 0 ? { [l]: e.ref } : {},
    c = typeof a == 'function' ? a(t) : a
  'className' in s &&
    s.className &&
    typeof s.className == 'function' &&
    (s.className = s.className(t))
  let f = {}
  if (t) {
    let p = !1,
      g = []
    for (let [y, v] of Object.entries(t))
      typeof v == 'boolean' && (p = !0), v === !0 && g.push(y)
    p && (f['data-headlessui-state'] = g.join(' '))
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
      g =
        typeof (p == null ? void 0 : p.className) == 'function'
          ? (...v) => ip(p == null ? void 0 : p.className(...v), s.className)
          : ip(p == null ? void 0 : p.className, s.className),
      y = g ? { className: g } : {}
    return w.cloneElement(
      c,
      Object.assign(
        {},
        F0(c.props, op(Ts(s, ['ref']))),
        f,
        u,
        { ref: i(c.ref, u.ref) },
        y
      )
    )
  }
  return w.createElement(
    o,
    Object.assign({}, Ts(s, ['ref']), o !== w.Fragment && u, o !== w.Fragment && f),
    c
  )
}
function z0() {
  let e = w.useRef([]),
    t = w.useCallback(n => {
      for (let r of e.current)
        r != null && (typeof r == 'function' ? r(n) : (r.current = n))
    }, [])
  return (...n) => {
    if (!n.every(r => r == null)) return (e.current = n), t
  }
}
function S2(...e) {
  return e.every(t => t == null)
    ? void 0
    : t => {
        for (let n of e) n != null && (typeof n == 'function' ? n(t) : (n.current = t))
      }
}
function F0(...e) {
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
function of(e) {
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
function Ts(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
let af = w.createContext(null)
af.displayName = 'OpenClosedContext'
var Vi = (e => (
  (e[(e.Open = 1)] = 'Open'),
  (e[(e.Closed = 2)] = 'Closed'),
  (e[(e.Closing = 4)] = 'Closing'),
  (e[(e.Opening = 8)] = 'Opening'),
  e
))(Vi || {})
function b2() {
  return w.useContext(af)
}
function C2({ value: e, children: t }) {
  return Q.createElement(af.Provider, { value: e }, t)
}
function E2(e) {
  let t = e.parentElement,
    n = null
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement)
  let r = (t == null ? void 0 : t.getAttribute('disabled')) === ''
  return r && P2(n) ? !1 : r
}
function P2(e) {
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
let _2 =
  (ap = Q.startTransition) != null
    ? ap
    : function (e) {
        e()
      }
var O2 = (e => ((e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e))(O2 || {}),
  T2 = (e => (
    (e[(e.ToggleDisclosure = 0)] = 'ToggleDisclosure'),
    (e[(e.CloseDisclosure = 1)] = 'CloseDisclosure'),
    (e[(e.SetButtonId = 2)] = 'SetButtonId'),
    (e[(e.SetPanelId = 3)] = 'SetPanelId'),
    (e[(e.LinkPanel = 4)] = 'LinkPanel'),
    (e[(e.UnlinkPanel = 5)] = 'UnlinkPanel'),
    e
  ))(T2 || {})
let N2 = {
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
  lf = w.createContext(null)
lf.displayName = 'DisclosureContext'
function sf(e) {
  let t = w.useContext(lf)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, sf), n)
  }
  return t
}
let uf = w.createContext(null)
uf.displayName = 'DisclosureAPIContext'
function D0(e) {
  let t = w.useContext(uf)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, D0), n)
  }
  return t
}
let cf = w.createContext(null)
cf.displayName = 'DisclosurePanelContext'
function R2() {
  return w.useContext(cf)
}
function A2(e, t) {
  return ao(t.type, N2, e, t)
}
let $2 = w.Fragment
function j2(e, t) {
  let { defaultOpen: n = !1, ...r } = e,
    i = w.useRef(null),
    o = nf(
      t,
      x2(k => {
        i.current = k
      }, e.as === void 0 || e.as === w.Fragment)
    ),
    a = w.useRef(null),
    l = w.useRef(null),
    s = w.useReducer(A2, {
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
      let m = y2(i)
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
    g = w.useMemo(() => ({ close: p }), [p]),
    y = w.useMemo(() => ({ open: u === 0, close: p }), [u, p]),
    v = { ref: o }
  return Q.createElement(
    lf.Provider,
    { value: s },
    Q.createElement(
      uf.Provider,
      { value: g },
      Q.createElement(
        C2,
        { value: ao(u, { 0: Vi.Open, 1: Vi.Closed }) },
        rf({ ourProps: v, theirProps: r, slot: y, defaultTag: $2, name: 'Disclosure' })
      )
    )
  )
}
let M2 = 'button'
function I2(e, t) {
  let n = I0(),
    { id: r = `headlessui-disclosure-button-${n}`, ...i } = e,
    [o, a] = sf('Disclosure.Button'),
    l = R2(),
    s = l === null ? !1 : l === o.panelId,
    u = w.useRef(null),
    c = nf(u, t, s ? null : o.buttonRef),
    f = z0()
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
    g = Si(d => {
      switch (d.key) {
        case ur.Space:
          d.preventDefault()
          break
      }
    }),
    y = Si(d => {
      var h
      E2(d.currentTarget) ||
        e.disabled ||
        (s
          ? (a({ type: 0 }), (h = o.buttonRef.current) == null || h.focus())
          : a({ type: 0 }))
    }),
    v = w.useMemo(() => ({ open: o.disclosureState === 0 }), [o]),
    k = w2(e, u),
    m = s
      ? { ref: c, type: k, onKeyDown: p, onClick: y }
      : {
          ref: c,
          id: r,
          type: k,
          'aria-expanded': o.disclosureState === 0,
          'aria-controls': o.linkedPanel ? o.panelId : void 0,
          onKeyDown: p,
          onKeyUp: g,
          onClick: y
        }
  return rf({
    mergeRefs: f,
    ourProps: m,
    theirProps: i,
    slot: v,
    defaultTag: M2,
    name: 'Disclosure.Button'
  })
}
let L2 = 'div',
  z2 = Mu.RenderStrategy | Mu.Static
function F2(e, t) {
  let n = I0(),
    { id: r = `headlessui-disclosure-panel-${n}`, ...i } = e,
    [o, a] = sf('Disclosure.Panel'),
    { close: l } = D0('Disclosure.Panel'),
    s = z0(),
    u = nf(t, o.panelRef, y => {
      _2(() => a({ type: y ? 4 : 5 }))
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
  let c = b2(),
    f = c !== null ? (c & Vi.Open) === Vi.Open : o.disclosureState === 0,
    p = w.useMemo(() => ({ open: o.disclosureState === 0, close: l }), [o, l]),
    g = { ref: u, id: r }
  return Q.createElement(
    cf.Provider,
    { value: o.panelId },
    rf({
      mergeRefs: s,
      ourProps: g,
      theirProps: i,
      slot: p,
      defaultTag: L2,
      features: z2,
      visible: f,
      name: 'Disclosure.Panel'
    })
  )
}
let D2 = of(j2),
  U2 = of(I2),
  B2 = of(F2),
  Lo = Object.assign(D2, { Button: U2, Panel: B2 })
function W2({ title: e, titleId: t, ...n }, r) {
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
const V2 = w.forwardRef(W2)
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
      d: 'M6 18 18 6M6 6l12 12'
    })
  )
}
const Y2 = w.forwardRef(H2)
var U0 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  lp = Q.createContext && Q.createContext(U0),
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
  K2 = function (e, t) {
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
function B0(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Q.createElement(t.tag, kn({ key: n }, t.attr), B0(t.child))
    })
  )
}
function fl(e) {
  return function (t) {
    return Q.createElement(G2, kn({ attr: kn({}, e.attr) }, t), B0(e.child))
  }
}
function G2(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      a = K2(e, ['attr', 'size', 'title']),
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
    : t(U0)
}
function W0(e) {
  return fl({
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
  return fl({
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
    current: !1
  }
]
function up(...e) {
  return e.filter(Boolean).join(' ')
}
function Q2() {
  return S.jsx(Lo, {
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
                  children: S.jsxs(Lo.Button, {
                    className:
                      'relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
                    children: [
                      S.jsx('span', { className: 'absolute -inset-0.5' }),
                      S.jsx('span', { className: 'sr-only', children: 'Open main menu' }),
                      e
                        ? S.jsx(Y2, { className: 'block h-6 w-6', 'aria-hidden': 'true' })
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
                      children: S.jsx(W0, { size: 24 })
                    }),
                    S.jsx('a', {
                      href: 'https://www.linkedin.com/in/carlos-rodr%C3%ADguez-morales/',
                      className: 'text-gray-300 hover:text-white mx-2',
                      children: S.jsx(V0, { size: 24 })
                    })
                  ]
                })
              ]
            })
          }),
          S.jsx(Lo.Panel, {
            className: 'sm:hidden',
            children: S.jsx('div', {
              className: 'space-y-1 px-2 pb-3 pt-2',
              children: sp.map(t =>
                S.jsx(
                  Lo.Button,
                  {
                    as: 'a',
                    href: t.href,
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
 * @remix-run/router v1.16.0
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
var fn
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(fn || (fn = {}))
const cp = 'popstate'
function X2(e) {
  e === void 0 && (e = {})
  function t(r, i) {
    let { pathname: o, search: a, hash: l } = r.location
    return Iu(
      '',
      { pathname: o, search: a, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    )
  }
  function n(r, i) {
    return typeof i == 'string' ? i : Y0(i)
  }
  return Z2(t, n, null, e)
}
function Ye(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function H0(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function q2() {
  return Math.random().toString(36).substr(2, 8)
}
function fp(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Iu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Da(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? dl(t) : t,
      { state: n, key: (t && t.key) || r || q2() }
    )
  )
}
function Y0(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function dl(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e)
  }
  return t
}
function Z2(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    l = fn.Pop,
    s = null,
    u = c()
  u == null && ((u = 0), a.replaceState(Da({}, a.state, { idx: u }), ''))
  function c() {
    return (a.state || { idx: null }).idx
  }
  function f() {
    l = fn.Pop
    let k = c(),
      m = k == null ? null : k - u
    ;(u = k), s && s({ action: l, location: v.location, delta: m })
  }
  function p(k, m) {
    l = fn.Push
    let d = Iu(v.location, k, m)
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
  function g(k, m) {
    l = fn.Replace
    let d = Iu(v.location, k, m)
    u = c()
    let h = fp(d, u),
      x = v.createHref(d)
    a.replaceState(h, '', x), o && s && s({ action: l, location: v.location, delta: 0 })
  }
  function y(k) {
    let m = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      d = typeof k == 'string' ? k : Y0(k)
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
    createURL: y,
    encodeLocation(k) {
      let m = y(k)
      return { pathname: m.pathname, search: m.search, hash: m.hash }
    },
    push: p,
    replace: g,
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
function J2(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? dl(t) : t,
    i = Q0(r.pathname || '/', n)
  if (i == null) return null
  let o = K0(e)
  ew(o)
  let a = null
  for (let l = 0; a == null && l < o.length; ++l) {
    let s = dw(i)
    a = uw(o[l], s)
  }
  return a
}
function K0(e, t, n, r) {
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
      K0(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: lw(u, o.index), routesMeta: c })
  }
  return (
    e.forEach((o, a) => {
      var l
      if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, a)
      else for (let s of G0(o.path)) i(o, a, s)
    }),
    t
  )
}
function G0(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [o, ''] : [o]
  let a = G0(r.join('/')),
    l = []
  return (
    l.push(...a.map(s => (s === '' ? o : [o, s].join('/')))),
    i && l.push(...a),
    l.map(s => (e.startsWith('/') && s === '' ? '/' : s))
  )
}
function ew(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : sw(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex)
        )
  )
}
const tw = /^:[\w-]+$/,
  nw = 3,
  rw = 2,
  iw = 1,
  ow = 10,
  aw = -2,
  pp = e => e === '*'
function lw(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(pp) && (r += aw),
    t && (r += rw),
    n.filter(i => !pp(i)).reduce((i, o) => i + (tw.test(o) ? nw : o === '' ? iw : ow), r)
  )
}
function sw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function uw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = []
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = cw({ path: l.relativePath, caseSensitive: l.caseSensitive, end: s }, u)
    if (!c) return null
    Object.assign(r, c.params)
    let f = l.route
    o.push({
      params: r,
      pathname: Rr([i, c.pathname]),
      pathnameBase: pw(Rr([i, c.pathnameBase])),
      route: f
    }),
      c.pathnameBase !== '/' && (i = Rr([i, c.pathnameBase]))
  }
  return o
}
function cw(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = fw(e.path, e.caseSensitive, e.end),
    i = t.match(n)
  if (!i) return null
  let o = i[0],
    a = o.replace(/(.)\/+$/, '$1'),
    l = i.slice(1)
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: p, isOptional: g } = c
      if (p === '*') {
        let v = l[f] || ''
        a = o.slice(0, o.length - v.length).replace(/(.)\/+$/, '$1')
      }
      const y = l[f]
      return g && !y ? (u[p] = void 0) : (u[p] = (y || '').replace(/%2F/g, '/')), u
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e
  }
}
function fw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    H0(
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
function dw(e) {
  try {
    return e
      .split('/')
      .map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      H0(
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
function Q0(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
const Rr = e => e.join('/').replace(/\/\/+/g, '/'),
  pw = e => e.replace(/\/+$/, '').replace(/^\/*/, '/')
function mw(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const X0 = ['post', 'put', 'patch', 'delete']
new Set(X0)
const hw = ['get', ...X0]
new Set(hw)
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ua() {
  return (
    (Ua = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ua.apply(this, arguments)
  )
}
const vw = w.createContext(null),
  gw = w.createContext(null),
  q0 = w.createContext(null),
  pl = w.createContext(null),
  ml = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Z0 = w.createContext(null)
function ff() {
  return w.useContext(pl) != null
}
function yw() {
  return ff() || Ye(!1), w.useContext(pl).location
}
function ww(e, t) {
  return xw(e, t)
}
function xw(e, t, n, r) {
  ff() || Ye(!1)
  let { navigator: i } = w.useContext(q0),
    { matches: o } = w.useContext(ml),
    a = o[o.length - 1],
    l = a ? a.params : {}
  a && a.pathname
  let s = a ? a.pathnameBase : '/'
  a && a.route
  let u = yw(),
    c
  if (t) {
    var f
    let k = typeof t == 'string' ? dl(t) : t
    s === '/' || ((f = k.pathname) != null && f.startsWith(s)) || Ye(!1), (c = k)
  } else c = u
  let p = c.pathname || '/',
    g = p
  if (s !== '/') {
    let k = s.replace(/^\//, '').split('/')
    g = '/' + p.replace(/^\//, '').split('/').slice(k.length).join('/')
  }
  let y = J2(e, { pathname: g }),
    v = Ew(
      y &&
        y.map(k =>
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
        pl.Provider,
        {
          value: {
            location: Ua(
              { pathname: '/', search: '', hash: '', state: null, key: 'default' },
              c
            ),
            navigationType: fn.Pop
          }
        },
        v
      )
    : v
}
function kw() {
  let e = Tw(),
    t = mw(e)
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
const Sw = w.createElement(kw, null)
class bw extends w.Component {
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
          ml.Provider,
          { value: this.props.routeContext },
          w.createElement(Z0.Provider, {
            value: this.state.error,
            children: this.props.component
          })
        )
      : this.props.children
  }
}
function Cw(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = w.useContext(vw)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(ml.Provider, { value: t }, r)
  )
}
function Ew(e, t, n, r) {
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
        let { loaderData: p, errors: g } = n,
          y =
            f.route.loader && p[f.route.id] === void 0 && (!g || g[f.route.id] === void 0)
        if (f.route.lazy || y) {
          ;(s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]])
          break
        }
      }
    }
  return a.reduceRight((c, f, p) => {
    let g,
      y = !1,
      v = null,
      k = null
    n &&
      ((g = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || Sw),
      s &&
        (u < 0 && p === 0
          ? ((y = !0), (k = null))
          : u === p && ((y = !0), (k = f.route.hydrateFallbackElement || null))))
    let m = t.concat(a.slice(0, p + 1)),
      d = () => {
        let h
        return (
          g
            ? (h = v)
            : y
            ? (h = k)
            : f.route.Component
            ? (h = w.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = c),
          w.createElement(Cw, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: h
          })
        )
      }
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? w.createElement(bw, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: d(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 }
        })
      : d()
  }, null)
}
var Lu = (function (e) {
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
})(Lu || {})
function Pw(e) {
  let t = w.useContext(gw)
  return t || Ye(!1), t
}
function _w(e) {
  let t = w.useContext(ml)
  return t || Ye(!1), t
}
function Ow(e) {
  let t = _w(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || Ye(!1), n.route.id
}
function Tw() {
  var e
  let t = w.useContext(Z0),
    n = Pw(Lu.UseRouteError),
    r = Ow(Lu.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function zu(e) {
  Ye(!1)
}
function Nw(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = fn.Pop,
    navigator: o,
    static: a = !1,
    future: l
  } = e
  ff() && Ye(!1)
  let s = t.replace(/^\/*/, '/'),
    u = w.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: a,
        future: Ua({ v7_relativeSplatPath: !1 }, l)
      }),
      [s, l, o, a]
    )
  typeof r == 'string' && (r = dl(r))
  let {
      pathname: c = '/',
      search: f = '',
      hash: p = '',
      state: g = null,
      key: y = 'default'
    } = r,
    v = w.useMemo(() => {
      let k = Q0(c, s)
      return k == null
        ? null
        : {
            location: { pathname: k, search: f, hash: p, state: g, key: y },
            navigationType: i
          }
    }, [s, c, f, p, g, y, i])
  return v == null
    ? null
    : w.createElement(
        q0.Provider,
        { value: u },
        w.createElement(pl.Provider, { children: n, value: v })
      )
}
function Rw(e) {
  let { children: t, location: n } = e
  return ww(Fu(t), n)
}
new Promise(() => {})
function Fu(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    w.Children.forEach(e, (r, i) => {
      if (!w.isValidElement(r)) return
      let o = [...t, i]
      if (r.type === w.Fragment) {
        n.push.apply(n, Fu(r.props.children, o))
        return
      }
      r.type !== zu && Ye(!1), !r.props.index || !r.props.children || Ye(!1)
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
      r.props.children && (a.children = Fu(r.props.children, o)), n.push(a)
    }),
    n
  )
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Aw = '6'
try {
  window.__reactRouterVersion = Aw
} catch {}
const $w = 'startTransition',
  mp = Pi[$w]
function jw(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = w.useRef()
  o.current == null && (o.current = X2({ window: i, v5Compat: !0 }))
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
    w.createElement(Nw, {
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
function Mw() {
  return S.jsx(S.Fragment, {})
}
const Iw = ({ text: e, typingDelay: t, className: n, repeatDelay: r }) => {
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
var J0 = { exports: {} },
  Lw = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  zw = Lw,
  Fw = zw
function e1() {}
function t1() {}
t1.resetWarningCache = e1
var Dw = function () {
  function e(r, i, o, a, l, s) {
    if (s !== Fw) {
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
    checkPropTypes: t1,
    resetWarningCache: e1
  }
  return (n.PropTypes = n), n
}
J0.exports = Dw()
var Uw = J0.exports
const z = bm(Uw)
function n1(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length
      for (t = 0; t < i; t++) e[t] && (n = n1(e[t])) && (r && (r += ' '), (r += n))
    } else for (n in e) e[n] && (r && (r += ' '), (r += n))
  return r
}
function Ce() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = n1(e)) && (r && (r += ' '), (r += t))
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
  r1 = { exports: {} }
;(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n }
  }
  ;(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports)
})(r1)
var i1 = r1.exports,
  Ns = { exports: {} },
  gp
function o1() {
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
      })(Ns)),
    Ns.exports
  )
}
var Rs = { exports: {} },
  yp
function Bw() {
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
      })(Rs)),
    Rs.exports
  )
}
function a1(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var Ww =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Vw = a1(function (e) {
    return (
      Ww.test(e) ||
      (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    )
  })
function Hw(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function Yw(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var Kw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Yw(this))
        var i = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var o = Hw(i)
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
  Ba = '-moz-',
  U = '-webkit-',
  l1 = 'comm',
  df = 'rule',
  pf = 'decl',
  Gw = '@import',
  s1 = '@keyframes',
  Qw = '@layer',
  Xw = Math.abs,
  hl = String.fromCharCode,
  qw = Object.assign
function Zw(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^ Ee(e, 3)
    : 0
}
function u1(e) {
  return e.trim()
}
function Jw(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function B(e, t, n) {
  return e.replace(t, n)
}
function Du(e, t) {
  return e.indexOf(t)
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0
}
function Hi(e, t, n) {
  return e.slice(t, n)
}
function Ot(e) {
  return e.length
}
function mf(e) {
  return e.length
}
function zo(e, t) {
  return t.push(e), e
}
function ex(e, t) {
  return e.map(t).join('')
}
var vl = 1,
  Br = 1,
  c1 = 0,
  Ke = 0,
  he = 0,
  Kr = ''
function gl(e, t, n, r, i, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: vl,
    column: Br,
    length: a,
    return: ''
  }
}
function ai(e, t) {
  return qw(gl('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function tx() {
  return he
}
function nx() {
  return (he = Ke > 0 ? Ee(Kr, --Ke) : 0), Br--, he === 10 && ((Br = 1), vl--), he
}
function Ze() {
  return (he = Ke < c1 ? Ee(Kr, Ke++) : 0), Br++, he === 10 && ((Br = 1), vl++), he
}
function jt() {
  return Ee(Kr, Ke)
}
function sa() {
  return Ke
}
function so(e, t) {
  return Hi(Kr, e, t)
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
function f1(e) {
  return (vl = Br = 1), (c1 = Ot((Kr = e))), (Ke = 0), []
}
function d1(e) {
  return (Kr = ''), e
}
function ua(e) {
  return u1(so(Ke - 1, Uu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function rx(e) {
  for (; (he = jt()) && he < 33; ) Ze()
  return Yi(e) > 2 || Yi(he) > 3 ? '' : ' '
}
function ix(e, t) {
  for (
    ;
    --t && Ze() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97));

  );
  return so(e, sa() + (t < 6 && jt() == 32 && Ze() == 32))
}
function Uu(e) {
  for (; Ze(); )
    switch (he) {
      case e:
        return Ke
      case 34:
      case 39:
        e !== 34 && e !== 39 && Uu(he)
        break
      case 40:
        e === 41 && Uu(e)
        break
      case 92:
        Ze()
        break
    }
  return Ke
}
function ox(e, t) {
  for (; Ze() && e + he !== 57; ) if (e + he === 84 && jt() === 47) break
  return '/*' + so(t, Ke - 1) + '*' + hl(e === 47 ? e : Ze())
}
function ax(e) {
  for (; !Yi(jt()); ) Ze()
  return so(e, Ke)
}
function lx(e) {
  return d1(ca('', null, null, null, [''], (e = f1(e)), 0, [0], e))
}
function ca(e, t, n, r, i, o, a, l, s) {
  for (
    var u = 0,
      c = 0,
      f = a,
      p = 0,
      g = 0,
      y = 0,
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
    switch (((y = d), (d = Ze()))) {
      case 40:
        if (y != 108 && Ee(C, f - 1) == 58) {
          Du((C += B(ua(d), '&', '&\f')), '&\f') != -1 && (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        C += ua(d)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        C += rx(y)
        break
      case 92:
        C += ix(sa() - 1, 7)
        continue
      case 47:
        switch (jt()) {
          case 42:
          case 47:
            zo(sx(ox(Ze(), sa()), t, n), s)
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
              g > 0 &&
                Ot(C) - f &&
                zo(
                  g > 32
                    ? xp(C + ';', r, n, f - 1)
                    : xp(B(C, ' ', '') + ';', r, n, f - 2),
                  s
                )
            break
          case 59:
            C += ';'
          default:
            if (
              (zo((E = wp(C, t, n, u, c, i, l, h, (x = []), (b = []), f)), o), d === 123)
            )
              if (c === 0) ca(C, t, E, E, x, o, f, l, b)
              else
                switch (p === 99 && Ee(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ca(
                      e,
                      E,
                      E,
                      r && zo(wp(e, E, E, 0, 0, i, l, h, i, (x = []), f), b),
                      i,
                      b,
                      f,
                      l,
                      r ? x : b
                    )
                    break
                  default:
                    ca(C, E, E, E, [''], b, 0, l, b)
                }
        }
        ;(u = c = g = 0), (v = m = 1), (h = C = ''), (f = a)
        break
      case 58:
        ;(f = 1 + Ot(C)), (g = y)
      default:
        if (v < 1) {
          if (d == 123) --v
          else if (d == 125 && v++ == 0 && nx() == 125) continue
        }
        switch (((C += hl(d)), d * v)) {
          case 38:
            m = c > 0 ? 1 : ((C += '\f'), -1)
            break
          case 44:
            ;(l[u++] = (Ot(C) - 1) * m), (m = 1)
            break
          case 64:
            jt() === 45 && (C += ua(Ze())),
              (p = jt()),
              (c = f = Ot((h = C += ax(sa())))),
              d++
            break
          case 45:
            y === 45 && Ot(C) == 2 && (v = 0)
        }
    }
  return o
}
function wp(e, t, n, r, i, o, a, l, s, u, c) {
  for (var f = i - 1, p = i === 0 ? o : [''], g = mf(p), y = 0, v = 0, k = 0; y < r; ++y)
    for (var m = 0, d = Hi(e, f + 1, (f = Xw((v = a[y])))), h = e; m < g; ++m)
      (h = u1(v > 0 ? p[m] + ' ' + d : B(d, /&\f/g, p[m]))) && (s[k++] = h)
  return gl(e, t, n, i === 0 ? df : l, s, u, c)
}
function sx(e, t, n) {
  return gl(e, t, n, l1, hl(tx()), Hi(e, 2, -2), 0)
}
function xp(e, t, n, r) {
  return gl(e, t, n, pf, Hi(e, 0, r), Hi(e, r + 1, -1), r)
}
function Ar(e, t) {
  for (var n = '', r = mf(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ''
  return n
}
function ux(e, t, n, r) {
  switch (e.type) {
    case Qw:
      if (e.children.length) break
    case Gw:
    case pf:
      return (e.return = e.return || e.value)
    case l1:
      return ''
    case s1:
      return (e.return = e.value + '{' + Ar(e.children, r) + '}')
    case df:
      e.value = e.props.join(',')
  }
  return Ot((n = Ar(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function cx(e) {
  var t = mf(e)
  return function (n, r, i, o) {
    for (var a = '', l = 0; l < t; l++) a += e[l](n, r, i, o) || ''
    return a
  }
}
function fx(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var dx = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = jt()), i === 38 && o === 12 && (n[r] = 1), !Yi(o);

    )
      Ze()
    return so(t, Ke)
  },
  px = function (t, n) {
    var r = -1,
      i = 44
    do
      switch (Yi(i)) {
        case 0:
          i === 38 && jt() === 12 && (n[r] = 1), (t[r] += dx(Ke - 1, n, r))
          break
        case 2:
          t[r] += ua(i)
          break
        case 4:
          if (i === 44) {
            ;(t[++r] = jt() === 58 ? '&\f' : ''), (n[r] = t[r].length)
            break
          }
        default:
          t[r] += hl(i)
      }
    while ((i = Ze()))
    return t
  },
  mx = function (t, n) {
    return d1(px(f1(t), n))
  },
  kp = new WeakMap(),
  hx = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !kp.get(r)) && !i) {
        kp.set(t, !0)
        for (var o = [], a = mx(n, o), l = r.props, s = 0, u = 0; s < a.length; s++)
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = o[s] ? a[s].replace(/&\f/g, l[c]) : l[c] + ' ' + a[s]
      }
    }
  },
  vx = function (t) {
    if (t.type === 'decl') {
      var n = t.value
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''))
    }
  }
function p1(e, t) {
  switch (Zw(e, t)) {
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
      return U + e + Ba + e + Re + e + e
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
                '$1' + U + '$2-$3$1' + Ba + (Ee(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~Du(e, 'stretch') ? p1(B(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (Ee(e, t + 1) !== 115) break
    case 6444:
      switch (Ee(e, Ot(e) - 3 - (~Du(e, '!important') && 10))) {
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
var gx = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case pf:
          t.return = p1(t.value, t.length)
          break
        case s1:
          return Ar([ai(t, { value: B(t.value, '@', '@' + U) })], i)
        case df:
          if (t.length)
            return ex(t.props, function (o) {
              switch (Jw(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Ar([ai(t, { props: [B(o, /:(read-\w+)/, ':' + Ba + '$1')] })], i)
                case '::placeholder':
                  return Ar(
                    [
                      ai(t, { props: [B(o, /:(plac\w+)/, ':' + U + 'input-$1')] }),
                      ai(t, { props: [B(o, /:(plac\w+)/, ':' + Ba + '$1')] }),
                      ai(t, { props: [B(o, /:(plac\w+)/, Re + 'input-$1')] })
                    ],
                    i
                  )
              }
              return ''
            })
      }
  },
  yx = [gx],
  m1 = function (t) {
    var n = t.key
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (v) {
        var k = v.getAttribute('data-emotion')
        k.indexOf(' ') !== -1 &&
          (document.head.appendChild(v), v.setAttribute('data-s', ''))
      })
    }
    var i = t.stylisPlugins || yx,
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
      u = [hx, vx]
    {
      var c,
        f = [
          ux,
          fx(function (v) {
            c.insert(v)
          })
        ],
        p = cx(u.concat(i, f)),
        g = function (k) {
          return Ar(lx(k), p)
        }
      s = function (k, m, d, h) {
        ;(c = d),
          g(k ? k + '{' + m.styles + '}' : m.styles),
          h && (y.inserted[m.name] = !0)
      }
    }
    var y = {
      key: n,
      sheet: new Kw({
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
    return y.sheet.hydrate(l), y
  },
  h1 = { exports: {} },
  H = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Se = typeof Symbol == 'function' && Symbol.for,
  hf = Se ? Symbol.for('react.element') : 60103,
  vf = Se ? Symbol.for('react.portal') : 60106,
  yl = Se ? Symbol.for('react.fragment') : 60107,
  wl = Se ? Symbol.for('react.strict_mode') : 60108,
  xl = Se ? Symbol.for('react.profiler') : 60114,
  kl = Se ? Symbol.for('react.provider') : 60109,
  Sl = Se ? Symbol.for('react.context') : 60110,
  gf = Se ? Symbol.for('react.async_mode') : 60111,
  bl = Se ? Symbol.for('react.concurrent_mode') : 60111,
  Cl = Se ? Symbol.for('react.forward_ref') : 60112,
  El = Se ? Symbol.for('react.suspense') : 60113,
  wx = Se ? Symbol.for('react.suspense_list') : 60120,
  Pl = Se ? Symbol.for('react.memo') : 60115,
  _l = Se ? Symbol.for('react.lazy') : 60116,
  xx = Se ? Symbol.for('react.block') : 60121,
  kx = Se ? Symbol.for('react.fundamental') : 60117,
  Sx = Se ? Symbol.for('react.responder') : 60118,
  bx = Se ? Symbol.for('react.scope') : 60119
function nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case hf:
        switch (((e = e.type), e)) {
          case gf:
          case bl:
          case yl:
          case xl:
          case wl:
          case El:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Sl:
              case Cl:
              case _l:
              case Pl:
              case kl:
                return e
              default:
                return t
            }
        }
      case vf:
        return t
    }
  }
}
function v1(e) {
  return nt(e) === bl
}
H.AsyncMode = gf
H.ConcurrentMode = bl
H.ContextConsumer = Sl
H.ContextProvider = kl
H.Element = hf
H.ForwardRef = Cl
H.Fragment = yl
H.Lazy = _l
H.Memo = Pl
H.Portal = vf
H.Profiler = xl
H.StrictMode = wl
H.Suspense = El
H.isAsyncMode = function (e) {
  return v1(e) || nt(e) === gf
}
H.isConcurrentMode = v1
H.isContextConsumer = function (e) {
  return nt(e) === Sl
}
H.isContextProvider = function (e) {
  return nt(e) === kl
}
H.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === hf
}
H.isForwardRef = function (e) {
  return nt(e) === Cl
}
H.isFragment = function (e) {
  return nt(e) === yl
}
H.isLazy = function (e) {
  return nt(e) === _l
}
H.isMemo = function (e) {
  return nt(e) === Pl
}
H.isPortal = function (e) {
  return nt(e) === vf
}
H.isProfiler = function (e) {
  return nt(e) === xl
}
H.isStrictMode = function (e) {
  return nt(e) === wl
}
H.isSuspense = function (e) {
  return nt(e) === El
}
H.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === yl ||
    e === bl ||
    e === xl ||
    e === wl ||
    e === El ||
    e === wx ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === _l ||
        e.$$typeof === Pl ||
        e.$$typeof === kl ||
        e.$$typeof === Sl ||
        e.$$typeof === Cl ||
        e.$$typeof === kx ||
        e.$$typeof === Sx ||
        e.$$typeof === bx ||
        e.$$typeof === xx))
  )
}
H.typeOf = nt
h1.exports = H
var Cx = h1.exports,
  g1 = Cx,
  Ex = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Px = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  y1 = {}
y1[g1.ForwardRef] = Ex
y1[g1.Memo] = Px
var _x = !0
function Ox(e, t, n) {
  var r = ''
  return (
    n.split(' ').forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ';') : (r += i + ' ')
    }),
    r
  )
}
var w1 = function (t, n, r) {
    var i = t.key + '-' + n.name
    ;(r === !1 || _x === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles)
  },
  x1 = function (t, n, r) {
    w1(t, n, r)
    var i = t.key + '-' + n.name
    if (t.inserted[n.name] === void 0) {
      var o = n
      do t.insert(n === o ? '.' + i : '', o, t.sheet, !0), (o = o.next)
      while (o !== void 0)
    }
  }
function Tx(e) {
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
var Nx = {
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
  Rx = /[A-Z]|^ms/g,
  Ax = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  k1 = function (t) {
    return t.charCodeAt(1) === 45
  },
  Sp = function (t) {
    return t != null && typeof t != 'boolean'
  },
  As = a1(function (e) {
    return k1(e) ? e : e.replace(Rx, '-$&').toLowerCase()
  }),
  bp = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(Ax, function (r, i, o) {
            return (Tt = { name: i, styles: o, next: Tt }), i
          })
    }
    return Nx[t] !== 1 && !k1(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n
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
      return $x(e, t, n)
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
function $x(e, t, n) {
  var r = ''
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Ki(e, t, n[i]) + ';'
  else
    for (var o in n) {
      var a = n[o]
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (r += o + '{' + t[a] + '}')
          : Sp(a) && (r += As(o) + ':' + bp(o, a) + ';')
      else if (
        Array.isArray(a) &&
        typeof a[0] == 'string' &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          Sp(a[l]) && (r += As(o) + ':' + bp(o, a[l]) + ';')
      else {
        var s = Ki(e, t, a)
        switch (o) {
          case 'animation':
          case 'animationName': {
            r += As(o) + ':' + s + ';'
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
  yf = function (t, n, r) {
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
    var c = Tx(o) + s
    return { name: c, styles: o, next: Tt }
  },
  jx = function (t) {
    return t()
  },
  S1 = Pi.useInsertionEffect ? Pi.useInsertionEffect : !1,
  Mx = S1 || jx,
  Ep = S1 || w.useLayoutEffect,
  b1 = w.createContext(typeof HTMLElement < 'u' ? m1({ key: 'css' }) : null),
  Ix = b1.Provider,
  C1 = function (t) {
    return w.forwardRef(function (n, r) {
      var i = w.useContext(b1)
      return t(n, i, r)
    })
  },
  Ol = w.createContext({})
o1()
var Lx = C1(function (e, t) {
  var n = e.styles,
    r = yf([n], void 0, w.useContext(Ol)),
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
        if ((r.next !== void 0 && x1(t, r.next, !0), a.tags.length)) {
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
function E1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return yf(t)
}
var Tl = function () {
    var t = E1.apply(void 0, arguments),
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
  zx = Vw,
  Fx = function (t) {
    return t !== 'theme'
  },
  Pp = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? zx : Fx
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
  Dx = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag
    return (
      w1(n, r, i),
      Mx(function () {
        return x1(n, r, i)
      }),
      null
    )
  },
  Ux = function e(t, n) {
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
        for (var p = c.length, g = 1; g < p; g++) f.push(c[g], c[0][g])
      }
      var y = C1(function (v, k, m) {
        var d = (u && v.as) || i,
          h = '',
          x = [],
          b = v
        if (v.theme == null) {
          b = {}
          for (var E in v) b[E] = v[E]
          b.theme = w.useContext(Ol)
        }
        typeof v.className == 'string'
          ? (h = Ox(k.registered, x, v.className))
          : v.className != null && (h = v.className + ' ')
        var C = yf(f.concat(x), k.registered, b)
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
            w.createElement(Dx, {
              cache: k,
              serialized: C,
              isStringTag: typeof d == 'string'
            }),
            w.createElement(d, j)
          )
        )
      })
      return (
        (y.displayName =
          o !== void 0
            ? o
            : 'Styled(' +
              (typeof i == 'string' ? i : i.displayName || i.name || 'Component') +
              ')'),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = i),
        (y.__emotion_styles = f),
        (y.__emotion_forwardProp = l),
        Object.defineProperty(y, 'toString', {
          value: function () {
            return '.' + a
          }
        }),
        (y.withComponent = function (v, k) {
          return e(v, $({}, n, k, { shouldForwardProp: _p(y, k, !0) })).apply(void 0, f)
        }),
        y
      )
    }
  },
  Bx = [
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
  Bu = Ux.bind()
Bx.forEach(function (e) {
  Bu[e] = Bu(e)
})
let Wu
typeof document == 'object' && (Wu = m1({ key: 'css', prepend: !0 }))
function Wx(e) {
  const { injectFirst: t, children: n } = e
  return t && Wu ? S.jsx(Ix, { value: Wu, children: n }) : n
}
function Vx(e) {
  return e == null || Object.keys(e).length === 0
}
function Hx(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? i => t(Vx(i) ? n : i) : t
  return S.jsx(Lx, { styles: r })
}
function Yx(e, t) {
  return Bu(e, t)
}
const Kx = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
  },
  Gx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: Hx,
        StyledEngineProvider: Wx,
        ThemeContext: Ol,
        css: E1,
        default: Yx,
        internal_processStyles: Kx,
        keyframes: Tl
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Qx = _n(Gx)
function sn(e) {
  if (typeof e != 'object' || e === null) return !1
  const t = Object.getPrototypeOf(e)
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  )
}
function P1(e) {
  if (!sn(e)) return e
  const t = {}
  return (
    Object.keys(e).forEach(n => {
      t[n] = P1(e[n])
    }),
    t
  )
}
function Mt(e, t, n = { clone: !0 }) {
  const r = n.clone ? $({}, e) : e
  return (
    sn(e) &&
      sn(t) &&
      Object.keys(t).forEach(i => {
        i !== '__proto__' &&
          (sn(t[i]) && i in e && sn(e[i])
            ? (r[i] = Mt(e[i], t[i], n))
            : n.clone
            ? (r[i] = sn(t[i]) ? P1(t[i]) : t[i])
            : (r[i] = t[i]))
      }),
    r
  )
}
const Xx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Mt, isPlainObject: sn },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qx = _n(Xx)
function Gi(e) {
  let t = 'https://mui.com/production-error/?code=' + e
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.'
}
const Zx = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Gi }, Symbol.toStringTag, {
    value: 'Module'
  })
)
function uo(e) {
  if (typeof e != 'string') throw new Error(Gi(7))
  return e.charAt(0).toUpperCase() + e.slice(1)
}
const Jx = Object.freeze(
    Object.defineProperty({ __proto__: null, default: uo }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  e3 = _n(Jx)
var _1 = { exports: {} },
  Y = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = Symbol.for('react.element'),
  xf = Symbol.for('react.portal'),
  Nl = Symbol.for('react.fragment'),
  Rl = Symbol.for('react.strict_mode'),
  Al = Symbol.for('react.profiler'),
  $l = Symbol.for('react.provider'),
  jl = Symbol.for('react.context'),
  t3 = Symbol.for('react.server_context'),
  Ml = Symbol.for('react.forward_ref'),
  Il = Symbol.for('react.suspense'),
  Ll = Symbol.for('react.suspense_list'),
  zl = Symbol.for('react.memo'),
  Fl = Symbol.for('react.lazy'),
  n3 = Symbol.for('react.offscreen'),
  O1
O1 = Symbol.for('react.module.reference')
function mt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case wf:
        switch (((e = e.type), e)) {
          case Nl:
          case Al:
          case Rl:
          case Il:
          case Ll:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case t3:
              case jl:
              case Ml:
              case Fl:
              case zl:
              case $l:
                return e
              default:
                return t
            }
        }
      case xf:
        return t
    }
  }
}
Y.ContextConsumer = jl
Y.ContextProvider = $l
Y.Element = wf
Y.ForwardRef = Ml
Y.Fragment = Nl
Y.Lazy = Fl
Y.Memo = zl
Y.Portal = xf
Y.Profiler = Al
Y.StrictMode = Rl
Y.Suspense = Il
Y.SuspenseList = Ll
Y.isAsyncMode = function () {
  return !1
}
Y.isConcurrentMode = function () {
  return !1
}
Y.isContextConsumer = function (e) {
  return mt(e) === jl
}
Y.isContextProvider = function (e) {
  return mt(e) === $l
}
Y.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === wf
}
Y.isForwardRef = function (e) {
  return mt(e) === Ml
}
Y.isFragment = function (e) {
  return mt(e) === Nl
}
Y.isLazy = function (e) {
  return mt(e) === Fl
}
Y.isMemo = function (e) {
  return mt(e) === zl
}
Y.isPortal = function (e) {
  return mt(e) === xf
}
Y.isProfiler = function (e) {
  return mt(e) === Al
}
Y.isStrictMode = function (e) {
  return mt(e) === Rl
}
Y.isSuspense = function (e) {
  return mt(e) === Il
}
Y.isSuspenseList = function (e) {
  return mt(e) === Ll
}
Y.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Nl ||
    e === Al ||
    e === Rl ||
    e === Il ||
    e === Ll ||
    e === n3 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Fl ||
        e.$$typeof === zl ||
        e.$$typeof === $l ||
        e.$$typeof === jl ||
        e.$$typeof === Ml ||
        e.$$typeof === O1 ||
        e.getModuleId !== void 0))
  )
}
Y.typeOf = mt
_1.exports = Y
var Op = _1.exports
const r3 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/
function T1(e) {
  const t = `${e}`.match(r3)
  return (t && t[1]) || ''
}
function N1(e, t = '') {
  return e.displayName || e.name || T1(e) || t
}
function Tp(e, t, n) {
  const r = N1(t)
  return e.displayName || (r !== '' ? `${n}(${r})` : n)
}
function i3(e) {
  if (e != null) {
    if (typeof e == 'string') return e
    if (typeof e == 'function') return N1(e, 'Component')
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
const o3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: i3, getFunctionName: T1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  a3 = _n(o3),
  l3 = ['values', 'unit', 'step'],
  s3 = e => {
    const t = Object.keys(e).map(n => ({ key: n, val: e[n] })) || []
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => $({}, n, { [r.key]: r.val }), {})
    )
  }
function R1(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5
    } = e,
    i = je(e, l3),
    o = s3(t),
    a = Object.keys(o)
  function l(p) {
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == 'number' ? t[p] : p) - r / 100}${n})`
  }
  function u(p, g) {
    const y = a.indexOf(g)
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n}) and (max-width:${
      (y !== -1 && typeof t[a[y]] == 'number' ? t[a[y]] : g) - r / 100
    }${n})`
  }
  function c(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p)
  }
  function f(p) {
    const g = a.indexOf(p)
    return g === 0
      ? l(a[1])
      : g === a.length - 1
      ? s(a[g])
      : u(p, a[a.indexOf(p) + 1]).replace('@media', '@media not all and')
  }
  return $(
    { keys: a, values: o, up: l, down: s, between: u, only: c, not: f, unit: n },
    i
  )
}
const u3 = { borderRadius: 4 }
function bi(e, t) {
  return t ? Mt(e, t, { clone: !1 }) : e
}
const kf = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Np = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: e => `@media (min-width:${kf[e]}px)` }
function Gt(e, t, n) {
  const r = e.theme || {}
  if (Array.isArray(t)) {
    const o = r.breakpoints || Np
    return t.reduce((a, l, s) => ((a[o.up(o.keys[s])] = n(t[s])), a), {})
  }
  if (typeof t == 'object') {
    const o = r.breakpoints || Np
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(o.values || kf).indexOf(l) !== -1) {
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
function c3(e = {}) {
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
function f3(e, t) {
  return e.reduce((n, r) => {
    const i = n[r]
    return (!i || Object.keys(i).length === 0) && delete n[r], n
  }, t)
}
function Dl(e, t, n = !0) {
  if (!t || typeof t != 'string') return null
  if (e && e.vars && n) {
    const r = `vars.${t}`.split('.').reduce((i, o) => (i && i[o] ? i[o] : null), e)
    if (r != null) return r
  }
  return t.split('.').reduce((r, i) => (r && r[i] != null ? r[i] : null), e)
}
function Wa(e, t, n, r = n) {
  let i
  return (
    typeof e == 'function'
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = Dl(e, n) || r),
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
        u = Dl(s, r) || {}
      return Gt(a, l, f => {
        let p = Wa(u, i, f)
        return (
          f === p &&
            typeof f == 'string' &&
            (p = Wa(u, i, `${t}${f === 'default' ? '' : uo(f)}`, f)),
          n === !1 ? p : { [n]: p }
        )
      })
    }
  return (o.propTypes = {}), (o.filterProps = [t]), o
}
function d3(e) {
  const t = {}
  return n => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const p3 = { m: 'margin', p: 'padding' },
  m3 = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  },
  Rp = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  h3 = d3(e => {
    if (e.length > 2)
      if (Rp[e]) e = Rp[e]
      else return [e]
    const [t, n] = e.split(''),
      r = p3[t],
      i = m3[n] || ''
    return Array.isArray(i) ? i.map(o => r + o) : [r + i]
  }),
  Sf = [
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
  bf = [
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
;[...Sf, ...bf]
function co(e, t, n, r) {
  var i
  const o = (i = Dl(e, t, !1)) != null ? i : n
  return typeof o == 'number'
    ? a => (typeof a == 'string' ? a : o * a)
    : Array.isArray(o)
    ? a => (typeof a == 'string' ? a : o[a])
    : typeof o == 'function'
    ? o
    : () => {}
}
function A1(e) {
  return co(e, 'spacing', 8)
}
function fo(e, t) {
  if (typeof t == 'string' || t == null) return t
  const n = Math.abs(t),
    r = e(n)
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`
}
function v3(e, t) {
  return n => e.reduce((r, i) => ((r[i] = fo(t, n)), r), {})
}
function g3(e, t, n, r) {
  if (t.indexOf(n) === -1) return null
  const i = h3(n),
    o = v3(i, r),
    a = e[n]
  return Gt(e, a, o)
}
function $1(e, t) {
  const n = A1(e.theme)
  return Object.keys(e)
    .map(r => g3(e, t, r, n))
    .reduce(bi, {})
}
function ae(e) {
  return $1(e, Sf)
}
ae.propTypes = {}
ae.filterProps = Sf
function le(e) {
  return $1(e, bf)
}
le.propTypes = {}
le.filterProps = bf
function y3(e = 8) {
  if (e.mui) return e
  const t = A1({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map(o => {
          const a = t(o)
          return typeof a == 'number' ? `${a}px` : a
        })
        .join(' ')
  return (n.mui = !0), n
}
function Ul(...e) {
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
const w3 = ht('border', st),
  x3 = ht('borderTop', st),
  k3 = ht('borderRight', st),
  S3 = ht('borderBottom', st),
  b3 = ht('borderLeft', st),
  C3 = ht('borderColor'),
  E3 = ht('borderTopColor'),
  P3 = ht('borderRightColor'),
  _3 = ht('borderBottomColor'),
  O3 = ht('borderLeftColor'),
  T3 = ht('outline', st),
  N3 = ht('outlineColor'),
  Bl = e => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = co(e.theme, 'shape.borderRadius', 4),
        n = r => ({ borderRadius: fo(t, r) })
      return Gt(e, e.borderRadius, n)
    }
    return null
  }
Bl.propTypes = {}
Bl.filterProps = ['borderRadius']
Ul(w3, x3, k3, S3, b3, C3, E3, P3, _3, O3, Bl, T3, N3)
const Wl = e => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = r => ({ gap: fo(t, r) })
    return Gt(e, e.gap, n)
  }
  return null
}
Wl.propTypes = {}
Wl.filterProps = ['gap']
const Vl = e => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = r => ({ columnGap: fo(t, r) })
    return Gt(e, e.columnGap, n)
  }
  return null
}
Vl.propTypes = {}
Vl.filterProps = ['columnGap']
const Hl = e => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = r => ({ rowGap: fo(t, r) })
    return Gt(e, e.rowGap, n)
  }
  return null
}
Hl.propTypes = {}
Hl.filterProps = ['rowGap']
const R3 = fe({ prop: 'gridColumn' }),
  A3 = fe({ prop: 'gridRow' }),
  $3 = fe({ prop: 'gridAutoFlow' }),
  j3 = fe({ prop: 'gridAutoColumns' }),
  M3 = fe({ prop: 'gridAutoRows' }),
  I3 = fe({ prop: 'gridTemplateColumns' }),
  L3 = fe({ prop: 'gridTemplateRows' }),
  z3 = fe({ prop: 'gridTemplateAreas' }),
  F3 = fe({ prop: 'gridArea' })
Ul(Wl, Vl, Hl, R3, A3, $3, j3, M3, I3, L3, z3, F3)
function $r(e, t) {
  return t === 'grey' ? t : e
}
const D3 = fe({ prop: 'color', themeKey: 'palette', transform: $r }),
  U3 = fe({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: $r
  }),
  B3 = fe({ prop: 'backgroundColor', themeKey: 'palette', transform: $r })
Ul(D3, U3, B3)
function Qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const W3 = fe({ prop: 'width', transform: Qe }),
  Cf = e => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = n => {
        var r, i
        const o =
          ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null
            ? void 0
            : r[n]) || kf[n]
        return o
          ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !==
            'px'
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: Qe(n) }
      }
      return Gt(e, e.maxWidth, t)
    }
    return null
  }
Cf.filterProps = ['maxWidth']
const V3 = fe({ prop: 'minWidth', transform: Qe }),
  H3 = fe({ prop: 'height', transform: Qe }),
  Y3 = fe({ prop: 'maxHeight', transform: Qe }),
  K3 = fe({ prop: 'minHeight', transform: Qe })
fe({ prop: 'size', cssProperty: 'width', transform: Qe })
fe({ prop: 'size', cssProperty: 'height', transform: Qe })
const G3 = fe({ prop: 'boxSizing' })
Ul(W3, Cf, V3, H3, Y3, K3, G3)
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
  borderRadius: { themeKey: 'shape.borderRadius', style: Bl },
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
  gap: { style: Wl },
  rowGap: { style: Hl },
  columnGap: { style: Vl },
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
  maxWidth: { style: Cf },
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
function Q3(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t)
  return e.every(r => n.size === Object.keys(r).length)
}
function X3(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function j1() {
  function e(n, r, i, o) {
    const a = { [n]: r, theme: i },
      l = o[n]
    if (!l) return { [n]: r }
    const { cssProperty: s = n, themeKey: u, transform: c, style: f } = l
    if (r == null) return null
    if (u === 'typography' && r === 'inherit') return { [n]: r }
    const p = Dl(i, u) || {}
    return f
      ? f(a)
      : Gt(a, r, y => {
          let v = Wa(p, c, y)
          return (
            y === v &&
              typeof y == 'string' &&
              (v = Wa(p, c, `${n}${y === 'default' ? '' : uo(y)}`, y)),
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
      const c = c3(o.breakpoints),
        f = Object.keys(c)
      let p = c
      return (
        Object.keys(u).forEach(g => {
          const y = X3(u[g], o)
          if (y != null)
            if (typeof y == 'object')
              if (a[g]) p = bi(p, e(g, y, o, a))
              else {
                const v = Gt({ theme: o }, y, k => ({ [g]: k }))
                Q3(v, y) ? (p[g] = t({ sx: y, theme: o })) : (p = bi(p, v))
              }
            else p = bi(p, e(g, y, o, a))
        }),
        f3(f, p)
      )
    }
    return Array.isArray(i) ? i.map(l) : l(i)
  }
  return t
}
const Yl = j1()
Yl.filterProps = ['sx']
function M1(e, t) {
  const n = this
  return n.vars && typeof n.getColorSchemeSelector == 'function'
    ? { [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t }
    : n.palette.mode === e
    ? t
    : {}
}
const q3 = ['breakpoints', 'palette', 'spacing', 'shape']
function Ef(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    a = je(e, q3),
    l = R1(n),
    s = y3(i)
  let u = Mt(
    {
      breakpoints: l,
      direction: 'ltr',
      components: {},
      palette: $({ mode: 'light' }, r),
      spacing: s,
      shape: $({}, u3, o)
    },
    a
  )
  return (
    (u.applyStyles = M1),
    (u = t.reduce((c, f) => Mt(c, f), u)),
    (u.unstable_sxConfig = $({}, po, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Yl({ sx: f, theme: this })
    }),
    u
  )
}
const Z3 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Ef,
        private_createBreakpoints: R1,
        unstable_applyStyles: M1
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  J3 = _n(Z3),
  e5 = ['sx'],
  t5 = e => {
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
function I1(e) {
  const { sx: t } = e,
    n = je(e, e5),
    { systemProps: r, otherProps: i } = t5(n)
  let o
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == 'function'
      ? (o = (...a) => {
          const l = t(...a)
          return sn(l) ? $({}, r, l) : r
        })
      : (o = $({}, r, t)),
    $({}, i, { sx: o })
  )
}
const n5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Yl,
        extendSxProp: I1,
        unstable_createStyleFunctionSx: j1,
        unstable_defaultSxConfig: po
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  r5 = _n(n5)
var Gr = i1
Object.defineProperty(lo, '__esModule', { value: !0 })
var i5 = (lo.default = g5)
lo.shouldForwardProp = fa
lo.systemDefaultTheme = void 0
var it = Gr(o1()),
  Vu = Gr(Bw()),
  Ap = f5(Qx),
  o5 = qx
Gr(e3)
Gr(a3)
var a5 = Gr(J3),
  l5 = Gr(r5)
const s5 = ['ownerState'],
  u5 = ['variants'],
  c5 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver']
function L1(e) {
  if (typeof WeakMap != 'function') return null
  var t = new WeakMap(),
    n = new WeakMap()
  return (L1 = function (r) {
    return r ? n : t
  })(e)
}
function f5(e, t) {
  if (e && e.__esModule) return e
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e }
  var n = L1(t)
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
function d5(e) {
  return Object.keys(e).length === 0
}
function p5(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96
}
function fa(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
const m5 = (lo.systemDefaultTheme = (0, a5.default)()),
  h5 = e => e && e.charAt(0).toLowerCase() + e.slice(1)
function Fo({ defaultTheme: e, theme: t, themeId: n }) {
  return d5(t) ? e : t[n] || t
}
function v5(e) {
  return e ? (t, n) => n[e] : null
}
function da(e, t) {
  let { ownerState: n } = t,
    r = (0, Vu.default)(t, s5)
  const i = typeof e == 'function' ? e((0, it.default)({ ownerState: n }, r)) : e
  if (Array.isArray(i))
    return i.flatMap(o => da(o, (0, it.default)({ ownerState: n }, r)))
  if (i && typeof i == 'object' && Array.isArray(i.variants)) {
    const { variants: o = [] } = i
    let l = (0, Vu.default)(i, u5)
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
function g5(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = m5,
      rootShouldForwardProp: r = fa,
      slotShouldForwardProp: i = fa
    } = e,
    o = a =>
      (0, l5.default)(
        (0, it.default)({}, a, {
          theme: Fo((0, it.default)({}, a, { defaultTheme: n, themeId: t }))
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
          overridesResolver: p = v5(h5(u))
        } = l,
        g = (0, Vu.default)(l, c5),
        y = c !== void 0 ? c : (u && u !== 'Root' && u !== 'root') || !1,
        v = f || !1
      let k,
        m = fa
      u === 'Root' || u === 'root' ? (m = r) : u ? (m = i) : p5(a) && (m = void 0)
      const d = (0, Ap.default)(
          a,
          (0, it.default)({ shouldForwardProp: m, label: k }, g)
        ),
        h = b =>
          (typeof b == 'function' && b.__emotion_real !== b) || (0, o5.isPlainObject)(b)
            ? E =>
                da(
                  b,
                  (0, it.default)({}, E, {
                    theme: Fo({ theme: E.theme, defaultTheme: n, themeId: t })
                  })
                )
            : b,
        x = (b, ...E) => {
          let C = h(b)
          const O = E ? E.map(h) : []
          s &&
            p &&
            O.push(W => {
              const K = Fo((0, it.default)({}, W, { defaultTheme: n, themeId: t }))
              if (!K.components || !K.components[s] || !K.components[s].styleOverrides)
                return null
              const pe = K.components[s].styleOverrides,
                Oe = {}
              return (
                Object.entries(pe).forEach(([vt, Me]) => {
                  Oe[vt] = da(Me, (0, it.default)({}, W, { theme: K }))
                }),
                p(W, Oe)
              )
            }),
            s &&
              !y &&
              O.push(W => {
                var K
                const pe = Fo((0, it.default)({}, W, { defaultTheme: n, themeId: t })),
                  Oe =
                    pe == null || (K = pe.components) == null || (K = K[s]) == null
                      ? void 0
                      : K.variants
                return da({ variants: Oe }, (0, it.default)({}, W, { theme: pe }))
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
  y5 = () => {
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
  w5 = y5(),
  x5 = {
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
  const r = x5[t]
  return r ? `${n}-${r}` : `${w5.generate(e)}-${t}`
}
function k5(e, t) {
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
const S5 = _n(Zx)
function b5(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n))
}
const C5 = Object.freeze(
    Object.defineProperty({ __proto__: null, default: b5 }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  E5 = _n(C5)
var z1 = i1
Object.defineProperty(de, '__esModule', { value: !0 })
var jp = (de.alpha = B1)
de.blend = z5
de.colorChannel = void 0
var P5 = (de.darken = _f)
de.decomposeColor = pt
de.emphasize = W1
var _5 = (de.getContrastRatio = $5)
de.getLuminance = Va
de.hexToRgb = F1
de.hslToRgb = U1
var O5 = (de.lighten = Of)
de.private_safeAlpha = j5
de.private_safeColorChannel = void 0
de.private_safeDarken = M5
de.private_safeEmphasize = L5
de.private_safeLighten = I5
de.recomposeColor = Qr
de.rgbToHex = A5
var Mp = z1(S5),
  T5 = z1(E5)
function Pf(e, t = 0, n = 1) {
  return (0, T5.default)(e, t, n)
}
function F1(e) {
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
function N5(e) {
  const t = e.toString(16)
  return t.length === 1 ? `0${t}` : t
}
function pt(e) {
  if (e.type) return e
  if (e.charAt(0) === '#') return pt(F1(e))
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
const D1 = e => {
  const t = pt(e)
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf('hsl') !== -1 && r !== 0 ? `${n}%` : n))
    .join(' ')
}
de.colorChannel = D1
const R5 = (e, t) => {
  try {
    return D1(e)
  } catch {
    return e
  }
}
de.private_safeColorChannel = R5
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
function A5(e) {
  if (e.indexOf('#') === 0) return e
  const { values: t } = pt(e)
  return `#${t.map((n, r) => N5(r === 3 ? Math.round(255 * n) : n)).join('')}`
}
function U1(e) {
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
function Va(e) {
  e = pt(e)
  let t = e.type === 'hsl' || e.type === 'hsla' ? pt(U1(e)).values : e.values
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
function $5(e, t) {
  const n = Va(e),
    r = Va(t)
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
}
function B1(e, t) {
  return (
    (e = pt(e)),
    (t = Pf(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Qr(e)
  )
}
function j5(e, t, n) {
  try {
    return B1(e, t)
  } catch {
    return e
  }
}
function _f(e, t) {
  if (((e = pt(e)), (t = Pf(t)), e.type.indexOf('hsl') !== -1)) e.values[2] *= 1 - t
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
  return Qr(e)
}
function M5(e, t, n) {
  try {
    return _f(e, t)
  } catch {
    return e
  }
}
function Of(e, t) {
  if (((e = pt(e)), (t = Pf(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
  return Qr(e)
}
function I5(e, t, n) {
  try {
    return Of(e, t)
  } catch {
    return e
  }
}
function W1(e, t = 0.15) {
  return Va(e) > 0.5 ? _f(e, t) : Of(e, t)
}
function L5(e, t, n) {
  try {
    return W1(e, t)
  } catch {
    return e
  }
}
function z5(e, t, n, r = 1) {
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
  F5 = {
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
  D5 = ['mode', 'contrastThreshold', 'tonalOffset'],
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
  $s = {
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
      ? (e.light = O5(e.main, i))
      : t === 'dark' && (e.dark = P5(e.main, o)))
}
function U5(e = 'light') {
  return e === 'dark'
    ? { main: ar[200], light: ar[50], dark: ar[400] }
    : { main: ar[700], light: ar[400], dark: ar[800] }
}
function B5(e = 'light') {
  return e === 'dark'
    ? { main: ir[200], light: ir[50], dark: ir[400] }
    : { main: ir[500], light: ir[300], dark: ir[700] }
}
function W5(e = 'light') {
  return e === 'dark'
    ? { main: or[500], light: or[300], dark: or[700] }
    : { main: or[700], light: or[400], dark: or[800] }
}
function V5(e = 'light') {
  return e === 'dark'
    ? { main: lr[400], light: lr[300], dark: lr[700] }
    : { main: lr[700], light: lr[500], dark: lr[900] }
}
function H5(e = 'light') {
  return e === 'dark'
    ? { main: sr[400], light: sr[300], dark: sr[700] }
    : { main: sr[800], light: sr[500], dark: sr[900] }
}
function Y5(e = 'light') {
  return e === 'dark'
    ? { main: li[400], light: li[300], dark: li[700] }
    : { main: '#ed6c02', light: li[500], dark: li[900] }
}
function K5(e) {
  const { mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2 } = e,
    i = je(e, D5),
    o = e.primary || U5(t),
    a = e.secondary || B5(t),
    l = e.error || W5(t),
    s = e.info || V5(t),
    u = e.success || H5(t),
    c = e.warning || Y5(t)
  function f(v) {
    return _5(v, $s.text.primary) >= n ? $s.text.primary : Ip.text.primary
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
    g = { dark: $s, light: Ip }
  return Mt(
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
        grey: F5,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: p,
        tonalOffset: r
      },
      g[t]
    ),
    i
  )
}
const G5 = [
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
function Q5(e) {
  return Math.round(e * 1e5) / 1e5
}
const zp = { textTransform: 'uppercase' },
  Fp = '"Roboto", "Helvetica", "Arial", sans-serif'
function X5(e, t) {
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
    p = je(n, G5),
    g = i / 14,
    y = f || (m => `${(m / u) * g}rem`),
    v = (m, d, h, x, b) =>
      $(
        { fontFamily: r, fontWeight: m, fontSize: y(d), lineHeight: h },
        r === Fp ? { letterSpacing: `${Q5(x / d)}em` } : {},
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
  return Mt(
    $(
      {
        htmlFontSize: u,
        pxToRem: y,
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
const q5 = 0.2,
  Z5 = 0.14,
  J5 = 0.12
function ee(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${q5})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Z5})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${J5})`
  ].join(',')
}
const e4 = [
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
  t4 = ['duration', 'easing', 'delay'],
  n4 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  r4 = {
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
function i4(e) {
  if (!e) return 0
  const t = e / 36
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10)
}
function o4(e) {
  const t = $({}, n4, e.easing),
    n = $({}, r4, e.duration)
  return $(
    {
      getAutoHeightDuration: i4,
      create: (i = ['all'], o = {}) => {
        const { duration: a = n.standard, easing: l = t.easeInOut, delay: s = 0 } = o
        return (
          je(o, t4),
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
const a4 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  l4 = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape'
  ]
function s4(e = {}, ...t) {
  const { mixins: n = {}, palette: r = {}, transitions: i = {}, typography: o = {} } = e,
    a = je(e, l4)
  if (e.vars) throw new Error(Gi(18))
  const l = K5(r),
    s = Ef(e)
  let u = Mt(s, {
    mixins: k5(s.breakpoints, n),
    palette: l,
    shadows: e4.slice(),
    typography: X5(l, o),
    transitions: o4(i),
    zIndex: $({}, a4)
  })
  return (
    (u = Mt(u, a)),
    (u = t.reduce((c, f) => Mt(c, f), u)),
    (u.unstable_sxConfig = $({}, po, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Yl({ sx: f, theme: this })
    }),
    u
  )
}
const V1 = s4(),
  H1 = '$$material'
function u4(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
const c4 = e => u4(e) && e !== 'classes',
  It = i5({ themeId: H1, defaultTheme: V1, rootShouldForwardProp: c4 })
function Y1(e, t) {
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
                n[r][a] = Y1(i[a], o[a])
              }))
      } else n[r] === void 0 && (n[r] = e[r])
    }),
    n
  )
}
function f4(e) {
  const { theme: t, name: n, props: r } = e
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps
    ? r
    : Y1(t.components[n].defaultProps, r)
}
function d4(e) {
  return Object.keys(e).length === 0
}
function p4(e = null) {
  const t = w.useContext(Ol)
  return !t || d4(t) ? e : t
}
const m4 = Ef()
function h4(e = m4) {
  return p4(e)
}
function v4({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = h4(n)
  return r && (i = i[r] || i), f4({ theme: i, name: t, props: e })
}
function An({ props: e, name: t }) {
  return v4({ props: e, name: t, defaultTheme: V1, themeId: H1 })
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
const g4 = typeof window < 'u' ? w.useLayoutEffect : w.useEffect
function y4(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t)
}
function Do(e) {
  const t = w.useRef(e)
  return (
    g4(() => {
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
              y4(n, t)
            })
          },
    e
  )
}
const Wp = {}
function w4(e, t) {
  const n = w.useRef(Wp)
  return n.current === Wp && (n.current = e(t)), n
}
const x4 = []
function k4(e) {
  w.useEffect(e, x4)
}
class Kl {
  constructor() {
    ;(this.currentId = null),
      (this.clear = () => {
        this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null))
      }),
      (this.disposeEffect = () => this.clear)
  }
  static create() {
    return new Kl()
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        ;(this.currentId = null), n()
      }, t))
  }
}
function S4() {
  const e = w4(Kl.create).current
  return k4(e.disposeEffect), e
}
let Gl = !0,
  Hu = !1
const b4 = new Kl(),
  C4 = {
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
function E4(e) {
  const { type: t, tagName: n } = e
  return !!(
    (n === 'INPUT' && C4[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  )
}
function P4(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Gl = !0)
}
function js() {
  Gl = !1
}
function _4() {
  this.visibilityState === 'hidden' && Hu && (Gl = !0)
}
function O4(e) {
  e.addEventListener('keydown', P4, !0),
    e.addEventListener('mousedown', js, !0),
    e.addEventListener('pointerdown', js, !0),
    e.addEventListener('touchstart', js, !0),
    e.addEventListener('visibilitychange', _4, !0)
}
function T4(e) {
  const { target: t } = e
  try {
    return t.matches(':focus-visible')
  } catch {}
  return Gl || E4(t)
}
function N4() {
  const e = w.useCallback(i => {
      i != null && O4(i.ownerDocument)
    }, []),
    t = w.useRef(!1)
  function n() {
    return t.current
      ? ((Hu = !0),
        b4.start(100, () => {
          Hu = !1
        }),
        (t.current = !1),
        !0)
      : !1
  }
  function r(i) {
    return T4(i) ? ((t.current = !0), !0) : !1
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e }
}
function R4(e) {
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
const A4 = ['className', 'component', 'elevation', 'square', 'variant'],
  $4 = e => {
    const { square: t, elevation: n, variant: r, classes: i } = e,
      o = { root: ['root', r, !t && 'rounded', r === 'elevation' && `elevation${n}`] }
    return er(o, R4, i)
  },
  j4 = It('div', {
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
  M4 = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiPaper' }),
      {
        className: i,
        component: o = 'div',
        elevation: a = 1,
        square: l = !1,
        variant: s = 'elevation'
      } = r,
      u = je(r, A4),
      c = $({}, r, { component: o, elevation: a, square: l, variant: s }),
      f = $4(c)
    return S.jsx(j4, $({ as: o, ownerState: c, className: Ce(f.root, i), ref: n }, u))
  })
function I4(e) {
  return Rn('MuiCard', e)
}
$n('MuiCard', ['root'])
const L4 = ['className', 'raised'],
  z4 = e => {
    const { classes: t } = e
    return er({ root: ['root'] }, I4, t)
  },
  F4 = It(M4, { name: 'MuiCard', slot: 'Root', overridesResolver: (e, t) => t.root })(
    () => ({ overflow: 'hidden' })
  ),
  D4 = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiCard' }),
      { className: i, raised: o = !1 } = r,
      a = je(r, L4),
      l = $({}, r, { raised: o }),
      s = z4(l)
    return S.jsx(
      F4,
      $({ className: Ce(s.root, i), elevation: o ? 8 : void 0, ref: n, ownerState: l }, a)
    )
  })
function U4(e) {
  return Rn('MuiCardContent', e)
}
$n('MuiCardContent', ['root'])
const B4 = ['className', 'component'],
  W4 = e => {
    const { classes: t } = e
    return er({ root: ['root'] }, U4, t)
  },
  V4 = It('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ padding: 16, '&:last-child': { paddingBottom: 24 } })),
  H4 = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiCardContent' }),
      { className: i, component: o = 'div' } = r,
      a = je(r, B4),
      l = $({}, r, { component: o }),
      s = W4(l)
    return S.jsx(V4, $({ as: o, className: Ce(s.root, i), ownerState: l, ref: n }, a))
  })
function Y4(e) {
  return Rn('MuiCardMedia', e)
}
$n('MuiCardMedia', ['root', 'media', 'img'])
const K4 = ['children', 'className', 'component', 'image', 'src', 'style'],
  G4 = e => {
    const { classes: t, isMediaComponent: n, isImageComponent: r } = e
    return er({ root: ['root', n && 'media', r && 'img'] }, Y4, t)
  },
  Q4 = It('div', {
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
  X4 = ['video', 'audio', 'picture', 'iframe', 'img'],
  q4 = ['picture', 'img'],
  Z4 = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiCardMedia' }),
      { children: i, className: o, component: a = 'div', image: l, src: s, style: u } = r,
      c = je(r, K4),
      f = X4.indexOf(a) !== -1,
      p = !f && l ? $({ backgroundImage: `url("${l}")` }, u) : u,
      g = $({}, r, {
        component: a,
        isMediaComponent: f,
        isImageComponent: q4.indexOf(a) !== -1
      }),
      y = G4(g)
    return S.jsx(
      Q4,
      $(
        {
          className: Ce(y.root, o),
          as: a,
          role: !f && l ? 'img' : void 0,
          ref: n,
          style: p,
          ownerState: g,
          src: f ? l || s : void 0
        },
        c,
        { children: i }
      )
    )
  })
function J4(e) {
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
const ek = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping'
  ],
  tk = e => {
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
    return er(l, J4, a)
  },
  nk = It('span', {
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
  Vp = {
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
  rk = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  },
  ik = e => rk[e] || e,
  Hp = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiTypography' }),
      i = ik(r.color),
      o = I1($({}, r, { color: i })),
      {
        align: a = 'inherit',
        className: l,
        component: s,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: p = 'body1',
        variantMapping: g = Vp
      } = o,
      y = je(o, ek),
      v = $({}, o, {
        align: a,
        color: i,
        className: l,
        component: s,
        gutterBottom: u,
        noWrap: c,
        paragraph: f,
        variant: p,
        variantMapping: g
      }),
      k = s || (f ? 'p' : g[p] || Vp[p]) || 'span',
      m = tk(v)
    return S.jsx(nk, $({ as: k, ref: n, ownerState: v, className: Ce(m.root, l) }, y))
  })
function Yu(e, t) {
  return (
    (Yu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r
        }),
    Yu(e, t)
  )
}
function ok(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Yu(e, t)
}
const Yp = Q.createContext(null)
function ak(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function Tf(e, t) {
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
function lk(e, t) {
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
function sk(e, t) {
  return Tf(e.children, function (n) {
    return w.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Fn(n, 'appear', e),
      enter: Fn(n, 'enter', e),
      exit: Fn(n, 'exit', e)
    })
  })
}
function uk(e, t, n) {
  var r = Tf(e.children),
    i = lk(t, r)
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
var ck =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    },
  fk = {
    component: 'div',
    childFactory: function (t) {
      return t
    }
  },
  Nf = (function (e) {
    ok(t, e)
    function t(r, i) {
      var o
      o = e.call(this, r, i) || this
      var a = o.handleExited.bind(ak(o))
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
        return { children: s ? sk(i, l) : uk(i, a, l), firstRender: !1 }
      }),
      (n.handleExited = function (i, o) {
        var a = Tf(this.props.children)
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
          u = ck(this.state.children).map(a)
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
Nf.propTypes = {}
Nf.defaultProps = fk
function dk(e) {
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
    g = { width: a, height: a, top: -(a / 2) + o, left: -(a / 2) + i },
    y = Ce(n.child, c && n.childLeaving, r && n.childPulsate)
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
    S.jsx('span', { className: p, style: g, children: S.jsx('span', { className: y }) })
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
  pk = ['center', 'classes', 'className']
let Ql = e => e,
  Kp,
  Gp,
  Qp,
  Xp
const Ku = 550,
  mk = 80,
  hk = Tl(
    Kp ||
      (Kp = Ql`
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
  vk = Tl(
    Gp ||
      (Gp = Ql`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  gk = Tl(
    Qp ||
      (Qp = Ql`
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
  yk = It('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  wk = It(dk, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    Xp ||
      (Xp = Ql`
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
    hk,
    Ku,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ot.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    ot.child,
    ot.childLeaving,
    vk,
    Ku,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ot.childPulsate,
    gk,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  xk = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiTouchRipple' }),
      { center: i = !1, classes: o = {}, className: a } = r,
      l = je(r, pk),
      [s, u] = w.useState([]),
      c = w.useRef(0),
      f = w.useRef(null)
    w.useEffect(() => {
      f.current && (f.current(), (f.current = null))
    }, [s])
    const p = w.useRef(!1),
      g = S4(),
      y = w.useRef(null),
      v = w.useRef(null),
      k = w.useCallback(
        x => {
          const { pulsate: b, rippleX: E, rippleY: C, rippleSize: O, cb: j } = x
          u(A => [
            ...A,
            S.jsx(
              wk,
              {
                classes: {
                  ripple: Ce(o.ripple, ot.ripple),
                  rippleVisible: Ce(o.rippleVisible, ot.rippleVisible),
                  ripplePulsate: Ce(o.ripplePulsate, ot.ripplePulsate),
                  child: Ce(o.child, ot.child),
                  childLeaving: Ce(o.childLeaving, ot.childLeaving),
                  childPulsate: Ce(o.childPulsate, ot.childPulsate)
                },
                timeout: Ku,
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
            ? y.current === null &&
              ((y.current = () => {
                k({ pulsate: C, rippleX: K, rippleY: pe, rippleSize: Oe, cb: E })
              }),
              g.start(mk, () => {
                y.current && (y.current(), (y.current = null))
              }))
            : k({ pulsate: C, rippleX: K, rippleY: pe, rippleSize: Oe, cb: E })
        },
        [i, k, g]
      ),
      d = w.useCallback(() => {
        m({}, { pulsate: !0 })
      }, [m]),
      h = w.useCallback(
        (x, b) => {
          if ((g.clear(), (x == null ? void 0 : x.type) === 'touchend' && y.current)) {
            y.current(),
              (y.current = null),
              g.start(0, () => {
                h(x, b)
              })
            return
          }
          ;(y.current = null), u(E => (E.length > 0 ? E.slice(1) : E)), (f.current = b)
        },
        [g]
      )
    return (
      w.useImperativeHandle(n, () => ({ pulsate: d, start: m, stop: h }), [d, m, h]),
      S.jsx(
        yk,
        $({ className: Ce(ot.root, o.root, a), ref: v }, l, {
          children: S.jsx(Nf, { component: null, exit: !0, children: s })
        })
      )
    )
  })
function kk(e) {
  return Rn('MuiButtonBase', e)
}
const Sk = $n('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  bk = [
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
  Ck = e => {
    const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: i } = e,
      a = er({ root: ['root', t && 'disabled', n && 'focusVisible'] }, kk, i)
    return n && r && (a.root += ` ${r}`), a
  },
  Ek = It('button', {
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
    [`&.${Sk.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' }
  }),
  Pk = w.forwardRef(function (t, n) {
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
        LinkComponent: g = 'a',
        onBlur: y,
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
      Me = je(r, bk),
      Lt = w.useRef(null),
      _ = w.useRef(null),
      M = Bp(_, Oe),
      { isFocusVisibleRef: I, onFocus: ne, onBlur: me, ref: tr } = N4(),
      [Ie, en] = w.useState(!1)
    u && Ie && en(!1),
      w.useImperativeHandle(
        i,
        () => ({
          focusVisible: () => {
            en(!0), Lt.current.focus()
          }
        }),
        []
      )
    const [gt, nr] = w.useState(!1)
    w.useEffect(() => {
      nr(!0)
    }, [])
    const bv = gt && !c && !u
    w.useEffect(() => {
      Ie && p && !c && gt && _.current.pulsate()
    }, [c, p, Ie, gt])
    function zt(L, Hf, zv = f) {
      return Do(Yf => (Hf && Hf(Yf), !zv && _.current && _.current[L](Yf), !0))
    }
    const Cv = zt('start', E),
      Ev = zt('stop', k),
      Pv = zt('stop', m),
      _v = zt('stop', O),
      Ov = zt('stop', L => {
        Ie && L.preventDefault(), C && C(L)
      }),
      Tv = zt('start', W),
      Nv = zt('stop', j),
      Rv = zt('stop', A),
      Av = zt(
        'stop',
        L => {
          me(L), I.current === !1 && en(!1), y && y(L)
        },
        !1
      ),
      $v = Do(L => {
        Lt.current || (Lt.current = L.currentTarget),
          ne(L),
          I.current === !0 && (en(!0), h && h(L)),
          d && d(L)
      }),
      es = () => {
        const L = Lt.current
        return s && s !== 'button' && !(L.tagName === 'A' && L.href)
      },
      ts = w.useRef(!1),
      jv = Do(L => {
        p &&
          !ts.current &&
          Ie &&
          _.current &&
          L.key === ' ' &&
          ((ts.current = !0),
          _.current.stop(L, () => {
            _.current.start(L)
          })),
          L.target === L.currentTarget && es() && L.key === ' ' && L.preventDefault(),
          x && x(L),
          L.target === L.currentTarget &&
            es() &&
            L.key === 'Enter' &&
            !u &&
            (L.preventDefault(), v && v(L))
      }),
      Mv = Do(L => {
        p &&
          L.key === ' ' &&
          _.current &&
          Ie &&
          !L.defaultPrevented &&
          ((ts.current = !1),
          _.current.stop(L, () => {
            _.current.pulsate(L)
          })),
          b && b(L),
          v &&
            L.target === L.currentTarget &&
            es() &&
            L.key === ' ' &&
            !L.defaultPrevented &&
            v(L)
      })
    let yo = s
    yo === 'button' && (Me.href || Me.to) && (yo = g)
    const qr = {}
    yo === 'button'
      ? ((qr.type = vt === void 0 ? 'button' : vt), (qr.disabled = u))
      : (!Me.href && !Me.to && (qr.role = 'button'), u && (qr['aria-disabled'] = u))
    const Iv = Bp(n, tr, Lt),
      Vf = $({}, r, {
        centerRipple: o,
        component: s,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: p,
        tabIndex: K,
        focusVisible: Ie
      }),
      Lv = Ck(Vf)
    return S.jsxs(
      Ek,
      $(
        {
          as: yo,
          className: Ce(Lv.root, l),
          ownerState: Vf,
          onBlur: Av,
          onClick: v,
          onContextMenu: Ev,
          onFocus: $v,
          onKeyDown: jv,
          onKeyUp: Mv,
          onMouseDown: Cv,
          onMouseLeave: Ov,
          onMouseUp: _v,
          onDragLeave: Pv,
          onTouchEnd: Nv,
          onTouchMove: Rv,
          onTouchStart: Tv,
          ref: Iv,
          tabIndex: u ? -1 : K,
          type: vt
        },
        qr,
        Me,
        { children: [a, bv ? S.jsx(xk, $({ ref: M, center: o }, pe)) : null] }
      )
    )
  })
function _k(e) {
  return Rn('MuiCardActionArea', e)
}
const Ms = $n('MuiCardActionArea', ['root', 'focusVisible', 'focusHighlight']),
  Ok = ['children', 'className', 'focusVisibleClassName'],
  Tk = e => {
    const { classes: t } = e
    return er({ root: ['root'], focusHighlight: ['focusHighlight'] }, _k, t)
  },
  Nk = It(Pk, {
    name: 'MuiCardActionArea',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(({ theme: e }) => ({
    display: 'block',
    textAlign: 'inherit',
    borderRadius: 'inherit',
    width: '100%',
    [`&:hover .${Ms.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.hoverOpacity,
      '@media (hover: none)': { opacity: 0 }
    },
    [`&.${Ms.focusVisible} .${Ms.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.focusOpacity
    }
  })),
  Rk = It('span', {
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
  Ak = w.forwardRef(function (t, n) {
    const r = An({ props: t, name: 'MuiCardActionArea' }),
      { children: i, className: o, focusVisibleClassName: a } = r,
      l = je(r, Ok),
      s = r,
      u = Tk(s)
    return S.jsxs(
      Nk,
      $(
        {
          className: Ce(u.root, o),
          focusVisibleClassName: Ce(a, u.focusVisible),
          ref: n,
          ownerState: s
        },
        l,
        { children: [i, S.jsx(Rk, { className: u.focusHighlight, ownerState: s })] }
      )
    )
  })
function Is({ title: e, description: t, imageUrl: n, url: r }) {
  const i = () => {
    window.location.href = r
  }
  return S.jsx(D4, {
    sx: { backgroundColor: 'transparent', color: 'white' },
    children: S.jsxs(Ak, {
      onClick: i,
      children: [
        S.jsx(Z4, { component: 'img', height: '140', image: n }),
        S.jsxs(H4, {
          children: [
            S.jsx(Hp, { gutterBottom: !0, variant: 'h5', component: 'div', children: e }),
            S.jsx(Hp, { variant: 'body2', color: 'white', children: t })
          ]
        })
      ]
    })
  })
}
const $k = '../assets/firstproject-Fe1g7Z5x.jpeg',
  jk = '../assets/secondproject-D-SZwtzC.jpeg',
  Mk = '../assets/finalproject-xn2OUdqU.jpeg',
  Ik = () =>
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
function Lk(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function zk(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function Fk(e, t, n) {
  return (
    t && zk(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
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
function Rf(e, t) {
  return Uk(e) || Wk(e, t) || K1(e, t) || Hk()
}
function mo(e) {
  return Dk(e) || Bk(e) || K1(e) || Vk()
}
function Dk(e) {
  if (Array.isArray(e)) return Gu(e)
}
function Uk(e) {
  if (Array.isArray(e)) return e
}
function Bk(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e)
}
function Wk(e, t) {
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
function K1(e, t) {
  if (e) {
    if (typeof e == 'string') return Gu(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Gu(e, t)
  }
}
function Gu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function Vk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Hk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Zp = function () {},
  Af = {},
  G1 = {},
  Q1 = null,
  X1 = { mark: Zp, measure: Zp }
try {
  typeof window < 'u' && (Af = window),
    typeof document < 'u' && (G1 = document),
    typeof MutationObserver < 'u' && (Q1 = MutationObserver),
    typeof performance < 'u' && (X1 = performance)
} catch {}
var Yk = Af.navigator || {},
  Jp = Yk.userAgent,
  em = Jp === void 0 ? '' : Jp,
  Cn = Af,
  J = G1,
  tm = Q1,
  Uo = X1
Cn.document
var Jt =
    !!J.documentElement &&
    !!J.head &&
    typeof J.addEventListener == 'function' &&
    typeof J.createElement == 'function',
  q1 = ~em.indexOf('MSIE') || ~em.indexOf('Trident/'),
  Bo,
  Wo,
  Vo,
  Ho,
  Yo,
  Qt = '___FONT_AWESOME___',
  Qu = 16,
  Z1 = 'fa',
  J1 = 'svg-inline--fa',
  Xn = 'data-fa-i2svg',
  Xu = 'data-fa-pseudo-element',
  Kk = 'data-fa-pseudo-element-pending',
  $f = 'data-prefix',
  jf = 'data-icon',
  nm = 'fontawesome-i2svg',
  Gk = 'async',
  Qk = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  ev = (function () {
    try {
      return !0
    } catch {
      return !1
    }
  })(),
  q = 'classic',
  ue = 'sharp',
  Mf = [q, ue]
function ho(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[q]
    }
  })
}
var Xi = ho(
    ((Bo = {}),
    we(Bo, q, {
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
    we(Bo, ue, {
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
    Bo)
  ),
  qi = ho(
    ((Wo = {}),
    we(Wo, q, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak'
    }),
    we(Wo, ue, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    Wo)
  ),
  Zi = ho(
    ((Vo = {}),
    we(Vo, q, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin'
    }),
    we(Vo, ue, {
      fass: 'fa-solid',
      fasr: 'fa-regular',
      fasl: 'fa-light',
      fast: 'fa-thin'
    }),
    Vo)
  ),
  Xk = ho(
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
  qk = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  tv = 'fa-layers-text',
  Zk =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Jk = ho(
    ((Yo = {}),
    we(Yo, q, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    we(Yo, ue, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    Yo)
  ),
  nv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  eS = nv.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  tS = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  Dn = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  },
  Ji = new Set()
Object.keys(qi[q]).map(Ji.add.bind(Ji))
Object.keys(qi[ue]).map(Ji.add.bind(Ji))
var nS = []
    .concat(Mf, mo(Ji), [
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
      nv.map(function (e) {
        return ''.concat(e, 'x')
      })
    )
    .concat(
      eS.map(function (e) {
        return 'w-'.concat(e)
      })
    ),
  Ci = Cn.FontAwesomeConfig || {}
function rS(e) {
  var t = J.querySelector('script[' + e + ']')
  if (t) return t.getAttribute(e)
}
function iS(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e
}
if (J && typeof J.querySelector == 'function') {
  var oS = [
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
  oS.forEach(function (e) {
    var t = Rf(e, 2),
      n = t[0],
      r = t[1],
      i = iS(rS(n))
    i != null && (Ci[r] = i)
  })
}
var rv = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: Z1,
  replacementClass: J1,
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
var Wr = T(T({}, rv), Ci)
Wr.autoReplaceSvg || (Wr.observeMutations = !1)
var R = {}
Object.keys(rv).forEach(function (e) {
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
function aS(e) {
  return (
    Ei.push(e),
    function () {
      Ei.splice(Ei.indexOf(e), 1)
    }
  )
}
var nn = Qu,
  Rt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 }
function lS(e) {
  if (!(!e || !Jt)) {
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
var sS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function eo() {
  for (var e = 12, t = ''; e-- > 0; ) t += sS[(Math.random() * 62) | 0]
  return t
}
function Xr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n]
  return t
}
function If(e) {
  return e.classList
    ? Xr(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t
      })
}
function iv(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
function uS(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(iv(e[n]), '" ')
    }, '')
    .trim()
}
function Xl(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';')
  }, '')
}
function Lf(e) {
  return (
    e.size !== Rt.size ||
    e.x !== Rt.x ||
    e.y !== Rt.y ||
    e.rotate !== Rt.rotate ||
    e.flipX ||
    e.flipY
  )
}
function cS(e) {
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
function fS(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Qu : n,
    i = e.height,
    o = i === void 0 ? Qu : i,
    a = e.startCentered,
    l = a === void 0 ? !1 : a,
    s = ''
  return (
    l && q1
      ? (s += 'translate('
          .concat(t.x / nn - r / 2, 'em, ')
          .concat(t.y / nn - o / 2, 'em) '))
      : l
      ? (s += 'translate(calc(-50% + '
          .concat(t.x / nn, 'em), calc(-50% + ')
          .concat(t.y / nn, 'em)) '))
      : (s += 'translate('.concat(t.x / nn, 'em, ').concat(t.y / nn, 'em) ')),
    (s += 'scale('
      .concat((t.size / nn) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / nn) * (t.flipY ? -1 : 1), ') ')),
    (s += 'rotate('.concat(t.rotate, 'deg) ')),
    s
  )
}
var dS = `:root, :host {
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
function ov() {
  var e = Z1,
    t = J1,
    n = R.cssPrefix,
    r = R.replacementClass,
    i = dS
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
function Ls() {
  R.autoAddCss && !rm && (lS(ov()), (rm = !0))
}
var pS = {
    mixout: function () {
      return { dom: { css: ov, insertCss: Ls } }
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Ls()
        },
        beforeI2svg: function () {
          Ls()
        }
      }
    }
  },
  Xt = Cn || {}
Xt[Qt] || (Xt[Qt] = {})
Xt[Qt].styles || (Xt[Qt].styles = {})
Xt[Qt].hooks || (Xt[Qt].hooks = {})
Xt[Qt].shims || (Xt[Qt].shims = [])
var St = Xt[Qt],
  av = [],
  mS = function e() {
    J.removeEventListener('DOMContentLoaded', e),
      (Ya = 1),
      av.map(function (t) {
        return t()
      })
  },
  Ya = !1
Jt &&
  ((Ya = (J.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    J.readyState
  )),
  Ya || J.addEventListener('DOMContentLoaded', mS))
function hS(e) {
  Jt && (Ya ? setTimeout(e, 0) : av.push(e))
}
function vo(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    o = i === void 0 ? [] : i
  return typeof e == 'string'
    ? iv(e)
    : '<'
        .concat(t, ' ')
        .concat(uS(r), '>')
        .concat(o.map(vo).join(''), '</')
        .concat(t, '>')
}
function im(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] }
}
var zs = function (t, n, r, i) {
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
function vS(e) {
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
function qu(e) {
  var t = vS(e)
  return t.length === 1 ? t[0].toString(16) : null
}
function gS(e, t) {
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
function Zu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    o = om(t)
  typeof St.hooks.addPack == 'function' && !i
    ? St.hooks.addPack(e, om(t))
    : (St.styles[e] = T(T({}, St.styles[e] || {}), o)),
    e === 'fas' && Zu('fa', t)
}
var Ko,
  Go,
  Qo,
  Sr = St.styles,
  yS = St.shims,
  wS =
    ((Ko = {}), we(Ko, q, Object.values(Zi[q])), we(Ko, ue, Object.values(Zi[ue])), Ko),
  zf = null,
  lv = {},
  sv = {},
  uv = {},
  cv = {},
  fv = {},
  xS = ((Go = {}), we(Go, q, Object.keys(Xi[q])), we(Go, ue, Object.keys(Xi[ue])), Go)
function kS(e) {
  return ~nS.indexOf(e)
}
function SS(e, t) {
  var n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-')
  return r === e && i !== '' && !kS(i) ? i : null
}
var dv = function () {
  var t = function (o) {
    return zs(
      Sr,
      function (a, l, s) {
        return (a[s] = zs(l, o, {})), a
      },
      {}
    )
  }
  ;(lv = t(function (i, o, a) {
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
    (sv = t(function (i, o, a) {
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
    (fv = t(function (i, o, a) {
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
    r = zs(
      yS,
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
  ;(uv = r.names),
    (cv = r.unicodes),
    (zf = ql(R.styleDefault, { family: R.familyDefault }))
}
aS(function (e) {
  zf = ql(e.styleDefault, { family: R.familyDefault })
})
dv()
function Ff(e, t) {
  return (lv[e] || {})[t]
}
function bS(e, t) {
  return (sv[e] || {})[t]
}
function Un(e, t) {
  return (fv[e] || {})[t]
}
function pv(e) {
  return uv[e] || { prefix: null, iconName: null }
}
function CS(e) {
  var t = cv[e],
    n = Ff('fas', e)
  return (
    t || (n ? { prefix: 'fas', iconName: n } : null) || { prefix: null, iconName: null }
  )
}
function En() {
  return zf
}
var Df = function () {
  return { prefix: null, iconName: null, rest: [] }
}
function ql(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? q : n,
    i = Xi[r][e],
    o = qi[r][e] || qi[r][i],
    a = e in St.styles ? e : null
  return o || a || null
}
var am = ((Qo = {}), we(Qo, q, Object.keys(Zi[q])), we(Qo, ue, Object.keys(Zi[ue])), Qo)
function Zl(e) {
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
    var f = SS(R.cssPrefix, c)
    if (
      (Sr[c]
        ? ((c = wS[l].includes(c) ? Xk[l][c] : c), (a = c), (u.prefix = c))
        : xS[l].indexOf(c) > -1
        ? ((a = c), (u.prefix = ql(c, { family: l })))
        : f
        ? (u.iconName = f)
        : c !== R.replacementClass && c !== o[q] && c !== o[ue] && u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var p = a === 'fa' ? pv(u.iconName) : {},
        g = Un(u.prefix, u.iconName)
      p.prefix && (a = null),
        (u.iconName = p.iconName || g || u.iconName),
        (u.prefix = p.prefix || u.prefix),
        u.prefix === 'far' && !Sr.far && Sr.fas && !R.autoFetchSvg && (u.prefix = 'fas')
    }
    return u
  }, Df())
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
var ES = (function () {
    function e() {
      Lk(this, e), (this.definitions = {})
    }
    return (
      Fk(e, [
        {
          key: 'add',
          value: function () {
            for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o]
            var a = i.reduce(this._pullDefinitions, {})
            Object.keys(a).forEach(function (l) {
              ;(n.definitions[l] = T(T({}, n.definitions[l] || {}), a[l])), Zu(l, a[l])
              var s = Zi[q][l]
              s && Zu(s, a[l]), dv()
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
  PS = Object.keys(jr)
function _S(e, t) {
  var n = t.mixoutsTo
  return (
    (lm = e),
    (br = {}),
    Object.keys(jr).forEach(function (r) {
      PS.indexOf(r) === -1 && delete jr[r]
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
function Ju(e, t) {
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
function qt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1)
  return jr[e] ? jr[e].apply(null, t) : void 0
}
function ec(e) {
  e.prefix === 'fa' && (e.prefix = 'fas')
  var t = e.iconName,
    n = e.prefix || En()
  if (t) return (t = Un(n, t) || t), im(mv.definitions, n, t) || im(St.styles, n, t)
}
var mv = new ES(),
  OS = function () {
    ;(R.autoReplaceSvg = !1), (R.observeMutations = !1), qn('noAuto')
  },
  TS = {
    i2svg: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      return Jt
        ? (qn('beforeI2svg', t), qt('pseudoElements2svg', t), qt('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.')
    },
    watch: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot
      R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0),
        (R.observeMutations = !0),
        hS(function () {
          RS({ autoReplaceSvgRoot: n }), qn('watch', t)
        })
    }
  },
  NS = {
    icon: function (t) {
      if (t === null) return null
      if (Ha(t) === 'object' && t.prefix && t.iconName)
        return { prefix: t.prefix, iconName: Un(t.prefix, t.iconName) || t.iconName }
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = ql(t[0])
        return { prefix: r, iconName: Un(r, n) || n }
      }
      if (
        typeof t == 'string' &&
        (t.indexOf(''.concat(R.cssPrefix, '-')) > -1 || t.match(qk))
      ) {
        var i = Zl(t.split(' '), { skipLookups: !0 })
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
    noAuto: OS,
    config: R,
    dom: TS,
    parse: NS,
    library: mv,
    findIconDefinition: ec,
    toHtml: vo
  },
  RS = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? J : n
    ;(Object.keys(St.styles).length > 0 || R.autoFetchSvg) &&
      Jt &&
      R.autoReplaceSvg &&
      rt.dom.i2svg({ node: r })
  }
function Jl(e, t) {
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
        if (Jt) {
          var r = J.createElement('div')
          return (r.innerHTML = e.html), r.children
        }
      }
    }),
    e
  )
}
function AS(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    o = e.styles,
    a = e.transform
  if (Lf(a) && n.found && !r.found) {
    var l = n.width,
      s = n.height,
      u = { x: l / s / 2, y: 0.5 }
    i.style = Xl(
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
function $S(e) {
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
function Uf(e) {
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
    g = p === void 0 ? !1 : p,
    y = r.found ? r : n,
    v = y.width,
    k = y.height,
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
  g && (h.attributes[Xn] = ''),
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
        ? qt('generateAbstractMask', b) || { children: [], attributes: {} }
        : qt('generateAbstractIcon', b) || { children: [], attributes: {} },
    C = E.children,
    O = E.attributes
  return (b.children = C), (b.attributes = O), l ? $S(b) : AS(b)
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
  Lf(i) &&
    ((c.transform = fS({ transform: i, startCentered: !0, width: n, height: r })),
    (c['-webkit-transform'] = c.transform))
  var f = Xl(c)
  f.length > 0 && (u.style = f)
  var p = []
  return (
    p.push({ tag: 'span', attributes: u, children: [t] }),
    o && p.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
    p
  )
}
function jS(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = T(
      T(T({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(' ') }
    ),
    o = Xl(r.styles)
  o.length > 0 && (i.style = o)
  var a = []
  return (
    a.push({ tag: 'span', attributes: i, children: [t] }),
    n && a.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    a
  )
}
var Fs = St.styles
function tc(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = Rf(r, 1),
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
var MS = { found: !1, width: 512, height: 512 }
function IS(e, t) {
  !ev &&
    !R.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    )
}
function nc(e, t) {
  var n = t
  return (
    t === 'fa' && R.styleDefault !== null && (t = En()),
    new Promise(function (r, i) {
      if ((qt('missingIconAbstract'), n === 'fa')) {
        var o = pv(e) || {}
        ;(e = o.iconName || e), (t = o.prefix || t)
      }
      if (e && t && Fs[t] && Fs[t][e]) {
        var a = Fs[t][e]
        return r(tc(a))
      }
      IS(e, t),
        r(
          T(
            T({}, MS),
            {},
            { icon: R.showMissingIcons && e ? qt('missingIconAbstract') || {} : {} }
          )
        )
    })
  )
}
var um = function () {},
  rc =
    R.measurePerformance && Uo && Uo.mark && Uo.measure ? Uo : { mark: um, measure: um },
  di = 'FA "6.5.2"',
  LS = function (t) {
    return (
      rc.mark(''.concat(di, ' ').concat(t, ' begins')),
      function () {
        return hv(t)
      }
    )
  },
  hv = function (t) {
    rc.mark(''.concat(di, ' ').concat(t, ' ends')),
      rc.measure(
        ''.concat(di, ' ').concat(t),
        ''.concat(di, ' ').concat(t, ' begins'),
        ''.concat(di, ' ').concat(t, ' ends')
      )
  },
  Bf = { begin: LS, end: hv },
  pa = function () {}
function cm(e) {
  var t = e.getAttribute ? e.getAttribute(Xn) : null
  return typeof t == 'string'
}
function zS(e) {
  var t = e.getAttribute ? e.getAttribute($f) : null,
    n = e.getAttribute ? e.getAttribute(jf) : null
  return t && n
}
function FS(e) {
  return (
    e && e.classList && e.classList.contains && e.classList.contains(R.replacementClass)
  )
}
function DS() {
  if (R.autoReplaceSvg === !0) return ma.replace
  var e = ma[R.autoReplaceSvg]
  return e || ma.replace
}
function US(e) {
  return J.createElementNS('http://www.w3.org/2000/svg', e)
}
function BS(e) {
  return J.createElement(e)
}
function vv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? US : BS) : n
  if (typeof e == 'string') return J.createTextNode(e)
  var i = r(e.tag)
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a])
  })
  var o = e.children || []
  return (
    o.forEach(function (a) {
      i.appendChild(vv(a, { ceFn: r }))
    }),
    i
  )
}
function WS(e) {
  var t = ' '.concat(e.outerHTML, ' ')
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t
}
var ma = {
  replace: function (t) {
    var n = t[0]
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(vv(i), n)
        }),
        n.getAttribute(Xn) === null && R.keepOriginalSource)
      ) {
        var r = J.createComment(WS(n))
        n.parentNode.replaceChild(r, n)
      } else n.remove()
  },
  nest: function (t) {
    var n = t[0],
      r = t[1]
    if (~If(n).indexOf(R.replacementClass)) return ma.replace(t)
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
function gv(e, t) {
  var n = typeof t == 'function' ? t : pa
  if (e.length === 0) n()
  else {
    var r = fm
    R.mutateApproach === Gk && (r = Cn.requestAnimationFrame || fm),
      r(function () {
        var i = DS(),
          o = Bf.begin('mutate')
        e.map(i), o(), n()
      })
  }
}
var Wf = !1
function yv() {
  Wf = !0
}
function ic() {
  Wf = !1
}
var Ka = null
function dm(e) {
  if (tm && R.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? pa : t,
      r = e.nodeCallback,
      i = r === void 0 ? pa : r,
      o = e.pseudoElementsCallback,
      a = o === void 0 ? pa : o,
      l = e.observeMutationsRoot,
      s = l === void 0 ? J : l
    ;(Ka = new tm(function (u) {
      if (!Wf) {
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
            f.type === 'attributes' && cm(f.target) && ~tS.indexOf(f.attributeName))
          )
            if (f.attributeName === 'class' && zS(f.target)) {
              var p = Zl(If(f.target)),
                g = p.prefix,
                y = p.iconName
              f.target.setAttribute($f, g || c), y && f.target.setAttribute(jf, y)
            } else FS(f.target) && i(f.target)
        })
      }
    })),
      Jt &&
        Ka.observe(s, { childList: !0, attributes: !0, characterData: !0, subtree: !0 })
  }
}
function VS() {
  Ka && Ka.disconnect()
}
function HS(e) {
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
function YS(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = Zl(If(e))
  return (
    i.prefix || (i.prefix = En()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName = bS(i.prefix, e.innerText) || Ff(i.prefix, qu(e.innerText))),
      !i.iconName &&
        R.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  )
}
function KS(e) {
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
function GS() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Rt,
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
    n = YS(e),
    r = n.iconName,
    i = n.prefix,
    o = n.rest,
    a = KS(e),
    l = Ju('parseNodeAttributes', {}, e),
    s = t.styleParser ? HS(e) : []
  return T(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: Rt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: s, attributes: a }
    },
    l
  )
}
var QS = St.styles
function wv(e) {
  var t = R.autoReplaceSvg === 'nest' ? pm(e, { styleParser: !1 }) : pm(e)
  return ~t.extra.classes.indexOf(tv)
    ? qt('generateLayersText', e, t)
    : qt('generateSvgReplacementMutation', e, t)
}
var Pn = new Set()
Mf.map(function (e) {
  Pn.add('fa-'.concat(e))
})
Object.keys(Xi[q]).map(Pn.add.bind(Pn))
Object.keys(Xi[ue]).map(Pn.add.bind(Pn))
Pn = mo(Pn)
function mm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  if (!Jt) return Promise.resolve()
  var n = J.documentElement.classList,
    r = function (f) {
      return n.add(''.concat(nm, '-').concat(f))
    },
    i = function (f) {
      return n.remove(''.concat(nm, '-').concat(f))
    },
    o = R.autoFetchSvg
      ? Pn
      : Mf.map(function (c) {
          return 'fa-'.concat(c)
        }).concat(Object.keys(QS))
  o.includes('fa') || o.push('fa')
  var a = ['.'.concat(tv, ':not([').concat(Xn, '])')]
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
  var s = Bf.begin('onTree'),
    u = l.reduce(function (c, f) {
      try {
        var p = wv(f)
        p && c.push(p)
      } catch (g) {
        ev || (g.name === 'MissingIcon' && console.error(g))
      }
      return c
    }, [])
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (p) {
        gv(p, function () {
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
function XS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  wv(e).then(function (n) {
    n && gv([n], t)
  })
}
function qS(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : ec(t || {}),
      i = n.mask
    return i && (i = (i || {}).icon ? i : ec(i || {})), e(r, T(T({}, n), {}, { mask: i }))
  }
}
var ZS = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? Rt : r,
      o = n.symbol,
      a = o === void 0 ? !1 : o,
      l = n.mask,
      s = l === void 0 ? null : l,
      u = n.maskId,
      c = u === void 0 ? null : u,
      f = n.title,
      p = f === void 0 ? null : f,
      g = n.titleId,
      y = g === void 0 ? null : g,
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
      return Jl(T({ type: 'icon' }, t), function () {
        return (
          qn('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          R.autoA11y &&
            (p
              ? (d['aria-labelledby'] = ''
                  .concat(R.replacementClass, '-title-')
                  .concat(y || eo()))
              : ((d['aria-hidden'] = 'true'), (d.focusable = 'false'))),
          Uf({
            icons: {
              main: tc(C),
              mask: s ? tc(s.icon) : { found: !1, width: null, height: null, icon: {} }
            },
            prefix: b,
            iconName: E,
            transform: T(T({}, Rt), i),
            symbol: a,
            title: p,
            maskId: c,
            titleId: y,
            extra: { attributes: d, styles: x, classes: k }
          })
        )
      })
    }
  },
  JS = {
    mixout: function () {
      return { icon: qS(ZS) }
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = mm), (n.nodeCallback = XS), n
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
          return new Promise(function (g, y) {
            Promise.all([
              nc(i, l),
              c.iconName
                ? nc(c.iconName, c.prefix)
                : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} })
            ])
              .then(function (v) {
                var k = Rf(v, 2),
                  m = k[0],
                  d = k[1]
                g([
                  n,
                  Uf({
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
              .catch(y)
          })
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            o = n.main,
            a = n.transform,
            l = n.styles,
            s = Xl(l)
          s.length > 0 && (i.style = s)
          var u
          return (
            Lf(a) &&
              (u = qt('generateAbstractTransformGrouping', {
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
  eb = {
    mixout: function () {
      return {
        layer: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.classes,
            o = i === void 0 ? [] : i
          return Jl({ type: 'layer' }, function () {
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
  tb = {
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
          return Jl({ type: 'counter', content: n }, function () {
            return (
              qn('beforeDOMElementCreation', { content: n, params: r }),
              jS({
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
  nb = {
    mixout: function () {
      return {
        text: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.transform,
            o = i === void 0 ? Rt : i,
            a = r.title,
            l = a === void 0 ? null : a,
            s = r.classes,
            u = s === void 0 ? [] : s,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            p = r.styles,
            g = p === void 0 ? {} : p
          return Jl({ type: 'text', content: n }, function () {
            return (
              qn('beforeDOMElementCreation', { content: n, params: r }),
              sm({
                content: n,
                transform: T(T({}, Rt), o),
                title: l,
                extra: {
                  attributes: f,
                  styles: g,
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
        if (q1) {
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
  rb = new RegExp('"', 'ug'),
  hm = [1105920, 1112319]
function ib(e) {
  var t = e.replace(rb, ''),
    n = gS(t, 0),
    r = n >= hm[0] && n <= hm[1],
    i = t.length === 2 ? t[0] === t[1] : !1
  return { value: qu(i ? t[0] : t), isSecondary: r || i }
}
function vm(e, t) {
  var n = ''.concat(Kk).concat(t.replace(':', '-'))
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r()
    var o = Xr(e.children),
      a = o.filter(function (C) {
        return C.getAttribute(Xu) === t
      })[0],
      l = Cn.getComputedStyle(e, t),
      s = l.getPropertyValue('font-family').match(Zk),
      u = l.getPropertyValue('font-weight'),
      c = l.getPropertyValue('content')
    if (a && !s) return e.removeChild(a), r()
    if (s && c !== 'none' && c !== '') {
      var f = l.getPropertyValue('content'),
        p = ~['Sharp'].indexOf(s[2]) ? ue : q,
        g = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(
          s[2]
        )
          ? qi[p][s[2].toLowerCase()]
          : Jk[p][u],
        y = ib(f),
        v = y.value,
        k = y.isSecondary,
        m = s[0].startsWith('FontAwesome'),
        d = Ff(g, v),
        h = d
      if (m) {
        var x = CS(v)
        x.iconName && x.prefix && ((d = x.iconName), (g = x.prefix))
      }
      if (d && !k && (!a || a.getAttribute($f) !== g || a.getAttribute(jf) !== h)) {
        e.setAttribute(n, h), a && e.removeChild(a)
        var b = GS(),
          E = b.extra
        ;(E.attributes[Xu] = t),
          nc(d, g)
            .then(function (C) {
              var O = Uf(
                  T(
                    T({}, b),
                    {},
                    {
                      icons: { main: C, mask: Df() },
                      prefix: g,
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
function ob(e) {
  return Promise.all([vm(e, '::before'), vm(e, '::after')])
}
function ab(e) {
  return (
    e.parentNode !== document.head &&
    !~Qk.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Xu) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  )
}
function gm(e) {
  if (Jt)
    return new Promise(function (t, n) {
      var r = Xr(e.querySelectorAll('*')).filter(ab).map(ob),
        i = Bf.begin('searchPseudoElements')
      yv(),
        Promise.all(r)
          .then(function () {
            i(), ic(), t()
          })
          .catch(function () {
            i(), ic(), n()
          })
    })
}
var lb = {
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
  sb = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            yv(), (ym = !0)
          }
        }
      }
    },
    hooks: function () {
      return {
        bootstrap: function () {
          dm(Ju('mutationObserverCallbacks', {}))
        },
        noAuto: function () {
          VS()
        },
        watch: function (n) {
          var r = n.observeMutationsRoot
          ym ? ic() : dm(Ju('mutationObserverCallbacks', { observeMutationsRoot: r }))
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
  ub = {
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
          g = { outer: l, inner: f, path: p }
        return {
          tag: 'g',
          attributes: T({}, g.outer),
          children: [
            {
              tag: 'g',
              attributes: T({}, g.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: T(T({}, r.icon.attributes), g.path)
                }
              ]
            }
          ]
        }
      }
    }
  },
  Ds = { x: 0, y: 0, width: '100%', height: '100%' }
function xm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
}
function cb(e) {
  return e.tag === 'g' ? e.children : [e]
}
var fb = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-mask'),
            o = i
              ? Zl(
                  i.split(' ').map(function (a) {
                    return a.trim()
                  })
                )
              : Df()
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
          g = cS({ transform: s, containerWidth: f, iconWidth: u }),
          y = { tag: 'rect', attributes: T(T({}, Ds), {}, { fill: 'white' }) },
          v = c.children ? { children: c.children.map(xm) } : {},
          k = {
            tag: 'g',
            attributes: T({}, g.inner),
            children: [
              xm(T({ tag: c.tag, attributes: T(T({}, c.attributes), g.path) }, v))
            ]
          },
          m = { tag: 'g', attributes: T({}, g.outer), children: [k] },
          d = 'mask-'.concat(l || eo()),
          h = 'clip-'.concat(l || eo()),
          x = {
            tag: 'mask',
            attributes: T(
              T({}, Ds),
              {},
              { id: d, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }
            ),
            children: [y, m]
          },
          b = {
            tag: 'defs',
            children: [{ tag: 'clipPath', attributes: { id: h }, children: cb(p) }, x]
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
              Ds
            )
          }),
          { children: r, attributes: i }
        )
      }
    }
  },
  db = {
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
  pb = {
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
  mb = [pS, JS, eb, tb, nb, lb, sb, ub, fb, db, pb]
_S(mb, { mixoutsTo: rt })
rt.noAuto
rt.config
rt.library
rt.dom
var oc = rt.parse
rt.findIconDefinition
rt.toHtml
var hb = rt.icon
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
function dn(e) {
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
function Ga(e) {
  '@babel/helpers - typeof'
  return (
    (Ga =
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
    Ga(e)
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
function vb(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    o
  for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function gb(e, t) {
  if (e == null) return {}
  var n = vb(e, t),
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
function ac(e) {
  return yb(e) || wb(e) || xb(e) || kb()
}
function yb(e) {
  if (Array.isArray(e)) return lc(e)
}
function wb(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e)
}
function xb(e, t) {
  if (e) {
    if (typeof e == 'string') return lc(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return lc(e, t)
  }
}
function lc(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function kb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Sb(e) {
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
    g = e.inverse,
    y = e.border,
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
        'fa-inverse': g,
        'fa-border': y,
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
function bb(e) {
  return (e = e - 0), e === e
}
function xv(e) {
  return bb(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : ''
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1))
}
var Cb = ['style']
function Eb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function Pb(e) {
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
        i = xv(n.slice(0, r)),
        o = n.slice(r + 1).trim()
      return i.startsWith('webkit') ? (t[Eb(i)] = o) : (t[i] = o), t
    }, {})
}
function kv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  if (typeof t == 'string') return t
  var r = (t.children || []).map(function (s) {
      return kv(e, s)
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var c = t.attributes[u]
        switch (u) {
          case 'class':
            ;(s.attrs.className = c), delete t.attributes.class
            break
          case 'style':
            s.attrs.style = Pb(c)
            break
          default:
            u.indexOf('aria-') === 0 || u.indexOf('data-') === 0
              ? (s.attrs[u.toLowerCase()] = c)
              : (s.attrs[xv(u)] = c)
        }
        return s
      },
      { attrs: {} }
    ),
    o = n.style,
    a = o === void 0 ? {} : o,
    l = gb(n, Cb)
  return (
    (i.attrs.style = dn(dn({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, dn(dn({}, i.attrs), l)].concat(ac(r)))
  )
}
var Sv = !1
try {
  Sv = !0
} catch {}
function _b() {
  if (!Sv && console && typeof console.error == 'function') {
    var e
    ;(e = console).error.apply(e, arguments)
  }
}
function Sm(e) {
  if (e && Ga(e) === 'object' && e.prefix && e.iconName && e.icon) return e
  if (oc.icon) return oc.icon(e)
  if (e === null) return null
  if (e && Ga(e) === 'object' && e.prefix && e.iconName) return e
  if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] }
  if (typeof e == 'string') return { prefix: 'fas', iconName: e }
}
function Us(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Cr({}, e, t)
    : {}
}
var go = Q.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    o = e.className,
    a = e.title,
    l = e.titleId,
    s = e.maskId,
    u = Sm(n),
    c = Us('classes', [].concat(ac(Sb(e)), ac(o.split(' ')))),
    f = Us(
      'transform',
      typeof e.transform == 'string' ? oc.transform(e.transform) : e.transform
    ),
    p = Us('mask', Sm(r)),
    g = hb(
      u,
      dn(dn(dn(dn({}, c), f), p), {}, { symbol: i, title: a, titleId: l, maskId: s })
    )
  if (!g) return _b('Could not find icon', u), null
  var y = g.abstract,
    v = { ref: t }
  return (
    Object.keys(e).forEach(function (k) {
      go.defaultProps.hasOwnProperty(k) || (v[k] = e[k])
    }),
    Ob(y[0], v)
  )
})
go.displayName = 'FontAwesomeIcon'
go.propTypes = {
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
go.defaultProps = {
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
var Ob = kv.bind(null, Q.createElement)
function Tb(e) {
  return fl({
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
var Nb = {
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
  Rb = {
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
  Ab = {
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
  $b = {
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
  jb = {
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
const Mb = () => {
  const e = [Ab, Nb, $b, Rb, jb, S.jsx(Tb, {})],
    t = r =>
      r.iconName
        ? S.jsx(go, { icon: r, style: { fontSize: '100px' } })
        : Q.cloneElement(r, { style: { fontSize: '100px' } }),
    n = []
  for (let r = 0; r < 100; r++) n.push(...e.map(t))
  return S.jsx('div', {
    className: 'slider-container',
    children: S.jsx('div', { className: 'slider', children: n })
  })
}
function Ib(e) {
  return fl({
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
function Lb() {
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
      className: 'HomePage ',
      children: [
        S.jsx('div', {
          className: 'grid grid-cols-1 gap-2 allDescription',
          children: S.jsxs('div', {
            className: 'allText',
            children: [
              S.jsx('div', {
                className: 'carlosText',
                children: S.jsx(Iw, {
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
                  S.jsx('span', { className: 'languages', children: 'React.js' }),
                  ', and in back-end development with ',
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
            S.jsx(Mb, {})
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
            S.jsx(Is, {
              title: 'Ironhack DOM Project',
              description:
                "This was my first project manipulating the DOM (If you have a high frame rate (FPS) while gaming, it's advisable to lower it for optimal performance.)",
              imageUrl: $k,
              url: 'https://carlosrodmor.github.io/octopus-game/'
            }),
            S.jsx(Is, {
              title: 'Ironhack Back-end Project',
              description:
                'This was my second project using Node.js, Express.js and AXIOS and also adding some extra front-end development.',
              imageUrl: jk,
              url: 'https://movies-project2.fly.dev/'
            }),
            S.jsx(Is, {
              title: 'Ironhack Final Project ',
              description:
                'This is the MOST IMPORTANT project I have worked on so far, alongside two colleagues, using the MERN stack.',
              imageUrl: Mk,
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
            S.jsx(Ik, {})
          ]
        }),
        S.jsxs('div', {
          className: 'socialIcons',
          id: 'contact-section',
          children: [
            S.jsx('a', {
              href: 'https://www.github.com/carlosrodmor',
              className: 'text-gray-300 hover:text-white mx-10',
              children: S.jsx(W0, { size: 72 })
            }),
            S.jsx('a', {
              href: 'https://www.linkedin.com/in/carlos-rodr%C3%ADguez-morales/',
              className: 'text-gray-300 hover:text-white mx-10',
              children: S.jsx(V0, { size: 72 })
            }),
            S.jsx('a', {
              href: 'mailto:carlos97sdg@gmail.com',
              style: { display: 'inline-block' },
              className: 'text-gray-300 hover:text-white mx-10',
              children: S.jsx(Ib, { size: 72, style: { cursor: 'pointer' } })
            })
          ]
        })
      ]
    })
  )
}
const zb = () =>
    S.jsxs(Rw, {
      children: [
        S.jsx(zu, { path: '/', element: S.jsx(Lb, {}) }),
        S.jsx(zu, { path: '/proyectos', element: S.jsx(Mw, {}) })
      ]
    }),
  Fb = () =>
    S.jsx('div', {
      className: 'container',
      children: S.jsx('div', {
        className: 'footerText',
        children: '© 2024 Carlos Rodríguez'
      })
    })
function Db() {
  return S.jsx(jw, {
    children: S.jsxs('div', {
      className: 'App',
      children: [S.jsx(Q2, {}), S.jsx(zb, {}), S.jsx(Fb, {})]
    })
  })
}
Bs.createRoot(document.getElementById('root')).render(
  S.jsx(Q.StrictMode, { children: S.jsx(Db, {}) })
)
