!function (e, a) {
    for (var t in a) e[t] = a[t]
}(window, function (e) {
    var a = {};

    function t(s) {
        if (a[s]) return a[s].exports;
        var n = a[s] = {i: s, l: !1, exports: {}};
        return e[s].call(n.exports, n, n.exports, t), n.l = !0, n.exports
    }

    return t.m = e, t.c = a, t.d = function (e, a, s) {
        t.o(e, a) || Object.defineProperty(e, a, {enumerable: !0, get: s})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, a) {
        if (1 & a && (e = t(e)), 8 & a) return e;
        if (4 & a && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (t.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }), 2 & a && "string" != typeof e) for (var n in e) t.d(s, n, function (a) {
            return e[a]
        }.bind(null, n));
        return s
    }, t.n = function (e) {
        var a = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(a, "a", a), a
    }, t.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, t.p = "", t(t.s = 465)
}([function (e, a, t) {
    (function (e) {
        e.exports = function () {
            "use strict";
            var a, s;

            function n() {
                return a.apply(null, arguments)
            }

            function r(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function i(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function d(e, a) {
                return Object.prototype.hasOwnProperty.call(e, a)
            }

            function _(e) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                var a;
                for (a in e) if (d(e, a)) return !1;
                return !0
            }

            function o(e) {
                return void 0 === e
            }

            function u(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function m(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function l(e, a) {
                var t, s = [];
                for (t = 0; t < e.length; ++t) s.push(a(e[t], t));
                return s
            }

            function M(e, a) {
                for (var t in a) d(a, t) && (e[t] = a[t]);
                return d(a, "toString") && (e.toString = a.toString), d(a, "valueOf") && (e.valueOf = a.valueOf), e
            }

            function h(e, a, t, s) {
                return wa(e, a, t, s, !0).utc()
            }

            function c(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function L(e) {
                if (null == e._isValid) {
                    var a = c(e), t = s.call(a.parsedDateParts, (function (e) {
                            return null != e
                        })),
                        n = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidEra && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);
                    if (e._strict && (n = n && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                    e._isValid = n
                }
                return e._isValid
            }

            function Y(e) {
                var a = h(NaN);
                return null != e ? M(c(a), e) : c(a).userInvalidated = !0, a
            }

            s = Array.prototype.some ? Array.prototype.some : function (e) {
                var a, t = Object(this), s = t.length >>> 0;
                for (a = 0; a < s; a++) if (a in t && e.call(this, t[a], a, t)) return !0;
                return !1
            };
            var y = n.momentProperties = [], f = !1;

            function p(e, a) {
                var t, s, n;
                if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), o(a._i) || (e._i = a._i), o(a._f) || (e._f = a._f), o(a._l) || (e._l = a._l), o(a._strict) || (e._strict = a._strict), o(a._tzm) || (e._tzm = a._tzm), o(a._isUTC) || (e._isUTC = a._isUTC), o(a._offset) || (e._offset = a._offset), o(a._pf) || (e._pf = c(a)), o(a._locale) || (e._locale = a._locale), y.length > 0) for (t = 0; t < y.length; t++) o(n = a[s = y[t]]) || (e[s] = n);
                return e
            }

            function k(e) {
                p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === f && (f = !0, n.updateOffset(this), f = !1)
            }

            function D(e) {
                return e instanceof k || null != e && null != e._isAMomentObject
            }

            function g(e) {
                !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function T(e, a) {
                var t = !0;
                return M((function () {
                    if (null != n.deprecationHandler && n.deprecationHandler(null, e), t) {
                        var s, r, i, _ = [];
                        for (r = 0; r < arguments.length; r++) {
                            if (s = "", "object" == typeof arguments[r]) {
                                for (i in s += "\n[" + r + "] ", arguments[0]) d(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
                                s = s.slice(0, -2)
                            } else s = arguments[r];
                            _.push(s)
                        }
                        g(e + "\nArguments: " + Array.prototype.slice.call(_).join("") + "\n" + (new Error).stack), t = !1
                    }
                    return a.apply(this, arguments)
                }), a)
            }

            var w, v = {};

            function b(e, a) {
                null != n.deprecationHandler && n.deprecationHandler(e, a), v[e] || (g(a), v[e] = !0)
            }

            function S(e) {
                return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function H(e, a) {
                var t, s = M({}, e);
                for (t in a) d(a, t) && (i(e[t]) && i(a[t]) ? (s[t] = {}, M(s[t], e[t]), M(s[t], a[t])) : null != a[t] ? s[t] = a[t] : delete s[t]);
                for (t in e) d(e, t) && !d(a, t) && i(e[t]) && (s[t] = M({}, s[t]));
                return s
            }

            function j(e) {
                null != e && this.set(e)
            }

            function x(e, a, t) {
                var s = "" + Math.abs(e), n = a - s.length;
                return (e >= 0 ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s
            }

            n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, w = Object.keys ? Object.keys : function (e) {
                var a, t = [];
                for (a in e) d(e, a) && t.push(a);
                return t
            };
            var P = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                O = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, W = {}, A = {};

            function E(e, a, t, s) {
                var n = s;
                "string" == typeof s && (n = function () {
                    return this[s]()
                }), e && (A[e] = n), a && (A[a[0]] = function () {
                    return x(n.apply(this, arguments), a[1], a[2])
                }), t && (A[t] = function () {
                    return this.localeData().ordinal(n.apply(this, arguments), e)
                })
            }

            function F(e, a) {
                return e.isValid() ? (a = z(a, e.localeData()), W[a] = W[a] || function (e) {
                    var a, t, s, n = e.match(P);
                    for (a = 0, t = n.length; a < t; a++) A[n[a]] ? n[a] = A[n[a]] : n[a] = (s = n[a]).match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
                    return function (a) {
                        var s, r = "";
                        for (s = 0; s < t; s++) r += S(n[s]) ? n[s].call(a, e) : n[s];
                        return r
                    }
                }(a), W[a](e)) : e.localeData().invalidDate()
            }

            function z(e, a) {
                var t = 5;

                function s(e) {
                    return a.longDateFormat(e) || e
                }

                for (O.lastIndex = 0; t >= 0 && O.test(e);) e = e.replace(O, s), O.lastIndex = 0, t -= 1;
                return e
            }

            var N = {};

            function J(e, a) {
                var t = e.toLowerCase();
                N[t] = N[t + "s"] = N[a] = e
            }

            function R(e) {
                return "string" == typeof e ? N[e] || N[e.toLowerCase()] : void 0
            }

            function C(e) {
                var a, t, s = {};
                for (t in e) d(e, t) && (a = R(t)) && (s[a] = e[t]);
                return s
            }

            var I = {};

            function U(e, a) {
                I[e] = a
            }

            function G(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }

            function V(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function B(e) {
                var a = +e, t = 0;
                return 0 !== a && isFinite(a) && (t = V(a)), t
            }

            function K(e, a) {
                return function (t) {
                    return null != t ? (Z(this, e, t), n.updateOffset(this, a), this) : q(this, e)
                }
            }

            function q(e, a) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN
            }

            function Z(e, a, t) {
                e.isValid() && !isNaN(t) && ("FullYear" === a && G(e.year()) && 1 === e.month() && 29 === e.date() ? (t = B(t), e._d["set" + (e._isUTC ? "UTC" : "") + a](t, e.month(), De(t, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + a](t))
            }

            var $, Q = /\d/, X = /\d\d/, ee = /\d{3}/, ae = /\d{4}/, te = /[+-]?\d{6}/, se = /\d\d?/, ne = /\d\d\d\d?/,
                re = /\d\d\d\d\d\d?/, ie = /\d{1,3}/, de = /\d{1,4}/, _e = /[+-]?\d{1,6}/, oe = /\d+/, ue = /[+-]?\d+/,
                me = /Z|[+-]\d\d:?\d\d/gi, le = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Me = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

            function he(e, a, t) {
                $[e] = S(a) ? a : function (e, s) {
                    return e && t ? t : a
                }
            }

            function ce(e, a) {
                return d($, e) ? $[e](a._strict, a._locale) : new RegExp(Le(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function (e, a, t, s, n) {
                    return a || t || s || n
                }))))
            }

            function Le(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            $ = {};
            var Ye, ye = {};

            function fe(e, a) {
                var t, s = a;
                for ("string" == typeof e && (e = [e]), u(a) && (s = function (e, t) {
                    t[a] = B(e)
                }), t = 0; t < e.length; t++) ye[e[t]] = s
            }

            function pe(e, a) {
                fe(e, (function (e, t, s, n) {
                    s._w = s._w || {}, a(e, s._w, s, n)
                }))
            }

            function ke(e, a, t) {
                null != a && d(ye, e) && ye[e](a, t._a, t, e)
            }

            function De(e, a) {
                if (isNaN(e) || isNaN(a)) return NaN;
                var t, s = (a % (t = 12) + t) % t;
                return e += (a - s) / 12, 1 === s ? G(e) ? 29 : 28 : 31 - s % 7 % 2
            }

            Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                var a;
                for (a = 0; a < this.length; ++a) if (this[a] === e) return a;
                return -1
            }, E("M", ["MM", 2], "Mo", (function () {
                return this.month() + 1
            })), E("MMM", 0, 0, (function (e) {
                return this.localeData().monthsShort(this, e)
            })), E("MMMM", 0, 0, (function (e) {
                return this.localeData().months(this, e)
            })), J("month", "M"), U("month", 8), he("M", se), he("MM", se, X), he("MMM", (function (e, a) {
                return a.monthsShortRegex(e)
            })), he("MMMM", (function (e, a) {
                return a.monthsRegex(e)
            })), fe(["M", "MM"], (function (e, a) {
                a[1] = B(e) - 1
            })), fe(["MMM", "MMMM"], (function (e, a, t, s) {
                var n = t._locale.monthsParse(e, s, t._strict);
                null != n ? a[1] = n : c(t).invalidMonth = e
            }));
            var ge = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Te = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), we = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                ve = Me, be = Me;

            function Se(e, a, t) {
                var s, n, r, i = e.toLocaleLowerCase();
                if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = h([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
                return t ? "MMM" === a ? -1 !== (n = Ye.call(this._shortMonthsParse, i)) ? n : null : -1 !== (n = Ye.call(this._longMonthsParse, i)) ? n : null : "MMM" === a ? -1 !== (n = Ye.call(this._shortMonthsParse, i)) || -1 !== (n = Ye.call(this._longMonthsParse, i)) ? n : null : -1 !== (n = Ye.call(this._longMonthsParse, i)) || -1 !== (n = Ye.call(this._shortMonthsParse, i)) ? n : null
            }

            function He(e, a) {
                var t;
                if (!e.isValid()) return e;
                if ("string" == typeof a) if (/^\d+$/.test(a)) a = B(a); else if (!u(a = e.localeData().monthsParse(a))) return e;
                return t = Math.min(e.date(), De(e.year(), a)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t), e
            }

            function je(e) {
                return null != e ? (He(this, e), n.updateOffset(this, !0), this) : q(this, "Month")
            }

            function xe() {
                function e(e, a) {
                    return a.length - e.length
                }

                var a, t, s = [], n = [], r = [];
                for (a = 0; a < 12; a++) t = h([2e3, a]), s.push(this.monthsShort(t, "")), n.push(this.months(t, "")), r.push(this.months(t, "")), r.push(this.monthsShort(t, ""));
                for (s.sort(e), n.sort(e), r.sort(e), a = 0; a < 12; a++) s[a] = Le(s[a]), n[a] = Le(n[a]);
                for (a = 0; a < 24; a++) r[a] = Le(r[a]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function Pe(e) {
                return G(e) ? 366 : 365
            }

            E("Y", 0, 0, (function () {
                var e = this.year();
                return e <= 9999 ? x(e, 4) : "+" + e
            })), E(0, ["YY", 2], 0, (function () {
                return this.year() % 100
            })), E(0, ["YYYY", 4], 0, "year"), E(0, ["YYYYY", 5], 0, "year"), E(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), U("year", 1), he("Y", ue), he("YY", se, X), he("YYYY", de, ae), he("YYYYY", _e, te), he("YYYYYY", _e, te), fe(["YYYYY", "YYYYYY"], 0), fe("YYYY", (function (e, a) {
                a[0] = 2 === e.length ? n.parseTwoDigitYear(e) : B(e)
            })), fe("YY", (function (e, a) {
                a[0] = n.parseTwoDigitYear(e)
            })), fe("Y", (function (e, a) {
                a[0] = parseInt(e, 10)
            })), n.parseTwoDigitYear = function (e) {
                return B(e) + (B(e) > 68 ? 1900 : 2e3)
            };
            var Oe = K("FullYear", !0);

            function We(e, a, t, s, n, r, i) {
                var d;
                return e < 100 && e >= 0 ? (d = new Date(e + 400, a, t, s, n, r, i), isFinite(d.getFullYear()) && d.setFullYear(e)) : d = new Date(e, a, t, s, n, r, i), d
            }

            function Ae(e) {
                var a, t;
                return e < 100 && e >= 0 ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400, a = new Date(Date.UTC.apply(null, t)), isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e)) : a = new Date(Date.UTC.apply(null, arguments)), a
            }

            function Ee(e, a, t) {
                var s = 7 + a - t;
                return -(7 + Ae(e, 0, s).getUTCDay() - a) % 7 + s - 1
            }

            function Fe(e, a, t, s, n) {
                var r, i, d = 1 + 7 * (a - 1) + (7 + t - s) % 7 + Ee(e, s, n);
                return d <= 0 ? i = Pe(r = e - 1) + d : d > Pe(e) ? (r = e + 1, i = d - Pe(e)) : (r = e, i = d), {
                    year: r,
                    dayOfYear: i
                }
            }

            function ze(e, a, t) {
                var s, n, r = Ee(e.year(), a, t), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                return i < 1 ? s = i + Ne(n = e.year() - 1, a, t) : i > Ne(e.year(), a, t) ? (s = i - Ne(e.year(), a, t), n = e.year() + 1) : (n = e.year(), s = i), {
                    week: s,
                    year: n
                }
            }

            function Ne(e, a, t) {
                var s = Ee(e, a, t), n = Ee(e + 1, a, t);
                return (Pe(e) - s + n) / 7
            }

            function Je(e, a) {
                return e.slice(a, 7).concat(e.slice(0, a))
            }

            E("w", ["ww", 2], "wo", "week"), E("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), U("week", 5), U("isoWeek", 5), he("w", se), he("ww", se, X), he("W", se), he("WW", se, X), pe(["w", "ww", "W", "WW"], (function (e, a, t, s) {
                a[s.substr(0, 1)] = B(e)
            })), E("d", 0, "do", "day"), E("dd", 0, 0, (function (e) {
                return this.localeData().weekdaysMin(this, e)
            })), E("ddd", 0, 0, (function (e) {
                return this.localeData().weekdaysShort(this, e)
            })), E("dddd", 0, 0, (function (e) {
                return this.localeData().weekdays(this, e)
            })), E("e", 0, 0, "weekday"), E("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), U("day", 11), U("weekday", 11), U("isoWeekday", 11), he("d", se), he("e", se), he("E", se), he("dd", (function (e, a) {
                return a.weekdaysMinRegex(e)
            })), he("ddd", (function (e, a) {
                return a.weekdaysShortRegex(e)
            })), he("dddd", (function (e, a) {
                return a.weekdaysRegex(e)
            })), pe(["dd", "ddd", "dddd"], (function (e, a, t, s) {
                var n = t._locale.weekdaysParse(e, s, t._strict);
                null != n ? a.d = n : c(t).invalidWeekday = e
            })), pe(["d", "e", "E"], (function (e, a, t, s) {
                a[s] = B(e)
            }));
            var Re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ce = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ie = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ue = Me, Ge = Me,
                Ve = Me;

            function Be(e, a, t) {
                var s, n, r, i = e.toLocaleLowerCase();
                if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = h([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
                return t ? "dddd" === a ? -1 !== (n = Ye.call(this._weekdaysParse, i)) ? n : null : "ddd" === a ? -1 !== (n = Ye.call(this._shortWeekdaysParse, i)) ? n : null : -1 !== (n = Ye.call(this._minWeekdaysParse, i)) ? n : null : "dddd" === a ? -1 !== (n = Ye.call(this._weekdaysParse, i)) || -1 !== (n = Ye.call(this._shortWeekdaysParse, i)) || -1 !== (n = Ye.call(this._minWeekdaysParse, i)) ? n : null : "ddd" === a ? -1 !== (n = Ye.call(this._shortWeekdaysParse, i)) || -1 !== (n = Ye.call(this._weekdaysParse, i)) || -1 !== (n = Ye.call(this._minWeekdaysParse, i)) ? n : null : -1 !== (n = Ye.call(this._minWeekdaysParse, i)) || -1 !== (n = Ye.call(this._weekdaysParse, i)) || -1 !== (n = Ye.call(this._shortWeekdaysParse, i)) ? n : null
            }

            function Ke() {
                function e(e, a) {
                    return a.length - e.length
                }

                var a, t, s, n, r, i = [], d = [], _ = [], o = [];
                for (a = 0; a < 7; a++) t = h([2e3, 1]).day(a), s = Le(this.weekdaysMin(t, "")), n = Le(this.weekdaysShort(t, "")), r = Le(this.weekdays(t, "")), i.push(s), d.push(n), _.push(r), o.push(s), o.push(n), o.push(r);
                i.sort(e), d.sort(e), _.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function qe() {
                return this.hours() % 12 || 12
            }

            function Ze(e, a) {
                E(e, 0, 0, (function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), a)
                }))
            }

            function $e(e, a) {
                return a._meridiemParse
            }

            E("H", ["HH", 2], 0, "hour"), E("h", ["hh", 2], 0, qe), E("k", ["kk", 2], 0, (function () {
                return this.hours() || 24
            })), E("hmm", 0, 0, (function () {
                return "" + qe.apply(this) + x(this.minutes(), 2)
            })), E("hmmss", 0, 0, (function () {
                return "" + qe.apply(this) + x(this.minutes(), 2) + x(this.seconds(), 2)
            })), E("Hmm", 0, 0, (function () {
                return "" + this.hours() + x(this.minutes(), 2)
            })), E("Hmmss", 0, 0, (function () {
                return "" + this.hours() + x(this.minutes(), 2) + x(this.seconds(), 2)
            })), Ze("a", !0), Ze("A", !1), J("hour", "h"), U("hour", 13), he("a", $e), he("A", $e), he("H", se), he("h", se), he("k", se), he("HH", se, X), he("hh", se, X), he("kk", se, X), he("hmm", ne), he("hmmss", re), he("Hmm", ne), he("Hmmss", re), fe(["H", "HH"], 3), fe(["k", "kk"], (function (e, a, t) {
                var s = B(e);
                a[3] = 24 === s ? 0 : s
            })), fe(["a", "A"], (function (e, a, t) {
                t._isPm = t._locale.isPM(e), t._meridiem = e
            })), fe(["h", "hh"], (function (e, a, t) {
                a[3] = B(e), c(t).bigHour = !0
            })), fe("hmm", (function (e, a, t) {
                var s = e.length - 2;
                a[3] = B(e.substr(0, s)), a[4] = B(e.substr(s)), c(t).bigHour = !0
            })), fe("hmmss", (function (e, a, t) {
                var s = e.length - 4, n = e.length - 2;
                a[3] = B(e.substr(0, s)), a[4] = B(e.substr(s, 2)), a[5] = B(e.substr(n)), c(t).bigHour = !0
            })), fe("Hmm", (function (e, a, t) {
                var s = e.length - 2;
                a[3] = B(e.substr(0, s)), a[4] = B(e.substr(s))
            })), fe("Hmmss", (function (e, a, t) {
                var s = e.length - 4, n = e.length - 2;
                a[3] = B(e.substr(0, s)), a[4] = B(e.substr(s, 2)), a[5] = B(e.substr(n))
            }));
            var Qe, Xe = K("Hours", !0), ea = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    w: "a week",
                    ww: "%d weeks",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: ge,
                monthsShort: Te,
                week: {dow: 0, doy: 6},
                weekdays: Re,
                weekdaysMin: Ie,
                weekdaysShort: Ce,
                meridiemParse: /[ap]\.?m?\.?/i
            }, aa = {}, ta = {};

            function sa(e, a) {
                var t, s = Math.min(e.length, a.length);
                for (t = 0; t < s; t += 1) if (e[t] !== a[t]) return t;
                return s
            }

            function na(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function ra(a) {
                var s = null;
                if (void 0 === aa[a] && void 0 !== e && e && e.exports) try {
                    s = Qe._abbr, t(466)("./" + a), ia(s)
                } catch (e) {
                    aa[a] = null
                }
                return aa[a]
            }

            function ia(e, a) {
                var t;
                return e && ((t = o(a) ? _a(e) : da(e, a)) ? Qe = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Qe._abbr
            }

            function da(e, a) {
                if (null !== a) {
                    var t, s = ea;
                    if (a.abbr = e, null != aa[e]) b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = aa[e]._config; else if (null != a.parentLocale) if (null != aa[a.parentLocale]) s = aa[a.parentLocale]._config; else {
                        if (null == (t = ra(a.parentLocale))) return ta[a.parentLocale] || (ta[a.parentLocale] = []), ta[a.parentLocale].push({
                            name: e,
                            config: a
                        }), null;
                        s = t._config
                    }
                    return aa[e] = new j(H(s, a)), ta[e] && ta[e].forEach((function (e) {
                        da(e.name, e.config)
                    })), ia(e), aa[e]
                }
                return delete aa[e], null
            }

            function _a(e) {
                var a;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Qe;
                if (!r(e)) {
                    if (a = ra(e)) return a;
                    e = [e]
                }
                return function (e) {
                    for (var a, t, s, n, r = 0; r < e.length;) {
                        for (a = (n = na(e[r]).split("-")).length, t = (t = na(e[r + 1])) ? t.split("-") : null; a > 0;) {
                            if (s = ra(n.slice(0, a).join("-"))) return s;
                            if (t && t.length >= a && sa(n, t) >= a - 1) break;
                            a--
                        }
                        r++
                    }
                    return Qe
                }(e)
            }

            function oa(e) {
                var a, t = e._a;
                return t && -2 === c(e).overflow && (a = t[1] < 0 || t[1] > 11 ? 1 : t[2] < 1 || t[2] > De(t[0], t[1]) ? 2 : t[3] < 0 || t[3] > 24 || 24 === t[3] && (0 !== t[4] || 0 !== t[5] || 0 !== t[6]) ? 3 : t[4] < 0 || t[4] > 59 ? 4 : t[5] < 0 || t[5] > 59 ? 5 : t[6] < 0 || t[6] > 999 ? 6 : -1, c(e)._overflowDayOfYear && (a < 0 || a > 2) && (a = 2), c(e)._overflowWeeks && -1 === a && (a = 7), c(e)._overflowWeekday && -1 === a && (a = 8), c(e).overflow = a), e
            }

            var ua = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ma = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                la = /Z|[+-]\d\d(?::?\d\d)?/,
                Ma = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]],
                ha = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                ca = /^\/?Date\((-?\d+)/i,
                La = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Ya = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };

            function ya(e) {
                var a, t, s, n, r, i, d = e._i, _ = ua.exec(d) || ma.exec(d);
                if (_) {
                    for (c(e).iso = !0, a = 0, t = Ma.length; a < t; a++) if (Ma[a][1].exec(_[1])) {
                        n = Ma[a][0], s = !1 !== Ma[a][2];
                        break
                    }
                    if (null == n) return void (e._isValid = !1);
                    if (_[3]) {
                        for (a = 0, t = ha.length; a < t; a++) if (ha[a][1].exec(_[3])) {
                            r = (_[2] || " ") + ha[a][0];
                            break
                        }
                        if (null == r) return void (e._isValid = !1)
                    }
                    if (!s && null != r) return void (e._isValid = !1);
                    if (_[4]) {
                        if (!la.exec(_[4])) return void (e._isValid = !1);
                        i = "Z"
                    }
                    e._f = n + (r || "") + (i || ""), ga(e)
                } else e._isValid = !1
            }

            function fa(e) {
                var a = parseInt(e, 10);
                return a <= 49 ? 2e3 + a : a <= 999 ? 1900 + a : a
            }

            function pa(e) {
                var a, t, s, n, r, i, d, _,
                    o = La.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (o) {
                    if (t = o[4], s = o[3], n = o[2], r = o[5], i = o[6], d = o[7], _ = [fa(t), Te.indexOf(s), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)], d && _.push(parseInt(d, 10)), a = _, !function (e, a, t) {
                        return !e || Ce.indexOf(e) === new Date(a[0], a[1], a[2]).getDay() || (c(t).weekdayMismatch = !0, t._isValid = !1, !1)
                    }(o[1], a, e)) return;
                    e._a = a, e._tzm = function (e, a, t) {
                        if (e) return Ya[e];
                        if (a) return 0;
                        var s = parseInt(t, 10), n = s % 100;
                        return (s - n) / 100 * 60 + n
                    }(o[8], o[9], o[10]), e._d = Ae.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function ka(e, a, t) {
                return null != e ? e : null != a ? a : t
            }

            function Da(e) {
                var a, t, s, r, i, d = [];
                if (!e._d) {
                    for (s = function (e) {
                        var a = new Date(n.now());
                        return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
                    }(e), e._w && null == e._a[2] && null == e._a[1] && function (e) {
                        var a, t, s, n, r, i, d, _, o;
                        null != (a = e._w).GG || null != a.W || null != a.E ? (r = 1, i = 4, t = ka(a.GG, e._a[0], ze(va(), 1, 4).year), s = ka(a.W, 1), ((n = ka(a.E, 1)) < 1 || n > 7) && (_ = !0)) : (r = e._locale._week.dow, i = e._locale._week.doy, o = ze(va(), r, i), t = ka(a.gg, e._a[0], o.year), s = ka(a.w, o.week), null != a.d ? ((n = a.d) < 0 || n > 6) && (_ = !0) : null != a.e ? (n = a.e + r, (a.e < 0 || a.e > 6) && (_ = !0)) : n = r), s < 1 || s > Ne(t, r, i) ? c(e)._overflowWeeks = !0 : null != _ ? c(e)._overflowWeekday = !0 : (d = Fe(t, s, n, r, i), e._a[0] = d.year, e._dayOfYear = d.dayOfYear)
                    }(e), null != e._dayOfYear && (i = ka(e._a[0], s[0]), (e._dayOfYear > Pe(i) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), t = Ae(i, 0, e._dayOfYear), e._a[1] = t.getUTCMonth(), e._a[2] = t.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a) e._a[a] = d[a] = s[a];
                    for (; a < 7; a++) e._a[a] = d[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
                    24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Ae : We).apply(null, d), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0)
                }
            }

            function ga(e) {
                if (e._f !== n.ISO_8601) if (e._f !== n.RFC_2822) {
                    e._a = [], c(e).empty = !0;
                    var a, t, s, r, i, d, _ = "" + e._i, o = _.length, u = 0;
                    for (s = z(e._f, e._locale).match(P) || [], a = 0; a < s.length; a++) r = s[a], (t = (_.match(ce(r, e)) || [])[0]) && ((i = _.substr(0, _.indexOf(t))).length > 0 && c(e).unusedInput.push(i), _ = _.slice(_.indexOf(t) + t.length), u += t.length), A[r] ? (t ? c(e).empty = !1 : c(e).unusedTokens.push(r), ke(r, t, e)) : e._strict && !t && c(e).unusedTokens.push(r);
                    c(e).charsLeftOver = o - u, _.length > 0 && c(e).unusedInput.push(_), e._a[3] <= 12 && !0 === c(e).bigHour && e._a[3] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[3] = function (e, a, t) {
                        var s;
                        return null == t ? a : null != e.meridiemHour ? e.meridiemHour(a, t) : null != e.isPM ? ((s = e.isPM(t)) && a < 12 && (a += 12), s || 12 !== a || (a = 0), a) : a
                    }(e._locale, e._a[3], e._meridiem), null !== (d = c(e).era) && (e._a[0] = e._locale.erasConvertYear(d, e._a[0])), Da(e), oa(e)
                } else pa(e); else ya(e)
            }

            function Ta(e) {
                var a = e._i, t = e._f;
                return e._locale = e._locale || _a(e._l), null === a || void 0 === t && "" === a ? Y({nullInput: !0}) : ("string" == typeof a && (e._i = a = e._locale.preparse(a)), D(a) ? new k(oa(a)) : (m(a) ? e._d = a : r(t) ? function (e) {
                    var a, t, s, n, r, i, d = !1;
                    if (0 === e._f.length) return c(e).invalidFormat = !0, void (e._d = new Date(NaN));
                    for (n = 0; n < e._f.length; n++) r = 0, i = !1, a = p({}, e), null != e._useUTC && (a._useUTC = e._useUTC), a._f = e._f[n], ga(a), L(a) && (i = !0), r += c(a).charsLeftOver, r += 10 * c(a).unusedTokens.length, c(a).score = r, d ? r < s && (s = r, t = a) : (null == s || r < s || i) && (s = r, t = a, i && (d = !0));
                    M(e, t || a)
                }(e) : t ? ga(e) : function (e) {
                    var a = e._i;
                    o(a) ? e._d = new Date(n.now()) : m(a) ? e._d = new Date(a.valueOf()) : "string" == typeof a ? function (e) {
                        var a = ca.exec(e._i);
                        null === a ? (ya(e), !1 === e._isValid && (delete e._isValid, pa(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : n.createFromInputFallback(e)))) : e._d = new Date(+a[1])
                    }(e) : r(a) ? (e._a = l(a.slice(0), (function (e) {
                        return parseInt(e, 10)
                    })), Da(e)) : i(a) ? function (e) {
                        if (!e._d) {
                            var a = C(e._i), t = void 0 === a.day ? a.date : a.day;
                            e._a = l([a.year, a.month, t, a.hour, a.minute, a.second, a.millisecond], (function (e) {
                                return e && parseInt(e, 10)
                            })), Da(e)
                        }
                    }(e) : u(a) ? e._d = new Date(a) : n.createFromInputFallback(e)
                }(e), L(e) || (e._d = null), e))
            }

            function wa(e, a, t, s, n) {
                var d, o = {};
                return !0 !== a && !1 !== a || (s = a, a = void 0), !0 !== t && !1 !== t || (s = t, t = void 0), (i(e) && _(e) || r(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = n, o._l = t, o._i = e, o._f = a, o._strict = s, (d = new k(oa(Ta(o))))._nextDay && (d.add(1, "d"), d._nextDay = void 0), d
            }

            function va(e, a, t, s) {
                return wa(e, a, t, s, !1)
            }

            n.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            })), n.ISO_8601 = function () {
            }, n.RFC_2822 = function () {
            };
            var ba = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                    var e = va.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : Y()
                })),
                Sa = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                    var e = va.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : Y()
                }));

            function Ha(e, a) {
                var t, s;
                if (1 === a.length && r(a[0]) && (a = a[0]), !a.length) return va();
                for (t = a[0], s = 1; s < a.length; ++s) a[s].isValid() && !a[s][e](t) || (t = a[s]);
                return t
            }

            var ja = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function xa(e) {
                var a = C(e), t = a.year || 0, s = a.quarter || 0, n = a.month || 0, r = a.week || a.isoWeek || 0,
                    i = a.day || 0, _ = a.hour || 0, o = a.minute || 0, u = a.second || 0, m = a.millisecond || 0;
                this._isValid = function (e) {
                    var a, t, s = !1;
                    for (a in e) if (d(e, a) && (-1 === Ye.call(ja, a) || null != e[a] && isNaN(e[a]))) return !1;
                    for (t = 0; t < ja.length; ++t) if (e[ja[t]]) {
                        if (s) return !1;
                        parseFloat(e[ja[t]]) !== B(e[ja[t]]) && (s = !0)
                    }
                    return !0
                }(a), this._milliseconds = +m + 1e3 * u + 6e4 * o + 1e3 * _ * 60 * 60, this._days = +i + 7 * r, this._months = +n + 3 * s + 12 * t, this._data = {}, this._locale = _a(), this._bubble()
            }

            function Pa(e) {
                return e instanceof xa
            }

            function Oa(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function Wa(e, a) {
                E(e, 0, 0, (function () {
                    var e = this.utcOffset(), t = "+";
                    return e < 0 && (e = -e, t = "-"), t + x(~~(e / 60), 2) + a + x(~~e % 60, 2)
                }))
            }

            Wa("Z", ":"), Wa("ZZ", ""), he("Z", le), he("ZZ", le), fe(["Z", "ZZ"], (function (e, a, t) {
                t._useUTC = !0, t._tzm = Ea(le, e)
            }));
            var Aa = /([\+\-]|\d\d)/gi;

            function Ea(e, a) {
                var t, s, n = (a || "").match(e);
                return null === n ? null : 0 === (s = 60 * (t = ((n[n.length - 1] || []) + "").match(Aa) || ["-", 0, 0])[1] + B(t[2])) ? 0 : "+" === t[0] ? s : -s
            }

            function Fa(e, a) {
                var t, s;
                return a._isUTC ? (t = a.clone(), s = (D(e) || m(e) ? e.valueOf() : va(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + s), n.updateOffset(t, !1), t) : va(e).local()
            }

            function za(e) {
                return -Math.round(e._d.getTimezoneOffset())
            }

            function Na() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }

            n.updateOffset = function () {
            };
            var Ja = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                Ra = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Ca(e, a) {
                var t, s, n, r, i, _, o = e, m = null;
                return Pa(e) ? o = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : u(e) || !isNaN(+e) ? (o = {}, a ? o[a] = +e : o.milliseconds = +e) : (m = Ja.exec(e)) ? (t = "-" === m[1] ? -1 : 1, o = {
                    y: 0,
                    d: B(m[2]) * t,
                    h: B(m[3]) * t,
                    m: B(m[4]) * t,
                    s: B(m[5]) * t,
                    ms: B(Oa(1e3 * m[6])) * t
                }) : (m = Ra.exec(e)) ? (t = "-" === m[1] ? -1 : 1, o = {
                    y: Ia(m[2], t),
                    M: Ia(m[3], t),
                    w: Ia(m[4], t),
                    d: Ia(m[5], t),
                    h: Ia(m[6], t),
                    m: Ia(m[7], t),
                    s: Ia(m[8], t)
                }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = va(o.from), i = va(o.to), n = r.isValid() && i.isValid() ? (i = Fa(i, r), r.isBefore(i) ? _ = Ua(r, i) : ((_ = Ua(i, r)).milliseconds = -_.milliseconds, _.months = -_.months), _) : {
                    milliseconds: 0,
                    months: 0
                }, (o = {}).ms = n.milliseconds, o.M = n.months), s = new xa(o), Pa(e) && d(e, "_locale") && (s._locale = e._locale), Pa(e) && d(e, "_isValid") && (s._isValid = e._isValid), s
            }

            function Ia(e, a) {
                var t = e && parseFloat(e.replace(",", "."));
                return (isNaN(t) ? 0 : t) * a
            }

            function Ua(e, a) {
                var t = {};
                return t.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(t.months, "M").isAfter(a) && --t.months, t.milliseconds = +a - +e.clone().add(t.months, "M"), t
            }

            function Ga(e, a) {
                return function (t, s) {
                    var n;
                    return null === s || isNaN(+s) || (b(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = t, t = s, s = n), Va(this, Ca(t, s), e), this
                }
            }

            function Va(e, a, t, s) {
                var r = a._milliseconds, i = Oa(a._days), d = Oa(a._months);
                e.isValid() && (s = null == s || s, d && He(e, q(e, "Month") + d * t), i && Z(e, "Date", q(e, "Date") + i * t), r && e._d.setTime(e._d.valueOf() + r * t), s && n.updateOffset(e, i || d))
            }

            Ca.fn = xa.prototype, Ca.invalid = function () {
                return Ca(NaN)
            };
            var Ba = Ga(1, "add"), Ka = Ga(-1, "subtract");

            function qa(e) {
                return "string" == typeof e || e instanceof String
            }

            function Za(e) {
                return D(e) || m(e) || qa(e) || u(e) || function (e) {
                    var a = r(e), t = !1;
                    return a && (t = 0 === e.filter((function (a) {
                        return !u(a) && qa(e)
                    })).length), a && t
                }(e) || function (e) {
                    var a, t, s = i(e) && !_(e), n = !1,
                        r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                    for (a = 0; a < r.length; a += 1) t = r[a], n = n || d(e, t);
                    return s && n
                }(e) || null == e
            }

            function $a(e) {
                var a, t = i(e) && !_(e), s = !1,
                    n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (a = 0; a < n.length; a += 1) s = s || d(e, n[a]);
                return t && s
            }

            function Qa(e, a) {
                if (e.date() < a.date()) return -Qa(a, e);
                var t = 12 * (a.year() - e.year()) + (a.month() - e.month()), s = e.clone().add(t, "months");
                return -(t + (a - s < 0 ? (a - s) / (s - e.clone().add(t - 1, "months")) : (a - s) / (e.clone().add(t + 1, "months") - s))) || 0
            }

            function Xa(e) {
                var a;
                return void 0 === e ? this._locale._abbr : (null != (a = _a(e)) && (this._locale = a), this)
            }

            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var et = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function (e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }));

            function at() {
                return this._locale
            }

            function tt(e, a) {
                return (e % a + a) % a
            }

            function st(e, a, t) {
                return e < 100 && e >= 0 ? new Date(e + 400, a, t) - 126227808e5 : new Date(e, a, t).valueOf()
            }

            function nt(e, a, t) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, a, t) - 126227808e5 : Date.UTC(e, a, t)
            }

            function rt(e, a) {
                return a.erasAbbrRegex(e)
            }

            function it() {
                var e, a, t = [], s = [], n = [], r = [], i = this.eras();
                for (e = 0, a = i.length; e < a; ++e) s.push(Le(i[e].name)), t.push(Le(i[e].abbr)), n.push(Le(i[e].narrow)), r.push(Le(i[e].name)), r.push(Le(i[e].abbr)), r.push(Le(i[e].narrow));
                this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function dt(e, a) {
                E(0, [e, e.length], 0, a)
            }

            function _t(e, a, t, s, n) {
                var r;
                return null == e ? ze(this, s, n).year : (a > (r = Ne(e, s, n)) && (a = r), ot.call(this, e, a, t, s, n))
            }

            function ot(e, a, t, s, n) {
                var r = Fe(e, a, t, s, n), i = Ae(r.year, 0, r.dayOfYear);
                return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
            }

            E("N", 0, 0, "eraAbbr"), E("NN", 0, 0, "eraAbbr"), E("NNN", 0, 0, "eraAbbr"), E("NNNN", 0, 0, "eraName"), E("NNNNN", 0, 0, "eraNarrow"), E("y", ["y", 1], "yo", "eraYear"), E("y", ["yy", 2], 0, "eraYear"), E("y", ["yyy", 3], 0, "eraYear"), E("y", ["yyyy", 4], 0, "eraYear"), he("N", rt), he("NN", rt), he("NNN", rt), he("NNNN", (function (e, a) {
                return a.erasNameRegex(e)
            })), he("NNNNN", (function (e, a) {
                return a.erasNarrowRegex(e)
            })), fe(["N", "NN", "NNN", "NNNN", "NNNNN"], (function (e, a, t, s) {
                var n = t._locale.erasParse(e, s, t._strict);
                n ? c(t).era = n : c(t).invalidEra = e
            })), he("y", oe), he("yy", oe), he("yyy", oe), he("yyyy", oe), he("yo", (function (e, a) {
                return a._eraYearOrdinalRegex || oe
            })), fe(["y", "yy", "yyy", "yyyy"], 0), fe(["yo"], (function (e, a, t, s) {
                var n;
                t._locale._eraYearOrdinalRegex && (n = e.match(t._locale._eraYearOrdinalRegex)), t._locale.eraYearOrdinalParse ? a[0] = t._locale.eraYearOrdinalParse(e, n) : a[0] = parseInt(e, 10)
            })), E(0, ["gg", 2], 0, (function () {
                return this.weekYear() % 100
            })), E(0, ["GG", 2], 0, (function () {
                return this.isoWeekYear() % 100
            })), dt("gggg", "weekYear"), dt("ggggg", "weekYear"), dt("GGGG", "isoWeekYear"), dt("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), U("weekYear", 1), U("isoWeekYear", 1), he("G", ue), he("g", ue), he("GG", se, X), he("gg", se, X), he("GGGG", de, ae), he("gggg", de, ae), he("GGGGG", _e, te), he("ggggg", _e, te), pe(["gggg", "ggggg", "GGGG", "GGGGG"], (function (e, a, t, s) {
                a[s.substr(0, 2)] = B(e)
            })), pe(["gg", "GG"], (function (e, a, t, s) {
                a[s] = n.parseTwoDigitYear(e)
            })), E("Q", 0, "Qo", "quarter"), J("quarter", "Q"), U("quarter", 7), he("Q", Q), fe("Q", (function (e, a) {
                a[1] = 3 * (B(e) - 1)
            })), E("D", ["DD", 2], "Do", "date"), J("date", "D"), U("date", 9), he("D", se), he("DD", se, X), he("Do", (function (e, a) {
                return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient
            })), fe(["D", "DD"], 2), fe("Do", (function (e, a) {
                a[2] = B(e.match(se)[0])
            }));
            var ut = K("Date", !0);
            E("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), U("dayOfYear", 4), he("DDD", ie), he("DDDD", ee), fe(["DDD", "DDDD"], (function (e, a, t) {
                t._dayOfYear = B(e)
            })), E("m", ["mm", 2], 0, "minute"), J("minute", "m"), U("minute", 14), he("m", se), he("mm", se, X), fe(["m", "mm"], 4);
            var mt = K("Minutes", !1);
            E("s", ["ss", 2], 0, "second"), J("second", "s"), U("second", 15), he("s", se), he("ss", se, X), fe(["s", "ss"], 5);
            var lt, Mt, ht = K("Seconds", !1);
            for (E("S", 0, 0, (function () {
                return ~~(this.millisecond() / 100)
            })), E(0, ["SS", 2], 0, (function () {
                return ~~(this.millisecond() / 10)
            })), E(0, ["SSS", 3], 0, "millisecond"), E(0, ["SSSS", 4], 0, (function () {
                return 10 * this.millisecond()
            })), E(0, ["SSSSS", 5], 0, (function () {
                return 100 * this.millisecond()
            })), E(0, ["SSSSSS", 6], 0, (function () {
                return 1e3 * this.millisecond()
            })), E(0, ["SSSSSSS", 7], 0, (function () {
                return 1e4 * this.millisecond()
            })), E(0, ["SSSSSSSS", 8], 0, (function () {
                return 1e5 * this.millisecond()
            })), E(0, ["SSSSSSSSS", 9], 0, (function () {
                return 1e6 * this.millisecond()
            })), J("millisecond", "ms"), U("millisecond", 16), he("S", ie, Q), he("SS", ie, X), he("SSS", ie, ee), lt = "SSSS"; lt.length <= 9; lt += "S") he(lt, oe);

            function ct(e, a) {
                a[6] = B(1e3 * ("0." + e))
            }

            for (lt = "S"; lt.length <= 9; lt += "S") fe(lt, ct);
            Mt = K("Milliseconds", !1), E("z", 0, 0, "zoneAbbr"), E("zz", 0, 0, "zoneName");
            var Lt = k.prototype;

            function Yt(e) {
                return e
            }

            Lt.add = Ba, Lt.calendar = function (e, a) {
                1 === arguments.length && (arguments[0] ? Za(arguments[0]) ? (e = arguments[0], a = void 0) : $a(arguments[0]) && (a = arguments[0], e = void 0) : (e = void 0, a = void 0));
                var t = e || va(), s = Fa(t, this).startOf("day"), r = n.calendarFormat(this, s) || "sameElse",
                    i = a && (S(a[r]) ? a[r].call(this, t) : a[r]);
                return this.format(i || this.localeData().calendar(r, this, va(t)))
            }, Lt.clone = function () {
                return new k(this)
            }, Lt.diff = function (e, a, t) {
                var s, n, r;
                if (!this.isValid()) return NaN;
                if (!(s = Fa(e, this)).isValid()) return NaN;
                switch (n = 6e4 * (s.utcOffset() - this.utcOffset()), a = R(a)) {
                    case"year":
                        r = Qa(this, s) / 12;
                        break;
                    case"month":
                        r = Qa(this, s);
                        break;
                    case"quarter":
                        r = Qa(this, s) / 3;
                        break;
                    case"second":
                        r = (this - s) / 1e3;
                        break;
                    case"minute":
                        r = (this - s) / 6e4;
                        break;
                    case"hour":
                        r = (this - s) / 36e5;
                        break;
                    case"day":
                        r = (this - s - n) / 864e5;
                        break;
                    case"week":
                        r = (this - s - n) / 6048e5;
                        break;
                    default:
                        r = this - s
                }
                return t ? r : V(r)
            }, Lt.endOf = function (e) {
                var a, t;
                if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (t = this._isUTC ? nt : st, e) {
                    case"year":
                        a = t(this.year() + 1, 0, 1) - 1;
                        break;
                    case"quarter":
                        a = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case"month":
                        a = t(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case"week":
                        a = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case"isoWeek":
                        a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case"day":
                    case"date":
                        a = t(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case"hour":
                        a = this._d.valueOf(), a += 36e5 - tt(a + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                        break;
                    case"minute":
                        a = this._d.valueOf(), a += 6e4 - tt(a, 6e4) - 1;
                        break;
                    case"second":
                        a = this._d.valueOf(), a += 1e3 - tt(a, 1e3) - 1
                }
                return this._d.setTime(a), n.updateOffset(this, !0), this
            }, Lt.format = function (e) {
                e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                var a = F(this, e);
                return this.localeData().postformat(a)
            }, Lt.from = function (e, a) {
                return this.isValid() && (D(e) && e.isValid() || va(e).isValid()) ? Ca({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate()
            }, Lt.fromNow = function (e) {
                return this.from(va(), e)
            }, Lt.to = function (e, a) {
                return this.isValid() && (D(e) && e.isValid() || va(e).isValid()) ? Ca({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate()
            }, Lt.toNow = function (e) {
                return this.to(va(), e)
            }, Lt.get = function (e) {
                return S(this[e = R(e)]) ? this[e]() : this
            }, Lt.invalidAt = function () {
                return c(this).overflow
            }, Lt.isAfter = function (e, a) {
                var t = D(e) ? e : va(e);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = R(a) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf())
            }, Lt.isBefore = function (e, a) {
                var t = D(e) ? e : va(e);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = R(a) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf())
            }, Lt.isBetween = function (e, a, t, s) {
                var n = D(e) ? e : va(e), r = D(a) ? a : va(a);
                return !!(this.isValid() && n.isValid() && r.isValid()) && (("(" === (s = s || "()")[0] ? this.isAfter(n, t) : !this.isBefore(n, t)) && (")" === s[1] ? this.isBefore(r, t) : !this.isAfter(r, t)))
            }, Lt.isSame = function (e, a) {
                var t, s = D(e) ? e : va(e);
                return !(!this.isValid() || !s.isValid()) && ("millisecond" === (a = R(a) || "millisecond") ? this.valueOf() === s.valueOf() : (t = s.valueOf(), this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf()))
            }, Lt.isSameOrAfter = function (e, a) {
                return this.isSame(e, a) || this.isAfter(e, a)
            }, Lt.isSameOrBefore = function (e, a) {
                return this.isSame(e, a) || this.isBefore(e, a)
            }, Lt.isValid = function () {
                return L(this)
            }, Lt.lang = et, Lt.locale = Xa, Lt.localeData = at, Lt.max = Sa, Lt.min = ba, Lt.parsingFlags = function () {
                return M({}, c(this))
            }, Lt.set = function (e, a) {
                if ("object" == typeof e) {
                    var t, s = function (e) {
                        var a, t = [];
                        for (a in e) d(e, a) && t.push({unit: a, priority: I[a]});
                        return t.sort((function (e, a) {
                            return e.priority - a.priority
                        })), t
                    }(e = C(e));
                    for (t = 0; t < s.length; t++) this[s[t].unit](e[s[t].unit])
                } else if (S(this[e = R(e)])) return this[e](a);
                return this
            }, Lt.startOf = function (e) {
                var a, t;
                if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (t = this._isUTC ? nt : st, e) {
                    case"year":
                        a = t(this.year(), 0, 1);
                        break;
                    case"quarter":
                        a = t(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case"month":
                        a = t(this.year(), this.month(), 1);
                        break;
                    case"week":
                        a = t(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case"isoWeek":
                        a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case"day":
                    case"date":
                        a = t(this.year(), this.month(), this.date());
                        break;
                    case"hour":
                        a = this._d.valueOf(), a -= tt(a + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                        break;
                    case"minute":
                        a = this._d.valueOf(), a -= tt(a, 6e4);
                        break;
                    case"second":
                        a = this._d.valueOf(), a -= tt(a, 1e3)
                }
                return this._d.setTime(a), n.updateOffset(this, !0), this
            }, Lt.subtract = Ka, Lt.toArray = function () {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, Lt.toObject = function () {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, Lt.toDate = function () {
                return new Date(this.valueOf())
            }, Lt.toISOString = function (e) {
                if (!this.isValid()) return null;
                var a = !0 !== e, t = a ? this.clone().utc() : this;
                return t.year() < 0 || t.year() > 9999 ? F(t, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", F(t, "Z")) : F(t, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, Lt.inspect = function () {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e, a, t, s = "moment", n = "";
                return this.isLocal() || (s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", n = "Z"), e = "[" + s + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", t = n + '[")]', this.format(e + a + "-MM-DD[T]HH:mm:ss.SSS" + t)
            }, "undefined" != typeof Symbol && null != Symbol.for && (Lt[Symbol.for("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">"
            }), Lt.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }, Lt.toString = function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, Lt.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
            }, Lt.valueOf = function () {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, Lt.creationData = function () {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }, Lt.eraName = function () {
                var e, a, t, s = this.localeData().eras();
                for (e = 0, a = s.length; e < a; ++e) {
                    if (t = this.clone().startOf("day").valueOf(), s[e].since <= t && t <= s[e].until) return s[e].name;
                    if (s[e].until <= t && t <= s[e].since) return s[e].name
                }
                return ""
            }, Lt.eraNarrow = function () {
                var e, a, t, s = this.localeData().eras();
                for (e = 0, a = s.length; e < a; ++e) {
                    if (t = this.clone().startOf("day").valueOf(), s[e].since <= t && t <= s[e].until) return s[e].narrow;
                    if (s[e].until <= t && t <= s[e].since) return s[e].narrow
                }
                return ""
            }, Lt.eraAbbr = function () {
                var e, a, t, s = this.localeData().eras();
                for (e = 0, a = s.length; e < a; ++e) {
                    if (t = this.clone().startOf("day").valueOf(), s[e].since <= t && t <= s[e].until) return s[e].abbr;
                    if (s[e].until <= t && t <= s[e].since) return s[e].abbr
                }
                return ""
            }, Lt.eraYear = function () {
                var e, a, t, s, r = this.localeData().eras();
                for (e = 0, a = r.length; e < a; ++e) if (t = r[e].since <= r[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since) return (this.year() - n(r[e].since).year()) * t + r[e].offset;
                return this.year()
            }, Lt.year = Oe, Lt.isLeapYear = function () {
                return G(this.year())
            }, Lt.weekYear = function (e) {
                return _t.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, Lt.isoWeekYear = function (e) {
                return _t.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, Lt.quarter = Lt.quarters = function (e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, Lt.month = je, Lt.daysInMonth = function () {
                return De(this.year(), this.month())
            }, Lt.week = Lt.weeks = function (e) {
                var a = this.localeData().week(this);
                return null == e ? a : this.add(7 * (e - a), "d")
            }, Lt.isoWeek = Lt.isoWeeks = function (e) {
                var a = ze(this, 1, 4).week;
                return null == e ? a : this.add(7 * (e - a), "d")
            }, Lt.weeksInYear = function () {
                var e = this.localeData()._week;
                return Ne(this.year(), e.dow, e.doy)
            }, Lt.weeksInWeekYear = function () {
                var e = this.localeData()._week;
                return Ne(this.weekYear(), e.dow, e.doy)
            }, Lt.isoWeeksInYear = function () {
                return Ne(this.year(), 1, 4)
            }, Lt.isoWeeksInISOWeekYear = function () {
                return Ne(this.isoWeekYear(), 1, 4)
            }, Lt.date = ut, Lt.day = Lt.days = function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var a = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function (e, a) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = a.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - a, "d")) : a
            }, Lt.weekday = function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? a : this.add(e - a, "d")
            }, Lt.isoWeekday = function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var a = function (e, a) {
                        return "string" == typeof e ? a.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? a : a - 7)
                }
                return this.day() || 7
            }, Lt.dayOfYear = function (e) {
                var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? a : this.add(e - a, "d")
            }, Lt.hour = Lt.hours = Xe, Lt.minute = Lt.minutes = mt, Lt.second = Lt.seconds = ht, Lt.millisecond = Lt.milliseconds = Mt, Lt.utcOffset = function (e, a, t) {
                var s, r = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Ea(le, e))) return this
                    } else Math.abs(e) < 16 && !t && (e *= 60);
                    return !this._isUTC && a && (s = za(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), r !== e && (!a || this._changeInProgress ? Va(this, Ca(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? r : za(this)
            }, Lt.utc = function (e) {
                return this.utcOffset(0, e)
            }, Lt.local = function (e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(za(this), "m")), this
            }, Lt.parseZone = function () {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                    var e = Ea(me, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, Lt.hasAlignedHourOffset = function (e) {
                return !!this.isValid() && (e = e ? va(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, Lt.isDST = function () {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, Lt.isLocal = function () {
                return !!this.isValid() && !this._isUTC
            }, Lt.isUtcOffset = function () {
                return !!this.isValid() && this._isUTC
            }, Lt.isUtc = Na, Lt.isUTC = Na, Lt.zoneAbbr = function () {
                return this._isUTC ? "UTC" : ""
            }, Lt.zoneName = function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, Lt.dates = T("dates accessor is deprecated. Use date instead.", ut), Lt.months = T("months accessor is deprecated. Use month instead", je), Lt.years = T("years accessor is deprecated. Use year instead", Oe), Lt.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function (e, a) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset()
            })), Lt.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function () {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e, a = {};
                return p(a, this), (a = Ta(a))._a ? (e = a._isUTC ? h(a._a) : va(a._a), this._isDSTShifted = this.isValid() && function (e, a, t) {
                    var s, n = Math.min(e.length, a.length), r = Math.abs(e.length - a.length), i = 0;
                    for (s = 0; s < n; s++) (t && e[s] !== a[s] || !t && B(e[s]) !== B(a[s])) && i++;
                    return i + r
                }(a._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
            }));
            var yt = j.prototype;

            function ft(e, a, t, s) {
                var n = _a(), r = h().set(s, a);
                return n[t](r, e)
            }

            function pt(e, a, t) {
                if (u(e) && (a = e, e = void 0), e = e || "", null != a) return ft(e, a, t, "month");
                var s, n = [];
                for (s = 0; s < 12; s++) n[s] = ft(e, s, t, "month");
                return n
            }

            function kt(e, a, t, s) {
                "boolean" == typeof e ? (u(a) && (t = a, a = void 0), a = a || "") : (t = a = e, e = !1, u(a) && (t = a, a = void 0), a = a || "");
                var n, r = _a(), i = e ? r._week.dow : 0, d = [];
                if (null != t) return ft(a, (t + i) % 7, s, "day");
                for (n = 0; n < 7; n++) d[n] = ft(a, (n + i) % 7, s, "day");
                return d
            }

            yt.calendar = function (e, a, t) {
                var s = this._calendar[e] || this._calendar.sameElse;
                return S(s) ? s.call(a, t) : s
            }, yt.longDateFormat = function (e) {
                var a = this._longDateFormat[e], t = this._longDateFormat[e.toUpperCase()];
                return a || !t ? a : (this._longDateFormat[e] = t.match(P).map((function (e) {
                    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                })).join(""), this._longDateFormat[e])
            }, yt.invalidDate = function () {
                return this._invalidDate
            }, yt.ordinal = function (e) {
                return this._ordinal.replace("%d", e)
            }, yt.preparse = Yt, yt.postformat = Yt, yt.relativeTime = function (e, a, t, s) {
                var n = this._relativeTime[t];
                return S(n) ? n(e, a, t, s) : n.replace(/%d/i, e)
            }, yt.pastFuture = function (e, a) {
                var t = this._relativeTime[e > 0 ? "future" : "past"];
                return S(t) ? t(a) : t.replace(/%s/i, a)
            }, yt.set = function (e) {
                var a, t;
                for (t in e) d(e, t) && (S(a = e[t]) ? this[t] = a : this["_" + t] = a);
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, yt.eras = function (e, a) {
                var t, s, r, i = this._eras || _a("en")._eras;
                for (t = 0, s = i.length; t < s; ++t) {
                    switch (typeof i[t].since) {
                        case"string":
                            r = n(i[t].since).startOf("day"), i[t].since = r.valueOf()
                    }
                    switch (typeof i[t].until) {
                        case"undefined":
                            i[t].until = 1 / 0;
                            break;
                        case"string":
                            r = n(i[t].until).startOf("day").valueOf(), i[t].until = r.valueOf()
                    }
                }
                return i
            }, yt.erasParse = function (e, a, t) {
                var s, n, r, i, d, _ = this.eras();
                for (e = e.toUpperCase(), s = 0, n = _.length; s < n; ++s) if (r = _[s].name.toUpperCase(), i = _[s].abbr.toUpperCase(), d = _[s].narrow.toUpperCase(), t) switch (a) {
                    case"N":
                    case"NN":
                    case"NNN":
                        if (i === e) return _[s];
                        break;
                    case"NNNN":
                        if (r === e) return _[s];
                        break;
                    case"NNNNN":
                        if (d === e) return _[s]
                } else if ([r, i, d].indexOf(e) >= 0) return _[s]
            }, yt.erasConvertYear = function (e, a) {
                var t = e.since <= e.until ? 1 : -1;
                return void 0 === a ? n(e.since).year() : n(e.since).year() + (a - e.offset) * t
            }, yt.erasAbbrRegex = function (e) {
                return d(this, "_erasAbbrRegex") || it.call(this), e ? this._erasAbbrRegex : this._erasRegex
            }, yt.erasNameRegex = function (e) {
                return d(this, "_erasNameRegex") || it.call(this), e ? this._erasNameRegex : this._erasRegex
            }, yt.erasNarrowRegex = function (e) {
                return d(this, "_erasNarrowRegex") || it.call(this), e ? this._erasNarrowRegex : this._erasRegex
            }, yt.months = function (e, a) {
                return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || we).test(a) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
            }, yt.monthsShort = function (e, a) {
                return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[we.test(a) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, yt.monthsParse = function (e, a, t) {
                var s, n, r;
                if (this._monthsParseExact) return Se.call(this, e, a, t);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
                    if (n = h([2e3, s]), t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), t || this._monthsParse[s] || (r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), t && "MMMM" === a && this._longMonthsParse[s].test(e)) return s;
                    if (t && "MMM" === a && this._shortMonthsParse[s].test(e)) return s;
                    if (!t && this._monthsParse[s].test(e)) return s
                }
            }, yt.monthsRegex = function (e) {
                return this._monthsParseExact ? (d(this, "_monthsRegex") || xe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = be), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, yt.monthsShortRegex = function (e) {
                return this._monthsParseExact ? (d(this, "_monthsRegex") || xe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = ve), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, yt.week = function (e) {
                return ze(e, this._week.dow, this._week.doy).week
            }, yt.firstDayOfYear = function () {
                return this._week.doy
            }, yt.firstDayOfWeek = function () {
                return this._week.dow
            }, yt.weekdays = function (e, a) {
                var t = r(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(a) ? "format" : "standalone"];
                return !0 === e ? Je(t, this._week.dow) : e ? t[e.day()] : t
            }, yt.weekdaysMin = function (e) {
                return !0 === e ? Je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, yt.weekdaysShort = function (e) {
                return !0 === e ? Je(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, yt.weekdaysParse = function (e, a, t) {
                var s, n, r;
                if (this._weekdaysParseExact) return Be.call(this, e, a, t);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
                    if (n = h([2e3, 1]).day(s), t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), t && "dddd" === a && this._fullWeekdaysParse[s].test(e)) return s;
                    if (t && "ddd" === a && this._shortWeekdaysParse[s].test(e)) return s;
                    if (t && "dd" === a && this._minWeekdaysParse[s].test(e)) return s;
                    if (!t && this._weekdaysParse[s].test(e)) return s
                }
            }, yt.weekdaysRegex = function (e) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ke.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Ue), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, yt.weekdaysShortRegex = function (e) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ke.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ge), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, yt.weekdaysMinRegex = function (e) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ke.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ve), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, yt.isPM = function (e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, yt.meridiem = function (e, a, t) {
                return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM"
            }, ia("en", {
                eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC"}],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var a = e % 10;
                    return e + (1 === B(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                }
            }), n.lang = T("moment.lang is deprecated. Use moment.locale instead.", ia), n.langData = T("moment.langData is deprecated. Use moment.localeData instead.", _a);
            var Dt = Math.abs;

            function gt(e, a, t, s) {
                var n = Ca(a, t);
                return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble()
            }

            function Tt(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function wt(e) {
                return 4800 * e / 146097
            }

            function vt(e) {
                return 146097 * e / 4800
            }

            function bt(e) {
                return function () {
                    return this.as(e)
                }
            }

            var St = bt("ms"), Ht = bt("s"), jt = bt("m"), xt = bt("h"), Pt = bt("d"), Ot = bt("w"), Wt = bt("M"),
                At = bt("Q"), Et = bt("y");

            function Ft(e) {
                return function () {
                    return this.isValid() ? this._data[e] : NaN
                }
            }

            var zt = Ft("milliseconds"), Nt = Ft("seconds"), Jt = Ft("minutes"), Rt = Ft("hours"), Ct = Ft("days"),
                It = Ft("months"), Ut = Ft("years"), Gt = Math.round,
                Vt = {ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11};

            function Bt(e, a, t, s, n) {
                return n.relativeTime(a || 1, !!t, e, s)
            }

            var Kt = Math.abs;

            function qt(e) {
                return (e > 0) - (e < 0) || +e
            }

            function Zt() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, a, t, s, n, r, i, d, _ = Kt(this._milliseconds) / 1e3, o = Kt(this._days), u = Kt(this._months),
                    m = this.asSeconds();
                return m ? (e = V(_ / 60), a = V(e / 60), _ %= 60, e %= 60, t = V(u / 12), u %= 12, s = _ ? _.toFixed(3).replace(/\.?0+$/, "") : "", n = m < 0 ? "-" : "", r = qt(this._months) !== qt(m) ? "-" : "", i = qt(this._days) !== qt(m) ? "-" : "", d = qt(this._milliseconds) !== qt(m) ? "-" : "", n + "P" + (t ? r + t + "Y" : "") + (u ? r + u + "M" : "") + (o ? i + o + "D" : "") + (a || e || _ ? "T" : "") + (a ? d + a + "H" : "") + (e ? d + e + "M" : "") + (_ ? d + s + "S" : "")) : "P0D"
            }

            var $t = xa.prototype;
            return $t.isValid = function () {
                return this._isValid
            }, $t.abs = function () {
                var e = this._data;
                return this._milliseconds = Dt(this._milliseconds), this._days = Dt(this._days), this._months = Dt(this._months), e.milliseconds = Dt(e.milliseconds), e.seconds = Dt(e.seconds), e.minutes = Dt(e.minutes), e.hours = Dt(e.hours), e.months = Dt(e.months), e.years = Dt(e.years), this
            }, $t.add = function (e, a) {
                return gt(this, e, a, 1)
            }, $t.subtract = function (e, a) {
                return gt(this, e, a, -1)
            }, $t.as = function (e) {
                if (!this.isValid()) return NaN;
                var a, t, s = this._milliseconds;
                if ("month" === (e = R(e)) || "quarter" === e || "year" === e) switch (a = this._days + s / 864e5, t = this._months + wt(a), e) {
                    case"month":
                        return t;
                    case"quarter":
                        return t / 3;
                    case"year":
                        return t / 12
                } else switch (a = this._days + Math.round(vt(this._months)), e) {
                    case"week":
                        return a / 7 + s / 6048e5;
                    case"day":
                        return a + s / 864e5;
                    case"hour":
                        return 24 * a + s / 36e5;
                    case"minute":
                        return 1440 * a + s / 6e4;
                    case"second":
                        return 86400 * a + s / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * a) + s;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, $t.asMilliseconds = St, $t.asSeconds = Ht, $t.asMinutes = jt, $t.asHours = xt, $t.asDays = Pt, $t.asWeeks = Ot, $t.asMonths = Wt, $t.asQuarters = At, $t.asYears = Et, $t.valueOf = function () {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * B(this._months / 12) : NaN
            }, $t._bubble = function () {
                var e, a, t, s, n, r = this._milliseconds, i = this._days, d = this._months, _ = this._data;
                return r >= 0 && i >= 0 && d >= 0 || r <= 0 && i <= 0 && d <= 0 || (r += 864e5 * Tt(vt(d) + i), i = 0, d = 0), _.milliseconds = r % 1e3, e = V(r / 1e3), _.seconds = e % 60, a = V(e / 60), _.minutes = a % 60, t = V(a / 60), _.hours = t % 24, i += V(t / 24), n = V(wt(i)), d += n, i -= Tt(vt(n)), s = V(d / 12), d %= 12, _.days = i, _.months = d, _.years = s, this
            }, $t.clone = function () {
                return Ca(this)
            }, $t.get = function (e) {
                return e = R(e), this.isValid() ? this[e + "s"]() : NaN
            }, $t.milliseconds = zt, $t.seconds = Nt, $t.minutes = Jt, $t.hours = Rt, $t.days = Ct, $t.weeks = function () {
                return V(this.days() / 7)
            }, $t.months = It, $t.years = Ut, $t.humanize = function (e, a) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t, s, n = !1, r = Vt;
                return "object" == typeof e && (a = e, e = !1), "boolean" == typeof e && (n = e), "object" == typeof a && (r = Object.assign({}, Vt, a), null != a.s && null == a.ss && (r.ss = a.s - 1)), t = this.localeData(), s = function (e, a, t, s) {
                    var n = Ca(e).abs(), r = Gt(n.as("s")), i = Gt(n.as("m")), d = Gt(n.as("h")), _ = Gt(n.as("d")),
                        o = Gt(n.as("M")), u = Gt(n.as("w")), m = Gt(n.as("y")),
                        l = r <= t.ss && ["s", r] || r < t.s && ["ss", r] || i <= 1 && ["m"] || i < t.m && ["mm", i] || d <= 1 && ["h"] || d < t.h && ["hh", d] || _ <= 1 && ["d"] || _ < t.d && ["dd", _];
                    return null != t.w && (l = l || u <= 1 && ["w"] || u < t.w && ["ww", u]), (l = l || o <= 1 && ["M"] || o < t.M && ["MM", o] || m <= 1 && ["y"] || ["yy", m])[2] = a, l[3] = +e > 0, l[4] = s, Bt.apply(null, l)
                }(this, !n, r, t), n && (s = t.pastFuture(+this, s)), t.postformat(s)
            }, $t.toISOString = Zt, $t.toString = Zt, $t.toJSON = Zt, $t.locale = Xa, $t.localeData = at, $t.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Zt), $t.lang = et, E("X", 0, 0, "unix"), E("x", 0, 0, "valueOf"), he("x", ue), he("X", /[+-]?\d+(\.\d{1,3})?/), fe("X", (function (e, a, t) {
                t._d = new Date(1e3 * parseFloat(e))
            })), fe("x", (function (e, a, t) {
                t._d = new Date(B(e))
            })),
//! moment.js
                n.version = "2.29.1", a = va, n.fn = Lt, n.min = function () {
                var e = [].slice.call(arguments, 0);
                return Ha("isBefore", e)
            }, n.max = function () {
                var e = [].slice.call(arguments, 0);
                return Ha("isAfter", e)
            }, n.now = function () {
                return Date.now ? Date.now() : +new Date
            }, n.utc = h, n.unix = function (e) {
                return va(1e3 * e)
            }, n.months = function (e, a) {
                return pt(e, a, "months")
            }, n.isDate = m, n.locale = ia, n.invalid = Y, n.duration = Ca, n.isMoment = D, n.weekdays = function (e, a, t) {
                return kt(e, a, t, "weekdays")
            }, n.parseZone = function () {
                return va.apply(null, arguments).parseZone()
            }, n.localeData = _a, n.isDuration = Pa, n.monthsShort = function (e, a) {
                return pt(e, a, "monthsShort")
            }, n.weekdaysMin = function (e, a, t) {
                return kt(e, a, t, "weekdaysMin")
            }, n.defineLocale = da, n.updateLocale = function (e, a) {
                if (null != a) {
                    var t, s, n = ea;
                    null != aa[e] && null != aa[e].parentLocale ? aa[e].set(H(aa[e]._config, a)) : (null != (s = ra(e)) && (n = s._config), a = H(n, a), null == s && (a.abbr = e), (t = new j(a)).parentLocale = aa[e], aa[e] = t), ia(e)
                } else null != aa[e] && (null != aa[e].parentLocale ? (aa[e] = aa[e].parentLocale, e === ia() && ia(e)) : null != aa[e] && delete aa[e]);
                return aa[e]
            }, n.locales = function () {
                return w(aa)
            }, n.weekdaysShort = function (e, a, t) {
                return kt(e, a, t, "weekdaysShort")
            }, n.normalizeUnits = R, n.relativeTimeRounding = function (e) {
                return void 0 === e ? Gt : "function" == typeof e && (Gt = e, !0)
            }, n.relativeTimeThreshold = function (e, a) {
                return void 0 !== Vt[e] && (void 0 === a ? Vt[e] : (Vt[e] = a, "s" === e && (Vt.ss = a - 1), !0))
            }, n.calendarFormat = function (e, a) {
                var t = e.diff(a, "days", !0);
                return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
            }, n.prototype = Lt, n.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, n
        }()
    }).call(this, t(18)(e))
}, , , , , , , , , , , , , , , , , , function (e, a) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, , , , , , , , , , , , , , , , , , , , , , , function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (e) {
                return /^nm$/i.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[MÃ´re om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "Ù¡", 2: "Ù¢", 3: "Ù£", 4: "Ù¤", 5: "Ù¥", 6: "Ù¦", 7: "Ù§", 8: "Ù¨", 9: "Ù©", 0: "Ù "}, t = {
                "Ù¡": "1",
                "Ù¢": "2",
                "Ù£": "3",
                "Ù¤": "4",
                "Ù¥": "5",
                "Ù¦": "6",
                "Ù§": "7",
                "Ù¨": "8",
                "Ù©": "9",
                "Ù ": "0"
            }, s = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, n = {
                s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
            }, r = function (e) {
                return function (a, t, r, i) {
                    var d = s(a), _ = n[e][s(a)];
                    return 2 === d && (_ = _[t ? 0 : 1]), _.replace(/%d/i, a)
                }
            },
            i = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function (e) {
                return "Ù…" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function (e) {
                return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, (function (e) {
                    return t[e]
                })).replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                })).replace(/,/g, "ØŒ")
            },
            week: {dow: 6, doy: 12}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, t = {
                s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
            }, s = function (e) {
                return function (s, n, r, i) {
                    var d = a(s), _ = t[e][a(s)];
                    return 2 === d && (_ = _[n ? 0 : 1]), _.replace(/%d/i, s)
                }
            },
            n = ["Ø¬Ø§Ù†ÙÙŠ", "ÙÙŠÙØ±ÙŠ", "Ù…Ø§Ø±Ø³", "Ø£ÙØ±ÙŠÙ„", "Ù…Ø§ÙŠ", "Ø¬ÙˆØ§Ù†", "Ø¬ÙˆÙŠÙ„ÙŠØ©", "Ø£ÙˆØª", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar-dz", {
            months: n,
            monthsShort: n,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function (e) {
                return "Ù…" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: s("s"),
                ss: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            postformat: function (e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {dow: 0, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ar-kw", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {dow: 0, doy: 12}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, t = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, s = {
                s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
            }, n = function (e) {
                return function (a, n, r, i) {
                    var d = t(a), _ = s[e][t(a)];
                    return 2 === d && (_ = _[n ? 0 : 1]), _.replace(/%d/i, a)
                }
            },
            r = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar-ly", {
            months: r,
            monthsShort: r,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function (e) {
                return "Ù…" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: n("s"),
                ss: n("s"),
                m: n("m"),
                mm: n("m"),
                h: n("h"),
                hh: n("h"),
                d: n("d"),
                dd: n("d"),
                M: n("M"),
                MM: n("M"),
                y: n("y"),
                yy: n("y")
            },
            preparse: function (e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                })).replace(/,/g, "ØŒ")
            },
            week: {dow: 6, doy: 12}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ar-ma", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø§Ø­Ø¯_Ø§Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "Ù¡", 2: "Ù¢", 3: "Ù£", 4: "Ù¤", 5: "Ù¥", 6: "Ù¦", 7: "Ù§", 8: "Ù¨", 9: "Ù©", 0: "Ù "}, t = {
            "Ù¡": "1",
            "Ù¢": "2",
            "Ù£": "3",
            "Ù¤": "4",
            "Ù¥": "5",
            "Ù¦": "6",
            "Ù§": "7",
            "Ù¨": "8",
            "Ù©": "9",
            "Ù ": "0"
        };
        e.defineLocale("ar-sa", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function (e) {
                return "Ù…" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            preparse: function (e) {
                return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, (function (e) {
                    return t[e]
                })).replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                })).replace(/,/g, "ØŒ")
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ar-tn", {
            months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-Ã¼ncÃ¼",
            4: "-Ã¼ncÃ¼",
            100: "-Ã¼ncÃ¼",
            6: "-ncÄ±",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-Ä±ncÄ±",
            90: "-Ä±ncÄ±"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
            weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
            weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
                lastDay: "[dÃ¼nÉ™n] LT",
                lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s É™vvÉ™l",
                s: "bir neÃ§É™ saniyÉ™",
                ss: "%d saniyÉ™",
                m: "bir dÉ™qiqÉ™",
                mm: "%d dÉ™qiqÉ™",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
            isPM: function (e) {
                return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "gecÉ™" : e < 12 ? "sÉ™hÉ™r" : e < 17 ? "gÃ¼ndÃ¼z" : "axÅŸam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
            ordinal: function (e) {
                if (0 === e) return e + "-Ä±ncÄ±";
                var t = e % 10;
                return e + (a[t] || a[e % 100 - t] || a[e >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t) {
            var s, n;
            return "m" === t ? a ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ" : "h" === t ? a ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ" : e + " " + (s = +e, n = {
                ss: a ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                mm: a ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",
                hh: a ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",
                dd: "Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",
                MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",
                yy: "Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"
            }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? n[1] : n[2])
        }

        e.defineLocale("be", {
            months: {
                format: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"),
                standalone: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_")
            },
            monthsShort: "ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
            weekdays: {
                format: "Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                standalone: "Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                isFormat: /\[ ?[Ð£ÑƒÑž] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/
            },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ð³.",
                LLL: "D MMMM YYYY Ð³., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
            },
            calendar: {
                sameDay: "[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
                nextDay: "[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",
                lastDay: "[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",
                nextWeek: function () {
                    return "[Ð£] dddd [Ñž] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¿Ñ€Ð°Ð· %s",
                past: "%s Ñ‚Ð°Ð¼Ñƒ",
                s: "Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "Ð´Ð·ÐµÐ½ÑŒ",
                dd: a,
                M: "Ð¼ÐµÑÑÑ†",
                MM: a,
                y: "Ð³Ð¾Ð´",
                yy: a
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
            isPM: function (e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ñ‹" : e < 12 ? "Ñ€Ð°Ð½Ñ–Ñ†Ñ‹" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð°Ñ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-Ñ‹" : e + "-Ñ–";
                    case"D":
                        return e + "-Ð³Ð°";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("bg", {
            months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "ÑÐ½Ñƒ_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
                nextWeek: "dddd [Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[ÐœÐ¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[ÐœÐ¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "ÑÐ»ÐµÐ´ %s",
                past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",
                s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                h: "Ñ‡Ð°Ñ",
                hh: "%d Ñ‡Ð°ÑÐ°",
                d: "Ð´ÐµÐ½",
                dd: "%d Ð´ÐµÐ½Ð°",
                w: "ÑÐµÐ´Ð¼Ð¸Ñ†Ð°",
                ww: "%d ÑÐµÐ´Ð¼Ð¸Ñ†Ð¸",
                M: "Ð¼ÐµÑÐµÑ†",
                MM: "%d Ð¼ÐµÑÐµÑ†Ð°",
                y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
                yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function (e) {
                var a = e % 10, t = e % 100;
                return 0 === e ? e + "-ÐµÐ²" : 0 === t ? e + "-ÐµÐ½" : t > 10 && t < 20 ? e + "-Ñ‚Ð¸" : 1 === a ? e + "-Ð²Ð¸" : 2 === a ? e + "-Ñ€Ð¸" : 7 === a || 8 === a ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des".split("_"),
            weekdays: "Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lÉ›rÉ›] LT",
                nextDay: "[Sini lÉ›rÉ›] LT",
                nextWeek: "dddd [don lÉ›rÉ›] LT",
                lastDay: "[Kunu lÉ›rÉ›] LT",
                lastWeek: "dddd [tÉ›mÉ›nen lÉ›rÉ›] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kÉ”nÉ”",
                past: "a bÉ› %s bÉ”",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lÉ›rÉ› kelen",
                hh: "lÉ›rÉ› %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à§§", 2: "à§¨", 3: "à§©", 4: "à§ª", 5: "à§«", 6: "à§¬", 7: "à§­", 8: "à§®", 9: "à§¯", 0: "à§¦"},
            t = {
                "à§§": "1",
                "à§¨": "2",
                "à§©": "3",
                "à§ª": "4",
                "à§«": "5",
                "à§¬": "6",
                "à§­": "7",
                "à§®": "8",
                "à§¯": "9",
                "à§¦": "0"
            };
        e.defineLocale("bn", {
            months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à¦¿_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
            monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬à§à¦°à§_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"),
            weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
            weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            longDateFormat: {
                LT: "A h:mm à¦¸à¦®à§Ÿ",
                LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
            },
            calendar: {
                sameDay: "[à¦†à¦œ] LT",
                nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
                lastWeek: "[à¦—à¦¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¦ªà¦°à§‡",
                past: "%s à¦†à¦—à§‡",
                s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
                hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
                d: "à¦à¦• à¦¦à¦¿à¦¨",
                dd: "%d à¦¦à¦¿à¦¨",
                M: "à¦à¦• à¦®à¦¾à¦¸",
                MM: "%d à¦®à¦¾à¦¸",
                y: "à¦à¦• à¦¬à¦›à¦°",
                yy: "%d à¦¬à¦›à¦°"
            },
            preparse: function (e) {
                return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === a && e >= 4 || "à¦¦à§à¦ªà§à¦°" === a && e < 5 || "à¦¬à¦¿à¦•à¦¾à¦²" === a ? e + 12 : e
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à¦°à¦¾à¦¤" : e < 10 ? "à¦¸à¦•à¦¾à¦²" : e < 17 ? "à¦¦à§à¦ªà§à¦°" : e < 20 ? "à¦¬à¦¿à¦•à¦¾à¦²" : "à¦°à¦¾à¦¤"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à§§", 2: "à§¨", 3: "à§©", 4: "à§ª", 5: "à§«", 6: "à§¬", 7: "à§­", 8: "à§®", 9: "à§¯", 0: "à§¦"},
            t = {
                "à§§": "1",
                "à§¨": "2",
                "à§©": "3",
                "à§ª": "4",
                "à§«": "5",
                "à§¬": "6",
                "à§­": "7",
                "à§®": "8",
                "à§¯": "9",
                "à§¦": "0"
            };
        e.defineLocale("bn-bd", {
            months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à¦¿_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
            monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬à§à¦°à§_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"),
            weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
            weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            longDateFormat: {
                LT: "A h:mm à¦¸à¦®à§Ÿ",
                LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
            },
            calendar: {
                sameDay: "[à¦†à¦œ] LT",
                nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
                lastWeek: "[à¦—à¦¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¦ªà¦°à§‡",
                past: "%s à¦†à¦—à§‡",
                s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
                hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
                d: "à¦à¦• à¦¦à¦¿à¦¨",
                dd: "%d à¦¦à¦¿à¦¨",
                M: "à¦à¦• à¦®à¦¾à¦¸",
                MM: "%d à¦®à¦¾à¦¸",
                y: "à¦à¦• à¦¬à¦›à¦°",
                yy: "%d à¦¬à¦›à¦°"
            },
            preparse: function (e) {
                return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à¦°à¦¾à¦¤|à¦­à§‹à¦°|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦¸à¦¨à§à¦§à§à¦¯à¦¾|à¦°à¦¾à¦¤/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === a ? e < 4 ? e : e + 12 : "à¦­à§‹à¦°" === a || "à¦¸à¦•à¦¾à¦²" === a ? e : "à¦¦à§à¦ªà§à¦°" === a ? e >= 3 ? e : e + 12 : "à¦¬à¦¿à¦•à¦¾à¦²" === a || "à¦¸à¦¨à§à¦§à§à¦¯à¦¾" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à¦°à¦¾à¦¤" : e < 6 ? "à¦­à§‹à¦°" : e < 12 ? "à¦¸à¦•à¦¾à¦²" : e < 15 ? "à¦¦à§à¦ªà§à¦°" : e < 18 ? "à¦¬à¦¿à¦•à¦¾à¦²" : e < 20 ? "à¦¸à¦¨à§à¦§à§à¦¯à¦¾" : "à¦°à¦¾à¦¤"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à¼¡", 2: "à¼¢", 3: "à¼£", 4: "à¼¤", 5: "à¼¥", 6: "à¼¦", 7: "à¼§", 8: "à¼¨", 9: "à¼©", 0: "à¼ "},
            t = {
                "à¼¡": "1",
                "à¼¢": "2",
                "à¼£": "3",
                "à¼¤": "4",
                "à¼¥": "5",
                "à¼¦": "6",
                "à¼§": "7",
                "à¼¨": "8",
                "à¼©": "9",
                "à¼ ": "0"
            };
        e.defineLocale("bo", {
            months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
            monthsShort: "à½Ÿà¾³à¼‹1_à½Ÿà¾³à¼‹2_à½Ÿà¾³à¼‹3_à½Ÿà¾³à¼‹4_à½Ÿà¾³à¼‹5_à½Ÿà¾³à¼‹6_à½Ÿà¾³à¼‹7_à½Ÿà¾³à¼‹8_à½Ÿà¾³à¼‹9_à½Ÿà¾³à¼‹10_à½Ÿà¾³à¼‹11_à½Ÿà¾³à¼‹12".split("_"),
            monthsShortRegex: /^(à½Ÿà¾³à¼‹\d{1,2})/,
            monthsParseExact: !0,
            weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            weekdaysMin: "à½‰à½²_à½Ÿà¾³_à½˜à½²à½‚_à½£à¾·à½‚_à½•à½´à½¢_à½¦à½„à½¦_à½¦à¾¤à½ºà½“".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT",
                nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT",
                nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",
                lastDay: "[à½à¼‹à½¦à½„] LT",
                lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à½£à¼‹",
                past: "%s à½¦à¾”à½“à¼‹à½£",
                s: "à½£à½˜à¼‹à½¦à½„",
                ss: "%d à½¦à¾à½¢à¼‹à½†à¼",
                m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",
                mm: "%d à½¦à¾à½¢à¼‹à½˜",
                h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
                hh: "%d à½†à½´à¼‹à½šà½¼à½‘",
                d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",
                dd: "%d à½‰à½²à½“à¼‹",
                M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",
                MM: "%d à½Ÿà¾³à¼‹à½–",
                y: "à½£à½¼à¼‹à½‚à½…à½²à½‚",
                yy: "%d à½£à½¼"
            },
            preparse: function (e) {
                return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à½˜à½šà½“à¼‹à½˜à½¼" === a && e >= 4 || "à½‰à½²à½“à¼‹à½‚à½´à½„" === a && e < 5 || "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" === a ? e + 12 : e
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à½˜à½šà½“à¼‹à½˜à½¼" : e < 10 ? "à½žà½¼à½‚à½¦à¼‹à½€à½¦" : e < 17 ? "à½‰à½²à½“à¼‹à½‚à½´à½„" : e < 20 ? "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" : "à½˜à½šà½“à¼‹à½˜à½¼"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t) {
            return e + " " + function (e, a) {
                return 2 === a ? function (e) {
                    var a = {m: "v", b: "v", d: "z"};
                    return void 0 === a[e.charAt(0)] ? e : a[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({mm: "munutenn", MM: "miz", dd: "devezh"}[t], e)
        }

        var t = [/^gen/i, /^c[Ê¼\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
            s = /^(genver|c[Ê¼\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[Ê¼\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            n = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        e.defineLocale("br", {
            months: "Genver_CÊ¼hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_CÊ¼hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_MercÊ¼her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParse: n,
            fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[Ê¼\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
            shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
            minWeekdaysParse: n,
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(genver|c[Ê¼\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
            monthsShortStrictRegex: /^(gen|c[Ê¼\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            monthsParse: t,
            longMonthsParse: t,
            shortMonthsParse: t,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY HH:mm",
                LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[WarcÊ¼hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[DecÊ¼h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s Ê¼zo",
                s: "un nebeud segondennoÃ¹",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: a,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: a,
                M: "ur miz",
                MM: a,
                y: "ur bloaz",
                yy: function (e) {
                    switch (function e(a) {
                        return a > 9 ? e(a % 10) : a
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
            ordinal: function (e) {
                return e + (1 === e ? "aÃ±" : "vet")
            },
            week: {dow: 1, doy: 4},
            meridiemParse: /a.m.|g.m./,
            isPM: function (e) {
                return "g.m." === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "a.m." : "g.m."
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t) {
            var s = e + " ";
            switch (t) {
                case"ss":
                    return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case"m":
                    return a ? "jedna minuta" : "jedne minute";
                case"mm":
                    return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return a ? "jedan sat" : "jednog sata";
                case"hh":
                    return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return s += 1 === e ? "dan" : "dana";
                case"MM":
                    return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juÄer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "dan",
                dd: a,
                M: "mjesec",
                MM: a,
                y: "godinu",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de marÃ§_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._marÃ§_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextDay: function () {
                    return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "d'aquÃ­ %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
            ordinal: function (e, a) {
                var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨";
                return "w" !== a && "W" !== a || (t = "a"), e + t
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
            t = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
            s = [/^led/i, /^Ãºno/i, /^bÅ™e/i, /^dub/i, /^kvÄ›/i, /^(Ävn|Äerven$|Äervna)/i, /^(Ävc|Äervenec|Äervence)/i, /^srp/i, /^zÃ¡Å™/i, /^Å™Ã­j/i, /^lis/i, /^pro/i],
            n = /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i;

        function r(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function i(e, a, t, s) {
            var n = e + " ";
            switch (t) {
                case"s":
                    return a || s ? "pÃ¡r sekund" : "pÃ¡r sekundami";
                case"ss":
                    return a || s ? n + (r(e) ? "sekundy" : "sekund") : n + "sekundami";
                case"m":
                    return a ? "minuta" : s ? "minutu" : "minutou";
                case"mm":
                    return a || s ? n + (r(e) ? "minuty" : "minut") : n + "minutami";
                case"h":
                    return a ? "hodina" : s ? "hodinu" : "hodinou";
                case"hh":
                    return a || s ? n + (r(e) ? "hodiny" : "hodin") : n + "hodinami";
                case"d":
                    return a || s ? "den" : "dnem";
                case"dd":
                    return a || s ? n + (r(e) ? "dny" : "dnÃ­") : n + "dny";
                case"M":
                    return a || s ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
                case"MM":
                    return a || s ? n + (r(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : n + "mÄ›sÃ­ci";
                case"y":
                    return a || s ? "rok" : "rokem";
                case"yy":
                    return a || s ? n + (r(e) ? "roky" : "let") : n + "lety"
            }
        }

        e.defineLocale("cs", {
            months: a,
            monthsShort: t,
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
            weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT", nextDay: "[zÃ­tra v] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve stÅ™edu v] LT";
                        case 4:
                            return "[ve Ätvrtek v] LT";
                        case 5:
                            return "[v pÃ¡tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                }, lastDay: "[vÄera v] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[minulÃ©] dddd [v] LT";
                        case 3:
                            return "[minulou stÅ™edu v] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pÅ™ed %s",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("cv", {
            months: "ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),
            monthsShort: "ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),
            weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),
            weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"),
            weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]",
                LLL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm",
                LLLL: "dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm"
            },
            calendar: {
                sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                lastDay: "[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                nextWeek: "[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return e + (/ÑÐµÑ…ÐµÑ‚$/i.exec(e) ? "Ñ€ÐµÐ½" : /Ò«ÑƒÐ»$/i.exec(e) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½")
                },
                past: "%s ÐºÐ°ÑÐ»Ð»Ð°",
                s: "Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                ss: "%d Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                m: "Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                h: "Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚",
                hh: "%d ÑÐµÑ…ÐµÑ‚",
                d: "Ð¿Ó—Ñ€ ÐºÑƒÐ½",
                dd: "%d ÐºÑƒÐ½",
                M: "Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…",
                MM: "%d ÑƒÐ¹Ó‘Ñ…",
                y: "Ð¿Ó—Ñ€ Ò«ÑƒÐ»",
                yy: "%d Ò«ÑƒÐ»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/,
            ordinal: "%d-Ð¼Ó—Ñˆ",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn Ã´l",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
                var a = "";
                return e > 20 ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + a
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
            weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
            weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "pÃ¥ dddd [kl.] LT",
                lastDay: "[i gÃ¥r kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "fÃ¥ sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en mÃ¥ned",
                MM: "%d mÃ¥neder",
                y: "et Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return a ? n[t][0] : n[t][1]
        }

        e.defineLocale("de", {
            months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: a,
                mm: "%d Minuten",
                h: a,
                hh: "%d Stunden",
                d: a,
                dd: a,
                w: a,
                ww: "%d Wochen",
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return a ? n[t][0] : n[t][1]
        }

        e.defineLocale("de-at", {
            months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: a,
                mm: "%d Minuten",
                h: a,
                hh: "%d Stunden",
                d: a,
                dd: a,
                w: a,
                ww: "%d Wochen",
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return a ? n[t][0] : n[t][1]
        }

        e.defineLocale("de-ch", {
            months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: a,
                mm: "%d Minuten",
                h: a,
                hh: "%d Stunden",
                d: a,
                dd: a,
                w: a,
                ww: "%d Wochen",
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = ["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©", "ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©", "Þ‰Þ§ÞƒÞ¨Þ—Þª", "Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª", "Þ‰Þ­", "Þ–Þ«Þ‚Þ°", "Þ–ÞªÞÞ¦Þ‡Þ¨", "Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª", "ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª", "Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"],
            t = ["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦", "Þ€Þ¯Þ‰Þ¦", "Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦", "Þ„ÞªÞ‹Þ¦", "Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨", "Þ€ÞªÞ†ÞªÞƒÞª", "Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"];
        e.defineLocale("dv", {
            months: a,
            monthsShort: a,
            weekdays: t,
            weekdaysShort: t,
            weekdaysMin: "Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/,
            isPM: function (e) {
                return "Þ‰ÞŠ" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "Þ‰Þ†" : "Þ‰ÞŠ"
            },
            calendar: {
                sameDay: "[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT",
                nextDay: "[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT",
                nextWeek: "dddd LT",
                lastDay: "[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT",
                lastWeek: "[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s",
                past: "Þ†ÞªÞƒÞ¨Þ‚Þ° %s",
                s: "ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°",
                ss: "d% ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞª",
                m: "Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°",
                mm: "Þ‰Þ¨Þ‚Þ¨Þ“Þª %d",
                h: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°",
                hh: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d",
                d: "Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°",
                dd: "Þ‹ÞªÞˆÞ¦ÞÞ° %d",
                M: "Þ‰Þ¦Þ€Þ¬Þ‡Þ°",
                MM: "Þ‰Þ¦ÞÞ° %d",
                y: "Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°",
                yy: "Þ‡Þ¦Þ€Þ¦ÞƒÞª %d"
            },
            preparse: function (e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {dow: 7, doy: 12}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("el", {
            monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
            monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
            months: function (e, a) {
                return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
            weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
            weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
            weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
            meridiem: function (e, a, t) {
                return e > 11 ? t ? "Î¼Î¼" : "ÎœÎœ" : t ? "Ï€Î¼" : "Î Îœ"
            },
            isPM: function (e) {
                return "Î¼" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
                nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
                        default:
                            return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (e, a) {
                var t, s = this._calendarEl[e], n = a && a.hours();
                return t = s, ("undefined" != typeof Function && t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)) && (s = s.apply(a)), s.replace("{}", n % 12 == 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
            },
            relativeTime: {
                future: "ÏƒÎµ %s",
                past: "%s Ï€ÏÎ¹Î½",
                s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                ss: "%d Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
                mm: "%d Î»ÎµÏ€Ï„Î¬",
                h: "Î¼Î¯Î± ÏŽÏÎ±",
                hh: "%d ÏŽÏÎµÏ‚",
                d: "Î¼Î¯Î± Î¼Î­ÏÎ±",
                dd: "%d Î¼Î­ÏÎµÏ‚",
                M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",
                MM: "%d Î¼Î®Î½ÎµÏ‚",
                y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",
                yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Î·/,
            ordinal: "%dÎ·",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {dow: 0, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("en-in", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("en-sg", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mart_apr_maj_jun_jul_aÅ­g_sept_okt_nov_dec".split("_"),
            weekdays: "dimanÄ‰o_lundo_mardo_merkredo_ÄµaÅ­do_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ÄµaÅ­_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_Äµa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "[la] D[-an de] MMMM, YYYY",
                LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function (e, a, t) {
                return e > 11 ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[HodiaÅ­ je] LT",
                nextDay: "[MorgaÅ­ je] LT",
                nextWeek: "dddd[n je] LT",
                lastDay: "[HieraÅ­ je] LT",
                lastWeek: "[pasintan] dddd[n je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaÅ­ %s",
                s: "kelkaj sekundoj",
                ss: "%d sekundoj",
                m: "unu minuto",
                mm: "%d minutoj",
                h: "unu horo",
                hh: "%d horoj",
                d: "unu tago",
                dd: "%d tagoj",
                M: "unu monato",
                MM: "%d monatoj",
                y: "unu jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            s = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            n = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, s) {
                return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 1, doy: 4},
            invalidDate: "Fecha invÃ¡lida"
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            s = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            n = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, s) {
                return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            s = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            n = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-mx", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, s) {
                return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 0, doy: 4},
            invalidDate: "Fecha invÃ¡lida"
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            s = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            n = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, s) {
                return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = {
                s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["Ã¼he minuti", "Ã¼ks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],
                M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1]
        }

        e.defineLocale("et", {
            months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[TÃ¤na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[JÃ¤rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pÃ¤rast",
                past: "%s tagasi",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: "%d pÃ¤eva",
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "Û±", 2: "Û²", 3: "Û³", 4: "Û´", 5: "Ûµ", 6: "Û¶", 7: "Û·", 8: "Û¸", 9: "Û¹", 0: "Û°"}, t = {
            "Û±": "1",
            "Û²": "2",
            "Û³": "3",
            "Û´": "4",
            "Ûµ": "5",
            "Û¶": "6",
            "Û·": "7",
            "Û¸": "8",
            "Û¹": "9",
            "Û°": "0"
        };
        e.defineLocale("fa", {
            months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
            weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
            weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
            weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
            isPM: function (e) {
                return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
            },
            calendar: {
                sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",
                nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",
                lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¯Ø± %s",
                past: "%s Ù¾ÛŒØ´",
                s: "Ú†Ù†Ø¯ Ø«Ø§Ù†ÛŒÙ‡",
                ss: "%d Ø«Ø§Ù†ÛŒÙ‡",
                m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",
                mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",
                h: "ÛŒÚ© Ø³Ø§Ø¹Øª",
                hh: "%d Ø³Ø§Ø¹Øª",
                d: "ÛŒÚ© Ø±ÙˆØ²",
                dd: "%d Ø±ÙˆØ²",
                M: "ÛŒÚ© Ù…Ø§Ù‡",
                MM: "%d Ù…Ø§Ù‡",
                y: "ÛŒÚ© Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function (e) {
                return e.replace(/[Û°-Û¹]/g, (function (e) {
                    return t[e]
                })).replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                })).replace(/,/g, "ØŒ")
            },
            dayOfMonthOrdinalParse: /\d{1,2}Ù…/,
            ordinal: "%dÙ…",
            week: {dow: 6, doy: 12}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),
            t = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", a[7], a[8], a[9]];

        function s(e, s, n, r) {
            var i = "";
            switch (n) {
                case"s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case"ss":
                    i = r ? "sekunnin" : "sekuntia";
                    break;
                case"m":
                    return r ? "minuutin" : "minuutti";
                case"mm":
                    i = r ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return r ? "tunnin" : "tunti";
                case"hh":
                    i = r ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return r ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                case"dd":
                    i = r ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                    break;
                case"M":
                    return r ? "kuukauden" : "kuukausi";
                case"MM":
                    i = r ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return r ? "vuoden" : "vuosi";
                case"yy":
                    i = r ? "vuoden" : "vuotta"
            }
            return i = function (e, s) {
                return e < 10 ? s ? t[e] : a[e] : e
            }(e, r) + " " + i
        }

        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pÃ¤Ã¤stÃ¤",
                past: "%s sitten",
                s: s,
                ss: s,
                m: s,
                mm: s,
                h: s,
                hh: s,
                d: s,
                dd: s,
                M: s,
                MM: s,
                y: s,
                yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("fil", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("fo", {
            months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),
            weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ã dag kl.] LT",
                nextDay: "[Ã morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Ã gjÃ¡r kl.] LT",
                lastWeek: "[sÃ­Ã°stu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s sÃ­Ã°ani",
                s: "fÃ¡ sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tÃ­mi",
                hh: "%d tÃ­mar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mÃ¡naÃ°ur",
                MM: "%d mÃ¡naÃ°ir",
                y: "eitt Ã¡r",
                yy: "%d Ã¡r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?|janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
            t = [/^janv/i, /^fÃ©vr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^aoÃ»t/i, /^sept/i, /^oct/i, /^nov/i, /^dÃ©c/i];
        e.defineLocale("fr", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
            monthsShortStrictRegex: /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?)/i,
            monthsParse: t,
            longMonthsParse: t,
            shortMonthsParse: t,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                w: "une semaine",
                ww: "%d semaines",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("fr-ca", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, a) {
                switch (a) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("fr-ch", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, a) {
                switch (a) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            t = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (e, s) {
                return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[Ã´frÃ»ne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minÃºt",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ga", {
            months: ["EanÃ¡ir", "Feabhra", "MÃ¡rta", "AibreÃ¡n", "Bealtaine", "Meitheamh", "IÃºil", "LÃºnasa", "MeÃ¡n FÃ³mhair", "Deireadh FÃ³mhair", "Samhain", "Nollaig"],
            monthsShort: ["Ean", "Feabh", "MÃ¡rt", "Aib", "Beal", "Meith", "IÃºil", "LÃºn", "M.F.", "D.F.", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["DÃ© Domhnaigh", "DÃ© Luain", "DÃ© MÃ¡irt", "DÃ© CÃ©adaoin", "DÃ©ardaoin", "DÃ© hAoine", "DÃ© Sathairn"],
            weekdaysShort: ["Domh", "Luan", "MÃ¡irt", "CÃ©ad", "DÃ©ar", "Aoine", "Sath"],
            weekdaysMin: ["Do", "Lu", "MÃ¡", "CÃ©", "DÃ©", "A", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[AmÃ¡rach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[InnÃ© ag] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s Ã³ shin",
                s: "cÃºpla soicind",
                ss: "%d soicind",
                m: "nÃ³imÃ©ad",
                mm: "%d nÃ³imÃ©ad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lÃ¡",
                dd: "%d lÃ¡",
                M: "mÃ­",
                MM: "%d mÃ­onna",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"],
            monthsShort: ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"],
            monthsParseExact: !0,
            weekdays: ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-mÃ ireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dÃ¨ aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mÃ¬os",
                MM: "%d mÃ¬osan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuÃ±o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuÃ±._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mÃ©rcores_xoves_venres_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._mÃ©r._xov._ven._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mÃ©_xo_ve_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                }, nextDay: function () {
                    return "[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                }, nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                }, lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"
                }, lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = {
                s: ["à¤¥à¥‹à¤¡à¤¯à¤¾ à¤¸à¥…à¤•à¤‚à¤¡à¤¾à¤‚à¤¨à¥€", "à¤¥à¥‹à¤¡à¥‡ à¤¸à¥…à¤•à¤‚à¤¡"],
                ss: [e + " à¤¸à¥…à¤•à¤‚à¤¡à¤¾à¤‚à¤¨à¥€", e + " à¤¸à¥…à¤•à¤‚à¤¡"],
                m: ["à¤à¤•à¤¾ à¤®à¤¿à¤£à¤Ÿà¤¾à¤¨", "à¤à¤• à¤®à¤¿à¤¨à¥‚à¤Ÿ"],
                mm: [e + " à¤®à¤¿à¤£à¤Ÿà¤¾à¤‚à¤¨à¥€", e + " à¤®à¤¿à¤£à¤Ÿà¤¾à¤‚"],
                h: ["à¤à¤•à¤¾ à¤µà¤°à¤¾à¤¨", "à¤à¤• à¤µà¤°"],
                hh: [e + " à¤µà¤°à¤¾à¤‚à¤¨à¥€", e + " à¤µà¤°à¤¾à¤‚"],
                d: ["à¤à¤•à¤¾ à¤¦à¤¿à¤¸à¤¾à¤¨", "à¤à¤• à¤¦à¥€à¤¸"],
                dd: [e + " à¤¦à¤¿à¤¸à¤¾à¤‚à¤¨à¥€", e + " à¤¦à¥€à¤¸"],
                M: ["à¤à¤•à¤¾ à¤®à¥à¤¹à¤¯à¤¨à¥à¤¯à¤¾à¤¨", "à¤à¤• à¤®à¥à¤¹à¤¯à¤¨à¥‹"],
                MM: [e + " à¤®à¥à¤¹à¤¯à¤¨à¥à¤¯à¤¾à¤¨à¥€", e + " à¤®à¥à¤¹à¤¯à¤¨à¥‡"],
                y: ["à¤à¤•à¤¾ à¤µà¤°à¥à¤¸à¤¾à¤¨", "à¤à¤• à¤µà¤°à¥à¤¸"],
                yy: [e + " à¤µà¤°à¥à¤¸à¤¾à¤‚à¤¨à¥€", e + " à¤µà¤°à¥à¤¸à¤¾à¤‚"]
            };
            return s ? n[t][0] : n[t][1]
        }

        e.defineLocale("gom-deva", {
            months: {
                standalone: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¥€à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¯_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
                format: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€à¤šà¥à¤¯à¤¾_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€à¤šà¥à¤¯à¤¾_à¤®à¤¾à¤°à¥à¤šà¤¾à¤šà¥à¤¯à¤¾_à¤à¤ªà¥à¤°à¥€à¤²à¤¾à¤šà¥à¤¯à¤¾_à¤®à¥‡à¤¯à¤¾à¤šà¥à¤¯à¤¾_à¤œà¥‚à¤¨à¤¾à¤šà¥à¤¯à¤¾_à¤œà¥à¤²à¤¯à¤¾à¤šà¥à¤¯à¤¾_à¤‘à¤—à¤¸à¥à¤Ÿà¤¾à¤šà¥à¤¯à¤¾_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¥€._à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤†à¤¯à¤¤à¤¾à¤°_à¤¸à¥‹à¤®à¤¾à¤°_à¤®à¤‚à¤—à¤³à¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤¬à¤¿à¤°à¥‡à¤¸à¥à¤¤à¤¾à¤°_à¤¸à¥à¤•à¥à¤°à¤¾à¤°_à¤¶à¥‡à¤¨à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤†à¤¯à¤¤._à¤¸à¥‹à¤®._à¤®à¤‚à¤—à¤³._à¤¬à¥à¤§._à¤¬à¥à¤°à¥‡à¤¸à¥à¤¤._à¤¸à¥à¤•à¥à¤°._à¤¶à¥‡à¤¨.".split("_"),
            weekdaysMin: "à¤†_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤¬à¥à¤°à¥‡_à¤¸à¥_à¤¶à¥‡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                LTS: "A h:mm:ss [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                llll: "ddd, D MMM YYYY, A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]"
            },
            calendar: {
                sameDay: "[à¤†à¤¯à¤œ] LT",
                nextDay: "[à¤«à¤¾à¤²à¥à¤¯à¤¾à¤‚] LT",
                nextWeek: "[à¤«à¥à¤¡à¤²à¥‹] dddd[,] LT",
                lastDay: "[à¤•à¤¾à¤²] LT",
                lastWeek: "[à¤«à¤¾à¤Ÿà¤²à¥‹] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s à¤†à¤¦à¥€à¤‚",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}(à¤µà¥‡à¤°)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"D":
                        return e + "à¤µà¥‡à¤°";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return e
                }
            },
            week: {dow: 0, doy: 3},
            meridiemParse: /à¤°à¤¾à¤¤à¥€|à¤¸à¤•à¤¾à¤³à¥€à¤‚|à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚|à¤¸à¤¾à¤‚à¤œà¥‡/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¥€" === a ? e < 4 ? e : e + 12 : "à¤¸à¤•à¤¾à¤³à¥€à¤‚" === a ? e : "à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚" === a ? e > 12 ? e : e + 12 : "à¤¸à¤¾à¤‚à¤œà¥‡" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à¤°à¤¾à¤¤à¥€" : e < 12 ? "à¤¸à¤•à¤¾à¤³à¥€à¤‚" : e < 16 ? "à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚" : e < 20 ? "à¤¸à¤¾à¤‚à¤œà¥‡" : "à¤°à¤¾à¤¤à¥€"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = {
                s: ["thoddea sekondamni", "thodde sekond"],
                ss: [e + " sekondamni", e + " sekond"],
                m: ["eka mintan", "ek minut"],
                mm: [e + " mintamni", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voramni", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disamni", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineamni", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsamni", e + " vorsam"]
            };
            return s ? n[t][0] : n[t][1]
        }

        e.defineLocale("gom-latn", {
            months: {
                standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Fuddlo] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fattlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"D":
                        return e + "er";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return e
                }
            },
            week: {dow: 0, doy: 3},
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "rati" === a ? e < 4 ? e : e + 12 : "sokallim" === a ? e : "donparam" === a ? e > 12 ? e : e + 12 : "sanje" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à«§", 2: "à«¨", 3: "à«©", 4: "à«ª", 5: "à««", 6: "à«¬", 7: "à«­", 8: "à«®", 9: "à«¯", 0: "à«¦"},
            t = {
                "à«§": "1",
                "à«¨": "2",
                "à«©": "3",
                "à«ª": "4",
                "à««": "5",
                "à«¬": "6",
                "à«­": "7",
                "à«®": "8",
                "à«¯": "9",
                "à«¦": "0"
            };
        e.defineLocale("gu", {
            months: "àªœàª¾àª¨à«àª¯à«àª†àª°à«€_àª«à«‡àª¬à«àª°à«àª†àª°à«€_àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿àª²_àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾àªˆ_àª‘àª—àª¸à«àªŸ_àª¸àªªà«àªŸà«‡àª®à«àª¬àª°_àª‘àª•à«àªŸà«àª¬àª°_àª¨àªµà«‡àª®à«àª¬àª°_àª¡àª¿àª¸à«‡àª®à«àª¬àª°".split("_"),
            monthsShort: "àªœàª¾àª¨à«àª¯à«._àª«à«‡àª¬à«àª°à«._àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿._àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾._àª‘àª—._àª¸àªªà«àªŸà«‡._àª‘àª•à«àªŸà«._àª¨àªµà«‡._àª¡àª¿àª¸à«‡.".split("_"),
            monthsParseExact: !0,
            weekdays: "àª°àªµàª¿àªµàª¾àª°_àª¸à«‹àª®àªµàª¾àª°_àª®àª‚àª—àª³àªµàª¾àª°_àª¬à«àª§à«àªµàª¾àª°_àª—à«àª°à«àªµàª¾àª°_àª¶à«àª•à«àª°àªµàª¾àª°_àª¶àª¨àª¿àªµàª¾àª°".split("_"),
            weekdaysShort: "àª°àªµàª¿_àª¸à«‹àª®_àª®àª‚àª—àª³_àª¬à«àª§à«_àª—à«àª°à«_àª¶à«àª•à«àª°_àª¶àª¨àª¿".split("_"),
            weekdaysMin: "àª°_àª¸à«‹_àª®àª‚_àª¬à«_àª—à«_àª¶à«_àª¶".split("_"),
            longDateFormat: {
                LT: "A h:mm àªµàª¾àª—à«àª¯à«‡",
                LTS: "A h:mm:ss àªµàª¾àª—à«àª¯à«‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡"
            },
            calendar: {
                sameDay: "[àª†àªœ] LT",
                nextDay: "[àª•àª¾àª²à«‡] LT",
                nextWeek: "dddd, LT",
                lastDay: "[àª—àª‡àª•àª¾àª²à«‡] LT",
                lastWeek: "[àªªàª¾àª›àª²àª¾] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s àª®àª¾",
                past: "%s àªªàª¹à«‡àª²àª¾",
                s: "àª…àª®à«àª• àªªàª³à«‹",
                ss: "%d àª¸à«‡àª•àª‚àª¡",
                m: "àªàª• àª®àª¿àª¨àª¿àªŸ",
                mm: "%d àª®àª¿àª¨àª¿àªŸ",
                h: "àªàª• àª•àª²àª¾àª•",
                hh: "%d àª•àª²àª¾àª•",
                d: "àªàª• àª¦àª¿àªµàª¸",
                dd: "%d àª¦àª¿àªµàª¸",
                M: "àªàª• àª®àª¹àª¿àª¨à«‹",
                MM: "%d àª®àª¹àª¿àª¨à«‹",
                y: "àªàª• àªµàª°à«àª·",
                yy: "%d àªµàª°à«àª·"
            },
            preparse: function (e) {
                return e.replace(/[à«§à«¨à«©à«ªà««à«¬à«­à«®à«¯à«¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /àª°àª¾àª¤|àª¬àªªà«‹àª°|àª¸àªµàª¾àª°|àª¸àª¾àª‚àªœ/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "àª°àª¾àª¤" === a ? e < 4 ? e : e + 12 : "àª¸àªµàª¾àª°" === a ? e : "àª¬àªªà«‹àª°" === a ? e >= 10 ? e : e + 12 : "àª¸àª¾àª‚àªœ" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "àª°àª¾àª¤" : e < 10 ? "àª¸àªµàª¾àª°" : e < 17 ? "àª¬àªªà«‹àª°" : e < 20 ? "àª¸àª¾àª‚àªœ" : "àª°àª¾àª¤"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("he", {
            months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
            monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),
            weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),
            weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
            weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [×‘]MMMM YYYY",
                LLL: "D [×‘]MMMM YYYY HH:mm",
                LLLL: "dddd, D [×‘]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[×”×™×•× ×‘Ö¾]LT",
                nextDay: "[×ž×—×¨ ×‘Ö¾]LT",
                nextWeek: "dddd [×‘×©×¢×”] LT",
                lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",
                lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "×‘×¢×•×“ %s",
                past: "×œ×¤× ×™ %s",
                s: "×ž×¡×¤×¨ ×©× ×™×•×ª",
                ss: "%d ×©× ×™×•×ª",
                m: "×“×§×”",
                mm: "%d ×“×§×•×ª",
                h: "×©×¢×”",
                hh: function (e) {
                    return 2 === e ? "×©×¢×ª×™×™×" : e + " ×©×¢×•×ª"
                },
                d: "×™×•×",
                dd: function (e) {
                    return 2 === e ? "×™×•×ž×™×™×" : e + " ×™×ž×™×"
                },
                M: "×—×•×“×©",
                MM: function (e) {
                    return 2 === e ? "×—×•×“×©×™×™×" : e + " ×—×•×“×©×™×"
                },
                y: "×©× ×”",
                yy: function (e) {
                    return 2 === e ? "×©× ×ª×™×™×" : e % 10 == 0 && 10 !== e ? e + " ×©× ×”" : e + " ×©× ×™×"
                }
            },
            meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i,
            isPM: function (e) {
                return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 5 ? "×œ×¤× ×•×ª ×‘×•×§×¨" : e < 10 ? "×‘×‘×•×§×¨" : e < 12 ? t ? '×œ×¤× ×”"×¦' : "×œ×¤× ×™ ×”×¦×”×¨×™×™×" : e < 18 ? t ? '××—×”"×¦' : "××—×¨×™ ×”×¦×”×¨×™×™×" : "×‘×¢×¨×‘"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"},
            t = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            },
            s = [/^à¤œà¤¨/i, /^à¤«à¤¼à¤°|à¤«à¤°/i, /^à¤®à¤¾à¤°à¥à¤š/i, /^à¤…à¤ªà¥à¤°à¥ˆ/i, /^à¤®à¤ˆ/i, /^à¤œà¥‚à¤¨/i, /^à¤œà¥à¤²/i, /^à¤…à¤—/i, /^à¤¸à¤¿à¤¤à¤‚|à¤¸à¤¿à¤¤/i, /^à¤…à¤•à¥à¤Ÿà¥‚/i, /^à¤¨à¤µ|à¤¨à¤µà¤‚/i, /^à¤¦à¤¿à¤¸à¤‚|à¤¦à¤¿à¤¸/i];
        e.defineLocale("hi", {
            months: {
                format: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
                standalone: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤‚à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤‚à¤¬à¤°_à¤¦à¤¿à¤¸à¤‚à¤¬à¤°".split("_")
            },
            monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
            weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
            weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
            longDateFormat: {
                LT: "A h:mm à¤¬à¤œà¥‡",
                LTS: "A h:mm:ss à¤¬à¤œà¥‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
            },
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: [/^à¤œà¤¨/i, /^à¤«à¤¼à¤°/i, /^à¤®à¤¾à¤°à¥à¤š/i, /^à¤…à¤ªà¥à¤°à¥ˆ/i, /^à¤®à¤ˆ/i, /^à¤œà¥‚à¤¨/i, /^à¤œà¥à¤²/i, /^à¤…à¤—/i, /^à¤¸à¤¿à¤¤/i, /^à¤…à¤•à¥à¤Ÿà¥‚/i, /^à¤¨à¤µ/i, /^à¤¦à¤¿à¤¸/i],
            monthsRegex: /^(à¤œà¤¨à¤µà¤°à¥€|à¤œà¤¨\.?|à¤«à¤¼à¤°à¤µà¤°à¥€|à¤«à¤°à¤µà¤°à¥€|à¤«à¤¼à¤°\.?|à¤®à¤¾à¤°à¥à¤š?|à¤…à¤ªà¥à¤°à¥ˆà¤²|à¤…à¤ªà¥à¤°à¥ˆ\.?|à¤®à¤ˆ?|à¤œà¥‚à¤¨?|à¤œà¥à¤²à¤¾à¤ˆ|à¤œà¥à¤²\.?|à¤…à¤—à¤¸à¥à¤¤|à¤…à¤—\.?|à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°|à¤¸à¤¿à¤¤à¤‚à¤¬à¤°|à¤¸à¤¿à¤¤\.?|à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°|à¤…à¤•à¥à¤Ÿà¥‚\.?|à¤¨à¤µà¤®à¥à¤¬à¤°|à¤¨à¤µà¤‚à¤¬à¤°|à¤¨à¤µ\.?|à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°|à¤¦à¤¿à¤¸à¤‚à¤¬à¤°|à¤¦à¤¿à¤¸\.?)/i,
            monthsShortRegex: /^(à¤œà¤¨à¤µà¤°à¥€|à¤œà¤¨\.?|à¤«à¤¼à¤°à¤µà¤°à¥€|à¤«à¤°à¤µà¤°à¥€|à¤«à¤¼à¤°\.?|à¤®à¤¾à¤°à¥à¤š?|à¤…à¤ªà¥à¤°à¥ˆà¤²|à¤…à¤ªà¥à¤°à¥ˆ\.?|à¤®à¤ˆ?|à¤œà¥‚à¤¨?|à¤œà¥à¤²à¤¾à¤ˆ|à¤œà¥à¤²\.?|à¤…à¤—à¤¸à¥à¤¤|à¤…à¤—\.?|à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°|à¤¸à¤¿à¤¤à¤‚à¤¬à¤°|à¤¸à¤¿à¤¤\.?|à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°|à¤…à¤•à¥à¤Ÿà¥‚\.?|à¤¨à¤µà¤®à¥à¤¬à¤°|à¤¨à¤µà¤‚à¤¬à¤°|à¤¨à¤µ\.?|à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°|à¤¦à¤¿à¤¸à¤‚à¤¬à¤°|à¤¦à¤¿à¤¸\.?)/i,
            monthsStrictRegex: /^(à¤œà¤¨à¤µà¤°à¥€?|à¤«à¤¼à¤°à¤µà¤°à¥€|à¤«à¤°à¤µà¤°à¥€?|à¤®à¤¾à¤°à¥à¤š?|à¤…à¤ªà¥à¤°à¥ˆà¤²?|à¤®à¤ˆ?|à¤œà¥‚à¤¨?|à¤œà¥à¤²à¤¾à¤ˆ?|à¤…à¤—à¤¸à¥à¤¤?|à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°|à¤¸à¤¿à¤¤à¤‚à¤¬à¤°|à¤¸à¤¿à¤¤?\.?|à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°|à¤…à¤•à¥à¤Ÿà¥‚\.?|à¤¨à¤µà¤®à¥à¤¬à¤°|à¤¨à¤µà¤‚à¤¬à¤°?|à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°|à¤¦à¤¿à¤¸à¤‚à¤¬à¤°?)/i,
            monthsShortStrictRegex: /^(à¤œà¤¨\.?|à¤«à¤¼à¤°\.?|à¤®à¤¾à¤°à¥à¤š?|à¤…à¤ªà¥à¤°à¥ˆ\.?|à¤®à¤ˆ?|à¤œà¥‚à¤¨?|à¤œà¥à¤²\.?|à¤…à¤—\.?|à¤¸à¤¿à¤¤\.?|à¤…à¤•à¥à¤Ÿà¥‚\.?|à¤¨à¤µ\.?|à¤¦à¤¿à¤¸\.?)/i,
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤•à¤²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¤•à¤²] LT",
                lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¤®à¥‡à¤‚",
                past: "%s à¤ªà¤¹à¤²à¥‡",
                s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
                ss: "%d à¤¸à¥‡à¤•à¤‚à¤¡",
                m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
                mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
                h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
                hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
                d: "à¤à¤• à¤¦à¤¿à¤¨",
                dd: "%d à¤¦à¤¿à¤¨",
                M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
                MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
                y: "à¤à¤• à¤µà¤°à¥à¤·",
                yy: "%d à¤µà¤°à¥à¤·"
            },
            preparse: function (e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤" === a ? e < 4 ? e : e + 12 : "à¤¸à¥à¤¬à¤¹" === a ? e : "à¤¦à¥‹à¤ªà¤¹à¤°" === a ? e >= 10 ? e : e + 12 : "à¤¶à¤¾à¤®" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à¤°à¤¾à¤¤" : e < 10 ? "à¤¸à¥à¤¬à¤¹" : e < 17 ? "à¤¦à¥‹à¤ªà¤¹à¤°" : e < 20 ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t) {
            var s = e + " ";
            switch (t) {
                case"ss":
                    return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case"m":
                    return a ? "jedna minuta" : "jedne minute";
                case"mm":
                    return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return a ? "jedan sat" : "jednog sata";
                case"hh":
                    return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return s += 1 === e ? "dan" : "dana";
                case"MM":
                    return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        e.defineLocale("hr", {
            months: {
                format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM YYYY",
                LLL: "Do MMMM YYYY H:mm",
                LLLL: "dddd, Do MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juÄer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[proÅ¡lu] [nedjelju] [u] LT";
                        case 3:
                            return "[proÅ¡lu] [srijedu] [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "dan",
                dd: a,
                M: "mjesec",
                MM: a,
                y: "godinu",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");

        function t(e, a, t, s) {
            var n = e;
            switch (t) {
                case"s":
                    return s || a ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                case"ss":
                    return n + (s || a) ? " mÃ¡sodperc" : " mÃ¡sodperce";
                case"m":
                    return "egy" + (s || a ? " perc" : " perce");
                case"mm":
                    return n + (s || a ? " perc" : " perce");
                case"h":
                    return "egy" + (s || a ? " Ã³ra" : " Ã³rÃ¡ja");
                case"hh":
                    return n + (s || a ? " Ã³ra" : " Ã³rÃ¡ja");
                case"d":
                    return "egy" + (s || a ? " nap" : " napja");
                case"dd":
                    return n + (s || a ? " nap" : " napja");
                case"M":
                    return "egy" + (s || a ? " hÃ³nap" : " hÃ³napja");
                case"MM":
                    return n + (s || a ? " hÃ³nap" : " hÃ³napja");
                case"y":
                    return "egy" + (s || a ? " Ã©v" : " Ã©ve");
                case"yy":
                    return n + (s || a ? " Ã©v" : " Ã©ve")
            }
            return ""
        }

        function s(e) {
            return (e ? "" : "[mÃºlt] ") + "[" + a[this.day()] + "] LT[-kor]"
        }

        e.defineLocale("hu", {
            months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),
            monthsShort: "jan._feb._mÃ¡rc._Ã¡pr._mÃ¡j._jÃºn._jÃºl._aug._szept._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),
            weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function (e, a, t) {
                return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                    return s.call(this, !0)
                }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                    return s.call(this, !1)
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s mÃºlva",
                past: "%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("hy-am", {
            months: {
                format: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"),
                standalone: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_")
            },
            monthsShort: "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
            weekdays: "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),
            weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Õ©.",
                LLL: "D MMMM YYYY Õ©., HH:mm",
                LLLL: "dddd, D MMMM YYYY Õ©., HH:mm"
            },
            calendar: {
                sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT",
                nextDay: "[Õ¾Õ¡Õ²Õ¨] LT",
                lastDay: "[Õ¥Ö€Õ¥Õ¯] LT",
                nextWeek: function () {
                    return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },
                lastWeek: function () {
                    return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Õ°Õ¥Õ¿Õ¸",
                past: "%s Õ¡Õ¼Õ¡Õ»",
                s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                ss: "%d Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                m: "Ö€Õ¸ÕºÕ¥",
                mm: "%d Ö€Õ¸ÕºÕ¥",
                h: "ÕªÕ¡Õ´",
                hh: "%d ÕªÕ¡Õ´",
                d: "Ö…Ö€",
                dd: "%d Ö…Ö€",
                M: "Õ¡Õ´Õ«Õ½",
                MM: "%d Õ¡Õ´Õ«Õ½",
                y: "Õ¿Õ¡Ö€Õ«",
                yy: "%d Õ¿Õ¡Ö€Õ«"
            },
            meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
            isPM: function (e) {
                return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(e)
            },
            meridiem: function (e) {
                return e < 4 ? "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡" : e < 12 ? "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡" : e < 17 ? "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡" : "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"DDD":
                    case"w":
                    case"W":
                    case"DDDo":
                        return 1 === e ? e + "-Õ«Õ¶" : e + "-Ö€Õ¤";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "pagi" === a ? e : "siang" === a ? e >= 11 ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function t(e, t, s, n) {
            var r = e + " ";
            switch (s) {
                case"s":
                    return t || n ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                case"ss":
                    return a(e) ? r + (t || n ? "sekÃºndur" : "sekÃºndum") : r + "sekÃºnda";
                case"m":
                    return t ? "mÃ­nÃºta" : "mÃ­nÃºtu";
                case"mm":
                    return a(e) ? r + (t || n ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : t ? r + "mÃ­nÃºta" : r + "mÃ­nÃºtu";
                case"hh":
                    return a(e) ? r + (t || n ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                case"d":
                    return t ? "dagur" : n ? "dag" : "degi";
                case"dd":
                    return a(e) ? t ? r + "dagar" : r + (n ? "daga" : "dÃ¶gum") : t ? r + "dagur" : r + (n ? "dag" : "degi");
                case"M":
                    return t ? "mÃ¡nuÃ°ur" : n ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                case"MM":
                    return a(e) ? t ? r + "mÃ¡nuÃ°ir" : r + (n ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : t ? r + "mÃ¡nuÃ°ur" : r + (n ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                case"y":
                    return t || n ? "Ã¡r" : "Ã¡ri";
                case"yy":
                    return a(e) ? r + (t || n ? "Ã¡r" : "Ã¡rum") : r + (t || n ? "Ã¡r" : "Ã¡ri")
            }
        }

        e.defineLocale("is", {
            months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
            weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),
            weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
            weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[Ã­ dag kl.] LT",
                nextDay: "[Ã¡ morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Ã­ gÃ¦r kl.] LT",
                lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s sÃ­Ã°an",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: "klukkustund",
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, nextDay: function () {
                    return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, nextWeek: function () {
                    return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, lastDay: function () {
                    return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
                        default:
                            return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "tra %s",
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                w: "una settimana",
                ww: "%d settimane",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ja", {
            eras: [{since: "2019-05-01", offset: 1, name: "ä»¤å’Œ", narrow: "ã‹¿", abbr: "R"}, {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "å¹³æˆ",
                narrow: "ã»",
                abbr: "H"
            }, {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "æ˜­å’Œ",
                narrow: "ã¼",
                abbr: "S"
            }, {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "å¤§æ­£",
                narrow: "ã½",
                abbr: "T"
            }, {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "æ˜Žæ²»",
                narrow: "ã¾",
                abbr: "M"
            }, {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "è¥¿æš¦",
                narrow: "AD",
                abbr: "AD"
            }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "ç´€å…ƒå‰", narrow: "BC", abbr: "BC"}],
            eraYearOrdinalRegex: /(å…ƒ|\d+)å¹´/,
            eraYearOrdinalParse: function (e, a) {
                return "å…ƒ" === a[1] ? 1 : parseInt(a[1] || e, 10)
            },
            months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
            weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥ dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥(ddd) HH:mm"
            },
            meridiemParse: /åˆå‰|åˆå¾Œ/i,
            isPM: function (e) {
                return "åˆå¾Œ" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "åˆå‰" : "åˆå¾Œ"
            },
            calendar: {
                sameDay: "[ä»Šæ—¥] LT", nextDay: "[æ˜Žæ—¥] LT", nextWeek: function (e) {
                    return e.week() !== this.week() ? "[æ¥é€±]dddd LT" : "dddd LT"
                }, lastDay: "[æ˜¨æ—¥] LT", lastWeek: function (e) {
                    return this.week() !== e.week() ? "[å…ˆé€±]dddd LT" : "dddd LT"
                }, sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}æ—¥/,
            ordinal: function (e, a) {
                switch (a) {
                    case"y":
                        return 1 === e ? "å…ƒå¹´" : e + "å¹´";
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "æ—¥";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så¾Œ",
                past: "%så‰",
                s: "æ•°ç§’",
                ss: "%dç§’",
                m: "1åˆ†",
                mm: "%dåˆ†",
                h: "1æ™‚é–“",
                hh: "%dæ™‚é–“",
                d: "1æ—¥",
                dd: "%dæ—¥",
                M: "1ãƒ¶æœˆ",
                MM: "%dãƒ¶æœˆ",
                y: "1å¹´",
                yy: "%då¹´"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "enjing" === a ? e : "siyang" === a ? e >= 11 ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ka", {
            months: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),
            monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),
            weekdays: {
                standalone: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),
                format: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"),
                isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/
            },
            weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),
            weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",
                nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",
                lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",
                nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",
                lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return e.replace(/(áƒ¬áƒáƒ›|áƒ¬áƒ£áƒ—|áƒ¡áƒáƒáƒ—|áƒ¬áƒ”áƒš|áƒ“áƒ¦|áƒ—áƒ•)(áƒ˜|áƒ”)/, (function (e, a, t) {
                        return "áƒ˜" === t ? a + "áƒ¨áƒ˜" : a + t + "áƒ¨áƒ˜"
                    }))
                },
                past: function (e) {
                    return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(e) ? e.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(e) ? e.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : e
                },
                s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",
                ss: "%d áƒ¬áƒáƒ›áƒ˜",
                m: "áƒ¬áƒ£áƒ—áƒ˜",
                mm: "%d áƒ¬áƒ£áƒ—áƒ˜",
                h: "áƒ¡áƒáƒáƒ—áƒ˜",
                hh: "%d áƒ¡áƒáƒáƒ—áƒ˜",
                d: "áƒ“áƒ¦áƒ”",
                dd: "%d áƒ“áƒ¦áƒ”",
                M: "áƒ—áƒ•áƒ”",
                MM: "%d áƒ—áƒ•áƒ”",
                y: "áƒ¬áƒ”áƒšáƒ˜",
                yy: "%d áƒ¬áƒ”áƒšáƒ˜"
            },
            dayOfMonthOrdinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
            ordinal: function (e) {
                return 0 === e ? e : 1 === e ? e + "-áƒšáƒ˜" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "áƒ›áƒ”-" + e : e + "-áƒ”"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            0: "-ÑˆÑ–",
            1: "-ÑˆÑ–",
            2: "-ÑˆÑ–",
            3: "-ÑˆÑ–",
            4: "-ÑˆÑ–",
            5: "-ÑˆÑ–",
            6: "-ÑˆÑ‹",
            7: "-ÑˆÑ–",
            8: "-ÑˆÑ–",
            9: "-ÑˆÑ‹",
            10: "-ÑˆÑ‹",
            20: "-ÑˆÑ‹",
            30: "-ÑˆÑ‹",
            40: "-ÑˆÑ‹",
            50: "-ÑˆÑ–",
            60: "-ÑˆÑ‹",
            70: "-ÑˆÑ–",
            80: "-ÑˆÑ–",
            90: "-ÑˆÑ‹",
            100: "-ÑˆÑ–"
        };
        e.defineLocale("kk", {
            months: "Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
            monthsShort: "Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»".split("_"),
            weekdays: "Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–".split("_"),
            weekdaysShort: "Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½".split("_"),
            weekdaysMin: "Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
                nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",
                nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",
                lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",
                past: "%s Ð±Ò±Ñ€Ñ‹Ð½",
                s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´",
                m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",
                hh: "%d ÑÐ°Ò“Ð°Ñ‚",
                d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½",
                dd: "%d ÐºÒ¯Ð½",
                M: "Ð±Ñ–Ñ€ Ð°Ð¹",
                MM: "%d Ð°Ð¹",
                y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",
                yy: "%d Ð¶Ñ‹Ð»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
            ordinal: function (e) {
                return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "áŸ¡", 2: "áŸ¢", 3: "áŸ£", 4: "áŸ¤", 5: "áŸ¥", 6: "áŸ¦", 7: "áŸ§", 8: "áŸ¨", 9: "áŸ©", 0: "áŸ "},
            t = {
                "áŸ¡": "1",
                "áŸ¢": "2",
                "áŸ£": "3",
                "áŸ¤": "4",
                "áŸ¥": "5",
                "áŸ¦": "6",
                "áŸ§": "7",
                "áŸ¨": "8",
                "áŸ©": "9",
                "áŸ ": "0"
            };
        e.defineLocale("km", {
            months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
            monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
            weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
            weekdaysShort: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
            weekdaysMin: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/,
            isPM: function (e) {
                return "áž›áŸ’áž„áž¶áž…" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "áž–áŸ’ážšáž¹áž€" : "áž›áŸ’áž„áž¶áž…"
            },
            calendar: {
                sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
                nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
                nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
                lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
                lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sáž‘áŸ€áž",
                past: "%sáž˜áž»áž“",
                s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
                ss: "%d ážœáž·áž“áž¶áž‘áž¸",
                m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
                mm: "%d áž“áž¶áž‘áž¸",
                h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
                hh: "%d áž˜áŸ‰áŸ„áž„",
                d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
                dd: "%d ážáŸ’áž„áŸƒ",
                M: "áž˜áž½áž™ážáŸ‚",
                MM: "%d ážáŸ‚",
                y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
                yy: "%d áž†áŸ’áž“áž¶áŸ†"
            },
            dayOfMonthOrdinalParse: /áž‘áž¸\d{1,2}/,
            ordinal: "áž‘áž¸%d",
            preparse: function (e) {
                return e.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à³§", 2: "à³¨", 3: "à³©", 4: "à³ª", 5: "à³«", 6: "à³¬", 7: "à³­", 8: "à³®", 9: "à³¯", 0: "à³¦"},
            t = {
                "à³§": "1",
                "à³¨": "2",
                "à³©": "3",
                "à³ª": "4",
                "à³«": "5",
                "à³¬": "6",
                "à³­": "7",
                "à³®": "8",
                "à³¯": "9",
                "à³¦": "0"
            };
        e.defineLocale("kn", {
            months: "à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³".split("_"),
            monthsShort: "à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚".split("_"),
            monthsParseExact: !0,
            weekdays: "à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°".split("_"),
            weekdaysShort: "à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿".split("_"),
            weekdaysMin: "à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à²‡à²‚à²¦à³] LT",
                nextDay: "[à²¨à²¾à²³à³†] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à²¨à²¿à²¨à³à²¨à³†] LT",
                lastWeek: "[à²•à³†à³‚à²¨à³†à²¯] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à²¨à²‚à²¤à²°",
                past: "%s à²¹à²¿à²‚à²¦à³†",
                s: "à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³",
                ss: "%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³",
                m: "à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·",
                mm: "%d à²¨à²¿à²®à²¿à²·",
                h: "à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†",
                hh: "%d à²—à²‚à²Ÿà³†",
                d: "à²’à²‚à²¦à³ à²¦à²¿à²¨",
                dd: "%d à²¦à²¿à²¨",
                M: "à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³",
                MM: "%d à²¤à²¿à²‚à²—à²³à³",
                y: "à²’à²‚à²¦à³ à²µà²°à³à²·",
                yy: "%d à²µà²°à³à²·"
            },
            preparse: function (e) {
                return e.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à²°à²¾à²¤à³à²°à²¿" === a ? e < 4 ? e : e + 12 : "à²¬à³†à²³à²¿à²—à³à²—à³†" === a ? e : "à²®à²§à³à²¯à²¾à²¹à³à²¨" === a ? e >= 10 ? e : e + 12 : "à²¸à²‚à²œà³†" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à²°à²¾à²¤à³à²°à²¿" : e < 10 ? "à²¬à³†à²³à²¿à²—à³à²—à³†" : e < 17 ? "à²®à²§à³à²¯à²¾à²¹à³à²¨" : e < 20 ? "à²¸à²‚à²œà³†" : "à²°à²¾à²¤à³à²°à²¿"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/,
            ordinal: function (e) {
                return e + "à²¨à³†à³•"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ko", {
            months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
            weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYYë…„ MMMM Dì¼",
                LLL: "YYYYë…„ MMMM Dì¼ A h:mm",
                LLLL: "YYYYë…„ MMMM Dì¼ dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYYë…„ MMMM Dì¼",
                lll: "YYYYë…„ MMMM Dì¼ A h:mm",
                llll: "YYYYë…„ MMMM Dì¼ dddd A h:mm"
            },
            calendar: {
                sameDay: "ì˜¤ëŠ˜ LT",
                nextDay: "ë‚´ì¼ LT",
                nextWeek: "dddd LT",
                lastDay: "ì–´ì œ LT",
                lastWeek: "ì§€ë‚œì£¼ dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s í›„",
                past: "%s ì „",
                s: "ëª‡ ì´ˆ",
                ss: "%dì´ˆ",
                m: "1ë¶„",
                mm: "%dë¶„",
                h: "í•œ ì‹œê°„",
                hh: "%dì‹œê°„",
                d: "í•˜ë£¨",
                dd: "%dì¼",
                M: "í•œ ë‹¬",
                MM: "%dë‹¬",
                y: "ì¼ ë…„",
                yy: "%dë…„"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ì¼|ì›”|ì£¼)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "ì¼";
                    case"M":
                        return e + "ì›”";
                    case"w":
                    case"W":
                        return e + "ì£¼";
                    default:
                        return e
                }
            },
            meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
            isPM: function (e) {
                return "ì˜¤í›„" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "ì˜¤ì „" : "ì˜¤í›„"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "Ù¡", 2: "Ù¢", 3: "Ù£", 4: "Ù¤", 5: "Ù¥", 6: "Ù¦", 7: "Ù§", 8: "Ù¨", 9: "Ù©", 0: "Ù "}, t = {
                "Ù¡": "1",
                "Ù¢": "2",
                "Ù£": "3",
                "Ù¤": "4",
                "Ù¥": "5",
                "Ù¦": "6",
                "Ù§": "7",
                "Ù¨": "8",
                "Ù©": "9",
                "Ù ": "0"
            },
            s = ["Ú©Ø§Ù†ÙˆÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…", "Ø´ÙˆØ¨Ø§Øª", "Ø¦Ø§Ø²Ø§Ø±", "Ù†ÛŒØ³Ø§Ù†", "Ø¦Ø§ÛŒØ§Ø±", "Ø­ÙˆØ²Û•ÛŒØ±Ø§Ù†", "ØªÛ•Ù…Ù…ÙˆØ²", "Ø¦Ø§Ø¨", "Ø¦Û•ÛŒÙ„ÙˆÙˆÙ„", "ØªØ´Ø±ÛŒÙ†ÛŒ ÛŒÛ•ÙƒÛ•Ù…", "ØªØ´Ø±ÛŒÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…", "ÙƒØ§Ù†ÙˆÙ†ÛŒ ÛŒÛ•Ú©Û•Ù…"];
        e.defineLocale("ku", {
            months: s,
            monthsShort: s,
            weekdays: "ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø³ÛŽØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ".split("_"),
            weekdaysShort: "ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…_Ø³ÛŽØ´Ù‡â€ŒÙ…_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ".split("_"),
            weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ù‡_Ø´".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ|Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ/,
            isPM: function (e) {
                return /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ/.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ" : "Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ"
            },
            calendar: {
                sameDay: "[Ø¦Ù‡â€ŒÙ…Ø±Û† ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                nextDay: "[Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                nextWeek: "dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                lastDay: "[Ø¯ÙˆÛŽÙ†ÛŽ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                lastWeek: "dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ù„Ù‡â€Œ %s",
                past: "%s",
                s: "Ú†Ù‡â€ŒÙ†Ø¯ Ú†Ø±ÙƒÙ‡â€ŒÛŒÙ‡â€ŒÙƒ",
                ss: "Ú†Ø±ÙƒÙ‡â€Œ %d",
                m: "ÛŒÙ‡â€ŒÙƒ Ø®ÙˆÙ„Ù‡â€ŒÙƒ",
                mm: "%d Ø®ÙˆÙ„Ù‡â€ŒÙƒ",
                h: "ÛŒÙ‡â€ŒÙƒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±",
                hh: "%d ÙƒØ§ØªÚ˜Ù…ÛŽØ±",
                d: "ÛŒÙ‡â€ŒÙƒ Ú•Û†Ú˜",
                dd: "%d Ú•Û†Ú˜",
                M: "ÛŒÙ‡â€ŒÙƒ Ù…Ø§Ù†Ú¯",
                MM: "%d Ù…Ø§Ù†Ú¯",
                y: "ÛŒÙ‡â€ŒÙƒ Ø³Ø§Úµ",
                yy: "%d Ø³Ø§Úµ"
            },
            preparse: function (e) {
                return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, (function (e) {
                    return t[e]
                })).replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                })).replace(/,/g, "ØŒ")
            },
            week: {dow: 6, doy: 12}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            0: "-Ñ‡Ò¯",
            1: "-Ñ‡Ð¸",
            2: "-Ñ‡Ð¸",
            3: "-Ñ‡Ò¯",
            4: "-Ñ‡Ò¯",
            5: "-Ñ‡Ð¸",
            6: "-Ñ‡Ñ‹",
            7: "-Ñ‡Ð¸",
            8: "-Ñ‡Ð¸",
            9: "-Ñ‡Ñƒ",
            10: "-Ñ‡Ñƒ",
            20: "-Ñ‡Ñ‹",
            30: "-Ñ‡Ñƒ",
            40: "-Ñ‡Ñ‹",
            50: "-Ñ‡Ò¯",
            60: "-Ñ‡Ñ‹",
            70: "-Ñ‡Ð¸",
            80: "-Ñ‡Ð¸",
            90: "-Ñ‡Ñƒ",
            100: "-Ñ‡Ò¯"
        };
        e.defineLocale("ky", {
            months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸".split("_"),
            weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ".split("_"),
            weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT",
                nextDay: "[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT",
                nextWeek: "dddd [ÑÐ°Ð°Ñ‚] LT",
                lastDay: "[ÐšÐµÑ‡ÑÑ ÑÐ°Ð°Ñ‚] LT",
                lastWeek: "[Ó¨Ñ‚ÐºÓ©Ð½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ",
                past: "%s Ð¼ÑƒÑ€ÑƒÐ½",
                s: "Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´",
                m: "Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚",
                mm: "%d Ð¼Ò¯Ð½Ó©Ñ‚",
                h: "Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚",
                hh: "%d ÑÐ°Ð°Ñ‚",
                d: "Ð±Ð¸Ñ€ ÐºÒ¯Ð½",
                dd: "%d ÐºÒ¯Ð½",
                M: "Ð±Ð¸Ñ€ Ð°Ð¹",
                MM: "%d Ð°Ð¹",
                y: "Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»",
                yy: "%d Ð¶Ñ‹Ð»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
            ordinal: function (e) {
                return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return a ? n[t][0] : n[t][1]
        }

        function t(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var a = e % 10;
                return t(0 === a ? e / 10 : a)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return t(e)
            }
            return t(e /= 1e3)
        }

        e.defineLocale("lb", {
            months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[GÃ«schter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function (e) {
                    return t(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function (e) {
                    return t(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: a,
                mm: "%d Minutten",
                h: a,
                hh: "%d Stonnen",
                d: a,
                dd: "%d Deeg",
                M: a,
                MM: "%d MÃ©int",
                y: a,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("lo", {
            months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
            monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
            weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
            weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
            weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
            isPM: function (e) {
                return "àº•àº­àº™à»àº¥àº‡" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "àº•àº­àº™à»€àºŠàº»à»‰àº²" : "àº•àº­àº™à»àº¥àº‡"
            },
            calendar: {
                sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",
                nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",
                nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",
                lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
                lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "àº­àºµàº %s",
                past: "%sàºœà»ˆàº²àº™àº¡àº²",
                s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",
                ss: "%d àº§àº´àº™àº²àº—àºµ",
                m: "1 àº™àº²àº—àºµ",
                mm: "%d àº™àº²àº—àºµ",
                h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                d: "1 àº¡àº·à»‰",
                dd: "%d àº¡àº·à»‰",
                M: "1 à»€àº”àº·àº­àº™",
                MM: "%d à»€àº”àº·àº­àº™",
                y: "1 àº›àºµ",
                yy: "%d àº›àºµ"
            },
            dayOfMonthOrdinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
            ordinal: function (e) {
                return "àº—àºµà»ˆ" + e
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            ss: "sekundÄ—_sekundÅ¾iÅ³_sekundes",
            m: "minutÄ—_minutÄ—s_minutÄ™",
            mm: "minutÄ—s_minuÄiÅ³_minutes",
            h: "valanda_valandos_valandÄ…",
            hh: "valandos_valandÅ³_valandas",
            d: "diena_dienos_dienÄ…",
            dd: "dienos_dienÅ³_dienas",
            M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",
            MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",
            y: "metai_metÅ³_metus",
            yy: "metai_metÅ³_metus"
        };

        function t(e, a, t, s) {
            return a ? n(t)[0] : s ? n(t)[1] : n(t)[2]
        }

        function s(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function n(e) {
            return a[e].split("_")
        }

        function r(e, a, r, i) {
            var d = e + " ";
            return 1 === e ? d + t(0, a, r[0], i) : a ? d + (s(e) ? n(r)[1] : n(r)[0]) : i ? d + n(r)[1] : d + (s(e) ? n(r)[1] : n(r)[2])
        }

        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Å iandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[PraÄ—jusÄ¯] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s", past: "prieÅ¡ %s", s: function (e, a, t, s) {
                    return a ? "kelios sekundÄ—s" : s ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
                }, ss: r, m: t, mm: r, h: t, hh: r, d: t, dd: r, M: t, MM: r, y: t, yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
                return e + "-oji"
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            ss: "sekundes_sekundÄ“m_sekunde_sekundes".split("_"),
            m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
            mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
            h: "stundas_stundÄm_stunda_stundas".split("_"),
            hh: "stundas_stundÄm_stunda_stundas".split("_"),
            d: "dienas_dienÄm_diena_dienas".split("_"),
            dd: "dienas_dienÄm_diena_dienas".split("_"),
            M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
            MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function t(e, a, t) {
            return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1]
        }

        function s(e, s, n) {
            return e + " " + t(a[n], e, s)
        }

        function n(e, s, n) {
            return t(a[n], e, s)
        }

        e.defineLocale("lv", {
            months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Å odien pulksten] LT",
                nextDay: "[RÄ«t pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pÄ“c %s", past: "pirms %s", s: function (e, a) {
                    return a ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
                }, ss: s, m: n, mm: s, h: n, hh: s, d: n, dd: s, M: n, MM: s, y: n, yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, a) {
                return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
            }, translate: function (e, t, s) {
                var n = a.words[s];
                return 1 === s.length ? t ? n[0] : n[1] : e + " " + a.correctGrammaticalCase(e, n)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juÄe u] LT", lastWeek: function () {
                    return ["[proÅ¡le] [nedjelje] [u] LT", "[proÅ¡log] [ponedjeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srijede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: a.translate,
                m: a.translate,
                mm: a.translate,
                h: a.translate,
                hh: a.translate,
                d: "dan",
                dd: a.translate,
                M: "mjesec",
                MM: a.translate,
                y: "godinu",
                yy: a.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("mi", {
            months: "Kohi-tÄte_Hui-tanguru_PoutÅ«-te-rangi_Paenga-whÄwhÄ_Haratua_Pipiri_HÅngoingoi_Here-turi-kÅkÄ_Mahuru_Whiringa-Ä-nuku_Whiringa-Ä-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_HÅngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "RÄtapu_Mane_TÅ«rei_Wenerei_TÄite_Paraire_HÄtarei".split("_"),
            weekdaysShort: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
            weekdaysMin: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hÄ“kona ruarua",
                ss: "%d hÄ“kona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("mk", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
            weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
                nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "Ð¿Ñ€ÐµÐ´ %s",
                s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: "ÐµÐ´Ð½Ð° Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                h: "ÐµÐ´ÐµÐ½ Ñ‡Ð°Ñ",
                hh: "%d Ñ‡Ð°ÑÐ°",
                d: "ÐµÐ´ÐµÐ½ Ð´ÐµÐ½",
                dd: "%d Ð´ÐµÐ½Ð°",
                M: "ÐµÐ´ÐµÐ½ Ð¼ÐµÑÐµÑ†",
                MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",
                y: "ÐµÐ´Ð½Ð° Ð³Ð¾Ð´Ð¸Ð½Ð°",
                yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function (e) {
                var a = e % 10, t = e % 100;
                return 0 === e ? e + "-ÐµÐ²" : 0 === t ? e + "-ÐµÐ½" : t > 10 && t < 20 ? e + "-Ñ‚Ð¸" : 1 === a ? e + "-Ð²Ð¸" : 2 === a ? e + "-Ñ€Ð¸" : 7 === a || 8 === a ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ml", {
            months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),
            monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),
            monthsParseExact: !0,
            weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),
            weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),
            weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),
            longDateFormat: {
                LT: "A h:mm -à´¨àµ",
                LTS: "A h:mm:ss -à´¨àµ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -à´¨àµ",
                LLLL: "dddd, D MMMM YYYY, A h:mm -à´¨àµ"
            },
            calendar: {
                sameDay: "[à´‡à´¨àµà´¨àµ] LT",
                nextDay: "[à´¨à´¾à´³àµ†] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT",
                lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à´•à´´à´¿à´žàµà´žàµ",
                past: "%s à´®àµàµ»à´ªàµ",
                s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",
                ss: "%d à´¸àµ†à´•àµà´•àµ»à´¡àµ",
                m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",
                mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ",
                h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚",
                dd: "%d à´¦à´¿à´µà´¸à´‚",
                M: "à´’à´°àµ à´®à´¾à´¸à´‚",
                MM: "%d à´®à´¾à´¸à´‚",
                y: "à´’à´°àµ à´µàµ¼à´·à´‚",
                yy: "%d à´µàµ¼à´·à´‚"
            },
            meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à´°à´¾à´¤àµà´°à´¿" === a && e >= 4 || "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" === a || "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" === a ? e + 12 : e
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à´°à´¾à´¤àµà´°à´¿" : e < 12 ? "à´°à´¾à´µà´¿à´²àµ†" : e < 17 ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : e < 20 ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            switch (t) {
                case"s":
                    return a ? "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´" : "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½";
                case"ss":
                    return e + (a ? " ÑÐµÐºÑƒÐ½Ð´" : " ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½");
                case"m":
                case"mm":
                    return e + (a ? " Ð¼Ð¸Ð½ÑƒÑ‚" : " Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹Ð½");
                case"h":
                case"hh":
                    return e + (a ? " Ñ†Ð°Ð³" : " Ñ†Ð°Ð³Ð¸Ð¹Ð½");
                case"d":
                case"dd":
                    return e + (a ? " Ó©Ð´Ó©Ñ€" : " Ó©Ð´Ñ€Ð¸Ð¹Ð½");
                case"M":
                case"MM":
                    return e + (a ? " ÑÐ°Ñ€" : " ÑÐ°Ñ€Ñ‹Ð½");
                case"y":
                case"yy":
                    return e + (a ? " Ð¶Ð¸Ð»" : " Ð¶Ð¸Ð»Ð¸Ð¹Ð½");
                default:
                    return e
            }
        }

        e.defineLocale("mn", {
            months: "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¥Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð“ÑƒÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ó©Ñ€Ó©Ð²Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¢Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð—ÑƒÑ€Ð³Ð°Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ð¾Ð»Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÐ°Ð¹Ð¼Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð•ÑÐ´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€".split("_"),
            monthsShort: "1 ÑÐ°Ñ€_2 ÑÐ°Ñ€_3 ÑÐ°Ñ€_4 ÑÐ°Ñ€_5 ÑÐ°Ñ€_6 ÑÐ°Ñ€_7 ÑÐ°Ñ€_8 ÑÐ°Ñ€_9 ÑÐ°Ñ€_10 ÑÐ°Ñ€_11 ÑÐ°Ñ€_12 ÑÐ°Ñ€".split("_"),
            monthsParseExact: !0,
            weekdays: "ÐÑÐ¼_Ð”Ð°Ð²Ð°Ð°_ÐœÑÐ³Ð¼Ð°Ñ€_Ð›Ñ…Ð°Ð³Ð²Ð°_ÐŸÒ¯Ñ€ÑÐ²_Ð‘Ð°Ð°ÑÐ°Ð½_Ð‘ÑÐ¼Ð±Ð°".split("_"),
            weekdaysShort: "ÐÑÐ¼_Ð”Ð°Ð²_ÐœÑÐ³_Ð›Ñ…Ð°_ÐŸÒ¯Ñ€_Ð‘Ð°Ð°_Ð‘ÑÐ¼".split("_"),
            weekdaysMin: "ÐÑ_Ð”Ð°_ÐœÑ_Ð›Ñ…_ÐŸÒ¯_Ð‘Ð°_Ð‘Ñ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D",
                LLL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm",
                LLLL: "dddd, YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm"
            },
            meridiemParse: /Ò®Ó¨|Ò®Ð¥/i,
            isPM: function (e) {
                return "Ò®Ð¥" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "Ò®Ó¨" : "Ò®Ð¥"
            },
            calendar: {
                sameDay: "[Ó¨Ð½Ó©Ó©Ð´Ó©Ñ€] LT",
                nextDay: "[ÐœÐ°Ñ€Ð³Ð°Ð°Ñˆ] LT",
                nextWeek: "[Ð˜Ñ€ÑÑ…] dddd LT",
                lastDay: "[Ó¨Ñ‡Ð¸Ð³Ð´Ó©Ñ€] LT",
                lastWeek: "[Ó¨Ð½Ð³Ó©Ñ€ÑÓ©Ð½] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ð´Ð°Ñ€Ð°Ð°",
                past: "%s Ó©Ð¼Ð½Ó©",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2} Ó©Ð´Ó©Ñ€/,
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + " Ó©Ð´Ó©Ñ€";
                    default:
                        return e
                }
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"},
            t = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            };

        function s(e, a, t, s) {
            var n = "";
            if (a) switch (t) {
                case"s":
                    n = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
                    break;
                case"ss":
                    n = "%d à¤¸à¥‡à¤•à¤‚à¤¦";
                    break;
                case"m":
                    n = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
                    break;
                case"mm":
                    n = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
                    break;
                case"h":
                    n = "à¤à¤• à¤¤à¤¾à¤¸";
                    break;
                case"hh":
                    n = "%d à¤¤à¤¾à¤¸";
                    break;
                case"d":
                    n = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
                    break;
                case"dd":
                    n = "%d à¤¦à¤¿à¤µà¤¸";
                    break;
                case"M":
                    n = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
                    break;
                case"MM":
                    n = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
                    break;
                case"y":
                    n = "à¤à¤• à¤µà¤°à¥à¤·";
                    break;
                case"yy":
                    n = "%d à¤µà¤°à¥à¤·à¥‡"
            } else switch (t) {
                case"s":
                    n = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                    break;
                case"ss":
                    n = "%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                    break;
                case"m":
                    n = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
                    break;
                case"mm":
                    n = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
                    break;
                case"h":
                    n = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
                    break;
                case"hh":
                    n = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
                    break;
                case"d":
                    n = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
                    break;
                case"dd":
                    n = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
                    break;
                case"M":
                    n = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
                    break;
                case"MM":
                    n = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
                    break;
                case"y":
                    n = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
                    break;
                case"yy":
                    n = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
            }
            return n.replace(/%d/i, e)
        }

        e.defineLocale("mr", {
            months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
            weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
            longDateFormat: {
                LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¤•à¤¾à¤²] LT",
                lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¤®à¤§à¥à¤¯à¥‡",
                past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
                s: s,
                ss: s,
                m: s,
                mm: s,
                h: s,
                hh: s,
                d: s,
                dd: s,
                M: s,
                MM: s,
                y: s,
                yy: s
            },
            preparse: function (e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à¤ªà¤¹à¤¾à¤Ÿà¥‡|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€|à¤°à¤¾à¤¤à¥à¤°à¥€/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à¤ªà¤¹à¤¾à¤Ÿà¥‡" === a || "à¤¸à¤•à¤¾à¤³à¥€" === a ? e : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === a || "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === a || "à¤°à¤¾à¤¤à¥à¤°à¥€" === a ? e >= 12 ? e : e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e >= 0 && e < 6 ? "à¤ªà¤¹à¤¾à¤Ÿà¥‡" : e < 12 ? "à¤¸à¤•à¤¾à¤³à¥€" : e < 17 ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : e < 20 ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ä unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_DiÄ‹embru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ä un_Lul_Aww_Set_Ott_Nov_DiÄ‹".split("_"),
            weekdays: "Il-Ä¦add_It-Tnejn_It-Tlieta_L-ErbgÄ§a_Il-Ä¦amis_Il-Ä imgÄ§a_Is-Sibt".split("_"),
            weekdaysShort: "Ä¦ad_Tne_Tli_Erb_Ä¦am_Ä im_Sib".split("_"),
            weekdaysMin: "Ä¦a_Tn_Tl_Er_Ä¦a_Ä i_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[GÄ§ada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraÄ§ fil-]LT",
                lastWeek: "dddd [li gÄ§adda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "fâ€™ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegÄ§a",
                hh: "%d siegÄ§at",
                d: "Ä¡urnata",
                dd: "%d Ä¡ranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "á", 2: "á‚", 3: "áƒ", 4: "á„", 5: "á…", 6: "á†", 7: "á‡", 8: "áˆ", 9: "á‰", 0: "á€"},
            t = {
                "á": "1",
                "á‚": "2",
                "áƒ": "3",
                "á„": "4",
                "á…": "5",
                "á†": "6",
                "á‡": "7",
                "áˆ": "8",
                "á‰": "9",
                "á€": "0"
            };
        e.defineLocale("my", {
            months: "á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),
            monthsShort: "á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),
            weekdays: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),
            weekdaysShort: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
            weekdaysMin: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[á€šá€”á€±.] LT [á€™á€¾á€¬]",
                nextDay: "[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",
                nextWeek: "dddd LT [á€™á€¾á€¬]",
                lastDay: "[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",
                lastWeek: "[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",
                sameElse: "L"
            },
            relativeTime: {
                future: "á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",
                past: "á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",
                s: "á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",
                ss: "%d á€…á€€á€¹á€€á€”á€·á€º",
                m: "á€á€…á€ºá€™á€­á€”á€…á€º",
                mm: "%d á€™á€­á€”á€…á€º",
                h: "á€á€…á€ºá€”á€¬á€›á€®",
                hh: "%d á€”á€¬á€›á€®",
                d: "á€á€…á€ºá€›á€€á€º",
                dd: "%d á€›á€€á€º",
                M: "á€á€…á€ºá€œ",
                MM: "%d á€œ",
                y: "á€á€…á€ºá€”á€¾á€…á€º",
                yy: "%d á€”á€¾á€…á€º"
            },
            preparse: function (e) {
                return e.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
            weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
            weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i gÃ¥r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                w: "en uke",
                ww: "%d uker",
                M: "en mÃ¥ned",
                MM: "%d mÃ¥neder",
                y: "ett Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"},
            t = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            };
        e.defineLocale("ne", {
            months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
            weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
            weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
            },
            preparse: function (e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¤¿" === a ? e < 4 ? e : e + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === a ? e : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === a ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤à¤" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 3 ? "à¤°à¤¾à¤¤à¤¿" : e < 12 ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : e < 16 ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : e < 20 ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
                nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
                lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
                lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¤®à¤¾",
                past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
                s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
                ss: "%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡",
                m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
                hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
                d: "à¤à¤• à¤¦à¤¿à¤¨",
                dd: "%d à¤¦à¤¿à¤¨",
                M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
                MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
                y: "à¤à¤• à¤¬à¤°à¥à¤·",
                yy: "%d à¤¬à¤°à¥à¤·"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            s = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            n = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, s) {
                return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "Ã©Ã©n minuut",
                mm: "%d minuten",
                h: "Ã©Ã©n uur",
                hh: "%d uur",
                d: "Ã©Ã©n dag",
                dd: "%d dagen",
                w: "Ã©Ã©n week",
                ww: "%d weken",
                M: "Ã©Ã©n maand",
                MM: "%d maanden",
                y: "Ã©Ã©n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            s = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            n = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, s) {
                return e ? /-MMM-/.test(s) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "Ã©Ã©n minuut",
                mm: "%d minuten",
                h: "Ã©Ã©n uur",
                hh: "%d uur",
                d: "Ã©Ã©n dag",
                dd: "%d dagen",
                M: "Ã©Ã©n maand",
                MM: "%d maanden",
                y: "Ã©Ã©n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "su._mÃ¥._ty._on._to._fr._lau.".split("_"),
            weekdaysMin: "su_mÃ¥_ty_on_to_fr_la".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I gÃ¥r klokka] LT",
                lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                w: "ei veke",
                ww: "%d veker",
                M: "ein mÃ¥nad",
                MM: "%d mÃ¥nader",
                y: "eit Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("oc-lnc", {
            months: {
                standalone: "geniÃ¨r_febriÃ¨r_marÃ§_abril_mai_junh_julhet_agost_setembre_octÃ²bre_novembre_decembre".split("_"),
                format: "de geniÃ¨r_de febriÃ¨r_de marÃ§_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octÃ²bre_de novembre_de decembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._marÃ§_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimenge_diluns_dimars_dimÃ¨cres_dijÃ²us_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: "[uÃ¨i a] LT",
                nextDay: "[deman a] LT",
                nextWeek: "dddd [a] LT",
                lastDay: "[iÃ¨r a] LT",
                lastWeek: "dddd [passat a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquÃ­ %s",
                past: "fa %s",
                s: "unas segondas",
                ss: "%d segondas",
                m: "una minuta",
                mm: "%d minutas",
                h: "una ora",
                hh: "%d oras",
                d: "un jorn",
                dd: "%d jorns",
                M: "un mes",
                MM: "%d meses",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
            ordinal: function (e, a) {
                var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨";
                return "w" !== a && "W" !== a || (t = "a"), e + t
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à©§", 2: "à©¨", 3: "à©©", 4: "à©ª", 5: "à©«", 6: "à©¬", 7: "à©­", 8: "à©®", 9: "à©¯", 0: "à©¦"},
            t = {
                "à©§": "1",
                "à©¨": "2",
                "à©©": "3",
                "à©ª": "4",
                "à©«": "5",
                "à©¬": "6",
                "à©­": "7",
                "à©®": "8",
                "à©¯": "9",
                "à©¦": "0"
            };
        e.defineLocale("pa-in", {
            months: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
            monthsShort: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
            weekdays: "à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°".split("_"),
            weekdaysShort: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
            weekdaysMin: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
            longDateFormat: {
                LT: "A h:mm à¨µà¨œà©‡",
                LTS: "A h:mm:ss à¨µà¨œà©‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¨µà¨œà©‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡"
            },
            calendar: {
                sameDay: "[à¨…à¨œ] LT",
                nextDay: "[à¨•à¨²] LT",
                nextWeek: "[à¨…à¨—à¨²à¨¾] dddd, LT",
                lastDay: "[à¨•à¨²] LT",
                lastWeek: "[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¨µà¨¿à©±à¨š",
                past: "%s à¨ªà¨¿à¨›à¨²à©‡",
                s: "à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ",
                ss: "%d à¨¸à¨•à¨¿à©°à¨Ÿ",
                m: "à¨‡à¨• à¨®à¨¿à©°à¨Ÿ",
                mm: "%d à¨®à¨¿à©°à¨Ÿ",
                h: "à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾",
                hh: "%d à¨˜à©°à¨Ÿà©‡",
                d: "à¨‡à©±à¨• à¨¦à¨¿à¨¨",
                dd: "%d à¨¦à¨¿à¨¨",
                M: "à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾",
                MM: "%d à¨®à¨¹à©€à¨¨à©‡",
                y: "à¨‡à©±à¨• à¨¸à¨¾à¨²",
                yy: "%d à¨¸à¨¾à¨²"
            },
            preparse: function (e) {
                return e.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à¨°à¨¾à¨¤" === a ? e < 4 ? e : e + 12 : "à¨¸à¨µà©‡à¨°" === a ? e : "à¨¦à©à¨ªà¨¹à¨¿à¨°" === a ? e >= 10 ? e : e + 12 : "à¨¸à¨¼à¨¾à¨®" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à¨°à¨¾à¨¤" : e < 10 ? "à¨¸à¨µà©‡à¨°" : e < 17 ? "à¨¦à©à¨ªà¨¹à¨¿à¨°" : e < 20 ? "à¨¸à¨¼à¨¾à¨®" : "à¨°à¨¾à¨¤"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
            t = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_"),
            s = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paÅº/i, /^lis/i, /^gru/i];

        function n(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function r(e, a, t) {
            var s = e + " ";
            switch (t) {
                case"ss":
                    return s + (n(e) ? "sekundy" : "sekund");
                case"m":
                    return a ? "minuta" : "minutÄ™";
                case"mm":
                    return s + (n(e) ? "minuty" : "minut");
                case"h":
                    return a ? "godzina" : "godzinÄ™";
                case"hh":
                    return s + (n(e) ? "godziny" : "godzin");
                case"ww":
                    return s + (n(e) ? "tygodnie" : "tygodni");
                case"MM":
                    return s + (n(e) ? "miesiÄ…ce" : "miesiÄ™cy");
                case"yy":
                    return s + (n(e) ? "lata" : "lat")
            }
        }

        e.defineLocale("pl", {
            months: function (e, s) {
                return e ? /D MMMM/.test(s) ? t[e.month()] : a[e.month()] : a
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_Å›r_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DziÅ› o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielÄ™ o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W Å›rodÄ™ o] LT";
                        case 6:
                            return "[W sobotÄ™ o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                        case 3:
                            return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                        case 6:
                            return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                        default:
                            return "[W zeszÅ‚y] dddd [o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: "1 dzieÅ„",
                dd: "%d dni",
                w: "tydzieÅ„",
                ww: r,
                M: "miesiÄ…c",
                MM: r,
                y: "rok",
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("pt", {
            months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
            weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje Ã s] LT",
                nextDay: "[AmanhÃ£ Ã s] LT",
                nextWeek: "dddd [Ã s] LT",
                lastDay: "[Ontem Ã s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "hÃ¡ %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                w: "uma semana",
                ww: "%d semanas",
                M: "um mÃªs",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"),
            weekdaysMin: "do_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje Ã s] LT",
                nextDay: "[AmanhÃ£ Ã s] LT",
                nextWeek: "dddd [Ã s] LT",
                lastDay: "[Ontem Ã s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "hÃ¡ %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mÃªs",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            invalidDate: "Data invÃ¡lida"
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t) {
            var s = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (s = " de "), e + s + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                ww: "sÄƒptÄƒmÃ¢ni",
                MM: "luni",
                yy: "ani"
            }[t]
        }

        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mÃ¢ine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s Ã®n urmÄƒ",
                s: "cÃ¢teva secunde",
                ss: a,
                m: "un minut",
                mm: a,
                h: "o orÄƒ",
                hh: a,
                d: "o zi",
                dd: a,
                w: "o sÄƒptÄƒmÃ¢nÄƒ",
                ww: a,
                M: "o lunÄƒ",
                MM: a,
                y: "un an",
                yy: a
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t) {
            var s, n;
            return "m" === t ? a ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : e + " " + (s = +e, n = {
                ss: a ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                mm: a ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
                hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
                dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
                ww: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð½ÐµÐ´ÐµÐ»Ð¸_Ð½ÐµÐ´ÐµÐ»ÑŒ",
                MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
                yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
            }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? n[1] : n[2])
        }

        var t = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];
        e.defineLocale("ru", {
            months: {
                format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
                standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
            },
            monthsShort: {
                format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"),
                standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_")
            },
            weekdays: {
                standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
                format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
                isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?] ?dddd/
            },
            weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            monthsParse: t,
            longMonthsParse: t,
            shortMonthsParse: t,
            monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
            monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ð³.",
                LLL: "D MMMM YYYY Ð³., H:mm",
                LLLL: "dddd, D MMMM YYYY Ð³., H:mm"
            },
            calendar: {
                sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
                nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
                nextWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                lastWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ñ‡ÐµÑ€ÐµÐ· %s",
                past: "%s Ð½Ð°Ð·Ð°Ð´",
                s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
                ss: a,
                m: a,
                mm: a,
                h: "Ñ‡Ð°Ñ",
                hh: a,
                d: "Ð´ÐµÐ½ÑŒ",
                dd: a,
                w: "Ð½ÐµÐ´ÐµÐ»Ñ",
                ww: a,
                M: "Ð¼ÐµÑÑÑ†",
                MM: a,
                y: "Ð³Ð¾Ð´",
                yy: a
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
            isPM: function (e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ð¸" : e < 12 ? "ÑƒÑ‚Ñ€Ð°" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"M":
                    case"d":
                    case"DDD":
                        return e + "-Ð¹";
                    case"D":
                        return e + "-Ð³Ð¾";
                    case"w":
                    case"W":
                        return e + "-Ñ";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = ["Ø¬Ù†ÙˆØ±ÙŠ", "ÙÙŠØ¨Ø±ÙˆØ±ÙŠ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÙŠÙ„", "Ù…Ø¦ÙŠ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¡Ù", "Ø¢Ú¯Ø³Ù½", "Ø³ÙŠÙ¾Ù½Ù…Ø¨Ø±", "Ø¢ÚªÙ½ÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "ÚŠØ³Ù…Ø¨Ø±"],
            t = ["Ø¢Ú†Ø±", "Ø³ÙˆÙ…Ø±", "Ø§Ú±Ø§Ø±Ùˆ", "Ø§Ø±Ø¨Ø¹", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹", "Ú‡Ù†Ú‡Ø±"];
        e.defineLocale("sd", {
            months: a,
            monthsShort: a,
            weekdays: t,
            weekdaysShort: t,
            weekdaysMin: t,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ddddØŒ D MMMM YYYY HH:mm"
            },
            meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
            isPM: function (e) {
                return "Ø´Ø§Ù…" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ú„] LT",
                nextDay: "[Ø³Ú€Ø§Ú»ÙŠ] LT",
                nextWeek: "dddd [Ø§Ú³ÙŠÙ† Ù‡ÙØªÙŠ ØªÙŠ] LT",
                lastDay: "[ÚªØ§Ù„Ù‡Ù‡] LT",
                lastWeek: "[Ú¯Ø²Ø±ÙŠÙ„ Ù‡ÙØªÙŠ] dddd [ØªÙŠ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ù¾ÙˆØ¡",
                past: "%s Ø§Ú³",
                s: "Ú†Ù†Ø¯ Ø³ÙŠÚªÙ†ÚŠ",
                ss: "%d Ø³ÙŠÚªÙ†ÚŠ",
                m: "Ù‡Úª Ù…Ù†Ù½",
                mm: "%d Ù…Ù†Ù½",
                h: "Ù‡Úª ÚªÙ„Ø§Úª",
                hh: "%d ÚªÙ„Ø§Úª",
                d: "Ù‡Úª ÚÙŠÙ†Ù‡Ù†",
                dd: "%d ÚÙŠÙ†Ù‡Ù†",
                M: "Ù‡Úª Ù…Ù‡ÙŠÙ†Ùˆ",
                MM: "%d Ù…Ù‡ÙŠÙ†Ø§",
                y: "Ù‡Úª Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function (e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("se", {
            months: "oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"),
            monthsShort: "oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"),
            weekdays: "sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"),
            weekdaysShort: "sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geaÅ¾es",
                past: "maÅ‹it %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mÃ¡nnu",
                MM: "%d mÃ¡nut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("si", {
            months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
            monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),
            weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
            weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),
            weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[à¶…à¶¯] LT[à¶§]",
                nextDay: "[à·„à·™à¶§] LT[à¶§]",
                nextWeek: "dddd LT[à¶§]",
                lastDay: "[à¶Šà¶ºà·š] LT[à¶§]",
                lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¶šà·’à¶±à·Š",
                past: "%sà¶šà¶§ à¶´à·™à¶»",
                s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",
                ss: "à¶­à¶­à·Šà¶´à¶» %d",
                m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",
                mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
                h: "à¶´à·à¶º",
                hh: "à¶´à·à¶º %d",
                d: "à¶¯à·’à¶±à¶º",
                dd: "à¶¯à·’à¶± %d",
                M: "à¶¸à·à·ƒà¶º",
                MM: "à¶¸à·à·ƒ %d",
                y: "à·€à·ƒà¶»",
                yy: "à·€à·ƒà¶» %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} à·€à·à¶±à·’/,
            ordinal: function (e) {
                return e + " à·€à·à¶±à·’"
            },
            meridiemParse: /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./,
            isPM: function (e) {
                return "à¶´.à·€." === e || "à¶´à·ƒà·Š à·€à¶»à·”" === e
            },
            meridiem: function (e, a, t) {
                return e > 11 ? t ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”" : t ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
            t = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");

        function s(e) {
            return e > 1 && e < 5
        }

        function n(e, a, t, n) {
            var r = e + " ";
            switch (t) {
                case"s":
                    return a || n ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                case"ss":
                    return a || n ? r + (s(e) ? "sekundy" : "sekÃºnd") : r + "sekundami";
                case"m":
                    return a ? "minÃºta" : n ? "minÃºtu" : "minÃºtou";
                case"mm":
                    return a || n ? r + (s(e) ? "minÃºty" : "minÃºt") : r + "minÃºtami";
                case"h":
                    return a ? "hodina" : n ? "hodinu" : "hodinou";
                case"hh":
                    return a || n ? r + (s(e) ? "hodiny" : "hodÃ­n") : r + "hodinami";
                case"d":
                    return a || n ? "deÅˆ" : "dÅˆom";
                case"dd":
                    return a || n ? r + (s(e) ? "dni" : "dnÃ­") : r + "dÅˆami";
                case"M":
                    return a || n ? "mesiac" : "mesiacom";
                case"MM":
                    return a || n ? r + (s(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                case"y":
                    return a || n ? "rok" : "rokom";
                case"yy":
                    return a || n ? r + (s(e) ? "roky" : "rokov") : r + "rokmi"
            }
        }

        e.defineLocale("sk", {
            months: a,
            monthsShort: t,
            weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo Å¡tvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                }, lastDay: "[vÄera o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulÃº nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[minulÃ½] dddd [o] LT";
                        case 3:
                            return "[minulÃº stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [o] LT";
                        case 6:
                            return "[minulÃº sobotu o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = e + " ";
            switch (t) {
                case"s":
                    return a || s ? "nekaj sekund" : "nekaj sekundami";
                case"ss":
                    return n += 1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || s ? "sekundi" : "sekundah" : e < 5 ? a || s ? "sekunde" : "sekundah" : "sekund";
                case"m":
                    return a ? "ena minuta" : "eno minuto";
                case"mm":
                    return n += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || s ? "minuti" : "minutama" : e < 5 ? a || s ? "minute" : "minutami" : a || s ? "minut" : "minutami";
                case"h":
                    return a ? "ena ura" : "eno uro";
                case"hh":
                    return n += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || s ? "uri" : "urama" : e < 5 ? a || s ? "ure" : "urami" : a || s ? "ur" : "urami";
                case"d":
                    return a || s ? "en dan" : "enim dnem";
                case"dd":
                    return n += 1 === e ? a || s ? "dan" : "dnem" : 2 === e ? a || s ? "dni" : "dnevoma" : a || s ? "dni" : "dnevi";
                case"M":
                    return a || s ? "en mesec" : "enim mesecem";
                case"MM":
                    return n += 1 === e ? a || s ? "mesec" : "mesecem" : 2 === e ? a || s ? "meseca" : "mesecema" : e < 5 ? a || s ? "mesece" : "meseci" : a || s ? "mesecev" : "meseci";
                case"y":
                    return a || s ? "eno leto" : "enim letom";
                case"yy":
                    return n += 1 === e ? a || s ? "leto" : "letom" : 2 === e ? a || s ? "leti" : "letoma" : e < 5 ? a || s ? "leta" : "leti" : a || s ? "let" : "leti"
            }
        }

        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                }, lastDay: "[vÄeraj ob] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prejÅ¡njo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejÅ¡njo] [sredo] [ob] LT";
                        case 6:
                            return "[prejÅ¡njo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejÅ¡nji] dddd [ob] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "Äez %s",
                past: "pred %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),
            weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),
            weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
                return "M" === e.charAt(0)
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot nÃ«] LT",
                nextDay: "[NesÃ«r nÃ«] LT",
                nextWeek: "dddd [nÃ«] LT",
                lastDay: "[Dje nÃ«] LT",
                lastWeek: "dddd [e kaluar nÃ«] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nÃ« %s",
                past: "%s mÃ« parÃ«",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "njÃ« minutÃ«",
                mm: "%d minuta",
                h: "njÃ« orÃ«",
                hh: "%d orÃ«",
                d: "njÃ« ditÃ«",
                dd: "%d ditÃ«",
                M: "njÃ« muaj",
                MM: "%d muaj",
                y: "njÃ« vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, a) {
                return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
            }, translate: function (e, t, s) {
                var n = a.words[s];
                return 1 === s.length ? t ? n[0] : n[1] : e + " " + a.correctGrammaticalCase(e, n)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D. M. YYYY.",
                LL: "D. MMMM YYYY.",
                LLL: "D. MMMM YYYY. H:mm",
                LLLL: "dddd, D. MMMM YYYY. H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juÄe u] LT", lastWeek: function () {
                    return ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: a.translate,
                m: a.translate,
                mm: a.translate,
                h: a.translate,
                hh: a.translate,
                d: "dan",
                dd: a.translate,
                M: "mesec",
                MM: a.translate,
                y: "godinu",
                yy: a.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            words: {
                ss: ["ÑÐµÐºÑƒÐ½Ð´Ð°", "ÑÐµÐºÑƒÐ½Ð´Ðµ", "ÑÐµÐºÑƒÐ½Ð´Ð¸"],
                m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],
                mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
                h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],
                hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],
                dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],
                MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],
                yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]
            }, correctGrammaticalCase: function (e, a) {
                return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
            }, translate: function (e, t, s) {
                var n = a.words[s];
                return 1 === s.length ? t ? n[0] : n[1] : e + " " + a.correctGrammaticalCase(e, n)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€_Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€_Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€_Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€".split("_"),
            monthsShort: "Ñ˜Ð°Ð½._Ñ„ÐµÐ±._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ‚._Ð½Ð¾Ð²._Ð´ÐµÑ†.".split("_"),
            monthsParseExact: !0,
            weekdays: "Ð½ÐµÐ´ÐµÑ™Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº_ÑƒÑ‚Ð¾Ñ€Ð°Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº_Ð¿ÐµÑ‚Ð°Ðº_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑƒÑ‚Ð¾._ÑÑ€Ðµ._Ñ‡ÐµÑ‚._Ð¿ÐµÑ‚._ÑÑƒÐ±.".split("_"),
            weekdaysMin: "Ð½Ðµ_Ð¿Ð¾_ÑƒÑ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_ÑÑƒ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D. M. YYYY.",
                LL: "D. MMMM YYYY.",
                LLL: "D. MMMM YYYY. H:mm",
                LLLL: "dddd, D. MMMM YYYY. H:mm"
            },
            calendar: {
                sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT", nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                        case 3:
                            return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                        case 6:
                            return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ñƒ] dddd [Ñƒ] LT"
                    }
                }, lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT", lastWeek: function () {
                    return ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "Ð¿Ñ€Ðµ %s",
                s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: a.translate,
                m: a.translate,
                mm: a.translate,
                h: a.translate,
                hh: a.translate,
                d: "Ð´Ð°Ð½",
                dd: a.translate,
                M: "Ð¼ÐµÑÐµÑ†",
                MM: a.translate,
                y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                yy: a.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, a, t) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "ekuseni" === a ? e : "emini" === a ? e >= 11 ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
            weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
            weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[IgÃ¥r] LT",
                nextWeek: "[PÃ¥] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "fÃ¶r %s sedan",
                s: "nÃ¥gra sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en mÃ¥nad",
                MM: "%d mÃ¥nader",
                y: "ett Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === a || 2 === a ? ":a" : ":e")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "hh:mm A",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "siku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {1: "à¯§", 2: "à¯¨", 3: "à¯©", 4: "à¯ª", 5: "à¯«", 6: "à¯¬", 7: "à¯­", 8: "à¯®", 9: "à¯¯", 0: "à¯¦"},
            t = {
                "à¯§": "1",
                "à¯¨": "2",
                "à¯©": "3",
                "à¯ª": "4",
                "à¯«": "5",
                "à¯¬": "6",
                "à¯­": "7",
                "à¯®": "8",
                "à¯¯": "9",
                "à¯¦": "0"
            };
        e.defineLocale("ta", {
            months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
            monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
            weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
            weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
            weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[à®‡à®©à¯à®±à¯] LT",
                nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
                lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à®‡à®²à¯",
                past: "%s à®®à¯à®©à¯",
                s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                ss: "%d à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
                mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
                h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                d: "à®’à®°à¯ à®¨à®¾à®³à¯",
                dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
                M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
                MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
                y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
                yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
            },
            dayOfMonthOrdinalParse: /\d{1,2}à®µà®¤à¯/,
            ordinal: function (e) {
                return e + "à®µà®¤à¯"
            },
            preparse: function (e) {
                return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, (function (e) {
                    return t[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
            meridiem: function (e, a, t) {
                return e < 2 ? " à®¯à®¾à®®à®®à¯" : e < 6 ? " à®µà¯ˆà®•à®±à¯ˆ" : e < 10 ? " à®•à®¾à®²à¯ˆ" : e < 14 ? " à®¨à®£à¯à®ªà®•à®²à¯" : e < 18 ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : e < 22 ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯"
            },
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à®¯à®¾à®®à®®à¯" === a ? e < 2 ? e : e + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === a || "à®•à®¾à®²à¯ˆ" === a || "à®¨à®£à¯à®ªà®•à®²à¯" === a && e >= 10 ? e : e + 12
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("te", {
            months: "à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±à°²à±ˆ_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"),
            monthsShort: "à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±à°²à±ˆ_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"),
            monthsParseExact: !0,
            weekdays: "à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"),
            weekdaysShort: "à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"),
            weekdaysMin: "à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à°¨à±‡à°¡à±] LT",
                nextDay: "[à°°à±‡à°ªà±] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à°¨à°¿à°¨à±à°¨] LT",
                lastWeek: "[à°—à°¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à°²à±‹",
                past: "%s à°•à±à°°à°¿à°¤à°‚",
                s: "à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±",
                ss: "%d à°¸à±†à°•à°¨à±à°²à±",
                m: "à°’à°• à°¨à°¿à°®à°¿à°·à°‚",
                mm: "%d à°¨à°¿à°®à°¿à°·à°¾à°²à±",
                h: "à°’à°• à°—à°‚à°Ÿ",
                hh: "%d à°—à°‚à°Ÿà°²à±",
                d: "à°’à°• à°°à±‹à°œà±",
                dd: "%d à°°à±‹à°œà±à°²à±",
                M: "à°’à°• à°¨à±†à°²",
                MM: "%d à°¨à±†à°²à°²à±",
                y: "à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚",
                yy: "%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}à°µ/,
            ordinal: "%dà°µ",
            meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "à°°à°¾à°¤à±à°°à°¿" === a ? e < 4 ? e : e + 12 : "à°‰à°¦à°¯à°‚" === a ? e : "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" === a ? e >= 10 ? e : e + 12 : "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "à°°à°¾à°¤à±à°°à°¿" : e < 10 ? "à°‰à°¦à°¯à°‚" : e < 17 ? "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" : e < 20 ? "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" : "à°°à°¾à°¤à±à°°à°¿"
            },
            week: {dow: 0, doy: 6}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_JuÃ±u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "segundu balun",
                ss: "segundu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            0: "-ÑƒÐ¼",
            1: "-ÑƒÐ¼",
            2: "-ÑŽÐ¼",
            3: "-ÑŽÐ¼",
            4: "-ÑƒÐ¼",
            5: "-ÑƒÐ¼",
            6: "-ÑƒÐ¼",
            7: "-ÑƒÐ¼",
            8: "-ÑƒÐ¼",
            9: "-ÑƒÐ¼",
            10: "-ÑƒÐ¼",
            12: "-ÑƒÐ¼",
            13: "-ÑƒÐ¼",
            20: "-ÑƒÐ¼",
            30: "-ÑŽÐ¼",
            40: "-ÑƒÐ¼",
            50: "-ÑƒÐ¼",
            60: "-ÑƒÐ¼",
            70: "-ÑƒÐ¼",
            80: "-ÑƒÐ¼",
            90: "-ÑƒÐ¼",
            100: "-ÑƒÐ¼"
        };
        e.defineLocale("tg", {
            months: {
                format: "ÑÐ½Ð²Ð°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€Ð°Ð»Ð¸_Ð¼Ð°Ñ€Ñ‚Ð¸_Ð°Ð¿Ñ€ÐµÐ»Ð¸_Ð¼Ð°Ð¹Ð¸_Ð¸ÑŽÐ½Ð¸_Ð¸ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚Ð¸_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ð¸_Ð¾ÐºÑ‚ÑÐ±Ñ€Ð¸_Ð½Ð¾ÑÐ±Ñ€Ð¸_Ð´ÐµÐºÐ°Ð±Ñ€Ð¸".split("_"),
                standalone: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_")
            },
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "ÑÐºÑˆÐ°Ð½Ð±Ðµ_Ð´ÑƒÑˆÐ°Ð½Ð±Ðµ_ÑÐµÑˆÐ°Ð½Ð±Ðµ_Ñ‡Ð¾Ñ€ÑˆÐ°Ð½Ð±Ðµ_Ð¿Ð°Ð½Ò·ÑˆÐ°Ð½Ð±Ðµ_Ò·ÑƒÐ¼ÑŠÐ°_ÑˆÐ°Ð½Ð±Ðµ".split("_"),
            weekdaysShort: "ÑÑˆÐ±_Ð´ÑˆÐ±_ÑÑˆÐ±_Ñ‡ÑˆÐ±_Ð¿ÑˆÐ±_Ò·ÑƒÐ¼_ÑˆÐ½Ð±".split("_"),
            weekdaysMin: "ÑÑˆ_Ð´Ñˆ_ÑÑˆ_Ñ‡Ñˆ_Ð¿Ñˆ_Ò·Ð¼_ÑˆÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð˜Ð¼Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
                nextDay: "[Ð¤Ð°Ñ€Ð´Ð¾ ÑÐ¾Ð°Ñ‚Ð¸] LT",
                lastDay: "[Ð”Ð¸Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
                nextWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð¾ÑÐ½Ð´Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
                lastWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð³ÑƒÐ·Ð°ÑˆÑ‚Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð±Ð°ÑŠÐ´Ð¸ %s",
                past: "%s Ð¿ÐµÑˆ",
                s: "ÑÐºÑ‡Ð°Ð½Ð´ ÑÐ¾Ð½Ð¸Ñ",
                m: "ÑÐº Ð´Ð°Ò›Ð¸Ò›Ð°",
                mm: "%d Ð´Ð°Ò›Ð¸Ò›Ð°",
                h: "ÑÐº ÑÐ¾Ð°Ñ‚",
                hh: "%d ÑÐ¾Ð°Ñ‚",
                d: "ÑÐº Ñ€Ó¯Ð·",
                dd: "%d Ñ€Ó¯Ð·",
                M: "ÑÐº Ð¼Ð¾Ò³",
                MM: "%d Ð¼Ð¾Ò³",
                y: "ÑÐº ÑÐ¾Ð»",
                yy: "%d ÑÐ¾Ð»"
            },
            meridiemParse: /ÑˆÐ°Ð±|ÑÑƒÐ±Ò³|Ñ€Ó¯Ð·|Ð±ÐµÐ³Ð¾Ò³/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "ÑˆÐ°Ð±" === a ? e < 4 ? e : e + 12 : "ÑÑƒÐ±Ò³" === a ? e : "Ñ€Ó¯Ð·" === a ? e >= 11 ? e : e + 12 : "Ð±ÐµÐ³Ð¾Ò³" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "ÑˆÐ°Ð±" : e < 11 ? "ÑÑƒÐ±Ò³" : e < 16 ? "Ñ€Ó¯Ð·" : e < 19 ? "Ð±ÐµÐ³Ð¾Ò³" : "ÑˆÐ°Ð±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÑƒÐ¼|ÑŽÐ¼)/,
            ordinal: function (e) {
                return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("th", {
            months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
            monthsShort: "à¸¡.à¸„._à¸.à¸ž._à¸¡à¸µ.à¸„._à¹€à¸¡.à¸¢._à¸ž.à¸„._à¸¡à¸´.à¸¢._à¸.à¸„._à¸ª.à¸„._à¸.à¸¢._à¸•.à¸„._à¸ž.à¸¢._à¸˜.à¸„.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
            weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
            weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm",
                LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm"
            },
            meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,
            isPM: function (e) {
                return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
            },
            calendar: {
                sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",
                lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "à¸­à¸µà¸ %s",
                past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",
                s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",
                ss: "%d à¸§à¸´à¸™à¸²à¸—à¸µ",
                m: "1 à¸™à¸²à¸—à¸µ",
                mm: "%d à¸™à¸²à¸—à¸µ",
                h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                d: "1 à¸§à¸±à¸™",
                dd: "%d à¸§à¸±à¸™",
                w: "1 à¸ªà¸±à¸›à¸”à¸²à¸«à¹Œ",
                ww: "%d à¸ªà¸±à¸›à¸”à¸²à¸«à¹Œ",
                M: "1 à¹€à¸”à¸·à¸­à¸™",
                MM: "%d à¹€à¸”à¸·à¸­à¸™",
                y: "1 à¸›à¸µ",
                yy: "%d à¸›à¸µ"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'Ã¼nji",
            4: "'Ã¼nji",
            100: "'Ã¼nji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy"
        };
        e.defineLocale("tk", {
            months: "Ãanwar_Fewral_Mart_Aprel_MaÃ½_IÃ½un_IÃ½ul_Awgust_SentÃ½abr_OktÃ½abr_NoÃ½abr_Dekabr".split("_"),
            monthsShort: "Ãan_Few_Mar_Apr_MaÃ½_IÃ½n_IÃ½l_Awg_Sen_Okt_NoÃ½_Dek".split("_"),
            weekdays: "ÃekÅŸenbe_DuÅŸenbe_SiÅŸenbe_Ã‡arÅŸenbe_PenÅŸenbe_Anna_Åženbe".split("_"),
            weekdaysShort: "Ãek_DuÅŸ_SiÅŸ_Ã‡ar_Pen_Ann_Åžen".split("_"),
            weekdaysMin: "Ãk_DÅŸ_SÅŸ_Ã‡r_Pn_An_Åžn".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n sagat] LT",
                nextDay: "[ertir sagat] LT",
                nextWeek: "[indiki] dddd [sagat] LT",
                lastDay: "[dÃ¼Ã½n] LT",
                lastWeek: "[geÃ§en] dddd [sagat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s soÅˆ",
                past: "%s Ã¶Åˆ",
                s: "birnÃ¤Ã§e sekunt",
                m: "bir minut",
                mm: "%d minut",
                h: "bir sagat",
                hh: "%d sagat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir aÃ½",
                MM: "%d aÃ½",
                y: "bir Ã½yl",
                yy: "%d Ã½yl"
            },
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"Do":
                    case"DD":
                        return e;
                    default:
                        if (0 === e) return e + "'unjy";
                        var s = e % 10;
                        return e + (a[s] || a[e % 100 - s] || a[e >= 100 ? 100 : null])
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = "pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function t(e, t, s, n) {
            var r = function (e) {
                var t = Math.floor(e % 1e3 / 100), s = Math.floor(e % 100 / 10), n = e % 10, r = "";
                return t > 0 && (r += a[t] + "vatlh"), s > 0 && (r += ("" !== r ? " " : "") + a[s] + "maH"), n > 0 && (r += ("" !== r ? " " : "") + a[n]), "" === r ? "pagh" : r
            }(e);
            switch (s) {
                case"ss":
                    return r + " lup";
                case"mm":
                    return r + " tup";
                case"hh":
                    return r + " rep";
                case"dd":
                    return r + " jaj";
                case"MM":
                    return r + " jar";
                case"yy":
                    return r + " DIS"
            }
        }

        e.defineLocale("tlh", {
            months: "teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"),
            monthsShort: "jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[waâ€™leS] LT",
                nextWeek: "LLL",
                lastDay: "[waâ€™Huâ€™] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    var a = e;
                    return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq"
                },
                past: function (e) {
                    var a = e;
                    return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Huâ€™" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret"
                },
                s: "puS lup",
                ss: t,
                m: "waâ€™ tup",
                mm: t,
                h: "waâ€™ rep",
                hh: t,
                d: "waâ€™ jaj",
                dd: t,
                M: "waâ€™ jar",
                MM: t,
                y: "waâ€™ DIS",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'Ã¼ncÃ¼",
            4: "'Ã¼ncÃ¼",
            100: "'Ã¼ncÃ¼",
            6: "'ncÄ±",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'Ä±ncÄ±",
            90: "'Ä±ncÄ±"
        };
        e.defineLocale("tr", {
            months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
            monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
            meridiem: function (e, a, t) {
                return e < 12 ? t ? "Ã¶Ã¶" : "Ã–Ã–" : t ? "Ã¶s" : "Ã–S"
            },
            meridiemParse: /Ã¶Ã¶|Ã–Ã–|Ã¶s|Ã–S/,
            isPM: function (e) {
                return "Ã¶s" === e || "Ã–S" === e
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n saat] LT",
                nextDay: "[yarÄ±n saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dÃ¼n] LT",
                lastWeek: "[geÃ§en] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s Ã¶nce",
                s: "birkaÃ§ saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                w: "bir hafta",
                ww: "%d hafta",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yÄ±l",
                yy: "%d yÄ±l"
            },
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"Do":
                    case"DD":
                        return e;
                    default:
                        if (0 === e) return e + "'Ä±ncÄ±";
                        var s = e % 10;
                        return e + (a[s] || a[e % 100 - s] || a[e >= 100 ? 100 : null])
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t, s) {
            var n = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n mÃ­ut", "'iens mÃ­ut"],
                mm: [e + " mÃ­uts", e + " mÃ­uts"],
                h: ["'n Ã¾ora", "'iensa Ã¾ora"],
                hh: [e + " Ã¾oras", e + " Ã¾oras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return s || a ? n[t][0] : n[t][1]
        }

        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"),
            weekdaysShort: "SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"),
            weekdaysMin: "SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function (e, a, t) {
                return e > 11 ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi Ã ] LT",
                nextDay: "[demÃ  Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[ieiri Ã ] LT",
                lastWeek: "[sÃ¼r el] dddd [lasteu Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("tzm", {
            months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
            monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
            weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[â´°âµ™â´·âµ… â´´] LT",
                nextDay: "[â´°âµ™â´½â´° â´´] LT",
                nextWeek: "dddd [â´´] LT",
                lastDay: "[â´°âµšâ´°âµâµœ â´´] LT",
                lastWeek: "dddd [â´´] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",
                past: "âµ¢â´°âµ %s",
                s: "âµ‰âµŽâµ‰â´½",
                ss: "%d âµ‰âµŽâµ‰â´½",
                m: "âµŽâµ‰âµâµ“â´º",
                mm: "%d âµŽâµ‰âµâµ“â´º",
                h: "âµ™â´°âµ„â´°",
                hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",
                d: "â´°âµ™âµ™",
                dd: "%d oâµ™âµ™â´°âµ",
                M: "â´°âµ¢oâµ“âµ”",
                MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",
                y: "â´°âµ™â´³â´°âµ™",
                yy: "%d âµ‰âµ™â´³â´°âµ™âµ"
            },
            week: {dow: 6, doy: 12}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("tzm-latn", {
            months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuá¸",
                mm: "%d minuá¸",
                h: "saÉ›a",
                hh: "%d tassaÉ›in",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {dow: 6, doy: 12}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("ug-cn", {
            months: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
            monthsShort: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
            weekdays: "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•_Ø¯ÛˆØ´Û•Ù†Ø¨Û•_Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•_Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•_Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•_Ø¬ÛˆÙ…Û•_Ø´Û•Ù†Ø¨Û•".split("_"),
            weekdaysShort: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
            weekdaysMin: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰",
                LLL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm",
                LLLL: "ddddØŒ YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm"
            },
            meridiemParse: /ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•|Ø³Û•Ú¾Û•Ø±|Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†|Ú†ÛˆØ´|Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†|ÙƒÛ•Ú†/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" === a || "Ø³Û•Ú¾Û•Ø±" === a || "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" === a ? e : "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" === a || "ÙƒÛ•Ú†" === a ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, a, t) {
                var s = 100 * e + a;
                return s < 600 ? "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" : s < 900 ? "Ø³Û•Ú¾Û•Ø±" : s < 1130 ? "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" : s < 1230 ? "Ú†ÛˆØ´" : s < 1800 ? "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" : "ÙƒÛ•Ú†"
            },
            calendar: {
                sameDay: "[Ø¨ÛˆÚ¯ÛˆÙ† Ø³Ø§Ø¦Û•Øª] LT",
                nextDay: "[Ø¦Û•ØªÛ• Ø³Ø§Ø¦Û•Øª] LT",
                nextWeek: "[ÙƒÛÙ„Û•Ø±ÙƒÙ‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
                lastDay: "[ØªÛ†Ù†ÛˆÚ¯ÛˆÙ†] LT",
                lastWeek: "[Ø¦Ø§Ù„Ø¯Ù‰Ù†Ù‚Ù‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ÙƒÛÙŠÙ‰Ù†",
                past: "%s Ø¨Û‡Ø±Û‡Ù†",
                s: "Ù†Û•Ú†Ú†Û• Ø³ÛÙƒÙˆÙ†Øª",
                ss: "%d Ø³ÛÙƒÙˆÙ†Øª",
                m: "Ø¨Ù‰Ø± Ù…Ù‰Ù†Û‡Øª",
                mm: "%d Ù…Ù‰Ù†Û‡Øª",
                h: "Ø¨Ù‰Ø± Ø³Ø§Ø¦Û•Øª",
                hh: "%d Ø³Ø§Ø¦Û•Øª",
                d: "Ø¨Ù‰Ø± ÙƒÛˆÙ†",
                dd: "%d ÙƒÛˆÙ†",
                M: "Ø¨Ù‰Ø± Ø¦Ø§ÙŠ",
                MM: "%d Ø¦Ø§ÙŠ",
                y: "Ø¨Ù‰Ø± ÙŠÙ‰Ù„",
                yy: "%d ÙŠÙ‰Ù„"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-ÙƒÛˆÙ†Ù‰|-Ø¦Ø§ÙŠ|-Ú¾Û•Ù¾ØªÛ•)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "-ÙƒÛˆÙ†Ù‰";
                    case"w":
                    case"W":
                        return e + "-Ú¾Û•Ù¾ØªÛ•";
                    default:
                        return e
                }
            },
            preparse: function (e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";

//! moment.js locale configuration
        function a(e, a, t) {
            var s, n;
            return "m" === t ? a ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === t ? a ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : e + " " + (s = +e, n = {
                ss: a ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´",
                mm: a ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
                hh: a ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
                dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
                MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
                yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
            }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? n[1] : n[2])
        }

        function t(e) {
            return function () {
                return e + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
            }
        }

        e.defineLocale("uk", {
            months: {
                format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
                standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
            },
            monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
            weekdays: function (e, a) {
                var t = {
                    nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                    accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                    genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
                };
                return !0 === e ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1)) : e ? t[/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative
            },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ñ€.",
                LLL: "D MMMM YYYY Ñ€., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
            },
            calendar: {
                sameDay: t("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
                nextDay: t("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
                lastDay: t("[Ð’Ñ‡Ð¾Ñ€Ð° "),
                nextWeek: t("[Ð£] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return t("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return t("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "%s Ñ‚Ð¾Ð¼Ñƒ",
                s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
                ss: a,
                m: a,
                mm: a,
                h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                hh: a,
                d: "Ð´ÐµÐ½ÑŒ",
                dd: a,
                M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
                MM: a,
                y: "Ñ€Ñ–Ðº",
                yy: a
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
            isPM: function (e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ñ–" : e < 12 ? "Ñ€Ð°Ð½ÐºÑƒ" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e + "-Ð¹";
                    case"D":
                        return e + "-Ð³Ð¾";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        var a = ["Ø¬Ù†ÙˆØ±ÛŒ", "ÙØ±ÙˆØ±ÛŒ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÛŒÙ„", "Ù…Ø¦ÛŒ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¦ÛŒ", "Ø§Ú¯Ø³Øª", "Ø³ØªÙ…Ø¨Ø±", "Ø§Ú©ØªÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "Ø¯Ø³Ù…Ø¨Ø±"],
            t = ["Ø§ØªÙˆØ§Ø±", "Ù¾ÛŒØ±", "Ù…Ù†Ú¯Ù„", "Ø¨Ø¯Ú¾", "Ø¬Ù…Ø¹Ø±Ø§Øª", "Ø¬Ù…Ø¹Û", "ÛÙØªÛ"];
        e.defineLocale("ur", {
            months: a,
            monthsShort: a,
            weekdays: t,
            weekdaysShort: t,
            weekdaysMin: t,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ddddØŒ D MMMM YYYY HH:mm"
            },
            meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
            isPM: function (e) {
                return "Ø´Ø§Ù…" === e
            },
            meridiem: function (e, a, t) {
                return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
            },
            calendar: {
                sameDay: "[Ø¢Ø¬ Ø¨ÙˆÙ‚Øª] LT",
                nextDay: "[Ú©Ù„ Ø¨ÙˆÙ‚Øª] LT",
                nextWeek: "dddd [Ø¨ÙˆÙ‚Øª] LT",
                lastDay: "[Ú¯Ø°Ø´ØªÛ Ø±ÙˆØ² Ø¨ÙˆÙ‚Øª] LT",
                lastWeek: "[Ú¯Ø°Ø´ØªÛ] dddd [Ø¨ÙˆÙ‚Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ø¨Ø¹Ø¯",
                past: "%s Ù‚Ø¨Ù„",
                s: "Ú†Ù†Ø¯ Ø³ÛŒÚ©Ù†Úˆ",
                ss: "%d Ø³ÛŒÚ©Ù†Úˆ",
                m: "Ø§ÛŒÚ© Ù…Ù†Ù¹",
                mm: "%d Ù…Ù†Ù¹",
                h: "Ø§ÛŒÚ© Ú¯Ú¾Ù†Ù¹Û",
                hh: "%d Ú¯Ú¾Ù†Ù¹Û’",
                d: "Ø§ÛŒÚ© Ø¯Ù†",
                dd: "%d Ø¯Ù†",
                M: "Ø§ÛŒÚ© Ù…Ø§Û",
                MM: "%d Ù…Ø§Û",
                y: "Ø§ÛŒÚ© Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function (e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("uz", {
            months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),
            weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),
            weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",
                nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",
                past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",
                s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                ss: "%d Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",
                mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°",
                h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",
                hh: "%d ÑÐ¾Ð°Ñ‚",
                d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½",
                dd: "%d ÐºÑƒÐ½",
                M: "Ð±Ð¸Ñ€ Ð¾Ð¹",
                MM: "%d Ð¾Ð¹",
                y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",
                yy: "%d Ð¹Ð¸Ð»"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {dow: 1, doy: 7}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("vi", {
            months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
            monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
            monthsParseExact: !0,
            weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
                return /^ch$/i.test(e)
            },
            meridiem: function (e, a, t) {
                return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [nÄƒm] YYYY",
                LLL: "D MMMM [nÄƒm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[HÃ´m nay lÃºc] LT",
                nextDay: "[NgÃ y mai lÃºc] LT",
                nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",
                lastDay: "[HÃ´m qua lÃºc] LT",
                lastWeek: "dddd [tuáº§n trÆ°á»›c lÃºc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tá»›i",
                past: "%s trÆ°á»›c",
                s: "vÃ i giÃ¢y",
                ss: "%d giÃ¢y",
                m: "má»™t phÃºt",
                mm: "%d phÃºt",
                h: "má»™t giá»",
                hh: "%d giá»",
                d: "má»™t ngÃ y",
                dd: "%d ngÃ y",
                w: "má»™t tuáº§n",
                ww: "%d tuáº§n",
                M: "má»™t thÃ¡ng",
                MM: "%d thÃ¡ng",
                y: "má»™t nÄƒm",
                yy: "%d nÄƒm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("x-pseudo", {
            months: "J~Ã¡Ã±ÃºÃ¡~rÃ½_F~Ã©brÃº~Ã¡rÃ½_~MÃ¡rc~h_Ãp~rÃ­l_~MÃ¡Ã½_~JÃºÃ±Ã©~_JÃºl~Ã½_ÃÃº~gÃºst~_SÃ©p~tÃ©mb~Ã©r_Ã“~ctÃ³b~Ã©r_Ã‘~Ã³vÃ©m~bÃ©r_~DÃ©cÃ©~mbÃ©r".split("_"),
            monthsShort: "J~Ã¡Ã±_~FÃ©b_~MÃ¡r_~Ãpr_~MÃ¡Ã½_~JÃºÃ±_~JÃºl_~ÃÃºg_~SÃ©p_~Ã“ct_~Ã‘Ã³v_~DÃ©c".split("_"),
            monthsParseExact: !0,
            weekdays: "S~ÃºÃ±dÃ¡~Ã½_MÃ³~Ã±dÃ¡Ã½~_TÃºÃ©~sdÃ¡Ã½~_WÃ©d~Ã±Ã©sd~Ã¡Ã½_T~hÃºrs~dÃ¡Ã½_~FrÃ­d~Ã¡Ã½_S~Ã¡tÃºr~dÃ¡Ã½".split("_"),
            weekdaysShort: "S~ÃºÃ±_~MÃ³Ã±_~TÃºÃ©_~WÃ©d_~ThÃº_~FrÃ­_~SÃ¡t".split("_"),
            weekdaysMin: "S~Ãº_MÃ³~_TÃº_~WÃ©_T~h_Fr~_SÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~Ã³dÃ¡~Ã½ Ã¡t] LT",
                nextDay: "[T~Ã³mÃ³~rrÃ³~w Ã¡t] LT",
                nextWeek: "dddd [Ã¡t] LT",
                lastDay: "[Ã~Ã©st~Ã©rdÃ¡~Ã½ Ã¡t] LT",
                lastWeek: "[L~Ã¡st] dddd [Ã¡t] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ã­~Ã± %s",
                past: "%s Ã¡~gÃ³",
                s: "Ã¡ ~fÃ©w ~sÃ©cÃ³~Ã±ds",
                ss: "%d s~Ã©cÃ³Ã±~ds",
                m: "Ã¡ ~mÃ­Ã±~ÃºtÃ©",
                mm: "%d m~Ã­Ã±Ãº~tÃ©s",
                h: "Ã¡~Ã± hÃ³~Ãºr",
                hh: "%d h~Ã³Ãºrs",
                d: "Ã¡ ~dÃ¡Ã½",
                dd: "%d d~Ã¡Ã½s",
                M: "Ã¡ ~mÃ³Ã±~th",
                MM: "%d m~Ã³Ã±t~hs",
                y: "Ã¡ ~Ã½Ã©Ã¡r",
                yy: "%d Ã½~Ã©Ã¡rs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("yo", {
            months: "Sáº¹Ìráº¹Ì_EÌ€reÌ€leÌ€_áº¸ráº¹Ì€naÌ€_IÌ€gbeÌ_EÌ€bibi_OÌ€kuÌ€du_Agáº¹mo_OÌ€guÌn_Owewe_á»ŒÌ€waÌ€raÌ€_BeÌluÌ_á»ŒÌ€páº¹Ì€Ì€".split("_"),
            monthsShort: "Sáº¹Ìr_EÌ€rl_áº¸rn_IÌ€gb_EÌ€bi_OÌ€kuÌ€_Agáº¹_OÌ€guÌ_Owe_á»ŒÌ€waÌ€_BeÌl_á»ŒÌ€páº¹Ì€Ì€".split("_"),
            weekdays: "AÌ€iÌ€kuÌ_AjeÌ_IÌ€sáº¹Ìgun_á»Œjá»ÌruÌ_á»Œjá»Ìbá»_áº¸tiÌ€_AÌ€baÌmáº¹Ìta".split("_"),
            weekdaysShort: "AÌ€iÌ€k_AjeÌ_IÌ€sáº¹Ì_á»Œjr_á»Œjb_áº¸tiÌ€_AÌ€baÌ".split("_"),
            weekdaysMin: "AÌ€iÌ€_Aj_IÌ€s_á»Œr_á»Œb_áº¸t_AÌ€b".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[OÌ€niÌ€ ni] LT",
                nextDay: "[á»ŒÌ€la ni] LT",
                nextWeek: "dddd [á»Œsáº¹Ì€ toÌn'bá»] [ni] LT",
                lastDay: "[AÌ€na ni] LT",
                lastWeek: "dddd [á»Œsáº¹Ì€ toÌlá»Ì] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "niÌ %s",
                past: "%s ká»jaÌ",
                s: "iÌ€sáº¹juÌ aayaÌ die",
                ss: "aayaÌ %d",
                m: "iÌ€sáº¹juÌ kan",
                mm: "iÌ€sáº¹juÌ %d",
                h: "waÌkati kan",
                hh: "waÌkati %d",
                d: "á»já»Ì kan",
                dd: "á»já»Ì %d",
                M: "osuÌ€ kan",
                MM: "osuÌ€ %d",
                y: "á»duÌn kan",
                yy: "á»duÌn %d"
            },
            dayOfMonthOrdinalParse: /á»já»Ì\s\d{1,2}/,
            ordinal: "á»já»Ì %d",
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("zh-cn", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥Ahç‚¹mmåˆ†",
                LLLL: "YYYYå¹´MæœˆDæ—¥ddddAhç‚¹mmåˆ†",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === a || "æ—©ä¸Š" === a || "ä¸Šåˆ" === a ? e : "ä¸‹åˆ" === a || "æ™šä¸Š" === a ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, a, t) {
                var s = 100 * e + a;
                return s < 600 ? "å‡Œæ™¨" : s < 900 ? "æ—©ä¸Š" : s < 1130 ? "ä¸Šåˆ" : s < 1230 ? "ä¸­åˆ" : s < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©]LT", nextDay: "[æ˜Žå¤©]LT", nextWeek: function (e) {
                    return e.week() !== this.week() ? "[ä¸‹]dddLT" : "[æœ¬]dddLT"
                }, lastDay: "[æ˜¨å¤©]LT", lastWeek: function (e) {
                    return this.week() !== e.week() ? "[ä¸Š]dddLT" : "[æœ¬]dddLT"
                }, sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "æ—¥";
                    case"M":
                        return e + "æœˆ";
                    case"w":
                    case"W":
                        return e + "å‘¨";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%såŽ",
                past: "%så‰",
                s: "å‡ ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é’Ÿ",
                mm: "%d åˆ†é’Ÿ",
                h: "1 å°æ—¶",
                hh: "%d å°æ—¶",
                d: "1 å¤©",
                dd: "%d å¤©",
                w: "1 å‘¨",
                ww: "%d å‘¨",
                M: "1 ä¸ªæœˆ",
                MM: "%d ä¸ªæœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            },
            week: {dow: 1, doy: 4}
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("zh-hk", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === a || "æ—©ä¸Š" === a || "ä¸Šåˆ" === a ? e : "ä¸­åˆ" === a ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === a || "æ™šä¸Š" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                var s = 100 * e + a;
                return s < 600 ? "å‡Œæ™¨" : s < 900 ? "æ—©ä¸Š" : s < 1200 ? "ä¸Šåˆ" : 1200 === s ? "ä¸­åˆ" : s < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©]LT",
                nextDay: "[æ˜Žå¤©]LT",
                nextWeek: "[ä¸‹]ddddLT",
                lastDay: "[æ˜¨å¤©]LT",
                lastWeek: "[ä¸Š]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "æ—¥";
                    case"M":
                        return e + "æœˆ";
                    case"w":
                    case"W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så¾Œ",
                past: "%så‰",
                s: "å¹¾ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é˜",
                mm: "%d åˆ†é˜",
                h: "1 å°æ™‚",
                hh: "%d å°æ™‚",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 å€‹æœˆ",
                MM: "%d å€‹æœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("zh-mo", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                l: "D/M/YYYY",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === a || "æ—©ä¸Š" === a || "ä¸Šåˆ" === a ? e : "ä¸­åˆ" === a ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === a || "æ™šä¸Š" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                var s = 100 * e + a;
                return s < 600 ? "å‡Œæ™¨" : s < 900 ? "æ—©ä¸Š" : s < 1130 ? "ä¸Šåˆ" : s < 1230 ? "ä¸­åˆ" : s < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©] LT",
                nextDay: "[æ˜Žå¤©] LT",
                nextWeek: "[ä¸‹]dddd LT",
                lastDay: "[æ˜¨å¤©] LT",
                lastWeek: "[ä¸Š]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "æ—¥";
                    case"M":
                        return e + "æœˆ";
                    case"w":
                    case"W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så…§",
                past: "%så‰",
                s: "å¹¾ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é˜",
                mm: "%d åˆ†é˜",
                h: "1 å°æ™‚",
                hh: "%d å°æ™‚",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 å€‹æœˆ",
                MM: "%d å€‹æœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            }
        })
    }(t(0))
}, function (e, a, t) {
    !function (e) {
        "use strict";
//! moment.js locale configuration
        e.defineLocale("zh-tw", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function (e, a) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === a || "æ—©ä¸Š" === a || "ä¸Šåˆ" === a ? e : "ä¸­åˆ" === a ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === a || "æ™šä¸Š" === a ? e + 12 : void 0
            },
            meridiem: function (e, a, t) {
                var s = 100 * e + a;
                return s < 600 ? "å‡Œæ™¨" : s < 900 ? "æ—©ä¸Š" : s < 1130 ? "ä¸Šåˆ" : s < 1230 ? "ä¸­åˆ" : s < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©] LT",
                nextDay: "[æ˜Žå¤©] LT",
                nextWeek: "[ä¸‹]dddd LT",
                lastDay: "[æ˜¨å¤©] LT",
                lastWeek: "[ä¸Š]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "æ—¥";
                    case"M":
                        return e + "æœˆ";
                    case"w":
                    case"W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så¾Œ",
                past: "%så‰",
                s: "å¹¾ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é˜",
                mm: "%d åˆ†é˜",
                h: "1 å°æ™‚",
                hh: "%d å°æ™‚",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 å€‹æœˆ",
                MM: "%d å€‹æœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            }
        })
    }(t(0))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, a, t) {
    "use strict";
    t.r(a);
    var s = t(0);
    t.d(a, "moment", (function () {
        return s
    }))
}, function (e, a, t) {
    var s = {
        "./af": 41,
        "./af.js": 41,
        "./ar": 42,
        "./ar-dz": 43,
        "./ar-dz.js": 43,
        "./ar-kw": 44,
        "./ar-kw.js": 44,
        "./ar-ly": 45,
        "./ar-ly.js": 45,
        "./ar-ma": 46,
        "./ar-ma.js": 46,
        "./ar-sa": 47,
        "./ar-sa.js": 47,
        "./ar-tn": 48,
        "./ar-tn.js": 48,
        "./ar.js": 42,
        "./az": 49,
        "./az.js": 49,
        "./be": 50,
        "./be.js": 50,
        "./bg": 51,
        "./bg.js": 51,
        "./bm": 52,
        "./bm.js": 52,
        "./bn": 53,
        "./bn-bd": 54,
        "./bn-bd.js": 54,
        "./bn.js": 53,
        "./bo": 55,
        "./bo.js": 55,
        "./br": 56,
        "./br.js": 56,
        "./bs": 57,
        "./bs.js": 57,
        "./ca": 58,
        "./ca.js": 58,
        "./cs": 59,
        "./cs.js": 59,
        "./cv": 60,
        "./cv.js": 60,
        "./cy": 61,
        "./cy.js": 61,
        "./da": 62,
        "./da.js": 62,
        "./de": 63,
        "./de-at": 64,
        "./de-at.js": 64,
        "./de-ch": 65,
        "./de-ch.js": 65,
        "./de.js": 63,
        "./dv": 66,
        "./dv.js": 66,
        "./el": 67,
        "./el.js": 67,
        "./en-au": 68,
        "./en-au.js": 68,
        "./en-ca": 69,
        "./en-ca.js": 69,
        "./en-gb": 70,
        "./en-gb.js": 70,
        "./en-ie": 71,
        "./en-ie.js": 71,
        "./en-il": 72,
        "./en-il.js": 72,
        "./en-in": 73,
        "./en-in.js": 73,
        "./en-nz": 74,
        "./en-nz.js": 74,
        "./en-sg": 75,
        "./en-sg.js": 75,
        "./eo": 76,
        "./eo.js": 76,
        "./es": 77,
        "./es-do": 78,
        "./es-do.js": 78,
        "./es-mx": 79,
        "./es-mx.js": 79,
        "./es-us": 80,
        "./es-us.js": 80,
        "./es.js": 77,
        "./et": 81,
        "./et.js": 81,
        "./eu": 82,
        "./eu.js": 82,
        "./fa": 83,
        "./fa.js": 83,
        "./fi": 84,
        "./fi.js": 84,
        "./fil": 85,
        "./fil.js": 85,
        "./fo": 86,
        "./fo.js": 86,
        "./fr": 87,
        "./fr-ca": 88,
        "./fr-ca.js": 88,
        "./fr-ch": 89,
        "./fr-ch.js": 89,
        "./fr.js": 87,
        "./fy": 90,
        "./fy.js": 90,
        "./ga": 91,
        "./ga.js": 91,
        "./gd": 92,
        "./gd.js": 92,
        "./gl": 93,
        "./gl.js": 93,
        "./gom-deva": 94,
        "./gom-deva.js": 94,
        "./gom-latn": 95,
        "./gom-latn.js": 95,
        "./gu": 96,
        "./gu.js": 96,
        "./he": 97,
        "./he.js": 97,
        "./hi": 98,
        "./hi.js": 98,
        "./hr": 99,
        "./hr.js": 99,
        "./hu": 100,
        "./hu.js": 100,
        "./hy-am": 101,
        "./hy-am.js": 101,
        "./id": 102,
        "./id.js": 102,
        "./is": 103,
        "./is.js": 103,
        "./it": 104,
        "./it-ch": 105,
        "./it-ch.js": 105,
        "./it.js": 104,
        "./ja": 106,
        "./ja.js": 106,
        "./jv": 107,
        "./jv.js": 107,
        "./ka": 108,
        "./ka.js": 108,
        "./kk": 109,
        "./kk.js": 109,
        "./km": 110,
        "./km.js": 110,
        "./kn": 111,
        "./kn.js": 111,
        "./ko": 112,
        "./ko.js": 112,
        "./ku": 113,
        "./ku.js": 113,
        "./ky": 114,
        "./ky.js": 114,
        "./lb": 115,
        "./lb.js": 115,
        "./lo": 116,
        "./lo.js": 116,
        "./lt": 117,
        "./lt.js": 117,
        "./lv": 118,
        "./lv.js": 118,
        "./me": 119,
        "./me.js": 119,
        "./mi": 120,
        "./mi.js": 120,
        "./mk": 121,
        "./mk.js": 121,
        "./ml": 122,
        "./ml.js": 122,
        "./mn": 123,
        "./mn.js": 123,
        "./mr": 124,
        "./mr.js": 124,
        "./ms": 125,
        "./ms-my": 126,
        "./ms-my.js": 126,
        "./ms.js": 125,
        "./mt": 127,
        "./mt.js": 127,
        "./my": 128,
        "./my.js": 128,
        "./nb": 129,
        "./nb.js": 129,
        "./ne": 130,
        "./ne.js": 130,
        "./nl": 131,
        "./nl-be": 132,
        "./nl-be.js": 132,
        "./nl.js": 131,
        "./nn": 133,
        "./nn.js": 133,
        "./oc-lnc": 134,
        "./oc-lnc.js": 134,
        "./pa-in": 135,
        "./pa-in.js": 135,
        "./pl": 136,
        "./pl.js": 136,
        "./pt": 137,
        "./pt-br": 138,
        "./pt-br.js": 138,
        "./pt.js": 137,
        "./ro": 139,
        "./ro.js": 139,
        "./ru": 140,
        "./ru.js": 140,
        "./sd": 141,
        "./sd.js": 141,
        "./se": 142,
        "./se.js": 142,
        "./si": 143,
        "./si.js": 143,
        "./sk": 144,
        "./sk.js": 144,
        "./sl": 145,
        "./sl.js": 145,
        "./sq": 146,
        "./sq.js": 146,
        "./sr": 147,
        "./sr-cyrl": 148,
        "./sr-cyrl.js": 148,
        "./sr.js": 147,
        "./ss": 149,
        "./ss.js": 149,
        "./sv": 150,
        "./sv.js": 150,
        "./sw": 151,
        "./sw.js": 151,
        "./ta": 152,
        "./ta.js": 152,
        "./te": 153,
        "./te.js": 153,
        "./tet": 154,
        "./tet.js": 154,
        "./tg": 155,
        "./tg.js": 155,
        "./th": 156,
        "./th.js": 156,
        "./tk": 157,
        "./tk.js": 157,
        "./tl-ph": 158,
        "./tl-ph.js": 158,
        "./tlh": 159,
        "./tlh.js": 159,
        "./tr": 160,
        "./tr.js": 160,
        "./tzl": 161,
        "./tzl.js": 161,
        "./tzm": 162,
        "./tzm-latn": 163,
        "./tzm-latn.js": 163,
        "./tzm.js": 162,
        "./ug-cn": 164,
        "./ug-cn.js": 164,
        "./uk": 165,
        "./uk.js": 165,
        "./ur": 166,
        "./ur.js": 166,
        "./uz": 167,
        "./uz-latn": 168,
        "./uz-latn.js": 168,
        "./uz.js": 167,
        "./vi": 169,
        "./vi.js": 169,
        "./x-pseudo": 170,
        "./x-pseudo.js": 170,
        "./yo": 171,
        "./yo.js": 171,
        "./zh-cn": 172,
        "./zh-cn.js": 172,
        "./zh-hk": 173,
        "./zh-hk.js": 173,
        "./zh-mo": 174,
        "./zh-mo.js": 174,
        "./zh-tw": 175,
        "./zh-tw.js": 175
    };

    function n(e) {
        var a = r(e);
        return t(a)
    }

    function r(e) {
        if (!t.o(s, e)) {
            var a = new Error("Cannot find module '" + e + "'");
            throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
    }

    n.keys = function () {
        return Object.keys(s)
    }, n.resolve = r, e.exports = n, n.id = 466
}]));