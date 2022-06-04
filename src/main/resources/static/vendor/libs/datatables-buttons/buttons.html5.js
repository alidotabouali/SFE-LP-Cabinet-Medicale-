!function (t, e) {
    for (var n in e) t[n] = e[n]
}(window, function (t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {i: o, l: !1, exports: {}};
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: o})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function (e) {
            return t[e]
        }.bind(null, r));
        return o
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 227)
}({
    1: function (t, e) {
        t.exports = window.jQuery
    }, 2: function (t, e) {
        t.exports = window["$.fn.dataTable"]
    }, 227: function (t, e, n) {
        "use strict";
        n.r(e);
        n(228)
    }, 228: function (t, e, n) {
        var o, r;
        /*!
         * HTML5 export buttons for Buttons and DataTables.
         * 2016 SpryMedia Ltd - datatables.net/license
         *
         * FileSaver.js (1.3.3) - MIT license
         * Copyright Â© 2016 Eli Grey - http://eligrey.com
         */
        o = [n(1), n(2), n(5)], void 0 === (r = function (t) {
            return function (t, e, n, o, r, l) {
                "use strict";
                var a = t.fn.dataTable;

                function i() {
                    return o || e.JSZip
                }

                function s() {
                    return r || e.pdfMake
                }

                a.Buttons.pdfMake = function (t) {
                    if (!t) return s();
                    r = t
                }, a.Buttons.jszip = function (t) {
                    if (!t) return i();
                    o = t
                };
                var d = function (t) {
                    if (!(void 0 === t || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                        var e = t.document, n = function () {
                                return t.URL || t.webkitURL || t
                            }, o = e.createElementNS("http://www.w3.org/1999/xhtml", "a"), r = "download" in o,
                            a = /constructor/i.test(t.HTMLElement) || t.safari,
                            i = /CriOS\/[\d]+/.test(navigator.userAgent), s = function (e) {
                                (t.setImmediate || t.setTimeout)((function () {
                                    throw e
                                }), 0)
                            }, d = function (t) {
                                setTimeout((function () {
                                    "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
                                }), 4e4)
                            }, p = function (t) {
                                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {type: t.type}) : t
                            }, f = function (e, f, u) {
                                u || (e = p(e));
                                var c, m = this, h = "application/octet-stream" === e.type, y = function () {
                                    !function (t, e, n) {
                                        for (var o = (e = [].concat(e)).length; o--;) {
                                            var r = t["on" + e[o]];
                                            if ("function" == typeof r) try {
                                                r.call(t, n || t)
                                            } catch (t) {
                                                s(t)
                                            }
                                        }
                                    }(m, "writestart progress write writeend".split(" "))
                                };
                                if (m.readyState = m.INIT, r) return c = n().createObjectURL(e), void setTimeout((function () {
                                    var t, e;
                                    o.href = c, o.download = f, t = o, e = new MouseEvent("click"), t.dispatchEvent(e), y(), d(c), m.readyState = m.DONE
                                }));
                                !function () {
                                    if ((i || h && a) && t.FileReader) {
                                        var o = new FileReader;
                                        return o.onloadend = function () {
                                            var e = i ? o.result : o.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                            t.open(e, "_blank") || (t.location.href = e), e = l, m.readyState = m.DONE, y()
                                        }, o.readAsDataURL(e), void (m.readyState = m.INIT)
                                    }
                                    c || (c = n().createObjectURL(e)), h ? t.location.href = c : t.open(c, "_blank") || (t.location.href = c), m.readyState = m.DONE, y(), d(c)
                                }()
                            }, u = f.prototype;
                        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (t, e, n) {
                            return e = e || t.name || "download", n || (t = p(t)), navigator.msSaveOrOpenBlob(t, e)
                        } : (u.abort = function () {
                        }, u.readyState = u.INIT = 0, u.WRITING = 1, u.DONE = 2, u.error = u.onwritestart = u.onprogress = u.onwrite = u.onabort = u.onerror = u.onwriteend = null, function (t, e, n) {
                            return new f(t, e || t.name || "download", n)
                        })
                    }
                }("undefined" != typeof self && self || void 0 !== e && e || this.content);
                a.fileSave = d;
                var p = function (t) {
                    var e = "Sheet1";
                    return t.sheetName && (e = t.sheetName.replace(/[\[\]\*\/\\\?\:]/g, "")), e
                }, f = function (t) {
                    return t.newline ? t.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n"
                }, u = function (t, e) {
                    for (var n = f(e), o = t.buttons.exportData(e.exportOptions), r = e.fieldBoundary, a = e.fieldSeparator, i = new RegExp(r, "g"), s = e.escapeChar !== l ? e.escapeChar : "\\", d = function (t) {
                        for (var e = "", n = 0, o = t.length; n < o; n++) n > 0 && (e += a), e += r ? r + ("" + t[n]).replace(i, s + r) + r : t[n];
                        return e
                    }, p = e.header ? d(o.header) + n : "", u = e.footer && o.footer ? n + d(o.footer) : "", c = [], m = 0, h = o.body.length; m < h; m++) c.push(d(o.body[m]));
                    return {str: p + c.join(n) + u, rows: c.length}
                }, c = function () {
                    if (-1 === navigator.userAgent.indexOf("Safari") || -1 !== navigator.userAgent.indexOf("Chrome") || -1 !== navigator.userAgent.indexOf("Opera")) return !1;
                    var t = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
                    return !!(t && t.length > 1 && 1 * t[1] < 603.1)
                };

                function m(t) {
                    for (var e = "A".charCodeAt(0), n = "Z".charCodeAt(0) - e + 1, o = ""; t >= 0;) o = String.fromCharCode(t % n + e) + o, t = Math.floor(t / n) - 1;
                    return o
                }

                try {
                    var h, y = new XMLSerializer
                } catch (t) {
                }

                function b(e, n, o) {
                    var r = e.createElement(n);
                    return o && (o.attr && t(r).attr(o.attr), o.children && t.each(o.children, (function (t, e) {
                        r.appendChild(e)
                    })), null !== o.text && o.text !== l && r.appendChild(e.createTextNode(o.text))), r
                }

                function g(t, e) {
                    var n, o, r, a = t.header[e].length;
                    t.footer && t.footer[e].length > a && (a = t.footer[e].length);
                    for (var i = 0, s = t.body.length; i < s; i++) {
                        var d = t.body[i][e];
                        if (-1 !== (r = null !== d && d !== l ? d.toString() : "").indexOf("\n") ? ((o = r.split("\n")).sort((function (t, e) {
                            return e.length - t.length
                        })), n = o[0].length) : n = r.length, n > a && (a = n), a > 40) return 54
                    }
                    return (a *= 1.35) > 6 ? a : 6
                }

                var x = {
                    "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
                    "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
                    "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
                    "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
                    "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
                    "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;Â£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$â‚¬-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
                }, I = [{
                    match: /^\-?\d+\.\d%$/, style: 60, fmt: function (t) {
                        return t / 100
                    }
                }, {
                    match: /^\-?\d+\.?\d*%$/, style: 56, fmt: function (t) {
                        return t / 100
                    }
                }, {match: /^\-?\$[\d,]+.?\d*$/, style: 57}, {
                    match: /^\-?Â£[\d,]+.?\d*$/,
                    style: 58
                }, {match: /^\-?â‚¬[\d,]+.?\d*$/, style: 59}, {match: /^\-?\d+$/, style: 65}, {
                    match: /^\-?\d+\.\d{2}$/,
                    style: 66
                }, {
                    match: /^\([\d,]+\)$/, style: 61, fmt: function (t) {
                        return -1 * t.replace(/[\(\)]/g, "")
                    }
                }, {
                    match: /^\([\d,]+\.\d{2}\)$/, style: 62, fmt: function (t) {
                        return -1 * t.replace(/[\(\)]/g, "")
                    }
                }, {match: /^\-?[\d,]+$/, style: 63}, {
                    match: /^\-?[\d,]+\.\d{2}$/,
                    style: 64
                }, {
                    match: /^[\d]{4}\-[\d]{2}\-[\d]{2}$/, style: 67, fmt: function (t) {
                        return Math.round(25569 + Date.parse(t) / 864e5)
                    }
                }];
                return a.ext.buttons.copyHtml5 = {
                    className: "buttons-copy buttons-html5",
                    text: function (t) {
                        return t.i18n("buttons.copy", "Copy")
                    },
                    action: function (e, o, r, l) {
                        this.processing(!0);
                        var a = this, i = u(o, l), s = o.buttons.exportInfo(l), d = f(l), p = i.str,
                            c = t("<div/>").css({
                                height: 1,
                                width: 1,
                                overflow: "hidden",
                                position: "fixed",
                                top: 0,
                                left: 0
                            });
                        s.title && (p = s.title + d + d + p), s.messageTop && (p = s.messageTop + d + d + p), s.messageBottom && (p = p + d + d + s.messageBottom), l.customize && (p = l.customize(p, l, o));
                        var m = t("<textarea readonly/>").val(p).appendTo(c);
                        if (n.queryCommandSupported("copy")) {
                            c.appendTo(o.table().container()), m[0].focus(), m[0].select();
                            try {
                                var h = n.execCommand("copy");
                                if (c.remove(), h) return o.buttons.info(o.i18n("buttons.copyTitle", "Copy to clipboard"), o.i18n("buttons.copySuccess", {
                                    1: "Copied one row to clipboard",
                                    _: "Copied %d rows to clipboard"
                                }, i.rows), 2e3), void this.processing(!1)
                            } catch (t) {
                            }
                        }
                        var y = t("<span>" + o.i18n("buttons.copyKeys", "Press <i>ctrl</i> or <i>âŒ˜</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.") + "</span>").append(c);
                        o.buttons.info(o.i18n("buttons.copyTitle", "Copy to clipboard"), y, 0), m[0].focus(), m[0].select();
                        var b = t(y).closest(".dt-button-info"), g = function () {
                            b.off("click.buttons-copy"), t(n).off(".buttons-copy"), o.buttons.info(!1)
                        };
                        b.on("click.buttons-copy", g), t(n).on("keydown.buttons-copy", (function (t) {
                            27 === t.keyCode && (g(), a.processing(!1))
                        })).on("copy.buttons-copy cut.buttons-copy", (function () {
                            g(), a.processing(!1)
                        }))
                    },
                    exportOptions: {},
                    fieldSeparator: "\t",
                    fieldBoundary: "",
                    header: !0,
                    footer: !1,
                    title: "*",
                    messageTop: "*",
                    messageBottom: "*"
                }, a.ext.buttons.csvHtml5 = {
                    bom: !1,
                    className: "buttons-csv buttons-html5",
                    available: function () {
                        return e.FileReader !== l && e.Blob
                    },
                    text: function (t) {
                        return t.i18n("buttons.csv", "CSV")
                    },
                    action: function (t, e, o, r) {
                        this.processing(!0);
                        var l = u(e, r).str, a = e.buttons.exportInfo(r), i = r.charset;
                        r.customize && (l = r.customize(l, r, e)), !1 !== i ? (i || (i = n.characterSet || n.charset), i && (i = ";charset=" + i)) : i = "", r.bom && (l = String.fromCharCode(65279) + l), d(new Blob([l], {type: "text/csv" + i}), a.filename, !0), this.processing(!1)
                    },
                    filename: "*",
                    extension: ".csv",
                    exportOptions: {},
                    fieldSeparator: ",",
                    fieldBoundary: '"',
                    escapeChar: '"',
                    charset: null,
                    header: !0,
                    footer: !1
                }, a.ext.buttons.excelHtml5 = {
                    className: "buttons-excel buttons-html5",
                    available: function () {
                        return e.FileReader !== l && i() !== l && !c() && y
                    },
                    text: function (t) {
                        return t.i18n("buttons.excel", "Excel")
                    },
                    action: function (n, o, r, a) {
                        this.processing(!0);
                        var s, f, u, c, v = this, F = 0, w = function (e) {
                            var n = x[e];
                            return t.parseXML(n)
                        }, B = w("xl/worksheets/sheet1.xml"), C = B.getElementsByTagName("sheetData")[0], k = {
                            _rels: {".rels": w("_rels/.rels")},
                            xl: {
                                _rels: {"workbook.xml.rels": w("xl/_rels/workbook.xml.rels")},
                                "workbook.xml": w("xl/workbook.xml"),
                                "styles.xml": w("xl/styles.xml"),
                                worksheets: {"sheet1.xml": B}
                            },
                            "[Content_Types].xml": w("[Content_Types].xml")
                        }, T = o.buttons.exportData(a.exportOptions), _ = function (t) {
                            c = b(B, "row", {attr: {r: u = F + 1}});
                            for (var e = 0, n = t.length; e < n; e++) {
                                var o = m(e) + "" + u, r = null;
                                if (null === t[e] || t[e] === l || "" === t[e]) {
                                    if (!0 !== a.createEmptyCells) continue;
                                    t[e] = ""
                                }
                                var i = t[e];
                                t[e] = "function" == typeof t[e].trim ? t[e].trim() : t[e];
                                for (var s = 0, d = I.length; s < d; s++) {
                                    var p = I[s];
                                    if (t[e].match && !t[e].match(/^0\d+/) && t[e].match(p.match)) {
                                        var f = t[e].replace(/[^\d\.\-]/g, "");
                                        p.fmt && (f = p.fmt(f)), r = b(B, "c", {
                                            attr: {r: o, s: p.style},
                                            children: [b(B, "v", {text: f})]
                                        });
                                        break
                                    }
                                }
                                if (!r) if ("number" == typeof t[e] || t[e].match && t[e].match(/^-?\d+(\.\d+)?$/) && !t[e].match(/^0\d+/)) r = b(B, "c", {
                                    attr: {
                                        t: "n",
                                        r: o
                                    }, children: [b(B, "v", {text: t[e]})]
                                }); else {
                                    var h = i.replace ? i.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "") : i;
                                    r = b(B, "c", {
                                        attr: {t: "inlineStr", r: o},
                                        children: {
                                            row: b(B, "is", {
                                                children: {
                                                    row: b(B, "t", {
                                                        text: h,
                                                        attr: {"xml:space": "preserve"}
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                                c.appendChild(r)
                            }
                            C.appendChild(c), F++
                        };
                        a.customizeData && a.customizeData(T);
                        var A = function (e, n) {
                            var o = t("mergeCells", B);
                            o[0].appendChild(b(B, "mergeCell", {attr: {ref: "A" + e + ":" + m(n) + e}})), o.attr("count", parseFloat(o.attr("count")) + 1), t("row:eq(" + (e - 1) + ") c", B).attr("s", "51")
                        }, S = o.buttons.exportInfo(a);
                        S.title && (_([S.title]), A(F, T.header.length - 1)), S.messageTop && (_([S.messageTop]), A(F, T.header.length - 1)), a.header && (_(T.header), t("row:last c", B).attr("s", "2")), s = F;
                        for (var N = 0, O = T.body.length; N < O; N++) _(T.body[N]);
                        f = F, a.footer && T.footer && (_(T.footer), t("row:last c", B).attr("s", "2")), S.messageBottom && (_([S.messageBottom]), A(F, T.header.length - 1));
                        var D = b(B, "cols");
                        t("worksheet", B).prepend(D);
                        for (var z = 0, H = T.header.length; z < H; z++) D.appendChild(b(B, "col", {
                            attr: {
                                min: z + 1,
                                max: z + 1,
                                width: g(T, z),
                                customWidth: 1
                            }
                        }));
                        var E = k.xl["workbook.xml"];
                        t("sheets sheet", E).attr("name", p(a)), a.autoFilter && (t("mergeCells", B).before(b(B, "autoFilter", {attr: {ref: "A" + s + ":" + m(T.header.length - 1) + f}})), t("definedNames", E).append(b(E, "definedName", {
                            attr: {
                                name: "_xlnm._FilterDatabase",
                                localSheetId: "0",
                                hidden: 1
                            }, text: p(a) + "!$A$" + s + ":" + m(T.header.length - 1) + f
                        }))), a.customize && a.customize(k, a, o), 0 === t("mergeCells", B).children().length && t("mergeCells", B).remove();
                        var P = new (i()), L = {
                            type: "blob",
                            mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        };
                        !function n(o, r) {
                            h === l && (h = -1 === y.serializeToString((new e.DOMParser).parseFromString(x["xl/worksheets/sheet1.xml"], "text/xml")).indexOf("xmlns:r")), t.each(r, (function (e, r) {
                                if (t.isPlainObject(r)) {
                                    var l = o.folder(e);
                                    n(l, r)
                                } else {
                                    if (h) {
                                        var a, i, s = r.childNodes[0], d = [];
                                        for (a = s.attributes.length - 1; a >= 0; a--) {
                                            var p = s.attributes[a].nodeName, f = s.attributes[a].nodeValue;
                                            -1 !== p.indexOf(":") && (d.push({name: p, value: f}), s.removeAttribute(p))
                                        }
                                        for (a = 0, i = d.length; a < i; a++) {
                                            var u = r.createAttribute(d[a].name.replace(":", "_dt_b_namespace_token_"));
                                            u.value = d[a].value, s.setAttributeNode(u)
                                        }
                                    }
                                    var c = y.serializeToString(r);
                                    h && (-1 === c.indexOf("<?xml") && (c = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + c), c = (c = c.replace(/_dt_b_namespace_token_/g, ":")).replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "")), c = c.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>"), o.file(e, c)
                                }
                            }))
                        }(P, k), P.generateAsync ? P.generateAsync(L).then((function (t) {
                            d(t, S.filename), v.processing(!1)
                        })) : (d(P.generate(L), S.filename), this.processing(!1))
                    },
                    filename: "*",
                    extension: ".xlsx",
                    exportOptions: {},
                    header: !0,
                    footer: !1,
                    title: "*",
                    messageTop: "*",
                    messageBottom: "*",
                    createEmptyCells: !1,
                    autoFilter: !1,
                    sheetName: ""
                }, a.ext.buttons.pdfHtml5 = {
                    className: "buttons-pdf buttons-html5",
                    available: function () {
                        return e.FileReader !== l && s()
                    },
                    text: function (t) {
                        return t.i18n("buttons.pdf", "PDF")
                    },
                    action: function (e, n, o, r) {
                        this.processing(!0);
                        var a = n.buttons.exportData(r.exportOptions), i = n.buttons.exportInfo(r), d = [];
                        r.header && d.push(t.map(a.header, (function (t) {
                            return {text: "string" == typeof t ? t : t + "", style: "tableHeader"}
                        })));
                        for (var p = 0, f = a.body.length; p < f; p++) d.push(t.map(a.body[p], (function (t) {
                            return null !== t && t !== l || (t = ""), {
                                text: "string" == typeof t ? t : t + "",
                                style: p % 2 ? "tableBodyEven" : "tableBodyOdd"
                            }
                        })));
                        r.footer && a.footer && d.push(t.map(a.footer, (function (t) {
                            return {text: "string" == typeof t ? t : t + "", style: "tableFooter"}
                        })));
                        var u = {
                            pageSize: r.pageSize,
                            pageOrientation: r.orientation,
                            content: [{table: {headerRows: 1, body: d}, layout: "noBorders"}],
                            styles: {
                                tableHeader: {
                                    bold: !0,
                                    fontSize: 11,
                                    color: "white",
                                    fillColor: "#2d4154",
                                    alignment: "center"
                                },
                                tableBodyEven: {},
                                tableBodyOdd: {fillColor: "#f3f3f3"},
                                tableFooter: {bold: !0, fontSize: 11, color: "white", fillColor: "#2d4154"},
                                title: {alignment: "center", fontSize: 15},
                                message: {}
                            },
                            defaultStyle: {fontSize: 10}
                        };
                        i.messageTop && u.content.unshift({
                            text: i.messageTop,
                            style: "message",
                            margin: [0, 0, 0, 12]
                        }), i.messageBottom && u.content.push({
                            text: i.messageBottom,
                            style: "message",
                            margin: [0, 0, 0, 12]
                        }), i.title && u.content.unshift({
                            text: i.title,
                            style: "title",
                            margin: [0, 0, 0, 12]
                        }), r.customize && r.customize(u, r, n);
                        var m = s().createPdf(u);
                        "open" !== r.download || c() ? m.download(i.filename) : m.open(), this.processing(!1)
                    },
                    title: "*",
                    filename: "*",
                    extension: ".pdf",
                    exportOptions: {},
                    orientation: "portrait",
                    pageSize: "A4",
                    header: !0,
                    footer: !1,
                    messageTop: "*",
                    messageBottom: "*",
                    customize: null,
                    download: "download"
                }, a.Buttons
            }(t, window, document)
        }.apply(e, o)) || (t.exports = r)
    }, 5: function (t, e, n) {
        var o, r;
        /*! Buttons for DataTables 1.7.1
         * Â©2016-2021 SpryMedia Ltd - datatables.net/license
         */
        o = [n(1), n(2)], void 0 === (r = function (t) {
            return function (t, e, n, o) {
                "use strict";
                var r = t.fn.dataTable, l = 0, a = 0, i = r.ext.buttons;

                function s(e, n, o) {
                    t.fn.animate ? e.stop().fadeIn(n, o) : (e.css("display", "block"), o && o.call(e))
                }

                function d(e, n, o) {
                    t.fn.animate ? e.stop().fadeOut(n, o) : (e.css("display", "none"), o && o.call(e))
                }

                var p, f = function (e, n) {
                    if (!(this instanceof f)) return function (t) {
                        return new f(t, e).container()
                    };
                    void 0 === n && (n = {}), !0 === n && (n = {}), Array.isArray(n) && (n = {buttons: n}), this.c = t.extend(!0, {}, f.defaults, n), n.buttons && (this.c.buttons = n.buttons), this.s = {
                        dt: new r.Api(e),
                        buttons: [],
                        listenKeys: "",
                        namespace: "dtb" + l++
                    }, this.dom = {container: t("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className)}, this._constructor()
                };
                t.extend(f.prototype, {
                    action: function (t, e) {
                        var n = this._nodeToButton(t);
                        return e === o ? n.conf.action : (n.conf.action = e, this)
                    }, active: function (e, n) {
                        var r = this._nodeToButton(e), l = this.c.dom.button.active, a = t(r.node);
                        return n === o ? a.hasClass(l) : (a.toggleClass(l, n === o || n), this)
                    }, add: function (t, e) {
                        var n = this.s.buttons;
                        if ("string" == typeof e) {
                            for (var r = e.split("-"), l = this.s, a = 0, i = r.length - 1; a < i; a++) l = l.buttons[1 * r[a]];
                            n = l.buttons, e = 1 * r[r.length - 1]
                        }
                        return this._expandButton(n, t, l !== o, e), this._draw(), this
                    }, container: function () {
                        return this.dom.container
                    }, disable: function (e) {
                        var n = this._nodeToButton(e);
                        return t(n.node).addClass(this.c.dom.button.disabled).attr("disabled", !0), this
                    }, destroy: function () {
                        t("body").off("keyup." + this.s.namespace);
                        var e, n, o = this.s.buttons.slice();
                        for (e = 0, n = o.length; e < n; e++) this.remove(o[e].node);
                        this.dom.container.remove();
                        var r = this.s.dt.settings()[0];
                        for (e = 0, n = r.length; e < n; e++) if (r.inst === this) {
                            r.splice(e, 1);
                            break
                        }
                        return this
                    }, enable: function (e, n) {
                        if (!1 === n) return this.disable(e);
                        var o = this._nodeToButton(e);
                        return t(o.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled"), this
                    }, name: function () {
                        return this.c.name
                    }, node: function (e) {
                        if (!e) return this.dom.container;
                        var n = this._nodeToButton(e);
                        return t(n.node)
                    }, processing: function (e, n) {
                        var r = this.s.dt, l = this._nodeToButton(e);
                        return n === o ? t(l.node).hasClass("processing") : (t(l.node).toggleClass("processing", n), t(r.table().node()).triggerHandler("buttons-processing.dt", [n, r.button(e), r, t(e), l.conf]), this)
                    }, remove: function (e) {
                        var n = this._nodeToButton(e), o = this._nodeToHost(e), r = this.s.dt;
                        if (n.buttons.length) for (var l = n.buttons.length - 1; l >= 0; l--) this.remove(n.buttons[l].node);
                        n.conf.destroy && n.conf.destroy.call(r.button(e), r, t(e), n.conf), this._removeKey(n.conf), t(n.node).remove();
                        var a = t.inArray(n, o);
                        return o.splice(a, 1), this
                    }, text: function (e, n) {
                        var r = this._nodeToButton(e), l = this.c.dom.collection.buttonLiner,
                            a = r.inCollection && l && l.tag ? l.tag : this.c.dom.buttonLiner.tag, i = this.s.dt,
                            s = t(r.node), d = function (t) {
                                return "function" == typeof t ? t(i, s, r.conf) : t
                            };
                        return n === o ? d(r.conf.text) : (r.conf.text = n, a ? s.children(a).html(d(n)) : s.html(d(n)), this)
                    }, _constructor: function () {
                        var e = this, o = this.s.dt, r = o.settings()[0], l = this.c.buttons;
                        r._buttons || (r._buttons = []), r._buttons.push({inst: this, name: this.c.name});
                        for (var a = 0, i = l.length; a < i; a++) this.add(l[a]);
                        o.on("destroy", (function (t, n) {
                            n === r && e.destroy()
                        })), t("body").on("keyup." + this.s.namespace, (function (t) {
                            if (!n.activeElement || n.activeElement === n.body) {
                                var o = String.fromCharCode(t.keyCode).toLowerCase();
                                -1 !== e.s.listenKeys.toLowerCase().indexOf(o) && e._keypress(o, t)
                            }
                        }))
                    }, _addKey: function (e) {
                        e.key && (this.s.listenKeys += t.isPlainObject(e.key) ? e.key.key : e.key)
                    }, _draw: function (t, e) {
                        t || (t = this.dom.container, e = this.s.buttons), t.children().detach();
                        for (var n = 0, o = e.length; n < o; n++) t.append(e[n].inserter), t.append(" "), e[n].buttons && e[n].buttons.length && this._draw(e[n].collection, e[n].buttons)
                    }, _expandButton: function (e, n, r, l) {
                        for (var a = this.s.dt, i = Array.isArray(n) ? n : [n], s = 0, d = i.length; s < d; s++) {
                            var p = this._resolveExtends(i[s]);
                            if (p) if (Array.isArray(p)) this._expandButton(e, p, r, l); else {
                                var f = this._buildButton(p, r);
                                f && (l !== o && null !== l ? (e.splice(l, 0, f), l++) : e.push(f), f.conf.buttons && (f.collection = t("<" + this.c.dom.collection.tag + "/>"), f.conf._collection = f.collection, this._expandButton(f.buttons, f.conf.buttons, !0, l)), p.init && p.init.call(a.button(f.node), a, t(f.node), p))
                            }
                        }
                    }, _buildButton: function (e, n) {
                        var r = this.c.dom.button, l = this.c.dom.buttonLiner, i = this.c.dom.collection, s = this.s.dt,
                            d = function (t) {
                                return "function" == typeof t ? t(s, c, e) : t
                            };
                        if (n && i.button && (r = i.button), n && i.buttonLiner && (l = i.buttonLiner), e.available && !e.available(s, e)) return !1;
                        var p = function (e, n, o, r) {
                                r.action.call(n.button(o), e, n, o, r), t(n.table().node()).triggerHandler("buttons-action.dt", [n.button(o), n, o, r])
                            }, f = e.tag || r.tag, u = e.clickBlurs === o || e.clickBlurs,
                            c = t("<" + f + "/>").addClass(r.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", (function (t) {
                                t.preventDefault(), !c.hasClass(r.disabled) && e.action && p(t, s, c, e), u && c.trigger("blur")
                            })).on("keyup.dtb", (function (t) {
                                13 === t.keyCode && !c.hasClass(r.disabled) && e.action && p(t, s, c, e)
                            }));
                        if ("a" === f.toLowerCase() && c.attr("href", "#"), "button" === f.toLowerCase() && c.attr("type", "button"), l.tag) {
                            var m = t("<" + l.tag + "/>").html(d(e.text)).addClass(l.className);
                            "a" === l.tag.toLowerCase() && m.attr("href", "#"), c.append(m)
                        } else c.html(d(e.text));
                        !1 === e.enabled && c.addClass(r.disabled), e.className && c.addClass(e.className), e.titleAttr && c.attr("title", d(e.titleAttr)), e.attr && c.attr(e.attr), e.namespace || (e.namespace = ".dt-button-" + a++);
                        var h, y = this.c.dom.buttonContainer;
                        return h = y && y.tag ? t("<" + y.tag + "/>").addClass(y.className).append(c) : c, this._addKey(e), this.c.buttonCreated && (h = this.c.buttonCreated(e, h)), {
                            conf: e,
                            node: c.get(0),
                            inserter: h,
                            buttons: [],
                            inCollection: n,
                            collection: null
                        }
                    }, _nodeToButton: function (t, e) {
                        e || (e = this.s.buttons);
                        for (var n = 0, o = e.length; n < o; n++) {
                            if (e[n].node === t) return e[n];
                            if (e[n].buttons.length) {
                                var r = this._nodeToButton(t, e[n].buttons);
                                if (r) return r
                            }
                        }
                    }, _nodeToHost: function (t, e) {
                        e || (e = this.s.buttons);
                        for (var n = 0, o = e.length; n < o; n++) {
                            if (e[n].node === t) return e;
                            if (e[n].buttons.length) {
                                var r = this._nodeToHost(t, e[n].buttons);
                                if (r) return r
                            }
                        }
                    }, _keypress: function (e, n) {
                        if (!n._buttonsHandled) {
                            var o = function (o, r) {
                                if (o.key) if (o.key === e) n._buttonsHandled = !0, t(r).click(); else if (t.isPlainObject(o.key)) {
                                    if (o.key.key !== e) return;
                                    if (o.key.shiftKey && !n.shiftKey) return;
                                    if (o.key.altKey && !n.altKey) return;
                                    if (o.key.ctrlKey && !n.ctrlKey) return;
                                    if (o.key.metaKey && !n.metaKey) return;
                                    n._buttonsHandled = !0, t(r).click()
                                }
                            }, r = function (t) {
                                for (var e = 0, n = t.length; e < n; e++) o(t[e].conf, t[e].node), t[e].buttons.length && r(t[e].buttons)
                            };
                            r(this.s.buttons)
                        }
                    }, _removeKey: function (e) {
                        if (e.key) {
                            var n = t.isPlainObject(e.key) ? e.key.key : e.key, o = this.s.listenKeys.split(""),
                                r = t.inArray(n, o);
                            o.splice(r, 1), this.s.listenKeys = o.join("")
                        }
                    }, _resolveExtends: function (e) {
                        var n, r, l = this.s.dt, a = function (n) {
                            for (var r = 0; !t.isPlainObject(n) && !Array.isArray(n);) {
                                if (n === o) return;
                                if ("function" == typeof n) {
                                    if (!(n = n(l, e))) return !1
                                } else if ("string" == typeof n) {
                                    if (!i[n]) throw"Unknown button type: " + n;
                                    n = i[n]
                                }
                                if (++r > 30) throw"Buttons: Too many iterations"
                            }
                            return Array.isArray(n) ? n : t.extend({}, n)
                        };
                        for (e = a(e); e && e.extend;) {
                            if (!i[e.extend]) throw"Cannot extend unknown button type: " + e.extend;
                            var s = a(i[e.extend]);
                            if (Array.isArray(s)) return s;
                            if (!s) return !1;
                            var d = s.className;
                            e = t.extend({}, s, e), d && e.className !== d && (e.className = d + " " + e.className);
                            var p = e.postfixButtons;
                            if (p) {
                                for (e.buttons || (e.buttons = []), n = 0, r = p.length; n < r; n++) e.buttons.push(p[n]);
                                e.postfixButtons = null
                            }
                            var f = e.prefixButtons;
                            if (f) {
                                for (e.buttons || (e.buttons = []), n = 0, r = f.length; n < r; n++) e.buttons.splice(n, 0, f[n]);
                                e.prefixButtons = null
                            }
                            e.extend = s.extend
                        }
                        return e
                    }, _popover: function (o, r, l) {
                        var a = r, i = this.c, p = t.extend({
                            align: "button-left",
                            autoClose: !1,
                            background: !0,
                            backgroundClassName: "dt-button-background",
                            contentClassName: i.dom.collection.className,
                            collectionLayout: "",
                            collectionTitle: "",
                            dropup: !1,
                            fade: 400,
                            rightAlignClassName: "dt-button-right",
                            tag: i.dom.collection.tag
                        }, l), u = r.node(), c = function () {
                            d(t(".dt-button-collection"), p.fade, (function () {
                                t(this).detach()
                            })), t(a.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded", "false"), t("div.dt-button-background").off("click.dtb-collection"), f.background(!1, p.backgroundClassName, p.fade, u), t("body").off(".dtb-collection"), a.off("buttons-action.b-internal")
                        };
                        !1 === o && c();
                        var m = t(a.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes());
                        m.length && (u = m.eq(0), c());
                        var h = t("<div/>").addClass("dt-button-collection").addClass(p.collectionLayout).css("display", "none");
                        o = t(o).addClass(p.contentClassName).attr("role", "menu").appendTo(h), u.attr("aria-expanded", "true"), u.parents("body")[0] !== n.body && (u = n.body.lastChild), p.collectionTitle && h.prepend('<div class="dt-button-collection-title">' + p.collectionTitle + "</div>"), s(h.insertAfter(u), p.fade);
                        var y = t(r.table().container()), b = h.css("position");
                        if ("dt-container" === p.align && (u = u.parent(), h.css("width", y.width())), "absolute" === b) {
                            var g = u.position(), x = t(r.node()).position();
                            h.css({top: x.top + u.outerHeight(), left: g.left});
                            var I = h.outerHeight(), v = y.offset().top + y.height(),
                                F = x.top + u.outerHeight() + I - v, w = x.top - I, B = y.offset().top, C = B - w,
                                k = x.top - I - 5;
                            (F > C || p.dropup) && -k < B && h.css("top", k);
                            var T = y.offset().left, _ = T + y.width(), A = h.offset().left, S = A + h.width(),
                                N = u.offset().left, O = N + u.outerWidth();
                            if (h.hasClass(p.rightAlignClassName) || h.hasClass(p.leftAlignClassName) || "dt-container" === p.align) {
                                var D, z, H = 0;
                                h.hasClass(p.rightAlignClassName) ? T > A + (H = O - S) && (H += (D = T - (A + H)) > (z = _ - (S + H)) ? z : D) : _ < S + (H = T - A) && (H += (D = T - (A + H)) > (z = _ - (S + H)) ? z : D), h.css("left", h.position().left + H)
                            } else {
                                var E = u.offset().top;
                                H = 0, H = "button-right" === p.align ? O - S : N - A, h.css("left", h.position().left + H)
                            }
                        } else (E = h.height() / 2) > t(e).height() / 2 && (E = t(e).height() / 2), h.css("marginTop", -1 * E);
                        p.background && f.background(!0, p.backgroundClassName, p.fade, u), t("div.dt-button-background").on("click.dtb-collection", (function () {
                        })), t("body").on("click.dtb-collection", (function (e) {
                            var n = t.fn.addBack ? "addBack" : "andSelf", r = t(e.target).parent()[0];
                            (!t(e.target).parents()[n]().filter(o).length && !t(r).hasClass("dt-buttons") || t(e.target).hasClass("dt-button-background")) && c()
                        })).on("keyup.dtb-collection", (function (t) {
                            27 === t.keyCode && c()
                        })), p.autoClose && setTimeout((function () {
                            a.on("buttons-action.b-internal", (function (t, e, n, o) {
                                o[0] !== u[0] && c()
                            }))
                        }), 0), t(h).trigger("buttons-popover.dt")
                    }
                }), f.background = function (e, r, l, a) {
                    l === o && (l = 400), a || (a = n.body), e ? s(t("<div/>").addClass(r).css("display", "none").insertAfter(a), l) : d(t("div." + r), l, (function () {
                        t(this).removeClass(r).remove()
                    }))
                }, f.instanceSelector = function (e, n) {
                    if (e === o || null === e) return t.map(n, (function (t) {
                        return t.inst
                    }));
                    var r = [], l = t.map(n, (function (t) {
                        return t.name
                    })), a = function (e) {
                        if (Array.isArray(e)) for (var o = 0, i = e.length; o < i; o++) a(e[o]); else if ("string" == typeof e) if (-1 !== e.indexOf(",")) a(e.split(",")); else {
                            var s = t.inArray(e.trim(), l);
                            -1 !== s && r.push(n[s].inst)
                        } else "number" == typeof e && r.push(n[e].inst)
                    };
                    return a(e), r
                }, f.buttonSelector = function (e, n) {
                    for (var r = [], l = function (t, e, n) {
                        for (var r, a, i = 0, s = e.length; i < s; i++) (r = e[i]) && (a = n !== o ? n + i : i + "", t.push({
                            node: r.node,
                            name: r.conf.name,
                            idx: a
                        }), r.buttons && l(t, r.buttons, a + "-"))
                    }, a = function (e, n) {
                        var i, s, d = [];
                        l(d, n.s.buttons);
                        var p = t.map(d, (function (t) {
                            return t.node
                        }));
                        if (Array.isArray(e) || e instanceof t) for (i = 0, s = e.length; i < s; i++) a(e[i], n); else if (null === e || e === o || "*" === e) for (i = 0, s = d.length; i < s; i++) r.push({
                            inst: n,
                            node: d[i].node
                        }); else if ("number" == typeof e) r.push({
                            inst: n,
                            node: n.s.buttons[e].node
                        }); else if ("string" == typeof e) if (-1 !== e.indexOf(",")) {
                            var f = e.split(",");
                            for (i = 0, s = f.length; i < s; i++) a(f[i].trim(), n)
                        } else if (e.match(/^\d+(\-\d+)*$/)) {
                            var u = t.map(d, (function (t) {
                                return t.idx
                            }));
                            r.push({inst: n, node: d[t.inArray(e, u)].node})
                        } else if (-1 !== e.indexOf(":name")) {
                            var c = e.replace(":name", "");
                            for (i = 0, s = d.length; i < s; i++) d[i].name === c && r.push({inst: n, node: d[i].node})
                        } else t(p).filter(e).each((function () {
                            r.push({inst: n, node: this})
                        })); else if ("object" == typeof e && e.nodeName) {
                            var m = t.inArray(e, p);
                            -1 !== m && r.push({inst: n, node: p[m]})
                        }
                    }, i = 0, s = e.length; i < s; i++) {
                        var d = e[i];
                        a(n, d)
                    }
                    return r
                }, f.stripData = function (t, e) {
                    return "string" != typeof t || (t = (t = t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")).replace(/<!\-\-.*?\-\->/g, ""), e && !e.stripHtml || (t = t.replace(/<[^>]*>/g, "")), e && !e.trim || (t = t.replace(/^\s+|\s+$/g, "")), e && !e.stripNewlines || (t = t.replace(/\n/g, " ")), e && !e.decodeEntities || (y.innerHTML = t, t = y.value)), t
                }, f.defaults = {
                    buttons: ["copy", "excel", "csv", "pdf", "print"],
                    name: "main",
                    tabIndex: 0,
                    dom: {
                        container: {tag: "div", className: "dt-buttons"},
                        collection: {tag: "div", className: ""},
                        button: {tag: "button", className: "dt-button", active: "active", disabled: "disabled"},
                        buttonLiner: {tag: "span", className: ""}
                    }
                }, f.version = "1.7.1", t.extend(i, {
                    collection: {
                        text: function (t) {
                            return t.i18n("buttons.collection", "Collection")
                        }, className: "buttons-collection", init: function (t, e, n) {
                            e.attr("aria-expanded", !1)
                        }, action: function (t, e, n, o) {
                            t.stopPropagation(), o._collection.parents("body").length ? this.popover(!1, o) : this.popover(o._collection, o)
                        }, attr: {"aria-haspopup": !0}
                    }, copy: function (t, e) {
                        if (i.copyHtml5) return "copyHtml5"
                    }, csv: function (t, e) {
                        if (i.csvHtml5 && i.csvHtml5.available(t, e)) return "csvHtml5"
                    }, excel: function (t, e) {
                        if (i.excelHtml5 && i.excelHtml5.available(t, e)) return "excelHtml5"
                    }, pdf: function (t, e) {
                        if (i.pdfHtml5 && i.pdfHtml5.available(t, e)) return "pdfHtml5"
                    }, pageLength: function (e) {
                        var n = e.settings()[0].aLengthMenu, o = [], r = [];
                        if (Array.isArray(n[0])) o = n[0], r = n[1]; else for (var l = 0; l < n.length; l++) {
                            var a = n[l];
                            t.isPlainObject(a) ? (o.push(a.value), r.push(a.label)) : (o.push(a), r.push(a))
                        }
                        return {
                            extend: "collection", text: function (t) {
                                return t.i18n("buttons.pageLength", {
                                    "-1": "Show all rows",
                                    _: "Show %d rows"
                                }, t.page.len())
                            }, className: "buttons-page-length", autoClose: !0, buttons: t.map(o, (function (t, e) {
                                return {
                                    text: r[e], className: "button-page-length", action: function (e, n) {
                                        n.page.len(t).draw()
                                    }, init: function (e, n, o) {
                                        var r = this, l = function () {
                                            r.active(e.page.len() === t)
                                        };
                                        e.on("length.dt" + o.namespace, l), l()
                                    }, destroy: function (t, e, n) {
                                        t.off("length.dt" + n.namespace)
                                    }
                                }
                            })), init: function (t, e, n) {
                                var o = this;
                                t.on("length.dt" + n.namespace, (function () {
                                    o.text(n.text)
                                }))
                            }, destroy: function (t, e, n) {
                                t.off("length.dt" + n.namespace)
                            }
                        }
                    }
                }), r.Api.register("buttons()", (function (t, e) {
                    e === o && (e = t, t = o), this.selector.buttonGroup = t;
                    var n = this.iterator(!0, "table", (function (n) {
                        if (n._buttons) return f.buttonSelector(f.instanceSelector(t, n._buttons), e)
                    }), !0);
                    return n._groupSelector = t, n
                })), r.Api.register("button()", (function (t, e) {
                    var n = this.buttons(t, e);
                    return n.length > 1 && n.splice(1, n.length), n
                })), r.Api.registerPlural("buttons().active()", "button().active()", (function (t) {
                    return t === o ? this.map((function (t) {
                        return t.inst.active(t.node)
                    })) : this.each((function (e) {
                        e.inst.active(e.node, t)
                    }))
                })), r.Api.registerPlural("buttons().action()", "button().action()", (function (t) {
                    return t === o ? this.map((function (t) {
                        return t.inst.action(t.node)
                    })) : this.each((function (e) {
                        e.inst.action(e.node, t)
                    }))
                })), r.Api.register(["buttons().enable()", "button().enable()"], (function (t) {
                    return this.each((function (e) {
                        e.inst.enable(e.node, t)
                    }))
                })), r.Api.register(["buttons().disable()", "button().disable()"], (function () {
                    return this.each((function (t) {
                        t.inst.disable(t.node)
                    }))
                })), r.Api.registerPlural("buttons().nodes()", "button().node()", (function () {
                    var e = t();
                    return t(this.each((function (t) {
                        e = e.add(t.inst.node(t.node))
                    }))), e
                })), r.Api.registerPlural("buttons().processing()", "button().processing()", (function (t) {
                    return t === o ? this.map((function (t) {
                        return t.inst.processing(t.node)
                    })) : this.each((function (e) {
                        e.inst.processing(e.node, t)
                    }))
                })), r.Api.registerPlural("buttons().text()", "button().text()", (function (t) {
                    return t === o ? this.map((function (t) {
                        return t.inst.text(t.node)
                    })) : this.each((function (e) {
                        e.inst.text(e.node, t)
                    }))
                })), r.Api.registerPlural("buttons().trigger()", "button().trigger()", (function () {
                    return this.each((function (t) {
                        t.inst.node(t.node).trigger("click")
                    }))
                })), r.Api.register("button().popover()", (function (t, e) {
                    return this.map((function (n) {
                        return n.inst._popover(t, this.button(this[0].node), e)
                    }))
                })), r.Api.register("buttons().containers()", (function () {
                    var e = t(), n = this._groupSelector;
                    return this.iterator(!0, "table", (function (t) {
                        if (t._buttons) for (var o = f.instanceSelector(n, t._buttons), r = 0, l = o.length; r < l; r++) e = e.add(o[r].container())
                    })), e
                })), r.Api.register("buttons().container()", (function () {
                    return this.containers().eq(0)
                })), r.Api.register("button().add()", (function (t, e) {
                    var n = this.context;
                    if (n.length) {
                        var o = f.instanceSelector(this._groupSelector, n[0]._buttons);
                        o.length && o[0].add(e, t)
                    }
                    return this.button(this._groupSelector, t)
                })), r.Api.register("buttons().destroy()", (function () {
                    return this.pluck("inst").unique().each((function (t) {
                        t.destroy()
                    })), this
                })), r.Api.registerPlural("buttons().remove()", "buttons().remove()", (function () {
                    return this.each((function (t) {
                        t.inst.remove(t.node)
                    })), this
                })), r.Api.register("buttons.info()", (function (e, n, r) {
                    var l = this;
                    return !1 === e ? (this.off("destroy.btn-info"), d(t("#datatables_buttons_info"), 400, (function () {
                        t(this).remove()
                    })), clearTimeout(p), p = null, this) : (p && clearTimeout(p), t("#datatables_buttons_info").length && t("#datatables_buttons_info").remove(), e = e ? "<h2>" + e + "</h2>" : "", s(t('<div id="datatables_buttons_info" class="dt-button-info"/>').html(e).append(t("<div/>")["string" == typeof n ? "html" : "append"](n)).css("display", "none").appendTo("body")), r !== o && 0 !== r && (p = setTimeout((function () {
                        l.buttons.info(!1)
                    }), r)), this.on("destroy.btn-info", (function () {
                        l.buttons.info(!1)
                    })), this)
                })), r.Api.register("buttons.exportData()", (function (t) {
                    if (this.context.length) return b(new r.Api(this.context[0]), t)
                })), r.Api.register("buttons.exportInfo()", (function (t) {
                    return t || (t = {}), {
                        filename: u(t),
                        title: m(t),
                        messageTop: h(this, t.message || t.messageTop, "top"),
                        messageBottom: h(this, t.messageBottom, "bottom")
                    }
                }));
                var u = function (e) {
                    var n = "*" === e.filename && "*" !== e.title && e.title !== o && null !== e.title && "" !== e.title ? e.title : e.filename;
                    if ("function" == typeof n && (n = n()), n === o || null === n) return null;
                    -1 !== n.indexOf("*") && (n = n.replace("*", t("head > title").text()).trim()), n = n.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
                    var r = c(e.extension);
                    return r || (r = ""), n + r
                }, c = function (t) {
                    return null === t || t === o ? null : "function" == typeof t ? t() : t
                }, m = function (e) {
                    var n = c(e.title);
                    return null === n ? null : -1 !== n.indexOf("*") ? n.replace("*", t("head > title").text() || "Exported data") : n
                }, h = function (e, n, o) {
                    var r = c(n);
                    if (null === r) return null;
                    var l = t("caption", e.table().container()).eq(0);
                    return "*" === r ? l.css("caption-side") !== o ? null : l.length ? l.text() : "" : r
                }, y = t("<textarea/>")[0], b = function (e, n) {
                    var r = t.extend(!0, {}, {
                        rows: null,
                        columns: "",
                        modifier: {search: "applied", order: "applied"},
                        orthogonal: "display",
                        stripHtml: !0,
                        stripNewlines: !0,
                        decodeEntities: !0,
                        trim: !0,
                        format: {
                            header: function (t) {
                                return f.stripData(t, r)
                            }, footer: function (t) {
                                return f.stripData(t, r)
                            }, body: function (t) {
                                return f.stripData(t, r)
                            }
                        },
                        customizeData: null
                    }, n), l = e.columns(r.columns).indexes().map((function (t) {
                        var n = e.column(t).header();
                        return r.format.header(n.innerHTML, t, n)
                    })).toArray(), a = e.table().footer() ? e.columns(r.columns).indexes().map((function (t) {
                        var n = e.column(t).footer();
                        return r.format.footer(n ? n.innerHTML : "", t, n)
                    })).toArray() : null, i = t.extend({}, r.modifier);
                    e.select && "function" == typeof e.select.info && i.selected === o && e.rows(r.rows, t.extend({selected: !0}, i)).any() && t.extend(i, {selected: !0});
                    for (var s = e.rows(r.rows, i).indexes().toArray(), d = e.cells(s, r.columns), p = d.render(r.orthogonal).toArray(), u = d.nodes().toArray(), c = l.length, m = [], h = 0, y = 0, b = c > 0 ? p.length / c : 0; y < b; y++) {
                        for (var g = [c], x = 0; x < c; x++) g[x] = r.format.body(p[h], y, x, u[h]), h++;
                        m[y] = g
                    }
                    var I = {header: l, footer: a, body: m};
                    return r.customizeData && r.customizeData(I), I
                };

                function g(t, e) {
                    var n = new r.Api(t), o = e || n.init().buttons || r.defaults.buttons;
                    return new f(n, o).container()
                }

                return t.fn.dataTable.Buttons = f, t.fn.DataTable.Buttons = f, t(n).on("init.dt plugin-init.dt", (function (t, e) {
                    if ("dt" === t.namespace) {
                        var n = e.oInit.buttons || r.defaults.buttons;
                        n && !e._buttons && new f(e, n).container()
                    }
                })), r.ext.feature.push({
                    fnInit: g,
                    cFeature: "B"
                }), r.ext.features && r.ext.features.register("buttons", g), f
            }(t, window, document)
        }.apply(e, o)) || (t.exports = r)
    }
}));