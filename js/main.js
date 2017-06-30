+ function (a) {
    function e(b, f) {
        var c, d = a.proxy(this.process, this);
        this.$element = a(b).is("body") ? a(window) : a(b);
        this.$body = a("body");
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", d);
        this.options = a.extend({}, e.DEFAULTS, f);
        this.selector = (this.options.target || (c = a(b).attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
        this.offsets = a([]);
        this.targets = a([]);
        this.activeTarget = null;
        this.refresh();
        this.process()
    }
    e.DEFAULTS = {
        offset: 10
    };
    e.prototype.refresh = function () {
        var b =
            this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]);
        this.targets = a([]);
        var f = this;
        this.$body.find(this.selector).map(function () {
            var c = a(this),
                c = c.data("target") || c.attr("href"),
                d = /^#./.test(c) && a(c);
            return d && d.length && d.is(":visible") && [[d[b]().top + (!a.isWindow(f.$scrollElement.get(0)) && f.$scrollElement.scrollTop()), c]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            f.offsets.push(this[0]);
            f.targets.push(this[1])
        })
    };
    e.prototype.process = function () {
        var a = this.$scrollElement.scrollTop() +
            this.options.offset,
            f = (this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight) - this.$scrollElement.height(),
            c = this.offsets,
            d = this.targets,
            e = this.activeTarget,
            g;
        if (a >= f) return e != (g = d.last()[0]) && this.activate(g);
        if (e && a <= c[0]) return e != (g = d[0]) && this.activate(g);
        for (g = c.length; g--;) e != d[g] && a >= c[g] && (!c[g + 1] || a <= c[g + 1]) && this.activate(d[g])
    };
    e.prototype.activate = function (b) {
        this.activeTarget = b;
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        a(this.selector +
            '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]').parents("li").addClass("active").trigger("activate.bs.scrollspy")
    };
    var h = a.fn.scrollspy;
    a.fn.scrollspy = function (b) {
        return this.each(function () {
            var f = a(this),
                c = f.data("bs.scrollspy"),
                d = "object" == typeof b && b;
            c || f.data("bs.scrollspy", c = new e(this, d));
            if ("string" == typeof b) c[b]()
        })
    };
    a.fn.scrollspy.Constructor = e;
    a.fn.scrollspy.noConflict = function () {
        a.fn.scrollspy = h;
        return this
    };
    a(window).on("load", function () {
        a('[data-spy="scroll"]').each(function () {
            var b =
                a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery);
(function (k) {
    "function" === typeof define && define.amd && define.amd.jQuery ? define(["jquery"], k) : k(jQuery)
})(function (k) {
    function ma(f) {
        if (f && void 0 === f.allowPageScroll && (void 0 !== f.swipe || void 0 !== f.swipeStatus)) f.allowPageScroll = Y;
        void 0 !== f.click && void 0 === f.tap && (f.tap = f.click);
        f || (f = {});
        f = k.extend({}, k.fn.swipe.defaults, f);
        return this.each(function () {
            var b = k(this),
                j = b.data(C);
            j || (j = new Ca(this, f), b.data(C, j))
        })
    }

    function Ca(f, b) {
        function D(a) {
            if (!0 !== c.data(C + "_intouch") && !(0 < k(a.target).closest(b.excludedElements,
                c).length)) {
                var d = a.originalEvent ? a.originalEvent : a,
                    m, Da = r ? d.touches[0] : d;
                e = na;
                r ? g = d.touches.length : a.preventDefault();
                l = 0;
                w = n = null;
                y = z = h = 0;
                t = 1;
                x = 0;
                a = [];
                for (var f = 0; 5 >= f; f++) a.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                p = a;
                a = {};
                a[A] = P(A);
                a[E] = P(E);
                a[F] = P(F);
                a[G] = P(G);
                Q = a;
                R = L = 0;
                if (!r || g === b.fingers || b.fingers === M || N()) {
                    if (Z(0, Da), S = B(), 2 == g && (Z(1, d.touches[1]), z = y = $(p[0].start, p[1].start)), b.swipeStatus || b.pinchStatus) m = u(d, e)
                } else m = !1; if (!1 === m) return e = q, u(d, e), m;
                T(!0);
                return null
            }
        }

        function aa(a) {
            var d,
                m, c, f = a.originalEvent ? a.originalEvent : a;
            if (!(e === j || e === q || oa())) {
                var D, v = pa(r ? f.touches[0] : f);
                O = B();
                r && (g = f.touches.length);
                e = H;
                2 == g && (0 == z ? (Z(1, f.touches[1]), z = y = $(p[0].start, p[1].start)) : (pa(f.touches[1]), y = $(p[0].end, p[1].end), w = 1 > t ? ba : ca), t = (1 * (y / z)).toFixed(2), x = Math.abs(z - y));
                if (g === b.fingers || b.fingers === M || !r || N()) {
                    d = v.start;
                    m = v.end;
                    d = Math.atan2(m.y - d.y, d.x - m.x);
                    d = Math.round(180 * d / Math.PI);
                    0 > d && (d = 360 - Math.abs(d));
                    d = n = 45 >= d && 0 <= d ? A : 360 >= d && 315 <= d ? A : 135 <= d && 225 >= d ? E : 45 < d && 135 > d ? G : F;
                    if (b.allowPageScroll ===
                        Y || N()) a.preventDefault();
                    else switch (m = b.allowPageScroll === qa, d) {
                    case A:
                        (b.swipeLeft && m || !m && b.allowPageScroll != da) && a.preventDefault();
                        break;
                    case E:
                        (b.swipeRight && m || !m && b.allowPageScroll != da) && a.preventDefault();
                        break;
                    case F:
                        (b.swipeUp && m || !m && b.allowPageScroll != ea) && a.preventDefault();
                        break;
                    case G:
                        (b.swipeDown && m || !m && b.allowPageScroll != ea) && a.preventDefault()
                    }
                    l = Math.round(Math.sqrt(Math.pow(v.end.x - v.start.x, 2) + Math.pow(v.end.y - v.start.y, 2)));
                    h = O - S;
                    a = n;
                    d = l;
                    d = Math.max(d, ra(a));
                    Q[a].distance = d;
                    if (b.swipeStatus || b.pinchStatus) D = u(f, e);
                    if (!b.triggerOnTouchEnd || b.triggerOnTouchLeave) {
                        a = !0;
                        if (b.triggerOnTouchLeave) {
                            c = k(this);
                            var s = c.offset();
                            a = s.left;
                            d = s.left + c.outerWidth();
                            m = s.top;
                            c = s.top + c.outerHeight();
                            a = v.end.x > a && v.end.x < d && v.end.y > m && v.end.y < c
                        }!b.triggerOnTouchEnd && a ? e = fa(H) : b.triggerOnTouchLeave && !a && (e = fa(j));
                        (e == q || e == j) && u(f, e)
                    }
                } else e = q, u(f, e);
                !1 === D && (e = q, u(f, e))
            }
        }

        function ga(a) {
            var d = a.originalEvent;
            if (r && 0 < d.touches.length) return L = B(), R = event.touches.length + 1, !0;
            oa() && (g = R);
            a.preventDefault();
            O = B();
            h = O - S;
            ha() ? (e = q, u(d, e)) : b.triggerOnTouchEnd || !1 == b.triggerOnTouchEnd && e === H ? (e = j, u(d, e)) : !b.triggerOnTouchEnd && b.tap ? (e = j, I(d, e, ia)) : e === H && (e = q, u(d, e));
            T(!1);
            return null
        }

        function J() {
            y = z = S = O = g = 0;
            t = 1;
            R = L = 0;
            T(!1)
        }

        function ja(a) {
            a = a.originalEvent;
            b.triggerOnTouchLeave && (e = fa(j), u(a, e))
        }

        function sa() {
            c.unbind(U, D);
            c.unbind(V, J);
            c.unbind(ka, aa);
            c.unbind(la, ga);
            K && c.unbind(K, ja);
            T(!1)
        }

        function fa(a) {
            var d = a,
                c = b.maxTimeThreshold ? h >= b.maxTimeThreshold ? !1 : !0 : !0,
                f = ta(),
                e = ha();
            !c ||
                e ? d = q : f && a == H && (!b.triggerOnTouchEnd || b.triggerOnTouchLeave) ? d = j : !f && (a == j && b.triggerOnTouchLeave) && (d = q);
            return d
        }

        function u(a, d) {
            var c = void 0;
            if (ua() && va() || va()) c = I(a, d, wa);
            else if ((xa() && N() || N()) && !1 !== c) c = I(a, d, ya);
            za() && b.doubleTap && !1 !== c ? c = I(a, d, Aa) : h > b.longTapThreshold && l < Ea && b.longTap && !1 !== c ? c = I(a, d, Ba) : (1 === g || !r) && (isNaN(l) || 0 === l) && b.tap && !1 !== c && (c = I(a, d, ia));
            d === q && J(a);
            d === j && (r ? 0 == a.touches.length && J(a) : J(a));
            return c
        }

        function I(a, d, f) {
            var e = void 0;
            if (f == wa) {
                c.trigger("swipeStatus", [d, n || null, l || 0, h || 0, g]);
                if (b.swipeStatus && (e = b.swipeStatus.call(c, a, d, n || null, l || 0, h || 0, g), !1 === e)) return !1;
                if (d == j && ua()) {
                    c.trigger("swipe", [n, l, h, g]);
                    if (b.swipe && (e = b.swipe.call(c, a, n, l, h, g), !1 === e)) return !1;
                    switch (n) {
                    case A:
                        c.trigger("swipeLeft", [n, l, h, g]);
                        b.swipeLeft && (e = b.swipeLeft.call(c, a, n, l, h, g));
                        break;
                    case E:
                        c.trigger("swipeRight", [n, l, h, g]);
                        b.swipeRight && (e = b.swipeRight.call(c, a, n, l, h, g));
                        break;
                    case F:
                        c.trigger("swipeUp", [n, l, h, g]);
                        b.swipeUp && (e = b.swipeUp.call(c, a, n, l, h, g));
                        break;
                    case G:
                        c.trigger("swipeDown", [n, l, h, g]), b.swipeDown && (e = b.swipeDown.call(c, a, n, l, h, g))
                    }
                }
            }
            if (f == ya) {
                c.trigger("pinchStatus", [d, w || null, x || 0, h || 0, g, t]);
                if (b.pinchStatus && (e = b.pinchStatus.call(c, a, d, w || null, x || 0, h || 0, g, t), !1 === e)) return !1;
                if (d == j && xa()) switch (w) {
                case ca:
                    c.trigger("pinchIn", [w || null, x || 0, h || 0, g, t]);
                    b.pinchIn && (e = b.pinchIn.call(c, a, w || null, x || 0, h || 0, g, t));
                    break;
                case ba:
                    c.trigger("pinchOut", [w || null, x || 0, h || 0, g, t]), b.pinchOut && (e = b.pinchOut.call(c, a, w || null, x || 0, h || 0, g, t))
                }
            }
            if (f == ia) {
                if (d === q || d === j) clearTimeout(W),
                    b.doubleTap && !za() ? (s = B(), W = setTimeout(k.proxy(function () {
                        s = null;
                        c.trigger("tap", [a.target]);
                        b.tap && (e = b.tap.call(c, a, a.target))
                    }, this), b.doubleTapThreshold)) : (s = null, c.trigger("tap", [a.target]), b.tap && (e = b.tap.call(c, a, a.target)))
            } else if (f == Aa) {
                if (d === q || d === j) clearTimeout(W), s = null, c.trigger("doubletap", [a.target]), b.doubleTap && (e = b.doubleTap.call(c, a, a.target))
            } else if (f == Ba && (d === q || d === j)) clearTimeout(W), s = null, c.trigger("longtap", [a.target]), b.longTap && (e = b.longTap.call(c, a, a.target));
            return e
        }

        function ta() {
            var a = !0;
            null !== b.threshold && (a = l >= b.threshold);
            return a
        }

        function ha() {
            var a = !1;
            null !== b.cancelThreshold && null !== n && (a = ra(n) - l >= b.cancelThreshold);
            return a
        }

        function xa() {
            var a = g === b.fingers || b.fingers === M || !r,
                d = 0 !== p[0].end.x,
                c;
            c = null !== b.pinchThreshold ? x >= b.pinchThreshold : !0;
            return a && d && c
        }

        function N() {
            return !(!b.pinchStatus && !b.pinchIn && !b.pinchOut)
        }

        function ua() {
            var a = b.maxTimeThreshold ? h >= b.maxTimeThreshold ? !1 : !0 : !0,
                d = ta(),
                c = g === b.fingers || b.fingers === M || !r,
                e = 0 !== p[0].end.x;
            return !ha() &&
                e && c && d && a
        }

        function va() {
            return !(!b.swipe && !b.swipeStatus && !b.swipeLeft && !b.swipeRight && !b.swipeUp && !b.swipeDown)
        }

        function za() {
            if (null == s) return !1;
            var a = B();
            return !!b.doubleTap && a - s <= b.doubleTapThreshold
        }

        function oa() {
            var a = !1;
            L && B() - L <= b.fingerReleaseThreshold && (a = !0);
            return a
        }

        function T(a) {
            !0 === a ? (c.bind(ka, aa), c.bind(la, ga), K && c.bind(K, ja)) : (c.unbind(ka, aa, !1), c.unbind(la, ga, !1), K && c.unbind(K, ja, !1));
            c.data(C + "_intouch", !0 === a)
        }

        function Z(a, b) {
            p[a].identifier = void 0 !== b.identifier ? b.identifier :
                0;
            p[a].start.x = p[a].end.x = b.pageX || b.clientX;
            p[a].start.y = p[a].end.y = b.pageY || b.clientY;
            return p[a]
        }

        function pa(a) {
            var b = void 0 !== a.identifier ? a.identifier : 0;
            a: {
                for (var c = 0; c < p.length; c++)
                    if (p[c].identifier == b) {
                        b = p[c];
                        break a
                    }
                b = void 0
            }
            b.end.x = a.pageX || a.clientX;
            b.end.y = a.pageY || a.clientY;
            return b
        }

        function ra(a) {
            if (Q[a]) return Q[a].distance
        }

        function P(a) {
            return {
                direction: a,
                distance: 0
            }
        }

        function $(a, b) {
            var c = Math.abs(a.x - b.x),
                e = Math.abs(a.y - b.y);
            return Math.round(Math.sqrt(c * c + e * e))
        }

        function B() {
            return (new Date).getTime()
        }
        var X = r || !b.fallbackToMouseEvents,
            U = X ? "touchstart" : "mousedown",
            ka = X ? "touchmove" : "mousemove",
            la = X ? "touchend" : "mouseup",
            K = X ? null : "mouseleave",
            V = "touchcancel",
            l = 0,
            n = null,
            h = 0,
            z = 0,
            y = 0,
            t = 1,
            x = 0,
            w = 0,
            Q = null,
            c = k(f),
            e = "start",
            g = 0,
            p = null,
            S = 0,
            O = 0,
            L = 0,
            R = 0,
            s = 0,
            W = null;
        try {
            c.bind(U, D), c.bind(V, J)
        } catch (ma) {
            k.error("events not supported " + U + "," + V + " on jQuery.swipe")
        }
        this.enable = function () {
            c.bind(U, D);
            c.bind(V, J);
            return c
        };
        this.disable = function () {
            sa();
            return c
        };
        this.destroy = function () {
            sa();
            c.data(C, null);
            return c
        };
        this.option = function (a, c) {
            if (void 0 !== b[a]) {
                if (void 0 === c) return b[a];
                b[a] = c
            } else k.error("Option " + a + " does not exist on jQuery.swipe.options");
            return null
        }
    }
    var A = "left",
        E = "right",
        F = "up",
        G = "down",
        ca = "in",
        ba = "out",
        Y = "none",
        qa = "auto",
        wa = "swipe",
        ya = "pinch",
        ia = "tap",
        Aa = "doubletap",
        Ba = "longtap",
        da = "horizontal",
        ea = "vertical",
        M = "all",
        Ea = 10,
        na = "start",
        H = "move",
        j = "end",
        q = "cancel",
        r = "ontouchstart" in window,
        C = "TouchSwipe";
    k.fn.swipe = function (f) {
        var b = k(this),
            j = b.data(C);
        if (j && "string" === typeof f) {
            if (j[f]) return j[f].apply(this,
                Array.prototype.slice.call(arguments, 1));
            k.error("Method " + f + " does not exist on jQuery.swipe")
        } else if (!j && ("object" === typeof f || !f)) return ma.apply(this, arguments);
        return b
    };
    k.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    k.fn.swipe.phases = {
        PHASE_START: na,
        PHASE_MOVE: H,
        PHASE_END: j,
        PHASE_CANCEL: q
    };
    k.fn.swipe.directions = {
        LEFT: A,
        RIGHT: E,
        UP: F,
        DOWN: G,
        IN: ca,
        OUT: ba
    };
    k.fn.swipe.pageScroll = {
        NONE: Y,
        HORIZONTAL: da,
        VERTICAL: ea,
        AUTO: qa
    };
    k.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: M
    }
});
(function (d) {
    "function" === typeof define && define.amd ? define(["jquery"], d) : "object" === typeof exports ? module.exports = d : d(jQuery)
})(function (d) {
    function h(a) {
        var b = a ? a.originalEvent || a : window.event,
            c = x.call(arguments, 1);
        a = f._fix(b);
        c.unshift(a);
        m && clearTimeout(m);
        m = setTimeout(y, 200);
        return d.event.dispatch.apply(this, c)
    }

    function y() {
        e = null
    }
    var q = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        l = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        x = Array.prototype.slice,
        m, e, w = q.length;
    for (; w;) d.event.fixHooks[q[--w]] = d.event.mouseHooks;
    var f = d.event.special.mousewheel = {
        version: "4.0.0-pre",
        setup: function () {
            if (this.addEventListener)
                for (var a = l.length; a;) this.addEventListener(l[--a], h, !1);
            else this.onmousewheel = h;
            d.data(this, "mousewheel-line-height", f._getLineHeight(this));
            d.data(this, "mousewheel-page-height", f._getPageHeight(this))
        },
        add: function (a) {
            var b = a.data;
            if (b = b && b.mousewheel)("throttle" in b || "debounce" in b) && f._delayHandler.call(this,
                a), "intent" in b && f._intentHandler.call(this, a)
        },
        trigger: function (a, b) {
            b || (b = a);
            h.call(this, b);
            return !1
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var a = l.length; a;) this.removeEventListener(l[--a], h, !1);
            else this.onmousewheel = null
        },
        _getLineHeight: function (a) {
            return parseInt(d(a).offsetParent().css("fontSize"), 10)
        },
        _getPageHeight: function (a) {
            return d(a).height()
        },
        settings: {
            adjustOldDeltas: !0
        },
        trigger: function (a, b) {
            b || (b = a);
            h.call(this, b);
            return !1
        },
        _fix: function (a) {
            var b = 0,
                c = 0,
                k = 0,
                j = d.event.fix(a);
            "detail" in a && (c = a.detail);
            "wheelDelta" in a && (c = -1 * a.wheelDelta);
            "wheelDeltaY" in a && (c = -1 * a.wheelDeltaY);
            "wheelDeltaX" in a && (b = -1 * a.wheelDeltaX);
            "axis" in a && a.axis === a.HORIZONTAL_AXIS && (b = c, c = 0);
            "deltaY" in a && (c = a.deltaY);
            "deltaX" in a && (b = a.deltaX);
            if (!(0 === c && 0 === b)) {
                k = Math.max(Math.abs(c), Math.abs(b));
                if (!e || k < e) e = k, f.settings.adjustOldDeltas && ("mousewheel" === a.type && 0 === k % 120) && (e /= 40);
                f.settings.adjustOldDeltas && ("mousewheel" === a.type && 0 === k % 120) && (delta /= 40, b /= 40, c /= 40);
                b = Math[1 <= b ? "floor" : "ceil"](b /
                    e);
                c = Math[1 <= c ? "floor" : "ceil"](c / e);
                j.deltaX = b;
                j.deltaY = c;
                j.deltaFactor = e;
                j.deltaMode = 0;
                j.type = "mousewheel";
                return j
            }
        },
        _intentHandler: function (a) {
            var b, c, k, j, e, g = !1,
                f = this,
                r = a.data.mousewheel.intent,
                h = r.interval || 100,
                n = r.sensitivity || 7,
                l = a.handler,
                u = function (a) {
                    j = a.pageX;
                    e = a.pageY
                },
                s = function () {
                    Math.abs(c - j) + Math.abs(k - e) < n ? (d(f).off("mousemove", u), g = !0) : (c = j, k = e, b = setTimeout(s, h))
                };
            d(f).on("mouseenter", function () {
                c = event.pageX;
                k = event.pageY;
                d(f).on("mousemove", u);
                b = setTimeout(s, h)
            }).on("mouseleave",
                function () {
                    b && clearTimeout(b);
                    d(f).off("mousemove", u);
                    g = !1
                });
            a.handler = function (a) {
                if (g) return l.apply(f, arguments);
                var b = a;
                !0 === r.preventDefault && b.preventDefault();
                !0 === r.stopPropagation && b.stopPropagation()
            }
        },
        _delayHandler: function (a) {
            var b, c, d, f = this,
                e = "throttle" in a.data.mousewheel ? "throttle" : "debounce",
                g = a.data.mousewheel[e],
                h = "leading" in g ? g.leading : "debounce" === e ? !1 : !0,
                l = "trailing" in g ? g.trailing : !0,
                m = g.delay || 100,
                n = "throttle" === e ? m : g.maxDelay,
                q = a.handler;
            a.handler = function (a) {
                var s = arguments,
                    t = function () {
                        d = +new Date;
                        return q.apply(f, s)
                    },
                    p = function () {
                        c = null;
                        return t()
                    },
                    v;
                b ? clearTimeout(b) : h && (v = t());
                b = setTimeout(function () {
                    c && clearTimeout(c);
                    d = c = b = null;
                    if (l) return t()
                }, m);
                "throttle" === e ? n && +new Date - d >= n && (v = p()) : n && !c && (c = setTimeout(p, n));
                p = a;
                !0 === g.preventDefault && p.preventDefault();
                !0 === g.stopPropagation && p.stopPropagation();
                return v
            }
        }
    }
});
(function (a) {
    var d = a.event,
        b, c;
    b = d.special.debouncedresize = {
        setup: function () {
            a(this).on("resize", b.handler)
        },
        teardown: function () {
            a(this).off("resize", b.handler)
        },
        handler: function (a, f) {
            var g = this,
                h = arguments,
                e = function () {
                    a.type = "debouncedresize";
                    d.dispatch.apply(g, h)
                };
            c && clearTimeout(c);
            f ? e() : c = setTimeout(e, b.threshold)
        },
        threshold: 150
    }
})(jQuery);
(function (c) {
    c.expr[":"].external = function (c) {
        return !c.href.match(/^mailto\:/) && !c.href.match(/^javascript\:/) && c.hostname != location.hostname
    };
    c("a:external").attr({
        target: "_blank"
    })
});
$(function () {
    function c() {
        var a = $(".pane.active").next(".pane");
        0 < a.length && f(a)
    }

    function k() {
        var a = $(".pane.active").prev(".pane");
        0 < a.length && f(a)
    }

    function f(a) {
        var b = a.offset() || 0,
            b = Math.round(b.top),
            d = $(".video-pane.active").length;
        !j && !d && (j = !0, $("body,html").stop().animate({
            scrollTop: b
        }, 700, function () {
            j && (j = !1, $(a).attr("id"))
        }))
    }

    function l(a, b) {
        var d = a.parent().find("video"),
            h = d.get(0);
        a.parent().addClass("trans-out");
        d.removeClass("playing");
        h.pause();
        h.currentTime = 0;
        $(".pane:hidden, .navbar:hidden").show();
        d = $(b).offset().top;
        $("body,html").scrollTop(d);
        $("body").removeClass("video-playing").scrollspy("refresh");
        setTimeout(function () {
            a.parent().removeClass("active trans-out")
        }, 500)
    }
    var m = Modernizr.mq("only screen and ( max-width: 767px )"),
        n = Modernizr.mq("only screen and ( min-width: 768px )");
    Modernizr.mq("only screen and ( min-width: 1025px )");
    Modernizr.mq("only screen and ( min-width: 1200px )");
    var p = Modernizr.svg || Modernizr.inlinesvg,
        j = !1,
        q = $(".navbar").html(),
        r = $(".video-pane.active").length;
    m || $(".pane:not(:first)").each(function () {
        $(this).append("<div class=navbar>" + q + "</div>")
    });
    $("#nav").on("click", "a", function (a) {
        var b = $(this).attr("href");
        f($(b));
        a.preventDefault()
    });
    n && ($(document).swipe({
        swipeUp: c,
        swipeDown: k,
        threshold: 40,
        allowPageScroll: "none"
    }), $(document).on("keydown.od47", function (a) {
        switch (a.which) {
        case 40:
            c();
            a.preventDefault();
            break;
        case 32:
            c();
            a.preventDefault();
            break;
        case 38:
            k(), a.preventDefault()
        }
    }), $(document).on("mousewheel", {
        mousewheel: {
            debounce: {
                leading: !1,
                trailing: !0,
                maxDelay: 700,
                preventDefault: !0
            }
        }
    }, function (a) {
        0 < a.deltaY ? c() : 0 > a.deltaY && k()
    }), $(window).on("debouncedresize", function () {
        0 === r && ($("body").scrollspy("refresh"), f($(".pane.active")))
    }).on("load", function (a) {
        window.location.hash ? ($("body,html").animate({
            scrollTop: 0
        }, 1, function () {
            f($(window.location.hash))
        }), a.preventDefault()) : setTimeout(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 1)
        }, 10)
    }));
    $(".brand").on("click", function (a) {
        f($("#first"));
        a.preventDefault()
    });
    $("#nav").on("activate.bs.scrollspy",
        function () {
            var a = $("#nav .active a").attr("href"),
                b = a.split("#");
            $(a).addClass("active").siblings(".pane").removeClass("active");
            $(".nav-updater").each(function () {
                for (var a = $(this).attr("class").split(" "), h = 0; h < a.length; h++) - 1 !== a[h].indexOf("active-pane-") && $(this).removeClass(a[h]);
                $(this).addClass("active-pane-" + b[1])
            })
        });
    p || $('img[src$=".svg"]').each(function () {
        var a = $(this),
            b = a.attr("src").replace("/img/", "/img/alt/").replace(".svg", ".png");
        a.attr({
            src: b
        })
    });
    $("#wrap").on("click", ".video-pane .icon-close",
        function (a) {
            var b = $(this).attr("href");
            l($(this), b);
            a.preventDefault()
        });
    $(window).on("load", function () {
        $(".video-pane").each(function () {
            var a = document.createElement("video"),
                b = $(this).attr("id"),
                d = $(this).data("video-src"),
                h = $(this).data("video-article"),
                e = document.createElement("source"),
                c = document.createAttribute("preload");
            c.value = "none";
            a.setAttributeNode(c);
            a.id = b + "-tape";
            Modernizr.video.h264 ? (e.type = "video/mp4", e.src = "/video/" + d + ".mp4") : Modernizr.video.ogg ? (e.type = "video/ogv", e.src = "/video/" +
                d + ".ogv") : Modernizr.video.webm ? (e.type = "video/webm", e.src = "/video/" + d + ".webm") : (e.type = "video/mp4", e.src = "/video/" + d + ".mp4");
            a.appendChild(e);
            $(this).append(a).append('<a class=icon-close href="' + h + '"></a><i class=loading></i>')
        });
        Modernizr.video ? ($("#wrap").on("click", ".active video", function () {
            !1 === $(this).get(0).paused ? $(this).get(0).pause() : $(this).get(0).play()
        }), $("a[data-video-id]").on("click", function (a) {
            var b = $(this).data("video-id"),
                d = $("#" + b),
                c = d.data("video-src"),
                e = d.data("video-article"),
                f;
            if (m) Modernizr.video.h264 ? f = "/video/" + c + ".mp4" : Modernizr.video.ogg ? f = "/video/" + c + ".ogv" : Modernizr.video.webm ? f = "/video/" + c + ".webm" : alert("cannot play video. sorry."), window.location.href = f;
            else {
                var d = $("#" + b),
                    g = document.getElementById(b + "-tape");
                $(".pane, .navbar").hide();
                $("body").addClass("video-playing");
                d.addClass("active");
                g.load();
                n || (g.play(), g.pause());
                setTimeout(function () {
                    g.classList ? g.classList.add("playing") : g.className += " playing";
                    g.play();
                    g.addEventListener("webkitendfullscreen", function () {
                        l($(this),
                            e)
                    }, !1);
                    g.addEventListener("ended", function () {
                        l($(this), e)
                    }, !1)
                }, 800)
            }
            a.preventDefault()
        })) : alert("cant play dis")
    })
});
