window.Modernizr = function (h, f, r) {
    function G(a, b) {
        for (var c in a) {
            var d = a[c];
            if (!~("" + d).indexOf("-") && t[d] !== r) return "pfx" == b ? d : !0
        }
        return !1
    }

    function p(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            f = (a + " " + H.join(d + " ") + d).split(" ");
        if ("string" === typeof b || "undefined" === typeof b) b = G(f, b);
        else {
            f = (a + " " + I.join(d + " ") + d).split(" ");
            a: {
                a = f;
                for (var e in a)
                    if (d = b[a[e]], d !== r) {
                        b = !1 === c ? a[e] : "function" === typeof d ? d.bind(c || b) : d;
                        break a
                    }
                b = !1
            }
        }
        return b
    }
    var e = {},
        l = f.documentElement,
        g = f.createElement("modernizr"),
        t = g.style,
        J = " -webkit- -moz- -o- -ms- ".split(" "),
        H = ["Webkit", "Moz", "O", "ms"],
        I = ["webkit", "moz", "o", "ms"],
        g = {},
        w = [],
        x = w.slice,
        k, u = function (a, b, c, d) {
            var e, g, h, k, m = f.createElement("div"),
                j = f.body,
                n = j || f.createElement("body");
            if (parseInt(c, 10))
                for (; c--;) h = f.createElement("div"), h.id = d ? d[c] : "modernizr" + (c + 1), m.appendChild(h);
            return e = ['&#173;<style id="smodernizr">', a, "</style>"].join(""), m.id = "modernizr", (j ? m : n).innerHTML += e, n.appendChild(m), j || (n.style.background = "", n.style.overflow = "hidden", k = l.style.overflow,
                l.style.overflow = "hidden", l.appendChild(n)), g = b(m, a), j ? m.parentNode.removeChild(m) : (n.parentNode.removeChild(n), l.style.overflow = k), !!g
        },
        y, O = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
    y = function (a, b) {
        b = b || f.createElement(O[a] || "div");
        a = "on" + a;
        var c = a in b;
        return c || (b.setAttribute || (b = f.createElement("div")), b.setAttribute && b.removeAttribute && (b.setAttribute(a, ""), c = "function" === typeof b[a], "undefined" === typeof b[a] || (b[a] = r), b.removeAttribute(a))),
            c
    };
    var z = {}.hasOwnProperty,
        v;
    "undefined" !== typeof z && "undefined" !== typeof z.call ? v = function (a, b) {
        return z.call(a, b)
    } : v = function (a, b) {
        return b in a && "undefined" === typeof a.constructor.prototype[b]
    };
    Function.prototype.bind || (Function.prototype.bind = function (a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = x.call(arguments, 1),
            d = function () {
                if (this instanceof d) {
                    var f = function () {};
                    f.prototype = b.prototype;
                    var f = new f,
                        e = b.apply(f, c.concat(x.call(arguments)));
                    return Object(e) === e ? e : f
                }
                return b.apply(a,
                    c.concat(x.call(arguments)))
            };
        return d
    });
    g.touch = function () {
        var a;
        return "ontouchstart" in h || h.DocumentTouch && f instanceof DocumentTouch ? a = !0 : u(["@media (", J.join("touch-enabled),("), "modernizr){#modernizr{top:9px;position:absolute}}"].join(""), function (b) {
            a = 9 === b.offsetTop
        }), a
    };
    g.hashchange = function () {
        return y("hashchange", h) && (f.documentMode === r || 7 < f.documentMode)
    };
    g.multiplebgs = function () {
        t.cssText = "background:url(https://),url(https://),red url(https://)";
        return /(url\s*\(.*?){3}/.test(t.background)
    };
    g.backgroundsize = function () {
        return p("backgroundSize")
    };
    g.cssanimations = function () {
        return p("animationName")
    };
    g.csstransforms = function () {
        return !!p("transform")
    };
    g.csstransforms3d = function () {
        var a = !!p("perspective");
        return a && "webkitPerspective" in l.style && u("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    };
    g.csstransitions = function () {
        return p("transition")
    };
    g.video = function () {
        var a = f.createElement("video"),
            b = !1;
        try {
            if (b = !!a.canPlayType) b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (c) {}
        return b
    };
    g.svg = function () {
        return !!f.createElementNS && !!f.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    };
    g.inlinesvg = function () {
        var a = f.createElement("div");
        return a.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" ==
            (a.firstChild && a.firstChild.namespaceURI)
    };
    for (var j in g) v(g, j) && (k = j.toLowerCase(), e[k] = g[j](), w.push((e[k] ? "" : "no-") + k));
    e.addTest = function (a, b) {
        if ("object" == typeof a)
            for (var c in a) v(a, c) && e.addTest(c, a[c]);
        else {
            a = a.toLowerCase();
            if (e[a] !== r) return e;
            b = "function" == typeof b ? b() : b;
            l.className += " od47-" + (b ? "" : "no-") + a;
            e[a] = b
        }
        return e
    };
    t.cssText = "";
    var g = null,
        K = function () {
            var a = s.elements;
            return "string" == typeof a ? a.split(" ") : a
        },
        B = function (a) {
            var b = L[a[M]];
            return b || (b = {}, A++, a[M] = A, L[A] = b), b
        },
        N =
        function (a, b, c) {
            b || (b = f);
            if (q) return b.createElement(a);
            c || (c = B(b));
            var d;
            return c.cache[a] ? d = c.cache[a].cloneNode() : P.test(a) ? d = (c.cache[a] = c.createElem(a)).cloneNode() : d = c.createElem(a), d.canHaveChildren && !Q.test(a) && !d.tagUrn ? c.frag.appendChild(d) : d
        };
    k = function (a) {
        a || (a = f);
        var b = B(a);
        if (s.shivCSS && !C && !b.hasCSS) {
            var c, d = a;
            c = d.createElement("p");
            d = d.getElementsByTagName("head")[0] || d.documentElement;
            c = (c.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",
                d.insertBefore(c.lastChild, d.firstChild));
            b.hasCSS = !!c
        }
        if (!q) {
            var e = a;
            b.cache || (b.cache = {}, b.createElem = e.createElement, b.createFrag = e.createDocumentFragment, b.frag = b.createFrag());
            e.createElement = function (a) {
                return s.shivMethods ? N(a, e, b) : b.createElem(a)
            };
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + K().join().replace(/[\w\-]+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        return a
    };
    j = this.html5 || {};
    var Q = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        P = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        C, M = "_html5shiv",
        A = 0,
        L = {},
        q;
    try {
        var D = f.createElement("a");
        D.innerHTML = "<xyz></xyz>";
        C = "hidden" in D;
        var E;
        if (!(E = 1 == D.childNodes.length)) {
            f.createElement("a");
            var F = f.createDocumentFragment();
            E = "undefined" == typeof F.cloneNode || "undefined" == typeof F.createDocumentFragment || "undefined" == typeof F.createElement
        }
        q =
            E
    } catch (R) {
        q = C = !0
    }
    var s = {
        elements: j.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== j.shivCSS,
        supportsUnknownElements: q,
        shivMethods: !1 !== j.shivMethods,
        type: "default",
        shivDocument: k,
        createElement: N,
        createDocumentFragment: function (a, b) {
            a || (a = f);
            if (q) return a.createDocumentFragment();
            b = b || B(a);
            for (var c = b.frag.cloneNode(), d = 0, e = K(), g =
                e.length; d < g; d++) c.createElement(e[d]);
            return c
        }
    };
    this.html5 = s;
    k(f);
    return e._version = "2.7.1", e._prefixes = J, e._domPrefixes = I, e._cssomPrefixes = H, e.mq = function (a) {
        var b = h.matchMedia || h.msMatchMedia;
        if (b) return b(a).matches;
        var c;
        return u("@media " + a + " { #modernizr { position: absolute; } }", function (a) {
            c = "absolute" == (h.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).position
        }), c
    }, e.hasEvent = y, e.testProp = function (a) {
        return G([a])
    }, e.testAllProps = p, e.testStyles = u, l.className = l.className.replace(/(^|\s)no-js(\s|$)/,
        "$1$2") + (" od47-js od47-" + w.join(" od47-")), e
}(this, this.document);
Modernizr.addTest("csscalc", function () {
    var h = document.createElement("div");
    return h.style.cssText = "width:" + Modernizr._prefixes.join("calc(10px);width:"), !!h.style.length
});
