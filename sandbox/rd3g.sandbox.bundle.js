!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 39));
})([
  function(e, t, n) {
    "use strict";
    e.exports = n(13);
  },
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                      " */"),
                  i = r.sources.map(function(e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */";
                  });
                return [n]
                  .concat(i)
                  .concat([o])
                  .join("\n");
              }
              var a;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (r[i] = !0);
          }
          for (o = 0; o < e.length; o++) {
            var a = e[o];
            (null != a[0] && r[a[0]]) ||
              (n && !a[2] ? (a[2] = n) : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    var r,
      o,
      i = {},
      a =
        ((r = function() {
          return window && document && document.all && !window.atob;
        }),
        function() {
          return void 0 === o && (o = r.apply(this, arguments)), o;
        }),
      l = (function(e) {
        var t = {};
        return function(n) {
          return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
        };
      })(function(e) {
        return document.querySelector(e);
      }),
      u = null,
      c = 0,
      s = [],
      f = n(30);
    function d(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = i[r.id];
        if (o) {
          o.refs++;
          for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) o.parts.push(v(r.parts[a], t));
        } else {
          var l = [];
          for (a = 0; a < r.parts.length; a++) l.push(v(r.parts[a], t));
          i[r.id] = { id: r.id, refs: 1, parts: l };
        }
      }
    }
    function h(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          l = { css: i[1], media: i[2], sourceMap: i[3] };
        r[a] ? r[a].parts.push(l) : n.push((r[a] = { id: a, parts: [l] }));
      }
      return n;
    }
    function p(e, t) {
      var n = l(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = s[s.length - 1];
      if ("top" === e.insertAt)
        r ? (r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t)) : n.insertBefore(t, n.firstChild),
          s.push(t);
      else {
        if ("bottom" !== e.insertAt)
          throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(t);
      }
    }
    function g(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = s.indexOf(e);
      t >= 0 && s.splice(t, 1);
    }
    function y(e) {
      var t = document.createElement("style");
      return (e.attrs.type = "text/css"), m(t, e.attrs), p(e, t), t;
    }
    function m(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function v(e, t) {
      var n, r, o, i;
      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function() {};
        e.css = i;
      }
      if (t.singleton) {
        var a = c++;
        (n = u || (u = y(t))), (r = _.bind(null, n, a, !1)), (o = _.bind(null, n, a, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement("link");
              return (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), m(t, e.attrs), p(e, t), t;
            })(t)),
            (r = x.bind(null, n, t)),
            (o = function() {
              g(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = y(t)),
            (r = k.bind(null, n)),
            (o = function() {
              g(n);
            }));
      return (
        r(e),
        function(t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function(e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error("The style-loader cannot be used in a non-browser environment");
      ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || (t.singleton = a()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = h(e, t);
      return (
        d(n, t),
        function(e) {
          for (var r = [], o = 0; o < n.length; o++) {
            var a = n[o];
            (l = i[a.id]).refs--, r.push(l);
          }
          e && d(h(e, t), t);
          for (o = 0; o < r.length; o++) {
            var l;
            if (0 === (l = r[o]).refs) {
              for (var u = 0; u < l.parts.length; u++) l.parts[u]();
              delete i[l.id];
            }
          }
        }
      );
    };
    var b,
      w =
        ((b = []),
        function(e, t) {
          return (b[e] = t), b.filter(Boolean).join("\n");
        });
    function _(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function k(e, t) {
      var n = t.css,
        r = t.media;
      if ((r && e.setAttribute("media", r), e.styleSheet)) e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    function x(e, t, n) {
      var r = n.css,
        o = n.sourceMap,
        i = void 0 === t.convertToAbsoluteUrls && o;
      (t.convertToAbsoluteUrls || i) && (r = f(r)),
        o &&
          (r +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
            " */");
      var a = new Blob([r], { type: "text/css" }),
        l = e.href;
      (e.href = URL.createObjectURL(a)), l && URL.revokeObjectURL(l);
    }
  },
  ,
  ,
  function(e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    function a(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function(e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (var n, l, u = a(e), c = 1; c < arguments.length; c++) {
            for (var s in (n = Object(arguments[c]))) o.call(n, s) && (u[s] = n[s]);
            if (r) {
              l = r(n);
              for (var f = 0; f < l.length; f++) i.call(n, l[f]) && (u[l[f]] = n[l[f]]);
            }
          }
          return u;
        };
  },
  function(e, t, n) {
    "use strict";
    !(function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      ) {
        0;
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    })(),
      (e.exports = n(14));
  },
  function(e, t, n) {
    "use strict";
    const r = n(17),
      o = n(18),
      i = n(19);
    function a(e, t) {
      return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
    }
    function l(e, t) {
      return t.decode ? o(e) : e;
    }
    function u(e) {
      const t = e.indexOf("#");
      return -1 !== t && (e = e.slice(0, t)), e;
    }
    function c(e) {
      const t = (e = u(e)).indexOf("?");
      return -1 === t ? "" : e.slice(t + 1);
    }
    function s(e, t) {
      return (
        t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim()
          ? (e = Number(e))
          : !t.parseBooleans ||
            null === e ||
            ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
            (e = "true" === e.toLowerCase()),
        e
      );
    }
    function f(e, t) {
      const n = (function(e) {
          let t;
          switch (e.arrayFormat) {
            case "index":
              return (e, n, r) => {
                (t = /\[(\d*)\]$/.exec(e)),
                  (e = e.replace(/\[\d*\]$/, "")),
                  t ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n)) : (r[e] = n);
              };
            case "bracket":
              return (e, n, r) => {
                (t = /(\[\])$/.exec(e)),
                  (e = e.replace(/\[\]$/, "")),
                  t ? (void 0 !== r[e] ? (r[e] = [].concat(r[e], n)) : (r[e] = [n])) : (r[e] = n);
              };
            case "comma":
              return (e, t, n) => {
                const r = "string" == typeof t && t.split("").indexOf(",") > -1 ? t.split(",") : t;
                n[e] = r;
              };
            default:
              return (e, t, n) => {
                void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
              };
          }
        })((t = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", parseNumbers: !1, parseBooleans: !1 }, t))),
        r = Object.create(null);
      if ("string" != typeof e) return r;
      if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
      for (const o of e.split("&")) {
        let [e, a] = i(o.replace(/\+/g, " "), "=");
        (a = void 0 === a ? null : l(a, t)), n(l(e, t), a, r);
      }
      for (const e of Object.keys(r)) {
        const n = r[e];
        if ("object" == typeof n && null !== n) for (const e of Object.keys(n)) n[e] = s(n[e], t);
        else r[e] = s(n, t);
      }
      return !1 === t.sort
        ? r
        : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
            const n = r[t];
            return (
              Boolean(n) && "object" == typeof n && !Array.isArray(n)
                ? (e[t] = (function e(t) {
                    return Array.isArray(t)
                      ? t.sort()
                      : "object" == typeof t
                      ? e(Object.keys(t))
                          .sort((e, t) => Number(e) - Number(t))
                          .map(e => t[e])
                      : t;
                  })(n))
                : (e[t] = n),
              e
            );
          }, Object.create(null));
    }
    (t.extract = c),
      (t.parse = f),
      (t.stringify = (e, t) => {
        if (!e) return "";
        const n = (function(e) {
            switch (e.arrayFormat) {
              case "index":
                return t => (n, r) => {
                  const o = n.length;
                  return void 0 === r
                    ? n
                    : null === r
                    ? [...n, [a(t, e), "[", o, "]"].join("")]
                    : [...n, [a(t, e), "[", a(o, e), "]=", a(r, e)].join("")];
                };
              case "bracket":
                return t => (n, r) =>
                  void 0 === r
                    ? n
                    : null === r
                    ? [...n, [a(t, e), "[]"].join("")]
                    : [...n, [a(t, e), "[]=", a(r, e)].join("")];
              case "comma":
                return t => (n, r, o) =>
                  null == r || 0 === r.length
                    ? n
                    : 0 === o
                    ? [[a(t, e), "=", a(r, e)].join("")]
                    : [[n, a(r, e)].join(",")];
              default:
                return t => (n, r) =>
                  void 0 === r ? n : null === r ? [...n, a(t, e)] : [...n, [a(t, e), "=", a(r, e)].join("")];
            }
          })((t = Object.assign({ encode: !0, strict: !0, arrayFormat: "none" }, t))),
          r = Object.keys(e);
        return (
          !1 !== t.sort && r.sort(t.sort),
          r
            .map(r => {
              const o = e[r];
              return void 0 === o
                ? ""
                : null === o
                ? a(r, t)
                : Array.isArray(o)
                ? o.reduce(n(r), []).join("&")
                : a(r, t) + "=" + a(o, t);
            })
            .filter(e => e.length > 0)
            .join("&")
        );
      }),
      (t.parseUrl = (e, t) => ({ url: u(e).split("?")[0] || "", query: f(c(e), t) }));
  },
  ,
  ,
  function(e, t, n) {
    "use strict";
    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(8),
      o = 60103,
      i = 60106;
    (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
    var a = 60109,
      l = 60110,
      u = 60112;
    t.Suspense = 60113;
    var c = 60115,
      s = 60116;
    if ("function" == typeof Symbol && Symbol.for) {
      var f = Symbol.for;
      (o = f("react.element")),
        (i = f("react.portal")),
        (t.Fragment = f("react.fragment")),
        (t.StrictMode = f("react.strict_mode")),
        (t.Profiler = f("react.profiler")),
        (a = f("react.provider")),
        (l = f("react.context")),
        (u = f("react.forward_ref")),
        (t.Suspense = f("react.suspense")),
        (c = f("react.memo")),
        (s = f("react.lazy"));
    }
    var d = "function" == typeof Symbol && Symbol.iterator;
    function h(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var p = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {},
      },
      g = {};
    function y(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || p);
    }
    function m() {}
    function v(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || p);
    }
    (y.prototype.isReactComponent = {}),
      (y.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(h(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (y.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (m.prototype = y.prototype);
    var b = (v.prototype = new m());
    (b.constructor = v), r(b, y.prototype), (b.isPureReactComponent = !0);
    var w = { current: null },
      _ = Object.prototype.hasOwnProperty,
      k = { key: !0, ref: !0, __self: !0, __source: !0 };
    function x(e, t, n) {
      var r,
        i = {},
        a = null,
        l = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t))
          _.call(t, r) && !k.hasOwnProperty(r) && (i[r] = t[r]);
      var u = arguments.length - 2;
      if (1 === u) i.children = n;
      else if (1 < u) {
        for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
        i.children = c;
      }
      if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
      return { $$typeof: o, type: e, key: a, ref: l, props: i, _owner: w.current };
    }
    function S(e) {
      return "object" == typeof e && null !== e && e.$$typeof === o;
    }
    var E = /\/+/g;
    function O(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function(e) {
                return t[e];
              })
            );
          })("" + e.key)
        : t.toString(36);
    }
    function C(e, t, n, r, a) {
      var l = typeof e;
      ("undefined" !== l && "boolean" !== l) || (e = null);
      var u = !1;
      if (null === e) u = !0;
      else
        switch (l) {
          case "string":
          case "number":
            u = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case o:
              case i:
                u = !0;
            }
        }
      if (u)
        return (
          (a = a((u = e))),
          (e = "" === r ? "." + O(u, 0) : r),
          Array.isArray(a)
            ? ((n = ""),
              null != e && (n = e.replace(E, "$&/") + "/"),
              C(a, t, n, "", function(e) {
                return e;
              }))
            : null != a &&
              (S(a) &&
                (a = (function(e, t) {
                  return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                })(a, n + (!a.key || (u && u.key === a.key) ? "" : ("" + a.key).replace(E, "$&/") + "/") + e)),
              t.push(a)),
          1
        );
      if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
        for (var c = 0; c < e.length; c++) {
          var s = r + O((l = e[c]), c);
          u += C(l, t, n, s, a);
        }
      else if (
        "function" ==
        typeof (s = (function(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
            ? e
            : null;
        })(e))
      )
        for (e = s.call(e), c = 0; !(l = e.next()).done; ) u += C((l = l.value), t, n, (s = r + O(l, c++)), a);
      else if ("object" === l)
        throw ((t = "" + e),
        Error(h(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
      return u;
    }
    function P(e, t, n) {
      if (null == e) return e;
      var r = [],
        o = 0;
      return (
        C(e, r, "", "", function(e) {
          return t.call(n, e, o++);
        }),
        r
      );
    }
    function N(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()),
          (e._status = 0),
          (e._result = t),
          t.then(
            function(t) {
              0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
            },
            function(t) {
              0 === e._status && ((e._status = 2), (e._result = t));
            }
          );
      }
      if (1 === e._status) return e._result;
      throw e._result;
    }
    var M = { current: null };
    function T() {
      var e = M.current;
      if (null === e) throw Error(h(321));
      return e;
    }
    var j = {
      ReactCurrentDispatcher: M,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: w,
      IsSomeRendererActing: { current: !1 },
      assign: r,
    };
    (t.Children = {
      map: P,
      forEach: function(e, t, n) {
        P(
          e,
          function() {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function(e) {
        var t = 0;
        return (
          P(e, function() {
            t++;
          }),
          t
        );
      },
      toArray: function(e) {
        return (
          P(e, function(e) {
            return e;
          }) || []
        );
      },
      only: function(e) {
        if (!S(e)) throw Error(h(143));
        return e;
      },
    }),
      (t.Component = y),
      (t.PureComponent = v),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
      (t.cloneElement = function(e, t, n) {
        if (null == e) throw Error(h(267, e));
        var i = r({}, e.props),
          a = e.key,
          l = e.ref,
          u = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
            void 0 !== t.key && (a = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var c = e.type.defaultProps;
          for (s in t) _.call(t, s) && !k.hasOwnProperty(s) && (i[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) i.children = n;
        else if (1 < s) {
          c = Array(s);
          for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
          i.children = c;
        }
        return { $$typeof: o, type: e.type, key: a, ref: l, props: i, _owner: u };
      }),
      (t.createContext = function(e, t) {
        return (
          void 0 === t && (t = null),
          ((e = {
            $$typeof: l,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = { $$typeof: a, _context: e }),
          (e.Consumer = e)
        );
      }),
      (t.createElement = x),
      (t.createFactory = function(e) {
        var t = x.bind(null, e);
        return (t.type = e), t;
      }),
      (t.createRef = function() {
        return { current: null };
      }),
      (t.forwardRef = function(e) {
        return { $$typeof: u, render: e };
      }),
      (t.isValidElement = S),
      (t.lazy = function(e) {
        return { $$typeof: s, _payload: { _status: -1, _result: e }, _init: N };
      }),
      (t.memo = function(e, t) {
        return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
      }),
      (t.useCallback = function(e, t) {
        return T().useCallback(e, t);
      }),
      (t.useContext = function(e, t) {
        return T().useContext(e, t);
      }),
      (t.useDebugValue = function() {}),
      (t.useEffect = function(e, t) {
        return T().useEffect(e, t);
      }),
      (t.useImperativeHandle = function(e, t, n) {
        return T().useImperativeHandle(e, t, n);
      }),
      (t.useLayoutEffect = function(e, t) {
        return T().useLayoutEffect(e, t);
      }),
      (t.useMemo = function(e, t) {
        return T().useMemo(e, t);
      }),
      (t.useReducer = function(e, t, n) {
        return T().useReducer(e, t, n);
      }),
      (t.useRef = function(e) {
        return T().useRef(e);
      }),
      (t.useState = function(e) {
        return T().useState(e);
      }),
      (t.version = "17.0.2");
  },
  function(e, t, n) {
    "use strict";
    /** @license React v17.0.2
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(0),
      o = n(8),
      i = n(15);
    function a(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!r) throw Error(a(227));
    var l = new Set(),
      u = {};
    function c(e, t) {
      s(e, t), s(e + "Capture", t);
    }
    function s(e, t) {
      for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
    }
    var f = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
      d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      h = Object.prototype.hasOwnProperty,
      p = {},
      g = {};
    function y(e, t, n, r, o, i, a) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = a);
    }
    var m = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function(e) {
        m[e] = new y(e, 0, !1, e, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function(e) {
        var t = e[0];
        m[t] = new y(t, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        m[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        m[e] = new y(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function(e) {
          m[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        m[e] = new y(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function(e) {
        m[e] = new y(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function(e) {
        m[e] = new y(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function(e) {
        m[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var v = /[\-:]([a-z])/g;
    function b(e) {
      return e[1].toUpperCase();
    }
    function w(e, t, n, r) {
      var o = m.hasOwnProperty(t) ? m[t] : null;
      (null !== o
        ? 0 === o.type
        : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
        ((function(e, t, n, r) {
          if (
            null == t ||
            (function(e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, o, r) && (n = null),
        r || null === o
          ? (function(e) {
              return !!h.call(g, e) || (!h.call(p, e) && (d.test(e) ? (g[e] = !0) : ((p[e] = !0), !1)));
            })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : o.mustUseProperty
          ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function(e) {
        var t = e.replace(v, b);
        m[t] = new y(t, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(v, b);
        m[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(v, b);
        m[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function(e) {
        m[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (m.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
      ["src", "href", "action", "formAction"].forEach(function(e) {
        m[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      k = 60103,
      x = 60106,
      S = 60107,
      E = 60108,
      O = 60114,
      C = 60109,
      P = 60110,
      N = 60112,
      M = 60113,
      T = 60120,
      j = 60115,
      L = 60116,
      A = 60121,
      z = 60128,
      R = 60129,
      D = 60130,
      I = 60131;
    if ("function" == typeof Symbol && Symbol.for) {
      var F = Symbol.for;
      (k = F("react.element")),
        (x = F("react.portal")),
        (S = F("react.fragment")),
        (E = F("react.strict_mode")),
        (O = F("react.profiler")),
        (C = F("react.provider")),
        (P = F("react.context")),
        (N = F("react.forward_ref")),
        (M = F("react.suspense")),
        (T = F("react.suspense_list")),
        (j = F("react.memo")),
        (L = F("react.lazy")),
        (A = F("react.block")),
        F("react.scope"),
        (z = F("react.opaque.id")),
        (R = F("react.debug_trace_mode")),
        (D = F("react.offscreen")),
        (I = F("react.legacy_hidden"));
    }
    var U,
      B = "function" == typeof Symbol && Symbol.iterator;
    function W(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (B && e[B]) || e["@@iterator"])
        ? e
        : null;
    }
    function H(e) {
      if (void 0 === U)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          U = (t && t[1]) || "";
        }
      return "\n" + U + e;
    }
    var V = !1;
    function q(e, t) {
      if (!e || V) return "";
      V = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function() {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function() {
                throw Error();
              },
            }),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (e) {
        if (e && r && "string" == typeof e.stack) {
          for (
            var o = e.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, l = i.length - 1;
            1 <= a && 0 <= l && o[a] !== i[l];

          )
            l--;
          for (; 1 <= a && 0 <= l; a--, l--)
            if (o[a] !== i[l]) {
              if (1 !== a || 1 !== l)
                do {
                  if ((a--, 0 > --l || o[a] !== i[l])) return "\n" + o[a].replace(" at new ", " at ");
                } while (1 <= a && 0 <= l);
              break;
            }
        }
      } finally {
        (V = !1), (Error.prepareStackTrace = n);
      }
      return (e = e ? e.displayName || e.name : "") ? H(e) : "";
    }
    function G(e) {
      switch (e.tag) {
        case 5:
          return H(e.type);
        case 16:
          return H("Lazy");
        case 13:
          return H("Suspense");
        case 19:
          return H("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = q(e.type, !1));
        case 11:
          return (e = q(e.type.render, !1));
        case 22:
          return (e = q(e.type._render, !1));
        case 1:
          return (e = q(e.type, !0));
        default:
          return "";
      }
    }
    function $(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case S:
          return "Fragment";
        case x:
          return "Portal";
        case O:
          return "Profiler";
        case E:
          return "StrictMode";
        case M:
          return "Suspense";
        case T:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case P:
            return (e.displayName || "Context") + ".Consumer";
          case C:
            return (e._context.displayName || "Context") + ".Provider";
          case N:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ""), e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
          case j:
            return $(e.type);
          case A:
            return $(e._render);
          case L:
            (t = e._payload), (e = e._init);
            try {
              return $(e(t));
            } catch (e) {}
        }
      return null;
    }
    function Y(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function X(e) {
      var t = e.type;
      return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
    }
    function Q(e) {
      e._valueTracker ||
        (e._valueTracker = (function(e) {
          var t = X(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var o = n.get,
              i = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                  return o.call(this);
                },
                set: function(e) {
                  (r = "" + e), i.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function() {
                  return r;
                },
                setValue: function(e) {
                  r = "" + e;
                },
                stopTracking: function() {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function K(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return e && (r = X(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
    }
    function Z(e) {
      if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function J(e, t) {
      var n = t.checked;
      return o({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function ee(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = Y(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value,
        });
    }
    function te(e, t) {
      null != (t = t.checked) && w(e, "checked", t, !1);
    }
    function ne(e, t) {
      te(e, t);
      var n = Y(t.value),
        r = t.type;
      if (null != n)
        "number" === r
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? oe(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && oe(e, t.type, Y(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
    }
    function re(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
      }
      "" !== (n = e.name) && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== n && (e.name = n);
    }
    function oe(e, t, n) {
      ("number" === t && Z(e.ownerDocument) === e) ||
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function ie(e, t) {
      return (
        (e = o({ children: void 0 }, t)),
        (t = (function(e) {
          var t = "";
          return (
            r.Children.forEach(e, function(e) {
              null != e && (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function ae(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
          (o = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + Y(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
          null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function le(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
      return o({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
    }
    function ue(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(a(92));
          if (Array.isArray(n)) {
            if (!(1 >= n.length)) throw Error(a(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ""), (n = t);
      }
      e._wrapperState = { initialValue: Y(n) };
    }
    function ce(e, t) {
      var n = Y(t.value),
        r = Y(t.defaultValue);
      null != n &&
        ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r);
    }
    function se(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
    }
    var fe = "http://www.w3.org/1999/xhtml",
      de = "http://www.w3.org/2000/svg";
    function he(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function pe(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? he(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var ge,
      ye = (function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function(t, n, r, o) {
              MSApp.execUnsafeLocalFunction(function() {
                return e(t, n);
              });
            }
          : e;
      })(function(e, t) {
        if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            (ge = ge || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = ge.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function me(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    var ve = {
        animationIterationCount: !0,
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
        strokeWidth: !0,
      },
      be = ["Webkit", "ms", "Moz", "O"];
    function we(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n || "number" != typeof t || 0 === t || (ve.hasOwnProperty(e) && ve[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function _e(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            o = we(n, t[n], r);
          "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
    }
    Object.keys(ve).forEach(function(e) {
      be.forEach(function(t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ve[t] = ve[e]);
      });
    });
    var ke = o(
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
        wbr: !0,
      }
    );
    function xe(e, t) {
      if (t) {
        if (ke[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(a(60));
          if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(a(61));
        }
        if (null != t.style && "object" != typeof t.style) throw Error(a(62));
      }
    }
    function Se(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Ee(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var Oe = null,
      Ce = null,
      Pe = null;
    function Ne(e) {
      if ((e = Zr(e))) {
        if ("function" != typeof Oe) throw Error(a(280));
        var t = e.stateNode;
        t && ((t = eo(t)), Oe(e.stateNode, e.type, t));
      }
    }
    function Me(e) {
      Ce ? (Pe ? Pe.push(e) : (Pe = [e])) : (Ce = e);
    }
    function Te() {
      if (Ce) {
        var e = Ce,
          t = Pe;
        if (((Pe = Ce = null), Ne(e), t)) for (e = 0; e < t.length; e++) Ne(t[e]);
      }
    }
    function je(e, t) {
      return e(t);
    }
    function Le(e, t, n, r, o) {
      return e(t, n, r, o);
    }
    function Ae() {}
    var ze = je,
      Re = !1,
      De = !1;
    function Ie() {
      (null === Ce && null === Pe) || (Ae(), Te());
    }
    function Fe(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var r = eo(n);
      if (null === r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) ||
            (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
      return n;
    }
    var Ue = !1;
    if (f)
      try {
        var Be = {};
        Object.defineProperty(Be, "passive", {
          get: function() {
            Ue = !0;
          },
        }),
          window.addEventListener("test", Be, Be),
          window.removeEventListener("test", Be, Be);
      } catch (e) {
        Ue = !1;
      }
    function We(e, t, n, r, o, i, a, l, u) {
      var c = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, c);
      } catch (e) {
        this.onError(e);
      }
    }
    var He = !1,
      Ve = null,
      qe = !1,
      Ge = null,
      $e = {
        onError: function(e) {
          (He = !0), (Ve = e);
        },
      };
    function Ye(e, t, n, r, o, i, a, l, u) {
      (He = !1), (Ve = null), We.apply($e, arguments);
    }
    function Xe(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function Qe(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
      }
      return null;
    }
    function Ke(e) {
      if (Xe(e) !== e) throw Error(a(188));
    }
    function Ze(e) {
      if (
        !(e = (function(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = Xe(e))) throw Error(a(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var o = n.return;
            if (null === o) break;
            var i = o.alternate;
            if (null === i) {
              if (null !== (r = o.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (o.child === i.child) {
              for (i = o.child; i; ) {
                if (i === n) return Ke(o), e;
                if (i === r) return Ke(o), t;
                i = i.sibling;
              }
              throw Error(a(188));
            }
            if (n.return !== r.return) (n = o), (r = i);
            else {
              for (var l = !1, u = o.child; u; ) {
                if (u === n) {
                  (l = !0), (n = o), (r = i);
                  break;
                }
                if (u === r) {
                  (l = !0), (r = o), (n = i);
                  break;
                }
                u = u.sibling;
              }
              if (!l) {
                for (u = i.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = i), (r = o);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = i), (n = o);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) throw Error(a(189));
              }
            }
            if (n.alternate !== r) throw Error(a(190));
          }
          if (3 !== n.tag) throw Error(a(188));
          return n.stateNode.current === n ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    function Je(e, t) {
      for (var n = e.alternate; null !== t; ) {
        if (t === e || t === n) return !0;
        t = t.return;
      }
      return !1;
    }
    var et,
      tt,
      nt,
      rt,
      ot = !1,
      it = [],
      at = null,
      lt = null,
      ut = null,
      ct = new Map(),
      st = new Map(),
      ft = [],
      dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
    function ht(e, t, n, r, o) {
      return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: o, targetContainers: [r] };
    }
    function pt(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          at = null;
          break;
        case "dragenter":
        case "dragleave":
          lt = null;
          break;
        case "mouseover":
        case "mouseout":
          ut = null;
          break;
        case "pointerover":
        case "pointerout":
          ct.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          st.delete(t.pointerId);
      }
    }
    function gt(e, t, n, r, o, i) {
      return null === e || e.nativeEvent !== i
        ? ((e = ht(t, n, r, o, i)), null !== t && null !== (t = Zr(t)) && tt(t), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
    }
    function yt(e) {
      var t = Kr(e.target);
      if (null !== t) {
        var n = Xe(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = Qe(n)))
              return (
                (e.blockedOn = t),
                void rt(e.lanePriority, function() {
                  i.unstable_runWithPriority(e.priority, function() {
                    nt(n);
                  });
                })
              );
          } else if (3 === t && n.stateNode.hydrate)
            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function mt(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = Zr(n)) && tt(t), (e.blockedOn = n), !1;
        t.shift();
      }
      return !0;
    }
    function vt(e, t, n) {
      mt(e) && n.delete(t);
    }
    function bt() {
      for (ot = !1; 0 < it.length; ) {
        var e = it[0];
        if (null !== e.blockedOn) {
          null !== (e = Zr(e.blockedOn)) && et(e);
          break;
        }
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) {
            e.blockedOn = n;
            break;
          }
          t.shift();
        }
        null === e.blockedOn && it.shift();
      }
      null !== at && mt(at) && (at = null),
        null !== lt && mt(lt) && (lt = null),
        null !== ut && mt(ut) && (ut = null),
        ct.forEach(vt),
        st.forEach(vt);
    }
    function wt(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null), ot || ((ot = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, bt)));
    }
    function _t(e) {
      function t(t) {
        return wt(t, e);
      }
      if (0 < it.length) {
        wt(it[0], e);
        for (var n = 1; n < it.length; n++) {
          var r = it[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== at && wt(at, e),
          null !== lt && wt(lt, e),
          null !== ut && wt(ut, e),
          ct.forEach(t),
          st.forEach(t),
          n = 0;
        n < ft.length;
        n++
      )
        (r = ft[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < ft.length && null === (n = ft[0]).blockedOn; ) yt(n), null === n.blockedOn && ft.shift();
    }
    function kt(e, t) {
      var n = {};
      return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
    }
    var xt = {
        animationend: kt("Animation", "AnimationEnd"),
        animationiteration: kt("Animation", "AnimationIteration"),
        animationstart: kt("Animation", "AnimationStart"),
        transitionend: kt("Transition", "TransitionEnd"),
      },
      St = {},
      Et = {};
    function Ot(e) {
      if (St[e]) return St[e];
      if (!xt[e]) return e;
      var t,
        n = xt[e];
      for (t in n) if (n.hasOwnProperty(t) && t in Et) return (St[e] = n[t]);
      return e;
    }
    f &&
      ((Et = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete xt.animationend.animation, delete xt.animationiteration.animation, delete xt.animationstart.animation),
      "TransitionEvent" in window || delete xt.transitionend.transition);
    var Ct = Ot("animationend"),
      Pt = Ot("animationiteration"),
      Nt = Ot("animationstart"),
      Mt = Ot("transitionend"),
      Tt = new Map(),
      jt = new Map(),
      Lt = [
        "abort",
        "abort",
        Ct,
        "animationEnd",
        Pt,
        "animationIteration",
        Nt,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        Mt,
        "transitionEnd",
        "waiting",
        "waiting",
      ];
    function At(e, t) {
      for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
          o = e[n + 1];
        (o = "on" + (o[0].toUpperCase() + o.slice(1))), jt.set(r, t), Tt.set(r, o), c(o, [r]);
      }
    }
    (0, i.unstable_now)();
    var zt = 8;
    function Rt(e) {
      if (0 != (1 & e)) return (zt = 15), 1;
      if (0 != (2 & e)) return (zt = 14), 2;
      if (0 != (4 & e)) return (zt = 13), 4;
      var t = 24 & e;
      return 0 !== t
        ? ((zt = 12), t)
        : 0 != (32 & e)
        ? ((zt = 11), 32)
        : 0 !== (t = 192 & e)
        ? ((zt = 10), t)
        : 0 != (256 & e)
        ? ((zt = 9), 256)
        : 0 !== (t = 3584 & e)
        ? ((zt = 8), t)
        : 0 != (4096 & e)
        ? ((zt = 7), 4096)
        : 0 !== (t = 4186112 & e)
        ? ((zt = 6), t)
        : 0 !== (t = 62914560 & e)
        ? ((zt = 5), t)
        : 67108864 & e
        ? ((zt = 4), 67108864)
        : 0 != (134217728 & e)
        ? ((zt = 3), 134217728)
        : 0 !== (t = 805306368 & e)
        ? ((zt = 2), t)
        : 0 != (1073741824 & e)
        ? ((zt = 1), 1073741824)
        : ((zt = 8), e);
    }
    function Dt(e, t) {
      var n = e.pendingLanes;
      if (0 === n) return (zt = 0);
      var r = 0,
        o = 0,
        i = e.expiredLanes,
        a = e.suspendedLanes,
        l = e.pingedLanes;
      if (0 !== i) (r = i), (o = zt = 15);
      else if (0 !== (i = 134217727 & n)) {
        var u = i & ~a;
        0 !== u ? ((r = Rt(u)), (o = zt)) : 0 !== (l &= i) && ((r = Rt(l)), (o = zt));
      } else 0 !== (i = n & ~a) ? ((r = Rt(i)), (o = zt)) : 0 !== l && ((r = Rt(l)), (o = zt));
      if (0 === r) return 0;
      if (((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 == (t & a))) {
        if ((Rt(t), o <= zt)) return t;
        zt = o;
      }
      if (0 !== (t = e.entangledLanes))
        for (e = e.entanglements, t &= r; 0 < t; ) (o = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~o);
      return r;
    }
    function It(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
    }
    function Ft(e, t) {
      switch (e) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return 0 === (e = Ut(24 & ~t)) ? Ft(10, t) : e;
        case 10:
          return 0 === (e = Ut(192 & ~t)) ? Ft(8, t) : e;
        case 8:
          return 0 === (e = Ut(3584 & ~t)) && 0 === (e = Ut(4186112 & ~t)) && (e = 512), e;
        case 2:
          return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
      }
      throw Error(a(358, e));
    }
    function Ut(e) {
      return e & -e;
    }
    function Bt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Wt(e, t, n) {
      e.pendingLanes |= t;
      var r = t - 1;
      (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
    }
    var Ht = Math.clz32
        ? Math.clz32
        : function(e) {
            return 0 === e ? 32 : (31 - ((Vt(e) / qt) | 0)) | 0;
          },
      Vt = Math.log,
      qt = Math.LN2;
    var Gt = i.unstable_UserBlockingPriority,
      $t = i.unstable_runWithPriority,
      Yt = !0;
    function Xt(e, t, n, r) {
      Re || Ae();
      var o = Kt,
        i = Re;
      Re = !0;
      try {
        Le(o, e, t, n, r);
      } finally {
        (Re = i) || Ie();
      }
    }
    function Qt(e, t, n, r) {
      $t(Gt, Kt.bind(null, e, t, n, r));
    }
    function Kt(e, t, n, r) {
      var o;
      if (Yt)
        if ((o = 0 == (4 & t)) && 0 < it.length && -1 < dt.indexOf(e)) (e = ht(null, e, t, n, r)), it.push(e);
        else {
          var i = Zt(e, t, n, r);
          if (null === i) o && pt(e, r);
          else {
            if (o) {
              if (-1 < dt.indexOf(e)) return (e = ht(i, e, t, n, r)), void it.push(e);
              if (
                (function(e, t, n, r, o) {
                  switch (t) {
                    case "focusin":
                      return (at = gt(at, e, t, n, r, o)), !0;
                    case "dragenter":
                      return (lt = gt(lt, e, t, n, r, o)), !0;
                    case "mouseover":
                      return (ut = gt(ut, e, t, n, r, o)), !0;
                    case "pointerover":
                      var i = o.pointerId;
                      return ct.set(i, gt(ct.get(i) || null, e, t, n, r, o)), !0;
                    case "gotpointercapture":
                      return (i = o.pointerId), st.set(i, gt(st.get(i) || null, e, t, n, r, o)), !0;
                  }
                  return !1;
                })(i, e, t, n, r)
              )
                return;
              pt(e, r);
            }
            Mr(e, t, r, null, n);
          }
        }
    }
    function Zt(e, t, n, r) {
      var o = Ee(r);
      if (null !== (o = Kr(o))) {
        var i = Xe(o);
        if (null === i) o = null;
        else {
          var a = i.tag;
          if (13 === a) {
            if (null !== (o = Qe(i))) return o;
            o = null;
          } else if (3 === a) {
            if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
            o = null;
          } else i !== o && (o = null);
        }
      }
      return Mr(e, t, r, o, n), null;
    }
    var Jt = null,
      en = null,
      tn = null;
    function nn() {
      if (tn) return tn;
      var e,
        t,
        n = en,
        r = n.length,
        o = "value" in Jt ? Jt.value : Jt.textContent,
        i = o.length;
      for (e = 0; e < r && n[e] === o[e]; e++);
      var a = r - e;
      for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
      return (tn = o.slice(e, 1 < t ? 1 - t : void 0));
    }
    function rn(e) {
      var t = e.keyCode;
      return (
        "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function on() {
      return !0;
    }
    function an() {
      return !1;
    }
    function ln(e) {
      function t(t, n, r, o, i) {
        for (var a in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
        return (
          (this.isDefaultPrevented = (null != o.defaultPrevented
          ? o.defaultPrevented
          : !1 === o.returnValue)
            ? on
            : an),
          (this.isPropagationStopped = an),
          this
        );
      }
      return (
        o(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = on));
          },
          stopPropagation: function() {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = on));
          },
          persist: function() {},
          isPersistent: on,
        }),
        t
      );
    }
    var un,
      cn,
      sn,
      fn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      dn = ln(fn),
      hn = o({}, fn, { view: 0, detail: 0 }),
      pn = ln(hn),
      gn = o({}, hn, {
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
        getModifierState: On,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function(e) {
          return "movementX" in e
            ? e.movementX
            : (e !== sn &&
                (sn && "mousemove" === e.type
                  ? ((un = e.screenX - sn.screenX), (cn = e.screenY - sn.screenY))
                  : (cn = un = 0),
                (sn = e)),
              un);
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY : cn;
        },
      }),
      yn = ln(gn),
      mn = ln(o({}, gn, { dataTransfer: 0 })),
      vn = ln(o({}, hn, { relatedTarget: 0 })),
      bn = ln(o({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      wn = ln(
        o({}, fn, {
          clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
          },
        })
      ),
      _n = ln(o({}, fn, { data: 0 })),
      kn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      xn = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      Sn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function En(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e];
    }
    function On() {
      return En;
    }
    var Cn = ln(
        o({}, hn, {
          key: function(e) {
            if (e.key) {
              var t = kn[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = rn(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? xn[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: On,
          charCode: function(e) {
            return "keypress" === e.type ? rn(e) : 0;
          },
          keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function(e) {
            return "keypress" === e.type ? rn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
        })
      ),
      Pn = ln(
        o({}, gn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      Nn = ln(
        o({}, hn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: On,
        })
      ),
      Mn = ln(o({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Tn = ln(
        o({}, gn, {
          deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function(e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      jn = [9, 13, 27, 32],
      Ln = f && "CompositionEvent" in window,
      An = null;
    f && "documentMode" in document && (An = document.documentMode);
    var zn = f && "TextEvent" in window && !An,
      Rn = f && (!Ln || (An && 8 < An && 11 >= An)),
      Dn = String.fromCharCode(32),
      In = !1;
    function Fn(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== jn.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Un(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Bn = !1;
    var Wn = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
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
      week: !0,
    };
    function Hn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!Wn[e.type] : "textarea" === t;
    }
    function Vn(e, t, n, r) {
      Me(r),
        0 < (t = jr(t, "onChange")).length &&
          ((n = new dn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
    }
    var qn = null,
      Gn = null;
    function $n(e) {
      Sr(e, 0);
    }
    function Yn(e) {
      if (K(Jr(e))) return e;
    }
    function Xn(e, t) {
      if ("change" === e) return t;
    }
    var Qn = !1;
    if (f) {
      var Kn;
      if (f) {
        var Zn = "oninput" in document;
        if (!Zn) {
          var Jn = document.createElement("div");
          Jn.setAttribute("oninput", "return;"), (Zn = "function" == typeof Jn.oninput);
        }
        Kn = Zn;
      } else Kn = !1;
      Qn = Kn && (!document.documentMode || 9 < document.documentMode);
    }
    function er() {
      qn && (qn.detachEvent("onpropertychange", tr), (Gn = qn = null));
    }
    function tr(e) {
      if ("value" === e.propertyName && Yn(Gn)) {
        var t = [];
        if ((Vn(t, Gn, e, Ee(e)), (e = $n), Re)) e(t);
        else {
          Re = !0;
          try {
            je(e, t);
          } finally {
            (Re = !1), Ie();
          }
        }
      }
    }
    function nr(e, t, n) {
      "focusin" === e ? (er(), (Gn = n), (qn = t).attachEvent("onpropertychange", tr)) : "focusout" === e && er();
    }
    function rr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yn(Gn);
    }
    function or(e, t) {
      if ("click" === e) return Yn(t);
    }
    function ir(e, t) {
      if ("input" === e || "change" === e) return Yn(t);
    }
    var ar =
        "function" == typeof Object.is
          ? Object.is
          : function(e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      lr = Object.prototype.hasOwnProperty;
    function ur(e, t) {
      if (ar(e, t)) return !0;
      if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) if (!lr.call(t, n[r]) || !ar(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    function cr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function sr(e, t) {
      var n,
        r = cr(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = cr(r);
      }
    }
    function fr() {
      for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = Z((e = t.contentWindow).document);
      }
      return t;
    }
    function dr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var hr = f && "documentMode" in document && 11 >= document.documentMode,
      pr = null,
      gr = null,
      yr = null,
      mr = !1;
    function vr(e, t, n) {
      var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      mr ||
        null == pr ||
        pr !== Z(r) ||
        ("selectionStart" in (r = pr) && dr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
        (yr && ur(yr, r)) ||
          ((yr = r),
          0 < (r = jr(gr, "onSelect")).length &&
            ((t = new dn("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = pr))));
    }
    At(
      "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
        " "
      ),
      0
    ),
      At(
        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
          " "
        ),
        1
      ),
      At(Lt, 2);
    for (
      var br = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), wr = 0;
      wr < br.length;
      wr++
    )
      jt.set(br[wr], 0);
    s("onMouseEnter", ["mouseout", "mouseover"]),
      s("onMouseLeave", ["mouseout", "mouseover"]),
      s("onPointerEnter", ["pointerout", "pointerover"]),
      s("onPointerLeave", ["pointerout", "pointerover"]),
      c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
      c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
      c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
      c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
      c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
      kr = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
    function xr(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = n),
        (function(e, t, n, r, o, i, l, u, c) {
          if ((Ye.apply(this, arguments), He)) {
            if (!He) throw Error(a(198));
            var s = Ve;
            (He = !1), (Ve = null), qe || ((qe = !0), (Ge = s));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function Sr(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = r.event;
        r = r.listeners;
        e: {
          var i = void 0;
          if (t)
            for (var a = r.length - 1; 0 <= a; a--) {
              var l = r[a],
                u = l.instance,
                c = l.currentTarget;
              if (((l = l.listener), u !== i && o.isPropagationStopped())) break e;
              xr(o, l, c), (i = u);
            }
          else
            for (a = 0; a < r.length; a++) {
              if (
                ((u = (l = r[a]).instance),
                (c = l.currentTarget),
                (l = l.listener),
                u !== i && o.isPropagationStopped())
              )
                break e;
              xr(o, l, c), (i = u);
            }
        }
      }
      if (qe) throw ((e = Ge), (qe = !1), (Ge = null), e);
    }
    function Er(e, t) {
      var n = to(t),
        r = e + "__bubble";
      n.has(r) || (Nr(t, e, 2, !1), n.add(r));
    }
    var Or =
      "_reactListening" +
      Math.random()
        .toString(36)
        .slice(2);
    function Cr(e) {
      e[Or] ||
        ((e[Or] = !0),
        l.forEach(function(t) {
          kr.has(t) || Pr(t, !1, e, null), Pr(t, !0, e, null);
        }));
    }
    function Pr(e, t, n, r) {
      var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
        i = n;
      if (("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument), null !== r && !t && kr.has(e))) {
        if ("scroll" !== e) return;
        (o |= 2), (i = r);
      }
      var a = to(i),
        l = e + "__" + (t ? "capture" : "bubble");
      a.has(l) || (t && (o |= 4), Nr(i, e, o, t), a.add(l));
    }
    function Nr(e, t, n, r) {
      var o = jt.get(t);
      switch (void 0 === o ? 2 : o) {
        case 0:
          o = Xt;
          break;
        case 1:
          o = Qt;
          break;
        default:
          o = Kt;
      }
      (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Ue || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (o = !0),
        r
          ? void 0 !== o
            ? e.addEventListener(t, n, { capture: !0, passive: o })
            : e.addEventListener(t, n, !0)
          : void 0 !== o
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1);
    }
    function Mr(e, t, n, r, o) {
      var i = r;
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var a = r.tag;
          if (3 === a || 4 === a) {
            var l = r.stateNode.containerInfo;
            if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
            if (4 === a)
              for (a = r.return; null !== a; ) {
                var u = a.tag;
                if (
                  (3 === u || 4 === u) &&
                  ((u = a.stateNode.containerInfo) === o || (8 === u.nodeType && u.parentNode === o))
                )
                  return;
                a = a.return;
              }
            for (; null !== l; ) {
              if (null === (a = Kr(l))) return;
              if (5 === (u = a.tag) || 6 === u) {
                r = i = a;
                continue e;
              }
              l = l.parentNode;
            }
          }
          r = r.return;
        }
      !(function(e, t, n) {
        if (De) return e(t, n);
        De = !0;
        try {
          ze(e, t, n);
        } finally {
          (De = !1), Ie();
        }
      })(function() {
        var r = i,
          o = Ee(n),
          a = [];
        e: {
          var l = Tt.get(e);
          if (void 0 !== l) {
            var u = dn,
              c = e;
            switch (e) {
              case "keypress":
                if (0 === rn(n)) break e;
              case "keydown":
              case "keyup":
                u = Cn;
                break;
              case "focusin":
                (c = "focus"), (u = vn);
                break;
              case "focusout":
                (c = "blur"), (u = vn);
                break;
              case "beforeblur":
              case "afterblur":
                u = vn;
                break;
              case "click":
                if (2 === n.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                u = yn;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                u = mn;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                u = Nn;
                break;
              case Ct:
              case Pt:
              case Nt:
                u = bn;
                break;
              case Mt:
                u = Mn;
                break;
              case "scroll":
                u = pn;
                break;
              case "wheel":
                u = Tn;
                break;
              case "copy":
              case "cut":
              case "paste":
                u = wn;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                u = Pn;
            }
            var s = 0 != (4 & t),
              f = !s && "scroll" === e,
              d = s ? (null !== l ? l + "Capture" : null) : l;
            s = [];
            for (var h, p = r; null !== p; ) {
              var g = (h = p).stateNode;
              if (
                (5 === h.tag && null !== g && ((h = g), null !== d && null != (g = Fe(p, d)) && s.push(Tr(p, g, h))), f)
              )
                break;
              p = p.return;
            }
            0 < s.length && ((l = new u(l, c, null, n, o)), a.push({ event: l, listeners: s }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((u = "mouseout" === e || "pointerout" === e),
            (!(l = "mouseover" === e || "pointerover" === e) ||
              0 != (16 & t) ||
              !(c = n.relatedTarget || n.fromElement) ||
              (!Kr(c) && !c[Xr])) &&
              (u || l) &&
              ((l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
              u
                ? ((u = r),
                  null !== (c = (c = n.relatedTarget || n.toElement) ? Kr(c) : null) &&
                    (c !== (f = Xe(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                    (c = null))
                : ((u = null), (c = r)),
              u !== c))
          ) {
            if (
              ((s = yn),
              (g = "onMouseLeave"),
              (d = "onMouseEnter"),
              (p = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) ||
                ((s = Pn), (g = "onPointerLeave"), (d = "onPointerEnter"), (p = "pointer")),
              (f = null == u ? l : Jr(u)),
              (h = null == c ? l : Jr(c)),
              ((l = new s(g, p + "leave", u, n, o)).target = f),
              (l.relatedTarget = h),
              (g = null),
              Kr(o) === r && (((s = new s(d, p + "enter", c, n, o)).target = h), (s.relatedTarget = f), (g = s)),
              (f = g),
              u && c)
            )
              e: {
                for (d = c, p = 0, h = s = u; h; h = Lr(h)) p++;
                for (h = 0, g = d; g; g = Lr(g)) h++;
                for (; 0 < p - h; ) (s = Lr(s)), p--;
                for (; 0 < h - p; ) (d = Lr(d)), h--;
                for (; p--; ) {
                  if (s === d || (null !== d && s === d.alternate)) break e;
                  (s = Lr(s)), (d = Lr(d));
                }
                s = null;
              }
            else s = null;
            null !== u && Ar(a, l, u, s, !1), null !== c && null !== f && Ar(a, f, c, s, !0);
          }
          if (
            "select" === (u = (l = r ? Jr(r) : window).nodeName && l.nodeName.toLowerCase()) ||
            ("input" === u && "file" === l.type)
          )
            var y = Xn;
          else if (Hn(l))
            if (Qn) y = ir;
            else {
              y = rr;
              var m = nr;
            }
          else
            (u = l.nodeName) &&
              "input" === u.toLowerCase() &&
              ("checkbox" === l.type || "radio" === l.type) &&
              (y = or);
          switch (
            (y && (y = y(e, r))
              ? Vn(a, y, n, o)
              : (m && m(e, l, r),
                "focusout" === e &&
                  (m = l._wrapperState) &&
                  m.controlled &&
                  "number" === l.type &&
                  oe(l, "number", l.value)),
            (m = r ? Jr(r) : window),
            e)
          ) {
            case "focusin":
              (Hn(m) || "true" === m.contentEditable) && ((pr = m), (gr = r), (yr = null));
              break;
            case "focusout":
              yr = gr = pr = null;
              break;
            case "mousedown":
              mr = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (mr = !1), vr(a, n, o);
              break;
            case "selectionchange":
              if (hr) break;
            case "keydown":
            case "keyup":
              vr(a, n, o);
          }
          var v;
          if (Ln)
            e: {
              switch (e) {
                case "compositionstart":
                  var b = "onCompositionStart";
                  break e;
                case "compositionend":
                  b = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  b = "onCompositionUpdate";
                  break e;
              }
              b = void 0;
            }
          else
            Bn
              ? Fn(e, n) && (b = "onCompositionEnd")
              : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
          b &&
            (Rn &&
              "ko" !== n.locale &&
              (Bn || "onCompositionStart" !== b
                ? "onCompositionEnd" === b && Bn && (v = nn())
                : ((en = "value" in (Jt = o) ? Jt.value : Jt.textContent), (Bn = !0))),
            0 < (m = jr(r, b)).length &&
              ((b = new _n(b, e, null, n, o)),
              a.push({ event: b, listeners: m }),
              v ? (b.data = v) : null !== (v = Un(n)) && (b.data = v))),
            (v = zn
              ? (function(e, t) {
                  switch (e) {
                    case "compositionend":
                      return Un(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((In = !0), Dn);
                    case "textInput":
                      return (e = t.data) === Dn && In ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function(e, t) {
                  if (Bn)
                    return "compositionend" === e || (!Ln && Fn(e, t))
                      ? ((e = nn()), (tn = en = Jt = null), (Bn = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                      return null;
                    case "keypress":
                      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return Rn && "ko" !== t.locale ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n)) &&
              0 < (r = jr(r, "onBeforeInput")).length &&
                ((o = new _n("onBeforeInput", "beforeinput", null, n, o)),
                a.push({ event: o, listeners: r }),
                (o.data = v));
        }
        Sr(a, t);
      });
    }
    function Tr(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function jr(e, t) {
      for (var n = t + "Capture", r = []; null !== e; ) {
        var o = e,
          i = o.stateNode;
        5 === o.tag &&
          null !== i &&
          ((o = i), null != (i = Fe(e, n)) && r.unshift(Tr(e, i, o)), null != (i = Fe(e, t)) && r.push(Tr(e, i, o))),
          (e = e.return);
      }
      return r;
    }
    function Lr(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function Ar(e, t, n, r, o) {
      for (var i = t._reactName, a = []; null !== n && n !== r; ) {
        var l = n,
          u = l.alternate,
          c = l.stateNode;
        if (null !== u && u === r) break;
        5 === l.tag &&
          null !== c &&
          ((l = c),
          o ? null != (u = Fe(n, i)) && a.unshift(Tr(n, u, l)) : o || (null != (u = Fe(n, i)) && a.push(Tr(n, u, l)))),
          (n = n.return);
      }
      0 !== a.length && e.push({ event: t, listeners: a });
    }
    function zr() {}
    var Rr = null,
      Dr = null;
    function Ir(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function Fr(e, t) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var Ur = "function" == typeof setTimeout ? setTimeout : void 0,
      Br = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function Wr(e) {
      1 === e.nodeType ? (e.textContent = "") : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
    }
    function Hr(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function Vr(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || "$!" === n || "$?" === n) {
            if (0 === t) return e;
            t--;
          } else "/$" === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var qr = 0;
    var Gr = Math.random()
        .toString(36)
        .slice(2),
      $r = "__reactFiber$" + Gr,
      Yr = "__reactProps$" + Gr,
      Xr = "__reactContainer$" + Gr,
      Qr = "__reactEvents$" + Gr;
    function Kr(e) {
      var t = e[$r];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Xr] || n[$r])) {
          if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
            for (e = Vr(e); null !== e; ) {
              if ((n = e[$r])) return n;
              e = Vr(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function Zr(e) {
      return !(e = e[$r] || e[Xr]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
    }
    function Jr(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(a(33));
    }
    function eo(e) {
      return e[Yr] || null;
    }
    function to(e) {
      var t = e[Qr];
      return void 0 === t && (t = e[Qr] = new Set()), t;
    }
    var no = [],
      ro = -1;
    function oo(e) {
      return { current: e };
    }
    function io(e) {
      0 > ro || ((e.current = no[ro]), (no[ro] = null), ro--);
    }
    function ao(e, t) {
      ro++, (no[ro] = e.current), (e.current = t);
    }
    var lo = {},
      uo = oo(lo),
      co = oo(!1),
      so = lo;
    function fo(e, t) {
      var n = e.type.contextTypes;
      if (!n) return lo;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
      var o,
        i = {};
      for (o in n) i[o] = t[o];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function ho(e) {
      return null != (e = e.childContextTypes);
    }
    function po() {
      io(co), io(uo);
    }
    function go(e, t, n) {
      if (uo.current !== lo) throw Error(a(168));
      ao(uo, t), ao(co, n);
    }
    function yo(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
      for (var i in (r = r.getChildContext())) if (!(i in e)) throw Error(a(108, $(t) || "Unknown", i));
      return o({}, n, r);
    }
    function mo(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || lo),
        (so = uo.current),
        ao(uo, e),
        ao(co, co.current),
        !0
      );
    }
    function vo(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(a(169));
      n ? ((e = yo(e, t, so)), (r.__reactInternalMemoizedMergedChildContext = e), io(co), io(uo), ao(uo, e)) : io(co),
        ao(co, n);
    }
    var bo = null,
      wo = null,
      _o = i.unstable_runWithPriority,
      ko = i.unstable_scheduleCallback,
      xo = i.unstable_cancelCallback,
      So = i.unstable_shouldYield,
      Eo = i.unstable_requestPaint,
      Oo = i.unstable_now,
      Co = i.unstable_getCurrentPriorityLevel,
      Po = i.unstable_ImmediatePriority,
      No = i.unstable_UserBlockingPriority,
      Mo = i.unstable_NormalPriority,
      To = i.unstable_LowPriority,
      jo = i.unstable_IdlePriority,
      Lo = {},
      Ao = void 0 !== Eo ? Eo : function() {},
      zo = null,
      Ro = null,
      Do = !1,
      Io = Oo(),
      Fo =
        1e4 > Io
          ? Oo
          : function() {
              return Oo() - Io;
            };
    function Uo() {
      switch (Co()) {
        case Po:
          return 99;
        case No:
          return 98;
        case Mo:
          return 97;
        case To:
          return 96;
        case jo:
          return 95;
        default:
          throw Error(a(332));
      }
    }
    function Bo(e) {
      switch (e) {
        case 99:
          return Po;
        case 98:
          return No;
        case 97:
          return Mo;
        case 96:
          return To;
        case 95:
          return jo;
        default:
          throw Error(a(332));
      }
    }
    function Wo(e, t) {
      return (e = Bo(e)), _o(e, t);
    }
    function Ho(e, t, n) {
      return (e = Bo(e)), ko(e, t, n);
    }
    function Vo() {
      if (null !== Ro) {
        var e = Ro;
        (Ro = null), xo(e);
      }
      qo();
    }
    function qo() {
      if (!Do && null !== zo) {
        Do = !0;
        var e = 0;
        try {
          var t = zo;
          Wo(99, function() {
            for (; e < t.length; e++) {
              var n = t[e];
              do {
                n = n(!0);
              } while (null !== n);
            }
          }),
            (zo = null);
        } catch (t) {
          throw (null !== zo && (zo = zo.slice(e + 1)), ko(Po, Vo), t);
        } finally {
          Do = !1;
        }
      }
    }
    var Go = _.ReactCurrentBatchConfig;
    function $o(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = o({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    var Yo = oo(null),
      Xo = null,
      Qo = null,
      Ko = null;
    function Zo() {
      Ko = Qo = Xo = null;
    }
    function Jo(e) {
      var t = Yo.current;
      io(Yo), (e.type._context._currentValue = t);
    }
    function ei(e, t) {
      for (; null !== e; ) {
        var n = e.alternate;
        if ((e.childLanes & t) === t) {
          if (null === n || (n.childLanes & t) === t) break;
          n.childLanes |= t;
        } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
        e = e.return;
      }
    }
    function ti(e, t) {
      (Xo = e),
        (Ko = Qo = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & t) && (ja = !0), (e.firstContext = null));
    }
    function ni(e, t) {
      if (Ko !== e && !1 !== t && 0 !== t)
        if (
          (("number" == typeof t && 1073741823 !== t) || ((Ko = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === Qo)
        ) {
          if (null === Xo) throw Error(a(308));
          (Qo = t), (Xo.dependencies = { lanes: 0, firstContext: t, responders: null });
        } else Qo = Qo.next = t;
      return e._currentValue;
    }
    var ri = !1;
    function oi(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null },
        effects: null,
      };
    }
    function ii(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function ai(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function li(e, t) {
      if (null !== (e = e.updateQueue)) {
        var n = (e = e.shared).pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
      }
    }
    function ui(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var o = null,
          i = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var a = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
          } while (null !== n);
          null === i ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        return (
          (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
          void (e.updateQueue = n)
        );
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
    }
    function ci(e, t, n, r) {
      var i = e.updateQueue;
      ri = !1;
      var a = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        u = i.shared.pending;
      if (null !== u) {
        i.shared.pending = null;
        var c = u,
          s = c.next;
        (c.next = null), null === l ? (a = s) : (l.next = s), (l = c);
        var f = e.alternate;
        if (null !== f) {
          var d = (f = f.updateQueue).lastBaseUpdate;
          d !== l && (null === d ? (f.firstBaseUpdate = s) : (d.next = s), (f.lastBaseUpdate = c));
        }
      }
      if (null !== a) {
        for (d = i.baseState, l = 0, f = s = c = null; ; ) {
          u = a.lane;
          var h = a.eventTime;
          if ((r & u) === u) {
            null !== f &&
              (f = f.next = {
                eventTime: h,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
            e: {
              var p = e,
                g = a;
              switch (((u = t), (h = n), g.tag)) {
                case 1:
                  if ("function" == typeof (p = g.payload)) {
                    d = p.call(h, d, u);
                    break e;
                  }
                  d = p;
                  break e;
                case 3:
                  p.flags = (-4097 & p.flags) | 64;
                case 0:
                  if (null == (u = "function" == typeof (p = g.payload) ? p.call(h, d, u) : p)) break e;
                  d = o({}, d, u);
                  break e;
                case 2:
                  ri = !0;
              }
            }
            null !== a.callback && ((e.flags |= 32), null === (u = i.effects) ? (i.effects = [a]) : u.push(a));
          } else
            (h = { eventTime: h, lane: u, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
              null === f ? ((s = f = h), (c = d)) : (f = f.next = h),
              (l |= u);
          if (null === (a = a.next)) {
            if (null === (u = i.shared.pending)) break;
            (a = u.next), (u.next = null), (i.lastBaseUpdate = u), (i.shared.pending = null);
          }
        }
        null === f && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = s),
          (i.lastBaseUpdate = f),
          (Al |= l),
          (e.lanes = l),
          (e.memoizedState = d);
      }
    }
    function si(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            o = r.callback;
          if (null !== o) {
            if (((r.callback = null), (r = n), "function" != typeof o)) throw Error(a(191, o));
            o.call(r);
          }
        }
    }
    var fi = new r.Component().refs;
    function di(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
    }
    var hi = {
      isMounted: function(e) {
        return !!(e = e._reactInternals) && Xe(e) === e;
      },
      enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = iu(),
          o = au(e),
          i = ai(r, o);
        (i.payload = t), null != n && (i.callback = n), li(e, i), lu(e, o, r);
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = iu(),
          o = au(e),
          i = ai(r, o);
        (i.tag = 1), (i.payload = t), null != n && (i.callback = n), li(e, i), lu(e, o, r);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = iu(),
          r = au(e),
          o = ai(n, r);
        (o.tag = 2), null != t && (o.callback = t), li(e, o), lu(e, r, n);
      },
    };
    function pi(e, t, n, r, o, i, a) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, a)
        : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(o, i);
    }
    function gi(e, t, n) {
      var r = !1,
        o = lo,
        i = t.contextType;
      return (
        "object" == typeof i && null !== i
          ? (i = ni(i))
          : ((o = ho(t) ? so : uo.current), (i = (r = null != (r = t.contextTypes)) ? fo(e, o) : lo)),
        (t = new t(n, i)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = hi),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
      );
    }
    function yi(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && hi.enqueueReplaceState(t, t.state, null);
    }
    function mi(e, t, n, r) {
      var o = e.stateNode;
      (o.props = n), (o.state = e.memoizedState), (o.refs = fi), oi(e);
      var i = t.contextType;
      "object" == typeof i && null !== i
        ? (o.context = ni(i))
        : ((i = ho(t) ? so : uo.current), (o.context = fo(e, i))),
        ci(e, n, o, r),
        (o.state = e.memoizedState),
        "function" == typeof (i = t.getDerivedStateFromProps) && (di(e, t, i, n), (o.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof o.getSnapshotBeforeUpdate ||
          ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
          ((t = o.state),
          "function" == typeof o.componentWillMount && o.componentWillMount(),
          "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
          t !== o.state && hi.enqueueReplaceState(o, o.state, null),
          ci(e, n, o, r),
          (o.state = e.memoizedState)),
        "function" == typeof o.componentDidMount && (e.flags |= 4);
    }
    var vi = Array.isArray;
    function bi(e, t, n) {
      if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(a(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(a(147, e));
          var o = "" + e;
          return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o
            ? t.ref
            : (((t = function(e) {
                var t = r.refs;
                t === fi && (t = r.refs = {}), null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              t);
        }
        if ("string" != typeof e) throw Error(a(284));
        if (!n._owner) throw Error(a(290, e));
      }
      return e;
    }
    function wi(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          a(
            31,
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t
          )
        );
    }
    function _i(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.flags = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function o(e, t) {
        return ((e = Fu(e, t)).index = 0), (e.sibling = null), e;
      }
      function i(t, n, r) {
        return (
          (t.index = r),
          e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n
        );
      }
      function l(t) {
        return e && null === t.alternate && (t.flags = 2), t;
      }
      function u(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = Hu(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
      }
      function c(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = o(t, n.props)).ref = bi(e, t, n)), (r.return = e), r)
          : (((r = Uu(n.type, n.key, n.props, null, e.mode, r)).ref = bi(e, t, n)), (r.return = e), r);
      }
      function s(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Vu(n, e.mode, r)).return = e), t)
          : (((t = o(t, n.children || [])).return = e), t);
      }
      function f(e, t, n, r, i) {
        return null === t || 7 !== t.tag
          ? (((t = Bu(n, e.mode, r, i)).return = e), t)
          : (((t = o(t, n)).return = e), t);
      }
      function d(e, t, n) {
        if ("string" == typeof t || "number" == typeof t) return ((t = Hu("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case k:
              return ((n = Uu(t.type, t.key, t.props, null, e.mode, n)).ref = bi(e, null, t)), (n.return = e), n;
            case x:
              return ((t = Vu(t, e.mode, n)).return = e), t;
          }
          if (vi(t) || W(t)) return ((t = Bu(t, e.mode, n, null)).return = e), t;
          wi(e, t);
        }
        return null;
      }
      function h(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if ("string" == typeof n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case k:
              return n.key === o ? (n.type === S ? f(e, t, n.props.children, r, o) : c(e, t, n, r)) : null;
            case x:
              return n.key === o ? s(e, t, n, r) : null;
          }
          if (vi(n) || W(n)) return null !== o ? null : f(e, t, n, r, null);
          wi(e, n);
        }
        return null;
      }
      function p(e, t, n, r, o) {
        if ("string" == typeof r || "number" == typeof r) return u(t, (e = e.get(n) || null), "" + r, o);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case k:
              return (
                (e = e.get(null === r.key ? n : r.key) || null),
                r.type === S ? f(t, e, r.props.children, o, r.key) : c(t, e, r, o)
              );
            case x:
              return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
          }
          if (vi(r) || W(r)) return f(t, (e = e.get(n) || null), r, o, null);
          wi(t, r);
        }
        return null;
      }
      function g(o, a, l, u) {
        for (var c = null, s = null, f = a, g = (a = 0), y = null; null !== f && g < l.length; g++) {
          f.index > g ? ((y = f), (f = null)) : (y = f.sibling);
          var m = h(o, f, l[g], u);
          if (null === m) {
            null === f && (f = y);
            break;
          }
          e && f && null === m.alternate && t(o, f),
            (a = i(m, a, g)),
            null === s ? (c = m) : (s.sibling = m),
            (s = m),
            (f = y);
        }
        if (g === l.length) return n(o, f), c;
        if (null === f) {
          for (; g < l.length; g++)
            null !== (f = d(o, l[g], u)) && ((a = i(f, a, g)), null === s ? (c = f) : (s.sibling = f), (s = f));
          return c;
        }
        for (f = r(o, f); g < l.length; g++)
          null !== (y = p(f, o, g, l[g], u)) &&
            (e && null !== y.alternate && f.delete(null === y.key ? g : y.key),
            (a = i(y, a, g)),
            null === s ? (c = y) : (s.sibling = y),
            (s = y));
        return (
          e &&
            f.forEach(function(e) {
              return t(o, e);
            }),
          c
        );
      }
      function y(o, l, u, c) {
        var s = W(u);
        if ("function" != typeof s) throw Error(a(150));
        if (null == (u = s.call(u))) throw Error(a(151));
        for (var f = (s = null), g = l, y = (l = 0), m = null, v = u.next(); null !== g && !v.done; y++, v = u.next()) {
          g.index > y ? ((m = g), (g = null)) : (m = g.sibling);
          var b = h(o, g, v.value, c);
          if (null === b) {
            null === g && (g = m);
            break;
          }
          e && g && null === b.alternate && t(o, g),
            (l = i(b, l, y)),
            null === f ? (s = b) : (f.sibling = b),
            (f = b),
            (g = m);
        }
        if (v.done) return n(o, g), s;
        if (null === g) {
          for (; !v.done; y++, v = u.next())
            null !== (v = d(o, v.value, c)) && ((l = i(v, l, y)), null === f ? (s = v) : (f.sibling = v), (f = v));
          return s;
        }
        for (g = r(o, g); !v.done; y++, v = u.next())
          null !== (v = p(g, o, y, v.value, c)) &&
            (e && null !== v.alternate && g.delete(null === v.key ? y : v.key),
            (l = i(v, l, y)),
            null === f ? (s = v) : (f.sibling = v),
            (f = v));
        return (
          e &&
            g.forEach(function(e) {
              return t(o, e);
            }),
          s
        );
      }
      return function(e, r, i, u) {
        var c = "object" == typeof i && null !== i && i.type === S && null === i.key;
        c && (i = i.props.children);
        var s = "object" == typeof i && null !== i;
        if (s)
          switch (i.$$typeof) {
            case k:
              e: {
                for (s = i.key, c = r; null !== c; ) {
                  if (c.key === s) {
                    switch (c.tag) {
                      case 7:
                        if (i.type === S) {
                          n(e, c.sibling), ((r = o(c, i.props.children)).return = e), (e = r);
                          break e;
                        }
                        break;
                      default:
                        if (c.elementType === i.type) {
                          n(e, c.sibling), ((r = o(c, i.props)).ref = bi(e, c, i)), (r.return = e), (e = r);
                          break e;
                        }
                    }
                    n(e, c);
                    break;
                  }
                  t(e, c), (c = c.sibling);
                }
                i.type === S
                  ? (((r = Bu(i.props.children, e.mode, u, i.key)).return = e), (e = r))
                  : (((u = Uu(i.type, i.key, i.props, null, e.mode, u)).ref = bi(e, r, i)), (u.return = e), (e = u));
              }
              return l(e);
            case x:
              e: {
                for (c = i.key; null !== r; ) {
                  if (r.key === c) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      n(e, r.sibling), ((r = o(r, i.children || [])).return = e), (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Vu(i, e.mode, u)).return = e), (e = r);
              }
              return l(e);
          }
        if ("string" == typeof i || "number" == typeof i)
          return (
            (i = "" + i),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
              : (n(e, r), ((r = Hu(i, e.mode, u)).return = e), (e = r)),
            l(e)
          );
        if (vi(i)) return g(e, r, i, u);
        if (W(i)) return y(e, r, i, u);
        if ((s && wi(e, i), void 0 === i && !c))
          switch (e.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(a(152, $(e.type) || "Component"));
          }
        return n(e, r);
      };
    }
    var ki = _i(!0),
      xi = _i(!1),
      Si = {},
      Ei = oo(Si),
      Oi = oo(Si),
      Ci = oo(Si);
    function Pi(e) {
      if (e === Si) throw Error(a(174));
      return e;
    }
    function Ni(e, t) {
      switch ((ao(Ci, t), ao(Oi, e), ao(Ei, Si), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
          break;
        default:
          t = pe((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
      }
      io(Ei), ao(Ei, t);
    }
    function Mi() {
      io(Ei), io(Oi), io(Ci);
    }
    function Ti(e) {
      Pi(Ci.current);
      var t = Pi(Ei.current),
        n = pe(t, e.type);
      t !== n && (ao(Oi, e), ao(Ei, n));
    }
    function ji(e) {
      Oi.current === e && (io(Ei), io(Oi));
    }
    var Li = oo(0);
    function Ai(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.flags)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var zi = null,
      Ri = null,
      Di = !1;
    function Ii(e, t) {
      var n = Du(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.type = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (n.flags = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
          : (e.firstEffect = e.lastEffect = n);
    }
    function Fi(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
            ((e.stateNode = t), !0)
          );
        case 6:
          return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
        case 13:
        default:
          return !1;
      }
    }
    function Ui(e) {
      if (Di) {
        var t = Ri;
        if (t) {
          var n = t;
          if (!Fi(e, t)) {
            if (!(t = Hr(n.nextSibling)) || !Fi(e, t))
              return (e.flags = (-1025 & e.flags) | 2), (Di = !1), void (zi = e);
            Ii(zi, n);
          }
          (zi = e), (Ri = Hr(t.firstChild));
        } else (e.flags = (-1025 & e.flags) | 2), (Di = !1), (zi = e);
      }
    }
    function Bi(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
      zi = e;
    }
    function Wi(e) {
      if (e !== zi) return !1;
      if (!Di) return Bi(e), (Di = !0), !1;
      var t = e.type;
      if (5 !== e.tag || ("head" !== t && "body" !== t && !Fr(t, e.memoizedProps)))
        for (t = Ri; t; ) Ii(e, t), (t = Hr(t.nextSibling));
      if ((Bi(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n) {
                if (0 === t) {
                  Ri = Hr(e.nextSibling);
                  break e;
                }
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
            }
            e = e.nextSibling;
          }
          Ri = null;
        }
      } else Ri = zi ? Hr(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Hi() {
      (Ri = zi = null), (Di = !1);
    }
    var Vi = [];
    function qi() {
      for (var e = 0; e < Vi.length; e++) Vi[e]._workInProgressVersionPrimary = null;
      Vi.length = 0;
    }
    var Gi = _.ReactCurrentDispatcher,
      $i = _.ReactCurrentBatchConfig,
      Yi = 0,
      Xi = null,
      Qi = null,
      Ki = null,
      Zi = !1,
      Ji = !1;
    function ea() {
      throw Error(a(321));
    }
    function ta(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!ar(e[n], t[n])) return !1;
      return !0;
    }
    function na(e, t, n, r, o, i) {
      if (
        ((Yi = i),
        (Xi = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Gi.current = null === e || null === e.memoizedState ? Pa : Na),
        (e = n(r, o)),
        Ji)
      ) {
        i = 0;
        do {
          if (((Ji = !1), !(25 > i))) throw Error(a(301));
          (i += 1), (Ki = Qi = null), (t.updateQueue = null), (Gi.current = Ma), (e = n(r, o));
        } while (Ji);
      }
      if (((Gi.current = Ca), (t = null !== Qi && null !== Qi.next), (Yi = 0), (Ki = Qi = Xi = null), (Zi = !1), t))
        throw Error(a(300));
      return e;
    }
    function ra() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return null === Ki ? (Xi.memoizedState = Ki = e) : (Ki = Ki.next = e), Ki;
    }
    function oa() {
      if (null === Qi) {
        var e = Xi.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = Qi.next;
      var t = null === Ki ? Xi.memoizedState : Ki.next;
      if (null !== t) (Ki = t), (Qi = e);
      else {
        if (null === e) throw Error(a(310));
        (e = {
          memoizedState: (Qi = e).memoizedState,
          baseState: Qi.baseState,
          baseQueue: Qi.baseQueue,
          queue: Qi.queue,
          next: null,
        }),
          null === Ki ? (Xi.memoizedState = Ki = e) : (Ki = Ki.next = e);
      }
      return Ki;
    }
    function ia(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function aa(e) {
      var t = oa(),
        n = t.queue;
      if (null === n) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = Qi,
        o = r.baseQueue,
        i = n.pending;
      if (null !== i) {
        if (null !== o) {
          var l = o.next;
          (o.next = i.next), (i.next = l);
        }
        (r.baseQueue = o = i), (n.pending = null);
      }
      if (null !== o) {
        (o = o.next), (r = r.baseState);
        var u = (l = i = null),
          c = o;
        do {
          var s = c.lane;
          if ((Yi & s) === s)
            null !== u &&
              (u = u.next = {
                lane: 0,
                action: c.action,
                eagerReducer: c.eagerReducer,
                eagerState: c.eagerState,
                next: null,
              }),
              (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
          else {
            var f = { lane: s, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null };
            null === u ? ((l = u = f), (i = r)) : (u = u.next = f), (Xi.lanes |= s), (Al |= s);
          }
          c = c.next;
        } while (null !== c && c !== o);
        null === u ? (i = r) : (u.next = l),
          ar(r, t.memoizedState) || (ja = !0),
          (t.memoizedState = r),
          (t.baseState = i),
          (t.baseQueue = u),
          (n.lastRenderedState = r);
      }
      return [t.memoizedState, n.dispatch];
    }
    function la(e) {
      var t = oa(),
        n = t.queue;
      if (null === n) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
      if (null !== o) {
        n.pending = null;
        var l = (o = o.next);
        do {
          (i = e(i, l.action)), (l = l.next);
        } while (l !== o);
        ar(i, t.memoizedState) || (ja = !0),
          (t.memoizedState = i),
          null === t.baseQueue && (t.baseState = i),
          (n.lastRenderedState = i);
      }
      return [i, r];
    }
    function ua(e, t, n) {
      var r = t._getVersion;
      r = r(t._source);
      var o = t._workInProgressVersionPrimary;
      if (
        (null !== o
          ? (e = o === r)
          : ((e = e.mutableReadLanes), (e = (Yi & e) === e) && ((t._workInProgressVersionPrimary = r), Vi.push(t))),
        e)
      )
        return n(t._source);
      throw (Vi.push(t), Error(a(350)));
    }
    function ca(e, t, n, r) {
      var o = Ol;
      if (null === o) throw Error(a(349));
      var i = t._getVersion,
        l = i(t._source),
        u = Gi.current,
        c = u.useState(function() {
          return ua(o, t, n);
        }),
        s = c[1],
        f = c[0];
      c = Ki;
      var d = e.memoizedState,
        h = d.refs,
        p = h.getSnapshot,
        g = d.source;
      d = d.subscribe;
      var y = Xi;
      return (
        (e.memoizedState = { refs: h, source: t, subscribe: r }),
        u.useEffect(
          function() {
            (h.getSnapshot = n), (h.setSnapshot = s);
            var e = i(t._source);
            if (!ar(l, e)) {
              (e = n(t._source)),
                ar(f, e) || (s(e), (e = au(y)), (o.mutableReadLanes |= e & o.pendingLanes)),
                (e = o.mutableReadLanes),
                (o.entangledLanes |= e);
              for (var r = o.entanglements, a = e; 0 < a; ) {
                var u = 31 - Ht(a),
                  c = 1 << u;
                (r[u] |= e), (a &= ~c);
              }
            }
          },
          [n, t, r]
        ),
        u.useEffect(
          function() {
            return r(t._source, function() {
              var e = h.getSnapshot,
                n = h.setSnapshot;
              try {
                n(e(t._source));
                var r = au(y);
                o.mutableReadLanes |= r & o.pendingLanes;
              } catch (e) {
                n(function() {
                  throw e;
                });
              }
            });
          },
          [t, r]
        ),
        (ar(p, n) && ar(g, t) && ar(d, r)) ||
          (((e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: ia,
            lastRenderedState: f,
          }).dispatch = s = Oa.bind(null, Xi, e)),
          (c.queue = e),
          (c.baseQueue = null),
          (f = ua(o, t, n)),
          (c.memoizedState = c.baseState = f)),
        f
      );
    }
    function sa(e, t, n) {
      return ca(oa(), e, t, n);
    }
    function fa(e) {
      var t = ra();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: ia,
          lastRenderedState: e,
        }).dispatch = Oa.bind(null, Xi, e)),
        [t.memoizedState, e]
      );
    }
    function da(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Xi.updateQueue)
          ? ((t = { lastEffect: null }), (Xi.updateQueue = t), (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ha(e) {
      return (e = { current: e }), (ra().memoizedState = e);
    }
    function pa() {
      return oa().memoizedState;
    }
    function ga(e, t, n, r) {
      var o = ra();
      (Xi.flags |= e), (o.memoizedState = da(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function ya(e, t, n, r) {
      var o = oa();
      r = void 0 === r ? null : r;
      var i = void 0;
      if (null !== Qi) {
        var a = Qi.memoizedState;
        if (((i = a.destroy), null !== r && ta(r, a.deps))) return void da(t, n, i, r);
      }
      (Xi.flags |= e), (o.memoizedState = da(1 | t, n, i, r));
    }
    function ma(e, t) {
      return ga(516, 4, e, t);
    }
    function va(e, t) {
      return ya(516, 4, e, t);
    }
    function ba(e, t) {
      return ya(4, 2, e, t);
    }
    function wa(e, t) {
      return "function" == typeof t
        ? ((e = e()),
          t(e),
          function() {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function() {
            t.current = null;
          })
        : void 0;
    }
    function _a(e, t, n) {
      return (n = null != n ? n.concat([e]) : null), ya(4, 2, wa.bind(null, t, e), n);
    }
    function ka() {}
    function xa(e, t) {
      var n = oa();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && ta(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Sa(e, t) {
      var n = oa();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && ta(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function Ea(e, t) {
      var n = Uo();
      Wo(98 > n ? 98 : n, function() {
        e(!0);
      }),
        Wo(97 < n ? 97 : n, function() {
          var n = $i.transition;
          $i.transition = 1;
          try {
            e(!1), t();
          } finally {
            $i.transition = n;
          }
        });
    }
    function Oa(e, t, n) {
      var r = iu(),
        o = au(e),
        i = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null },
        a = t.pending;
      if (
        (null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
        (t.pending = i),
        (a = e.alternate),
        e === Xi || (null !== a && a === Xi))
      )
        Ji = Zi = !0;
      else {
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
          try {
            var l = t.lastRenderedState,
              u = a(l, n);
            if (((i.eagerReducer = a), (i.eagerState = u), ar(u, l))) return;
          } catch (e) {}
        lu(e, o, r);
      }
    }
    var Ca = {
        readContext: ni,
        useCallback: ea,
        useContext: ea,
        useEffect: ea,
        useImperativeHandle: ea,
        useLayoutEffect: ea,
        useMemo: ea,
        useReducer: ea,
        useRef: ea,
        useState: ea,
        useDebugValue: ea,
        useDeferredValue: ea,
        useTransition: ea,
        useMutableSource: ea,
        useOpaqueIdentifier: ea,
        unstable_isNewReconciler: !1,
      },
      Pa = {
        readContext: ni,
        useCallback: function(e, t) {
          return (ra().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: ni,
        useEffect: ma,
        useImperativeHandle: function(e, t, n) {
          return (n = null != n ? n.concat([e]) : null), ga(4, 2, wa.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
          return ga(4, 2, e, t);
        },
        useMemo: function(e, t) {
          var n = ra();
          return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function(e, t, n) {
          var r = ra();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }).dispatch = Oa.bind(null, Xi, e)),
            [r.memoizedState, e]
          );
        },
        useRef: ha,
        useState: fa,
        useDebugValue: ka,
        useDeferredValue: function(e) {
          var t = fa(e),
            n = t[0],
            r = t[1];
          return (
            ma(
              function() {
                var t = $i.transition;
                $i.transition = 1;
                try {
                  r(e);
                } finally {
                  $i.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function() {
          var e = fa(!1),
            t = e[0];
          return ha((e = Ea.bind(null, e[1]))), [e, t];
        },
        useMutableSource: function(e, t, n) {
          var r = ra();
          return (
            (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }), ca(r, e, t, n)
          );
        },
        useOpaqueIdentifier: function() {
          if (Di) {
            var e = !1,
              t = (function(e) {
                return { $$typeof: z, toString: e, valueOf: e };
              })(function() {
                throw (e || ((e = !0), n("r:" + (qr++).toString(36))), Error(a(355)));
              }),
              n = fa(t)[1];
            return (
              0 == (2 & Xi.mode) &&
                ((Xi.flags |= 516),
                da(
                  5,
                  function() {
                    n("r:" + (qr++).toString(36));
                  },
                  void 0,
                  null
                )),
              t
            );
          }
          return fa((t = "r:" + (qr++).toString(36))), t;
        },
        unstable_isNewReconciler: !1,
      },
      Na = {
        readContext: ni,
        useCallback: xa,
        useContext: ni,
        useEffect: va,
        useImperativeHandle: _a,
        useLayoutEffect: ba,
        useMemo: Sa,
        useReducer: aa,
        useRef: pa,
        useState: function() {
          return aa(ia);
        },
        useDebugValue: ka,
        useDeferredValue: function(e) {
          var t = aa(ia),
            n = t[0],
            r = t[1];
          return (
            va(
              function() {
                var t = $i.transition;
                $i.transition = 1;
                try {
                  r(e);
                } finally {
                  $i.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function() {
          var e = aa(ia)[0];
          return [pa().current, e];
        },
        useMutableSource: sa,
        useOpaqueIdentifier: function() {
          return aa(ia)[0];
        },
        unstable_isNewReconciler: !1,
      },
      Ma = {
        readContext: ni,
        useCallback: xa,
        useContext: ni,
        useEffect: va,
        useImperativeHandle: _a,
        useLayoutEffect: ba,
        useMemo: Sa,
        useReducer: la,
        useRef: pa,
        useState: function() {
          return la(ia);
        },
        useDebugValue: ka,
        useDeferredValue: function(e) {
          var t = la(ia),
            n = t[0],
            r = t[1];
          return (
            va(
              function() {
                var t = $i.transition;
                $i.transition = 1;
                try {
                  r(e);
                } finally {
                  $i.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function() {
          var e = la(ia)[0];
          return [pa().current, e];
        },
        useMutableSource: sa,
        useOpaqueIdentifier: function() {
          return la(ia)[0];
        },
        unstable_isNewReconciler: !1,
      },
      Ta = _.ReactCurrentOwner,
      ja = !1;
    function La(e, t, n, r) {
      t.child = null === e ? xi(t, null, n, r) : ki(t, e.child, n, r);
    }
    function Aa(e, t, n, r, o) {
      n = n.render;
      var i = t.ref;
      return (
        ti(t, o),
        (r = na(e, t, n, r, i, o)),
        null === e || ja
          ? ((t.flags |= 1), La(e, t, r, o), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), el(e, t, o))
      );
    }
    function za(e, t, n, r, o, i) {
      if (null === e) {
        var a = n.type;
        return "function" != typeof a ||
          Iu(a) ||
          void 0 !== a.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = Uu(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
          : ((t.tag = 15), (t.type = a), Ra(e, t, a, r, o, i));
      }
      return (
        (a = e.child),
        0 == (o & i) && ((o = a.memoizedProps), (n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref)
          ? el(e, t, i)
          : ((t.flags |= 1), ((e = Fu(a, r)).ref = t.ref), (e.return = t), (t.child = e))
      );
    }
    function Ra(e, t, n, r, o, i) {
      if (null !== e && ur(e.memoizedProps, r) && e.ref === t.ref) {
        if (((ja = !1), 0 == (i & o))) return (t.lanes = e.lanes), el(e, t, i);
        0 != (16384 & e.flags) && (ja = !0);
      }
      return Fa(e, t, n, r, i);
    }
    function Da(e, t, n) {
      var r = t.pendingProps,
        o = r.children,
        i = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
        if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), gu(t, n);
        else {
          if (0 == (1073741824 & n))
            return (
              (e = null !== i ? i.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = { baseLanes: e }),
              gu(t, e),
              null
            );
          (t.memoizedState = { baseLanes: 0 }), gu(t, null !== i ? i.baseLanes : n);
        }
      else null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), gu(t, r);
      return La(e, t, o, n), t.child;
    }
    function Ia(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
    }
    function Fa(e, t, n, r, o) {
      var i = ho(n) ? so : uo.current;
      return (
        (i = fo(t, i)),
        ti(t, o),
        (n = na(e, t, n, r, i, o)),
        null === e || ja
          ? ((t.flags |= 1), La(e, t, n, o), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), el(e, t, o))
      );
    }
    function Ua(e, t, n, r, o) {
      if (ho(n)) {
        var i = !0;
        mo(t);
      } else i = !1;
      if ((ti(t, o), null === t.stateNode))
        null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          gi(t, n, r),
          mi(t, n, r, o),
          (r = !0);
      else if (null === e) {
        var a = t.stateNode,
          l = t.memoizedProps;
        a.props = l;
        var u = a.context,
          c = n.contextType;
        "object" == typeof c && null !== c ? (c = ni(c)) : (c = fo(t, (c = ho(n) ? so : uo.current)));
        var s = n.getDerivedStateFromProps,
          f = "function" == typeof s || "function" == typeof a.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
            "function" != typeof a.componentWillReceiveProps) ||
          ((l !== r || u !== c) && yi(t, a, r, c)),
          (ri = !1);
        var d = t.memoizedState;
        (a.state = d),
          ci(t, r, a, o),
          (u = t.memoizedState),
          l !== r || d !== u || co.current || ri
            ? ("function" == typeof s && (di(t, n, s, r), (u = t.memoizedState)),
              (l = ri || pi(t, n, l, r, d, u, c))
                ? (f ||
                    ("function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount) ||
                    ("function" == typeof a.componentWillMount && a.componentWillMount(),
                    "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                  "function" == typeof a.componentDidMount && (t.flags |= 4))
                : ("function" == typeof a.componentDidMount && (t.flags |= 4),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (a.props = r),
              (a.state = u),
              (a.context = c),
              (r = l))
            : ("function" == typeof a.componentDidMount && (t.flags |= 4), (r = !1));
      } else {
        (a = t.stateNode),
          ii(e, t),
          (l = t.memoizedProps),
          (c = t.type === t.elementType ? l : $o(t.type, l)),
          (a.props = c),
          (f = t.pendingProps),
          (d = a.context),
          "object" == typeof (u = n.contextType) && null !== u
            ? (u = ni(u))
            : (u = fo(t, (u = ho(n) ? so : uo.current)));
        var h = n.getDerivedStateFromProps;
        (s = "function" == typeof h || "function" == typeof a.getSnapshotBeforeUpdate) ||
          ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
            "function" != typeof a.componentWillReceiveProps) ||
          ((l !== f || d !== u) && yi(t, a, r, u)),
          (ri = !1),
          (d = t.memoizedState),
          (a.state = d),
          ci(t, r, a, o);
        var p = t.memoizedState;
        l !== f || d !== p || co.current || ri
          ? ("function" == typeof h && (di(t, n, h, r), (p = t.memoizedState)),
            (c = ri || pi(t, n, c, r, d, p, u))
              ? (s ||
                  ("function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate) ||
                  ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, u),
                  "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, u)),
                "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 256))
              : ("function" != typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = u),
            (r = c))
          : ("function" != typeof a.componentDidUpdate ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof a.getSnapshotBeforeUpdate ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 256),
            (r = !1));
      }
      return Ba(e, t, n, r, i, o);
    }
    function Ba(e, t, n, r, o, i) {
      Ia(e, t);
      var a = 0 != (64 & t.flags);
      if (!r && !a) return o && vo(t, n, !1), el(e, t, i);
      (r = t.stateNode), (Ta.current = t);
      var l = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
      return (
        (t.flags |= 1),
        null !== e && a ? ((t.child = ki(t, e.child, null, i)), (t.child = ki(t, null, l, i))) : La(e, t, l, i),
        (t.memoizedState = r.state),
        o && vo(t, n, !0),
        t.child
      );
    }
    function Wa(e) {
      var t = e.stateNode;
      t.pendingContext ? go(0, t.pendingContext, t.pendingContext !== t.context) : t.context && go(0, t.context, !1),
        Ni(e, t.containerInfo);
    }
    var Ha,
      Va,
      qa,
      Ga = { dehydrated: null, retryLane: 0 };
    function $a(e, t, n) {
      var r,
        o = t.pendingProps,
        i = Li.current,
        a = !1;
      return (
        (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
        r
          ? ((a = !0), (t.flags &= -65))
          : (null !== e && null === e.memoizedState) ||
            void 0 === o.fallback ||
            !0 === o.unstable_avoidThisFallback ||
            (i |= 1),
        ao(Li, 1 & i),
        null === e
          ? (void 0 !== o.fallback && Ui(t),
            (e = o.children),
            (i = o.fallback),
            a
              ? ((e = Ya(t, e, i, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Ga), e)
              : "number" == typeof o.unstable_expectedLoadTime
              ? ((e = Ya(t, e, i, n)),
                (t.child.memoizedState = { baseLanes: n }),
                (t.memoizedState = Ga),
                (t.lanes = 33554432),
                e)
              : (((n = Wu({ mode: "visible", children: e }, t.mode, n, null)).return = t), (t.child = n)))
          : (e.memoizedState,
            a
              ? ((o = Qa(e, t, o.children, o.fallback, n)),
                (a = t.child),
                (i = e.child.memoizedState),
                (a.memoizedState = null === i ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
                (a.childLanes = e.childLanes & ~n),
                (t.memoizedState = Ga),
                o)
              : ((n = Xa(e, t, o.children, n)), (t.memoizedState = null), n))
      );
    }
    function Ya(e, t, n, r) {
      var o = e.mode,
        i = e.child;
      return (
        (t = { mode: "hidden", children: t }),
        0 == (2 & o) && null !== i ? ((i.childLanes = 0), (i.pendingProps = t)) : (i = Wu(t, o, 0, null)),
        (n = Bu(n, o, r, null)),
        (i.return = e),
        (n.return = e),
        (i.sibling = n),
        (e.child = i),
        n
      );
    }
    function Xa(e, t, n, r) {
      var o = e.child;
      return (
        (e = o.sibling),
        (n = Fu(o, { mode: "visible", children: n })),
        0 == (2 & t.mode) && (n.lanes = r),
        (n.return = t),
        (n.sibling = null),
        null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
        (t.child = n)
      );
    }
    function Qa(e, t, n, r, o) {
      var i = t.mode,
        a = e.child;
      e = a.sibling;
      var l = { mode: "hidden", children: n };
      return (
        0 == (2 & i) && t.child !== a
          ? (((n = t.child).childLanes = 0),
            (n.pendingProps = l),
            null !== (a = n.lastEffect)
              ? ((t.firstEffect = n.firstEffect), (t.lastEffect = a), (a.nextEffect = null))
              : (t.firstEffect = t.lastEffect = null))
          : (n = Fu(a, l)),
        null !== e ? (r = Fu(e, r)) : ((r = Bu(r, i, o, null)).flags |= 2),
        (r.return = t),
        (n.return = t),
        (n.sibling = r),
        (t.child = n),
        r
      );
    }
    function Ka(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      null !== n && (n.lanes |= t), ei(e.return, t);
    }
    function Za(e, t, n, r, o, i) {
      var a = e.memoizedState;
      null === a
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: o,
            lastEffect: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = o),
          (a.lastEffect = i));
    }
    function Ja(e, t, n) {
      var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
      if ((La(e, t, r.children, n), 0 != (2 & (r = Li.current)))) (r = (1 & r) | 2), (t.flags |= 64);
      else {
        if (null !== e && 0 != (64 & e.flags))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Ka(e, n);
            else if (19 === e.tag) Ka(e, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((ao(Li, r), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (o) {
          case "forwards":
            for (n = t.child, o = null; null !== n; )
              null !== (e = n.alternate) && null === Ai(e) && (o = n), (n = n.sibling);
            null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
              Za(t, !1, o, n, i, t.lastEffect);
            break;
          case "backwards":
            for (n = null, o = t.child, t.child = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === Ai(e)) {
                t.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = n), (n = o), (o = e);
            }
            Za(t, !0, n, null, i, t.lastEffect);
            break;
          case "together":
            Za(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function el(e, t, n) {
      if ((null !== e && (t.dependencies = e.dependencies), (Al |= t.lanes), 0 != (n & t.childLanes))) {
        if (null !== e && t.child !== e.child) throw Error(a(153));
        if (null !== t.child) {
          for (n = Fu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = Fu(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      return null;
    }
    function tl(e, t) {
      if (!Di)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
            null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
    }
    function nl(e, t, n) {
      var r = t.pendingProps;
      switch (t.tag) {
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
          return null;
        case 1:
          return ho(t.type) && po(), null;
        case 3:
          return (
            Mi(),
            io(co),
            io(uo),
            qi(),
            (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== e && null !== e.child) || (Wi(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
            null
          );
        case 5:
          ji(t);
          var i = Pi(Ci.current);
          if (((n = t.type), null !== e && null != t.stateNode)) Va(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(a(166));
              return null;
            }
            if (((e = Pi(Ei.current)), Wi(t))) {
              (r = t.stateNode), (n = t.type);
              var l = t.memoizedProps;
              switch (((r[$r] = t), (r[Yr] = l), n)) {
                case "dialog":
                  Er("cancel", r), Er("close", r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Er("load", r);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < _r.length; e++) Er(_r[e], r);
                  break;
                case "source":
                  Er("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  Er("error", r), Er("load", r);
                  break;
                case "details":
                  Er("toggle", r);
                  break;
                case "input":
                  ee(r, l), Er("invalid", r);
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!l.multiple }), Er("invalid", r);
                  break;
                case "textarea":
                  ue(r, l), Er("invalid", r);
              }
              for (var c in (xe(n, l), (e = null), l))
                l.hasOwnProperty(c) &&
                  ((i = l[c]),
                  "children" === c
                    ? "string" == typeof i
                      ? r.textContent !== i && (e = ["children", i])
                      : "number" == typeof i && r.textContent !== "" + i && (e = ["children", "" + i])
                    : u.hasOwnProperty(c) && null != i && "onScroll" === c && Er("scroll", r));
              switch (n) {
                case "input":
                  Q(r), re(r, l, !0);
                  break;
                case "textarea":
                  Q(r), se(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof l.onClick && (r.onclick = zr);
              }
              (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
            } else {
              switch (
                ((c = 9 === i.nodeType ? i : i.ownerDocument),
                e === fe && (e = he(n)),
                e === fe
                  ? "script" === n
                    ? (((e = c.createElement("div")).innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : "string" == typeof r.is
                    ? (e = c.createElement(n, { is: r.is }))
                    : ((e = c.createElement(n)),
                      "select" === n && ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))
                  : (e = c.createElementNS(e, n)),
                (e[$r] = t),
                (e[Yr] = r),
                Ha(e, t),
                (t.stateNode = e),
                (c = Se(n, r)),
                n)
              ) {
                case "dialog":
                  Er("cancel", e), Er("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Er("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < _r.length; i++) Er(_r[i], e);
                  i = r;
                  break;
                case "source":
                  Er("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Er("error", e), Er("load", e), (i = r);
                  break;
                case "details":
                  Er("toggle", e), (i = r);
                  break;
                case "input":
                  ee(e, r), (i = J(e, r)), Er("invalid", e);
                  break;
                case "option":
                  i = ie(e, r);
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = o({}, r, { value: void 0 })),
                    Er("invalid", e);
                  break;
                case "textarea":
                  ue(e, r), (i = le(e, r)), Er("invalid", e);
                  break;
                default:
                  i = r;
              }
              xe(n, i);
              var s = i;
              for (l in s)
                if (s.hasOwnProperty(l)) {
                  var f = s[l];
                  "style" === l
                    ? _e(e, f)
                    : "dangerouslySetInnerHTML" === l
                    ? null != (f = f ? f.__html : void 0) && ye(e, f)
                    : "children" === l
                    ? "string" == typeof f
                      ? ("textarea" !== n || "" !== f) && me(e, f)
                      : "number" == typeof f && me(e, "" + f)
                    : "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (u.hasOwnProperty(l)
                        ? null != f && "onScroll" === l && Er("scroll", e)
                        : null != f && w(e, l, f, c));
                }
              switch (n) {
                case "input":
                  Q(e), re(e, r, !1);
                  break;
                case "textarea":
                  Q(e), se(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + Y(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (l = r.value)
                      ? ae(e, !!r.multiple, l, !1)
                      : null != r.defaultValue && ae(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof i.onClick && (e.onclick = zr);
              }
              Ir(n, r) && (t.flags |= 4);
            }
            null !== t.ref && (t.flags |= 128);
          }
          return null;
        case 6:
          if (e && null != t.stateNode) qa(0, t, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
            (n = Pi(Ci.current)),
              Pi(Ei.current),
              Wi(t)
                ? ((r = t.stateNode), (n = t.memoizedProps), (r[$r] = t), r.nodeValue !== n && (t.flags |= 4))
                : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[$r] = t), (t.stateNode = r));
          }
          return null;
        case 13:
          return (
            io(Li),
            (r = t.memoizedState),
            0 != (64 & t.flags)
              ? ((t.lanes = n), t)
              : ((r = null !== r),
                (n = !1),
                null === e ? void 0 !== t.memoizedProps.fallback && Wi(t) : (n = null !== e.memoizedState),
                r &&
                  !n &&
                  0 != (2 & t.mode) &&
                  ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & Li.current)
                    ? 0 === Tl && (Tl = 3)
                    : ((0 !== Tl && 3 !== Tl) || (Tl = 4),
                      null === Ol || (0 == (134217727 & Al) && 0 == (134217727 & zl)) || fu(Ol, Pl))),
                (r || n) && (t.flags |= 4),
                null)
          );
        case 4:
          return Mi(), null === e && Cr(t.stateNode.containerInfo), null;
        case 10:
          return Jo(t), null;
        case 17:
          return ho(t.type) && po(), null;
        case 19:
          if ((io(Li), null === (r = t.memoizedState))) return null;
          if (((l = 0 != (64 & t.flags)), null === (c = r.rendering)))
            if (l) tl(r, !1);
            else {
              if (0 !== Tl || (null !== e && 0 != (64 & e.flags)))
                for (e = t.child; null !== e; ) {
                  if (null !== (c = Ai(e))) {
                    for (
                      t.flags |= 64,
                        tl(r, !1),
                        null !== (l = c.updateQueue) && ((t.updateQueue = l), (t.flags |= 4)),
                        null === r.lastEffect && (t.firstEffect = null),
                        t.lastEffect = r.lastEffect,
                        r = n,
                        n = t.child;
                      null !== n;

                    )
                      (e = r),
                        ((l = n).flags &= 2),
                        (l.nextEffect = null),
                        (l.firstEffect = null),
                        (l.lastEffect = null),
                        null === (c = l.alternate)
                          ? ((l.childLanes = 0),
                            (l.lanes = e),
                            (l.child = null),
                            (l.memoizedProps = null),
                            (l.memoizedState = null),
                            (l.updateQueue = null),
                            (l.dependencies = null),
                            (l.stateNode = null))
                          : ((l.childLanes = c.childLanes),
                            (l.lanes = c.lanes),
                            (l.child = c.child),
                            (l.memoizedProps = c.memoizedProps),
                            (l.memoizedState = c.memoizedState),
                            (l.updateQueue = c.updateQueue),
                            (l.type = c.type),
                            (e = c.dependencies),
                            (l.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                        (n = n.sibling);
                    return ao(Li, (1 & Li.current) | 2), t.child;
                  }
                  e = e.sibling;
                }
              null !== r.tail && Fo() > Fl && ((t.flags |= 64), (l = !0), tl(r, !1), (t.lanes = 33554432));
            }
          else {
            if (!l)
              if (null !== (e = Ai(c))) {
                if (
                  ((t.flags |= 64),
                  (l = !0),
                  null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                  tl(r, !0),
                  null === r.tail && "hidden" === r.tailMode && !c.alternate && !Di)
                )
                  return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
              } else
                2 * Fo() - r.renderingStartTime > Fl &&
                  1073741824 !== n &&
                  ((t.flags |= 64), (l = !0), tl(r, !1), (t.lanes = 33554432));
            r.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c), (r.last = c));
          }
          return null !== r.tail
            ? ((n = r.tail),
              (r.rendering = n),
              (r.tail = n.sibling),
              (r.lastEffect = t.lastEffect),
              (r.renderingStartTime = Fo()),
              (n.sibling = null),
              (t = Li.current),
              ao(Li, l ? (1 & t) | 2 : 1 & t),
              n)
            : null;
        case 23:
        case 24:
          return (
            yu(),
            null !== e &&
              (null !== e.memoizedState) != (null !== t.memoizedState) &&
              "unstable-defer-without-hiding" !== r.mode &&
              (t.flags |= 4),
            null
          );
      }
      throw Error(a(156, t.tag));
    }
    function rl(e) {
      switch (e.tag) {
        case 1:
          ho(e.type) && po();
          var t = e.flags;
          return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
        case 3:
          if ((Mi(), io(co), io(uo), qi(), 0 != (64 & (t = e.flags)))) throw Error(a(285));
          return (e.flags = (-4097 & t) | 64), e;
        case 5:
          return ji(e), null;
        case 13:
          return io(Li), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
        case 19:
          return io(Li), null;
        case 4:
          return Mi(), null;
        case 10:
          return Jo(e), null;
        case 23:
        case 24:
          return yu(), null;
        default:
          return null;
      }
    }
    function ol(e, t) {
      try {
        var n = "",
          r = t;
        do {
          (n += G(r)), (r = r.return);
        } while (r);
        var o = n;
      } catch (e) {
        o = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: t, stack: o };
    }
    function il(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function() {
          throw e;
        });
      }
    }
    (Ha = function(e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (Va = function(e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          (e = t.stateNode), Pi(Ei.current);
          var a,
            l = null;
          switch (n) {
            case "input":
              (i = J(e, i)), (r = J(e, r)), (l = []);
              break;
            case "option":
              (i = ie(e, i)), (r = ie(e, r)), (l = []);
              break;
            case "select":
              (i = o({}, i, { value: void 0 })), (r = o({}, r, { value: void 0 })), (l = []);
              break;
            case "textarea":
              (i = le(e, i)), (r = le(e, r)), (l = []);
              break;
            default:
              "function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = zr);
          }
          for (f in (xe(n, r), (n = null), i))
            if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && null != i[f])
              if ("style" === f) {
                var c = i[f];
                for (a in c) c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
              } else
                "dangerouslySetInnerHTML" !== f &&
                  "children" !== f &&
                  "suppressContentEditableWarning" !== f &&
                  "suppressHydrationWarning" !== f &&
                  "autoFocus" !== f &&
                  (u.hasOwnProperty(f) ? l || (l = []) : (l = l || []).push(f, null));
          for (f in r) {
            var s = r[f];
            if (((c = null != i ? i[f] : void 0), r.hasOwnProperty(f) && s !== c && (null != s || null != c)))
              if ("style" === f)
                if (c) {
                  for (a in c) !c.hasOwnProperty(a) || (s && s.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""));
                  for (a in s) s.hasOwnProperty(a) && c[a] !== s[a] && (n || (n = {}), (n[a] = s[a]));
                } else n || (l || (l = []), l.push(f, n)), (n = s);
              else
                "dangerouslySetInnerHTML" === f
                  ? ((s = s ? s.__html : void 0),
                    (c = c ? c.__html : void 0),
                    null != s && c !== s && (l = l || []).push(f, s))
                  : "children" === f
                  ? ("string" != typeof s && "number" != typeof s) || (l = l || []).push(f, "" + s)
                  : "suppressContentEditableWarning" !== f &&
                    "suppressHydrationWarning" !== f &&
                    (u.hasOwnProperty(f)
                      ? (null != s && "onScroll" === f && Er("scroll", e), l || c === s || (l = []))
                      : "object" == typeof s && null !== s && s.$$typeof === z
                      ? s.toString()
                      : (l = l || []).push(f, s));
          }
          n && (l = l || []).push("style", n);
          var f = l;
          (t.updateQueue = f) && (t.flags |= 4);
        }
      }),
      (qa = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
      });
    var al = "function" == typeof WeakMap ? WeakMap : Map;
    function ll(e, t, n) {
      ((n = ai(-1, n)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function() {
          Hl || ((Hl = !0), (Vl = r)), il(0, t);
        }),
        n
      );
    }
    function ul(e, t, n) {
      (n = ai(-1, n)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var o = t.value;
        n.payload = function() {
          return il(0, t), r(o);
        };
      }
      var i = e.stateNode;
      return (
        null !== i &&
          "function" == typeof i.componentDidCatch &&
          (n.callback = function() {
            "function" != typeof r && (null === ql ? (ql = new Set([this])) : ql.add(this), il(0, t));
            var e = t.stack;
            this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
          }),
        n
      );
    }
    var cl = "function" == typeof WeakSet ? WeakSet : Set;
    function sl(e) {
      var t = e.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            Lu(e, t);
          }
        else t.current = null;
    }
    function fl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (256 & t.flags && null !== e) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : $o(t.type, n), r)),
              (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          return;
        case 3:
          return void (256 & t.flags && Wr(t.stateNode.containerInfo));
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(a(163));
    }
    function dl(e, t, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
            e = t = t.next;
            do {
              if (3 == (3 & e.tag)) {
                var r = e.create;
                e.destroy = r();
              }
              e = e.next;
            } while (e !== t);
          }
          if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
            e = t = t.next;
            do {
              var o = e;
              (r = o.next), 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (Mu(n, e), Nu(n, e)), (e = r);
            } while (e !== t);
          }
          return;
        case 1:
          return (
            (e = n.stateNode),
            4 & n.flags &&
              (null === t
                ? e.componentDidMount()
                : ((r = n.elementType === n.type ? t.memoizedProps : $o(n.type, t.memoizedProps)),
                  e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
            void (null !== (t = n.updateQueue) && si(n, t, e))
          );
        case 3:
          if (null !== (t = n.updateQueue)) {
            if (((e = null), null !== n.child))
              switch (n.child.tag) {
                case 5:
                  e = n.child.stateNode;
                  break;
                case 1:
                  e = n.child.stateNode;
              }
            si(n, t, e);
          }
          return;
        case 5:
          return (e = n.stateNode), void (null === t && 4 & n.flags && Ir(n.type, n.memoizedProps) && e.focus());
        case 6:
        case 4:
        case 12:
          return;
        case 13:
          return void (
            null === n.memoizedState &&
            ((n = n.alternate),
            null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && _t(n))))
          );
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(a(163));
    }
    function hl(e, t) {
      for (var n = e; ; ) {
        if (5 === n.tag) {
          var r = n.stateNode;
          if (t)
            "function" == typeof (r = r.style).setProperty
              ? r.setProperty("display", "none", "important")
              : (r.display = "none");
          else {
            r = n.stateNode;
            var o = n.memoizedProps.style;
            (o = null != o && o.hasOwnProperty("display") ? o.display : null), (r.style.display = we("display", o));
          }
        } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
        else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === e) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === e) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    function pl(e, t) {
      if (wo && "function" == typeof wo.onCommitFiberUnmount)
        try {
          wo.onCommitFiberUnmount(bo, t);
        } catch (e) {}
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var n = (e = e.next);
            do {
              var r = n,
                o = r.destroy;
              if (((r = r.tag), void 0 !== o))
                if (0 != (4 & r)) Mu(t, n);
                else {
                  r = t;
                  try {
                    o();
                  } catch (e) {
                    Lu(r, e);
                  }
                }
              n = n.next;
            } while (n !== e);
          }
          break;
        case 1:
          if ((sl(t), "function" == typeof (e = t.stateNode).componentWillUnmount))
            try {
              (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
            } catch (e) {
              Lu(t, e);
            }
          break;
        case 5:
          sl(t);
          break;
        case 4:
          vl(e, t);
      }
    }
    function gl(e) {
      (e.alternate = null),
        (e.child = null),
        (e.dependencies = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.return = null),
        (e.updateQueue = null);
    }
    function yl(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function ml(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (yl(t)) break e;
          t = t.return;
        }
        throw Error(a(160));
      }
      var n = t;
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(a(161));
      }
      16 & n.flags && (me(t, ""), (n.flags &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || yl(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
          if (2 & n.flags) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.flags)) {
          n = n.stateNode;
          break e;
        }
      }
      r
        ? (function e(t, n, r) {
            var o = t.tag,
              i = 5 === o || 6 === o;
            if (i)
              (t = i ? t.stateNode : t.stateNode.instance),
                n
                  ? 8 === r.nodeType
                    ? r.parentNode.insertBefore(t, n)
                    : r.insertBefore(t, n)
                  : (8 === r.nodeType ? (n = r.parentNode).insertBefore(t, r) : (n = r).appendChild(t),
                    (null !== (r = r._reactRootContainer) && void 0 !== r) || null !== n.onclick || (n.onclick = zr));
            else if (4 !== o && null !== (t = t.child))
              for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
          })(e, n, t)
        : (function e(t, n, r) {
            var o = t.tag,
              i = 5 === o || 6 === o;
            if (i) (t = i ? t.stateNode : t.stateNode.instance), n ? r.insertBefore(t, n) : r.appendChild(t);
            else if (4 !== o && null !== (t = t.child))
              for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
          })(e, n, t);
    }
    function vl(e, t) {
      for (var n, r, o = t, i = !1; ; ) {
        if (!i) {
          i = o.return;
          e: for (;;) {
            if (null === i) throw Error(a(160));
            switch (((n = i.stateNode), i.tag)) {
              case 5:
                r = !1;
                break e;
              case 3:
              case 4:
                (n = n.containerInfo), (r = !0);
                break e;
            }
            i = i.return;
          }
          i = !0;
        }
        if (5 === o.tag || 6 === o.tag) {
          e: for (var l = e, u = o, c = u; ; )
            if ((pl(l, c), null !== c.child && 4 !== c.tag)) (c.child.return = c), (c = c.child);
            else {
              if (c === u) break e;
              for (; null === c.sibling; ) {
                if (null === c.return || c.return === u) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
          r
            ? ((l = n), (u = o.stateNode), 8 === l.nodeType ? l.parentNode.removeChild(u) : l.removeChild(u))
            : n.removeChild(o.stateNode);
        } else if (4 === o.tag) {
          if (null !== o.child) {
            (n = o.stateNode.containerInfo), (r = !0), (o.child.return = o), (o = o.child);
            continue;
          }
        } else if ((pl(e, o), null !== o.child)) {
          (o.child.return = o), (o = o.child);
          continue;
        }
        if (o === t) break;
        for (; null === o.sibling; ) {
          if (null === o.return || o.return === t) return;
          4 === (o = o.return).tag && (i = !1);
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    function bl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var n = t.updateQueue;
          if (null !== (n = null !== n ? n.lastEffect : null)) {
            var r = (n = n.next);
            do {
              3 == (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
            } while (r !== n);
          }
          return;
        case 1:
          return;
        case 5:
          if (null != (n = t.stateNode)) {
            r = t.memoizedProps;
            var o = null !== e ? e.memoizedProps : r;
            e = t.type;
            var i = t.updateQueue;
            if (((t.updateQueue = null), null !== i)) {
              for (
                n[Yr] = r,
                  "input" === e && "radio" === r.type && null != r.name && te(n, r),
                  Se(e, o),
                  t = Se(e, r),
                  o = 0;
                o < i.length;
                o += 2
              ) {
                var l = i[o],
                  u = i[o + 1];
                "style" === l
                  ? _e(n, u)
                  : "dangerouslySetInnerHTML" === l
                  ? ye(n, u)
                  : "children" === l
                  ? me(n, u)
                  : w(n, l, u, t);
              }
              switch (e) {
                case "input":
                  ne(n, r);
                  break;
                case "textarea":
                  ce(n, r);
                  break;
                case "select":
                  (e = n._wrapperState.wasMultiple),
                    (n._wrapperState.wasMultiple = !!r.multiple),
                    null != (i = r.value)
                      ? ae(n, !!r.multiple, i, !1)
                      : e !== !!r.multiple &&
                        (null != r.defaultValue
                          ? ae(n, !!r.multiple, r.defaultValue, !0)
                          : ae(n, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          return;
        case 6:
          if (null === t.stateNode) throw Error(a(162));
          return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
          return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), _t(n.containerInfo)));
        case 12:
          return;
        case 13:
          return null !== t.memoizedState && ((Il = Fo()), hl(t.child, !0)), void wl(t);
        case 19:
          return void wl(t);
        case 17:
          return;
        case 23:
        case 24:
          return void hl(t, null !== t.memoizedState);
      }
      throw Error(a(163));
    }
    function wl(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new cl()),
          t.forEach(function(t) {
            var r = zu.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    function _l(e, t) {
      return (
        null !== e &&
        (null === (e = e.memoizedState) || null !== e.dehydrated) &&
        null !== (t = t.memoizedState) && null === t.dehydrated
      );
    }
    var kl = Math.ceil,
      xl = _.ReactCurrentDispatcher,
      Sl = _.ReactCurrentOwner,
      El = 0,
      Ol = null,
      Cl = null,
      Pl = 0,
      Nl = 0,
      Ml = oo(0),
      Tl = 0,
      jl = null,
      Ll = 0,
      Al = 0,
      zl = 0,
      Rl = 0,
      Dl = null,
      Il = 0,
      Fl = 1 / 0;
    function Ul() {
      Fl = Fo() + 500;
    }
    var Bl,
      Wl = null,
      Hl = !1,
      Vl = null,
      ql = null,
      Gl = !1,
      $l = null,
      Yl = 90,
      Xl = [],
      Ql = [],
      Kl = null,
      Zl = 0,
      Jl = null,
      eu = -1,
      tu = 0,
      nu = 0,
      ru = null,
      ou = !1;
    function iu() {
      return 0 != (48 & El) ? Fo() : -1 !== eu ? eu : (eu = Fo());
    }
    function au(e) {
      if (0 == (2 & (e = e.mode))) return 1;
      if (0 == (4 & e)) return 99 === Uo() ? 1 : 2;
      if ((0 === tu && (tu = Ll), 0 !== Go.transition)) {
        0 !== nu && (nu = null !== Dl ? Dl.pendingLanes : 0), (e = tu);
        var t = 4186112 & ~nu;
        return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
      }
      return (
        (e = Uo()),
        0 != (4 & El) && 98 === e
          ? (e = Ft(12, tu))
          : (e = Ft(
              (e = (function(e) {
                switch (e) {
                  case 99:
                    return 15;
                  case 98:
                    return 10;
                  case 97:
                  case 96:
                    return 8;
                  case 95:
                    return 2;
                  default:
                    return 0;
                }
              })(e)),
              tu
            )),
        e
      );
    }
    function lu(e, t, n) {
      if (50 < Zl) throw ((Zl = 0), (Jl = null), Error(a(185)));
      if (null === (e = uu(e, t))) return null;
      Wt(e, t, n), e === Ol && ((zl |= t), 4 === Tl && fu(e, Pl));
      var r = Uo();
      1 === t
        ? 0 != (8 & El) && 0 == (48 & El)
          ? du(e)
          : (cu(e, n), 0 === El && (Ul(), Vo()))
        : (0 == (4 & El) || (98 !== r && 99 !== r) || (null === Kl ? (Kl = new Set([e])) : Kl.add(e)), cu(e, n)),
        (Dl = e);
    }
    function uu(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
      return 3 === n.tag ? n.stateNode : null;
    }
    function cu(e, t) {
      for (
        var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes;
        0 < l;

      ) {
        var u = 31 - Ht(l),
          c = 1 << u,
          s = i[u];
        if (-1 === s) {
          if (0 == (c & r) || 0 != (c & o)) {
            (s = t), Rt(c);
            var f = zt;
            i[u] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
          }
        } else s <= t && (e.expiredLanes |= c);
        l &= ~c;
      }
      if (((r = Dt(e, e === Ol ? Pl : 0)), (t = zt), 0 === r))
        null !== n && (n !== Lo && xo(n), (e.callbackNode = null), (e.callbackPriority = 0));
      else {
        if (null !== n) {
          if (e.callbackPriority === t) return;
          n !== Lo && xo(n);
        }
        15 === t
          ? ((n = du.bind(null, e)), null === zo ? ((zo = [n]), (Ro = ko(Po, qo))) : zo.push(n), (n = Lo))
          : 14 === t
          ? (n = Ho(99, du.bind(null, e)))
          : (n = Ho(
              (n = (function(e) {
                switch (e) {
                  case 15:
                  case 14:
                    return 99;
                  case 13:
                  case 12:
                  case 11:
                  case 10:
                    return 98;
                  case 9:
                  case 8:
                  case 7:
                  case 6:
                  case 4:
                  case 5:
                    return 97;
                  case 3:
                  case 2:
                  case 1:
                    return 95;
                  case 0:
                    return 90;
                  default:
                    throw Error(a(358, e));
                }
              })(t)),
              su.bind(null, e)
            )),
          (e.callbackPriority = t),
          (e.callbackNode = n);
      }
    }
    function su(e) {
      if (((eu = -1), (nu = tu = 0), 0 != (48 & El))) throw Error(a(327));
      var t = e.callbackNode;
      if (Pu() && e.callbackNode !== t) return null;
      var n = Dt(e, e === Ol ? Pl : 0);
      if (0 === n) return null;
      var r = n,
        o = El;
      El |= 16;
      var i = bu();
      for ((Ol === e && Pl === r) || (Ul(), mu(e, r)); ; )
        try {
          ku();
          break;
        } catch (t) {
          vu(e, t);
        }
      if ((Zo(), (xl.current = i), (El = o), null !== Cl ? (r = 0) : ((Ol = null), (Pl = 0), (r = Tl)), 0 != (Ll & zl)))
        mu(e, 0);
      else if (0 !== r) {
        if (
          (2 === r &&
            ((El |= 64), e.hydrate && ((e.hydrate = !1), Wr(e.containerInfo)), 0 !== (n = It(e)) && (r = wu(e, n))),
          1 === r)
        )
          throw ((t = jl), mu(e, 0), fu(e, n), cu(e, Fo()), t);
        switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Eu(e);
            break;
          case 3:
            if ((fu(e, n), (62914560 & n) === n && 10 < (r = Il + 500 - Fo()))) {
              if (0 !== Dt(e, 0)) break;
              if (((o = e.suspendedLanes) & n) !== n) {
                iu(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = Ur(Eu.bind(null, e), r);
              break;
            }
            Eu(e);
            break;
          case 4:
            if ((fu(e, n), (4186112 & n) === n)) break;
            for (r = e.eventTimes, o = -1; 0 < n; ) {
              var l = 31 - Ht(n);
              (i = 1 << l), (l = r[l]) > o && (o = l), (n &= ~i);
            }
            if (
              ((n = o),
              10 <
                (n =
                  (120 > (n = Fo() - n)
                    ? 120
                    : 480 > n
                    ? 480
                    : 1080 > n
                    ? 1080
                    : 1920 > n
                    ? 1920
                    : 3e3 > n
                    ? 3e3
                    : 4320 > n
                    ? 4320
                    : 1960 * kl(n / 1960)) - n))
            ) {
              e.timeoutHandle = Ur(Eu.bind(null, e), n);
              break;
            }
            Eu(e);
            break;
          case 5:
            Eu(e);
            break;
          default:
            throw Error(a(329));
        }
      }
      return cu(e, Fo()), e.callbackNode === t ? su.bind(null, e) : null;
    }
    function fu(e, t) {
      for (t &= ~Rl, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ht(t),
          r = 1 << n;
        (e[n] = -1), (t &= ~r);
      }
    }
    function du(e) {
      if (0 != (48 & El)) throw Error(a(327));
      if ((Pu(), e === Ol && 0 != (e.expiredLanes & Pl))) {
        var t = Pl,
          n = wu(e, t);
        0 != (Ll & zl) && (n = wu(e, (t = Dt(e, t))));
      } else n = wu(e, (t = Dt(e, 0)));
      if (
        (0 !== e.tag &&
          2 === n &&
          ((El |= 64), e.hydrate && ((e.hydrate = !1), Wr(e.containerInfo)), 0 !== (t = It(e)) && (n = wu(e, t))),
        1 === n)
      )
        throw ((n = jl), mu(e, 0), fu(e, t), cu(e, Fo()), n);
      return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Eu(e), cu(e, Fo()), null;
    }
    function hu(e, t) {
      var n = El;
      El |= 1;
      try {
        return e(t);
      } finally {
        0 === (El = n) && (Ul(), Vo());
      }
    }
    function pu(e, t) {
      var n = El;
      (El &= -2), (El |= 8);
      try {
        return e(t);
      } finally {
        0 === (El = n) && (Ul(), Vo());
      }
    }
    function gu(e, t) {
      ao(Ml, Nl), (Nl |= t), (Ll |= t);
    }
    function yu() {
      (Nl = Ml.current), io(Ml);
    }
    function mu(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), Br(n)), null !== Cl))
        for (n = Cl.return; null !== n; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              null != (r = r.type.childContextTypes) && po();
              break;
            case 3:
              Mi(), io(co), io(uo), qi();
              break;
            case 5:
              ji(r);
              break;
            case 4:
              Mi();
              break;
            case 13:
            case 19:
              io(Li);
              break;
            case 10:
              Jo(r);
              break;
            case 23:
            case 24:
              yu();
          }
          n = n.return;
        }
      (Ol = e), (Cl = Fu(e.current, null)), (Pl = Nl = Ll = t), (Tl = 0), (jl = null), (Rl = zl = Al = 0);
    }
    function vu(e, t) {
      for (;;) {
        var n = Cl;
        try {
          if ((Zo(), (Gi.current = Ca), Zi)) {
            for (var r = Xi.memoizedState; null !== r; ) {
              var o = r.queue;
              null !== o && (o.pending = null), (r = r.next);
            }
            Zi = !1;
          }
          if (((Yi = 0), (Ki = Qi = Xi = null), (Ji = !1), (Sl.current = null), null === n || null === n.return)) {
            (Tl = 1), (jl = t), (Cl = null);
            break;
          }
          e: {
            var i = e,
              a = n.return,
              l = n,
              u = t;
            if (
              ((t = Pl),
              (l.flags |= 2048),
              (l.firstEffect = l.lastEffect = null),
              null !== u && "object" == typeof u && "function" == typeof u.then)
            ) {
              var c = u;
              if (0 == (2 & l.mode)) {
                var s = l.alternate;
                s
                  ? ((l.updateQueue = s.updateQueue), (l.memoizedState = s.memoizedState), (l.lanes = s.lanes))
                  : ((l.updateQueue = null), (l.memoizedState = null));
              }
              var f = 0 != (1 & Li.current),
                d = a;
              do {
                var h;
                if ((h = 13 === d.tag)) {
                  var p = d.memoizedState;
                  if (null !== p) h = null !== p.dehydrated;
                  else {
                    var g = d.memoizedProps;
                    h = void 0 !== g.fallback && (!0 !== g.unstable_avoidThisFallback || !f);
                  }
                }
                if (h) {
                  var y = d.updateQueue;
                  if (null === y) {
                    var m = new Set();
                    m.add(c), (d.updateQueue = m);
                  } else y.add(c);
                  if (0 == (2 & d.mode)) {
                    if (((d.flags |= 64), (l.flags |= 16384), (l.flags &= -2981), 1 === l.tag))
                      if (null === l.alternate) l.tag = 17;
                      else {
                        var v = ai(-1, 1);
                        (v.tag = 2), li(l, v);
                      }
                    l.lanes |= 1;
                    break e;
                  }
                  (u = void 0), (l = t);
                  var b = i.pingCache;
                  if (
                    (null === b
                      ? ((b = i.pingCache = new al()), (u = new Set()), b.set(c, u))
                      : void 0 === (u = b.get(c)) && ((u = new Set()), b.set(c, u)),
                    !u.has(l))
                  ) {
                    u.add(l);
                    var w = Au.bind(null, i, c, l);
                    c.then(w, w);
                  }
                  (d.flags |= 4096), (d.lanes = t);
                  break e;
                }
                d = d.return;
              } while (null !== d);
              u = Error(
                ($(l.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
              );
            }
            5 !== Tl && (Tl = 2), (u = ol(u, l)), (d = a);
            do {
              switch (d.tag) {
                case 3:
                  (i = u), (d.flags |= 4096), (t &= -t), (d.lanes |= t), ui(d, ll(0, i, t));
                  break e;
                case 1:
                  i = u;
                  var _ = d.type,
                    k = d.stateNode;
                  if (
                    0 == (64 & d.flags) &&
                    ("function" == typeof _.getDerivedStateFromError ||
                      (null !== k && "function" == typeof k.componentDidCatch && (null === ql || !ql.has(k))))
                  ) {
                    (d.flags |= 4096), (t &= -t), (d.lanes |= t), ui(d, ul(d, i, t));
                    break e;
                  }
              }
              d = d.return;
            } while (null !== d);
          }
          Su(n);
        } catch (e) {
          (t = e), Cl === n && null !== n && (Cl = n = n.return);
          continue;
        }
        break;
      }
    }
    function bu() {
      var e = xl.current;
      return (xl.current = Ca), null === e ? Ca : e;
    }
    function wu(e, t) {
      var n = El;
      El |= 16;
      var r = bu();
      for ((Ol === e && Pl === t) || mu(e, t); ; )
        try {
          _u();
          break;
        } catch (t) {
          vu(e, t);
        }
      if ((Zo(), (El = n), (xl.current = r), null !== Cl)) throw Error(a(261));
      return (Ol = null), (Pl = 0), Tl;
    }
    function _u() {
      for (; null !== Cl; ) xu(Cl);
    }
    function ku() {
      for (; null !== Cl && !So(); ) xu(Cl);
    }
    function xu(e) {
      var t = Bl(e.alternate, e, Nl);
      (e.memoizedProps = e.pendingProps), null === t ? Su(e) : (Cl = t), (Sl.current = null);
    }
    function Su(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), 0 == (2048 & t.flags))) {
          if (null !== (n = nl(n, t, Nl))) return void (Cl = n);
          if (
            (24 !== (n = t).tag && 23 !== n.tag) ||
            null === n.memoizedState ||
            0 != (1073741824 & Nl) ||
            0 == (4 & n.mode)
          ) {
            for (var r = 0, o = n.child; null !== o; ) (r |= o.lanes | o.childLanes), (o = o.sibling);
            n.childLanes = r;
          }
          null !== e &&
            0 == (2048 & e.flags) &&
            (null === e.firstEffect && (e.firstEffect = t.firstEffect),
            null !== t.lastEffect &&
              (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
            1 < t.flags &&
              (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
        } else {
          if (null !== (n = rl(t))) return (n.flags &= 2047), void (Cl = n);
          null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
        }
        if (null !== (t = t.sibling)) return void (Cl = t);
        Cl = t = e;
      } while (null !== t);
      0 === Tl && (Tl = 5);
    }
    function Eu(e) {
      var t = Uo();
      return Wo(99, Ou.bind(null, e, t)), null;
    }
    function Ou(e, t) {
      do {
        Pu();
      } while (null !== $l);
      if (0 != (48 & El)) throw Error(a(327));
      var n = e.finishedWork;
      if (null === n) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177));
      e.callbackNode = null;
      var r = n.lanes | n.childLanes,
        o = r,
        i = e.pendingLanes & ~o;
      (e.pendingLanes = o),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= o),
        (e.mutableReadLanes &= o),
        (e.entangledLanes &= o),
        (o = e.entanglements);
      for (var l = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
        var c = 31 - Ht(i),
          s = 1 << c;
        (o[c] = 0), (l[c] = -1), (u[c] = -1), (i &= ~s);
      }
      if (
        (null !== Kl && 0 == (24 & r) && Kl.has(e) && Kl.delete(e),
        e === Ol && ((Cl = Ol = null), (Pl = 0)),
        1 < n.flags
          ? null !== n.lastEffect
            ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
            : (r = n)
          : (r = n.firstEffect),
        null !== r)
      ) {
        if (((o = El), (El |= 32), (Sl.current = null), (Rr = Yt), dr((l = fr())))) {
          if ("selectionStart" in l) u = { start: l.selectionStart, end: l.selectionEnd };
          else
            e: if (
              ((u = ((u = l.ownerDocument) && u.defaultView) || window),
              (s = u.getSelection && u.getSelection()) && 0 !== s.rangeCount)
            ) {
              (u = s.anchorNode), (i = s.anchorOffset), (c = s.focusNode), (s = s.focusOffset);
              try {
                u.nodeType, c.nodeType;
              } catch (e) {
                u = null;
                break e;
              }
              var f = 0,
                d = -1,
                h = -1,
                p = 0,
                g = 0,
                y = l,
                m = null;
              t: for (;;) {
                for (
                  var v;
                  y !== u || (0 !== i && 3 !== y.nodeType) || (d = f + i),
                    y !== c || (0 !== s && 3 !== y.nodeType) || (h = f + s),
                    3 === y.nodeType && (f += y.nodeValue.length),
                    null !== (v = y.firstChild);

                )
                  (m = y), (y = v);
                for (;;) {
                  if (y === l) break t;
                  if ((m === u && ++p === i && (d = f), m === c && ++g === s && (h = f), null !== (v = y.nextSibling)))
                    break;
                  m = (y = m).parentNode;
                }
                y = v;
              }
              u = -1 === d || -1 === h ? null : { start: d, end: h };
            } else u = null;
          u = u || { start: 0, end: 0 };
        } else u = null;
        (Dr = { focusedElem: l, selectionRange: u }), (Yt = !1), (ru = null), (ou = !1), (Wl = r);
        do {
          try {
            Cu();
          } catch (e) {
            if (null === Wl) throw Error(a(330));
            Lu(Wl, e), (Wl = Wl.nextEffect);
          }
        } while (null !== Wl);
        (ru = null), (Wl = r);
        do {
          try {
            for (l = e; null !== Wl; ) {
              var b = Wl.flags;
              if ((16 & b && me(Wl.stateNode, ""), 128 & b)) {
                var w = Wl.alternate;
                if (null !== w) {
                  var _ = w.ref;
                  null !== _ && ("function" == typeof _ ? _(null) : (_.current = null));
                }
              }
              switch (1038 & b) {
                case 2:
                  ml(Wl), (Wl.flags &= -3);
                  break;
                case 6:
                  ml(Wl), (Wl.flags &= -3), bl(Wl.alternate, Wl);
                  break;
                case 1024:
                  Wl.flags &= -1025;
                  break;
                case 1028:
                  (Wl.flags &= -1025), bl(Wl.alternate, Wl);
                  break;
                case 4:
                  bl(Wl.alternate, Wl);
                  break;
                case 8:
                  vl(l, (u = Wl));
                  var k = u.alternate;
                  gl(u), null !== k && gl(k);
              }
              Wl = Wl.nextEffect;
            }
          } catch (e) {
            if (null === Wl) throw Error(a(330));
            Lu(Wl, e), (Wl = Wl.nextEffect);
          }
        } while (null !== Wl);
        if (
          ((_ = Dr),
          (w = fr()),
          (b = _.focusedElem),
          (l = _.selectionRange),
          w !== b &&
            b &&
            b.ownerDocument &&
            (function e(t, n) {
              return (
                !(!t || !n) &&
                (t === n ||
                  ((!t || 3 !== t.nodeType) &&
                    (n && 3 === n.nodeType
                      ? e(t, n.parentNode)
                      : "contains" in t
                      ? t.contains(n)
                      : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n)))))
              );
            })(b.ownerDocument.documentElement, b))
        ) {
          null !== l &&
            dr(b) &&
            ((w = l.start),
            void 0 === (_ = l.end) && (_ = w),
            "selectionStart" in b
              ? ((b.selectionStart = w), (b.selectionEnd = Math.min(_, b.value.length)))
              : (_ = ((w = b.ownerDocument || document) && w.defaultView) || window).getSelection &&
                ((_ = _.getSelection()),
                (u = b.textContent.length),
                (k = Math.min(l.start, u)),
                (l = void 0 === l.end ? k : Math.min(l.end, u)),
                !_.extend && k > l && ((u = l), (l = k), (k = u)),
                (u = sr(b, k)),
                (i = sr(b, l)),
                u &&
                  i &&
                  (1 !== _.rangeCount ||
                    _.anchorNode !== u.node ||
                    _.anchorOffset !== u.offset ||
                    _.focusNode !== i.node ||
                    _.focusOffset !== i.offset) &&
                  ((w = w.createRange()).setStart(u.node, u.offset),
                  _.removeAllRanges(),
                  k > l ? (_.addRange(w), _.extend(i.node, i.offset)) : (w.setEnd(i.node, i.offset), _.addRange(w))))),
            (w = []);
          for (_ = b; (_ = _.parentNode); )
            1 === _.nodeType && w.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
          for ("function" == typeof b.focus && b.focus(), b = 0; b < w.length; b++)
            ((_ = w[b]).element.scrollLeft = _.left), (_.element.scrollTop = _.top);
        }
        (Yt = !!Rr), (Dr = Rr = null), (e.current = n), (Wl = r);
        do {
          try {
            for (b = e; null !== Wl; ) {
              var x = Wl.flags;
              if ((36 & x && dl(b, Wl.alternate, Wl), 128 & x)) {
                w = void 0;
                var S = Wl.ref;
                if (null !== S) {
                  var E = Wl.stateNode;
                  switch (Wl.tag) {
                    case 5:
                      w = E;
                      break;
                    default:
                      w = E;
                  }
                  "function" == typeof S ? S(w) : (S.current = w);
                }
              }
              Wl = Wl.nextEffect;
            }
          } catch (e) {
            if (null === Wl) throw Error(a(330));
            Lu(Wl, e), (Wl = Wl.nextEffect);
          }
        } while (null !== Wl);
        (Wl = null), Ao(), (El = o);
      } else e.current = n;
      if (Gl) (Gl = !1), ($l = e), (Yl = t);
      else
        for (Wl = r; null !== Wl; )
          (t = Wl.nextEffect),
            (Wl.nextEffect = null),
            8 & Wl.flags && (((x = Wl).sibling = null), (x.stateNode = null)),
            (Wl = t);
      if (
        (0 === (r = e.pendingLanes) && (ql = null),
        1 === r ? (e === Jl ? Zl++ : ((Zl = 0), (Jl = e))) : (Zl = 0),
        (n = n.stateNode),
        wo && "function" == typeof wo.onCommitFiberRoot)
      )
        try {
          wo.onCommitFiberRoot(bo, n, void 0, 64 == (64 & n.current.flags));
        } catch (e) {}
      if ((cu(e, Fo()), Hl)) throw ((Hl = !1), (e = Vl), (Vl = null), e);
      return 0 != (8 & El) || Vo(), null;
    }
    function Cu() {
      for (; null !== Wl; ) {
        var e = Wl.alternate;
        ou ||
          null === ru ||
          (0 != (8 & Wl.flags) ? Je(Wl, ru) && (ou = !0) : 13 === Wl.tag && _l(e, Wl) && Je(Wl, ru) && (ou = !0));
        var t = Wl.flags;
        0 != (256 & t) && fl(e, Wl),
          0 == (512 & t) ||
            Gl ||
            ((Gl = !0),
            Ho(97, function() {
              return Pu(), null;
            })),
          (Wl = Wl.nextEffect);
      }
    }
    function Pu() {
      if (90 !== Yl) {
        var e = 97 < Yl ? 97 : Yl;
        return (Yl = 90), Wo(e, Tu);
      }
      return !1;
    }
    function Nu(e, t) {
      Xl.push(t, e),
        Gl ||
          ((Gl = !0),
          Ho(97, function() {
            return Pu(), null;
          }));
    }
    function Mu(e, t) {
      Ql.push(t, e),
        Gl ||
          ((Gl = !0),
          Ho(97, function() {
            return Pu(), null;
          }));
    }
    function Tu() {
      if (null === $l) return !1;
      var e = $l;
      if ((($l = null), 0 != (48 & El))) throw Error(a(331));
      var t = El;
      El |= 32;
      var n = Ql;
      Ql = [];
      for (var r = 0; r < n.length; r += 2) {
        var o = n[r],
          i = n[r + 1],
          l = o.destroy;
        if (((o.destroy = void 0), "function" == typeof l))
          try {
            l();
          } catch (e) {
            if (null === i) throw Error(a(330));
            Lu(i, e);
          }
      }
      for (n = Xl, Xl = [], r = 0; r < n.length; r += 2) {
        (o = n[r]), (i = n[r + 1]);
        try {
          var u = o.create;
          o.destroy = u();
        } catch (e) {
          if (null === i) throw Error(a(330));
          Lu(i, e);
        }
      }
      for (u = e.current.firstEffect; null !== u; )
        (e = u.nextEffect), (u.nextEffect = null), 8 & u.flags && ((u.sibling = null), (u.stateNode = null)), (u = e);
      return (El = t), Vo(), !0;
    }
    function ju(e, t, n) {
      li(e, (t = ll(0, (t = ol(n, t)), 1))), (t = iu()), null !== (e = uu(e, 1)) && (Wt(e, 1, t), cu(e, t));
    }
    function Lu(e, t) {
      if (3 === e.tag) ju(e, e, t);
      else
        for (var n = e.return; null !== n; ) {
          if (3 === n.tag) {
            ju(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" == typeof n.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch && (null === ql || !ql.has(r)))
            ) {
              var o = ul(n, (e = ol(t, e)), 1);
              if ((li(n, o), (o = iu()), null !== (n = uu(n, 1)))) Wt(n, 1, o), cu(n, o);
              else if ("function" == typeof r.componentDidCatch && (null === ql || !ql.has(r)))
                try {
                  r.componentDidCatch(t, e);
                } catch (e) {}
              break;
            }
          }
          n = n.return;
        }
    }
    function Au(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        (t = iu()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ol === e &&
          (Pl & n) === n &&
          (4 === Tl || (3 === Tl && (62914560 & Pl) === Pl && 500 > Fo() - Il) ? mu(e, 0) : (Rl |= n)),
        cu(e, t);
    }
    function zu(e, t) {
      var n = e.stateNode;
      null !== n && n.delete(t),
        0 === (t = 0) &&
          (0 == (2 & (t = e.mode))
            ? (t = 1)
            : 0 == (4 & t)
            ? (t = 99 === Uo() ? 1 : 2)
            : (0 === tu && (tu = Ll), 0 === (t = Ut(62914560 & ~tu)) && (t = 4194304))),
        (n = iu()),
        null !== (e = uu(e, t)) && (Wt(e, t, n), cu(e, n));
    }
    function Ru(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.flags = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Du(e, t, n, r) {
      return new Ru(e, t, n, r);
    }
    function Iu(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Fu(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = Du(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Uu(e, t, n, r, o, i) {
      var l = 2;
      if (((r = e), "function" == typeof e)) Iu(e) && (l = 1);
      else if ("string" == typeof e) l = 5;
      else
        e: switch (e) {
          case S:
            return Bu(n.children, o, i, t);
          case R:
            (l = 8), (o |= 16);
            break;
          case E:
            (l = 8), (o |= 1);
            break;
          case O:
            return ((e = Du(12, n, t, 8 | o)).elementType = O), (e.type = O), (e.lanes = i), e;
          case M:
            return ((e = Du(13, n, t, o)).type = M), (e.elementType = M), (e.lanes = i), e;
          case T:
            return ((e = Du(19, n, t, o)).elementType = T), (e.lanes = i), e;
          case D:
            return Wu(n, o, i, t);
          case I:
            return ((e = Du(24, n, t, o)).elementType = I), (e.lanes = i), e;
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case C:
                  l = 10;
                  break e;
                case P:
                  l = 9;
                  break e;
                case N:
                  l = 11;
                  break e;
                case j:
                  l = 14;
                  break e;
                case L:
                  (l = 16), (r = null);
                  break e;
                case A:
                  l = 22;
                  break e;
              }
            throw Error(a(130, null == e ? e : typeof e, ""));
        }
      return ((t = Du(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t;
    }
    function Bu(e, t, n, r) {
      return ((e = Du(7, e, r, t)).lanes = n), e;
    }
    function Wu(e, t, n, r) {
      return ((e = Du(23, e, r, t)).elementType = D), (e.lanes = n), e;
    }
    function Hu(e, t, n) {
      return ((e = Du(6, e, null, t)).lanes = n), e;
    }
    function Vu(e, t, n) {
      return (
        ((t = Du(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
      );
    }
    function qu(e, t, n) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Bt(0)),
        (this.expirationTimes = Bt(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = Bt(0)),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Gu(e, t, n) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: x, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
    }
    function $u(e, t, n, r) {
      var o = t.current,
        i = iu(),
        l = au(o);
      e: if (n) {
        t: {
          if (Xe((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(a(170));
          var u = n;
          do {
            switch (u.tag) {
              case 3:
                u = u.stateNode.context;
                break t;
              case 1:
                if (ho(u.type)) {
                  u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            u = u.return;
          } while (null !== u);
          throw Error(a(171));
        }
        if (1 === n.tag) {
          var c = n.type;
          if (ho(c)) {
            n = yo(n, c, u);
            break e;
          }
        }
        n = u;
      } else n = lo;
      return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = ai(i, l)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        li(o, t),
        lu(o, l, i),
        l
      );
    }
    function Yu(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function Xu(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function Qu(e, t) {
      Xu(e, t), (e = e.alternate) && Xu(e, t);
    }
    function Ku(e, t, n) {
      var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
      if (
        ((n = new qu(e, t, null != n && !0 === n.hydrate)),
        (t = Du(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
        (n.current = t),
        (t.stateNode = n),
        oi(t),
        (e[Xr] = n.current),
        Cr(8 === e.nodeType ? e.parentNode : e),
        r)
      )
        for (e = 0; e < r.length; e++) {
          var o = (t = r[e])._getVersion;
          (o = o(t._source)),
            null == n.mutableSourceEagerHydrationData
              ? (n.mutableSourceEagerHydrationData = [t, o])
              : n.mutableSourceEagerHydrationData.push(t, o);
        }
      this._internalRoot = n;
    }
    function Zu(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function Ju(e, t, n, r, o) {
      var i = n._reactRootContainer;
      if (i) {
        var a = i._internalRoot;
        if ("function" == typeof o) {
          var l = o;
          o = function() {
            var e = Yu(a);
            l.call(e);
          };
        }
        $u(t, a, e, o);
      } else {
        if (
          ((i = n._reactRootContainer = (function(e, t) {
            if (
              (t ||
                (t = !(
                  !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                  1 !== t.nodeType ||
                  !t.hasAttribute("data-reactroot")
                )),
              !t)
            )
              for (var n; (n = e.lastChild); ) e.removeChild(n);
            return new Ku(e, 0, t ? { hydrate: !0 } : void 0);
          })(n, r)),
          (a = i._internalRoot),
          "function" == typeof o)
        ) {
          var u = o;
          o = function() {
            var e = Yu(a);
            u.call(e);
          };
        }
        pu(function() {
          $u(t, a, e, o);
        });
      }
      return Yu(a);
    }
    function ec(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Zu(t)) throw Error(a(200));
      return Gu(e, t, null, n);
    }
    (Bl = function(e, t, n) {
      var r = t.lanes;
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps || co.current) ja = !0;
        else {
          if (0 == (n & r)) {
            switch (((ja = !1), t.tag)) {
              case 3:
                Wa(t), Hi();
                break;
              case 5:
                Ti(t);
                break;
              case 1:
                ho(t.type) && mo(t);
                break;
              case 4:
                Ni(t, t.stateNode.containerInfo);
                break;
              case 10:
                r = t.memoizedProps.value;
                var o = t.type._context;
                ao(Yo, o._currentValue), (o._currentValue = r);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 != (n & t.child.childLanes)
                    ? $a(e, t, n)
                    : (ao(Li, 1 & Li.current), null !== (t = el(e, t, n)) ? t.sibling : null);
                ao(Li, 1 & Li.current);
                break;
              case 19:
                if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                  if (r) return Ja(e, t, n);
                  t.flags |= 64;
                }
                if (
                  (null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                  ao(Li, Li.current),
                  r)
                )
                  break;
                return null;
              case 23:
              case 24:
                return (t.lanes = 0), Da(e, t, n);
            }
            return el(e, t, n);
          }
          ja = 0 != (16384 & e.flags);
        }
      else ja = !1;
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (e = t.pendingProps),
            (o = fo(t, uo.current)),
            ti(t, n),
            (o = na(null, t, r, e, o, n)),
            (t.flags |= 1),
            "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof)
          ) {
            if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ho(r))) {
              var i = !0;
              mo(t);
            } else i = !1;
            (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), oi(t);
            var l = r.getDerivedStateFromProps;
            "function" == typeof l && di(t, r, l, e),
              (o.updater = hi),
              (t.stateNode = o),
              (o._reactInternals = t),
              mi(t, r, e, n),
              (t = Ba(null, t, r, !0, i, n));
          } else (t.tag = 0), La(null, t, o, n), (t = t.child);
          return t;
        case 16:
          o = t.elementType;
          e: {
            switch (
              (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (o = (i = o._init)(o._payload)),
              (t.type = o),
              (i = t.tag = (function(e) {
                if ("function" == typeof e) return Iu(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === N) return 11;
                  if (e === j) return 14;
                }
                return 2;
              })(o)),
              (e = $o(o, e)),
              i)
            ) {
              case 0:
                t = Fa(null, t, o, e, n);
                break e;
              case 1:
                t = Ua(null, t, o, e, n);
                break e;
              case 11:
                t = Aa(null, t, o, e, n);
                break e;
              case 14:
                t = za(null, t, o, $o(o.type, e), r, n);
                break e;
            }
            throw Error(a(306, o, ""));
          }
          return t;
        case 0:
          return (r = t.type), (o = t.pendingProps), Fa(e, t, r, (o = t.elementType === r ? o : $o(r, o)), n);
        case 1:
          return (r = t.type), (o = t.pendingProps), Ua(e, t, r, (o = t.elementType === r ? o : $o(r, o)), n);
        case 3:
          if ((Wa(t), (r = t.updateQueue), null === e || null === r)) throw Error(a(282));
          if (
            ((r = t.pendingProps),
            (o = null !== (o = t.memoizedState) ? o.element : null),
            ii(e, t),
            ci(t, r, null, n),
            (r = t.memoizedState.element) === o)
          )
            Hi(), (t = el(e, t, n));
          else {
            if (
              ((i = (o = t.stateNode).hydrate) &&
                ((Ri = Hr(t.stateNode.containerInfo.firstChild)), (zi = t), (i = Di = !0)),
              i)
            ) {
              if (null != (e = o.mutableSourceEagerHydrationData))
                for (o = 0; o < e.length; o += 2) ((i = e[o])._workInProgressVersionPrimary = e[o + 1]), Vi.push(i);
              for (n = xi(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
            } else La(e, t, r, n), Hi();
            t = t.child;
          }
          return t;
        case 5:
          return (
            Ti(t),
            null === e && Ui(t),
            (r = t.type),
            (o = t.pendingProps),
            (i = null !== e ? e.memoizedProps : null),
            (l = o.children),
            Fr(r, o) ? (l = null) : null !== i && Fr(r, i) && (t.flags |= 16),
            Ia(e, t),
            La(e, t, l, n),
            t.child
          );
        case 6:
          return null === e && Ui(t), null;
        case 13:
          return $a(e, t, n);
        case 4:
          return (
            Ni(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = ki(t, null, r, n)) : La(e, t, r, n),
            t.child
          );
        case 11:
          return (r = t.type), (o = t.pendingProps), Aa(e, t, r, (o = t.elementType === r ? o : $o(r, o)), n);
        case 7:
          return La(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return La(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            (r = t.type._context), (o = t.pendingProps), (l = t.memoizedProps), (i = o.value);
            var u = t.type._context;
            if ((ao(Yo, u._currentValue), (u._currentValue = i), null !== l))
              if (
                ((u = l.value),
                0 ===
                  (i = ar(u, i)
                    ? 0
                    : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, i) : 1073741823)))
              ) {
                if (l.children === o.children && !co.current) {
                  t = el(e, t, n);
                  break e;
                }
              } else
                for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                  var c = u.dependencies;
                  if (null !== c) {
                    l = u.child;
                    for (var s = c.firstContext; null !== s; ) {
                      if (s.context === r && 0 != (s.observedBits & i)) {
                        1 === u.tag && (((s = ai(-1, n & -n)).tag = 2), li(u, s)),
                          (u.lanes |= n),
                          null !== (s = u.alternate) && (s.lanes |= n),
                          ei(u.return, n),
                          (c.lanes |= n);
                        break;
                      }
                      s = s.next;
                    }
                  } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                  if (null !== l) l.return = u;
                  else
                    for (l = u; null !== l; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (null !== (u = l.sibling)) {
                        (u.return = l.return), (l = u);
                        break;
                      }
                      l = l.return;
                    }
                  u = l;
                }
            La(e, t, o.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (o = t.type),
            (r = (i = t.pendingProps).children),
            ti(t, n),
            (r = r((o = ni(o, i.unstable_observedBits)))),
            (t.flags |= 1),
            La(e, t, r, n),
            t.child
          );
        case 14:
          return (i = $o((o = t.type), t.pendingProps)), za(e, t, o, (i = $o(o.type, i)), r, n);
        case 15:
          return Ra(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (o = t.pendingProps),
            (o = t.elementType === r ? o : $o(r, o)),
            null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (t.tag = 1),
            ho(r) ? ((e = !0), mo(t)) : (e = !1),
            ti(t, n),
            gi(t, r, o),
            mi(t, r, o, n),
            Ba(null, t, r, !0, e, n)
          );
        case 19:
          return Ja(e, t, n);
        case 23:
        case 24:
          return Da(e, t, n);
      }
      throw Error(a(156, t.tag));
    }),
      (Ku.prototype.render = function(e) {
        $u(e, this._internalRoot, null, null);
      }),
      (Ku.prototype.unmount = function() {
        var e = this._internalRoot,
          t = e.containerInfo;
        $u(null, e, null, function() {
          t[Xr] = null;
        });
      }),
      (et = function(e) {
        13 === e.tag && (lu(e, 4, iu()), Qu(e, 4));
      }),
      (tt = function(e) {
        13 === e.tag && (lu(e, 67108864, iu()), Qu(e, 67108864));
      }),
      (nt = function(e) {
        if (13 === e.tag) {
          var t = iu(),
            n = au(e);
          lu(e, n, t), Qu(e, n);
        }
      }),
      (rt = function(e, t) {
        return t();
      }),
      (Oe = function(e, t, n) {
        switch (t) {
          case "input":
            if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var o = eo(r);
                  if (!o) throw Error(a(90));
                  K(r), ne(r, o);
                }
              }
            }
            break;
          case "textarea":
            ce(e, n);
            break;
          case "select":
            null != (t = n.value) && ae(e, !!n.multiple, t, !1);
        }
      }),
      (je = hu),
      (Le = function(e, t, n, r, o) {
        var i = El;
        El |= 4;
        try {
          return Wo(98, e.bind(null, t, n, r, o));
        } finally {
          0 === (El = i) && (Ul(), Vo());
        }
      }),
      (Ae = function() {
        0 == (49 & El) &&
          ((function() {
            if (null !== Kl) {
              var e = Kl;
              (Kl = null),
                e.forEach(function(e) {
                  (e.expiredLanes |= 24 & e.pendingLanes), cu(e, Fo());
                });
            }
            Vo();
          })(),
          Pu());
      }),
      (ze = function(e, t) {
        var n = El;
        El |= 2;
        try {
          return e(t);
        } finally {
          0 === (El = n) && (Ul(), Vo());
        }
      });
    var tc = { Events: [Zr, Jr, eo, Me, Te, Pu, { current: !1 }] },
      nc = { findFiberByHostInstance: Kr, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
      rc = {
        bundleType: nc.bundleType,
        version: nc.version,
        rendererPackageName: nc.rendererPackageName,
        rendererConfig: nc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: _.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
          return null === (e = Ze(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          nc.findFiberByHostInstance ||
          function() {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
      };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!oc.isDisabled && oc.supportsFiber)
        try {
          (bo = oc.inject(rc)), (wo = oc);
        } catch (e) {}
    }
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
      (t.createPortal = ec),
      (t.findDOMNode = function(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(a(188));
          throw Error(a(268, Object.keys(e)));
        }
        return (e = null === (e = Ze(t)) ? null : e.stateNode);
      }),
      (t.flushSync = function(e, t) {
        var n = El;
        if (0 != (48 & n)) return e(t);
        El |= 1;
        try {
          if (e) return Wo(99, e.bind(null, t));
        } finally {
          (El = n), Vo();
        }
      }),
      (t.hydrate = function(e, t, n) {
        if (!Zu(t)) throw Error(a(200));
        return Ju(null, e, t, !0, n);
      }),
      (t.render = function(e, t, n) {
        if (!Zu(t)) throw Error(a(200));
        return Ju(null, e, t, !1, n);
      }),
      (t.unmountComponentAtNode = function(e) {
        if (!Zu(e)) throw Error(a(40));
        return (
          !!e._reactRootContainer &&
          (pu(function() {
            Ju(null, null, e, !1, function() {
              (e._reactRootContainer = null), (e[Xr] = null);
            });
          }),
          !0)
        );
      }),
      (t.unstable_batchedUpdates = hu),
      (t.unstable_createPortal = function(e, t) {
        return ec(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
      }),
      (t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Zu(n)) throw Error(a(200));
        if (null == e || void 0 === e._reactInternals) throw Error(a(38));
        return Ju(e, t, n, !1, r);
      }),
      (t.version = "17.0.2");
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(16);
  },
  function(e, t, n) {
    "use strict";
    /** @license React v0.20.2
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, o, i, a;
    if ("object" == typeof performance && "function" == typeof performance.now) {
      var l = performance;
      t.unstable_now = function() {
        return l.now();
      };
    } else {
      var u = Date,
        c = u.now();
      t.unstable_now = function() {
        return u.now() - c;
      };
    }
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
      var s = null,
        f = null,
        d = function() {
          if (null !== s)
            try {
              var e = t.unstable_now();
              s(!0, e), (s = null);
            } catch (e) {
              throw (setTimeout(d, 0), e);
            }
        };
      (r = function(e) {
        null !== s ? setTimeout(r, 0, e) : ((s = e), setTimeout(d, 0));
      }),
        (o = function(e, t) {
          f = setTimeout(e, t);
        }),
        (i = function() {
          clearTimeout(f);
        }),
        (t.unstable_shouldYield = function() {
          return !1;
        }),
        (a = t.unstable_forceFrameRate = function() {});
    } else {
      var h = window.setTimeout,
        p = window.clearTimeout;
      if ("undefined" != typeof console) {
        var g = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          ),
          "function" != typeof g &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            );
      }
      var y = !1,
        m = null,
        v = -1,
        b = 5,
        w = 0;
      (t.unstable_shouldYield = function() {
        return t.unstable_now() >= w;
      }),
        (a = function() {}),
        (t.unstable_forceFrameRate = function(e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (b = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var _ = new MessageChannel(),
        k = _.port2;
      (_.port1.onmessage = function() {
        if (null !== m) {
          var e = t.unstable_now();
          w = e + b;
          try {
            m(!0, e) ? k.postMessage(null) : ((y = !1), (m = null));
          } catch (e) {
            throw (k.postMessage(null), e);
          }
        } else y = !1;
      }),
        (r = function(e) {
          (m = e), y || ((y = !0), k.postMessage(null));
        }),
        (o = function(e, n) {
          v = h(function() {
            e(t.unstable_now());
          }, n);
        }),
        (i = function() {
          p(v), (v = -1);
        });
    }
    function x(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = (n - 1) >>> 1,
          o = e[r];
        if (!(void 0 !== o && 0 < O(o, t))) break e;
        (e[r] = t), (e[n] = o), (n = r);
      }
    }
    function S(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function E(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, o = e.length; r < o; ) {
            var i = 2 * (r + 1) - 1,
              a = e[i],
              l = i + 1,
              u = e[l];
            if (void 0 !== a && 0 > O(a, n))
              void 0 !== u && 0 > O(u, a) ? ((e[r] = u), (e[l] = n), (r = l)) : ((e[r] = a), (e[i] = n), (r = i));
            else {
              if (!(void 0 !== u && 0 > O(u, n))) break e;
              (e[r] = u), (e[l] = n), (r = l);
            }
          }
        }
        return t;
      }
      return null;
    }
    function O(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var C = [],
      P = [],
      N = 1,
      M = null,
      T = 3,
      j = !1,
      L = !1,
      A = !1;
    function z(e) {
      for (var t = S(P); null !== t; ) {
        if (null === t.callback) E(P);
        else {
          if (!(t.startTime <= e)) break;
          E(P), (t.sortIndex = t.expirationTime), x(C, t);
        }
        t = S(P);
      }
    }
    function R(e) {
      if (((A = !1), z(e), !L))
        if (null !== S(C)) (L = !0), r(D);
        else {
          var t = S(P);
          null !== t && o(R, t.startTime - e);
        }
    }
    function D(e, n) {
      (L = !1), A && ((A = !1), i()), (j = !0);
      var r = T;
      try {
        for (z(n), M = S(C); null !== M && (!(M.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
          var a = M.callback;
          if ("function" == typeof a) {
            (M.callback = null), (T = M.priorityLevel);
            var l = a(M.expirationTime <= n);
            (n = t.unstable_now()), "function" == typeof l ? (M.callback = l) : M === S(C) && E(C), z(n);
          } else E(C);
          M = S(C);
        }
        if (null !== M) var u = !0;
        else {
          var c = S(P);
          null !== c && o(R, c.startTime - n), (u = !1);
        }
        return u;
      } finally {
        (M = null), (T = r), (j = !1);
      }
    }
    var I = a;
    (t.unstable_IdlePriority = 5),
      (t.unstable_ImmediatePriority = 1),
      (t.unstable_LowPriority = 4),
      (t.unstable_NormalPriority = 3),
      (t.unstable_Profiling = null),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_cancelCallback = function(e) {
        e.callback = null;
      }),
      (t.unstable_continueExecution = function() {
        L || j || ((L = !0), r(D));
      }),
      (t.unstable_getCurrentPriorityLevel = function() {
        return T;
      }),
      (t.unstable_getFirstCallbackNode = function() {
        return S(C);
      }),
      (t.unstable_next = function(e) {
        switch (T) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = T;
        }
        var n = T;
        T = t;
        try {
          return e();
        } finally {
          T = n;
        }
      }),
      (t.unstable_pauseExecution = function() {}),
      (t.unstable_requestPaint = I),
      (t.unstable_runWithPriority = function(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = T;
        T = e;
        try {
          return t();
        } finally {
          T = n;
        }
      }),
      (t.unstable_scheduleCallback = function(e, n, a) {
        var l = t.unstable_now();
        switch (
          ("object" == typeof a && null !== a ? (a = "number" == typeof (a = a.delay) && 0 < a ? l + a : l) : (a = l),
          e)
        ) {
          case 1:
            var u = -1;
            break;
          case 2:
            u = 250;
            break;
          case 5:
            u = 1073741823;
            break;
          case 4:
            u = 1e4;
            break;
          default:
            u = 5e3;
        }
        return (
          (e = { id: N++, callback: n, priorityLevel: e, startTime: a, expirationTime: (u = a + u), sortIndex: -1 }),
          a > l
            ? ((e.sortIndex = a), x(P, e), null === S(C) && e === S(P) && (A ? i() : (A = !0), o(R, a - l)))
            : ((e.sortIndex = u), x(C, e), L || j || ((L = !0), r(D))),
          e
        );
      }),
      (t.unstable_wrapCallback = function(e) {
        var t = T;
        return function() {
          var n = T;
          T = t;
          try {
            return e.apply(this, arguments);
          } finally {
            T = n;
          }
        };
      });
  },
  function(e, t, n) {
    "use strict";
    e.exports = e =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        e =>
          "%" +
          e
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()
      );
  },
  function(e, t, n) {
    "use strict";
    var r = new RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi"),
      o = new RegExp("(%[a-f0-9]{2})+", "gi");
    function i(e, t) {
      try {
        return [decodeURIComponent(e.join(""))];
      } catch (e) {}
      if (1 === e.length) return e;
      t = t || 1;
      var n = e.slice(0, t),
        r = e.slice(t);
      return Array.prototype.concat.call([], i(n), i(r));
    }
    function a(e) {
      try {
        return decodeURIComponent(e);
      } catch (o) {
        for (var t = e.match(r) || [], n = 1; n < t.length; n++) t = (e = i(t, n).join("")).match(r) || [];
        return e;
      }
    }
    e.exports = function(e) {
      if ("string" != typeof e)
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
      try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
      } catch (t) {
        return (function(e) {
          for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = o.exec(e); n; ) {
            try {
              t[n[0]] = decodeURIComponent(n[0]);
            } catch (e) {
              var r = a(n[0]);
              r !== n[0] && (t[n[0]] = r);
            }
            n = o.exec(e);
          }
          t["%C2"] = "�";
          for (var i = Object.keys(t), l = 0; l < i.length; l++) {
            var u = i[l];
            e = e.replace(new RegExp(u, "g"), t[u]);
          }
          return e;
        })(e);
      }
    };
  },
  function(e, t, n) {
    "use strict";
    e.exports = (e, t) => {
      if ("string" != typeof e || "string" != typeof t)
        throw new TypeError("Expected the arguments to be of type `string`");
      if ("" === t) return [e];
      const n = e.indexOf(t);
      return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
    };
  },
  function(e, t, n) {
    var r = {
      "./custom-node/custom-node.data": 21,
      "./marvel/marvel.data": 22,
      "./relationship-node/relationship-node.data": 23,
      "./small/small.data": 25,
      "./static/static.data": 26,
    };
    function o(e) {
      var t = i(e);
      return n(t);
    }
    function i(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return r[e];
    }
    (o.keys = function() {
      return Object.keys(r);
    }),
      (o.resolve = i),
      (e.exports = o),
      (o.id = 20);
  },
  function(e, t) {
    e.exports = {
      links: [
        { source: 0, target: 2 },
        { source: 0, target: 3 },
        { source: 0, target: 4 },
        { source: 3, target: 4 },
      ],
      nodes: [
        { id: 0, name: "Mary", gender: "female", hasCar: !1, hasBike: !1 },
        { id: 2, name: "Roy", gender: "male", hasCar: !1, hasBike: !0 },
        { id: 3, name: "Frank", gender: "male", hasCar: !0, hasBike: !0 },
        { id: 4, name: "Melanie", gender: "female", hasCar: !0, hasBike: !1 },
      ],
    };
  },
  function(e, t) {
    e.exports = {
      links: [
        { source: "Marvel", target: "Heroes" },
        { source: "Marvel", target: "Villains" },
        { source: "Marvel", target: "Teams" },
        { source: "Heroes", target: "Spider-Man" },
        { source: "Heroes", target: "CAPTAIN MARVEL" },
        { source: "Heroes", target: "HULK" },
        { source: "Heroes", target: "Black Widow" },
        { source: "Heroes", target: "Daredevil" },
        { source: "Heroes", target: "Wolverine" },
        { source: "Heroes", target: "Captain America" },
        { source: "Heroes", target: "Iron Man" },
        { source: "Heroes", target: "THOR" },
        { source: "Villains", target: "Dr. Doom" },
        { source: "Villains", target: "Mystique" },
        { source: "Villains", target: "Red Skull" },
        { source: "Villains", target: "Ronan" },
        { source: "Villains", target: "Magneto" },
        { source: "Villains", target: "Thanos" },
        { source: "Villains", target: "Black Cat" },
        { source: "Teams", target: "Avengers" },
        { source: "Teams", target: "Guardians of the Galaxy" },
        { source: "Teams", target: "Defenders" },
        { source: "Teams", target: "X-Men" },
        { source: "Teams", target: "Fantastic Four" },
        { source: "Teams", target: "Inhumans" },
      ],
      nodes: [
        {
          id: "Marvel",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/marvel.png",
          size: 500,
          fontSize: 18,
        },
        { id: "Heroes", symbolType: "circle", color: "red", size: 300 },
        { id: "Villains", symbolType: "circle", color: "red", size: 300 },
        { id: "Teams", symbolType: "circle", color: "red", size: 300 },
        {
          id: "Spider-Man",
          name: "Peter Benjamin Parker",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_spiderman.png",
          size: 400,
        },
        {
          id: "CAPTAIN MARVEL",
          name: "Carol Danvers",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_captainmarvel.png",
          size: 400,
        },
        {
          id: "HULK",
          name: "Robert Bruce Banner",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_hulk.png",
          size: 400,
        },
        {
          id: "Black Widow",
          name: "Natasha Alianovna Romanova",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_blackwidow.png",
          size: 400,
        },
        {
          id: "Daredevil",
          name: "Matthew Michael Murdock",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_daredevil.png",
          size: 400,
        },
        {
          id: "Wolverine",
          name: "James Howlett",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_wolverine.png",
          size: 400,
        },
        {
          id: "Captain America",
          name: "Steven Rogers",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_captainamerica.png",
          size: 400,
        },
        {
          id: "Iron Man",
          name: "Tony Stark",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_ironman.png",
          size: 400,
        },
        {
          id: "THOR",
          name: "Thor Odinson",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_thor.png",
          size: 400,
        },
        {
          id: "Dr. Doom",
          name: "Victor von Doom",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/drdoom.png",
          size: 400,
        },
        {
          id: "Mystique",
          name: "Unrevealed",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/mystique.png",
          size: 400,
        },
        {
          id: "Red Skull",
          name: "Johann Shmidt",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/redskull.png",
          size: 400,
        },
        {
          id: "Ronan",
          name: "Ronan",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/ronan.png",
          size: 400,
        },
        {
          id: "Magneto",
          name: "Max Eisenhardt",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/magneto.png",
          size: 400,
        },
        {
          id: "Thanos",
          name: "Thanos",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/thanos.png",
          size: 400,
        },
        {
          id: "Black Cat",
          name: "Felicia Hardy",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/blackcat.png",
          size: 400,
        },
        {
          id: "Avengers",
          name: "",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/avengers.png",
          size: 400,
        },
        {
          id: "Guardians of the Galaxy",
          name: "",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/gofgalaxy.png",
          size: 400,
        },
        {
          id: "Defenders",
          name: "",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/defenders.png",
          size: 400,
        },
        { id: "X-Men", name: "", svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/xmen.png", size: 400 },
        {
          id: "Fantastic Four",
          name: "",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/fantasticfour.png",
          size: 400,
        },
        {
          id: "Inhumans",
          name: "",
          svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/inhumans.png",
          size: 400,
        },
      ],
    };
  },
  function(e, t, n) {
    var r = n(24).relationshipsData;
    e.exports = r;
  },
  function(e, t) {
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? r(Object(n), !0).forEach(function(t) {
              i(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function i(e, t, r) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== n(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, t || "default");
              if ("object" !== n(o)) return o;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === n(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = r),
        e
      );
    }
    var a,
      l = function(e) {
        for (
          var t = e || 32, n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", r = n.length, o = "", i = 0;
          i < t;
          i++
        )
          o += n.charAt(Math.floor(Math.random() * r));
        return o;
      },
      u = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = arguments.length > 2 ? arguments[2] : void 0,
          o = r || c(n),
          i = [];
        if (0 === t) return o;
        for (var a = 0; a < 2; a++) {
          var l = c(o.id);
          i.push(l);
        }
        o.children = i;
        var u = t - 1;
        return (
          i.forEach(function(t, n) {
            return e(u, t.id, t);
          }),
          o
        );
      },
      c = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          id: l(),
          properties: {
            avatar: "https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png",
            name: l(5),
            count: Math.floor(40 * Math.random()),
            role: l(5),
          },
          prevId: e,
          children: [],
        };
      },
      s = function(e) {
        return { nodes: f(e), relationships: d(e) };
      },
      f = function e(t, n) {
        var r,
          o = n || [],
          i = { id: t.id, properties: t.properties };
        return (
          o.push(i),
          null === (r = t.children) ||
            void 0 === r ||
            r.forEach(function(t) {
              e(t, o);
            }),
          o
        );
      },
      d = function e(t, n) {
        var r,
          o = n || [],
          i = t.id,
          a = t.prevId,
          l = h(a, i);
        return (
          o.push(l),
          null === (r = t.children) ||
            void 0 === r ||
            r.forEach(function(t) {
              e(t, o);
            }),
          o.filter(function(e) {
            return "" !== e.startNode;
          })
        );
      },
      h = function(e, t) {
        return { id: l(), startNode: e, endNode: t, type: 0 === Math.floor(2 * Math.random()) ? 0 : 1, text: l(5) };
      },
      p = s(u()),
      g = {
        nodes: (a = p).nodes,
        links: a.relationships.map(function(e) {
          return o(o({}, e), {}, { source: e.startNode, target: e.endNode, strokeDasharray: 0 === e.type ? 8 : 0 });
        }),
        rootId: a.nodes[0].id,
      };
    e.exports = { treeToResponseData: s, generateTree: u, relationshipsData: g };
  },
  function(e, t) {
    e.exports = {
      links: [
        { source: 1, target: 2, label: "link 1 and 2" },
        { source: 1, target: 3 },
        { source: 1, target: 4 },
        {
          source: 3,
          target: 4,
          breakPoints: [
            { x: 100, y: 20 },
            { x: 20, y: 100 },
          ],
        },
        { source: 4, target: 4 },
      ],
      nodes: [
        { id: 1, name: "Node 1" },
        { id: 2, name: "Node 2" },
        { id: 3, name: "Node 3" },
        { id: 4, name: "Node 4" },
      ],
    };
  },
  function(e, t) {
    e.exports = {
      links: [
        { source: 1, target: 2, label: "A-B" },
        { source: 1, target: 3, label: "A-C" },
        { source: 1, target: 4, label: "A-D" },
        { source: 3, target: 4, label: "C-D" },
      ],
      nodes: [
        { id: 1, name: "A", x: 50, y: 310 },
        { id: 2, name: "B", x: 300, y: 50 },
        { id: 3, name: "C", x: 400, y: 100 },
        { id: 4, name: "D", x: 400, y: 200 },
      ],
    };
  },
  function(e, t, n) {
    var r = {
      "./custom-node/custom-node.config": 40,
      "./marvel/marvel.config": 31,
      "./relationship-node/relationship-node.config": 41,
      "./small/small.config": 34,
      "./static/static.config": 35,
    };
    function o(e) {
      var t = i(e);
      return n(t);
    }
    function i(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return r[e];
    }
    (o.keys = function() {
      return Object.keys(r);
    }),
      (o.resolve = i),
      (e.exports = o),
      (o.id = 27);
  },
  function(e, t, n) {
    var r = n(29);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { transform: void 0 };
    n(5)(r, o);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      "/* --- Generic styles --- */\n\n.flex-container {\n  flex-direction: column;\n  display: flex;\n}\n\n.flex-container-column {\n  flex-direction: column;\n}\n\n.flex-container-row {\n  flex-direction: row;\n}\n\n.fill-space {\n  flex-grow: 1;\n}\n\n.icon {\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n/* --- Shape for the nodes --- */\n\n.person-node {\n  width: 100%;\n  height: 100%;\n  border-radius: 35% 5% 35% 5%;\n  overflow: hidden;\n  box-sizing: border-box;\n  display: flex;\n}\n\n.person-node.male {\n  background-color: lightblue;\n  box-shadow: 25px 15px cadetblue;\n}\n\n.person-node.female {\n  background-color: pink;\n  box-shadow: 25px 15px palevioletred;\n}\n\n/* --- Other styles for node content --- */\n\n.person-node .name {\n  padding: 5%;\n  font-size: 0.8rem;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.person-node .icon-bar {\n  width: 20%;\n  margin-right: 5%;\n}\n\n.person-node .icon-bar > .icon {\n  width: 80%;\n  height: 30%;\n}\n\n/* you need to toggle `node.renderLabel` to see this class in action */\n.person-node-label {\n  fill: black;\n  text-shadow: rgb(255, 255, 255) 0px -2px 0px, rgb(255, 255, 255) 0px 2px 0px, rgb(255, 255, 255) 2px 0px 0px,\n    rgb(255, 255, 255) -2px 0px 0px;\n  transform: rotate(-25deg) translateX(40px) translateY(15px);\n}\n",
      "",
    ]);
  },
  function(e, t) {
    e.exports = function(e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
        var o,
          i = t
            .trim()
            .replace(/^"(.*)"$/, function(e, t) {
              return t;
            })
            .replace(/^'(.*)'$/, function(e, t) {
              return t;
            });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)
          ? e
          : ((o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, "")),
            "url(" + JSON.stringify(o) + ")");
      });
    };
  },
  function(e, t) {
    e.exports = {
      directed: !0,
      automaticRearrangeAfterDropNode: !0,
      collapsible: !0,
      height: 400,
      highlightDegree: 2,
      highlightOpacity: 0.2,
      linkHighlightBehavior: !0,
      maxZoom: 12,
      minZoom: 0.05,
      nodeHighlightBehavior: !0,
      panAndZoom: !1,
      staticGraph: !1,
      width: 800,
      zoomDisabled: !0,
      d3: { alphaTarget: 0.05, gravity: -250, linkLength: 120, linkStrength: 2 },
      node: {
        color: "#d3d3d3",
        fontColor: "black",
        fontSize: 10,
        fontWeight: "normal",
        highlightColor: "red",
        highlightFontSize: 14,
        highlightFontWeight: "bold",
        highlightStrokeColor: "red",
        highlightStrokeWidth: 1.5,
        labelProperty: function(e) {
          return e.name ? "".concat(e.id, " - ").concat(e.name) : e.id;
        },
        mouseCursor: "crosshair",
        opacity: 0.9,
        renderLabel: !0,
        size: 200,
        strokeColor: "none",
        strokeWidth: 1.5,
        svg: "",
        symbolType: "circle",
        viewGenerator: null,
      },
      link: {
        color: "lightgray",
        highlightColor: "red",
        mouseCursor: "pointer",
        opacity: 1,
        semanticStrokeWidth: !0,
        strokeWidth: 3,
        type: "STRAIGHT",
      },
    };
  },
  function(e, t, n) {
    var r = n(33);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { transform: void 0 };
    n(5)(r, o);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      ":root {\n  --root-color: rgb(255 190 24 / 100%);\n  --node-color: #5c8efa;\n}\n\n.custom {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n}\n\n.avatar {\n  display: flex;\n  position: relative;\n  z-index: 3;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 92px;\n  height: 92px;\n}\n\n.avatar img {\n  display: block;\n  border-radius: 50%;\n  width: 88px;\n  height: 88px;\n}\n\n.avatar_root {\n  background-color: var(--root-color);\n}\n\n.name {\n  margin-top: 2px;\n  padding: 0 12px;\n  border-radius: 13px;\n  height: 26px;\n  background: #fff;\n  box-shadow: 0 2px 8px 0 #fff1da;\n  line-height: 26px;\n  text-align: center;\n  font-size: 16px;\n  color: var(--node-color);\n}\n\n.name_root {\n  color: var(--root-color);\n}\n\n.relation,\n.count {\n  position: absolute;\n  top: 15px;\n  z-index: 4;\n  padding: 2px 4px;\n  border-radius: 4px;\n  background: var(--node-color);\n  text-align: center;\n  color: #fff;\n}\n\n.relation_root,\n.count_root {\n  background-color: var(--root-color);\n}\n.relation {\n  left: 0;\n}\n\n.count {\n  right: 10px;\n}\n",
      "",
    ]);
  },
  function(e, t) {
    e.exports = {
      automaticRearrangeAfterDropNode: !1,
      collapsible: !1,
      height: 400,
      highlightDegree: 1,
      highlightOpacity: 0.2,
      linkHighlightBehavior: !0,
      maxZoom: 8,
      minZoom: 0.1,
      nodeHighlightBehavior: !0,
      panAndZoom: !1,
      staticGraph: !1,
      width: 800,
      node: {
        color: "#d3d3d3",
        fontColor: "black",
        fontSize: 12,
        fontWeight: "normal",
        highlightColor: "red",
        highlightFontSize: 12,
        highlightFontWeight: "bold",
        highlightStrokeColor: "SAME",
        highlightStrokeWidth: 1.5,
        labelProperty: "name",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: !0,
        size: 450,
        strokeColor: "none",
        strokeWidth: 1.5,
        svg: "",
        symbolType: "circle",
      },
      link: {
        color: "#d3d3d3",
        fontColor: "red",
        fontSize: 10,
        highlightColor: "blue",
        highlightFontWeight: "bold",
        labelProperty: function(e) {
          return "from ".concat(e.source, " to ").concat(e.target);
        },
        opacity: 1,
        renderLabel: !1,
        semanticStrokeWidth: !1,
        strokeWidth: 4,
      },
      d3: { gravity: -400, linkLength: 300 },
    };
  },
  function(e, t) {
    e.exports = {
      height: 400,
      width: 800,
      nodeHighlightBehavior: !0,
      linkHighlightBehavior: !0,
      staticGraphWithDragAndDrop: !0,
      node: {
        fontSize: 12,
        highlightFontSize: 12,
        highlightFontWeight: "bold",
        highlightStrokeColor: "blue",
        labelProperty: "name",
        size: 500,
        strokeWidth: 2,
      },
      link: {
        highlightColor: "blue",
        renderLabel: !0,
        highlightFontWeight: "bold",
        semanticStrokeWidth: !0,
        fontSize: 12,
      },
      d3: { gravity: -400, linkLength: 180, disableLinkForce: !0 },
    };
  },
  function(e, t) {
    e.exports = {
      links: [
        { source: "Androsynth", target: "Chenjesu" },
        { source: "Androsynth", target: "Ilwrath" },
        { source: "Androsynth", target: "Mycon" },
        { source: "Androsynth", target: "Spathi" },
        { source: "Androsynth", target: "Umgah" },
        { source: "Androsynth", target: "VUX" },
        { source: "Chenjesu", target: "Mycon" },
        { source: "Chenjesu", target: "Spathi" },
        { source: "Chenjesu", target: "Umgah" },
        { source: "Chenjesu", target: "VUX" },
        { source: "Ilwrath", target: "Spathi" },
        { source: "Ilwrath", target: "Umgah" },
        { source: "Ilwrath", target: "VUX" },
        { source: "Mycon", target: "Umgah" },
        { source: "Mycon", target: "VUX" },
        { source: "Umgah", target: "VUX" },
        { source: "Androsynth", target: "Guardian" },
        { source: "Chenjesu", target: "Broodhmome" },
        { source: "Ilwrath", target: "Avenger" },
        { source: "Mycon", target: "Podship" },
        { source: "Spathi", target: "Eluder" },
        { source: "Umgah", target: "Drone" },
        { source: "VUX", target: "Intruder" },
      ],
      nodes: [
        { id: "Androsynth" },
        { id: "Chenjesu" },
        { id: "Ilwrath" },
        { id: "Mycon" },
        { id: "Spathi" },
        { id: "Umgah" },
        { id: "VUX" },
        { id: "Guardian", symbolType: "square" },
        { id: "Broodhmome", symbolType: "square" },
        { id: "Avenger", symbolType: "square" },
        { id: "Podship", symbolType: "square" },
        { id: "Eluder", symbolType: "square" },
        { id: "Drone", symbolType: "square" },
        { id: "Intruder", symbolType: "square" },
      ],
    };
  },
  function(e, t, n) {
    var r = n(38);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { transform: void 0 };
    n(5)(r, o);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      ".zoom-container {\n  position: absolute;\n  z-index: 999;\n  left: 15px;\n  top: 15px;\n  color: #000;\n}\n",
      "",
    ]);
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      i = n(9),
      a = n.n(i),
      l = {
        automaticRearrangeAfterDropNode: !1,
        collapsible: !1,
        directed: !1,
        focusAnimationDuration: 0.75,
        focusZoom: 1,
        freezeAllDragEvents: !1,
        height: 400,
        highlightDegree: 1,
        highlightOpacity: 1,
        linkHighlightBehavior: !1,
        maxZoom: 8,
        minZoom: 0.1,
        initialZoom: null,
        nodeHighlightBehavior: !1,
        panAndZoom: !1,
        staticGraph: !1,
        staticGraphWithDragAndDrop: !1,
        bounded: !1,
        width: 800,
        d3: { alphaTarget: 0.05, gravity: -100, linkLength: 100, linkStrength: 1, disableLinkForce: !1 },
        node: {
          color: "#d3d3d3",
          fontColor: "black",
          fontSize: 8,
          fontWeight: "normal",
          highlightColor: "SAME",
          highlightFontSize: 8,
          highlightFontWeight: "normal",
          highlightStrokeColor: "SAME",
          highlightStrokeWidth: "SAME",
          labelProperty: "id",
          labelPosition: null,
          labelClass: "",
          mouseCursor: "pointer",
          opacity: 1,
          renderLabel: !0,
          size: 200,
          strokeColor: "none",
          strokeWidth: 1.5,
          svg: "",
          symbolType: "circle",
          viewGenerator: null,
        },
        link: {
          color: "#d3d3d3",
          fontColor: "black",
          fontSize: 8,
          fontWeight: "normal",
          highlightColor: "SAME",
          highlightFontSize: 8,
          highlightFontWeight: "normal",
          labelProperty: "label",
          mouseCursor: "pointer",
          opacity: 1,
          renderLabel: !1,
          semanticStrokeWidth: !1,
          strokeWidth: 1.5,
          markerHeight: 6,
          markerWidth: 6,
          type: "STRAIGHT",
          selfLinkDirection: "TOP_RIGHT",
          strokeDasharray: 0,
          strokeDashoffset: 0,
          strokeLinecap: "butt",
        },
      },
      u = { value: function() {} };
    function c() {
      for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
        if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e)) throw new Error("illegal type: " + e);
        r[e] = [];
      }
      return new s(r);
    }
    function s(e) {
      this._ = e;
    }
    function f(e, t) {
      return e
        .trim()
        .split(/^|\s+/)
        .map(function(e) {
          var n = "",
            r = e.indexOf(".");
          if ((r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))), e && !t.hasOwnProperty(e)))
            throw new Error("unknown type: " + e);
          return { type: e, name: n };
        });
    }
    function d(e, t) {
      for (var n, r = 0, o = e.length; r < o; ++r) if ((n = e[r]).name === t) return n.value;
    }
    function h(e, t, n) {
      for (var r = 0, o = e.length; r < o; ++r)
        if (e[r].name === t) {
          (e[r] = u), (e = e.slice(0, r).concat(e.slice(r + 1)));
          break;
        }
      return null != n && e.push({ name: t, value: n }), e;
    }
    s.prototype = c.prototype = {
      constructor: s,
      on: function(e, t) {
        var n,
          r = this._,
          o = f(e + "", r),
          i = -1,
          a = o.length;
        if (!(arguments.length < 2)) {
          if (null != t && "function" != typeof t) throw new Error("invalid callback: " + t);
          for (; ++i < a; )
            if ((n = (e = o[i]).type)) r[n] = h(r[n], e.name, t);
            else if (null == t) for (n in r) r[n] = h(r[n], e.name, null);
          return this;
        }
        for (; ++i < a; ) if ((n = (e = o[i]).type) && (n = d(r[n], e.name))) return n;
      },
      copy: function() {
        var e = {},
          t = this._;
        for (var n in t) e[n] = t[n].slice();
        return new s(e);
      },
      call: function(e, t) {
        if ((n = arguments.length - 2) > 0) for (var n, r, o = new Array(n), i = 0; i < n; ++i) o[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
        for (i = 0, n = (r = this._[e]).length; i < n; ++i) r[i].value.apply(t, o);
      },
      apply: function(e, t, n) {
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
        for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
      },
    };
    var p = c,
      g = {},
      y = null;
    "undefined" != typeof document &&
      ("onmouseenter" in document.documentElement || (g = { mouseenter: "mouseover", mouseleave: "mouseout" }));
    function m(e, t, n) {
      return (
        (e = v(e, t, n)),
        function(t) {
          var n = t.relatedTarget;
          (n && (n === this || 8 & n.compareDocumentPosition(this))) || e.call(this, t);
        }
      );
    }
    function v(e, t, n) {
      return function(r) {
        var o = y;
        y = r;
        try {
          e.call(this, this.__data__, t, n);
        } finally {
          y = o;
        }
      };
    }
    function b(e) {
      return e
        .trim()
        .split(/^|\s+/)
        .map(function(e) {
          var t = "",
            n = e.indexOf(".");
          return n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))), { type: e, name: t };
        });
    }
    function w(e) {
      return function() {
        var t = this.__on;
        if (t) {
          for (var n, r = 0, o = -1, i = t.length; r < i; ++r)
            (n = t[r]),
              (e.type && n.type !== e.type) || n.name !== e.name
                ? (t[++o] = n)
                : this.removeEventListener(n.type, n.listener, n.capture);
          ++o ? (t.length = o) : delete this.__on;
        }
      };
    }
    function _(e, t, n) {
      var r = g.hasOwnProperty(e.type) ? m : v;
      return function(o, i, a) {
        var l,
          u = this.__on,
          c = r(t, i, a);
        if (u)
          for (var s = 0, f = u.length; s < f; ++s)
            if ((l = u[s]).type === e.type && l.name === e.name)
              return (
                this.removeEventListener(l.type, l.listener, l.capture),
                this.addEventListener(l.type, (l.listener = c), (l.capture = n)),
                void (l.value = t)
              );
        this.addEventListener(e.type, c, n),
          (l = { type: e.type, name: e.name, value: t, listener: c, capture: n }),
          u ? u.push(l) : (this.__on = [l]);
      };
    }
    function k(e, t, n, r) {
      var o = y;
      (e.sourceEvent = y), (y = e);
      try {
        return t.apply(n, r);
      } finally {
        y = o;
      }
    }
    var x = function() {
        for (var e, t = y; (e = t.sourceEvent); ) t = e;
        return t;
      },
      S = function(e, t) {
        var n = e.ownerSVGElement || e;
        if (n.createSVGPoint) {
          var r = n.createSVGPoint();
          return (r.x = t.clientX), (r.y = t.clientY), [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y];
        }
        var o = e.getBoundingClientRect();
        return [t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop];
      },
      E = function(e) {
        var t = x();
        return t.changedTouches && (t = t.changedTouches[0]), S(e, t);
      };
    function O() {}
    var C = function(e) {
      return null == e
        ? O
        : function() {
            return this.querySelector(e);
          };
    };
    function P() {
      return [];
    }
    var N = function(e) {
        return null == e
          ? P
          : function() {
              return this.querySelectorAll(e);
            };
      },
      M = function(e) {
        return function() {
          return this.matches(e);
        };
      },
      T = function(e) {
        return new Array(e.length);
      };
    function j(e, t) {
      (this.ownerDocument = e.ownerDocument),
        (this.namespaceURI = e.namespaceURI),
        (this._next = null),
        (this._parent = e),
        (this.__data__ = t);
    }
    j.prototype = {
      constructor: j,
      appendChild: function(e) {
        return this._parent.insertBefore(e, this._next);
      },
      insertBefore: function(e, t) {
        return this._parent.insertBefore(e, t);
      },
      querySelector: function(e) {
        return this._parent.querySelector(e);
      },
      querySelectorAll: function(e) {
        return this._parent.querySelectorAll(e);
      },
    };
    function L(e, t, n, r, o, i) {
      for (var a, l = 0, u = t.length, c = i.length; l < c; ++l)
        (a = t[l]) ? ((a.__data__ = i[l]), (r[l] = a)) : (n[l] = new j(e, i[l]));
      for (; l < u; ++l) (a = t[l]) && (o[l] = a);
    }
    function A(e, t, n, r, o, i, a) {
      var l,
        u,
        c,
        s = {},
        f = t.length,
        d = i.length,
        h = new Array(f);
      for (l = 0; l < f; ++l)
        (u = t[l]) && ((h[l] = c = "$" + a.call(u, u.__data__, l, t)), c in s ? (o[l] = u) : (s[c] = u));
      for (l = 0; l < d; ++l)
        (u = s[(c = "$" + a.call(e, i[l], l, i))])
          ? ((r[l] = u), (u.__data__ = i[l]), (s[c] = null))
          : (n[l] = new j(e, i[l]));
      for (l = 0; l < f; ++l) (u = t[l]) && s[h[l]] === u && (o[l] = u);
    }
    function z(e, t) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
    }
    var R = "http://www.w3.org/1999/xhtml",
      D = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: R,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      },
      I = function(e) {
        var t = (e += ""),
          n = t.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          D.hasOwnProperty(t) ? { space: D[t], local: e } : e
        );
      };
    function F(e) {
      return function() {
        this.removeAttribute(e);
      };
    }
    function U(e) {
      return function() {
        this.removeAttributeNS(e.space, e.local);
      };
    }
    function B(e, t) {
      return function() {
        this.setAttribute(e, t);
      };
    }
    function W(e, t) {
      return function() {
        this.setAttributeNS(e.space, e.local, t);
      };
    }
    function H(e, t) {
      return function() {
        var n = t.apply(this, arguments);
        null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
      };
    }
    function V(e, t) {
      return function() {
        var n = t.apply(this, arguments);
        null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
      };
    }
    var q = function(e) {
      return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
    };
    function G(e) {
      return function() {
        this.style.removeProperty(e);
      };
    }
    function $(e, t, n) {
      return function() {
        this.style.setProperty(e, t, n);
      };
    }
    function Y(e, t, n) {
      return function() {
        var r = t.apply(this, arguments);
        null == r ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
      };
    }
    function X(e, t) {
      return (
        e.style.getPropertyValue(t) ||
        q(e)
          .getComputedStyle(e, null)
          .getPropertyValue(t)
      );
    }
    function Q(e) {
      return function() {
        delete this[e];
      };
    }
    function K(e, t) {
      return function() {
        this[e] = t;
      };
    }
    function Z(e, t) {
      return function() {
        var n = t.apply(this, arguments);
        null == n ? delete this[e] : (this[e] = n);
      };
    }
    function J(e) {
      return e.trim().split(/^|\s+/);
    }
    function ee(e) {
      return e.classList || new te(e);
    }
    function te(e) {
      (this._node = e), (this._names = J(e.getAttribute("class") || ""));
    }
    function ne(e, t) {
      for (var n = ee(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
    }
    function re(e, t) {
      for (var n = ee(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
    }
    function oe(e) {
      return function() {
        ne(this, e);
      };
    }
    function ie(e) {
      return function() {
        re(this, e);
      };
    }
    function ae(e, t) {
      return function() {
        (t.apply(this, arguments) ? ne : re)(this, e);
      };
    }
    te.prototype = {
      add: function(e) {
        this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function(e) {
        var t = this._names.indexOf(e);
        t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function(e) {
        return this._names.indexOf(e) >= 0;
      },
    };
    function le() {
      this.textContent = "";
    }
    function ue(e) {
      return function() {
        this.textContent = e;
      };
    }
    function ce(e) {
      return function() {
        var t = e.apply(this, arguments);
        this.textContent = null == t ? "" : t;
      };
    }
    function se() {
      this.innerHTML = "";
    }
    function fe(e) {
      return function() {
        this.innerHTML = e;
      };
    }
    function de(e) {
      return function() {
        var t = e.apply(this, arguments);
        this.innerHTML = null == t ? "" : t;
      };
    }
    function he() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function pe() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function ge(e) {
      return function() {
        var t = this.ownerDocument,
          n = this.namespaceURI;
        return n === R && t.documentElement.namespaceURI === R ? t.createElement(e) : t.createElementNS(n, e);
      };
    }
    function ye(e) {
      return function() {
        return this.ownerDocument.createElementNS(e.space, e.local);
      };
    }
    var me = function(e) {
      var t = I(e);
      return (t.local ? ye : ge)(t);
    };
    function ve() {
      return null;
    }
    function be() {
      var e = this.parentNode;
      e && e.removeChild(this);
    }
    function we() {
      var e = this.cloneNode(!1),
        t = this.parentNode;
      return t ? t.insertBefore(e, this.nextSibling) : e;
    }
    function _e() {
      var e = this.cloneNode(!0),
        t = this.parentNode;
      return t ? t.insertBefore(e, this.nextSibling) : e;
    }
    function ke(e, t, n) {
      var r = q(e),
        o = r.CustomEvent;
      "function" == typeof o
        ? (o = new o(t, n))
        : ((o = r.document.createEvent("Event")),
          n ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail)) : o.initEvent(t, !1, !1)),
        e.dispatchEvent(o);
    }
    function xe(e, t) {
      return function() {
        return ke(this, e, t);
      };
    }
    function Se(e, t) {
      return function() {
        return ke(this, e, t.apply(this, arguments));
      };
    }
    var Ee = [null];
    function Oe(e, t) {
      (this._groups = e), (this._parents = t);
    }
    function Ce() {
      return new Oe([[document.documentElement]], Ee);
    }
    Oe.prototype = Ce.prototype = {
      constructor: Oe,
      select: function(e) {
        "function" != typeof e && (e = C(e));
        for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
          for (var i, a, l = t[o], u = l.length, c = (r[o] = new Array(u)), s = 0; s < u; ++s)
            (i = l[s]) &&
              (a = e.call(i, i.__data__, s, l)) &&
              ("__data__" in i && (a.__data__ = i.__data__), (c[s] = a));
        return new Oe(r, this._parents);
      },
      selectAll: function(e) {
        "function" != typeof e && (e = N(e));
        for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
          for (var a, l = t[i], u = l.length, c = 0; c < u; ++c)
            (a = l[c]) && (r.push(e.call(a, a.__data__, c, l)), o.push(a));
        return new Oe(r, o);
      },
      filter: function(e) {
        "function" != typeof e && (e = M(e));
        for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
          for (var i, a = t[o], l = a.length, u = (r[o] = []), c = 0; c < l; ++c)
            (i = a[c]) && e.call(i, i.__data__, c, a) && u.push(i);
        return new Oe(r, this._parents);
      },
      data: function(e, t) {
        if (!e)
          return (
            (p = new Array(this.size())),
            (s = -1),
            this.each(function(e) {
              p[++s] = e;
            }),
            p
          );
        var n,
          r = t ? A : L,
          o = this._parents,
          i = this._groups;
        "function" != typeof e &&
          ((n = e),
          (e = function() {
            return n;
          }));
        for (var a = i.length, l = new Array(a), u = new Array(a), c = new Array(a), s = 0; s < a; ++s) {
          var f = o[s],
            d = i[s],
            h = d.length,
            p = e.call(f, f && f.__data__, s, o),
            g = p.length,
            y = (u[s] = new Array(g)),
            m = (l[s] = new Array(g));
          r(f, d, y, m, (c[s] = new Array(h)), p, t);
          for (var v, b, w = 0, _ = 0; w < g; ++w)
            if ((v = y[w])) {
              for (w >= _ && (_ = w + 1); !(b = m[_]) && ++_ < g; );
              v._next = b || null;
            }
        }
        return ((l = new Oe(l, o))._enter = u), (l._exit = c), l;
      },
      enter: function() {
        return new Oe(this._enter || this._groups.map(T), this._parents);
      },
      exit: function() {
        return new Oe(this._exit || this._groups.map(T), this._parents);
      },
      join: function(e, t, n) {
        var r = this.enter(),
          o = this,
          i = this.exit();
        return (
          (r = "function" == typeof e ? e(r) : r.append(e + "")),
          null != t && (o = t(o)),
          null == n ? i.remove() : n(i),
          r && o ? r.merge(o).order() : o
        );
      },
      merge: function(e) {
        for (
          var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), l = 0;
          l < i;
          ++l
        )
          for (var u, c = t[l], s = n[l], f = c.length, d = (a[l] = new Array(f)), h = 0; h < f; ++h)
            (u = c[h] || s[h]) && (d[h] = u);
        for (; l < r; ++l) a[l] = t[l];
        return new Oe(a, this._parents);
      },
      order: function() {
        for (var e = this._groups, t = -1, n = e.length; ++t < n; )
          for (var r, o = e[t], i = o.length - 1, a = o[i]; --i >= 0; )
            (r = o[i]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), (a = r));
        return this;
      },
      sort: function(e) {
        function t(t, n) {
          return t && n ? e(t.__data__, n.__data__) : !t - !n;
        }
        e || (e = z);
        for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
          for (var a, l = n[i], u = l.length, c = (o[i] = new Array(u)), s = 0; s < u; ++s) (a = l[s]) && (c[s] = a);
          c.sort(t);
        }
        return new Oe(o, this._parents).order();
      },
      call: function() {
        var e = arguments[0];
        return (arguments[0] = this), e.apply(null, arguments), this;
      },
      nodes: function() {
        var e = new Array(this.size()),
          t = -1;
        return (
          this.each(function() {
            e[++t] = this;
          }),
          e
        );
      },
      node: function() {
        for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
          for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
            var a = r[o];
            if (a) return a;
          }
        return null;
      },
      size: function() {
        var e = 0;
        return (
          this.each(function() {
            ++e;
          }),
          e
        );
      },
      empty: function() {
        return !this.node();
      },
      each: function(e) {
        for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
          for (var o, i = t[n], a = 0, l = i.length; a < l; ++a) (o = i[a]) && e.call(o, o.__data__, a, i);
        return this;
      },
      attr: function(e, t) {
        var n = I(e);
        if (arguments.length < 2) {
          var r = this.node();
          return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
        }
        return this.each(
          (null == t ? (n.local ? U : F) : "function" == typeof t ? (n.local ? V : H) : n.local ? W : B)(n, t)
        );
      },
      style: function(e, t, n) {
        return arguments.length > 1
          ? this.each((null == t ? G : "function" == typeof t ? Y : $)(e, t, null == n ? "" : n))
          : X(this.node(), e);
      },
      property: function(e, t) {
        return arguments.length > 1
          ? this.each((null == t ? Q : "function" == typeof t ? Z : K)(e, t))
          : this.node()[e];
      },
      classed: function(e, t) {
        var n = J(e + "");
        if (arguments.length < 2) {
          for (var r = ee(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
          return !0;
        }
        return this.each(("function" == typeof t ? ae : t ? oe : ie)(n, t));
      },
      text: function(e) {
        return arguments.length
          ? this.each(null == e ? le : ("function" == typeof e ? ce : ue)(e))
          : this.node().textContent;
      },
      html: function(e) {
        return arguments.length
          ? this.each(null == e ? se : ("function" == typeof e ? de : fe)(e))
          : this.node().innerHTML;
      },
      raise: function() {
        return this.each(he);
      },
      lower: function() {
        return this.each(pe);
      },
      append: function(e) {
        var t = "function" == typeof e ? e : me(e);
        return this.select(function() {
          return this.appendChild(t.apply(this, arguments));
        });
      },
      insert: function(e, t) {
        var n = "function" == typeof e ? e : me(e),
          r = null == t ? ve : "function" == typeof t ? t : C(t);
        return this.select(function() {
          return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
        });
      },
      remove: function() {
        return this.each(be);
      },
      clone: function(e) {
        return this.select(e ? _e : we);
      },
      datum: function(e) {
        return arguments.length ? this.property("__data__", e) : this.node().__data__;
      },
      on: function(e, t, n) {
        var r,
          o,
          i = b(e + ""),
          a = i.length;
        if (!(arguments.length < 2)) {
          for (l = t ? _ : w, null == n && (n = !1), r = 0; r < a; ++r) this.each(l(i[r], t, n));
          return this;
        }
        var l = this.node().__on;
        if (l)
          for (var u, c = 0, s = l.length; c < s; ++c)
            for (r = 0, u = l[c]; r < a; ++r) if ((o = i[r]).type === u.type && o.name === u.name) return u.value;
      },
      dispatch: function(e, t) {
        return this.each(("function" == typeof t ? Se : xe)(e, t));
      },
    };
    var Pe = Ce,
      Ne = function(e) {
        return "string" == typeof e
          ? new Oe([[document.querySelector(e)]], [document.documentElement])
          : new Oe([[e]], Ee);
      },
      Me = function(e, t, n) {
        arguments.length < 3 && ((n = t), (t = x().changedTouches));
        for (var r, o = 0, i = t ? t.length : 0; o < i; ++o) if ((r = t[o]).identifier === n) return S(e, r);
        return null;
      };
    function Te() {
      y.stopImmediatePropagation();
    }
    var je = function() {
        y.preventDefault(), y.stopImmediatePropagation();
      },
      Le = function(e) {
        var t = e.document.documentElement,
          n = Ne(e).on("dragstart.drag", je, !0);
        "onselectstart" in t
          ? n.on("selectstart.drag", je, !0)
          : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = "none"));
      };
    function Ae(e, t) {
      var n = e.document.documentElement,
        r = Ne(e).on("dragstart.drag", null);
      t &&
        (r.on("click.drag", je, !0),
        setTimeout(function() {
          r.on("click.drag", null);
        }, 0)),
        "onselectstart" in n
          ? r.on("selectstart.drag", null)
          : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
    }
    var ze = function(e) {
      return function() {
        return e;
      };
    };
    function Re(e, t, n, r, o, i, a, l, u, c) {
      (this.target = e),
        (this.type = t),
        (this.subject = n),
        (this.identifier = r),
        (this.active = o),
        (this.x = i),
        (this.y = a),
        (this.dx = l),
        (this.dy = u),
        (this._ = c);
    }
    function De() {
      return !y.ctrlKey && !y.button;
    }
    function Ie() {
      return this.parentNode;
    }
    function Fe(e) {
      return null == e ? { x: y.x, y: y.y } : e;
    }
    function Ue() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }
    Re.prototype.on = function() {
      var e = this._.on.apply(this._, arguments);
      return e === this._ ? this : e;
    };
    var Be = function() {
        var e,
          t,
          n,
          r,
          o = De,
          i = Ie,
          a = Fe,
          l = Ue,
          u = {},
          c = p("start", "drag", "end"),
          s = 0,
          f = 0;
        function d(e) {
          e.on("mousedown.drag", h)
            .filter(l)
            .on("touchstart.drag", v)
            .on("touchmove.drag", b)
            .on("touchend.drag touchcancel.drag", w)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function h() {
          if (!r && o.apply(this, arguments)) {
            var a = _("mouse", i.apply(this, arguments), E, this, arguments);
            a &&
              (Ne(y.view)
                .on("mousemove.drag", g, !0)
                .on("mouseup.drag", m, !0),
              Le(y.view),
              Te(),
              (n = !1),
              (e = y.clientX),
              (t = y.clientY),
              a("start"));
          }
        }
        function g() {
          if ((je(), !n)) {
            var r = y.clientX - e,
              o = y.clientY - t;
            n = r * r + o * o > f;
          }
          u.mouse("drag");
        }
        function m() {
          Ne(y.view).on("mousemove.drag mouseup.drag", null), Ae(y.view, n), je(), u.mouse("end");
        }
        function v() {
          if (o.apply(this, arguments)) {
            var e,
              t,
              n = y.changedTouches,
              r = i.apply(this, arguments),
              a = n.length;
            for (e = 0; e < a; ++e) (t = _(n[e].identifier, r, Me, this, arguments)) && (Te(), t("start"));
          }
        }
        function b() {
          var e,
            t,
            n = y.changedTouches,
            r = n.length;
          for (e = 0; e < r; ++e) (t = u[n[e].identifier]) && (je(), t("drag"));
        }
        function w() {
          var e,
            t,
            n = y.changedTouches,
            o = n.length;
          for (
            r && clearTimeout(r),
              r = setTimeout(function() {
                r = null;
              }, 500),
              e = 0;
            e < o;
            ++e
          )
            (t = u[n[e].identifier]) && (Te(), t("end"));
        }
        function _(e, t, n, r, o) {
          var i,
            l,
            f,
            h = n(t, e),
            p = c.copy();
          if (
            k(new Re(d, "beforestart", i, e, s, h[0], h[1], 0, 0, p), function() {
              return null != (y.subject = i = a.apply(r, o)) && ((l = i.x - h[0] || 0), (f = i.y - h[1] || 0), !0);
            })
          )
            return function a(c) {
              var g,
                y = h;
              switch (c) {
                case "start":
                  (u[e] = a), (g = s++);
                  break;
                case "end":
                  delete u[e], --s;
                case "drag":
                  (h = n(t, e)), (g = s);
              }
              k(new Re(d, c, i, e, g, h[0] + l, h[1] + f, h[0] - y[0], h[1] - y[1], p), p.apply, p, [c, r, o]);
            };
        }
        return (
          (d.filter = function(e) {
            return arguments.length ? ((o = "function" == typeof e ? e : ze(!!e)), d) : o;
          }),
          (d.container = function(e) {
            return arguments.length ? ((i = "function" == typeof e ? e : ze(e)), d) : i;
          }),
          (d.subject = function(e) {
            return arguments.length ? ((a = "function" == typeof e ? e : ze(e)), d) : a;
          }),
          (d.touchable = function(e) {
            return arguments.length ? ((l = "function" == typeof e ? e : ze(!!e)), d) : l;
          }),
          (d.on = function() {
            var e = c.on.apply(c, arguments);
            return e === c ? d : e;
          }),
          (d.clickDistance = function(e) {
            return arguments.length ? ((f = (e = +e) * e), d) : Math.sqrt(f);
          }),
          d
        );
      },
      We = function(e) {
        return function() {
          return e;
        };
      },
      He = function() {
        return 1e-6 * (Math.random() - 0.5);
      };
    function Ve(e, t, n, r) {
      if (isNaN(t) || isNaN(n)) return e;
      var o,
        i,
        a,
        l,
        u,
        c,
        s,
        f,
        d,
        h = e._root,
        p = { data: r },
        g = e._x0,
        y = e._y0,
        m = e._x1,
        v = e._y1;
      if (!h) return (e._root = p), e;
      for (; h.length; )
        if (
          ((c = t >= (i = (g + m) / 2)) ? (g = i) : (m = i),
          (s = n >= (a = (y + v) / 2)) ? (y = a) : (v = a),
          (o = h),
          !(h = h[(f = (s << 1) | c)]))
        )
          return (o[f] = p), e;
      if (((l = +e._x.call(null, h.data)), (u = +e._y.call(null, h.data)), t === l && n === u))
        return (p.next = h), o ? (o[f] = p) : (e._root = p), e;
      do {
        (o = o ? (o[f] = new Array(4)) : (e._root = new Array(4))),
          (c = t >= (i = (g + m) / 2)) ? (g = i) : (m = i),
          (s = n >= (a = (y + v) / 2)) ? (y = a) : (v = a);
      } while ((f = (s << 1) | c) == (d = ((u >= a) << 1) | (l >= i)));
      return (o[d] = h), (o[f] = p), e;
    }
    var qe = function(e, t, n, r, o) {
      (this.node = e), (this.x0 = t), (this.y0 = n), (this.x1 = r), (this.y1 = o);
    };
    function Ge(e) {
      return e[0];
    }
    function $e(e) {
      return e[1];
    }
    function Ye(e, t, n) {
      var r = new Xe(null == t ? Ge : t, null == n ? $e : n, NaN, NaN, NaN, NaN);
      return null == e ? r : r.addAll(e);
    }
    function Xe(e, t, n, r, o, i) {
      (this._x = e),
        (this._y = t),
        (this._x0 = n),
        (this._y0 = r),
        (this._x1 = o),
        (this._y1 = i),
        (this._root = void 0);
    }
    function Qe(e) {
      for (var t = { data: e.data }, n = t; (e = e.next); ) n = n.next = { data: e.data };
      return t;
    }
    var Ke = (Ye.prototype = Xe.prototype);
    (Ke.copy = function() {
      var e,
        t,
        n = new Xe(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
      if (!r) return n;
      if (!r.length) return (n._root = Qe(r)), n;
      for (e = [{ source: r, target: (n._root = new Array(4)) }]; (r = e.pop()); )
        for (var o = 0; o < 4; ++o)
          (t = r.source[o]) &&
            (t.length ? e.push({ source: t, target: (r.target[o] = new Array(4)) }) : (r.target[o] = Qe(t)));
      return n;
    }),
      (Ke.add = function(e) {
        var t = +this._x.call(null, e),
          n = +this._y.call(null, e);
        return Ve(this.cover(t, n), t, n, e);
      }),
      (Ke.addAll = function(e) {
        var t,
          n,
          r,
          o,
          i = e.length,
          a = new Array(i),
          l = new Array(i),
          u = 1 / 0,
          c = 1 / 0,
          s = -1 / 0,
          f = -1 / 0;
        for (n = 0; n < i; ++n)
          isNaN((r = +this._x.call(null, (t = e[n])))) ||
            isNaN((o = +this._y.call(null, t))) ||
            ((a[n] = r), (l[n] = o), r < u && (u = r), r > s && (s = r), o < c && (c = o), o > f && (f = o));
        if (u > s || c > f) return this;
        for (this.cover(u, c).cover(s, f), n = 0; n < i; ++n) Ve(this, a[n], l[n], e[n]);
        return this;
      }),
      (Ke.cover = function(e, t) {
        if (isNaN((e = +e)) || isNaN((t = +t))) return this;
        var n = this._x0,
          r = this._y0,
          o = this._x1,
          i = this._y1;
        if (isNaN(n)) (o = (n = Math.floor(e)) + 1), (i = (r = Math.floor(t)) + 1);
        else {
          for (var a, l, u = o - n, c = this._root; n > e || e >= o || r > t || t >= i; )
            switch (((l = ((t < r) << 1) | (e < n)), ((a = new Array(4))[l] = c), (c = a), (u *= 2), l)) {
              case 0:
                (o = n + u), (i = r + u);
                break;
              case 1:
                (n = o - u), (i = r + u);
                break;
              case 2:
                (o = n + u), (r = i - u);
                break;
              case 3:
                (n = o - u), (r = i - u);
            }
          this._root && this._root.length && (this._root = c);
        }
        return (this._x0 = n), (this._y0 = r), (this._x1 = o), (this._y1 = i), this;
      }),
      (Ke.data = function() {
        var e = [];
        return (
          this.visit(function(t) {
            if (!t.length)
              do {
                e.push(t.data);
              } while ((t = t.next));
          }),
          e
        );
      }),
      (Ke.extent = function(e) {
        return arguments.length
          ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
          : isNaN(this._x0)
          ? void 0
          : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ];
      }),
      (Ke.find = function(e, t, n) {
        var r,
          o,
          i,
          a,
          l,
          u,
          c,
          s = this._x0,
          f = this._y0,
          d = this._x1,
          h = this._y1,
          p = [],
          g = this._root;
        for (
          g && p.push(new qe(g, s, f, d, h)),
            null == n ? (n = 1 / 0) : ((s = e - n), (f = t - n), (d = e + n), (h = t + n), (n *= n));
          (u = p.pop());

        )
          if (!(!(g = u.node) || (o = u.x0) > d || (i = u.y0) > h || (a = u.x1) < s || (l = u.y1) < f))
            if (g.length) {
              var y = (o + a) / 2,
                m = (i + l) / 2;
              p.push(
                new qe(g[3], y, m, a, l),
                new qe(g[2], o, m, y, l),
                new qe(g[1], y, i, a, m),
                new qe(g[0], o, i, y, m)
              ),
                (c = ((t >= m) << 1) | (e >= y)) &&
                  ((u = p[p.length - 1]), (p[p.length - 1] = p[p.length - 1 - c]), (p[p.length - 1 - c] = u));
            } else {
              var v = e - +this._x.call(null, g.data),
                b = t - +this._y.call(null, g.data),
                w = v * v + b * b;
              if (w < n) {
                var _ = Math.sqrt((n = w));
                (s = e - _), (f = t - _), (d = e + _), (h = t + _), (r = g.data);
              }
            }
        return r;
      }),
      (Ke.remove = function(e) {
        if (isNaN((i = +this._x.call(null, e))) || isNaN((a = +this._y.call(null, e)))) return this;
        var t,
          n,
          r,
          o,
          i,
          a,
          l,
          u,
          c,
          s,
          f,
          d,
          h = this._root,
          p = this._x0,
          g = this._y0,
          y = this._x1,
          m = this._y1;
        if (!h) return this;
        if (h.length)
          for (;;) {
            if (
              ((c = i >= (l = (p + y) / 2)) ? (p = l) : (y = l),
              (s = a >= (u = (g + m) / 2)) ? (g = u) : (m = u),
              (t = h),
              !(h = h[(f = (s << 1) | c)]))
            )
              return this;
            if (!h.length) break;
            (t[(f + 1) & 3] || t[(f + 2) & 3] || t[(f + 3) & 3]) && ((n = t), (d = f));
          }
        for (; h.data !== e; ) if (((r = h), !(h = h.next))) return this;
        return (
          (o = h.next) && delete h.next,
          r
            ? (o ? (r.next = o) : delete r.next, this)
            : t
            ? (o ? (t[f] = o) : delete t[f],
              (h = t[0] || t[1] || t[2] || t[3]) &&
                h === (t[3] || t[2] || t[1] || t[0]) &&
                !h.length &&
                (n ? (n[d] = h) : (this._root = h)),
              this)
            : ((this._root = o), this)
        );
      }),
      (Ke.removeAll = function(e) {
        for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
        return this;
      }),
      (Ke.root = function() {
        return this._root;
      }),
      (Ke.size = function() {
        var e = 0;
        return (
          this.visit(function(t) {
            if (!t.length)
              do {
                ++e;
              } while ((t = t.next));
          }),
          e
        );
      }),
      (Ke.visit = function(e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          l = [],
          u = this._root;
        for (u && l.push(new qe(u, this._x0, this._y0, this._x1, this._y1)); (t = l.pop()); )
          if (!e((u = t.node), (r = t.x0), (o = t.y0), (i = t.x1), (a = t.y1)) && u.length) {
            var c = (r + i) / 2,
              s = (o + a) / 2;
            (n = u[3]) && l.push(new qe(n, c, s, i, a)),
              (n = u[2]) && l.push(new qe(n, r, s, c, a)),
              (n = u[1]) && l.push(new qe(n, c, o, i, s)),
              (n = u[0]) && l.push(new qe(n, r, o, c, s));
          }
        return this;
      }),
      (Ke.visitAfter = function(e) {
        var t,
          n = [],
          r = [];
        for (this._root && n.push(new qe(this._root, this._x0, this._y0, this._x1, this._y1)); (t = n.pop()); ) {
          var o = t.node;
          if (o.length) {
            var i,
              a = t.x0,
              l = t.y0,
              u = t.x1,
              c = t.y1,
              s = (a + u) / 2,
              f = (l + c) / 2;
            (i = o[0]) && n.push(new qe(i, a, l, s, f)),
              (i = o[1]) && n.push(new qe(i, s, l, u, f)),
              (i = o[2]) && n.push(new qe(i, a, f, s, c)),
              (i = o[3]) && n.push(new qe(i, s, f, u, c));
          }
          r.push(t);
        }
        for (; (t = r.pop()); ) e(t.node, t.x0, t.y0, t.x1, t.y1);
        return this;
      }),
      (Ke.x = function(e) {
        return arguments.length ? ((this._x = e), this) : this._x;
      }),
      (Ke.y = function(e) {
        return arguments.length ? ((this._y = e), this) : this._y;
      });
    function Ze() {}
    function Je(e, t) {
      var n = new Ze();
      if (e instanceof Ze)
        e.each(function(e, t) {
          n.set(t, e);
        });
      else if (Array.isArray(e)) {
        var r,
          o = -1,
          i = e.length;
        if (null == t) for (; ++o < i; ) n.set(o, e[o]);
        else for (; ++o < i; ) n.set(t((r = e[o]), o, e), r);
      } else if (e) for (var a in e) n.set(a, e[a]);
      return n;
    }
    Ze.prototype = Je.prototype = {
      constructor: Ze,
      has: function(e) {
        return "$" + e in this;
      },
      get: function(e) {
        return this["$" + e];
      },
      set: function(e, t) {
        return (this["$" + e] = t), this;
      },
      remove: function(e) {
        var t = "$" + e;
        return t in this && delete this[t];
      },
      clear: function() {
        for (var e in this) "$" === e[0] && delete this[e];
      },
      keys: function() {
        var e = [];
        for (var t in this) "$" === t[0] && e.push(t.slice(1));
        return e;
      },
      values: function() {
        var e = [];
        for (var t in this) "$" === t[0] && e.push(this[t]);
        return e;
      },
      entries: function() {
        var e = [];
        for (var t in this) "$" === t[0] && e.push({ key: t.slice(1), value: this[t] });
        return e;
      },
      size: function() {
        var e = 0;
        for (var t in this) "$" === t[0] && ++e;
        return e;
      },
      empty: function() {
        for (var e in this) if ("$" === e[0]) return !1;
        return !0;
      },
      each: function(e) {
        for (var t in this) "$" === t[0] && e(this[t], t.slice(1), this);
      },
    };
    var et = Je;
    function tt() {}
    var nt = et.prototype;
    function rt(e, t) {
      var n = new tt();
      if (e instanceof tt)
        e.each(function(e) {
          n.add(e);
        });
      else if (e) {
        var r = -1,
          o = e.length;
        if (null == t) for (; ++r < o; ) n.add(e[r]);
        else for (; ++r < o; ) n.add(t(e[r], r, e));
      }
      return n;
    }
    tt.prototype = rt.prototype = {
      constructor: tt,
      has: nt.has,
      add: function(e) {
        return (this["$" + (e += "")] = e), this;
      },
      remove: nt.remove,
      clear: nt.clear,
      values: nt.keys,
      size: nt.size,
      empty: nt.empty,
      each: nt.each,
    };
    function ot(e) {
      return e.index;
    }
    function it(e, t) {
      var n = e.get(t);
      if (!n) throw new Error("missing: " + t);
      return n;
    }
    var at,
      lt,
      ut = function(e) {
        var t,
          n,
          r,
          o,
          i,
          a = ot,
          l = function(e) {
            return 1 / Math.min(o[e.source.index], o[e.target.index]);
          },
          u = We(30),
          c = 1;
        function s(r) {
          for (var o = 0, a = e.length; o < c; ++o)
            for (var l, u, s, f, d, h, p, g = 0; g < a; ++g)
              (u = (l = e[g]).source),
                (f = (s = l.target).x + s.vx - u.x - u.vx || He()),
                (d = s.y + s.vy - u.y - u.vy || He()),
                (f *= h = (((h = Math.sqrt(f * f + d * d)) - n[g]) / h) * r * t[g]),
                (d *= h),
                (s.vx -= f * (p = i[g])),
                (s.vy -= d * p),
                (u.vx += f * (p = 1 - p)),
                (u.vy += d * p);
        }
        function f() {
          if (r) {
            var l,
              u,
              c = r.length,
              s = e.length,
              f = et(r, a);
            for (l = 0, o = new Array(c); l < s; ++l)
              ((u = e[l]).index = l),
                "object" != typeof u.source && (u.source = it(f, u.source)),
                "object" != typeof u.target && (u.target = it(f, u.target)),
                (o[u.source.index] = (o[u.source.index] || 0) + 1),
                (o[u.target.index] = (o[u.target.index] || 0) + 1);
            for (l = 0, i = new Array(s); l < s; ++l)
              (u = e[l]), (i[l] = o[u.source.index] / (o[u.source.index] + o[u.target.index]));
            (t = new Array(s)), d(), (n = new Array(s)), h();
          }
        }
        function d() {
          if (r) for (var n = 0, o = e.length; n < o; ++n) t[n] = +l(e[n], n, e);
        }
        function h() {
          if (r) for (var t = 0, o = e.length; t < o; ++t) n[t] = +u(e[t], t, e);
        }
        return (
          null == e && (e = []),
          (s.initialize = function(e) {
            (r = e), f();
          }),
          (s.links = function(t) {
            return arguments.length ? ((e = t), f(), s) : e;
          }),
          (s.id = function(e) {
            return arguments.length ? ((a = e), s) : a;
          }),
          (s.iterations = function(e) {
            return arguments.length ? ((c = +e), s) : c;
          }),
          (s.strength = function(e) {
            return arguments.length ? ((l = "function" == typeof e ? e : We(+e)), d(), s) : l;
          }),
          (s.distance = function(e) {
            return arguments.length ? ((u = "function" == typeof e ? e : We(+e)), h(), s) : u;
          }),
          s
        );
      },
      ct = 0,
      st = 0,
      ft = 0,
      dt = 0,
      ht = 0,
      pt = 0,
      gt = "object" == typeof performance && performance.now ? performance : Date,
      yt =
        "object" == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function(e) {
              setTimeout(e, 17);
            };
    function mt() {
      return ht || (yt(vt), (ht = gt.now() + pt));
    }
    function vt() {
      ht = 0;
    }
    function bt() {
      this._call = this._time = this._next = null;
    }
    function wt(e, t, n) {
      var r = new bt();
      return r.restart(e, t, n), r;
    }
    function _t() {
      (ht = (dt = gt.now()) + pt), (ct = st = 0);
      try {
        !(function() {
          mt(), ++ct;
          for (var e, t = at; t; ) (e = ht - t._time) >= 0 && t._call.call(null, e), (t = t._next);
          --ct;
        })();
      } finally {
        (ct = 0),
          (function() {
            var e,
              t,
              n = at,
              r = 1 / 0;
            for (; n; )
              n._call
                ? (r > n._time && (r = n._time), (e = n), (n = n._next))
                : ((t = n._next), (n._next = null), (n = e ? (e._next = t) : (at = t)));
            (lt = e), xt(r);
          })(),
          (ht = 0);
      }
    }
    function kt() {
      var e = gt.now(),
        t = e - dt;
      t > 1e3 && ((pt -= t), (dt = e));
    }
    function xt(e) {
      ct ||
        (st && (st = clearTimeout(st)),
        e - ht > 24
          ? (e < 1 / 0 && (st = setTimeout(_t, e - gt.now() - pt)), ft && (ft = clearInterval(ft)))
          : (ft || ((dt = gt.now()), (ft = setInterval(kt, 1e3))), (ct = 1), yt(_t)));
    }
    function St(e) {
      return e.x;
    }
    function Et(e) {
      return e.y;
    }
    bt.prototype = wt.prototype = {
      constructor: bt,
      restart: function(e, t, n) {
        if ("function" != typeof e) throw new TypeError("callback is not a function");
        (n = (null == n ? mt() : +n) + (null == t ? 0 : +t)),
          this._next || lt === this || (lt ? (lt._next = this) : (at = this), (lt = this)),
          (this._call = e),
          (this._time = n),
          xt();
      },
      stop: function() {
        this._call && ((this._call = null), (this._time = 1 / 0), xt());
      },
    };
    var Ot = Math.PI * (3 - Math.sqrt(5)),
      Ct = function(e) {
        return "string" == typeof e
          ? new Oe([document.querySelectorAll(e)], [document.documentElement])
          : new Oe([null == e ? [] : e], Ee);
      },
      Pt = Math.SQRT2;
    function Nt(e) {
      return ((e = Math.exp(e)) + 1 / e) / 2;
    }
    var Mt = function(e, t) {
        var n,
          r,
          o = e[0],
          i = e[1],
          a = e[2],
          l = t[0],
          u = t[1],
          c = t[2],
          s = l - o,
          f = u - i,
          d = s * s + f * f;
        if (d < 1e-12)
          (r = Math.log(c / a) / Pt),
            (n = function(e) {
              return [o + e * s, i + e * f, a * Math.exp(Pt * e * r)];
            });
        else {
          var h = Math.sqrt(d),
            p = (c * c - a * a + 4 * d) / (2 * a * 2 * h),
            g = (c * c - a * a - 4 * d) / (2 * c * 2 * h),
            y = Math.log(Math.sqrt(p * p + 1) - p),
            m = Math.log(Math.sqrt(g * g + 1) - g);
          (r = (m - y) / Pt),
            (n = function(e) {
              var t,
                n = e * r,
                l = Nt(y),
                u =
                  (a / (2 * h)) *
                  (l * ((t = Pt * n + y), ((t = Math.exp(2 * t)) - 1) / (t + 1)) -
                    (function(e) {
                      return ((e = Math.exp(e)) - 1 / e) / 2;
                    })(y));
              return [o + u * s, i + u * f, (a * l) / Nt(Pt * n + y)];
            });
        }
        return (n.duration = 1e3 * r), n;
      },
      Tt = function(e, t, n) {
        var r = new bt();
        return (
          (t = null == t ? 0 : +t),
          r.restart(
            function(n) {
              r.stop(), e(n + t);
            },
            t,
            n
          ),
          r
        );
      },
      jt = p("start", "end", "cancel", "interrupt"),
      Lt = [],
      At = function(e, t, n, r, o, i) {
        var a = e.__transition;
        if (a) {
          if (n in a) return;
        } else e.__transition = {};
        !(function(e, t, n) {
          var r,
            o = e.__transition;
          function i(u) {
            var c, s, f, d;
            if (1 !== n.state) return l();
            for (c in o)
              if ((d = o[c]).name === n.name) {
                if (3 === d.state) return Tt(i);
                4 === d.state
                  ? ((d.state = 6),
                    d.timer.stop(),
                    d.on.call("interrupt", e, e.__data__, d.index, d.group),
                    delete o[c])
                  : +c < t &&
                    ((d.state = 6), d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete o[c]);
              }
            if (
              (Tt(function() {
                3 === n.state && ((n.state = 4), n.timer.restart(a, n.delay, n.time), a(u));
              }),
              (n.state = 2),
              n.on.call("start", e, e.__data__, n.index, n.group),
              2 === n.state)
            ) {
              for (n.state = 3, r = new Array((f = n.tween.length)), c = 0, s = -1; c < f; ++c)
                (d = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (r[++s] = d);
              r.length = s + 1;
            }
          }
          function a(t) {
            for (
              var o = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(l), (n.state = 5), 1),
                i = -1,
                a = r.length;
              ++i < a;

            )
              r[i].call(e, o);
            5 === n.state && (n.on.call("end", e, e.__data__, n.index, n.group), l());
          }
          function l() {
            for (var r in ((n.state = 6), n.timer.stop(), delete o[t], o)) return;
            delete e.__transition;
          }
          (o[t] = n),
            (n.timer = wt(
              function(e) {
                (n.state = 1), n.timer.restart(i, n.delay, n.time), n.delay <= e && i(e - n.delay);
              },
              0,
              n.time
            ));
        })(e, n, {
          name: t,
          index: r,
          group: o,
          on: jt,
          tween: Lt,
          time: i.time,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          timer: null,
          state: 0,
        });
      };
    function zt(e, t) {
      var n = Dt(e, t);
      if (n.state > 0) throw new Error("too late; already scheduled");
      return n;
    }
    function Rt(e, t) {
      var n = Dt(e, t);
      if (n.state > 3) throw new Error("too late; already running");
      return n;
    }
    function Dt(e, t) {
      var n = e.__transition;
      if (!n || !(n = n[t])) throw new Error("transition not found");
      return n;
    }
    var It,
      Ft,
      Ut,
      Bt,
      Wt = function(e, t) {
        var n,
          r,
          o,
          i = e.__transition,
          a = !0;
        if (i) {
          for (o in ((t = null == t ? null : t + ""), i))
            (n = i[o]).name === t
              ? ((r = n.state > 2 && n.state < 5),
                (n.state = 6),
                n.timer.stop(),
                n.on.call(r ? "interrupt" : "cancel", e, e.__data__, n.index, n.group),
                delete i[o])
              : (a = !1);
          a && delete e.__transition;
        }
      },
      Ht = function(e, t) {
        return (
          (e = +e),
          (t = +t),
          function(n) {
            return e * (1 - n) + t * n;
          }
        );
      },
      Vt = 180 / Math.PI,
      qt = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      Gt = function(e, t, n, r, o, i) {
        var a, l, u;
        return (
          (a = Math.sqrt(e * e + t * t)) && ((e /= a), (t /= a)),
          (u = e * n + t * r) && ((n -= e * u), (r -= t * u)),
          (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (u /= l)),
          e * r < t * n && ((e = -e), (t = -t), (u = -u), (a = -a)),
          {
            translateX: o,
            translateY: i,
            rotate: Math.atan2(t, e) * Vt,
            skewX: Math.atan(u) * Vt,
            scaleX: a,
            scaleY: l,
          }
        );
      };
    function $t(e, t, n, r) {
      function o(e) {
        return e.length ? e.pop() + " " : "";
      }
      return function(i, a) {
        var l = [],
          u = [];
        return (
          (i = e(i)),
          (a = e(a)),
          (function(e, r, o, i, a, l) {
            if (e !== o || r !== i) {
              var u = a.push("translate(", null, t, null, n);
              l.push({ i: u - 4, x: Ht(e, o) }, { i: u - 2, x: Ht(r, i) });
            } else (o || i) && a.push("translate(" + o + t + i + n);
          })(i.translateX, i.translateY, a.translateX, a.translateY, l, u),
          (function(e, t, n, i) {
            e !== t
              ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                i.push({ i: n.push(o(n) + "rotate(", null, r) - 2, x: Ht(e, t) }))
              : t && n.push(o(n) + "rotate(" + t + r);
          })(i.rotate, a.rotate, l, u),
          (function(e, t, n, i) {
            e !== t
              ? i.push({ i: n.push(o(n) + "skewX(", null, r) - 2, x: Ht(e, t) })
              : t && n.push(o(n) + "skewX(" + t + r);
          })(i.skewX, a.skewX, l, u),
          (function(e, t, n, r, i, a) {
            if (e !== n || t !== r) {
              var l = i.push(o(i) + "scale(", null, ",", null, ")");
              a.push({ i: l - 4, x: Ht(e, n) }, { i: l - 2, x: Ht(t, r) });
            } else (1 === n && 1 === r) || i.push(o(i) + "scale(" + n + "," + r + ")");
          })(i.scaleX, i.scaleY, a.scaleX, a.scaleY, l, u),
          (i = a = null),
          function(e) {
            for (var t, n = -1, r = u.length; ++n < r; ) l[(t = u[n]).i] = t.x(e);
            return l.join("");
          }
        );
      };
    }
    var Yt = $t(
        function(e) {
          return "none" === e
            ? qt
            : (It ||
                ((It = document.createElement("DIV")), (Ft = document.documentElement), (Ut = document.defaultView)),
              (It.style.transform = e),
              (e = Ut.getComputedStyle(Ft.appendChild(It), null).getPropertyValue("transform")),
              Ft.removeChild(It),
              (e = e.slice(7, -1).split(",")),
              Gt(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]));
        },
        "px, ",
        "px)",
        "deg)"
      ),
      Xt = $t(
        function(e) {
          return null == e
            ? qt
            : (Bt || (Bt = document.createElementNS("http://www.w3.org/2000/svg", "g")),
              Bt.setAttribute("transform", e),
              (e = Bt.transform.baseVal.consolidate()) ? ((e = e.matrix), Gt(e.a, e.b, e.c, e.d, e.e, e.f)) : qt);
        },
        ", ",
        ")",
        ")"
      );
    function Qt(e, t) {
      var n, r;
      return function() {
        var o = Rt(this, e),
          i = o.tween;
        if (i !== n)
          for (var a = 0, l = (r = n = i).length; a < l; ++a)
            if (r[a].name === t) {
              (r = r.slice()).splice(a, 1);
              break;
            }
        o.tween = r;
      };
    }
    function Kt(e, t, n) {
      var r, o;
      if ("function" != typeof n) throw new Error();
      return function() {
        var i = Rt(this, e),
          a = i.tween;
        if (a !== r) {
          o = (r = a).slice();
          for (var l = { name: t, value: n }, u = 0, c = o.length; u < c; ++u)
            if (o[u].name === t) {
              o[u] = l;
              break;
            }
          u === c && o.push(l);
        }
        i.tween = o;
      };
    }
    function Zt(e, t, n) {
      var r = e._id;
      return (
        e.each(function() {
          var e = Rt(this, r);
          (e.value || (e.value = {}))[t] = n.apply(this, arguments);
        }),
        function(e) {
          return Dt(e, r).value[t];
        }
      );
    }
    var Jt = function(e, t, n) {
      (e.prototype = t.prototype = n), (n.constructor = e);
    };
    function en(e, t) {
      var n = Object.create(e.prototype);
      for (var r in t) n[r] = t[r];
      return n;
    }
    function tn() {}
    var nn = "\\s*([+-]?\\d+)\\s*",
      rn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      on = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      an = /^#([0-9a-f]{3,8})$/,
      ln = new RegExp("^rgb\\(" + [nn, nn, nn] + "\\)$"),
      un = new RegExp("^rgb\\(" + [on, on, on] + "\\)$"),
      cn = new RegExp("^rgba\\(" + [nn, nn, nn, rn] + "\\)$"),
      sn = new RegExp("^rgba\\(" + [on, on, on, rn] + "\\)$"),
      fn = new RegExp("^hsl\\(" + [rn, on, on] + "\\)$"),
      dn = new RegExp("^hsla\\(" + [rn, on, on, rn] + "\\)$"),
      hn = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
    function pn() {
      return this.rgb().formatHex();
    }
    function gn() {
      return this.rgb().formatRgb();
    }
    function yn(e) {
      var t, n;
      return (
        (e = (e + "").trim().toLowerCase()),
        (t = an.exec(e))
          ? ((n = t[1].length),
            (t = parseInt(t[1], 16)),
            6 === n
              ? mn(t)
              : 3 === n
              ? new _n(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (240 & t), ((15 & t) << 4) | (15 & t), 1)
              : 8 === n
              ? vn((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (255 & t) / 255)
              : 4 === n
              ? vn(
                  ((t >> 12) & 15) | ((t >> 8) & 240),
                  ((t >> 8) & 15) | ((t >> 4) & 240),
                  ((t >> 4) & 15) | (240 & t),
                  (((15 & t) << 4) | (15 & t)) / 255
                )
              : null)
          : (t = ln.exec(e))
          ? new _n(t[1], t[2], t[3], 1)
          : (t = un.exec(e))
          ? new _n((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, 1)
          : (t = cn.exec(e))
          ? vn(t[1], t[2], t[3], t[4])
          : (t = sn.exec(e))
          ? vn((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
          : (t = fn.exec(e))
          ? En(t[1], t[2] / 100, t[3] / 100, 1)
          : (t = dn.exec(e))
          ? En(t[1], t[2] / 100, t[3] / 100, t[4])
          : hn.hasOwnProperty(e)
          ? mn(hn[e])
          : "transparent" === e
          ? new _n(NaN, NaN, NaN, 0)
          : null
      );
    }
    function mn(e) {
      return new _n((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
    }
    function vn(e, t, n, r) {
      return r <= 0 && (e = t = n = NaN), new _n(e, t, n, r);
    }
    function bn(e) {
      return e instanceof tn || (e = yn(e)), e ? new _n((e = e.rgb()).r, e.g, e.b, e.opacity) : new _n();
    }
    function wn(e, t, n, r) {
      return 1 === arguments.length ? bn(e) : new _n(e, t, n, null == r ? 1 : r);
    }
    function _n(e, t, n, r) {
      (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
    }
    function kn() {
      return "#" + Sn(this.r) + Sn(this.g) + Sn(this.b);
    }
    function xn() {
      var e = this.opacity;
      return (
        (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") +
        Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
        ", " +
        Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
        ", " +
        Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
        (1 === e ? ")" : ", " + e + ")")
      );
    }
    function Sn(e) {
      return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16);
    }
    function En(e, t, n, r) {
      return r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN), new Cn(e, t, n, r);
    }
    function On(e) {
      if (e instanceof Cn) return new Cn(e.h, e.s, e.l, e.opacity);
      if ((e instanceof tn || (e = yn(e)), !e)) return new Cn();
      if (e instanceof Cn) return e;
      var t = (e = e.rgb()).r / 255,
        n = e.g / 255,
        r = e.b / 255,
        o = Math.min(t, n, r),
        i = Math.max(t, n, r),
        a = NaN,
        l = i - o,
        u = (i + o) / 2;
      return (
        l
          ? ((a = t === i ? (n - r) / l + 6 * (n < r) : n === i ? (r - t) / l + 2 : (t - n) / l + 4),
            (l /= u < 0.5 ? i + o : 2 - i - o),
            (a *= 60))
          : (l = u > 0 && u < 1 ? 0 : a),
        new Cn(a, l, u, e.opacity)
      );
    }
    function Cn(e, t, n, r) {
      (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
    }
    function Pn(e, t, n) {
      return 255 * (e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t);
    }
    function Nn(e, t, n, r, o) {
      var i = e * e,
        a = i * e;
      return ((1 - 3 * e + 3 * i - a) * t + (4 - 6 * i + 3 * a) * n + (1 + 3 * e + 3 * i - 3 * a) * r + a * o) / 6;
    }
    Jt(tn, yn, {
      copy: function(e) {
        return Object.assign(new this.constructor(), this, e);
      },
      displayable: function() {
        return this.rgb().displayable();
      },
      hex: pn,
      formatHex: pn,
      formatHsl: function() {
        return On(this).formatHsl();
      },
      formatRgb: gn,
      toString: gn,
    }),
      Jt(
        _n,
        wn,
        en(tn, {
          brighter: function(e) {
            return (
              (e = null == e ? 1 / 0.7 : Math.pow(1 / 0.7, e)), new _n(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          darker: function(e) {
            return (e = null == e ? 0.7 : Math.pow(0.7, e)), new _n(this.r * e, this.g * e, this.b * e, this.opacity);
          },
          rgb: function() {
            return this;
          },
          displayable: function() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: kn,
          formatHex: kn,
          formatRgb: xn,
          toString: xn,
        })
      ),
      Jt(
        Cn,
        function(e, t, n, r) {
          return 1 === arguments.length ? On(e) : new Cn(e, t, n, null == r ? 1 : r);
        },
        en(tn, {
          brighter: function(e) {
            return (e = null == e ? 1 / 0.7 : Math.pow(1 / 0.7, e)), new Cn(this.h, this.s, this.l * e, this.opacity);
          },
          darker: function(e) {
            return (e = null == e ? 0.7 : Math.pow(0.7, e)), new Cn(this.h, this.s, this.l * e, this.opacity);
          },
          rgb: function() {
            var e = (this.h % 360) + 360 * (this.h < 0),
              t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < 0.5 ? n : 1 - n) * t,
              o = 2 * n - r;
            return new _n(
              Pn(e >= 240 ? e - 240 : e + 120, o, r),
              Pn(e, o, r),
              Pn(e < 120 ? e + 240 : e - 120, o, r),
              this.opacity
            );
          },
          displayable: function() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl: function() {
            var e = this.opacity;
            return (
              (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") +
              (this.h || 0) +
              ", " +
              100 * (this.s || 0) +
              "%, " +
              100 * (this.l || 0) +
              "%" +
              (1 === e ? ")" : ", " + e + ")")
            );
          },
        })
      );
    var Mn = function(e) {
      return function() {
        return e;
      };
    };
    function Tn(e, t) {
      return function(n) {
        return e + n * t;
      };
    }
    function jn(e) {
      return 1 == (e = +e)
        ? Ln
        : function(t, n) {
            return n - t
              ? (function(e, t, n) {
                  return (
                    (e = Math.pow(e, n)),
                    (t = Math.pow(t, n) - e),
                    (n = 1 / n),
                    function(r) {
                      return Math.pow(e + r * t, n);
                    }
                  );
                })(t, n, e)
              : Mn(isNaN(t) ? n : t);
          };
    }
    function Ln(e, t) {
      var n = t - e;
      return n ? Tn(e, n) : Mn(isNaN(e) ? t : e);
    }
    var An = (function e(t) {
      var n = jn(t);
      function r(e, t) {
        var r = n((e = wn(e)).r, (t = wn(t)).r),
          o = n(e.g, t.g),
          i = n(e.b, t.b),
          a = Ln(e.opacity, t.opacity);
        return function(t) {
          return (e.r = r(t)), (e.g = o(t)), (e.b = i(t)), (e.opacity = a(t)), e + "";
        };
      }
      return (r.gamma = e), r;
    })(1);
    function zn(e) {
      return function(t) {
        var n,
          r,
          o = t.length,
          i = new Array(o),
          a = new Array(o),
          l = new Array(o);
        for (n = 0; n < o; ++n) (r = wn(t[n])), (i[n] = r.r || 0), (a[n] = r.g || 0), (l[n] = r.b || 0);
        return (
          (i = e(i)),
          (a = e(a)),
          (l = e(l)),
          (r.opacity = 1),
          function(e) {
            return (r.r = i(e)), (r.g = a(e)), (r.b = l(e)), r + "";
          }
        );
      };
    }
    zn(function(e) {
      var t = e.length - 1;
      return function(n) {
        var r = n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
          o = e[r],
          i = e[r + 1],
          a = r > 0 ? e[r - 1] : 2 * o - i,
          l = r < t - 1 ? e[r + 2] : 2 * i - o;
        return Nn((n - r / t) * t, a, o, i, l);
      };
    }),
      zn(function(e) {
        var t = e.length;
        return function(n) {
          var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
            o = e[(r + t - 1) % t],
            i = e[r % t],
            a = e[(r + 1) % t],
            l = e[(r + 2) % t];
          return Nn((n - r / t) * t, o, i, a, l);
        };
      });
    var Rn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Dn = new RegExp(Rn.source, "g");
    var In = function(e, t) {
        var n,
          r,
          o,
          i = (Rn.lastIndex = Dn.lastIndex = 0),
          a = -1,
          l = [],
          u = [];
        for (e += "", t += ""; (n = Rn.exec(e)) && (r = Dn.exec(t)); )
          (o = r.index) > i && ((o = t.slice(i, o)), l[a] ? (l[a] += o) : (l[++a] = o)),
            (n = n[0]) === (r = r[0])
              ? l[a]
                ? (l[a] += r)
                : (l[++a] = r)
              : ((l[++a] = null), u.push({ i: a, x: Ht(n, r) })),
            (i = Dn.lastIndex);
        return (
          i < t.length && ((o = t.slice(i)), l[a] ? (l[a] += o) : (l[++a] = o)),
          l.length < 2
            ? u[0]
              ? (function(e) {
                  return function(t) {
                    return e(t) + "";
                  };
                })(u[0].x)
              : (function(e) {
                  return function() {
                    return e;
                  };
                })(t)
            : ((t = u.length),
              function(e) {
                for (var n, r = 0; r < t; ++r) l[(n = u[r]).i] = n.x(e);
                return l.join("");
              })
        );
      },
      Fn = function(e, t) {
        var n;
        return ("number" == typeof t ? Ht : t instanceof yn ? An : (n = yn(t)) ? ((t = n), An) : In)(e, t);
      };
    function Un(e) {
      return function() {
        this.removeAttribute(e);
      };
    }
    function Bn(e) {
      return function() {
        this.removeAttributeNS(e.space, e.local);
      };
    }
    function Wn(e, t, n) {
      var r,
        o,
        i = n + "";
      return function() {
        var a = this.getAttribute(e);
        return a === i ? null : a === r ? o : (o = t((r = a), n));
      };
    }
    function Hn(e, t, n) {
      var r,
        o,
        i = n + "";
      return function() {
        var a = this.getAttributeNS(e.space, e.local);
        return a === i ? null : a === r ? o : (o = t((r = a), n));
      };
    }
    function Vn(e, t, n) {
      var r, o, i;
      return function() {
        var a,
          l,
          u = n(this);
        if (null != u)
          return (a = this.getAttribute(e)) === (l = u + "")
            ? null
            : a === r && l === o
            ? i
            : ((o = l), (i = t((r = a), u)));
        this.removeAttribute(e);
      };
    }
    function qn(e, t, n) {
      var r, o, i;
      return function() {
        var a,
          l,
          u = n(this);
        if (null != u)
          return (a = this.getAttributeNS(e.space, e.local)) === (l = u + "")
            ? null
            : a === r && l === o
            ? i
            : ((o = l), (i = t((r = a), u)));
        this.removeAttributeNS(e.space, e.local);
      };
    }
    function Gn(e, t) {
      return function(n) {
        this.setAttribute(e, t.call(this, n));
      };
    }
    function $n(e, t) {
      return function(n) {
        this.setAttributeNS(e.space, e.local, t.call(this, n));
      };
    }
    function Yn(e, t) {
      var n, r;
      function o() {
        var o = t.apply(this, arguments);
        return o !== r && (n = (r = o) && $n(e, o)), n;
      }
      return (o._value = t), o;
    }
    function Xn(e, t) {
      var n, r;
      function o() {
        var o = t.apply(this, arguments);
        return o !== r && (n = (r = o) && Gn(e, o)), n;
      }
      return (o._value = t), o;
    }
    function Qn(e, t) {
      return function() {
        zt(this, e).delay = +t.apply(this, arguments);
      };
    }
    function Kn(e, t) {
      return (
        (t = +t),
        function() {
          zt(this, e).delay = t;
        }
      );
    }
    function Zn(e, t) {
      return function() {
        Rt(this, e).duration = +t.apply(this, arguments);
      };
    }
    function Jn(e, t) {
      return (
        (t = +t),
        function() {
          Rt(this, e).duration = t;
        }
      );
    }
    function er(e, t) {
      if ("function" != typeof t) throw new Error();
      return function() {
        Rt(this, e).ease = t;
      };
    }
    function tr(e, t, n) {
      var r,
        o,
        i = (function(e) {
          return (e + "")
            .trim()
            .split(/^|\s+/)
            .every(function(e) {
              var t = e.indexOf(".");
              return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
            });
        })(t)
          ? zt
          : Rt;
      return function() {
        var a = i(this, e),
          l = a.on;
        l !== r && (o = (r = l).copy()).on(t, n), (a.on = o);
      };
    }
    var nr = Pe.prototype.constructor;
    function rr(e) {
      return function() {
        this.style.removeProperty(e);
      };
    }
    function or(e, t, n) {
      return function(r) {
        this.style.setProperty(e, t.call(this, r), n);
      };
    }
    function ir(e, t, n) {
      var r, o;
      function i() {
        var i = t.apply(this, arguments);
        return i !== o && (r = (o = i) && or(e, i, n)), r;
      }
      return (i._value = t), i;
    }
    function ar(e) {
      return function(t) {
        this.textContent = e.call(this, t);
      };
    }
    function lr(e) {
      var t, n;
      function r() {
        var r = e.apply(this, arguments);
        return r !== n && (t = (n = r) && ar(r)), t;
      }
      return (r._value = e), r;
    }
    var ur = 0;
    function cr(e, t, n, r) {
      (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
    }
    function sr() {
      return ++ur;
    }
    var fr = Pe.prototype;
    cr.prototype = function(e) {
      return Pe().transition(e);
    }.prototype = {
      constructor: cr,
      select: function(e) {
        var t = this._name,
          n = this._id;
        "function" != typeof e && (e = C(e));
        for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
          for (var l, u, c = r[a], s = c.length, f = (i[a] = new Array(s)), d = 0; d < s; ++d)
            (l = c[d]) &&
              (u = e.call(l, l.__data__, d, c)) &&
              ("__data__" in l && (u.__data__ = l.__data__), (f[d] = u), At(f[d], t, n, d, f, Dt(l, n)));
        return new cr(i, this._parents, t, n);
      },
      selectAll: function(e) {
        var t = this._name,
          n = this._id;
        "function" != typeof e && (e = N(e));
        for (var r = this._groups, o = r.length, i = [], a = [], l = 0; l < o; ++l)
          for (var u, c = r[l], s = c.length, f = 0; f < s; ++f)
            if ((u = c[f])) {
              for (var d, h = e.call(u, u.__data__, f, c), p = Dt(u, n), g = 0, y = h.length; g < y; ++g)
                (d = h[g]) && At(d, t, n, g, h, p);
              i.push(h), a.push(u);
            }
        return new cr(i, a, t, n);
      },
      filter: function(e) {
        "function" != typeof e && (e = M(e));
        for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
          for (var i, a = t[o], l = a.length, u = (r[o] = []), c = 0; c < l; ++c)
            (i = a[c]) && e.call(i, i.__data__, c, a) && u.push(i);
        return new cr(r, this._parents, this._name, this._id);
      },
      merge: function(e) {
        if (e._id !== this._id) throw new Error();
        for (
          var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), l = 0;
          l < i;
          ++l
        )
          for (var u, c = t[l], s = n[l], f = c.length, d = (a[l] = new Array(f)), h = 0; h < f; ++h)
            (u = c[h] || s[h]) && (d[h] = u);
        for (; l < r; ++l) a[l] = t[l];
        return new cr(a, this._parents, this._name, this._id);
      },
      selection: function() {
        return new nr(this._groups, this._parents);
      },
      transition: function() {
        for (var e = this._name, t = this._id, n = sr(), r = this._groups, o = r.length, i = 0; i < o; ++i)
          for (var a, l = r[i], u = l.length, c = 0; c < u; ++c)
            if ((a = l[c])) {
              var s = Dt(a, t);
              At(a, e, n, c, l, { time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease });
            }
        return new cr(r, this._parents, e, n);
      },
      call: fr.call,
      nodes: fr.nodes,
      node: fr.node,
      size: fr.size,
      empty: fr.empty,
      each: fr.each,
      on: function(e, t) {
        var n = this._id;
        return arguments.length < 2 ? Dt(this.node(), n).on.on(e) : this.each(tr(n, e, t));
      },
      attr: function(e, t) {
        var n = I(e),
          r = "transform" === n ? Xt : Fn;
        return this.attrTween(
          e,
          "function" == typeof t
            ? (n.local ? qn : Vn)(n, r, Zt(this, "attr." + e, t))
            : null == t
            ? (n.local ? Bn : Un)(n)
            : (n.local ? Hn : Wn)(n, r, t)
        );
      },
      attrTween: function(e, t) {
        var n = "attr." + e;
        if (arguments.length < 2) return (n = this.tween(n)) && n._value;
        if (null == t) return this.tween(n, null);
        if ("function" != typeof t) throw new Error();
        var r = I(e);
        return this.tween(n, (r.local ? Yn : Xn)(r, t));
      },
      style: function(e, t, n) {
        var r = "transform" == (e += "") ? Yt : Fn;
        return null == t
          ? this.styleTween(
              e,
              (function(e, t) {
                var n, r, o;
                return function() {
                  var i = X(this, e),
                    a = (this.style.removeProperty(e), X(this, e));
                  return i === a ? null : i === n && a === r ? o : (o = t((n = i), (r = a)));
                };
              })(e, r)
            ).on("end.style." + e, rr(e))
          : "function" == typeof t
          ? this.styleTween(
              e,
              (function(e, t, n) {
                var r, o, i;
                return function() {
                  var a = X(this, e),
                    l = n(this),
                    u = l + "";
                  return (
                    null == l && (this.style.removeProperty(e), (u = l = X(this, e))),
                    a === u ? null : a === r && u === o ? i : ((o = u), (i = t((r = a), l)))
                  );
                };
              })(e, r, Zt(this, "style." + e, t))
            ).each(
              (function(e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = "style." + t,
                  l = "end." + a;
                return function() {
                  var u = Rt(this, e),
                    c = u.on,
                    s = null == u.value[a] ? i || (i = rr(t)) : void 0;
                  (c === n && o === s) || (r = (n = c).copy()).on(l, (o = s)), (u.on = r);
                };
              })(this._id, e)
            )
          : this.styleTween(
              e,
              (function(e, t, n) {
                var r,
                  o,
                  i = n + "";
                return function() {
                  var a = X(this, e);
                  return a === i ? null : a === r ? o : (o = t((r = a), n));
                };
              })(e, r, t),
              n
            ).on("end.style." + e, null);
      },
      styleTween: function(e, t, n) {
        var r = "style." + (e += "");
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == t) return this.tween(r, null);
        if ("function" != typeof t) throw new Error();
        return this.tween(r, ir(e, t, null == n ? "" : n));
      },
      text: function(e) {
        return this.tween(
          "text",
          "function" == typeof e
            ? (function(e) {
                return function() {
                  var t = e(this);
                  this.textContent = null == t ? "" : t;
                };
              })(Zt(this, "text", e))
            : (function(e) {
                return function() {
                  this.textContent = e;
                };
              })(null == e ? "" : e + "")
        );
      },
      textTween: function(e) {
        var t = "text";
        if (arguments.length < 1) return (t = this.tween(t)) && t._value;
        if (null == e) return this.tween(t, null);
        if ("function" != typeof e) throw new Error();
        return this.tween(t, lr(e));
      },
      remove: function() {
        return this.on(
          "end.remove",
          ((e = this._id),
          function() {
            var t = this.parentNode;
            for (var n in this.__transition) if (+n !== e) return;
            t && t.removeChild(this);
          })
        );
        var e;
      },
      tween: function(e, t) {
        var n = this._id;
        if (((e += ""), arguments.length < 2)) {
          for (var r, o = Dt(this.node(), n).tween, i = 0, a = o.length; i < a; ++i)
            if ((r = o[i]).name === e) return r.value;
          return null;
        }
        return this.each((null == t ? Qt : Kt)(n, e, t));
      },
      delay: function(e) {
        var t = this._id;
        return arguments.length ? this.each(("function" == typeof e ? Qn : Kn)(t, e)) : Dt(this.node(), t).delay;
      },
      duration: function(e) {
        var t = this._id;
        return arguments.length ? this.each(("function" == typeof e ? Zn : Jn)(t, e)) : Dt(this.node(), t).duration;
      },
      ease: function(e) {
        var t = this._id;
        return arguments.length ? this.each(er(t, e)) : Dt(this.node(), t).ease;
      },
      end: function() {
        var e,
          t,
          n = this,
          r = n._id,
          o = n.size();
        return new Promise(function(i, a) {
          var l = { value: a },
            u = {
              value: function() {
                0 == --o && i();
              },
            };
          n.each(function() {
            var n = Rt(this, r),
              o = n.on;
            o !== e && ((t = (e = o).copy())._.cancel.push(l), t._.interrupt.push(l), t._.end.push(u)), (n.on = t);
          });
        });
      },
    };
    var dr = {
      time: null,
      delay: 0,
      duration: 250,
      ease: function(e) {
        return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
      },
    };
    function hr(e, t) {
      for (var n; !(n = e.__transition) || !(n = n[t]); ) if (!(e = e.parentNode)) return (dr.time = mt()), dr;
      return n;
    }
    (Pe.prototype.interrupt = function(e) {
      return this.each(function() {
        Wt(this, e);
      });
    }),
      (Pe.prototype.transition = function(e) {
        var t, n;
        e instanceof cr
          ? ((t = e._id), (e = e._name))
          : ((t = sr()), ((n = dr).time = mt()), (e = null == e ? null : e + ""));
        for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
          for (var a, l = r[i], u = l.length, c = 0; c < u; ++c) (a = l[c]) && At(a, e, t, c, l, n || hr(a, t));
        return new cr(r, this._parents, e, t);
      });
    var pr = function(e) {
      return function() {
        return e;
      };
    };
    function gr(e, t, n) {
      (this.target = e), (this.type = t), (this.transform = n);
    }
    function yr(e, t, n) {
      (this.k = e), (this.x = t), (this.y = n);
    }
    yr.prototype = {
      constructor: yr,
      scale: function(e) {
        return 1 === e ? this : new yr(this.k * e, this.x, this.y);
      },
      translate: function(e, t) {
        return (0 === e) & (0 === t) ? this : new yr(this.k, this.x + this.k * e, this.y + this.k * t);
      },
      apply: function(e) {
        return [e[0] * this.k + this.x, e[1] * this.k + this.y];
      },
      applyX: function(e) {
        return e * this.k + this.x;
      },
      applyY: function(e) {
        return e * this.k + this.y;
      },
      invert: function(e) {
        return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
      },
      invertX: function(e) {
        return (e - this.x) / this.k;
      },
      invertY: function(e) {
        return (e - this.y) / this.k;
      },
      rescaleX: function(e) {
        return e.copy().domain(
          e
            .range()
            .map(this.invertX, this)
            .map(e.invert, e)
        );
      },
      rescaleY: function(e) {
        return e.copy().domain(
          e
            .range()
            .map(this.invertY, this)
            .map(e.invert, e)
        );
      },
      toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      },
    };
    var mr = new yr(1, 0, 0);
    function vr() {
      y.stopImmediatePropagation();
    }
    yr.prototype;
    var br = function() {
      y.preventDefault(), y.stopImmediatePropagation();
    };
    function wr() {
      return !y.ctrlKey && !y.button;
    }
    function _r() {
      var e = this;
      return e instanceof SVGElement
        ? (e = e.ownerSVGElement || e).hasAttribute("viewBox")
          ? [
              [(e = e.viewBox.baseVal).x, e.y],
              [e.x + e.width, e.y + e.height],
            ]
          : [
              [0, 0],
              [e.width.baseVal.value, e.height.baseVal.value],
            ]
        : [
            [0, 0],
            [e.clientWidth, e.clientHeight],
          ];
    }
    function kr() {
      return this.__zoom || mr;
    }
    function xr() {
      return -y.deltaY * (1 === y.deltaMode ? 0.05 : y.deltaMode ? 1 : 0.002);
    }
    function Sr() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }
    function Er(e, t, n) {
      var r = e.invertX(t[0][0]) - n[0][0],
        o = e.invertX(t[1][0]) - n[1][0],
        i = e.invertY(t[0][1]) - n[0][1],
        a = e.invertY(t[1][1]) - n[1][1];
      return e.translate(
        o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
        a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
      );
    }
    var Or = function() {
        var e,
          t,
          n = wr,
          r = _r,
          o = Er,
          i = xr,
          a = Sr,
          l = [0, 1 / 0],
          u = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          c = 250,
          s = Mt,
          f = p("start", "zoom", "end"),
          d = 0;
        function h(e) {
          e.property("__zoom", kr)
            .on("wheel.zoom", x)
            .on("mousedown.zoom", S)
            .on("dblclick.zoom", O)
            .filter(a)
            .on("touchstart.zoom", C)
            .on("touchmove.zoom", P)
            .on("touchend.zoom touchcancel.zoom", N)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function g(e, t) {
          return (t = Math.max(l[0], Math.min(l[1], t))) === e.k ? e : new yr(t, e.x, e.y);
        }
        function m(e, t, n) {
          var r = t[0] - n[0] * e.k,
            o = t[1] - n[1] * e.k;
          return r === e.x && o === e.y ? e : new yr(e.k, r, o);
        }
        function v(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function b(e, t, n) {
          e.on("start.zoom", function() {
            w(this, arguments).start();
          })
            .on("interrupt.zoom end.zoom", function() {
              w(this, arguments).end();
            })
            .tween("zoom", function() {
              var e = this,
                o = arguments,
                i = w(e, o),
                a = r.apply(e, o),
                l = null == n ? v(a) : "function" == typeof n ? n.apply(e, o) : n,
                u = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                c = e.__zoom,
                f = "function" == typeof t ? t.apply(e, o) : t,
                d = s(c.invert(l).concat(u / c.k), f.invert(l).concat(u / f.k));
              return function(e) {
                if (1 === e) e = f;
                else {
                  var t = d(e),
                    n = u / t[2];
                  e = new yr(n, l[0] - t[0] * n, l[1] - t[1] * n);
                }
                i.zoom(null, e);
              };
            });
        }
        function w(e, t, n) {
          return (!n && e.__zooming) || new _(e, t);
        }
        function _(e, t) {
          (this.that = e), (this.args = t), (this.active = 0), (this.extent = r.apply(e, t)), (this.taps = 0);
        }
        function x() {
          if (n.apply(this, arguments)) {
            var e = w(this, arguments),
              t = this.__zoom,
              r = Math.max(l[0], Math.min(l[1], t.k * Math.pow(2, i.apply(this, arguments)))),
              a = E(this);
            if (e.wheel)
              (e.mouse[0][0] === a[0] && e.mouse[0][1] === a[1]) || (e.mouse[1] = t.invert((e.mouse[0] = a))),
                clearTimeout(e.wheel);
            else {
              if (t.k === r) return;
              (e.mouse = [a, t.invert(a)]), Wt(this), e.start();
            }
            br(), (e.wheel = setTimeout(c, 150)), e.zoom("mouse", o(m(g(t, r), e.mouse[0], e.mouse[1]), e.extent, u));
          }
          function c() {
            (e.wheel = null), e.end();
          }
        }
        function S() {
          if (!t && n.apply(this, arguments)) {
            var e = w(this, arguments, !0),
              r = Ne(y.view)
                .on("mousemove.zoom", c, !0)
                .on("mouseup.zoom", s, !0),
              i = E(this),
              a = y.clientX,
              l = y.clientY;
            Le(y.view), vr(), (e.mouse = [i, this.__zoom.invert(i)]), Wt(this), e.start();
          }
          function c() {
            if ((br(), !e.moved)) {
              var t = y.clientX - a,
                n = y.clientY - l;
              e.moved = t * t + n * n > d;
            }
            e.zoom("mouse", o(m(e.that.__zoom, (e.mouse[0] = E(e.that)), e.mouse[1]), e.extent, u));
          }
          function s() {
            r.on("mousemove.zoom mouseup.zoom", null), Ae(y.view, e.moved), br(), e.end();
          }
        }
        function O() {
          if (n.apply(this, arguments)) {
            var e = this.__zoom,
              t = E(this),
              i = e.invert(t),
              a = e.k * (y.shiftKey ? 0.5 : 2),
              l = o(m(g(e, a), t, i), r.apply(this, arguments), u);
            br(),
              c > 0
                ? Ne(this)
                    .transition()
                    .duration(c)
                    .call(b, l, t)
                : Ne(this).call(h.transform, l);
          }
        }
        function C() {
          if (n.apply(this, arguments)) {
            var t,
              r,
              o,
              i,
              a = y.touches,
              l = a.length,
              u = w(this, arguments, y.changedTouches.length === l);
            for (vr(), r = 0; r < l; ++r)
              (o = a[r]),
                (i = [(i = Me(this, a, o.identifier)), this.__zoom.invert(i), o.identifier]),
                u.touch0
                  ? u.touch1 || u.touch0[2] === i[2] || ((u.touch1 = i), (u.taps = 0))
                  : ((u.touch0 = i), (t = !0), (u.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              t &&
                (u.taps < 2 &&
                  (e = setTimeout(function() {
                    e = null;
                  }, 500)),
                Wt(this),
                u.start());
          }
        }
        function P() {
          if (this.__zooming) {
            var t,
              n,
              r,
              i,
              a = w(this, arguments),
              l = y.changedTouches,
              c = l.length;
            for (br(), e && (e = clearTimeout(e)), a.taps = 0, t = 0; t < c; ++t)
              (n = l[t]),
                (r = Me(this, l, n.identifier)),
                a.touch0 && a.touch0[2] === n.identifier
                  ? (a.touch0[0] = r)
                  : a.touch1 && a.touch1[2] === n.identifier && (a.touch1[0] = r);
            if (((n = a.that.__zoom), a.touch1)) {
              var s = a.touch0[0],
                f = a.touch0[1],
                d = a.touch1[0],
                h = a.touch1[1],
                p = (p = d[0] - s[0]) * p + (p = d[1] - s[1]) * p,
                v = (v = h[0] - f[0]) * v + (v = h[1] - f[1]) * v;
              (n = g(n, Math.sqrt(p / v))),
                (r = [(s[0] + d[0]) / 2, (s[1] + d[1]) / 2]),
                (i = [(f[0] + h[0]) / 2, (f[1] + h[1]) / 2]);
            } else {
              if (!a.touch0) return;
              (r = a.touch0[0]), (i = a.touch0[1]);
            }
            a.zoom("touch", o(m(n, r, i), a.extent, u));
          }
        }
        function N() {
          if (this.__zooming) {
            var e,
              n,
              r = w(this, arguments),
              o = y.changedTouches,
              i = o.length;
            for (
              vr(),
                t && clearTimeout(t),
                t = setTimeout(function() {
                  t = null;
                }, 500),
                e = 0;
              e < i;
              ++e
            )
              (n = o[e]),
                r.touch0 && r.touch0[2] === n.identifier
                  ? delete r.touch0
                  : r.touch1 && r.touch1[2] === n.identifier && delete r.touch1;
            if ((r.touch1 && !r.touch0 && ((r.touch0 = r.touch1), delete r.touch1), r.touch0))
              r.touch0[1] = this.__zoom.invert(r.touch0[0]);
            else if ((r.end(), 2 === r.taps)) {
              var a = Ne(this).on("dblclick.zoom");
              a && a.apply(this, arguments);
            }
          }
        }
        return (
          (h.transform = function(e, t, n) {
            var r = e.selection ? e.selection() : e;
            r.property("__zoom", kr),
              e !== r
                ? b(e, t, n)
                : r.interrupt().each(function() {
                    w(this, arguments)
                      .start()
                      .zoom(null, "function" == typeof t ? t.apply(this, arguments) : t)
                      .end();
                  });
          }),
          (h.scaleBy = function(e, t, n) {
            h.scaleTo(
              e,
              function() {
                var e = this.__zoom.k,
                  n = "function" == typeof t ? t.apply(this, arguments) : t;
                return e * n;
              },
              n
            );
          }),
          (h.scaleTo = function(e, t, n) {
            h.transform(
              e,
              function() {
                var e = r.apply(this, arguments),
                  i = this.__zoom,
                  a = null == n ? v(e) : "function" == typeof n ? n.apply(this, arguments) : n,
                  l = i.invert(a),
                  c = "function" == typeof t ? t.apply(this, arguments) : t;
                return o(m(g(i, c), a, l), e, u);
              },
              n
            );
          }),
          (h.translateBy = function(e, t, n) {
            h.transform(e, function() {
              return o(
                this.__zoom.translate(
                  "function" == typeof t ? t.apply(this, arguments) : t,
                  "function" == typeof n ? n.apply(this, arguments) : n
                ),
                r.apply(this, arguments),
                u
              );
            });
          }),
          (h.translateTo = function(e, t, n, i) {
            h.transform(
              e,
              function() {
                var e = r.apply(this, arguments),
                  a = this.__zoom,
                  l = null == i ? v(e) : "function" == typeof i ? i.apply(this, arguments) : i;
                return o(
                  mr
                    .translate(l[0], l[1])
                    .scale(a.k)
                    .translate(
                      "function" == typeof t ? -t.apply(this, arguments) : -t,
                      "function" == typeof n ? -n.apply(this, arguments) : -n
                    ),
                  e,
                  u
                );
              },
              i
            );
          }),
          (_.prototype = {
            start: function() {
              return 1 == ++this.active && ((this.that.__zooming = this), this.emit("start")), this;
            },
            zoom: function(e, t) {
              return (
                this.mouse && "mouse" !== e && (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 && "touch" !== e && (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 && "touch" !== e && (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit("zoom"),
                this
              );
            },
            end: function() {
              return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this;
            },
            emit: function(e) {
              k(new gr(h, e, this.that.__zoom), f.apply, f, [e, this.that, this.args]);
            },
          }),
          (h.wheelDelta = function(e) {
            return arguments.length ? ((i = "function" == typeof e ? e : pr(+e)), h) : i;
          }),
          (h.filter = function(e) {
            return arguments.length ? ((n = "function" == typeof e ? e : pr(!!e)), h) : n;
          }),
          (h.touchable = function(e) {
            return arguments.length ? ((a = "function" == typeof e ? e : pr(!!e)), h) : a;
          }),
          (h.extent = function(e) {
            return arguments.length
              ? ((r =
                  "function" == typeof e
                    ? e
                    : pr([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                h)
              : r;
          }),
          (h.scaleExtent = function(e) {
            return arguments.length ? ((l[0] = +e[0]), (l[1] = +e[1]), h) : [l[0], l[1]];
          }),
          (h.translateExtent = function(e) {
            return arguments.length
              ? ((u[0][0] = +e[0][0]), (u[1][0] = +e[1][0]), (u[0][1] = +e[0][1]), (u[1][1] = +e[1][1]), h)
              : [
                  [u[0][0], u[0][1]],
                  [u[1][0], u[1][1]],
                ];
          }),
          (h.constrain = function(e) {
            return arguments.length ? ((o = e), h) : o;
          }),
          (h.duration = function(e) {
            return arguments.length ? ((c = +e), h) : c;
          }),
          (h.interpolate = function(e) {
            return arguments.length ? ((s = e), h) : s;
          }),
          (h.on = function() {
            var e = f.on.apply(f, arguments);
            return e === f ? h : e;
          }),
          (h.clickDistance = function(e) {
            return arguments.length ? ((d = (e = +e) * e), h) : Math.sqrt(d);
          }),
          h
        );
      },
      Cr = {
        SYMBOLS: {
          CIRCLE: "circle",
          CROSS: "cross",
          DIAMOND: "diamond",
          SQUARE: "square",
          STAR: "star",
          TRIANGLE: "triangle",
          WYE: "wye",
        },
      };
    function Pr(e) {
      return (Pr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Nr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Mr(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== Pr(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== Pr(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === Pr(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    var Tr = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Nr(Object(n), !0).forEach(function(t) {
                Mr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Nr(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      })(
        {
          COORDS_SEPARATOR: ",",
          FORCE_X: 0.06,
          FORCE_Y: 0.06,
          GRAPH_CONTAINER_ID: "graph-container-zoomable",
          GRAPH_WRAPPER_ID: "graph-wrapper",
          KEYWORDS: { SAME: "SAME" },
          LINK_CLASS_NAME: "link",
          NODE_CLASS_NAME: "node",
          TTL_DOUBLE_CLICK_IN_MS: 280,
          SYMBOLS_WITH_OPTIMIZED_POSITIONING: new Set([Cr.SYMBOLS.CIRCLE, Cr.SYMBOLS.SQUARE]),
          FOCUS_ANIMATION_DURATION: 1e3,
        },
        Cr
      ),
      jr = "id prop not defined! id property is mandatory and it should be unique.",
      Lr =
        "you are passing invalid data to react-d3-graph. You must include a links array, even if empty, in the data object you're passing down to the <Graph> component.",
      Ar =
        "you provided a invalid links data structure. Links source and target attributes must point to an existent node",
      zr =
        "you have not provided enough data for react-d3-graph to render something. You need to provide at least one node",
      Rr = "links 'value' attribute must be of type number";
    function Dr(e) {
      return (Dr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ir(e, t) {
      return !!e && Object.prototype.hasOwnProperty.call(e, t) && "object" === Dr(e[t]) && null !== e[t] && !Ur(e[t]);
    }
    function Fr(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = [];
      if (0 === n && e === t) return !0;
      if ((Ur(e) && !Ur(t)) || (!Ur(e) && Ur(t))) return !1;
      var o = Object.keys(e),
        i = Object.keys(t);
      if (o.length !== i.length) return !1;
      for (var a = 0, l = o; a < l.length; a++) {
        var u = l[a],
          c = Ir(e, u) && Ir(t, u);
        if (c && n < 20) r.push(Fr(e[u], t[u], n + 1));
        else {
          var s = (Ur(e[u]) && Ur(t[u])) || (Object.prototype.hasOwnProperty.call(t, u) && t[u] === e[u]);
          if ((r.push(s), !s)) break;
        }
      }
      return -1 === r.indexOf(!1);
    }
    function Ur(e) {
      return !!e && "object" === Dr(e) && !Object.keys(e).length;
    }
    function Br(e) {
      return null == e;
    }
    function Wr() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = {};
      if (0 === Object.keys(e || {}).length) return t && !Ur(t) ? t : {};
      for (var o = 0, i = Object.keys(e); o < i.length; o++) {
        var a = i[o],
          l = !!(t[a] && "object" === Dr(t[a]) && "object" === Dr(e[a]) && n < 20);
        l
          ? (function() {
              var o = Wr(e[a], t[a], n + 1);
              r[a] =
                Object.prototype.hasOwnProperty.call(e[a], "length") &&
                Object.prototype.hasOwnProperty.call(t[a], "length")
                  ? Object.keys(o).map(function(e) {
                      return o[e];
                    })
                  : o;
            })()
          : (r[a] = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : e[a]);
      }
      return r;
    }
    function Hr(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return t.reduce(function(t, n) {
        return Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]), t;
      }, {});
    }
    function Vr(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = Object.keys(e).filter(function(e) {
          return !t.includes(e);
        });
      return Hr(e, n);
    }
    function qr(e, t) {
      var n;
      if (e)
        return function() {
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
          var a = function() {
            clearTimeout(n), e.apply(void 0, o);
          };
          n && clearTimeout(n), (n = setTimeout(a, t));
        };
    }
    function Gr() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "N/A",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "N/A";
      return "react-d3-graph :: ".concat(e, " :: ").concat(t);
    }
    function $r(e, t) {
      throw Error(Gr(e, t));
    }
    function Yr(e, t) {
      var n = "react-d3-graph :: ".concat(e, " :: ").concat(t);
      console.warn(n);
    }
    function Xr(e) {
      return (Xr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Qr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Kr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Qr(Object(n), !0).forEach(function(t) {
              Zr(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Qr(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Zr(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== Xr(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== Xr(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === Xr(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    var Jr = ["id", "highlighted", "x", "y", "index", "vy", "vx"],
      eo = ["index", "source", "target", "isHidden"];
    function to(e, t, n) {
      var r = (function(e) {
          var t,
            n,
            r,
            o = We(0.1);
          function i(e) {
            for (var o, i = 0, a = t.length; i < a; ++i) (o = t[i]).vx += (r[i] - o.x) * n[i] * e;
          }
          function a() {
            if (t) {
              var i,
                a = t.length;
              for (n = new Array(a), r = new Array(a), i = 0; i < a; ++i)
                n[i] = isNaN((r[i] = +e(t[i], i, t))) ? 0 : +o(t[i], i, t);
            }
          }
          return (
            "function" != typeof e && (e = We(null == e ? 0 : +e)),
            (i.initialize = function(e) {
              (t = e), a();
            }),
            (i.strength = function(e) {
              return arguments.length ? ((o = "function" == typeof e ? e : We(+e)), a(), i) : o;
            }),
            (i.x = function(t) {
              return arguments.length ? ((e = "function" == typeof t ? t : We(+t)), a(), i) : e;
            }),
            i
          );
        })(e / 2).strength(Tr.FORCE_X),
        o = (function(e) {
          var t,
            n,
            r,
            o = We(0.1);
          function i(e) {
            for (var o, i = 0, a = t.length; i < a; ++i) (o = t[i]).vy += (r[i] - o.y) * n[i] * e;
          }
          function a() {
            if (t) {
              var i,
                a = t.length;
              for (n = new Array(a), r = new Array(a), i = 0; i < a; ++i)
                n[i] = isNaN((r[i] = +e(t[i], i, t))) ? 0 : +o(t[i], i, t);
            }
          }
          return (
            "function" != typeof e && (e = We(null == e ? 0 : +e)),
            (i.initialize = function(e) {
              (t = e), a();
            }),
            (i.strength = function(e) {
              return arguments.length ? ((o = "function" == typeof e ? e : We(+e)), a(), i) : o;
            }),
            (i.y = function(t) {
              return arguments.length ? ((e = "function" == typeof t ? t : We(+t)), a(), i) : e;
            }),
            i
          );
        })(t / 2).strength(Tr.FORCE_Y),
        i = n;
      return (function(e) {
        var t,
          n = 1,
          r = 0.001,
          o = 1 - Math.pow(r, 1 / 300),
          i = 0,
          a = 0.6,
          l = et(),
          u = wt(s),
          c = p("tick", "end");
        function s() {
          f(), c.call("tick", t), n < r && (u.stop(), c.call("end", t));
        }
        function f(r) {
          var u,
            c,
            s = e.length;
          void 0 === r && (r = 1);
          for (var f = 0; f < r; ++f)
            for (
              n += (i - n) * o,
                l.each(function(e) {
                  e(n);
                }),
                u = 0;
              u < s;
              ++u
            )
              null == (c = e[u]).fx ? (c.x += c.vx *= a) : ((c.x = c.fx), (c.vx = 0)),
                null == c.fy ? (c.y += c.vy *= a) : ((c.y = c.fy), (c.vy = 0));
          return t;
        }
        function d() {
          for (var t, n = 0, r = e.length; n < r; ++n) {
            if (
              (((t = e[n]).index = n),
              null != t.fx && (t.x = t.fx),
              null != t.fy && (t.y = t.fy),
              isNaN(t.x) || isNaN(t.y))
            ) {
              var o = 10 * Math.sqrt(n),
                i = n * Ot;
              (t.x = o * Math.cos(i)), (t.y = o * Math.sin(i));
            }
            (isNaN(t.vx) || isNaN(t.vy)) && (t.vx = t.vy = 0);
          }
        }
        function h(t) {
          return t.initialize && t.initialize(e), t;
        }
        return (
          null == e && (e = []),
          d(),
          (t = {
            tick: f,
            restart: function() {
              return u.restart(s), t;
            },
            stop: function() {
              return u.stop(), t;
            },
            nodes: function(n) {
              return arguments.length ? ((e = n), d(), l.each(h), t) : e;
            },
            alpha: function(e) {
              return arguments.length ? ((n = +e), t) : n;
            },
            alphaMin: function(e) {
              return arguments.length ? ((r = +e), t) : r;
            },
            alphaDecay: function(e) {
              return arguments.length ? ((o = +e), t) : +o;
            },
            alphaTarget: function(e) {
              return arguments.length ? ((i = +e), t) : i;
            },
            velocityDecay: function(e) {
              return arguments.length ? ((a = 1 - e), t) : 1 - a;
            },
            force: function(e, n) {
              return arguments.length > 1 ? (null == n ? l.remove(e) : l.set(e, h(n)), t) : l.get(e);
            },
            find: function(t, n, r) {
              var o,
                i,
                a,
                l,
                u,
                c = 0,
                s = e.length;
              for (null == r ? (r = 1 / 0) : (r *= r), c = 0; c < s; ++c)
                (a = (o = t - (l = e[c]).x) * o + (i = n - l.y) * i) < r && ((u = l), (r = a));
              return u;
            },
            on: function(e, n) {
              return arguments.length > 1 ? (c.on(e, n), t) : c.on(e);
            },
          })
        );
      })()
        .force(
          "charge",
          (function() {
            var e,
              t,
              n,
              r,
              o = We(-30),
              i = 1,
              a = 1 / 0,
              l = 0.81;
            function u(r) {
              var o,
                i = e.length,
                a = Ye(e, St, Et).visitAfter(s);
              for (n = r, o = 0; o < i; ++o) (t = e[o]), a.visit(f);
            }
            function c() {
              if (e) {
                var t,
                  n,
                  i = e.length;
                for (r = new Array(i), t = 0; t < i; ++t) (n = e[t]), (r[n.index] = +o(n, t, e));
              }
            }
            function s(e) {
              var t,
                n,
                o,
                i,
                a,
                l = 0,
                u = 0;
              if (e.length) {
                for (o = i = a = 0; a < 4; ++a)
                  (t = e[a]) && (n = Math.abs(t.value)) && ((l += t.value), (u += n), (o += n * t.x), (i += n * t.y));
                (e.x = o / u), (e.y = i / u);
              } else {
                ((t = e).x = t.data.x), (t.y = t.data.y);
                do {
                  l += r[t.data.index];
                } while ((t = t.next));
              }
              e.value = l;
            }
            function f(e, o, u, c) {
              if (!e.value) return !0;
              var s = e.x - t.x,
                f = e.y - t.y,
                d = c - o,
                h = s * s + f * f;
              if ((d * d) / l < h)
                return (
                  h < a &&
                    (0 === s && (h += (s = He()) * s),
                    0 === f && (h += (f = He()) * f),
                    h < i && (h = Math.sqrt(i * h)),
                    (t.vx += (s * e.value * n) / h),
                    (t.vy += (f * e.value * n) / h)),
                  !0
                );
              if (!(e.length || h >= a)) {
                (e.data !== t || e.next) &&
                  (0 === s && (h += (s = He()) * s), 0 === f && (h += (f = He()) * f), h < i && (h = Math.sqrt(i * h)));
                do {
                  e.data !== t && ((d = (r[e.data.index] * n) / h), (t.vx += s * d), (t.vy += f * d));
                } while ((e = e.next));
              }
            }
            return (
              (u.initialize = function(t) {
                (e = t), c();
              }),
              (u.strength = function(e) {
                return arguments.length ? ((o = "function" == typeof e ? e : We(+e)), c(), u) : o;
              }),
              (u.distanceMin = function(e) {
                return arguments.length ? ((i = e * e), u) : Math.sqrt(i);
              }),
              (u.distanceMax = function(e) {
                return arguments.length ? ((a = e * e), u) : Math.sqrt(a);
              }),
              (u.theta = function(e) {
                return arguments.length ? ((l = e * e), u) : Math.sqrt(l);
              }),
              u
            );
          })().strength(i)
        )
        .force("x", r)
        .force("y", o)
        .force(
          "center",
          (function(e, t) {
            var n;
            function r() {
              var r,
                o,
                i = n.length,
                a = 0,
                l = 0;
              for (r = 0; r < i; ++r) (a += (o = n[r]).x), (l += o.y);
              for (a = a / i - e, l = l / i - t, r = 0; r < i; ++r) ((o = n[r]).x -= a), (o.y -= l);
            }
            return (
              null == e && (e = 0),
              null == t && (t = 0),
              (r.initialize = function(e) {
                n = e;
              }),
              (r.x = function(t) {
                return arguments.length ? ((e = +t), r) : e;
              }),
              (r.y = function(e) {
                return arguments.length ? ((t = +e), r) : t;
              }),
              r
            );
          })()
        );
    }
    function no(e) {
      for (var t = {}, n = e.length, r = 0; r < n; r++) {
        var o = e[r];
        (o.highlighted = !1),
          Object.prototype.hasOwnProperty.call(o, "fx")
            ? (o.x = o.fx)
            : Object.prototype.hasOwnProperty.call(o, "x") || (o.x = 0),
          Object.prototype.hasOwnProperty.call(o, "fy")
            ? (o.y = o.fy)
            : Object.prototype.hasOwnProperty.call(o, "y") || (o.y = 0),
          (t[o.id.toString()] = o);
      }
      return t;
    }
    var ro = ["x", "y", "vx", "vy", "index"];
    function oo(e) {
      return Hr(e, ["id"]);
    }
    function io(e) {
      return Hr(e, ["source", "target"]);
    }
    function ao(e, t, n) {
      if (e && e.x && e.y) {
        var r = t.width,
          o = t.height,
          i = t.focusZoom;
        return (
          Ne("#".concat(n)).call(
            Or().transform,
            mr
              .translate(r / 2, o / 2)
              .scale(i)
              .translate(-e.x, -e.y)
          ),
          "\n    translate("
            .concat(r / 2, ", ")
            .concat(o / 2, ")\n    scale(")
            .concat(i, ")\n    translate(")
            .concat(-e.x, ", ")
            .concat(-e.y, ")\n  ")
        );
      }
    }
    function lo(e) {
      return void 0 !== e.id && null !== e.id ? e.id : e;
    }
    function uo(e, t) {
      var n,
        r = e.data,
        o = e.id,
        i = e.config;
      !(function(e) {
        (e.nodes && e.nodes.length) || (Yr("Graph", zr), (e.nodes = [])), e.links || (Yr("Graph", Lr), (e.links = []));
        for (
          var t = e.links.length,
            n = function(t) {
              var n = e.links[t];
              e.nodes.find(function(e) {
                return e.id === n.source;
              }) || $r("Graph", "".concat(Ar, ' - "').concat(n.source, '" is not a valid source node id')),
                e.nodes.find(function(e) {
                  return e.id === n.target;
                }) || $r("Graph", "".concat(Ar, ' - "').concat(n.target, '" is not a valid target node id')),
                n &&
                  void 0 !== n.value &&
                  "number" != typeof n.value &&
                  $r(
                    "Graph",
                    ""
                      .concat(Rr, ' - found in link with source "')
                      .concat(n.source, '" and target "')
                      .concat(n.target, '"')
                  );
            },
            r = 0;
          r < t;
          r++
        )
          n(r);
      })(r),
        (n =
          t && t.nodes
            ? {
                nodes: r.nodes.map(function(e) {
                  return t.nodes[e.id] ? Kr(Kr({}, e), Hr(t.nodes[e.id], Jr)) : Kr({}, e);
                }),
                links: r.links.map(function(e, n) {
                  return (function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                      r = arguments.length > 3 ? arguments[3] : void 0,
                      o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                      i = n.find(function(t) {
                        return t.source.id === e.source && t.target.id === e.target;
                      }),
                      a = i && Hr(i, eo),
                      l = Vr(e, ["source", "target"]);
                    if (a) {
                      var u =
                          o.config &&
                          Object.prototype.hasOwnProperty.call(o.config, "directed") &&
                          r.directed !== o.config.directed,
                        c = Kr(Kr({ index: t }, a), l);
                      return u
                        ? Kr(Kr({}, c), {}, { isHidden: !1 })
                        : r.collapsible
                        ? c
                        : Kr(Kr({}, c), {}, { isHidden: !1 });
                    }
                    var s = !1,
                      f = { id: e.source, highlighted: s },
                      d = { id: e.target, highlighted: s };
                    return Kr({ index: t, source: f, target: d }, l);
                  })(e, n, t && t.d3Links, i, t);
                }),
              }
            : {
                nodes: r.nodes.map(function(e) {
                  return Kr({}, e);
                }),
                links: r.links.map(function(e) {
                  return Kr({}, e);
                }),
              });
      var a = Kr({}, Wr(l, i || {})),
        u = (function(e, t) {
          return e.reduce(function(e, n) {
            var r = lo(n.source),
              o = lo(n.target);
            e[r] || (e[r] = {}), e[o] || (e[o] = {});
            var i = t.collapsible && n.isHidden ? 0 : n.value || 1;
            return (e[r][o] = i), t.directed || (e[o][r] = i), e;
          }, {});
        })(n.links, a),
        c = (function(e, t) {
          return Object.keys(e).reduce(function(n, r) {
            var o = bo(r, t),
              i = o.inDegree,
              a = o.outDegree,
              l = e[r],
              u = 0 === i && 0 === a ? Kr(Kr({}, l), {}, { _orphan: !0 }) : l;
            return (n[r] = u), n;
          }, {});
        })(no(n.nodes), u),
        s = n,
        f = s.nodes,
        d = s.links,
        h = o.replace(/ /g, "_"),
        p = to(a.width, a.height, a.d3 && a.d3.gravity),
        g = a.minZoom,
        y = a.maxZoom,
        m = a.focusZoom;
      return (
        m > y ? (a.focusZoom = y) : m < g && (a.focusZoom = g),
        {
          id: h,
          config: a,
          links: u,
          d3Links: d,
          nodes: c,
          d3Nodes: f,
          highlightedNode: "",
          simulation: p,
          newGraphElements: !1,
          configUpdated: !1,
          transform: { x: 0, y: 0, k: 1 },
          draggedNode: null,
        }
      );
    }
    function co(e, t, n, r) {
      var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        i = o ? r : "",
        a = Kr(Kr({}, e[r]), {}, { highlighted: o }),
        l = Kr(Kr({}, e), {}, Zr({}, r, a));
      return (
        t[r] &&
          0 !== n.highlightDegree &&
          (l = Object.keys(t[r]).reduce(function(e, t) {
            var n = Kr(Kr({}, l[t]), {}, { highlighted: o });
            return (e[t] = n), e;
          }, l)),
        { nodes: l, highlightedNode: i }
      );
    }
    function so(e, t) {
      var n = t.transform,
        r = t.config,
        o = 1 / n.k;
      return e.x > -n.x * o && e.x < (r.width - n.x) * o && e.y > -n.y * o && e.y < (r.height - n.y) * o;
    }
    function fo(e) {
      return (fo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ho(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function po(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ho(Object(n), !0).forEach(function(t) {
              go(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ho(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function go(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== fo(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== fo(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === fo(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    function yo(e, t) {
      return e <= 1 && t < 1;
    }
    function mo(e, t) {
      return e <= 1 && t <= 1;
    }
    function vo(e, t, n) {
      var r = bo(e, t);
      return (n ? yo : mo)(r.inDegree, r.outDegree);
    }
    function bo(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Object.keys(t).reduce(
        function(n, r) {
          return t[r]
            ? Object.keys(t[r]).reduce(function(n, o) {
                return e === r && (n.outDegree += t[e][o]), e === o && (n.inDegree += t[r][e]), n;
              }, n)
            : n;
        },
        { inDegree: 0, outDegree: 0 }
      );
    }
    function wo(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = n.directed,
        o = t[e] ? Object.keys(t[e]) : [];
      return o.reduce(function(n, o) {
        return vo(o, t, r) && n.push({ source: e, target: o }), n;
      }, []);
    }
    function _o(e, t) {
      return e.map(function(e) {
        var n = e.source,
          r = e.target,
          o = lo(n),
          i = lo(r),
          a = !(t && t[o] && t[o][i]);
        return po(po({}, e), {}, { isHidden: a });
      });
    }
    function ko(e, t, n) {
      var r = n.directed;
      return t.reduce(function(e, t) {
        e[t.source] || (e[t.source] = {}), e[t.source][t.target] || (e[t.source][t.target] = 0);
        var n = 0 === e[t.source][t.target] ? 1 : 0;
        return (e[t.source][t.target] = n), r || (e[t.target][t.source] = n), e;
      }, po({}, e));
    }
    var xo = {
        MARKER_S: "marker-small",
        MARKER_SH: "marker-small-highlighted",
        MARKER_M: "marker-medium",
        MARKER_MH: "marker-medium-highlighted",
        MARKER_L: "marker-large",
        MARKER_LH: "marker-large-highlighted",
      },
      So = "S",
      Eo = "M",
      Oo = "L";
    function Co() {
      return (Co = Object.assign
        ? Object.assign.bind()
        : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
    }
    var Po = function(e) {
        var t = e.onClickLink,
          n = e.onRightClickLink,
          r = e.onMouseOverLink,
          i = e.onMouseOutLink,
          a = e.source,
          l = e.target,
          u = e.strokeWidth,
          c = e.stroke,
          s = e.opacity,
          f = e.mouseCursor,
          d = e.strokeDasharray,
          h = e.strokeLinecap,
          p = e.className,
          g = e.markerId,
          y = e.d,
          m = e.label,
          v = e.id,
          b = e.fontColor,
          w = e.fontSize,
          _ = e.fontWeight,
          k = {
            className: p,
            d: y,
            onClick: function() {
              null == t || t(a, l);
            },
            onContextMenu: function() {
              null == n || n(a, l);
            },
            onMouseOut: function() {
              null == i || i(a, l);
            },
            onMouseOver: function() {
              null == r || r(a, l);
            },
            style: {
              strokeWidth: u,
              stroke: c,
              opacity: s,
              fill: "none",
              cursor: f,
              strokeDasharray: d,
              strokeDashoffset: d,
              strokeLinecap: h,
            },
          };
        g && (k.markerEnd = "url(#".concat(g, ")"));
        var x = { dy: -1, style: { fill: b, fontSize: w, fontWeight: _ } };
        return k.d.includes("NaN")
          ? null
          : o.a.createElement(
              "g",
              null,
              o.a.createElement("path", Co({}, k, { id: v })),
              m &&
                o.a.createElement(
                  "text",
                  Co({ style: { textAnchor: "middle" } }, x),
                  o.a.createElement("textPath", { href: "#".concat(v), startOffset: "50%", style: { opacity: s } }, m)
                )
            );
      },
      No = (Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt, Math.PI),
      Mo = 2 * No;
    var To = {
        draw: function(e, t) {
          var n = Math.sqrt(t / No);
          e.moveTo(n, 0), e.arc(0, 0, n, 0, Mo);
        },
      },
      jo = {
        draw: function(e, t) {
          var n = Math.sqrt(t / 5) / 2;
          e.moveTo(-3 * n, -n),
            e.lineTo(-n, -n),
            e.lineTo(-n, -3 * n),
            e.lineTo(n, -3 * n),
            e.lineTo(n, -n),
            e.lineTo(3 * n, -n),
            e.lineTo(3 * n, n),
            e.lineTo(n, n),
            e.lineTo(n, 3 * n),
            e.lineTo(-n, 3 * n),
            e.lineTo(-n, n),
            e.lineTo(-3 * n, n),
            e.closePath();
        },
      },
      Lo = Math.sqrt(1 / 3),
      Ao = 2 * Lo,
      zo = {
        draw: function(e, t) {
          var n = Math.sqrt(t / Ao),
            r = n * Lo;
          e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
        },
      },
      Ro = {
        draw: function(e, t) {
          var n = Math.sqrt(t),
            r = -n / 2;
          e.rect(r, r, n, n);
        },
      },
      Do = Math.sin(No / 10) / Math.sin((7 * No) / 10),
      Io = Math.sin(Mo / 10) * Do,
      Fo = -Math.cos(Mo / 10) * Do,
      Uo = {
        draw: function(e, t) {
          var n = Math.sqrt(0.8908130915292852 * t),
            r = Io * n,
            o = Fo * n;
          e.moveTo(0, -n), e.lineTo(r, o);
          for (var i = 1; i < 5; ++i) {
            var a = (Mo * i) / 5,
              l = Math.cos(a),
              u = Math.sin(a);
            e.lineTo(u * n, -l * n), e.lineTo(l * r - u * o, u * r + l * o);
          }
          e.closePath();
        },
      },
      Bo = Math.sqrt(3),
      Wo = {
        draw: function(e, t) {
          var n = -Math.sqrt(t / (3 * Bo));
          e.moveTo(0, 2 * n), e.lineTo(-Bo * n, -n), e.lineTo(Bo * n, -n), e.closePath();
        },
      },
      Ho = Math.sqrt(3) / 2,
      Vo = 1 / Math.sqrt(12),
      qo = 3 * (Vo / 2 + 1),
      Go = {
        draw: function(e, t) {
          var n = Math.sqrt(t / qo),
            r = n / 2,
            o = n * Vo,
            i = r,
            a = n * Vo + n,
            l = -i,
            u = a;
          e.moveTo(r, o),
            e.lineTo(i, a),
            e.lineTo(l, u),
            e.lineTo(-0.5 * r - Ho * o, Ho * r + -0.5 * o),
            e.lineTo(-0.5 * i - Ho * a, Ho * i + -0.5 * a),
            e.lineTo(-0.5 * l - Ho * u, Ho * l + -0.5 * u),
            e.lineTo(-0.5 * r + Ho * o, -0.5 * o - Ho * r),
            e.lineTo(-0.5 * i + Ho * a, -0.5 * a - Ho * i),
            e.lineTo(-0.5 * l + Ho * u, -0.5 * u - Ho * l),
            e.closePath();
        },
      },
      $o = Math.PI,
      Yo = 2 * $o,
      Xo = Yo - 1e-6;
    function Qo() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
    }
    function Ko() {
      return new Qo();
    }
    Qo.prototype = Ko.prototype = {
      constructor: Qo,
      moveTo: function(e, t) {
        this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
      },
      closePath: function() {
        null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
      },
      lineTo: function(e, t) {
        this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
      },
      quadraticCurveTo: function(e, t, n, r) {
        this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
      },
      bezierCurveTo: function(e, t, n, r, o, i) {
        this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +i);
      },
      arcTo: function(e, t, n, r, o) {
        (e = +e), (t = +t), (n = +n), (r = +r), (o = +o);
        var i = this._x1,
          a = this._y1,
          l = n - e,
          u = r - t,
          c = i - e,
          s = a - t,
          f = c * c + s * s;
        if (o < 0) throw new Error("negative radius: " + o);
        if (null === this._x1) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
        else if (f > 1e-6)
          if (Math.abs(s * l - u * c) > 1e-6 && o) {
            var d = n - i,
              h = r - a,
              p = l * l + u * u,
              g = d * d + h * h,
              y = Math.sqrt(p),
              m = Math.sqrt(f),
              v = o * Math.tan(($o - Math.acos((p + f - g) / (2 * y * m))) / 2),
              b = v / m,
              w = v / y;
            Math.abs(b - 1) > 1e-6 && (this._ += "L" + (e + b * c) + "," + (t + b * s)),
              (this._ +=
                "A" +
                o +
                "," +
                o +
                ",0,0," +
                +(s * d > c * h) +
                "," +
                (this._x1 = e + w * l) +
                "," +
                (this._y1 = t + w * u));
          } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
        else;
      },
      arc: function(e, t, n, r, o, i) {
        (e = +e), (t = +t), (i = !!i);
        var a = (n = +n) * Math.cos(r),
          l = n * Math.sin(r),
          u = e + a,
          c = t + l,
          s = 1 ^ i,
          f = i ? r - o : o - r;
        if (n < 0) throw new Error("negative radius: " + n);
        null === this._x1
          ? (this._ += "M" + u + "," + c)
          : (Math.abs(this._x1 - u) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) && (this._ += "L" + u + "," + c),
          n &&
            (f < 0 && (f = (f % Yo) + Yo),
            f > Xo
              ? (this._ +=
                  "A" +
                  n +
                  "," +
                  n +
                  ",0,1," +
                  s +
                  "," +
                  (e - a) +
                  "," +
                  (t - l) +
                  "A" +
                  n +
                  "," +
                  n +
                  ",0,1," +
                  s +
                  "," +
                  (this._x1 = u) +
                  "," +
                  (this._y1 = c))
              : f > 1e-6 &&
                (this._ +=
                  "A" +
                  n +
                  "," +
                  n +
                  ",0," +
                  +(f >= $o) +
                  "," +
                  s +
                  "," +
                  (this._x1 = e + n * Math.cos(o)) +
                  "," +
                  (this._y1 = t + n * Math.sin(o))));
      },
      rect: function(e, t, n, r) {
        this._ +=
          "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
      },
      toString: function() {
        return this._;
      },
    };
    var Zo = Ko,
      Jo = function(e) {
        return function() {
          return e;
        };
      },
      ei = function() {
        var e = Jo(To),
          t = Jo(64),
          n = null;
        function r() {
          var r;
          if ((n || (n = r = Zo()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r))
            return (n = null), r + "" || null;
        }
        return (
          (r.type = function(t) {
            return arguments.length ? ((e = "function" == typeof t ? t : Jo(t)), r) : e;
          }),
          (r.size = function(e) {
            return arguments.length ? ((t = "function" == typeof e ? e : Jo(+e)), r) : t;
          }),
          (r.context = function(e) {
            return arguments.length ? ((n = null == e ? null : e), r) : n;
          }),
          r
        );
      };
    function ti(e) {
      return (ti =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ni(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ri(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== ti(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== ti(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === ti(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    var oi = (function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ni(Object(n), !0).forEach(function(t) {
              ri(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ni(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    })(
      {
        ARC: { START_ANGLE: 0, END_ANGLE: 2 * Math.PI },
        DEFAULT_NODE_SIZE: l.node.size,
        NODE_LABEL_DX: ".90em",
        NODE_LABEL_DY: ".35em",
      },
      Cr
    );
    function ii(e) {
      switch (e) {
        case oi.SYMBOLS.CIRCLE:
          return To;
        case oi.SYMBOLS.CROSS:
          return jo;
        case oi.SYMBOLS.DIAMOND:
          return zo;
        case oi.SYMBOLS.SQUARE:
          return Ro;
        case oi.SYMBOLS.STAR:
          return Uo;
        case oi.SYMBOLS.TRIANGLE:
          return Wo;
        case oi.SYMBOLS.WYE:
          return Go;
        default:
          return To;
      }
    }
    var ai = {
      buildSvgSymbol: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oi.DEFAULT_NODE_SIZE,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oi.SYMBOLS.CIRCLE;
        return ei()
          .size(function() {
            return e;
          })
          .type(function() {
            return ii(t);
          })();
      },
      getLabelPlacementProps: function(e, t) {
        switch (t) {
          case "right":
            return {
              dx: e ? "".concat(e) : oi.NODE_LABEL_DX,
              dy: "0",
              dominantBaseline: "middle",
              textAnchor: "start",
            };
          case "left":
            return {
              dx: e ? "".concat(-e) : "-".concat(oi.NODE_LABEL_DX),
              dy: "0",
              dominantBaseline: "middle",
              textAnchor: "end",
            };
          case "top":
            return {
              dx: "0",
              dy: e ? "".concat(-e) : "-".concat(oi.NODE_LABEL_DX),
              dominantBaseline: "baseline",
              textAnchor: "middle",
            };
          case "bottom":
            return {
              dx: "0",
              dy: e ? "".concat(e) : oi.NODE_LABEL_DX,
              dominantBaseline: "hanging",
              textAnchor: "middle",
            };
          case "center":
            return { dx: "0", dy: "0", dominantBaseline: "middle", textAnchor: "middle" };
          default:
            return { dx: e ? "".concat(e) : oi.NODE_LABEL_DX, dy: oi.NODE_LABEL_DY };
        }
      },
    };
    function li() {
      return (li = Object.assign
        ? Object.assign.bind()
        : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
    }
    function ui(e) {
      return (ui =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ci(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function si(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ci(Object(n), !0).forEach(function(t) {
              fi(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ci(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function fi(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== ui(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== ui(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === ui(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    var di = function(e) {
      var t = e.id,
        n = e.onClickNode,
        r = e.onRightClickNode,
        i = e.onMouseOverNode,
        a = e.onMouseOut,
        l = e.cursor,
        u = e.opacity,
        c = e.renderLabel,
        s = e.labelPosition,
        f = e.dx,
        d = e.cx,
        h = e.cy,
        p = e.fontColor,
        g = e.fontSize,
        y = e.fontWeight,
        m = e.labelClass,
        v = e.size,
        b = e.svg,
        w = e.viewGenerator,
        _ = e.label,
        k = e.overrideGlobalViewGenerator,
        x = e.fill,
        S = e.type,
        E = e.stroke,
        O = e.strokeWidth,
        C = e.className,
        P = {
          cursor: l,
          onClick: function() {
            return null == n ? void 0 : n(t);
          },
          onContextMenu: function(e) {
            return null == r ? void 0 : r(e, t);
          },
          onMouseOut: function() {
            return null == a ? void 0 : a(t);
          },
          onMouseOver: function() {
            return null == i ? void 0 : i(t);
          },
          opacity: u,
        },
        N = si(
          si({}, ai.getLabelPlacementProps(f, s)),
          {},
          { fill: p, fontSize: g, fontWeight: y, opacity: u },
          m && { className: m }
        ),
        M = "object" !== ui(v),
        T = d,
        j = h,
        L = null,
        A = null;
      if (b || w) {
        var z = M ? v / 10 : v.height / 10,
          R = M ? v / 10 : v.width / 10,
          D = R / 2,
          I = z / 2,
          F = "translate(".concat(D, ",").concat(I, ")");
        (L = o.a.createElement("text", li({}, N, { transform: F }), _)),
          (A =
            w && !k
              ? o.a.createElement(
                  "svg",
                  li({}, P, { width: R, height: z }),
                  o.a.createElement(
                    "foreignObject",
                    { x: "0", y: "0", width: "100%", height: "100%" },
                    o.a.createElement(
                      "section",
                      { style: { height: z, width: R, backgroundColor: "transparent" } },
                      w(e)
                    )
                  )
                )
              : o.a.createElement("image", li({}, P, { href: b, width: R, height: z }))),
          (T -= D),
          (j -= I);
      } else
        M ||
          (Yr("node.size should be a number when not using custom nodes."),
          oi.DEFAULT_NODE_SIZE,
          (function(e) {
            throw new TypeError('"' + e + '" is read-only');
          })("size")),
          (P.d = ai.buildSvgSymbol(v, S)),
          (P.fill = x),
          (P.stroke = E),
          (P.strokeWidth = O),
          (L = o.a.createElement("text", N, _)),
          (A = o.a.createElement("path", P));
      var U = { className: C, cx: d, cy: h, id: t, transform: "translate(".concat(T, ",").concat(j, ")") };
      return o.a.createElement("g", U, A, c && L);
    };
    function hi(e) {
      return (hi =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function pi(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function gi(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(
            e,
            ((o = r.key),
            (i = void 0),
            (i = (function(e, t) {
              if ("object" !== hi(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== hi(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(o, "string")),
            "symbol" === hi(i) ? i : String(i)),
            r
          );
      }
      var o, i;
    }
    function yi(e, t) {
      return (yi = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    function mi(e) {
      var t = (function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      })();
      return function() {
        var n,
          r = bi(e);
        if (t) {
          var o = bi(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return vi(this, n);
      };
    }
    function vi(e, t) {
      if (t && ("object" === hi(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return (function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      })(e);
    }
    function bi(e) {
      return (bi = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var wi,
      _i = (function(e) {
        !(function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && yi(e, t);
        })(a, e);
        var t,
          n,
          r,
          i = mi(a);
        function a() {
          return pi(this, a), i.apply(this, arguments);
        }
        return (
          (t = a),
          (n = [
            {
              key: "render",
              value: function() {
                return o.a.createElement(
                  "marker",
                  {
                    className: "marker",
                    id: this.props.id,
                    viewBox: "0 -5 10 10",
                    refX: this.props.refX,
                    refY: "0",
                    markerWidth: this.props.markerWidth,
                    markerHeight: this.props.markerHeight,
                    orient: "auto",
                    fill: this.props.fill,
                  },
                  o.a.createElement("path", { d: "M0,-5L10,0L0,5" })
                );
              },
            },
          ]) && gi(t.prototype, n),
          r && gi(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          a
        );
      })(o.a.Component),
      ki = { STRAIGHT: "STRAIGHT", CURVE_SMOOTH: "CURVE_SMOOTH", CURVE_FULL: "CURVE_FULL" },
      xi = "TOP_LEFT",
      Si = "TOP_RIGHT",
      Ei = "BOTTOM_LEFT",
      Oi = "BOTTOM_RIGHT";
    function Ci(e) {
      return (Ci =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Pi(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) return Ni(e);
        })(e) ||
        (function(e) {
          if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
            return Array.from(e);
        })(e) ||
        (function(e, t) {
          if (!e) return;
          if ("string" == typeof e) return Ni(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ni(e, t);
        })(e) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Ni(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function Mi(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== Ci(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== Ci(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === Ci(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    var Ti =
      (Mi((wi = {}), ki.STRAIGHT, function() {
        return 0;
      }),
      Mi(wi, ki.CURVE_SMOOTH, function(e, t, n, r) {
        var o = n - e,
          i = r - t;
        return Math.sqrt(o * o + i * i);
      }),
      Mi(wi, ki.CURVE_FULL, function() {
        return 1;
      }),
      wi);
    function ji(e) {
      return Ti[e] || Ti[ki.STRAIGHT];
    }
    function Li(e, t, n) {
      var r = n.maxZoom,
        o = (function(e, t) {
          return "MARKER_".concat(e).concat(t);
        })(
          (function(e, t, n) {
            return e < t ? So : e >= t && e < n ? Eo : Oo;
          })(t, r / 4, r / 2),
          e ? "H" : ""
        );
      return xo[o];
    }
    var Ai,
      zi =
        ((Ai = {}),
        function(e, t, n) {
          var r = n.maxZoom,
            o = ""
              .concat(e, ";")
              .concat(t, ";")
              .concat(r);
          if (Ai[o]) return Ai[o];
          var i = Li(e, t, { maxZoom: r });
          return (Ai[o] = i), i;
        });
    function Ri(e) {
      return (Ri =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Di(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) return Ii(e);
        })(e) ||
        (function(e) {
          if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
            return Array.from(e);
        })(e) ||
        (function(e, t) {
          if (!e) return;
          if ("string" == typeof e) return Ii(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ii(e, t);
        })(e) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Ii(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function Fi(e) {
      var t = Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2));
      return 0 === t ? e : { x: e.x / t, y: e.y / t };
    }
    function Ui(e, t, n) {
      var r = e.x1,
        o = e.y1,
        i = e.x2,
        a = e.y2,
        l = t.px,
        u = t.py,
        c = Math.atan(n.y / n.x),
        s = Math.cos(c),
        f = Math.sin(c);
      if (0 === s) return i - r;
      if (0 === f) return a - o;
      var d = (r - l) / s,
        h = (i - l) / s,
        p = (o - u) / f,
        g = (a - u) / f;
      return Math.min.apply(
        Math,
        Di(
          [d, h, p, g].filter(function(e) {
            return e > 0;
          })
        )
      );
    }
    function Bi(e, t, n, r, o) {
      var i = n.x,
        a = n.y;
      if ("object" === Ri(t) && null != t && t.width && null != t && t.height)
        return (function(e, t, n) {
          var r = t.x,
            o = t.y,
            i = e.width / 10,
            a = e.height / 10,
            l = r - i / 2,
            u = o - a / 2;
          return Ui({ x1: l, y1: u, x2: l + i, y2: u + a }, { px: r, py: o }, n);
        })(t, { x: i, y: a }, r);
      switch (e) {
        case Tr.SYMBOLS.CIRCLE:
          if ("number" != typeof t) {
            Yr("When specifiying 'circle' as node symbol, the size of the node must be a number.");
            break;
          }
          return (function(e, t) {
            return t ? e / 10 / 2 : Math.sqrt(e / Math.PI);
          })(t, o);
        case Tr.SYMBOLS.SQUARE:
          if ("number" != typeof t) {
            Yr("When specifiying 'square' as node symbol, the size of the node must be a number.");
            break;
          }
          return (function(e, t, n, r) {
            var o,
              i = t.x,
              a = t.y,
              l = i - (o = r ? e / 10 : Math.sqrt(e)) / 2,
              u = a - o / 2;
            return Ui({ x1: l, y1: u, x2: l + o, y2: u + o }, { px: i, py: a }, n);
          })(t, { x: i, y: a }, r, o);
      }
      return 1;
    }
    function Wi(e, t, n, r) {
      var o = Math.abs(t - e),
        i = -1 * n;
      return o > Math.abs(r * i) ? r * i : (o - 1) * i;
    }
    function Hi(e, t, n, r, o, i, a) {
      var l = e.x,
        u = e.y,
        c = t.x,
        s = t.y;
      if (a && "object" === Ri(i) && null != i && i.width && null != i && i.height) {
        var f = i.width / 10,
          d = i.height / 10,
          h = o.x - f / 2,
          p = h < c && c < h + f,
          g = o.y - d / 2;
        if (p && g < s && s < g + d) return o;
      }
      return { x: l + Wi(c, l, n.x, r), y: u + Wi(s, u, n.y, r) };
    }
    function Vi(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function qi(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Vi(Object(n), !0).forEach(function(t) {
              Gi(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Vi(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Gi(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== $i(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== $i(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === $i(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    function $i(e) {
      return ($i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Yi(e, t, n, r) {
      var o = e.highlighted || e.id === (n && n.source) || e.id === (n && n.target),
        i = n && n.source && n.target,
        a = !(!t && !i);
      return (a && 0 === r.highlightDegree) || a
        ? o
          ? r.node.opacity
          : r.highlightOpacity
        : e.opacity || r.node.opacity;
    }
    function Xi(e, t, n, r, o, i, a, l) {
      var u,
        c,
        s,
        f,
        d = e.source,
        h = e.target,
        p = (null == t || null === (u = t[d]) || void 0 === u ? void 0 : u.x) || 0,
        g = (null == t || null === (c = t[d]) || void 0 === c ? void 0 : c.y) || 0,
        y = (null == t || null === (s = t[h]) || void 0 === s ? void 0 : s.x) || 0,
        m = (null == t || null === (f = t[h]) || void 0 === f ? void 0 : f.y) || 0,
        v = e.type || r.link.type,
        b = e.selfLinkDirection || r.link.selfLinkDirection,
        w = !1;
      switch (r.highlightDegree) {
        case 0:
          break;
        case 2:
          w = !0;
          break;
        default:
          w = d === i || h === i;
      }
      var _ = w && t[d].highlighted && t[h].highlighted,
        k = d === (a && a.source) && h === (a && a.target),
        x = _ || k,
        S = e.opacity || r.link.opacity;
      (i || (a && a.source)) && (S = x ? r.link.opacity : r.highlightOpacity);
      var E = e.color || r.link.color;
      x && (E = r.link.highlightColor === Tr.KEYWORDS.SAME ? r.link.color : r.link.highlightColor);
      var O = e.strokeDasharray || r.link.strokeDasharray,
        C = e.strokeDashoffset || r.link.strokeDashoffset,
        P = e.strokeLinecap || r.link.strokeLinecap,
        N = (e.strokeWidth || r.link.strokeWidth) * (1 / l);
      r.link.semanticStrokeWidth && (N += ((n[d][h] || n[h][d] || 1) * N) / 10);
      var M = r.directed ? zi(x, l, r) : null,
        T = 1 / l,
        j = null,
        L = null,
        A = null,
        z = null;
      r.link.renderLabel &&
        ((z = "function" == typeof r.link.labelProperty ? r.link.labelProperty(e) : e[r.link.labelProperty]),
        (j = e.fontSize || r.link.fontSize),
        (L = e.fontColor || r.link.fontColor),
        (A = x ? r.link.highlightFontWeight : r.link.fontWeight));
      var R = (function(e, t, n, r) {
          var o,
            i,
            a,
            l,
            u,
            c,
            s,
            f,
            d,
            h,
            p,
            g,
            y = e.sourceId,
            m = e.targetId,
            v = e.sourceCoords,
            b = void 0 === v ? {} : v,
            w = e.targetCoords,
            _ = void 0 === w ? {} : w,
            k = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
            x = null == t ? void 0 : t[y],
            S = null == t ? void 0 : t[m];
          if (!x || !S) return { sourceCoords: b, targetCoords: _ };
          var E = x.symbolType || (null === (o = n.node) || void 0 === o ? void 0 : o.symbolType),
            O = S.symbolType || (null === (i = n.node) || void 0 === i ? void 0 : i.symbolType),
            C = Tr.SYMBOLS_WITH_OPTIMIZED_POSITIONING.has(E),
            P = !(
              !((null != x && x.viewGenerator) || (null !== (a = n.node) && void 0 !== a && a.viewGenerator)) ||
              "object" !==
                Ri((null == x ? void 0 : x.size) || (null === (l = n.node) || void 0 === l ? void 0 : l.size))
            ),
            N = Tr.SYMBOLS_WITH_OPTIMIZED_POSITIONING.has(O),
            M = !(
              !((null != S && S.viewGenerator) || (null !== (u = n.node) && void 0 !== u && u.viewGenerator)) ||
              "object" !==
                Ri((null == x ? void 0 : x.size) || (null === (c = n.node) || void 0 === c ? void 0 : c.size))
            );
          if (!(C || P || N || M)) return { sourceCoords: b, targetCoords: _ };
          var T = b.x,
            j = b.y,
            L = _.x,
            A = _.y,
            z = k.length > 0 ? k[0] : _,
            R = z.x,
            D = z.y,
            I = Fi({ x: R - T, y: D - j }),
            F =
              (null == x ? void 0 : x.viewGenerator) ||
              (null === (s = n.node) || void 0 === s ? void 0 : s.viewGenerator),
            U = (null == x ? void 0 : x.size) || (null === (f = n.node) || void 0 === f ? void 0 : f.size),
            B = 0.95 * Bi(E, U, { x: T, y: j }, I, F);
          (T += B * I.x), (j += B * I.y);
          var W = k.length > 0 ? k[k.length - 1] : { x: T, y: j },
            H = W.x,
            V = W.y,
            q = Fi({ x: L - H, y: A - V }),
            G =
              r *
              Math.min(
                (null === (d = n.link) || void 0 === d ? void 0 : d.markerWidth) || 5,
                (null === (h = n.link) || void 0 === h ? void 0 : h.markerHeight) || 5
              ),
            $ =
              (null == S ? void 0 : S.viewGenerator) ||
              (null === (p = n.node) || void 0 === p ? void 0 : p.viewGenerator),
            Y = (null == S ? void 0 : S.size) || (null === (g = n.node) || void 0 === g ? void 0 : g.size),
            X = 0.95 * Bi(O, Y, { x: L, y: A }, q, $),
            Q = n.directed ? G : 0,
            K = Hi({ x: (L -= X * q.x), y: (A -= X * q.y) }, { x: H, y: V }, q, Q, _, Y, $),
            Z = K.x,
            J = K.y;
          return { sourceCoords: { x: T, y: j }, targetCoords: { x: (L = Z), y: (A = J) } };
        })(
          { sourceId: d, targetId: h, sourceCoords: { x: p, y: g }, targetCoords: { x: y, y: m } },
          t,
          r,
          N,
          e.breakPoints
        ),
        D = (function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ki.STRAIGHT,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            o = arguments.length > 4 ? arguments[4] : void 0,
            i = arguments.length > 5 ? arguments[5] : void 0,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Si,
            l = e.x,
            u = e.y,
            c = t.x,
            s = t.y;
          if (o === i && l === c && u === s)
            switch (a) {
              case xi:
                return "M"
                  .concat(l, ",")
                  .concat(u, " A40,30 45 1,1 ")
                  .concat(c + 1, ",")
                  .concat(s - 1);
              case Ei:
                return "M"
                  .concat(l, ",")
                  .concat(u, " A40,30 -45 1,1 ")
                  .concat(c - 1, ",")
                  .concat(s - 1);
              case Oi:
                return "M"
                  .concat(l, ",")
                  .concat(u, " A40,30 45 1,1 ")
                  .concat(c - 1, ",")
                  .concat(s + 1);
              default:
                return "M"
                  .concat(l, ",")
                  .concat(u, " A40,30 -45 1,1 ")
                  .concat(c + 1, ",")
                  .concat(s + 1);
            }
          var f = ki[n] || ki.STRAIGHT,
            d = ji(f),
            h = [].concat(Pi(r), [t]),
            p = h
              .map(function(t, n) {
                var r = t.x,
                  o = t.y,
                  i = n > 0 ? h[n - 1] : e,
                  a = i.x,
                  l = i.y,
                  u = d(a, l, r, o);
                return " A"
                  .concat(u, ",")
                  .concat(u, " 0 0,1 ")
                  .concat(r, ",")
                  .concat(o);
              })
              .join("");
          return "M"
            .concat(l, ",")
            .concat(u)
            .concat(p);
        })(R.sourceCoords, R.targetCoords, v, e.breakPoints, e.source, e.target, b);
      return {
        className: Tr.LINK_CLASS_NAME,
        d: D,
        fontColor: L,
        fontSize: j * T,
        fontWeight: A,
        label: z,
        markerId: M,
        mouseCursor: r.link.mouseCursor,
        opacity: S,
        source: d,
        stroke: E,
        strokeWidth: N,
        strokeDasharray: O,
        strokeDashoffset: C,
        strokeLinecap: P,
        target: h,
        onClickLink: o.onClickLink,
        onMouseOutLink: o.onMouseOutLink,
        onMouseOverLink: o.onMouseOverLink,
        onRightClickLink: o.onRightClickLink,
      };
    }
    function Qi(e) {
      return (Qi =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ki() {
      return (Ki = Object.assign
        ? Object.assign.bind()
        : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
    }
    function Zi(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ji(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Zi(Object(n), !0).forEach(function(t) {
              ea(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Zi(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function ea(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== Qi(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== Qi(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === Qi(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    function ta(e, t, n, r, i, a, l, u) {
      var c = t;
      return (
        r.collapsible &&
          (c = c.filter(function(e) {
            return !e.isHidden;
          })),
        c.map(function(t) {
          var c = t.source,
            s = t.target,
            f = lo(c),
            d = lo(s),
            h = ""
              .concat(f)
              .concat(Tr.COORDS_SEPARATOR)
              .concat(d),
            p = Xi(Ji(Ji({}, t), {}, { source: "".concat(f), target: "".concat(d) }), e, n, r, i, "".concat(a), l, u);
          return o.a.createElement(Po, Ki({ key: h, id: h }, p));
        })
      );
    }
    function na(e, t, n, r, i, a, l) {
      var u = Object.keys(e);
      return (
        n.collapsible &&
          (u = u.filter(function(t) {
            return (function(e, t, n) {
              if (!t[e]) return !1;
              if (t[e]._orphan) return !0;
              var r = bo(e, n),
                o = r.inDegree,
                i = r.outDegree;
              return o > 0 || i > 0;
            })(t, e, l);
          })),
        u.map(function(l) {
          var u = (function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = arguments.length > 3 ? arguments[3] : void 0,
              o = arguments.length > 4 ? arguments[4] : void 0,
              i = arguments.length > 5 ? arguments[5] : void 0,
              a = e.highlighted || e.id === (o && o.source) || e.id === (o && o.target),
              l = Yi(e, r, o, t),
              u = e.color || t.node.color;
            a && t.node.highlightColor !== Tr.KEYWORDS.SAME && (u = t.node.highlightColor);
            var c = e.strokeColor || t.node.strokeColor;
            a && t.node.highlightStrokeColor !== Tr.KEYWORDS.SAME && (c = t.node.highlightStrokeColor);
            var s = e[t.node.labelProperty] || e.id;
            "function" == typeof t.node.labelProperty && (s = t.node.labelProperty(e));
            var f = e.labelPosition || t.node.labelPosition,
              d = e.strokeWidth || t.node.strokeWidth;
            a && t.node.highlightStrokeWidth !== Tr.KEYWORDS.SAME && (d = t.node.highlightStrokeWidth);
            var h = 1 / i,
              p = e.size || t.node.size,
              g = "object" !== $i(p),
              y = 0;
            g
              ? (y = p)
              : "top" === f || "bottom" === f
              ? (y = p.height)
              : ("right" !== f && "left" !== f) || (y = p.width);
            var m = e.fontSize || t.node.fontSize,
              v = e.highlightFontSize || t.node.highlightFontSize,
              b = a ? v : m,
              w = b * h + y / 100 + 1.5,
              _ = e.svg || t.node.svg,
              k = e.fontColor || t.node.fontColor,
              x = t.node.renderLabel;
            Br(e.renderLabel) || "boolean" != typeof e.renderLabel || (x = e.renderLabel);
            var S = t.node.labelClass;
            return (
              Br(e.labelClass) || "string" != typeof e.labelClass || (S = e.labelClass),
              qi(
                qi({}, e),
                {},
                {
                  className: Tr.NODE_CLASS_NAME,
                  cursor: t.node.mouseCursor,
                  cx: (null == e ? void 0 : e.x) || "0",
                  cy: (null == e ? void 0 : e.y) || "0",
                  dx: w,
                  fill: u,
                  fontColor: k,
                  fontSize: b * h,
                  fontWeight: a ? t.node.highlightFontWeight : t.node.fontWeight,
                  id: e.id,
                  label: s,
                  labelPosition: f,
                  opacity: l,
                  overrideGlobalViewGenerator: !e.viewGenerator && e.svg,
                  renderLabel: x,
                  labelClass: S,
                  size: g ? p * h : { height: p.height * h, width: p.width * h },
                  stroke: c,
                  strokeWidth: d * h,
                  svg: _,
                  type: e.symbolType || t.node.symbolType,
                  viewGenerator: e.viewGenerator || t.node.viewGenerator,
                  onClickNode: n.onClickNode,
                  onMouseOut: n.onMouseOut,
                  onMouseOverNode: n.onMouseOverNode,
                  onRightClickNode: n.onRightClickNode,
                }
              )
            );
          })(Ji(Ji({}, e[l]), {}, { id: "".concat(l) }), n, t, r, i, a);
          return o.a.createElement(di, Ki({ key: l }, u));
        })
      );
    }
    var ra,
      oa =
        ((ra = {}),
        function(e) {
          var t = e.link.highlightColor && "SAME" !== e.link.highlightColor ? e.link.highlightColor : e.link.color,
            n = e.link.color,
            r = "".concat(n, "___").concat(t);
          if (!ra[r]) {
            var i = (function(e) {
                var t,
                  n,
                  r = 16,
                  o = r + (2 * e.maxZoom) / 3,
                  i = r + (4 * e.maxZoom) / 3;
                return (
                  ((null !== (t = e.node) && void 0 !== t && t.viewGenerator) ||
                    Tr.SYMBOLS_WITH_OPTIMIZED_POSITIONING.has(
                      null === (n = e.node) || void 0 === n ? void 0 : n.symbolType
                    )) &&
                    ((r = 0), (o = 0), (i = 0)),
                  { small: r, medium: o, large: i }
                );
              })(e),
              a = i.small,
              l = i.medium,
              u = i.large,
              c = { markerWidth: e.link.markerWidth, markerHeight: e.link.markerHeight };
            ra[r] = o.a.createElement(
              "defs",
              null,
              o.a.createElement(_i, Ki({ id: xo.MARKER_S, refX: a, fill: n }, c)),
              o.a.createElement(_i, Ki({ id: xo.MARKER_SH, refX: a, fill: t }, c)),
              o.a.createElement(_i, Ki({ id: xo.MARKER_M, refX: l, fill: n }, c)),
              o.a.createElement(_i, Ki({ id: xo.MARKER_MH, refX: l, fill: t }, c)),
              o.a.createElement(_i, Ki({ id: xo.MARKER_L, refX: u, fill: n }, c)),
              o.a.createElement(_i, Ki({ id: xo.MARKER_LH, refX: u, fill: t }, c))
            );
          }
          return ra[r];
        });
    function ia(e, t, n, r, o, i, a, l, u) {
      return { nodes: na(e, t, i, a, l, u, r), links: ta(e, n, r, i, o, a, l, u), defs: oa(i) };
    }
    function aa(e) {
      return (aa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function la() {
      return (la = Object.assign
        ? Object.assign.bind()
        : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
    }
    function ua(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ca(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ua(Object(n), !0).forEach(function(t) {
              va(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ua(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function sa(e, t) {
      var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = (function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return fa(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fa(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            o = function() {};
          return {
            s: o,
            n: function() {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function(e) {
              throw e;
            },
            f: o,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var i,
        a = !0,
        l = !1;
      return {
        s: function() {
          n = n.call(e);
        },
        n: function() {
          var e = n.next();
          return (a = e.done), e;
        },
        e: function(e) {
          (l = !0), (i = e);
        },
        f: function() {
          try {
            a || null == n.return || n.return();
          } finally {
            if (l) throw i;
          }
        },
      };
    }
    function fa(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function da(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, ba(r.key), r);
      }
    }
    function ha(e, t) {
      return (ha = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    function pa(e) {
      var t = (function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      })();
      return function() {
        var n,
          r = ma(e);
        if (t) {
          var o = ma(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return ga(this, n);
      };
    }
    function ga(e, t) {
      if (t && ("object" === aa(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return ya(e);
    }
    function ya(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function ma(e) {
      return (ma = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function va(e, t, n) {
      return (
        (t = ba(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    function ba(e) {
      var t = (function(e, t) {
        if ("object" !== aa(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== aa(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === aa(t) ? t : String(t);
    }
    o.a.Component;
    function wa(e, t, n, r) {
      var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        i = o ? r : "";
      return (
        (e[r].highlighted = o),
        t[r] &&
          0 !== n.highlightDegree &&
          Object.keys(t[r]).forEach(function(t) {
            e[t].highlighted = o;
          }),
        { nodes: e, highlightedNode: i }
      );
    }
    function _a(e) {
      return (_a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ka() {
      return (ka = Object.assign
        ? Object.assign.bind()
        : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
    }
    function xa(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Sa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? xa(Object(n), !0).forEach(function(t) {
              Ea(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : xa(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Ea(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== _a(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== _a(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === _a(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    function Oa(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((i = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                u = !1;
              } else for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
            } catch (e) {
              (c = !0), (o = e);
            } finally {
              try {
                if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
              } finally {
                if (c) throw o;
              }
            }
            return l;
          }
        })(e, t) ||
        Ca(e, t) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Ca(e, t) {
      if (e) {
        if ("string" == typeof e) return Pa(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Pa(e, t)
            : void 0
        );
      }
    }
    function Pa(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var Na = null,
      Ma = function(e) {
        var t = e.config,
          n = (e.data, e.id),
          i = (e.onZoomChange, e.onNodePositionChange),
          a = e.onDoubleClickNode,
          l = e.onClickNode,
          u = Oa(
            Object(r.useState)(function() {
              return uo(e, {});
            }),
            2
          ),
          c = u[0],
          s = u[1],
          f = Object(r.useRef)(null),
          d = Object(r.useRef)(!1),
          h = function() {
            var e = y.transform;
            Ct("#".concat(n, "-").concat(Tr.GRAPH_CONTAINER_ID)).attr("transform", e),
              t.panAndZoom &&
                s(function(t) {
                  return Sa(Sa({}, t), {}, { transform: e });
                });
          },
          p = function() {
            var e;
            (d.current = !0),
              null == c || null === (e = c.simulation) || void 0 === e || e.stop(),
              c.enableFocusAnimation &&
                s(function(e) {
                  return Sa(Sa({}, e), {}, { enableFocusAnimation: !1 });
                });
          },
          g = function(e, t, n) {
            var r = n[t].id;
            if (!c.config.staticGraph) {
              var o = c.nodes[r];
              (o.oldX = o.x), (o.oldY = o.y);
              var i = o.x + y.dx,
                a = o.y + y.dy;
              (!c.config.bounded || so({ x: i, y: a }, c)) &&
                ((o.x = i),
                (o.y = a),
                (o.fx = o.x),
                (o.fy = o.y),
                s(function(e) {
                  return Sa(Sa({}, e), {}, { draggedNode: o });
                }));
            }
          },
          m = function() {
            (d.current = !1),
              c.draggedNode &&
                (!(function(t) {
                  if (e.onNodePositionChange) {
                    var n = t.id,
                      r = t.x,
                      o = t.y;
                    null == i || i(n, r, o);
                  }
                })(c.draggedNode),
                s(function(e) {
                  return Sa(Sa({}, e), {}, { draggedNode: void 0 });
                }));
          },
          v = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = c.nodes,
              r = c.links,
              o = c.config,
              i = wa(n, r, o, e, t),
              a = i.nodes,
              l = i.highlightedNode;
            s(Sa(Sa({}, c), {}, { nodes: a, highlightedNode: l }));
          },
          b = function() {
            var e = Be()
              .on("start", p)
              .on("drag", g)
              .on("end", m);
            Ne("#".concat(n, "-").concat(Tr.GRAPH_WRAPPER_ID))
              .selectAll(".node")
              .call(e);
          },
          w = function() {
            var e, t;
            if (c) {
              var n, r, o, i, a, l, u;
              if (
                null == c ||
                null === (e = c.config) ||
                void 0 === e ||
                null === (t = e.d3) ||
                void 0 === t ||
                !t.disableLinkForce
              )
                null == c ||
                  null === (n = c.simulation) ||
                  void 0 === n ||
                  n.nodes(c.d3Nodes).on("tick", function() {
                    var e,
                      t = {},
                      n = (function(e, t) {
                        var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (!n) {
                          if (Array.isArray(e) || (n = Ca(e)) || (t && e && "number" == typeof e.length)) {
                            n && (e = n);
                            var r = 0,
                              o = function() {};
                            return {
                              s: o,
                              n: function() {
                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                              },
                              e: function(e) {
                                throw e;
                              },
                              f: o,
                            };
                          }
                          throw new TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var i,
                          a = !0,
                          l = !1;
                        return {
                          s: function() {
                            n = n.call(e);
                          },
                          n: function() {
                            var e = n.next();
                            return (a = e.done), e;
                          },
                          e: function(e) {
                            (l = !0), (i = e);
                          },
                          f: function() {
                            try {
                              a || null == n.return || n.return();
                            } finally {
                              if (l) throw i;
                            }
                          },
                        };
                      })(c.d3Nodes);
                    try {
                      for (n.s(); !(e = n.n()).done; ) {
                        var r = e.value;
                        t[r.id] = r;
                      }
                    } catch (e) {
                      n.e(e);
                    } finally {
                      n.f();
                    }
                    s(function(e) {
                      return Sa(Sa({}, e), {}, { d3Nodes: c.d3Nodes, nodes: t });
                    });
                  }),
                  (u = ut(c.d3Links)
                    .id(function(e) {
                      return e.id;
                    })
                    .distance(
                      null == c || null === (r = c.config) || void 0 === r || null === (o = r.d3) || void 0 === o
                        ? void 0
                        : o.linkLength
                    )
                    .strength(
                      null == c || null === (i = c.config) || void 0 === i || null === (a = i.d3) || void 0 === a
                        ? void 0
                        : a.linkStrength
                    )),
                  null == c || null === (l = c.simulation) || void 0 === l || l.force(Tr.LINK_CLASS_NAME, u);
              c.config.freezeAllDragEvents || b();
            }
          };
        Object(r.useEffect)(function() {
          var e, r;
          w(),
            (e = Ne("#".concat(n, "-").concat(Tr.GRAPH_WRAPPER_ID))),
            (r = Or().scaleExtent([t.minZoom, t.maxZoom])),
            t.freezeAllDragEvents || r.on("zoom", h),
            e.call(r).on("dblclick.zoom", null);
        }, []),
          Object(r.useEffect)(function() {
            c.simulation.on("end", function(e) {});
          }, []);
        var _ = ia(
            c.nodes,
            {
              onClickNode: function(e) {
                var t = c.nodes[e];
                if (Na) null == a || a(e, t), (Na = clearTimeout(Na));
                else {
                  var n = a ? Tr.TTL_DOUBLE_CLICK_IN_MS : 0;
                  Na = setTimeout(function() {
                    if (c.config.collapsible) {
                      var n = wo(e, c.links, c.config),
                        r = ko(c.links, n, c.config),
                        o = _o(c.d3Links, r),
                        i = null == n ? void 0 : n[0],
                        a = !1;
                      if (i) a = 1 === r[i.source][i.target];
                      s(function(e) {
                        return Sa(Sa({}, e), {}, { links: r, d3Links: o });
                      }),
                        a && b();
                    }
                    null == l || l(e, t), (Na = null);
                  }, n);
                }
              },
              onDoubleClickNode: function() {},
              onRightClickNode: function() {},
              onMouseOverNode: function(e) {
                if (!d.current) {
                  c.nodes[e];
                  c.config.nodeHighlightBehavior && v(e, !0);
                }
              },
              onMouseOut: function(e) {
                if (!d.current) {
                  c.nodes[e];
                  c.config.nodeHighlightBehavior && v(e, !1);
                }
              },
            },
            c.d3Links,
            c.links,
            {
              onClickLink: function() {},
              onRightClickLink: function() {},
              onMouseOverLink: function() {},
              onMouseOutLink: function() {},
            },
            c.config,
            c.highlightedNode,
            null,
            c.transform.k
          ),
          k = _.nodes,
          x = _.links,
          S = _.defs,
          E = { height: t.height, width: t.width },
          O = (function() {
            var e;
            c.enableFocusAnimation &&
              (f.current && clearTimeout(f.current),
              (f.current = setTimeout(function() {
                return s(function(e) {
                  return Sa(Sa({}, e), {}, { enableFocusAnimation: !1 });
                });
              }, (null == c || null === (e = c.config) || void 0 === e ? void 0 : e.focusAnimationDuration) *
                Tr.FOCUS_ANIMATION_DURATION)));
            var t = c.enableFocusAnimation ? c.config.focusAnimationDuration : 0;
            return { style: { transitionDuration: "".concat(t, "s") }, transform: c.focusTransformation };
          })();
        return o.a.createElement(
          "div",
          { id: "".concat(n, "-").concat(Tr.GRAPH_WRAPPER_ID) },
          o.a.createElement(
            "svg",
            { name: "svg-container-".concat(n), style: E },
            S,
            o.a.createElement("g", ka({ id: "".concat(n, "-").concat(Tr.GRAPH_CONTAINER_ID) }, O), x, k)
          )
        );
      },
      Ta = n(10),
      ja = n.n(Ta);
    n(37);
    function La(e) {
      return (La =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Aa() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Aa = function() {
        return e;
      };
      var e = {},
        t = Object.prototype,
        n = t.hasOwnProperty,
        r =
          Object.defineProperty ||
          function(e, t, n) {
            e[t] = n.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        l = o.toStringTag || "@@toStringTag";
      function u(e, t, n) {
        return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
      }
      try {
        u({}, "");
      } catch (e) {
        u = function(e, t, n) {
          return (e[t] = n);
        };
      }
      function c(e, t, n, o) {
        var i = t && t.prototype instanceof d ? t : d,
          a = Object.create(i.prototype),
          l = new E(o || []);
        return r(a, "_invoke", { value: _(e, n, l) }), a;
      }
      function s(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = c;
      var f = {};
      function d() {}
      function h() {}
      function p() {}
      var g = {};
      u(g, i, function() {
        return this;
      });
      var y = Object.getPrototypeOf,
        m = y && y(y(O([])));
      m && m !== t && n.call(m, i) && (g = m);
      var v = (p.prototype = d.prototype = Object.create(g));
      function b(e) {
        ["next", "throw", "return"].forEach(function(t) {
          u(e, t, function(e) {
            return this._invoke(t, e);
          });
        });
      }
      function w(e, t) {
        var o;
        r(this, "_invoke", {
          value: function(r, i) {
            function a() {
              return new t(function(o, a) {
                !(function r(o, i, a, l) {
                  var u = s(e[o], e, i);
                  if ("throw" !== u.type) {
                    var c = u.arg,
                      f = c.value;
                    return f && "object" == La(f) && n.call(f, "__await")
                      ? t.resolve(f.__await).then(
                          function(e) {
                            r("next", e, a, l);
                          },
                          function(e) {
                            r("throw", e, a, l);
                          }
                        )
                      : t.resolve(f).then(
                          function(e) {
                            (c.value = e), a(c);
                          },
                          function(e) {
                            return r("throw", e, a, l);
                          }
                        );
                  }
                  l(u.arg);
                })(r, i, o, a);
              });
            }
            return (o = o ? o.then(a, a) : a());
          },
        });
      }
      function _(e, t, n) {
        var r = "suspendedStart";
        return function(o, i) {
          if ("executing" === r) throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === o) throw i;
            return C();
          }
          for (n.method = o, n.arg = i; ; ) {
            var a = n.delegate;
            if (a) {
              var l = k(a, n);
              if (l) {
                if (l === f) continue;
                return l;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var u = s(e, t, n);
            if ("normal" === u.type) {
              if (((r = n.done ? "completed" : "suspendedYield"), u.arg === f)) continue;
              return { value: u.arg, done: n.done };
            }
            "throw" === u.type && ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
          }
        };
      }
      function k(e, t) {
        var n = t.method,
          r = e.iterator[n];
        if (void 0 === r)
          return (
            (t.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((t.method = "return"), (t.arg = void 0), k(e, t), "throw" === t.method)) ||
              ("return" !== n &&
                ((t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
            f
          );
        var o = s(r, e.iterator, t.arg);
        if ("throw" === o.type) return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), f;
        var i = o.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              f)
            : i
          : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), f);
      }
      function x(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(x, this), this.reset(!0);
      }
      function O(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: C };
      }
      function C() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = p),
        r(v, "constructor", { value: p, configurable: !0 }),
        r(p, "constructor", { value: h, configurable: !0 }),
        (h.displayName = u(p, l, "GeneratorFunction")),
        (e.isGeneratorFunction = function(e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (e.mark = function(e) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : ((e.__proto__ = p), u(e, l, "GeneratorFunction")),
            (e.prototype = Object.create(v)),
            e
          );
        }),
        (e.awrap = function(e) {
          return { __await: e };
        }),
        b(w.prototype),
        u(w.prototype, a, function() {
          return this;
        }),
        (e.AsyncIterator = w),
        (e.async = function(t, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(c(t, n, r, o), i);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function(e) {
                return e.done ? e.value : a.next();
              });
        }),
        b(v),
        u(v, l, "Generator"),
        u(v, i, function() {
          return this;
        }),
        u(v, "toString", function() {
          return "[object Generator]";
        }),
        (e.keys = function(e) {
          var t = Object(e),
            n = [];
          for (var r in t) n.push(r);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in t) return (e.value = r), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = O),
        (E.prototype = {
          constructor: E,
          reset: function(e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !e)
            )
              for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function(e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (a.type = "throw"), (a.arg = e), (t.next = n), r && ((t.method = "next"), (t.arg = void 0)), !!r;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var l = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (l && u) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (l) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = e), (a.arg = t), i ? ((this.method = "next"), (this.next = i.finallyLoc), f) : this.complete(a)
            );
          },
          complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              f
            );
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), f;
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  S(n);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(e, t, n) {
            return (
              (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          },
        }),
        e
      );
    }
    function za(e, t, n, r, o, i, a) {
      try {
        var l = e[i](a),
          u = l.value;
      } catch (e) {
        return void n(e);
      }
      l.done ? t(u) : Promise.resolve(u).then(r, o);
    }
    function Ra(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((i = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                u = !1;
              } else for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
            } catch (e) {
              (c = !0), (o = e);
            } finally {
              try {
                if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
              } finally {
                if (c) throw o;
              }
            }
            return l;
          }
        })(e, t) ||
        (function(e, t) {
          if (!e) return;
          if ("string" == typeof e) return Da(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Da(e, t);
        })(e, t) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Da(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function Ia(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Fa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ia(Object(n), !0).forEach(function(t) {
              Ua(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ia(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Ua(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ("object" !== La(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== La(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === La(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = n),
        e
      );
    }
    var Ba = (function() {
        var e = ja.a.parse(location.search),
          t = !1;
        if ((e && e.fullscreen && (t = new Boolean(e.fullscreen)), e && e.data)) {
          var r = e.data.toLowerCase();
          try {
            var o = n(20)("./".concat(r, "/").concat(r, ".data")),
              i = n(27)("./".concat(r, "/").concat(r, ".config")),
              a = Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
            return { data: o, config: Wr(l, a), fullscreen: t };
          } catch (e) {
            console.warn(
              "dataset with name ".concat(r, " not found, falling back to default, make sure it is a valid dataset")
            );
          }
        }
        return { config: {}, data: n(36), fullscreen: t };
      })(),
      Wa = Ba.config,
      Ha = Ba.data,
      Va = (Ba.fullscreen, Object.assign(l, Wa)),
      qa = {
        nodes: Ha.nodes.map(function(e, t) {
          return Fa(Fa({}, e), {}, { properties: Fa(Fa({}, e.properties), {}, { root: 0 === t }) });
        }),
        links: Ha.links,
        focusedNodeId: Ha.rootId,
      },
      Ga = function() {
        var e = Ra(Object(r.useState)(0), 2),
          t = e[0],
          n = (e[1], Ra(Object(r.useState)(!1), 2)),
          i = (n[0], n[1]),
          a = Ra(Object(r.useState)(!1), 2),
          l = (a[0], a[1]),
          u = Ra(Object(r.useState)(null), 2),
          c = u[0],
          s = u[1],
          f = Ra(Object(r.useState)(0), 2),
          d =
            (f[0],
            f[1],
            Fa(Fa({}, Va), {}, { width: window.innerWidth, height: window.innerHeight }),
            (function() {
              var e,
                t =
                  ((e = Aa().mark(function e() {
                    var t;
                    return Aa().wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i(!0),
                              (e.next = 3),
                              new Promise(function(e, t) {
                                setTimeout(function() {
                                  e(qa);
                                }, 1e3);
                              })
                            );
                          case 3:
                            (t = e.sent),
                              s({
                                id: "graph",
                                data: t,
                                config: Fa(Fa({}, Va), {}, { width: window.innerWidth, height: window.innerHeight }),
                              }),
                              l(!0);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function() {
                    var t = this,
                      n = arguments;
                    return new Promise(function(r, o) {
                      var i = e.apply(t, n);
                      function a(e) {
                        za(i, r, o, a, l, "next", e);
                      }
                      function l(e) {
                        za(i, r, o, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function() {
                return t.apply(this, arguments);
              };
            })());
        Object(r.useEffect)(function() {
          d();
        }, []);
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement("div", { className: "zoom-container" }, t),
          c && o.a.createElement(Ma, c)
        );
      },
      $a = document.getElementById("app");
    a.a.render(o.a.createElement(Ga, null), $a);
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      i = (n(28), "./data/custom-node/res/images/"),
      a = { MAN: i + "man.svg", WOMAN: i + "girl.svg", CAR: i + "car.svg", BIKE: i + "bike.svg" };
    var l = function(e) {
      var t = e.person,
        n = "male" === t.gender;
      return o.a.createElement(
        "div",
        { className: "flex-container person-node ".concat(n ? "male" : "female") },
        o.a.createElement("div", { className: "name" }, t.name),
        o.a.createElement(
          "div",
          { className: "flex-container fill-space flex-container-row" },
          o.a.createElement(
            "div",
            { className: "fill-space" },
            o.a.createElement("div", {
              className: "icon",
              style: { backgroundImage: "url('".concat(n ? a.MAN : a.WOMAN, "')") },
            })
          ),
          o.a.createElement(
            "div",
            { className: "icon-bar" },
            t.hasBike &&
              o.a.createElement("div", { className: "icon", style: { backgroundImage: "url('".concat(a.BIKE, "')") } }),
            t.hasCar &&
              o.a.createElement("div", { className: "icon", style: { backgroundImage: "url('".concat(a.CAR, "')") } })
          )
        )
      );
    };
    t.default = {
      automaticRearrangeAfterDropNode: !0,
      collapsible: !0,
      height: 400,
      highlightDegree: 1,
      highlightOpacity: 0.2,
      linkHighlightBehavior: !0,
      maxZoom: 8,
      minZoom: 0.1,
      nodeHighlightBehavior: !0,
      panAndZoom: !1,
      staticGraph: !1,
      width: 800,
      directed: !0,
      node: {
        color: "#d3d3d3",
        fontColor: "black",
        fontSize: 12,
        fontWeight: "normal",
        highlightColor: "red",
        highlightFontSize: 12,
        highlightFontWeight: "bold",
        highlightStrokeColor: "SAME",
        highlightStrokeWidth: 1.5,
        labelProperty: "name",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: !0,
        size: { width: 700, height: 900 },
        strokeColor: "none",
        strokeWidth: 1.5,
        svg: "",
        viewGenerator: function(e) {
          return o.a.createElement(l, { person: e });
        },
      },
      link: { color: "#d3d3d3", opacity: 1, semanticStrokeWidth: !1, strokeWidth: 4, highlightColor: "blue" },
    };
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      i =
        (n(32),
        function(e) {
          var t = e.person.properties,
            n = t.avatar,
            r = void 0 === n ? "" : n,
            i = t.name,
            a = void 0 === i ? "" : i,
            l = t.count,
            u = void 0 === l ? 0 : l,
            c = t.role,
            s = void 0 === c ? "" : c,
            f = t.root,
            d = void 0 === f || f,
            h = function(e) {
              var t = e + "_root";
              return d ? "".concat(e, " ").concat(t) : e;
            };
          return o.a.createElement(
            "div",
            { className: "custom" },
            o.a.createElement("div", { className: h("relation") }, s),
            o.a.createElement("div", { className: h("count") }, u, "+"),
            o.a.createElement("div", { className: h("avatar") }, o.a.createElement("img", { src: r, alt: "avatar" })),
            o.a.createElement("span", { className: h("name") }, a)
          );
        }),
      a = {
        automaticRearrangeAfterDropNode: !1,
        collapsible: !0,
        height: 400,
        highlightDegree: 1,
        highlightOpacity: 0.1,
        linkHighlightBehavior: !0,
        maxZoom: 12,
        minZoom: 0.1,
        nodeHighlightBehavior: !0,
        panAndZoom: !1,
        staticGraph: !1,
        width: 1400,
        directed: !0,
        d3: { alphaTarget: 0.5, gravity: -1e4, linkLength: 400 },
        node: {
          renderLabel: !1,
          size: { width: 1360, height: 1360 },
          viewGenerator: function(e) {
            return o.a.createElement(i, { person: e });
          },
        },
        link: {
          renderLabel: !0,
          labelProperty: function(e) {
            return e.text;
          },
          color: "#5C8EFA",
          fontColor: "#5081FD",
          fontSize: 20,
          fontWeight: "normal",
          highlightColor: "rgba(92, 142, 250, 1)",
          highlightFontSize: 20,
          highlightFontWeight: "normal",
          mouseCursor: "pointer",
          opacity: 1,
          semanticStrokeWidth: !0,
          strokeWidth: 2,
          type: "STRAIGHT",
        },
      };
    t.default = a;
  },
]);
//# sourceMappingURL=rd3g.sandbox.bundle.js.map
