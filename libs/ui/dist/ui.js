import ke from "react";
var X = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function lr() {
  if (_e)
    return F;
  _e = 1;
  var T = ke, C = Symbol.for("react.element"), V = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, D = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(y, f, _) {
    var v, h = {}, x = null, I = null;
    _ !== void 0 && (x = "" + _), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (I = f.ref);
    for (v in f)
      R.call(f, v) && !A.hasOwnProperty(v) && (h[v] = f[v]);
    if (y && y.defaultProps)
      for (v in f = y.defaultProps, f)
        h[v] === void 0 && (h[v] = f[v]);
    return { $$typeof: C, type: y, key: x, ref: I, props: h, _owner: D.current };
  }
  return F.Fragment = V, F.jsx = O, F.jsxs = O, F;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function sr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var T = ke, C = Symbol.for("react.element"), V = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), y = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), Z = Symbol.iterator, je = "@@iterator";
    function Te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[je];
      return typeof r == "function" ? r : null;
    }
    var w = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ce("error", e, t);
      }
    }
    function Ce(e, r, t) {
      {
        var a = w.ReactDebugCurrentFrame, i = a.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Oe = !1, Pe = !1, Se = !1, Fe = !1, Ne = !1, Q;
    Q = Symbol.for("react.module.reference");
    function De(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === A || Ne || e === D || e === _ || e === v || Fe || e === I || Oe || Pe || Se || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === h || e.$$typeof === O || e.$$typeof === y || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case V:
          return "Portal";
        case A:
          return "Profiler";
        case D:
          return "StrictMode";
        case _:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ee(r) + ".Consumer";
          case O:
            var t = e;
            return ee(t._context) + ".Provider";
          case f:
            return Ae(e, e.render, "ForwardRef");
          case h:
            var a = e.displayName || null;
            return a !== null ? a : b(e.type) || "Memo";
          case x: {
            var i = e, s = i._payload, o = i._init;
            try {
              return b(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, P = 0, re, te, ae, ne, oe, ie, le;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ie() {
      {
        if (P === 0) {
          re = console.log, te = console.info, ae = console.warn, ne = console.error, oe = console.group, ie = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        P++;
      }
    }
    function $e() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: re
            }),
            info: E({}, e, {
              value: te
            }),
            warn: E({}, e, {
              value: ae
            }),
            error: E({}, e, {
              value: ne
            }),
            group: E({}, e, {
              value: oe
            }),
            groupCollapsed: E({}, e, {
              value: ie
            }),
            groupEnd: E({}, e, {
              value: le
            })
          });
        }
        P < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = w.ReactCurrentDispatcher, B;
    function $(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var a = i.stack.trim().match(/\n( *(at )?)/);
            B = a && a[1] || "";
          }
        return `
` + B + e;
      }
    }
    var z = !1, L;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Le();
    }
    function ue(e, r) {
      if (!e || z)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = U.current, U.current = null, Ie();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (m) {
              a = m;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (m) {
              a = m;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            a = m;
          }
          e();
        }
      } catch (m) {
        if (m && a && typeof m.stack == "string") {
          for (var n = m.stack.split(`
`), g = a.stack.split(`
`), u = n.length - 1, c = g.length - 1; u >= 1 && c >= 0 && n[u] !== g[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (n[u] !== g[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || n[u] !== g[c]) {
                    var p = `
` + n[u].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, p), p;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        z = !1, U.current = s, $e(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", Re = j ? $(j) : "";
      return typeof e == "function" && L.set(e, Re), Re;
    }
    function We(e, r, t) {
      return ue(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Ye(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case _:
          return $("Suspense");
        case v:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return We(e.render);
          case h:
            return W(e.type, r, t);
          case x: {
            var a = e, i = a._payload, s = a._init;
            try {
              return W(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ce = {}, fe = w.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Me(e, r, t, a, i) {
      {
        var s = Function.call.bind(Y);
        for (var o in e)
          if (s(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              n = u;
            }
            n && !(n instanceof Error) && (M(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), M(null)), n instanceof Error && !(n.message in ce) && (ce[n.message] = !0, M(i), d("Failed %s type: %s", t, n.message), M(null));
          }
      }
    }
    var Ve = Array.isArray;
    function q(e) {
      return Ve(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ge(e) {
      if (Be(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), de(e);
    }
    var S = w.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, pe, H;
    H = {};
    function qe(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && S.current && r && S.current.stateNode !== r) {
        var t = b(S.current.type);
        H[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(S.current.type), e.ref), H[t] = !0);
      }
    }
    function Je(e, r) {
      {
        var t = function() {
          ve || (ve = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          pe || (pe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, a, i, s, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function Ze(e, r, t, a, i) {
      {
        var s, o = {}, n = null, g = null;
        t !== void 0 && (ge(t), n = "" + t), He(r) && (ge(r.key), n = "" + r.key), qe(r) && (g = r.ref, Ge(r, i));
        for (s in r)
          Y.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (n || g) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Je(o, c), g && Ke(o, c);
        }
        return Xe(e, n, g, i, a, S.current, o);
      }
    }
    var G = w.ReactCurrentOwner, he = w.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    function be() {
      {
        if (G.current) {
          var e = b(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var me = {};
    function er(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (me[t])
          return;
        me[t] = !0;
        var a = "";
        e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + b(e._owner.type) + "."), k(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), k(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            K(a) && ye(a, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Te(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              K(o.value) && ye(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = b(r);
          Me(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = b(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            k(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Ee(e, r, t, a, i, s) {
      {
        var o = De(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = Qe(i);
          g ? n += g : n += be();
          var u;
          e === null ? u = "null" : q(e) ? u = "array" : e !== void 0 && e.$$typeof === C ? (u = "<" + (b(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, n);
        }
        var c = Ze(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var p = r.children;
          if (p !== void 0)
            if (a)
              if (q(p)) {
                for (var j = 0; j < p.length; j++)
                  xe(p[j], e);
                Object.freeze && Object.freeze(p);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(p, e);
        }
        return e === R ? tr(c) : rr(c), c;
      }
    }
    function ar(e, r, t) {
      return Ee(e, r, t, !0);
    }
    function nr(e, r, t) {
      return Ee(e, r, t, !1);
    }
    var or = nr, ir = ar;
    N.Fragment = R, N.jsx = or, N.jsxs = ir;
  }()), N;
}
process.env.NODE_ENV === "production" ? X.exports = lr() : X.exports = sr();
var l = X.exports;
function cr({ title: T }) {
  return /* @__PURE__ */ l.jsx("header", { children: /* @__PURE__ */ l.jsx("nav", { className: "bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800", children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl", children: [
    /* @__PURE__ */ l.jsxs("a", { href: "https://flowbite.com", className: "flex items-center", children: [
      /* @__PURE__ */ l.jsx("img", { src: "https://flowbite.com/docs/images/logo.svg", className: "mr-3 h-6 sm:h-9", alt: "Flowbite Logo" }),
      /* @__PURE__ */ l.jsx("span", { className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white", children: T })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center lg:order-2", children: [
      /* @__PURE__ */ l.jsx("a", { href: "#", className: "text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800", children: "Log in" }),
      /* @__PURE__ */ l.jsx("a", { href: "#", className: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800", children: "Get started" }),
      /* @__PURE__ */ l.jsxs("button", { "data-collapse-toggle": "mobile-menu-2", type: "button", className: "inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", "aria-controls": "mobile-menu-2", "aria-expanded": "false", children: [
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ l.jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ l.jsx("svg", { className: "hidden w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1", id: "mobile-menu-2", children: /* @__PURE__ */ l.jsxs("ul", { className: "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0", children: [
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx("a", { href: "#", className: "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white", "aria-current": "page", children: "Home" }) }),
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx("a", { href: "#", className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700", children: "Company" }) }),
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx("a", { href: "#", className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700", children: "Marketplace" }) }),
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx("a", { href: "#", className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700", children: "Features" }) }),
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx("a", { href: "#", className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700", children: "Team" }) }),
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx("a", { href: "#", className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700", children: "Contact" }) })
    ] }) })
  ] }) }) });
}
export {
  cr as Header
};
