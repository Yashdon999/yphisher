! function(e) {
    var t = {};

    function n(i) { if (t[i]) return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
    return n.m = e, n.c = t, n.d = function(e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) { return e[t] }.bind(null, o));
        return i
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 61)
}([function() {
    var e = window,
        t = e.se,
        n = e.ce,
        i = e.attr,
        o = e.append,
        a = e.ge,
        r = e.each,
        s = e.addEvent,
        l = e.removeEvent,
        c = e.remove,
        u = e.unlockButton,
        d = e.setDocumentDomain,
        f = e.lockButton,
        p = e.checkNav,
        _ = e.cancelEvent,
        m = e.checkEvent,
        v = e.getHref,
        h = e.extend,
        g = e.stopEvent,
        w = e.tag,
        y = e.gpeByTag,
        b = e.obj2qs,
        k = e.scrollToHash,
        C = e.addClass,
        M = e.hasClass,
        S = e.qs2obj,
        E = e.copy,
        T = e.isVkWebView,
        A = e.onDOMReady,
        x = e.statlogsValueEvent,
        I = e.browser,
        P = window,
        B = P.ajax,
        L = function() {
            var e = !(!window.history || !history.pushState),
                A = null,
                P = t(function() { return A }),
                N = [],
                O = 7,
                H = !1,
                D = 30;

            function j() { document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges() }

            function R(e, t, n) {
                for (var i = N.length - 1; i >= 0; --i)
                    if (N[i].h == e || N[i].a == e) return void(N[i] = { h: e, d: t, a: n });
                N.push({ h: e, d: t, a: n }), N.length > O && N.shift()
            }

            function q(e) {
                for (var t = N.length - 1; t >= 0; --t)
                    if (N[t].h == e || N[t].a == e) return N = N.slice(0, t + 1), N[t].d;
                return !1
            }

            function F(e) {
                var t;
                if (t = /^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(e)) {
                    if (t[1] != location.protocol) return !1;
                    if (t[2] && t[2] != location.hostname) return !1;
                    if (t[3] && t[3] != location.port) return !1;
                    e = t[4]
                }
                return e
            }

            function U(e) {
                var t = n("iframe");
                i(t, "id", "upload_iframe"), i(t, "name", "upload_iframe"), i(t, "width", "0"), i(t, "height", "0"), i(t, "border", "0"), i(t, "style", "width:0;height:0;border:none;position:absolute;left:-1000px;"), o(t, e.parentNode), window.frames.upload_iframe.name = "upload_iframe", t = a("upload_iframe");
                var p = !1;
                return r(e, function(e, t) { return "submit" === t.type ? (p = t, !1) : void 0 }), s(t, "load", function _() { l(t, "load", _), setTimeout(function() { c(t), u(p) }, 2e3) }), d(), i(e, "target", "upload_iframe"), i(e, "method", "post"), i(e, "enctype", "multipart/form-data"), i(e, "encoding", "multipart/form-data"), o(n("input", { type: "hidden", id: "__extra", name: "__extra", value: 1 }), e), e.submit(), f(p), setTimeout(function() { c("__extra") }, 0), !1
            }

            function z(e, t) {
                var n = window,
                    i = n.al;
                if (!window.al || !i.ver) return !0;
                var o = p(t.target, { skip_onclick: !0, skip_clicable: !0 });
                return o ? !0 : e === !1 ? !1 : (L.go(e, t) || _(t), !1)
            }

            function $(e, t, i) {
                if (!i) return !0;
                if (m(t)) return !0;
                c("app_go_frame");
                var o = v(e),
                    a = n("iframe", { id: "app_go_frame", src: i, onload: function() { c("app_go_frame"), o && L.hard_go(o) } }, { display: "none" });
                return window.bodyNode.appendChild(a), !1
            }

            function V(e, t, n) { return m(t) ? !0 : n && n.push_only ? !0 : (n && n.replace ? location.replace(e) : e && (location.href = v(e)), !0) }

            function W(e, t, n) {
                var i = window,
                    o = i.al;
                _(t);
                var a = v(e);
                if (window.al && o.ver) { if (n && n.push_only) return !0; if (B.nav(a, n)) return j(), !0 }
                V(a, t, n)
            }

            function X(t, n, o) {
                var a, s;
                if (t && t.href && t.getAttribute && t.getAttribute("data-change-location-with-post-away")) { s = t.href, a = it(t); var l = {}; return a.post_id && (l.post = a.post_id, a.ad_data && (l.post_ad_data = a.ad_data), s = "/away.php?to=" + encodeURIComponent(s) + "&" + b(l).substr(1)), V(s, n, o), !1 }
                if (L.onBeforeGo(t, n, o)) return !1;
                if (o = h({ no_push: !1, push_only: !1, replace: !1 }, o), m(n)) return !g(n);
                if (!t) return !0;
                e && (o.no_push || o.need_restore) && (H = !1);
                var c = t,
                    u = "",
                    d = "",
                    f = "";
                !t.href && t.getAttribute && (c = t.getAttribute("data-href"));

                function p(e) { return "a" === w(e) ? e : y("a", e) }
                var v = n && p(n.target) || t && t.tagName && p(t);
                if (("input" == w(t) || "button" == w(t)) && ("submit" == t.type || "image" == t.type) && t.form) {
                    if (t.disabled) return !0;
                    var E = t.form,
                        T = {},
                        A = E.action || "",
                        x = !1;
                    if (r(E, function(e, n) { return !n.name || n.disabled ? !0 : ("radio" !== n.type || n.checked) && ("checkbox" !== n.type || n.checked) ? "button" === n.type ? !0 : "submit" === n.type && n !== t ? !0 : "image" === n.type && n !== t ? !0 : "file" === n.type ? (x = !0, !1) : void(T[n.name] = n.value) : !0 }), "image" == t.type && (T[t.name] = t.value, T[t.name + ".x"] = 1, T[t.name + ".y"] = 1), x || "multipart/form-data" == i(E, "enctype")) return U(E);
                    if (!(c = F(A))) return !0;
                    E.method && "get" != E.method ? o.params = T : c = c.split("?", 1).shift() + b(T)
                }
                if ("string" != typeof c) {
                    if (!c) return !0;
                    u = c.pathname, "/" !== u.substr(0, 1) && (u = "/" + u), d = c.search.substr(1), f = c.hash, c = u + c.search + f
                } else {
                    var I = c.split("#"),
                        P = I.shift();
                    f = I.length ? "#" + I.join("#") : "", P = P.split("?"), u = P.shift(), d = P.join("?"), !f && !d || u || (u = L.path, P || (d = L.params), c = u + (d ? "?" + d : "") + f)
                }
                var B = S(d);
                a = it(v, !!B._post_click_type);

                function N(e, t, n) { var i = n && B[t]; return !e || i ? !1 : (B[t] = e, !0) }
                if (N(a.post_id, "_post", !0), N(a.post_click_type, "_post_click_type", !0), B._post_click_type && N(a.ad_data, "_post_ad_data", !0) && N(a.ad_block_unique_id, "_post_ad_block_unique_id"), window.isNewMail && L.onBeforeGo4(u, B)) return !1;
                if (0 !== location.pathname.indexOf("/app") && 0 === u.indexOf("/app") && B && B.act && "app_r" === B.act) return n ? !0 : (V(t, n, o), !1);
                if (d = b(B).substr(1), n && c.split("#").shift() == L.cur.split("#").shift() && f && !o.force && (k(f), o.push_only = !0), o.no_push && L.cur == c && !o.force) return !1;
                if (o.push_only) return Q(h(o, { nav: { push: c, path: u, params: d, hash: f } })), !1;
                if (C("active", o.link || t), M("al_back_history", t) && L.tryBack()) return !1;
                if (M("al_back", t)) {
                    var O = B.act;
                    o.need_restore = window.isNewMail && "/mail" === location.pathname && !O || "show" === O && !geByClass1("messenger") ? !1 : !0
                }
                var D = Y(h(o, t.tagName ? { target: t } : {}, { nav: { push: c, path: u, params: d, hash: f } }));
                return D || _(n), D
            }

            function Y(e) {
                var t = window,
                    n = t.cur,
                    i = window,
                    o = i.menu,
                    a = S(e.nav.params),
                    r = S(L.params);
                if ((r.z || a.z) && r.z != a.z) {
                    if (L.path == e.nav.path) {
                        var s = E(a),
                            l = E(r);
                        if (delete s.z, delete l.z, s = b(s), l = b(l), s == l) return G(a.z, !1, e), Q(e), o.close(null, !0), !1
                    }
                    e.zProcess = function(t, n) { G(a.z, t, h({}, e, { no_push: !0 }), n) }
                }
                return e.onPreNav = function() { e.zProcess && (e.zProcess(), delete e.zProcess) }, !e.ignore_cur_process && n.processNav && n.processNav(e) ? (Q(e), o.close(null, !0), !1) : (W(e.nav.push, null, e), !1)
            }

            function G(e, t, n, i) {
                var o, a = window,
                    r = a.photo,
                    s = window,
                    l = s.zlayer;
                if (e && (o = /^photo(-?\d+_\d+)(?:\/([a-z0-9_-]+(\/rev)?)?)?$/i.exec(e))) {
                    if (i === !0) return !1;
                    var c = o[1] || "",
                        u = o[2] || "";
                    return r.zopen(!1, null, c, u, { no_push: (n || {}).no_push }), l && t !== !1 && "undefined" != typeof t && (l._st = t), !0
                }
                return i === !1 ? !1 : (l && l.close(), !0)
            }

            function K(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (e) t = "/" == t.substr(0, 1) ? t : "/" + t, window.isNewMail ? n.replace ? history.replaceState(i, null, t) : history.pushState(i, null, t) : n.replace ? history.replaceState(null, null, t) : history.pushState(null, null, t);
                else {
                    var o = "/" == t.substr(0, 1) ? t : "/" + t,
                        r = "#" + o,
                        s = location.pathname + location.search + r;
                    a("base").href = o, n.replace ? location.replace(s) : (A = r, location.href = s)
                }
            }

            function Q(t) {
                if (!t.no_push && L.cur != t.nav.push) try { window.isNewMail ? K(t.nav.push, t, t.historyState) : K(t.nav.push, t), e && !t.no_push && (t.nav_init || t.nav_incr) ? (t.nav_init && (H = 0), t.nav_incr && H !== !1 && H++, H > D && (H = !1)) : H = !1 } catch (n) { return V(t.nav.push, null, t) }
                L.cur = t.nav.push, L.path = t.nav.path, L.params = t.nav.params, L.hash = t.nav.hash, 0 !== L.path.indexOf("/") && (L.path = "/" + L.path)
            }

            function J() {
                var e = location.hash || "";
                A !== e && (A = e, P(!0)), setTimeout(J, 100)
            }

            function Z() { var e = H; return e && history.go(-e), H = !1, e ? !0 : !1 }
            if (e) s(window, "popstate", function(e) { return window.isNewMail && L.onPopState() ? (preventEvent(e), void g(e)) : void X(location, null, { no_push: !0, need_restore: !0 }) });
            else { var et = location.hash || ""; "#/" == et.substr(0, 2) && V(et.substr(1), null, { replace: !0 }); var tt = function(e) { e = (e || "").substr(1), e && "/" == e.substr(0, 1) || (e = location), X(e, null, { no_push: !0, need_restore: !0 }) }; "onhashchange" in window ? s(window, "hashchange", function() { tt(location.hash || "") }) : (J(), P(function(e) { tt(e) })) }

            function nt() {
                var e = S(L.params);
                e.z && G(e.z)
            }

            function it(e, t) {
                var n = !(!e || !e.getAttribute),
                    i = {};
                if (!n) return i;
                var o = n && e.getAttribute("data-post-id");
                o && (i.post_id = o);
                var a = n && e.getAttribute("data-post-click-type");
                a && (i.post_click_type = a);
                var r = !!a || t;
                if (r) {
                    var s = gpeByClass("_ads_promoted_post_data_w", e),
                        l = s && s.getAttribute("data-ad"),
                        c = s && s.getAttribute("data-ad-block-uid");
                    l && (i.ad_data = l), c && (i.ad_block_unique_id = c)
                }
                return i
            }
            var ot = (location.pathname || "").replace(/^\/+/, "/"),
                at = location.search || "",
                rt = location.hash || "";
            return {
                onBeforeGo: befall(),
                onBeforeGo2: befall("path", "queryObject", "fullUrl", "opts"),
                onBeforeGo4: befall("path", "queryObject"),
                onPopState: befall(),
                go: X,
                al_go: W,
                app_go: $,
                hard_go: V,
                go_after: z,
                page_set: R,
                page_get: q,
                set: Q,
                checkUrl: F,
                tryHistoryBack: Z,
                zInit: nt,
                getPostParams: it,
                cur: ot + at + rt,
                path: ot,
                params: at.substr(1),
                hash: rt,
                clear: function() { return N = [] },
                getQuery: function(e) { var t = S(L.params); return e ? t[e] || null : t },
                getNotifierScrollTop: function() { var e = N.find(function(e) { return "/settings?act=notifier" === e.h }); return e ? e.d.st : null },
                reload: function() { return L.go(L.cur) },
                tryBack: function() { var e = N.slice(-2)[0]; return e ? (L.go(e.h, null, { need_restore: !0 }), !0) : !1 },
                openInNativeApp: function(e, t, n) {
                    var i = this;
                    if (this._openAppInProgress) return !1;
                    _(t);
                    var o = { android: "https://vk.cc/android", iphone: "https://vk.cc/iphone" },
                        a = "vk://vk.com" + L.cur,
                        r = I.mi ? 1500 : 300;
                    I.safari && (r = I.ios > 10 ? 0 : 1100);
                    var c = Date.now(),
                        u = setTimeout(function() { i._openAppInProgress = !1, Date.now() - c > r + 200 || !document.hasFocus() || L.hard_go(n && n.href ? n.href : o[e]) }, r),
                        d = function p() { clearTimeout(u), i._openAppInProgress = !1, l(window, "blur", p) };
                    if (s(window, "blur", d), I.ios) {
                        var f = function m() { window.menu && window.menu.close(), l(window, "focus", m) };
                        s(window, "focus", f)
                    } else window.menu && window.menu.close();
                    return this._openAppInProgress = !0, L.hard_go(a), x("mvk_open_in_native_link", 1, e), !1
                },
                initOpenInNativeAppBtn: function() {
                    if (!T()) {
                        var e = geByClass1("mmi_open_in_app");
                        e && C("supported", e)
                    }
                }
            }
        }();
    A(function() { L.initOpenInNativeAppBtn() }), window.nav = L
}, function() {
    var e = window,
        t = e.ownerPhotoUpload,
        n = e.setStyle,
        i = e.remove,
        o = e.domData,
        a = e.geByClass,
        r = e.geByClass1,
        s = e.getLang,
        l = e.FeedAssistance,
        c = e.FeedAssistanceStats;
    t.onUploadedDone(g), c.registerTrackingCls("feedAssistance_profilePhoto");
    var u = "feedAssistance_profilePhoto",
        d = "feedAssistanceProfilePhotoContent__avatar",
        f = "feedAssistanceProfilePhotoContent__title",
        p = "feedAssistanceProfilePhotoContent__desc",
        _ = "feedAssistance__footerButton",
        m = "feedAssistanceProfilePhotoContent__avatar_uploaded",
        v = "mobile_assistance_profile_photo_uploaded_title",
        h = "mobile_assistance_profile_photo_uploaded_desc";

    function g(e) {
        var t = r(u);
        if (t) {
            var n = r(d, t),
                o = r(p, t),
                a = r(f, t),
                c = r(_, t);
            e = k(e), w(e, n), a && (a.textContent = s(v)), o && (o.textContent = s(h)), l.setFilled(t), i(c)
        }
    }

    function w(e, t) {
        if (window.Image) {
            var n = new Image;
            n.onload = function() { return b(e, t) }, n.src = e
        } else b(e, t)
    }

    function y(e) {
        var t = a("al_u" + vk.id);
        t.forEach(function(t) {
            o(t, "photo") && o(t, "photo", e);
            var n = r("_u" + vk.id, t);
            n && "IMG" === n.tagName && (n.src = e)
        })
    }

    function b(e, t) { t && (addClass(m, t), n(t, "background-image", "url(" + e + ")")), y(e) }

    function k(e) { return e.replace(/"/g, "").replace(/'/g, "").replace(/</g, "").replace(/>/g, "") }
}, function() {
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1),
            n = this,
            i = function() {},
            o = function() { return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments))) };
        return this.prototype && (i.prototype = this.prototype), o.prototype = new i, o
    })
}, function() { String.prototype.includes || (String.prototype.includes = function(e, t) { return "number" != typeof t && (t = 0), t + e.length > this.length ? !1 : -1 !== this.indexOf(e, t) }) }, function() {
    Object.assign(window, { arrayRemove: e, arrayIntersects: t });

    function e(e, t) {
        for (;;) {
            var n = e.indexOf(t);
            if (!(n >= 0)) break;
            e.splice(n, 1)
        }
    }

    function t(e, t) { return e.some(function(e) { return -1 !== t.indexOf(e) }) }
}, function() { window.q = {} }, , function() {
    var e = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    o = !1,
                    a = void 0;
                try { for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0); } catch (l) { o = !0, a = l } finally { try {!i && s["return"] && s["return"]() } finally { if (o) throw a } }
                return n
            }
            return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
        }(),
        t = window,
        n = t.getNotify,
        i = t.setNotify,
        o = t.setDocumentDomain,
        a = t.ce,
        r = t.onDOMReady,
        s = t.append,
        l = t.clog,
        c = t.extend,
        u = t.parseJSON,
        d = t.intval,
        f = t.each,
        p = window,
        _ = p.ajax,
        m = window,
        v = m.nav,
        h = window,
        g = h.menu,
        w = window,
        y = w.mail,
        b = function() {
            var t = null,
                p = !1,
                m = {},
                h = 1,
                w = null,
                k = !1,
                C = !1;

            function M() { 64 > h && (h *= 2) }

            function S(e, t) {
                var o = window,
                    a = o.al;
                if (e === !1 && (e = n() + (t || 1)), i(e), window.al && window.al.menu) {
                    var r = new Array(a.menu.length);
                    r[2] = e, g.refreshCounters(r)
                }
            }

            function E(e) { return Object.keys(e).some(function(e) { return -1 !== e.indexOf("attach") }) || e.fwd || e.emoji || e.geo }

            function T(e, t, n) {
                var i = toInt(e.from_admin) || null,
                    o = toInt(v.getQuery("community"));
                return i && o ? o : 2 & t ? window.vk.id : toInt(e.from) || n
            }

            function A(e) {
                var t = new Date(1e3 * e),
                    n = t.getHours(),
                    i = t.getMinutes();
                return n + ":" + (10 > i ? "0" : "") + i
            }

            function x() { return Number(v.getQuery("offset")) > 0 }
            return {
                onNewMsg: befall("{ peerId, msgId, authorId, peerName, text, date, hasAttachments, flags, isService }"),
                onEditMsg: befall("{ peerId, msgId, authorId, peerName, text, date, hasAttachments, flags }"),
                onMsgReadByMe: befall("msgId", "dialogId"),
                onMsgReadByOther: befall("msgId", "dialogId"),
                onOnlineChange: befall("{ userId, isOnline, onlinePlatform, lastActionTime }"),
                onTyping: befall("dialogId", "authorId"),
                onMsgImportantRemove: befall("msgId"),
                onMsgImportantAdd: befall("msgId"),
                onMsgRemove: befall("msgId"),
                nu: !0,
                isLongPollingEnabled: function() { return !!k },
                init: function(e, n) { t || (o(), t = a("iframe", { src: e }, { display: "none" }), r(function() { s(t, window.bodyNode), p = !0 })), b.refreshParams(n), setTimeout(b.check, 1e3) },
                on: function() { l("[longpoll] start"), k = !0, setTimeout(b.check, 1e3) },
                off: function() { l("[longpoll] pause"), k = !1 },
                refreshParams: function(e) { c(m, e || {}), c(b, m) },
                getKey: function() {
                    if (w) try { w.abort() } catch (e) {}
                    w = _.post("/mail", { _ajax: 1, act: "im_get_key", community: v.getQuery("community") }, { onDone: function(e) { /[0-9a-f]{40}/i.test(e) ? (b.refreshParams({ key: e }), b.check()) : l("[longpoll] invalid key") }, onFail: function() { setTimeout(b.getKey, 1e3 * h), l("[longpoll] from getKey delaying getKey for " + h + "secs"), M() } })
                },
                check: function() {
                    if (k && !C) {
                        if (!b.makeRequest) return void setTimeout(b.check, 1e3);
                        try {
                            b.makeRequest(function(e, t) {
                                if (C = !1, k) {
                                    var n = window,
                                        i = n.vk;
                                    if (i.__debug) {
                                        var o = b.checked(u(t));
                                        o && (b.check(), h = 1)
                                    } else try {
                                        var o = b.checked(u(t));
                                        o && (b.check(), h = 1)
                                    } catch (a) {
                                        try { l("[longpoll] error", a.message || "no message", a.type || "no type", a.stack || "no stack") } catch (a) {}
                                        setTimeout(b.check, 1e3 * h), M()
                                    }
                                }
                            }, function() { C = !1, setTimeout(b.check, 1e3 * h), M() }), C = !0
                        } catch (e) { l("[longpoll] makeRequest failed") }
                    }
                },
                checked: function(t) {
                    var n = t.failed;
                    if (1 == n || m.ts >= t.ts + 256) { if (b.refreshParams({ ts: t.ts }), n) return !0 } else { if (2 == n) return l("[longpoll] delaying getKey for " + h + "secs"), setTimeout(b.getKey, 1e3 * h), M(), !1; if (n) return void l("[longpoll]", t) }
                    if (b.refreshParams({ ts: t.ts }), t.updates) {
                        var i = [],
                            o = !1;
                        for (var a in t.updates) {
                            if (116 == t.updates[a][0]) var r = t.updates[a][1],
                                s = [t.updates[a][0], r.id, r.flags, r.peer_id, r.date, r.title || "", r.message, r.kludges, r.random_id];
                            else var s = t.updates[a];
                            var u = d(s[0]),
                                p = d(s[1]),
                                g = d(s[2]),
                                w = d(s[3]);
                            if (1 === g) { if (10 === u) { y.updateImportantDialog(p, !1); continue } if (12 === u) { y.updateImportantDialog(p, !0); continue } }
                            if (8 & g) {
                                if (2 === u) {
                                    if (window.isNewMail) { b.onMsgImportantAdd(p); continue }
                                    y.updateImportantMessages(w, p, 1);
                                    continue
                                }
                                if (3 === u) {
                                    if (window.isNewMail) { b.onMsgImportantRemove(p); continue }
                                    y.updateImportantMessages(w, p, -1);
                                    continue
                                }
                            }
                            if (51 != u)
                                if (61 != u)
                                    if (62 != u)
                                        if (8 != u)
                                            if (9 != u)
                                                if (6 != u && 7 != u || !b.nu)
                                                    if (80 != u || !p || v.getQuery("community")) {
                                                        if (w)
                                                            if (4 != u && 5 != u && 116 != u)
                                                                if (0 != u)
                                                                    if (2 != u) 3 != u || 1 & g && !b.nu && y.markAsRead(w, p);
                                                                    else {
                                                                        if (128 & g) {
                                                                            if (window.isNewMail) { b.onMsgRemove(p); continue }
                                                                            y.markAsDeleted(w, p)
                                                                        }
                                                                        window.isNewMail && 64 & g && b.onMsgRemove(p)
                                                                    }
                                                        else {
                                                            if (window.isNewMail) { b.onMsgRemove(p); continue }
                                                            y.markAsDeleted(p)
                                                        } else {
                                                            var k = 5 == u || 116 == u;
                                                            if (window.isNewMail) {
                                                                var C = e(s, 9),
                                                                    I = C[1],
                                                                    P = C[3],
                                                                    B = C[4],
                                                                    L = C[5],
                                                                    N = C[6],
                                                                    O = C[7],
                                                                    H = void 0 === O ? {} : O,
                                                                    D = C[8],
                                                                    j = E(H),
                                                                    R = A(B),
                                                                    q = toInt(H.from_admin) || null,
                                                                    F = (toInt(v.getQuery("community")), T(H, g, P)),
                                                                    U = !!H.source_act;
                                                                if (k) {
                                                                    var z = { peerId: P, msgId: I, authorId: F, peerName: L, text: N, date: R, hasAttachments: j, flags: g, adminId: q, randomId: D };
                                                                    116 == u ? z.refreshed = 1 : z.edited = Math.floor(Date.now() / 1e3), b.onEditMsg(z)
                                                                } else b.onNewMsg({ peerId: P, msgId: I, authorId: F, peerName: L, text: N, date: R, hasAttachments: j, flags: g, adminId: q, randomId: D, isService: U });
                                                                continue
                                                            }
                                                            var $ = window,
                                                                V = $.vk,
                                                                W = 2 & g ? V.id : s[7] && s[7].from || w,
                                                                X = s[7] && s[7].source_act;
                                                            if (!o) {
                                                                var Y = need("PinnedMsg");
                                                                o = !!Y.getByMsgId(p)
                                                            }
                                                            var G = s[7].from_admin || X || o ? null : y.getMsgHTML(p, g, w, s[4], s[5], s[6], s[7], 116 != u ? k : "");
                                                            if (G && (k ? y.replaceMessage(w, p, W, G) : x() || y.addMessage(w, p, W, G), 2 & g || v.getQuery("community") || S(!1, 1)), "chat_kick_user" === X && s[7].source_mid == V.id) {
                                                                var K = s[3];
                                                                y.unpinMessage(K)
                                                            }
                                                            G && "chat_pin_message" !== X && "chat_unpin_message" !== X || i.push({ peer: w, msg_id: p, from_id: W, source_act: X, edited: k })
                                                        }
                                                    } else S(p);
                            else {
                                if (window.isNewMail) {
                                    var Q = s[1],
                                        J = s[2];
                                    6 === u ? b.onMsgReadByMe(J, Q) : b.onMsgReadByOther(J, Q);
                                    continue
                                }
                                y.markPeerAsRead(p, g, 7 == u)
                            } else {
                                if (window.isNewMail) { b.onOnlineChange({ userId: -p, isOnline: !1, lastActionTime: w }); continue }
                                y.updateOnline(-p, 0)
                            } else {
                                if (window.isNewMail) { b.onOnlineChange({ userId: -p, isOnline: !0, onlinePlatform: 8 === g ? "vkmobile" : 7 === (g || 7) ? "desktop" : "mobile" }); continue }
                                y.updateOnline(-p, g || 7)
                            } else {
                                if (window.isNewMail) {
                                    var Z = 2e9 + g,
                                        et = p;
                                    b.onTyping(Z, et);
                                    continue
                                }
                                y.typing(2e9 + g, p)
                            } else {
                                if (window.isNewMail) {
                                    var tt = p,
                                        nt = p;
                                    b.onTyping(tt, nt);
                                    continue
                                }
                                y.typing(p)
                            }
                        }
                        if (i.length) {
                            var it = [];
                            f(i, function(e, t) { it.push(t.msg_id) });
                            var ot = { _ajax: 1, act: "get_messages", msgs: it.join(","), community: v.getQuery("community") };
                            o && (ot.force_pinned = 1), _.post("/mail", ot, {
                                onDone: function(e, t) {
                                    var n = window,
                                        o = n.cur,
                                        a = x();
                                    f(i, function(t, n) {
                                        var i = e[n.msg_id],
                                            o = n.peer;
                                        i.text && !a && (n.edited ? y.replaceMessage(n.peer, n.msg_id, n.from_id, i.text) : y.addMessage(n.peer, n.msg_id, n.from_id, i.text)), i.unpin && y.unpinMessage(o), i.pinned && y.pinMessage(o, i.pinned)
                                    }), t && (t.play_animation_msg_id && StickersAnimation ? StickersAnimation.loadStickerInMvkIMAndPlay(t.play_animation_msg_id) : (c(o, t), y.updateStickers()))
                                }
                            })
                        }
                    }
                    return !0
                }
            }
        }();
    window.im = b
}, function(e, t, n) {
    var i = n(188),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    var r = window,
        s = r.setStyle,
        l = r.geByClass1,
        c = "pageMoneyTransfer__iframe";
    o["default"].onPostMessage(function(e, t) { "resizeFrame" === e && s(l(c), "height", t.height + 40) })
}, function() {
    var e = window,
        t = e.ce,
        n = e.getCssPropertyName;
    if (!window._ua) var i = navigator.userAgent.toLowerCase();
    var o = { version: (i.match(/.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/) || [0, "0"])[1], amigo: /amigo.*mrchrome soc/i.test(i), opera: /opera/i.test(i), msie: /msie/i.test(i) && !/opera/i.test(i), msie6: /msie 6/i.test(i) && !/opera/i.test(i), msie7: /msie 7/i.test(i) && !/opera/i.test(i), msie8: /msie 8/i.test(i) && !/opera/i.test(i), msie9: /msie 9/i.test(i) && !/opera/i.test(i), mozilla: /firefox/i.test(i), chrome: /chrome/i.test(i) || /crios/i.test(i), safari: !/crios/i.test(i) && !/chrome/i.test(i) && /webkit|safari|khtml/i.test(i), iphone: /iphone/i.test(i), ipod: /ipod/i.test(i), iphone4: /iphone.*OS 4/i.test(i), ipod4: /ipod.*OS 4/i.test(i), ipad: /ipad/i.test(i), ios: +(i.match(/.+(?:ipod|ipad|iphone.*os) ([\d.]+)_/i) || [0, 0])[1], android: /android/i.test(i), bada: /bada/i.test(i), opera_mini: /opera mini/i.test(i), uc_mini: /mobile safari.*ucbrowser/i.test(i), mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile/i.test(i), msie_mobile: /iemobile/i.test(i), msie_edge: /edge/i.test(i) && !/opera/i.test(i), safari_mobile: /iphone|ipod|ipad/i.test(i), opera_mobile: /opera mini|opera mobi/i.test(i), mac: /mac/i.test(i), mi: /miuibrowser/i.test(i) };
    o.desktop = (o.opera || o.msie || o.mozilla || o.chrome || o.safari) && !o.mobile, o.wkwebview = function() {
        if (!o.ios) return !1;
        if (window.webkit && window.webkit.messageHandlers) return !0;
        var e = /constructor/i.test(window.HTMLElement),
            t = !!window.indexedDB;
        if (-1 === i.indexOf("safari") || -1 === i.indexOf("version") || navigator.standalone) {
            if (!t && e || !window.statusbar.visible);
            else if (!e || t) return !0
        } else;
        return !1
    }();
    var a = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 },
        r = "ontouchstart" in window,
        s = function(e) {
            if ("WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix) return !0;
            if ("MSCSSMatrix" in e && "m11" in new e.MSCSSMatrix) return !0;
            if ("CSSMatrix" in e && "m11" in new e.CSSMatrix) return !0;
            try {
                var i = t("div"),
                    o = n(i, "transform");
                return o ? (i.style[o] = "translate3d(1px,1px,1px)", i.style[o] && "none" != i.style[o]) : !1
            } catch (a) { return !1 }
        }(window);
    window._ua = i, window.browser = o, window.mobPlatforms = a, window.isTouch = r, window.has3d = s
}, function(e) {
    ! function(t) {
        var n = "function",
            i = "undefined",
            o = [];
        typeof t !== i && t.addEventListener("VKWebAppEvent", function() {
            var e = Array.prototype.slice.call(arguments);
            o.forEach(function(t) { t.apply(null, e) })
        }), e.exports = {
            send: function(e, o) {
                o || (o = {});
                var a = typeof t !== i,
                    r = a && t.AndroidBridge,
                    s = a && t.webkit && t.webkit.messageHandlers;
                r && typeof r[e] == n && r[e](JSON.stringify(o)), s && s[e] && typeof s[e].postMessage == n && s[e].postMessage(o)
            },
            subscribe: function(e) { o.push(e) }
        }
    }(window)
}, function() {
    Object.assign(Convo, { onTap: befall("url"), setOnline: t, setLastMsg: n, setTyping: o, setUnreadCount: i }),
        function() { isTouch ? (Convo._onMouseDown = function() {}, Convo._onClick = e) : (Convo._onMouseDown = e, Convo._onClick = function() {}) }();

    function e(e, t) { e.target.closest("a.convo__avatar") || setTimeout(function() { Convo.onTap(t) }, 50) }

    function t(e, t) { $$(".convo_id_" + e + " .convo__online").forEach(function(e) { e.outerHTML = Convo__online(t) }) }

    function n(e, t, n) { $$(".convo_last.convo_id_" + e).forEach(function(e) { e.$(".convo__text").innerHTML = t, e.$(".convo__date").innerText = n }) }

    function i(e, t) {
        $$(".convo_last.convo_id_" + e).forEach(function(e) {
            var n = e.$(".Oval");
            e.classList.toggle("convo_unread", t > 0), e.classList.toggle("convo_unreadOut", 0 > t), Oval.setValue(n, t)
        })
    }

    function o(e, t) {
        $$(".convo_last.convo_id_" + e).forEach(function(e) {
            var n = e.$(".convo__typing");
            if (t && 0 !== t.length) {
                var i = n.$(".Typing");
                i ? Typing.setTyping(i, t) : (e.classList.add("convo_typing"), n.innerHTML = Typing({ typing: t }))
            } else n.innerHTML = "", e.classList.remove("convo_typing")
        })
    }
}, function() {
    var e = window,
        t = e.FeedAssistanceStats;
    t.registerTrackingCls("feedAssistance_promoButton"), t.onStartViewElement(i);

    function n(e, n, i) { t.dispatchEvent({ type: t.EVENTS.EVENT_PROMO_BUTTON, data: t.serializeEventData(t.EVENTS.EVENT_PROMO_BUTTON_SUB, e, n, i) }) }

    function i(e) {
        if (t.getElementType(e) === t.BLOCKS.BLOCK_TYPE_PROMO_BUTTON) {
            if (e._promoButtonClickHandlerAdded) return;
            var i = geByClass1("feedAssistancePromoButtonInstallApp__button", e),
                o = i ? "install_app" : "",
                a = i || e;
            addEvent(a, "click", function() { n(e, t.EVENTS.SUB_EVENT_PROMO_BUTTON_CLICK, o) }), e._promoButtonClickHandlerAdded = !0
        }
    }
}, function() {
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        t = window,
        n = t.extend,
        i = {
            _def_opts: { enableHighAccuracy: !0, maximumAge: 3e5, timeout: 6e4 },
            _provider: null,
            initW3C: function() { i._provider = navigator.geolocation, i.getCurrentPosition = function(e, t, o) { i._provider.getCurrentPosition(function(t) { e("undefined" != typeof t.latitude ? n(t, { coords: n(t.coords || {}, { latitude: t.latitude, longitude: t.longitude }) }) : t) }, t, o) } },
            initGears: function() {
                var e = window,
                    t = e.google;
                i._provider = t.gears.factory.create("beta.geolocation")
            },
            initSymbian: function() {
                var e = window,
                    t = e.device;
                i._provider = t.getServiceObject("Service.Location", "ILocation"), i.getCurrentPosition = function(e, t) { i._provider.ILocation.GetLocation({ LocationInformationClass: "BasicLocationInformation" }, function(n, i, o) { 4 == i ? t({ code: 2, message: "Position unavailable" }) : e({ timestamp: null, coords: { latitude: o.ReturnValue.Latitude, longitude: o.ReturnValue.Longitude, altitude: o.ReturnValue.Altitude, heading: o.ReturnValue.Heading } }) }) }
            },
            initPalm: function() {
                i.getCurrentPosition = function(e, t, n) {
                    var i = {};
                    n && (n.enableHighAccuracy && 1 == n.enableHighAccuracy && (i.accuracy = 1), n.maximumAge && (i.maximumAge = n.maximumAge), n.responseTime && (n.responseTime < 5 ? i.responseTime = 1 : n.responseTime < 20 ? i.responseTime = 2 : i.timeout = 3));
                    var o = window,
                        a = o.Mojo;
                    new a.Service.Request("palm://com.palm.location", { method: "getCurrentPosition", parameters: i, onSuccess: function(t) { e({ timestamp: t.timestamp, coords: { latitude: t.latitude, longitude: t.longitude, heading: t.heading } }) }, onFailure: function(e) { t(1 == e.errorCode ? { code: 3, message: "Timeout" } : 2 == e.errorCode ? { code: 2, message: "Position unavailable" } : { code: 0, message: "Unknown Error: webOS-code" + e.errorCode }) } })
                }
            },
            getCurrentPosition: function(e, t, o) { i._provider.getCurrentPosition(e, t, n(i._def_opts, o || {})) },
            init: function() {
                var t = window,
                    n = t.google,
                    o = t.device,
                    a = t.Mojo;
                try {
                    var r = "undefined";
                    if (e(navigator.geolocation) !== r) i.initW3C();
                    else if (e(window.google) !== r && e(n.gears) !== r) i.initGears();
                    else if (("undefined" == typeof o ? "undefined" : e(o)) !== r && e(o.getServiceObject) !== r) i.initSymbian();
                    else {
                        if (("undefined" == typeof a ? "undefined" : e(a)) === r || "Mojo.Service.Request" == typeof a.Service.Request) return !1;
                        i.initPalm()
                    }
                } catch (s) { return !1 }
                return !0
            }
        };
    window.geo = i
}, , function() {
    var e = need("$"),
        t = need("scrollToEl"),
        n = need("page");
    ! function() { n.onChange(o) }();
    var i = { anchorByHash: function(e) { return ".Anchor#" + e } };

    function o(n) {
        if (n) {
            var o = n.split("#")[1],
                a = o && e(i.anchorByHash(o));
            a && t(a)
        }
    }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }); {
        var n = t.SECOND = 1e3,
            i = t.MINUTE = 60 * n,
            o = t.HOUR = 60 * i;
        t.DAY = 24 * o, t.PUSH_NOTIFIER_PERMISSION_GRANTED = "granted", t.PUSH_NOTIFIER_PERMISSION_DEFAULT = "default", t.PUSH_NOTIFIER_PERMISSION_DENIED = "denied"
    }
}, function() {
    window.Bell = e;

    function e(e) {
        var t = lang,
            n = e.count;
        return wd.html({ "class": bem["class"]("Bell", { empty: !n }), href: e.url, "aria-label": t.mobile_notifications_title, inner: [wd.html(Icon({ mix: "Bell__icon", icon: "bell" })), { "class": "Bell__counter", inner: n }] })
    }
}, function() {
    var e = window,
        t = e.getY,
        n = e.getCh,
        i = e.onDOMReady,
        o = e.onBodyScroll,
        a = (window.block, window.page),
        r = window.ajax,
        s = window.Pad,
        l = window.Btn;
    window.LoadMore = { setUrl: p, destroy: _ }, LoadMore._strategy = { replace: M(), padsExtend: S() },
        function() { LoadMore._onButtonClick = m, i(v), a.onChange(v) }();
    var c = { loadMore: ".LoadMore", button: ".LoadMore__button" },
        u = "_loadMore_loading",
        d = null,
        f = null;

    function p(e) { f.setAttribute("href", e) }

    function _() { d.remove(), d = null, f = null, w() }

    function m() { C() || y() }

    function v() {
        if (d = $(c.loadMore)) {
            var e = window.cur;
            f = d.$(c.button), h(0), g(), e.destroy.push(w)
        }
    }

    function h(e) {
        if (d && !C()) {
            var i = t(d),
                o = n(),
                a = i - (e + o);
            2 * o > a && y()
        }
    }

    function g() { o(h) }

    function w() { o("__clear", h) }

    function y() {
        k(!0);
        var e = f.getAttribute("href");
        r.post(e, { _ajax: 1 }, { onDone: function(e) { return b(e, !0) }, onFail: function(e) { return b(e, !1) } })
    }

    function b(e, t) {
        k(!1);
        var n = t ? "data-success-handler" : "data-fail-handler";
        n = d.getAttribute(n), wd.handle(n, { $loadMore: d, response: e }), d = null, f = null, w(), v()
    }

    function k(e) { f && (l.setLoading(f, e), d[u] = e) }

    function C() { return d && d[u] }

    function M() {
        return {
            onFail: E,
            onSuccess: function(e) {
                var t = e.response;
                d.outerHTML = t, _()
            }
        }
    }

    function S() {
        return {
            onFail: E,
            onSuccess: function(e) {
                var t = e.response,
                    n = t.pads,
                    i = t.nextPageUrl;
                Object.keys(n).forEach(function(e) {
                    var t = n[e];
                    s.addContent(e, t)
                }), i ? p(i) : _()
            }
        }
    }

    function E(e) { console.error("LoadMore: failed to load more", e) }
}, function(e, t, n) {
    var i = n(190),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    var r = window,
        s = r.preventEvent,
        l = r.cancelEvent,
        c = r.lockButton,
        u = r.attr,
        d = r.ajax,
        f = 1500,
        p = void 0,
        _ = void 0,
        m = !1,
        v = null;
    o["default"]._onCancelClick(function(e, t) { t ? (m = !1, s(e), l(e), c(t)) : (m = !0, t = e.$btn, e = null, v = t, Btn.setLoading(t, !0)), h({ cancelUrl: u(t, "href") }), window.cur.destroy.push(g) });

    function h(e) {
        var t = e.cancelUrl;
        p = setInterval(function() {
            _ = d.post(t, { _ajax: 1 }, {
                onDone: function(e) {
                    if (1 === e) {
                        if (m) { var t = arguments[1]; return v.closest(".BtnStack").outerHTML = '\n            <div class="notification__tempText">' + t + "</div>\n          ", void g() }
                        var n = window.scrollTop();
                        nav.go(location.pathname + location.search, null, { replace: !0 }), cur.destroy.push(function() { window.scrollTop(n) }), g()
                    }
                }
            })
        }, f)
    }

    function g() { v && Btn.setLoading(v, !1), p && (clearInterval(p), p = null), _ && (_.abort(), _ = null) }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.VoiceMessagePlayer = void 0;
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
        }(),
        o = n(56),
        a = n(203),
        r = n(209);

    function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } {
        var l, c = !1,
            u = '<div class="audio-msg-player audio-msg-track"><button class="audio-msg-track--btn"></button><div class="audio-msg-track--duration"></div><div class="audio-msg-track--wave-wrapper"><div class="audio-msg-track--slider"></div></div></div>';
        t.VoiceMessagePlayer = function() {
            function e() {
                var t = this;
                s(this, e), this._reattach = !1, this._audioEl = null, this._playing = !1, this._timer = null, this._duration = 0, this._detaching = !1;
                var n = { onEnd: function() { t.detach() }, onFail: function() { n.onEnd() }, onCanPlay: function() {}, onProgressUpdate: function(e) { t._updateProgress(e) } };
                l = !1, o.PlayerHTML5.isSupported() ? (o.PlayerHTML5.isSupported('audio/ogg;codecs="opus"') && !o.PlayerHTML5.isSupported('audio/ogg;codecs="codec_check"') && (l = !0), this._impl = new o.PlayerHTML5(n)) : browser.flash && window.renderFlash && (this._impl = new a.PlayerFlash(n)), this.onPlayPause = function(e) { return cancelEvent(e), t.toggle() }, this.onDurationClick = function(e) { t.durationType = !t.durationType, cancelEvent(e) }, this._initEvents()
            }
            return e.prototype._updateProgress = function(e) { this._durationEl && (this._durationEl.innerHTML = this.durationType ? "-" + formatTime(Math.round(this._duration * (1 - e))) : formatTime(Math.round(this._duration * e))), this._progressSlider && this._progressSlider.setValue(e) }, e.prototype._initInterface = function() {
                var e = this;
                this._el = ce("div", { innerHTML: u }).firstChild, window.getLang && attr(this._el, "aria-label", getLang("mail_audio_message")), this._playBtn = geByClass1("audio-msg-track--btn", this._el), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_play")), this._durationEl = geByClass1("audio-msg-track--duration", this._el), this._durationEl.innerHTML = formatTime(this._duration), this._progressSlider = new r.Slider(geByClass1("audio-msg-track--slider", this._el), { value: 0, size: 0, hintClass: "audio_player_hint", formatHint: function(t) { return formatTime(Math.round(t * e._duration)) }, onEndDragging: function(t) { e._impl.seek(t) } });
                var t = geByClass1("audio-msg-track--wave-wrapper", this._audioEl).children[0];
                geByClass1("slider_slide", this._el).appendChild(t.cloneNode(!0)), geByClass1("slider_amount", this._el).appendChild(t.cloneNode(!0)), addEvent(this._playBtn, "click", this.onPlayPause), addEvent(this._durationEl, "click", this.onDurationClick), this._audioEl.parentNode.appendChild(this._el)
            }, e.prototype._destroyInterface = function() { hide(this._el), this._audioEl.parentNode.removeChild(this._el), removeEvent(this._playBtn, "click", this.onPlayPause), this._progressSlider && (this._progressSlider.destroy(), this._progressSlider = null), this._playBtn = null, this._durationEl = null, this._el = null }, e.prototype.attachTo = function(e) {
                var t = this;
                if (this._audioEl != e) {
                    null != this._audioEl && (this._reattach = !0), this.detach(), this._audioEl = e, addClass(this._audioEl, "audio-msg-track_player-attached"), this._duration = attr(e, "data-duration"), this._initInterface();
                    var n = this._audioEl.id.split("_");
                    if (n && n.length > 1 && (this._owner_id = n[1]), this._reattach = !1, !this._impl.loaded) return new Promise(function(n) { t._impl.onReady(function() { t._impl.setUrl(attr(e, l ? "data-ogg" : "data-mp3"), { duration: t._duration, callback: n }) }) });
                    this._impl.setUrl(attr(e, l ? "data-ogg" : "data-mp3"), { duration: this._duration })
                }
                return !0
            }, e.prototype.detach = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
                if (this._audioEl && this._el && !this._detaching) {
                    if (e && this.isAttached()) return;
                    this._detaching = !0, this.stop(), this._destroyInterface(), removeClass(this._audioEl, "audio-msg-track_player-attached"), this._audioEl = null
                }
                this._detaching = !1
            }, e.prototype.play = function() { this._audioEl && (this._reattach || e.pauseGlobalMedia(), addClass(this._el, "audio-msg-track_playing"), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_pause")), this._playing = !0, this._createTimer(), this._owner_id && statlogsValueEvent("audio_message_play", this._owner_id), this._impl.play()) }, e.prototype.pause = function() { this._audioEl && (!this._reattach && this._playing && e.resumeGlobalMedia(), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_play")), removeClass(this._el, "audio-msg-track_playing"), this._playing = !1, this._impl.pause(), this._killTimer()) }, e.prototype.stop = function() { this.pause(), this._impl.stop() }, e.prototype.toggle = function() { this._playing ? this.pause() : this.play() }, e.prototype._createTimer = function() {
                var e = this;
                this._duration > 0 && (this._killTimer(), this._timer = setInterval(function() {
                    var t = e._impl.getCurrentProgress();
                    e._updateProgress(t)
                }, 100))
            }, e.prototype._killTimer = function() { this._timer && (clearInterval(this._timer), this._timer = null) }, e.prototype._initEvents = function() {
                var e = this;
                window.ap ? ap.on(this, AudioPlayer.EVENT_PLAY, function() { delete ap.pausedByMsg, e.pause() }) : window.audio && audio.onPlay(function() { delete audio.pausedByMsg, e.pause() }), window.Notifier && (Notifier.addRecvClbk("audio_start", "audio_msg", function() { e.pause() }), Notifier.addRecvClbk("video_start", "audio_msg", function() { e.pause() }))
            }, e.prototype.isAttached = function() { if (this._audioEl) { for (var e = this._audioEl; e.parentNode;) e = e.parentNode; return !!e.body } return !1 }, e.pauseGlobalMedia = function() { window.Notifier && (c = !0, Notifier.lcSend("video_start")), window.ap && ap.isPlaying() ? (ap.pause(), ap.pausedByMsg = !0) : window.audio && audio.playing && audio.playing() && (audio.pause(), audio.pausedByMsg = !0) }, e.resumeGlobalMedia = function() { window.Notifier && c && (c = !1, Notifier.lcSend("video_hide")), window.ap && ap.pausedByMsg ? (ap.play(), delete ap.pausedByMsg) : window.audio && audio.playing && audio.pausedByMsg && (audio.play(), delete audio.pausedByMsg) }, i(e, [{ key: "type", get: function() { return this._impl.type } }, { key: "durationType", get: function() { return window.AudioPlayer ? !!ls.get(AudioPlayer.LS_PREFIX + AudioPlayer.LS_DURATION_TYPE) : "1" == lsGet("audio_time_left") }, set: function(e) { window.AudioPlayer ? ls.set(AudioPlayer.LS_PREFIX + AudioPlayer.LS_DURATION_TYPE, !!e) : lsSet("audio_time_left", e ? "1" : "0") } }]), e
        }()
    }
}, function() {
    var e = o(['\n    <div class="', '">\n      <div class="messenger__layer messenger__layer_main">\n        <div class="messenger__header">', "</div>\n        ", '\n      </div>\n      <div class="messenger__layer messenger__layer_convo ', '">\n        ', "\n      </div>\n    </div>\n  "], ['\n    <div class="', '">\n      <div class="messenger__layer messenger__layer_main">\n        <div class="messenger__header">', "</div>\n        ", '\n      </div>\n      <div class="messenger__layer messenger__layer_convo ', '">\n        ', "\n      </div>\n    </div>\n  "]),
        t = o(['\n    <div class="messenger__header">\n      ', '\n      <div class="messenger__pinned">', "</div>\n    </div>\n    ", '\n    <div class="messenger__footer">\n      <div class="messenger__write">', '</div>\n      <div class="messenger__acts">', '</div>\n      <div class="messenger__dialog">', "</div>\n    </div>\n  "], ['\n    <div class="messenger__header">\n      ', '\n      <div class="messenger__pinned">', "</div>\n    </div>\n    ", '\n    <div class="messenger__footer">\n      <div class="messenger__write">', '</div>\n      <div class="messenger__acts">', '</div>\n      <div class="messenger__dialog">', "</div>\n    </div>\n  "]),
        n = o(['\n    <div class="messenger__spinner">\n      ', "\n    </div>\n  "], ['\n    <div class="messenger__spinner">\n      ', "\n    </div>\n  "]);

    function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function o(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    Object.assign(window, { Messenger: r, uMessenger: a, uMessenger_class: u, uMessenger_getPinnedMsg: c, Messenger_renderConvoLayer: s, uMessenger_hasSelectedMsgs: d });

    function a() {
        var e = store.mail.cur.query,
            t = MailScrap({ scrap: "folder" }),
            n = MailScrap({ scrap: "search" });
        return r({ mix: u(), actionsOpen: d() ? "messenger_actionsOpen" : "", mailHat: uMailHat(), convo: s(), query: e, createChatUrl: "/mail?act=new_chat", scrapFolder: t, scrapSearch: n })
    }

    function r(t) {
        var n = window.lang,
            i = n.mobile_mail_search_only_messages,
            o = MailFilter({ query: t.query, createUrl: t.createChatUrl }),
            a = q.onClick("Messenger._onSearchMsgsClick"),
            r = ScrollView({ mix: "messenger__body", attrs: q.onScroll("Messenger._onMainScroll", "this"), inner: [Brick({ mix: "messenger__filter", inner: o }), Brick({ mix: "messenger__searchMsgs", attrs: a, inner: i }), Brick({ mix: "messenger__loadable", inner: [Brick({ mix: "messenger__folderList", inner: t.scrapFolder }), Brick({ mix: "messenger__searchList", inner: t.scrapSearch }), l()] })] });
        return q.html(e, t.mix, t.mailHat, r, t.actionsOpen, t.convo)
    }

    function s() {
        var e = store.mail,
            n = e.cur,
            i = e.peers[n.peerId],
            o = uMailHat(),
            a = c(),
            r = uMailWrite(),
            s = i && i.canPin,
            u = MailActs({ canPin: s, isVkcomgroup: i.isVkcomgroup }),
            d = MailDialog({}),
            f = MailScrap({ scrap: "peer" }),
            p = ScrollView({ mix: "messenger__body", attrs: q.onScroll("Messenger._onConvoScroll", "this"), inner: [Brick({ mix: "messenger__spacer" }), Brick({ mix: "messenger__convoList", inner: f }), l()] });
        return q.html(t, o, a, p, r, u, d)
    }

    function l() { var e = Spinner(); return q.html(n, e) }

    function c() {
        var e = store.mail,
            t = e.cur.peerId;
        return t && e.peers[t].pinnedMsg
    }

    function u() {
        var e, t = store.mail.cur,
            n = void 0;
        return n = t.peerId ? "view_dialog" : t.query && "msgs" === t.tab ? "view_searchMsgs" : t.query ? "view_searchPeers" : "folder_" + t.folder, q["class"]("e", "messenger", "uMessenger", (e = {}, i(e, n, !0), i(e, "community", !!t.groupId), e))
    }

    function d() { var e = store.mail.cur.msgSelected; return Object.keys(e).length > 0 }
}, function() {
    var e = window.$;
    window.AuthCheckIntro = {},
        function() { AuthCheckIntro._onMount = t }();

    function t() {
        var t = e(n.intro),
            i = new Scroller(t, { byPage: !0, ignoreMouseWheel: !0, noAutoScroll: !0 });
        i.init(), cur.destroy.push(function() { return i.destroy() })
    }
    var n = { intro: ".AuthCheckIntro" }
}, function() {
    window.SettingsEmail = {},
        function() { SettingsEmail._onFrequencyChange = e }();

    function e(e, i) {
        var o = i.$select,
            a = i.value,
            r = o.closest(t.email);
        r.classList.toggle(n.groupsVisible, e.includes(a) || e.includes(Number(a)))
    }
    var t = { email: ".settingsEmail" },
        n = { groupsVisible: "settingsEmail_groupsVisible" }
}, function(e, t, n) {
    var i = n(188),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    o["default"].onPostMessage(function(e) {
        ("waiterStart" === e || "3dsPage" === e) && document.activeElement && document.activeElement.blur()
    })
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } {
        var i = "sw",
            o = "/js/cmodules/sw/sw.js",
            a = "/";
        t.SWClient = function() {
            function e() { n(this, e), this.registration = null, this._handlers = [] }
            return e.addVersion = function(e) { return vk && vk.sw_version ? e + "?v=" + vk.sw_version : e }, e.isSupported = function() { return "serviceWorker" in navigator }, e.prototype.register = function() { return e.isSupported() ? navigator.serviceWorker.register(e.addVersion(o), { scope: a }).then(this._onactive.bind(this)).then(function(e) { return this.registration || (this.registration = e, this._addEventListener(navigator.serviceWorker, "message", this._onmessage.bind(this), !1)), e }.bind(this)) : Promise.reject("serviceWorker is unavailable") }, e.prototype.unregister = function() { this.registration && this.registration.unregister(), this._handlers.forEach(function(e) { return e[0].removeEventListener(e[1], e[2]) }), this._handlers = [] }, e.prototype.update = function() { this.registration && this.registration.update() }, e.prototype._addEventListener = function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !0,
                    o = !1;
                this._handlers.forEach(function(i) { i[0] === e && i[1] === t && i[2] === n && (o = !0) }), (!o || i) && (this._handlers.push([e, t, n]), e.addEventListener(t, n))
            }, e.prototype._onactive = function(e) { return e.active ? Promise.resolve(e) : new Promise(function(t) { this._addEventListener(e.installing, "statechange", function(n) { "activated" === n.currentTarget.state && t(e) }) }.bind(this)) }, e.prototype.action_isIMLongPollingEnabled = function() { return window.im && im.isLongPollingEnabled() }, e.prototype.action_devicePixelRatio = function() { return window.devicePixelRatio }, e.prototype.action = function(e, t) {
                var n = null;
                return n = Array.isArray(e) ? e : [
                    [e, t]
                ], this._message({ actions: n }).then(function(e) { return e.answers ? Promise.resolve(1 === n.length ? e.answers[0] : e.answers) : Promise.reject(new Error("ServiceWorker answer is incorrect")) })
            }, e.prototype._message = function(e) {
                var t = this;
                return this.register().then(function() {
                    return new Promise(function(t, n) {
                        var i = new MessageChannel;
                        i.port1.onmessage = function(e) { this._messageCheck(e) ? t(e.data.data) : n(new Error("ServiceWorker message is incorrect")) }.bind(this), this.registration.active.postMessage(this._messageWrap(e), [i.port2])
                    }.bind(t))
                })
            }, e.prototype._onmessage = function(e) {
                if (this._messageCheck(e)) {
                    var t = e.data.data;
                    if (t.actions && Array.isArray(t.actions)) {
                        var n = [];
                        t.actions.forEach(function(t) {
                            var i = "action_" + t[0],
                                o = t[1],
                                a = this[i] ? this[i](o, e) : void 0;
                            a instanceof Promise || (a = Promise.resolve(a)), n.push(a)
                        }.bind(this)), Promise.all(n).then(function(t) {
                            var n = {};
                            t.forEach(function(e, t) { void 0 !== e && (n[t] = e) }), Object.keys(n).length && e.ports[0].postMessage(this._messageWrap({ answers: n }))
                        }.bind(this))
                    }
                }
            }, e.prototype._messageCheck = function(e) { return ("" === e.origin || e.origin.match(/^https:\/\/([a-zA-Z0-9\-\.]+\.)?vk\.com$/)) && e.data && e.data.data && e.data.type === i }, e.prototype._messageWrap = function(e) { return { type: i, data: e } }, e
        }()
    }
}, function() {
    var e = window,
        t = e.hasClass,
        n = e.ge,
        i = e.geByClass1,
        o = e.getCw,
        a = e.getCh,
        r = e.attr,
        s = e.setStyle,
        l = e.extend,
        c = e.preventEvent,
        u = e.isUndefined,
        d = e.clog,
        f = e.val,
        p = e.vkNow,
        _ = e.getW,
        m = e.getH,
        v = e.scrollTop,
        h = e.gpeByClass,
        g = e.toggleClass,
        w = e.cancelEvent,
        y = e.qs2obj,
        b = e.obj2qs,
        k = e.removeClass,
        C = e.addClass,
        M = e.addEvent,
        S = e.removeEvent,
        E = e.len,
        T = e.show,
        A = e.each,
        x = e.hide,
        I = e.escapeAttr,
        P = e.htsc,
        B = e.toggle,
        L = e.formatNum,
        N = e.remove,
        O = e.append,
        H = e.reflow,
        D = window,
        j = D.befall,
        R = window,
        q = R.ajax,
        F = window,
        U = F.thover,
        z = window,
        $ = z.nav,
        V = window,
        W = V.page,
        X = window,
        Y = X.PhotoLike,
        G = window,
        K = G.zlayer,
        Q = window,
        J = Q.photo,
        Z = function() {
            var e = !1,
                D = !1,
                R = !1,
                F = !1,
                z = !1,
                V = !1,
                X = !1,
                G = !1,
                Q = !1,
                et = !1,
                tt = !1,
                nt = !1,
                it = !1,
                ot = !1,
                at = !1,
                rt = !1,
                st = !1,
                lt = !1,
                ct = !1,
                ut = !1,
                dt = !1,
                ft = !1,
                pt = !1,
                _t = { min_scale: 1, max_scale: 3, min_scale_limit: .5, max_scale_limit: 5, anim_duration: 300, inertia_duration: 300, bounce_diff: 1.5, crop_padding: 20, crop_size: 250, fps: 0 };

            function mt() {
                var o = window,
                    a = o.lang,
                    r = '<div id="z_photoview"><div class="zpv_siblings"><div id="zpv_left" class="zpv_thumb_item"><img class="zpv_img" alt=""></div><div id="zpv_right" class="zpv_thumb_item"><img class="zpv_img" alt=""></div></div><div class="zpv_body"><div id="zpv_center" class="zpv_thumb_item"><img class="zpv_img" alt=""></div></div><div class="zpv_close_msg_wrap"><div class="zpv_close_msg">' + a.mobile_zphoto_move_to_close + '</div></div><div class="zpv_controls"><div class="mhead zpv_header"><a class="zpv_close_btn" onclick="return photoview.closePhoto(event);"><i class="zpv_close_icon"></i></a><div class="hb_wrap"><h1 id="zpv_summary" class="hb_btn mh_header"></h1></div></div><div class="zpv_zoom_btns"><a class="zpv_zoom_btn zpv_zoomin"><b class="zpv_zb_wrap"><i class="i_icon"></i></b></a><a class="zpv_zoom_btn zpv_zoomout"><b class="zpv_zb_wrap"><i class="i_icon"></i></b></a></div><div class="zpv_bottom"><div class="zpv_photo_desc_wrap"></div><div class="zpv_bottom_body"><table class="zpv_values like_box row_table"></table></div></div></div><div class="zpv_tags"></div><div class="zpva zpv_crop"><div class="zpv_crop_box"></div><div class="zpv_crop_loading"></div></div></div>',
                    s = t("x2", window.bodyNode),
                    l = "/images/mobile/zpv_icons" + (s ? "_2x" : "") + ".png?2";
                (new Image).src = l, K.create(r, co), e = n("z_photoview"), D = i("zpv_body", e), R = i("zpv_siblings", e), F = i("zpv_controls", e), Q = i("zpv_zoom_btns", e), V = i("zpv_close_msg_wrap", e), z = i("zpv_bottom", e), X = i("zpv_photo_desc_wrap", e), G = i("zpv_values", z), et = i("zpv_zoomin", Q), tt = i("zpv_zoomout", Q), at = i("zpv_tags", e), rt = i("zpv_crop", e), nt = i("zpv_img", "zpv_center"), it = i("zpv_img", "zpv_left"), ot = i("zpv_img", "zpv_right")
            }

            function vt() { e = D = R = F = V = !1, z = G = !1, Q = et = tt = !1, nt = it = ot = at = rt = !1 }

            function ht(e) {
                var t = o(),
                    n = a(),
                    i = t / 2,
                    r = n / 2;
                if (e.touches) { for (var s = 0, l = 0, c = 0, u = 0, d = Math.min(2, e.touches.length); d > l; l++) c += e.touches[l].pageX, u += e.touches[l].pageY, s++; return d ? { pageX: c / d - i, pageY: u / d - r } : { pageX: -i, pageY: -r } }
                return { pageX: e.pageX - i, pageY: e.pageY - r }
            }

            function gt(e, t) {
                var n = t.pageX - e.pageX,
                    i = t.pageY - e.pageY;
                return Math.sqrt(n * n + i * i)
            }

            function wt(e) {
                if (!e) return e;
                var t = nt.width,
                    n = nt.height,
                    i = t / 2,
                    o = n / 2;
                return [e[0] + i, e[1] + o]
            }

            function yt(e) { if ("undefined" != typeof e.naturalWidth) return { width: e.naturalWidth, height: e.naturalHeight }; var t = new Image; return t.src = e.src, { width: e.width, height: e.height } }

            function bt(e) {
                var t = r(e, "data-id"),
                    n = Qi($i),
                    i = n.tags || {},
                    o = i[t] || [];
                return kt(o)
            }

            function kt(e) { return e[0] ? { coords: { x: e[0][0], y: e[0][1], w: e[0][2], h: e[0][3] }, name: e[1], href: e[2], al: e[3] } : {} }

            function Ct(e) { s(R, "overflow", e ? "visible" : "hidden") }
            var Mt = null,
                St = null;

            function Et(e, t, n, i, o, a, r, l, c) {
                if (!_t.fps || c) {
                    var u = !1,
                        d = l ? function() { u || (u = !0, l()) } : !1;
                    a ? (s.animate(R, "transform", { duration: a, func: r }, d), s.animate(nt, o === !1 ? "transform" : "transform, opacity", { duration: a, func: r }, d), s.animate(at, o === !1 ? "transform" : "transform, opacity", { duration: a, func: r }, d), s.animate(V, o === !1 ? "transform" : "transform, opacity", { duration: a, func: r }, d), xn = !0) : xn && (s.animate(R), s.animate(nt), s.animate(at), s.animate(V), xn = !1), s.transform(R, { translate: [t, 0] }), s.transform(nt, e, [n, i]), ki(e, n, i), o !== !1 && (s(nt, "opacity", o), (pn || _n) && (s(at, "opacity", o), mn = !0), wi(i, o)), hi(e)
                } else Mt = [e, t, n, i, o, a, r, l, !0], St || Tt()
            }

            function Tt() { Mt && (Et.apply(window, Mt), Mt = null), clearTimeout(St), St = _t.fps ? setTimeout(Tt, 1e3 / _t.fps) : null }

            function At(e, t, n) { ei(!0), Et(en, Yt, Jt, Zt, In, e, t, n), In = !1 }

            function xt(e, t, n, i) { Et(e.currentScale, e.curBodyX, e.currentX, e.currentY, !1, t, n, i) }

            function It(e) { e = wt(e || [0, 0]), s.transformOrigin(nt, e) }
            var Pt = !1,
                Bt = !1,
                Lt = null;

            function Nt(e) {
                var t = e[1].pageX - e[0].pageX,
                    n = e[1].pageY - e[0].pageY,
                    i = Math.sqrt(t * t + n * n),
                    o = 180 * Math.atan2(n, t) / Math.PI;
                return { distance: i, angle: o }
            }

            function Ot(e) {
                if (!Pt) return { scale: 1, rotation: 0 };
                if (e.length < 2) return { scale: Pt.scale, rotation: Pt.rotation };
                var t = Nt(e),
                    n = t.distance / Pt.startDistance,
                    i = t.angle - Pt.startAngle; - 90 > i && (i += 360), i > 270 && (i -= 360);
                var o = { scale: n, rotation: i };
                return l(Pt, o), o
            }

            function Ht(e) {
                var t = Nt(e);
                if (Pt) {
                    var n = t.distance / Pt.scale,
                        i = t.angle - Pt.rotation; - 180 > i && (i += 360), i > 180 && (i -= 360);
                    var o = { startDistance: n, startAngle: i };
                    l(Pt, o)
                } else Pt = { startDistance: t.distance, startAngle: t.angle, scale: 1, rotation: 0 }
            }

            function Dt(e) { return l({ originalEvent: e }, e, Ot(e.touches), ht(e)) }

            function jt(e) {
                var t = e.touches;
                if (t) {
                    if (t.length > 5 || t.length < 2) return void(Pt && (vi(Dt(e)), Pt = !1));
                    if (Pt) return void Ht(t);
                    _i(Dt(e)), Ht(t)
                }
            }

            function Rt(e) { var t = e.touches; if (t) return t.length > 5 || t.length < 2 ? void(Pt && (vi(Dt(e)), Pt = !1)) : void(Pt && mi(Dt(e))) }

            function qt(e) { var t = e.touches; if (t) return (t.length > 5 || t.length < 2) && Pt && (vi(Dt(e)), Pt = !1), Pt ? void Ht(t) : void 0 }

            function Ft(e) {
                c(e);
                var t = (e.detail ? e.detail : e.wheelDelta) > 0 ? 1.05 : .95,
                    n = l({ originalEvent: e }, e);
                Bt || (Bt = 1, di(e), _i(l(n, { scale: Bt }))), Bt *= t, mi(l(n, { scale: Bt })), clearTimeout(Lt), Lt = setTimeout(function() { vi(l(n, { scale: Bt })), pi(e), Bt = !1 }, 200)
            }
            var Ut, zt, $t, Vt, Wt, Xt, Yt, Gt, Kt, Qt, Jt, Zt, en, tn, nn, on, an, rn, sn, ln, cn, un, dn, fn, pn, _n, mn, vn, hn, gn, wn, yn, bn, kn, Cn, Mn, Sn, En, Tn, An, xn, In;

            function Pn() { dn = !1, fn = !1, pn = !0, _n = !1, bn = !1, kn = !0, Cn = !1, Mn = !1, xn = !1, In = !1, ct = !1, dt = !1, ft = !1, pt = !1, Bn() }

            function Bn() { Ut = 0, zt = 0, $t = 0, Vt = 0, Wt = 1, Xt = !0, Yt = 0, Gt = 0, Kt = 0, Qt = 1, Jt = 0, Zt = 0, en = 1, tn = !1, nn = !1, on = !1, an = !1, rn = !1, sn = !1, ln = !1, cn = !1, un = !1, mn = !1, vn = !1, hn = !1, gn = !1, wn = !1, yn = !1, Sn = !1, En = !1, Tn = !1, An = !1 }

            function Ln() { return { lastScale: Wt, deltaX: Ut, deltaY: zt, pointX: $t, pointY: Vt, curScale: Qt, currentScale: en, curX: Gt, curY: Kt, currentX: Jt, currentY: Zt, curBodyX: Yt } }

            function Nn(e, t, n) { n = n || Ln(), e = e || {}; var i = l({}, n, e); return u(e.deltaX) || u(e.deltaY) ? u(e.pointX) || u(e.pointY) ? u(e.lastScale) ? u(e.currentScale) ? u(e.curScale) || (i.currentScale = i.lastScale * i.curScale, i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.curScale = i.currentScale / i.lastScale, i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.curScale = 1, i.currentScale = i.curScale * i.lastScale) : (i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.pointX = i.curX + i.deltaX * i.curScale, i.pointY = i.curY + i.deltaY * i.curScale), u(e.curX) || (i.curX = e.curX, i.currentX = i.curX / i.currentScale), u(e.curY) || (i.curY = e.curY, i.currentY = i.curY / i.currentScale), t ? i : (Ut = i.deltaX, zt = i.deltaY, $t = i.pointX, Vt = i.pointY, Wt = i.lastScale, Qt = i.curScale, en = i.currentScale, Gt = i.curX, Kt = i.curY, Jt = i.currentX, Zt = i.currentY, Yt = i.curBodyX, void 0) }

            function On() {
                var e = K.width || o(),
                    t = K.height || a();
                if (pt) var n = e,
                    i = Math.min(_t.crop_size, n - 2 * _t.crop_padding),
                    r = i,
                    s = i;
                else var r = e,
                    s = t;
                return { width: r, height: s }
            }

            function Hn(e) {
                var t = On(),
                    n = t.width,
                    i = nt.width * e,
                    o = (i - n) / 2,
                    a = -o;
                return 0 >= o && (a = o = 0), { min: a, max: o }
            }

            function Dn(e) {
                var t = On(),
                    n = t.height,
                    i = nt.height * e,
                    o = (i - n) / 2,
                    a = -o;
                return 0 >= o && (a = o = 0), { min: a, max: o }
            }

            function jn() {
                if (pt) var e = Ui ? Ui[0] : { max_scale: _t.max_scale },
                    t = 1,
                    n = e.max_scale;
                else var i = yt(nt),
                    t = _t.min_scale,
                    n = Math.max(_t.max_scale, i.width / o(), i.height / a());
                return { min: t, max: n }
            }

            function Rn(e) {
                d(Kt, e);
                var t = K.height || a(),
                    n = Math.abs(Vi) >= 10,
                    i = Math.abs(e) > 1,
                    o = t / 3.5,
                    r = Math.abs(Kt);
                return 0 > Kt * e && (n = !0), e = e || 0, r > o || !n && i ? (Fn(e), !0) : (ci() && (In = 1, At(300), an = !1, _n && (_n = !1, Mi(!0))), !1)
            }

            function qn() { ut && Z.close() }

            function Fn(e) {
                var t = K.height || a(),
                    n = 2 * Math.abs(Zt) > t ? .85 : 1.7;
                Nn({ curY: (e > 1 ? t : -1 > e ? -t : Kt > 0 ? t : -t) / n }), In = 0, At(150, "ease-in", qn), s(F, "width", 0), Cn = !0
            }

            function Un(e) {
                var t = K.width || o(),
                    n = t / 2,
                    i = -n;
                return e = e || 0, (i > Yt || -1 > e) && rn ? ($n(), !0) : (Yt > n || e > 1) && sn ? (Vn(), !0) : (ci() && At(300), !1)
            }

            function zn() { bn !== !1 && (Ct(!1), io(bn), s.transform(it), s.transform(ot), Et(1, 0, 0, 0, 1), It(), bn = !1) }

            function $n() {
                var e = K.width || o(),
                    t = 1.05 * e;
                Jt -= (t + Yt) / en, Yt = -t, bn = $i + 1, Vi--, At(300, "ease-out", zn), Oi(!1, !0), _n = !1, Z.onPhotoChange && Z.onPhotoChange($i + 1, { no_open: !0, local: dt, crop: pt })
            }

            function Vn() {
                var e = K.width || o(),
                    t = 1.05 * e;
                Jt += (t - Yt) / en, Yt = t, bn = $i - 1, Vi++, At(300, "ease-out", zn), Oi(!1, !0), _n = !1, Z.onPhotoChange && Z.onPhotoChange($i - 1, { no_open: !0, local: dt, crop: pt })
            }

            function Wn() {
                var e = window,
                    t = e.lang,
                    n = t.mobile_photos_photoview_header || "",
                    i = bn !== !1 ? bn : $i;
                n = n.replace("%s", i + 1), n = n.replace(/%s|{count}/, Ui.length), f("zpv_summary", n)
            }

            function Xn() {
                if (!En) return !1;
                var e = Kn(),
                    t = e[0],
                    n = e[1],
                    i = e[2];
                if (Gn(), !t) return !1;
                var o = on || an ? 5.1 : 4.7,
                    a = t / o,
                    r = n * a - o * a * a / 2,
                    s = i * a - o * a * a / 2;
                if (a *= 530, r *= 140, s *= 140, .1 > t || !r && !s) return !1;
                if (!an) {
                    var l = {};
                    on || (l.curX = Gt + r, l.curY = Kt + s), Nn(l);
                    var c = Hn(en);
                    l = {}, Gt < c.min ? l.curBodyX = Xt ? Gt - c.min : 0 : Gt > c.max && (l.curBodyX = Xt ? Gt - c.max : 0), Nn(l)
                }
                return on ? 4.7 * n : an ? 4.7 * i : a
            }

            function Yn(e) { En || (En = []), En.push([p(), e]), En = En.slice(-20) }

            function Gn() { En = !1 }

            function Kn() {
                if (!En || En.length < 2) return [0, 0, 0];
                for (var e = p(), t = !1, n = En.pop(), i = En.length - 1; i >= 0; i--) {
                    var o = e - En[i][0];
                    if (o > 150) break;
                    t = En[i]
                }
                if (!t || !n) return [0, 0, 0];
                var a = n[1].pageX - t[1].pageX,
                    r = n[1].pageY - t[1].pageY,
                    s = Math.sqrt(a * a + r * r),
                    o = n[0] - t[0];
                return o ? [s / o, a / o, r / o] : [0, 0, 0]
            }

            function Qn(e, t, n, i) {
                var o = e[0],
                    a = e[1],
                    r = n[0],
                    s = n[1],
                    l = i / t;
                return 1 == l ? !1 : [o + (o - r) / (l - 1), a + (a - s) / (l - 1)]
            }

            function Jn(e, t) {
                var n = Qn([e.curX, e.curY], e.currentScale, [t.curX, t.curY], t.currentScale);
                if (!n) return !1;
                var i = n[0],
                    o = n[1];
                return e.deltaX = i - e.curX, e.deltaY = o - e.curY, e.currentX = e.curX / e.currentScale + i - i / e.currentScale, e.currentY = e.curY / e.currentScale + o - o / e.currentScale, t.deltaX = i - t.curX, t.deltaY = o - t.curY, t.currentX = t.curX / t.currentScale + i - i / t.currentScale, t.currentY = t.curY / t.currentScale + o - o / t.currentScale, n
            }

            function Zn(e, t, n) {
                var r, s, l, c, u, d, f, p, v, h, g, w, y, b, k, C, M, S = K.width || o(),
                    E = K.height || a(),
                    T = !1,
                    A = 15,
                    x = (Math.min(50, S / 7), yt(nt)),
                    I = S / x.width,
                    P = E / x.height,
                    B = Math.min(1, I, P),
                    L = bt(e),
                    N = L.coords,
                    O = i("zpv_tl", e),
                    H = _(O),
                    D = m(O),
                    j = (Math.min((S - 2 * A) / Math.max(N.w * x.width * B / 100, H), (E - 2 * A) / (N.h * x.height * B / 100 + D + 5)), function() { l = x.width * B * n.currentScale, c = x.height * B * n.currentScale, u = S / 2 - l / 2 + n.currentX * n.currentScale, d = E / 2 - c / 2 + n.currentY * n.currentScale, v = u + N.x * l / 100, h = d + N.y * c / 100, f = N.w * l / 100, p = N.h * c / 100, r = v + f / 2 - H / 2, s = h + p + 5, y = Math.min(v, r), g = Math.max(f, H), k = y + g, b = h, w = p + D + 5, C = b + w, M = {} });
                return n = Nn(M, t, n), n = n || Ln(), j(), A > y ? (M.curX = n.curX + (A - y), T = !0) : k > S - A && (M.curX = n.curX - (k - S + A), T = !0), A > b && (M.curY = n.curY + (A - b), T = !0), n = Nn(M, t, n), n = n || Ln(), j(), C > E - A && (M.curY = n.curY - (C - E + A), T = !0), n = Nn(M, t, n), t ? n : T
            }

            function ei(e) { An && (An = !1, It(), e || At(), bi(!0, !0)) }

            function ti(e, t, n) { var i = {}; return n = n || Ln(), i.lastScale = e, n = Nn(i, t, n), t ? n : !1 }

            function ni(e, t, n) {
                var i = {};
                if (n = n || Ln(), !ui()) return t ? n : !1;
                i.curScale = e, n = Nn(i, t, n), n = n || Ln();
                var o = jn();
                return i = { currentScale: n.currentScale }, n.currentScale < o.min ? i.currentScale = n.currentScale + (o.min - n.currentScale) / _t.bounce_diff : n.currentScale > o.max && (i.currentScale = n.currentScale + (o.max - n.currentScale) / _t.bounce_diff), n = Nn(i, t, n), t ? n : !1
            }

            function ii(e, t) {
                if (!ui()) return !1;
                var n = !1,
                    i = {};
                t = t || Ln();
                var o = jn();
                return t.currentScale < o.min ? (i.currentScale = o.min, n = !0) : t.currentScale > o.max && (i.currentScale = o.max, n = !0), t = Nn(i, e, t), e ? t : n
            }

            function oi(e) {
                if (!ui()) return !1;
                var t = jn(),
                    n = { pageX: $t, pageY: Vt },
                    i = (en > 1 ? 1 : t.max) / Wt,
                    o = Ln(),
                    a = null;
                a = ni(i, !0), a = li(n, !0, a), a = ci(!0, a), e && (a = Zn(e, !0, a), a = ci(!0, a));
                var r = Jn(o, a);
                r && (It(r), xt(o), An = !0), An && bi(!1, !0), ni(i), li(n), ci(), e && (Zn(e), ci()), An ? xt(a, 300, !1, ei) : At(300), ti(en), Si()
            }

            function ai(e) {
                if (!ui()) return !1;
                var t = { pageX: 0, pageY: 0 },
                    n = Ln(),
                    i = null;
                e = 1 == e ? 1 / Wt : e, i = si(t, !0, n), i = ni(e, !0, i), i = ii(!0, i), i = li(t, !0, i), i = ci(!0, i);
                var o = Jn(n, i);
                o && (It(o), xt(n), An = !0), An && bi(!1, !0), si(t), ni(e), ii(), li(t), ci(), An ? xt(i, 300, !1, ei) : At(300), ti(en)
            }

            function ri(e) {
                if (!ui()) return !1;
                var t = Ln(),
                    n = null;
                n = Zn(e, !0, t), n = ii(!0, n), n = ci(!0, n);
                var i = Jn(t, n);
                i && (It(i), xt(t), An = !0), Zn(e) && (hn || (hn = t)), An && bi(!1, !0), ii(), ci(), An ? xt(n, 300, !1, ei) : At(300), ti(en)
            }

            function si(e, t, n) { var i = {}; return n = n || Ln(), i.deltaX = (e.pageX - n.curX) / n.curScale, i.deltaY = (e.pageY - n.curY) / n.curScale, n = Nn(i, t, n), t ? n : !1 }

            function li(e, t, n) {
                var i = {};
                n = n || Ln(), i.pointX = e.pageX, i.pointY = e.pageY;
                var o = Hn(n.currentScale),
                    a = Dn(n.currentScale),
                    r = !((tn || a.max || a.min) && !on && ui() || an),
                    s = an || pt && !tn && !o.max && !o.min;
                s && (i.curX = 0), r && (i.curY = n.curY), n = Nn(i, t, n), n = n || Ln(), i = {};
                var l = !1;
                return n.curX <= o.min ? rn ? (l = !0, i.curBodyX = n.curX - o.min) : (i.curX = n.curX + (o.min - n.curX) / _t.bounce_diff, i.curBodyX = Xt ? i.curX - o.min : 0) : n.curX >= o.max && (sn ? (l = !0, i.curBodyX = n.curX - o.max) : (i.curX = n.curX + (o.max - n.curX) / _t.bounce_diff, i.curBodyX = Xt ? i.curX - o.max : 0)), n.curY < a.min ? r ? i.curY = a.min : an || (i.curY = n.curY + (a.min - n.curY) / _t.bounce_diff) : n.curY > a.max && (r ? i.curY = a.max : an || (i.curY = n.curY + (a.max - n.curY) / _t.bounce_diff)), n = Nn(i, t, n), t ? n : l
            }

            function ci(e, t) {
                var n = !1,
                    i = {};
                t = t || Ln();
                var o = Hn(t.currentScale),
                    a = Dn(t.currentScale),
                    r = !tn && !a.max && !a.min || on || !ui() && !an,
                    s = an;
                return s && (i.curX = 0), r && (i.curY = t.curY), t.curX < o.min ? (i.curX = o.min, i.curBodyX = 0, n = !0) : t.curX > o.max && (i.curX = o.max, i.curBodyX = 0, n = !0), t.curY < a.min ? (i.curY = a.min, n = !0) : t.curY > a.max && (i.curY = a.max, n = !0), t = Nn(i, e, t), e ? t : n
            }

            function ui() { return ct ? !1 : pt ? !0 : zi[Wi.src] }

            function di(e) {
                if (v() || v(0), !Cn) {
                    if (e && "mousedown" == e.type && c(e), e.touches && e.touches.length || !st) {
                        if (zn(), !nn && !tn) {
                            Sn = ht(e);
                            var t = Hn(en);
                            Gt <= t.min && (rn = Qi($i + 1) !== !1), Gt >= t.max && (sn = Qi($i - 1) !== !1)
                        }
                        if (nn || ct) ln = cn = un = !1, dn = !1;
                        else {
                            clearTimeout(fn);
                            var n = ht(e);
                            ln && p() - ln < 500 && cn && gt(n, cn) < 50 ? (un = p(), dn = !1) : (ln = p(), cn = n, dn = p())
                        }
                        ct || (nn = !0)
                    }
                    tn || (Xt = !0, Ct(!0)), gn = ht(e), Gn(), Yn(gn), si(gn)
                }
            }

            function fi(e) {
                if (!Cn && (c(e), nn)) {
                    if (ln = cn = un = !1, dn = !1, gn = ht(e), Yn(gn), Tn) {
                        if (!(Tn < p())) return void Gn();
                        Tn = !1, si(gn), At()
                    }
                    if (Sn && !on && !an) {
                        var t = Math.abs(gn.pageX - Sn.pageX),
                            n = Math.abs(gn.pageY - Sn.pageY),
                            i = Dn(en);
                        if (!(n > 5 || t > 5)) return;
                        n > 5 && 5 >= t && (1 != en || tn || ct || pt ? (i.max || i.min) && (rn = sn = !1) : (an = !0, pn && (_n = !0), Mi(!1), gi(gn.pageY - Sn.pageY > 0))), Sn = !1, si(gn)
                    }
                    var a = li(gn);
                    !a || on || an || ct || (on = !0, yn = gn.pageX), Ei(), At(), on && Math.abs(Yt) > o() && pi(l({ originalEvent: e }, e, { touches: [] }))
                }
            }

            function pi(e) {
                if (!Cn) {
                    if (Mn) return void(Mn = !1);
                    if (c(e), e.touches && !e.touches.length || !st) {
                        var n = Xn();
                        if (on) Un(n) && (Bn(), Ct(!0));
                        else if (an) Rn(n);
                        else if (un && p() - un < 1e3) {
                            var i = e && mn && (t("zpv_tag", e.target) ? e.target : h("zpv_tag", e.target));
                            oi(i), ln = cn = un = !1
                        } else ci() ? At(300) : n && (ci(), At(n, "cubic-bezier(0, 1, 1, 1)"));
                        if (dn)
                            if (p() - dn > 700 || e && "touchcancel" == e.type) dn = !1;
                            else {
                                if (dn = !1, e) var o = t("zpv_header", e.target) ? e.target : h("zpv_header", e.target),
                                    a = t("zpv_zoom_btns", e.target) ? e.target : h("zpv_zoom_btns", e.target),
                                    r = t("zpv_bottom_body", e.target) ? e.target : h("zpv_bottom_body", e.target),
                                    i = mn && (t("zpv_tag", e.target) ? e.target : h("zpv_tag", e.target));
                                e && (o || a || r || i) ? i ? Ni(i, e) : a && (ln = cn = un = !1, t("zpv_zoomin", e.target) || h("zpv_zoomin", e.target) ? Ai(e) : xi(e)) : vn ? Oi(e) : pt || (fn = setTimeout(function() { Mi(), bi(pn) }, 500))
                            }
                        nn = !1, on = rn = sn = !1, Gn()
                    }
                    e.touches && (e.touches.length > 1 || 1 == e.touches.length && on) && (gn = ht(e), si(gn)), (e.touches && !e.touches.length || !st) && (Sn = !1)
                }
            }

            function _i(e) {
                if (!Cn && (c(e), ln = cn = un = !1, dn = !1, Gn(), !on && !an)) {
                    Qt = 1, Wt = en, tn = !0, rn = sn = !1;
                    var t = Hn(en);
                    (t.min >= -5 || t.max <= 5) && (Xt = !1, Ct(!1));
                    var n = ht(e);
                    si(n), bi(!1, !0)
                }
            }

            function mi(e) { Cn || (c(e), ln = cn = un = !1, dn = !1, Gn(), on || an || (wn = ht(e), ni(e.scale), li(wn), At(), Si())) }

            function vi(e) { Cn || (c(e), ln = cn = un = !1, dn = !1, Gn(), on || an || (ii() && ((e.touches && e.touches.length || !st) && li(wn), ci(), At(100), Tn = p() + 100), tn = !1, bi(!0, !0))) }

            function hi(e) {
                var t = jn(),
                    n = e < t.max,
                    i = e > t.min;
                g("zpv_zb_disabled", et, !n), g("zpv_zb_disabled", tt, !i)
            }

            function gi(e) { e ? s(V, { top: -35, bottom: "auto" }) : s(V, { top: "auto", bottom: -35 }), V.is_down = e }

            function wi(e, t) {
                var n = window,
                    i = n.lang;
                if (e) {
                    var o = K.height,
                        a = 20,
                        r = o / 5,
                        l = o / 3.5,
                        c = Math.abs(e),
                        u = c > a ? e + (e > 0 ? a - e : -a - e) / _t.bounce_diff : e,
                        d = 0 === t ? 0 : Math.max(0, Math.min((c - 20) / r, .75));
                    t > 0 && s.transform(V, { translate: [0, u] }), s(V, "opacity", d);
                    var p = c > l,
                        _ = p ? "" : e > 0 ? " zpv_close_move_down" : " zpv_close_move_up",
                        m = p ? i.mobile_zphoto_release_to_close : i.mobile_zphoto_move_to_close;
                    f(V, '<div class="zpv_close_msg' + _ + '">' + m + "</div>"), (V.is_down && 0 > e || !V.is_down && e > 0) && gi(e > 0)
                } else s.transform(V, { translate: [0, 0] }), s(V, "opacity", 0)
            }

            function yi() {
                var e = i("zpv_close_msg", V),
                    t = _(e);
                s(V, { width: t || 250 })
            }

            function bi(e, t) {
                var n = mn;
                if (e) { if (!ui()) return; if (!pn && !_n || tn) return }
                mn = e, e && ki(en, Jt, Zt, t || n !== e), n !== e && (e && Ci(vn), s.animate(at, t ? !1 : "opacity", { duration: 200, func: "linear" }, function() { s(at, "visibility", e ? "visible" : "hidden") }), s(at, "visibility", e || !t ? "visible" : "hidden"), s(at, "opacity", e ? 1 : 0))
            }

            function ki(e, t, n, i) {
                if (!tn && mn) {
                    var r = K.width || o(),
                        l = K.height || a(),
                        c = yt(nt),
                        u = r / c.width,
                        d = l / c.height,
                        f = Math.min(1, u, d),
                        p = c.width * f * e,
                        _ = c.height * f * e,
                        m = r / 2 - p / 2 + t * e,
                        v = l / 2 - _ / 2 + n * e;
                    i && s.animate(at), s(at, { width: Math.round(p), height: Math.round(_) }), s.transform(at, { translate: [Math.round(m), Math.round(v)] })
                }
            }

            function Ci(e) {
                if (e) {
                    var t = yt(nt),
                        n = K.width || o(),
                        r = K.height || a(),
                        l = n / t.width,
                        c = r / t.height,
                        u = Math.min(1, l, c),
                        d = t.width * u * en,
                        f = t.height * u * en,
                        p = bt(e),
                        v = p.coords,
                        h = i("zpv_tl", e),
                        g = _(h),
                        w = m(h),
                        y = v.x * d / 100,
                        b = v.y * f / 100,
                        k = v.w * d / 100,
                        C = v.h * f / 100,
                        M = y + k / 2 - g / 2,
                        S = b + C + 5,
                        E = n > d ? 0 - (n - d) / 2 : 0,
                        T = n > d ? d + (n - d) / 2 : d,
                        A = r > f ? f + (r - f) / 2 : f,
                        x = 0,
                        I = 0,
                        P = 2,
                        B = 5;
                    E + P > M ? x = E + P - M : M + g > T - P && (x = T - P - M - g), S + w > A - B && (I = C > 3 * w ? A - B - S - w : -C - w - 10), s.transform(h, { translate: [Math.ceil(x), Math.ceil(I)] })
                }
            }

            function Mi(e) {
                if ("undefined" != typeof e) {
                    if (pn === e) return;
                    pn = !e
                } else _n = !1;
                s(F, "width", "auto"), s.animate(F, "opacity", { duration: 200, func: "linear" }, function() { s.animate(F), s(F, "width", pn ? "auto" : 0) }), pn ? (s(F, "opacity", 0), pn = !1) : (s(F, "opacity", 1), pn = !0)
            }

            function Si() { K.height < 604 && !vn && !pt && (en > 1.25 ? (pn && (_n = !0), Mi(!1)) : _n && (_n = !1, Mi(!0))) }

            function Ei() {
                if (an) {
                    var e = Math.abs(Kt),
                        t = K.height / 2;
                    In = 1 - .5 * e / t
                }
            }

            function Ti(e) { kn && (nn || tn || on || e && e.touches && e.touches.length > 1 || (w(e), Z.close())) }

            function Ai(e) { return kn ? (U.highlight = !1, U.end(e), tn || on ? !1 : jn().max <= en ? !1 : (w(e), ai(pt ? 1.25 : 1.45), !1)) : !1 }

            function xi(e) { return kn ? (U.highlight = !1, U.end(e), tn || on ? !1 : jn().min >= en ? !1 : (w(e), ai(pt ? .8 : 1), !1)) : !1 }

            function Ii(e) {
                if (!(nn || tn || on || !e || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey)) {
                    var t = Hn(en);
                    37 == e.keyCode ? (w(e), Gt >= t.max && Qi($i - 1) !== !1 && (Ct(!0), Vn())) : 39 == e.keyCode ? (w(e), Gt <= t.min && Qi($i + 1) !== !1 && (Ct(!0), $n())) : 27 == e.keyCode && Ti(e)
                }
            }

            function Pi() { pt ? ro() : bi(mn, !0) }

            function Bi(e, t) { return kn ? (U.highlight = !1, U.end(), Wi.likes_me ? (Wi.likes_me = !1, --Wi.likes_cnt) : (Wi.likes_me = !0, ++Wi.likes_cnt), no(), q.click(e, l({ photo_id: t }, Y))) : !1 }

            function Li(e, t) {
                var n = window,
                    o = n.cur;
                if (!kn) return !1;
                var a = o.replyNames,
                    r = o.sticker_panel,
                    s = o.stickers,
                    c = $.go(e, t, { local: !0, fast: !0, beforeAppend: function(e) { f(i("mcont", e), '<div class="pcont"><div class="media_view photo_view"><div class="pv_summary"><div class="summary_loading" style="display: none;"><i class="i_loading"></i></div></div><div class="pv_tag_wrap"></div><div class="pv_body pv_touch pv_touch_full pv_hidden_icons"><a class="thumb_item"><div class="pv_photo_wrap" id="pv_photo_tags" onclick="return photo.closeTags(event);"><img src="/images/mobile/blank.gif" class="ph_img" alt="" /></div></a><div class="pv_nav"><table class="row_table pv_nav_cont"><tr><td class="pv_nav_left"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td><td class="pv_nav_z"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td><td class="pv_nav_right"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td></tr></table></div></div><div class="pv_footer"></div></div></div>'), f("m", e.innerHTML) } });
                l(o, {
                    replyNames: a,
                    sticker_panel: r,
                    stickers: s,
                    processNav: function(e) {
                        var t;
                        if (t = /^\/photo(-?\d+_\d+)$/i.exec(e.nav.path)) {
                            var n = y(e.nav.params),
                                i = y($.params);
                            if (n.act) return !1;
                            if (n.offset != i.offset) return !1;
                            if (n.list != i.list && !i.z) return !1;
                            e.onPreNav && e.onPreNav();
                            var o = n.list || "",
                                a = n.rev ? "/rev" : "";
                            return !J.open(t[1], o + a, null, n.from, !0)
                        }
                        return !1
                    }
                }), o.destroy.push(function() { J.clear() });
                var u = window,
                    d = u.lang;
                if (!c && (c = $.go(e, t, { force: !0 }), !c)) {
                    var p = !0;
                    if (K._lastNav) {
                        var _ = K._lastNav,
                            m = y(_.params);
                        delete m.z, p = _.path + b(m) + _.hash
                    }
                    W.setMhead("m", d.mobile_photos_photo_head_title, p), J.showIcons()
                }
                return !0
            }

            function Ni(e, n) {
                if (!kn) return !1;
                if (!mn) return !0;
                bt(e);
                return t("zpv_tag_selected", e) ? t("zpv_tl_wrap", n.target) || h("zpv_tl_wrap", n.target) ? $.go(e, n) : (ri(e), w(n), !1) : (vn && (ln = cn = un = !1), k("zpv_tag_selected", vn), vn = e, Ci(e), C("zpv_tag_selected", vn), pn && (_n = !0), Mi(!1), ri(e), w(n), !1)
            }

            function Oi(e, t) { return kn || t ? vn ? (k("zpv_tag_selected", vn), vn = !1, _n && 1.25 >= en && (_n = !1, Mi(!0)), w(e), !1) : !0 : !1 }

            function Hi(e) {
                if (!kn) return !1;
                if (U.highlight = !1, U.end(), t("item_disabled", e)) return !1;
                if (!pt || !Ui) return !1;
                var n = Ui[0],
                    i = On(),
                    o = nt.width * en,
                    a = nt.height * en,
                    r = (o - i.width) / 2 - Gt,
                    s = (a - i.height) / 2 - Kt,
                    l = 1 / en,
                    c = r / o,
                    u = s / a;
                return n.onSelect && n.onSelect(c, u, l), !1
            }

            function Di(e) { return kn ? (U.highlight = !1, U.end(), t("item_disabled", e) ? !1 : Ti()) : !1 }

            function ji(e) { "touchstart" == e.type ? kn = !e.touches || 1 == e.touches.length : "touchmove" == e.type ? (kn = !1, c(e)) : "click" == e.type && (kn || (w(e), kn = !0)) }

            function Ri(e) { "touchstart" == e.type ? Cn = !0 : "touchmove" == e.type ? (Cn = !0, c(e)) : (Cn = e.touches && e.length, Mn = !Cn) }

            function qi() {
                if (st = "undefined" != typeof document.ontouchmove, lt = !1, st) {
                    var t = i("zpv_header", e),
                        n = i("zpv_bottom_body", e);
                    M(t, "touchstart touchmove touchend touchcancel", Ri), M(n, "touchstart touchmove touchend touchcancel", Ri), M(e, "touchstart touchmove click", ji), M(e, "touchstart", di), M(e, "touchmove", fi), M(e, "touchend touchcancel", pi), lt ? (M(e, "gesturestart", _i), M(e, "gesturechange", mi), M(e, "gestureend", vi)) : (M(e, "touchstart", jt), M(e, "touchmove", Rt), M(e, "touchend touchcancel", qt), M(e, "gesturestart gesturechange gestureend", w))
                } else M(e, "mousedown", di), M(e, "mousemove", fi), M(window, "mouseup", pi), M(window, "mousewheel", Ft), M(window, "keydown", Ii)
            }

            function Fi() {
                if (st) {
                    var t = i("zpv_header", e),
                        n = i("zpv_bottom_body", e);
                    S(t, "touchstart touchmove touchend touchcancel", Ri), S(n, "touchstart touchmove touchend touchcancel", Ri), S(e, "touchstart touchmove click", ji), S(e, "touchstart", di), S(e, "touchmove", fi), S(e, "touchend touchcancel", pi), lt ? (S(e, "gesturestart", _i), S(e, "gesturechange", mi), S(e, "gestureend", vi)) : (S(e, "touchstart", jt), S(e, "touchmove", Rt), S(e, "touchend touchcancel", qt), S(e, "gesturestart gesturechange gestureend", w))
                } else S(e, "mousedown", di), S(e, "mousemove", fi), S(window, "mouseup", pi), S(window, "mousewheel", Ft), S(window, "keydown", Ii)
            }
            var Ui = !1,
                zi = {},
                $i = !1,
                Vi = !1,
                Wi = !1,
                Xi = !1,
                Yi = !1;

            function Gi(e, t, n, i) {
                var o = t ? t : E(e);
                if ((!e || n) && (Ui = null), Ui || (Ui = new Array(o)), Ui.length != o) {
                    var a = Ui;
                    Ui = new Array(o), l(Ui, a)
                }
                l(Ui, e);
                var r = Ki(Wi.id); - 1 == r && (r = $i), i || io(r)
            }

            function Ki(e) {
                for (var t in Ui)
                    if (Ui[t].id == e) return +t;
                return -1
            }

            function Qi(e) { return e >= Ui.length ? !1 : 0 > e ? !1 : Ui[e] || { src: !0 } }

            function Ji(e, t) {
                if (pt) {
                    var n = Ui[0];
                    if (n.loaded = t, t) {
                        var i = yt(e),
                            o = On();
                        i.width > i.height ? s(e, { height: o.height }) : s(e, { width: o.width }), s(e, { minWidth: 0, maxWidth: "none" })
                    }
                    ro(!0)
                }
                T(e), nt === e && bi(t, !t)
            }

            function Zi(e) {
                if (zi[e]) eo(e);
                else {
                    var t = new Image;
                    t.src = e, t.onload = function() { d("loaded", e), zi[e] = !0, eo(e), t = null }
                }
            }

            function eo(e) {
                A([nt, it, ot], function() {
                    var t = this,
                        n = r(t, "data-src"),
                        i = h("zpv_thumb_item", t);
                    n == e && (d("set", e), t.src = n, Ji(t, !0), k("zpv_ti_loading", i), r(t, "data-src", !1))
                })
            }

            function to(e, t, n) {
                var i = h("zpv_thumb_item", e);
                t ? t !== !0 ? e.src == t ? Ji(e, !0) : zi[t] ? (e.src = t, Ji(e, !0)) : (n ? (e.src = n, Ji(e, !1)) : x(e), r(e, "data-src", t), Zi(t), C("zpv_ti_loading", i)) : (n ? (e.src = n, Ji(e, !1)) : x(e), C("zpv_ti_loading", i)) : x(e)
            }

            function no() {
                if (ut) {
                    Wn(), hi(en);
                    var e = bn !== !1 ? bn : $i,
                        t = Qi(e);
                    if (t && t.src !== !0) {
                        var n = "";
                        A(t.tags, function(e, t) {
                            if (!e || 0 == e) return !0;
                            var i = kt(t),
                                o = i.coords,
                                a = i.href ? ' data-href="' + i.href + '" data-name="' + I(i.name) + '"' : "",
                                r = i.al ? (i.href ? " al" + i.al : "") + " " + i.al : "";
                            n += '<div class="zpv_tag' + r + '" style="left: ' + o.x + "%; top: " + o.y + "%; width: " + o.w + "%; height: " + o.h + '%;" data-id="' + e + '"' + a + '><div class="fill"></div><div class="zpv_tl_wrap" id="zpv_tl_wrap"><div class="zpv_tl' + (i.href ? "" : " zpv_tl_plain") + '">' + P(i.name) + "</div></div></div>"
                        }), f(at, n), f(X, '<div class="zpv_photo_desc">' + (t.caption || "") + '</div><div class="zpv_bottom_bg"></div>'), B(X, !!t.caption);
                        var i = "";
                        if (dt || $.getQuery("community")) i = "";
                        else {
                            var o = "",
                                a = "",
                                r = "",
                                s = t.tags && t.tags[0] || 0,
                                o = '<td class="row_table_column"><a href="' + t.like_url + '" class="item_button item_like' + (t.likes_me ? " item_likes_me" : "") + '" onclick="return photoview.likePhoto(this, \'' + t.id + '\');"><i class="i_icon i_like"></i>' + (t.likes_cnt ? '<b class="v_value v_like">' + L(t.likes_cnt) + "</b>" : "") + "</a></td>",
                                a = '<td class="row_table_column"><a href="' + t.photo_url + '#comments" class="item_button item_replies al_photo" onclick="return photoview.openPhoto(this, event, true);"><i class="i_icon i_replies"></i>' + (t.replies_cnt ? '<b class="v_value v_replies">' + t.replies_cnt + "</b>" : "") + "</a></td>",
                                r = '<td class="row_table_last_column"><a href="' + t.photo_url + '" class="item_button item_tags al_photo" onclick="return photoview.openPhoto(this, event);"><i class="i_icon i_tags"></i>' + (s ? '<b class="v_value v_tags">' + s + "</b>" : "") + "</a></td>";
                            i = "<tr>" + o + a + r + "</tr>"
                        }
                        f(G, i), T(z)
                    } else x(z)
                }
            }

            function io(e) { ut && ($i = Math.max(0, Math.min(e || 0, Ui.length)), Wi = Qi($i), Yi = Qi($i - 1), Xi = Qi($i + 1), to(nt, Wi.src, "/images/mobile/blank.gif"), to(ot, Xi.src), to(it, Yi.src), no(), Z.onUpdate && Z.onUpdate()) }

            function oo() {
                if (ut && ft && Ui) {
                    var e = Ui[0];
                    if (!e.loaded && e.progress) {
                        var t = i("zpvu_progress", "zpv_center");
                        s(t, { width: 100 * e.progress + "%", visibility: "visible" })
                    }
                    if (!e.read && e.thumb) {
                        e.read = !0;
                        var n = i("zpv_upload_box", "zpv_center"),
                            o = i("zpv_upload_img", n);
                        s(o, { backgroundImage: "url(" + e.thumb + ")" }), k("zpv_thumb_uploading", n)
                    }
                }
            }

            function ao() {
                if (ut && ft) {
                    var t = window,
                        n = t.lang;
                    f("zpv_summary", n.mobile_zphoto_upload_header), k("zpv_mode_[a-z]+", e, !0), C("zpv_mode_upload", e);
                    var i = '<div class="zpva zpv_upload_box zpv_thumb_uploading"><div class="zpv_upload_img"></div><div class="zpvu_progress_wrap"><div class="zpvu_progress"></div></div></div>';
                    N(nt), f("zpv_center", i);
                    var o = '<tr><td class="row_table_column" width="50%"><a class="item_button item_disabled" onclick="return false;"><i class="i_icon i_save"></i><span class="v_value">' + n.mobile_zphoto_save_btn + '</span></a></td><td class="row_table_last_column" width="50%"><a class="item_button" onclick="return photoview.cancelPhoto(this);"><i class="i_icon i_cancel"></i><span class="v_value">' + n.mobile_zphoto_cancel_btn + "</span></a></td></tr>";
                    f(G, o), T(z), oo()
                }
            }

            function ro(t) {
                if (ut && pt && Ui) {
                    var n = Ui[0],
                        i = !!n.saving;
                    if (g("item_disabled", "zpv_save_button", i || !n.loaded), g("item_disabled", "zpv_cancel_button", i), g("zpv_crop_saving", e, i), ct = i, t || to(nt, n.src, "/images/mobile/blank.gif"), n.loaded && n.rect && !n.rect_inited) {
                        n.rect_inited = !0;
                        var o = On(),
                            a = n.rect[0],
                            r = n.rect[1],
                            s = n.rect[2],
                            l = {};
                        l.currentScale = 1 / s, Nn(l), ii(), ci(), l = {};
                        var c = nt.width * en,
                            u = nt.height * en,
                            d = a * c,
                            f = r * u;
                        l.curX = (c - o.width) / 2 - d, l.curY = (u - o.height) / 2 - f, Nn(l), ci(), At(0)
                    }
                }
            }

            function so() {
                if (ut && pt) {
                    var t = window,
                        n = t.lang;
                    f("zpv_summary", n.mobile_zphoto_owner_crop_header), k("zpv_mode_[a-z]+", e, !0), C("zpv_mode_crop", e), hi(en), nt.parentNode || (f("zpv_center", ""), O(nt, "zpv_center"));
                    var i = '<tr><td class="row_table_column"><a class="item_button" id="zpv_save_button" onclick="return photoview.savePhoto(this);"><i class="i_icon i_save"></i><span class="v_value">' + n.mobile_zphoto_save_btn + '</span></a></td><td class="row_table_last_column" width="50%"><a class="item_button" id="zpv_cancel_button" onclick="return photoview.cancelPhoto(this);"><i class="i_icon i_cancel"></i><span class="v_value">' + n.mobile_zphoto_cancel_btn + "</span></a></td></tr>";
                    f(G, i), T(z), ro()
                }
            }

            function lo() { ut || (Pn(), mt(), qi(), ut = !0, H(e), v() || v(0)) }

            function co() { ut && (Fi(), vt(), ut = !1, Ui = null) }
            return {
                onShow: j(),
                onHide: j(),
                likePhoto: Bi,
                openPhoto: Li,
                closePhoto: Ti,
                savePhoto: Hi,
                cancelPhoto: Di,
                onClose: null,
                onUpdate: null,
                onPhotoChange: null,
                saveSource: Gi,
                opened: function() { return ut },
                openCrop: function(e, t) {
                    t = t || {};
                    var n = !ut;
                    ft ? ft = !1 : lo(), pt = !0, ct = !1, Ui = [e], n && (K.open(), K.onResize = Pi), so()
                },
                updateCrop: function(e) { return Ui ? (e = l(Ui[0] || {}, e), Ui = [e], void ro()) : !1 },
                openUpload: function(e, t) { t = t || {}, lo(), ft = !0, ct = !0, Ui = [e], K.open(), K.onResize = Pi, ao() },
                updateUpload: function(e) { return Ui ? (e = l(Ui[0] || {}, e), Ui = [e], void oo()) : !1 },
                open: function(e, t, n) { Z.onShow(), n = n || {}, lo(), dt = n.local || !1, t && Gi(t, !1, !1, !0), io(e), Vi = 0, K.open(), K.onResize = Pi, yi() },
                close: function() { Z.onHide(), Z.onClose && Z.onClose({ local: dt }) || K.close() }
            }
        }();
    window.photoview = Z
}, function() {
    var e = window,
        t = e.se,
        n = e.qs2obj,
        i = e.obj2qs,
        o = e.scrollTop,
        a = e.remove,
        r = e.each,
        s = e.geByClass,
        l = e.geByClass1,
        c = e.addClass,
        u = e.removeClass,
        d = e.after,
        f = e.ce,
        p = e.val,
        _ = e.append,
        m = e.evalJs,
        v = e.extend,
        h = e.scrollToHash,
        g = e.onBodyResize,
        w = e.onBodyScroll,
        y = e.hasClass,
        b = e.escapeAttr,
        k = (e.before, window),
        C = k.thover,
        M = {
            onChange: t(),
            onRestore: t(),
            fast_load: !1,
            need_hard_go: !1,
            getHash: function(e) { if ("#player" == e.hash) return !1; var t = n(e.params); return delete t.z, e.path + i(t) },
            getAlias: function(e) {
                if (!e) return !1;
                var t = (e || "").split("?"),
                    o = t[0],
                    a = n(t[1]);
                return a.from && delete a.offset, delete a.from, delete a.z, o + i(a)
            },
            set: function(e, t, n, i) {
                window.isNewMail && toggleClass("vk__page_mail", bodyNode, "/mail" === e);
                var w = window,
                    y = w.zlayer,
                    b = window,
                    k = b.cur,
                    S = window,
                    E = S.nav,
                    T = window,
                    A = T.menu,
                    x = window,
                    I = x.audioplayer;
                n = n || {};
                var P = o(),
                    B = null;
                if (y.opened() && (P = y._st), n.force || (B = a("m"), r(s("_cntr", B), function() { a(this) }), a(l("_cntrs", B))), !n.after && !M.fast_load) {
                    var L = M.getHash(E);
                    M.save(L, { html: null, st: P, page: B, state: M.stash(), cur: window.cur }, !0)
                }
                if (n.before || M.clear(), (n.before || !n.before && !n.after) && (window.lm_qsearch_counter ? window.lm_qsearch_counter++ : window.lm_qsearch_counter = 1), n.before) {
                    M.fast_load = !0, i && i.target && c("__al_target", i.target);
                    var N = B.cloneNode(!0);
                    i && i.target && u("__al_target", i.target);
                    var O = l("__al_target", N);
                    u("__al_target", O), n.beforeAppend && n.beforeAppend(N, O), d(N, "l"), k.toggleHeaderSearch && k.toggleHeaderSearch(!1), n.afterAppend && n.afterAppend(N), A && A.clear_hover(), A && A.closeSearch(), A && A.enabled(!0)
                } else {
                    if (i && i.zProcess && i.zProcess(0, !0) && delete i.zProcess, i && E.set(i), M.need_hard_go) return E.hard_go(E.cur, null, { replace: !0 });
                    if (!n.force) {
                        t.title && (document.title = t.title);
                        var H = t.page;
                        if (H || (H = f("div", { id: "m" }), p(H, t.html)), A.opened()) {
                            var D = f("div", { id: "m_helper", onclick: A.close });
                            _(D, H)
                        }
                        d(H, "l")
                    }
                    M.fast_load = !1, C.clear(), t.lm && A.refresh(t.lm), t.bc && (window.bodyNode.className = t.bc), y.opened(), i && i.zProcess ? i.zProcess(0, !1) && delete i.zProcess : y.close(), n.force || (t.js && m(t.js), t.state && M.stash(t.state), t.cur && v(window.cur, t.cur), M.save(e, t));
                    var j = i ? i.nav && i.nav.hash : E.hash;
                    t.st || !j ? o(t.st || 0, 10) : n.no_scroll && !n.force ? o(P, 10) : h(), I && I.initAudio(), AudioMessagePlayer && AudioMessagePlayer.redrawWaves()
                }
                var R = window,
                    q = R.Tabs;
                g(q.actualizeShowMoreVisibility), q.actualizeShowMoreVisibility(), M.onChange(!0, i && i.nav && i.nav.push)
            },
            save: function(e, t, n) {
                if (e) {
                    var i = window,
                        o = i.nav,
                        a = n ? o.page_get(e) : {};
                    a && o.page_set(e, v(a, t), M.getAlias(e))
                }
            },
            restore: function(e) {
                var t = window,
                    n = t.nav,
                    i = n.page_get(e);
                return i || (i = n.page_get(M.getAlias(e))), i ? (M.onRestore(!0), i) : !1
            },
            stash: function(e) {
                var t = window,
                    n = t.cur;
                return window.cur && n.stash && n.stash(e) || !1
            },
            clear: function() {
                var e = window,
                    t = e.cur,
                    n = window,
                    i = n.zlayer,
                    o = window,
                    a = o.menu,
                    s = window,
                    l = s.tooltip;
                w("__clear"), g("__clear"), a && a.initEvents(), i.isReady && i.initEvents(), l && l.clear(), window.cur && t.destroy && r(t.destroy, function() { this() }), window.cur = { destroy: [] }
            },
            setMhead: function(e, t, n, i) {
                var o = l("mhead", e),
                    a = l("mhb_logo", o),
                    r = l("mh_header", e),
                    s = !1,
                    c = window,
                    u = c.nav;
                if (!n) return void(t && p(r, t));
                n === !0 ? s = u.path + (u.params ? "?" + u.params : "") : n && (s = n), t || (t = p(r) || "&nbsp;");
                var d = l("mhb_back", e),
                    f = "",
                    _ = y("mh_nobr", d) ? " mh_nobr" : "",
                    m = i ? ' onclick="' + i + '"' : "";
                if (f = "/" == s ? '<div class="hb_wrap mhb_back' + _ + '"' + m + '><h1 class="hb_btn mh_header">' + t + "</h1></div>" : '\n        <div class="header__center hb_wrap mhb_back ' + _ + '">\n          <a class="header__back al_back" href="' + b(s) + '" accesskey="0" ' + m + '></a>\n          <h1 class="header__title hb_btn mh_header mhi_back">' + t + "</h1>\n        </div>\n      ", o && a) {
                    var v = l("mhb_notify", e);
                    p(o, (window.al && window.al.menu ? '<a href="/" class="hb_wrap mhb_home" accesskey="*" onclick="return menu.toggle(event);"><div class="hb_btn mhi_home">&nbsp;</div></a>' : '<a href="/" class="hb_wrap mhb_home mhb_vkhome" accesskey="*"><div class="hb_btn mhi_home mhi_vkhome">&nbsp;</div></a>') + '<div id="header_msgs" class="hb_wrap mhb_notify' + (!v || y("mhb_no_notify", v) ? " mhb_no_notify" : "") + '">' + p(v) + "</div>" + f)
                } else d && (d.outerHTML = f)
            }
        };
    window.page = M
}, function() {
    var e = need("$");
    window.TabRow = { setSelectedTab: i, setTabUrl: o };
    var t = { selected: "TabRow__tab_selected" },
        n = { tabRowById: function(e) { return '.TabRow[data-id="' + e + '"]' }, tabById: function(e) { return '.TabRow__tab[data-id="' + e + '"]' }, tabSelected: ".TabRow__tab_selected" };

    function i(i, o) {
        var a = e(n.tabRowById(i)),
            r = a.$(n.tabSelected),
            s = a.$(n.tabById(o));
        r.classList.remove(t.selected), s.classList.add(t.selected)
    }

    function o(t, i, o) {
        var a = e(n.tabRowById(t)),
            r = a.$(n.tabById(i));
        r.setAttribute("href", o)
    }
}, function() {
    var e = need("$$");
    window.Pad = { addContent: i };
    var t = { pad: function(e) { return '.Pad[data-id="' + e + '"]' }, content: ".Pad__content" },
        n = { empty: "Pad_empty" };

    function i(i, o) {
        o && e(t.pad(i)).forEach(function(e) {
            var i = e.$(t.content);
            e.classList.remove(n.empty), i.insertAdjacentHTML("beforeend", o)
        })
    }
}, function() {
    Object.assign(q, { attr: e, onBlur: t("onblur"), onClick: t("onclick"), onFocus: t("onfocus"), onInput: t("oninput"), onKeyDown: t("onkeydown"), onKeyPress: t("onkeypress"), onKeyUp: t("onkeyup"), onMouseDown: t("onmousedown"), onMouseUp: t("onmouseup"), onScroll: t("onscroll"), onSubmit: t("onsubmit"), onTouchEnd: t("ontouchend"), onTouchMove: t("ontouchmove"), onTouchStart: t("ontouchstart"), onWheel: t("onwheel"), onChange: t("onchange") });

    function e(e, t) { return e + '="' + t + '"' }

    function t(t) { return function() { for (var i = arguments.length, o = Array(i), a = 0; i > a; a++) o[a] = arguments[a]; return e(t, n(o)) } }

    function n(e) {
        var t = e[0],
            n = e.slice(1).map(i).join(", ");
        return t + "(" + n + ")"
    }

    function i(e) { return "number" == typeof e || "event" === e || "this" === e ? e : o(JSON.stringify(e)) }

    function o(e) { return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39").replace(/</g, "&lt;").replace(/>/g, "&gt;") }
}, function() {
    var e = window,
        t = e.removeClass,
        n = e.replaceClass,
        i = e.hasClass,
        o = e.checkEvent,
        a = e.ce,
        r = e.scrollTop,
        s = e.ge,
        l = e.geByClass1,
        c = e.append,
        u = e.addClass,
        d = e.addEvent,
        f = e.getCh,
        p = e.remove,
        _ = e.removeEvent,
        m = e.getW,
        v = e.preventEvent,
        h = e.getCw,
        g = e.each,
        w = e.attr,
        y = e.val,
        b = e.onBodyResize,
        k = e.cancelEvent,
        C = e.scrollLeft,
        M = window,
        S = M.ajax,
        E = window,
        T = E.thover,
        A = window,
        x = A.nav,
        I = window,
        P = I.isTouch,
        B = {
            enabled: function(e) { return window.al && window.al.menu ? ("undefined" != typeof e && (e ? n("_lms", "_lm", window.bodyNode) : (n("_lm", "_lms", window.bodyNode), B.qsClose())), i("_lm", window.bodyNode)) : (t("_lm", window.bodyNode), t("_lms", window.bodyNode), !1) },
            opened: function() { return i("lm_opened", window.bodyNode) },
            toggle: function(e, t) { return o(e) ? !0 : window.al && window.al.menu ? (B.opened() ? B.close(e, t) : B.open(e, t), !1) : !0 },
            open: function(e) {
                var i = window,
                    p = i.zlayer;
                if (o(e)) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (B.opened()) return !1;
                if (p && p.opened()) return !1;
                if (!B.enabled()) return x.go("/"), !1;
                B.clear_hover();
                var _ = a("div", { id: "m_helper", onclick: B.close }),
                    m = B._st || 0,
                    v = r(),
                    h = s("l"),
                    g = s("m"),
                    w = s("vk_wrap"),
                    y = l("head_search", h),
                    b = w.offsetWidth,
                    k = g.offsetWidth,
                    C = g.offsetHeight;
                if (!(b >= 882)) {
                    c(_, "m"), B.fixed ? (u("lm_opened", window.bodyNode), u("lm_anim_start", w), setTimeout(function() { n("lm_anim_start", "lm_anim lm_anim_end", w) }, 5), setTimeout(function() { t("lm_anim_end", w), t("lm_anim", w) }, 200), d(g, "scroll touchmove", B.blockScroll), d(window.l, "touchstart touchmove", B.blockMenuScroll), d(y, "touchstart touchmove", B.blockMenuScroll)) : u("lm_opened", window.bodyNode);
                    var M = h.offsetHeight,
                        E = b >= 480;
                    return E ? m = v <= M - f() ? Math.min(v, M - f()) : 0 : m > v ? m = v : v - m > C - M && C > M && (m = v - C + M), B._st = Math.max(0, v - m), B._mw = k, B.fix_size(!1), B.fixed || r(m), S.post("/", { _ajax: 1, act: "ping" }), window.lm_qsearch_counter ? window.lm_qsearch_counter-- : window.lm_qsearch_counter = -1, window.lm_qsearch_counter && B.cancelSearch(), !1
                }
            },
            close: function(e) {
                if (o(e)) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (!B.opened()) return !1;
                p("m_helper"), B.clear_hover();
                var i = r(),
                    a = B._st + i,
                    c = s("l"),
                    d = s("m"),
                    f = s("vk_wrap"),
                    m = l("head_search", c),
                    v = s("vk_wrap").offsetWidth,
                    h = v >= 480;
                return B.fixed ? (u("lm_anim_end", f), setTimeout(function() { n("lm_anim_end", "lm_anim lm_anim_start", f) }, 5), setTimeout(function() { t("lm_anim_start", f), t("lm_anim", f), t("lm_opened", window.bodyNode) }, 200), _(d, "scroll touchstart", B.blockScroll), _(window.l, "touchstart touchmove", B.blockMenuScroll), _(m, "touchstart touchmove", B.blockMenuScroll)) : t("lm_opened", window.bodyNode), B._st = h ? 0 : i, B.fix_size(!0), B.fixed || r(a), window.lm_qsearch_focused && B.cancelSearch(), !1
            },
            blockScroll: function(e) {
                var t = s("vk_wrap");
                B.opened() && m(t) < 882 && v(e)
            },
            blockMenuScroll: function(e) {
                var t = s("vk_wrap");
                if (B.opened() && m(t) < 882) {
                    var n = e.touches,
                        o = (n && n[0] ? n[0].pageY : e.pageY) || 0;
                    if ("touchstart" == e.type) B.lmStartY = o;
                    else if ("touchmove" == e.type && B.lmStartY !== !1) {
                        if (i("head_search", e.currentTarget)) v(e);
                        else if (o - B.lmStartY > 0 && f() >= 440) {
                            var a = s("lm_cont");
                            a && a.scrollTop <= 0 && v(e)
                        } else if (f() >= 440) {
                            var a = s("lm_cont");
                            a && a.scrollTop >= a.scrollHeight - a.offsetHeight && v(e)
                        }
                        B.lmStartY = !1
                    }
                }
            },
            fix_size: function(e) {
                var t = s("l"),
                    n = s("m"),
                    i = s("mhead"),
                    o = i && i.offsetHeight || 0,
                    a = B._st || 0;
                t && (e ? n.style.minHeight = "0" : (a = a > o ? a : 0, n.style.minHeight = t.offsetHeight + a + "px"), !B.fixed || h() < 320 ? e ? n.style.marginTop = "0" : (t.style.minHeight = f() + "px", n.style.marginTop = -a + "px") : t.style.minHeight = "0")
            },
            clear_hover: function() { T.clear() },
            refreshCounters: function(e) {
                if (!e || !e.length) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (e.length != window.al.menu.length) return !1;
                var t = window,
                    n = t.al,
                    i = l("main_menu", "l"),
                    o = e[1];
                return Bell.setCount(o), window.store && (store.notificationsCount = o), g(e, function(e, t) {
                    if ("undefined" == typeof t) return !0;
                    var o = n.menu[e],
                        r = l("mmi_" + o[0], i),
                        s = l("mm_item", r),
                        u = l("mmi_wrap", r),
                        d = l("mm_counter", u);
                    w(s, "data-href", !1), t ? (o[2] && w(s, "href", o[2]), d ? y(d, t) : c(a("em", { className: "mm_counter", innerHTML: t }), u)) : (o[1] && w(s, "href", o[1]), p(d)), S.prepare_click(s)
                }), !0
            },
            refresh: function(e) { e = e || {}, S.refreshLinks(e.fv_link, e.app_link), "undefined" != typeof e.pp && e.pp !== !1 && y("lm_prof_panel", e.pp), "undefined" != typeof e.tn && e.tn !== !1 && y("lm_top_notify", e.tn), "undefined" != typeof e.bn && e.bn !== !1 && y("lm_bottom_notify", e.bn), e.lm && y("l", e.lm), e.topbar || p("vk_topbar") },
            initEvents: function() {
                b(function() {
                    var e = s("vk_wrap").offsetWidth,
                        t = i("_hfixed", window.bodyNode),
                        n = B._st || 0;
                    e >= 882 && n > 44 && B.close(), B.fix_size(!B.opened(), t)
                })
            },
            init: function() {
                B.fixed = i("_hfixed", window.bodyNode), B.initEvents(), d(window, "orientationchange", function() {
                    var e = s("vk_wrap").offsetWidth,
                        t = B._st || 0;
                    e >= 882 && t > 44 && B.close()
                }), B.initTouch()
            },
            initTouch: function() {
                if (d(document, "keydown", function(e) {
                        var t = window,
                            n = t.vk;
                        e && e.shiftKey && (e.ctrlKey || e.metaKey) && n.__debug && 77 == e.keyCode && (k(e), B.toggle())
                    }), P) {
                    var e = !1,
                        t = !1,
                        n = 10,
                        i = Math.min(604, h()) / 3,
                        o = 30;

                    function a(e) {
                        var t = e.touches,
                            n = r(),
                            i = (t && t[0] ? t[0].pageX : e.pageX) || 0,
                            o = (t && t[0] ? t[0].pageY : e.pageY) || 0;
                        return { x: i, y: o - n }
                    }

                    function s(e, t) {
                        var n = t.x - e.x,
                            i = t.y - e.y;
                        return Math.sqrt(n * n + i * i)
                    }

                    function c(e, t) {
                        var n = t.x - e.x,
                            i = e.y - t.y;
                        return Math.abs(180 * Math.atan2(i, n) / Math.PI)
                    }
                    d(document, "touchstart", function(n) { gpeByClass("_preventMenuOpen", n.target) || (l("mhb_home", "mhead") || l("mailHat")) && (C() > 0 || (e = t = a(n))) }), d(document, "touchmove touchend touchcancel", function(r) {
                        if (e) {
                            "touchmove" == r.type && (t = a(r));
                            var l = s(e, t),
                                u = c(e, t);
                            if (("touchend" != r.type && "touchcancel" != r.type || (e = !1, "touchcancel" != r.type)) && !(n > l)) {
                                if (B.opened() && (u = 180 - u), u > o) return void(e = !1);
                                v(r), l > i && (e = !1, B.toggle())
                            }
                        }
                    })
                }
            },
            qsOpened: !1,
            qsOpen: function() { B.qsOpened || (B.qs_st = r(), u("qs_opened", "vk_wrap"), u("qs_opened", window.bodyNode), m("vk_wrap") < 882 && r(0), B.qsOpened = !0) },
            qsClose: function() { B.qsOpened && (t("qs_opened", "vk_wrap"), t("qs_opened", window.bodyNode), m("vk_wrap") < 882 && r(B.qs_st || 0), B.qsOpened = !1) },
            closeSearch: function() { return window.al && window.al.menu ? (window.lm_qsearch && window.lm_qsearch.blur(), B.qsClose(), !1) : !0 },
            cancelSearch: function() { return window.al && window.al.menu ? (window.lm_qsearch && window.lm_qsearch.clear(), B.qsClose(), !1) : !0 },
            headerAction: function(e, t) { return m("vk_wrap") >= 882 ? x.go(e, t) : B.toggle() }
        };
    window.menu = B
}, function() {
    Object.assign(MailFilter, { onChange: befall("query"), onClear: befall(), setQuery: e }),
        function() { MailFilter._onInput = t, MailFilter._onClearMouseDown = n }();

    function e(e) {
        var t = $(".mailFilter__input");
        t && t.value !== e && (t.value = e, MailFilter.onChange(e), i(e))
    }

    function t(e) {
        requestAnimationFrame(function() {
            var t = e.value;
            i(e.value), MailFilter.onChange(t)
        })
    }

    function n(e) {
        var t = e.closest(".mailFilter").$(".mailFilter__input"),
            n = document.activeElement === t,
            o = browser.ios ? setTimeout : requestAnimationFrame;
        o(function() { i(""), t.value = "", n && t.focus(), MailFilter.onClear(), MailFilter.onChange("") })
    }

    function i(e) { $$(".mailFilter").forEach(function(t) { return t.classList.toggle("mailFilter_hasQuery", !!e) }) }
}, function() {
    var e = window.Popup,
        t = window.Btn;
    window.AuthCheck = {},
        function() { AuthCheck._onDropConfirmationClick = o, AuthCheck._onResetSessionSubmit = a, AuthCheck._onCurBrowserDropClick = r }();
    var n = { popupByIndex: function(e) { return ".AuthCheck__popup_index_" + e }, dropConfirmation: function(e) { return '.AuthCheck__dropConfirmation[data-index="' + e + '"]' }, dropConfirmationSubmit: ".AuthCheck__dropConfirmationSubmit" },
        i = { dropConfirmationSuccess: "AuthCheck__dropConfirmation_success" };

    function o(t) {
        var i = $(n.popupByIndex(t));
        e.open(i)
    }

    function a(o, a) {
        o.preventDefault();
        var r = o.target,
            s = $('iframe[name="' + o.target.target + '"]'),
            l = r.$(n.dropConfirmationSubmit);
        r.submit(), t.setLoading(l, !0), addEvent(s, "load", function() {
            var o = $(n.dropConfirmation(a));
            o.classList.toggle(i.dropConfirmationSuccess), e.close(), t.setLoading(l, !1)
        })
    }

    function r(o) {
        var a = o.$btn;
        t.setLoading(a, !0), ajax.click(a, {
            onDone: function() {
                var o = $(n.dropConfirmation("0"));
                o.classList.toggle(i.dropConfirmationSuccess), e.close(), t.setLoading(a, !1)
            }
        })
    }
}, function() {
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                i = n.length >>> 0;
            if (0 === i) return !1;
            var o = 0 | t,
                a = Math.max(o >= 0 ? o : i - Math.abs(o), 0);

            function r(e, t) { return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t) }
            for (; i > a;) {
                if (r(n[a], e)) return !0;
                a++
            }
            return !1
        }
    })
}, function() {
    var e = s(['\n    <div class="mailHat ', " ", " ", " ", '">\n      <div class="mailHat__left">', '</div>\n      <div class="mailHat__center">', '</div>\n      <div class="mailHat__right">', "</div>\n    </div>\n  "], ['\n    <div class="mailHat ', " ", " ", " ", '">\n      <div class="mailHat__left">', '</div>\n      <div class="mailHat__center">', '</div>\n      <div class="mailHat__right">', "</div>\n    </div>\n  "]),
        t = s(['\n    <div class="', '" ', ">\n      ", "\n      ", "\n    </div>\n  "], ['\n    <div class="', '" ', ">\n      ", "\n      ", "\n    </div>\n  "]),
        n = s(['\n    <div class="mailHat__unreadCount mailHat__unreadCount_length_', '">\n      ', "\n    </div>\n  "], ['\n    <div class="mailHat__unreadCount mailHat__unreadCount_length_', '">\n      ', "\n    </div>\n  "]),
        i = s(['\n    <div class="mailHat__forwardTitle">\n      ', "\n    </div>\n  "], ['\n    <div class="mailHat__forwardTitle">\n      ', "\n    </div>\n  "]),
        o = s(['\n    <div class="mailHat__editingTitle">\n      ', "\n    </div>\n  "], ['\n    <div class="mailHat__editingTitle">\n      ', "\n    </div>\n  "]),
        a = s(['\n    <a class="', '" href="', '">\n      ', '\n      <div class="mailHat__convoBody">\n        <div class="mailHat__convoTitle">', "</div>\n        ", "\n      </div>\n    </a>\n  "], ['\n    <a class="', '" href="', '">\n      ', '\n      <div class="mailHat__convoBody">\n        <div class="mailHat__convoTitle">', "</div>\n        ", "\n      </div>\n    </a>\n  "]),
        r = s(['\n    <div class="mailHat__convoDetails">\n      <div class="mailHat__convoDetailsText">', "</div>\n      ", "\n    </div>\n  "], ['\n    <div class="mailHat__convoDetails">\n      <div class="mailHat__convoDetailsText">', "</div>\n      ", "\n    </div>\n  "]);

    function s(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    Object.assign(window, { MailHat_main: l, MailHat_convo: c, MailHat_getOnlineText: k, MailHat__convoDetails: b, MailHat__unreadCount: _ });

    function l(e) {
        var t = d(),
            n = f(e.folder, e.urls, e.withUnrespond, e.importantCount),
            i = p(e.unreadCount),
            o = m(),
            a = h();
        return u({ type: "main", left: "" + t + o, center: "" + n + a, right: "" + e.notifier + i, forwarding: e.forwarding })
    }

    function c(e) {
        var t = w(),
            n = v(),
            i = y(e),
            o = g();
        return u({ type: "convo", left: "" + t + n, center: "" + i + o, right: C(e.actions), hasPinnedMsg: e.hasPinnedMsg, editing: e.editing })
    }

    function u(t) {
        var n = t.forwarding ? "mailHat_forwarding" : "",
            i = t.hasPinnedMsg ? "mailHat_hasPinnedMsg" : "",
            o = "mailHat_type_" + t.type,
            a = t.editing ? "mailHat_editing" : "";
        return q.html(e, o, n, i, a, t.left, t.center, t.right)
    }

    function d() { return Icon({ mix: "mailHat__burger", icon: "burger", attrs: q.onClick("MailHat_main.onBurgerClick") }) }

    function f(e, t, n, i) { var o = window.lang; return Unfold({ mix: "mailHat__folder", items: [{ name: "all", text: o.mobile_mail_tab_all, active: "all" === e, url: t.all }, n ? { name: "unrespond", text: o.mobile_mail_tab_unrespond, active: "unrespond" === e, url: t.unrespond } : "", { name: "unread", text: o.mobile_mail_tab_unread, active: "unread" === e, url: t.unread }, { name: "important", text: o.mobile_mail_tab_important, active: "important" === e, count: i, url: t.important }] }) }

    function p(e) {
        var n = q["class"]("mailHat__unread", { hasUnread: e > 0 }),
            i = Icon({ mix: "mailHat__unreadIcon", icon: "msg" }),
            o = _(e),
            a = q.onClick("MailHat_main.onUnreadClick");
        return q.html(t, n, a, i, o)
    }

    function _(e) { var t = void 0; return e > 999 ? (e = "999+", t = 4) : t = e > 99 ? 3 : e > 9 ? 2 : 1, q.html(n, t, e) }

    function m() { return Icon({ mix: "mailHat__cancelForward", icon: "back", attrs: q.onMouseDown("MailHat_main.onCancelForwardTap") }) }

    function v() { return Icon({ mix: "mailHat__cancelEditing", icon: "close", attrs: q.onMouseDown("MailHat_convo.onCancelEditingTap") }) }

    function h() { var e = window.lang; return q.html(i, e.mobile_mail_choose_recipient) }

    function g() { var e = window.lang; return q.html(o, e.mobile_mail_message_editing) }

    function w() { return Icon({ mix: "mailHat__back", icon: "back", attrs: q.onMouseDown("MailHat_convo.onBackTap") }) }

    function y(e) {
        var t = q["class"]("mailHat__convo", { mobile: e.mobile }),
            n = Avatar({ mix: "mailHat__convoAvatar", photos: e.photos, size: 36 }),
            i = b(e);
        return q.html(a, t, e.url, n, e.title, i)
    }

    function b(e) {
        var t = window.lang,
            n = e.membersCount,
            i = "",
            o = "";
        if (n > 0) o = e.isVkcomgroup ? langNumeric(n, t.mobile_mail_im_n_vkcomgroup_members) : langNumeric(n, t.mobile_mail_N_members);
        else {
            var a = e.onlinePlatform;
            o = k(e.isOnline, e.offlineText), "vkmobile" === a ? i = Icon({ mix: q["class"]("mailHat__onlineIcon", { platform: "vkmobile" }), icon: "vkmobile", white: !0 }) : "mobile" === a && (i = Icon({ mix: q["class"]("mailHat__onlineIcon", { platform: "mobile" }), icon: "phoneMini" }))
        }
        return q.html(r, o, i)
    }

    function k(e, t) { var n = window.lang; return e ? n.mobile_mail_online : t }

    function C(e) { return Unfold({ mix: "mailHat__actions", icon: "dots", position: "topRight", items: e }) }
}, function() {
    ! function() {
        (browser.ios || browser.ipad) && window.MutationObserver && document.addEventListener("DOMContentLoaded", n)
    }();
    var e = { scrollView: ".ScrollView" },
        t = "_scrollViewHealed";

    function n() {
        i();
        var e = new MutationObserver(i);
        e.observe(document.body, { childList: !0, subtree: !0 })
    }

    function i() { $$(e.scrollView).forEach(o), $$(".sp_body").forEach(o) }

    function o(e) {
        var n = function() { return a(e) };
        if (n(), !e[t]) {
            e[t] = !0;
            var i = getComputedStyle(e),
                o = parseInt(i.paddingTop, 10),
                r = parseInt(i.paddingBottom, 10);
            e.style.paddingTop = o + 1 + "px", e.style.paddingBottom = r + 1 + "px", n();
            var s = void 0;
            e.addEventListener("scroll", function() { s && clearTimeout(s), s = setTimeout(n, 50) })
        }
    }

    function a(e) { 0 === e.scrollTop ? e.scrollTop += 1 : e.scrollTop + e.offsetHeight === e.scrollHeight && (e.scrollTop -= 1) }
}, function() {
    var e = need("Icon");
    Object.assign(e, { toggleActive: n });
    var t = { active: "Icon_active" };

    function n(e) { e.classList.toggle(t.active) }
}, function() {
    var e = window,
        t = e.geBySel1,
        n = e.geByClass1,
        i = e.gpeByClass,
        o = e.each,
        a = e.removeClass,
        r = e.addClass,
        s = e.hasClass,
        l = e.attr,
        c = e.addEvent,
        u = e.removeEvent,
        d = e.ajax,
        f = (e.replace, e.domClosestOverflowHidden),
        p = {
            OPEN_CLASS: "reply_owner_show",
            OPEN_BOTTOM_CLASS: "reply_owner_open_bottom",
            NO_LIMIT_CLASS: "reply_owner_picker_nolimit",
            CONTAINER_CLASS: "reply_owner_picker_container",
            PICKER_CLASS: "reply_owner_picker",
            PICKER_ITEM_CLASS: "reply_owner_option",
            LOADING_CLASS: "reply_owner_loading",
            IMAGE_CLASS: "_reply_owner_image",
            SELECTED_IMAGE_CLASS: "_reply_owner_selected_image",
            SELECTED_IMAGE_CONTAINER_CLASS: "reply_owner_selected_image",
            OPTION_CLASS: "reply_owner_option",
            PICKER_MAX_HEIGHT: null,
            LOADING_SHOW_TIME: 300,
            container: null,
            picker: null,
            clickEvent: "ontouchend" in document.documentElement ? "touchend" : "click",
            clickHandler: null,
            requestHandler: null,
            request: null,
            loading: !1,
            setElements: function(e) { this.container = i(this.CONTAINER_CLASS, e), this.picker = n(this.PICKER_CLASS, this.container), this.clickHandler = this.clickHandler || bind(this.onDocumentClick, this), this.requestHandler = this.requestHandler || bind(this.onDocumentClickBeforeLoad, this) },
            unsetElements: function() { u(document.body, this.clickEvent, this.clickHandler), u(document.body, this.clickEvent, this.requestHandler), this.container = this.picker = null },
            show: function(e) { this.setElements(e), r(this.OPEN_CLASS, this.container), this.calcPosition() },
            hide: function() { a(this.OPEN_CLASS, this.container), a(this.OPEN_BOTTOM_CLASS, this.container), this.unsetElements() },
            toggle: function() { toggleClass(this.OPEN_CLASS, this.container), this.calcPosition(), s(this.OPEN_CLASS, this.container) ? (this.scrollToSelected(), c(document.body, this.clickEvent, this.clickHandler)) : (this.hide(), this.unsetElements()) },
            calcPosition: function() {
                var e = ge("mhead").offsetHeight,
                    t = this.picker.getBoundingClientRect(),
                    n = (window.pageYOffset || document.documentElement.scrollTop, f(this.picker)),
                    i = !0;
                n && n.getBoundingClientRect().bottom < this.container.getBoundingClientRect().bottom + this.PICKER_MAX_HEIGHT ? i = !1 : s(this.LOADING_CLASS, this.container) ? i = t.top - e - this.PICKER_MAX_HEIGHT + t.height < 0 : s(this.OPEN_BOTTOM_CLASS, this.container) || (i = t.top - e < 0), toggleClass(this.OPEN_BOTTOM_CLASS, this.container, i)
            },
            onDocumentClick: function(e) {
                var t = e.target;
                t === this.container || i(this.CONTAINER_CLASS, t) || this.hide()
            },
            onDocumentClickBeforeLoad: function(e) {
                var t = e.target;
                t === this.container || i(this.CONTAINER_CLASS, t) || this.cancelRequest()
            },
            cancelRequest: function() { this.request && (this.request.abort(), this.unsetElements()) },
            getList: function() {
                var e = this;
                if (!this.loading) {
                    this.PICKER_MAX_HEIGHT = parseInt(getStyle(this.picker, "maxHeight"), 10);
                    var n = t('input[name="from_oid"]', this.container).value,
                        i = t('input[name="post_oid"]', this.container).value;
                    this.loading = !0;
                    var o = setTimeout(function() { r(e.LOADING_CLASS, e.container), e.calcPosition() }, this.LOADING_SHOW_TIME);
                    c(document.body, this.clickEvent, this.requestHandler), this.request = d.post("/wall.php", { act: "get_reply_clubs_list", oid: n, post_oid: i }, { onDone: function(t) { clearTimeout(o), e.picker.innerHTML = t, e.onLoadEnd(), e.toggle(e.picker) }, onFail: function() { e.onLoadEnd() } })
                }
            },
            onLoadEnd: function() { this.loading = !1, a(this.LOADING_CLASS, this.container), u(document.body, this.clickEvent, this.requestHandler) },
            onChange: function(e) {
                var t = i(this.OPTION_CLASS, e),
                    a = n(this.IMAGE_CLASS, t).src;
                o(geByClass(this.SELECTED_IMAGE_CLASS), function() { this.src = a }), l(n("al" + this.SELECTED_IMAGE_CLASS), "href", l(t, "data-href")), this.hide()
            },
            onClick: function(e) {
                this.setElements(e);
                var t = geByClass(this.PICKER_ITEM_CLASS, this.picker).length;
                t ? this.toggle() : this.getList()
            },
            scrollToSelected: function() {
                var e = i(this.OPTION_CLASS, t(":checked", this.picker));
                this.PICKER_MAX_HEIGHT || (this.PICKER_MAX_HEIGHT = parseInt(getStyle(this.picker, "maxHeight"), 10)), e && (this.picker.scrollTop = e.offsetTop - this.PICKER_MAX_HEIGHT / 2 + e.offsetHeight / 2)
            }
        };
    window.replyOwnerPicker = p
}, function() {
    var e = n(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "]),
        t = n(['\n    <div class="msg__newMsgsDivider">\n      <span class="msg__newMsgDividerText">', "</span>\n    </div>\n  "], ['\n    <div class="msg__newMsgsDivider">\n      <span class="msg__newMsgDividerText">', "</span>\n    </div>\n  "]);

    function n(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    window.uMsg = i;

    function i(t) {
        var n = t.msgId,
            i = t.withDivider ? o() : "",
            a = store.mail,
            r = a.msgs[n],
            s = a.members[r.authorId],
            l = void 0,
            c = r.peerId,
            u = "";
        return u = c > 2e9 ? s.name : c > -2e9 && 0 > c ? r.authorId === a.cur.userId ? s.firstName : s.name : s.firstName, l = Msg(r.isService ? { id: n, text: r.textFull, service: !0, unread: r.isUnread } : { id: n, text: r.textFull, important: r.isImportant, unread: r.isUnread, authorPhoto: s.avatar, authorName: u, authorUrl: s.url, date: r.date, removed: a.cur.msgRemoved[n], admin: r.adminName ? { name: r.adminName, url: r.adminUrl } : null, edited: r.edited }), q.html(e, i, l)
    }

    function o() { var e = window.lang; return q.html(t, e.mobile_mail_new_msgs) }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });

    function n() {
        var e = [],
            t = o.bind(e);
        return t.off = a.bind(e), t._fns = e, t
    }

    function i() { var e = {}; return function(t) { return e[t] || (e[t] = n()) } }

    function o() {
        var e = this,
            t = arguments,
            n = t[0];
        if ("function" != typeof n) { for (var i = e.length, o = !1, a = 0; i > a; a++) e[a].apply(null, t) === !0 && (o = !0); return o }
        Array.prototype.slice.call(t).forEach(function(t) { return e.push(t) })
    }

    function a(e) {
        var t = this;
        e ? r(t, e) : t.length = 0
    }

    function r(e, t) {
        for (;;) {
            var n = e.indexOf(t);
            if (!(n >= 0)) break;
            e.splice(n, 1)
        }
    }
    n.kind = i, window.befall = n, t["default"] = n
}, function() {
    var e = need("wd");
    window.SettingsRow_select = {},
        function() { SettingsRow_select._onChange = n }();
    var t = { row: ".settingsRow", description: ".settingsRow__description" };

    function n(t, n) { i(n), e.handle(t, n) }

    function i(e) {
        var n = e.$select,
            i = e.label,
            o = n.closest(t.row).$(t.description);
        o.textContent = i
    }
}, function() {
    var e = window,
        t = e.each,
        n = {
            tt: !1,
            handlers: [],
            show: function() { n.shown || (n.tt = Array.prototype.slice.call(arguments)) },
            hide: function() { n.tt && (n.tt = !1) },
            addHandler: function(e) { e && n.handlers.push(e) },
            removeHandler: function(e) { return e ? void t(n.handlers, function(t) { return e === this ? (n.handlers.splice(t, 1), !1) : void 0 }) : void(n.handlers = []) },
            onClose: function() { t(n.handlers, function() { this() }) },
            clear: function() { n.tt && (n.hide(), n.onClose(), n.removeHandler()) },
            closeByTap: function(e) {
                if (!n.tt || !e.target) return !1;
                var t = e.target;
                do
                    for (var i = 0; i < n.tt.length; i++)
                        if (t === n.tt[i]) return !1;
                while (t = t.parentNode);
                return n.hide(), n.onClose(), !0
            }
        };
    window.tooltip = n
}, function(e, t, n) {
    {
        var i = n(40);
        o(i)
    }

    function o(e) { return e && e.__esModule ? e : { "default": e } }
    var a = "tabs_block",
        r = "mhb_back",
        s = "TopMenu_open",
        l = "tab_item_top",
        c = "TopMenu__switcher",
        u = "TopMenu__switcher_on",
        d = function() { return geByClass1(a) },
        f = function() { return geByClass1(r) },
        p = function() { return geByClass1(c) },
        _ = function() { return geByClass1(l) },
        m = !0,
        v = 0;
    window.TopMenu = { onHeaderClick: h };

    function h(e) {
        if (m) {
            var t = d();
            if (stopEvent(e), preventEvent(e), hasClass(s, t)) removeClass(s, t);
            else {
                var n = f(),
                    i = _();
                addClass(s, t), geByClass1("_hfixed") && setStyle(t, "max-height", window.innerHeight - 70), append(t, n), addEvent(window, "touchstart mousedown", w), addEvent(i, "touchstart mousedown", g), addEvent(i, "click", function(e) { stopEvent(e), preventEvent(e) }), cur.destroy.push(y), cur.destroy.push(function() { return removeEvent(i, "touchstart mousedown", g) })
            }
        }
    }

    function g(e) { stopEvent(e), preventEvent(e), v = 300, m && (toggleClass(u, p()), "touchstart" === e.type && setTimeout(function() { nav.go(_(), null) }, 130)) }

    function w(e) { gpeByClass(a, e.target) || gpeByClass(r, e.target) || (stopEvent(e), preventEvent(e), removeClass(s, d()), y()) }

    function y() { removeEvent(window, "touchstart mousedown", w) }! function() { nav.onBeforeGo(function() { m = !1, setTimeout(function() { removeClass(s, d()), v = 0, m = !0 }, v) }) }()
}, function() {
    var e = window,
        t = e.$,
        n = window,
        i = n.page,
        o = window,
        a = o.photoview;
    ! function() { i.onChange(c), a.onHide(c), a.onShow(u) }();
    var r = "#5181b8",
        s = "#000",
        l = t('meta[name="theme-color"]');

    function c() { d(r) }

    function u() { d(s) }

    function d(e) { l.setAttribute("content", e) }
}, function() {
    var e = window,
        t = e.hide,
        n = e.ge,
        i = e.ce,
        o = e.append,
        a = e.geByClass1,
        r = e.val,
        s = e.addClass,
        l = e.show,
        c = e.obj2qs,
        u = e.unescapeAttr,
        d = e.elfocus,
        f = e.lockButton,
        p = e.unlockButton,
        _ = e.extend,
        m = e.scrollToEl,
        v = e.remove,
        h = e.gpeByTag,
        g = e.each,
        w = e.removeClass,
        y = window,
        b = y.geo,
        k = window,
        C = k.ajax,
        M = window,
        S = M.nav,
        E = function() {
            var e = null,
                y = !1,
                k = !1,
                M = {},
                T = [],
                A = 0,
                x = null,
                I = "",
                P = "";

            function B(e, t) { return t ? !1 : U(e) }

            function L(e) {
                k = !1;
                var t = n("medias_map"),
                    c = n("attached_wrap");
                t || (t = i("div", { id: "medias_map", className: "pi_medias" }), o(t, c));
                var u = +e[1] || 0,
                    d = e[3] || "",
                    f = e[4] || "",
                    p = e[5] || "",
                    _ = +e[6].lat || 0,
                    m = +e[6].lng || 0,
                    v = _ + "_" + m,
                    h = a("medias_map", t),
                    g = '<div class="medias_map_close" onclick="checkin.remove();"><i class="i_close">&nbsp;</i></div><div class="medias_map_label" onclick="checkin.changePlace();">' + d + (p ? ", " + p : f ? ", " + f : "") + "</div>",
                    w = '<input type="hidden" name="place_id" value="' + u + '"><input type="hidden" name="place" value="' + v + '">';
                if (h) r(h, g + w);
                else {
                    var g = '<div class="medias_map">' + g + w + "</div>";
                    r(t, g)
                }
                s("cp_geo_btn_sel", "geo_btn"), y = !0, l(t)
            }

            function N() { return U(e) }

            function O(n, i) {
                var o = window,
                    a = o.lang,
                    s = "/places.php" + c({ act: "add_place", latitude: e.latitude, longitude: e.longitude, hash: I });
                r("place_add_box", '<h4 class="sub_header">' + a.mobile_geo_new_place_header + '</h4><div class="form_item fi_fat"><form id="place_add_form" action="' + s + '" method="post"><dl class="fi_row"><dt class="fi_label">' + a.mobile_geo_place_name_label + '</dt><dd class="iwrap"><input type="text" class="textfield" id="place_name_fld" name="title" /></dd></dl><dl class="fi_row"><dt class="fi_label">' + a.mobile_geo_place_address_label + '</dt><dd class="iwrap"><input type="text" class="textfield" id="place_address_fld" name="address" /></dd></dl><dl class="fi_row"><dd><input class="button" type="submit" id="place_add_btn" value="' + a.mobile_geo_place_add_btn + '" onclick="return checkin.addNewPlace(this);" /><a class="near_btn" onclick="checkin.addPlaceCancel(); return false;">' + a.mobile_cancel + "</a></dd></dl></form></div>"), r("place_name_fld", u(n) || ""), r("place_address_fld", u(i) || ""), t("places_box"), l("place_add_box"), d(n ? "place_address_fld" : "place_name_fld")
            }

            function H() { r("place_add_box", ""), t("place_add_box"), l("places_box") }

            function D() {
                var t = r("place_name_fld"),
                    i = r("place_address_fld");
                return t ? (f("place_add_btn"), C.post("/places.php", { _ajax: 1, act: "add_place", latitude: e.latitude, longitude: e.longitude, title: t, address: i, hash: I }, {
                    onDone: function(e, t) {
                        if (p("place_add_btn"), e) {
                            var n = {};
                            n[e] = t, _(M, n), T.splice(T[0] ? 0 : 1, 0, e), H(), j(null, e)
                        }
                    },
                    onFail: function() {
                        p("place_add_btn");
                        var e = Array.prototype.slice.call(arguments),
                            t = e.shift(),
                            i = n("place_add_form");
                        switch (t) {
                            case 2:
                                i && i.submit()
                        }
                    }
                }), !1) : (d("place_name_fld"), !1)
            }

            function j(t, n) {
                R();
                var i = M[n];
                i && (e = { latitude: +i[6].lat || 0, longitude: +i[6].lng || 0 }, n ? L(i) : q(e, i))
            }

            function R(e) {
                if (!x) return !0;
                r("m", x), x = null, m(a("create_post_extra", "mcont"));
                var t = S.path + (S.params ? "?" + S.params : "");
                return S.go(t, null, { push_only: !0, no_push: e }), !1
            }

            function q(e, t) {
                k = !0;
                var o = n("medias_map"),
                    c = n("attached_wrap");
                o || (o = i("div", { id: "medias_map", className: "pi_medias" }), c.appendChild(o));
                var u = e.latitude,
                    d = e.longitude,
                    f = (window.devicePixelRatio >= 1.5 ? 2 : 1, t && t[4] || !1),
                    p = a("medias_map", o),
                    _ = f ? '<div class="medias_map_close" onclick="checkin.remove();"><i class="i_close">&nbsp;</i></div><div class="medias_map_label" onclick="checkin.changePlace();">' + f + "</div>" : "",
                    m = "",
                    v = u + "_" + d + "_0",
                    h = '<input type="hidden" name="map" value="' + v + '">';
                if (p) r(p, _ + m + h);
                else {
                    var g = '<div class="medias_map">' + _ + m + h + "</div>";
                    r(o, g)
                }
                y = !0, s("cp_geo_btn_sel", "geo_btn"), l(o)
            }

            function F() { e = null, M = {}, T = [], A = 0, C.post(P, { _ajax: 1 }), v("medias_map") }

            function U(e) {
                var t = window,
                    n = t.al;
                v("feed_extra_field");
                var a = Math.round(1e8 * e.latitude) / 1e8,
                    r = Math.round(1e8 * e.longitude) / 1e8,
                    s = h("form", "geo_btn"),
                    l = i("input", { id: "feed_extra_field", type: "hidden", name: "add_place", value: a + "," + r });
                if (!s) return S.go(S.path + "?act=places&lat=" + a + "&lng=" + r);
                var c = !1;
                return g(s, function(e, t) { return "submit" === t.type ? (c = t, !1) : void 0 }), c ? (o(l, s), window.al && n.ver ? S.go(c) : s.submit()) : void 0
            }

            function z(t) { t && t.coords && (e = { latitude: +t.coords.latitude || 0, longitude: +t.coords.longitude || 0 }, B(e)) }

            function $() { E.remove(), t("geo_waiting") }
            return { toggle: function() { y ? E.remove() : E.add() }, addNewPlace: D, addPlaceShow: O, addPlaceCancel: H, selectPlace: j, changePlace: N, back: R, refreshCurrentPosition: function() { b.getCurrentPosition(z, $) }, getCurrentAddress: function() { return M[0] && M[0][5] || "" }, savePlaces: function(e) { _(M, e) }, add: function(t) { return !t && y ? N() : void(t && (t.latitude || t.longitude) && t.place ? (e = { latitude: +t.latitude || 0, longitude: +t.longitude || 0 }, t.place[1] ? L(t.place) : q(e, t.place), B(e, !0)) : (b.getCurrentPosition(z, $), l("geo_waiting"))) }, add_place: function(t) { return !t && y ? N() : void(t && (t.latitude || t.longitude) && t.place ? (e = { latitude: +t.latitude || 0, longitude: +t.longitude || 0 }, t.place[1] ? L(t.place) : q(e, t.place), B(e, !0)) : (b.getCurrentPosition(z, $), l("geo_waiting"))) }, remove: function() { y = !1, w("cp_geo_btn_sel", "geo_btn"), F() }, stash: function(t) { return t ? (e = t[0], y = t[1], k = t[2], M = t[3], T = t[4], A = t[5], x = t[6], void 0) : [e, y, k, M, T, A, x] }, init: function(n, i, o) { return t("geo_waiting"), e = null, y = !1, k = !1, M = {}, T = [], A = 0, x = null, I = i || "", P = o || "", n && E.add(n), b.init() } }
        }();
    window.checkin = E
}, , function() {
    Object.assign(q, { list: e });

    function e(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return Array.isArray(e) || (e = [e]), t ? e.map(t).join("") : e.join("") }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = t.StickersAnimation = function() {
        var e = !1,
            t = !1,
            i = {},
            o = {},
            a = {},
            r = void 0,
            s = 500,
            l = {};

        function c(e) {
            if (window.isMVK) {
                var t = document.createElement("script");
                t.onload = function() { e() }, t.src = "/js/cmodules/web/bodymovin.js", document.head.appendChild(t)
            } else stManager.add([jsc("web/bodymovin.js")], function() { e() })
        }

        function u(e) {
            var t = d(e),
                n = 1;
            if (t) {
                hasClass(e, "animation_play") || (hide(geByClass1("sticker_img", e)), addClass(e, "animation_play")), t.play();
                var i = attr(e, "data-loop-count");
                i = parseInt(i), isNaN(i) && (i = 3), -1 !== i && (!t._cbs.loopComplete || t._cbs.loopComplete && 0 === t._cbs.loopComplete.length) && t.addEventListener("loopComplete", function o() {
                    n++;
                    var a = !0;
                    if (i >= n && (a = !1), a) {
                        var r = attr(e, "data-uniq-id");
                        l[r] = 0, "" !== t._cbs.loopComplete && t.removeEventListener("loopComplete", o), t.stop()
                    }
                })
            }
        }

        function d(e) { var t = attr(e, "data-uniq-id"); if (!geByClass1("svg_sticker_animation", e)) return l[t] && (l[t] = 0), !1; var n = o[t]; return n ? n : !1 }

        function f(e, t) {
            var n = d(e);
            if (n) return void("function" == typeof t && t(n));
            var a = attr(e, "data-uniq-id");
            if (!l[a]) {
                l[a] = 1;
                var r = attr(e, "data-animation-path"),
                    s = attr(e, "data-sticker-id"),
                    c = !1;
                if (s && (c = i[s] ? p(e) : r && p(e)), c) {
                    var u = { container: e, renderer: "svg", loop: !0, autoplay: !1, name: a, rendererSettings: { scaleMode: "noScale", progressiveLoad: !0, hideOnTransparent: !0, className: "svg_sticker_animation" } };
                    i[s] ? u.animationData = i[s] : u.path = r;
                    var f = geByClass1("svg_sticker_animation", e);
                    if (f && re(f), n = bodymovin.loadAnimation(u), !i[s]) return void n.addEventListener("data_ready", function() { i[s] = n.animationData, o[a] = n, "function" == typeof t && t(n) })
                }
                "function" == typeof t && (o[a] = n, "function" == typeof t && t(n))
            }
        }
        return {
            checkSettingsAndLoadInWeb: function(e) {
                if (StickersSettings.getAutoplay()) {
                    var t = ge("fc_msg" + e),
                        i = geByClass1("sticker_animation", t);
                    n.loadAndPlaySticker(i)
                }
            },
            checkSettingsAndLoad: function(e, t, i) { StickersSettings.getAutoplay() && (i ? n.loadStickerInMvkIMAndPlay(e, t) : (e.textFull || e.text).indexOf("sticker_animation", 0) && n.loadStickerInMvkIMAndPlay(e.id, t)) },
            loadStickerInMvkIMAndPlay: function(e, t) {
                var i = "_msg" + e;
                t && (i = "msg_id_" + e);
                var o = geByClass1("sticker_animation", geByClass1(i));
                n.loadAndPlayStickerWithTimer(o, 500)
            },
            loadAutoplayAnimationStickers: function(i) {
                if ("undefined" == typeof bodymovin) return void c(function() { n.loadAutoplayAnimationStickers() });
                if (i) {
                    if (t) return;
                    t = !0
                }
                if (!e) {
                    e = !0;
                    var o = geByClass("sticker_animation_autoplay");
                    o && each(o, function(e, t) { f(t, function() { u(t) }) }), e = !1
                }
            },
            loadAndPlaySticker: function(e) { return e ? "undefined" == typeof bodymovin ? (c(function() { n.loadAndPlaySticker(e) }), "") : void f(e, function() { u(e) }) : void 0 },
            loadAndPlayStickerWithTimer: function(e, t) {
                if (e && !a[e]) {
                    t || (t = 1e3);
                    var i = ge(e);
                    hasClass(i, "sticker_animation_disabled_timer") || (a[e] = setTimeout(function() {
                        (i || (i = ge(e), !hasClass(i, "sticker_animation_disabled_timer"))) && (n.loadAndPlaySticker(i), clearTimeout(a[e]), a[e] = !1)
                    }, t))
                }
            },
            reloadStickers: function() { o = {} },
            touchStartSticker: function(e) { window.oncontextmenu || (window.oncontextmenu = function(e) { return e.preventDefault(), e.stopPropagation(), window.oncontextmenu = null, !1 }), r = setTimeout(function() { n.loadAndPlaySticker(e) }, s) },
            touchEndSticker: function() { r && clearTimeout(r) }
        };

        function p(e) {
            var t = e.getBoundingClientRect().top,
                n = e.getBoundingClientRect().bottom,
                i = t < window.innerHeight && n >= 0;
            return i && isVisible(e)
        }
    }()
}, function() {
    ! function() {
        window.wd = { html: o, wrap: i, handle: a };
        var e = ["tag", "inner", "attrs", "innerHTML", "outerHTML"],
            t = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"],
            n = ["abort", "auxclick", "beforecopy", "beforecut", "beforepaste", "blur", "cancel", "canplay", "canplaythrough", "change", "click", "close", "contextmenu", "copy", "cuechange", "cut", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "error", "focus", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadeddata", "loadedmetadata", "loadstart", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "paste", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointermove", "pointerout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "search", "seeked", "seeking", "select", "selectstart", "stalled", "submit", "suspend", "timeupdate", "toggle", "touchcancel", "touchend", "touchmove", "touchstart", "volumechange", "waiting", "wheel"].map(function(e) { return "on" + e });

        function i(e) { return e ? { __raw__: e } : null }

        function o(e) {
            if (g(e)) return e ? { __raw__: e } : null;
            if (!y(e)) throw "Invalid input, object is expected";
            if ("outerHTML" in e) { var t = e.outerHTML; if (g(t)) return t; if (h(t)) return t.toString(); if (t) throw "Invalid outerHTML"; return "" }
            var n = r(e),
                i = s(e),
                o = l(e);
            return _(n) ? "<" + n + o + " />" : "<" + n + o + ">" + i + "</" + n + ">"
        }

        function a() {
            var e = C(arguments[0]),
                t = Array.prototype.slice.call(arguments, 1),
                n = e[0];
            if (n) { g(n) || console.warn('Invalid handler "' + n + '"'); var i = T(window, n); return b(i) ? void i.apply(null, e.slice(1).concat(t)) : void console.warn("`" + n + "` is not a function") }
        }

        function r(e) { if ("tag" in e) { var t = e.tag; if (g(t) && /^[\w-]+$/.test(t)) return t; throw "Invalid tag name" } return k(e.href) ? "a" : "div" }

        function s(e) { if ("innerHTML" in e) { var t = e.innerHTML; if (g(t)) return t; if (h(t)) return t.toString(); if (t) throw "Invalid innerHTML"; return "" } return "inner" in e ? S(e.inner).map(c).join("") : "" }

        function l(e) {
            var t = "";
            e.attrs && Object.assign(e, e.attrs);
            for (var n in e)
                if (!p(n)) {
                    var i = e[n];
                    "class" === n ? i = u(i) : m(n) && (w(i) || v(i)) && (i = d(i));
                    var o = M(n);
                    i === !0 ? t += " " + o : h(i) ? t += " " + o + '="' + i + '"' : g(i) ? t += " " + o + '="' + M(i) + '"' : i && (i = i.__raw__ ? i.__raw__ : M(JSON.stringify(i)), t += " " + o + '="' + i + '"')
                }
            return t
        }

        function c(e) { return h(e) ? e.toString() : g(e) ? M(e) : y(e) ? e.__raw__ ? e.__raw__ : o(e) : "" }

        function u(e) { return S(e).filter(k).join(" ").trim().replace(/\s+/g, " ") }

        function d(e) { if (e = C(e), !e.length) return null; var t = e[0]; if (!g(t)) throw "Invalid handler"; var n = e.slice(1).map(f).join(", "); return t + "(" + n + ")" }

        function f(e) { return h(e) || "this" === e || "event" === e ? e : JSON.stringify(e) }

        function p(t) { return e.includes(t) }

        function _(e) { return t.includes(e.toLowerCase()) }

        function m(e) { return n.includes(e.toLowerCase()) }

        function v(e) { return g(e) && /^[\w.]+$/.test(e) }

        function h(e) { return "number" == typeof e && !isNaN(e) }

        function g(e) { return "string" == typeof e }

        function w(e) { return Array.isArray(e) }

        function y(e) { return "[object Object]" === Object.prototype.toString.call(e) }

        function b(e) { return "[object Function]" === Object.prototype.toString.call(e) }

        function k(e) { return g(e) && e }

        function C(e) { return w(e) ? e : [e] }

        function M(e) { return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39").replace(/</g, "&lt;").replace(/>/g, "&gt;") }

        function S(e) { return w(e) ? E(e) : [e] }

        function E(e) { var t = []; return e.forEach(function(e) { w(e) ? t = t.concat(E(e)) : t.push(e) }), t }

        function T(e, t) {
            for (var n = t.split("."), i = n.length, o = e, a = 0; i > a; a++) try { o = o[n[a]] } catch (r) { return void 0 }
            return o
        }
    }()
}, function(e, t, n) {
    var i = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    o = !1,
                    a = void 0;
                try { for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0); } catch (l) { o = !0, a = l } finally { try {!i && s["return"] && s["return"]() } finally { if (o) throw a } }
                return n
            }
            return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
        }(),
        o = n(188),
        a = r(o);

    function r(e) { return e && e.__esModule ? e : { "default": e } }
    var s = window,
        l = s.registeredEvents,
        c = s.removeEvent,
        u = ["touchstart", "touchend", "touchmove", "touchcancel"];
    a["default"].onIframeReady(function(e) {
        var t = e.is_api;
        t && l.forEach(function(e) {
            var t = i(e, 3),
                n = t[0],
                o = t[1],
                a = t[2];
            u.indexOf(o) >= 0 && c(n, o, a)
        })
    })
}, function() {
    var e = need("$"),
        t = need("befall"),
        n = window,
        i = n.se,
        o = n.each,
        a = n.remove,
        r = n.ajx2q,
        s = n.isArray,
        l = n.geByTag,
        c = n.checkElementNav,
        u = n.isHttpHref,
        d = n.attr,
        f = n.getHref,
        p = n.extend,
        _ = n.ge,
        m = n.geByClass1,
        v = n.obj2qs,
        h = n.unlockButton,
        g = n.scrollToHash,
        w = n.lockButton,
        y = (n.tag, n.addEvent, n.val),
        b = n.alLoadingFix,
        k = n.scrollTop,
        C = n.removeClass,
        M = n.addClass,
        S = n.clone,
        E = n.gpeByClass,
        T = n.outer,
        A = n.gpeByTag,
        x = n.geByTag1,
        I = n.getCh,
        P = n.hasClass,
        B = n.stripTags,
        L = n.langNumeric,
        N = n.clog,
        O = n.before,
        H = n.ce,
        D = n.append,
        j = n.escapeAttr,
        R = n.geByClass,
        q = n.htsc,
        F = n.getY,
        U = n.getCw,
        z = n.qs2obj,
        $ = n.parseJSON,
        V = n.setNotify,
        W = n.setDocumentDomain,
        X = n.createIframe,
        Y = n.getW,
        G = n.escapeStr,
        K = n.geBySel1,
        Q = window,
        J = Q.browser,
        Z = {
            onBeforeRedirect: t("url"),
            onBeforePageParse: t(),
            onRedirect: i(),
            _tStart: !1,
            _tAlStart: !1,
            RESPONSE_CAPTCHA: 2,
            _init: function() {
                try { new XMLHttpRequest && (Z._req = function() { return new XMLHttpRequest }) } catch (e) {
                    var t = window,
                        n = t.ActiveXObject;
                    try { new n("Msxml2.XMLHTTP") && (Z._req = function() { return new n("Msxml2.XMLHTTP") }) } catch (e) { try { new n("Microsoft.XMLHTTP") && (Z._req = function() { return new n("Microsoft.XMLHTTP") }) } catch (e) { Z._req = !1 } }
                }
            },
            _getreq: function() { return Z._req || Z._init(), Z._req() },
            _al_reqs: [],
            _last_req: null,
            save_req: function(e) { Z._al_reqs.push(e || Z._last_req) },
            abort_reqs: function() { o(Z._al_reqs, function(e, t) { t.readyState < 4 && t.abort() }), Z._al_reqs = [] },
            _failed_relogin: !1,
            _failed_reqs: [],
            save_failed_req: function(e, t, n, i) { Z._failed_reqs.push([e, t, n, i]) },
            repeat_reqs: function() {
                o(Z._failed_reqs, function() {
                    var e = this.shift(),
                        t = this;
                    Z._post.apply(null, t), a(e)
                }), Z._failed_reqs = []
            },
            plainpost: function(e, t, n, i, o, a, s, l) {
                var c = Z._last_req = Z._getreq(),
                    u = "string" != typeof t ? r(t) : t;
                c.onreadystatechange = function() { 4 == c.readyState && (c.status >= 200 && c.status < 300 ? n && n(c.responseText, c) : i && i(c.responseText, c)) };
                try { c.open("POST", e, !0) } catch (d) { return !1 }
                return c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o || l || c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c.send(u), c
            },
            post: function(e, t, n) { return "/" != e.substr(0, 1) && (e = "/" + e), e = e.split("#")[0], Z._post(e, t, n || {}) },
            onPrepared: i(),
            prepare_click: function(e) {
                var t = window,
                    n = t.al;
                if (J.ios && !(J.ios >= 7) && window.al && n.ver) {
                    var i = [],
                        o = !1;
                    e && "a" == (e.tagName || "").toLowerCase() ? i.push(e) : s(e) ? i = e : (i = l("a", e), o = !0);
                    for (var a = 0, r = i.length; r > a; a++) {
                        var p = i[a],
                            _ = p && p.target || "";
                        if (p && p.getAttribute && (!o || !p.getAttribute("data-href") && c(p, { skip_onclick: !0 }) && "_blank" != _)) {
                            var m = p.getAttribute("href");
                            if (null == m || !u(m)) continue;
                            d(p, "data-href", f(p)), d(p, "href", !1)
                        }
                    }
                }
            },
            click: function(e, t, n) {
                var i = window,
                    a = i.nav;
                t = t || {};
                var r, s = !1,
                    l = { _ajax: 1 },
                    c = p(t, { link: e });
                if (n = n || {}, t.onStart) {
                    var u = Z.tAlGetParam();
                    Z.tAlStart = (new Date).getTime(), u && (l._talstat = u)
                }
                if (n.use_cache) {
                    var d = _(n.use_cache === !0 ? "preload_data" : n.use_cache),
                        f = d.innerHTML.replace(/(^<!--|-->$)/g, ""),
                        y = f.split("--><!--");
                    if (f) {
                        d.innerHTML = "", t.onStart && t.onStart.apply(c), n.nav && a.go(s, null, { push_only: !0 }), t.onDone && t.onDone.apply(c, y);
                        var e = m("show_more", m("pcont", "mcont"));
                        e && Z.click(e, {
                            onDone: function() {
                                var e = "";
                                o(arguments, function(t, n) { e += "<!--" + (n || "") + "-->" }), d.innerHTML = e, _("show_more_loading") && Z.click(!1, t, n)
                            }
                        })
                    } else t.onStart && t.onStart.apply(c), n.nav && a.go(s, null, { push_only: !0 });
                    return !1
                }
                if (!e) return !0;
                if (e.form) {
                    if (e.disabled) return !0;
                    var b = e.form,
                        k = {};
                    s = (b.action || "").replace(/^https?:\/\/[^\/]+/i, ""), o(b, function(t, n) { return !n.name || n.disabled ? !0 : ("radio" !== n.type || n.checked) && ("checkbox" !== n.type || n.checked) ? "button" === n.type ? !0 : "submit" === n.type && n !== e ? !0 : "image" === n.type && n !== e ? !0 : void(k[n.name] = n.value) : !0 }), "image" == e.type && (k[e.name] = e.value, k[e.name + ".x"] = 1, k[e.name + ".y"] = 1), b.method && "get" != b.method ? p(l, k) : s = s.split("?", 1).shift() + v(k)
                } else e.getAttribute && (s = e.getAttribute("data-href") || e.getAttribute("href"));
                if (s || (s = e.pathname ? e.pathname + e.search + e.hash : e), !s) return !0;
                p(l, n.url_params || {});
                var C = window,
                    M = C.pStats,
                    S = M.getSeenData();
                if (S) {
                    var E = window,
                        T = E.cur;
                    l._pstat = S.data, T && T.module && (l._pstatref = T.module)
                }
                return r = Z.post(s, l, { onDone: function() { S && M.onSend(S.seen), n.lock && h(e), t.onDone && t.onDone.apply(c, arguments), (n.nav || n.scroll) && g() }, onFail: function() { n.lock && h(e), t.onFail && t.onFail.apply(c, arguments), (n.nav || n.scroll) && g() } }), r && (t.onStart && t.onStart.apply(c), n.nav && a.go(s, null, { push_only: !0 }), n.lock && w(e)), !r
            },
            prepare_nav: function(e) { return },
            nav: function et(t, n) {
                var i = window,
                    et = i.nav,
                    r = window,
                    s = r.page,
                    l = window,
                    c = l.menu,
                    u = window,
                    h = u.cur;
                n = n || {}, n.nav = n.nav || {};
                var w, $, V = f(t),
                    W = s.getHash(n.nav);
                if (!(V = et.checkUrl(V))) return !1;
                "/" != V.substr(0, 1) && (V = "/" + V), c.close(null, !0);
                var X = Z.tGetParam();
                if (Z.tStart = (new Date).getTime(), n.need_restore && c && c.closeSearch(), window.isNewMail && (n.need_restore && n.nav.push && Z.abort_reqs(), et.onBeforeGo2(n.nav.path, z(n.nav.params), n.nav.push, n))) return Z.abort_reqs(), !0;
                if (n.need_restore && n.nav.push && ($ = s.restore(W))) return Z.abort_reqs(), $.lm && p($.lm, { tn: !1, bn: !1 }), s.set(W, $), n.zProcess && (n.zProcess($.st), delete n.zProcess), et.set(n), Z.tModule = window.cur.module, Z.tRestoreRender = (new Date).getTime(), !0;
                var Y = !1,
                    G = !1;
                if (n.fast) Y = !0, s.set(W, !1, { before: !0, beforeAppend: n.beforeAppend, afterAppend: n.afterAppend }), G = n.onAfterFast || !1;
                else if (n.target && n.target.className) {
                    var w = /(?:^|\s)(al_([a-z_]+)(-?[0-9]+)?)(?:\s|$)/i.exec(n.target.className),
                        K = w && w[1] || !1,
                        Q = w && w[2] || !1;
                    switch (Q) {
                        case "menu":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(t) {
                                    if (window.isNewHeader) {
                                        var i = e(".vk__page");
                                        i.className = i.className.replace("vk__page_notifications", "")
                                    }
                                    if (window.isNewMail) {
                                        var o = m("mcont", t) || m("layout__basis");
                                        y(o, '<div class="pcont bl_cont"><div id="al_loading"></div></div>')
                                    } else y(m("mcont", t), '<div class="pcont bl_cont"><div id="al_loading"></div></div>');
                                    s.setMhead(t, d(n.target, "data-header"), "/")
                                },
                                afterAppend: function() { b(), k(0) }
                            });
                            break;
                        case "tab":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    y(m("upanel", e), '<div id="al_loading"></div>'), y(m("basisDefault", e), '<div id="al_loading"></div>');
                                    var t = m("tabs_block", e) || m("tabs", e),
                                        n = m("active", t);
                                    n && (P("tab_item_top", n) ? (C("tab_item_cur", m("tab_item_cur", t)), M("tab_item_cur", m("tab_item", t))) : (C("tab_item_cur", m("tab_item_cur", t)), M("tab_item_cur", n)))
                                },
                                afterAppend: function() { b() }
                            }, n);
                            break;
                        case "post":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    function t(e, t, n, i, o, a, r, s) { return '<div class="pcont bl_cont"><div class="owner_panel">' + (t || "") + '<div class="op_cont">' + (n || "") + '<div class="op_info"><span class="item_date">' + (i || "") + '</span></div></div></div><div id="' + (e || "") + '" class="post_item single_post_item"><div class="pi_cont"><div class="pi_head">' + (o || "") + '</div><div class="pi_body">' + (a || "") + "</div></div>" + (s || "") + "</div>" + (r || "") + "</div>" }
                                    var i = window,
                                        o = i.lang,
                                        r = S(E("post_item", n.target)),
                                        l = r.id,
                                        c = T(A("a", m("pi_img", r))).replace("pi_img", "op_img"),
                                        u = A("div", m("pi_author", r)),
                                        f = a(m("pi_date", r)),
                                        p = T(a(m("explain", u))),
                                        _ = a(m("pi_fronly", r)),
                                        v = T(u),
                                        h = m("pi_body", r),
                                        g = m("pi_text_more", h),
                                        f = m("pi_date", r),
                                        w = m("pi_info", h),
                                        b = m("pi_links", h),
                                        k = m("replies_link", b),
                                        C = y(a(m("pi_actions_wrap", r))),
                                        M = y(a(m("item_replies", w))),
                                        x = M ? y(k) : o.mobile_wall_post_replies_title,
                                        I = k ? '<a name="comments"></a><h4 class="slim_header">' + (x || "") + '</h4><div id="al_loading"></div>' : "";
                                    if (g) {
                                        var P = g.nextSibling ? g : g.parentNode;
                                        P.nextSibling.style.display = "inline", P.style.display = "none"
                                    }
                                    y(b, T(m("like_wrap", h))), f && d(f, "data-date") && y(f, d(f, "data-date")), s.setMhead(e, d(n.target, "data-header"), !0), y(m("mcont", e), t(l, c, v, y(f) + (_ ? '<b class="pi_fronly"></b>' : ""), p, y(h), I, C))
                                },
                                afterAppend: function(e) {
                                    var t = x("h4", e);
                                    t && b(n.nav.hash ? I() - t.offsetHeight : 0), n.nav.hash ? g(n.nav.hash) : k(0)
                                }
                            }, n);
                            break;
                        case "wall":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    function t(e, t, n) { return '<div class="pcont"><div class="wall_item single_wall_item" id="' + (e || "") + '">' + (t || "") + "</div>" + (n || "") + "</div>" }
                                    var i = window,
                                        o = i.lang,
                                        r = S(P("wall_item", n.target) ? n.target : E("wall_item", n.target)),
                                        l = r.id,
                                        c = m("wi_body", r),
                                        u = m("wi_buttons", r),
                                        f = m("item_like", u),
                                        p = m("v_like", f),
                                        _ = m("item_share", u),
                                        v = m("v_share", _),
                                        h = a(m("item_replies", u)),
                                        g = h ? m("v_replies", h) : !1,
                                        w = +B(y(g)).replace(/\D/g, ""),
                                        b = m("pi_text_more", c),
                                        k = m("wi_date", r),
                                        C = w ? L(w, o.mobile_wall_post_comments) : o.mobile_wall_post_replies_title,
                                        M = h && 50 > w ? '<a name="comments"></a><h4 class="slim_header">' + (C || "") + '</h4><div id="al_loading"></div>' : "";
                                    if (N("item_replies", h), a(m("wi_actions_btn", r)), a(m("post__subscribeBtn", r)), a(m("post__extraHeader", r)), p ? y(p) : D(H("span", { className: "v_like" }), f), v ? y(v) : D(H("span", { className: "v_share" }), _), b) {
                                        var T = b.nextSibling ? b : b.parentNode;
                                        T.nextSibling.style.display = "inline", T.style.display = "none"
                                    }
                                    k && d(k, "data-date") && y(k, d(k, "data-date")), s.setMhead(e, d(n.target, "data-header"), !0), y(m("mcont", e), t(l, y(r), M))
                                },
                                afterAppend: function(e) {
                                    var t = x("h4", e);
                                    t && b(n.nav.hash ? I() - t.offsetHeight : 0), n.nav.hash ? g(n.nav.hash) : k(0)
                                }
                            }, n);
                            break;
                        case "pinfo":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    var t = window,
                                        n = t.lang,
                                        i = m("owner_panel", e),
                                        a = m("pp_img", i),
                                        r = m("op_header", i),
                                        l = m("lvi", r),
                                        c = m("pp_last_activity", i),
                                        u = H("div");
                                    M("mhi_back", m("mh_header", e)), y(i, '<img src="' + j(d(a, "src") || "") + '" class="op_img"><div class="op_cont"><h2 class="op_header">' + B(y(r)) + '</h2><div class="pp_online">' + (l ? n.mobile_online : y(c)) + "</div></div>"), o(R("_pinfo", e), function(e, t) { u.appendChild(t) }), y(m("ipanel", e), "<div>" + y(u) + '</div><div id="al_loading"></div>'), s.setMhead(e, !1, !0)
                                },
                                afterAppend: function() { b(), k(0, 10) }
                            }, n);
                            break;
                        case "player":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    var t = window,
                                        n = t.lang,
                                        i = window,
                                        o = i.audio,
                                        a = o.playlist(),
                                        r = o.playlist_q(),
                                        l = a[0] || {},
                                        c = (l.id || "").split("_").slice(2).join("_") || "",
                                        u = "";
                                    s.setMhead(e, n.mobile_menu_player_head_title, !0), y(m("mcont", e), '\n                <div class="pcont audioPage">\n                  <div class="audioPage__header">\n                    ' + AudioPlaylist.tplPlayerSearch(c) + '\n                  </div>\n                  <div id="au_search_items" class="upanel bl_cont">\n                    <div class="audios_block audios_list _si_container" data-query="' + j(r) + '">' + u + "</div>\n                  </div>\n                </div>"), y("m", e.innerHTML)
                                }
                            }, n), G = function() {
                                var e = window,
                                    t = e.qsearch,
                                    n = window,
                                    i = n.audio,
                                    a = i.playlist(),
                                    r = a[0] || {},
                                    s = (r.id || "").split("_").slice(2).join("_") || "",
                                    l = "/audio" + v({ act: "player", list: s }),
                                    c = [],
                                    u = {};
                                o(a, function(e, t) {
                                    c.push(t.id);
                                    var n = !1;
                                    u[t.id] = [t.artist + " " + t.title, t.id, t.src, t.artist, t.title, t.dur, t.can_add, n, t.cover_style, t.is_disabled, t.mix]
                                }), t.init({
                                    action: l,
                                    al_action: l,
                                    container: _("au_search_items"),
                                    field: _("au_search_field"),
                                    btn: _("au_search_btn"),
                                    top_items: c,
                                    _cache: u,
                                    tpl: function(e, t, n, o) { return t ? o ? o : "" == o ? '<div class="audios_block audios_list _si_container" data-query="' + j(t) + '">' + e + "</div>" : '<div class="audios_block audios_list _si_container" data-query="' + j(t) + '"><div class="al_loading qs_loading">&nbsp;</div></div>' : '<div class="audios_block audios_list _si_container" data-query="' + j(i.playlist_q()) + '">' + e + "</div>" },
                                    item_tpl: function(e, t, n, i, o, a, r, s, l, c) {
                                        var u = window,
                                            d = u.audioplayer;
                                        return d && d.getDOMFromAudio({ id: e, src: t, dur: o, artist: this.highlight(n), title: this.highlight(i), can_add: a, can_del: r, cover_style: s, is_disabled: l, mix: c }, !0, this.q) || ""
                                    },
                                    null_tpl: function(e) {
                                        var t = window,
                                            n = t.lang;
                                        return '<div class="service_msg_box"><div class="service_msg service_msg_null">' + (e ? n.mobile_audio_search_not_found.replace("%s", q(e)) : n.mobile_audio_no_audio) + "</div></div>"
                                    },
                                    soft_filter: !0,
                                    need_invalid_keys: J.desktop,
                                    top_len: 50,
                                    global_search: !0,
                                    onRendered: function() {
                                        var e = window,
                                            t = e.audioplayer;
                                        t && t.initAudio()
                                    },
                                    al_need: !0,
                                    init_offset: 0
                                });
                                var d = i.getCurrentId(),
                                    f = _("audio" + d);
                                if (f) {
                                    var p = F(f) + f.offsetHeight / 2 - I() / 2;
                                    k(p)
                                }
                            };
                            break;
                        case "photo":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    function t(e, t, n) { return '<div class="pcont bl_cont"><div class="media_view photo_view"><div class="pv_summary">&nbsp;<div class="summary_loading" style="float:left;"><i class="i_loading"></i></div></div><div class="pv_body"><div class="thumb_item" style="' + (t || "") + '"><img src="' + e + '" class="ph_img" alt="" style="' + (n || "") + '" /></div></div><div id="al_fill"></div></div></div>' }
                                    var i = x("img", n.target),
                                        a = i && i.src || "/images/mobile/blank.gif",
                                        r = "",
                                        l = "",
                                        c = (d(i, "data-src_big") || "").split("|"),
                                        u = c[0],
                                        f = +c[1] || 0,
                                        p = +c[2] || 0,
                                        _ = !0;
                                    if (f && p || (f = i && i.width || 0, p = i && i.height || 0, _ = !1), u) {
                                        if (f && p) {
                                            var v = Math.min(604, U()),
                                                h = v / f,
                                                g = Math.min(604, Math.ceil(h >= 1 && _ ? p : p * h));
                                            r += "height:" + g + "px;"
                                        }
                                        r += "background:url(" + a + ") #f7f7f7 no-repeat center top;", g > 100 && o(["-moz-", "-o-", "-webkit-", ""], function(e, t) { r += t + "background-size:contain;" }), a = u
                                    } else l += "width:100%;";
                                    s.setMhead(e, d(n.target, "data-header"), !0), y(m("mcont", e), t(a, r, l))
                                },
                                afterAppend: function() { b(0, "al_fill"), k(0) }
                            }, n);
                            break;
                        case "u":
                        case "g":
                        case "p":
                        case "e":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    function t(e, t) { return "g" === Q || "p" === Q || "e" === Q ? '<div class="al_loading"></div>' : '<div class="pcont fit_box"><div class="owner_panel profile_panel"><img src="' + (e || "") + '" class="pp_img" /><div class="pp_cont"><h2 class="op_header">' + (t || "") + '</h2></div></div><div id="al_loading"></div>' }
                                    var i, o = window,
                                        a = o.lang,
                                        r = K.substr(2),
                                        l = m(r, e, "a") || m(r, e, "span"),
                                        c = B(d(n.target, "data-name") || d(l, "data-name") || y(l) || ""),
                                        u = l && l.parentNode && m("lvi", l.parentNode),
                                        f = T(u),
                                        p = m(r, e, "img"),
                                        _ = p && p.src || d(n.target, "data-photo") || "/images/mobile/blank.gif";
                                    "u" == Q ? i = c.split(" ").shift() : "g" == Q ? i = a.mobile_group_head_title : "p" == Q ? i = a.mobile_public_head_title : "e" == Q && (i = a.mobile_event_head_title), s.setMhead(e, i, "/"), y(m("mcont", e), t(_, c, f))
                                },
                                afterAppend: function() { b(), k(0) }
                            }, n);
                            break;
                        case "playlists":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    var t = R("audioPlaylists__item", e),
                                        i = "";
                                    t && o(t, function(e, t) { i += AudioPlaylist.tplSearchListItem({ href: d(m("audioPlaylists__itemLink", t), "href"), thumb_style: d(m("audioPlaylists__itemCover", t), "style"), grid_covers: y(m("audioPlaylists__itemCover", t)), title: y(m("audioPlaylists__itemTitle", t)), author_name: y(m("audioPlaylists__itemAuthor", t)), short_stats: y(m("audioPlaylists__itemStats", t)) }, !0) });
                                    var a = AudioPlaylist.tplPlayerSearch("", !0),
                                        r = AudioPlaylist.tplPlaylistsPage(i, a);
                                    y(m("mcont", e), '<div class="pcont bl_cont">' + r + "</div>"), s.setMhead(e, d(n.target, "data-header"), "/"), k(0)
                                }
                            });
                            break;
                        case "empty":
                        case "playlist":
                            Y = !0, s.set(W, !1, { before: !0, beforeAppend: function(e) { y(m("mcont", e), '<div class="pcont bl_cont"><div id="al_loading"></div></div>'), s.setMhead(e, d(n.target, "data-header"), "/") }, afterAppend: function() { b(), k(0) } });
                            break;
                        case "news_subsection":
                            Y = !0, s.set(W, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    var t = m("news_subsections", e);
                                    t && !P("summary_loading", t.firstChild) && O(H("div", { className: "summary_loading", innerHTML: '<i class="i_loading"></i>' }), t.firstChild)
                                }
                            });
                        default:
                            var tt = window,
                                h = tt.cur;
                            h.al_fast && h.al_fast[Q] && (Y = !0, s.set(W, !1, h.al_fast[Q](n), n))
                    }
                }
                if (Z.abort_reqs(), n.local) {
                    var nt = !0;
                    s.set(W, {}, { after: !0, no_scroll: !0, force: !0 }, !1), G && G()
                } else {
                    var it = z(n.nav.params);
                    p(it, n.params || {}), window.al && window.al.menu || (it._nlm = 1), X && (it._tstat = X);
                    var ot = window,
                        at = ot.pStats,
                        rt = at.getSeenData();
                    rt && (it._pstat = rt.data, h && h.module && (it._pstatref = h.module)), it._ref || (it._ref = (et.path || "").substr(1));
                    var nt = Z.post(V, it, {
                        onPageDone: function(e, t, i, o, a) {
                            var r = window,
                                l = r.cur;
                            rt && at.onSend(rt.seen), Z.tProcess = (new Date).getTime(), s.set(W, { title: e, html: t, js: i, lm: o, bc: a, st: n.st || 0 }, { after: Y, no_scroll: Y }, Y ? !1 : n), Z.tModule = l.module, Z.tRender = (new Date).getTime()
                        }
                    });
                    Z.save_req()
                }
                return Y && (n.zProcess && (n.zProcess(), delete n.zProcess), et.set(n), Z.tModule = h.module, Z.tFastRender = (new Date).getTime()), nt
            },
            confirm: function(e) {
                function t() { return e.apply(this, arguments) }
                return t.toString = function() { return e.toString() }, t
            }(function(e, t, n, i) { return confirm(t) ? Z.click(e, i, { url_params: { hash: n } }) : !1 }),
            _post: function(e, t, n) {
                var i = function(e, t) { n.onFail && n.onFail.call(window, 0, e, t) },
                    o = function(o) {
                        var a = !1;
                        try { a = $(o) } catch (r) { a = !1 }
                        a === !1 ? i() : Z.parseResponse(a, e, t, n)
                    };
                return Z.plainpost(e, t, o, i)
            },
            parseResponse: function(e, t, n, i) {
                var o = window,
                    a = o.al,
                    r = window,
                    l = r.nav,
                    c = window,
                    u = c.menu,
                    d = window,
                    f = d.page,
                    p = e.shift(),
                    _ = e.shift(),
                    m = e.shift(),
                    v = t.indexOf("community") >= 0,
                    h = v ? window.al && p > a.ver : window.al && p > a.ver || (window.menu ? !u.refreshCounters(_) : !1);
                switch (_ === !1 || v || V(_[2]), m) {
                    case 0:
                        if (h) return l.hard_go(l.cur, null, { replace: !0 });
                        var g = e.shift();
                        i && i.onDone && (s(e) ? i.onDone.apply(window, g) : i.onDone.call(window, g));
                        break;
                    case 1:
                        Z.onRedirect(!0, e[0]);
                        var w = e.shift(),
                            y = e.shift(),
                            b = e.shift();
                        if (window.isNewMail && Z.onBeforeRedirect(w)) break;
                        if (h || y) l.hard_go(w);
                        else if (b) {
                            W();
                            var k = w + (-1 == w.indexOf("?") ? "?" : "&") + "__extra=1",
                                C = X({ src: k })
                        } else l.go(w, null, { ignore_cur_process: !0 });
                        break;
                    case Z.RESPONSE_CAPTCHA:
                        var w = e.shift();
                        i && i.onFail ? (e.unshift(w), e.unshift(m), i.onFail.apply(window, e)) : l.hard_go(w);
                        break;
                    case 3:
                        f.need_hard_go = h;
                        var M = e[3];
                        if (M && M.rdr && window.al && a.menu && Y("vk_wrap") >= 614) { l.go(M.rdr, null, { replace: !0 }); break }
                        i = i || {}, i.onPageDone || (i.onPageDone = function(e, n, i, o, a) { l.go(t, null, { push_only: !0 }), f.set(f.getHash(l), { title: e, html: n, js: i, lm: o, bc: a }) }), i.onPageDone.apply(window, e);
                        break;
                    case 4:
                        if (i.redirectToLoginPage) { var k = e.shift(); return window.location = k, !1 }
                        if (!Z._failed_relogin) {
                            var k = e.shift(),
                                w = e.shift();
                            W();
                            var C = X({ src: k })
                        }
                        Z._failed_relogin = !0, Z.save_failed_req(C, t, n, i)
                }
            },
            onReLoginDone: function() { Z.repeat_reqs(), Z._failed_relogin = !1 },
            tGetParam: function() {
                if (Z.tStart && Z.tModule) {
                    var e = Z.tFastRender - Z.tStart,
                        t = Z.tRestoreRender - Z.tStart,
                        n = Z.tProcess - Z.tStart,
                        i = Z.tRender - Z.tProcess,
                        o = "/" == Z.tModule.substr(0, 1) ? Z.tModule.substr(1) : Z.tModule,
                        a = [o, e, t, n, i];
                    for (var r in a)(!a[r] || a[r] < 0) && (a[r] = 0);
                    return Z.tStart = !1, a.join(",")
                }
            },
            tAlGetParam: function() {
                if (Z.tAlStart && Z.tAlModule) {
                    var e = Z.tAlProcess - Z.tAlStart,
                        t = Z.tAlRender - Z.tAlProcess,
                        n = "/" == Z.tAlModule.substr(0, 1) ? Z.tAlModule.substr(1) : Z.tAlModule,
                        i = ["al_" + n, e, t];
                    for (var o in i)(!i[o] || i[o] < 0) && (i[o] = 0);
                    return Z.tAlStart = !1, i.join(",")
                }
            },
            refreshLinks: function(e, t) {
                if (e) {
                    var n = m("mmi_fv", "lm_cont"),
                        i = n && m("lfm_item", n),
                        o = m("mmi_fv", "mfoot"),
                        a = o && m("lfm_item", o),
                        r = _("fv_link"),
                        s = K('link[rel="canonical"]');
                    d(i, "href", e), d(a, "href", e), d(r, "href", e), d(s, "href", d(_("mcont"), "data-canonical"))
                }
                if (t) {
                    var l = m("mmi_app", "lm_cont"),
                        c = l && m("lfm_item", l),
                        u = m("mmi_app", "mfoot"),
                        f = u && m("lfm_item", u),
                        p = _("app_link"),
                        v = t ? "return nav.app_go(this, event, '" + G(t) + "');" : !1;
                    d(c, "onclick", v), d(f, "onclick", v), d(p, "onclick", v)
                }
            }
        };
    window.ajax = Z
}, function() {
    var e = need("$");
    window.AudioSpecialForYou = { selector: ".AudioSpecialForYou", setPlaying: i };
    var t = { special: AudioSpecialForYou.selector },
        n = { playing: "AudioSpecialForYou_playing" };

    function i(i) {
        var o = e(t.special);
        o && o.classList.toggle(n.playing, i)
    }
}, function() {
    var e = need("$"),
        t = need("bem");
    window.AudioSerp = { setView: function(e) { return o("view", e) }, setTab: function(e) { return o("tab", e) }, setFoundHtml: a, getFoundHtml: r };
    var n = { serpMod: function(e) { return "AudioSerp_" + e } },
        i = { serp: ".AudioSerp", found: ".AudioSerp__found" };

    function o(o, a) {
        var r = e(i.serp);
        t.setMod(r, n.serpMod(o), a)
    }

    function a(t) {
        var n = e(i.found);
        n.outerHTML = t
    }

    function r() { var t = e(i.found); return t.outerHTML }
}, function(e, t, n) { n(188), n(24), n(8), n(50), n(65), n(152) }, function() {
    var e = window,
        t = e.removeClass,
        n = e.addClass,
        i = e.geByClass1,
        o = { obj: null, highlight: !1, start: function(e) { e.touches && 1 == e.touches.length && (o.clear(), o.end(e), o.obj = this || null, o.obj && (o.highlight = !0, n("hover", o.obj))) }, cancel: function(e) { o.obj && (o.highlight = !1, o.end(e)) }, end: function() { o.obj && (t("hover", o.obj), o.highlight && (o.clear(), n("active", o.obj)), o.obj = null, o.highlight = !1) }, clear: function() { t("active", i("active", "vk_wrap")) } };
    window.thover = o
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
        }();

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var a = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=",
        r = t.PlayerHTML5 = function() {
            e.isSupported = function(e) {
                var t = document.createElement("audio");
                if (t.canPlayType) {
                    e = e || 'audio/mpeg; codecs="mp3"';
                    var n = t.canPlayType(e),
                        i = n.replace(/no/, "");
                    return !!i
                }
                return !1
            };

            function e(t) { o(this, e), this.opts = t || {}, this._trackOptions = {}, this._audioNodes = [], this._currentAudioEl = this._createAudioNode(), this._prefetchAudioEl = this._createAudioNode() }
            return e.prototype.destroy = function() {}, e.prototype.getPlayedTime = function() { for (var e = this._currentAudioEl.played, t = 0, n = 0; n < e.length; n++) t += e.end(n) - e.start(n); return t }, e.prototype._setAudioNodeUrl = function(e, t) { window.data && data(e, "setUrlTimesetUrlTime", t == a ? 0 : vkNow()), e.src = t }, e.prototype._createAudioNode = function(e) {
                var t = new Audio,
                    n = this;
                return this.opts.onBufferUpdate && addEvent(t, "progress", function() {
                    n._currentAudioEl == t && n.opts.onBufferUpdate(n.getCurrentBuffered()); {
                        var e = t.buffered;
                        e.length
                    }
                    1 == e.length && 0 == e.start(0) && e.end(0) == t.duration && (t._fullyLoaded = !0)
                }), addEvent(t, "stalled", function() { n._currentAudioEl == t && n._isInvalidDuration() && n._currentAudioEl.currentTime >= n.duration - 1 && n._currentAudioEl.dispatchEvent(new Event("ended")) }), this.opts.onProgressUpdate && addEvent(t, "timeupdate", function() { n._currentAudioEl == t && n.opts.onProgressUpdate(n.getCurrentProgress()) }), this.opts.onEnd && addEvent(t, "ended", function() { n._currentAudioEl == t && n.opts.onEnd() }), this.opts.onSeeked && addEvent(t, "seeked", function() { n._currentAudioEl == t && n.opts.onSeeked() }), this.opts.onSeek && addEvent(t, "seeking", function() { n._currentAudioEl == t && n.opts.onSeek() }), addEvent(t, "error", function() { n._prefetchAudioEl == t ? n._prefetchAudioEl = n._createAudioNode() : n._currentAudioEl == t && n.opts.onFail && n.opts.onFail() }), addEvent(t, "canplay", function() {
                    if (window.data) {
                        var e = data(t, "setUrlTime");
                        e && (cur.audioLoadTimings = cur.audioLoadTimings || [], cur.audioLoadTimings.push(vkNow() - e), data(t, "setUrlTime", 0))
                    }
                    n._prefetchAudioEl == t, n._currentAudioEl == t && (n.opts.onCanPlay && n.opts.onCanPlay(), n._seekOnReady && (n.seek(n._seekOnReady), n._seekOnReady = !1))
                }), e && (this._setAudioNodeUrl(t, e), t.preload = "auto", t.volume = this._volume || 1, t.load()), this._audioNodes.push(t), t
            }, e.prototype.onReady = function(e) { e(!0) }, e.prototype.prefetch = function(e) { this._prefetchAudioEl && this._setAudioNodeUrl(this._prefetchAudioEl, a), this._prefetchAudioEl = this._createAudioNode(e) }, e.prototype.seek = function(e) {
                var t = this._currentAudioEl;
                this.duration ? t.currentTime = this.duration * e : this._seekOnReady = e
            }, e.prototype.setVolume = function(e) { void 0 === e && (e = this._currentAudioEl.volume), this._currentAudioEl.volume = e, this._prefetchAudioEl && (this._prefetchAudioEl.volume = e), this._volume = e }, e.prototype._isInvalidDuration = function() { var e = this._currentAudioEl; return isNaN(e.duration) || 1 / 0 == e.duration || 0 == e.duration }, e.prototype.getCurrentProgress = function() { var e = this._currentAudioEl; return this.duration ? Math.max(0, Math.min(1, e.currentTime / this.duration)) : 0 }, e.prototype.getCurrentBuffered = function() { var e = this._currentAudioEl; return e && e.buffered.length ? Math.min(1, e.buffered.end(0) / e.duration) : 0 }, e.prototype.isFullyLoaded = function() { return this._currentAudioEl._fullyLoaded }, e.prototype.setUrl = function(t, i) {
                var o = this._currentAudioEl;
                if (this._seekOnReady = !1, this._trackOptions = {}, i && "object" === ("undefined" == typeof i ? "undefined" : n(i)) && (this._trackOptions = i, i = i.callback), o.src == t) return this.opts.onCanPlay && this.opts.onCanPlay(), i && i(!0);
                if (this._prefetchAudioEl && this._prefetchAudioEl.readyState > e.STATE_HAVE_NOTHING)
                    if (this._prefetchAudioEl.src == t) {
                        this._currentAudioEl.pause(0), this._setAudioNodeUrl(this._currentAudioEl, a);
                        var r = this;
                        this._prefetchAudioEl.readyState >= e.STATE_HAVE_FUTURE_DATA && setTimeout(function() { r.opts.onCanPlay && r.opts.onCanPlay() }), o = this._currentAudioEl = this._prefetchAudioEl, this._prefetchAudioEl = !1
                    } else this._prefetchAudioEl.src && this._setAudioNodeUrl(this._prefetchAudioEl, a);
                return o.src != t && (this._setAudioNodeUrl(o, t), o.load()), i && i(!0)
            }, e.prototype.play = function(t) { this._prefetchAudioEl.src == t && this._prefetchAudioEl.readyState > e.STATE_HAVE_NOTHING && (this._setAudioNodeUrl(this._currentAudioEl, a), this._currentAudioEl = this._prefetchAudioEl, this._prefetchAudioEl = this._createAudioNode(), this.opts.onCanPlay && this.opts.onCanPlay()); var n = this._currentAudioEl; if (n.src) try { n.play() } catch (i) { debugLog("Audio: url set failed (html5 impl)") } }, e.prototype.pause = function() {
                var e = this._currentAudioEl;
                e.src && e.pause()
            }, e.prototype.stop = function() {
                var e = this._currentAudioEl;
                this._setAudioNodeUrl(e, a)
            }, e.prototype._setFadeVolumeInterval = function(e) {
                if (e) {
                    if (!this._fadeVolumeWorker && window.Worker && window.Blob) { var t = new Blob(["         var interval;         onmessage = function(e) {           clearInterval(interval);           if (e.data == 'start') {             interval = setInterval(function() { postMessage({}); }, 20);           }         }       "]); try { this._fadeVolumeWorker = new Worker(window.URL.createObjectURL(t)) } catch (n) { this._fadeVolumeWorker = !1 } }
                    this._fadeVolumeWorker ? (this._fadeVolumeWorker.onmessage = e, this._fadeVolumeWorker.postMessage("start")) : this._fadeVolumeInterval = setInterval(e, 60)
                } else this._fadeVolumeWorker && (this._fadeVolumeWorker.terminate(), this._fadeVolumeWorker = null), this._fadeVolumeInterval && clearInterval(this._fadeVolumeInterval)
            }, e.prototype.fadeVolume = function(e, t) {
                e = Math.max(0, Math.min(1, e));
                var n = this._currentAudioEl,
                    i = 0;
                if (i = e < n.volume ? -.04 : .001, Math.abs(e - n.volume) <= .001) return this._setFadeVolumeInterval(), t && t();
                var o = n.volume;
                this._setFadeVolumeInterval(function() { i > 0 && (i *= 1.2), o += i; var n = !1; return (n = 0 > i ? e >= o : o >= e) ? (this.setVolume(e), this._setFadeVolumeInterval(), t && t()) : void this.setVolume(o) }.bind(this))
            }, i(e, [{ key: "type", get: function() { return "html5" } }, { key: "loaded", get: function() { return !0 } }, {
                key: "duration",
                get: function() {
                    var e = this._currentAudioEl,
                        t = isNaN(e.duration) || 1 / 0 == e.duration ? 0 : e.duration;
                    return !t && this._trackOptions.duration && (t = parseInt(this._trackOptions.duration)), t
                }
            }]), e
        }();
    r.STATE_HAVE_NOTHING = 0, r.STATE_HAVE_FUTURE_DATA = 3, r.HAVE_ENOUGH_DATA = 4, r.AUDIO_EL_ID = "ap_audio"
}, function() {
    var e = c(['\n      <div class="uMailWrite uMailWrite_unableToWrite">\n        ', '\n        <div class="uMailWrite__unableToWriteText">\n          ', "\n        </div>\n      </div>\n    "], ['\n      <div class="uMailWrite uMailWrite_unableToWrite">\n        ', '\n        <div class="uMailWrite__unableToWriteText">\n          ', "\n        </div>\n      </div>\n    "]),
        t = c(['\n    <form\n      class="uMailWrite ', '"\n      method="POST"\n      action="/mail?act=send&to=', "&hash=", "&from=dialog", '"\n      ', '\n    >\n      <div class="uMailWrite__toBottom" ', ">", "</div>\n      ", "\n      ", "\n      ", "\n    </form>\n  "], ['\n    <form\n      class="uMailWrite ', '"\n      method="POST"\n      action="/mail?act=send&to=', "&hash=", "&from=dialog", '"\n      ', '\n    >\n      <div class="uMailWrite__toBottom" ', ">", "</div>\n      ", "\n      ", "\n      ", "\n    </form>\n  "]),
        n = c(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "]),
        i = c(['\n    <div class="uMailWrite__main">\n      <div class="uMailWrite__button uMailWrite__button_attach">', '</div>\n      <div class="uMailWrite__button uMailWrite__button_stickers" ', ">", "", '</div>\n      <button class="', '" type="submit">\n        ', "", "", "", "", '\n      </button>\n      <div class="uMailWrite__textareaContainer">\n        <textarea\n          class="uMailWrite__textarea"\n          name="message"\n          placeholder="', '"\n          maxlength="4096"\n          ', "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n        >", '</textarea>\n        <div class="uMailWrite__textareaGhost">', "</div>\n      </div>\n    </div>\n  "], ['\n    <div class="uMailWrite__main">\n      <div class="uMailWrite__button uMailWrite__button_attach">', '</div>\n      <div class="uMailWrite__button uMailWrite__button_stickers" ', ">", "", '</div>\n      <button class="', '" type="submit">\n        ', "", "", "", "", '\n      </button>\n      <div class="uMailWrite__textareaContainer">\n        <textarea\n          class="uMailWrite__textarea"\n          name="message"\n          placeholder="', '"\n          maxlength="4096"\n          ', "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n        >", '</textarea>\n        <div class="uMailWrite__textareaGhost">', "</div>\n      </div>\n    </div>\n  "]),
        o = c(['\n    <div class="uMailWrite__SVGIcon uMailWrite__SVGIcon_', '"></div>\n  '], ['\n    <div class="uMailWrite__SVGIcon uMailWrite__SVGIcon_', '"></div>\n  ']),
        a = c(['\n    <div class="', ' _preventMenuOpen">\n      ', "\n      ", "\n      ", "\n    </div>\n  "], ['\n    <div class="', ' _preventMenuOpen">\n      ', "\n      ", "\n      ", "\n    </div>\n  "]),
        r = c(['\n    <div class="uMailWrite__attachedMsgs">\n      ', "\n      ", '\n      <div class="uMailWrite__attachedMsgsText">', "</div>\n    </div>\n  "], ['\n    <div class="uMailWrite__attachedMsgs">\n      ', "\n      ", '\n      <div class="uMailWrite__attachedMsgsText">', "</div>\n    </div>\n  "]),
        s = c(['\n    <input type="hidden" name="attached_messages" value="', '" />\n  '], ['\n    <input type="hidden" name="attached_messages" value="', '" />\n  ']);

    function l(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function c(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

    function u() {
        var n = window.lang,
            i = store.mail,
            o = i.cur.peerId;
        if (!o) return '<form class="uMailWrite"></form>';
        var a = i.peers[o];
        if (a.unableToWrite) {
            if (a.isVkcomgroup) return "";
            var r = a.kickedMessage || n.mobile_msg_mail_privacy_error,
                s = Icon({ mix: "uMailWrite__unableToWriteIcon", icon: "warning" });
            return q.html(e, s, r)
        }
        var l = q.onSubmit("uMailWrite._onSubmit", "event", "this"),
            c = q.onClick("uMailWrite.onToBottomClick"),
            u = _(o),
            p = m(o),
            v = f(o),
            h = d(),
            g = a.canAttachMoney ? "uMailWrite_canAttachMoney" : "";
        return q.html(t, g, o, a.hashSend, i.cur.communityParam, l, c, h, u, p, v)
    }

    function d() {
        var e = store.mail,
            t = e.cur,
            i = e.peers,
            o = i[t.peerId] ? i[t.peerId].countUnread : null,
            a = o ? Oval({ mix: "uMailWrite__toBottomValue", value: o }) : "",
            r = Icon({ mix: "uMailWrite__toBottomIcon", icon: "arrowDown" });
        return q.html(n, a, r)
    }

    function f(e) {
        var t = lang,
            n = store.mail,
            o = n.cur,
            a = n.queue,
            r = q.onMouseDown("uMailWrite._onStickersClick", "event"),
            s = n.peers[e],
            l = o.groupId,
            c = Math.abs(l),
            d = l ? "&community=" + c : "",
            f = Unfold({ icon: "attach", name: "uMailWrite_attachments", position: "bottomLeft", items: [{ text: o.inlineUploadHTML, icon: "camera" }, { text: t.mobile_attachments_add_photo_vk, url: "/attachments?act=choose_photo&target=mail" + e + d, icon: "photo" }, { text: t.mobile_attachments_add_video, url: "/attachments?act=choose_video&target=mail" + e + d, icon: "video" }, { text: t.mobile_attachments_add_audio, url: "/attachments?act=choose_audio&target=mail" + e + d, icon: "audio" }, { text: t.mobile_attachments_add_doc, url: "/attachments?act=choose_doc&target=mail" + e + d, icon: "doc" }, s.canAttachMoney ? { text: t.mobile_attachments_add_money, url: "/attachments?act=attach_money&target=mail" + e + d, icon: "money" } : null] }),
            _ = q.onKeyUp("uMailWrite._onKeyUp"),
            m = q.onInput("uMailWrite._onInput", "event", "this"),
            v = q.onKeyDown("uMailWrite._onKeyDown", "event", "this"),
            h = q.onFocus("uMailWrite._onFocus", "event", "this"),
            g = q.onBlur("uMailWrite._onBlur", "event"),
            w = q.onClick("uMailWrite._onClick", "event", "this"),
            y = Icon({ mix: "uMailWrite__button_send_icon", icon: "send" }),
            b = Icon({ mix: "uMailWrite__button_send_icon", icon: "send", active: !0 }),
            k = p("accept"),
            C = p("remove"),
            M = Icon({ mix: "uMailWrite__button_send_icon", icon: "spinner" }),
            S = Icon({ mix: "uMailWrite__button_stickers_icon", icon: "sticker" }),
            E = Icon({ mix: "uMailWrite__button_stickers_icon", icon: "sticker", active: !0 }),
            T = s.attachmentsHTML.length,
            A = o.msgAttached[o.peerId],
            x = A && A.length,
            I = !!(a[o.peerId] || []).length,
            P = q["class"]("uMailWrite__button", { send: !0, send_active: !!(T > 150 || x), loading: I }),
            B = o.texts[o.peerId] || "",
            L = o.textsHTML[o.peerId] || "";
        return requestAnimationFrame(function() { return u._onRedraw() }), q.html(i, f, r, S, E, P, y, b, M, k, C, t.mobile_mail_message_placeholder, h, _, m, v, h, g, w, B, L)
    }

    function p(e) { return q.html(o, e) }

    function _() { var e = ""; return Brick({ mix: "uMailWrite__popupStickers _preventMenuOpen", inner: e }) }

    function m(e) {
        var t = store.mail,
            n = t.cur,
            i = t.peers[e],
            o = i.attachmentsHTML,
            r = q["class"]("uMailWrite__attachments", l({}, e, !0)),
            s = n.msgAttached[e] || [],
            c = s.length,
            d = "",
            f = "";
        if (c > 0) {
            var p = s.join(";");
            d = v(c), f = h(p)
        }
        return requestAnimationFrame(function() { return u._onAttachmentsRedraw() }), q.html(a, r, f, d, o)
    }

    function v(e) {
        var t = window.lang,
            n = q.onClick("uMailWrite.onAttachedMsgsRemove"),
            i = Icon({ mix: "uMailWrite__attachedMsgsIcon", icon: "msgMini" }),
            o = Icon({ mix: "uMailWrite__attachedMsgsRemove", icon: "close9", attrs: n }),
            a = langNumeric(e, t.mobile_mail_messages);
        return q.html(r, o, i, a)
    }

    function h(e) { return q.html(s, e) }
    window.uMailWrite = u, window.uMailWrite_Attachments = m, window.uMailWrite_ToBottomInner = d
}, , function() {
    window.ScrollView = e;

    function e(e) { return Brick({ mix: q["class"](e.mix, "ScrollView"), attrs: e.attrs, inner: e.inner }) }
}, function() {
    var e = window,
        t = e.preventEvent,
        n = e.toggleClass,
        i = e.attr,
        o = e.gpeByClass,
        a = e.geByClass1,
        r = e.ajax,
        s = e.val,
        l = e.ge,
        c = e.addClass,
        u = e.removeClass,
        d = e.geBySel1,
        f = function() {
            var e = "_audioSnippet",
                f = "audio_item",
                p = "audioPlaylist__add_added",
                _ = "data-follow_text",
                m = "data-unfollow_text",
                v = "_audioPlaylistsPage__item",
                h = "audioPlaylistsPage__item_removed";

            function g(r, s) {
                t(r);
                var l = o(e, s),
                    c = a(f, l);
                audioplayer.playPause(r, i(c, "data-id")), n("audioSnippet__playpause_paused", s)
            }

            function w(e, t) {
                var i = s(e),
                    o = l(t + "_field"),
                    a = "tab_item_cur_noactive";
                s(o, i), cur && cur[t] && cur[t].go();
                var r = d(".audioPage__tabs .tab_item_cur");
                r && n(a, r, i)
            }

            function y(e) { return '<div class="audioPlaylists__item">\n              <a href="' + e.href + '" class="audioPlaylists__itemLink al_playlist">\n                <span class="audioPlaylists__itemCover" style="' + e.thumb_style + '">' + e.grid_covers + '</span>\n                <span class="audioPlaylists__itemTitle">' + e.title + '</span>\n                <span class="audioPlaylists__itemAuthor">' + e.author_name + '</span>\n                <span class="audioPlaylists__itemStats">' + e.short_stats + "</span>\n              </a>\n            </div>" }

            function b(e, t, n, i) { return e ? '<div class="audioPlaylists">\n                <div class="audioPlaylists__header">\n                  <div class="audioPlaylists__cell">\n                    <div class="audioPlaylists__title">' + n + '</div>\n                  </div>\n                  <div class="audioPlaylists__cell">' + i + '</div>\n                </div>\n                <div class="audioPlaylists__body _preventMenuOpen">\n                  <div class="audioPlaylists__items">\n                    ' + e + "\n                  </div>\n                </div>\n              </div>" : "" }

            function k(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return '<div class="audioPlaylistsPage">\n              <div class="audioPage__search">\n                ' + t + '\n              </div>\n              <div class="audioPlaylistsPage__list _si_container" id="au_search_playlist_items">\n                ' + e + "\n              </div>\n            </div>" }

            function C(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
                    n = '<div class="audioPlaylistsPage__cell audioPlaylistsPage__cell_actions">\n                <div class="audioPlaylistsPage__menu ai_menu_wrap">\n                  <a href="#" class="ai_menu_toggle_button" onclick="ActionMenu.toggleMenu(event, this);"></a>\n                  <i class="i_pointer"></i>\n                  <div class="ai_menu wi_actions">\n                    ' + e.follow_link + "\n                    " + e.publish_link + "\n                  </div>\n                </div>\n             </div>\n             " + e.actions;
                return t && (n = '<div class="audioPlaylistsPage__cell audioPlaylistsPage__cell_actions">\n                   <div class="audioPlaylistsPage__menu ai_menu_wrap">\n                     <a href="#" class="ai_menu_toggle_button"></a>\n                   </div>\n                 </div>'), '<div class="audioPlaylistsPage__item _audioPlaylistsPage__item' + e.owner_id + "_" + e.id + '">\n              <div class="audioPlaylistsPage__cell audioPlaylistsPage__cell_link">\n                <a href="' + e.href + '" class="audioPlaylistsPage__itemLink">\n                  <span class="audioPlaylistsPage__container">\n                    <span class="audioPlaylistsPage__cell audioPlaylistsPage__cell_cover">\n                      <span class="audioPlaylistsPage__cover" style="' + e.thumb_style + '">' + e.grid_covers + '</span>\n                    </span>\n                    <span class="audioPlaylistsPage__cell audioPlaylistsPage__cell_desc">\n                      <span class="audioPlaylistsPage__title">' + e.title + '</span>\n                      <span class="audioPlaylistsPage__author">' + e.author_name + '</span>\n                      <span class="audioPlaylistsPage__stats">' + e.short_stats + "</span>\n                    </span>\n                  </span>\n                </a>\n              </div>\n              " + n + "\n            </div>"
            }

            function M(e) { return '<div class="audioPlaylistsPage__notFound">\n              ' + e + "\n            </div>" }

            function S() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
                    n = window,
                    i = n.lang,
                    o = ('<input type="hidden" name="act" value="player"><input type="hidden" name="list" value="' + escapeAttr(e) + '">', '<input id="au_search_btn" class="button qs_button al_tab" type="submit" value="' + i.mobile_audio_search_btn + '" />', function(e, t, n) { return '<form action="/audio" class="qsearch" onsubmit="return cur.au_search.go(event);">' + e(t, n) + "</form>" }),
                    a = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return '<div class="audioPage__search">\n              <div class="hp_block">\n                ' + e + '\n                <div class="qsearch">\n                  <table class="row_table">\n                    <tr>\n                      <td class="row_table_main_column">\n                        <div class="qs_field_wrap">\n                          <div class="iwrap">\n                            <input id="au_search_field" type="text" class="textfield qs_textfield" name="q" placeholder="' + i.mobile_audio_search_placeholder_simple + '">\n                          </div>\n                        </div>\n                      </td>\n                      <td class="row_table_last_column">\n                        ' + t + "\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>"
                    };
                return t ? a() : o(a)
            }

            function E(e, o) {
                t(e);
                var r = a(v + i(o, "data-playlist_owner_id") + "_" + i(o, "data-playlist_id"));
                hasClass(p, o) ? (o.innerText = i(o, _), c(h, r)) : (o.innerText = i(o, m), u(h, r)), T(o), n(p, o)
            }

            function T(e) { r.post("/audio", { _ajax: 1, act: "follow_playlist", playlist_owner_id: i(e, "data-playlist_owner_id"), playlist_id: i(e, "data-playlist_id"), hash: i(e, "data-hash") }, { redirectToLoginPage: !0 }) }
            return { playPause: g, followPlaylist: E, tplSearchBlockItem: y, tplSearchBlock: b, tplSearchListItem: C, tplSearchListNull: M, tplPlaylistsPage: k, tplPlayerSearch: S, copyValue: w }
        }();
    window.AudioPlaylist = f
}, function(e, t, n) { e.exports = n(169) }, function() {
    var e = window,
        t = e.hide;
    window.Informer = { close: function(e) { t(e) } }
}, function() {
    Object.assign(MailScrap, { updateClass: h, clearSystemMessage2: k, onSystemMessageClick: b, resetPrevScraps: p, redrawFolder: y, redrawSearch: w, redrawSystemMessage: g, folderSetItems: u, folderAddItems: f, folderCutItems: d, peerAddItemsBefore: r, peerAddItemsAfter: s, peerReplaceItems: l, peerSetItems: o, peerGoToBottom: n, removeDivider: t, checkDivider: C }), uVK.onReady(function() {
        if (store.mail && store.mail.scraps) {
            var t = store.mail.scraps;
            e.folder = t.folder.slice(), e.search = t.search.slice(), e.peer = t.peer.slice()
        }
    });
    var e = { folder: [], search: [], peer: [] };

    function t() { remove($(".msg__newMsgsDivider")) }

    function n() {
        var e = Messenger.getConvoBody();
        e.scrollTop = e.scrollHeight
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        e = e.filter(unique);
        var n = store.mail,
            i = n.cur,
            o = n.msgs,
            a = !1,
            r = void 0;
        return e.map(function(e, n) { var s = o[e]; return n > 0 && !a && !t && !$(".msg__newMsgsDivider") && !r.isUnread && s.isUnread && s.authorId !== i.viewerId ? (r = s, a = !0, MailScrap_Item("peer", e, !0)) : (r = s, MailScrap_Item("peer", e)) }).join("")
    }

    function o(e) { e = e.filter(unique), $$(".mailScrap__items_peer").forEach(function(t) { return t.innerHTML = i(e) }) }
    var a = !1;
    document.addEventListener("touchstart", function() { return a = !0 }), document.addEventListener("touchend", function() { return a = !1 });

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        h("peer"), e = e.filter(unique).filter(function(e) { return !$(".msg_id_" + e) }); {
            var n = Messenger.getConvoBody();
            n.scrollHeight - n.scrollTop - n.offsetHeight
        }
        window._preventedCheckTop = !0, setTimeout(function() { return window._preventedCheckTop = !1 });
        var o = i(e, t),
            a = '\n    <div class="load_before load_before_closed">\n      ' + o + "\n    </div>\n  ";
        $$(".mailScrap__items_peer").forEach(function(e) { return e.insertAdjacentHTML("afterbegin", a) }), uMessenger.expandPeerBefore()
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        e = e.filter(unique).filter(function(e) { return !$(".msg_id_" + e) }), $$(".mailScrap__items_peer").forEach(function(n) { n.insertAdjacentHTML("beforeend", i(e, t)) }), h("peer")
    }

    function l(e) {
        e.forEach(function(t) {
            var n = $(".msg_id_" + t);
            n && (n.outerHTML = i(e, !0))
        })
    }

    function c(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; return e = e.filter(unique), e.map(function(e) { return $(".mailScrap__items_folder .convo_id_" + e) && !t ? "" : MailScrap_Item("folder", e) }).join("") }

    function u(e) { $$(".mailScrap__items_folder").forEach(function(t) { return t.innerHTML = c(e, !0) }), $$(".mailScrap_folder").forEach(function(e) { return e.className = MailScrap_class("folder") }), $$(".mailScrap__empty_folder").forEach(function(e) { return e.innerHTML = MailScrap_EmptyInner("folder") }) }

    function d(e) {
        $$(".mailScrap_folder .mailScrap__items").forEach(function(t) {
            var n = [].slice.call(t.children);
            n.slice(e).forEach(function(e) { return t.removeChild(e) })
        })
    }

    function f(e) { $$(".mailScrap__items_folder").forEach(function(t) { return t.insertAdjacentHTML("beforeend", c(e)) }) }

    function p() { e = { folder: [], search: [], peer: [] } }

    function _(e, t, n) { m($(".mailScrap__items_" + e), function(t) { return MailScrap_Item(e, t) }, t, n) }

    function m(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = [];
        return i || (e.innerHTML = "", i = []), 0 === n.length ? void(e.innerHTML = "") : (n.forEach(function(n, o) { var a = i.indexOf(n); - 1 === a ? (i.splice(o, 0, n), domInsert(e, t(n), o)) : a !== o && (i.splice(a, 1), i.splice(o, 0, n), before(e.children[a], e.children[o])) }), i.forEach(function(t, i) {-1 === n.indexOf(t) && o.push(e.children[i]) }), void o.forEach(remove))
    }

    function v() {
        var e = store.mail,
            t = e.cur,
            n = e.peers;
        n[t.peerId].systemMessageCode = null, h("peer"), g()
    }

    function h(e) { return void $$(".mailScrap_" + e).forEach(function(t) { return t.className = MailScrap_class(e) }) }

    function g() { $$(".mailScrap__systemMessage").forEach(function(e) { e.innerHTML = MailScrap_SystemMessageInner() }) }

    function w() { $$(".mailScrap__items_search").forEach(function(e) { return e.innerHTML = MailScrap_ItemsInner("search") }), $$(".mailScrap_search").forEach(function(e) { return e.className = MailScrap_class("search") }), $$(".mailScrap__empty_search").forEach(function(e) { return e.innerHTML = MailScrap_EmptyInner("search") }) }

    function y(e) {
        {
            var t = store.mail,
                n = t.cur,
                i = t.scraps;
            n.folder
        }
        _("folder", i.folder, e), $$(".mailScrap_folder").forEach(function(e) { return e.className = MailScrap_class("folder") }), $$(".mailScrap__empty_folder").forEach(function(e) { return e.innerHTML = MailScrap_EmptyInner("folder") })
    }

    function b() { v() }

    function k() { remove(geByClass1("service_msg_box")) }

    function C() {
        var e = last($(".mailScrap__items_peer").children);
        e.classList.contains("msg__newMsgsDivider") && t()
    }
}, function() {
    function e(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    window.Avatar = t;

    function t(t) {
        var o, a = t.photos || [t.photo];
        a = isArray(a) ? a : [a];
        var r = a.length,
            s = "";
        if (r > 1)
            for (var l = 0; r > l; l++) s += n(a[l], l);
        var c = void 0;
        return c = 40 === t.size ? "m" : 36 === t.size ? "s" : t.size ? t.size : "xl", Brick({ mix: q["class"](t.mix, "Avatar", (o = {}, e(o, r, !0), e(o, "size", c), o)), url: t.url, attrs: 1 === r ? i(a[0]) : "", inner: s })
    }

    function n(t, n) { return Brick({ mix: q["class"]("Avatar__image", e({}, n, !0)), attrs: i(t) }) }

    function i(e) { return q.attr("style", "background-image : url('" + e + "')") }
}, function(e, t, n) {
    var i = n(188),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    o["default"].onPostMessage(function(e) { "putPixel" !== e && "addCard" !== e && window.scrollTop(0) })
}, function() {
    var e = window,
        t = e.langNumeric,
        n = e.show,
        i = e.hide,
        o = function() {
            var e = document.getElementsByClassName("gift_create_post_counter");

            function o(o) {
                var a = e[0];
                if (a) {
                    var r = o.value.length,
                        s = o.maxLength;
                    if (r > s) o.value = o.value.substr(0, s);
                    else if (r > s / 2) {
                        var l = Math.max(s - r, 0);
                        a.innerText = t(l, lang.text_N_symbols_remain), n(a)
                    } else i(a)
                }
            }
            return { counter: o }
        }();
    window.GiftsSendFormCounter = o
}, function() {
    var e = window,
        t = e.isUndefined,
        n = e.getX,
        i = e.getY,
        o = e.vkNow,
        a = e.clog,
        r = e.cancelEvent,
        s = e.getW,
        l = e.setStyle,
        c = e.getH,
        u = e.scrollTop,
        d = e.getCh,
        f = e.preventEvent,
        p = e.extend,
        _ = e.hasClass,
        m = e.gpeByClass,
        v = e.attr,
        h = e.toggleClass,
        g = e.geByClass1,
        w = e.removeClass,
        y = e.addClass,
        b = e.geByClass,
        k = e.addEvent,
        C = e.onBodyResize,
        M = e.removeEvent,
        S = window,
        E = S.browser,
        T = window,
        A = T.thover;

    function x(e, S) {
        var T, x, I, P, B, L = S && S.ignoreMouseWheel,
            N = S && S.noAutoScroll,
            O = !t(document.ontouchmove),
            H = !0,
            D = !1,
            j = !1,
            R = !1,
            q = !1,
            F = 0,
            U = 0,
            z = !1,
            $ = 0,
            V = !1,
            W = !1,
            X = !1,
            Y = !1,
            G = !1;

        function K(e) {
            var t = e.touches,
                o = n(x),
                a = i(x),
                r = (t && t[0] ? t[0].pageX : e.pageX) || 0,
                s = (t && t[0] ? t[0].pageY : e.pageY) || 0;
            return { x: r - o, y: s - a }
        }

        function Q(e) { z || (z = []), z.push([o(), e]), z = z.slice(-20) }

        function J() { z = !1 }

        function Z() {
            if (!z || z.length < 2) return [0, 0, 0];
            for (var e = o(), t = !1, n = z.pop(), i = z.length - 1; i >= 0; i--) {
                var a = e - z[i][0];
                if (a > 150) break;
                t = z[i]
            }
            if (!t || !n) return [0, 0, 0];
            var r = n[1].x - t[1].x,
                s = n[1].y - t[1].y,
                l = Math.sqrt(r * r + s * s),
                a = n[0] - t[0];
            return a ? [l / a, r / a, s / a] : [0, 0, 0]
        }

        function et() {
            if (!z) return !1;
            var e = Z(),
                t = e[0],
                n = e[1];
            if (J(), !t) return !1;
            var i = 4.7,
                o = t / i,
                r = n * o - i * o * o / 2;
            return o *= 530, r *= 140, a("dx", r, "t", o), .1 > t || !r ? !1 : { dx: r, t: o }
        }

        function tt(e) { "touchstart" == e.type ? H = !e.touches || 1 == e.touches.length : "touchmove" == e.type ? H = !1 : "click" == e.type && (H || (r(e), H = !0)) }

        function nt(e) {
            if (!(window.isNewMail && e.target.closest(".stickers_panel") && e.target.closest(".messenger") || Y && e.touches && e.touches.length > 1)) {
                if (J(), j) { if (1 >= U) return } else { var t = s(x) - s(I); if (t >= 0) return }
                R = K(e), q = R, Q(q), X = !0, l.animate(I)
            }
        }

        function it(e) {
            if (R && (Y || X)) {
                A && A.cancel(e);
                var t = K(e);
                if (q = t, Q(q), X) {
                    var n = R.x - t.x,
                        o = R.y - t.y;
                    if (Math.abs(n) >= Math.abs(o) && (r(e), Y = !0), X = !1, Y) {
                        var a = i(x),
                            f = c(x),
                            p = u(),
                            _ = d(),
                            m = !N;
                        m && (p > a - 7 ? u(a - 7) : a + f + 7 > p + _ && u(a + f + 7 - _))
                    }
                }
                if (Y)
                    if (r(e), j) {
                        var v = s(x),
                            n = R.x - t.x;
                        (0 >= F && 0 > n || F >= U - 1 && n > 0) && (n /= 3);
                        var h = -F - n / v,
                            g = D ? 100 * h + "%" : h * v;
                        l.transform(I, { translate: [g, 0] })
                    } else {
                        var w = s(x) - s(I),
                            y = 0,
                            n = R.x - t.x,
                            h = $ - n;
                        if (w > 0 && (w = 0), w > h) var g = w - (w - h) / 3;
                        else if (h > y) var g = y + (h - y) / 3;
                        else var g = $ - n;
                        lt(g), l.transform(I, { translate: [g, 0] })
                    }
            }
        }

        function ot(e) {
            if (R && Y) {
                if (r(e), j) {
                    var t = 4.7 * Z()[1],
                        n = R.x - q.x,
                        i = s(x),
                        o = Math.abs(n) >= i / 2;
                    (F > 0 && (o && 0 > n || t > 1) || U - 1 > F && (o && n > 0 || -1 > t)) && (F += n > 0 ? 1 : -1);
                    var a = -F,
                        c = D ? 100 * a + "%" : a * i;
                    R = !1, J(), ct(), l.animate(I, "transform", { duration: 200, func: "ease" }), l.transform(I, { translate: [c, 0] })
                } else {
                    var u = et(),
                        d = s(x) - s(I),
                        f = 0,
                        n = R.x - q.x,
                        a = $ - n;
                    u && (a += u.dx), d > 0 && (d = 0), $ = d > a ? d : a > f ? f : a;
                    var p = { duration: 200, func: "ease" };
                    u && (p = { duration: u.t, func: "cubic-bezier(0, 1, 1, 1)" }), lt($), l.animate(I, "transform", p), l.transform(I, { translate: [$, 0] })
                }
                Y = G = !1
            }
        }

        function at(e) {
            if (!(L || window.isNewMail && e.target.closest(".stickers_panel") && e.target.closest(".messenger"))) {
                if (f(e), j) { if (1 >= U) return } else { var t = s(x) - s(I); if (t >= 0) return }
                var n = (e.detail ? e.detail : e.wheelDelta) > 0 ? 3 : -3;
                if (V === !1 && (V = 0), V += n, !j) {
                    var t = s(x) - s(I),
                        i = 0,
                        o = $ - V;
                    if (t > 0 && (t = 0), t > o) var a = t - (t - o) / 3;
                    else if (o > i) var a = i + (o - i) / 3;
                    else var a = $ - V;
                    lt(a), l.transform(I, { translate: [a, 0] })
                }
                clearTimeout(W), W = setTimeout(function() {
                    if (j) {
                        (F > 0 && 0 > V || U - 1 > F && V > 0) && (F += V > 0 ? 1 : -1);
                        var e = -F,
                            t = s(x),
                            n = D ? 100 * e + "%" : e * t;
                        ct(), l.animate(I, "transform", { duration: 200, func: "ease" }), l.transform(I, { translate: [n, 0] })
                    } else {
                        var i = s(x) - s(I),
                            o = 0,
                            e = $ - V;
                        i > 0 && (i = 0), i > e ? $ = i : e > o ? $ = o : $ -= V, lt(n), l.animate(I, "transform", { duration: 200, func: "ease" }), l.transform(I, { translate: [$, 0] })
                    }
                    V = !1
                }, 200)
            }
        }

        function rt(e) {
            if (!j) {
                var t = n(e) - n(x),
                    i = t + $,
                    o = i + s(e),
                    r = 0,
                    c = s(x),
                    u = !1;
                r > i ? u = r - t + 20 : o > c && (u = c - s(e) - t - 20);
                var d = s(x) - s(I),
                    f = 0;
                if (d > 0 && (d = 0), d > u) var u = d;
                else if (u > f) var u = f;
                a(t, $, i, o, r, c, u), u !== !1 && ($ = u, lt($), l.animate(I, "transform", { duration: 200, func: "ease" }), l.transform(I, { translate: [$, 0] }))
            }
        }

        function st(e) {
            if (j) {
                var t = F;
                if (e && e.target) {
                    var n = _("sp_ppt", e.target) ? e.target : m("sp_ppt", e.target),
                        i = +v(n, "data-i");
                    F = 0 > i ? 0 : i > U - 1 ? U - 1 : i
                }
                R = !1, J(), Y = G = !1;
                var o = s(x),
                    a = -F,
                    r = D ? 100 * a + "%" : a * o;
                ct(), t != F && l.animate(I, "transform", { duration: 200, func: "ease" }), l.transform(I, { translate: [r, 0] })
            }
        }

        function lt(e) {
            if (!j) {
                e = e || $;
                var t = s(x) - s(I),
                    n = 0;
                h("sw_left", x, n > e), h("sw_right", x, e > t)
            }
        }

        function ct() {
            if (j) {
                var e = g("sp_ppt_sel", T);
                e && e === B[F] || (w("sp_ppt_sel", e), y("sp_ppt_sel", B[F]))
            }
        }

        function ut() { x = g("scroller_wrap", T), I = g("scroller_cont", x), j ? (P = g("sp_pages_pts", T), B = b("sp_ppt", P), U = (b("scroller_page", I) || []).length, F = 0, ct()) : ($ = 0, lt($)), z = !1, l.transform(I, { translate: [0, 0] }) }

        function dt() { ut(), O ? (k(x, "touchstart touchmove click", tt), k(x, "touchstart", nt), k(x, "touchmove", it), k(x, "touchend touchcancel", ot)) : (k(x, "mousewheel", at), k(P, "click", st)), D || C(st) }

        function ft() { O ? (M(x, "touchstart touchmove click", tt), M(x, "touchstart", nt), M(x, "touchmove", it), M(x, "touchend touchcancel", ot)) : (M(x, "mousewheel", at), M(P, "click", st)), D || C("__clear", st) }
        p(this, { init: dt, destroy: ft, onShow: function() { j ? ct() : lt($) }, canClick: function() { return H } }), T = e, S = S || {}, S.byPage ? (j = !0, D = !E.android) : (j = !1, D = !1, this.showElem = rt)
    }
    window.Scroller = x
}, function() {
    var e = o(['\n    <div class="', '">\n\n      ', '\n\n      <div class="mailActs__counter"></div>\n\n      <div class="mailActs__buttons">\n        <div class="mailActs__buttonsIn">\n          ', "\n          ", '\n        </div>\n        <div class="mailActs__chevron">\n          <div class="mailActs__chevronIn">\n            ', "\n            ", "\n            ", "\n            ", "\n            ", '\n          </div>\n          <div class="mailActs__chevronMore">\n            <div class="mailActs__chevronMoreIcon" ', '></div>\n            <div class="mailActs__chevronList">\n              ', "\n              ", "\n              ", "\n              ", "\n              ", "\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  "], ['\n    <div class="', '">\n\n      ', '\n\n      <div class="mailActs__counter"></div>\n\n      <div class="mailActs__buttons">\n        <div class="mailActs__buttonsIn">\n          ', "\n          ", '\n        </div>\n        <div class="mailActs__chevron">\n          <div class="mailActs__chevronIn">\n            ', "\n            ", "\n            ", "\n            ", "\n            ", '\n          </div>\n          <div class="mailActs__chevronMore">\n            <div class="mailActs__chevronMoreIcon" ', '></div>\n            <div class="mailActs__chevronList">\n              ', "\n              ", "\n              ", "\n              ", "\n              ", "\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  "]),
        t = o(['\n    <button class="', '" ', ">\n      ", "\n    </button>\n  "], ['\n    <button class="', '" ', ">\n      ", "\n    </button>\n  "]),
        n = o(['\n    <button class="', '" aria-label="', '" ', "></button>\n  "], ['\n    <button class="', '" aria-label="', '" ', "></button>\n  "]),
        i = o(['\n    <div class="', '" ', ">", "</div>\n  "], ['\n    <div class="', '" ', ">", "</div>\n  "]);

    function o(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    window.MailActs = a;

    function a(t) {
        t || (t = {});
        var n = (window.lang, q.onClick("MailActs._onMoreClick")),
            i = Icon({ mix: "mailActs__close", icon: "close12", attrs: q.onClick("MailActs._onCloseClick") }),
            o = r("reply"),
            a = r("forward"),
            c = s("edit", t),
            u = s("pin", t),
            d = s("important", t),
            f = s("remove", t),
            p = s("spam", t),
            _ = l("edit", t),
            m = l("pin", t),
            v = l("important", t),
            h = l("remove", t),
            g = l("spam", t),
            w = q["class"]("mailActs", { canPin: t.canPin, pinned: t.isPinned, important: t.isImportant, isVkcomgroup: t.isVkcomgroup });
        return q.html(e, w, i, o, a, c, u, d, f, p, n, _, m, v, h, g)
    }

    function r(e) {
        var n = window.lang,
            i = q["class"]("mailActs__button", { type: e }),
            o = q.onClick("MailActs._onButtonClick", e),
            a = "reply" === e ? n.mobile_mail_messages_actions_reply : n.mobile_mail_messages_actions_forward;
        return q.html(t, i, o, a)
    }

    function s(e, t) {
        var i = window.lang,
            o = q["class"]("mailActs__icon", { type: e }),
            a = q.onClick("MailActs._onButtonClick", e),
            r = t.isPinned ? i.mobile_mail_messages_actions_unpin : i.mobile_mail_messages_actions_pin,
            s = t.isImportant ? i.mobile_mail_messages_actions_important_off : i.mobile_mail_messages_actions_important,
            l = void 0;
        switch (e) {
            case "edit":
                l = i.mobile_mail_messages_actions_edit;
                break;
            case "pin":
                l = r;
                break;
            case "important":
                l = s;
                break;
            case "remove":
                l = i.mobile_mail_messages_actions_delete;
                break;
            case "spam":
                l = i.mobile_mail_messages_actions_spam
        }
        return q.html(n, o, l, a)
    }

    function l(e, t) {
        var n = window.lang,
            o = q["class"]("mailActs__chevronListItem", { type: e }),
            a = q.onClick("MailActs._onButtonClick", e),
            r = t.isPinned ? n.mobile_mail_messages_actions_unpin : n.mobile_mail_messages_actions_pin,
            s = t.isImportant ? n.mobile_mail_messages_actions_important_off : n.mobile_mail_messages_actions_important,
            l = void 0;
        switch (e) {
            case "edit":
                l = n.mobile_mail_messages_actions_edit;
                break;
            case "pin":
                l = r;
                break;
            case "important":
                l = s;
                break;
            case "remove":
                l = n.mobile_mail_messages_actions_delete;
                break;
            case "spam":
                l = n.mobile_mail_messages_actions_spam
        }
        return q.html(i, o, a, l)
    }
}, function() {
    Array.prototype.filter || (Array.prototype.filter = function(e) {
        if (void 0 === this || null === this) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if ("function" != typeof e) throw new TypeError;
        for (var i = [], o = arguments.length >= 2 ? arguments[1] : void 0, a = 0; n > a; a++)
            if (a in t) {
                var r = t[a];
                e.call(o, r, a, t) && i.push(r)
            }
        return i
    })
}, function() { window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach) }, function(e, t, n) {
    (function(e) {
        var i = "undefined" != typeof e && e || "undefined" != typeof self && self || window,
            o = Function.prototype.apply;
        t.setTimeout = function() { return new a(o.call(setTimeout, i, arguments), clearTimeout) }, t.setInterval = function() { return new a(o.call(setInterval, i, arguments), clearInterval) }, t.clearTimeout = t.clearInterval = function(e) { e && e.close() };

        function a(e, t) { this._id = e, this._clearFn = t }
        a.prototype.unref = a.prototype.ref = function() {}, a.prototype.close = function() { this._clearFn.call(i, this._id) }, t.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, t.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t))
        }, n(185), t.setImmediate = "undefined" != typeof self && self.setImmediate || "undefined" != typeof e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || "undefined" != typeof e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(179))
}, function() {
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
    Object.keys || (Object.keys = function() {
        var t = Object.prototype.hasOwnProperty,
            n = !{ toString: null }.propertyIsEnumerable("toString"),
            i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            o = i.length;
        return function(a) {
            if ("function" != typeof a && ("object" !== ("undefined" == typeof a ? "undefined" : e(a)) || null === a)) throw new TypeError("Object.keys called on non-object");
            var r, s, l = [];
            for (r in a) t.call(a, r) && l.push(r);
            if (n)
                for (s = 0; o > s; s++) t.call(a, i[s]) && l.push(i[s]);
            return l
        }
    }())
}, function() {
    function e(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    window.Icon = t;

    function t(t) { var n, i = t.icon; return Brick({ mix: q["class"](t.mix, "Icon", (n = {}, e(n, i, !0), e(n, "active", t.active), e(n, "blue", t.blue), e(n, "bluer", t.bluer), e(n, "dark", t.dark), e(n, "selected", t.selected), e(n, "small", t.small), e(n, "white", t.white), n)), url: t.url, attrs: t.attrs }) }
}, function() {
    window.uBell = e;

    function e() { var e = store; return Bell({ url: "/feed?section=notifications", count: e.notificationsCount }) }
}, function() {
    var e = need("$"),
        t = need("ajax"),
        n = need("onDOMReady"),
        i = need("onBodyResize");
    window.CookiePolicy = {},
        function() { n(a), CookiePolicy._onHideClick = s }();
    var o = { body: "body", fixedHeader: "._hfixed", cookiePolicy: ".CookiePolicy" };

    function a() { e(o.cookiePolicy) && (r(), i(r)) }

    function r() {
        if (e(o.fixedHeader)) {
            var t = e(o.body),
                n = e(o.cookiePolicy),
                i = n.offsetHeight,
                a = parseInt(getComputedStyle(t).paddingBottom, 10);
            t.style.paddingBottom = a + i + 7 + "px"
        }
    }

    function s(e, n) {
        e.preventDefault();
        var a = n.getAttribute("href"),
            s = n.closest(o.cookiePolicy);
        s.style.display = "none", i("__clear", r), t.post(a, { _ajax: 1 })
    }
}, function() {
    var e = window,
        t = e.ge,
        n = e.geByClass1,
        i = e.toggle,
        o = e.val,
        a = e.ce,
        r = e.intval,
        s = e.toggleClass,
        l = e.after,
        c = e.cdf,
        u = e.gpeByClass,
        d = e.hide,
        f = e.addClass,
        p = e.remove,
        _ = e.show,
        m = e.getY,
        v = e.getH,
        h = e.scrollTop,
        g = e.hasClass,
        w = e.each,
        y = e.geByClass,
        b = e.attr,
        k = e.getCw,
        C = e.getHref,
        M = e.before,
        S = e.onBodyScrollForce,
        E = e.removeClass,
        T = e.scrollToEl,
        A = e.geByTag1,
        x = e.replace,
        I = window,
        P = I.ajax,
        B = window,
        L = B.ownerPhotoUpload,
        N = window,
        O = N.nav;
    var H = {
            onDone: function(e, a, r, l) {
                var c = t(e) || n("like_box", "z") || n("like_box") || n("wall_item_for_like_" + e);
                if (c && e) {
                    var u;
                    u = g("wall_item", c) || g("market_item", c) ? n("wi_like_wrap", c) : n("item_like", c);
                    var d = n("item_repost", c),
                        f = n("like_wrap", c);
                    u && (u.innerHTML = a || "", s("is_empty", u, !a), i(u, a)), d && (d.innerHTML = r || "", i(d, r)), f && o(f, l || "")
                }
            },
            onFail: function() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                switch (t) {
                    case 2:
                        O.hard_go(e[0])
                }
            }
        },
        D = {
            onDone: function(e, t, i, s, l) {
                var c = window,
                    u = c.photo;
                if (H.onDone.apply(this, arguments), this.photo_id) {
                    var d = u.get(this.photo_id);
                    if (d) {
                        var f = a("div", { innerHTML: d.likes });
                        o(n("item_like", f), t), d.likes = o(f), d.publish = '<span class="item_repost">' + i + "</span>", d.likes_cnt = r((b(n("v_like", f), "data-like_count") || "").replace(/\D+/g, "")), d.likes_me = l;
                        var f = a("div", { innerHTML: d.actions }),
                            p = n("like_wrap", f);
                        o(p, s), d.actions = o(f), u.save(d)
                    }
                }
            },
            onFail: H.onFail
        },
        j = {
            onDone: function() {
                var e = window,
                    t = e.photo;
                if (this.photo_id) {
                    var i = t.get(this.photo_id);
                    i && (i.tag_info = "", t.save(i));
                    var a = n("photo_view"),
                        r = n("pv_tag_wrap", a);
                    o(r, "")
                }
            }
        },
        R = {
            onDone: function(e, t, i) {
                var a = window,
                    r = a.photo,
                    l = window,
                    c = l.menu,
                    u = n("photo_view"),
                    d = n("photo_msg"),
                    f = !!t;
                if (u && d) {
                    o(d, t || ""), s("photo_deleted", u, f);
                    var p = r.get(e);
                    p && (p.deleted = t, r.save(p)), i && c && c.refresh({ pp: i })
                }
            }
        },
        q = {
            onDone: function(e, t) {
                var n = window.isNewMail && $(".messenger") && this.link.closest(".msg");
                if (o(e, t), n) {
                    var i = Number(n.className.match(/msg_id_(\d+)/)[1]);
                    store.mail.msgs[i].textFull = n.$(".msg__text").innerHTML
                }
            }
        },
        F = { onDone: function(e) { this.link && (l(c(e), u("pic_body_wrap", this.link)), d(this.link)) } },
        U = { onStart: function() { f("cm_item_loading", this.link) }, onDone: function(e) { this.link && o(this.link.parentNode, e) } },
        z = {
            onDone: function(e, i) {
                if (e) {
                    var r = window,
                        s = r.photo;
                    p(e + "_msg");
                    var c = t(e);
                    if (c) {
                        if (i) {
                            var u = a("div", { id: e + "_msg", className: (c.className || "") + " post_message_item" });
                            o(u, '<div class="pi_cont">' + i + "</div>"), l(u, c), d(c), n("rtm_reply_wrap", c) && window.reply && window.reply.edithide()
                        } else _(e);
                        if (this.photo_id) {
                            var f = s.get(this.photo_id);
                            if (f) {
                                var m = n("photoview"),
                                    v = n("comments_wrap", m);
                                f.comments_html = o(v)
                            }
                        }
                    }
                }
            }
        },
        V = {
            onDone: function(e, n, i, r) {
                if (e) {
                    p(e + "_msg");
                    var s = t(e);
                    if (s)
                        if (n) {
                            var c = (/^([a-z]+)_item$/i.exec(i || "") || [])[1] || "inline",
                                u = a("div", { id: e + "_msg", className: c + "_item " + c + "_message_item" }),
                                f = r || "message_item_cont";
                            o(u, '<div class="' + f + '">' + n + "</div>"), l(u, s), d(s)
                        } else n === !1 ? d(s) : _(s)
                }
            }
        },
        W = {
            onDone: function(e, i, r) {
                if (e) {
                    var c = t(e),
                        u = m(c) || m(e + "_msg"),
                        d = v(c) || v(e + "_msg"),
                        f = u + (320 > M ? d : 0) - h();
                    if (p(e + "_msg"), c) {
                        var _ = g("wall_item", c) || g("post", c) ? "wall" : "post";
                        if (r) {
                            var C = a("div", { id: e + "_msg", className: _ + "_item post_message_item" });
                            o(C, '<div class="pi_cont">' + r + "</div>"), l(C, c)
                        }
                        if (i) {
                            w(y(_ + "_item"), function() {
                                var e = this.id ? this.id.match(/^wall((-?\d+)_(-?\d+)(_\d+)?)$/) : !1,
                                    t = b(this, "data-copy"),
                                    n = t ? t.match(/^(-?\d+)_(-?\d+)$/) : !1;
                                return e ? void((!e[4] && e[2] == i || e[4] && e[3] == i || n && n[1] == i) && s("post_item_ignored", this, r)) : !0
                            });
                            var M = k(),
                                u = m(c) || m(e + "_msg"),
                                d = v(c) || v(e + "_msg"),
                                S = u + (320 > M ? d : 0) - f;
                            n("wall_item") === c && (S = 0), h(S)
                        }
                    }
                }
            }
        },
        X = {
            onDone: function(e, n) {
                if (e) {
                    var i = t(e);
                    if (p(e + "_msg"), i && n) {
                        var r = g("wall_item", i) || g("post", i) ? "wall" : "post",
                            c = a("div", { id: e + "_msg", className: r + "_item post_message_item" });
                        o(c, '<div class="pi_cont">' + n + "</div>"), l(c, i)
                    }
                    s("post_item_ignored", i, n)
                }
            }
        },
        Y = {
            onDone: function(e, n, i) {
                if (e) {
                    var r = t(e);
                    if (p(e + "_msg"), r) {
                        if (i) {
                            var c = a("div", { id: e + "_msg", className: "wall_item post_message_item" });
                            o(c, '<div class="pi_cont">' + i + "</div>"), l(c, r)
                        }
                        s("post_item_ignored", r)
                    }
                }
            }
        },
        G = {
            onStart: function() {
                var e = u("show_more_wrap", this.link),
                    t = n("show_more", e) || this.link,
                    i = a("div", { id: "show_more_loading", className: "show_more_loading", innerHTML: '<i class="i_loading">&nbsp;</i>' }),
                    o = a("div", { id: "show_more_wrap", className: "show_more_wrap" });
                b(i, "data-href", C(t)), o.appendChild(i), M(o, e), p(e)
            },
            onDone: function(e) {
                var n = window,
                    i = n.cur;
                P.tAlProcess = (new Date).getTime();
                var o = t("show_more_wrap"),
                    a = c(e);
                M(a, o), p(o), P.prepare_nav("mcont"), P.prepare_click("mcont"), S(100), P.tAlModule = i.module, P.tAlRender = (new Date).getTime()
            }
        },
        K = {
            onStart: G.onStart,
            onDone: function(e, i) {
                var o = window,
                    a = o.cur;
                P.tAlProcess = (new Date).getTime();
                var r = n("photos_page", "mcont"),
                    s = t("show_more_wrap"),
                    l = c(i);
                e = e.replace(/<img src="([^"]+)" class="/gi, '<img data-src="$1" class="_image ');
                var u = c(e);
                r && r.appendChild(u), M(l, s), p(s), P.prepare_nav("mcont"), P.prepare_click("mcont"), S(100), P.tAlModule = a.module, P.tAlRender = (new Date).getTime()
            }
        },
        Q = {
            onStart: G.onStart,
            onDone: function(e, i) {
                var o = window,
                    a = o.cur;
                P.tAlProcess = (new Date).getTime();
                var r = n("audios_block", n("audios", "mcont")),
                    s = t("show_more_wrap"),
                    l = c(i),
                    u = c(e);
                r && r.appendChild(u), M(l, s), p(s), P.prepare_nav("mcont"), P.prepare_click("mcont"), P.tAlModule = a.module, P.tAlRender = (new Date).getTime()
            }
        },
        J = {
            onDone: function(e) {
                var t = this.link.parentNode;
                o(t, e)
            }
        },
        Z = { onStart: function() { f("mva_item_loading", this.link) }, onDone: function(e, t) { E("mva_item_loading", this.link), e.upload_url || t && O.hard_go(t), L && L.crop(e) || t && O.hard_go(t) }, onFail: function() { E("mva_item_loading", this.link) } },
        et = {
            onStart: function() {
                var e = this.link,
                    t = u("notify_lite", e);
                if (t) return p(t);
                for (; e = e.parentNode;)
                    if (g("notify_item", e)) { p(g("notify_panel", e.parentNode) ? e.parentNode : e); break }
            }
        },
        tt = {
            onStart: function() {
                var e = y("pagination", "mcont");
                w(e, function(e, t) { M(a("div", { className: "summary_loading", innerHTML: '<i class="i_loading"></i>' }), t.firstChild) })
            },
            onDone: function(e, i, a) {
                var r = window,
                    s = r.mail,
                    l = t("messages" + i);
                l && (o(l, e), s.onMessagesRepainted(!0), !this.save && T()), this.save && s.saveDialog({ messages: e }, i), this.clear && (o(A("textarea", "write_form"), ""), p(n("pi_medias", "write_form"))), E("cp_attach_btn_sel", n("cp_attach_btn")), window.isNewMail && MailScrap.clearSystemMessage2(), a && a.play_animation_msg_id && StickersSettings.getAutoplay() && StickersAnimation.loadStickerInMvkIMAndPlay(a.play_animation_msg_id)
            },
            onFail: function() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                switch (t) {
                    case 2:
                        this.link.form && this.link.form.submit()
                }
            }
        },
        nt = {
            onStart: function() {
                var e = y("pagination", "mcont");
                w(e, function(e, t) { M(a("div", { className: "summary_loading", innerHTML: '<i class="i_loading"></i>' }), t.firstChild) })
            },
            onDone: function(e, n) {
                var i = window,
                    a = i.mail,
                    r = t("dialogs");
                r && (o(r, e), !this.no_scroll && T(), a.cacheDialogsPage()), a.save(n)
            }
        },
        it = {
            onFail: function(e, t) {
                if (e === P.RESPONSE_CAPTCHA) {
                    var n = this.link && this.link.form,
                        i = n && n.code ? n.code.value : "";
                    t += "&code=" + i, O.hard_go(t)
                }
            }
        },
        ot = {
            onStart: function() {
                var e = u("friendsList__showMoreBtnWrap", this.link),
                    t = n("friendsList__showMoreBtn", e) || this.link,
                    i = a("div", { id: "show_more_loading", className: "wait_loading" }),
                    o = a("div", { id: "show_more_wrap", className: "friendsList__showMoreBtnWrap" });
                b(i, "data-href", C(t)), o.appendChild(i), M(o, e), p(e)
            },
            onFail: function() {
                var e = this,
                    t = this.link.getAttribute("data-href") || this.link.getAttribute("href"),
                    n = 500;
                setTimeout(function() { P.post(t, { _ajax: 1 }, { onDone: ot.onDone.bind(e), onFail: ot.onFail.bind(e) }) }, n)
            },
            onDone: G.onDone
        },
        at = {
            onDone: function(e, n) {
                if (e) {
                    var i = t(e);
                    i && i.parentNode && n && x(c(n), i.parentNode)
                }
            }
        },
        rt = {
            onDone: function(e, t) {
                if (e) {
                    var n = y(e);
                    if (n.length && t)
                        for (var i = 0, o = n.length; o > i; i++) n[i].parentNode && x(c(t), n[i].parentNode)
                }
            }
        },
        st = {
            onDone: function(e, r, l, c) {
                if (e) {
                    var u = t(e);
                    if (u) {
                        var d = n("wia_close", u);
                        if (d && (o(d, l), d.href = r), g("single_wall_item", u)) {
                            var f = t("nc_form"),
                                p = n("wall_replies");
                            f ? i(f, !!c) : c && (p ? domInsert(p, c) : (domInsertAfter(a("div", { innerHTML: c }), u), p = n("wall_replies"))), s("closed_comments", p, !c)
                        }
                    }
                }
            }
        };
    window.Like = H, window.PhotoLike = D, window.PhotoTag = j, window.PhotoDelete = R, window.Poll = q, window.CopyHistory = F, window.ToggleMenu = U, window.Comment = z, window.ItemDelete = V, window.FeedIgnore = W, window.FeedIgnoreItem = X, window.FeedIgnoreComments = Y, window.Wall = G, window.Photos = K, window.Audios = Q, window.FixPost = J, window.ProfileMove = Z, window.Notify = et, window.Dialog = tt, window.Dialogs = nt, window.LoginCheckAuthCodePage = it, window.WallSubscribe = at, window.FeedSubscribe = rt, window.ImportedFriends = ot, window.CloseComments = st
}, function() {
    window.SettingsNotifyGroup = {},
        function() { SettingsNotifyGroup._onChange = t }();
    var e = { notifyGroup: ".settingsNotifyGroup", description: ".settingsNotifyGroup__description" };

    function t(t, n) {
        var i = n.$control,
            o = i.closest(e.notifyGroup).$(e.description);
        o.innerHTML = t
    }
}, function() {
    var e = window,
        t = e.se,
        n = e.remove,
        i = e.gpeByTag,
        o = e.ce,
        a = e.each,
        r = e.append,
        s = e.gpeByClass,
        l = e.toggleClass,
        c = e.cancelEvent,
        u = e.hasClass,
        d = e.geByClass1,
        f = e.addClass,
        p = e.getY,
        _ = e.getH,
        m = e.scrollTop,
        v = e.getCh,
        h = e.removeClass,
        g = e.checkEvent,
        w = e.geByClass,
        y = e.getW,
        b = e.replaceClass,
        k = e.escapeRE,
        C = e.ge,
        M = e.val,
        S = e.after,
        E = e.scrollToEl,
        T = e.replaceEntities,
        A = e.toggle,
        x = e.elfocus,
        I = e.isUndefined,
        P = e.isVisible,
        B = e.clone,
        L = e.attr,
        N = e.before,
        O = e.srand,
        H = e.extend,
        D = window,
        j = D.ajax,
        R = window,
        q = R.nav,
        F = window,
        U = F.Dialog,
        z = {
            onStickersTabSelected: befall(),
            onStickerClick: befall(),
            onStickersInit: t(),
            onReplyClick: t(),
            add_attach: function(e, t) {
                var s = window,
                    l = s.al;
                n("feed_extra_field");
                var c = i("form", e),
                    u = o("input", { id: "feed_extra_field", type: "hidden", name: "add_attach", value: 2 });
                if (c) { var d = !1; if (a(c, function(e, t) { return "submit" === t.type ? (d = t, !1) : void 0 }), d) return r(u, c), window.al && l.ver ? q.go(d, t) : c.submit() }
                return !0
            },
            toggleActions: function(e, t) { var n = s("post_item", e); return l("pi_actions_opened", n), c(t), !1 },
            wallActions: function(e, t) {
                var n = window,
                    i = n.tooltip,
                    o = s("_audioPlaylist", e) || s("wall_item", e) || s("post", e);
                if (!o) return !0;
                if (u("wi_actions_opened", o)) h("wi_actions_opened", o), i.hide();
                else {
                    var a = d("wi_actions_wrap", o),
                        r = d("wi_actions", a),
                        g = d("wi_actions_btn", o);
                    z.wallActionsHide(), f("wi_actions_opened", o);
                    var w = p(o) + 45 + _(r) + 7,
                        y = m() + v();
                    l("wi_actions_top", a, w > y), i.addHandler(z.wallActionsHide), i.show(a, g)
                }
                return c(t), !1
            },
            wallActionsHide: function() {
                var e = window,
                    t = e.tooltip;
                h("wi_actions_opened", d("wi_actions_opened")), t.hide()
            },
            wallPostOpen: function(e, t) {
                var n = s("wall_item", e),
                    i = d("wi_date", n);
                return i ? q.go_after(i, t) : !0
            },
            toggleGif: function(e, t, n) { return e ? g(t) ? !0 : u("current_gif", e) ? z.hideGif(e, t) : z.showGif(e, t, n) : !0 },
            showGif: function(e, t, n) {
                var i = window,
                    s = i.cur;
                if (!e) return !0;
                if (g(t)) return !0;
                if (n) {
                    if (s.loadedGifs || (s.loadedGifs = {}), !s.loadedGifs[e.href] && !confirm(n)) return !1;
                    s.loadedGifs[e.href] = !0
                }
                var l = p(e),
                    d = m();
                a(w("current_gif", "mcont"), function(e, t) { z.hideGif(t) }), m(d - (l - p(e)));
                var v = o("img", { src: e.href, className: "gif_original" });
                f("current_gif gif_loading", e), r(v, e);
                var h = function(t) {
                        if (y(v) && _(v) || t) {
                            if (clearInterval(k), !u("current_gif", e)) return;
                            b("gif_loading", "gif_opened", e)
                        }
                    },
                    k = setInterval(h, 100);
                return v.onload = h, c(t)
            },
            hideGif: function(e, t) { return e ? g(t) ? !0 : (h("current_gif", e), h("gif_opened", e), h("gif_loading", e), n(d("gif_original", e)), c(t)) : !0 },
            replyNamesRE: function() {
                var e = window,
                    t = e.cur;
                if (!t.replyNames) return !1;
                var n = [];
                return a(t.replyNames, function() { n.push(k(this[0])) }), new RegExp("^(" + n.join("|") + ")")
            },
            replyTo: function(e, t, n, i, o) {
                var a = window,
                    c = a.cur;
                if (g(e)) return !0;
                n = n || 0, h("nc_current_reply", d("nc_current_reply"));
                var u = C("nc_form"),
                    v = C("nc_message"),
                    w = d("nc_reply_name", u),
                    y = s("near_btn", w),
                    b = C("nc_reply_as"),
                    k = M(v),
                    I = z.replyNamesRE();
                if (n) {
                    var P = C(t + "_" + n),
                        B = p(P) + _(P),
                        L = m();
                    S(u, P), f("nc_current_reply", d("pi_reply_wrap", P)), m(L + p(P) + _(P) - B);
                    var N = c.replyNames[i] || {},
                        O = N[0] || "",
                        H = N[1] || "";
                    k = k ? I ? k.replace(I, O) : k : O, z.onReplyClick(!0, O)
                } else {
                    r(u, d("wall_replies")), E(u);
                    var H = "";
                    k = I ? k.replace(I, "") : k
                }
                return M(v, T(k)), M(w, H), A(y, n), b && (M(b, +o), l("cp_post_as_group", u, +o)), M("nc_reply_to", n), c.replyTo = n, x(v), !1
            },
            stickersInit: function() {
                if (!window.isNewMail || !d("messenger")) {
                    var e = window,
                        t = e.cur,
                        n = window,
                        i = n.Scroller,
                        o = C("stickers_panel");
                    if (o) {
                        var a = d("sp_body", o),
                            r = d("sp_stickers_tabs", o);
                        t.scroller && t.scroller.destroy(), t.scroller = new i(a, { byPage: !0 }), t.scroller.init(), t.destroy.push(function() { t.scroller.destroy() }), t.tabScroller && t.tabScroller.destroy(), t.tabScroller = new i(r), t.tabScroller.init(), t.destroy.push(function() { t.tabScroller.destroy() }), z.onStickersInit(!0)
                    }
                }
            },
            stickersToggle: function(e, t) {
                var n = window,
                    i = n.cur;
                if (!i.stickers) return !0;
                I(t) && (t = !P("stickers_panel"));
                var o = C("write_form") || C("nc_form"),
                    a = C("stickers_panel"),
                    r = d("cp_sticker_btn", o);
                return a ? (A(a, t), l("cp_sticker_btn_sel", r, t), t && i.tabScroller && i.tabScroller.onShow(), !1) : !0
            },
            stickersClick: function(e, t) {
                var n = window,
                    i = n.cur;
                return i.stickers && i.stickers[t] ? (window.isNewMail && (window.uMailWrite.drawStickers(), window.uMailWrite.openStickersPanel()), z.stickersToggle(null, !0), z.stickersSelectTab(null, t)) : q.go(e)
            },
            stickersStoreOpen: function(e) {
                var t = window,
                    n = t.cur;
                return j.click(e, !1, { url_params: { reply_to: n.replyTo || 0 } })
            },
            stickersSelectTab: function(e, t) {
                var n = window,
                    i = n.cur;
                if (!window.isNewMail && i.tabScroller && !i.tabScroller.canClick()) return !1;
                var o = C("stickers_panel"),
                    a = d("sp_body", o),
                    r = d("sp_tab_selected", o);
                if (i.stickers[t]) {
                    i.scroller && i.scroller.destroy(), M(a, i.stickers[t]), i.scroller && i.scroller.init(), e || (e = d("sp_tab" + t, o)), h("sp_tab_selected", r), f("sp_tab_selected", e);
                    var s = p(o),
                        l = s + y(o),
                        c = m(),
                        u = c + v();
                    (c > s || l > u) && E(o), i.tabScroller && i.tabScroller.showElem(e), StickersAnimation && StickersAnimation.loadAutoplayAnimationStickers()
                }
                return window.isNewMail && z.onStickersTabSelected(), !1
            },
            addRecentSticker: function(e, t, i) {
                var r = window,
                    l = r.cur,
                    c = s("sticker_item", e);
                if (l.stickers && l.stickers[-1] && c) {
                    var u = o("div", { innerHTML: l.stickers[-1] }),
                        f = B(c),
                        p = d("sticker_thumb", f),
                        _ = d("stickers_list", u);
                    L(p, "onclick", "return post.sendSticker(this, " + t + ", true);"), a(w("sticker" + t, _), function() { n(this) }), N(f, _.firstChild);
                    var m = 0;
                    a(w("sticker_item", _), function() { window.isNewMail ? m++ >= 16 && n(this) : m++ >= 8 && n(this) }), l.stickers[-1] = M(u), i && z.stickersSelectTab(!1, -1)
                }
            },
            sendSticker: function(e, t, n, i) {
                if (window.isNewMail && z.onStickerClick(t)) return z.addRecentSticker(e, t, n), !1;
                var o = window,
                    a = o.cur;
                if (a.scroller && !a.scroller.canClick()) return !1;
                z.stickersToggle(e, !1);
                var r = C("write_submit"),
                    s = { lock: !0, url_params: { media: "sticker" + t, _af: O() } };
                if (n && !i && (s.url_params.media_from = "recent"), !i) {
                    var l = L(e, "href");
                    l && (i = l.split("sticker_referrer=")[1].split("&")[0])
                }
                if (i && (s.url_params.sticker_referrer = i), z.addRecentSticker(e, t, n), r) return j.click(r, H({ save: !0 }, U), s);
                var r = C("nc_submit");
                return r ? j.click(r, {}, s) : void 0
            }
        };
    window.post = z
}, function() {
    window.Spinner = e;

    function e() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = e ? e.mix : "";
        return Icon({ mix: t + " Spinner", icon: "spinner" })
    }
}, function(e, t, n) {
    var i = n(190),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    var r = window,
        s = r.gpeByClass,
        l = r.setStyle,
        c = "msg_item",
        u = "-webkit-tap-highlight-color";
    o["default"]._onMouseDown(function(e) {
        for (var t = e;;)
            if (t = s(c, t), !t || t && attr(t, "data-id")) break;
        t && (d(t), setTimeout(function() { return f(t) }, 400))
    });

    function d(e) { l(e, u, "transparent") }

    function f(e) { l(e, u, "initial") }
}, function() {
    function e(e, t, n) {
        if (browser.wkwebview) { attr(t, "onclick", ""), attr(t, "href", "vk://vk.com/write" + (2e9 + e)); var i = new Event("click"); return t.dispatchEvent(i), void setTimeout(function() { attr(t, "href", "/mail?act=show&chat=" + e), t.textContent = n }) }
        browser.android ? location.href = "https://vk.com/write" + (2e9 + e) : browser.ios ? (attr(t, "onclick", ""), attr(t, "href", "/mail?act=show&chat=" + e), t.textContent = n, location.href = "vk://vk.com/write" + (2e9 + e)) : location.href = "/mail?act=show&chat=" + e
    }
    window.ChatPreview = { join: function(t, n, i) { return ajax.post(t, {}, { onDone: function(t) { e(t, n, i) } }), !1 }, open: function(t, n, i) { return setTimeout(function() { e(t, n, i) }), !1 } }
}, function() {
    var e = window,
        t = e.ajax,
        n = e.obj2qs,
        i = e.parseJSON,
        o = e.autoScroll,
        a = e.ImportedFriends;
    window.Friends = { onImportSuccess: befall("serviceId", "friendsHtml", "total"), onImportFailed: befall("serviceId"), accept: h, decline: g, makeImportRequest: w };
    var r = "/friends",
        s = "accept",
        l = "decline",
        c = null,
        u = "/friends.php?act=save_contacts&type=",
        d = "friendsImport__loading",
        f = d + "_hidden",
        p = "friendsImport__result",
        _ = p + "_shown",
        m = "friendsList__footerBtn_showMore";

    function v(e, i, o, a, s, l, c) {
        var u = { act: e, hash: o, id: i };
        a && (u.from = a), s && (u.block_id = s);
        var d = r + n(u);
        t.post(d, { _ajax: 1 }, { onDone: l, onFail: c })
    }

    function h(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c,
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : c;
        v(s, e, t, n, i, o, a)
    }

    function g(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c,
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : c;
        v(l, e, t, n, i, o, a)
    }

    function w(e, n, i) {
        if (!window.XMLHttpRequest) return void(window.location = e);
        var o = function(e) { return y(e, n, i) },
            a = function() { return k(i) };
        t.plainpost(e, { _ajax: 1 }, o, a, !0)
    }

    function y(e, n, o) {
        var a = i(e),
            r = a.user,
            s = a.userhash,
            l = a.contacts,
            c = u + o,
            d = a.error;
        return d ? void k(o) : void t.post(c, { _ajax: 1, user: r, userhash: s, hash: n, contacts: l }, { onDone: function(e, t) { return b(o, e, t) }, onFail: function() { return k(o) } })
    }

    function b(e, t, n) {
        var i = geByClass1(d),
            r = geByClass1(p);
        addClass(f, i), r && (r.innerHTML = t, addClass(_, r)), o(function() { return geByClass1(m) }, a, { no_cache: !0 }), Friends.onImportSuccess(e, t, n), window.opener && window.opener.Friends.onImportSuccess(e, t, n)
    }

    function k(e) { Friends.onImportFailed(e), window.opener && (window.opener.Friends.onImportFailed(e), window.close()) }
}, function() {
    Object.assign(MailActs, { onCloseClick: befall(), onRemoveClick: befall(), onImportantClick: befall(), onReplyClick: befall(), onForwardClick: befall(), onSpamClick: befall(), onPinClick: befall(), onMoreClick: befall(), onEditClick: befall(), setCount: e, setEditAvailable: i, setImportantAvailable: o, togglePin: c, setModifiers: a, setLabels: r, update: u }),
        function() { MailActs._onButtonClick = s, MailActs._onCloseClick = MailActs.onCloseClick, MailActs._onMoreClick = d, onBodyResize(t), document.addEventListener("click", n) }();

    function e(e) {
        var t = langNumeric(e, lang.mobile_mail_messages_selected),
            n = t.replace("{count}", e);
        $$(".mailActs__counter").forEach(function(e) { return e.innerText = n }), 1 != e && i(!1), u()
    }

    function t() { store.mail.cur && u() }

    function n(e) { store.mail.cur && l(e) }

    function i(e) { a({ canEdit: e }) }

    function o(e) { a({ canImportant: e }) }

    function a(e) {
        $$(".mailActs").forEach(function(t) {
            var n = q.parseClass("mailActs", t.getAttribute("class"));
            t.setAttribute("class", q["class"]("mailActs", Object.assign({}, n, e)))
        })
    }

    function r(e) {
        var t = window.lang,
            n = e.pinned ? t.mobile_mail_messages_actions_unpin : t.mobile_mail_messages_actions_pin,
            i = e.important ? t.mobile_mail_messages_actions_important_off : t.mobile_mail_messages_actions_important;
        $(".mailActs__icon_type_pin").setAttribute("aria-label", n), $(".mailActs__icon_type_important").setAttribute("aria-label", i), $(".mailActs__chevronListItem_type_pin").innerHTML = n, $(".mailActs__chevronListItem_type_important").innerHTML = i
    }

    function s(e) {
        switch (e) {
            case "edit":
                MailActs.onEditClick();
                break;
            case "remove":
                MailActs.onRemoveClick();
                break;
            case "important":
                MailActs.onImportantClick();
                break;
            case "reply":
                MailActs.onReplyClick();
                break;
            case "forward":
                MailActs.onForwardClick();
                break;
            case "spam":
                MailActs.onSpamClick();
                break;
            case "pin":
                MailActs.onPinClick()
        }
    }

    function l(e) {
        var t = ".mailActs__chevronMoreIcon",
            n = ".mailActs__chevronList",
            i = "mailActs_menuOpened",
            o = e.target,
            a = $(".mailActs");
        a && a.classList.contains(i) && !o.closest(n) && !o.closest(t) && a.classList.remove("mailActs_menuOpened")
    }

    function c(e) { $$(".mailActs").forEach(function(t) { return t.classList.toggle("mailActs_canPin", e) }) }

    function u() {
        var e = 36,
            t = 34,
            n = ".mailActs__chevron",
            i = ".mailActs__chevronListItem",
            o = ".mailActs__icon",
            r = "mailActs__icon_hidden",
            s = "mailActs__chevronListItem_hidden",
            l = document.querySelector(n),
            c = l.offsetWidth - 1,
            u = l.querySelectorAll(i),
            d = l.querySelectorAll(o);
        Array.prototype.forEach.call(d, function(n, i) { c < e * d.length ? c - t >= e * (i + 1) ? (n.classList.remove(r), u[i].classList.add(s)) : (n.classList.add(r), u[i].classList.remove(s)) : (n.classList.remove(r), u[i].classList.add(s)) }), a({ cutted: c < e * d.length })
    }

    function d() { $$(".mailActs").forEach(function(e) { return e.classList.toggle("mailActs_menuOpened") }) }
}, , function() {
    "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || ! function(e) {
        if ("Element" in e) {
            var t = "classList",
                n = "prototype",
                i = e.Element[n],
                o = Object,
                a = String[n].trim || function() { return this.replace(/^\s+|\s+$/g, "") },
                r = Array[n].indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                s = function(e, t) { this.name = e, this.code = DOMException[e], this.message = t },
                l = function(e, t) { if ("" === t) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified"); if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character"); return r.call(e, t) },
                c = function(e) {
                    for (var t = a.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, o = n.length; o > i; i++) this.push(n[i]);
                    this._updateClassName = function() { e.setAttribute("class", this.toString()) }
                },
                u = c[n] = [],
                d = function() { return new c(this) };
            if (s[n] = Error[n], u.item = function(e) { return this[e] || null }, u.contains = function(e) { return e += "", -1 !== l(this, e) }, u.add = function() {
                    var e, t = arguments,
                        n = 0,
                        i = t.length,
                        o = !1;
                    do e = t[n] + "", -1 === l(this, e) && (this.push(e), o = !0); while (++n < i);
                    o && this._updateClassName()
                }, u.remove = function() {
                    var e, t, n = arguments,
                        i = 0,
                        o = n.length,
                        a = !1;
                    do
                        for (e = n[i] + "", t = l(this, e); - 1 !== t;) this.splice(t, 1), a = !0, t = l(this, e); while (++i < o);
                    a && this._updateClassName()
                }, u.toggle = function(e, t) {
                    e += "";
                    var n = this.contains(e),
                        i = n ? t !== !0 && "remove" : t !== !1 && "add";
                    return i && this[i](e), t === !0 || t === !1 ? t : !n
                }, u.toString = function() { return this.join(" ") }, o.defineProperty) {
                var f = { get: d, enumerable: !0, configurable: !0 };
                try { o.defineProperty(i, t, f) } catch (p) {
                    (void 0 === p.number || -2146823252 === p.number) && (f.enumerable = !1, o.defineProperty(i, t, f))
                }
            } else o[n].__defineGetter__ && i.__defineGetter__(t, d)
        }
    }(window.self), function() {
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function(e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function(e) { var n, i = arguments.length; for (n = 0; i > n; n++) e = arguments[n], t.call(this, e) }
            };
            t("add"), t("remove")
        }
        if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) { return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e) }
        }
        e = null
    }())
}, function() {
    Object.assign(window, { Oval: e, Oval_isHidden: t });

    function e(e) { return wd.html({ "class": [bem["class"]("Oval", { type: e.gray ? "minor" : e.type, hidden: t(e.value) }), e.mix], inner: e.value }) }

    function t(e) { return !e || 0 >= e }
}, function() {
    var e = window,
        t = e.browser,
        n = window,
        i = n.setCookie;
    t.ios && i("remixmvk_iphone_x", o() ? 1 : 0);

    function o() { return t.ios && 3 === window.devicePixelRatio && 375 === window.screen.width && 812 === window.screen.height }
}, function(e, t, n) {
    var i = n(95),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    window.landingsSlider = o["default"]
}, function() { "use strict" }, function() {
    window.LoginHistory = { _onSubmit: e };

    function e(e, t, n) {
        var i = geByClass1("loginHistory__iframe");
        preventEvent(e), t.submit(), addEvent(i, "load", function() { return nav.go(n) })
    }
}, function() {
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var i = arguments[1], o = 0; n > o;) {
                var a = t[o];
                if (e.call(i, a, o, t)) return a;
                o++
            }
            return void 0
        }
    })
}, function(e, t, n) {
    var i = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    o = !1,
                    a = void 0;
                try { for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0); } catch (l) { o = !0, a = l } finally { try {!i && s["return"] && s["return"]() } finally { if (o) throw a } }
                return n
            }
            return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
        }(),
        o = n(134),
        a = r(o);

    function r(e) { return e && e.__esModule ? e : { "default": e } }
    var s = window,
        l = s.removeEvent,
        c = s.addEvent,
        u = s.addClass,
        d = s.removeClass,
        f = s.hasClass,
        p = s.getCookie,
        _ = s.setCookie,
        m = s.browser,
        v = s.setDocumentDomain,
        h = function() {
            v();
            var e = window.audioSubscribe,
                t = U(),
                n = !1,
                o = j("remixaudio_show_alert_today"),
                r = j("remixaudio_show_alert_to_three_month"),
                s = p("remixaudio_date"),
                h = !1,
                g = !1,
                w = 6e5,
                y = new a["default"](w, { onEnd: function() { q() } }),
                b = "remixaudio_background_play_time_",
                k = j(b, 1),
                C = j("remixaudio_background_play_time_limit"),
                M = 1,
                S = C - k === 0,
                E = new a["default"](1e3 * C, { tick: 1e3 * M, onTick: function(e) { if (L && !P.hidden) return void E.pause(); var t = C - Math.round(e / 1e3); return window.audio.playing() ? (E.start(), void(C === k + t ? F() : k + t > C ? (F(), _(b, C, 1)) : _(b, k + t, 1))) : void E.pause() }, onEnd: function() { F() } }),
                T = D(),
                A = i(T, 2),
                x = A[0],
                I = A[1],
                P = { hidden: !1 },
                B = !1,
                L = x && I;
            if (L) e || c(document, I, H);
            else {
                var N = 18e4;
                B = new a["default"](N, { tick: 1e3, onTick: function() {}, onEnd: function() { n = !0, S ? F() : E.start() } })
            }

            function O() { return P.hidden }

            function H() { document[x] ? (E.start(), P.hidden = !0) : (E.pause(), P.hidden = !1) }

            function D() {
                var e = void 0,
                    t = void 0;
                if ("undefined" != typeof document.hidden) e = "hidden", t = "visibilitychange";
                else if ("undefined" != typeof document.msHidden) e = "msHidden", t = "msvisibilitychange";
                else {
                    if ("undefined" == typeof document.webkitHidden) return [!1, !1];
                    e = "webkitHidden", t = "webkitvisibilitychange"
                }
                return [e, t]
            }

            function j(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = parseInt(p(e), 10);
                return isNaN(n, 10) ? t : n
            }

            function R() {
                var e = geByClass1("audioAttention");
                e && 2 > o && 10 > r && (u(e, "audioAttention_show"), y.start(), _("remixaudio_show_alert_today", ++o, 1), _("remixaudio_show_alert_to_three_month", ++r, 1), 1 === r && _("remixaudio_show_alert_to_three_month_date", s, 93))
            }

            function q() { d(geByClass1("audioAttention"), "audioAttention_show"), y.stop() }

            function F() { e || (S = !0, window.audio.pause(), E.pause(), R()) }

            function U() {
                var e = m.opera_mini,
                    t = m.opera_mobile,
                    n = m.msie_mobile,
                    i = m.msie_edge,
                    o = m.amigo,
                    a = window.opera | window.opr | navigator.userAgent.indexOf(" OPR/") > -1 | navigator.userAgent.indexOf(" Coast/") > -1 | navigator.userAgent.indexOf(" OPiOS/") > -1,
                    r = navigator.userAgent.indexOf("OPR/") > -1 && navigator.userAgent.indexOf("Mobile") > -1 && navigator.userAgent.indexOf("Presto/") < 0,
                    s = navigator.userAgent.indexOf("Opera Mini/") > -1 && navigator.userAgent.indexOf("Presto/") > -1;
                return a && f("_hover", document.body) ? !1 : "undefined" == typeof document.hidden ? !0 : a || r || s || e || t || n || i || o ? !0 : !1
            }

            function z() { B && (n || B.isStarted() || (c(document, isTouch ? "touchstart" : "mousedown scroll", $), B.start())) }

            function $() { B && (E.pause(), n = !1, l(document, isTouch ? "touchstart" : "mousedown scroll", $), B.stop()) }

            function V() { h && c(document, isTouch ? "touchstart" : "mousedown", W()) }

            function W() { l(document, isTouch ? "touchstart" : "mousedown", W()), g = !0, h = !1 }
            return { badBrowser: t, audioSubscribe: e, isSleep: n, hasTouch: g, backgroundPlayCountdown: E, touchTrack: V, touchUnTrack: W, sleepModeStart: z, sleepModePause: $, showPaymentAlert: R, hidePaymentAlert: q, isBadBrowser: U, isVisibilityChange: L, isHidden: O }
        }();
    window.AudioSubscribe = h
}, function() {
    window.Input = { setPrefix: n, getValue: t };
    var e = { "native": ".Input__native", prefix: ".Input__prefix" };

    function t(t) { var n = t.$(e["native"]); return n.value }

    function n(t, n) {
        var i = t.$(e.prefix);
        i.innerText = n
    }
}, function() {
    var e = window,
        t = e.ajax,
        n = e.obj2qs,
        i = function() {
            var e = "/club",
                i = "enter",
                o = "leave",
                a = null;

            function r(i, o, a, r, s, l) {
                var c = e + o + n({ act: i, hash: a, id: o, from: r });
                t.post(c, { _ajax: 1 }, { onDone: s, onFail: l })
            }

            function s(e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a;
                r(i, e, t, n, o, s)
            }

            function l(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a;
                r(o, e, t, n, i, s)
            }
            return { enter: s, leave: l }
        }();
    window.Groups = i
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var i = window,
        o = i.isObject,
        a = i.extend,
        r = i.ge,
        s = i.geByClass1,
        l = i.val,
        c = i.addClass,
        u = i.addEvent,
        d = i.removeEvent,
        f = i.setStyle,
        p = i.cancelEvent,
        _ = i.vkNow,
        m = i.getW,
        v = function() {
            function e(t, i) { n(this, e), o(i) || (i = { items: i }), this.opts = a({ slideClassName: "", onStartChange: !1, onChange: !1, pointsWrap: !1, slideContFn: !1, shownSlidesNum: 1 }, i), this.wrap = r(t), this.parseItems(i.items), this.init() }
            return e.prototype.parseItems = function(e) {
                for (var t = [], n = 0; n < e.length; n++) { var i = e[n]; "string" == typeof i && (i = { className: i }), i = a({ html: "", className: "", pos: t.length }, i), t.push(i) }
                this.items = t
            }, e.prototype.init = function() {
                if (c("landings_slider_wrap", this.wrap), u(this.wrap, "touchstart mousedown", this.touchStart.bind(this)), this.opts.pointsWrap) {
                    var e = "";
                    for (var t in this.items) e += '<div class="landings_slider_point"></div>';
                    c("landings_slider_points", this.opts.pointsWrap), l(this.opts.pointsWrap, e)
                }
                this.changeSlide(0)
            }, e.prototype.getTouchX = function(e) { return e.targetTouches && e.targetTouches.length > 0 ? e.targetTouches[0].pageX : e.pageX }, e.prototype.getTouchY = function(e) { return e.targetTouches && e.targetTouches.length > 0 ? e.touches[0].pageY : e.pageY }, e.prototype.touchStart = function(e) {
                var t = this.getTouchX(e),
                    n = this.getTouchY(e),
                    i = this,
                    o = !1,
                    a = !1,
                    r = _(),
                    s = 0,
                    l = this.getTouchX(e),
                    c = m(this.wrap);

                function v(e) {
                    if (!a) {
                        if (!o && Math.abs(i.getTouchY(e) - n) > 20) return void(a = !0);
                        i.lock && (o = !0, t = i.getTouchX(e), r = _(), i.changeSlide(i.newPos), p(e), i.lock = 0, clearTimeout(i.changeTimeout));
                        var u = i.getTouchX(e),
                            d = t - u;
                        (Math.abs(d) > 20 || o) && (p(e), o || (t = i.getTouchX(e), d = 0, o = !0), s = d, l = u, d = -(100 + d / c * 100), d -= 100 * i.opts.shownSlidesNum - 100, f(i.helper, "transform", "translateX(" + d + "%)"))
                    }
                }

                function h() {
                    if (d(bodyNode, "mousemove touchmove", v), d(bodyNode, "mouseup touchend touchcancel", h), !i.lock)
                        if (i.lock = 1, Math.abs(s) > 50) {
                            var e = 0 > s ? "prev" : "next",
                                n = Math.abs(l - t) / (r / _());
                            n += .2 * n;
                            var o = 100 * i.opts.shownSlidesNum;
                            o = "next" == e ? 100 + o : o - 100, f(i.helper, { transition: "transform " + n + "ms", transform: "translateX(-" + o + "%)" });
                            var a = i.items.length - 1,
                                c = "prev" == e ? i.pos - 1 : i.pos + 1;
                            0 > c ? c = a : c > a && (c = 0), i.opts.onStartChange && i.opts.onStartChange(c, e), i.newPos = c, i.changeTimeout = setTimeout(function() { i.lock = 0, i.changeSlide(c) }, n)
                        } else f(i.helper, { transition: "transform 200ms", transform: "translateX(-" + 100 * i.opts.shownSlidesNum + "%)" }), setTimeout(function() { i.lock = 0 }, 200)
                }
                d(bodyNode, "mousemove touchmove", v), d(bodyNode, "mouseup touchend touchcancel", h), u(bodyNode, "mousemove touchmove", v), u(bodyNode, "mouseup touchend touchcancel", h)
            }, e.prototype.makeItem = function(e) {
                var t = this.pos == e.pos ? "_active_slide " : "",
                    n = this.opts.slideContFn ? this.opts.slideContFn(e) : e.html;
                return '<div class="landings_slider_item ' + t + e.className + " " + this.opts.slideClassName + '">' + n + "</div>"
            }, e.prototype.getSlidesHtml = function(e) {
                for (var t = this.opts.shownSlidesNum, n = this.items.length - 1, i = "", o = e, a = 0; t > a; a++) o--, 0 > o && (o = n), i = this.makeItem(this.items[o]) + i;
                i += this.makeItem(this.items[e]), o = e;
                for (var r = 0; t > r; r++) o++, o > n && (o = 0), i += this.makeItem(this.items[o]);
                return i
            }, e.prototype.changeSlide = function(e) {
                if (this.pos = Math.max(0, Math.min(e, this.items.length - 1)), this.replaceHtml(this.getSlidesHtml(this.pos)), this.opts.onChange && this.opts.onChange(this.pos), this.opts.pointsWrap) {
                    var t = r(this.opts.pointsWrap);
                    removeClass("selected", s("selected", t)), c("selected", t.children[this.pos])
                }
            }, e.prototype.replaceHtml = function(e) { l(this.wrap, '<div class="landings_slider_helper">' + e + "</div>"), this.helper = s("landings_slider_helper", this.wrap), f(this.helper, "transform", "translateX(-" + 100 * this.opts.shownSlidesNum + "%)") }, e.prototype.toSlide = function(e, t) {
                this.lock = 1;
                var n = this.makeItem(this.items[this.pos]),
                    i = this.makeItem(this.items[e]);
                e > this.pos ? n += i : n = i + n, this.replaceHtml(n), t || (t = e > this.pos ? "next" : "prev");
                var o = "next" == t ? 0 : -100;
                f(this.helper, "transform", "translateX(" + o + "%)"), this.opts.onStartChange && this.opts.onStartChange(e, t);
                var a = this;
                clearTimeout(this.toSlideTimer), this.toSlideTimer = setTimeout(function() { o = "next" == t ? -100 : 0, f(a.helper, { transition: "transform 200ms", transform: "translateX(" + o + "%)" }), a.toSlideTimer = setTimeout(function() { a.lock = 0, a.changeSlide(e) }, 200) }, 10)
            }, e
        }();
    t["default"] = v
}, function() {
    window.FeedBlocks = {
        hideReason: function e(t, n) {
            if (e.progress) return !1;
            e.progress = !0;
            var i = "block_" + t,
                o = ge(i);
            cur.feedBlocksHTML && delete cur.feedBlocksHTML[i], ajax.post("feed.php", { act: "block_hide_reason", block_id: t, reason: 0 | n, hash: attr(o, "data-hash"), pos: attr(o, "data-pos"), ref: attr(o, "data-ref") }, { onDone: function(t) { e.progress = !1, t ? val(o, t) : hide(o), e.progress = !1 }, onFail: function() { e.progress = !1 } })
        },
        restore: function(e) {
            var t = "block_" + e,
                n = ge(t);
            cur.feedBlocksHTML && cur.feedBlocksHTML[t] && val(t, cur.feedBlocksHTML[t]), ajax.post("feed.php", { act: "block_restore", block_id: e, hash: attr(n, "data-hash"), pos: attr(n, "data-pos"), ref: attr(n, "data-ref") })
        },
        hide: function t(e) {
            if (t.progress) return !1;
            t.progress = !0, post.wallActionsHide();
            var n = "block_" + e,
                i = ge(n);
            return ajax.post("feed.php", { act: "block_hide", block_id: e, hash: attr(i, "data-hash"), pos: attr(i, "data-pos"), ref: attr(i, "data-ref") }, { onDone: function(e) { post.wallActionsHide(), cur.feedBlocksHTML || (cur.feedBlocksHTML = {}), cur.feedBlocksHTML[n] = val(i), val(i, e), t.progress = !1 }, onFail: function() { t.progress = !1 } }), !1
        }
    }
}, function() {
    var e = need("$"),
        t = (need("attr"), need("geByClass1"), need("preventEvent")),
        n = need("Popup");
    window.SendMoneyForm = {},
        function() { SendMoneyForm._onAmountChange = c, SendMoneyForm._onSubmit = _, SendMoneyForm._onRecommAmountChange = u, SendMoneyForm._onAutoAcceptToggle = m, SendMoneyForm._onNoAmountToggle = v, SendMoneyForm._onChooseCardClick = l, SendMoneyForm._onChooseCardCancelClick = s, SendMoneyForm._onChooseCardContinueClick = a, SendMoneyForm._onCardSelect = r }();
    var i = { form: "sendMoneyForm", errorMin: "sendMoneyForm_error_min", errorMax: "sendMoneyForm_error_max", addCardVisible: "sendMoneyForm_addCardVisible", recommErrorMin: "sendMoneyForm_recommErrorMin", recommErrorMax: "sendMoneyForm_recommErrorMax", noAmount: "sendMoneyForm_noAmount", autoAccept: "sendMoneyForm_autoAccept" },
        o = { form: ".sendMoneyForm", cardsPopup: ".sendMoneyForm__cardsPopup", amountInput: ".sendMoneyForm__input_amount", recommInput: ".sendMoneyForm__recommAmountInput input" };

    function a() {
        var t = e('.Control__native[name="card"]:checked').value,
            i = e('.Control__native[name="card"]:checked ~ .Control__label').innerText;
        e('input[name="accept_card"]').value = t, e('input[name="accept_card"]').setAttribute("data-value", t), e(".sendMoneyForm__chooseCard").innerText = i, n.close()
    }

    function r(t) {
        var n = "-1" === t.value,
            a = e(o.form);
        a.classList.toggle(i.addCardVisible, n)
    }

    function s() { n.close() }

    function l() {
        var t = e(o.cardsPopup);
        n.open(t)
    }

    function c(t) {
        f(t), p(t, 6);
        var n = t.closest(o.form),
            a = "1" === n.getAttribute("data-is-chat-request"),
            r = Number(t.value),
            s = Number(n.getAttribute("data-max-amount"));
        if (n.classList.remove(i.errorMin), n.classList.remove(i.errorMax), a || r > s && n.classList.add(i.errorMax), a) {
            var l = Number(n.getAttribute("data-min-amount")),
                c = Number(n.getAttribute("data-chat-members-count")),
                u = Math.ceil(r / c),
                d = Math.min(s, Math.max(l, u)),
                _ = e(o.recommInput);
            _.value = d, n.classList.remove(i.recommErrorMax), n.classList.remove(i.recommErrorMin)
        }
    }

    function u(e) {
        f(e), p(e, 6);
        var t = e.closest(o.form),
            n = Number(e.value),
            a = t.getAttribute("data-max-amount");
        t.classList.remove(i.recommErrorMax), t.classList.remove(i.recommErrorMin), n > a && t.classList.add(i.recommErrorMax)
    }

    function d() { var t = e('input[name="no_amount"]'); return t && t.checked }

    function f(e) { e.value = parseInt(e.value, 10) || "" }

    function p(e, t) { e.value = e.value.slice(0, t) }

    function _(n, a) {
        var r = a.$(o.amountInput),
            s = r.value,
            l = Number(s),
            c = Number(a.getAttribute("data-min-amount")),
            u = Number(a.getAttribute("data-max-amount")),
            f = "1" === a.getAttribute("data-is-chat-request"),
            p = !1;
        if (a.classList.remove(i.errorMin), a.classList.remove(i.errorMax), f && (a.classList.remove(i.recommErrorMax), a.classList.remove(i.recommErrorMin)), d() || (c > l || !s || s !== l.toString() ? (a.classList.add(i.errorMin), p = !0) : l > u && !f && (a.classList.add(i.errorMax), p = !0)), f) {
            var _ = a.$(o.recommInput),
                m = _.value,
                v = Number(m);
            c > v || !m || m !== v.toString() ? (a.classList.add(i.recommErrorMin), p = !0) : v > u && (a.classList.add(i.recommErrorMax), p = !0)
        }
        if (p) t(n), stopEvent(n);
        else {
            t(n), stopEvent(n), a.insertAdjacentHTML("beforeend", '<input id="submit" type="submit" style="display: none" />');
            var h = e("#submit");
            ajax.click(h)
        }
    }

    function m(t) {
        var n = e(o.form);
        n.classList.toggle(i.autoAccept, t.checked), e('input[name="accept_card"]').value = t.checked ? e('input[name="accept_card"]').getAttribute("data-value") : ""
    }

    function v(t) {
        var n = e(o.form);
        n.classList.toggle(i.noAmount, t.checked)
    }
}, function(e) {
    var t, n, i = e.exports = {};

    function o() { throw new Error("setTimeout has not been defined") }

    function a() { throw new Error("clearTimeout has not been defined") }! function() { try { t = "function" == typeof setTimeout ? setTimeout : o } catch (e) { t = o } try { n = "function" == typeof clearTimeout ? clearTimeout : a } catch (e) { n = a } }();

    function r(e) { if (t === setTimeout) return setTimeout(e, 0); if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0); try { return t(e, 0) } catch (n) { try { return t.call(null, e, 0) } catch (n) { return t.call(this, e, 0) } } }

    function s(e) { if (n === clearTimeout) return clearTimeout(e); if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e); try { return n(e) } catch (t) { try { return n.call(null, e) } catch (t) { return n.call(this, e) } } }
    var l, c = [],
        u = !1,
        d = -1;

    function f() { u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && p()) }

    function p() {
        if (!u) {
            var e = r(f);
            u = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++d < t;) l && l[d].run();
                d = -1, t = c.length
            }
            l = null, u = !1, s(e)
        }
    }
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new _(e, t)), 1 !== c.length || u || r(p)
    };

    function _(e, t) { this.fun = e, this.array = t }
    _.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {};

    function m() {}
    i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function() { return [] }, i.binding = function() { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function() { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 }
}, function(e, t, n) {
    (function(e) {
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            n = setTimeout;

        function i() {}

        function o(e, t) { return function() { e.apply(t, arguments) } }

        function a(e, t) {
            for (; 3 === e._state;) e = e._value;
            return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void d._immediateFn(function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null === n) return void(1 === e._state ? r : s)(t.promise, e._value);
                var i;
                try { i = n(e._value) } catch (o) { return void s(t.promise, o) }
                r(t.promise, i)
            }))
        }

        function r(e, n) {
            try {
                if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (n && ("object" === ("undefined" == typeof n ? "undefined" : t(n)) || "function" == typeof n)) { var i = n.then; if (n instanceof d) return e._state = 3, e._value = n, void l(e); if ("function" == typeof i) return void u(o(i, n), e) }
                e._state = 1, e._value = n, l(e)
            } catch (a) { s(e, a) }
        }

        function s(e, t) { e._state = 2, e._value = t, l(e) }

        function l(e) {
            2 === e._state && 0 === e._deferreds.length && d._immediateFn(function() { e._handled || d._unhandledRejectionFn(e._value) });
            for (var t = 0, n = e._deferreds.length; n > t; t++) a(e, e._deferreds[t]);
            e._deferreds = null
        }

        function c(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }

        function u(e, t) {
            var n = !1;
            try { e(function(e) { n || (n = !0, r(t, e)) }, function(e) { n || (n = !0, s(t, e)) }) } catch (i) {
                if (n) return;
                n = !0, s(t, i)
            }
        }

        function d(e) {
            if (!(this instanceof d)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
        }
        var f = d.prototype;
        f["catch"] = function(e) { return this.then(null, e) }, f.then = function(e, t) { var n = new this.constructor(i); return a(this, new c(e, t, n)), n }, d.all = function(e) {
            return new d(function(n, i) {
                if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array");
                var o = Array.prototype.slice.call(e);
                if (0 === o.length) return n([]);
                var a = o.length;

                function r(e, s) {
                    try {
                        if (s && ("object" === ("undefined" == typeof s ? "undefined" : t(s)) || "function" == typeof s)) { var l = s.then; if ("function" == typeof l) return void l.call(s, function(t) { r(e, t) }, i) }
                        o[e] = s, 0 === --a && n(o)
                    } catch (c) { i(c) }
                }
                for (var s = 0; s < o.length; s++) r(s, o[s])
            })
        }, d.resolve = function(e) { return e && "object" === ("undefined" == typeof e ? "undefined" : t(e)) && e.constructor === d ? e : new d(function(t) { t(e) }) }, d.reject = function(e) { return new d(function(t, n) { n(e) }) }, d.race = function(e) { return new d(function(t, n) { for (var i = 0, o = e.length; o > i; i++) e[i].then(t, n) }) }, d._immediateFn = "function" == typeof e && function(t) { e(t) } || function(e) { n(e, 0) }, d._unhandledRejectionFn = function(e) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e) }, window.Promise || (window.Promise = d)
    }).call(this, n(71).setImmediate)
}, function() {
    function e(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    Object.assign(q, { "class": t, parseClass: i });

    function t() { for (var e = [], t = null, i = arguments.length, o = Array(i), a = 0; i > a; a++) o[a] = arguments[a]; return o.forEach(function(i) { "string" == typeof i ? (e.push(i), t = i) : i && (e = e.concat(n(t, i))) }), e.join(" ") }

    function n(t, n) {
        var i = [];
        return "string" == typeof n && (n = e({}, n, !0)), Object.keys(n).forEach(function(e) {
            var o = n[e];
            o === !0 ? i.push(t + "_" + e) : o && i.push(t + "_" + e + "_" + o)
        }), i
    }

    function i(e, t) {
        var n = {};
        return t.trim().split(/\s+/).forEach(function(t) {
            if (t !== e) {
                var i = t.replace(e + "_", "").split("_");
                n[i[0]] = i.length > 1 ? i[1] : !0
            }
        }), n
    }
}, function() {
    var e = window,
        t = e.preventEvent,
        n = e.stopEvent,
        i = e.gpeByClass,
        o = e.toggleClass,
        a = e.removeClass,
        r = e.addEvent,
        s = e.removeEvent,
        l = "dropdown",
        c = "dropdown_open",
        u = {
            _onTogglerClick: function(e, u) {
                t(e), n(e);
                var d = i(l, u);
                if (o(d, c), d.isFirstClick !== !1) {
                    d.isFirstClick = !1;
                    var f = function() { a(d, c) };
                    r(window, "click", f), window.cur.destroy.push(function() { s(window, "click", f), d.isFirstClick = !0 })
                }
            }
        };
    window.Dropdown = u
}, function() { "use strict" }, function() {
    var e, t, n, i, o;

    function a(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var r = window,
        s = r.throttle,
        l = r.onDOMReady,
        c = r.addEvent,
        u = r.lsSet,
        d = r.lsGet,
        f = r.befall,
        p = r.hasClass,
        _ = (r.clog, r.domCA),
        m = r.scrollGetY,
        v = r.getCh,
        h = r.nav,
        g = r.page,
        w = r.getCw,
        y = r.ajax,
        b = r.extend;
    window.FeedAssistanceStats = (e = { register: ln, forceRegister: cn, onScroll: s(vn, 50), onStartViewElement: f("element"), onEndViewElement: f("element"), onStopTrackElement: f("element"), onViewedElement: f("element"), onBeforePageChange: kn, onPageChanged: Cn, getElementType: _n, registerElements: rn, registerTrackingCls: on, unregisterTrackingCls: an }, a(e, "unregisterTrackingCls", an), a(e, "setParenViewableX", un), a(e, "forceProcessTrack", dn), a(e, "dispatchElementEvent", fn), a(e, "dispatchEvent", pn), a(e, "serializeEventData", mn), a(e, "clearElemsCache", Sn), a(e, "_debug", hi), a(e, "getFromRef", pi), a(e, "getRoot", _i), a(e, "BLOCKS", {}), a(e, "EVENTS", {}), e);
    var k = 1e3,
        C = 60 * k,
        M = .5,
        S = .25,
        E = .5 * k,
        T = .5 * k,
        A = .5 * k,
        x = 5 * C,
        I = 2.5 * k,
        P = 10 * k,
        B = 6 * k,
        L = 20 * k,
        N = 30 * k,
        O = 5 * k,
        H = 6 * C,
        D = 100,
        j = "_feedAssistanceStatsType",
        R = "_feedAssistanceStatsIdled",
        q = "_feedAssistanceStatsModule",
        F = "_feedAssistanceStatsStarted",
        U = "_feedAssistanceStatsProcessed",
        z = "_feedAssistanceStatsEventTs",
        $ = "_feedAssistanceStatsCachedY",
        V = "_feedAssistanceStatsCachedX",
        W = "_feedAssistanceStatsLeft",
        X = "_feedAssistanceStatsHeight",
        Y = "_feedAssistanceStatsWidth",
        G = "_feedAssistanceStatsTop",
        K = "_feedAssistanceStatsBottom",
        Q = "_feedAssistanceStatsParentViewableX",
        J = "BLOCK_TYPE_RECOMMENDED_SLIDER",
        Z = "BLOCK_TYPE_RECOMMENDED_CARD",
        et = "BLOCK_TYPE_DEFAULT",
        tt = "BLOCK_TYPE_EXPLORE_BAIT",
        nt = "BLOCK_TYPE_PROFILE_PHOTO",
        it = "BLOCK_TYPE_PROMO_BUTTON",
        ot = "BLOCK_TYPE_IMPORT_CONTACTS",
        at = "BLOCK_TYPE_PUSH_SWITCH",
        rt = "view_block",
        st = "show_user_rec",
        lt = "open_user",
        ct = "add_friend",
        ut = "click_recommended_friends_slider",
        dt = "explore_bait",
        ft = "feed_assistance",
        pt = "hide",
        _t = "promo_button",
        mt = "SUB_EXPLORE_BAIT",
        vt = "view",
        ht = "like",
        gt = "comment",
        wt = "opened",
        yt = "subscribe",
        bt = "unsubscribe",
        kt = "open_user",
        Ct = "open_group",
        Mt = "hide",
        St = "report",
        Et = "seen",
        Tt = "filled",
        At = "enable_push",
        xt = "decline_push",
        It = "SUB_PROMO_BUTTON",
        Pt = "clicked",
        Bt = (t = {}, a(t, J, rt), a(t, it, rt), a(t, Z, st), a(t, tt, dt), a(t, nt, ft), a(t, ot, ft), a(t, at, ft), t),
        Lt = (n = {}, a(n, J, T), a(n, Z, A), a(n, tt, E), a(n, nt, E), a(n, ot, E), a(n, at, E), n),
        Nt = (i = {}, a(i, ti(J, rt), function(e) { var t = p("goodAuthorsSlider", _i(e)) ? "authors_rec" : "user_rec"; return mn(rt, t, e) }), a(i, ti(it, rt), function(e) { var t = geByClass1("feedAssistancePromoButtonInstallApp__button", e) ? "promo_install_app" : "promo_button"; return mn(rt, t, e) }), a(i, ti(Z, st), function(e) { return mn(st, e) }), a(i, ti(Z, lt), function(e) { var t = p("goodAuthorsSlider", _i(e)) ? "authors_rec" : "user_rec"; return mn(ut, e, t) }), a(i, ti(tt, dt), function() { return mn(mt, vt) }), a(i, ti(nt, ft), function(e) { return mn(ft, e, "m_ph", Et) }), a(i, ti(ot, ft), function(e) { return mn(ft, e, "m_mp", Et) }), a(i, ti(at, ft), function(e) { return mn(ft, e, "m_push_switch", Et) }), i),
        Ot = (o = {}, a(o, ut, function(e, t) { var n = vi(e); return [n, Date.now(), t].join("|") }), a(o, st, function(e) {
            var t = vi(e),
                n = p("goodAuthorsSlider", _i(e)),
                i = n ? "authors_rec" : "user_rec",
                o = pi(e);
            return [t, mi(e), domChildIndex(e), o, i].join("|")
        }), a(o, rt, function(e, t) { return [e, domChildIndex(t), mi(t), pi(t)].join("|") }), a(o, mt, function(e) { return e }), a(o, ft, function(e, t, n) { return [t, n, pi(e)].join("|") }), a(o, pt, function(e, t) { return [e, mi(t), domChildIndex(t), pi(t)].join("|") }), a(o, It, function(e, t, n) { return [domChildIndex(e), t, n || ""].join("|") }), o),
        Ht = "feed_other",
        Dt = "feedAssistance",
        jt = "feedAssistanceStat.events",
        Rt = "feedAssistanceStat.idled",
        qt = "/feed",
        Ft = "assistance_stats",
        Ut = [],
        zt = [],
        $t = Date.now(),
        Vt = 0,
        Wt = 0,
        Xt = !1,
        Yt = null,
        Gt = null,
        Kt = null,
        Qt = null,
        Jt = null,
        Zt = [],
        en = [],
        tn = !1;
    nn();

    function nn() {
        FeedAssistanceStats.BLOCKS = gn(), FeedAssistanceStats.EVENTS = hn(), c(window, "blur", yn), c(window, "focus", bn), l(function() { setTimeout(sn, 500) }), c(window, "scroll", function() {
            var e = m(),
                t = v();
            vn(e, t)
        }), h.onBeforeGo(function() { return kn() }), g.onChange(function() { return Cn() })
    }

    function on(e) { en.push(e) }

    function an(e) { si(en, e) }

    function rn() {
        var e = [];
        each(en, function() { e = e.concat(geByClass(this)) }), each(e, function() { ln(this, "feed") })
    }

    function sn() {
        rn();
        var e = Kn();
        e.length && (Wn(e), Qn()), dn(), Dn()
    }

    function ln(e, t) {!e[j] && Jn(e) && (e[j] = _n(e), e[q] = t, Ut.push(e)) }

    function cn(e, t) { e[j] = _n(e), e[q] = t, Ut.push(e) }

    function un(e, t) { e[Q] = t }

    function dn() {
        var e = m(),
            t = v();
        En(e, t)
    }

    function fn(e, t) {
        var n = t[j] || _n(t),
            i = ti(n, e),
            o = li(i),
            a = { type: e, data: o(t) };
        An(a)
    }

    function pn(e) { An(e) }

    function _n(e) { return e[j] ? e[j] : p("feedAssistance_recommendedFriends", e) ? J : p("prettyCard_friend", e) ? Z : p("prettyCard__photo", e) ? Z : p("prettyCard__bodyLink", e) ? Z : p("post_exploreBait", e) ? tt : p("feedAssistance_profilePhoto", e) ? nt : p("feedAssistance_promoButton", e) ? it : p("feedAssistance_importContacts", e) ? ot : p("feedAssistance_pushNotificationsSwitch", e) ? at : et }

    function mn(e) { for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i]; return Ot[e].apply(Ot, n) }

    function vn(e, t) {
        var n = vn,
            i = e || m(),
            o = t || v();
        En(i, o), Xt || tn ? (clearTimeout(n.timer), n.timer = setTimeout(wn, 150), tn = !1) : (Xt = !0, Hn(), Bn())
    }

    function hn() { return { EVENT_OPEN_USER: lt, EVENT_VIEW_BLOCK: rt, EVENT_VIEW_RECOMMENDED_CARD: st, EVENT_ACCEPT_FRIEND: ct, EVENT_EXPLORE_BAIT: dt, EVENT_EXPLORE_BAIT_SUB: mt, EVENT_FEED_ASSISTANCE: ft, SUB_EVENT_EXPLORE_BAIT_VIEW: vt, SUB_EVENT_EXPLORE_BAIT_LIKE: ht, SUB_EVENT_EXPLORE_BAIT_COMMENT: gt, SUB_EVENT_EXPLORE_BAIT_OPENED: wt, SUB_EVENT_EXPLORE_BAIT_SUBSCRIBE: yt, SUB_EVENT_EXPLORE_BAIT_UNSUBSCRIBE: bt, SUB_EVENT_EXPLORE_BAIT_OPEN_USER: kt, SUB_EVENT_EXPLORE_BAIT_OPEN_GROUP: Ct, SUB_EVENT_EXPLORE_BAIT_HIDE: Mt, SUB_EVENT_EXPLORE_BAIT_REPORT: St, SUB_EVENT_SEEN: Et, SUB_EVENT_FILLED: Tt, EVENT_HIDE_BLOCK: pt, SUB_EVENT_ENABLE_PUSH: At, SUB_EVENT_DECLINE_PUSH: xt, EVENT_PROMO_BUTTON: _t, EVENT_PROMO_BUTTON_SUB: It, SUB_EVENT_PROMO_BUTTON_CLICK: Pt } }

    function gn() { return { BLOCK_TYPE_RECOMMENDED_SLIDER: J, BLOCK_TYPE_RECOMMENDED_CARD: Z, BLOCK_TYPE_EXPLORE_BAIT: tt, BLOCK_TYPE_PROFILE_PHOTO: nt, BLOCK_TYPE_PROMO_BUTTON: it, BLOCK_TYPE_IMPORT_CONTACTS: ot } }

    function wn() { Hn(), On(), Xt = !1 }

    function yn() { Hn(), zn(), jn() }

    function bn() { zt.forEach(function(e) { e[F] = Date.now() }), Xn(null), Yn(null), On(), jn(), Dn() }

    function kn() { Hn(), Mn(), tn = !0, On() }

    function Cn() { rn(), dn() }

    function Mn() { fi(zt), Zt = Zt.concat(ei(zt)), ui(zt), zt = [] }

    function Sn() { Ut.forEach(function(e) { e[$] = !1, e[V] = !1 }) }

    function En(e, t) {
        var n = [];
        Ut.forEach(function(i) { return ri(i) ? void n.push(i) : void(xn(i, e, t) ? (i[F] = Date.now(), zt.push(i), FeedAssistanceStats.onStartViewElement(i)) : In(i, e, t) ? (i[R] ? delete i[R] : (Tn(i), FeedAssistanceStats.onEndViewElement(i)), delete i[F]) : Pn(i) && (Tn(i), FeedAssistanceStats.onViewedElement(i))) }), n.forEach(function(e) { si(Ut, e), FeedAssistanceStats.onStopTrackElement(e) })
    }

    function Tn(e) { si(zt, e), di(e), An(ai(e)), ci(e) }

    function An(e) { e && Zt.push(e) }

    function xn(e, t, n) { return !e[F] && Ln(e, M, t, n) && Nn(e, M) }

    function In(e, t, n) { return e[F] && (!Ln(e, S, t, n) || !Nn(e, S)) }

    function Pn(e) {
        if (!e[F]) return !1;
        var t = Math.min(x, Date.now() - e[F]),
            n = oi(e);
        return t > n
    }

    function Bn() {
        var e = ge("vk_head");
        Vt = e && e.offsetHeight, Wt = 0
    }

    function Ln(e, t, n, i) {
        if (!e) return !1;
        e[$] || (e[$] = !0, e[X] = e.offsetHeight, e[G] = n + e.getBoundingClientRect().top, e[K] = e[G] + e[X]);
        var o = i - Vt - Wt,
            a = n + Vt,
            r = n + i - Wt,
            s = e[X],
            l = e[G],
            c = e[K],
            u = c > a && r > l ? Math.min(r, c) - Math.max(a, l) : 0;
        return u >= Math.min(o * t, s * t)
    }

    function Nn(e, t) {
        var n = e[Q],
            i = 0;
        n && !n[V] && ~Ut.indexOf(n) && (n[V] = !0, n[Y] = n.clientWidth, n[W] = n.getBoundingClientRect().left + n.clientLeft), e[V] || (e[V] = !0, e[Y] = e.offsetWidth);
        var o = n ? n[Y] || n.clientWidth : w(),
            a = n ? n[W] || n.getBoundingClientRect().left + i : i,
            r = o + a,
            s = e[Y],
            l = e.getBoundingClientRect().left,
            c = s + l,
            u = s * t,
            d = s * Math.max(0, 1 - t);
        return l + u >= a && r >= c - d
    }

    function On() { Yt = setTimeout(Rn, I), Gt = setTimeout(qn, P), Kt = setTimeout(Fn, B), Qt = setTimeout(Un, L) }

    function Hn() { clearTimeout(Yt), clearTimeout(Gt), clearTimeout(Kt), clearTimeout(Qt) }

    function Dn() { Jt = setInterval($n, N) }

    function jn() { clearInterval(Jt) }

    function Rn() { Zt.length && Xn(Zt) }

    function qn() { Wn(Zt), Zt = [], Xn(null) }

    function Fn() { zt.length && (Yn(ei(zt)), Kt = setTimeout(Fn, O)) }

    function Un() { clearTimeout(Kt), fi(zt), Wn(ei(zt)), ui(zt), zt.forEach(function(e) { e[R] = !0 }), zt = [], Yn(null) }

    function zn() { fi(zt), Wn(Zt.concat(ei(zt))), ui(zt), Zt = [], zt = [] }

    function $n() { Zt.length >= D && qn() }

    function Vn(e) {
        var t = {};
        return each(e, function() {
            var e = t[this.type];
            e ? t[this.type].push(this.data) : t[this.type] = [this.data]
        }), t
    }

    function Wn(e) {
        if (e && e.length) {
            var t = { act: Ft };
            t = b(t, Vn(e)), y.post(qt, t)
        }
    }

    function Xn(e) { Gn(jt, e) }

    function Yn(e) { Gn(Rt, e) }

    function Gn(e, t) {
        var n = d(e) || {};
        t ? n[$t] = t : delete n[$t], u(e, n)
    }

    function Kn() {
        var e = Kn,
            t = [],
            n = d(jt) || {},
            i = d(Rt) || {};
        return e.iterator || (e.iterator = function(e) { return function(n) { Zn(n) && (t = t.concat(e[n])) } }), Object.keys(n).forEach(e.iterator(n)), Object.keys(i).forEach(e.iterator(i)), t
    }

    function Qn() {
        var e = Qn,
            t = d(jt) || {},
            n = d(Rt) || {};
        e.iterator || (e.iterator = function(e) { return function(t) { Zn(t) && delete e[t] } }), Object.keys(t).forEach(e.iterator(t)), Object.keys(n).forEach(e.iterator(n)), u(jt, t), u(Rt, n)
    }

    function Jn(e) { return !~Ut.indexOf(e) }

    function Zn(e) { var t = Number(e); return t !== $t && Date.now() - t >= H }

    function ei(e) {
        var t = [];
        return e.forEach(function(e) {
            var n = ai(e);
            n && t.push(n)
        }), t
    }

    function ti(e, t) { return e + "_" + t }

    function ni(e) { return Bt[e[j]] }

    function ii(e, t) { var n = Nt[ti(e[j], t)]; return n(e) }

    function oi(e) { var t = _n(e); return Lt[t] || E }

    function ai(e) { if (ri(e)) return null; if (!Pn(e)) return null; var t = ni(e); return { type: t, data: ii(e, t) } }

    function ri(e) { return e[U] || !document.body.contains(e) }

    function si(e, t) {
        var n = e.indexOf(t);
        n >= 0 && e.splice(n, 1)
    }

    function li(e) { return Nt[e] }

    function ci(e) { ri(e) || Pn(e) && (e[U] = !0) }

    function ui(e) { each(e, function() { ci(this) }) }

    function di(e) { e[z] = Date.now() }

    function fi(e) { e.forEach(di) }

    function pi(e) { return e = _i(e), e ? domData(e, "from-ref") || Ht : Ht }

    function _i(e) { return p(e, Dt) || (e = _(e, "." + Dt)), e }

    function mi(e) { var t = (new Date).getTime(); return e ? e[z] || e[F] || t : t }

    function vi(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "uid"; return intval(domData(e, t)) }

    function hi() { return { started: zt, tracking: Ut, events: Zt, blindTop: Vt, blindBottom: Wt } }
}, function() {
    var e = window,
        t = e.onDOMReady,
        n = e.onBodyResize,
        i = e.geByClass1,
        o = e.removeClass,
        a = e.addClass,
        r = e.gpeByClass,
        s = e.hasClass,
        l = e.toggleClass,
        c = window,
        u = c.clearCookie,
        d = c.setCookie;
    ! function() {
        t(e), n(e);

        function e() {
            if (i("tabs_block_hideable")) {
                var e = i("tabs_block");
                i("tabs_list").offsetHeight > i("tabs_list_more").offsetHeight ? o("tabs_block_without_show_more", e) : a("tabs_block_without_show_more", e)
            }
        }

        function c(e) {
            var t = r("tabs_block", e);
            s("tabs_block_opened", t) ? u("remixm_tabs_expanded") : d("remixm_tabs_expanded", 1), l("tabs_block_opened", t)
        }
        window.Tabs = { actualizeShowMoreVisibility: e, toggle: c }
    }()
}, function(e, t, n) {
    var i = n(48),
        o = n(160);
    window.StickersAnimation = i.StickersAnimation, window.StickersSettings = o.StickersSettings
}, function() {
    var e = t(['\n    <div class="', '">\n      <div class="Loading__dots">\n        <div class="Loading__dot Loading__dot_0"></div>\n        <div class="Loading__dot Loading__dot_1"></div>\n        <div class="Loading__dot Loading__dot_2"></div>\n      </div>\n    </div>\n  '], ['\n    <div class="', '">\n      <div class="Loading__dots">\n        <div class="Loading__dot Loading__dot_0"></div>\n        <div class="Loading__dot Loading__dot_1"></div>\n        <div class="Loading__dot Loading__dot_2"></div>\n      </div>\n    </div>\n  ']);

    function t(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    window.Loading = n;

    function n(t) { t || (t = {}); var n = q["class"](t.mix, "Loading", { white: t.white, large: t.large }); return q.html(e, n) }
}, function() {
    var e = function() {
        function e(e, t) {
            var n = [],
                i = !0,
                o = !1,
                a = void 0;
            try { for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0); } catch (l) { o = !0, a = l } finally { try {!i && s["return"] && s["return"]() } finally { if (o) throw a } }
            return n
        }
        return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
    }();
    window.Url = { make: t };

    function t(t, o) {
        var a = need("nav");
        if (!o) return t;
        var r = t.split("?"),
            s = e(r, 2),
            l = s[0],
            c = s[1],
            u = {},
            d = [];
        return c && c.split("&").map(function(t) {
            var n = t.split("="),
                i = e(n, 2),
                a = i[0],
                r = i[1];
            a in o || (o[a] = r)
        }), Object.keys(o).forEach(function(e) {
            var t = o[e];
            t === !0 && (t = a.getQuery(e)), (n(t) || i(t)) && (u[e] = t)
        }), Object.keys(u).forEach(function(e) { d.push(e + "=" + encodeURIComponent(u[e])) }), 0 === d.length ? l : l + "?" + d.join("&")
    }

    function n(e) { return "string" == typeof e && e }

    function i(e) { return "number" == typeof e && !isNaN(e) }
}, function() {
    Object.assign(uConvo, { onTap: Convo.onTap, redrawOnline: e, redrawUnread: t, redrawLastMsg: n, redrawTyping: i });

    function e(e) {
        var t = store.mail.peers[e];
        if (t) {
            var n = uConvo_getOnline(t);
            Convo.setOnline(e, n)
        }
    }

    function t(e) {
        if (store.mail.peers[e]) {
            var t = uConvo_getUnreadCount(e);
            Convo.setUnreadCount(e, t)
        }
    }

    function n(e) {
        var t = uConvo_getLastMsg(e);
        t && Convo.setLastMsg(e, t.textShort, t.dateShort)
    }

    function i(e) {
        var t = store.mail,
            n = t.cur,
            i = t.peers,
            o = t.members;
        if (n) {
            var a = i[e];
            if (a) {
                var r = a.typing;
                if (1 === r.length && r[0] === e) Convo.setTyping(e, !0);
                else {
                    var s = r.map(function(e) { return o[e].name });
                    Convo.setTyping(e, s)
                }
            }
        }
    }
}, function() {
    "function" != typeof Object.assign && (Object.assign = function(e) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (null != i)
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
        }
        return t
    })
}, function(e, t, n) { n(190), n(80), n(19) }, function() {
    Object.assign(uCurConvoTyping, { redraw: e });

    function e() {
        if (store.mail.cur.peerId) {
            var e = uCurConvoTyping_getNames();
            Typing.setTyping("curConvo", e)
        }
    }
}, , function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function() {
        function e(e, t) {
            var n = [],
                i = !0,
                o = !1,
                a = void 0;
            try { for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0); } catch (l) { o = !0, a = l } finally { try {!i && s["return"] && s["return"]() } finally { if (o) throw a } }
            return n
        }
        return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
    }();
    t.imageProxyURL = r;
    var i = window,
        o = i.each,
        a = i.intval;

    function r(e, t) {
        var n = [];
        return o(t, function(e, t) {
            switch (e) {
                case "size":
                    t = s(t)
            }
            t && n.push(e + "=" + t)
        }), n.length ? e + "&" + n.join("&") : e
    }

    function s(e) {
        var t = ("" + e).split("x"),
            i = n(t, 2),
            o = i[0],
            a = i[1];
        return o = o ? l(o) : "", a = a ? l(a) : "", o + "x" + a
    }

    function l(e) { return e > 0 && 1 > e ? Math.round(100 * e) / 100 : a(e) }
}, function() {
    var e = need("wd"),
        t = need("Loading");
    window.Btn = { setLoading: r, toggleDisabled: a },
        function() { Btn._onClick = o }();
    var n = { loading: "Btn_loading", secondary: "Btn_theme_secondary", loader: "Btn__loader" },
        i = { loader: "." + n.loader };

    function o(t, n, i) { t.preventDefault(), e.handle(i, { $btn: n }) }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !0;
        e.disabled = t
    }

    function r(e, o) {
        if (e) {
            var a = e.classList.contains(n.loading);
            if (o) {
                if (a) return;
                var r = e.classList.contains(n.secondary),
                    s = t({ mix: n.loader, white: !r, large: !0 });
                e.classList.add(n.loading), e.insertAdjacentHTML("afterbegin", s)
            } else {
                if (!a) return;
                var l = e.$(i.loader);
                e.classList.remove(n.loading), l.remove()
            }
        }
    }
}, function() {
    window.ReservedCodes = {},
        function() { ReservedCodes._onShowRestCodesClick = e }();

    function e() {
        var e = $(t.self);
        e.classList.toggle(n.restCodesShown)
    }
    var t = { self: ".ReservedCodes" },
        n = { restCodesShown: "ReservedCodes_restCodesShown" }
}, function() {
    window.groupInvitationClick = function(e, t) {
        var n = t.$btn,
            i = n.getAttribute("href"),
            o = n.nextElementSibling || n.previousElementSibling;
        o.remove(), ajax.post(i, { _ajax: 1 }, { onDone: function() {} }), n.closest(".BtnStack").outerHTML = '\n    <div class="notification__tempText">' + e + "</div>\n  "
    }, window.NotifyItem = {
        _onPhotoTagAcceptClick: function(e, t, n) {
            {
                var i = n.$btn,
                    o = i.getAttribute("href");
                i.nextElementSibling || i.previousElementSibling
            }
            ajax.post(o, { _ajax: 1 }, { onDone: function() {} }), i.closest(".BtnStack").outerHTML = '\n      <div class="notification__tempText">' + t + "</div>\n    "
        },
        _onPhotoTagDeclineClick: function(e, t, n) {
            {
                var i = n.$btn,
                    o = i.getAttribute("href");
                i.nextElementSibling || i.previousElementSibling
            }
            ajax.post(o, { _ajax: 1 }, { onDone: function() {} }), i.closest(".BtnStack").outerHTML = '\n      <div class="notification__tempText">' + t + "</div>\n    "
        },
        _onHideClick: function(e, t) {
            e.preventDefault();
            var n = e.target,
                i = n.getAttribute("href"),
                o = !t || confirm(t);
            if (o) {
                ajax.post(i, { _ajax: 1 });
                var a = n.closest(".notificationList__items");
                n.closest(".notification").remove();
                var r = a.closest(".notificationList");
                if (r.classList.contains("notificationList_type_unread")) {
                    var s = r.$(".pad__title"),
                        l = parseInt(s.innerText, 10),
                        c = l - 1;
                    s.innerText = langNumeric(c, lang.mobile_notifications_new)
                }
                0 === a.innerHTML.trim().length && r.classList.add("pad_empty")
            }
        },
        _onBodyScroll: function() { $$(".notification_actionsOpen").forEach(function(e) { e.classList.remove("notification_actionsOpen") }), window.removeEventListener("scroll", NotifyItem._onBodyScroll) },
        _onActionTriggerClick: function(e) {
            window.addEventListener("scroll", NotifyItem._onBodyScroll);
            var t = e.closest(".notification");
            t.classList.remove("notification_reverse"), t.classList.toggle("notification_actionsOpen"), $$(".notification_actionsOpen").forEach(function(e) { e !== t && e.classList.remove("notification_actionsOpen") });
            var n = t.$(".notification__actionsBubble").getBoundingClientRect();
            n.y < 50 && t.classList.add("notification_reverse")
        }
    }, window.FriendRequest = {
        _onAcceptClick: function(e, t) {
            var n = t.$btn,
                i = n.getAttribute("href"),
                o = n.nextElementSibling || n.previousElementSibling;
            o.remove(), ajax.post(i, { _ajax: 1 }, { onDone: function() {} }), n.closest(".BtnStack").outerHTML = '\n      <div class="notification__tempText">' + e + "</div>\n    "
        },
        _onDeclineClick: function(e, t) {
            var n = t.$btn,
                i = n.getAttribute("href"),
                o = n.nextElementSibling || n.previousElementSibling;
            o.remove(), ajax.post(i, { _ajax: 1 }, { onDone: function() {} }), n.closest(".BtnStack").outerHTML = '\n      <div class="notification__tempText">' + e + "</div>\n    "
        }
    }
}, function(e, t, n) {
    var i = n(16),
        o = window,
        a = (o.addClass, o.FeedAssistanceStats),
        r = o.page,
        s = o.geByClass1,
        l = o.onDOMReady,
        c = o.FeedNotifications;
    l(p), r.onChange(p);
    var u = "feedAssistance_pushNotificationsSwitch",
        d = "enable_browser_notifications",
        f = "m_push_switch";

    function p() {
        PushNotifier && PushNotifier.canBeEnabled().then(function(e) { return e && PushNotifier.getPermission() === i.PUSH_NOTIFIER_PERMISSION_DEFAULT }).then(function(e) {
            if (e) {
                c.addWebActionAcceptHandler(d, _), c.addWebActionDeclineHandler(d, m);
                var t = s(u);
                if (!t) return;
                a.registerTrackingCls(u), a.register(t, "feed")
            }
        })
    }

    function _(e) {
        return PushNotifier.requestPermission().then(function(t) {
            var n = void 0,
                o = !0;
            return unlockButton(e), t === i.PUSH_NOTIFIER_PERMISSION_DEFAULT ? o = !1 : (n = t === i.PUSH_NOTIFIER_PERMISSION_GRANTED ? a.EVENTS.SUB_EVENT_ENABLE_PUSH : a.EVENTS.SUB_EVENT_DECLINE_PUSH, h(e, n), v(), PushNotifier.init(), o)
        }, function() { return m(e) })
    }

    function m(e) { var t = !0; return unlockButton(e), h(e, a.EVENTS.SUB_EVENT_DECLINE_PUSH), v(), t }

    function v() {
        var e = s(u);
        remove(e)
    }

    function h(e, t) { a.dispatchEvent({ type: a.EVENTS.EVENT_FEED_ASSISTANCE, data: a.serializeEventData(a.EVENTS.EVENT_FEED_ASSISTANCE, e, f, t) }) }
}, function(e, t, n) {
    var i = n(175);

    function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var a = need("befall"),
        r = window,
        s = r.cancelEvent,
        l = r.removeEvent,
        c = r.srand,
        u = r.ce,
        d = r.addEvent,
        f = r.ssSet,
        p = r.lsGet,
        _ = r.vkNow,
        m = r.onDOMReady,
        v = r.ssGet,
        h = r.se,
        g = r.lsSet,
        w = r.each,
        y = r.AudioSubscribe,
        b = r.isTouch,
        k = function() {
            var e, t = !1,
                n = !1,
                r = !1,
                C = !1,
                M = function Z(e) {
                    (t || C !== !1) && (t = !1, L && C === !1 || (r = !0, q.pause.call(T))), s(e), l(T, "play", Z), l(document, b ? "touchstart" : "click", E)
                },
                S = function() { C !== !1 && C() },
                E = function et() { n && (n = !1, t = !0, q.play.call(T), l(document, b ? "touchstart" : "click", et)) },
                T = F(),
                A = c(),
                x = [],
                I = null,
                P = {},
                B = "",
                L = !1,
                N = !1,
                O = !1,
                H = !1,
                D = null,
                j = !1,
                R = !1;
            delete HTMLAudioElement.prototype.play, delete HTMLAudioElement.prototype.pause, delete HTMLAudioElement.prototype.load, delete HTMLAudioElement.prototype.canPlayType;
            var q = { play: HTMLAudioElement.prototype.play, pause: HTMLAudioElement.prototype.pause, load: HTMLAudioElement.prototype.load, canPlayType: HTMLAudioElement.prototype.canPlayType };

            function F(e) { var n = window.Audio ? new Audio : u("audio"); return n.autobuffer = !0, n.muted = !1, e && (n.volume = e.volume, l(e, "play", U), l(e, "pause", z), l(e, "progress", $), l(e, "timeupdate", V), l(e, "ended", W), l(e, "play", M), l(e, "progress canplaythrough", S), l(document, b ? "touchstart" : "click", E), e.muted = !0, e.pause(), e.src = null), H = !1, N = !1, O = !1, t = !1, r = !1, C = !1, d(n, "play", U), d(n, "pause", z), d(n, "progress", $), d(n, "timeupdate", V), d(n, "ended", W), d(n, "play", M), d(n, "progress canplaythrough", S), d(document, b ? "touchstart" : "click", E), n }

            function U() { L || (L = !0, k.onPlay(!0), f("audio_play", "1"), clearTimeout(D), D = setTimeout(K, 100)) }

            function z() { return r ? void(r = !1) : void(L && (L = !1, k.onPause(!0), f("audio_play", "0"), clearTimeout(D))) }

            function $() { k.onProgress(!0) }

            function V() { r || (k.onProgress(!0), k.onPositionChanged(!0, k.position(), k.duration()), f("audio_pos", k.position()), !H && T.duration - T.currentTime < .5 && (H = !0), N && (N = !1, k.next())) }

            function W() { k.onEnded(!0), H ? (H = !1, k.next()) : N = !0 }

            function X() { return x[I] || !1 }

            function Y() { return X().id || !1 }

            function G(e) { e && (T.src = i.audioUnmaskSource(e.src), q.load.call(T), k.onSelect(!0, e)) }

            function K() {
                if (L) {
                    var e = p("audio_current_player");
                    A != e ? k.pause() : D = setTimeout(K, 100)
                }
            }

            function Q() {
                var e = Y();
                f("audio_id", e), f("audio_pos", 0), j && (document.cookie = j + "=" + e + "; expires=" + new Date(_() + 864e5).toUTCString() + "; path=" + R)
            }

            function J(e) { f("audio_query", e), j && (document.cookie = j + "q=" + encodeURIComponent(e) + "; expires=" + new Date(_() + 864e5).toUTCString() + "; path=" + R) }
            return e = {
                onInit: a(),
                init: function(e) {
                    return k.support ? (e.cookie && (j = e.cookie, R = e.cookie_path || "/"), void m(function() {
                        e.playlist && k.playlist(e.playlist, { q: e.playlist_q || "" });
                        var t = v("audio_id");
                        if (t) {
                            var i = v("audio_pos"),
                                o = v("audio_vol"),
                                a = v("audio_play");
                            k.select(t), "1" == a && (null !== i && k.position(i), null !== o && k.volume(o), n = !0, k.play())
                        }
                        k.onInit()
                    })) : !1
                },
                support: T.canPlayType && q.canPlayType.call(T, "audio/mpeg") && "no" != q.canPlayType.call(T, "audio/mpeg") || !1,
                onPlay: h(Y),
                onPause: h(Y),
                onDeselect: h(Y, function() { return k.duration() }),
                onSelect: h(),
                onProgress: h(Y, function() { return k.loaded() }, function() { return k.duration() }),
                onPositionChanged: h(Y),
                onVolumeChanged: h(Y, function() { return T.volume }),
                onEnded: h(Y),
                onNotFoundError: h(),
                onEmptyPlaylistError: h(),
                playing: L,
                getCurrent: X,
                getCurrentId: Y,
                operate: function(e) { return k.support ? void(!e || x[I] && e == x[I].id ? L ? k.pause() : k.play() : k.play(e)) : !1 }
            }, o(e, "playing", function() { return y.badBrowser ? y.touchTrack() : L && !y.audioSubscribe && (y.isSleep || y.isVisibilityChange && y.isHidden() ? y.backgroundPlayCountdown.start() : y.sleepModeStart()), L }), o(e, "select", function(e) { if (!k.support) return !1; if (e) return x.length ? x[P[e]] ? (Y() && k.onDeselect(!0), I = P[e], G(x[I]), Q(), !0) : void k.onNotFoundError(!0, e) : void k.onEmptyPlaylistError(!0, e) }), o(e, "play", function(e) {
                if (!k.support) return !1;
                if (e) { if (L && k.pause(), !k.select(e)) return; try { T.currentTime = .01 } catch (t) {} }
                L || (T.muted = !1, q.play.call(T), L = !0, k.onPlay(!0), f("audio_play", "1"), g("audio_current_player", A))
            }), o(e, "pause", function() { return k.support ? void(L && (q.pause.call(T), L = !1, k.onPause(!0), f("audio_play", "0"), y.sleepModePause())) : !1 }), o(e, "position", function(e, t) {
                if (!k.support) return !1;
                if ("undefined" == typeof e) return T.currentTime;
                t && (e = k.duration() * e), e = Math.max(0, Math.min(e, k.duration()));
                var n = L;
                n && (L = !1, q.pause.call(T));
                try { T.currentTime = e, k.onPositionChanged(!0, k.position(), k.duration()), f("audio_pos", e), n && (L = !0, T.muted = !1, q.play.call(T)) } catch (i) { k.onPositionChanged(!0, e, k.duration()), C = function() { C = !1, k.position(e) }, n && (L = !0) }
            }), o(e, "volume", function(e) {
                if (!k.support) return !1;
                if ("undefined" == typeof e) return T.volume;
                try { T.volume = e || 0 } catch (t) {}
                k.onVolumeChanged(!0), f("audio_vol", e || 0)
            }), o(e, "loaded", function() { return T.buffered && T.buffered.length && T.buffered.end(T.buffered.length - 1) || 0 }), o(e, "duration", function() { return T.duration || x[I] && x[I].dur || 0 }), o(e, "next", function() { return k.support ? (L && k.pause(), k.onDeselect(!0), ++I >= x.length && (I = 0), G(x[I]), Q(), n = !0, (y.hasTouch && y.badBrowser || y.audioSubscribe || !y.badBrowser) && k.play(), y.hasTouch || !y.badBrowser || y.audioSubscribe || y.showPaymentAlert(), void(y.badBrowser && (y.hasTouch = !1))) : !1 }), o(e, "prev", function() { return k.support ? (L && k.pause(), k.onDeselect(!0), --I <= 0 && (I = x.length - 1), G(x[I]), Q(), n = !0, void k.play()) : !1 }), o(e, "playlist", function(e, t) { return k.support ? "undefined" == typeof e ? x : (L && k.pause(), X() && k.onDeselect(!0), x = e, B = t && t.q || "", I = null, P = {}, w(e, function(e, t) { P[t.id] = e }), J(B), void 0) : !1 }), o(e, "playlist_q", function() { return B }), o(e, "closeAttention", function(e, t) { s(t), hide(gpeByClass("audioAttention", e)) }), e
        }();
    window.audio = k
}, function(e, t, n) {
    var i = n(16);
    window.SettingsNotifyPush = {},
        function() { SettingsNotifyPush._onSwitch = o }();

    function o(e) { PushNotifier.canBeEnabled().then(function(t) { var n = e.$control ? geByTag1("input", e.$control) : !1; if (n) { if (!t) return void(n.checked = !1); var o = PushNotifier.getPermission(); return o === i.PUSH_NOTIFIER_PERMISSION_DENIED ? (n.checked = !1, void addClass("Popup_open", geByClass1("pageAllowPushPopup"))) : o !== i.PUSH_NOTIFIER_PERMISSION_GRANTED && e.checked ? void(o === i.PUSH_NOTIFIER_PERMISSION_DEFAULT && PushNotifier.requestPermission().then(function(t) { t === i.PUSH_NOTIFIER_PERMISSION_GRANTED ? PushNotifier.subscribe(!0).then(function() { return a(e) }) : n.checked = !1 })) : PushNotifier.subscribe(!0).then(function() { return a(e) }) } }) }

    function a(e) {
        var t = ce("input", { type: "submit" }, { display: "none" });
        e.$control.form.appendChild(t), ajax.click(t), e.$control.form.removeChild(t)
    }
}, function(e, t, n) {
    var i = n(20),
        o = n(132),
        a = null;

    function r(e) { for (var t = geByClass("audio-msg-track--wave-wrapper", e), n = 0, i = 0; i < t.length; i++) { try { n = parseInt(window.getComputedStyle(t[i], null).getPropertyValue("width")) } catch (o) { n = parseInt(t[i].currentStyle.width) } if (n > 0) break } return n }

    function s(e, t) { t = Math.round(t), e.length != t && (e = o.fastResample(e, t)); for (var n = "", i = 0, a = 0; a < e.length; a++) i = Math.floor(10 * e[a] * .95), 0 == i && (i = .5), n += "M" + (3 * a + 1) + "," + (10 - i) + "v" + 2 * i + "Z"; return '<svg class="audio-msg-track--wave" width="' + 3 * e.length + 'px"><path d="' + n + '"></path></svg>' }

    function l() {
        for (var e = geByClass("audio-msg-track"), t = 0; t < e.length; t++) {
            var n = attr(e[t], "data-wave");
            hasClass(e[t], "audio-msg-player") && t > 0 && (n = attr(e[t - 1], "data-wave"));
            var i = r(e[t]);
            if (n && i) {
                n = n.split(",");
                for (var o = geByClass("audio-msg-track--wave", e[t]), a = s(n, i / 3), l = 0; l < o.length; l++) {
                    var c = ce("div", { innerHTML: a }).firstChild;
                    o[l].parentNode.replaceChild(c, o[l])
                }
            }
        }
    }
    addEvent(window, "orientationchange", function() { return setTimeout(l, 500) }), window.mail && window.mail.onMessagesRepainted && (onDOMReady(l), window.mail.onMessagesRepainted(l));

    function c() { return a || (a = new i.VoiceMessagePlayer), a }
    window.AudioMessagePlayer = {
        loaded: !0,
        togglePlay: function(e) {
            var t = c(),
                n = t.attachTo(e);
            n === !0 ? t.play() : n.then(function() { t.play() })
        },
        detachPlayer: function(e) {
            var t = c();
            t.detach(e)
        },
        pauseGlobalMedia: function() { i.VoiceMessagePlayer.pauseGlobalMedia() },
        resumeGlobalMedia: function() { i.VoiceMessagePlayer.resumeGlobalMedia() },
        redrawWaves: l,
        getWave: s
    };
    try { stManager.done("voice_message_player.js") } catch (u) {}
}, function() {
    var e = window,
        t = e.ajax,
        n = e.domCA,
        i = e.remove,
        o = e.FeedAssistanceStats;
    window.FeedAssistance = { hide: u, setFilled: f };
    var a = "/feed",
        r = "hide_assistance",
        s = "feedAssistance",
        l = "." + s,
        c = "feedAssistance_filled";

    function u(e, t, o) {
        var a = n(e, l),
            r = hasClass(a, c);
        return i(a), r || d(e, t, o), !1
    }

    function d(e, n, i) {
        var s = o.getFromRef(e);
        t.post(a, { _ajax: 1, type: n, hash: i, act: r, from: s })
    }

    function f(e) {
        var t = hasClass(e, s) ? e : n(e, l);
        addClass(c, t)
    }
}, function() {
    var e = need("$"),
        t = need("$$"),
        n = need("Btn"),
        i = need("Input"),
        o = need("Control"),
        a = window.Join || (window.Join = {});
    ! function() { a._onCountryChange = l, a._onPhoneChange = c, a._onTermsAcceptChange = c }();
    var r = { eu: "Join_eu" },
        s = { join: ".Join", phone: ".Join__phone", accept: ".Join__accept", submit: ".Join__submit" };

    function l(n) {
        var a = n.$option,
            l = e(s.join),
            u = "1" === a.getAttribute("data-eu");
        l.classList.toggle(r.eu, u);
        var d = e(s.phone),
            f = a.value;
        i.setPrefix(d, f), t(s.accept).forEach(function(e) { return o.setChecked(e, !1) }), c()
    }

    function c() {
        var a = Array.prototype.slice.call(t(s.accept)),
            r = e(s.phone),
            l = e(s.submit);
        if (!l) return l = e('.button[type="submit"]'), void(l.disabled = !o.isChecked(a[0]));
        var c = a.some(o.isChecked) && i.getValue(r).trim().length > 0;
        n.toggleDisabled(l, !c)
    }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    t.QuadAlgorithm = function() {
        function e() { n(this, e), this.clear() }
        return e.prototype.push = function(e) { this._count++, this._accum += e, this._accum_q += e * e }, e.prototype.get = function() { return 1 == this._count ? this._accum : Math.sqrt((this._accum_q - this._accum * this._accum / this._count) / this._count) }, e.prototype.clear = function() { this._count = 0, this._accum = 0, this._accum_q = 0 }, e
    }()
}, function() {
    var e = window,
        t = e.ge,
        n = e.each,
        i = e.geByTag,
        o = e.intval,
        a = e.gpeByClass,
        r = e.geByTag1,
        s = e.attr,
        l = e.val,
        c = e.geByClass,
        u = e.isUndefined,
        d = e.geByClass1,
        f = e.toggle,
        p = e.isVisible,
        _ = e.toggleClass,
        m = e.show,
        v = e.cancelEvent,
        h = e.ce,
        g = e.setStyle,
        w = e.parseJSON,
        y = e.replace,
        b = e.reflow,
        k = e.after,
        C = e.addClass,
        M = e.clog,
        S = e.uploadFile,
        E = e.bind,
        T = e.readFile,
        A = e.append,
        x = e.before,
        I = e.srand,
        P = e.extend,
        B = e.canUploadFile,
        L = e.gpeByTag,
        N = e.submitBtn,
        O = e.removeEvent,
        H = e.addEvent,
        D = e.clone,
        j = e.remove,
        R = window,
        q = R.ajax,
        F = {
            isUploading: !1,
            onBeforeRemove: befall(),
            onRemove: befall(),
            onStart: befall(),
            onError: befall(),
            onComplete: befall(),
            _uploadData: {},
            _uploadQueue: [],
            _readerQueue: [],
            _processUploadQueue: !1,
            _processReaderQueue: !1,
            fallback: function(e, t) {
                var n = window,
                    i = n.post;
                return e && i.add_attach(e, t), !1
            },
            getLastAttachId: function() {
                var e = t("attached_wrap");
                if (!e) return 0;
                var a, r = 0;
                return n(i("input"), function() {
                    if (a = this.name.match(/^attach(\d+)_type$/i)) {
                        var e = o(a[1]);
                        e > r && (r = e)
                    }
                }), r
            },
            refreshAttachIds: function(e) {
                var c = t("attached_wrap");
                if (c) {
                    var u, d = a("mr_x_wrap", e),
                        f = r("input", d),
                        p = o((f && f.name.match(/^attach(\d+)(_type)?$/i) || [])[1]);
                    if (a("mr_timer", e)) { var _ = s("add_post_btn", "data-value"); return void(_ && l("add_post_btn", _)) }
                    p && n(i("input", c), function() {
                        if (u = this.name.match(/^attach(\d+)(_type)?$/i)) {
                            var e = o(u[1]);
                            e == p ? this.disabled = !0 : e > p && (this.name = "attach" + (e - 1) + (u[2] || ""))
                        }
                    })
                }
            },
            getAttachesCount: function() { return (c("mr_x_wrap", "attached_wrap") || []).length },
            refreshUploadState: function(e) {
                u(e) && (e = F.getAttachesCount());
                var n = d("mr_timer", "attached_wrap"),
                    i = t("attach_photo_btn"),
                    o = d("pi_medias", "attached_wrap"),
                    a = d("inline_upload", i),
                    r = s(a, "data-max-attaches") || 10;
                f(o, e > 0 || p(n)), _("cp_attach_btn_sel", i, e > 0), a && (a.disabled = e >= r), m("attached_options"), m("attached_flush")
            },
            checkUploading: function(e) { return F._processUploadQueue ? v(e) : !0 },
            attachedPhotoTpl: function(e) { return h("div", { id: "upload_item_" + e, className: "medias_thumb thumb_item mr_x_wrap thumb_upload", innerHTML: '<div id="upload_image_' + e + '" class="tu_img"></div><div id="item_progress_wrap_' + e + '" class="tu_progress_wrap"><div id="item_progress_' + e + '" class="tu_progress"></div></div><div id="item_cancel_wrap_' + e + '" class="tu_cancel_wrap" onclick="return mediaUpload.reset(this, event, \'' + e + '\');"><div id="item_cancel_' + e + '" class="tu_cancel"></div></div>' }) },
            onUploadProgress: function(e) {
                var n = this,
                    i = t("item_progress_" + n.id);
                g(i, { width: e.loaded / e.total * 100 + "%", visibility: "visible" })
            },
            onUploadComplete: function(e) {
                var n = this,
                    i = e.target.responseText,
                    o = !1;
                try { o = w(i) } catch (a) { o = { error: "ERR_CLIENT_BAD_RESPONSE: bad request response" } }
                o.error ? F.onUploadError.call(n, e) : (n.xhr = q.post(n.done_url, { _ajax: 1, _query: i }, {
                    onDone: function(e) {
                        var i = t("item_progress_wrap_" + n.id),
                            o = t("upload_image_" + n.id),
                            a = F.getLastAttachId() + 1;
                        if (o) var r = h("img", {
                            id: "upload_image_" + n.id,
                            className: "ph_img",
                            onload: function() {
                                if (y(r, o), n.iw && n.ih) {
                                    if (n.iw > n.ih == r.width > r.height) var e = Math.min(130, Math.floor(75 / n.ih * n.iw));
                                    else var e = Math.min(130, Math.floor(75 / n.iw * n.ih));
                                    g(r, "width", e)
                                }
                                b(r), g(r, "opacity", 1)
                            },
                            src: e.src
                        });
                        k(h("input", { type: "hidden", name: "attach" + a, value: e.photo_raw }), o), k(h("input", { type: "hidden", name: "attach" + a + "_type", value: "photo" }), o), g(i, "opacity", 0), n.attached = !0, n.delete_url = e.delete_url, F._processUploadQueue || (F.isUploading = !1, F.onComplete())
                    }
                }), C("tu_progress_request", "item_progress_wrap_" + n.id), n.uploaded = !0, F.uploadQueueNext())
            },
            onUploadError: function(e) { M("upload error.", e.target.responseText), F.uploadQueueNext(), F.onError() },
            uploadFile: function(e) { e.xhr = S(e.upload_url, { photo: e.file }, { onProgress: E(F.onUploadProgress, e), onComplete: E(F.onUploadComplete, e), onError: E(F.onUploadError, e) }) },
            readFile: function(e) {
                T(e.file, function(n) {
                    var i = t("upload_image_" + e.id);
                    if (i) var o = h("img", { id: "upload_image_" + e.id, className: "ph_img", onload: function() { y(o, i), e.iw = o.width, e.ih = o.height }, src: n });
                    F.readerQueueNext()
                })
            },
            addFile: function(e) {
                var n = (window.isNewMail ? d("uMailWrite__attachments") : "") || t("attached_wrap"),
                    i = d("pi_medias", n),
                    o = i ? c("medias_thumb", i) : [],
                    a = i ? d("medias_row", i) : null,
                    r = o[o.length - 1],
                    s = F.attachedPhotoTpl(e.id);
                n && (i || (i = h("div", { className: "pi_medias" }), A(i, n)), r ? k(s, r) : a ? x(s, a) : A(s, i), F._processReaderQueue || F.readerQueueNext())
            },
            uploadQueueNext: function() { M("next upload"), F._processUploadQueue = !0; var e = F.uploadQueueRemove(); return e ? void F.uploadFile(e) : (M("empty upload"), void(F._processUploadQueue = !1)) },
            readerQueueNext: function() { M("next reader"), F._processReaderQueue = !0; var e = F.readerQueueRemove(); return e ? void F.readFile(e) : (M("empty reader"), void(F._processReaderQueue = !1)) },
            queueInsert: function(e) { var t = I(); return F.getUploadDataById(t) ? F.queueInsert(e) : (F._uploadData[t] = P(e, { id: t }), F._uploadQueue.push(t), F._readerQueue.push(t), F._uploadData[t]) },
            uploadQueueRemove: function() { var e = F._uploadQueue.shift(); return e ? F.getUploadDataById(e) : !1 },
            readerQueueRemove: function() { var e = F._readerQueue.shift(); return e ? F.getUploadDataById(e) : !1 },
            getUploadDataById: function(e) { return F._uploadData[e] || !1 },
            delUploadDataById: function(e) { delete F._uploadData[e] },
            start: function(e, i) {
                if (!e || !B()) return F.fallback(e, i);
                var o = e.files,
                    a = e.form || L("form", e),
                    r = N(a),
                    l = t("attach_photo_btn"),
                    c = s(e, "data-upload-url"),
                    u = s(e, "data-done-url"),
                    d = s(e, "data-max-attaches") || 10,
                    f = F.getAttachesCount();
                return c && u ? (n(o, function() { var e = { upload_url: c, done_url: u, file: this, uploaded: !1, attached: !1 }; return f >= d ? !1 : (F.queueInsert(e), F.addFile(e), void f++) }), O(a, "submit", F.checkUploading), H(a, "submit", F.checkUploading), O(r, "click", F.checkUploading), H(r, "click", F.checkUploading), O(l, "click", F.checkUploading), H(l, "click", F.checkUploading), F.refreshUploadState(f), y(D(e), e), F._processUploadQueue || F.uploadQueueNext(), window.isNewMail && F.onStart(), F.isUploading = !0, !1) : F.fallback(e, i)
            },
            reset: function(e, t, n) {
                if (v(t), window.isNewMail && F.onBeforeRemove(e), "/" == n[0]) {
                    q.post(n, { _ajax: 1 }), F.refreshAttachIds(e);
                    var i = a("mr_x_wrap", e) || a("mr_timer", e);
                    j(i)
                } else {
                    var o = n,
                        r = F.getUploadDataById(o);
                    if (!r) return !1;
                    r.attached ? r.delete_url && (q.post(r.delete_url, { _ajax: 1 }), F.refreshAttachIds(e)) : (r.xhr && r.xhr.abort && r.xhr.abort(), r.loaded || F.uploadQueueNext()), j("upload_item_" + o), F.delUploadDataById(o)
                }
                return F.refreshUploadState(), window.isNewMail && F.onRemove(), !1
            }
        };
    window.mediaUpload = F
}, function() {
    var e = need("$"),
        t = need("nav");
    window.PinnedMsg = { onHideClick: befall(), getByMsgId: o };
    var n = { pinnedMsg: function(e) { return '.pinnedMsg[data-msg-id="' + e + '"]' } };
    ! function() { PinnedMsg._onClick = i, PinnedMsg._onHideClick = PinnedMsg.onHideClick }();

    function i(e, n) { t.go(n, e, { force: !0 }) }

    function o(t) { return e(n.pinnedMsg(t)) }
}, function() {
    Object.assign(Unfold, { onOpen: befall.kind("unfoldName"), getByName: n, setActive: i, setCount: a, setTitle: o, toggleItemEnabled: l }),
        function() { Unfold._onTriggerMouseDown = s, Unfold._onTriggerClick = r }();
    var e = { itemActive: "Unfold__item_active", itemDisabled: "Unfold__item_disabled", open: "Unfold_open" },
        t = { unfold: ".Unfold", unfoldByName: function(e) { return '.Unfold[data-name="' + e + '"]' }, itemActive: "." + e.itemActive, itemByName: function(e) { return ".Unfold__item_name_" + e }, itemCountByName: function(e) { return t.itemByName(e) + " .Unfold__itemCount" }, item: ".Unfold__item", itemDisabled: "." + e.itemDisabled, triggerText: ".Unfold__triggerText", itemText: ".Unfold__itemText", popup: ".Unfold__popup" };

    function n(e) { return $(t.unfoldByName(e)) }

    function i(n) {
        var i = void 0,
            o = void 0;
        if (1 === arguments.length ? (o = n, n = o.closest(t.unfold)) : o = n.$(t.itemByName(itemElemOrName)), i = n.$(t.itemActive), i && o) {
            i.classList.remove(e.itemActive), o.classList.add(e.itemActive);
            var a = n.$(t.triggerText),
                r = o.$(t.itemText);
            a.innerText = r.textContent.trim()
        }
    }

    function o(e, n, i) {
        var o = e.$(t.itemByName(n)),
            a = o.$(t.itemText);
        a.innerText = i
    }

    function a(e, n, i) {
        var o = e.$(t.itemCountByName(n));
        Oval.setValue(o, i)
    }

    function r(e) { preventEvent(e) }

    function s(n) {
        var i = n.closest(t.unfold),
            o = isTouch ? "touchend" : "mousedown",
            a = !isTouch && window.innerWidth < 882,
            r = i.getAttribute("data-name"),
            s = !1;
        r && Unfold.onOpen(r)(), i.classList.add(e.open), document.addEventListener("keydown", u), document.addEventListener("touchmove", c), document.addEventListener(o, d, !0);

        function l() { i.classList.remove(e.open), document.removeEventListener("keydown", u), document.removeEventListener("touchmove", c), document.removeEventListener(o, d, !0) }

        function c(e) {
            var n = e.target.closest(t.popup);
            n || l(), s = !0
        }

        function u(e) {
            var t = 27;
            e.keyCode === t && l()
        }

        function d(e) { if (s) return void(s = !1); var n = e.target.closest(t.itemDisabled); if (!n) { var i = e.target.closest(t.item + "[href]"); if (i) return void l(); if (i = e.target.closest(t.item + "[onmousedown]")) return void setTimeout(l); if (i = e.target.closest("label" + t.item)) return void setTimeout(l); if (i = e.target.closest("input[onchange]")) return void setTimeout(l) }(isTouch || a || n) && (e.preventDefault(), e.stopImmediatePropagation()), (a || !isTouch && n) && document.addEventListener("click", f, !0), n || l() }

        function f(e) { e.preventDefault(), e.stopImmediatePropagation(), document.removeEventListener("click", f, !0) }
    }

    function l(n, i) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !0,
            a = n.$(t.itemByName(i));
        a && a.classList.toggle(e.itemDisabled, !o)
    }
}, function() {
    var e = window,
        t = e.domPN,
        n = e.remove,
        i = e.lockButton,
        o = e.addClass,
        a = e.obj2qs,
        r = e.domCA,
        s = e.intval,
        l = e.geByClass1,
        c = e.getLang,
        u = e.domData,
        d = e.page,
        f = e.nav,
        p = (e.onDOMReady, e.each),
        _ = e.addEvent,
        m = e.cdf,
        v = e.domChildren,
        h = e.append,
        g = e.Friends,
        w = e.ajax;
    window.FeedAssistanceRecommendedFriendsSlider = { hideRecommended: F, onPrettyCardBtnClick: U, onScrollSlider: z }, FeedAssistanceStats.registerTrackingCls("feedAssistance_recommendedFriends"), d.onRestore(Z), d.onChange(et), FeedAssistanceStats.onStartViewElement(tt);
    var y = "/friends",
        b = "hide_possible",
        k = "prettyCard__button",
        C = "prettyCard__button_accepted",
        M = "prettyCard__button_loading",
        S = "feed",
        E = "recommended_carousel",
        T = "mobile_friends_feed_recom_got_notification",
        A = "prettyCard__closeButton",
        x = "prettyCard__closeButton_hidden",
        I = "Slider__line",
        P = ".feedAssistance_recommendedFriends",
        B = ".prettyCard",
        L = "/feed",
        N = "click_recommended_friends_slider",
        O = 20,
        H = 500,
        D = 3,
        j = 2,
        R = void 0,
        q = void 0;

    function F(e, n, i) {
        var o = t(e);
        if (!o) return !1;
        var r = G(o);
        X(o);
        var s = y + a({ act: b, hash: i, id: n, from: S, block_id: r });
        return w.post(s, { _ajax: 1 }), !1
    }

    function U(e, t, n) { return $(e, t, n) }

    function z(e) {
        if (R = e, R._lastScroll = R.scrollLeft, !e.ajaxIsRunning && !e.allLoaded) {
            var t = e.scrollLeft + e.clientWidth >= e.scrollWidth / 2;
            t && Y(e)
        }
    }

    function $(e, t, n) {
        if (hasClass(C, e)) return !1;
        var a = G(e);
        return o(M, e), i(e), g.accept(t, n, S, a, function(t) {
            var n = t || c(T);
            unlockButton(e), removeClass(M, e), o(C, e), e.textContent = n, W(e)
        }, function(t, n) { t === j && f.hard_go(n), removeClass(M, e), unlockButton(e) }), !1
    }

    function V(e) { var t = r(e, B); if (t) return l(A, t) }

    function W(e) {
        var t = V(e);
        o(x, t)
    }

    function X(e) {
        var i = t(e);
        if (n(e), i && !i.firstElementChild) {
            var o = r(i, P);
            n(o)
        }
    }

    function Y(e) {
        if (e.currentPage = e.currentPage || 1, e.currentPage++ >= D) return void(e.allLoaded = !0);
        var t = s(u(e, "offset")) || O,
            n = s(u(e, "prev-post")),
            i = G(e),
            o = y + a({ act: E, offset: t, "prev-post": n, block_id: i });
        e.ajaxIsRunning = !0, w.post(o, { _ajax: 1 }, {
            onDone: function(t, n, i) {
                u(e, "offset", n);
                var o = l(I, e),
                    a = m(i),
                    r = v(a);
                h(a, o), p(r, function() { FeedAssistanceStats.register(this, "feed") }), e.ajaxIsRunning = !1, e.allLoaded = n >= t
            },
            onFail: function() { setTimeout(function() { return e.ajaxIsRunning = !1 }, H) }
        })
    }

    function G(e) { var t = r(e, P); return s(u(t, "block-id")) }

    function K() {
        var e = l("acceptFriendBtn");
        e && _(e, "click", function() {
            s(u(e, "uid"));
            FeedAssistanceStats.dispatchEvent({ type: FeedAssistanceStats.EVENTS.EVENT_ACCEPT_FRIEND, data: FeedAssistanceStats.serializeEventData(N, e, "profile") })
        })
    }

    function Q(e) {
        var t = e.target;
        if (t = r(t, ".prettyCard__bodyLink") || t, u(t, "friend-link") && FeedAssistanceStats.dispatchElementEvent(FeedAssistanceStats.EVENTS.EVENT_OPEN_USER, t), hasClass(t, k)) {
            var n = hasClass("goodAuthorsSlider", FeedAssistanceStats.getRoot(t.fake_btn || t)) ? "authors_rec" : "user_rec";
            FeedAssistanceStats.dispatchEvent({ type: FeedAssistanceStats.EVENTS.EVENT_ACCEPT_FRIEND, data: FeedAssistanceStats.serializeEventData(N, t, n) })
        }
    }

    function J() { FeedAssistanceStats.onScroll() }

    function Z() {
        if (q = !0, R) {
            var e = geByClass("prettyCard_friend", R);
            p(e, function() { FeedAssistanceStats.forceRegister(this, "feed") })
        }
    }

    function et() { R && R._lastScroll && q && (R.scrollLeft = R._lastScroll), f.cur === L && (R = null), q = !1, "user_rec" === f.getQuery("from") && K() }

    function tt(e) {
        var t = FeedAssistanceStats.getElementType(e);
        if (t === FeedAssistanceStats.BLOCKS.BLOCK_TYPE_RECOMMENDED_SLIDER || t === FeedAssistanceStats.BLOCKS.BLOCK_TYPE_RECOMMENDED_SLIDER) {
            if (e._friendsSliderHandlersAdded) return;
            _(e, "scroll wheel touchmove", J), _(e, "click", Q);
            var n = geByClass("prettyCard_friend", e);
            p(n, function() { FeedAssistanceStats.register(this, "feed"), FeedAssistanceStats.setParenViewableX(this, e) }), FeedAssistanceStats.forceProcessTrack(), e._friendsSliderHandlersAdded = !0
        }
    }
}, function() {
    var e = window,
        t = e.page,
        n = e.browser,
        i = e.nav,
        o = e.menu,
        a = e.zlayer,
        r = window,
        s = r.onDOMReady,
        l = r.onBodyScroll,
        c = r.onBodyResize,
        u = window,
        d = u.geByClass1,
        f = u.addClass,
        p = u.removeClass,
        _ = (u.getW, u.getH),
        m = "groupCover-vk_animationYes",
        v = "groupCover-vk_animationStep",
        h = function() { return { vk: d("vk"), basis: d("basis"), header: d("basis__header"), headerTitle: d("mh_header", d("basis__header")), cover: d("groupCover"), coverImage: d("groupCover__image"), coverDimmer: d("groupCover__dimmer") } },
        g = !1,
        w = void 0,
        y = void 0,
        b = void 0,
        k = void 0,
        C = void 0;
    s(function() { x() && (M(), t.onChange(M), a.onClose(function() { setTimeout(M, 0) })) });

    function M() { g || (w = h(), w.cover && (g = !0, f(w.vk, m), y = !n.chrome || Number(n.version.split(".")[0]) > 50, b = "fixed" === getStyle(w.header, "position"), k = _(w.header), C = _(w.cover), l(T), c(A), T(), window.cur.destroy.push(E), i.onBeforeGo(S))) }

    function S(e) {
        (e || o.opened()) && (p(w.vk, v), p(w.vk, m)), l("__clear", T), c("__clear", A), i.onBeforeGo.off(S), g = !1
    }

    function E() { S(!0) }

    function T() {
        var e = scrollTop();
        if (b)
            if (0 > e) setStyle(w.header, "top", -e), f(w.vk, v), setStyle(w.coverDimmer, "opacity", 0), setStyle(w.coverImage, "top", 0);
            else {
                var t = Math.min(1, e / (C - k));
                setStyle(w.header, "top", 0), setStyle(w.headerTitle, "display", "block"), .9 >= t ? (f(w.vk, v), y && setStyle(w.coverImage, "top", .5 * e), setStyle(w.coverDimmer, "opacity", t / .9), setStyle(w.headerTitle, "opacity", 0)) : (setStyle(w.headerTitle, "opacity", 1), p(w.vk, v))
            }
        else {
            var n = Math.min(1, e / C);
            1 > n ? (f(w.vk, v), setStyle(w.coverDimmer, "opacity", 0), y && setStyle(w.coverImage, "top", .5 * e), setStyle(w.headerTitle, "display", "none")) : p(w.vk, v)
        }
    }

    function A() { E(), M() }

    function x() { return n.chrome || n.safari && n.ios >= 9 }
}, function() {
    var e = window,
        t = e.Friends,
        n = e.Groups,
        i = e.hasClass,
        o = e.geByClass1,
        a = e.getLang;
    window.SubscribeBtn = { onClick: _ };
    var r = "_unsubscribe",
        s = "Icon_unsubscribe",
        l = "Icon_subscribe",
        c = "Icon",
        u = "mobile_groups_you_are_in_public",
        d = "mobile_groups_public_subscribe",
        f = "group",
        p = ".feedAssistance";

    function _(e, t, n, p, _, g) {
        try {
            var w = g + r,
                y = g + c,
                b = g + s,
                k = g + l,
                C = i(e, w),
                M = C ? p : n,
                S = a(C ? d : u),
                E = !C,
                T = o(y, e),
                A = h(e),
                x = domData(e, "from") || null;
            T && (toggleClass(b, T, E), toggleClass(k, T, !E)), attr(e, "aria-label", escapeAttr(S)), toggleClass(w, e, E), _ === f ? m(t, M, C) : v(t, M, C, x, A)
        } catch (I) { console.trace(I) }
        return !1
    }

    function m(e, t, i, o) {
        var a = i ? n.leave : n.enter;
        a.call(n, e, t, o)
    }

    function v(e, n, i, o, a) {
        var r = i ? t.decline : t.accept;
        r.call(t, e, n, o, a)
    }

    function h(e) {
        var t = intval(domData(e, "block-id"));
        if (!t) {
            var n = domCA(e, p);
            t = intval(domData(n, "block-id")) || null
        }
        return t
    }
}, function() {
    window.uVK = { onReady: befall(), onResize: befall(), onOrientationChange: befall() }, onDOMReady(function() {
        if (window.isNewMail) {
            uVK.onReady();
            var e = document.body.getAttribute("onresize"),
                t = document.body.getAttribute("onorientationchange");
            document.body.setAttribute("onresize", "uVK.onResize(); " + e), document.body.setAttribute("onorientationchange", "uVK.onOrientationChange(); " + t)
        }
    })
}, function() {
    var e = window,
        t = e.$;
    window.Settings = { _privacy: {} },
        function() { Settings._privacy.onRadioChange = o }();
    var n = { pad: function(e) { return '.Settings__privacyPad[data-privacy="' + e + '"]' }, submit: ".Settings__privacySubmitRow", form: ".Settings__privacyForm", forbid: ".Settings__privacySelectForbiddenLink" },
        i = { padVisible: "Settings__privacyPad_visible", submitVisible: "Settings__privacySubmitRow_visible" };

    function o(e, i) {
        if ("none" === e) a("allowed", !1), a("forbidden", !1), r(!0);
        else if ("allowed" === e) a("allowed", !0), a("forbidden", !1), r(!1);
        else if ("forbidden" === e) {
            a("allowed", !1), a("forbidden", !0), r(!0);
            var o = t(n.form),
                s = t(n.forbid),
                l = i.name,
                c = i.value,
                u = o.getAttribute("action"),
                d = u + "&" + l + "=" + c + "&forbid";
            s.setAttribute("href", d)
        }
    }

    function a(e, o) {
        var a = t(n.pad(e));
        a.classList.toggle(i.padVisible, o)
    }

    function r(e) {
        var o = t(n.submit);
        o.classList.toggle(i.submitVisible, e)
    }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Resampler = void 0, t.fastResample = c;
    var i = n(140),
        o = n(158),
        a = n(123);

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var s = { avg: i.AverageAlgorithm, peak: o.PeakAlgorithm, quad: a.QuadAlgorithm },
        l = t.Resampler = function() {
            function e(t) { r(this, e), this._normalizeAlgorithm = !1, s[t.normalizeAlgorithm] && (this._normalizeAlgorithm = new s[t.normalizeAlgorithm]), this._srcSampleRate = parseInt(t.srcSampleRate || 0), this._dstSampleRate = parseInt(t.dstSampleRate || 0), this._truncateTo = 1, "undefined" != typeof t.truncateTo && (this._truncateTo = t.truncateTo), this._sampleRate = this._dstSampleRate > 0 ? this._srcSampleRate / this._dstSampleRate : 0, s[t.algorithm] || (t.algorithm = "peak"), this._algorithm = new s[t.algorithm], this._sampleCount = 0, this._data = [] }
            return e.prototype.push = function(e) {
                if (this._sampleRate <= 0) return [];
                for (var t = [], n = void 0, i = 0; i < e.length; i++)
                    if (this._truncateTo > 0 && (e[i] = Math.min(this._truncateTo, Math.abs(e[i]))), this._sampleCount += 1, this._sampleCount >= this._sampleRate)
                        for (; this._sampleCount >= this._sampleRate;) this._sampleCount -= this._sampleRate, this._sampleCount <= .8 && this._algorithm.push(e[i]), n = this._algorithm.get(), t.push(n), this._normalizeAlgorithm && this._normalizeAlgorithm.push(n), this._algorithm.clear(), this._sampleCount > .2 && this._algorithm.push(e[i]);
                    else this._algorithm.push(e[i]);
                if (this._normalizeAlgorithm) {
                    var o = this._normalizeAlgorithm.get();
                    if (this._normalizeAlgorithm.clear(), o > 0)
                        for (var a = 0; a < t.length; a++) t[a] = t[a] / o, this._truncateTo > 0 && (t[a] = Math.min(this._truncateTo, Math.abs(t[a])))
                }
                return t
            }, e
        }();

    function c(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "peak"; return new l({ srcSampleRate: e.length, dstSampleRate: t, normalizeAlgorithm: n, truncateTo: 0 }).push(e) }
}, function() {
    Object.assign(window, { uConvo: e, uConvo_getUnreadCount: i, uConvo_getLastMsg: r, uConvo_getPeer: o, uConvo_getLastMsgId: a, uConvo_getOnline: t });

    function e(e) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = "last" === o,
            s = store.mail,
            l = s.peers[e],
            c = l.url,
            u = null;
        if (o) {
            r || (c = c + "&msg=" + o);
            var d = r ? a(e) : o,
                f = s.msgs[d];
            u = { text: f.textShort, date: f.dateShort, unreadCount: i(e), muted: l.isMuted, typingNames: l.typing.map(n) }
        }
        return Convo({ id: e, url: c, photos: l.avatarImages, title: l.title, online: t(l), important: l.isImportant, profileUrl: l.profileUrl, isLast: r, more: u })
    }

    function t(e) { return e.isOnline ? "desktop" === e.onlinePlatform ? "desktop" : "mobile" : !1 }

    function n(e) { return store.mail.members[e].name }

    function i(e) {
        var t = o(e),
            n = t.countUnread;
        if (0 === n) {
            var i = store.mail,
                r = a(e),
                s = r ? i.msgs[r] : null;
            s && s.isUnread && s.authorId === i.cur.viewerId && (n = -1)
        }
        return n
    }

    function o(e) { var t = store.mail.peers[e]; return t }

    function a(e) {
        var t = store.mail,
            n = t.cur.msgRemoved,
            i = t.rolls.peer[e],
            o = null;
        if (i) {
            for (var a = [], r = 0; r < i.length; r++) {
                var s = i[r];
                n[s] || a.push(s)
            }
            a.length && (o = a)
        }
        var l = o ? last(o) : null;
        return l
    }

    function r(e) {
        var t = store.mail.msgs,
            n = a(e),
            i = n ? t[n] : null;
        return i
    }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var i = function() {
        function e(t, i) {
            n(this, e);
            var o = Object.assign({}, { tick: 100, onEnd: function() {}, onTick: function() {}, onStart: function() {}, onPause: function() {}, onStop: function() {} }, i);
            this.left = t, this.initialTime = t, this.tick = o.tick, this.onEnd = o.onEnd, this.onTick = o.onTick, this.onStart = o.onStart, this.onPause = o.onPause, this.onStop = o.onStop, this.started = !1
        }
        return e.prototype.stop = function() { this.started && (this.pause(), this.left = this.initialTime, this.onStop()) }, e.prototype.pause = function() { this.timer && (this.timer = clearInterval(this.timer), this.started = !1, this.onPause()) }, e.prototype.start = function() {
            var e = this;
            if (this.started) return !1;
            var t = new Date(Date.now() + this.left).getTime();
            this.started = !0, this.timer = setInterval(function() {
                var n = (new Date).getTime();
                e.left = t - n, e.left <= 0 ? (e.onTick(0), e.onEnd(), e.stop()) : e.onTick(e.left)
            }, this.tick), this.onStart()
        }, e.prototype.isStarted = function() { return this.started }, e.prototype.getTimeLeft = function() { return this.left }, e
    }();
    t["default"] = i
}, function() {
    var e = n(['\n    <div class="', '">\n      ', '\n      <div class="typing__names">', "</div>\n      ", "\n    </div>\n  "], ['\n    <div class="', '">\n      ', '\n      <div class="typing__names">', "</div>\n      ", "\n    </div>\n  "]),
        t = n(['\n    <div class="typing__dotsWrap">\n      <div class="typing__dots">...</div>\n    </div>\n  '], ['\n    <div class="typing__dotsWrap">\n      <div class="typing__dots">...</div>\n    </div>\n  ']);

    function n(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    Object.assign(window, { Typing: i, Typing_renderNames: r, Typing_isEmpty: o });

    function i(t) {
        var n = t.gray,
            i = t.typing,
            s = q["class"]("typing", { gray: n, id: t.id, empty: o(i) }),
            l = r(i),
            c = void 0,
            u = void 0;
        return n ? (c = Loading({ mix: "typing__loading" }), u = "") : (c = "", u = a()), q.html(e, s, c, l, u)
    }

    function o(e) { return isArray(e) ? 0 === e.length : !e }

    function a() { return q.html(t) }

    function r(e) {
        var t = window.lang;
        if (!isArray(e)) return e ? t.mobile_mail_typing_1_short : "";
        var n = e,
            i = n.length,
            o = "";
        if (1 === i) {
            var a = n[0];
            o = t.mobile_mail_typing_1, o = o.replace("{name}", a)
        } else if (2 === i) {
            var r = n[0],
                s = n[1];
            o = t.mobile_mail_typing_2, o = o.replace("{name1}", r), o = o.replace("{name2}", s)
        } else if (i > 2) {
            var l = n[0];
            o = t.mobile_mail_typing_many, o = o.replace("{name}", l), o = o.replace("{count}", i - 1)
        }
        return o
    }
}, function(e, t, n) {
    var i = n(25),
        o = n(212),
        a = n(16),
        r = "push_notifier_endpoint",
        s = "push_notifier_related_apps",
        l = "push_notifier_related_apps_ts",
        c = a.HOUR / 2,
        u = "push_notifier_subscribed_ts",
        d = a.MINUTE,
        f = window,
        p = f.lsSet,
        _ = f.lsGet,
        m = f.ajax,
        v = f.isMVK;
    window.PushNotifier = {
        sw_client: null,
        server_key: "BPrntRk2W1_ISFwlgY-vz9tQDg9i1oSQ3-N8xyjdbNAbIOdZIGFdh5FlO7zn730UwU9Sayoec-Fpqq4JZFTyv60",
        server_url: "push_notifier",
        init: function() { var e = this; return this.canBeEnabled().then(function(t) { t && vk.id && (v && page.onChange(function() { return e.updateHeadClass() }), e.listenPermission(), Promise.resolve(e.updateSubscription())), Promise.resolve(!1) }) },
        listenPermission: function() {
            var e = this;
            navigator.permissions && navigator.permissions.query && navigator.permissions.query({ name: "notifications" }).then(function(t) { t.onchange = function() { e.updateSubscription().then(function() { geByClass1("settingsNotifyPush") && nav.reload(), e.updateHeadClass() }) } })
        },
        updateHeadClass: function() {
            var e = this;
            this.canBeEnabled().then(function(t) {
                if (t) {
                    var n = e.getPermission();
                    document.head && (removeClass(document.head, "push_notifier_" + a.PUSH_NOTIFIER_PERMISSION_GRANTED), removeClass(document.head, "push_notifier_" + a.PUSH_NOTIFIER_PERMISSION_DENIED), removeClass(document.head, "push_notifier_" + a.PUSH_NOTIFIER_PERMISSION_DEFAULT), n && addClass(document.head, "push_notifier_" + n), addClass(document.head, "push_notifier_supported"))
                }
            })
        },
        canBeEnabled: function() { var e = this; return new Promise(function(t) { return e.isSupported() ? void t(e.isNativeAppInstalled().then(function(e) { return !e })) : t(!1) }) },
        isSupported: function() { return "PushManager" in window && "Notification" in window && i.SWClient.isSupported() && (browser.chrome || browser.mozilla) },
        isNativeAppInstalled: function() {
            var e = (new Date).getTime(),
                t = _(l),
                n = _(s);
            return new Promise(function(i) {
                null !== n && t && c > e - t ? i(!!n) : "getInstalledRelatedApps" in navigator ? navigator.getInstalledRelatedApps().then(function(t) {
                    var n = !1,
                        o = !0,
                        a = !1,
                        r = void 0;
                    try { for (var c, u = t[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) { var d = c.value; if ("com.vkontakte.android" === d.id) { n = !0; break } } } catch (f) { a = !0, r = f } finally { try {!o && u["return"] && u["return"]() } finally { if (a) throw r } }
                    p(l, e), p(s, n), i(n)
                })["catch"](function() { i(!1) }) : i(!1)
            })
        },
        updatePermission: function() { var e = this.getPermission(); if (e !== a.PUSH_NOTIFIER_PERMISSION_GRANTED) { var t = this.loadEndpoint(); if (t) return this.unsubscribe(t).then(function() { return e }) } return Promise.resolve(e) },
        subscribe: function(e) {
            var t = this;
            return this.connect().then(function(e) { return e.pushManager.getSubscription() }).then(function(e) { return e || t.sw_client.registration.pushManager.subscribe({ userVisibleOnly: !0, applicationServerKey: o.urlBase64ToUint8Array(t.server_key) }) }).then(function(n) {
                return new Promise(function(i, o) {
                    if (!e && !t.needUpdateSubscription(n)) return void i();
                    var a = n.getKey("p256dh"),
                        r = n.getKey("auth");
                    m.post(t.server_url, { act: "a_subscribe", endpoint: n.endpoint, key: a ? btoa(String.fromCharCode.apply(null, new Uint8Array(n.getKey("p256dh")))) : null, token: r ? btoa(String.fromCharCode.apply(null, new Uint8Array(n.getKey("auth")))) : null }, { onDone: function(e) { e ? (t.saveEndpoint(n.endpoint), i()) : o() } })
                })
            })
        },
        needUpdateSubscription: function(e) {
            var t = (new Date).getTime(),
                n = this.loadEndpoint(),
                i = _(u + vk.id),
                o = !1;
            return (n != e.endpoint || !i || t - i > d) && (p(u + vk.id, t), o = !0), o
        },
        updateSubscription: function() { var e = this; return this.updatePermission().then(function(t) { return t === a.PUSH_NOTIFIER_PERMISSION_GRANTED ? e.subscribe() : !1 }) },
        connect: function() { return this.sw_client = this.sw_client || new i.SWClient, this.sw_client.register() },
        unsubscribe: function(e) { var t = this; return new Promise(function(n, i) { m.post(t.server_url, { act: "a_unsubscribe", endpoint: e }, { onDone: function(e) { e ? (t.saveEndpoint(!1), n()) : i() } }) }) },
        requestPermission: function() {
            var e = this.getPermission();
            return e == a.PUSH_NOTIFIER_PERMISSION_DEFAULT ? new Promise(function(e, t) {
                var n = Notification.requestPermission(function(t) { e(t) });
                n && n.then(e, t)
            }) : Promise.resolve(e)
        },
        getPermission: function() { return Notification.permission },
        loadEndpoint: function() { return _(r + vk.id) || !1 },
        saveEndpoint: function(e) { p(r + vk.id, e || !1) },
        action: function(e, t) { var n = this; return this.connect().then(function() { return n.sw_client.action(e, t) }) }
    }, PushNotifier.updateHeadClass()
}, function() { window.closePostSuggest = function(e, t) { return re(geByClass1("post_suggest")), ajax.post("wall.php", { _ajax: 1, act: "close_suggest_post", suggest_id: e.getAttribute("data-suggest-id") }), cancelEvent(t) } }, function() { Array.isArray || (Array.isArray = function(e) { return "[object Array]" === Object.prototype.toString.call(e) }) }, function() {
    function e(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }! function() { uVK.onReady(v), Messenger.onQueryChange(w), Messenger.onQueryClear(y), uConvo.onTap(d), uMailHat.onUnreadClick(n), uMailHat.onBackClick(j), uMailHat.onBackToDialogClick(R), uMailHat.onCancelEditing(Ct), uMailWrite.onAfterSend(V), uMailWrite.onAttachedMsgsRemove(u), uMailWrite.onToBottomClick(L), uMailWrite.onMsgSend(r), Msg.onClick(ut), Msg.onRestoreClick(dt), Messenger.onMainScroll(B), Messenger.onConvoScroll(N), Messenger.onSearchMsgsClick(g), Messenger.onConvoScroll(uMessenger.expandPeerBefore), Messenger.onConvoAtTop(x), Messenger.onConvoAtBottom(I), MailActs.onCloseClick(J), MailActs.onRemoveClick(Z), MailActs.onImportantClick(at), MailActs.onReplyClick(rt), MailActs.onForwardClick(st), MailActs.onSpamClick(ot), MailActs.onPinClick(K), MailActs.onEditClick(Q), MailDialog.onConfirmDelete(tt), PinnedMsg.onHideClick(gt), im.onNewMsg(s), im.onEditMsg(l), im.onTyping(q), im.onOnlineChange(F), im.onMsgReadByMe(U), im.onMsgReadByOther(z), im.onMsgImportantRemove(p), im.onMsgImportantAdd(f), im.onMsgRemove(_), uVK.onReady(o), uVK.onResize(o), page.onChange(o), mediaUpload.onStart(c), nav.onPopState(W), nav.onBeforeGo(X), nav.onBeforeGo2(Y), page.onChange(G), uVK.onReady(wt), page.onChange(wt), uVK.onReady(yt), page.onChange(yt), page.onChange(a), page.onChange(St), uVK.onReady(a), uVK.onReady(vt), uVK.onReady(St), uVK.onOrientationChange(i), uMessenger.onShowPinnedMsgClick = ht, uMessenger.onHidePinnedMsgClick = gt }();
    var t = !1;

    function n() { Messenger.scrollMainBodyToTop() }

    function i() { browser.ios && document.activeElement.blur() }

    function o() { window.innerWidth > 881 && $$(".messenger").forEach(function(e) { return setStyle(e, "height", window.innerHeight) }) }

    function a() {
        var e = nav.getQuery("msg") || nav.getQuery("id");
        requestAnimationFrame(e ? function() { uMessenger.scrollToMsg(e) } : Messenger.scrollConvoToBottom)
    }

    function r(t) {
        var n = store.mail.cur;
        storeMethods.injectMail({ msgs: e({}, t.id, t) }), n.groupId && (t.adminId = n.userId), D(t, !0)
    }

    function s(e) {-1 === store.mail.cur.localOutMsgIds.indexOf(e.randomId) && D(e) }

    function l(e) { D(e) }

    function c() { uMailWrite.updateAttachmentsVisibility() }

    function u() {
        {
            var e = store.mail,
                t = e.cur;
            e.peers
        }
        t.msgAttached[t.peerId] = {}, uMailWrite.uiRedrawAttachments(t.peerId)
    }

    function d(e) {
        {
            var t = store.mail,
                n = (t.cur, t.rolls),
                i = t.msgs,
                o = Number(qs2obj(e.split("?")[1]).peer),
                a = last(n.peer[o] || []);
            i[a]
        }
        return h(e)
    }

    function f(e) {
        var t = store.mail,
            n = t.cur,
            i = t.msgs,
            o = t.scraps,
            a = t.rolls,
            r = i[e];
        if (r && (r.isImportant = !0, a.folder.important = a.folder.important.concat(e).filter(unique).sort(desc), Msg.toggleImportant(e, !0), "important" === n.folder)) {
            var s = o.folder.slice();
            o.folder = o.folder.concat(e).filter(unique).sort(desc), MailScrap.redrawFolder(s)
        }
    }

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !0,
            n = store.mail,
            i = n.cur,
            o = n.msgs,
            a = n.scraps,
            r = n.rolls,
            s = o[e];
        if (s && (s.isImportant = t ? !1 : !0, arrayRemove(r.folder.important, e), Msg.toggleImportant(e, !1), "important" === i.folder)) {
            var l = a.folder.slice();
            arrayRemove(a.folder, e), MailScrap.redrawFolder(l)
        }
    }

    function _(e) {
        var t = _,
            n = store.mail,
            i = n.cur,
            o = n.msgs,
            a = n.scraps,
            r = n.rolls,
            s = n.peers,
            l = o[e];
        if (l && l.isUnread && (s[l.peerId].countUnread = s[l.peerId].countUnread - 1, i.countUnread = i.countUnread - 1, uMailWrite.redrawToBottom(), 0 === s[l.peerId].countUnread && (r.folder.unread = r.folder.unread.filter(function(e) { return e !== l.peerId }))), l && !i.msgRemoved[e] && -1 === t.destroyPrevented.indexOf(e)) {
            var c = r.peer[l.peerId];
            arrayRemove(c, e), i.peerId === l.peerId && (arrayRemove(a.peer, e), Msg.destroy(e), i.msgSelected[e] && (delete i.msgSelected[e], MailActs.setCount(Object.keys(i.msgSelected).length), uMessenger.redrawMailActions()), MailScrap.checkDivider())
        }
        l && l.isImportant && p(e, !1), l && r.peer[l.peerId].length && MailScrap.redrawFolder(), uMailHat.redrawCounter(), r.folder[i.folder] = [], a.folder = [], m()
    }
    _.destroyPrevented = [];

    function m() {
        var e = store.mail,
            t = e.cur,
            n = e.msgs,
            i = e.scraps,
            o = e.rolls;
        ajaxRequest("/mail", { act: "all" === t.folder ? null : t.folder, offset: 0 }, function(e, a) {
            if (store.mail.cur) {
                storeMethods.injectMail(e), ("all" === t.folder || "unread" === t.folder) && Object.keys(e.msgs).forEach(function(t) {
                    t = toInt(t);
                    var i = e.msgs[t].peerId;
                    o.peer[i] = (o.peer[i] || []).concat(t).filter(function(e) { return !!n[e] }).filter(unique).sort(asc)
                });
                var r = "important" === t.folder,
                    s = r ? desc : ft,
                    l = Object.keys(r ? e.msgs : e.peers).map(toInt).sort(s).filter(function(e) { return -1 === i.folder.indexOf(e) }),
                    c = [].concat(l).filter(unique).sort(s);
                o.folder[t.folder] = c, i.folder = first(20, c), store.mail.reached.folder[t.folder] = a, MailScrap.redrawFolder(), Messenger.setMainLoading(!1), uMailHat.redrawCounter()
            }
        })
    }

    function v() {
        if ("/mail" === location.pathname || 0 === location.pathname.indexOf("/write")) {
            if (!store.mail.cur) return;
            im.on(), _t(), mt(), Messenger.scrollConvoToBottom(), uMessenger.startPolling(), store.mail.cur.peerId && U(null, store.mail.cur.peerId)
        }
    }

    function h(e) { var t = b(e); return e = makeUrl(e), t && location.pathname + location.search !== e && nav.go(e, !1, { push_only: !0 }), t || (MailScrap.resetPrevScraps(), store.mail = {}, store.uiLastId = 0, store.uiState = {}), t }

    function g() {
        var e = store.mail.cur.query;
        h("/mail?q=" + e + "&tab=messages")
    }

    function w(e) {
        var t = w;
        if (t.timer && clearTimeout(t.timer), store.mail.cur)
            if (e) {
                var n = makeUrl("/mail?q=" + e + ("msgs" === store.mail.cur.tab ? "&tab=messages" : ""));
                b(n), t.timer = setTimeout(function() { h(n) }, 300)
            } else h("/mail")
    }
    w.clearTimer = function() { self = w, self.timer && (clearTimeout(self.timer), self.timer = null) };

    function y() { Messenger.setMainLoading(!1), Messenger.setConvoLoading(!1), w.clearTimer(), h("/mail") }

    function b(e) {
        e = makeUrl(e);
        var n = e.split("?"),
            i = n[0],
            o = qs2obj(n[1]),
            a = store.mail,
            r = a.cur,
            s = a.scraps;
        if (r) {
            var l = o.act,
                c = o.peer,
                u = o.chat,
                d = o.email,
                f = o.m,
                p = toInt(o.msg) || toInt(o.id) || null,
                _ = "messages" === o.tab ? "msgs" : "peers",
                m = o.q || "";
            if (X()) return !0;
            if ("/mail" !== i || "add_to_chat" === l || "flush_history" === l || "info" === l || "msg" === l || "unpin" === l || "leave_chat" === l || "new_chat" === l || "chat_preview" === l || "return_to_chat" === l || "show_medias" === l || "toggle_community_block" === l || "community_toggle_important" === l || "ban_user" === l || "community_mark_answered" === l || "invite_link" === l || "reset_link" === l || "send" === l || "show" === l && o.id || 70 == f || 71 == f || 76 == f || 784 == f || 783 == f || 786 == f || 785 == f || 787 == f) return im.off(), uMessenger.stopPolling(), void uMailHat.cancelStatusUpdate();
            p && (t = !0), MailScrap.clearSystemMessage2();
            var v = c ? toInt(c) : u ? toInt(u) + 2e9 : d ? -toInt(d) - 2e9 : null,
                h = "unread" === l || "important" === l || "unrespond" === l ? l : "all";
            return r.peerId && !v && m ? (r.query = m, r.peerId = null, r.tab = _, S(), Messenger.setQuery(m), A()) : (r.query !== m || r.tab !== _) && (r.peerId === v ? (r.query = m, r.tab = _, s.search = [], r.tab !== _ && (store.mail.reached.search.msgs = {}), uMessenger.redrawView(), Messenger.setQuery(m), MailScrap.redrawSearch(), m ? A() : (ct(), 0 === s.folder.length && T())) : "peers" === r.tab ? (store.mail.cur.mvk_entrypoint = "conversations_search", r.query = "", Messenger.setQuery(""), uMessenger.redrawView()) : "msgs" === r.tab && (store.mail.cur.mvk_entrypoint = "message_search", setTimeout(function() { return store.mail.cur.mvk_entrypoint = "message_search" }, 60))), r.peerId !== v ? v ? M(v, p) : S() : v && f ? (store.mail.peers[v].systemMessageCode = toInt(f), MailScrap.updateClass("peer"), MailScrap.redrawSystemMessage(), Messenger.scrollConvoToBottom()) : r.folder !== h && (k(h), Messenger.getMainBody().scrollTop = 0, T()), !0
        }
    }

    function k(e) {
        {
            var t = store.mail,
                n = t.cur,
                i = t.scraps,
                o = t.rolls;
            t.reached
        }
        n.folder = e, C() ? Messenger.setMainLoading(!0) : (i.folder = first(20, o.folder[e]), MailScrap.folderSetItems(i.folder), uMessenger.redrawView(), uMailHat.redraw())
    }

    function C() {
        var e = store.mail,
            t = e.rolls,
            n = e.cur,
            i = t.folder[n.folder];
        return !(i && i.every(function(e) { return t.peer[e] && t.peer[e].length > 0 }))
    }

    function M(e, n) {
        var i = store.mail,
            o = i.cur,
            a = i.msgs,
            r = i.peers,
            s = i.scraps,
            l = i.rolls,
            c = i.reached,
            u = l.peer[e] || [];
        if (!n && r[e].countUnread > 0) {
            Messenger.setConvoLoading(!0), window._preventedCheckTop = !0, t = !0, o.peerId = e, s.peer = [], vt(), uConvo.redrawUnread(e), uMessenger.redrawView(), Messenger.redrawConvoLayer(), wt(), uMailHat.startStatusUpdate(), f(), MailScrap.peerSetItems([]);
            var d = { act: "show", peer_id: e, msg: "unread" };
            return void ajaxRequest("/mail", d, function(n, i, o) {
                if (store.mail.cur) {
                    var r = n.rolls.peer[e];
                    if (storeMethods.injectMail(n), c.peer.after[e] = i, c.peer.before[e] = o, u = l.peer[e] || [], (arrayIntersects(r, u) || i && 0 === u.length) && (l.peer[e] = u.concat(r).filter(unique).sort(asc)), store.mail.cur.peerId === e) {
                        uMailWrite.preventShowToBottom(), s.peer = r.slice(), geByClass1("mailScrap__items_peer").innerHTML = "", MailScrap.updateClass("peer"), MailScrap.peerSetItems(r), _t(), AudioMessagePlayer.redrawWaves(), E(e);
                        var d = r.find(function(e) { return a[e].isUnread });
                        uMessenger.scrollToMsg(d, !0, !1), requestAnimationFrame(function() { window._preventedCheckTop = !1, t = !1, Messenger.setConvoLoading(!1) })
                    }
                }
            })
        }
        o.peerId = e, s.peer = [], vt(), n ? (s.peer = [n], l.peer[e] = [], c.peer.before[e] = !1, c.peer.after[e] = !1, Messenger.setConvoLoading(!0)) : (s.peer = last(20, u), f()), store.mail.reached.peer.after[e] = !0, MailScrap.updateClass("peer");

        function f() { o.forwardFromId && (o.query = "", o.tab = "peers", s.search = [], Messenger.setQuery(o.query), rt(), o.forwardFromId = null) }
        uMessenger.redrawView(), Messenger.redrawConvoLayer(), wt(), uMailHat.startStatusUpdate(), MailScrap.peerSetItems(s.peer), n || E(e);
        r[e];
        n && (MailScrap.updateClass("peer"), uMessenger.scrollToMsg(n)), n ? x(n) : x(), requestAnimationFrame(function() { n || Messenger.scrollConvoToBottom(), AudioMessagePlayer.redrawWaves(), requestAnimationFrame(function() { n || Messenger.scrollConvoToBottom() }) })
    }

    function S() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0,
            t = store.mail,
            n = t.cur,
            i = t.scraps;
        uMailHat.cancelStatusUpdate(), Ct(), n.peerId = null, n.mvk_entrypoint = "", i.peer = [], vt(), e && (n.msgSelected = {}), uMessenger.redrawView(), uMailHat.redraw(), requestAnimationFrame(function() { MailActs.setCount(0), uMessenger.redrawMailActions(), uCurConvoTyping.redraw(), T(), requestAnimationFrame(function() { MailScrap.peerSetItems(i.peer) }) })
    }

    function E(e, t) { t || (t = function() {}); var n = store.mail.peers[e];!n || n.countUnread > 0 ? ajaxRequest("/mail", { act: "read_dialog", peer_id: e, hash: n.hashRead }, function() { U(null, e) }) : setTimeout(function() { U(null, e) }, 500) }

    function T() {
        var e = T,
            t = e.locked || (e.locked = {}),
            n = store.mail,
            i = n.cur,
            o = n.scraps,
            a = n.rolls,
            r = n.reached,
            s = i.folder,
            l = o.folder,
            c = a.folder[s],
            u = "folder_" + s,
            d = r.folder[s] && last(l) === last(c);
        if (Messenger.setMainLoading(0 === l.length && !d), !t[u] && !d) {
            var f = "important" === s,
                p = C(),
                _ = f ? desc : ft,
                m = [];
            if (0 === l.length) m = first(20, c);
            else {
                var v = c.indexOf(last(l));
                m = v >= 0 ? c.slice(v + 1, v + 21) : []
            }
            if (m.length && !p) {
                var h = l.concat(m).filter(unique).sort(_);
                o.folder = h, MailScrap.folderAddItems(m), _t()
            } else {
                t[u] = !0;
                var g = "all" === s ? null : s,
                    w = p ? 0 : l.length;
                ajaxRequest("/mail", { act: g, offset: w }, function(e, n) {
                    if (store.mail.cur) {
                        storeMethods.injectMail(e), Object.keys(e.peers).forEach(function(e) { store.mail.reached.peer.after[e] = !0 }), ("all" === s || "unread" === s) && Object.keys(e.msgs).forEach(function(t) {
                            t = toInt(t);
                            var n = e.msgs[t].peerId;
                            a.peer[n] = (a.peer[n] || []).concat(t).filter(unique).sort(asc)
                        });
                        var d = Object.keys(f ? e.msgs : e.peers).map(toInt).sort(_).filter(function(e) { return -1 === l.indexOf(e) }),
                            m = c.concat(d).filter(unique).sort(_);
                        if (a.folder[s] = m, n && (r.folder[s] = n), t[u] = !1, i.folder === s) {
                            { o.folder.slice() }
                            o.folder = m, MailScrap.updateClass("folder"), MailScrap.folderAddItems(d), _t(), Messenger.setMainLoading(!1), p && (MailScrap.folderSetItems(o.folder), uMessenger.redrawView(), uMailHat.redraw())
                        }
                    }
                })
            }
        }
    }

    function A() {
        var e = A,
            t = e.locked || (e.locked = {}),
            n = store.mail,
            i = n.cur,
            o = n.scraps,
            a = n.rolls,
            r = n.reached,
            s = i.tab,
            l = i.query,
            c = "search_msgs_" + s + "_" + l,
            u = o.search,
            d = a.search[s][l] || [],
            f = r.search[s][l] && last(u) === last(d);
        if (Messenger.setMainLoading(0 === u.length && !f), !t[c] && !f) {
            var p = [];
            if ("peers" === s && (d.length || (d = lt()), d.length))
                if (0 === u.length) p = first(20, d);
                else {
                    var _ = d.indexOf(u);
                    p = _ >= 0 ? d.slice(_ + 1, _ + 41) : []
                }
            if (p.length && (o.search = u.concat(p).filter(unique), MailScrap.redrawSearch(), MailScrap.updateClass("search"), _t(), Messenger.setMainLoading(!1)), !p.length || "peers" === s) {
                var m = "msgs" === s ? { act: "search", q: l, offset: o.search.length, messages: 1 } : { act: "search", q: l };
                e.timer && clearTimeout(e.timer), e.timer = setTimeout(function() {
                    t[c] = !0, ajaxRequest("/mail", m, function(e, n) {
                        if (store.mail.cur) {
                            t[c] = !1, storeMethods.injectMail(e);
                            var u = Object.keys("peers" === s ? e.peers : e.msgs).map(toInt),
                                f = "peers" === s ? ft : desc,
                                p = d.concat(u).filter(unique).sort(f);
                            a.search[s][l] = p, n && (r.search[s][l] = n), i.tab === s && i.query === l && (Messenger.setMainLoading(!1), o.search = o.search.concat(u).filter(unique).sort(f), MailScrap.redrawSearch(), MailScrap.updateClass("search"), _t())
                        }
                    })
                }, 300)
            }
        }
    }

    function x(e) {
        if (!$(".load_before_closed")) {
            var n = x,
                i = n.locked || (n.locked = {}),
                o = store.mail,
                a = o.cur,
                r = o.scraps,
                s = o.rolls,
                l = o.reached;
            if (a) {
                var c = a.peerId,
                    u = r.peer,
                    d = s.peer[c] || [],
                    f = "peer_before_" + c,
                    p = l.peer.before[c] && u[0] === d[0];
                if (Messenger.setConvoLoading(u.length <= 1 && !p), !i[f] && !p) {
                    var _ = Messenger.getConvoBody(),
                        m = !arrayIntersects(u, d),
                        v = first(u),
                        h = v ? d.indexOf(v) : -1,
                        g = 0 === u.length ? last(10, d) : h >= 0 ? d.slice(h - 20, h) : [];
                    if (g.length && !e) {
                        if (_.scrollTop > 6e3 && !m) return;
                        if (window._preventedCheckTop) return;
                        var w = r.peer.slice(),
                            y = u.concat(g).filter(unique).sort(asc);
                        r.peer = y, MailScrap.peerAddItemsBefore(g.filter(function(e) { return -1 === w.indexOf(e) })), _t(), AudioMessagePlayer.redrawWaves(), MailScrap.updateClass("peer"), Messenger.setConvoLoading(!1)
                    } else {
                        if (!c) return;
                        var b = { act: "show", peer_id: c, msg: u[0], direction: e ? "around" : "before" },
                            k = u[0];
                        i[f] = !0, ajaxRequest("/mail", b, function(n, o, a) {
                            if (store.mail.cur) {
                                e && setTimeout(function() { t = !1 }, 10), i[f] = !1, storeMethods.injectMail(n);
                                var p = Object.keys(n.msgs).map(toInt).filter(function(e) { return -1 === u.indexOf(e) }),
                                    v = u.concat(p).filter(unique).sort(asc);
                                if (a && (l.peer.before[c] = !0), o && (l.peer.after[c] = !0), d = s.peer[c] || [], (arrayIntersects(v, d) || o && 0 === d.length) && (s.peer[c] = (s.peer[c] || []).concat(v).filter(unique).sort(asc)), store.mail.cur.peerId === c) {
                                    if (uMailWrite.preventShowToBottom(), _.scrollTop > 6e3 && !m) return;
                                    var h = r.peer.slice();
                                    r.peer = v, MailScrap.updateClass("peer"), k ? (MailScrap.peerAddItemsBefore(p.filter(function(e) { return -1 === h.indexOf(e) && k > e }), !0), MailScrap.peerAddItemsAfter(p.filter(function(e) { return -1 === h.indexOf(e) && e > k }), !0)) : MailScrap.peerAddItemsBefore(p, !0), e && (uMessenger.scrollToMsg(e), Messenger.setConvoLoading(!1)), _t(), AudioMessagePlayer.redrawWaves(), Messenger.setConvoLoading(!1), uMessenger.expandPeerBefore(), setTimeout(uMessenger.expandPeerBefore, 100), e && rt()
                                }
                            }
                        })
                    }
                }
            }
        }
    }

    function I() {
        var e = I,
            n = e.locked || (e.locked = {}),
            i = store.mail,
            o = i.cur,
            a = i.scraps,
            r = i.rolls,
            s = i.reached;
        if (!t && o) {
            var l = o.peerId,
                c = a.peer,
                u = r.peer[l] || [],
                d = "peer_after_" + l;
            if (!(n[d] || s.peer.after[l] && last(c) === last(u))) {
                var f = Messenger.getConvoBody(),
                    p = !arrayIntersects(c, u),
                    _ = function() { return f.scrollHeight - f.scrollTop - f.offsetHeight },
                    m = last(c),
                    v = m ? u.indexOf(m) : -1,
                    h = v >= 0 ? u.slice(v + 1, v + 21) : [];
                if (!h.length || nav.getQuery("msg") || nav.getQuery("id")) {
                    if (!l) return;
                    var g = { act: "show", peer_id: l, msg: last(c), direction: "after" };
                    n[d] = !0, ajaxRequest("/mail", g, function(e, t) {
                        if (store.mail.cur) {
                            n[d] = !1, storeMethods.injectMail(e);
                            var i = Object.keys(e.msgs).map(toInt).filter(function(e) { return -1 === c.indexOf(e) }).sort(asc),
                                o = c.concat(i).filter(unique).sort(asc);
                            if (t && (s.peer.after[l] = t), u = r.peer[l] || [], (arrayIntersects(o, u) || t && 0 === u.length) && (r.peer[l] = (r.peer[l] || []).concat(o).filter(unique).sort(asc)), store.mail.cur.peerId === l) {
                                if (_() > 6e3 && !p) return;
                                t && MailScrap.updateClass("peer"), a.peer = o, MailScrap.updateClass("peer"), MailScrap.peerAddItemsAfter(i), _t(), AudioMessagePlayer.redrawWaves()
                            }
                        }
                    })
                } else {
                    if (_() > 6e3 && !p) return;
                    var w = c.concat(h).filter(unique).sort(asc);
                    a.peer = w, MailScrap.peerAddItemsAfter(h), MailScrap.updateClass("peer"), _t(), AudioMessagePlayer.redrawWaves()
                }
            }
        }
    }
    var P = !1;

    function B(e) {
        var t = store.mail,
            n = t.cur,
            i = t.scraps,
            o = t.rolls,
            a = e.scrollTop,
            r = e.scrollHeight,
            s = e.offsetHeight;
        if (!n.query && 20 >= a && i.folder.length) {
            if (P) {
                P = !1; { i.folder.slice() }
                i.folder = first(20, o.folder[n.folder]), MailScrap.folderCutItems(20)
            }
        } else a > 20 && (P = !0, r - a - s < window.innerHeight && (n.query ? A() : T()))
    }

    function L() {
        var e = store.mail,
            t = e.cur,
            n = e.scraps,
            i = e.rolls,
            o = e.reached,
            a = n.peer,
            r = i.peer[t.peerId] || [];
        if (r.length && last(a) === last(r) && o.peer.after[t.peerId]) Messenger.scrollConvoToBottom(), uMailWrite.hideToBottom(), MailScrap.updateClass("peer");
        else {
            var s = t.peerId,
                l = { act: "show", peer_id: s };
            ajaxRequest("/mail", l, function(e) {
                if (store.mail.cur) {
                    var t = e.rolls.peer[s];
                    i.peer[s] = t.slice(), storeMethods.injectMail(e), o.peer.after[s] = !0, store.mail.cur.peerId === s && (uMailWrite.preventShowToBottom(), n.peer = t.slice(), geByClass1("mailScrap__items_peer").innerHTML = "", MailScrap.peerAddItemsBefore(t), MailScrap.updateClass("peer"), Messenger.scrollConvoToBottom(), _t(), AudioMessagePlayer.redrawWaves())
                }
            })
        }
    }

    function N(e) {
        var t = N,
            n = 50;
        t.timer || (t.timer = setTimeout(function() { t.timer = null, O(e) }, n))
    }

    function O(e) {
        var t = store.mail,
            n = t.cur,
            i = t.scraps,
            o = t.msgs,
            a = t.peers;
        if (n) {
            var r = i.peer,
                s = r.find(function(e) { return o[e] && o[e].isUnread && o[e].authorId !== n.viewerId }),
                l = e.scrollTop,
                c = e.scrollHeight - l - e.offsetHeight,
                u = 0;
            if (s) {
                var d = Msg.getElem(s),
                    f = e.scrollHeight - d.offsetTop;
                u = c - f, 100 >= u && E(n.peerId)
            }
            e._prevScroll || (e._prevScroll = 0), 300 > c && $(".mailScrap_reachedAfter") ? uMailWrite.hideToBottom() : l > e._prevScroll - 5 || n.peerId && a[n.peerId].countUnread ? uMailWrite.showToBottom() : uMailWrite.hideToBottom(), e._prevScroll = l
        }
    }

    function H(e) { var t = vk.id == e.peerId && !cur.groupId; return t || 2 & e.flags }

    function D(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
            i = t.peerId,
            o = t.msgId,
            a = t.authorId,
            r = t.text,
            s = t.date,
            l = t.hasAttachments,
            c = t.flags,
            u = t.adminId,
            d = t.isService,
            f = store.mail,
            p = f.cur,
            _ = f.peers,
            m = (f.msgs, f.members),
            v = f.rolls,
            h = f.scraps,
            g = f.reached;
        o || (o = t.id);
        var w = p.groupId ? p.groupId === a : p.userId === a,
            y = !w,
            b = _[i] && 0 === _[i].countUnread && y,
            k = !!t.edited || !!t.refreshed,
            C = _[i] && _[i].pinnedMsgId == o;
        if (u && a > 0 && (a = -a), !n && (d || !r || l || !_[i] || !m[a] || u && !m[u] || /\[id\d+\|.+\]/.test(r) || C)) return void ajaxRequest("/mail", { act: "message", message_id: o, forcePinned: C }, function(e, t) {
            if (store.mail.cur) {
                if (storeMethods.injectMail(e), t.unpin) {
                    _[i].pinnedMsg = "", _[i].hasPinnedMsg = !1;
                    var n = bt();
                    delete n[i], kt(n), p.peerId === i && (uMessenger.redrawPinnedMsg(), wt())
                } else t.pinned && (_[i].pinnedMsg = t.pinned, _[i].hasPinnedMsg = !0, p.peerId === i && (uMessenger.redrawPinnedMsg(), wt()));
                if (k) MailScrap.peerReplaceItems([o]);
                else {
                    var r = last(v.peer[i] || []);
                    if (v.peer[i] = (v.peer[i] || []).concat(o).filter(unique).sort(asc), v.folder.all = v.folder.all.concat(i).filter(unique).sort(ft), y && (v.folder.unread = v.folder.unread.concat(i).filter(unique).sort(ft)), p.groupId && (y ? v.folder.unrespond = v.folder.unrespond.concat(i).filter(unique).sort(ft) : arrayRemove(v.folder.unrespond, i)), i === p.peerId && uCurConvoTyping.redraw(), b && (p.countUnread += 1, uMailHat.redrawCounter()), "all" === p.folder) {
                        var s = h.folder.slice();
                        h.folder = h.folder.concat(i).filter(unique).sort(ft), MailScrap.redrawFolder(s)
                    } else if ("unread" === p.folder && y) {
                        var l = h.folder.slice();
                        h.folder = h.folder.concat(i).filter(unique).sort(ft), MailScrap.redrawFolder(l)
                    } else if ("unrespond" === p.folder) {
                        var c = h.folder.slice();
                        y ? h.folder = h.folder.concat(i).filter(unique).sort(ft) : arrayRemove(h.folder, i), MailScrap.redrawFolder(c)
                    }
                    if (g.peer.after[i] || (g.peer.after[i] = !0, g.peer.before[i] = !1), p.peerId === i && (arrayIntersects(h.peer, v.peer[i]) || 0 === h.peer.length) && last(h.peer) === r) {
                        h.peer = h.peer.concat(o).filter(unique).sort(asc);
                        var u = Messenger.getConvoBody(),
                            d = u.scrollTop + u.offsetHeight >= u.scrollHeight - 2;
                        MailScrap.peerAddItemsAfter([o]);
                        var f = u.scrollHeight - u.scrollTop - u.offsetHeight < 400;
                        d && Messenger.scrollConvoToBottom(), u.scrollTop + u.offsetHeight === u.scrollHeight && Messenger.scrollConvoToBottom(), f ? E(i) : uMailWrite.showToBottom(), a === p.viewerId && MailScrap.removeDivider(), a !== p.viewerId && e.msgs && e.msgs[o] && StickersAnimation.checkSettingsAndLoad(e.msgs[o], !0)
                    }
                }
                uConvo.redrawLastMsg(i), uConvo.redrawTyping(i), uConvo.redrawUnread(i), AudioMessagePlayer.redrawWaves()
            }
        });
        var M = t.textShort || (w ? '<span class="convo__msgAuthor">' + lang.mobile_mail_you + ":</span> " + r : a !== i ? '<span class="convo__msgAuthor">' + m[a].firstName + ":</span> " + r : r),
            S = store.mail.msgs[o],
            T = Messenger.getConvoBody(),
            A = S ? !S.isUnread : p.viewerId === i || p.peerId === i && y && T.scrollHeight - T.scrollTop - T.offsetHeight < 400 && !!$(".mailScrap_reachedAfter"),
            x = { id: o, peerId: i, authorId: a, date: s, dateShort: t.dateShort || s, textShort: M, textFull: t.textFull || mail.wrapLinks(r, c), isUnread: !A, edited: t.edited, canE: n ? t.canE : H(t) };
        if (u && (x.adminName = t.adminName || (u === p.userId ? lang.mobile_mail_you : m[u].name), x.adminUrl = t.adminUrl || m[u].url), storeMethods.injectMail({ msgs: e({}, o, x) }), A && (ajaxRequest("/mail", { act: "read_message", msg_id: o, peer_id: i, hash: _[i].hashRead }, function() {}), U(null, i)), k) MailScrap.peerReplaceItems([o]);
        else {
            var I = last(v.peer[i] || []);
            v.peer[i] = (v.peer[i] || []).concat(o).filter(unique).sort(asc), v.folder.all = v.folder.all.concat(i).filter(unique).sort(ft), g.peer.after[i] || (g.peer.after[i] = !0, g.peer.before[i] = !1);
            var P = _[i];
            if (y && (v.folder.unread = v.folder.unread.concat(i).filter(unique).sort(ft), P.countUnread || (P.countUnread = 0), P.countUnread += 1, uMailWrite.redrawToBottom()), P.typing.length && (arrayRemove(P.typing, a), i === p.peerId ? uCurConvoTyping.redraw() : (uConvo.redrawLastMsg(i), uConvo.redrawTyping(i))), b && (p.countUnread += 1, uMailHat.redrawCounter()), p.groupId && (y ? v.folder.unrespond = v.folder.unrespond.concat(i).filter(unique).sort(ft) : arrayRemove(v.folder.unrespond, i)), "all" === p.folder) {
                var B = h.folder.slice();
                h.folder = h.folder.concat(i).filter(unique).sort(ft), MailScrap.redrawFolder(B)
            } else if ("unread" === p.folder && a !== p.viewerId) {
                var L = h.folder.slice();
                h.folder = h.folder.concat(i).filter(unique).sort(ft), MailScrap.redrawFolder(L)
            } else if ("unrespond" === p.folder) {
                var N = h.folder.slice();
                y ? h.folder = h.folder.concat(i).filter(unique).sort(ft) : arrayRemove(h.folder, i), MailScrap.redrawFolder(N)
            }
            if (p.peerId === i && (arrayIntersects(h.peer, v.peer[i]) || 0 === h.peer.length) && last(h.peer) === I) {
                { h.peer.slice() }
                h.peer = h.peer.concat(o).filter(unique).sort(asc);
                var O = Messenger.getConvoBody(),
                    D = O.scrollTop + O.offsetHeight >= O.scrollHeight - 2;
                MailScrap.peerAddItemsAfter([o]), n && MailScrap.peerGoToBottom();
                var j = O.scrollHeight - O.scrollTop - O.offsetHeight < 400;
                D && Messenger.scrollConvoToBottom(), y && (j || uMailWrite.showToBottom()), a === p.viewerId && MailScrap.removeDivider()
            }
            a === p.viewerId && StickersAnimation.checkSettingsAndLoad(t, !0)
        }
        uConvo.redrawLastMsg(i), uConvo.redrawUnread(i), AudioMessagePlayer.redrawWaves()
    }

    function j() {
        if (store.mail.cur) {
            var e = store.mail.cur.query;
            e ? b("/mail?q=" + e) : h("/mail")
        }
    }

    function R() {
        var e = store.mail.cur,
            t = e.msgSelected,
            n = e.forwardFromId;
        e.forwardFromId = null, Object.keys(t).forEach(function(e) { delete t[e] }), Msg.unselectAll(), uMessenger.redrawMailActions(), M(n)
    }

    function q(e, t) {
        var n = q,
            i = n.timers || (n.timers = {}),
            o = store.mail,
            a = o.cur,
            r = o.peers,
            s = r[e];
        if (s) {
            var l = s.typing || (s.typing = []); - 1 === l.indexOf(t) && (l.unshift(t), s.typing = l, e === a.peerId && uCurConvoTyping.redraw(), uConvo.redrawTyping(e));
            var c = e + "_" + t;
            i[c] && clearTimeout(i[c]), i[c] = setTimeout(function() { arrayRemove(s.typing, t), e === a.peerId && uCurConvoTyping.redraw(), uConvo.redrawTyping(e) }, 7e3)
        }
    }
    q.clearTimers = function() {
        var e = q;
        e.timers && (Object.keys(e.timers).forEach(function(t) { clearTimeout(e.timers[t]) }), e.timers = {})
    };

    function F(e) {
        var t = e.userId,
            n = e.isOnline,
            i = e.onlinePlatform,
            o = e.lastActionTime,
            a = store.mail,
            r = a.cur,
            s = a.peers,
            l = s[t];
        l && (l.isOnline = n, "onlinePlatform" in e && (l.onlinePlatform = i), o && (l.lastActionTime = o), uConvo.redrawOnline(t), r.peerId === t && uMailHat.redrawOnline())
    }

    function U(e, t) {
        var n = store.mail,
            i = n.cur,
            o = n.peers,
            a = n.msgs,
            r = n.scraps,
            s = n.rolls;
        if (i) {
            var l = i.peerId === t ? r.peer : [],
                c = s.peer[t] || [],
                u = o[t];
            if (c.concat(l).forEach(function(e) {
                    var t = a[e];
                    t && t.isUnread && t.authorId !== i.viewerId && (delete t.isUnread, Msg.markAsRead(e))
                }), u ? u.countUnread && (i.countUnread -= 1, u.countUnread = 0) : i.countUnread -= 1, arrayRemove(s.folder.unread, t), "unread" === i.folder) {
                var d = r.folder.slice();
                arrayRemove(r.folder, t), MailScrap.redrawFolder(d)
            }
            uMailHat.redrawCounter(), uMailWrite.redrawToBottom(), uConvo.redrawUnread(t)
        }
    }

    function z(e, t) {
        var n = store.mail,
            i = n.cur,
            o = n.msgs,
            a = n.rolls,
            r = n.scraps,
            s = a.peer[t] || [],
            l = o[e];
        if (l)
            for (var c = s.indexOf(e); c > 0;) {
                var u = o[s[c]];
                u.authorId === i.viewerId && u.isUnread && (delete u.isUnread, Msg.markAsRead(u.id)), c--
            } else last(s) && e <= last(s) && s.forEach(function(e) {
                var t = o[e];
                t.authorId === i.viewerId && t.isUnread && (delete t.isUnread, Msg.markAsRead(t.id))
            });
        i.peerId === t && r.peer.forEach(function(e) {
            var t = o[e];
            t.authorId === i.viewerId && t.isUnread && (delete t.isUnread, Msg.markAsRead(t.id))
        }), uConvo.redrawUnread(t)
    }

    function V() {
        var e = store.mail,
            t = e.cur,
            n = e.peers,
            i = n[t.peerId];
        i.attachmentsHTML = Brick({ mix: "cp_attached_wrap", attrs: 'id="attached_wrap"' }), t.msgAttached[t.peerId] = {}, uMailWrite.uiClearAttachments()
    }

    function W() {
        if (X()) return !0;
        browser.ios && document.activeElement.blur();
        var e = qs2obj(location.search.slice(1)).act;
        if (!$(".uMessenger") && "/mail" === location.pathname && "show_medias" !== e) return nav.go(location, null, { no_push: !0, need_restore: !1 }), !0;
        var t = new RegExp(/z=photo/).test(location.search);
        return !$(".uMessenger") || t || ge("z_photoview") ? void 0 : b(location.pathname + location.search)
    }

    function X() { var e = X; return mediaUpload.isUploading ? (e.noAlert || alert(unescapeAttr(lang.mobile_mail_wait_until_uploaded)), e.noAlert = !0, setTimeout(function() { e.noAlert = !1 }, 10), !0) : void 0 }

    function Y(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = store.mail.cur;
        return "/mail" === n && o && o.groupId || i.replace ? void 0 : !t.m && geByClass1("uMessenger") ? h(n) : void 0
    }

    function G() {
        if (window.isNewMail) {
            var e = store.mail.cur;
            if (!e) return w.clearTimer(), void q.clearTimers();
            nav.getQuery("msg") || nav.getQuery("id") || Messenger.scrollConvoToBottom(), "/mail" !== location.pathname && 0 !== location.pathname.indexOf("/write") || (im.on(), uMessenger.startPolling(), mt(), e && e.peerId && uMailWrite.uiRedrawAttachments(e.peerId))
        }
    }

    function K() {
        var e = store.mail,
            t = e.cur,
            n = (e.msgs, e.peers),
            i = e.hash,
            o = t.msgSelected,
            a = toInt(Object.keys(o)[0]),
            r = n[t.peerId];
        t.msgSelected = {}, r.pinnedMsgId = a, r.hasPinnedMsg = !0, Msg.unselectAll(), uMessenger.redrawMailActions(), ajaxRequest("/mail?act=pin", { hash: i.pin, chat: nav.getQuery("chat") || store.mail.cur.peerId - 2e9, msg: a, _ajax: 1 })
    }

    function Q() {
        var e = store.mail,
            t = e.cur,
            n = (e.msgs, e.peers),
            i = e.hash,
            o = t.msgSelected,
            a = toInt(Object.keys(o)[0]),
            r = t.peerId,
            s = n[r];
        store.mail.cur.editing = a, Mt(), ajaxRequest("/mail?act=edit_message_start", { hash: i.edit, edit_msg_id: a, peerId: r, _ajax: 1 }, function(e, t) { s.attachmentsHTML = e, uMailWrite.onAttachedMsgsRemove(), uMailWrite.uiRedrawAttachments(r), uMailWrite.setModifiers({ editing: !0 }), uMailHat.setModifiers({ editing: !0 }), uMessenger.redrawMailActions(), J(), uMailWrite.setText(t) })
    }

    function J() {
        var e = store.mail.cur,
            t = e.msgSelected;
        Object.keys(t).forEach(function(e) { delete t[e] }), Msg.unselectAll(), MailActs.setCount(0), uMessenger.redrawMailActions()
    }

    function Z() {
        var e = store.mail,
            t = (e.msgs, e.cur),
            n = Object.keys(t.msgSelected).every(et),
            i = Object.keys(t.msgSelected).length;
        1 !== i || n ? MailDialog.openDialog({ canDeleteForAll: n }) : it()
    }

    function et(e) {
        var t = store.mail,
            n = t.msgs,
            i = (t.cur, t.peers),
            o = vk.id,
            a = n[e],
            r = nav.getQuery().community,
            s = i[a.peerId];
        return !a || a.authorId !== o && a.authorId !== -r ? !1 : a.peerId !== o || r ? 333 === a.peerId ? !1 : Date.now() / 1e3 - a.ts > 86400 ? !1 : s.kicked || s.closed || s.unableToWrite || s.kickedMessage ? !1 : !0 : !1
    }

    function tt() {
        var e = store.mail.cur.editing;
        e ? (nt(e), Ct(!0)) : it(!1, MailDialog.isDeleteMessagesForAll()), MailDialog.closeDialog()
    }

    function nt(e) {
        var t = store.mail,
            n = t.cur,
            i = (t.hash, t.msgs),
            o = t.peers,
            a = n.peerId,
            r = n.msgRemoved,
            s = i[e];
        r[e] = "for_all", delete i[e], Msg.remove(e, !0), s.isImportant && n.countImportant--, ajaxRequest("/mail", { act: "delete_for_all", peer: a, ids: e + "", hash: o[a].hashRemove }, function() {}), uMessenger.redrawMailActions()
    }

    function it() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
            n = store.mail,
            i = n.cur,
            o = (n.hash, n.msgs),
            a = n.peers,
            r = i.peerId,
            s = i.msgRemoved,
            l = i.msgSelected,
            c = Object.keys(l);
        c.forEach(function(n) {
            var a = o[n];
            s[n] = e ? "spam" : t ? "for_all" : !0, delete l[n], a.isImportant && i.countImportant--, t ? delete o[n] : _.destroyPrevented.push(n), e ? Msg.spam(n) : Msg.remove(n, t)
        }), ajaxRequest("/mail", { act: t ? "delete_for_all" : e ? "spam" : "delete", peer: r, ids: c.join(","), hash: a[r].hashRemove }, function() {}), uMessenger.redrawMailActions()
    }

    function ot() { it(!0) }

    function at() {
        var e = store.mail,
            t = e.cur,
            n = e.hash,
            i = e.msgs,
            o = t.msgSelected,
            a = Object.keys(o),
            r = a.some(function(e) { return !i[e].isImportant }) ? 1 : 0;
        a.forEach(function(e) { delete o[e], i[e].isImportant != !!r && (r ? t.countImportant++ : t.countImportant--), i[e].isImportant = !!r, Msg.toggleImportant([e], !!r) }), ajaxRequest("/mail", { act: "mark_important", ids: a, hash: n.important, val: r }, function() {}), Msg.unselectAll(), uMessenger.redrawMailActions()
    }

    function rt() {
        var e = store.mail.cur,
            t = e.peerId,
            n = Object.keys(e.msgSelected).map(toInt);
        e.msgAttached[t] = n, n.forEach(function(t) { delete e.msgSelected[t] }), Msg.unselectAll(), MailActs.setCount(0), uMailWrite.uiRedrawAttachments(t), uMessenger.redrawMailActions()
    }

    function st() {
        var e = store.mail.cur;
        e.forwardFromId = e.peerId, e.query = "", e.tab = "peers", k("all"), Messenger.setQuery(""), S(!1), Messenger.getMainBody().scrollTop = 0
    }

    function lt() {
        var e = store.mail,
            t = e.cur,
            n = e.peers,
            i = (e.rolls, Object.keys(n).map(toInt)),
            o = QuickSearch.getQueryREs(t.query),
            a = [];
        return o.forEach(function(e) { i.forEach(function(t) { n[t].title.match(e) && a.push(t) }) }), a.filter(unique).sort(ft)
    }

    function ct() {
        var e = store.mail,
            t = e.cur,
            n = e.scraps;
        t.query = "", t.tab = "peers", n.search = [], uMessenger.redrawView(), MailScrap.redrawSearch(), Messenger.setQuery("")
    }

    function ut(e) {
        if (store.mail.cur) {
            var t = store.mail,
                n = t.cur,
                i = t.peers,
                o = t.msgs,
                a = n.msgRemoved,
                r = n.msgSelected,
                s = i[n.peerId];
            if (uMailWrite.hideStickersPanel(), !a[e]) {
                r[e] ? delete r[e] : r[e] = !0;
                var l = Object.keys(r),
                    c = l.length,
                    u = 1 === c && l[0] == i[n.peerId].pinnedMsgId,
                    d = l.reduce(function(e, t) { return e && o[t].isImportant }, !0);
                MailActs.setCount(c), MailActs.setModifiers({ pinned: u, important: d }), MailActs.setLabels({ pinned: u, important: d });
                var f = toInt(Object.keys(r)[0]),
                    p = 1 == c && o[f];
                if (MailActs.setEditAvailable(p && p.canE && !s.unableToWrite), MailActs.setImportantAvailable(c > 0 && n.viewerId > 0), s.canPin) {
                    var _ = toInt(Object.keys(r)[0]);
                    MailActs.togglePin(1 === c && _ !== s.pinnedMsgId)
                } else MailActs.togglePin(!1);
                uMessenger.redrawMailActions()
            }
        }
    }

    function dt(e) {
        var t = store.mail,
            n = t.cur,
            i = t.hash,
            o = t.msgs,
            a = o[e],
            r = "spam" === n.msgRemoved[e] ? "nospam" : "restore";
        delete n.msgRemoved[e], Msg.restore(e), ajaxRequest("/mail", { act: r, id: e, hash: i.restore }, function() {}), a.isImportant && (n.countImportant++, f(e)), MailScrap.redrawFolder()
    }

    function ft(e, t) {
        var n = store.mail.rolls,
            i = n.peer[e] || [0],
            o = n.peer[t] || [0];
        return last(o) - last(i)
    }

    function pt() {
        var e = store.mail,
            t = e.cur,
            n = e.scraps;
        return t ? { folder: t.folder, peerId: t.peerId, scraps: { folder: n.folder.slice(), peer: n.peer.slice(), search: n.search.slice() }, scrolls: { main: 0, peer: 0 }, query: t.query, tab: t.tab } : null
    }

    function _t() { history.replaceState(pt(), null) }

    function mt() {
        var e = qs2obj(location.search.slice(1));
        store.mail.cur.mvk_entrypoint = e.mvk_entrypoint || "notifications" === e.from && "notifications" || ""
    }

    function vt() {
        if (store.mail.cur) {
            var e = !!store.mail.cur.peerId;
            $$(".vk__page_mail").forEach(function(t) { return t.classList.toggle("messenger_noPullToRefresh", e) })
        }
    }

    function ht() {
        var e = store.mail.cur.peerId,
            t = $(".pinnedMsg");
        if (t) {
            var n = (Number(t.dataset.id), bt());
            delete n[e], kt(n), wt()
        }
    }

    function gt() {
        var e = store.mail.cur.peerId,
            t = $(".pinnedMsg");
        if (t) {
            var n = Number(t.dataset.id),
                i = bt();
            i[e] = n, kt(i), wt()
        }
    }

    function wt() {
        {
            var e = store.mail,
                t = e.cur;
            e.peers
        }
        if (t) {
            var n = t.peerId;
            if (n) {
                var i = $(".pinnedMsg"),
                    o = bt(),
                    a = o[n],
                    r = i ? intval(i.dataset.id) : null;
                uMessenger.setPinnedVisibility(r && a !== r)
            }
        }
    }

    function yt() {
        var e = $(".pinnedMsg");
        if (e) {
            var t = Number(e.dataset.id);
            if (!t) {
                var n = store.mail.cur.peerId,
                    i = bt();
                delete i[n], kt(i)
            }
        }
    }

    function bt() { return lsGet("messenger.pinHidden") || {} }

    function kt(e) { lsSet("messenger.pinHidden", e) }

    function Ct(e) {
        if (store.mail.cur && store.mail.cur.editing) {
            store.mail.cur.editing = !1, Mt(), e !== !0 && ajaxRequest("/mail?act=edit_message_cancel", { peerId: store.mail.cur.peerId }), V(), uMailWrite.setText(""), uMailWrite.setModifiers({ editing: !1 }), uMailHat.setModifiers({ editing: !1 });
            var t = Messenger.getConvoBody(),
                n = t.scrollTop + t.offsetHeight >= t.scrollHeight - 2;
            n && Messenger.scrollConvoToBottom()
        }
    }

    function Mt() {
        var e = nav.getQuery();
        store.mail.cur.editing ? e.edit_msg_id = store.mail.cur.editing || void 0 : delete e.edit_msg_id, nav.go(location.pathname + obj2qs(e), !1, { replace: !0, push_only: !0 })
    }

    function St() {
        if (store.mail.msgs) {
            var e = +nav.getQuery("edit_msg_id");
            e && store.mail.msgs[e] && (store.mail.cur.msgSelected[e] = !0, Q())
        }
    }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    t.AverageAlgorithm = function() {
        function e() { n(this, e), this.clear() }
        return e.prototype.push = function(e) { this._count++, this._accum += e }, e.prototype.get = function() { return this._accum / this._count }, e.prototype.clear = function() { this._count = 0, this._accum = 0 }, e
    }()
}, function() {
    var e = window,
        t = e.Friends,
        n = e.domData,
        i = e.FeedAssistanceStats,
        o = e.getLang;
    window.FeedAssistanceImportContacts = { importContacts: u };
    var a = {},
        r = "feedAssistanceImportContacts__desc",
        s = "mobile_friends_import_error",
        l = "mobile_join_friends_found_count",
        c = !1;
    i.registerTrackingCls("feedAssistance_importContacts"), i.onStartViewElement(function(e) { i.getElementType(e) === i.BLOCKS.BLOCK_TYPE_IMPORT_CONTACTS && (c = !0) }), t.onImportSuccess(function() {
        var e = arguments[0],
            t = arguments[2],
            n = a[e];
        if (n) {
            var s = geByClass1(r, n);
            s.textContent = o(l, t)
        }
        c && i.dispatchEvent({ type: i.EVENTS.EVENT_FEED_ASSISTANCE, data: i.serializeEventData(i.EVENTS.EVENT_FEED_ASSISTANCE, n, "m_mp", i.EVENTS.SUB_EVENT_FILLED) })
    }), t.onImportFailed(function(e) {
        var t = a[e];
        if (t) {
            var n = geByClass1(r, t);
            n.textContent = o(s)
        }
    });

    function u(e, t, i) { if (window.XMLHttpRequest && !i) { var o = n(e, "service-id"); return window.open(t), a[o] = e, !1 } }
}, function() {
    Object.assign(Typing, { setTyping: e });

    function e(e, t) {
        var n = "string" == typeof e ? $(".typing_id_" + e) : e,
            i = n.$(".typing__names");
        n.classList.toggle("typing_empty", Typing_isEmpty(t)), i.innerText = Typing_renderNames(t)
    }
}, function() {
    var e = (need("$"), need("$$")),
        t = need("page"),
        n = need("browser"),
        i = need("onDOMReady");
    window.Slider = {},
        function() { Slider._onWheel = r, s() }();
    var o = { slider: "Slider" },
        a = { slider: ".Slider", scroll: ".Slider__scroll" };

    function r(e, t) {
        var n = e.deltaX,
            i = e.deltaY;
        Math.abs(n) > Math.abs(i) && (e.preventDefault(), t.scrollLeft += n)
    }

    function s() {
        n.ios && (i(c), t.onChange(c), window.MutationObserver && i(function() {
            var e = new MutationObserver(l);
            e.observe(document.body, { subtree: !0, childList: !0 })
        }))
    }

    function l(e) { e.forEach(function(e) { e.addedNodes.forEach(function(e) { e.nodeType === Node.ELEMENT_NODE && e.classList.contains(o.slider) && u(e) }) }) }

    function c() { e(a.slider).forEach(u) }

    function u(e) {
        var t = getComputedStyle(e),
            n = Number(t.paddingTop.replace("px", "")),
            i = Number(t.paddingBottom.replace("px", ""));
        e.style.overflow = "hidden", e.style.height = e.offsetHeight - n - i + "px", e.$(a.scroll).style.paddingBottom = "20px"
    }
}, function(e) {
    function t(e) {
        var t;
        if ("SELECT" === e.nodeName) e.focus(), t = e.value;
        else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
            var n = e.hasAttribute("readonly");
            n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
        } else {
            e.hasAttribute("contenteditable") && e.focus();
            var i = window.getSelection(),
                o = document.createRange();
            o.selectNodeContents(e), i.removeAllRanges(), i.addRange(o), t = i.toString()
        }
        return t
    }
    e.exports = t
}, function() {
    var e = a(['\n    <div class="', '" ', " ", ">\n      ", "\n    </div>\n  "], ['\n    <div class="', '" ', " ", ">\n      ", "\n    </div>\n  "]),
        t = a(["\n    ", '\n    <div class="msg__content">\n      <div class="msg__head">\n        <a class="msg__author" href="', '">', '</a>\n        <div class="msg__date">', "</div>\n        ", "\n        ", "\n        ", "\n        ", '\n      </div>\n      <div class="msg__text">\n        ', '\n      </div>\n    </div>\n    <div class="msg__restore">\n      ', "\n    </div>\n  "], ["\n    ", '\n    <div class="msg__content">\n      <div class="msg__head">\n        <a class="msg__author" href="', '">', '</a>\n        <div class="msg__date">', "</div>\n        ", "\n        ", "\n        ", "\n        ", '\n      </div>\n      <div class="msg__text">\n        ', '\n      </div>\n    </div>\n    <div class="msg__restore">\n      ', "\n    </div>\n  "]),
        n = a(['\n    <div class="msg__admin">\n      (<a class="msg__adminLink" href="', '">', "</a>)\n    </div>\n  "], ['\n    <div class="msg__admin">\n      (<a class="msg__adminLink" href="', '">', "</a>)\n    </div>\n  "]),
        i = a(['\n    <span class="msg__edited">\n      <span class="msg__editedMiddot">&middot;</span>', "\n    </span>\n  "], ['\n    <span class="msg__edited">\n      <span class="msg__editedMiddot">&middot;</span>', "\n    </span>\n  "]),
        o = a(['\n    <span class="msg__restoreText msg__restoreText_remove">\n      ', '\n    </span>\n    <span class="msg__restoreText msg__restoreText_spam">\n      ', '\n    </span>\n    <span class="msg__restoreText msg__restoreLink" ', ">\n      ", "\n    </span>\n  "], ['\n    <span class="msg__restoreText msg__restoreText_remove">\n      ', '\n    </span>\n    <span class="msg__restoreText msg__restoreText_spam">\n      ', '\n    </span>\n    <span class="msg__restoreText msg__restoreLink" ', ">\n      ", "\n    </span>\n  "]);

    function a(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    window.Msg = r, window.Msg_renderRestoreInner = u;

    function r(t) {
        if ("for_all" === t.removed) return "";
        var n = t.id,
            i = t.removed,
            o = t.service,
            a = s(t),
            r = q["class"]("msg", { id: n, service: o, unread: t.unread, important: t.important, removed: !!i, spam: "spam" === i }),
            l = "",
            c = "";
        return o || (l = q.onClick("Msg._onClick", "event", "this", n), c = q.onTouchStart("Msg._onTouchStart")), q.html(e, r, l, c, a)
    }

    function s(e) {
        if (e.service) return e.text;
        var n = Avatar({ mix: "msg__avatar", url: e.authorUrl, photos: [e.authorPhoto], size: 40 }),
            i = Icon({ mix: "msg__check", icon: "check" }),
            o = Icon({ mix: "msg__star", icon: "star", blue: !0 }),
            a = e.admin ? l(e.admin) : "",
            r = e.removed ? u(e.id) : "",
            s = e.edited ? c() : "";
        return q.html(t, n, e.authorUrl, e.authorName, e.date, s, a, i, o, e.text, r)
    }

    function l(e) { return q.html(n, e.url, e.name) }

    function c() { var e = window.lang; return q.html(i, e.mobile_mail_edited) }

    function u(e) {
        var t = window.lang,
            n = q.onClick("Msg._onRestoreClick", "event", e);
        return q.html(o, t.mobile_msg_mail_message_deleted, t.mobile_msg_mail_message_marked_as_spam, n, t.mobile_restore)
    }
}, function() {
    var e = window,
        t = e.cancelEvent,
        n = e.gpeByClass,
        i = e.geByClass1,
        o = e.toggleClass,
        a = e.hasClass,
        r = e.ajax,
        s = e.attr,
        l = need("Popup"),
        c = function() {
            var e = "adultConfirm__submit_disabled";
            return {
                init: function() {
                    var t = i("_adultConfirm"),
                        n = i("_adultConfirm__submit", t),
                        a = i("_adultConfirm__checkbox", t);
                    o(e, n, !a.checked)
                },
                toggle: function(t) {
                    var a = n("_adultConfirm", t),
                        r = i("_adultConfirm__submit", a);
                    o(e, r, !t.checked)
                },
                submit: function(o, c) {
                    if (t(o), !a(e, c)) {
                        var u = n("_adultConfirm", c),
                            d = i("_adultConfirm__form", u),
                            f = { _ajax: 1 };
                        each(geByTag("input", d), function(e, t) {
                            var n = t.type.toLowerCase(),
                                i = t.name.toLowerCase();
                            ("hidden" === n || "checkbox" === n || "radio" === n) && (f[i] = t.value)
                        });
                        var p = s(d, "action");
                        r.post(p, f), l.close()
                    }
                },
                back: function(e) { t(e), window.history ? window.history.back() : window.location = "/" }
            }
        }();
    window.AdultConfirm = c
}, function() {
    var e = need("$"),
        t = window,
        n = t.lsGet,
        i = t.ge,
        o = t.addClass,
        a = t.removeClass,
        r = t.each,
        s = t.geByClass,
        l = t.hide,
        c = t.show,
        u = t.val,
        d = t.geByClass1,
        f = t.gpeByClass,
        p = t.attr,
        _ = t.addEvent,
        m = t.cancelEvent,
        v = t.hasClass,
        h = t.getX,
        g = t.geByTag1,
        w = t.htsc,
        y = t.stripTags,
        b = t.toggleClass,
        k = t.lsSet,
        C = (t.append, t.bem),
        M = window,
        S = M.ajax,
        E = window,
        T = E.nav,
        A = window,
        x = A.isTouch,
        I = window,
        P = I.audio,
        B = function() {
            var t = "1" == n("audio_time_left"),
                M = "",
                E = "",
                A = "",
                I = null,
                L = 0,
                N = {};
            P.onPlay(D), P.onPause(j), P.onSelect(R), P.onDeselect(q), P.onProgress(function(e, t, n) {
                var i = geBySel('.audio_item[data-id="' + e + '"]');
                P.playing() ? (r(i, function(e, t) { o("ai_playing", t) }), o("ai_playing", "lm_audio")) : (r(i, function(e, t) { a("ai_playing", t) }), a("ai_playing", "lm_audio")), i && r(i, function(e, i) { J(i, t / n), o("ai_current", i) })
            }), P.onPositionChanged(F), P.onVolumeChanged(function(e, t) {
                var n = geBySel('.audio_item[data-id="' + e + '"]');
                n && r(n, function(e, n) { et(n, t) })
            }), P.onEnded(function(e) {
                var t = geBySel('.audio_item[data-id="' + e + '"]');
                t && r(t, function(e, t) { Z(t, 1) })
            }), P.onNotFoundError(U), P.onEmptyPlaylistError(U);

            function O(e, t) {
                e && m(e);
                var n = P.getCurrent(),
                    o = f("_audioPlaylist", t),
                    a = n ? n.id : !1;
                a && f("_audioPlaylist", i("audio" + a)) || (a = p(d("audio_item", o ? o : i("mcont")), "data-id")), a && _t(e, a)
            }

            function H() {
                r(s("ai_current"), function(e, t) { t = tt(t), q(t.id, t.dur) });
                var e = P.getCurrentId(),
                    t = geBySel('.audio_item[data-id="' + e + '"]'),
                    n = P.loaded(),
                    i = P.position(),
                    l = P.duration();
                P.playing() ? (r(t, function(e, t) { o("ai_playing", t) }), o("ai_playing", "lm_audio")) : (r(t, function(e, t) { a("ai_playing", t) }), a("ai_playing", "lm_audio")), R(P.getCurrent()), r(t, function(e, t) { J(t, n / l) }), F(P.getCurrentId(), i, l), setTimeout(function() { pt() }, 1)
            }

            function D(e) {
                o("ai_playing", "lm_audio");
                var t = geBySel('.audio_item[data-id="' + e + '"]');
                t && (r(t, function(e, t) { o("ai_playing", t), o("ai_current", t) }), B.playback(e))
            }

            function j(e) {
                a("ai_playing", "lm_audio");
                var t = geBySel('.audio_item[data-id="' + e + '"]');
                t && (r(t, function(e, t) { a("ai_playing", t), o("ai_current", t) }), B.playback(e, !0))
            }

            function R(e) {
                if (!e) return void l("lm_player");
                c("lm_player");
                var t = i("lm_audio");
                t && (u(d("ai_artist", t), e.artist), u(d("ai_title", t), e.title), p(d("ai_play", t), "style", e.cover_style));
                var n = geBySel('.audio_item[data-id="' + e.id + '"]');
                n && r(n, function(e, t) { J(t, 0), Z(t, 0), Q(t, ot(0, P.duration())), et(t, P.volume()), o("ai_current", t) })
            }

            function q(e, t) {
                a("ai_playing", "lm_audio");
                var n = geBySel('.audio_item[data-id="' + e + '"]');
                n && (r(n, function(e, n) { Q(n, it(t)), a("ai_playing", n), a("ai_current", n) }), L = 0, N[e] && delete N[e])
            }

            function F(e, t, n) {
                var i = geBySel('.audio_item[data-id="' + e + '"]');
                i && (r(i, function(e, i) {
                    var o = t / n;
                    .01 >= t && 1 >= n && (o = 0), z || Z(i, o), Q(i, B.getFormatedTime(t, n))
                }), t > 1 && (N[e] = 1))
            }

            function U(e) {
                var t = f("audios_list", "audio" + e),
                    n = s("audio_item", t),
                    i = [],
                    o = !1;
                r(n, function(t, n) { return (n = tt(n)) ? (i.push(n), void(n.id == e && (o = !0))) : !0 }), P.playlist(i, { q: p(t, "data-query") }), o && P.play(e)
            }
            var z = null,
                $ = null,
                V = !1,
                W = !1;
            _(document, x ? "touchend touchcancel" : "mouseup", Y), _(document, x ? "touchmove" : "mousemove", X);

            function X(e) {
                if (z) {
                    var t = f("audio_item", z),
                        n = K(z, e);
                    e && m(e);
                    var i = geBySel('.audio_item[data-id="' + p(t, "data-id") + '"]');
                    r(i, function(e, t) { V && Z(t, n), W && (et(t, n), P.volume(n)) }), $ = n
                }
            }

            function Y(e) {
                if (z) {
                    var t = f("audio_item", z),
                        n = K(z, e) || $;
                    e && m(e);
                    var i = geBySel('.audio_item[data-id="' + p(t, "data-id") + '"]');
                    r(i, function(e, i) { V && (Z(i, n), P.position(n, !0)), W && et(t, n) }), z = $ = null, V = W = !1
                }
            }

            function G(e) { return e.getBoundingClientRect().left }

            function K(e, t) {
                var n = f("Slider__scroll", e),
                    i = v("touch", window.bodyNode) ? 10 : 8,
                    o = t.pageX || t.touches && t.touches[0] && t.touches[0].pageX || 0,
                    a = o - (n ? G(e) : h(e)) - i / 2,
                    r = e.offsetWidth - i,
                    s = r ? Math.max(0, Math.min(a / r, 1)) : 0;
                return s
            }

            function Q(e, t) {
                if (e) {
                    var n = d("ai_dur", e);
                    u(n, t)
                }
            }

            function J(e, t) {
                if (e) {
                    var n = d("aic_progress_wrap", e),
                        i = d("aic_load_line", n);
                    i.style.width = 100 * Math.max(0, Math.min(t, 1)) + "%"
                }
            }

            function Z(e, t) {
                if (e) {
                    {
                        var n = d("aic_progress_wrap", e),
                            i = d("aic_progress_line", n);
                        d("aic_slider", i)
                    }
                    i.style.width = 100 * t + "%"
                }
            }

            function et(e, t) {
                if (e) {
                    {
                        var n = d("aic_volume_wrap", e),
                            i = d("aic_progress_line", n);
                        d("aic_slider", i)
                    }
                    i.style.width = 100 * t + "%"
                }
            }

            function tt(e) {
                if (e = i(e), !e || !p(e, "data-id")) return !1;
                if (v("ai_deleted", e)) return !1;
                var t = p(e, "data-id"),
                    n = u(g("input", e)),
                    o = p(d("ai_dur", e), "data-dur"),
                    a = u(d("ai_artist", e)),
                    s = u(d("ai_title", e)),
                    l = !!d("ai_add", e),
                    c = !!d("ai_del", e),
                    f = p(d("ai_play", e), "style"),
                    _ = !!d("audio_item_disabled", e),
                    m = {};
                return r((p(e, "class") || []).split(" "), function(e, t) {
                    var n = "audio_item_",
                        i = t.slice(0, n.length);
                    i === n && (m[t.slice(n.length)] = !0)
                }), { id: t, src: n, dur: o, artist: w(y(a)), title: w(y(s)), can_add: l, can_del: c, cover_style: f, is_disabled: _, mix: m }
            }

            function nt(e, t, n) {
                if (!e) return "";
                var i = w(e.id),
                    o = w(e.src),
                    a = +e.dur,
                    r = e.artist,
                    s = e.title,
                    l = e.can_add,
                    c = e.can_del,
                    u = s ? '<span class="divider"> &ndash; </span>' : "",
                    d = x ? "ontouchstart" : "onmousedown",
                    f = "",
                    p = "",
                    _ = e.cover_style || "",
                    m = e.is_disabled || "",
                    v = C["class"]("audio_item", e.mix) || "audio_item";
                if (m) return '<div class="audio_item audio_item_disabled"></div>';
                if (lt(i)) {
                    if (n) return "";
                    f += " ai_deleted"
                }
                at(i) && (f += " ai_added"), c ? (f += " ai_has_btn", p = '<div class="ai_del wia_item" onclick="audioplayer.del(\'' + i + "', event);\">" + lang.global_delete_audio + "</div>") : l && (f += " ai_has_btn", p = '<div class="ai_add wia_item" onclick="audioplayer.add(\'' + i + "', event);\">" + lang.global_add_to_audio + "</div>"), i == P.getCurrentId() && (P.playing() && (f += " ai_playing"), f += " ai_current");
                var h = "";
                return p ? h = '<div class="ai_menu_wrap"><i class="i_pointer"></i><a href="#" class="ai_menu_toggle_button" onclick="ActionMenu.toggleMenu(event, this);"></a><div class="ai_menu wi_actions" id="ai_menu_' + i + '">' + p + "</div></div>" : f += " ai_no_menu", '<div id="audio' + i + '" data-id="' + i + '" class="' + f + " " + v + '" onclick="audioplayer.playPause(event, \'' + i + "'" + (t ? ", true" : "") + ');"><div class="ai_info"><div class="ai_play" style="' + _ + '"><i class="i_play"></i></div>' + h + '<div class="ai_body"><div class="ai_dur" data-dur="' + a + '" onclick="audioplayer.switchTimeFormat(this, event);">' + it(a) + '</div><div class="ai_label"><span class="ai_title">' + s + "</span>" + u + '<span class="ai_artist">' + r + '</span></div><input type="hidden" value="' + o + '"></div></div><div class="ai_controls"><table class="row_table"><tr><td class="aic_progress_wrap"><div class="aic_line" ' + d + '="audioplayer.setPosition(this, event);" onclick="cancelEvent(event);"><div class="aic_ln aic_back_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_load_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_pl_wrap" onclick="cancelEvent(event);"><div class="aic_ln aic_progress_line" onclick="cancelEvent(event);"><div class="aic_slider" onclick="cancelEvent(event);"></div></div></div></div></td><td class="aic_volume_wrap"><div class="aic_line" ' + d + '="audioplayer.setVolume(this, event);" onclick="cancelEvent(event);"><div class="aic_ln aic_back_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_pl_wrap" onclick="cancelEvent(event);"><div class="aic_ln aic_progress_line" onclick="cancelEvent(event);"><div class="aic_slider" onclick="cancelEvent(event);"></div></div></div></div></td></tr></table></div></div>'
            }

            function it(e) { var t, n, i, o = 0 > e; return e = Math.round(o ? -e : e), n = e % 60, t = 10 > n ? "0" + n : n, e = Math.floor(e / 60), i = e % 60, t = i + ":" + t, e = Math.floor(e / 60), e > 0 && (10 > i && (t = "0" + t), t = e + ":" + t), o && (t = "-" + t), t }

            function ot(e, n) { return it(t && n ? e - n : e) }

            function at(e) {
                var t = window,
                    n = t.cur;
                return n.addedAudios ? n.addedAudios[e] : !1
            }

            function rt(e) {
                var t = window,
                    n = t.cur;
                n.addedAudios || (n.addedAudios = {}), n.addedAudios[e] = !0
            }

            function st(e) {
                var t = window,
                    n = t.cur;
                n.addedAudios && delete n.addedAudios[e]
            }

            function lt(e) {
                var t = window,
                    n = t.cur;
                return n.deletedAudios ? n.deletedAudios[e] : !1
            }

            function ct(e) {
                var t = window,
                    n = t.cur;
                n.deletedAudios || (n.deletedAudios = {}), n.deletedAudios[e] = !0
            }

            function ut(e) {
                var t = window,
                    n = t.cur;
                n.deletedAudios && delete n.deletedAudios[e]
            }

            function dt(e, t) {
                t ? rt(e) : st(e);
                var n = geBySel('.audio_item[data-id="' + e + '"]');
                r(n, function(e, n) { b("ai_added", n, t), u(d("ai_add", n), t ? lang.global_delete_audio : lang.global_add_to_audio) });
                var i = geBySel1('body > [id="ai_menu_' + e + '"]'),
                    o = d("ai_add", i);
                u(o, t ? lang.global_delete_audio : lang.global_add_to_audio), ActionMenu.update()
            }

            function ft(e, t) {
                t ? ct(e) : ut(e);
                var n = geBySel('.audio_item[data-id="' + e + '"]');
                r(n, function(e, n) { b("ai_deleted", n, t), u(d("ai_del", n), t ? lang.global_add_to_audio : lang.global_delete_audio) });
                var i = geBySel1('body > [id="ai_menu_' + e + '"]'),
                    o = d("ai_del", i);
                u(o, t ? lang.global_add_to_audio : lang.global_delete_audio), ActionMenu.update()
            }

            function pt() {
                var e = P.getCurrentId(),
                    t = !1;
                return e && (t = f("mcont", i("audio" + e))), t ? void r(s("_AudioPlayStatus", t), function(e, t) { b("playing", t, P.playing()) }) : void r(s("_AudioPlayStatus"), function(e, t) { b("playing", t, !1) })
            }

            function _t(e, t, n) {
                var o = window,
                    a = o.isArticleWebView;
                if (a) return Article.audioPlay(P.getCurrentId(), P.playlist()), m(e), !1;
                var r = window,
                    s = r.lang;
                if (P.support) {
                    var l = i("audio" + t);
                    if (l && v("ai_deleted", l) && !v("ai_current", l)) return !0;
                    n && t != P.getCurrentId() ? U(t, !0) : P.operate(t), pt()
                } else alert(s.mobile_audio_player_not_support);
                return m(e), !1
            }
            return {
                init: function(e) { M = e.add_hash || "", E = e.del_hash || "", A = e.res_hash || "" },
                initAudio: H,
                getDOMFromAudio: nt,
                add: function(e, t) {
                    var n = i("audio" + e);
                    if (!v("ai_ajax", n)) {
                        var r = v("ai_added", n);
                        dt(e, !r), o("ai_ajax", n), S.post("/audio", { _ajax: 1, act: r ? "delete" : "add", audio: r ? p(n, "data-deleteid") : e, hash: r ? E : M }, {
                            redirectToLoginPage: !0,
                            onDone: function(t) { a("ai_ajax", n), t ? p(n, "data-deleteid", t) : dt(e, r) },
                            onFail: function() {
                                a("ai_ajax", n), dt(e, r);
                                var t = Array.prototype.slice.call(arguments),
                                    i = t.shift();
                                switch (i) {
                                    case 2:
                                        T.go("/audio?act=add&audio=" + e + "&hash=" + M)
                                }
                            }
                        }), t && m(t)
                    }
                },
                del: function(e, t) {
                    var n = i("audio" + e);
                    if (n) {
                        var o = v("ai_deleted", n);
                        ft(e, !o), o ? ut(e) : ct(e), S.post("/audio", { _ajax: 1, act: o ? "restore" : "delete", audio: e, hash: o ? A : E }, {
                            redirectToLoginPage: !0,
                            onDone: function(t) { t || ft(e, o) },
                            onFail: function() {
                                ft(e, o);
                                var t = Array.prototype.slice.call(arguments),
                                    n = t.shift();
                                switch (n) {
                                    case 2:
                                        T.go("/audio?act=" + (o ? "restore" : "delete") + "&audio=" + e + "&hash=" + (o ? A : E))
                                }
                            }
                        }), t && m(t)
                    }
                },
                playPause: _t,
                getFormatedTime: ot,
                switchTimeFormat: function(e, n) {
                    var o = f("audio_item", e);
                    if (!v("ai_current", o) || v("ai_select", o)) return !0;
                    t = !t, k("audio_time_left", t ? "1" : "0");
                    var a = i("audio" + P.getCurrentId());
                    return Q(a, ot(P.position(), P.duration())), n && m(n), !1
                },
                setPosition: function(e, t) { z || (z = e, V = !0, X(t)) },
                setVolume: function(e, t) { z || (z = e, W = !0, X(t)) },
                playback: function(e, t) {
                    if (clearTimeout(I), !t && e && e != L) {
                        var n = function i() { return N[e] ? void S.post("/audio", { _ajax: 1, act: "playback", audio: e, hash: M }, { onDone: function() { L = e } }) : void(I = setTimeout(i, 1e4)) };
                        I = setTimeout(n, 1e4)
                    }
                },
                openPlayer: function(e, t) {
                    var n = T.path,
                        i = T.params,
                        o = "#player",
                        a = n + (i ? "?" + i : "") + o;
                    return T.al_go(a, null, { local: !0, target: e, nav: { push: a, path: n, params: i, hash: o }, no_push: t })
                },
                getCurrentElem: function() { return e(".ai_current") },
                playFirst: O,
                hasArticleWebViewClientAudioSupport: function() { return window.clientWebviewAudioSupport }
            }
        }();
    window.audioplayer = B
}, function() { String.prototype.trim || (String.prototype.trim = function() { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") }) }, function() {
    var e = need("nav"),
        t = need("ajax"),
        n = need("Url"),
        i = need("TabRow"),
        o = need("AudioSerp");
    window.hmAudioSerp = { _init: c },
        function() { hmAudioSerp._onQueryChange = u }();
    var a = 300,
        r = {},
        s = null,
        l = null;

    function c() { d(), cur.processNav = f, cur.destroy.push(function() { return e.clear() }) }

    function u(t) {
        var i = t.query,
            c = p(i);
        if (l && l.abort(), s && clearTimeout(s), c in r || !c) return void u();
        o.setView("spinner"), s = setTimeout(u, a);

        function u() { e.go(n.make(e.path, { q: i, tab: !0 })) }
    }

    function d() {
        var t = p(e.getQuery("q"));
        t && (r[t] = o.getFoundHtml())
    }

    function f(a) {
        var s = e.path,
            c = a.nav.path,
            u = qs2obj(e.params),
            d = qs2obj(a.nav.params);
        if (s !== c || d.act) return !1;
        if (u.tab !== d.tab) {
            var f = d.tab || "owned";
            o.setTab(f), i.setSelectedTab("hmAudioSerp", f)
        } else {
            var _ = d.q || "",
                m = p(_);
            l && l.abort();
            var v = n.make(s, { q: _, tab: null }),
                h = n.make(s, { q: _, tab: "global" });
            i.setTabUrl("hmAudioSerp", "owned", v), i.setTabUrl("hmAudioSerp", "global", h), SearchPanel.setQuery("hmAudioSerp", _), _ ? m in r ? (o.setFoundHtml(r[m]), o.setView("found")) : (o.setView("spinner"), l = t.post(s, { q: _, _ajax: 1 }, { onDone: function(e) { o.setFoundHtml(e), o.setView("found"), r[m] = e } })) : o.setView("owned")
        }
        return !0
    }

    function p(e) { return (e || "").trim().toLowerCase() }
}, function() {
    var e = window,
        t = e.hide,
        n = e.lockButton,
        i = e.gpeByClass,
        o = window,
        a = o.ajax;
    window.FeedNotifications = {
        webActionsAcceptHandlers: {},
        webActionsDeclineHandlers: {},
        withoutNavActions: ["enable_browser_notifications"],
        hide: function(e, o, r, s, l, c, u, d) {
            var f = { _ajax: 1, act: "hide_internal_notification", reason: s, id: o, hash: r },
                p = {},
                _ = i("_block", e),
                m = !0;
            if ("decline" == s) {
                t(_);
                var v = this.webActionsDeclineHandlers[c];
                m = this.runActionHandler(v, e, f, p, u)
            } else {
                n(e);
                var h = this.webActionsAcceptHandlers[c];
                m = this.runActionHandler(h, e, f, p, u), "add_custom_newsfeed" == c && (setCookie("remixcustom_feed_added", u), f.action = c, f.action_section = u.section, f.action_hash = u.hash)
            }
            return p.onDone = function() {
                ("compact" !== d || "accept" !== s) && cur.destroy.push(function() { return remove(_) }), ~this.withoutNavActions.indexOf(c) || nav.go(e, l)
            }.bind(this), p.onFail = function() { unlockButton(e) }, Promise.resolve(m).then(function(e) {
                (e || isUndefined(e)) && a.post("/index.php", f, p)
            }), !1
        },
        runActionHandler: function(e, t, n, i, o) { return isFunction(e) ? e(t, n, i, o) : !0 },
        addWebActionAcceptHandler: function(e, t) { this.webActionsAcceptHandlers[e] = t },
        addWebActionDeclineHandler: function(e, t) { this.webActionsDeclineHandlers[e] = t }
    }
}, function() {
    var e = window,
        t = e.attr,
        n = e.removeClass,
        i = e.addClass,
        o = e.hasClass,
        a = e.toggleClass,
        r = e.ge,
        s = e.val,
        l = e.geByClass1,
        c = e.langNumeric,
        u = e.each,
        d = e.lockButton,
        f = window,
        p = f.browser,
        _ = window,
        m = _.ajax,
        v = window,
        h = v.nav,
        g = window,
        w = g.page,
        y = window,
        b = y.mail,
        k = window,
        C = k.im,
        M = function() {
            var e, f, _ = [],
                v = !1,
                g = !1,
                y = {};

            function k(e) { return function() { return v ? void 0 : e.apply(this, arguments) } }

            function M(e) { return "A" === e.tagName }

            function E(e) {
                var a = t(e, "data-id"),
                    r = _.indexOf(a);
                r >= 0 ? (_.splice(r, 1), n("mi_selected", e), delete y[a]) : (_.push(a), i("mi_selected", e), y[a] = o("msg_item_important", e))
            }

            function T() { g = _.length > 0, a("vk_messages_actions_visible", r("vk"), g) }

            function A() {
                var e = window,
                    t = e.lang,
                    n = Math.max(_.length, 1);
                s(l("messagesActions__row_counter"), c(n, t.mobile_mail_messages_selected).replace("{count}", n))
            }

            function x() { g && (y = {}, u(_, function(e, t) { n("mi_selected", l("_msg" + t)) }), v = !1, _ = [], T()) }

            function I() { return window.getSelection ? window.getSelection().toString().length > 0 : !1 }

            function P(e) {
                var t = e.target,
                    n = e.currentTarget,
                    i = M(t) || M(t.parentNode);
                i && x(), p.uc_mini || I() || i || setTimeout(function() { I() || (E(n), T(), A()) }, 40)
            }

            function B(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !1;
                v = !0, d(e), C.off(), m.click("/mail", {}, { url_params: { act: i ? "spam" : "delete", peer: t, hash: n, ids: _.join(","), community: S() } })
            }

            function L(e, t, n) { B(e, t, n, !0) }

            function N(e, t, n) { v = !0, d(e), m.click("/attachments", {}, { url_params: { act: "add", target: "mail" + t, hash: n, object: "mail" + _.join(";"), community: S() } }) }

            function O(t, n) {
                v = !0, d(t), e = "mail" + _.join(";"), f = n;
                var i = S(),
                    o = i ? "?community=" + i : "";
                h.go(location.pathname + o, null, { ignore_cur_process: !0 })
            }

            function H() { return Boolean(e) }

            function D(t) { m.click("/attachments", {}, { url_params: { act: "add", target: "mail" + t, hash: f, object: e, community: S() } }), e = "" }

            function j() { r("dialogs") && H() ? i("vk_dialogs_forwarding", r("vk")) : e = "", x() }

            function R(e) {
                var t, n = _.length,
                    i = 0;
                for (t = 0; n > t; t++)
                    if (!y[_[t]]) { i = 1; break }
                for (t = 0; n > t; t++) a("msg_item_important", l("_msg" + _[t]), 1 === i);
                m.post("/mail", { _ajax: 1, act: "mark_important", ids: _, val: i, hash: e }), x()
            }
            return w.onChange(j), b.onShowDialogsPageFromCache(j), b.onShowDialogFromCache(j), b.onMessagesRepainted(function() { u(_, function(e, t) { i("mi_selected", l("_msg" + t)) }) }), { onMessageClick: k(P), remove: k(B), reply: k(N), forward: k(O), spam: k(L), close: k(x), toggleImportant: k(R), hasFwdMessages: H, attachFwdMessages: D }
        }();

    function S() { return h.getQuery("community") }
    window.MessagesActions = M
}, function(e, t, n) {
    var i = n(188),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    var r = window,
        s = r.nav,
        l = r.ajax,
        c = r.geByClass1,
        u = r.addClass,
        d = r.val,
        f = "pageMoneyTransfer",
        p = "pageMoneyTransfer_error",
        _ = "pageMoneyTransfer_errorCookie",
        m = "pageMoneyTransfer_success",
        v = "pageMoneyTransfer__errorText",
        h = "pageMoneyTransfer__iframe",
        g = 2e3,
        w = void 0,
        y = void 0,
        b = void 0;
    o["default"].onIframeReady(function(e) { C(), y = { checkUrl: e.check_transfer_url, onSuccessUrl: e.on_success_url }, M(), window.cur.destroy.push(S) }), o["default"].onPostMessage(function(e, t) { "paySuccess" === e ? u(m, c(f)) : "payError" === e ? (S(), u(p, c(f)), d(c(v), t.descr)) : "session_fail" === e && (S(), u(p, c(f)), u(_, c(f))) });
    var k = 0;
    o["default"].onAcceptCookieClick(function() {
        var e = window.open("https://top-fwz1.mail.ru/counter2?id=1;", "", "width=300; height=300");
        setTimeout(function() {
            e.close();
            var t = c(h),
                n = clone(t);
            removeClass(p, c(f)), replace(n, t);
            var i = n.contentWindow.document;
            i.open("text/html", "replace"), i.write(attr(t, "data-html")), i.close(), M()
        }, 400 + k), 750 > k && (k += 150)
    });

    function C() {
        var e = c(h);
        if (!e) return void setTimeout(C, 2e3);
        var t = e.contentWindow.document;
        t.open("text/html", "replace"), t.write(attr(e, "data-html")), t.close()
    }

    function M() {
        var e = y,
            t = e.checkUrl,
            n = e.onSuccessUrl;
        w = setInterval(function() { b = l.post(t, {}, { onDone: function(e, t, i) { if (1 === e || 3 === e) { if (S(), i) return void s.go(i, null, { replace: !0 }); "/" === n[0] ? s.go(n, null, { replace: !0 }) : location.href = n } else 2 === e && (S(), u(p, c(f)), d(c(v), t)) } }) }, g)
    }

    function S() { w && (clearInterval(w), w = null), b && (b.abort(), b = null) }
}, function() {
    var e = window,
        t = e.preventEvent,
        n = e.onDOMReady,
        i = e.lsCheck,
        o = e.geByClass1,
        a = e.qs2obj,
        r = e.geByTag1,
        s = e.gpeByTag,
        l = e.addEvent,
        c = e.onBodyResize,
        u = e.removeEvent,
        d = e.hide,
        f = e.each,
        p = e.show,
        _ = e.vkNow,
        m = e.gpeByClass,
        v = e.attr,
        h = e.val,
        g = e.escapeRE,
        w = e.hasClass,
        y = e.lsGet,
        b = e.isEmpty,
        k = e.lsSet,
        C = e.geByClass,
        M = e.setStyle,
        S = window,
        E = S.ajax,
        T = window,
        A = (T.page, window),
        x = A.post,
        I = window,
        P = I.Scroller;
    window.StickersHints = function() {
        var e, S, T, A, I, B, L, N, O = 864e5,
            H = 300,
            D = 30,
            j = 64,
            R = 8,
            q = 4,
            F = !0,
            U = 0,
            z = { D83DDE0A: [0, ":-)"], D83DDE03: [1, ":-D"], D83DDE09: [2, ";-)"], D83DDE06: [3, "xD"], D83DDE1C: [4, ";-P"], D83DDE0B: [5, ":-p"], D83DDE0D: [6, "8-)"], D83DDE0E: [7, "B-)"], D83DDE12: [8, ":-("], D83DDE0F: [9, ";-]"], D83DDE14: [10, "3("], D83DDE22: [11, ":'("], D83DDE2D: [12, ":_("], D83DDE29: [13, ":(("], D83DDE28: [14, ":o"], D83DDE10: [15, ":|"], D83DDE0C: [16, "3-)"], D83DDE20: [17, ">("], D83DDE21: [18, ">(("], D83DDE07: [19, "O:)"], D83DDE30: [20, ";o"], D83DDE33: [21, "8|"], D83DDE32: [22, "8o"], D83DDE37: [23, ":X"], D83DDE1A: [24, ":-*"], D83DDE08: [25, "}:)"], 2764: [26, "<3"], D83DDC4D: [27, ":like:"], D83DDC4E: [28, ":dislike:"], "261D": [29, ":up:"], "270C": [30, ":v:"], D83DDC4C: [31, ":ok:"] };
        n(function() { i() && !o("vk_stickers_hints_support_no") && (x.onStickersInit(function() { $() }), o("stickersHints") && $()) }), E.onRedirect(function(e) { a(e.split("?")[1]).invalidate_stickers_hints && X() }), x.onReplyClick(function(e) {
            var t = window,
                n = t.cur;
            N = e, setTimeout(V, 10), n.destroy.push(function() { N = "" })
        });

        function $() {
            var t = window,
                n = t.cur;
            if (A = r("textarea", s("form", o("cp_sticker_btn"))), A && !A.initialized) {
                var i = function() {
                    var t = A.value.length;
                    e = t - U > 1, U = t, V(), F && (W(), F = !1)
                };
                A.initialized = !0, B = o("stickersHints"), I = o("stickersHints__content"), l(A, "focus", V), l(A, "input", i), l(document, "click", Y), c(J), c(ft), n.destroy.push(function() { B = null, I = null, A = null, u(A, "focus", V), u(A, "input", i), u(document, "click", Y), c("__clear", J), c("__clear", ft), T && T.destroy(), U = 0 })
            }
        }

        function V() {
            if (A) {
                S && clearTimeout(S);
                var e = Z(A.value);
                et(function(t) {
                    var n = e && t[e];
                    n ? S = setTimeout(function() {
                        var t = n.userStickers || [],
                            i = n.promotedStickers || [];
                        if (t.length > 0 || i.length > 0) {
                            var o = [];
                            f(t, function(t, n) { o.push(tt({ stickerId: n, query: e, isPromoted: !1 })) }), f(i, function(t, n) { o.push(tt({ stickerId: n, query: e, isPromoted: !0 })) }), I.innerHTML = o.join(""), p(B), J(), ft(), T = new P(B), T.init()
                        }
                    }, H) : (T && T.destroy(), d(B))
                })
            }
        }

        function W() { lt() && _() - ut() > O * (2 + Math.random()) && X(), nt(function(e) { e *= 1e3, lt() && e > ut() && X() }) }

        function X() { it(function(e) { L = e, dt(e), V() }) }

        function Y(e) {
            var t = e.target;
            t === A || m(t, "stickersHints") || d(B)
        }

        function G(e, n, i, a) {
            window.isNewMail && t(e);
            var r = m("sticker_item", n),
                s = o("th_img", r);
            return v(r, "style", ""), v(n, "style", ""), v(s, "style", ""), d(B), A.value = "", x.sendSticker(n, i, !0, a)
        }

        function K(e, t) { setTimeout(function() { ot(h(r("input", e.parentElement)) ? 1 : 0, t, X) }, 0) }

        function Q(e, t) { setTimeout(function() { at(h(r("input", e.parentElement)) ? 1 : 0, t, X) }, 0) }

        function J() { v(I, "style", "") }

        function Z(t) {
            return t.length > D ? "" : (f(z, function(e, n) {
                var i = new RegExp("(\\s|^)(" + g(n[1]) + (")" == n[1][n[1].length - 1] ? "+" : "") + ")([\\s\\.,]|$)", "g");
                t = t.replace(i, function(t, n, i, o) { return (n || "") + st(e) + (o || "") })
            }), 0 === t.indexOf(N) && (t = t.replace(N, "")), t = t.toLowerCase().replace(/^(\s+)|([\.!\?]+)$/g, "").replace("�", "�"), e && (t = t.replace(/\s+$/, "")), t)
        }

        function et(e) { L ? e(L) : lt() ? (L = ct(), e(L)) : it(function(t) { L = t, dt(t), e(t) }) }

        function tt(e) {
            var t = e.isPromoted,
                n = t ? "" : "onclick=\"return StickersHints.onStickerThumbClick(event, this, {{stickerId}}, '{{stickerReferrer}}');\"",
                i = o("sticker_thumb", o("stickers_list")),
                a = t ? 'href="/attachments?' + ["act=stickers_store", "target=" + v(B, "data-target"), "sticker_id={{stickerId}}", "from=inline", "sticker_referrer={{stickerReferrer}}"].join("&") + '"' : 'href="' + (v(i, "href") || v(i, "data-href")).replace(/media=[\w\d]+/, "media=sticker{{stickerId}}") + '"';
            return ('<div class="sticker_item sticker{{stickerId}} {{promotedClass}}">        <a class="sticker_thumb thumb_item" ' + a + " " + n + '>          <img class="th_img" src="/images/stickers/{{stickerId}}/{{stickerSize}}.png" />        </a>      </div>').replace(/{{stickerId}}/g, e.stickerId).replace("{{promotedClass}}", t ? "sticker_item_promoted" : "").replace("{{stickerReferrer}}", "suggestion_" + e.query).replace("{{stickerSize}}", w("x2", window.bodyNode) ? 256 : 128)
        }

        function nt(e) { E.post("/attachments", { _ajax: 1, act: "stickers_hints_change_date" }, { onDone: e }) }

        function it(e) { E.post("/attachments", { _ajax: 1, act: "stickers_hints_keywords" }, { onDone: function(t) { e(rt(t)) } }) }

        function ot(e, t, n) {
            var i = { _ajax: 1, act: "stickers_hints_enabled", value: e, hash: t };
            E.post("/attachments", i, { onDone: n })
        }

        function at(e, t, n) {
            var i = { _ajax: 1, act: "stickers_auto_animation_enabled", value: e, hash: t };
            E.post("/attachments", i, { onDone: n })
        }

        function rt(e) {
            var t = {};
            return f(e, function(e, n) {
                var i = n.user_stickers,
                    o = n.promoted_stickers;
                f(n.words, function(e, n) { t[n] = { userStickers: i, promotedStickers: o } })
            }), t
        }

        function st(e) { for (var t = Math.round(e.length / 4), n = "", i = 0; t--;) n += String.fromCharCode(parseInt(e.substr(i, 4), 16)), i += 4; return n }

        function lt() { return Boolean(y("stickers_keywords")) }

        function ct() { return y("stickers_keywords").keywords }

        function ut() { return y("stickers_keywords").time }

        function dt(e) {!e || b(e) ? k("stickers_keywords") : k("stickers_keywords", { keywords: e, time: _() }) }

        function ft() {
            var e = o("stickersHints__callout");
            if (e) {
                var t = e.offsetWidth - q,
                    n = t / j,
                    i = n % 1;
                .3 > i ? n = Math.floor(n) - .5 : i > .7 && (n = Math.ceil(n) - .5);
                var a = Math.round(t / n - R);
                f(C("sticker_item", e), function(e, t) {
                    var n = o("sticker_thumb", t),
                        i = o("th_img", t);
                    M(t, "width", a), M(t, "height", a), M(n, "width", a), M(n, "height", a), M(i, "height", a)
                })
            }
        }
        return { actualizeVisibility: V, init: $, onStickerThumbClick: G, onCheckboxLabelClick: K, onCheckboxAutoAnimationLabelClick: Q }
    }()
}, function() {
    var e = window,
        t = e.geByClass1,
        n = e.tag,
        i = e.geByTag1,
        o = e.ce,
        a = e.hasClass,
        r = e.attr,
        s = e.removeEvent,
        l = e.addEvent,
        c = e.qs2obj,
        u = e.each,
        d = e.len,
        f = e.extend,
        p = e.copy,
        _ = e.onDOMReady,
        m = e.scrollTop,
        v = e.getY,
        h = e.scrollToEl,
        g = e.scrollToHash,
        w = e.obj2qs,
        y = e.escapeAttr,
        b = e.remove,
        k = e.val,
        C = e.toggleClass,
        M = e.show,
        S = e.hide,
        E = e.gpeByClass,
        T = e.geByTag,
        A = e.addClass,
        x = e.checkEvent,
        I = e.unescapeAttr,
        P = e.removeClass,
        B = e.ge,
        L = e.cancelEvent,
        N = e.isUndefined,
        O = window,
        H = O.ajax,
        D = window,
        j = D.nav,
        R = window,
        q = R.post,
        F = window,
        U = F.zlayer,
        z = function() {
            var e, O, D, R, F, $, V, W, X, Y, G, K, Q, J, Z, et = 1,
                tt = !1,
                nt = {},
                it = {},
                ot = {},
                at = null,
                rt = null,
                st = !1,
                lt = null,
                ct = null,
                ut = !0,
                dt = !1,
                ft = 0,
                pt = !1;

            function _t() {
                if (e = t("photo_view", "m"), !e) return j.al_go(j.cur), !1;
                if (O = t("pv_summary", e), G = t("photo_msg", e), K = t("pv_tag_wrap", e), F = t("pv_body", e), $ = t("thumb_item", F), R = t("pv_nav", F), X = t("pv_photo_wrap", $), V = "a" == n($) ? $ : !1, W = i("img", $), Y = t("pv_footer", e), (D = t("summary_loading", O)) || (D = o("div", { innerHTML: '<i class="i_loading"></i>', className: "summary_loading" }, { display: "none" }), O.appendChild(D)), tt = a("pv_touch_full", F), R) {
                    var c = t("pv_nav_left", R),
                        u = t("pv_nav_z", R),
                        d = t("pv_nav_right", R);
                    Q = t("pv_nav_link", c), Z = t("pv_nav_link", u), J = t("pv_nav_link", d), r(Q, "onclick", "return photo.prev(event);"), r(J, "onclick", "return photo.next(event);"), r(V, "onclick", tt ? !1 : "return photo.next(event);"), H.prepare_click([Q, J, V])
                }
                return s(window, "orientationchange", kt), l(window, "orientationchange", kt), !0
            }

            function mt() {
                var t = window,
                    n = t.photoview;
                return n ? pt ? !0 : (pt = !0, n.onPhotoChange = function(e, t) { ft = e, Mt(e, t) }, n.onUpdate = function() {}, n.onClose = function(t) {
                    if (!St(t)) return !0;
                    var n = c(j.params);
                    e && n.list == rt && Ct(ft, !0)
                }, !0) : !1
            }

            function vt(e) {
                var t = window,
                    n = t.photoview,
                    i = [];
                return u(e, function(e, t) { return t ? void i.push(nt[t.id] = t) : !0 }), at && n && n.saveSource(yt(at)), i
            }

            function ht(e) { return nt[e] || {} }

            function gt(e, t, n) {
                if (null === t) return void delete it[e];
                it[e] || (it[e] = new Array(n ? n : d(t))), vt(t);
                var i = it[e];
                st && i.reverse(), f(i, t), st ? (at = p(i), i.reverse()) : at = i
            }

            function wt(e) { if ("string" != typeof e) return e; var t = it[e] || []; return st ? p(t).reverse() : t }

            function yt(e) {
                var t = wt(e),
                    n = new Array(t.length),
                    i = c(j.params);
                delete i.z;
                for (var o in t) {
                    var a = at[o],
                        r = "photo" + a.id + "?list=" + rt + (st ? "&rev=1" : "") + (ct ? "&from=" + ct : "");
                    n[o] = { id: a.id, photo_url: "/" + r, like_url: "/like?act=" + (a.likes_me ? "del" : "add") + "&object=photo" + a.id + "&from=" + encodeURIComponent(r) + "&list=" + rt + "&hash=" + a.like_hash, likes_me: a.likes_me, src: a.original_src, tags: a.tags, caption: a.caption, likes_cnt: a.likes_cnt, replies_cnt: a.replies_cnt }
                }
                return n
            }

            function bt(e, t) {
                t || (t = at);
                for (var n in t)
                    if (at[n].id == e) return +n;
                return -1
            }

            function kt() {
                j.hash || _(function() {
                    if (t("photo_view")) {
                        var e = m();
                        F && v(F) < e && h(F)
                    }
                })
            }

            function Ct(t, n, o) {
                var a = window,
                    s = a.cur,
                    l = window,
                    d = l.lang,
                    p = at[t],
                    _ = 1 == at.length;
                if (p) {
                    j.hash ? g(j.hash) : kt();
                    var m = {};
                    lt && (m.list = lt), st && (m.rev = 1), ct && (m.from = ct);
                    var v = w(m),
                        h = "photo" + p.id + v,
                        M = p.photo,
                        S = (Tt(t - 1) || {}).id,
                        E = (Tt(t + 1) || {}).id;
                    if (_ || (V.href = "/photo" + E + v, Q && (Q.href = "/photo" + S + v), J && (J.href = "/photo" + E + v), H.prepare_click([Q, J, V])), tt) {
                        var T = "photo" + p.id + "/" + lt + (st ? "/rev" : ""),
                            A = f({}, m, { z: T }),
                            x = "/photo" + p.id + w(A);
                        if (U._lastNav) {
                            var I = U._lastNav;
                            A = c(I.params), A.z = T, x = I.path + w(A) + I.hash
                        }
                        Z && (Z.href = x), H.prepare_click(Z), r(Z, "onclick", "return photo.fullscreen('" + y(x) + "', event);")
                    }
                    if (W && W.src != M) {
                        W.onload = null, b(W);
                        var P = "";
                        u(p.tags, function(e, t) {
                            if (!e || 0 == e) return !0;
                            var n = t[0][0],
                                i = t[0][1],
                                o = t[0][2],
                                a = t[0][3];
                            P += '<div class="pv_tag" style="left: ' + n + "%; top: " + i + "%; width: " + o + "%; height: " + a + '%;" id="pv_tag' + e + '" onclick="return photo.selectTag(' + e + ', event, true);"><div class="fill"></div></div>'
                        }), k(X, '<img src="' + M + '" alt="" class="ph_img" />' + P), W = i("img", X)
                    }
                    C("photo_deleted", e, !!p.deleted), C("pv_one_photo", F, 1 == at.length), k(O, (d.mobile_photos_photo_header || "").replace("%s", ft + 1).replace(/%s|{count}/, at.length)), k(K, p.tag_info || "");
                    var B = "",
                        L = (s.sticker_panel || "").split("photo-0_0").join("photo" + p.id),
                        N = (p.comments_html || "").split("<!--stickers_panel-->").join(L);
                    if (p.caption && (B += '<div class="mv_description">' + p.caption + "</div>"), p.tags_list && (B += '<dl class="pv_tags_list si_row"><dt>' + d.mobile_photos_on_this_photo + "</dt><dd>" + p.tags_list + "</dd></dl>"), p.was_edited && (B += '<dl class="si_row"><dt>' + d.mobile_photos_photo_was_edited + "</dt></dl>"), p.album_link && (B += '<dl class="si_row"><dt>' + d.mobile_photos_photo_album_label + "</dt><dd>" + p.album_link + "</dd></dl>"), p.author_link && (B += '<dl class="si_row"><dt>' + d.mobile_photos_photo_author_label + "</dt><dd>" + p.author_link + "</dd></dl>"), (p.date || p.likes || p.publish) && (B += '<div class="vi_values">' + (p.date || "") + (p.likes || "") + (p.publish || "") + "</div>"), k(Y, '<div class="like_box bl_cont"><div class="photo_msg bl_none">' + (p.deleted || "") + '</div><div class="mv_details">' + B + '</div><ul class="mv_actions">' + (p.actions || "") + '</ul></div><div class="comments_wrap bl_cont">' + N + "</div>"), q.stickersInit(), s.replyTo = 0, H.refreshLinks(p.fv_link, p.app_link), z.closeTags(), !n) {
                        var D = "/" + h;
                        j.go(D, null, { no_push: n, push_only: !0, replace: o })
                    }
                }
                ut || (At(), xt())
            }

            function Mt(e, t) {
                {
                    var n = window,
                        i = n.photoview,
                        o = at[e];
                    1 == at.length
                }
                if (t = t || {}, o) {
                    var a = c(j.params);
                    if (a.z = "photo" + o.id + "/" + lt + (st ? "/rev" : ""), t.no_open || i.open(e, yt(at), { local: t.local }), !t.local && !t.crop) {
                        var r = j.path + w(a) + j.hash;
                        j.go(r, null, { no_push: t.no_push, push_only: !0, replace: t.replace, nav_init: !t.no_open, nav_incr: !0 })
                    }
                }
                t.local || t.crop || At(!0)
            }

            function St(e) {
                var t = c(j.params);
                if (delete t.z, !e.local && !e.crop) {
                    if (j.tryHistoryBack()) return !1;
                    var n = j.path + w(t) + j.hash;
                    j.go(n, null, { push_only: !0 })
                }
                return !0
            }
            var Et = !1;

            function Tt(e) { return e > 0 ? e %= at.length : e = (100 * at.length + e) % at.length, at[e] }

            function At(e) {
                if (!Et) {
                    for (var t = window, n = t.photoview, i = !1, o = 1, a = 0; 5 > a; a++) {
                        var r = a + ft,
                            s = Tt(r);
                        if (!s || !s.owner_id) { i = r, o = 1; break }
                    }
                    if (i === !1)
                        for (var a = -1; a > -3; a--) {
                            var r = a + ft,
                                s = Tt(r);
                            if (!s || !s.owner_id) { i = r, o = -1; break }
                        }
                    if (i !== !1) {
                        var l = Tt(ft);
                        if (l) {
                            Et = !0, M(D);
                            var c = window,
                                u = c.cur,
                                d = l.owner_id || (l.id || "").split("_")[0],
                                p = r == ft && l.id ? "/photo" + l.id : "/photos.php",
                                _ = { _ajax: 1, oid: d, list: rt, offset: i, direction: o, rev: st ? 1 : 0 };
                            u.stickers || (_.need_stickers = 1), j.getQuery("community") && (_.community = j.getQuery("community")), H.post(p, _, { onDone: function(t, i, o, a) { S(D), Et = !1, o && (u.replyNames || (u.replyNames = {}), f(u.replyNames, o)), a && f(u, a), gt(rt, t, i || at.length), e ? n && n.saveSource(yt(rt), !1, !0) : Ct(ft, !0) } })
                        }
                    }
                }
            }

            function xt() {
                for (var e = 0, t = ft + 1; et > e; e++) {
                    var n = e + t,
                        i = Tt(n),
                        o = i && i.photo;
                    if (o && !ot[o]) {
                        var a = ot[o] = new Image;
                        a.src = o, a.onload = function() { ot[o] = !0 }
                    }
                }
            }

            function It(e, t) {
                if (at = [], e) {
                    var n = E("thumbs_list", e) || E("wiki_body", e);
                    n && u(T("img", n), function() {
                        var e = this,
                            t = r(e, "data-id"),
                            n = r(e, "data-src_big");
                        if (!t || !n) return !0;
                        n = n.split("|");
                        var i = n[0],
                            o = +n[1] || 0,
                            a = +n[2] || 0;
                        at.push({ id: t, original_src: i, width: o, height: a })
                    })
                }
                at.length || at.push({ id: t, original_src: !0 })
            }

            function Pt() { A("pv_icons_hide", F) }
            return {
                save: vt,
                get: ht,
                saveSource: gt,
                getSource: wt,
                clear: function() { s(window, "orientationchange", kt) },
                open: function(e, t, n, i, o) {
                    if (x(n)) return !0;
                    if (!_t()) return !0;
                    if (st = !1, "/rev" == t.substr(-4) && (t = t.slice(0, -4), st = !0), ct = i || null, t) rt = t;
                    else {
                        var a = ht(e);
                        rt = a.album ? "album" + a.album : ""
                    }
                    if (lt = rt, at = wt(rt), ft = bt(e, at), -1 === ft) {
                        var a = ht(e);
                        if (!a.id) return !1;
                        at = [a], ft = 0
                    }
                    ut = at.length < 2, dt = !1;
                    var r = at[ft] && e != at[ft].id;
                    return Ct(ft, o && !r, r), !1
                },
                prev: function(e) { return x(e) ? !0 : Et && !Tt(ft - 1) ? !1 : _t() ? ut ? z.close() : (--ft < 0 && (ft = at.length - 1), Ct(ft), Pt(), !1) : !0 },
                next: function(e) { return x(e) ? !0 : Et && !Tt(ft + 1) ? !1 : _t() ? ut ? !1 : (++ft >= at.length && (ft = 0), Ct(ft), Pt(), !1) : !0 },
                close: function(e) { return x(e) ? !0 : !1 },
                fullscreen: function(e, t) { return a("pv_photo_tags_selected", F) ? !0 : j.go(I(e), t, { need_restore: !0 }) },
                showIcons: function() { var e = t("photo_view", "m"); if (!e) return !1; var n = t("pv_body", e); return n ? void setTimeout(function() { P("pv_hidden_icons", n), setTimeout(function() { A("pv_icons_hide", n) }, 2e3) }, 10) : !1 },
                selectTag: function(e, n, i) {
                    if (i && !a("pv_photo_tags_selected", F)) return !0;
                    var o = B("pv_tag" + e),
                        r = t("pv_tag_selected", "pv_photo_tags_wrap"),
                        s = B("pv_tag_label" + e),
                        l = t("pv_tag_label_selected", "pv_tags_list");
                    return a("pv_tag_selected", o) || (P("pv_tag_selected", r), A("pv_tag_selected", o)), a("pv_tag_label_selected", s) ? j.go(s, n) : (P("pv_tag_label_selected", l), A("pv_tag_label_selected", s), A("pv_photo_tags_selected", F), L(n), !1)
                },
                closeTags: function(e) {
                    if (!a("pv_photo_tags_selected", F)) return !0;
                    var n = t("pv_tag_selected", "pv_photo_tags_wrap"),
                        i = t("pv_tag_label_selected", "pv_tags_list");
                    return n && P("pv_tag_selected", n), i && P("pv_tag_label_selected", i), P("pv_photo_tags_selected", F), L(e), !1
                },
                init: function(e, t, n, i, o, a, r) { et = N(r.preload) ? 1 : r.preload, st = !!o, z.saveSource(e, t, n), _(function() { z.open(i, e + (o ? "/rev" : ""), null, a, !0) }) },
                zopen: function(e, t, n, i, o) {
                    if (x(t)) return !0;
                    o = o || {}, mt(), st = !1, "/rev" == i.substr(-4) && (i = i.slice(0, -4), st = !0);
                    var a = c(j.params);
                    if (delete a.z, ct = o.from || !1, i) rt = i;
                    else {
                        var r = ht(n);
                        rt = r.album ? "album" + r.album : ""
                    }
                    if (lt = rt, at = wt(rt), at.length || It(e, n), ft = bt(n, at), -1 === ft && (It(e, n), ft = bt(n, at)), -1 === ft) {
                        var r = ht(n);
                        if (!r.id) return !0;
                        at = [r], ft = 0
                    }
                    ut = at.length < 2, dt = !1;
                    var s = at[ft] && n != at[ft].id;
                    return Mt(ft, { no_push: o.no_push && !s, replace: s, local: o.local }), L(t), !1
                },
                zclose: function(e) { return x(e) ? !0 : !1 }
            }
        }();
    window.photo = z
}, function() {
    var e = { uiLastId: 0, uiState: {}, mail: {} },
        t = {
            newId: function() { return e.uiLastId++ },
            newState: function(n) { var i = t.newId(); return e.uiState[i] = n, i },
            getState: function(t) { return e.uiState[t] || (e.uiState[t] = {}) },
            injectStore: function(t) {
                e.uiLastId = 0, e.uiState = {}, e.mail = {}; {
                    var n = t.mail,
                        i = n.cur,
                        o = n.rolls,
                        a = n.reached;
                    n.msgs, n.queue
                }
                isArray(t.mail.msgs) && (t.mail.msgs = {}), isArray(o.peer) && (o.peer = {}), isArray(o.search.peers) && (o.search.peers = {}), isArray(o.search.msgs) && (o.search.msgs = {}), isArray(a.search.peers) && (a.search.peers = {}), isArray(a.search.msgs) && (a.search.msgs = {}), isArray(a.peer.before) && (a.peer.before = {}), isArray(a.peer.after) && (a.peer.after = {}), e.uiState = t.uiState, e.uiLastId = t.uiLastId, e.mail = t.mail, i.msgSelected = {}, i.msgRemoved = {}, i.msgAttached = {}, i.localOutMsgIds = [], e.mail.queue = {}, "notificationsCount" in e || (e.notificationsCount = t.notificationsCount)
            },
            injectMail: function(t) {
                var n = e.mail,
                    i = t;
                Object.keys(i.msgs).forEach(function(e) {
                    var t = i.msgs[e],
                        o = n.msgs[e];
                    o && (o.textShort && !t.textShort && (t.textShort = o.textShort), o.textFull && !t.textFull && (t.textFull = o.textFull))
                }), isObject(i.msgs) && Object.assign(n.msgs, i.msgs), isObject(i.peers) && Object.assign(n.peers, i.peers), isObject(i.members) && Object.assign(n.members, i.members)
            }
        };
    window.storeMethods = t, window.store = e
}, function() {
    var e = window,
        t = e.onDOMReady,
        n = e.page,
        i = e.geByClass1,
        o = e.setStyle;
    t(a), n.onChange(a);

    function a() {
        var e = i("basisStory__media");
        if (e) {
            var t = window.innerHeight - 97;
            o(e, "height", t), setTimeout(function() { o(e, "max-height", 800) })
        }
    }
}, function() {
    var e = t(['\n    <div class="', '" ', " ", ">\n      ", "\n      ", '\n      <a class="convo__body" href="', '">\n        <div class="convo__row convo__row_title">\n          <div class="convo__title">', "</div>\n          ", '\n          <div class="convo__date">', '</div>\n        </div>\n        <div class="convo__row convo__row_text">\n          <div class="convo__typing">', '</div>\n          <div class="convo__text">', "</div>\n          ", '\n          <div class="convo__unreadOut"></div>\n        </div>\n      </a>\n    </div>\n  '], ['\n    <div class="', '" ', " ", ">\n      ", "\n      ", '\n      <a class="convo__body" href="', '">\n        <div class="convo__row convo__row_title">\n          <div class="convo__title">', "</div>\n          ", '\n          <div class="convo__date">', '</div>\n        </div>\n        <div class="convo__row convo__row_text">\n          <div class="convo__typing">', '</div>\n          <div class="convo__text">', "</div>\n          ", '\n          <div class="convo__unreadOut"></div>\n        </div>\n      </a>\n    </div>\n  ']);

    function t(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    Object.assign(window, { Convo: n, Convo__online: i });

    function n(t) {
        var n = t.more,
            o = "",
            a = "",
            r = 0,
            s = !1,
            l = "";
        n && (o = n.text, a = n.date, r = n.unreadCount, s = n.muted, l = n.typingNames && n.typingNames.length ? Typing({ typing: n.typingNames }) : "");
        var c = q["class"]("clickable", "convo", { id: t.id, "short": !n, last: t.isLast, typing: !!(n && n.typingNames && n.typingNames.length > 0), important: t.important, unread: t.isLast && r > 0, unreadOut: t.isLast && 0 > r }),
            u = Avatar({ mix: "convo__avatar", photos: t.photos, url: t.profileUrl }),
            d = t.isLast ? Oval({ mix: "convo__unread", value: r, gray: s }) : "",
            f = i(t.online),
            p = Icon({ mix: "convo__star", icon: "star", blue: !0 }),
            _ = t.url,
            m = q.onMouseDown("Convo._onMouseDown", "event", _),
            v = q.onClick("Convo._onClick", "event", _);
        return q.html(e, c, m, v, f, u, t.url, t.title, p, a, l, o, d)
    }

    function i(e) { return "mobile" === e ? Icon({ mix: q["class"]("convo__online", { mobile: !0 }), icon: "phone" }) : Brick("desktop" === e ? { mix: q["class"]("convo__online", { desktop: !0 }) } : { mix: "convo__online" }) }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    t.PeakAlgorithm = function() {
        function e() { n(this, e), this.clear() }
        return e.prototype.push = function(e) { this._max = Math.max(this._max, Math.abs(e)) }, e.prototype.get = function() { return this._max }, e.prototype.clear = function() { this._max = 0 }, e
    }()
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e(e, t) {
            var n = [],
                i = !0,
                o = !1,
                a = void 0;
            try { for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0); } catch (l) { o = !0, a = l } finally { try {!i && s["return"] && s["return"]() } finally { if (o) throw a } }
            return n
        }
        return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
    }();
    t.initPhotoCarousel = a;
    var o = n(198);

    function a(e, t) {
        var n = domQuery1("[data-sizes]", e),
            i = JSON.parse(domData(n, "sizes")),
            o = (domData(n, "media-links") || "").split(",");
        if (!(i.length <= 1 || domData(e, "carousel-inited")))
            if (domData(e, "carousel-inited", 1), t.mobile) r(i, e);
            else {
                var a = s(i, e, t, o);
                data(e, "changePhotoFunction", a)
            }
    }

    function r(e, t) {
        var n = geByClass1("article_photo_carousel__controls", t),
            a = geByClass1("article_photo_carousel__counter", t),
            r = domData(a, "counter-lang") || getLang("global_article_carousel_counter"),
            s = getSize(geByClass1("article_figure_content", t)),
            l = domPN(geByTag1("img", t)),
            c = 0,
            u = void 0,
            d = 0,
            f = void 0,
            p = void 0,
            _ = 0,
            m = !1,
            v = !1,
            h = !1;
        n.addEventListener("touchstart", function(e) { p = e.touches[0].pageX, f = e.touches[0].pageY });
        var g = !1,
            w = void 0;
        n.addEventListener("touchmove", function(n) {
            if (!v && (Math.abs(n.touches[0].pageY - f) > 5 || m)) return void(m = !0);
            if (!h && (d = n.touches[0].pageX - p, !(Math.abs(d) < 10) || g)) {
                v || window.addEventListener("touchmove", w = function(e) { return cancelEvent(e) }, { passive: !1 }), v = !0, g = !0;
                var a = Math.min(e.length - 1, Math.max(0, c + (0 > d ? 1 : -1))),
                    r = 0 === a && 0 === c,
                    y = a === e.length - 1 && c === e.length - 1;
                if (_ !== a)
                    if (_ = a, re(u), r || y) u = !1;
                    else {
                        var b = o.getAppropriateImage(e[a], s[0], !0),
                            k = i(b, 1),
                            C = k[0];
                        u = ce("div", { innerHTML: '<img src="' + C + '">' }), setStyle(domFC(u), { "max-width": s[0], "max-height": s[1], width: "initial" }), setStyle(u, { transform: "scale(1.05)", opacity: 0 }), domInsertBefore(u, domPN(geByTag1("img", t)))
                    }
                var M = Math.abs(d),
                    S = 0;
                S = r || y ? .2 * d : d, setStyle(l, { transform: "translateX(" + S + "px)" }), u && setStyle(u, { transform: "scale(" + Math.max(1, 1.05 - 5e-4 * M) + ")", opacity: Math.min(1, .01 * M) })
            }
        }), n.addEventListener("touchend", function() {
            g = !1, m = !1, h = !0, v = !1, w && window.removeEventListener("touchmove", w);
            var t = 0 > d,
                n = Math.abs(d) < 50 || !u;
            if (!n) {
                c = _;
                for (var f = c; f < Math.min(c + 3, e.length); f++) {
                    var p = o.getAppropriateImage(e[f], s[0], !0),
                        y = i(p, 1),
                        b = y[0];
                    o.preloadImage(b)
                }
            }
            a.innerHTML = r.replace("{counter}", c + 1).replace("{total}", e.length), addClass(l, "with_transition"), addClass(u, "with_transition"), setTimeout(function() { n ? (setStyle(l, { transform: "translateX(0px)", opacity: 1 }), setStyle(u, { transform: "scale(1.05)", opacity: 0 })) : (setStyle(l, { transform: "translateX(" + (t ? "-500px" : "500px") + ")" }), setStyle(u, { transform: "scale(1)", opacity: 1 })) }), setTimeout(function() { h = !1, _ = !1, removeClass(l, "with_transition"), removeClass(u, "with_transition"), n ? re(u) : (re(l), l = u), u = !1 }, 150)
        })
    }

    function s(e, t, n, a) {
        var r = 0,
            s = geByClass1("article_photo_carousel__controls", t),
            l = geByClass1("article_photo_carousel__counter", t),
            c = domData(l, "counter-lang") || getLang("global_article_carousel_counter"),
            u = getSize(geByClass1("article_figure_content", t)),
            d = domPN(geByTag1("img", t)),
            f = geByClass1("article_photo_carousel__left", t),
            p = geByClass1("article_photo_carousel__right", t);

        function _(s) {
            r += s, r = Math.min(e.length - 1, Math.max(0, r));
            var _ = o.getAppropriateImage(e[r], u[0], !0),
                m = i(_, 1),
                v = m[0],
                h = "";
            if (n.moderDeletePhoto) {
                var g = a[r];
                h = '<a href="' + g + '" target="_blank" class="flat_button article_photo_moder_open">�������</a>'
            }
            var w = 0 > s ? "fading_in_left" : "fading_in_right",
                y = se('<div class="' + w + '"><img src="' + v + '">' + h + "</div>");
            setStyle(domFC(y), { "max-width": u[0], "max-height": Math.ceil(u[1]) + 1, width: "initial" }), domInsertAfter(y, domPN(geByTag1("img", t)));
            var b = d;
            setTimeout(function() { removeClass(y, "fading_in_left"), removeClass(y, "fading_in_right"), addClass(b, "fading_out") }), setTimeout(function() { re(b) }, 150);
            for (var k = r; k < Math.min(r + 3, e.length); k++) {
                var C = o.getAppropriateImage(e[k], u[0], !0),
                    M = i(C, 1),
                    S = M[0];
                o.preloadImage(S)
            }
            d = y, l.innerHTML = c.replace("{counter}", r + 1).replace("{total}", e.length), toggle(f, r > 0), toggle(p, r < e.length - 1), domData(t, "photo-carousel-index", r)
        }
        var m = void 0;

        function v(e) { clearTimeout(m), toggleClass(s, "article_photo_carousel__mouse_idle", e) }
        var h = browser.msie && intval(browser.version) <= 11;
        return p.addEventListener("click", function(e) { return _(1), h || t.dispatchEvent(new Event("mousemove")), cancelEvent(e) }), f.addEventListener("click", function(e) { return _(-1), h || t.dispatchEvent(new Event("mousemove")), cancelEvent(e) }), t.addEventListener("mousemove", function() { v(!1), addClass(s, "article_photo_carousel__mouse_over"), clearTimeout(m), m = setTimeout(function() { v(!0) }, 1e3) }), t.addEventListener("mouseleave", function() { clearTimeout(m), removeClass(s, "article_photo_carousel__mouse_over"), removeClass(s, "article_photo_carousel__mouse_idle") }), _
    }
}, function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = t.StickersSettings = { autoplay: 0, setAutoplay: function(e) { this.autoplay = e }, getAutoplay: function() { return n.autoplay } } }, function() {
    Object.assign(Msg, { onClick: befall("msgId"), onRestoreClick: befall("msgId"), destroy: function(e) { return $(".msg_id_" + e).outerHTML = "" }, getElem: function(e) { return $(".msg_id_" + e) }, remove: n, spam: i, restore: a, unselectAll: r, toggleImportant: l, markAsRead: s }),
        function() { Msg._onClick = c, Msg._onTouchStart = u, Msg._onRestoreClick = t }();
    var e = !1;

    function t(e, t) { e.stopPropagation(), t = parseInt(t, 10), Msg.onRestoreClick(t) }

    function n(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        t ? $$(".msg_id_" + e).forEach(function(e) { return e.remove() }) : o(e, !1)
    }

    function i(e) { o(e, !0) }

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
            n = Msg_renderRestoreInner(e);
        $$(".msg_id_" + e).forEach(function(e) { e.$(".msg__restore").innerHTML = n, e.classList.remove("msg_selected"), e.classList.add("msg_removed"), e.classList.toggle("msg_spam", t) })
    }

    function a(e) { $$(".msg_id_" + e).forEach(function(e) { e.classList.remove("msg_removed"), e.classList.remove("msg_spam") }) }

    function r() { $$(".msg_selected").forEach(function(e) { return e.classList.remove("msg_selected") }) }

    function s(e) { $$(".msg_id_" + e).forEach(function(e) { return e.classList.remove("msg_unread") }) }

    function l(e, t) {
        [].concat(e).forEach(function(e) {
            var n = $(".msg_id_" + e);
            n && n.classList.toggle("msg_important", t)
        })
    }

    function c(t, n, i) {
        for (var o = t.target; o !== n;) {
            if ("A" === o.tagName || o.getAttribute("onclick") || o.classList.contains("im_msg_audiomsg") || o.classList.contains("articleSnippet__block")) return;
            o = o.parentElement
        }
        e ? e = !1 : d() || n.classList.contains("msg_removed") || n.classList.contains("msg_spam") || store.mail.cur.editing || (n.classList.toggle("msg_selected"), Msg.onClick(i))
    }

    function u() { d() && (e = !0) }

    function d() { return window.getSelection().toString().length > 0 }
}, function() {
    window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
        var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
            i = this;
        do
            for (t = n.length; --t >= 0 && n.item(t) !== i;); while (0 > t && (i = i.parentElement));
        return i
    })
}, function() {
    var e;

    function t() {
        e = {};
        for (var t = document.cookie.split(";"), n = /^[\s]*([^\s]+?)$/i, i = 0, o = t.length; o > i; i++) {
            var a = t[i].split("=");
            2 == a.length && (e[a[0].match(n)[1]] = unescape(a[1].match(n) ? a[1].match(n)[1] : ""))
        }
    }

    function n(n) { return t(), e[n] }

    function i(e, t, n, i) {
        var o = window.locDomain,
            a = "";
        if (n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), a = "; expires=" + r.toGMTString()
        }
        document.cookie = [e, "=", escape(t), a, "; path=/", o ? "; domain=." + o : "", i && "https:" == window.locProtocol ? "; secure" : ""].join("")
    }

    function o(e) { i(e, null, -1) }
    window.getCookie = n, window.setCookie = i, window.clearCookie = o
}, function() {
    var e = need("wd");
    window.Select = {},
        function() { Select._onChange = n }();
    var t = { optionByValue: function(e) { return '.Select__option[value="' + e + '"]' } };

    function n(n, i) {
        var o = n.value,
            a = n.$(t.optionByValue(o));
        e.handle(i, { $select: n, $option: a, value: o, name: n.name, label: a.textContent })
    }
}, function() {
    Object.assign(window, { uCurConvoTyping: e, uCurConvoTyping_getNames: t });

    function e() { return Typing({ id: "curConvo", gray: !0, typing: t() }) }

    function t() {
        var e = store.mail,
            t = e.cur.peerId;
        if (!t) return [];
        for (var n = e.members, i = e.peers[t].typing, o = i.length, a = [], r = 0; o > r; r++) {
            var s = n[i[r]].name;
            a.push(s)
        }
        return a
    }
}, function() {
    var e = window,
        t = e.hide,
        n = e.ge,
        i = e.ce,
        o = e.geByClass1,
        a = e.val,
        r = e.show,
        s = e.remove,
        l = e.addClass,
        c = e.removeClass,
        u = window,
        d = u.geo,
        f = window,
        p = f.ajax,
        _ = function() {
            var e = null,
                u = !1;

            function f(e) { p.post("/places.php", { _ajax: 1, act: "map_label", lat: e.latitude, lng: e.longitude }, { onDone: function(n) { t("geo_waiting"), m(e, n) }, onFail: g }) }

            function m(e, t) {
                var s = n("medias_map"),
                    l = n("attached_wrap");
                s || (s = i("div", { id: "medias_map", className: "pi_medias" }), l.appendChild(s));
                var c = e.latitude,
                    u = e.longitude,
                    d = (window.devicePixelRatio >= 1.5 ? 2 : 1, o("medias_map", s)),
                    f = t ? '<div class="medias_map_close"><i class="i_close">&nbsp;</i></div><div class="medias_map_label">' + t + "</div>" : "",
                    p = "",
                    _ = c + "_" + u + "_0",
                    m = '<input type="hidden" name="map" value="' + _ + '">';
                if (d) a(d, f + p + m);
                else {
                    var v = '<div class="meias_row medias_map" onclick="geoloc.remove();">' + f + p + m + "</div>";
                    a(s, v)
                }
                r(s)
            }

            function v() { e = null, s("medias_map") }

            function h(t) { t && t.coords && (e = { latitude: +t.coords.latitude || 0, longitude: +t.coords.longitude || 0 }, f(e)) }

            function g() { _.remove(), t("geo_waiting") }
            return {
                toggle: function() { u ? _.remove() : _.add() },
                add: function(t) {
                    (t || !u) && (u = !0, l("cp_geo_btn_sel", "geo_btn"), t && (t.latitude || t.longitude) ? (e = { latitude: +t.latitude || 0, longitude: +t.longitude || 0 }, m(e, t.label)) : (d.getCurrentPosition(h, g), r("geo_waiting")))
                },
                remove: function() { u && (u = !1, c("cp_geo_btn_sel", "geo_btn"), v()) },
                init: function(e) { return e && _.add(e), d.init() }
            }
        }();
    window.geoloc = _
}, function() {
    Array.prototype.forEach || (Array.prototype.forEach = function(e) {
        var t, n;
        if (null == this) throw new TypeError("this is null or not defined");
        var i = Object(this),
            o = i.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (t = arguments[1]), n = 0; o > n;) {
            var a;
            n in i && (a = i[n], e.call(t, a, n, i)), n++
        }
    })
}, function() {
    var e, t = window,
        n = t.qs2obj,
        i = t.preventEvent,
        o = t.im,
        a = t.nav,
        r = t.toggle,
        s = t.attr,
        l = t.ge,
        c = t.val,
        u = t.geByClass1,
        d = t.removeClass,
        f = t.show,
        p = t.hide,
        _ = t.qsearch,
        m = t.browser,
        v = t.toggleClass,
        h = t.intval,
        g = t.mail;

    function w() { return n(a.params) }

    function y(e) { return "dialogs" === e.tab || !e.q }

    function b(e) { var t = a.getQuery("community"); return t ? (e ? "?" : "&") + "community=" + t : "" }
    o.clearSearchInput = function(e) {
        if (i(e), y(w())) {
            var t = l("ma_search_field");
            c(t, ""), o.onFilterKeyDown(t)
        } else a.go("/mail" + b(!0))
    }, o.onFilterKeyDown = function(t) {
        setTimeout(function() {
            var n = window,
                i = n.lang,
                o = encodeURIComponent(t.value),
                _ = w();
            if (r(u("mail_search_clear_button"), o), s(u("tab_dialogs_search"), "href", o ? "/mail?tab=dialogs&q=" + o + b() : "/mail" + b(!0)), s(u("tab_messages_search"), "href", "/mail?q=" + o + b()), y(_)) {
                var m, g = l("mail_tabs"),
                    k = l("ma_search_items"),
                    C = l("dialogs"),
                    M = _.offset;
                if (d("mail_show_filtered", u("mail")), e && clearTimeout(e), v("dialogs_filter_without_important", l("dialogs_filter"), o || 0 === h(c(u("dialogs_filter_button_important")))), o) f(g), f(k), p(C), e = setTimeout(function() { m = "/mail?tab=dialogs&q=" + o + (M ? "&offset=" + M : "") + b(), "/mail" !== a.path || w().act || a.go(m, null, { push_only: !0 }) }, 200);
                else {
                    if (p(g), p(k), f(C), !a.getQuery("community")) {
                        var S = u("mhb_back"),
                            E = u("mh_header");
                        c(E, i.mobile_mail_head_title), d("mhi_back", E), S.outerHTML = S.outerHTML.replace("<a", "<div").replace("</a>", "</div>")
                    }
                    m = "/mail" + (M ? "?offset=" + M : "") + b(M ? !1 : !0), a.go(m, null, { push_only: !0 })
                }
            }
        }, 40)
    };

    function k() {
        var e = window,
            t = e.lang;
        _.init({ init_once: !0, action: "/mail?act=write&fast=1", container: l("ma_search_items"), field: l("ma_search_field"), btn: l("ma_search_btn"), top_items: [], _cache: {}, item_tpl: function(e, t, n, i, o) { return this.id > 2e9 || -1 === this.id ? '<a href="' + (e || "") + '" class="simple_item' + (-1 == this.id ? " simple_item_create" : "") + '">' + (t || "") + '<div class="si_body"><span class="si_owner">' + this.highlight(n || "") + "</span>" + (i || "") + (o ? '<div class="si_slabel">' + o + "</div>" : "") + "</div></a>" : '<a href="' + (e || "") + '" class="inline_item"><div class="ii_body">' + (t || "") + '<span class="ii_owner">' + this.highlight(n || "") + "</span>" + (i || "") + "</div></a>" }, null_tpl: function() { return '<div class="service_msg_box"><div class="service_msg service_msg_null">' + t.mobile_mail_no_peers + "</div></div>" }, need_invalid_keys: m.desktop, onLoaded: function(e) { for (var t in e) g.saveDialog(e[t][e[t].length - 1], t) } })
    }
    g.onShowWritePageFromCache(k), g.onShowDialogsPageFromCache(k)
}, function(e, t, n) {
    n(138), n(69), n(91), n(167), n(34), n(173), n(210), n(221), n(178), n(85), n(162), n(2), n(70), n(109), n(207), n(72), n(3), n(148), n(197), n(99), n(206), n(184), n(40), n(180), n(49), n(107), n(163), n(9), n(13), n(51), n(124), n(211), n(55), n(27), n(0), n(76), n(172), n(78), n(42), n(31), n(208), n(67), n(7), n(166), n(45), n(220), n(218), n(154), n(92), n(118), n(147), n(26), n(62), n(150), n(104), n(204), n(105), n(168), n(155), n(5), n(200), n(30), n(47), n(100), n(183), n(4), n(222), n(193), n(223), n(106), n(79), n(73), n(37), n(86), n(217), n(213), n(126), n(64), n(174), n(59), n(36), n(29), n(114), n(93), n(15), n(164), n(202), n(18), n(143), n(187), n(28), n(17), n(170), n(135), n(142), n(75), n(219), n(102), n(33), n(22), n(89), n(115), n(131), n(53), n(52), n(82), n(94), n(103), n(44), n(101), n(128), n(66), n(38), n(43), n(171), n(146), n(60), n(225), n(129), n(194), n(54), n(156), n(110), n(97), n(151), n(153), n(125), n(96), n(90), n(41), n(192), n(23), n(77), n(119), n(88), n(214), n(121), n(127), n(176), n(1), n(12), n(116), n(81), n(196), n(122), n(87), n(141), n(117), n(149), n(215), n(137);
    var i = window,
        o = i.addClass,
        a = i.addEvent,
        r = i.append,
        s = i.attr,
        l = i.cancelEvent,
        c = i.ce,
        u = i.checkNav,
        d = i.checkTouchHover,
        f = i.clog,
        p = i.ge,
        _ = i.geByClass1,
        m = i.getCh,
        v = i.gpeByClass,
        h = i.hasClass,
        g = i.lsCheck,
        w = i.lsGet,
        y = i.lsSet,
        b = i.onBodyScroll,
        k = i.onDOMReady,
        C = i.remove,
        M = i.scrollTop,
        S = i.sgFix;
    a(window, "scroll touchmove", function() { b(!0) }), a(window, "error", function(e) { f(e.lineno + ": " + e.message) }), window.cur = { destroy: [] }, window.lang = {};
    var E = window,
        T = E.thover,
        A = E.browser,
        x = E.ajax,
        I = E.isTouch;
    a(document, "touchmove touchcancel", T.cancel), a(document, "touchend", T.end);

    function P() {
        if ((A.safari_mobile || A.android || A.opera_mobile && !A.opera_mini) && !h("body_fullscreen", window.bodyNode)) {
            var e = M();
            window.bodyNode.style.overflow = "hidden", window.bodyNode.style.minHeight = "5000px", M(10);
            var t = m() + (A.android ? 1 : 0);
            M(e), window.bodyNode.style.minHeight = t + "px", window.bodyNode.style.overflow = "", window.realClientHeight = t
        }
    }

    function B() {
        if (w("custom_opts")) return o("_copts", "vk_wrap");
        var e = c("div", { innerHTML: '<input id="copts_test_radio" type="radio" checked="checked"><div id="copts_test_label"></div>' });
        r(e, "vk_utils");
        var t = p("copts_test_label");
        t && Math.abs(t.offsetWidth - 5) < 1 && (o("_copts", "vk_wrap"), y("custom_opts", 1)), C(e)
    }
    var L = window,
        N = L.page;
    x._init(), x.enabled = x._req ? !0 : !1, x.enabled && (k(function() { C("app_go_frame"), x.prepare_nav(), x.prepare_click(), D && D.init(), j && j.initAudio(), o("_js", "vk_wrap") }), N.clear()), a(window, "orientationchange", P), a(document, "touchstart", function(e) {
        var t = d(e.target);
        t && T.start.call(t, e)
    }), a(document, "click", function(e) {
        var t = window,
            n = t.al;
        if (window.al && n.ver) {
            var i = v("al_after", e.target);
            if (i) {
                var o = s(i, "data-target"),
                    a = o ? _(o, i) : !1;
                if (a && !H.go_after(a, e) || !H.go_after(i, e)) return
            }
            var r = u(e.target, { allow_post_away: !0 });
            r && (H.go(r, e) || l(e))
        }
    }), a(document, "submit", function(e) {
        var t = e.target;
        h("vk_js_yes", geByTag1("html")) && !h("opera_mini_yes", geByTag1("body")) && h("qsearch", t) && v("audioPage", t) && (geBySel1('[type="submit"]', t).click(), l(e))
    }), a(document, I ? "touchstart" : "mousedown", function(e) { R.closeByTap(e) }), k(P), k(B), S();
    var O = window,
        H = O.nav,
        D = O.menu,
        j = O.audioplayer,
        R = O.tooltip,
        q = O.zlayer;
    k(function() {
        var e = window,
            t = e.vk;
        !t.id && g() && localStorage.clear()
    }), window.fixHeight = P, window.optionsTest = B, q.isReady = !0;
    try { n(120) } catch (F) { console.error("Catched error: ", F) }
    window.isNewMail && (n(157), n(11), n(145), n(161), n(35), n(186), n(68), n(83), n(189), n(199), n(181), n(32), n(130), n(74), n(39), n(133), n(108), n(191), n(224), n(165), n(111), n(177), n(63), n(57), n(195), n(21), n(182), n(139));
    try { n(136) } catch (F) { console.error("Catched error: ", F) }
}, function() {
    var e = window.Bell;
    Object.assign(e, { setCount: i });
    var t = { empty: "Bell_empty" },
        n = { bell: ".Bell", counter: ".Bell__counter" };

    function i(e) {
        $$(n.bell).forEach(function(i) {
            var o = i.$(n.counter);
            i.classList.toggle(t.empty, !e), o.innerText = e
        })
    }
}, function() {
    var e = window,
        t = e.cancelEvent,
        n = e.gpeByClass,
        i = e.geByClass1,
        o = e.getY,
        a = e.getX,
        r = e.getW,
        s = e.addClass,
        l = e.hasClass,
        c = e.append,
        u = e.tooltip,
        d = e.addEvent,
        f = e.removeClass,
        p = e.removeEvent,
        _ = e.before,
        m = e.remove,
        v = e.clone,
        h = e.setStyle,
        g = e.each,
        w = e.getStyle,
        y = function() {
            var e = "ai_menu_opened",
                y = void 0,
                b = void 0,
                k = !1;

            function C(e) { y = n("ai_menu_wrap", e), b = i("ai_menu", y) }

            function M(e) { return e.getBoundingClientRect().top }

            function S(e) { return e.getBoundingClientRect().left }

            function E(e) {
                for (var t = !1; e;) {
                    var n = w(e, "overflow-y");
                    if (("scroll" === n || "auto" === n) && e.offsetHeight < e.scrollHeight) { t = !0; break }
                    e = e.parentElement
                }
                return { cursor: e, isOverflowYContainer: t }
            }

            function T(e) {
                for (var t = !1; e;) {
                    var n = w(e, "overflow-x"),
                        i = l(e, "Slider__scroll");
                    if ("scroll" === n || "auto" === n || i) { t = !0; break }
                    e = e.parentElement
                }
                return { cursor: e, isOverflowXContainer: t }
            }

            function A() {
                if (y && b) {
                    var e = i("i_pointer", y);
                    E(e).isOverflowYContainer ? h(b, "top", M(e)) : h(b, "top", o(e)), T(e).isOverflowXContainer ? h(b, "left", S(e) - r(b)) : h(b, "left", a(e) - r(b))
                }
            }

            function x() {
                if (b) {
                    var e = geByClass("wia_item", b);
                    e && g(e, function(e, t) {
                        var n = v(t);
                        _(n, t), m(t), s("unhover", n), setTimeout(function() { f("unhover", n) }, 100)
                    })
                }
            }

            function I(e) { e && "A" === e.target.tagName && requestAnimationFrame(function() { A() }) }

            function P(t) {
                C(t), s(e, y), c(b, document.body), k = B, u.addHandler(k), u.show(y, b), d(window, "resize", A), d(b, "click", I);
                var n = i("i_pointer", y),
                    o = E(n);
                o.isOverflowYContainer && d(o.cursor, "scroll", A);
                var a = T(n);
                a.isOverflowXContainer && d(a.cursor, "scroll", A), A()
            }

            function B() {
                f(e, y), c(b, y), u.removeHandler(k), u.hide(), p(window, "resize", A), p(b, "click", A);
                var t = i("i_pointer", y),
                    n = E(t);
                n.isOverflowYContainer && p(n.cursor, "scroll", A);
                var o = T(t);
                o.isOverflowXContainer && p(o.cursor, "scroll", A)
            }
            return { toggleMenu: function(n, i) { t(n), l(e, y) ? B() : P(i) }, update: function() { x(), A() } }
        }();
    window.ActionMenu = y
}, function() {
    var e = window,
        t = e.ge,
        n = e.attr,
        i = (e.clog, e.lsCheck),
        o = e.isEmpty,
        a = e.vkNow,
        r = e.lsGet,
        s = e.intval,
        l = e.lsSet,
        c = e.extend,
        u = e.hasClass,
        d = e.gpeByClass,
        f = e.each,
        p = e.geByClass,
        _ = e.addClass,
        m = e.checkPostsSeen,
        v = e.hashCode,
        h = window,
        g = h.ajax,
        w = window,
        y = w.nav,
        b = {
            _seen: {},
            _saved: {},
            _saveTimer: null,
            _sendTimer: null,
            _cleanTimer: null,
            LS_ADS_EVENTS: "ads.events",
            postsGetRaws: function(e) {
                e = t(e);
                var i, o = e.id || "",
                    a = n(e, "data-copy") || "",
                    r = {};
                if ("block_" === o.substr(0, 6)) {
                    r[o] = 1, r.block = o.substr(6);
                    var l = n(e, "data-contain");
                    l && (l = l.split(","), l.forEach(function(e) { e = e.split(":"), r[e[0]] = s(e[1]) || 1 }))
                } else(i = o.match(/^wall(-?\d+_\d+)$/)) && (r[i[1]] = 1, (i = a.match(/^(-?\d+_\d+)$/)) && (r[i[1]] = -1));
                var c = n(e, "data-ad-view");
                return c && (r["ad_" + c] = 1), r.index = indexOf(domPN(e).children, e) - 1, r
            },
            seen: function(e) {
                var t, n, i, o, a, r, s, l, c = window,
                    u = c.vk;
                if (u.id && e.length) {
                    window._postsExtras || (window._postsExtras = {});
                    for (t in e) { s = e[t].index, l = e[t].block; for (n in e[t]) "index" != n && "block" != n && (o = e[t][n], a = b._seen[n], r = b._saved[n], -1 == r || -1 == a || 1 == o && (r || a) || (i = b._seen[n] = o, _postsExtras[n] = { index: s, block: l })) }
                    i && (clearTimeout(b._saveTimer), b._saveTimer = setTimeout(b.save, 2500), clearTimeout(b._sendTimer), b._sendTimer = setTimeout(b.send, 5e3))
                }
            },
            save: function() {
                if (!i() || o(b._seen)) return b._seen;
                var e, t, n, c, u, d = window,
                    f = d.vk,
                    p = Math.floor((f.ts + Math.floor((a() - f.started) / 1e3)) / 3600),
                    _ = r("posts_sent") || {},
                    m = r("posts_seen") || {},
                    v = r("posts_extras") || {};
                window._postsExtras || (window._postsExtras = {});
                for (t in b._seen) u = b._seen[t], _postsExtras[t] && (v[t] = { index: _postsExtras[t].index, block: _postsExtras[t].block }, delete window._postsExtras[t]), n = t.split("_"), "ad" !== n[0] && "block" !== n[0] && (n[0] = s(n[0]), n[1] = s(n[1])), c = (_[n[0]] || {})[n[1]], n[0] != f.id && (!c || -1 == u && c > 0) && (m[n[0]] || (m[n[0]] = {}), (!m[n[0]][n[1]] || -1 == u && m[n[0]][n[1]] > 0) && (e = m[n[0]][n[1]] = p * u)), b._saved[t] = u;
                b._seen = {}, e && (l("posts_seen", m), l("posts_extras", v))
            },
            getSeenData: function() {
                var e, o, a, l = {},
                    c = {},
                    u = [];
                if (i()) l = r("posts_seen"), c = r("posts_extras") || {};
                else {
                    a = b.save();
                    for (e in a) {
                        var d = a[e],
                            f = e.split("_");
                        f[0] = s(f[0]), f[0] && (f[1] = s(f[1])), l[f[0]] || (l[f[0]] = {}), (!l[f[0]][f[1]] || -1 == d && l[f[0]][f[1]] > 0) && (l[f[0]][f[1]] = d)
                    }
                }
                for (e in l) {
                    a = [];
                    for (o in l[e]) {
                        var p = l[e][o] > 0 ? o : -o,
                            _ = c[e + "_" + o],
                            m = _ ? (":" + (_.index || "") + ":" + (_.block || "")).replace(/:+$/, "") : "";
                        "block" !== e || cur._pstatbref || (cur._pstatbref = n(t(e + "_" + o), "data-ref")), a.push(p + m)
                    }
                    a.length && u.push(e + "_" + a.join(","))
                }
                return u.length ? { seen: l, data: u.join(";") } : ""
            },
            onSend: function(e) {
                var t, n;
                if (!i()) return c(b._saved, b._seen);
                var t, n, a = r("posts_seen") || {},
                    s = r("posts_sent") || {};
                for (t in e) {
                    for (n in e[t]) s[t] || (s[t] = {}), -1 != s[t][n] && (s[t][n] = e[t][n]), (a[t] || {})[n] && delete a[t][n];
                    a[t] && o(a[t]) && delete a[t]
                }
                l("posts_seen", a), l("posts_sent", s), clearTimeout(b._cleanTimer), b._cleanTimer = setTimeout(b.clean, 1e4)
            },
            send: function() {
                var e = window,
                    t = e.cur,
                    n = window,
                    i = n.vk,
                    o = b.getSeenData();
                if (o.data) {
                    if (!i.id) return b.clear();
                    var a = "";
                    t && t.module ? a = t.module : y && "/feed" == y.cur && (a = "feed");
                    var r = { _ajax: 1, act: "ping", _pstat: o.data, _pstatref: a };
                    t._pstatbref && (r._pstatbref = t._pstatbref), g.post("/", r, { onDone: function() { b.onSend(o.seen) } }), delete t._pstatbref
                }
            },
            clean: function() {
                var e, t, n, i = window,
                    s = i.vk,
                    c = Math.floor((s.ts + Math.floor((a() - s.started) / 1e3)) / 3600),
                    u = r("posts_sent") || {};
                for (e in u) {
                    for (t in u[e]) n = u[e][t], c - (n > 0 ? n : -n) > 24 && delete u[e][t];
                    o(u[e]) && delete u[e]
                }
                l("posts_sent", u), b.cleanAdsEvents()
            },
            clear: function() { l("posts_seen", {}), l("posts_sent", b._saved = b._seen = {}), l(b.LS_ADS_EVENTS, b._lsAdsEvents = {}) },
            getStatsObj: function(e) { return e = t(e), u("_stats_cont", e) ? e : d("_stats_cont", e) },
            getAdsEvents: function() { var e = b._lsAdsEvents; return e || (e = b._lsAdsEvents = r(b.LS_ADS_EVENTS) || {}), e },
            cleanAdsEvents: function() {
                var e = b.getAdsEvents(),
                    t = (new Date).getTime() / 1e3 | 0,
                    n = 3600,
                    i = !1;
                f(e, function(o, a) { t - a >= n && (delete e[o], i = !0) }), i && l(b.LS_ADS_EVENTS, e)
            },
            checkPixelEvent: function(e, t) {
                var n = e.getAttribute("data-ad-block-uid"),
                    i = -1 !== indexOf(["load", "impression"], t);
                if (!n || !i) return !0;
                try {
                    var o = v("" + t + n),
                        a = b.getAdsEvents();
                    if (a[o]) return !1;
                    var r = (new Date).getTime() / 1e3 | 0;
                    a[o] = r, l(b.LS_ADS_EVENTS, a)
                } catch (s) { try { console.log(s.message) } catch (c) {} }
                return !0
            },
            getPixelElements: function(e, t) { var i = []; return f(p(t, e), function() { n(this, "data-src") && i.push(this) }), i },
            sendPixels: function(e) { f(e, function() { n(this, "src", n(this, "data-src")), n(this, "data-src", !1), _("_cntr", this) }) },
            viewed: function(e) {
                if (e = b.getStatsObj(e)) {
                    var t = b.getPixelElements(e, "_cntr_view");
                    t.length && b.checkPixelEvent(e, "impression") && b.sendPixels(t)
                }
            },
            clicked: function(e) {
                if (e = b.getStatsObj(e)) {
                    n(e, "data-clicked", "1");
                    var t = b.getPixelElements(e, "_cntr_click");
                    t.length && b.sendPixels(t), m()
                }
            }
        };
    b._sendTimer || (b._sendTimer = setTimeout(b.send, 1e4)), window.pStats = b
}, function() {
    Array.prototype.map || (Array.prototype.map = function(e) {
        var t, n, i;
        if (null == this) throw new TypeError("this is null or not defined");
        var o = Object(this),
            a = o.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (t = arguments[1]), n = new Array(a), i = 0; a > i;) {
            var r, s;
            i in o && (r = o[i], s = e.call(t, r, i, o), n[i] = s), i++
        }
        return n
    })
}, function() {
    {
        var e = window,
            t = e.cancelEvent;
        e.geByClass1, e.addClass, e.removeClass
    }
    window.Popup = { open: a, close: r },
        function() { Popup._onOverlayClick = o, Popup._onTouchMove = t }();
    var n = { open: "Popup_open" },
        i = { open: "." + n.open, popup: ".Popup" };

    function o(e) {
        var t = e.closest(i.popup);
        r(t)
    }

    function a(e) { e.classList.add(n.open) }

    function r(e) { e || (e = $(i.open)), e.classList.remove(n.open) }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.audioUnmaskSource = a;
    var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=",
        i = {
            v: function(e) { return e.split("").reverse().join("") },
            r: function(e, t) { e = e.split(""); for (var i, o = n + n, a = e.length; a--;) i = o.indexOf(e[a]), ~i && (e[a] = o.substr(i - t, 1)); return e.join("") },
            s: function(e, t) {
                var n = e.length;
                if (n) {
                    var i = s(e, t),
                        o = 0;
                    for (e = e.split(""); ++o < n;) e[o] = e.splice(i[n - 1 - o], 1, e[o])[0];
                    e = e.join("")
                }
                return e
            },
            i: function(e, t) { return i.s(e, t ^ vk.id) },
            x: function(e, t) { var n = []; return t = t.charCodeAt(0), each(e.split(""), function(e, i) { n.push(String.fromCharCode(i.charCodeAt(0) ^ t)) }), n.join("") }
        };

    function o() { return window.wbopen && ~(window.open + "").indexOf("wbopen") }

    function a(e) {
        if (!o() && ~e.indexOf("audio_api_unavailable")) {
            var t = e.split("?extra=")[1].split("#"),
                n = "" === t[1] ? "" : r(t[1]);
            if (t = r(t[0]), "string" != typeof n || !t) return e;
            n = n ? n.split(String.fromCharCode(9)) : [];
            for (var a, s, l = n.length; l--;) {
                if (s = n[l].split(String.fromCharCode(11)), a = s.splice(0, 1, t)[0], !i[a]) return e;
                t = i[a].apply(null, s)
            }
            if (t && "http" === t.substr(0, 4)) return t
        }
        return e
    }

    function r(e) { if (!e || e.length % 4 == 1) return !1; for (var t, i, o = 0, a = 0, r = ""; i = e.charAt(a++);) i = n.indexOf(i), ~i && (t = o % 4 ? 64 * t + i : i, o++ % 4) && (r += String.fromCharCode(255 & t >> (-2 * o & 6))); return r }

    function s(e, t) {
        var n = e.length,
            i = [];
        if (n) { var o = n; for (t = Math.abs(t); o--;) t = (n * (o + 1) ^ t + o) % n, i[o] = t }
        return i
    }
}, function() {
    var e = window,
        t = e.Groups,
        n = e.Friends,
        i = e.FeedAssistanceStats,
        o = e.hasClass,
        a = (e.each, e.geByClass1),
        r = e.nav,
        s = e.domCA,
        l = e.domPN,
        c = e.page,
        u = e.ge,
        d = e.addEvent,
        f = e.attr,
        p = e.escapeAttr;
    window.FeedAssistanceExploreBait = { onSubscribeLinkClick: S }, i.registerTrackingCls("post_exploreBait"), i.onStartViewElement(P), r.onBeforeGo(x), c.onChange(I);
    var _ = "post__subscribeBtn_unsubscribe",
        m = "post__subscribeBtnIcon_unsubscribe",
        v = "post__subscribeBtnIcon_subscribe",
        h = "post__subscribeBtnIcon",
        g = "mobile_groups_you_are_in_public",
        w = "mobile_groups_public_subscribe",
        y = "feed",
        b = "group",
        k = ".post_exploreBait",
        C = !1,
        M = !1;

    function S(e, t, n, i, r, s) {
        var l = o(e, _),
            c = l ? i : n,
            u = getLang(l ? w : g),
            d = !l,
            y = a(h, e),
            k = A(e);
        return y && (toggleClass(m, y, d), toggleClass(v, y, !d)), f(e, "aria-label", p(u)), toggleClass(_, e, d), r === b ? E(t, c, l, s) : T(t, c, l, k, s), !1
    }

    function E(e, n, o, a) {
        var r = o ? t.leave : t.enter,
            s = o ? i.EVENTS.SUB_EVENT_EXPLORE_BAIT_UNSUBSCRIBE : i.EVENTS.SUB_EVENT_EXPLORE_BAIT_SUBSCRIBE;
        a && L(s), r.call(t, e, n, y)
    }

    function T(e, t, o, a, r) {
        var s = o ? n.decline : n.accept,
            l = o ? i.EVENTS.SUB_EVENT_EXPLORE_BAIT_UNSUBSCRIBE : i.EVENTS.SUB_EVENT_EXPLORE_BAIT_SUBSCRIBE;
        r && L(l), s.call(n, e, t, y, a)
    }

    function A(e) { var t = s(e, k); return intval(domData(t, "block-id")) }

    function x(e) { return C ? void(B(e) && (M = o("item_replies", e), O(e))) : void(M = !1) }

    function I() { C && M && H() }

    function P(e) {
        if (i.getElementType(e) === i.BLOCKS.BLOCK_TYPE_EXPLORE_BAIT) {
            if (e._exploreBaitClickHandlerAdded) return;
            C = !0, d(e, "click", function(t) { q(t, e) }), e._exploreBaitClickHandlerAdded = !0
        }
    }

    function B(e) { return e.tagName && "explore-bait" === domData(e, "post-type") }

    function L(e) { i.dispatchEvent({ type: i.EVENTS.EVENT_EXPLORE_BAIT, data: i.serializeEventData(i.EVENTS.EVENT_EXPLORE_BAIT_SUB, e) }) }

    function N(e) { if ("A" !== e.tagName || !o("item_sel", e)) { if (o("item_like", e)) return L(i.EVENTS.SUB_EVENT_EXPLORE_BAIT_LIKE), !0; var t = (o("i_like", e) || o("v_like", e)) && !o("item_sel", l(e)); return t ? (L(i.EVENTS.SUB_EVENT_EXPLORE_BAIT_LIKE), !0) : void 0 } }

    function O(e) {
        var t = ["pi_text_more", "wi_date", "pi_text", "i_replies", "v_replies", "item_replies"],
            n = !0,
            a = !1,
            r = void 0;
        try { for (var s, l = t[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) { var c = s.value; if (o(c, e)) return L(i.EVENTS.SUB_EVENT_EXPLORE_BAIT_OPENED), !0 } } catch (u) { a = !0, r = u } finally { try {!n && l["return"] && l["return"]() } finally { if (a) throw r } }
    }

    function H() {
        var e = u("nc_submit");
        d(e, "click", function() { L(i.EVENTS.SUB_EVENT_EXPLORE_BAIT_COMMENT) })
    }

    function D(e) {
        var t = domData(e, "post-owner-type");
        if (t) {
            var n = domData(e, "post-owner-type"),
                o = "user" === n ? i.EVENTS.SUB_EVENT_EXPLORE_BAIT_OPEN_USER : i.EVENTS.SUB_EVENT_EXPLORE_BAIT_OPEN_GROUP;
            return L(o), !0
        }
    }

    function j(e) {
        var t = { report: i.EVENTS.SUB_EVENT_EXPLORE_BAIT_REPORT, hide: i.EVENTS.SUB_EVENT_EXPLORE_BAIT_HIDE },
            n = domData(e, "post-action"),
            o = t[n];
        return o ? (L(o), !0) : void 0
    }
    var R = [N, D, j];

    function q(e) {
        var t = e.target,
            n = !0,
            i = !1,
            o = void 0;
        try { for (var a, r = R[Symbol.iterator](); !(n = (a = r.next()).done); n = !0) { var s = a.value; if (s.call(null, t) === !0) return } } catch (l) { i = !0, o = l } finally { try {!n && r["return"] && r["return"]() } finally { if (i) throw o } }
    }
}, function() {
    var e = a(['\n    <div class="', '">\n      ', "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    </div>\n  "], ['\n    <div class="', '">\n      ', "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    </div>\n  "]),
        t = a(['\n    <div class="', '">\n      ', "\n    </div>\n  "], ['\n    <div class="', '">\n      ', "\n    </div>\n  "]),
        n = a(['\n    <div class="mailScrap__empty mailScrap__empty_', '">\n      ', "\n    </div>\n  "], ['\n    <div class="mailScrap__empty mailScrap__empty_', '">\n      ', "\n    </div>\n  "]),
        i = a(["\n    <div ", ">\n      ", "\n    </div>\n  "], ["\n    <div ", ">\n      ", "\n    </div>\n  "]);

    function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function a(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

    function r(t) {
        var n = t.scrap,
            i = "peer" === n,
            o = y(n),
            a = i ? _("before") : "",
            r = _("after"),
            l = _("center"),
            c = s(n),
            u = h(n),
            d = i ? uCurConvoTyping() : "",
            f = i ? w() : "";
        return q.html(e, o, a, c, u, r, d, f, l)
    }

    function s(e) {
        var t = q["class"]("mailScrap__items", o({}, e, !0)),
            n = l(e);
        return Brick({ mix: t, inner: n })
    }

    function l(e) {
        for (var t = store.mail, n = t.cur, i = t.msgs, o = t.scraps[e], a = o.length, r = [], s = !1, l = 0; a > l; l++) {
            if (l > 0 && "peer" === e && !s) {
                var u = i[o[l - 1]],
                    d = i[o[l]];
                if (d.isUnread && !u.isUnread && d.authorId !== n.viewerId) { s = !0, r.push(c(e, o[l], !0)); continue }
            }
            r.push(c(e, o[l]))
        }
        return q.list(r)
    }

    function c(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
            i = store.mail,
            o = i.cur,
            a = "";
        if ("folder" === e)
            if ("important" === o.folder) {
                var r = t;
                a = u(r)
            } else {
                var s = t;
                a = d(s)
            }
        else if ("search" === e)
            if ("peers" === o.tab) {
                var l = t;
                a = f(l)
            } else {
                var c = t;
                a = u(c)
            }
        else if ("peer" === e) {
            var _ = t;
            a = p(_, n)
        }
        return a
    }

    function u(e) { var t = store.mail.msgs[e].peerId; return uConvo(t, e) }

    function d(e) { return uConvo(e, "last") }

    function f(e) { return uConvo(e) }

    function p(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; return uMsg({ msgId: e, withDivider: t }) }

    function _(e) {
        var n = q["class"]("mailScrap__loading", o({}, e, !0)),
            i = Spinner();
        return q.html(t, n, i)
    }

    function m(e) {
        var t = store.mail,
            n = t.cur,
            i = t.scraps,
            o = t.reached,
            a = !1;
        switch (e) {
            case "peer":
                var r = n.peerId,
                    s = t.rolls,
                    l = s.peer[r],
                    c = l ? l.length : 0;
                0 === c && o.peer.after[r] && o.peer.before[r] && (a = !0);
                break;
            case "folder":
                0 === i.folder.length && o.folder[n.folder] && (a = !0);
                break;
            case "search":
                0 === i.search.length && o.search[n.tab][n.query] && (a = !0)
        }
        return a
    }

    function v(e) {
        var t = window.lang,
            n = store.mail,
            i = n.cur,
            o = "";
        switch (e) {
            case "peer":
                o = t.mobile_mail_history_is_empty;
                break;
            case "folder":
                var a = { all: t.mobile_mail_no_messages, important: t.mobile_mail_no_important, unread: t.mobile_mail_no_unreaded, unrespond: t.mobile_mail_sublist_empty };
                o = a[i.folder];
                break;
            case "search":
                "msgs" === i.tab && (o = t.mobile_mail_not_found), "peers" === i.tab && (o = t.mobile_mail_no_peers)
        }
        return o
    }

    function h(e) { var t = v(e); return q.html(n, e, t) }

    function g() { var e = (window.lang, store.mail); return e.cur.notification || "" }

    function w() {
        var e = store.mail,
            t = e.cur.notification || "",
            n = q.onClick("MailScrap.clearSystemMessage2");
        return q.html(i, n, t)
    }

    function y(e) {
        var t, n = store.mail,
            i = n.cur,
            a = n.reached,
            r = !0,
            s = !1,
            l = !1;
        if ("peer" === e) {
            var c = i.peerId,
                u = n.scraps.peer,
                d = u.length,
                f = n.rolls.peer[c] || [];
            r = a.peer.before[c] && u[0] === f[0], s = last(u) === last(f) && a.peer.after[c], 0 === d && (s = !0), l = c && !!n.peers[c].systemMessageCode
        } else if ("folder" === e) s = a.folder[i.folder];
        else if ("search" === e) {
            {
                var p = i.tab;
                i.query
            }
            if ("peers" === p) {
                var _ = n.scraps.search.length;
                s = a.search[i.tab][i.query] || _ > 0
            } else s = a.search[i.tab][i.query]
        }
        return q["class"]("mailScrap", (t = {}, o(t, e, !0), o(t, "empty", m(e)), o(t, "systemMessage", l), o(t, "reachedBefore", r), o(t, "reachedAfter", s), o(t, "tab", "search" === e ? i.tab : !1), t))
    }
    window.MailScrap = r, window.MailScrap_class = y, window.MailScrap_ItemsInner = l, window.MailScrap_EmptyInner = v, window.MailScrap_SystemMessageInner = g, window.MailScrap_Item = c
}, function() {! function(e) { e.console || (e.console = {}); for (var t, n, i = e.console, o = function() {}, a = ["memory"], r = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); t = a.pop();) i[t] || (i[t] = {}); for (; n = r.pop();) i[n] || (i[n] = o) }("undefined" == typeof window ? void 0 : window) }, function(e) {
    var t;
    t = function() { return this }();
    try { t = t || Function("return this")() || (1, eval)("this") } catch (n) { "object" == typeof window && (t = window) }
    e.exports = t
}, function() {
    need("isObject");
    window.bem = { "class": e, setMod: t };

    function e(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = [e];
        return Object.keys(t).forEach(function(o) {
            if (n(o)) {
                var a = t[o];
                a === !0 ? i.push(e + "_" + o) : n(a) && i.push(e + "_" + o + "_" + a)
            }
        }), i.join(" ")
    }

    function t(e, t, i) {
        var o = new RegExp("\\s*" + t + "(_[-a-zA-Z]+)?"),
            a = void 0;
        a = i === !0 ? " " + t : n(i) ? " " + t + "_" + i : "", o.test(e.className) ? e.className = e.className.replace(o, a) : e.className += a
    }

    function n(e) { return "number" == typeof e || "string" == typeof e && e }
}, function() {
    window.MailFilter = e;

    function e(e) {
        var t = window.lang,
            n = e.query;
        return wd.html({ "class": [bem["class"]("mailFilter", { hasQuery: !!n }), e.mix], inner: [wd.html(Icon({ icon: "search" })), { "class": "mailFilter__input", tag: "input", placeholder: t.mobile_search, value: n, oninput: ["MailFilter._onInput", "this"] }, { "class": "mailFilter__right", inner: [wd.html(Icon({ mix: "mailFilter__create", icon: "plus", url: e.createUrl })), wd.html(Icon({ mix: "mailFilter__clear", icon: "close12", attrs: q.onMouseDown("MailFilter._onClearMouseDown", "this") }))] }] })
    }
}, function() {
    Object.assign(Messenger, { scrollMainBodyToTop: e, onMainScroll: befall("scrollElem"), onQueryChange: MailFilter.onChange, onQueryClear: MailFilter.onClear, onSearchMsgsClick: befall(), setQuery: MailFilter.setQuery, getMainBody: function() { return i("main") }, setMainLoading: function(e) { return n("main", e) }, onConvoAtTop: befall(), onConvoAtBottom: befall(), onConvoScroll: befall("scrollElem"), setConvoLoading: function(e) { return n("convo", e) }, getConvoBody: function() { return i("convo") }, scrollConvoToBottom: o, redrawConvoLayer: t }),
        function() { Messenger._onMainScroll = s, Messenger._onConvoScroll = l, Messenger._onSearchMsgsClick = Messenger.onSearchMsgsClick }();

    function e() {
        var e = $(".messenger__layer_main .messenger__body");
        e.scrollTop = 0
    }

    function t() {
        var e = Messenger_renderConvoLayer();
        $$(".messenger__layer_convo").forEach(function(t) { t.innerHTML = e })
    }

    function n(e, t) { $$(".messenger__layer_" + e).forEach(function(e) { e.classList.toggle("messenger__layer_loading", t) }) }

    function i(e) { return $(".messenger__layer_" + e + " .messenger__body") }

    function o() {
        var e = Messenger.getConvoBody();
        e && (e.scrollTop = e.scrollHeight)
    }
    Object.assign(uMessenger, { scrollToMsg: r });
    var a = void 0;
    uVK.onReady(function() { return a = window.innerHeight });

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !0,
            i = Msg.getElem(e);
        if (i) {
            {
                var o = Messenger.getConvoBody();
                $(".mailScrap__loading_before")
            }
            if (t) o.scrollTop = i.offsetTop - .18 * o.offsetHeight;
            else {
                var a = $(".typing_id_curConvo").offsetHeight;
                o.scrollTop = i.offsetTop - .5 * (o.offsetHeight + 2) + (i.offsetHeight + a) / 2, i.offsetHeight > o.offsetHeight && (o.scrollTop = i.offsetTop)
            }
            n && (addClass("msg_highlight", i), setTimeout(function() { removeClass("msg_highlight", i) }, 1500))
        }
    }

    function s(e) { Messenger.onMainScroll(e) }

    function l(e) { Messenger.onConvoScroll(e), e._isScrolling = !0, c(e) && Messenger.onConvoAtTop(), u(e) && Messenger.onConvoAtBottom(), e._scrollingTimer && clearTimeout(e._scrollingTimer), e._scrollingTimer = setTimeout(function() { e._isScrolling = !1 }, 100) }

    function c() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return window._preventedCheckTop ? !1 : e && f(e) }

    function u() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return e && d(e) }

    function d(e) { return e.scrollHeight && e.scrollHeight - e.scrollTop - e.offsetHeight <= 1.5 * window.innerHeight }

    function f(e) { return e.scrollHeight && e.scrollTop <= 2.5 * window.innerHeight }

    function p(e) { return e.scrollHeight - e.scrollTop - e.offsetHeight }

    function _(e, t) { e.scrollTop = e.scrollHeight - e.offsetHeight - t }

    function m() {
        var e = Messenger.getConvoBody();
        e && (e.prevHeight && e.prevHeight !== e.offsetHeight && _(e, e.scrollBottom), e.prevHeight = e.offsetHeight, e.scrollBottom = p(e), v && requestAnimationFrame(m))
    }
    var v = !1;
    uMessenger.startPolling = function() { v = !0, m() }, uMessenger.stopPolling = function() { v = !1 };
    if (Object.assign(uMessenger, { redraw: y, redrawView: b, redrawMailActions: k, redrawPinnedMsg: C, setPinnedVisibility: M, expandPeerBefore: w }), browser.ios) {
        var h = null;
        Messenger.onConvoScroll(function(e) { e.isScrolling = !0, h && clearTimeout(h), h = setTimeout(function() { return e.isScrolling = !1 }, 50) })
    }
    var g = null;

    function w() {
        if ($(".load_before_closed")) {
            var e = Messenger.getConvoBody();
            if (browser.ios) {
                var t = function() {
                    var t = e.scrollHeight - e.scrollTop - e.offsetHeight;
                    setStyle(e, "overflow", "hidden"), $$(".load_before_closed").forEach(function(e) { return e.classList.remove("load_before_closed") }), e.scrollTop = e.scrollHeight - t - e.offsetHeight, setStyle(e, "overflow", "auto")
                };
                e.isScrolling ? (g && clearInterval(g), g = setInterval(function() { e.isScrolling || (clearInterval(g), t()) }, 10)) : t()
            } else if (e.scrollTop <= 184) {
                var n = e.scrollHeight - e.scrollTop - e.offsetHeight;
                $$(".load_before_closed").forEach(function(e) { return e.classList.remove("load_before_closed") }), e.scrollTop = e.scrollHeight - n - e.offsetHeight
            }
        }
    }

    function y() { $$(".uMessenger").forEach(function(e) { return e.outerHTML = uMessenger() }) }

    function b() {
        $$(".uMessenger").forEach(function(e) { return e.className = uMessenger_class() });
        var e = store.mail,
            t = e.cur,
            n = e.peers;
        t.peerId && (C(), MailActs.togglePin(n[t.peerId].canPin))
    }

    function k() {
        var e = uMessenger_hasSelectedMsgs();
        $$(".messenger__layer_convo").forEach(function(t) {
            t.classList.toggle("messenger_actionsOpen", e), MailActs.update();
            var n = t.$(".messenger__write").offsetHeight,
                i = t.$(".messenger__acts").offsetHeight,
                o = i - n,
                a = t.$(".messenger__body");
            requestAnimationFrame(function() {!a._fixed && o && (a.style.paddingBottom = o + "px", a._fixed = !0), 0 >= o && (a.style.paddingBottom = 0, a._fixed = !1) })
        })
    }

    function C() {
        var e = store.mail,
            t = e.peers,
            n = e.cur,
            i = uMessenger_getPinnedMsg(),
            o = t[n.peerId].hasPinnedMsg;
        $(".messenger__pinned").innerHTML = i, MailHat_convo.setHasPinnedMsg(o)
    }

    function M(e) {
        var t = store.mail,
            n = t.peers,
            i = t.cur,
            o = n[i.peerId].hasPinnedMsg;
        $$(".messenger").forEach(function(t) { t.classList.toggle("messenger_pinnedVisible", o && e), t.classList.toggle("messenger_pinnedHidden", o && !e) })
    }
}, function() {
    function e(e, t, n, i) { n || (n = function() {}), t._ajax = 1; var o = nav.getQuery("community"); return o && !t.community && (t.community = o), ajax.post(e, t, { onDone: n, onFail: i }) }
    window.ajaxRequest = e
}, function() { window.$ = document.querySelector.bind(document), window.$$ = document.querySelectorAll.bind(document), HTMLElement.prototype.$ = HTMLElement.prototype.querySelector, HTMLElement.prototype.$$ = HTMLElement.prototype.querySelectorAll }, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            if (!e.setImmediate) {
                var i, o = 1,
                    a = {},
                    r = !1,
                    s = e.document;

                function l(e) { "function" != typeof e && (e = new Function("" + e)); for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1]; var r = { callback: e, args: t }; return a[o] = r, i(o), o++ }

                function c(e) { delete a[e] }

                function u(e) {
                    var t = e.callback,
                        i = e.args;
                    switch (i.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(i[0]);
                            break;
                        case 2:
                            t(i[0], i[1]);
                            break;
                        case 3:
                            t(i[0], i[1], i[2]);
                            break;
                        default:
                            t.apply(n, i)
                    }
                }

                function d(e) {
                    if (r) setTimeout(d, 0, e);
                    else { var t = a[e]; if (t) { r = !0; try { u(t) } finally { c(e), r = !1 } } }
                }

                function f() { i = function(e) { t.nextTick(function() { d(e) }) } }

                function p() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() { t = !1 }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }

                function _() {
                    var t = "setImmediate$" + Math.random() + "$",
                        n = function(n) { n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && d(+n.data.slice(t.length)) };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), i = function(n) { e.postMessage(t + n, "*") }
                }

                function m() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        var t = e.data;
                        d(t)
                    }, i = function(t) { e.port2.postMessage(t) }
                }

                function v() {
                    var e = s.documentElement;
                    i = function(t) {
                        var n = s.createElement("script");
                        n.onreadystatechange = function() { d(t), n.onreadystatechange = null, e.removeChild(n), n = null }, e.appendChild(n)
                    }
                }

                function h() { i = function(e) { setTimeout(d, 0, e) } }
                var g = Object.getPrototypeOf && Object.getPrototypeOf(e);
                g = g && g.setTimeout ? g : e, "[object process]" === {}.toString.call(e.process) ? f() : p() ? _() : e.MessageChannel ? m() : s && "onreadystatechange" in s.createElement("script") ? v() : h(), g.setImmediate = l, g.clearImmediate = c
            }
        }("undefined" == typeof self ? "undefined" == typeof e ? this : e : self)
    }).call(this, n(179), n(98))
}, function() {
    Object.assign(MailHat_main, { onUnreadClick: befall(), onBurgerClick: befall(), onCancelForwardTap: befall(), setFolder: e, setUnreadCount: t, setImportantCount: n, setForwarding: i, setModifiers: s }), Object.assign(MailHat_convo, { onBackTap: befall(), onCancelEditingTap: befall(), setOnline: o, setMobile: a, setHasPinnedMsg: r, setModifiers: s });

    function e(e) { $$(".mailHat__folder").forEach(function(t) { Unfold.setActive(t, e) }) }

    function t(e) {
        $$(".mailHat_type_main").forEach(function(t) {
            var n = t.$(".mailHat__unread"),
                i = t.$(".mailHat__unreadCount");
            n.classList.toggle("mailHat__unread_hasUnread", e > 0), i.outerHTML = MailHat__unreadCount(e)
        })
    }

    function n(e) { $$(".mailHat__folder").forEach(function(t) { Unfold.setCount(t, "important", e) }) }

    function i(e) { $$(".mailHat_type_main").forEach(function(t) { return t.classList.toggle("mailHat_forwarding", e) }) }

    function o(e, t) {
        var n = MailHat_getOnlineText(e, t);
        $$(".mailHat__convoDetailsText").forEach(function(e) { return e.innerText = n })
    }

    function a(e) { $$(".mailHat__convo").forEach(function(t) { return t.classList.toggle("mailHat__convo_mobile", e) }) }

    function r(e) { $$(".mailHat_type_convo").forEach(function(t) { return t.classList.toggle("mailHat_hasPinnedMsg", e) }) }

    function s(e) {
        $$(".mailHat").forEach(function(t) {
            var n = q.parseClass("mailHat", t.getAttribute("class"));
            t.setAttribute("class", q["class"]("mailHat", Object.assign({}, n, e)))
        })
    }
}, function() {
    var e = need("$"),
        t = need("wd");
    window.SearchPanel = { setQuery: o },
        function() { SearchPanel._onInput = a, SearchPanel._onClearClick = r }();
    var n = { hasQuery: "SearchPanel_hasQuery" },
        i = { searchPanel: ".SearchPanel", input: ".SearchPanel__input", inputById: function(e) { return '.SearchPanel[data-id="' + e + '"] .SearchPanel__input' } };

    function o(t, n) {
        var o = e(i.inputById(t));
        n = n || "", o.value !== n && (o.value = n, s(o, n))
    }

    function a(e, n) {
        var i = e.value;
        s(e, i), t.handle(n, { query: i })
    }

    function r(e) {
        var t = e.closest(i.searchPanel),
            n = t.$(i.input);
        n.value = "", n.oninput()
    }

    function s(e, t) {
        var o = e.closest(i.searchPanel);
        o.classList.toggle(n.hasQuery, !!t)
    }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(40),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    var r = window,
        s = r.addEvent,
        l = r.removeEvent,
        c = { onIframeReady: o["default"]("{ is_api, check_transfer_url, on_success_url }"), onPostMessage: o["default"](), onAcceptCookieClick: o["default"]() };
    c.onIframeReady(function() { s(window, "message", u), window.cur.destroy.push(function() { l(window, "message", u) }) });

    function u(e) {
        var t = e.origin,
            n = void 0;
        if (t.match(/^https?:\/\/([a-zA-Z0-9\-\.]+\.)?money\.mail\.ru$/)) { try { n = JSON.parse(e.data) } catch (i) { n = {} } "billing" === n.type && c.onPostMessage(n.action, n.action_params) }
    }
    window.BasisMoneyTransfer = c, t["default"] = c
}, function() {
    var e = t(['\n    <div class="', '">\n      <div class="mailDialog__overlay" ', '></div>\n      <div class="mailDialog__wrap">\n        <div class="mailDialog__content">\n          <div class="mailDialog__close" ', '></div>\n          <div class="mailDialog__text"></div>\n          <footer class="mailDialog__footer">\n            <div class="mailDialog__checkbox">\n              <label class="mailDialog__checkboxIn">\n                <input type="checkbox" class="mailDialog__checkboxInput">\n                <span class="mailDialog__checkboxLabel">', '</span>\n              </label>\n            </div>\n            <div class="mailDialog__button" ', ">", '</div>\n            <div class="mailDialog__button mailDialog__button_secondary" ', ">", "</div>\n          </footer>\n        </div>\n      </div>\n    </div>\n  "], ['\n    <div class="', '">\n      <div class="mailDialog__overlay" ', '></div>\n      <div class="mailDialog__wrap">\n        <div class="mailDialog__content">\n          <div class="mailDialog__close" ', '></div>\n          <div class="mailDialog__text"></div>\n          <footer class="mailDialog__footer">\n            <div class="mailDialog__checkbox">\n              <label class="mailDialog__checkboxIn">\n                <input type="checkbox" class="mailDialog__checkboxInput">\n                <span class="mailDialog__checkboxLabel">', '</span>\n              </label>\n            </div>\n            <div class="mailDialog__button" ', ">", '</div>\n            <div class="mailDialog__button mailDialog__button_secondary" ', ">", "</div>\n          </footer>\n        </div>\n      </div>\n    </div>\n  "]);

    function t(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    window.MailDialog = n;

    function n(t) {
        t || (t = {});
        var n = window.lang,
            i = q.onClick("MailDialog._onDialogClose"),
            o = q.onClick("MailDialog._onConfirmDelete"),
            a = n.mobile_mail_delete_for_all,
            r = n.mobile_mail_delete_popup_delete,
            s = n.mobile_mail_delete_popup_cancel,
            l = q["class"]("mailDialog", {});
        return q.html(e, l, i, i, a, o, r, i, s)
    }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(40),
        o = a(i);

    function a(e) { return e && e.__esModule ? e : { "default": e } }
    var r = { _onMouseDown: o["default"](), _onCancelClick: o["default"]() };
    window.MoneyTransferButton = r, t["default"] = r
}, function() {
    window.uMailHat = e;

    function e() { var e = store.mail.cur.peerId; return e ? n(e) : t() }

    function t() {
        var e = store.mail.cur,
            t = Math.abs(e.groupId),
            n = t ? "&community=" + t : "",
            i = t ? "?community=" + t : "";
        return MailHat_main({ folder: e.folder, urls: { all: "/mail" + i, unrespond: "/mail?act=unrespond" + n, unread: "/mail?act=unread" + n, important: "/mail?act=important" + n }, unreadCount: e.countUnread, importantCount: e.countImportant, withUnrespond: !!t, forwarding: !!e.forwardFromId, notifier: uBell() })
    }

    function n(e) {
        var t = store.mail,
            n = t.peers[e],
            o = e > 2e9,
            a = { title: n.title, photos: n.avatarImages, actions: i(e), editing: t.cur.editing };
        if (o) {
            var r = o ? e - 2e9 : null;
            if (a.url = "/mail?act=info&chat=" + r, a.membersCount = n.countMembers, a.hasPinnedMsg = n.hasPinnedMsg, a.isVkcomgroup = n.isVkcomgroup, a.isVkcomgroup) {
                var s = -n.ownerId;
                a.url = "/club" + s
            }
        } else a.url = n.profileUrl, a.isOnline = n.isOnline, a.onlinePlatform = n.onlinePlatform, a.offlineText = n.offlineText;
        return MailHat_convo(a)
    }

    function i(e) {
        var t = store.mail,
            n = t.peers[e].actionUrls,
            i = t.peers[e].isVkcomgroup,
            a = [];
        return a = e > -2e9 && 0 > e ? [o("showMedias", n.showMedia), o("deleteHistory", n.flushHistory), o("blockCommunity", n.blockCommunity), o("unblockCommunity", n.unblockCommunity)] : e > 2e9 ? [o("chatAdd", n.addToChat), o("inviteLink", n.inviteLink, "", i), o("showMedias", n.showMedia), n.unpinMsg ? o("chatUnpinMsg", n.unpinMsg) : "", n.unpinMsg ? o("chatShowPinnedMsg", null, 'onmousedown="uMessenger.onShowPinnedMsgClick()"') : "", n.unpinMsg ? o("chatHidePinnedMsg", null, 'onmousedown="uMessenger.onHidePinnedMsgClick()"') : "", o("chatSettings", n.chatSettings, "", i), o("chatDeleteHistory", n.flushHistory), o("chatReturn", n.returnToChat, "", i), o("chatLeave", n.leaveChat, "", i)] : t.cur.groupId ? [o("showMedias", n.showMedia), o("markAsAnswered", n.communityMarkAsAnswered), n.isDialogImportant ? o("removeImportantMark", n.communityToggleImportant) : o("markAsImportant", n.communityToggleImportant), n.isBlacklisted ? o("unbanUser", n.userBan) : o("banUser", n.userBan), o("deleteHistory", n.flushHistory)] : [o("showMedias", n.showMedia), o("deleteHistory", n.flushHistory)]
    }

    function o(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !1,
            o = window.lang;
        if (!t && !n) return null;
        var a = { showMedias: [o.mobile_mail_show_medias, "attach"], deleteHistory: [o.mobile_mail_delete_history, "delete"], blockCommunity: [o.mobile_mail_block_community, "block"], unblockCommunity: [o.mobile_mail_unblock_community, "allow"], chatAdd: [o.mobile_mail_add_to_chat, "plus"], chatUnpinMsg: [o.mobile_mail_unpin_msg, "unpin", "unpin"], chatShowPinnedMsg: [o.mobile_mail_pin_show, "show", "showPinned"], chatHidePinnedMsg: [o.mobile_mail_pin_hide, "hide", "hidePinned"], chatSettings: [o.mobile_mail_chat_settings, "settings"], chatDeleteHistory: [o.mobile_mail_delete_chat_history, "delete"], chatReturn: [i ? o.mobile_mail_return_to_channel : o.mobile_mail_chat_return, "revert", "returnToChat"], chatLeave: [i ? o.mobile_mail_channel_leave : o.mobile_mail_chat_leave, "close16", "leaveChat"], markAsAnswered: [o.mobile_mail_mark_as_answered, "answered"], removeImportantMark: [o.mobile_mail_remove_important_mark, "important"], markAsImportant: [o.mobile_mail_mark_as_important, "important"], unbanUser: [o.mobile_settings_blacklist_unban_user, "allow"], banUser: [o.mobile_settings_blacklist_ban_user, "block"], inviteLink: [i ? o.mobile_mail_vkcomgroup_invite_link : o.mobile_mail_invite_link, "invite"] },
            r = { text: a[e][0], icon: a[e][1], attrs: n, url: t };
        return a[e][2] && (r.name = a[e][2]), r
    }
}, function() {
    window.SettingsSms = {},
        function() { SettingsSms._onEnabledChange = e("enabled"), SettingsSms._onTimeLimitedChange = e("timeLimited"), SettingsSms._onFrequencyChange = t }();

    function e(e) {
        return function(t) {
            var o = t.$control,
                a = o.closest(n.sms);
            a.classList.toggle(i[e])
        }
    }

    function t(e, t) {
        var o = t.$select,
            a = t.value,
            r = o.closest(n.sms);
        r.classList.toggle(i.pmUsersVisible, e.includes(a) || e.includes(Number(a)))
    }
    var n = { sms: ".settingsSms" },
        i = { enabled: "settingsSms_enabled", timeLimited: "settingsSms_timeLimited", pmUsersVisible: "settingsSms_pmUsersVisible" }
}, function() {
    Object.assign(window, { domInsert: e });

    function e(e, n, i) {
        var o = "string" == typeof n ? t(n) : n;
        i >= 0 && e.children[i] ? e.insertBefore(o, e.children[i]) : e.appendChild(o)
    }

    function t(e) { var t = document.createElement("div"); return t.innerHTML = e, t.children[0] }
}, function() {
    var e = window,
        t = e.geByClass1,
        n = {
            show: function(e, t) { window.grecaptcha ? grecaptcha.reset() : (window.recaptchaCallback = function() { n.onCallback(e) }, document.body.appendChild(ce("script", { type: "text/javascript", src: "https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit&hl=" + t }))) },
            onResponse: function(e) { ge("field_recaptcha").value = e, ge("recaptcha_form").submit() },
            onCallback: function(e) {
                if (grecaptcha && e) {
                    var i = t("recaptcha_box"),
                        o = t("recaptcha", i);
                    o && (val(o, ""), grecaptcha.render(o, { sitekey: e, callback: n.onResponse }))
                }
            }
        };
    window.ReCaptcha = n
}, function(e, t, n) {
    var i = n(205);
    Object.assign(uMailWrite, { onToBottomClick: befall(), onAttachedMsgsRemove: befall(), onAfterSend: befall(), onSubmit: befall(), onMsgSend: befall(), showToBottom: h, hideToBottom: g, preventShowToBottom: m, openStickersPanel: x, uiClearAttachments: L, uiRedrawAttachments: N, updateAttachmentsVisibility: y, redrawToBottom: w, drawStickers: E, setModifiers: O, hideStickersPanel: A, setText: rt }),
        function() {
            uVK.onReady(y), uVK.onReady(b), uMailWrite._onAttachmentsRedraw = y, uMailWrite._onBlur = X, uMailWrite._onKeyUp = D, uMailWrite._onKeyDown = U, uMailWrite._onFocus = W, uMailWrite._onInput = j, uMailWrite._onSubmit = H, uMailWrite._onClick = V, uMailWrite._onAttachClick = I, uMailWrite._onStickersClick = T, mediaUpload.onRemove(k), mediaUpload.onComplete(S), mediaUpload.onStart(C), mediaUpload.onError(M), post.onStickersTabSelected(P), post.onStickerClick(B), uMailWrite._onRedraw = p, Unfold.onOpen("uMailWrite_attachments")(_), uMailWrite.onToBottomClick(function() {
                var e = $(".uMailWrite__toBottom_visible");
                e && e.classList.remove("uMailWrite__toBottom_visible"), MailScrap.removeDivider()
            })
        }();
    var o = "uMailWrite__popupAttach_open",
        a = "uMailWrite__popupStickers_open",
        r = !1,
        s = !1,
        l = null,
        c = null,
        u = null,
        d = [],
        f = debounce(Y, 100);

    function p() { v(), b() }

    function _() {
        function e(e, t) { return e = e.replace(/&edit_msg_id=\d+/, "").replace(/=mailedit(-?\d+)/, "=mail$1"), store.mail.cur.editing && (e = e.replace(/=mail(-?\d+)/, "=mailedit$1"), e += t ? "&edit_msg_id=" + store.mail.cur.editing : ""), e }
        $$("a.Unfold__item").forEach(function(t) {
            var n = t.getAttribute("href"),
                i = e(n, !0);
            t.setAttribute("href", i)
        }), $$("input.inline_upload").forEach(function(t) { t.setAttribute("data-upload-url", e(t.getAttribute("data-upload-url"))) })
    }

    function m() { r = !0, setTimeout(function() { r = !1 }, 300) }

    function v() {
        var e = $(".uMailWrite__textareaGhost");
        $$(".uMailWrite__textarea").forEach(function(t) { return setStyle(t, "height", e.offsetHeight) }), $$(".uMailWrite__main").forEach(function(t) { return setStyle(t, "height", e.offsetHeight) }), Y($(".uMailWrite__textarea"))
    }

    function h() { r || (l && (clearTimeout(l), l = null), addClass("uMailWrite__toBottom_visible", $(".uMailWrite__toBottom"))) }

    function g() { clearTimeout(c), l = setTimeout(function() { removeClass("uMailWrite__toBottom_visible", $(".uMailWrite__toBottom")) }, 100) }

    function w() { $$(".uMailWrite__toBottom").forEach(function(e) { return e.innerHTML = uMailWrite_ToBottomInner() }) }

    function y() {
        if ("/mail" === location.pathname || 0 === location.pathname.indexOf("/write")) {
            var e = store.mail.cur;
            if (e && e.peerId) {
                var t = geBySel(".uMailWrite__attachments .medias_thumb").length,
                    n = geBySel(".uMailWrite__attachments .medias_row").length,
                    i = (e.msgAttached[e.peerId] || []).length ? 1 : 0;
                $$(".uMailWrite__attachments").forEach(function(e) { toggleClass("uMailWrite__attachments_hasAttachments", e, t + n + i > 0) }), ot()
            }
        }
    }

    function b() {
        var e = store.mail.cur;
        e && e.peerId && (d = R(e.peerId), Mention.init({
            defaultItems: d,
            items: d,
            appendTo: geByClass1("uMailWrite__main"),
            url: null,
            params: {},
            afterInsert: function(e) {
                var t = $(".uMailWrite__textareaGhost"),
                    n = e.value;
                t.innerText = n, v()
            }
        }))
    }

    function k() {
        if (store.mail.cur) {
            var e = store.mail,
                t = e.cur,
                n = e.peers,
                i = t.peerId;
            i && (n[i].attachmentsHTML = geBySel1(".uMailWrite__attachments_" + i + " .cp_attached_wrap").outerHTML, N(i), Y($(".uMailWrite__textarea")))
        }
    }

    function C() { store.mail.cur && Y($(".uMailWrite__textarea")) }

    function M() {
        var e = store.mail,
            t = e.cur,
            n = (e.peers, t.peerId);
        n && (L(), N(n), Messenger.scrollConvoToBottom())
    }

    function S() {
        var e = store.mail,
            t = e.cur,
            n = e.peers;
        if (t) {
            var i = t.peerId;
            i && (n[i].attachmentsHTML = geBySel1(".uMailWrite__attachments_" + i + " .cp_attached_wrap").outerHTML, Y($(".uMailWrite__textarea")))
        }
    }

    function E() {
        var e = store.mail.cur,
            t = $(".uMailWrite__popupStickers");
        0 === t.innerHTML.trim().length && (t.innerHTML = e.stickersPanelHTML.replace(/mail0/g, "mail" + e.peerId), post.stickersSelectTab(null, -1))
    }

    function T(e) {
        var t = $(".uMailWrite__popupStickers");
        preventEvent(e), E(), $(".uMailWrite__textarea").blur(), hasClass(a, t) ? A() : x()
    }

    function A() {
        var e = $(".uMailWrite__popupStickers");
        removeClass(a, e), G(!1);
        var t = ge("stickers_panel");
        t && "block" === t.style.display && (t.style.display = "none")
    }

    function x() {
        var e = $(".uMailWrite__popupStickers");
        addClass(a, e), post.stickersInit(), G(!0)
    }

    function I(e) {
        var t = $(".uMailWrite__popupAttach"),
            n = $(".uMailWrite__popupStickers");
        preventEvent(e), stopEvent(e), hasClass(a, n) && removeClass(a, n), hasClass(o, t) ? removeClass(o, t) : (addClass(o, t), addEvent(window, "click", i));

        function i() { removeClass(o, t), removeEvent(window, "click", i) }
    }

    function P() { store.mail.cur && (cur.scroller && cur.scroller.destroy(), geByClass1("sp_body").scrollTop = 0, removeClass("scroller_wrap", geByClass1("sp_cont")), geByClass("sp_page").forEach(function(e) { return removeClass("scroller_page", e) })) }

    function B(e) {
        if (store.mail.cur) {
            var t = store.mail,
                n = t.cur,
                o = t.peers,
                r = (geByClass1("uMailWrite"), $(".uMailWrite__popupStickers")),
                s = i.random();
            n.localOutMsgIds.push(s), K({ act: "send", to: n.peerId, from: "dialog", hash: o[n.peerId].hashSend, message: "", media: "sticker" + e, _af: n._af, random_id: s }), Y($(".uMailWrite__textarea")), removeClass(a, r);
            var l = ge("stickers_panel");
            return l && "block" === l.style.display && (l.style.display = "none"), G(!1), !0
        }
    }

    function L() {
        var e = geByClass1("uMailWrite__attachments");
        e && (e.innerHTML = Brick({ mix: "cp_attached_wrap", attrs: 'id="attached_wrap"' }), e.classList.remove("uMailWrite__attachments_hasAttachments"))
    }

    function N(e) { $$(".uMailWrite__attachments_" + e).forEach(function(t) { t.outerHTML = uMailWrite_Attachments(e) }), $(".uMailWrite__textarea") && Y($(".uMailWrite__textarea")) }

    function O(e) {
        $$(".uMailWrite").forEach(function(t) {
            var n = q.parseClass("uMailWrite", t.getAttribute("class"));
            t.setAttribute("class", q["class"]("uMailWrite", Object.assign({}, n, e)))
        })
    }

    function H(e) {
        preventEvent(e);
        var t = $(".uMailWrite__textarea");
        if (!mediaUpload.checkUploading()) return !1;
        var n = store.mail,
            o = n.cur,
            a = n.peers,
            r = i.random(),
            l = store.mail.cur.editing,
            c = l && store.mail.msgs[l],
            u = c ? { act: "edit_message", id: l, peerId: c.peerId, hash: a[o.peerId].hashSend } : { act: "send", to: o.peerId, from: "dialog", hash: a[o.peerId].hashSend, _af: o._af, random_id: r, entrypoint: store.mail.cur.mvk_entrypoint || "" },
            d = !0;
        if (each(geByClass1("uMailWrite"), function(e, t) { return !t.name || t.disabled ? !0 : ("radio" !== t.type || t.checked) && ("checkbox" !== t.type || t.checked) ? "button" === t.type ? !0 : "submit" === t.type ? !0 : "image" === t.type ? !0 : (u[t.name] = t.value, void("message" !== t.name && (d = !1))) : !0 }), (u.message || "").trim().length && (d = !1), d) return c && MailDialog.openDialog({ isEditing: !0 }), !1;
        l ? (uMailHat.onCancelEditing(!0), ajaxRequest("/mail", u)) : (o.localOutMsgIds.push(r), K(u), store.mail.cur.mvk_entrypoint = ""), t.value = "", o.texts[o.peerId] = "", o.textsHTML[o.peerId] = "", $$(".uMailWrite__textareaGhost").forEach(function(e) { return e.innerHTML = "" });
        var f = $(".uMailWrite__textareaGhost");
        $$(".uMailWrite__textarea").forEach(function(e) { return setStyle(e, "height", f.offsetHeight) }), $$(".uMailWrite__main").forEach(function(e) { return setStyle(e, "height", f.offsetHeight) }), uMailWrite.onAfterSend(), MailScrap.onSystemMessageClick(), y(), Y(t), StickersHints.actualizeVisibility();
        var p = browser.ios ? setTimeout : requestAnimationFrame;
        s && !c && (t.focus(), p(function() { return t.focus() }))
    }

    function D() {
        var e = D,
            t = e.typingData || (e.typingData = {});
        if (0 !== $(".uMailWrite__textarea").value.length && !store.mail.cur.editing) {
            var n = Date.now(),
                i = store.mail,
                o = i.cur,
                a = i.peers,
                r = o.peerId; - 2e9 >= r || t[r] && n - t[r] < 7e3 || (t[r] = n, ajaxRequest("/mail", { _ajax: 1, act: "typing", peer: r, hash: a[r].hashTyping, community: nav.getQuery("community") }))
        }
    }

    function j(e, t) {
        var n = $(".uMailWrite__textareaGhost"),
            i = t.value;
        n.innerText = i, "\n" === last(i) && (n.innerHTML += "&nbsp;");
        var o = store.mail.cur;
        o.texts[o.peerId] = i, o.textsHTML[o.peerId] = i.replace(/\n/g, "<br/>"), $$(".uMailWrite__textarea").forEach(function(e) { return setStyle(e, "height", n.offsetHeight) }), $$(".uMailWrite__main").forEach(function(e) { return setStyle(e, "height", n.offsetHeight) }), f(t), F(e, t, function() { Mention.onKeyUp(e, t) })
    }

    function R(e) {
        var t = store.mail,
            n = t.peers,
            i = t.members,
            o = n[e],
            a = o.memberIds || [],
            r = [];
        return a.forEach(function(e) {
            var t = i[e];
            if (t) {
                var n = [t.id, t.name, t.url.replace("/", "@"), t.avatar, t.url.replace("/", ""), null, null, null, t.firstName];
                r.push(n)
            }
        }), r
    }

    function F(e, t, n) {
        if (d.length) {
            var i = !hasClass("Mention_inited", geByClass1("uMailWrite__main"));
            i && b(), n(e, t)
        }
    }

    function U(e, t) { F(e, t, function() { Mention.onKeyDown(e, t) }), (10 == e.keyCode || 13 == e.keyCode && (e.ctrlKey || e.metaKey)) && H() }

    function z(e, t) {
        var n = document.body.scrollTop;
        n !== e ? requestAnimationFrame(function() { z(n, t) }) : t()
    }

    function V(e, t) { F(e, t, function() { Mention.onClick(e, t) }) }

    function W(e, t) {
        requestAnimationFrame(function() { E(), A(), StickersHints.init(), F(e, t, function() { Mention.onFocus(e, t) }) }), clearTimeout(u), s = !0;
        var n = document.body;
        if (browser.safari && n.offsetHeight > n.offsetWidth) {
            var i = q["class"]("uMailWrite__textarea", { focus: !0 });
            $$(".uMailWrite__textarea").forEach(function(e) { return e.className = i });
            var o = navigator.userAgent.indexOf("iPhone OS 11_") > 0;
            if (!o) {
                var a = browser.ios < 10 ? 400 : 200;
                setTimeout(function() {
                    z(0, function() {
                        var e = 10;
                        n.scrollTop -= e, i = "uMailWrite__textarea", $$(".uMailWrite__textarea").forEach(function(e) { return e.className = i })
                    })
                }, a)
            }
        }
    }

    function X() {
        if (u = setTimeout(function() { s = !1 }, 1e3), browser.safari) {
            var e = q["class"]("uMailWrite__textarea", { blur: !0 });
            $$(".uMailWrite__textarea").forEach(function(t) { return t.className = e });
            var t = browser.ios < 10 ? 400 : 200;
            setTimeout(function() { z(0, function() { e = "uMailWrite__textarea", $$(".uMailWrite__textarea").forEach(function(t) { return t.className = e }) }) }, t)
        }
    }

    function Y(e) {
        var t = store.mail,
            n = t.cur,
            i = t.peers,
            o = t.queue;
        if (n.peerId) {
            var a = i[n.peerId].attachmentsHTML,
                r = (e.value, n.msgAttached[n.peerId]),
                s = r && r.length,
                l = st(),
                c = q["class"]("uMailWrite__button", { send: !0, send_active: !!(!l || a.length > 150 || s), loading: !!(o[n.peerId] || []).length, uploading: !mediaUpload.checkUploading(), edit_accept: !(!n.editing || l), edit_remove: !(!n.editing || !l) });
            $$(".uMailWrite__button_send").forEach(function(e) { return e.className = c })
        }
    }

    function G(e) {
        var t = q["class"]("uMailWrite__button", { stickers: !0, stickers_active: e });
        $$(".uMailWrite__button_stickers").forEach(function(e) { return e.className = t })
    }

    function K(e) {
        var t = store.mail.cur.peerId;
        if (t) {
            store.mail.queue[t] || (store.mail.queue[t] = []);
            var n = store.mail.queue[t];
            n.push(e), Q(t)
        }
    }

    function Q(e) {
        var t = store.mail.queue[e];
        1 === t.length && Z(e)
    }

    function J(e, t) {
        var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, "/mail?act=send&to=" + e.to + "&from=" + e.from + "&hash=" + e.hash + "&_af=" + e._af);
        Object.keys(e).forEach(function(t) {
            ("act" === t || "to" === t || "from" === t || "hash" === t || "_af" == t) && delete e[t]
        }), ajaxRequest(n, e, function(e) { uMailWrite.onMsgSend(e), et(t) }, function(t) {
            if (2 === t) {
                delete e._ajax, delete e.random_id;
                var i = document.createElement("div"),
                    o = Object.keys(e);
                i.innerHTML = '\n        <form action="' + n + '" method="POST">\n          ' + o.map(function(t) { return '<input name="' + t + '" value="' + e[t] + '" />' }).join("") + "\n        </form>\n      ";
                var a = i.$("form");
                document.body.appendChild(a), a.submit()
            }
        })
    }

    function Z(e) {
        var t = store.mail.queue[e];
        if (t.length) {
            var n = t[0];
            J(n, e)
        } else nt()
    }

    function et(e) {
        {
            var t = store.mail.queue[e];
            t.shift()
        }
        MailScrap.clearSystemMessage2(), remove(geByClass1("message__newMsgsDivider")), remove(geByClass1("Unfold__item_returnToChat")), t.length ? Z(e) : tt(e)
    }

    function tt() { nt() }

    function nt() { Y($(".uMailWrite__textarea")) }

    function it() { var e = $(".uMailWrite__attachments"); return e ? e.$$(".thumb_item").length + e.$$(".medias_row").length - e.$$(".fwd_item").length : 0 }

    function ot() {
        var e = $(".uMailWrite__button_attach");
        if (e) {
            var t = it() >= 10;
            e.classList.add("uMailWrite__button_disabled", t), t ? e.addEventListener("mousedown", at, !0) : e.removeEventListener("mousedown", at, !0)
        }
    }

    function at(e) { e.stopPropagation(), alert(lang.mobile_mail_attachments_limit) }

    function rt(e) {
        var t = document.createElement("textarea");
        t.innerHTML = e;
        var n = t.value,
            i = $$(".uMailWrite__textarea");
        i.forEach(function(e) { return e.value = n }), j({}, i[0]), v()
    }

    function st() { var e = !0; return each(geByClass1("uMailWrite"), function(t, n) { return !n.name || n.disabled ? !0 : ("radio" !== n.type || n.checked) && ("checkbox" !== n.type || n.checked) ? "button" === n.type ? !0 : "submit" === n.type ? !0 : "image" === n.type ? !0 : void("message" !== n.name ? e = !1 : (n.value || "").trim().length && (e = !1)) : !0 }), e }
}, function() {
    var e = 10;
    window.CreatePost = {
        setMaxAttach: function(t) { e = t },
        checkAttaches: function() { CreatePost.toggleEnableAttaches(mediaUpload.getAttachesCount() < e) },
        toggleEnableAttaches: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0;
            geByClass("cp_attach_btn", "feed_add_form").forEach(function(t) { t.classList.toggle("cp_disabled_btn", !e) }), ["photo", "video", "audio", "doc", "poll"].forEach(function(t) { Unfold.toggleItemEnabled(Unfold.getByName("attaches"), t, e) })
        }
    }
}, function() { window.requestAnimationFrame || (window.requestAnimationFrame = function(e) { setTimeout(e) }) }, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getAppropriateImage = o, t.preloadImage = r, t.mailruStatsPixel = s;
    t.ParagraphType = { Text: 1, Header1: 2, Header2: 3, Header3: 4, Code: 5, NumericList: 6, BulletList: 7, Quote: 8, Quote2: 9, ObjectAudioPlaylist: 100, ObjectPhoto: 101, ObjectVideo: 102, ObjectGIF: 103, ObjectAudio: 105 };

    function n() { return window.devicePixelRatio >= 2 }

    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments[1];
        for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && t.call(e[n], n, e[n]) === !1) break;
        return e
    }

    function o(e, t, o) {
        var a = [];
        if (i(e, function(e, t) { o && -1 == ["w", "z", "y", "x", "m", "s"].indexOf(e) || a.push(t) }), !a.length) return [!1];
        a.sort(function(e, t) { return e[1] - t[1] }), t *= n() ? 2 : 1;
        var r = a[a.length - 1];
        return i(a, function(e, n) { return n[1] >= t ? (r = n, !1) : void 0 }), r
    }
    var a = {};

    function r(e, t) {
        if (a[e] === !0) return t && t(), !0;
        if (isArray(a[e])) return a[e].push(t), !1;
        a[e] = [t];
        var n = new Image;
        return n.onload = function() {
            var t = a[e];
            a[e] = !0, i(t, function(e, t) { t && t() })
        }, n.src = e, !1
    }

    function s(e, t) {
        if (isObject(t) && !isEmpty(t)) {
            var n = "https://vk-callback.go.mail.ru/longread_pxl?action=" + e;
            i(t, function(e, t) { n += "&" + e + "=" + t });
            var o = new Image;
            o.src = n
        }
    }
}, function() {
    Object.assign(MailDialog, { onConfirmDelete: befall(), closeDialog: e, openDialog: t, isDeleteMessagesForAll: i }),
        function() { MailDialog._onDialogClose = e, MailDialog._onConfirmDelete = MailDialog.onConfirmDelete }();

    function e() { lsSet("delete_message_for_all_checked", !!$(".mailDialog__checkboxInput").checked), $$(".mailDialog").forEach(function(e) { e.classList.remove("mailDialog_deleteConfirmation", "mailDialog_deleteConfirmationNoAll") }) }

    function t(e) {
        var t = e.canDeleteForAll,
            i = e.isEditing;
        i || n(t), $$(".mailDialog").forEach(function(e) {
            e.classList.add("mailDialog_deleteConfirmation"), $$(".mailDialog__text").forEach(i ? function(e) { e.innerHTML = lang.mobile_mail_dialog_msg_delete_for_all } : function(e) {
                var t = Object.keys(store.mail.cur.msgSelected).length;
                e.innerHTML = langNumeric(t, lang.mobile_mail_dialog_msg_delete_N)
            }), (i || !t) && e.classList.add("mailDialog_deleteConfirmationNoAll")
        })
    }

    function n(e) {
        var t = lsGet("delete_message_for_all_checked");
        if (null === t) {
            var n = $(".mailDialog__checkboxInput").checked;
            lsSet("delete_message_for_all_checked", n), t = n
        }
        e || (t = !1), $$(".mailDialog__checkboxInput").forEach(function(e) { e.checked = t })
    }

    function i() { return $(".mailDialog__checkboxInput").checked }
}, function() {
    Object.assign(q, { html: e });

    function e(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
        var o = "";
        return e.forEach(function(e, t) {
            var i = n[t];
            o += e + (i || 0 === i ? i : "")
        }), o
    }
}, , function() {
    var e = need("wd");
    window.Control = { setChecked: i, isChecked: o },
        function() { Control._onChange = n }();
    var t = { control: ".Control", "native": ".Control__native" };

    function n(n, i) { e.handle(i, { $control: n.closest(t.control), name: n.name, checked: n.checked, value: n.value }) }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !0;
        a(e).checked = t
    }

    function o(e) { return a(e).checked }

    function a(e) { return e.$(t["native"]) }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
        }();

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var a = t.PlayerFlash = function() {
        function e(t) { o(this, e), this.opts = t || {}, window._flashVoiceInstance = this }
        return e.prototype.fadeVolume = function(e, t) { return this.setVolume(e), t() }, e.prototype.destroy = function() { re(e.PLAYER_EL_ID) }, e.prototype.onReady = function(t) {
            if (this._player) return t(!0);
            if (this._player === !1) return t(!1);
            this._onReady = t;
            var n = { url: "/swf/audio_lite.swf", id: "flash_voice_player", height: 2 },
                i = { swliveconnect: "true", allowscriptaccess: "always", wmode: "opaque" },
                o = { onPlayFinish: "VoicePlayerFlash.onAudioFinishCallback", onLoadProgress: "VoicePlayerFlash.onAudioLoadProgressCallback", onPlayProgress: "VoicePlayerFlash.onAudioProgressCallback" };
            ge(e.PLAYER_EL_ID) || document.body.appendChild(ce("div", { id: e.PLAYER_EL_ID, className: "fixed" }));
            var a = this;
            renderFlash(e.PLAYER_EL_ID, n, i, o) && setTimeout(function() { a._checkFlashLoaded() }, 50)
        }, e.prototype.setUrl = function(e, t) { return this._trackOptions = {}, t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && (this._trackOptions = t, t = t.callback), this._url == e ? void(t && t(!0)) : (this._url = e, this._player && this._player.loadAudio(e), void(t && t(!0))) }, e.prototype.setVolume = function(e) { this._player && this._player.setVolume && this._player.setVolume(e) }, e.prototype.play = function() { this._player && this._player.playAudio() }, e.prototype.seek = function(e) {
            var t = (this._total || 0) * e;
            this._player && this._player.playAudio(t)
        }, e.prototype.pause = function() { this._player && this._player.pauseAudio() }, e.prototype.isFullyLoaded = function() { return !1 }, e.prototype.getPlayedTime = function() { return 0 }, e.prototype.getCurrentProgress = function() { return this._currProgress || 0 }, e.prototype.getCurrentBuffered = function() { return this._currBuffered || 0 }, e.prototype.stop = function() { this._player && this._player.stopAudio() }, e.prototype._checkFlashLoaded = function() {
            var e = ge("flash_voice_player");
            if (this._checks = this._checks || 0, this._checks++, this._checks > 10) { this._player = !1; var t = this._onReady; return t && t(!1) }
            if (e && e.paused) {
                this._player = e;
                var t = this._onReady;
                t && t(!0), this._onReady = null
            } else {
                var n = this;
                setTimeout(function() { n._checkFlashLoaded() }, 100)
            }
        }, e.onAudioFinishCallback = function() {
            var e = window._flashVoiceInstance;
            e.opts.onEnd && e.opts.onEnd()
        }, e.onAudioProgressCallback = function(e, t) {
            var n = window._flashVoiceInstance;
            t && (n._total = t, n._currProgress = e / t, n.opts.onProgressUpdate && n.opts.onProgressUpdate(n._currProgress))
        }, e.onAudioLoadProgressCallback = function(e, t) {
            var n = window._flashVoiceInstance;
            n._currBuffered = e / t, n.opts.onBufferUpdate && n.opts.onBufferUpdate(n._currBuffered)
        }, i(e, [{ key: "type", get: function() { return "flash" } }, { key: "loaded", get: function() { return !!this._player } }]), e
    }();
    window.VoicePlayerFlash = a, a.PLAYER_EL_ID = "flash_voice"
}, function() {
    var e = window,
        t = e.gpeByClass,
        n = e.hasClass,
        i = e.addClass,
        o = e.removeClass,
        a = e.geByClass1,
        r = e.setStyle,
        s = e.tooltip,
        l = e.ajax;
    window.Fave = {
        showActionsTT: function(e, o) {
            cancelEvent(o);
            var l = t("FaveArticles__row", e);
            if (n(l, "wi_actions_opened")) Fave.hideActionsTT();
            else {
                var c = a("wi_actions_wrap", l),
                    u = a("FaveArticles__row_actions", l);
                r(c, "top", e.offsetTop + e.offsetHeight + "px"), i(l, "wi_actions_opened"), s.addHandler(Fave.hideActionsTT), s.show(c, u)
            }
        },
        hideActionsTT: function() { o("wi_actions_opened", a("wi_actions_opened")), s.hide() },
        removeArticle: function(e, n, a) {
            Fave.hideActionsTT();
            var r = t("FaveArticles__row", e);
            i(r, "removed"), l.post("fave.php", { act: "defave_article", link: n, hash: a }, { onFail: function() { return o(r, "removed") } })
        },
        restoreArticle: function(e, n, a) {
            var r = t("FaveArticles__row", e);
            o(r, "removed"), l.post("fave.php", { act: "enfave_article", link: n, hash: a }, { onFail: function() { return i(r, "removed") } })
        }
    }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.random = i;
    var n = (t.MAX_SAFE_INTEGER = 9007199254740991, t.MAX_INTERGER = 2147483647);

    function i() { try { if (window.crypto) { var e = new Int32Array(1); return crypto.getRandomValues(e), Math.abs(e.reduce(function(e, t) { return e + t })) } } catch (t) {} return intval(rand(0, n).toFixed(0)) }
}, function(module, exports, __webpack_require__) {
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.urlBase64ToUint8Array = urlBase64ToUint8Array;
    var _select = __webpack_require__(144),
        _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e } }

    function need(e) { var t = safeGet(window, e); if ("undefined" == typeof t) throw "Unable to get `window." + e + "`"; return t }

    function setDocumentDomain() {
        var e = (document.domain || "").match(/(m\.)?([a-zA-Z]+\.[a-zA-Z]+\.?)$/);
        window.locDomain = "https:" == location.protocol ? e[2] : e[0];
        var t = navigator.userAgent.toLowerCase();
        (/opera/i.test(t) || !/msie 6/i.test(t) || document.domain != window.locDomain) && (document.domain = window.locDomain)
    }

    function rand(e, t) { return Math.random() * (t - e + 1) + e }

    function isUndefined(e) { return "undefined" == typeof e }

    function isFunction(e) { return "[object Function]" === Object.prototype.toString.call(e) }

    function isString(e) { return "string" == typeof e }

    function isArray(e) { return "[object Array]" === Object.prototype.toString.call(e) }

    function isObject(e) { return "[object Object]" === Object.prototype.toString.call(e) }

    function isEmpty(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        for (var t in e)
            if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function escapeRE(e) { return e ? e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1") : "" }

    function htsc(e) { return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;").replace(/%/g, "&#37;") }

    function escapeAttr(e) { return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;") }

    function unescapeAttr(e) { return e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'") }

    function replaceEntities(e) { return ce("textarea", { innerHTML: (e || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }).value }

    function escapeStr(e) { return e.replace(/\'/g, "\\'") }

    function stripTags(e) { return e.replace(/<[^>]+>/g, "") }

    function srand() { return Math.random().toString(36).substr(2) }

    function utf2win(e) { return unescape(encodeURIComponent(e)) }

    function isHttpHref(e) {
        var t = (e + "").split(":"),
            n = t[1] && t[0] ? t[0] + ":" : location.protocol;
        return "http:" == n || "https:" == n
    }

    function vkNow() { return +new Date }

    function bind() {
        var e = Array.prototype.slice.call(arguments),
            t = e.shift(),
            n = e.shift();
        return function() { var i = Array.prototype.slice.call(arguments); return t.apply(n, e.concat(i)) }
    }

    function intval(e) { return e === !0 ? 1 : parseInt(e) || 0 }

    function floatval(e) { return e === !0 ? 1 : parseFloat(e) || 0 }

    function qs2obj(e) {
        if (!e) return {};
        for (var t = {}, n = e.toString().split("&"), i = 0, o = n.length; o > i; i++) {
            var a = n[i].split("=");
            a[0] && (t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || ""))
        }
        return t
    }

    function obj2qs(e) { if (!e) return ""; var t = []; for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n].toString() || "")); return t.length ? "?" + t.join("&") : "" }

    function parseJSON(obj) { try { return JSON.parse(obj) } catch (e) { return eval("(" + obj + ")") } }

    function lsCheck() { return void 0 !== window.localStorage && null !== window.localStorage && void 0 !== window.JSON }

    function lsSet(e, t) {
        if ("undefined" != typeof t) try { return localStorage.setItem(e, JSON.stringify(t)) } catch (n) {} else try { return localStorage.removeItem(e) } catch (n) {}
        return !1
    }

    function lsGet(e) { try { return JSON.parse(localStorage.getItem(e)) } catch (t) {} return !1 }

    function ssCheck() { return void 0 !== window.sessionStorage && void 0 !== window.JSON }

    function ssSet(e, t) {
        if ("undefined" != typeof t) try { return sessionStorage.setItem(e, JSON.stringify(t)) } catch (n) {} else try { return sessionStorage.removeItem(e) } catch (n) {}
        return !1
    }

    function ssGet(e) { try { return JSON.parse(sessionStorage.getItem(e)) } catch (t) {} return !1 }

    function getValues(e) { if (!isArray(e)) return e.call ? e() : e; for (var t = [], n = 0, i = e.length; i > n; n++) t.push(getValues(e[n])); return t }

    function len(e) { if (isArray(e)) return e.length; if (isObject(e)) { var t = 0; for (var n in e) t++; return t } return 0 }

    function realSubstr(e, t) { return e = e || "", e.length > t && (e = e.substr(0, t - 3), e = e.replace(/&[^;]{0,6}$/, ""), e = e.replace(/<[^>]*$/, ""), e = e.replace(/(\s|<br\s*\/?>)+$/, ""), e += ".."), e }

    function hashCode(e) {
        var t = 0;
        if (0 === e.length) return t;
        for (var n = 0, i = e.length; i > n; n++) {
            var o = e.charCodeAt(n);
            t = (t << 5) - t + o, t |= 0
        }
        return t
    }

    function formatNum(e) { if (!window.langConfig) return e; for (var t = e.toString().split("."), n = [], i = t[0].length - 3; i > -3; i -= 3) n.unshift(t[0].slice(i > 0 ? i : 0, i + 3)); return t[0] = n.join(window.langConfig.numDel), e = t.join(window.langConfig.numDec) }! function() {
        var e = vkNow();
        window.clog = function() {
            var t = window,
                n = t.vk;
            if (n.__debug) try {
                if (window.console && console.log) {
                    var i = Array.prototype.slice.call(arguments);
                    i.unshift("[" + (vkNow() - e) / 1e3 + "] ");
                    var o = window,
                        a = o.browser;
                    a.msie || a.mobile && !a.safari_mobile ? console.log(i.join(" ")) : console.log.apply(console, i)
                }
            } catch (r) {}
        }
    }();

    function each(e, t) {
        if (!e) return e;
        if (isObject(e) || "undefined" == typeof e.length) {
            for (var n in e)
                if (e.hasOwnProperty(n) && t.call(e[n], n, e[n]) === !1) break
        } else
            for (var i = 0, o = e.length; o > i && t.call(e[i], i, e[i]) !== !1; i++);
        return e
    }

    function copy(e) { return isArray(e) ? e.concat([]) : isObject(e) ? extend({}, e) : e }
    var rf = function() { return !1 },
        registeredEvents = [];

    function addEvent(e, t, n) {
        if (e = ge(e), n = n || rf, e && 3 != e.nodeType && 8 != e.nodeType) {
            e.setInterval && e != window && (e = window);
            for (var t = t.split(" "), i = 0, o = t.length; o > i; i++) {
                var a = t[i];
                e.addEventListener ? e.addEventListener(a, n, !1) : e.attachEvent && e.attachEvent("on" + a, n), registeredEvents.push([e, a, n])
            }
        }
    }

    function removeEvent(e, t, n) {
        if (e = ge(e), n = n || rf, e && 3 != e.nodeType && 8 != e.nodeType)
            for (var t = t.split(" "), i = 0, o = t.length; o > i; i++) {
                var a = t[i];
                e.removeEventListener ? e.removeEventListener(a, n, !1) : e.detachEvent && e.detachEvent("on" + a, n)
            }
    }

    function preventEvent(e) { return (e = e || window.event) ? (e = e.originalEvent || e, e.preventDefault && e.preventDefault(), e.returnValue = !1, !1) : !1 }

    function stopEvent(e) { return (e = e || window.event) ? (e = e.originalEvent || e, e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, !1) : !1 }

    function cancelEvent(e) { return (e = e || window.event) ? (e = e.originalEvent || e, e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, e.returnValue = !1, !1) : !1 }

    function checkEvent(e) {
        var t = window,
            n = t.PointerEvent;
        return !(!(e = e || window.event) || n && e instanceof n || "click" != e.type && "mousedown" != e.type && "mouseup" != e.type || !(e.which > 1 || e.button > 1 || e.ctrlKey || e.shiftKey || e.metaKey))
    }

    function onCtrlEnter(e, t, n) {
        var i = window,
            o = i.browser;
        if (t = t || window.event, 10 == t.keyCode || 13 == t.keyCode && (t.ctrlKey || t.metaKey && o.mac)) {
            if (isUndefined(n)) {
                var a = submitBtn(e);
                a && a.click()
            } else n.call(e);
            cancelEvent(t)
        }
    }

    function submitBtn(e) { if (!e) return !1; var t = "form" == tag(e) ? e : e.form || gpeByTag("form", e); if (!t) return !1; for (var n in t) { var i = t[n]; if ("input" == tag(i) && "submit" == i.type && /(^|\\s)(small_)?button(\\s|$)/i.test(i.className) && !i.name) return i } return !1 }

    function createIframe(e, t) { e = extend(e || {}, { border: "0" }), t = extend(t || {}, { position: "absolute", width: 1, height: 1, left: 10 }); var n = ce("iframe", e, t); return append(n, "vk_utils"), n }

    function winToUtf(e) { return e.replace(/&#(\d\d+);/g, function(e, t) { return t = intval(t), t >= 32 ? String.fromCharCode(t) : e }).replace(/&quot;/gi, '"').replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&") }

    function shortCurrency() {
        var e = {};
        each(geByClass("_short_currency"), function() {
            var t = this.getAttribute("data-short") || "",
                n = winToUtf(t).length,
                i = getStyle(this, "fontFamily") || "tahoma,arial,sans-serif";
            if (!t) return !0;
            if (isUndefined(e[i])) {
                for (var o = "", a = n - 1; a >= 0; a--) o += "&#8399;";
                var r = ce("div", { innerHTML: "<b>" + t + "</b><b>" + o + "</b>" }, { fontFamily: i, fontSize: "24px" });
                ge("vk_utils").appendChild(r), e[i] = Math.abs(r.firstChild.offsetWidth - r.lastChild.offsetWidth) >= 2 * n, remove(r)
            }
            e[i] && val(this, t)
        })
    }

    function checkNav(e, t) {
        if (e = ge(e), !e) return !1;
        do
            if (checkElementNav(e, t)) return e;
        while (e = e.parentNode);
        return !1
    }

    function checkElementNav(e, t) {
        var n = window,
            i = n.al;
        if (!i || !i.ver) return !1;
        if (!e) return !1;
        if (t = t || {}, "a" == tag(e)) {
            if ((t.skip_onclick || !e.getAttribute("onclick")) && (e.getAttribute("href") || e.getAttribute("data-href")) || hasClass("al_nav", e)) {
                if (e.hostname) var o = e.hostname;
                else var a = e.href || attr(e, "data-href"),
                    o = (/^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(a) || [])[2];
                if ("_blank" === e.target && t.skip_blank || t.skip_clicable) return !0;
                if ("_blank" !== e.target && isHttpHref(a)) { if (!o || o == location.hostname) return !0; if (t.allow_post_away && o && e.getAttribute("data-post-id") && e.getAttribute("data-post-click-type")) return e.setAttribute("data-change-location-with-post-away", 1), !0 }
            }
        } else if ("input" == tag(e) || "button" === tag(e) && e.form && !e.form.getAttribute("onsubmit")) { if (e.form && ("submit" == e.type || "image" == e.type) && (t.skip_onclick || !e.getAttribute("onclick")) || hasClass("al_nav", e)) return !0 } else if ("label" == tag(e) && t.skip_clicable && (e.htmlFor || geByTag1("input", e) && (t.skip_onclick || !e.getAttribute("onclick")) || hasClass("al_nav", e))) return !0;
        return !1
    }

    function checkTouchHover(e) {
        if (e = ge(e), !e) return !1;
        do { if ("a" == tag(e) || hasClass("al_photo", e)) return e; if ("label" == tag(e) && hasClass("option_row", e)) return e; if (hasClass("_touched", e)) return e } while (e = e.parentNode);
        return !1
    }

    function trim(e) { return (e || "").trim() }

    function parseCyr(e, t) { for (var n = e, i = ["yo", "zh", "kh", "ts", "ch", "sch", "shch", "sh", "eh", "yu", "ya", "YO", "ZH", "KH", "TS", "CH", "SCH", "SHCH", "SH", "EH", "YU", "YA", "'"], o = ["�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�"], a = 0, r = i.length; r > a; a++) n = t ? n.split(i[a]).join(o[a]) : n.split(o[a]).join(i[a]); for (var s = "abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCY��", l = "������������������������������������������������", a = 0, r = s.length; r > a; a++) n = t ? n.split(s.charAt(a)).join(l.charAt(a)) : n.split(l.charAt(a)).join(s.charAt(a)); return n == e ? null : n }

    function parseLat(e) { return parseCyr(e, !0) }

    function parseRusKeys(e, t, n) { if (!t) return null; for (var i = e, o = "qwertyuiop[]asdfghjkl;'zxcvbnm,./`QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?~", a = "��������������������������������.���������������������������������,�", r = 0, s = o.length; s > r; r++) i = n ? i.split(o.charAt(r)).join(a.charAt(r)) : i.split(a.charAt(r)).join(o.charAt(r)); return i == e ? null : i }

    function parseLatKeys(e, t) { return parseRusKeys(e, t, !0) }

    function scrollLeft() {
        var e = window,
            t = e.htmlNode,
            n = e.bodyNode;
        return t.scrollLeft || n.scrollLeft || window.scrollX || 0
    }

    function scrollTop(e, t) {
        var n = window,
            i = n.htmlNode,
            o = n.bodyNode;
        return "undefined" == typeof e ? i.scrollTop || o.scrollTop || window.scrollY || 0 : void(t ? setTimeout(function() { window.scrollTo(0, Math.max(0, e)) }, t) : window.scrollTo(0, Math.max(0, e)))
    }

    function se() {
        var e = [],
            t = Array.prototype.slice.call(arguments);
        return function(n, i) {
            if (n)
                if (n.apply) e.push(n);
                else if ("__clear" === n)
                if (i) {
                    for (var o = 0, a = e.length; a > o; o++)
                        if (e[o] === i) { e.splice(o, 1); break }
                } else e = [];
            else {
                var r = Array.prototype.slice.call(arguments);
                r.shift();
                for (var s = 0, a = e.length; a > s; s++) e[s].apply(window, getValues(t).concat(r))
            }
        }
    }

    function onBodyScrollForce(e) {
        var t = window,
            n = t.onBodyScroll,
            i = t.onDOMReady;
        e ? setTimeout(function() { n(!0) }, e) : i(function() { n(!0) })
    }

    function sgFix() {
        var e = window,
            t = e._ua,
            n = e.ajax,
            i = e.page,
            o = e.clog;
        if (/galaxy|gt\-/i.test(t)) {
            window.vkSGi = 0, window.vkAjax = n, window.vkPage = i;

            function a() { return ++window.vkSGi > 25 ? void delete window.vkSGi : n !== window.vkAjax || i !== window.vkPage ? (n = window.vkAjax, i = window.vkPage, o("SG fixed"), void delete window.vkSGi) : void setTimeout(a, 200) }
            a()
        }
    }

    function hideUnvisibleItems(e) {
        var t = window,
            n = t.cur;
        if (n.alHiddenObjects) {
            var i = getValues(n.alHiddenObjects);
            if (i) {
                e = e || {};
                var o = e.delta || 3 * getCh(),
                    a = scrollTop(),
                    r = a + getCh(),
                    s = a - o,
                    l = r + o,
                    c = [],
                    u = [],
                    d = null,
                    f = null;
                if (each(i, function(e, t) {
                        var n = gpeByClass("ali_wrap", t);
                        if (!n) return !0;
                        var i = n.offsetHeight,
                            o = getY(n),
                            a = o + i,
                            r = isVisible(t);
                        s > a || o > l ? r && c.push([n, t, i]) : r ? d || (d = n, f = o) : u.push([n, t])
                    }), each(u, function(e, t) {
                        var n = t[0],
                            i = t[1];
                        setStyle(n, "height", "auto"), show(i)
                    }), each(c, function(e, t) {
                        var n = t[0],
                            i = t[1],
                            o = t[2];
                        setStyle(n, "height", o), hide(i)
                    }), d && f) {
                    var p = getY(d);
                    p != f && scrollTop(a + (p - f))
                }
            }
        }
    }

    function initObjectsHideByScroll(e, t) {
        var n = window,
            i = n.cur,
            o = n.onBodyScroll,
            a = n.onDOMReady;
        e && (i.alHiddenObjects = e, o(function() { hideUnvisibleItems(t) }), a(function() { hideUnvisibleItems(t) }))
    }

    function checkPostsSeen() {
        var e = window,
            t = e.cur,
            n = e.pStats;
        if (t.alPostsStatsObjects) {
            var i = getValues(t.alPostsStatsObjects);
            if (i) {
                var o = scrollTop(),
                    a = o + getCh(),
                    r = [];
                each(i, function(e, t) {
                    if (attr(t, "data-ignore")) return !0;
                    var i = getY(t),
                        s = i + t.offsetHeight,
                        l = (isVisible(t), attr(t, "data-clicked")),
                        c = t.bits || 0;
                    return c >= 3 ? !0 : o > s || i > a ? !0 : (c |= i >= o && a > i || l ? 1 : 0, c |= s >= o && a > s || l ? 2 : 0, void(c && (t.bits = c, 3 == c && (r.push(n.postsGetRaws(t)), n.viewed(t)))))
                }), n.seen(r)
            }
        }
    }

    function initPostsStats(e) {
        var t = window,
            n = t.cur,
            i = t.onBodyScroll,
            o = t.onDOMReady;
        e && (n.alPostsStatsObjects = e, i(function() { checkPostsSeen() }), o(function() { checkPostsSeen() }))
    }

    function initAutoScroll(e, t, n) {
        var i = window,
            o = i.onBodyScroll;
        if (e && t) {
            n = n || {};
            var a = n.delta || !1;
            o(function(n) {
                var i = getValues(e);
                if (i) {
                    var o = getY(i),
                        r = getCh(),
                        s = o - n - r;
                    o > 0 && (a || 2 * r) > s && t.call(i)
                }
            })
        }
    }

    function autoScroll(e, t, n) {
        var i = window,
            o = i.ajax;
        n = n || {};
        var a = getValues(e),
            r = ge("show_more_loading"),
            s = n.no_cache || !1,
            l = function() { o.click(this, t, { use_cache: !s }) };
        !a && r && l.call(r), initAutoScroll(e, l, n), n.hide_objects && initObjectsHideByScroll(n.hide_objects)
    }

    function scrollToEl(e, t, n) {
        e = ge(e) || window, t = t || 0;
        var i = (e === window ? 1 : getY(e)) - t;
        scrollTop(i, n)
    }

    function scrollToHash(e) {
        var t = window,
            n = t.nav;
        if (e = e || n.hash || location.hash, "#" === e[0] && (e = e.substr(1)), e) {
            var i = geBySel("a[name]");
            i === !1 && (i = geByTag("a")), each(i, function(t, n) { return n.name == e ? (scrollToEl(n), !1) : void 0 })
        }
    }

    function lockButton(e) {
        var t = ge(e);
        if (/(^|\s)(small_)?button(\s|$)/i.test(t.className)) {
            var n = ce("button", { id: t.id, className: t.className, innerHTML: '<span class="button_locked"><b class="button_locked_label">' + htsc(val(t)) + "</b></span>", onclick: function(e) { return cancelEvent(e) }, real_btn: t });
            t.fake_btn = n, before(n, t), remove(t)
        }
    }

    function unlockButton(e) {
        var t = ge(e);
        t.real_btn ? (before(t.real_btn, t), remove(t), t.real_btn.fake_btn = null, t.real_btn = null) : t.fake_btn && (before(t, t.fake_btn), remove(t.fake_btn), t.fake_btn.real_btn = null, t.fake_btn = null)
    }

    function extend() {
        var e = Array.prototype.slice.call(arguments),
            t = e.shift();
        if (!e.length) return t;
        for (var n = 0, i = e.length; i > n; n++)
            for (var o in e[n]) "layerX" != o && "layerY" != o && (t[o] = e[n][o]);
        return t
    }

    function ge(e) { return "string" == typeof e ? document.getElementById(e) : e }

    function geByClass(e, t, n) {
        if (t = ge(t) || document, n = n || "*", t.getElementsByClassName) {
            var i = t.getElementsByClassName(e);
            if ("*" == n) return Array.prototype.slice.call(i);
            var o = [];
            n = n.toUpperCase();
            for (var a = 0, r = i.length; r > a; a++) i[a].tagName.toUpperCase() == n && o.push(i[a]);
            return o
        }
        for (var i = geByTag(n, t), o = [], s = new RegExp("(^|\\s)" + escapeRE(e) + "(\\s|$)"), a = 0, r = i.length; r > a; a++) s.test(i[a].className) && o.push(i[a]);
        return o
    }

    function geByClass1(e, t, n) { return geByClass(e, t, n)[0] }

    function gpeByClass(e, t) {
        if (t = ge(t), !t) return null;
        for (; t = t.parentNode;)
            if (hasClass(e, t)) return t;
        return null
    }

    function geByTag(e, t) { return (ge(t) || document).getElementsByTagName(e) }

    function geByTag1(e, t) { return geByTag(e, t)[0] }

    function gpeByTag(e, t) {
        if (t = ge(t), !t) return null;
        for (e = e.toUpperCase(); t = t.parentNode;)
            if (t.tagName && t.tagName.toUpperCase() == e) return t;
        return null
    }

    function geBySel(e, t) { return t = ge(t) || document, t.querySelectorAll ? t.querySelectorAll(e) : !1 }

    function geBySel1(e, t) { return t = ge(t) || document, t.querySelector ? t.querySelector(e) : !1 }

    function append(e, t) { return e = ge(e), t = ge(t), e && t && t.appendChild(e) || !1 }

    function before(e, t) { return t = ge(t), t && t.parentNode && t.parentNode.insertBefore(ge(e), t) || !1 }

    function after(e, t) { return t = ge(t), t && t.parentNode && t.parentNode.insertBefore(ge(e), t.nextSibling) || !1 }

    function replace(e, t) { before(e, t) && remove(t) }

    function remove(e) { return e = ge(e), e && e.parentNode ? e.parentNode.removeChild(e) : !1 }

    function clone(e) { return e = ge(e), e ? e.cloneNode(!0) : !1 }

    function reflow(e) {
        e = ge(e);
        try {
            { e.offsetWidth + e.offsetHeight }
        } catch (t) {}
    }

    function tag(e) { return e = ge(e), (e && e.tagName || "").toLowerCase() }

    function outer(e) { return e = ge(e), e ? val(ce("div").appendChild(clone(e)).parentNode) : "" }

    function show(e) {
        var t = ge(e);
        t && (t.style.display = t.oldstyle || (hasClass("_ib", t) ? "inline-block" : hasClass("_i", t) || "span" == tag(t) ? "inline" : "block"))
    }

    function hide(e) {
        var t = ge(e);
        t && ("none" != t.style.display && (t.oldstyle = t.style.display), t.style.display = "none")
    }

    function isVisible(e) { var t = ge(e); return t && t.style ? "none" != t.style.display : !1 }

    function toggle(e, t) { "undefined" == typeof t && (t = !isVisible(e)), t && isVisible(e) || (t || isVisible(e)) && (t ? show : hide)(e) }

    function ce(e, t, n) { var i = document.createElement(e); return t && extend(i, t), n && setStyle(i, n), i }

    function elfocus(e, t, n) {
        e = ge(e);
        try {
            if (e.focus(), ("undefined" == typeof t || t === !1) && (t = e.value.length), ("undefined" == typeof n || n === !1) && (n = t), e.createTextRange) {
                var i = e.createTextRange();
                i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", n), i.select()
            } else e.setSelectionRange && e.setSelectionRange(t, n)
        } catch (o) {}
    }

    function elblur(e) { e = ge(e), e && e.blur && e.blur() }

    function val(e, t) {
        if (e = ge(e), !e) return "";
        var n = e.tagName.toLowerCase(),
            i = "input" == n || "textarea" == n || "select" == n,
            o = i && ("radio" == e.type || "checkbox" == e.type);
        if ("undefined" == typeof t) return i ? o ? e.checked : e.value : e.innerHTML;
        if (i) o ? e.checked = t : e.value = t;
        else {
            e.innerHTML = t;
            var a = window,
                r = a.ajax;
            "a" != n && (r.prepare_nav(e), r.prepare_click(e), r.onPrepared(!0, e))
        }
    }

    function attr(e, t, n) { return (e = ge(e)) ? "undefined" == typeof n ? "data-" == t.substr(0, 5) && e.dataset ? e.dataset[t.substr(5).replace(/-([a-z0-9])/, function(e, t) { return t.toUpperCase() })] || !1 : e.getAttribute && e.getAttribute(t) || !1 : n === !1 ? e.removeAttribute && e.removeAttribute(t) || !1 : void(e.setAttribute && e.setAttribute(t, n)) : void 0 }

    function cssToJs(e, t) { return t ? t + (e || "").replace(/(?:^|-)([a-z])/g, function(e, t) { return (t || "").toUpperCase() }) : (e || "").replace(/-([a-z])/g, function(e, t) { return (t || "").toUpperCase() }) }

    function getCssPropertyName(e, t, n) {
        e = ge(e) || ce("div");
        for (var i = ["webkit", "Moz", "ms", "O", ""], o = ["-webkit-", "-moz-", "-ms-", "-o-", ""], a = 0, r = i.length; r > a; a++) {
            var s = i[a],
                l = cssToJs(t, s);
            if ("undefined" != typeof e.style[l]) return n ? o[a] + t : l
        }
        return !1
    }

    function cssValue(e, t) {
        if ("number" == typeof e) {
            var n = 1e7;
            e = Math.round(e * n) / n + (t || "")
        }
        return e
    }

    function getStyle(e, t, n) {
        if (e = ge(e), !e) return !1;
        if (isArray(t)) { var i = {}; return each(t, function(t, n) { i[n] = getStyle(e, n) }), i }
        if (isUndefined(n) && (n = !0), /transform(-origin)?|transition(-duration)?/i.test(t) && (t = getCssPropertyName(e, t), !t)) return !1;
        var o = window,
            a = o.browser;
        if (!n && "opacity" == t && a.msie) { var r = e.style.filter; return r ? r.indexOf("opacity=") >= 0 ? parseFloat(r.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" : "" }
        if (!n && e.style && (e.style[t] || "height" == t)) return e.style[t];
        var s, l = document.defaultView || window;
        if (l.getComputedStyle) {
            t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
            var c = l.getComputedStyle(e, null);
            c && (s = c.getPropertyValue(t))
        } else if (e.currentStyle) {
            if ("opacity" == t && a.msie) { var r = e.currentStyle.filter; return r && r.indexOf("opacity=") >= 0 ? parseFloat(r.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" }
            var u = t.replace(/\-(\w)/g, function(e, t) { return t.toUpperCase() });
            s = e.currentStyle[t] || e.currentStyle[u], "auto" == s && (s = 0), s = (s + "").split(" "), each(s, function(t, n) {
                if (!/^\d+(px)?$/i.test(n) && /^\d/.test(n)) {
                    var i = e.style,
                        o = i.left,
                        a = e.runtimeStyle.left;
                    e.runtimeStyle.left = e.currentStyle.left, i.left = n || 0, s[t] = i.pixelLeft + "px", i.left = o, e.runtimeStyle.left = a
                }
            }), s = s.join(" ")
        }
        if (n && ("width" == t || "height" == t)) {
            var d = "width" == t ? getW(e) : getH(e);
            s = (intval(s) ? Math.max(floatval(s), d) : d) + "px"
        }
        return s
    }
    extend(getStyle, { transform: function(e) { var t, n = getStyle(e, "transform"); return n ? { scale: (t = n.match(/(^|\s+)scale\(([0-9.]+)\)(\s+|$)/)) && t[2] || 1, scale3d: (t = n.match(/(^|\s+)scale3d\(([0-9.]+,\s+([0-9.]+),\s+([0-9.]+))\)(\s+|$)/)) && t[2] || 1, rotate: (t = n.match(/(^|\s+)rotate\(([0-9.-]+)(deg)?\)(\s+|$)/)) && +t[2] || 0, translate: (t = n.match(/(^|\s+)translate\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4]] || [0, 0], translate3d: (t = n.match(/(^|\s+)translate3d\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4], +t[6]] || [0, 0, 0] } : { scale: 1, rotate: 0, translate: [0, 0] } } });

    function setStyle(e, t, n) {
        if (e = ge(e), e && e.style) {
            if (isObject(t)) return each(t, function(t, n) { setStyle(e, t, n) });
            var i = "number" == typeof n;
            i && /height|width/i.test(t) && (n = Math.abs(n)), (!/transform(-origin)?|transition(-duration)?/i.test(t) || (t = getCssPropertyName(e, t))) && (e.style[t] = i && !/z-?index|font-?weight|opacity|zoom|line-?height/i.test(t) ? n + "px" : n)
        }
    }
    extend(setStyle, {
        animate: function(e, t, n, i) {
            var o = getCssPropertyName(e, "transition");
            if (o) {
                if (!t) return e.onAnimationEnd ? e.onAnimationEnd() : setStyle.transition(e), setStyle;
                var a = isObject(n),
                    r = (a ? n.duration : n) || 200,
                    s = n.func || "ease";
                setStyle.transition(e, t, r, s);
                var l = window,
                    c = l.browser;
                e.onAnimationEnd && (c.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)), e.onAnimationEnd = function() { return c.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd), e.onAnimationEnd = null, setStyle.transition(e), i && i(e), !1 }, c.opera ? e.addEventListener("oTransitionEnd", e.onAnimationEnd) : addEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)
            }
            return setStyle
        },
        transform: function(e, t, n, i) {
            var o = window,
                a = o.has3d,
                r = [];
            if (isObject(t)) {
                a && (t.scale3d = t.scale, t.translate3d = t.translate);
                var s = extend(getStyle.transform(e), t);
                t = a ? s.scale3d : s.scale, i = s.rotate, n = a ? s.translate3d : s.translate
            }
            return "undefined" != typeof t && r.push(a ? "scale3d(" + cssValue(t) + ", " + cssValue(t) + ", 1)" : "scale(" + cssValue(t) + ")"), "undefined" != typeof i && r.push("rotate(" + cssValue(i, "deg") + ")"), "undefined" != typeof n && r.push(a ? "translate3d(" + cssValue(n[0], "px") + ", " + cssValue(n[1], "px") + ", 0)" : "translate(" + cssValue(n[0], "px") + ", " + cssValue(n[1], "px") + ")"), r.length ? void setStyle(e, "transform", r.join(" ")) : setStyle(e, "transform", "none")
        },
        transformOrigin: function(e, t, n) { isArray(t) && (n = t[1], t = t[0]), setStyle(e, "transform-origin", cssValue(t, "px") + " " + cssValue(n, "px")) },
        transition: function(e, t, n, i) {
            var o = [];
            return t ? (isArray(t) || (t = t.split(/\s*,\s*/)), n = cssValue(n, "ms"), each(t, function() {
                var t = getCssPropertyName(e, this, !0),
                    a = [];
                t && (a.push(t), a.push(n), i && a.push(i), o.push(a.join(" ")))
            }), void setStyle(e, "transition", o.join(","))) : setStyle(e, "transition", "none")
        }
    });

    function hasClass(e, t, n) {
        if ("string" == typeof t && "string" != typeof e) {
            var i = [t, e];
            e = i[0], t = i[1]
        }
        return (t = ge(t)) ? new RegExp("(^|\\s)" + (n ? e : escapeRE(e)) + "(\\s|$)").test(t.className) : void 0
    }

    function addClass(e, t) {
        if ("string" == typeof t && "string" != typeof e) {
            var n = [t, e];
            e = n[0], t = n[1]
        }(t = ge(t)) && !hasClass(e, t) && (t.className = (t.className ? t.className + " " : "") + e)
    }

    function removeClass(e, t, n) {
        if ("string" == typeof t && "string" != typeof e) {
            var i = [t, e];
            e = i[0], t = i[1]
        }(t = ge(t)) && hasClass(e, t, n) && (t.className = (t.className || "").replace(new RegExp("(^|\\s)" + (n ? e : escapeRE(e)) + "(\\s|$)"), function(e, t, n) { return t && n ? " " : "" }))
    }

    function toggleClass(e, t, n) {
        var i = "undefined" == typeof n ? hasClass(e, t) : !n;
        i ? removeClass(e, t) : addClass(e, t)
    }

    function replaceClass(e, t, n, i) { removeClass(e, n, i), addClass(t, n) }

    function switchClass(e, t, n) { hasClass(e, n) ? replaceClass(e, t, n) : replaceClass(t, e, n) }

    function getXY(e) {
        if (e = ge(e), !e) return [0, 0];
        var t = 0,
            n = 0;
        if (e.offsetParent)
            do t += e.offsetLeft, n += e.offsetTop; while (e = e.offsetParent);
        return [t, n]
    }

    function getX(e) { return getXY(e)[0] }

    function getY(e) { var t = getXY(e)[1]; return t }

    function getW(e) { return e = ge(e), e && e.offsetWidth || 0 }

    function getH(e) { return e = ge(e), e && e.offsetHeight || 0 }

    function getSize(e) { return e = ge(e), [getW(e), getH(e)] }

    function getCw() { return Math.max(window.innerWidth || 0, (window.htmlNode || {}).clientWidth || 0) }

    function getCh() { return Math.max(window.innerHeight || 0, (window.htmlNode || {}).clientHeight || 0) }

    function evalJs(e) { window.execScript ? window.execScript(e) : eval.call(window, e) }

    function domData(e, t, n) { return e ? "undefined" != typeof n ? (null === n ? e.removeAttribute("data-" + t) : e.setAttribute("data-" + t, n), n) : e.getAttribute("data-" + t) : null }

    function alLoadingFix(e, t) {
        t = t || "al_loading";
        var n = ge(t);
        if (n) {
            if (!e) {
                var i = ge("m").offsetHeight || 0,
                    o = ge("mfoot") && ge("mfoot").offsetHeight || 0;
                e = getCh() - i + o
            }
            n.style.height = e + "px", addClass(t, n)
        }
    }

    function getHref(e) { if (!e) return !1; var t = !1; return e.getAttribute && (t = e.getAttribute("data-href") || e.getAttribute("href")), t || (e.pathname ? t = e.pathname + e.search + e.hash : tag(e) || (t = e)), t || !1 }

    function ajx2q(e) {
        var t = [],
            n = function(e) { try { return encodeURIComponent(e) } catch (t) { return "" } };
        for (var i in e)
            if (null != e[i] && !isFunction(e[i]))
                if (isArray(e[i]))
                    for (var o = 0, a = 0, r = e[i].length; r > o; ++o) null == e[i][o] || isFunction(e[i][o]) || (t.push(n(i) + "[" + a + "]=" + n(e[i][o])), ++a);
                else t.push(n(i) + "=" + n(e[i]));
        return t.join("&")
    }

    function indexOf(e, t, n) {
        for (var i = n || 0, o = (e || []).length; o > i; i++)
            if (e[i] == t) return i;
        return -1
    }

    function isToday(e) { var t = new Date; return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate() }

    function isYesterday(e) { var t = new Date(e.getTime() + 864e5); return isToday(t) }

    function isTomorrow(e) { var t = new Date(e.getTime() - 864e5); return isToday(t) }

    function isSameDate(e, t) {
        var n = new Date(e),
            i = new Date(t);
        return n.getFullYear() === i.getFullYear() && n.getMonth() === i.getMonth() && n.getDate() === i.getDate()
    }

    function leadingZero(e) { return e >= 10 ? e : "0" + e }

    function langSex(e, t) { if (!isArray(t)) return t; var n = t[1]; return window.langConfig ? (each(langConfig.sexRules, function(i, o) { return "*" == o[0] ? (n = t[o[1]], !1) : e == o[0] && t[o[1]] ? (n = t[o[1]], !1) : void 0 }), n) : n }

    function langNumeric(e, t, n) {
        var i = window,
            o = i.langConfig;
        if (!t || !o) return e;
        var a;
        if (isArray(t) ? (a = t[1], e != Math.floor(e) ? a = t[o.numRules["float"]] : each(o.numRules["int"], function(n, i) { if ("*" == i[0]) return a = t[i[2]], !1; var o = i[0] ? e % i[0] : e; return -1 != indexOf(i[1], o) ? (a = t[i[2]], !1) : void 0 })) : a = t, n) {
            for (var r = e.toString().split("."), s = [], l = r[0].length - 3; l > -3; l -= 3) s.unshift(r[0].slice(l > 0 ? l : 0, l + 3));
            r[0] = s.join(o.numDel), e = r.join(o.numDec)
        }
        return a = (a || "%s").replace("%s", e)
    }

    function langWordNumeric(e, t, n) { return isArray(t) && e < t.length ? t[e] : langNumeric(e, n) }

    function langDate(e, t, n, i, o, a) {
        var r = window,
            s = r.langConfig,
            l = void 0;
        if (a || (a = ""), isArray(t) || (t = ["", t, t, t, t]), "number" == typeof e || "string" == typeof e ? (e > 2147483646e3 && (e = 0), e += n, l = new Date(e)) : l = e, o) t = t[1];
        else {
            var c = "";
            c = isToday(l) ? t[3] : isYesterday(l) ? t[2] : isTomorrow(l) ? t[4] : t[1], !c && t[1] && (c = t[1]), t = c
        }
        var u = "",
            d = { hours: l.getHours(), minutes: l.getMinutes(), seconds: l.getSeconds(), day: l.getDate(), month: l.getMonth() + 1, year: l.getFullYear() };
        switch (3 === s.id && (u = l.getHours() > 11 ? "pm" : "am", d.hours = l.getHours() % 12 == 0 ? 12 : l.getHours() % 12), s.id) {
            case 1:
                switch (l.getHours()) {
                    case 11:
                        t = t.replace(" � ", " �� ");
                        break;
                    case 0:
                        t = t.replace(" � ", " � ")
                }
                break;
            case 3:
                !isToday(l) || isYesterday(l) || isTomorrow(l) || (t = a + t);
                break;
            case 12:
            case 73:
                1 == l.getHours() && (t = t.replace(" &#224;s ", " &#224; "))
        }
        return 68 === s.id && (d.year = d.year + 543), t.replace("{hour}", d.hours).replace("{num_hour}", leadingZero(d.hours)).replace("{minute}", leadingZero(d.minutes)).replace("{day}", d.day).replace("{num_day}", leadingZero(d.day)).replace("{month}", i[d.month]).replace("{year}", d.year).replace("{short_year}", d.year % 100).replace("{second}", leadingZero(d.seconds)).replace("{am_pm}", u)
    }

    function setNotify(e) {
        var t = intval(e),
            n = ge("header_msgs"),
            i = geByClass1("pcont", "l");
        if (n && (window.isNewMail ? val(n, '<div class="hb_btn mhi_notify">' + (t > 0 ? '<em class="mh_notify_counter">' + t + "</em>" : "") + "</div>") : val(n, '<div class="hb_btn mhi_notify">' + (t > 0 ? '<em class="mh_notify_counter">' + t + "</em>" : "&nbsp;") + "</div>"), t > 0 ? removeClass("mhb_no_notify", n) : addClass("mhb_no_notify", n), i)) {
            var o = geByClass1("mmi_mail", i),
                a = geByClass1("mmi_wrap", o),
                r = geByClass1("mm_counter", a);
            if (!o) return;
            t > 0 ? r ? val(r, t) : append(ce("em", { className: "mm_counter", innerHTML: t }), a) : remove(r)
        }
    }

    function getNotify() { var e = ge("header_msgs"); return e ? intval(val(geByTag1("em", e))) : 0 }

    function canUploadFile() { return (window.XMLHttpRequest || window.XDomainRequest) && (window.FormData || window.FileReader && (window.XMLHttpRequest && XMLHttpRequest.sendAsBinary || window.ArrayBuffer && window.Uint8Array && (window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder))) }

    function uploadFile(e, t, n) {
        var i = window.XDomainRequest || window.XMLHttpRequest,
            o = new i;
        o.open("POST", e, !0), o.upload.addEventListener("progress", n.onProgress || rf, !1), o.onload = n.onComplete || rf, o.onerror = n.onError || rf;
        var a = n.onStart || rf;
        if (window.FormData) { var r = new FormData; for (var s in t) r.append(s, t[s]); return o.send(r), a(o), o }
        try {
            if (i && !i.prototype.sendAsBinary && window.ArrayBuffer && window.Uint8Array) {
                var l = window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder;
                l && (i.prototype.sendAsBinary = function(e) {
                    for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t, 0), i = 0; i < e.length; i++) n[i] = 255 & e.charCodeAt(i);
                    var o = new l;
                    o.append(t);
                    var a = o.getBlob();
                    this.send(a)
                })
            }
            var c = "----VkComFormBoundary-" + srand(),
                u = "",
                d = 0,
                f = function(e, t, n) { n += "--" + t + "--", e.setRequestHeader("Content-type", 'multipart/form-data; boundary="' + t + '"'), e.sendAsBinary(n), a(e) };
            for (var s in t)
                if ("function" == typeof t[s].getAsBinary) {
                    d++;
                    var p = new FileReader,
                        _ = t[s],
                        m = _.fileName || _.name || "";
                    p.onload = function() { u += "--" + c + '\r\nContent-Disposition: form-data; name="' + utf2win(s) + '"; filename="' + utf2win(m) + '"\r\nContent-Type: application/octet-stream\r\n', 0 + p.result + "\r\n", d--, d || f(o, c, u) }, p.readAsBinaryString(_)
                } else u += "--" + c + '\r\nContent-Disposition: form-data; name="' + utf2win(s) + '"\r\n\r\n' + utf2win(t[s]) + "\r\n";
            return d || f(o, c, u), o
        } catch (v) { return !1 }
        return !1
    }

    function readFile(e, t) {
        if (window.FileReader && window.vk.iu_ex) {
            var n = new FileReader;
            n.onload = function() { t && t(n.result), n = null }, n.readAsDataURL(e)
        }
    }

    function formatTime(e) { var t, n, i, o = 0 > e; return e = Math.round(o ? -e : e), n = e % 60, t = 10 > n ? "0" + n : n, e = Math.floor(e / 60), i = e % 60, t = i + ":" + t, e = Math.floor(e / 60), e > 0 && (10 > i && (t = "0" + t), t = e + ":" + t), o && (t = "-" + t), t }! function() {
        var e = !1,
            t = [],
            n = function() {
                if (!e && (e = !0, window.htmlNode = geByTag1("html"), window.bodyNode = geByTag1("body"), t)) {
                    for (var n = null; n = t.shift();) n.call(document);
                    t = null
                }
            };

        function i() { document.removeEventListener("DOMContentLoaded", i, !1), n() }

        function o() { "complete" === document.readyState && (document.detachEvent("onreadystatechange", o), n()) }
        document.addEventListener ? document.addEventListener("DOMContentLoaded", i, !1) : document.attachEvent && document.attachEvent("onreadystatechange", o), window.addEventListener ? window.addEventListener("load", n, !1) : window.attachEvent ? window.attachEvent("onload", n) : window.onload = n;

        function a(n) { e ? n.call(document) : t.push(n) }
        window.onDOMReady = a
    }(), window.cdf = function(e) {
        var t = e.createDocumentFragment(),
            n = e.createElement("div"),
            i = e.createRange && e.createRange();
        return t && t.appendChild(n), i && i.selectNodeContents && i.selectNodeContents(n), t ? i && i.createContextualFragment ? function(t) { return t ? i.createContextualFragment(t) : e.createDocumentFragment() } : function(t) {
            if (!t) return e.createDocumentFragment();
            n.innerHTML = t;
            for (var i = e.createDocumentFragment(); n.firstChild;) i.appendChild(n.firstChild);
            return i
        } : function(e) { return ce("div", { innerHTML: e }) }
    }(document);

    function domClosestOverflowHidden(e) { e = ge(e); for (var t, n, i, o, a = e; a && a.tagName && a !== bodyNode && (t = getStyle(a, "position"), n = getStyle(a, "overflow"), i = getStyle(a, "transform"), a === e || "visible" === n || ("static" === t ? o && "relative" !== o : "fixed" === o));) "none" !== i ? o = void 0 : "static" !== t && "fixed" !== o && (o = t), a = (a || {}).parentNode; return a }

    function urlBase64ToUint8Array(e) { for (var t = "=".repeat((4 - e.length % 4) % 4), n = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), i = window.atob(n), o = new Uint8Array(i.length), a = 0; a < i.length; ++a) o[a] = i.charCodeAt(a); return o }

    function copyToClipboard(e) { _select2["default"](e); var t = void 0; try { t = document.execCommand("copy") } catch (n) { t = !1 } return t }

    function blinkItem(e, t) { setStyle(e, { opacity: 1 }), setTimeout(function() { return setStyle(e, { opacity: 0 }) }, t) }

    function domPN(e) { return (e || {}).parentNode }

    function matchesSelector(e, t) { if (e = ge(e), !e || e == document) return !1; var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function(e) { for (var t = (this.parentNode || this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t[n] !== this;); return n > -1 }; return n.call(e, t) }

    function domCA(e, t) { do e = domPN(e); while (e && !matchesSelector(e, t)); return e }

    function getLang() {
        try {
            var e = Array.prototype.slice.call(arguments),
                t = e.shift();
            if (!t) return "...";
            var n = window.cur && window.cur.lang && window.cur.lang[t] || window.lang && window.lang[t] || window.langpack && window.langpack[t] || window[t];
            if (!n) { var i = t.split("_"); return i.shift(), i.join(" ") }
            return isFunction(n) ? n.apply(null, e) : void 0 === e[0] && !isArray(n) || "raw" === e[0] ? n : langNumeric(e[0], n, e[1])
        } catch (o) { console.log("lang error:" + o.message + "(" + Array.prototype.slice.call(arguments).join(", ") + ")") }
    }

    function domData(e, t, n) { return e ? "undefined" != typeof n ? (null === n ? e.removeAttribute("data-" + t) : e.setAttribute("data-" + t, n), n) : e.getAttribute("data-" + t) : null }

    function throttle(e, t) { var n; return function() { n || (e.apply(this, arguments), n = setTimeout(function() { n = !1 }, t)) } }

    function debounce(e) {
        var t;
        return function() {
            t && clearTimeout(t);
            var n = this,
                i = arguments;
            t = setTimeout(function() { e.apply(n, i) })
        }
    }

    function scrollGetX() { return window.pageXOffset || scrollNode.scrollLeft || document.documentElement.scrollLeft }

    function scrollGetY() { return window.pageYOffset ? window.pageYOffset : window.scrollNode ? window.scrollNode.scrollTop : document.documentElement ? document.documentElement.scrollTop : 0 }

    function domEL(e, t) { for (t = t ? "previousSibling" : "nextSibling"; e && !e.tagName;) e = e[t]; return e }

    function domPS(e) { return domEL((e || {}).previousSibling, 1) }

    function domNS(e) { return domEL((e || {}).nextSibling) }

    function domFC(e) { return domEL((e || {}).firstChild) }

    function domInsertAfter(e, t) { var n = domPN(t); return n && n.insertBefore(e, domNS(t)) }

    function domInsertBefore(e, t) { var n = domPN(t); return n && n.insertBefore(e, t) }

    function domChildIndex(e) { for (var t = 0; null != (e = domPS(e));) t++; return t }
    onDOMReady(function() { window.scrollNode = browser.chrome || browser.msie_edge ? document.scrollingElement || bodyNode : browser.safari ? bodyNode : htmlNode });

    function domChildren(e) { for (var t = [], n = e.childNodes, i = 0; i < n.length; i++) n[i].tagName && t.push(n[i]); return t }

    function safeGet(e, t) {
        for (var n = t.split("."), i = n.length, o = e, a = 0; i > a; a++)
            if (o = o[n[a]], !o) return void 0;
        return o
    }

    function alwaysArray(e) { return Array.isArray(e) ? e : [e] }

    function disableFlex() {
        var e = $(".vk"),
            t = Array.from($$("*")),
            n = ["A", "IMG", "SPAN"];
        e.classList.remove("vk_flex_yes"), e.classList.add("vk_flex_no"), t.filter(function(e) { return e instanceof Element && "flex" === getComputedStyle(e).display }).forEach(function(e) { e.style.display = n.includes(e.tagName) ? "inline" : "block" })
    }

    function flatArray(e) { return Array.isArray(e) ? flatten(e) : [e] }

    function domQuery1(e, t) { return (t || document).querySelector(e) }

    function flatten(e) { var t = []; return e.forEach(function(e) { isArray(e) ? t = t.concat(flatten(e)) : t.push(e) }), t }

    function ariaMode() {
        $("html").classList.add("vk_ariaMode"), $$("*").forEach(function(e) {
            if (e.style.fontSize = "9px", e.style.backgroundImage = "none", "true" === e.getAttribute("aria-hidden") && (e.style.display = "none"), "IMG" === e.tagName) {
                var t = e.getAttribute("alt") || "[?]";
                e.insertAdjacentHTML("afterend", "<div>" + t + "</div>"), e.style.display = "none"
            } else(!e.innerHTML.trim() || e.getAttribute("aria-label")) && (e.innerHTML = e.getAttribute("aria-label") || e.getAttribute("alt") || e.getAttribute("href") || "[?]")
        })
    }

    function isIosWebView() { return window.webkit && window.webkit.messageHandlers }

    function isAndroidWebView() { return window.AndroidBridge }

    function isVkWebView() { return isIosWebView() ? "function" == typeof window.webkit.messageHandlers.VKWebAppInit : isAndroidWebView() ? "function" == typeof window.AndroidBridge.VKWebAppInit : !1 }

    function acquireLock(e, t, n) {
        var i = "lock_" + e;
        if (lsCheck()) {
            if (lsGet(i) !== !0) { lsSet(i, !0); try { t() } catch (o) {} return void lsSet(i, !1) }
            n || setTimeout(acquireLock.bind(window, e, t, !0), 100)
        } else t()
    }

    function statlogsValueEvent(e, t, n, i, o) {
        if ("undefined" != typeof e && "undefined" != typeof t) {
            var a = "remixmsts",
                r = void 0,
                s = [n, i, o];
            acquireLock("m_stats_cookie_lock", function() {
                try { r = JSON.parse(getCookie(a)), r = r.data } catch (n) { r = [] }
                r.push([Math.round(Date.now() / 1e3), e, t].concat(s)), r = r.slice(r.length - 100);
                var i = Math.round(rand(0, 1e9));
                setCookie(a, JSON.stringify({ data: r, uniqueId: i }), .01)
            })
        }
    }
    window.onBodyScroll = se(scrollTop), window.onBodyResize = se(), window.ariaMode = ariaMode, window.flatten = flatten, window.flatArray = flatArray, window.formatTime = formatTime, window.setDocumentDomain = setDocumentDomain, window.isUndefined = isUndefined, window.isFunction = isFunction, window.isArray = isArray, window.isObject = isObject, window.isEmpty = isEmpty, window.escapeRE = escapeRE, window.htsc = htsc, window.escapeAttr = escapeAttr, window.unescapeAttr = unescapeAttr, window.replaceEntities = replaceEntities, window.escapeStr = escapeStr, window.stripTags = stripTags, window.rand = rand, window.srand = srand, window.utf2win = utf2win, window.isHttpHref = isHttpHref, window.vkNow = vkNow, window.bind = bind, window.intval = intval, window.floatval = floatval, window.qs2obj = qs2obj, window.obj2qs = obj2qs, window.parseJSON = parseJSON, window.lsCheck = lsCheck, window.lsSet = lsSet, window.lsGet = lsGet, window.ssCheck = ssCheck, window.ssSet = ssSet, window.ssGet = ssGet, window.getValues = getValues, window.len = len, window.realSubstr = realSubstr, window.hashCode = hashCode, window.formatNum = formatNum, window.each = each, window.copy = copy, window.addEvent = addEvent, window.removeEvent = removeEvent, window.preventEvent = preventEvent, window.stopEvent = stopEvent, window.cancelEvent = cancelEvent, window.checkEvent = checkEvent, window.onCtrlEnter = onCtrlEnter, window.submitBtn = submitBtn, window.createIframe = createIframe, window.winToUtf = winToUtf, window.shortCurrency = shortCurrency, window.checkNav = checkNav, window.checkElementNav = checkElementNav, window.checkTouchHover = checkTouchHover, window.parseCyr = parseCyr, window.parseLat = parseLat, window.parseRusKeys = parseRusKeys, window.parseLatKeys = parseLatKeys, window.scrollLeft = scrollLeft, window.scrollTop = scrollTop, window.se = se, window.onBodyScrollForce = onBodyScrollForce, window.sgFix = sgFix, window.hideUnvisibleItems = hideUnvisibleItems, window.initObjectsHideByScroll = initObjectsHideByScroll, window.checkPostsSeen = checkPostsSeen, window.initPostsStats = initPostsStats, window.initAutoScroll = initAutoScroll, window.autoScroll = autoScroll, window.scrollToEl = scrollToEl, window.scrollToHash = scrollToHash, window.lockButton = lockButton, window.unlockButton = unlockButton, window.extend = extend, window.ge = ge, window.geByClass = geByClass, window.geByClass1 = geByClass1, window.gpeByClass = gpeByClass, window.geByTag = geByTag, window.geByTag1 = geByTag1, window.gpeByTag = gpeByTag, window.geBySel = geBySel, window.geBySel1 = geBySel1, window.domNS = domNS, window.domPS = domPS, window.append = append, window.before = before, window.after = after, window.replace = replace, window.remove = remove, window.re = remove, window.clone = clone, window.reflow = reflow, window.tag = tag, window.outer = outer, window.show = show, window.hide = hide, window.isVisible = isVisible, window.toggle = toggle, window.ce = ce, window.elfocus = elfocus, window.elblur = elblur, window.val = val, window.attr = attr, window.cssToJs = cssToJs, window.getCssPropertyName = getCssPropertyName, window.cssValue = cssValue, window.getStyle = getStyle, window.setStyle = setStyle, window.hasClass = hasClass, window.addClass = addClass, window.removeClass = removeClass, window.toggleClass = toggleClass, window.replaceClass = replaceClass, window.switchClass = switchClass, window.getXY = getXY, window.getX = getX, window.getY = getY, window.getW = getW, window.getH = getH, window.getSize = getSize, window.getCw = getCw, window.getCh = getCh, window.evalJs = evalJs, window.alLoadingFix = alLoadingFix, window.getHref = getHref, window.ajx2q = ajx2q, window.indexOf = indexOf, window.langSex = langSex, window.langNumeric = langNumeric, window.langWordNumeric = langWordNumeric, window.langDate = langDate, window.setNotify = setNotify, window.getNotify = getNotify, window.canUploadFile = canUploadFile, window.uploadFile = uploadFile, window.readFile = readFile, window.registeredEvents = registeredEvents, window.trim = trim, window.domClosestOverflowHidden = domClosestOverflowHidden, window.copyToClipboard = copyToClipboard, window.blinkItem = blinkItem, window.domPN = domPN, window.domCA = domCA, window.getLang = getLang, window.domData = domData, window.throttle = throttle, window.debounce = debounce, window.scrollGetX = scrollGetX, window.scrollGetY = scrollGetY, window.domChildIndex = domChildIndex, window.domChildren = domChildren, window.safeGet = safeGet, window.disableFlex = disableFlex, window.domQuery1 = domQuery1, window.domFC = domFC, window.domInsertAfter = domInsertAfter, window.domInsertBefore = domInsertBefore, window.alwaysArray = alwaysArray, window.need = need, window.isString = isString, window.isIosWebView = isIosWebView, window.isAndroidWebView = isAndroidWebView, window.isVkWebView = isVkWebView, window.statlogsValueEvent = statlogsValueEvent
}, function() { Object.freeze || (Object.freeze = function(e) { if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects."); return e }); try { Object.freeze(function() {}) } catch (e) { Object.freeze = function(e) { return function(t) { return "function" == typeof t ? t : e(t) } }(Object.freeze) } }, function() {
    var e = window,
        t = e.each,
        n = e.geByClass,
        i = e.attr,
        o = e.replaceClass,
        a = e.ge,
        r = e.val,
        s = e.addClass,
        l = e.toggleClass,
        c = e.removeClass,
        u = e.ce,
        d = e.se,
        f = e.addEvent,
        p = e.removeEvent,
        _ = e.extend,
        m = (e.qs2obj, e.vkNow),
        v = e.geByClass1,
        h = e.setStyle,
        g = e.remove,
        w = e.intval,
        y = e.isArray,
        b = e.hasClass,
        k = e.after,
        C = e.cdf,
        M = e.stripTags,
        S = e.getHref,
        E = e.indexOf,
        T = e.htsc,
        A = e.replaceEntities,
        x = e.escapeAttr,
        I = e.replace,
        P = e.scrollTop,
        B = e.before,
        L = e.alLoadingFix,
        N = window,
        O = N.mobPlatforms,
        H = N.isTouch,
        D = window,
        j = D.ajax,
        R = window,
        q = R.mediaUpload,
        F = window,
        U = F.nav,
        z = window,
        $ = z.Dialog,
        V = z.Dialogs,
        W = function() {
            var e = {},
                E = {},
                T = null,
                A = null,
                N = !1,
                D = {},
                R = {},
                F = {},
                z = null;
            U.onBeforeGo(function(e, t, n) { if (U.getQuery("community") && (!n || !n.ignore_cur_process)) { var o = "string" == typeof e ? e : i(e, "href") || i(e, "data-href"); if ("/mail" === o) return U.go(e, t, { ignore_cur_process: !0 }), !0 } }), U.onBeforeGo(function() {
                if (U.getQuery("community")) var e = j.post("/", { _ajax: 1, act: "ping" }, {
                    onDone: function() {
                        try {
                            var t = JSON.parse(e.response),
                                n = t && t[1] && t[1][2];
                            W.actualizeMessagesCornerCounter(n)
                        } catch (i) {}
                    }
                })
            });

            function K() {
                if (T) {
                    var s = [],
                        l = !1;
                    if (t(n("_unread"), function() {
                            var e = +i(this, "data-id");
                            e && s.push(e), l = W.getPeerByMsg(e), o("_unread", "_read", this)
                        }), l) {
                        var c = a("messages" + l);
                        c && e[l] && (e[l].messages = r(c))
                    }
                    s.length && W.sendMarkAsRead(T, s)
                }
            }

            function Q(e, t) { t ? (s("lvi", e), l("mlvi", e, !!O[t]), l("vkmobilelvi", e, 8 == t)) : (c("lvi", e), c("mlvi", e), c("vkmobilelvi", e)) }

            function J(e, t) {
                var n, i = t.split("."),
                    o = i.length,
                    a = e;
                for (n = 0; o > n; n++)
                    if (a = a[i[n]], !a) return null;
                return a
            }

            function Z(e, t, n) {
                var i, o, a = t.split("."),
                    r = a.length - 1,
                    s = e;
                for (o = 0; r > o; o++) i = a[o], s = s[i] || (s[i] = {});
                s[a[r]] = n
            }

            function et(e) {
                var n = e.updater;
                n(document.body), t(e.caches, function(t, n) {
                    var i = n.storage,
                        o = n.getter,
                        a = J(i, o);
                    if (a) {
                        var r = "string" == typeof a;
                        r && (a = u("div", { innerHTML: a })), e.updater(a), Z(i, o, r ? a.innerHTML : a)
                    }
                })
            }
            return {
                wrapLinks: G,
                wrapMention: Y,
                onShowDialogFromCache: d(),
                onShowWritePageFromCache: d(),
                onShowDialogsPageFromCache: d(),
                onMessagesRepainted: d(),
                init: function(t, n) {
                    var i = window,
                        o = i.im;
                    window.cur.destroy.push(function() { AudioMessagePlayer.detachPlayer() }), t && (T = t, n && (W.saveDialog(n, t), A = e[t])), N || (N = !0, f(document, H ? "touchstart" : "mousedown", K)), o.on()
                },
                unpinMessage: function(t) { et({ caches: [{ storage: e, getter: t + ".write_form" }], updater: function(e) { e.$$(".cm_unpin").forEach(hide), e.$$(".head_actions_wrap").forEach(function(e) { return e.classList.remove("head_actions_has_pinned") }), e.$$(".pinnedMsg_peer_" + t).forEach(function(e) { return e.classList.add("pinnedMsg_hidden") }) } }) },
                pinMessage: function(t, n) { et({ caches: [{ storage: e, getter: t + ".write_form" }], updater: function(e) { e.$$(".cm_unpin").forEach(show), e.$$(".head_actions_wrap").forEach(function(e) { return e.classList.add("head_actions_has_pinned") }), $$(".pinnedMsg_peer_" + t).forEach(function(e) { return e.outerHTML = n }) } }) },
                clear: function() {
                    U.clear();
                    var t = window,
                        n = t.im;
                    e = {}, E = {}, D = {}, T = A = null, p(document, H ? "touchstart" : "mousedown", K), N = !1, n.off()
                },
                send: function(e) { return q && !q.checkUploading() ? !1 : j.click(e, _({ clear: !0, save: !0 }, $), { lock: !0 }) },
                save: function(n) { t(n, function(t, n) { e[t] && n.last_msg == e[t].last_msg && delete n.messages, W.saveDialog(n, t) }) },
                saveDialog: function(n, i) {
                    e[i] || (e[i] = {});
                    var o = e[i];
                    _(o, n), o.msgs && t(o.msgs, function(e, t) { D[t] = i })
                },
                getPeerByMsg: function(e) { return D[e] || !1 },
                cacheDialogsPage: function() {
                    if (!U.getQuery("community") || !U.getQuery("tab")) {
                        E.page = r("m");
                        var e = U.getQuery();
                        E.link = e.act ? X("/mail") : U.cur
                    }
                },
                keyup: function(e, t, n) {
                    var i = z || "",
                        o = e.value || "";
                    (i.length != o.length || i != o) && (W.myTyping(t, n), z = o)
                },
                myTyping: function(e, t) {
                    if (!(-2e9 >= e)) {
                        var n = m();
                        F[e] && n - F[e] < 5e3 || (F[e] = n, j.post("/mail", { _ajax: 1, act: "typing", peer: e, hash: t, community: U.getQuery("community") }))
                    }
                },
                typing: function(e, t) {
                    t = t || e;
                    e > 2e9 ? (R[e] || (R[e] = {}), R[e][t] = m()) : R[e] = m(), W.updateTyping(e)
                },
                updateTyping: function(e) {
                    var n = function(e, t) { return e.getAttribute && e.getAttribute(t) },
                        i = window,
                        o = i.lang,
                        l = a("dialog_near" + e),
                        u = v("di_current_peer", l),
                        d = v("di_typing", l);
                    if (l) {
                        var f = [],
                            p = m();
                        if (e > 2e9) t(R[e] || {}, function(e, t) { n(d, "data-u" + e) && t && 6e3 > p - t && f.push(e) });
                        else {
                            var _ = R[e];
                            n(d, "data-u" + e) && _ && 6e3 > p - _ && f.push(e)
                        }
                        if (f.length) {
                            if (1 == f.length) {
                                var g = f[0],
                                    w = n(d, "data-u" + g),
                                    y = n(d, "data-s" + g);
                                r(d, '<i class="i_typing"></i>' + (o.mobile_mail_typing[y] || "").replace("{user}", w))
                            } else {
                                t(f, function(e, t) { f[e] = n(d, "data-u" + t) });
                                var b = f.pop();
                                r(d, '<i class="i_typing"></i>' + (o.mobile_mail_multi_typing || "").replace("{users}", f.join(", ")).replace("{last_user}", b))
                            }
                            u.offsetWidth && h(d, "minWidth", u.offsetWidth), s("di_typing_now", l), setTimeout(function() { s("di_typing_animated", l) }, 10), setTimeout(function() { W.updateTyping(e) }, 2e3)
                        } else r(d, ""), h(d, "minWidth", 0), c("di_typing_animated", l), c("di_typing_now", l)
                    }
                },
                updateOnline: function(i, o) {
                    var s = a("messages" + i);
                    if (s && g(v("di_activity", s)), t(n("_lv" + i, "mcont"), function(e, t) { Q(t, o) }), e[i]) {
                        if (e[i].write_form) {
                            var l = u("div", { innerHTML: e[i].write_form });
                            t(n("_lv" + i, l), function(e, t) { Q(t, o) }), e[i].write_form = r(l)
                        }
                        if (e[i].messages) {
                            var l = u("div", { innerHTML: e[i].messages });
                            g(v("di_activity", l)), e[i].messages = r(l)
                        }
                    }
                },
                updateImportantMessages: function(t, n, i) {
                    et({
                        caches: [{ storage: E, getter: "page" }, { storage: U.page_get(X("/mail")), getter: "html" }],
                        updater: function(e) {
                            var t = v("dialogs_filter_button_important", e);
                            if (t) {
                                var n = w(r(t)) + i;
                                r(t, n), l("dialogs_filter_without_important", v("dialogs_filter", e), 0 === n)
                            }
                        }
                    }), et({
                        caches: [{ storage: e, getter: t + ".messages" }],
                        updater: function(e) {
                            var t = v("_msg" + n, e);
                            t && l("msg_item_important", t, 1 === i)
                        }
                    })
                },
                updateImportantDialog: function(e, t) {
                    U.getQuery("community") && et({
                        caches: [{ storage: E, getter: "page" }, { storage: U.page_get(X("/mail")), getter: "html" }],
                        updater: function(n) {
                            var i = v("_peer" + e, n);
                            i && l("dialog_item_important", i, t)
                        }
                    })
                },
                sendMarkAsRead: function(n, i) { y(i) || (i = [i]); var o = e[n]; return o && o.hash ? void j.post("/mail", { _ajax: 1, act: "mark_read", peer: n, msgs: i.join(","), hash: o.hash, community: U.getQuery("community") }, { onDone: function(e) { e && t(i, function(e, t) { W.markAsRead(n, t) }) } }) : void 0 },
                markAsRead: function(t, n) {
                    var i = window,
                        o = i.im,
                        s = a("messages" + t);
                    if (s) {
                        var l = v("_msg" + n, s);
                        o.nu && b("_read", l) || c("mi_unread", l);
                        var d = e[t];
                        if (d && d.messages) {
                            var f = u("div", { innerHTML: d.messages }),
                                l = v("_msg" + n, f);
                            o.nu && b("_read", l) || c("mi_unread", l), d.messages = r(f)
                        }
                    }
                },
                markPeerAsRead: function(o, s, l) {
                    var d = a("messages" + o);
                    if (d) {
                        t(n("msg_item", d), function() {
                            if (!l == !b("_unread", this)) return !0;
                            var e = +i(this, "data-id");
                            s >= e && !b("_read", this) && c("mi_unread", this)
                        });
                        var f = e[o];
                        if (f && f.messages) {
                            var p = u("div", { innerHTML: f.messages });
                            t(n("msg_item", p), function() {
                                if (!l == !b("_unread", this)) return !0;
                                var e = +i(this, "data-id");
                                s >= e && !b("_read", this) && c("mi_unread", this)
                            }), f.messages = r(p)
                        }
                    }
                    var _ = a("dialogs"),
                        m = l ? "di_unread_outbox" : "di_unread_inbox";
                    if (_) {
                        var f = v("_peer" + o, _);
                        f && b(m, f) && (c(m, f), g(v("di_unread_cnt", f)))
                    } else if (E.page) {
                        var p = u("div", { innerHTML: E.page }),
                            f = v("_peer" + o, p);
                        f && b(m, f) && (c(m, f), g(v("di_unread_cnt", f))), E.page = r(p)
                    }
                    et({
                        caches: [{ storage: U.page_get(X("/mail")), getter: "html" }],
                        updater: function(e) {
                            var t = v("_peer" + o, e);
                            t && b(m, t) && (c(m, t), g(v("di_unread_cnt", t)))
                        }
                    })
                },
                markAsDeleted: function(t, n) {
                    var i = a("messages" + t);
                    if (i) {
                        g(v("_msg" + n, i));
                        var o = e[t];
                        if (o && o.messages) {
                            var s = u("div", { innerHTML: o.messages });
                            g(v("_msg" + n, s)), o.messages = r(s)
                        }
                    }
                    j.click(X(U.path), _({ no_scroll: !0 }, V))
                },
                addMessage: function(t, n, i, o) {
                    if (U.clear(), 2e9 > t ? delete R[t] : R[t] && delete R[t][i], W.updateTyping(t), o !== !0) {
                        if (t && n && (D[n] = t), !v("_msg" + n)) {
                            var s = e[t];
                            if (s && s.messages) {
                                s.msgs && s.msgs.push(n);
                                var l = u("div", { innerHTML: s.messages }),
                                    c = v("di_activity", l);
                                c ? (k(C(o), c), s.messages = r(l)) : s.messages = o + s.messages;
                                var d = a("messages" + t);
                                d && (r(d, s.messages), W.onMessagesRepainted(!0))
                            } else {
                                var d = a("messages" + t);
                                if (d) {
                                    var c = v("di_activity", d);
                                    c ? k(C(o), c) : r(d, o + r(d))
                                }
                            }
                        }
                    } else if (a("dialogs") && "/mail" == U.path) {
                        var f = U.getQuery();
                        f.act || f.offset || f.q || j.click(X(U.path), _({ no_scroll: !0 }, V))
                    }
                },
                replaceMessage: function(t, n, i, o) {
                    var s = a("messages" + t),
                        l = e[t];
                    if (l && l.messages) {
                        var c = u("div", { innerHTML: l.messages }),
                            d = v("_msg" + n, c);
                        d && (d.outerHTML = o), l.messages = r(c), r(s, l.messages)
                    } else v("_msg" + n).outerHTML = o
                },
                getMsgHTML: function(t, n, o, s, l, c, u, d) {
                    var f = window,
                        p = f.vk,
                        _ = f.lang,
                        m = 2 & n ? p.id : u && u.from || o;
                    if (!m) return !1;
                    if (!a("messages" + o)) return !0;
                    if (u.attach1 || u.fwd || u.geo || u.emoji) return !1;
                    if (u.source_act) return !1;
                    if (!e[o] || !e[o].hash) return !1;
                    var h = "_u" + m,
                        g = v(h, "mcont", "a"),
                        y = M(i(g, "data-name") || r(g) || ""),
                        b = S(g),
                        k = v(h, "mcont", "img"),
                        C = k && k.src || "";
                    if (!y || !b || !C) return !1;

                    function E() {
                        var e = new Date(1e3 * s),
                            t = e.getHours(),
                            n = e.getMinutes();
                        return t + ":" + (10 > n ? "0" : "") + n
                    }
                    o = w(o), t = w(t), l = l && -1 == l.toString().indexOf(" ... ") && 2e9 > o ? l : "";
                    var T = 1 & n ? " mi_unread" : "";
                    return !(2 & n) && 1 & n && (T += T ? " _unread" : ""), c = W.wrapLinks(c, n), c = W.wrapMention(c), ('<a name="msg{{msgId}}"></a><div  class="msg_item _msg{{msgId}}{{msgClass}}"  data-id="{{msgId}}"  onclick="return MessagesActions.onMessageClick(event);">  <div class="mi_iwrap">    <a class="al{{cl}}" href="{{href}}">      <img src="{{photo}}" class="mi_img {{cl}}" />    </a>  </div>  <div class="mi_cont">    <div class="mi_head">      <a class="mi_date" href="' + X("/mail?act=msg&id={{msgId}}").replace(/\&/g, "&amp;") + '">        {{time}}      </a>      {{edited}}\n      <a class="mi_author al{{cl}} {{cl}}" href="{{href}}" data-name="{{dataName}}">        {{name}}      </a>    </div>    <div class="mi_body">      {{mi_title}}      <div class="mi_text">{{text}}</div>    </div>  </div></div>').replace(/{{msgId}}/g, t).replace(/{{cl}}/g, h).replace(/{{href}}/g, b).replace("{{msgClass}}", T).replace("{{edited}}", d ? '<span class="mi_edited">' + _.mobile_mail_edited + "</span>" : "").replace("{{photo}}", C).replace("{{time}}", E(s)).replace("{{dataName}}", x(y)).replace("{{name}}", y.split(" ").shift()).replace("{{mi_title}}", l ? '<div class="mi_title">' + l + "</div>" : "").split("{{text}}").join(c)
                },
                updateStickers: function() {
                    var t = window,
                        n = t.cur,
                        i = window,
                        o = i.post,
                        r = e[T];
                    if (r) {
                        var s = r.write_form ? (n.sticker_panel || "").split("mail-0").join("mail" + T) : "",
                            l = a("stickers_panel");
                        l && (I(C(s), l), l = null, o.stickersInit())
                    }
                },
                showDialog: function(t, n, o) {
                    var a = window,
                        s = a.cur,
                        l = window,
                        d = l.MessagesActions,
                        f = l.Mention,
                        p = window,
                        m = p.post;
                    if (d.hasFwdMessages()) return d.attachFwdMessages(n), !1;
                    E.scroll_top = P();
                    var h = e[n];
                    if (h) {
                        var w = u("div", { innerHTML: r("m") }),
                            y = v("mhb_back", w);
                        if (y && h.header) {
                            var b = u("div");
                            r(b, h.header), B(b.firstElementChild, y), g(y)
                        }
                        var k = h.write_form ? (s.sticker_panel || "").split("mail-0").join("mail" + n) : "";
                        r(v("pcont", v("mcont", w)), h.write_form + k + (n ? '<div id="messages' + n + '" class="messages bl_cont">' + (h.messages || "") + '<div id="al_loading"></div></div>' : "")), r("m", w.innerHTML), m.stickersInit(), j.refreshLinks(h.fv_link, h.app_link), L(), T = n, A = h;
                        var C = S(t);
                        U.go(C, null, { push_only: !0, no_push: o }), n ? (z = null, W.updateTyping(n), j.click(C, _({ save: n }, $), { scroll: !0 })) : W.onShowWritePageFromCache(!0), W.onShowDialogFromCache(!0), P(0, 10)
                    } else U.al_go(h && h.cur_link || S(t) || U.cur);
                    U.getQuery("community") && "unread" === U.getQuery("ctab") && c("al_back", v("mhb_back"));
                    var M = v("MentionContainer"),
                        x = parseJSON(i(M, "data-mentions")) || [];
                    return x.length && f.init({ url: !1, appendTo: M, defaultItems: x, items: x }), !1
                },
                backToDialogs: function(e) {
                    if (E.page) U.go(E.link, null, { push_only: !0, no_push: e }), j.click(E.link, _({ no_scroll: !0 }, V)), r("m", E.page), j.refreshLinks(i("fv_link", "href") || i("fv_link", "data-href"), "vkontakte://vk.com/mail"), T = A = null, P(E.scroll_top || 0), W.onShowDialogsPageFromCache(!0);
                    else {
                        var t = X(E.link || "/mail");
                        U.go(t, null, { push_only: !0, no_push: e }), U.al_go(t)
                    }
                },
                actualizeMessagesCornerCounter: function(e) {
                    et({
                        caches: [{ storage: E, getter: "page" }, { storage: U.page_get(X("/mail")), getter: "html" }],
                        updater: function(t) {
                            var n = v("mhi_notify", t),
                                i = v("mh_notify_counter", n);
                            i || (i = u("em", { className: "mh_notify_counter" }), append(i, n)), e ? i.innerText = e : n.innerHTML = "&nbsp;"
                        }
                    })
                }
            }
        }();

    function X(e) {
        var t = window.nav.getQuery(),
            n = t.community,
            i = t.ctab,
            o = n && -1 === e.indexOf("community=") ? "community=" + n : "",
            a = n && i && -1 === e.indexOf("ctab=") ? "&ctab=" + i : "";
        return o ? e + (e.indexOf("?") >= 0 ? "&" : "?") + o + a : e
    }

    function Y(e) { var t = /\[(id|club)(\d+)(?:\:([a-z0-9_\-]+))?\|([^\$]+?)\]/g; return e.replace(t, function(e, t, n, i, o) { return '<a href="/' + (t + n) + '" class="mem_link">' + o + "</a>" }) }

    function G(e, t) {
        var n = 32768 & t;
        return e = e.replace(/([a-zA-Z\-_\.0-9]+@[a-zA-Z\-_0-9]+\.[a-zA-Z\-_\.0-9]+[a-zA-Z\-_0-9]+)/g, function(e) { return '<a href="mailto:' + e + '">' + e + "</a>" }), e = e.replace(/(https?:\/\/)?(([A-Za-z�-��-���0-9@][A-Za-z�-��-���0-9@\-\_\.]*[A-Za-z�-��-���0-9@])(\/([A-Za-z�-��-�0-9@\-\_#%&?+\/\.=;:~]*[^\.\,;\(\)\?<\&\s:])?)?)/gi, function() {
            var e = arguments[3],
                t = arguments[2],
                i = arguments[0],
                o = arguments[1] || "http://";
            if (-1 == e.indexOf(".") || -1 != e.indexOf("..")) return i;
            var a = e.split(".").pop();
            if (a.length > 7 || -1 == E("place,camera,info,name,academy,aero,arpa,coop,media,museum,mobi,travel,xxx,asia,biz,com,net,org,gov,mil,edu,int,tel,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,ck,cl,cm,cn,co,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,er,es,et,eu,fi,fj,fk,fm,fo,fr,ga,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,im,in,io,iq,ir,is,it,je,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mm,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,ru,rs,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,um,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,ye,yt,yu,za,zm,zw,��,���,����,������,���,cat,pro,local".split(","), a)) return i;
            if (-1 != i.indexOf("@")) return i;
            try { i = decodeURIComponent(i) } catch (r) {}
            return i.length > 55 && (i = i.substr(0, 53) + ".."), i = T(i), !n && e.match(/^([a-zA-Z0-9\.\_\-]+\.)?(vkontakte\.ru|vk\.com|vkadre\.ru|vshtate\.ru|userapi\.com|vk\.me)$/) ? (t = A(t).replace(/([^a-zA-Z0-9#%;_\-.\/?&=\[\]])/g, encodeURIComponent), '<a href="' + (o + t).replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '">' + i + "</a>") : '<a href="/away?to=' + encodeURIComponent(o + A(t)) + '" target="_blank">' + i + "</a>"
        })
    }
    window.mail = W, window.makeUrl = X
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
    }();

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var o = 35;

    function a(e, t) { return Math.log(t) / Math.log(e) }
    "undefined" == typeof window.isTouch && (window.isTouch = !1);
    t.Slider = function() {
        function e(t, n) {
            if (i(this, e), !t) throw new Error("No element was provided for Slider");
            t = ge(t), this.options = n || { size: 1 }, "undefined" == typeof this.options.logfbase && (this.options.logfbase = o), this.options.backValue = this.options.backValue || 0;
            var a = 100 * this.options.backValue,
                r = this.options.withBackLine ? '<div class="slider_back" style="width:' + a + '%"></div>' : "",
                s = '<div class="slider_slide"><div class="slider_loading_bar" style="opacity: 0; display: none;"></div> ' + r + ' <div class="slider_amount"></div> <div class="slider_handler"></div> </div>';
            this._el = ce("div", { innerHTML: s, className: "slider", id: t.getAttribute("id") || "" });
            var l = this;
            if (t.classList)
                for (var c = t.classList, u = 0, d = c.length; d > u; u++) addClass(this._el, c[u]);
            else this._el.className = t.className;
            each(this._el.attributes, function(e, t) {
                ("id" != t.name || "class" != t.name) && l._el.setAttribute(t.name, t.value)
            }), t.parentNode.replaceChild(this._el, t), this._amountEl = geByClass1("slider_amount", this._el), this._handlerEl = geByClass1("slider_handler", this._el), this._slideEl = geByClass1("slider_slide", this._el), this._backEl = geByClass1("slider_back", this._el), this._progressEl = geByClass1("slider_loading_bar", this._el), this.options.color && (setStyle(this._amountEl, { backgroundColor: this.options.color }), setStyle(this._handlerEl, { backgroundColor: this.options.color })), this.options.backColor && setStyle(this._slideEl, { backgroundColor: this.options.backColor }), addClass(this._el, "slider_size_" + this.options.size), this.options.debounce && (this._onValueChangeDebounced = debounce(this._onValueChange, this.options.debounce)), !isTouch && n.formatHint && (addEvent(this._el, "mousemove", this._ev_onMouseOver = this._onMouseOver.bind(this)), addEvent(this._el, "mouseleave", this._ev_onMouseLeave = this._onMouseLeave.bind(this))), addEvent(this._el, isTouch ? "touchstart" : "mousedown", this._ev_onMouseDown = this._onMouseDown.bind(this)), addEvent(this._el, "click", cancelEvent), this.setValue(this.options.value || 0, !this.options.fireChangeEventOnInit, !1), this.setBackValue(this.options.backValue)
        }
        return e.prototype.toggleLoading = function(e) { e = !!e, toggle(this._progressEl, e), setStyle(this._progressEl, "opacity", e ? 1 : 0) }, e.prototype.destroy = function() {
            !isTouch && this.options.formatHint && (removeEvent(this._el, "mousemove", this._ev_onMouseOver), removeEvent(this._el, "mouseleave", this._ev_onMouseLeave), removeEvent(this._el, "mousedown", this._ev_onMouseDown));
            var e = window.re || window.remove;
            e(this._el), e(this._currHintEl)
        }, e.prototype._updateHint = function(e, t) {
            this._currHintEl || (this._currHintEl = ce("div", { className: "slider_hint", id: "slider_hint" }), this.options.hintClass && addClass(this._currHintEl, this.options.hintClass), this._el.appendChild(this._currHintEl));
            var n = this._getPos(),
                i = Math.round((e.pageX || e.touches[0].pageX) - n[0]),
                o = this._width;
            if (i = t ? Math.min(Math.max(0, i), o) : i, i >= 0 && o >= i) {
                var a = i / o;
                this._currHintEl.innerHTML = this.options.formatHint ? this.options.formatHint.call(this, a) : a;
                var r = this._currHintEl.getBoundingClientRect();
                setStyle(this._currHintEl, { left: this._slideEl.offsetLeft + i - (r.right - r.left) / 2, top: this._slideEl.offsetTop - (r.bottom - r.top) - 10 }), !t && this._toggleHint(!0)
            } else !t && this._toggleHint(!1);
            this.options.formatHint || this._toggleHint(!1)
        }, e.prototype._toggleHint = function(e) { toggleClass(this._currHintEl, "visible", e) }, e.prototype._onMouseOver = function(t) { e._currenSliderDrag || hasClass(this._el, "active") || this._updateHint(t) }, e.prototype._onMouseLeave = function() { hasClass(this._el, "active") || this._toggleHint(!1) }, e.prototype._onMouseDown = function(t) {
            (0 == t.button || t.touches) && (delete cur._sliderMouseUpNowEl, addEvent(window, isTouch ? "touchmove" : "mousemove", this._ev_onMouseMove = this._onMouseMove.bind(this)), addEvent(window, isTouch ? "touchend touchcancel" : "mouseup", this._ev_onMouseUp = this._onMouseUp.bind(this)), this._onMouseMove(t), e._currenSliderDrag = this, addClass(this._el, "active"), cancelEvent(t))
        }, e.prototype._onMouseUp = function(t) { cur._sliderMouseUpNowEl = this._el, removeEvent(window, isTouch ? "touchmove" : "mousemove", this._ev_onMouseMove), removeEvent(window, isTouch ? "touchend touchcancel" : "mouseup", this._ev_onMouseUp), this._onValueChange(), removeClass(this._el, "active"), e._currenSliderDrag = !1, this._toggleHint(!1), this.options.onEndDragging && this.options.onEndDragging(this._currValue), cancelEvent(t) }, e.prototype._onMouseMove = function(e) {
            var t = this._getPos(),
                n = t[0];
            n = "undefined" != typeof e.touches && e.touches.length > 0 ? e.touches[0].pageX : e.pageX, n = Math.max(n, t[0]), n = Math.min(n, t[0] + this._width), n -= t[0], this.setValue(n / this._width, !0, !0), this._onValueChangeDebounced ? this._onValueChangeDebounced() : this._onValueChange(), this._toggleHint(!0), this._updateHint(e, !0), cancelEvent(e)
        }, e.prototype._getPos = function() { return this._slidePos = getXY(this._slideEl) }, e.prototype._logf = function(e) { if (!this.options.log) return e; var t = this.options.logfbase; return (Math.pow(t, e) - 1) / (t - 1) }, e.prototype._unlogf = function(e) { if (!this.options.log) return e; var t = this.options.logfbase; return a(t, 1 + e * (t - 1)) }, e.prototype.setValue = function(e, t, n) {
            if (!hasClass(this._el, "active") || n) {
                var i = n ? this._logf(e) : e;
                if (this._currValue != i) {
                    this._currValue = i;
                    var o = n ? e : this._unlogf(e);
                    o = 100 * o + "%", setStyle(this._amountEl, { width: o }), setStyle(this._handlerEl, { left: o }), !t && this._onValueChange()
                }
            }
        }, e.prototype.setBackValue = function(e) {
            toggleClass(this._backEl, "slider_back_transition", e > this._backValue), this._backValue = e;
            var t = 100 * e + "%";
            setStyle(this._backEl, { width: t })
        }, e.prototype._onValueChange = function() { this._lastValue = this._lastValue || 0, this._lastValue != this._currValue && (this._lastValue = this._currValue, this.options.onChange && this.options.onChange(this._currValue)) }, n(e, [{
            key: "_width",
            get: function() {
                if (!this._widthCache) {
                    var e = this._el.getBoundingClientRect();
                    this._widthCache = e.right - e.left
                }
                return this._widthCache
            }
        }]), e
    }()
}, function() {
    Array.prototype.some || (Array.prototype.some = function(e) {
        if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
        if ("function" != typeof e) throw new TypeError;
        for (var t = Object(this), n = t.length >>> 0, i = arguments.length >= 2 ? arguments[1] : void 0, o = 0; n > o; o++)
            if (o in t && e.call(i, t[o], o, t)) return !0;
        return !1
    })
}, function() {
    var e = window,
        t = e.parseJSON,
        n = e.bind,
        i = e.clog,
        o = e.ajx2q,
        a = e.canUploadFile,
        r = e.attr,
        s = e.uploadFile,
        l = e.readFile,
        c = e.replace,
        u = e.clone,
        d = e.ce,
        f = e.befall,
        p = window,
        _ = p.ajax,
        m = {
            onUploadedDone: f("resp"),
            fallback: function(e) {
                var t = window,
                    n = t.nav,
                    i = e.nextSibling;
                return i ? !n.go(i) : !1
            },
            onUploadProgress: function(e) {
                var t = window,
                    n = t.photoview;
                n.updateUpload({ progress: e.loaded / e.total })
            },
            onUploadComplete: function(e) {
                var i = window,
                    o = i.photoview,
                    a = this,
                    r = e.target.responseText,
                    s = !1;
                try { s = t(r) } catch (l) { s = { error: "ERR_CLIENT_BAD_RESPONSE: bad request response" } }
                if (s.error) m.onUploadError.call(a, e);
                else {
                    a.xhr = null, a.photo_res = r, a.photo_size = s.size;
                    var c = a.static_url + s.x_src,
                        u = s.size[0],
                        d = s.size[1],
                        f = Math.min(u, d);
                    o.onClose = n(m.onClose, a), o.openCrop({ src: c, max_scale: f / 200, onSelect: n(m.onCropSelected, a) })
                }
            },
            onUploadError: function(e) {
                var t = window,
                    n = t.photoview;
                i("upload error.", e.target.responseText), n.close()
            },
            onClose: function() { this.xhr && this.xhr.abort && this.xhr.abort() },
            onCropSelected: function(e, t, n) {
                var i = window,
                    a = i.photoview,
                    r = this,
                    s = r.photo_res,
                    l = r.photo_size,
                    c = l[0],
                    u = l[1],
                    d = Math.min(c, u),
                    f = Math.round(e * c),
                    p = Math.round(t * u),
                    v = Math.round(n * d);
                if (r.upload_edit_url) var h = r.upload_edit_url;
                else var h = r.base_url + "upload.php?" + o({ act: "owner_photo_edit", _query: s, _origin: location.protocol + "//" + location.host });
                r.xhr = _.plainpost(h, { _crop: [f, p, v].join(",") }, function(e) { m.onCropSuccess.call(r, e) }, function() { m.onCropCancel.call(r) }, !0), a.updateCrop({ saving: !0 })
            },
            onCropSuccess: function(e) {
                var t = window,
                    n = t.photoview,
                    i = this;
                i.xhr = _.post("/photos.php?act=done_photo", { _ajax: 1, _query: e, _from: i.from }, { onDone: function(e) { m.onUploadedDone(e), n.close() }, onFail: function() { m.onCropCancel.call(i) } })
            },
            onCropCancel: function() {
                var e = window,
                    t = e.photoview;
                t.updateCrop({ saving: !1 })
            },
            prepareInput: function(e) { e.files && e.files.length && (e.value = "") },
            start: function(e, t) {
                var i = window,
                    o = i.photoview;
                if (!e || !a()) return m.fallback(e, t);
                var d = e.files,
                    f = d[0] || !1,
                    p = r(e, "data-upload-url"),
                    _ = r(e, "data-base-url"),
                    v = r(e, "data-static-url"),
                    h = r(e, "data-from");
                if (!f) return !1;
                if (!p) return m.fallback(e, t);
                var g = { upload_url: p, base_url: _, static_url: v, file: f, from: h };
                return g.xhr = s(p, { photo: f }, { onProgress: n(m.onUploadProgress, g), onComplete: n(m.onUploadComplete, g), onError: n(m.onUploadError, g) }), l(f, function(e) { o.updateUpload({ thumb: e }) }), c(u(e), e), o.onClose = n(m.onClose, g), o.openUpload({ src: null }), !1
            },
            getCropFromTag: function(e, t, n) {
                if (!e) return !1;
                if (3 == e.length) var i = +e[0],
                    o = +e[1],
                    a = +e[2];
                else {
                    var i = +e[0] * t / 1e4,
                        o = +e[1] * n / 1e4,
                        a = +e[2] * t / 1e4,
                        r = +e[3] * n / 1e4;
                    if (a > r && (i += (a - r) / 2, a = r), 200 > a) {
                        var s = (200 - a) / 2;
                        i -= s, o -= s, a = 200
                    }
                    a = Math.min(Math.max(a, 200), Math.min(t, n)), i = Math.min(Math.max(i, 0), t - a), o = Math.min(Math.max(o, 0), n - a)
                }
                return [i / t, o / n, a / Math.min(t, n)]
            },
            crop: function(e) {
                if (!e || !e.size && !e.url) return !1;
                var t = window,
                    i = t.photoview,
                    o = { upload_edit_url: e.upload_url };
                if (e.size) {
                    o.photo_size = e.size;
                    var a = Math.min(e.size[0], e.size[1]);
                    i.onClose = n(m.onClose, o), i.openCrop({ src: e.thumb, max_scale: a / 200, rect: m.getCropFromTag(e.rect, e.size[0], e.size[1]), onSelect: n(m.onCropSelected, o) })
                } else {
                    var r = d("img", {
                        src: e.url,
                        onload: function() {
                            o.photo_size = [r.width, r.height];
                            var t = Math.min(r.width, r.height);
                            i.updateCrop({ src: e.thumb, max_scale: t / 200, rect: m.getCropFromTag(e.rect, r.width, r.height), onSelect: n(m.onCropSelected, o) })
                        }
                    });
                    i.onClose = n(m.onClose, o), i.openCrop({ src: !0 })
                }
                return !0
            }
        };
    window.ownerPhotoUpload = m
}, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.throttleAccumulate = n, t.executionStackPop = i, t.lplog = o, t.toArray = a, t.arrayUnique = r, t.urlBase64ToUint8Array = s, t.unpackStore = l;

    function n(e, t) {
        var n = [],
            i = 0;
        return function(o) { n.push(o), i || (i = setTimeout(function() { i = !1, e(n), n = [] }, t)) }
    }

    function i(e) { return e.length > 0 && e.pop().func(), e }

    function o(e, t) {
        var n = void 0,
            i = void 0;
        if (window.__debugMode) {
            switch (t) {
                case "error":
                    n = "color: red", i = "background: red; color: white";
                    break;
                case "success":
                    n = "color: green", i = "background: green; color: white";
                    break;
                default:
                    n = "color: blue;", i = "background: #000; color: #fff;"
            }
            try {
                var o = new Date;
                console.debug("%cLP:[" + o.getHours() + ":" + o.getMinutes() + ":" + o.getSeconds() + ":" + o.getMilliseconds() + "]%c " + e, i, n)
            } catch (a) {}
        }
    }

    function a(e) { var t = []; if ("undefined" == typeof e.length) return Object.keys(e).map(function(t) { return e[t] }); for (var n = 0; n < e.length; n++) t.push(e[n]); return t }

    function r(e) { for (var t = {}, n = [], i = 0; i < e.length; i++) t[e[i]] || (n.push(e[i]), t[n[i]] = 1); return n }

    function s(e) { for (var t = "=".repeat((4 - e.length % 4) % 4), n = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), i = window.atob(n), o = new Uint8Array(i.length), a = 0; a < i.length; ++a) o[a] = i.charCodeAt(a); return o }

    function l(e) { return e.get ? e.get() : e }
}, function() {
    var e = n(['\n    <div class="', '" ', ">\n      ", '\n      <div class="Unfold__popup">\n        ', "\n      </div>\n    </div>\n  "], ['\n    <div class="', '" ', ">\n      ", '\n      <div class="Unfold__popup">\n        ', "\n      </div>\n    </div>\n  "]),
        t = n(['\n    <a href="', '" class="Unfold__trigger" ', " ", ">\n      ", "\n    </a>\n  "], ['\n    <a href="', '" class="Unfold__trigger" ', " ", ">\n      ", "\n    </a>\n  "]);

    function n(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    window.Unfold = i;

    function i(t) {
        var n = q["class"](t.mix, "Unfold", { position: t.position, asIcon: !!t.icon, open: t.opened }),
            i = o(t),
            r = q.list(t.items, a),
            s = t.name && q.attr("data-name", t.name);
        return q.html(e, n, s, i, r)
    }

    function o(e) {
        var n = q.onMouseDown("Unfold._onTriggerMouseDown", "this"),
            i = q.onClick("Unfold._onTriggerClick", "event"),
            o = void 0;
        if (e.icon) o = Icon({ icon: e.icon });
        else {
            for (var a = e.items, r = a.length, s = "", l = "", c = 0; r > c; c++) { var u = a[c]; if (u && u.active) { s = u.text, l = u.activeCount; break } }
            o = [Brick({ mix: "Unfold__triggerText", inner: [s, l ? Brick({ mix: "Unfold__triggerTextCount", inner: l }) : ""] }), Icon({ mix: "Unfold__triggerIcon", icon: "reveal" })], o = q.list(o)
        }
        var d = e.opened ? e.close_url : e.open_url;
        return q.html(t, d, i, n, o)
    }

    function a(e) { return e ? Brick({ mix: q["class"](e.mix, "Unfold__item", { active: e.active, name: e.name, disabled: e.disabled }), url: e.url, tag: e.tag, attrs: e.attrs, inner: [e.icon ? Icon({ mix: "Unfold__itemIcon", icon: e.icon }) : "", Brick({ mix: "Unfold__itemText", inner: e.text }), e.count ? Oval({ mix: "Unfold__itemCount", gray: !0, value: e.count }) : ""] }) : "" }
}, function(e, t, n) {
    var i = n(10),
        o = r(i);
    n(216);
    var a = n(198);

    function r(e) { return e && e.__esModule ? e : { "default": e } }
    var s = window,
        l = s.toggleClass,
        c = s.geByClass1,
        u = s.ajax,
        d = s.addClass,
        f = s.removeClass,
        p = void 0,
        _ = void 0,
        m = void 0,
        v = void 0,
        h = void 0;

    function g(e, t) { e = e.split("_"); for (var n = 0; n < t.length; n++) { var i = t[n].split("_"); if (i[0] == e[0] && i[1] == e[1]) return n } return -1 }
    var w = function() {
        function e(e, n) {
            _ = e, m = n, m.audiosList = m.audiosList.split(","), window.cur && (window.cur.lang = window.cur.lang || {}, extend(window.cur.lang, n.lang || {}));

            function i() { var e = document.scrollingElement || window.scrollNode || document.body; return e.scrollTop }
            if (!m.isWebView) {
                var a = void 0,
                    r = i(),
                    s = c("articleView__header"),
                    u = c("articleView__footer"),
                    p = c("articleView__layout");
                document.addEventListener("scroll", a = function() {
                    var e = p.clientHeight,
                        t = Math.max(0, i()),
                        n = t - r > 0,
                        o = t + window.innerHeight + 20 > e;
                    l(s, "articleView__header--narrow", n), u && l(u, "articleView__footer--hidden", !o && n), r = t
                }), window.cur && cur.destroy.push(function() { document.removeEventListener("scroll", a), f(document.body, "article_body_with_transition") }), m.isStandalone && (window.al = !1)
            }
            if (m.preloadMoreHash || show(c("article_layer_prev_next")), m.isWebView) {
                var v = c("article");
                d(v, "article_webview")
            }
            m.isWebView && m.audioBridge && t(), initArticle(e, { notFull: !!m.preloadMoreHash, isWebView: m.isWebView, mobile: !0, width: m.width }), m.isWebView && o["default"].send("articleReady")
        }

        function t() {
            window.audioplayer = {
                playPause: function(e, t) {
                    var n = gpeByClass("audio_item", e.target);
                    if (v && v != n && (f(v, "ai_playing"), v = !1), h && (f(h, "article_object_audioplaylist_playing"), h = !1), hasClass(n, "ai_playing")) o["default"].send("audioPause", {}), console.log("audioPause", {}), f(n, "ai_playing");
                    else {
                        var i = g(t, m.audiosList),
                            a = m.audiosList; - 1 == i && (a.unshift(t), i = 0), o["default"].send("audioPlay", { audioIds: a, pos: i }), console.log("audioPlay", { audioIds: a, pos: i }), d(n, "ai_playing"), v = n
                    }
                }
            }
        }

        function n(e, t, n) { u.post("article.php", { act: "subscribe", owner_id: t, hash: n }, { onDone: function(t, n) { l(e, "articleView__subscribed", t), e.innerHTML = n } }) }

        function i(e, t, n) {
            var i = !hasClass(e, "active");
            u.post("article.php", { act: "fave", url: t, add: intval(i), hash: n }), a.mailruStatsPixel(i ? "fave" : "unfave", _.mailruStatsData), l(e, "active")
        }

        function r(e) {
            p || (p = setTimeout(function() {
                var t = c("articleView__layout");
                l(t, "article_dark", e), l(document.body, "article_dark", e);
                var n = intval(hasClass(t, "article_dark"));
                p = !1, void 0 !== e || m.isWebview || u.post("article.php", { act: "set_dark_mode", dark: n });
                var i = c("articleMenu");
                i && Unfold.setTitle(i, "dark_mode", getLang(n ? "mobile_articles_menu_dark_disable" : "mobile_articles_menu_dark"))
            }, e ? 0 : 10))
        }

        function s() {
            for (var e = c("article"), t = e.children, n = 0; n < t.length; n++) {
                var i = n > 0 ? t[n - 1] : !1,
                    o = t[n],
                    a = n + 1 < t.length ? t[n + 1] : !1,
                    r = i ? i.tagName + "_" + domData(i, "type") : "",
                    s = o ? o.tagName + "_" + domData(o, "type") : "",
                    u = a ? a.tagName + "_" + domData(a, "type") : "",
                    d = !1,
                    f = !1;
                r && s == r || (d = !0), u && s == u || (f = !0), l(o, "article_decoration_first", d), l(o, "article_decoration_last", f)
            }
        }

        function w(e) {
            e = e || {};
            var t = c("article");
            m.preloadMoreHash && u.post("article.php", { act: "load_more", rev: m.rev, hash: m.preloadMoreHash, article_owner_id: _.owner_id, article_id: _.id, audio_bridge: intval(m.audioBridge) }, {
                onDone: function(e, n) {
                    var i = ce("div", { innerHTML: e }),
                        o = c("article", i).children,
                        a = c("article_layer_prev_next", t);
                    a && a.remove(), "figure" !== t.lastChild.tagName.toLowerCase() && t.lastChild.remove();
                    for (var r = t.children.length; r < o.length;) t.appendChild(o[r]);
                    a && (t.appendChild(a), show(a));
                    var l = c("article_preload_spinner");
                    l && l.parentNode.removeChild(l), m.audiosList = n, s(), updateArticle()
                }
            }), e.paddingTop && setStyle(t, "marginTop", intval(e.paddingTop)), e.paddingBottom && setStyle(t, "marginBottom", intval(e.paddingBottom)), e.noDarkModeTransition && d(t, "article_dark_no_transition")
        }

        function y(e, t, n) {
            var i = gpeByClass("article_object_audioplaylist_webview", e);
            if (v && (f(v, "ai_playing"), v = !1), h) { var a = h; if (f(a, "article_object_audioplaylist_playing"), h = !1, a == i) return o["default"].send("audioPause", {}), console.log("audioPause (playlist)", {}), cancelEvent(n) }
            var r = g(t, m.audiosList),
                s = m.audiosList;
            return -1 == r && (s.unshift(t), r = 0), o["default"].send("audioPlay", { audioIds: s, pos: r }), console.log("audioPlay (playlist)", { audioIds: s, pos: r }), d(i, "article_object_audioplaylist_playing"), h = i, cancelEvent(n)
        }

        function b(e, t) {
            v && (f(v, "ai_playing"), v = !1), h && (f(h, "article_object_audioplaylist_playing"), h = !1), e = e.split("_"), e = e[0] + "_" + e[1];
            var n = ge("audio" + e);
            n && l(n, "ai_playing", "play" == t);
            for (var i = geByClass("_article_object_audioplaylist_webview"), o = 0; o < i.length; o++) { var a = (domData(i[o], "ids") || "").split(","); if (a.indexOf(e) >= 0 && "play" == t) { d(i[o], "article_object_audioplaylist_playing"), h = i[o]; break } }
        }
        return { init: e, fave: i, subscribe: n, toggleDarkMode: r, onWebViewShow: w, audioPlayPlaylist: y, onAudioStateChanged: b }
    }();
    window.Article = w
}, function() {
    var e = need("page"),
        t = need("audio"),
        n = need("onDOMReady"),
        i = need("audioplayer"),
        o = need("AudioSpecialForYou");
    window.hmAudioBlock = {},
        function() { n(a), hmAudioBlock._onSpecialPlayAllClick = r }();

    function a() { s(), t.onInit(s), t.onSelect(s), e.onChange(s) }

    function r() { l() ? i.playPause() : i.playFirst(), s() }

    function s() { o.setPlaying(t.playing() && l()) }

    function l() { var e = i.getCurrentElem(); return e && !!e.closest(o.selector) }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e(e, t) {
            var n = [],
                i = !0,
                o = !1,
                a = void 0;
            try { for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0); } catch (l) { o = !0, a = l } finally { try {!i && s["return"] && s["return"]() } finally { if (o) throw a } }
            return n
        }
        return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
    }();
    t.initArticle = h, t.updateArticle = g, t.deinitArticle = w;
    var o = n(113),
        a = n(198),
        r = n(159),
        s = void 0,
        l = void 0,
        c = void 0,
        u = void 0,
        d = void 0,
        f = void 0,
        p = void 0,
        _ = void 0,
        m = void 0,
        v = void 0;

    function h(e, t) { u = t || {}, p = e, window.cur && (window.cur.article = e), u.moderDeletePhoto = p.moderDeletePhoto, l = ge("article_view_" + e.owner_id + "_" + e.id), c = u.scrollNode || window, d = u.getScrollTop || function() { var e = document.scrollingElement || window.scrollNode || document.body; return e.scrollTop }, s = gpeByClass("article_body", l) || gpeByClass("_article_layer", l), b(), y(), B(), setTimeout(function() { c.click && c.click(), c.focus() }, 10), window.onBodyResize = window.onBodyResize || function() {}, window.cur && cur.destroy.push(function() { w() }), !u.mobile && window.AudioPlaylist && p.audiosList && p.audiosList.length > 0 && (cur.articlePlaylist = new AudioPlaylist(AudioPlaylist.TYPE_TEMP, p.owner_id, "article_" + p.id), cur.articlePlaylist.mergeWith({ list: p.audiosList })) }

    function g() { u.notFull = !1, y(), B(), k() }

    function w() { _ && (c.removeEventListener("scroll", _), _ = !1), m && (c.removeEventListener("scroll", m), m = !1), clearTimeout(v) }

    function y() {
        each(geByClass("_article_unmute_button"), function(e, t) {
            t.addEventListener("click", function() {
                var e = t.parentNode,
                    n = geByTag1("video", e);
                n.muted = !n.muted, toggleClass(e, "article_object_unmuted", !n.muted)
            })
        }), each(geByTag("figure", l), function(e, t) {
            var n = parseInt(domData(t, "type"));
            n == a.ParagraphType.ObjectPhoto && r.initPhotoCarousel(t, u), u.mobile || n != a.ParagraphType.ObjectPhoto || T(t)
        })
    }

    function b() { c.addEventListener("scroll", _ = function() { k() }, { passive: !0 }), k() }

    function k() {
        var e = { 101: -2e3 },
            t = d(),
            n = window.innerHeight,
            i = getXY(l)[1];
        each(geByTag("figure", l), function(o, a) {
            var r = intval(domData(a, "done"));
            if (!r) {
                var s = getH(a),
                    l = getXY(a)[1] - i,
                    c = intval(domData(a, "type")),
                    u = void 0 !== e[c] ? e[c] : 60,
                    d = t + n - u >= l && l + s - u >= t;
                r = C(d, c, a), r && domData(a, "done", 1)
            }
        })
    }

    function C(e, t, n) {
        var r = !1;
        switch (t) {
            case a.ParagraphType.ObjectPhoto:
                if (e) {
                    var s = geByTag1("img", n),
                        l = getW(s) || u.width,
                        c = domData(s, "baseurl");
                    if (c) c = o.imageProxyURL(c, { size: l }), a.preloadImage(c, function() { removeClass(s, "article_object_photo__image_blur"), s.src = c });
                    else {
                        var d = domQuery1("[data-sizes]", n),
                            f = JSON.parse(domData(d, "sizes"));
                        f.forEach(function(e, t) {
                            if (!(t > 3)) {
                                var n = a.getAppropriateImage(f[t], l, !0),
                                    o = i(n, 1),
                                    r = o[0];
                                a.preloadImage(r, function() { 0 == t && (removeClass(s, "article_object_photo__image_blur"), s.src = r) })
                            }
                        })
                    }
                    r = !0
                }
                break;
            case a.ParagraphType.ObjectGIF:
                if (!u.mobile) {
                    var p = geByTag1("video", n);
                    p ? e ? p.hasAttribute("autoplay") && p.play() : p.pause() : r = !0
                }
        }
        return r
    }
    var M = void 0,
        S = void 0,
        E = void 0;

    function T(e) {
        if (!u.noImageOpen) {
            var t = geByTag1("img", e),
                n = domQuery1("[data-sizes]", e),
                o = JSON.parse(domData(n, "sizes")),
                r = a.getAppropriateImage(o[0], window.innerWidth, !0),
                c = i(r, 3),
                d = c[0],
                p = c[1],
                _ = c[2],
                m = P({ width: p, height: _ }, { width: window.innerWidth, height: window.innerHeight }),
                v = getW(e) < m.width && getH(e) < m.height;
            if (d && v) {
                var h = geByClass1("article_photo_carousel__controls", e) || t;
                addClass(h, "article_image_full_viewable");
                var g = data(e, "changePhotoFunction");
                h.addEventListener("click", function() {
                    var t = intval(domData(e, "photo-carousel-index"));
                    addClass(s, "article_no_scroll");
                    var n = geByTag1("figcaption", e),
                        i = se('<div class="article_full_view"><img class="article_full_view__image"></div>');
                    n && n.innerHTML && i.appendChild(se('<div class="article_full_view__caption"><div class="article_full_view__caption_inner">' + n.innerHTML + "</div></div>")), o.length > 1 && (toggleClass(E, "article_full_view__carousel", o.length > 1), M = se('<div class="article_full_view__right"></div>'), i.appendChild(M), S = se('<div class="article_full_view__left"></div>'), i.appendChild(S), M.addEventListener("click", function(e) { return t = Math.min(o.length - 1, Math.max(0, t + 1)), x(a, o, t), g && g(1), cancelEvent(e) }), S.addEventListener("click", function(e) { return t = Math.min(o.length - 1, Math.max(0, t - 1)), x(a, o, t), g && g(-1), cancelEvent(e) })), E = se('<div class="article_full_view__counter"><div class="article_full_view__counter_text"></div><div class="article_full_view__close"></div></div>'), i.appendChild(E), o.length > 1 && toggleClass(E, "article_full_view__carousel", o.length > 1), l.appendChild(i), i.addEventListener("click", function(e) { domClosest("article_full_view__caption_inner", e.target) || I() }), i.addEventListener("mousewheel", I), f = i;
                    var a = geByTag1("img", i);
                    x(a, o, t)
                })
            }
        }
    }
    var A = void 0;

    function x(e, t, n) {
        if (toggleClass(S, "article_full_view__nav_hidden", 0 == n), toggleClass(M, "article_full_view__nav_hidden", n == t.length - 1), t.length > 1) {
            var o = geByClass1("article_full_view__counter_text", E);
            o.innerHTML = getLang("global_article_carousel_counter").replace("{counter}", n + 1).replace("{total}", t.length)
        }
        A = n;
        var r = a.getAppropriateImage(t[n], window.innerWidth, !0),
            s = i(r, 3),
            l = s[0],
            c = s[1],
            u = s[2],
            d = P({ width: c, height: u }, { width: window.innerWidth, height: window.innerHeight }),
            f = !1,
            p = a.preloadImage(l, function() {
                if (A === n) {
                    f = !0, d.width && isNumeric(d.width) ? setStyle(e, { width: d.width, height: d.height }) : setStyle(e, { width: null, height: null }), e.src = l, removeClass(e, "article_full_view__image_blurred");
                    for (var o = n; o < Math.min(n + 3, t.length); o++) {
                        var r = a.getAppropriateImage(t[o], window.innerWidth, !0),
                            s = i(r, 1),
                            c = s[0];
                        a.preloadImage(c)
                    }
                }
            });
        if (p) removeClass(e, "article_full_view__image_blurred");
        else {
            var _ = a.getAppropriateImage(t[n], 200, !0),
                m = i(_, 1),
                v = m[0];
            a.preloadImage(v, function() { A === n && (f || (setStyle(e, { width: d.width, height: d.height }), e.src = v)) }), addClass(e, "article_full_view__image_blurred")
        }
    }

    function I() { return f ? (re(f), s && removeClass(s, "article_no_scroll"), f = !1, !0) : !1 }

    function P(e, t) {
        var n = e.width / e.height,
            i = t.width / t.height,
            o = {};
        return n > i ? (o.width = Math.min(t.width, e.width), o.height = e.height * (o.width / e.width)) : (o.height = Math.min(t.height, e.height), o.width = o.height * n), o
    }

    function B() {
        if (!u.notFull) {
            var e = getH(l),
                t = getXY(l)[1] - scrollGetY(),
                n = window.innerHeight,
                i = Date.now(),
                o = -1,
                r = void 0,
                s = [];
            _(0);

            function f() { return Math.round((Date.now() - i) / 1e3) }

            function _(e) {
                if (!(o >= e)) {
                    for (var t = o + 1; e >= t; t++) s.push(t);
                    if (o = e, clearTimeout(r), r = setTimeout(h, 100), 3 == e && p.ttr) {
                        var n = p.ttr - f();
                        n > 0 && (v = setTimeout(function() { document.hidden || (o = 4, s = [o], h()) }, 1e3 * n))
                    }
                }
            }

            function h() { s.length && (ajax.post(window.isMVK ? "article.php" : "al_articles.php", { act: "stats", scroll: s.join(","), spent: f(), hash: p.access_hash, article_owner_id: p.owner_id, article_id: p.id, is_web_view: u.isWebView ? 1 : 0, post_id: u.postId, ref: window.cur ? window.cur.module : "" }), s.forEach(function(e) { a.mailruStatsPixel("scroll_" + e, p.mailruStatsData) }), s = []) }

            function g() {
                var i = d();
                i > 0 && _(1);
                for (var o = 1; 4 > o; o++) i + 3 * n / 4 > t + e * o / 3 && _(o + 1);
                i + n > e - 20 && _(4)
            }
            c.addEventListener("scroll", m = g, { passive: !0 }), g()
        }
    }
    window.initArticle = h, window.deinitArticle = w, window.updateArticle = g, window.articleCloseImageFullSize = I
}, function() {
    Object.assign(Oval, { setValue: t });
    var e = { hidden: "Oval_hidden" };

    function t(t, n) {
        if (t) {
            var i = Oval_isHidden(n);
            t.innerText = n, t.classList.toggle(e.hidden, i)
        }
    }
}, function() {
    var e = {
        onClose: befall(),
        inited: !1,
        width: !1,
        height: !1,
        onResize: null,
        _lastNav: !1,
        _opened: !1,
        _destroy: !1,
        init: function() { e.inited || (e.inited = !0, e.initEvents()) },
        initEvents: function() {
            var t = function(t) { e.fixHeight(vkNow() + 2e3, t) };
            addEvent(window, "orientationchange", t), onBodyResize(t), t(!0)
        },
        opened: function() { return hasClass("z_opened", window.bodyNode) !== e.opened && toggleClass("z_opened", window.bodyNode, e._opened), e._opened },
        toggle: function(t, n) { return checkEvent(t) ? !0 : (e.opened() ? e.close(t, n) : e.open(t, n), !1) },
        open: function(t) { return checkEvent(t) ? !0 : e.opened() ? !1 : (thover.clear(), e.init(), e._st = scrollTop(), e._lastNav = !1, addClass("z_opened", window.bodyNode), e._opened = !0, e.fixHeight(vkNow() + 2e3, !0), scrollTop(0), !1) },
        close: function(t) { return checkEvent(t) ? !0 : e.opened() ? (thover.clear(), val("z", ""), removeClass("z_opened", window.bodyNode), e._lastNav = { cur: nav.cur, path: nav.path, params: nav.params, hash: nav.hash }, e._opened = !1, e._destroy && (e._destroy(), e._destroy = !1), scrollTop(e._st, 1), e._st = !1, e.onResize = null, e.onClose(), !1) : !1 },
        updateSize: function() {
            var t = ge("z");
            t && t.offsetWidth && t.offsetHeight && (e.width = t.offsetWidth, e.height = t.offsetHeight, e.onResize && e.onResize())
        },
        fixHeight: function(t, n) {
            if ((e._opened || n) && (t && !(vkNow() > t) || n)) {
                var i = getCw(),
                    o = getCh();
                (e._lastWidth != i || e._lastHeight != o || n) && (e._lastWidth = i, e._lastHeight = o, setStyle("z", "height", o), e.updateSize(), scrollTop() || scrollTop(0)), clearTimeout(e._fixTo), e._fixTo = setTimeout(e.fixHeight, 50, t)
            }
        },
        create: function(t, n) { val("z", t), e._destroy = n }
    };
    window.zlayer = e
}, function() {
    var e = need("$"),
        t = need("Btn");
    window.PrivacyPolicy = {},
        function() { PrivacyPolicy._onAcceptToggle = i }();
    var n = { submit: ".PrivacyPolicy__submit" };

    function i(i) {
        var o = i.checked,
            a = e(n.submit);
        t.toggleDisabled(a, !o)
    }
}, function() {
    var e = window,
        t = e.parseRusKeys,
        n = e.parseLatKeys,
        i = e.parseLat,
        o = e.parseCyr,
        a = e.escapeRE,
        r = e.val,
        s = e.onBodyScrollForce,
        l = e.extend,
        c = e.len,
        u = e.removeClass,
        d = e.geByClass1,
        f = e.addClass,
        p = e.show,
        _ = e.hide,
        m = e.alLoadingFix,
        v = e.cancelEvent,
        h = e.elfocus,
        g = e.elblur,
        w = e.ge,
        y = e.addEvent,
        b = e.attr,
        k = e.initAutoScroll,
        C = window,
        M = C.ajax;

    function S(e) {
        S.getQueryREs = lt;
        var C, E, T, A, x, I, P, B, L, N, O, H = [],
            D = {},
            j = {},
            R = {},
            q = {},
            F = !1,
            U = null,
            z = null,
            $ = null,
            V = 0,
            W = [],
            X = null,
            Y = null,
            G = null,
            K = !1,
            Q = !1,
            J = 10,
            Z = 30,
            et = !0,
            tt = !1,
            nt = !1,
            it = !1,
            ot = 0,
            at = 0,
            rt = !1,
            st = e && "au_search_field" === e.field && b(w(e.field), "data-newsearch");

        function lt(e) { e = e.replace(/https?:\/\/(m\.)?vk\.com\/([^#]+#\/)?/, ""); for (var r, s, l, c = Q, u = [e, s = t(e, c) || e, l = n(e, c) || e, i(s), o(l)], d = {}, f = [], p = 0, _ = u.length; _ > p; p++) u[p] && !d[u[p]] && (d[u[p]] = !0, r = a(u[p]), r = r.replace(/[�]/gi, "[�]").replace(/(e|yo)/gi, "(?:e|yo)"), f.push(new RegExp("(^|\\s|\\(|>)(" + r + ")", "gi"))); return f }

        function ct(e, t, n) {
            if (clearTimeout(z), !n) return z = setTimeout(function() { ct(e, t, !0) }, 10), !1;
            var i = r(e) || "";
            if (U == i) return !1;
            var o, a = "_" + i,
                l = j[a],
                c = lt(i);
            if (!st && !l && i.length > 2 && j["_" + i.slice(0, -2)]) {
                var u = "_" + i.slice(0, -2);
                j[u] && q[u] && !j[u].length && (!it || it && !R[u]) && (q[a] = !0, l = j[a] = [], it && (R[a] = ""))
            }
            if (!l) {
                l = [];
                var d = 0;
                if (!i && H.length)
                    for (var f = V, p = V + Math.min(J, H.length); p > f; f++) l.push([H[f]]), d++;
                else {
                    for (var _ = {}, m = 0, f = 0, p = H.length; p > f; f++) {
                        var v = H[f];
                        if (D[v]) {
                            if (_[v] = !0, (o = dt(c, D[v][0])) && (l.push([v, o]), ++m >= Z)) break;
                            d++
                        }
                    }
                    if (Z > m)
                        for (var v in D)
                            if (!_[v] && (o = dt(c, D[v][0]))) {
                                if (l.push([v, o]), ++m >= Z) break;
                                d++
                            }
                }
                q[a] = q[a] || !i && H.length || l.length > 2 * J, q[a] = q[a] || it && l.length > J
            }
            return q[a] || !et && !it || P || ut(e, i), j[a] = l, U = i, ft(l, R[a]), L && L(i), nt && !U && (ot = J), s(), !1
        }

        function ut(e, t, n) {
            var i = st ? 800 : 200;
            return clearTimeout($), n ? (M.post(C, { _ajax: 1, q: t }, {
                onDone: function(n, i, o) {
                    B && B.apply(null, arguments);
                    for (var a, r = "_" + t, d = j[r] || [], f = {}, p = lt(t), _ = 0, m = d.length; m > _; _++) f[d[_][0]] = !0;
                    for (var _ = 0, m = i.length; m > _; _++) {
                        var v = i[_];
                        f[v] || ((a = dt(p, n[v][0])) || K || !t) && d.push([v, a])
                    }
                    q[r] = !0, j[r] = d, it && (R[r] = o || ""), D = l(n, D), et = !tt || c(D) < tt, U == t ? (ft(d, R[r]), s()) : delete j[r], u("input_loading", e)
                },
                onFail: function() { delete j["_" + t], u("input_loading", e) }
            }), void(d("al_loading", T) || f("input_loading", e))) : ($ = setTimeout(function() { ut(e, t, !0) }, i), !1)
        }

        function dt(e, t) {
            if (!t) return !1;
            var n = [t],
                i = /([�])/gi; - 1 !== t.search(i) && n.push(t.replace(i, ""));
            for (var o = 0; o < n.length; o++)
                for (var a = 0, r = e.length; r > a; a++)
                    if (-1 !== n[o].search(e[a])) return e[a];
            return !1
        }

        function ft(e, t) {
            var n = "";
            if (Y && T) {
                for (var i = 0, o = e.length; o > i; i++) {
                    var a = e[i][0],
                        s = e[i][1];
                    if (D[a]) {
                        var l = D[a].slice(1);
                        if (s)
                            for (var c in W) {
                                var d = W[c];
                                l[d] && (l[d] = l[d].replace(s, '$1<em class="found">$2</em>'))
                            }
                        n += Y.apply({ id: a, q: U, highlight: function(e) { return ("" + e).replace(s, '$1<em class="found">$2</em>') }, template: function(e, t) { var n = ("" + e).replace(/%(\d+)%|#(\d+)#/g, function(e, n, i) { return +i ? ("" + t[i - 1]).replace(s, '$1<em class="found">$2</em>') : +n ? t[n - 1] || "" : "" }); return n } }, l)
                    }
                }
                n || q["_" + U] || !et && !it || P || (u("input_loading", A), n = U ? '<div class="al_loading qs_loading">&nbsp;</div>' : '<div id="al_loading"></div>'), !n && G && (n = G(U)), r(T, X ? X(n, U, nt, t) : n + (t || "")), I && (U ? p(I) : _(I)), !U && m(), N && N()
            }
        }
        l(this, {
            go: function(e) { return A ? (ct(A, e, !0), A.blur(), v(e), !1) : !0 },
            redraw: function() {
                var e = "_" + U;
                ft(j[e], R[e]), s()
            },
            clear: function(e, t) { return r(A, ""), t ? h(A) : g(A), ct(A, e, !0), v(e), !1 },
            blur: function() { g(A) },
            init: function(e) {
                e = e || {}, T = w(e.container) || null, A = w(e.field) || null, x = w(e.btn) || null, I = w(e.clear_btn) || null, U = null, F && C == e.action && e.init_once || (j = {}, R = {}, q = {}, C = e.action || "", E = e.al_action || C, H = e.top_items || [], D = e._cache || {}, W = e.hl_fields || [], X = e.tpl || null, Y = e.item_tpl || null, G = e.null_tpl || null, K = e.soft_filter || !1, Q = e.need_invalid_keys || !1, J = e.top_len || 10, tt = e.load_limit || !1, B = e.onLoaded || !1, L = e.onFiltered || !1, N = e.onRendered || !1, O = e.onFocusChanged || !1, nt = e.al_need || !1, V = !nt && e.init_offset || 0, it = e.global_search || !1, P = e.no_search_query || !1);
                var t = null;
                C && T && A && Y && (et = C !== !0 && (!tt || c(D) < tt), y(A, "focus", function(e) {
                    var n = function i(n) {!n && ct(A, e, !0), t = setTimeout(i, 100) };
                    clearTimeout(t), O && O.call({ q: U }, !0), n(!0)
                }), y(A, "keydown keypress change blur", function(e) { "blur" == e.type && (clearTimeout(t), O && O.call({ q: U }, !1)), ct(A, e, "keydown" != e.type && "keypress" != e.type) }), e._new || x && !b(x, "onclick") && b(x, "onclick", "return qsearch.go(event);"), !nt || F && e.init_once || (ot = J, at = c(D), k(function() {
                    var e = d("_si_container", T) || T,
                        t = e.childNodes;
                    return t[ot] || t[t.length - 1]
                }, function() {
                    var e = d("_si_container", T) || T;
                    if (!rt && !U)
                        if (ot + J > at && et) rt = !0, f(e, "_si_container_loading"), M.post(E, { _ajax: 1, offset: at }, {
                            onDone: function(t, n) {
                                B && B.apply(null, arguments);
                                var i = c(t);
                                if (rt = !1, u(e, "_si_container_loading"), tt || (H = H.slice(0, at).concat(n)), at += i, D = l(t, D), et = C !== !0 && (!tt && i || c(D) < tt), !U) {
                                    ot += J;
                                    for (var o = [], a = 0, r = Math.min(ot, H.length); r > a; a++) o.push([H[a]]);
                                    ft(o, R._), s()
                                }
                            },
                            onFail: function() { rt = !1, u(e, "_si_container_loading") }
                        });
                        else if (ot < H.length) {
                        ot += J;
                        for (var t = [], n = 0, i = Math.min(ot, H.length); i > n; n++) t.push([H[n]]);
                        ft(t, R._), s()
                    }
                })), !e.skip_init_filter && ct(A, null, !0), F = !0)
            }
        }), e && this.init(e)
    }
    var E = new S;
    window.QuickSearch = S, window.qsearch = E
}, function() {
    var e = [window.Element, window.CharacterData, window.DocumentType],
        t = [];
    e.forEach(function(e) { e && t.push(e.prototype) }),
        function(e) { e.forEach(function(e) { e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function() { null !== this.parentNode && this.parentNode.removeChild(this) } }) }) }(t)
}, function() {
    Object.assign(window, { asc: e, desc: t, unique: n, first: i, last: o, toInt: a, toArray: r, groupBy: s });

    function e(e, t) { return e - t }

    function t(e, t) { return t - e }

    function n(e, t, n) { return n.indexOf(e) === t }

    function i(e, t) { return 1 === arguments.length ? e[0] : t.slice(0, e) }

    function o(e, t) { return 1 === arguments.length ? e[e.length - 1] : t.slice(-e) }

    function a(e) { return parseInt(e, 10) }

    function r(e) { return "[object Object]" === Object.prototype.toString.call(e) ? Object.keys(e).map(function(t) { return e[t] }) : Array.isArray(e) ? e : [e] }

    function s(e, t) {
        var n = {};
        return e.forEach(function(e) {
            var i = t(e);
            (n[i] || (n[i] = [])).push(e)
        }), n
    }
}, function() {
    var e = t(["\n    <", ' class="', '" ', " ", ">\n      ", "\n    </", ">\n  "], ["\n    <", ' class="', '" ', " ", ">\n      ", "\n    </", ">\n  "]);

    function t(e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
    window.Brick = n;

    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = q.list(t.inner),
            i = void 0,
            o = void 0;
        return t.url ? (i = "a", o = q.attr("href", t.url)) : (i = t.tag || "div", o = ""), q.html(e, i, t.mix, o, t.attrs, n, i)
    }
}, function() {
    Object.assign(uMailHat, { onUnreadClick: befall(), onBackClick: befall(), onBackToDialogClick: befall(), onCancelEditing: befall(), setModifiers: MailHat_convo.setModifiers, redrawCounter: a, redrawOnline: s, redraw: o, startStatusUpdate: n, cancelStatusUpdate: i }),
        function() { MailHat_main.onUnreadClick(uMailHat.onUnreadClick), MailHat_main.onBurgerClick(menu.open), MailHat_main.onCancelForwardTap(uMailHat.onBackToDialogClick), MailHat_convo.onBackTap(uMailHat.onBackClick), MailHat_convo.onCancelEditingTap(uMailHat.onCancelEditing), uVK.onReady(t), uVK.onReady(r), page.onChange(r) }();
    var e = void 0;

    function t() {
        if (store.mail && store.mail.cur) {
            var e = store.mail.cur.peerId;
            e && n()
        }
    }

    function n() {
        var t = store.mail.cur.peerId,
            o = 3e4;
        return t ? void(e = setTimeout(function() { s(), n() }, o)) : void i()
    }

    function i() { e && clearTimeout(e) }

    function o() { $$(".mailHat").forEach(function(e) { return e.outerHTML = uMailHat() }) }

    function a() {
        if (!nav.getQuery("community")) {
            var e = geBySel1(".mmi_mail .mm_counter2"),
                t = store.mail.cur.countUnread;
            t > 0 ? (e.innerText = t, attr(e, "style", "display: inline")) : hide(e), MailHat_main.setUnreadCount(t)
        }
    }

    function r() { return }

    function s() {
        var e = window.lang,
            t = store.mail,
            n = t.cur,
            i = t.peers,
            a = n.peerId;
        if (a) {
            var r = i[a];
            if (r.lastActionTime && !r.isOnline) {
                var s = n.timeshift,
                    c = l(r.lastActionTime, s);
                r.offlineText = langSex(r.sex, e.mobile_mail_last_activity_tip).replace("{time}", c)
            }
            o()
        }
    }

    function l(e, t) {
        var n = window.lang,
            i = "";
        e += t;
        var o = parseInt(Date.now() / 1e3) - e;
        if (60 > o) i = n.mobile_profile_status_just_now;
        else if (3600 > o) {
            var a = intval(o / 60);
            i = langWordNumeric(a, n.mobile_profile_status_word_mins_ago, n.mobile_profile_status_mins_ago)
        } else if (14400 > o) {
            var r = intval(o / 3600);
            i = langWordNumeric(r, n.mobile_profile_status_word_hours_ago, n.mobile_profile_status_hours_ago)
        } else i = c(e);
        return i
    }

    function c(e) {
        var t = 1e3 * e,
            n = new Date(t),
            i = new Date,
            o = window.lang;
        return n.getFullYear() != i.getFullYear() && n.getTime() < i.getTime() - 1728e5 || Math.abs(n.getTime() - i.getTime()) > 157248e5 ? langDate(t, o.mobile_mail_date, 0, o.months_sm_of, !1) : langDate(t, o.mobile_mail_short_date_time, 0, o.months_sm_of, !1)
    }
}, function() {
    var e = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    o = !1,
                    a = void 0;
                try { for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0); } catch (l) { o = !0, a = l } finally { try {!i && s["return"] && s["return"]() } finally { if (o) throw a } }
                return n
            }
            return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
        }(),
        t = window,
        n = t.preventEvent,
        i = t.val,
        o = t.ce,
        a = t.replaceEntities,
        r = t.elfocus,
        s = t.parseLat,
        l = t.parseCyr,
        c = t.show,
        u = t.hide,
        d = t.extend,
        f = (t.isEmpty, t.nav),
        p = t.addEvent,
        _ = t.trim,
        m = (t.cancelEvent, t.geByClass),
        v = t.getXY,
        h = t.domPS,
        g = t.domNS,
        w = t.browser,
        y = function() {
            var t = { UP: 38, DOWN: 40, RETURN: 13, ESC: 27 },
                y = "MentionContainer_opened",
                b = "Mention_inited",
                k = "Mention_noScroll",
                C = "MentionItem_active",
                M = {},
                S = {},
                E = !1;
            T();

            function T() { M = { ignoredTerm: null, curValue: "", curTerm: "", curPos: "", input: {} }, S = { container: null, scroll: null, index: {}, cache: {}, shown: [], lastQ: null, text: null, requestTimer: null, opts: {} } }
            var A = !0;

            function x() { A = !1 }

            function I() {
                if (!E) {
                    var e = w.ipad ? "touchend" : "click";
                    E = !0, p(window, e, H), p(window, "touchmove", x), f.onBeforeGo(H)
                }
            }

            function P() {
                if (E) {
                    var e = w.ipad ? "touchend" : "click";
                    removeEvent(window, e, H), removeEvent(window, "touchmove", x), f.onBeforeGo.off(H), E = !1
                }
            }

            function B(e) {
                if (void 0 !== e.selectionStart) return e.selectionStart !== e.selectionEnd ? e.selectionEnd : e.selectionStart;
                if ("undefined" != typeof window.getSelection) {
                    var t = window.getSelection();
                    if (!t || !t.rangeCount) return 0;
                    var n = t.getRangeAt(0),
                        a = n.cloneRange(),
                        r = o("div");
                    return a.selectNodeContents(e), a.setEnd(n.startContainer, n.startOffset), r.appendChild(a.cloneContents()), i(r).replace(/\n$/, "").length
                }
                return 0
            }

            function L() {
                var e = i(M.input),
                    t = Math.max(e.lastIndexOf("@"), e.lastIndexOf("*")),
                    n = !1;
                if (t > -1) {
                    var o = B(M.input),
                        a = e.substr(0, o);
                    t = Math.max(a.lastIndexOf("@"), a.lastIndexOf("*"));
                    var r = a.match(/(^|[\s.,:\'\"\u00BB\u00AB;>\)\(]|\#[\w_\.\u0400-\u04FF]+)[@\*]([^,@\*\(\)\?\!\s\n\r \u00A0]*)$/);
                    r && "." !== r[2].substr(-1) && (n = r[2])
                }
                n === !1 && delete M.ignoredTerm, void 0 !== M.ignoredTerm && n == M.ignoredTerm && (n = !1), M.curValue = e, M.curTerm = n, M.curPos = t, S.text = n, Y()
            }

            function N(e) { M.input = e }

            function O() { document.addEventListener("click", D, !0), addClass(y, S.opts.appendTo), c(S.container), I() }

            function H(e) { return w.ipad && !A ? void(A = !0) : void(e && e.target && gpeByClass(b, e.target) && !gpeByClass("uMailWrite__button", e.target) && !hasClass("uMailWrite__button", e.target) || hasClass(y, S.opts.appendTo) && (removeClass(y, S.opts.appendTo), u(S.container), P())) }

            function D(e) {
                var t = e.target;
                t && !gpeByClass(b, t) && (e.preventDefault(), e.stopImmediatePropagation(), H()), document.removeEventListener("click", D, !0)
            }

            function j() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                T(), S.opts = d({ appendTo: document.body, url: "hints", params: { act: "a_json_friends", from: "composer" }, delimeter: /[\s\(\)\.,\-]+/g, requestWait: 300, wholeIndex: 2, maxItems: 51, searchKeys: [1, 4], defaultItems: [], items: [], afterInsert: function() {} }, e), addClass("Mention_inited", S.opts.appendTo), S.scroll && removeClass(k, S.scroll), R()
            }

            function R() {
                var e = S.opts.defaultItems,
                    t = S.opts.items,
                    n = [],
                    i = void 0,
                    o = void 0;
                for (i = 0, o = e.length; o > i; ++i) n.push(i);
                for (S.cache[""] = n, i = 0, o = t.length; o > i; ++i) q(i, t[i])
            }

            function q(e, t) {
                var n = void 0,
                    i = void 0,
                    o = void 0,
                    a = "",
                    r = S.opts.searchKeys,
                    c = {};
                for (n = 0, o = r.length; o > n; ++n) a += " " + (t[r[n]] || "").replace(S.opts.delimeter, " ").replace(/<[^>]*>/g, "");
                for (a += (s(a) || "") + (l(a) || ""), a = _(a.toLowerCase()).split(/\s+/), n = 0; n < a.length; n++)
                    for (i = 1; i <= S.opts.wholeIndex; i++) {
                        var u = a[n].substr(0, i);
                        c[u] || (S.index[u] || (S.index[u] = []), S.index[u].push(e), c[u] = 1)
                    }
            }

            function F() {
                var e = _(S.text);
                e && ajax.post(S.opts.url, d({ str: e, mobile: 1 }, S.opts.params || {}), { onDone: function(t) { S.cache[e] = U(e).concat(t), $(S.cache[e], !0, !0) } })
            }

            function U(e) {
                if (e = _(e.toLowerCase().replace(S.opts.delimeter, " ")), !e) return S.cache[""];
                var t = S.opts.wholeIndex;
                if (e.length <= t && -1 === e.indexOf(" ")) return S.index[e] || [];
                e = e.split(" ");
                var n = 0,
                    i = "",
                    o = void 0,
                    a = void 0;
                for (o = 0, a = e.length; a > o; ++o) {
                    var r = e[o].substr(0, t),
                        c = S.index[r];
                    if ((!i || !c || c.length < n) && (n = c ? c.length : 0, i = r), !n) return []
                }
                var u = [],
                    d = S.opts.searchKeys,
                    f = d.length,
                    p = e.length;
                for (o = 0, a = S.index[i].length; a > o; ++o) {
                    for (var m = S.index[i][o], v = S.opts.items[m], h = !1, g = "", w = 0; f > w; ++w) g += " " + (v[d[w]] || "").replace(S.opts.delimeter, " ").replace(/<[^>]*>/g, "");
                    g += (s(g) || "") + (l(g) || ""), g = g.toLowerCase();
                    for (var y = 0; p > y; ++y)
                        if (-1 === g.indexOf(" " + e[y])) { h = !0; break }
                    h || u.push(m)
                }
                return u
            }

            function z(e, t) {
                if (S.cache[""]) {
                    if (t = void 0 !== t ? t : _(S.text), S.lastQ === t && !e) return void O();
                    S.lastQ = t, clearTimeout(S.requestTimer);
                    var n = S.cache[t];
                    n ? $(n, !0) : (n = U(t), $(n, !S.opts.url), S.opts.url && (S.requestTimer = setTimeout(F, S.opts.requestWait)))
                }
            }

            function $(e) {
                var t = [];
                S.shown = [];
                for (var a = e.slice(0, S.opts.maxItems), r = 0, s = a.length; s > r; ++r) {
                    var l = a[r];
                    isArray(l) || (l = S.opts.items[l]), S.shown[l[0]] || (S.shown[l[0]] = l, t.push(G(l)))
                }
                S.container && S.opts.appendTo.contains(S.container) || (S.container = o("div"), addClass("Mention", S.container), S.scroll = o("div"), addClass("ScrollView Mention__scroll", S.scroll), S.opts.appendTo.appendChild(S.container), S.container.appendChild(S.scroll), p(S.scroll, "touchmove", function(e) { hasClass(k, S.scroll) && n(e) })), toggleClass("Mention_empty", S.container, !t.length), i(S.scroll, t.join("")), S.scroll.scrollTop = 0, J(), setTimeout(function() { toggleClass(k, S.scroll, !V()) }, 0)
            }

            function V() { return w.ios || w.ipad ? S.scroll.scrollHeight > S.scroll.offsetHeight ? !0 : !1 : !0 }

            function W() {
                var e = ge("mhead").offsetHeight,
                    t = S.container.getBoundingClientRect(),
                    n = M.input.offsetHeight,
                    i = "Mention_openToBottom",
                    o = parseInt(getStyle(S.scroll, "maxHeight"), 10),
                    a = !1;
                a = hasClass(i, S.container) ? t.top - n - o < e : t.bottom - o < e;
                var r = v(M.input);
                r[1] >= e + o && (a = !1), toggleClass(i, S.container, a), toggleClass(i, S.opts.appendTo, a)
            }

            function X() { z(!1, M.curTerm), O(), W() }

            function Y() { M.curTerm === !1 ? H() : X() }

            function G(t) {
                var n = e(t, 4),
                    i = n[0],
                    o = n[1],
                    a = n[2],
                    r = n[3];
                return '<div class="MentionItem" onclick="Mention.onSelect(\'' + i + '\');" onmouseover="Mention.onItemHover(this);">\n              <div class="MentionItem__cell">\n                <img src="' + r + '" class="MentionItem__img"/>\n              </div>\n              <div class="MentionItem__cell MentionItem__cell_name">\n                <div class="MentionItem__name">' + o + '</div>\n                <div class="MentionItem__tag">' + a + "</div>\n              </div>\n            </div>"
            }

            function K(e) {
                var t = S.shown[e];
                t && it(t), H()
            }

            function Q() {
                var e = geByClass1(C, S.container),
                    t = e.offsetTop;
                S.scroll.scrollTop = t - e.offsetHeight - parseInt(getStyle(S.scroll, "paddingTop"), 10)
            }

            function J() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = m("MentionItem", S.container);
                if (t.length) {
                    var n = t.find(function(e) { return hasClass(C, e) });
                    e ? (removeClass(C, n), addClass(C, e)) : n || addClass(C, t[0])
                }
            }

            function Z() { var e = geByClass1(C, S.container); return e ? (e.click(), !0) : !1 }

            function et() {
                var e = geByClass1(C, S.container);
                if (e) {
                    var t = h(e);
                    t && (J(t), Q())
                } else J(), Q()
            }

            function tt() {
                var e = geByClass1(C, S.container);
                if (e) {
                    var t = g(e);
                    t && (J(t), Q())
                } else J(), Q()
            }

            function nt(e) { J(e) }

            function it(e) {
                if (!e) return !1;
                var t = e[2].replace("@", ""),
                    n = e[8] || e[1],
                    o = M.curValue.substr(0, M.curPos),
                    s = M.curValue.substr(M.curPos),
                    l = o.match(/\#[\w_\.\u0400-\u04FF]+$/i) ? !0 : !1;
                n = a(n);
                var c = new RegExp("^(@|\\*)" + escapeRE(M.curTerm) + "(?:\\s+\\((?:(.*?)\\))?\\s*)?", "");
                return s = s.replace(c, function(e, i) { var o = i + t + " "; return l || (o += "(" + n.replace(/[\(\)\]\[]/g, "") + ") "), o }), l || !o || o.match(/[\.\(\)\?\!\s\n\r\'\"\u00BB\u00AB \u00A0]$/) || (s = " " + s), H(), i(M.input, o + s), r(M.input), S.opts.afterInsert && S.opts.afterInsert(M.input), !1
            }

            function ot(e, n) { e.keyCode !== t.UP && e.keyCode !== t.DOWN && (z(!0), N(n), L()) }

            function at(e, t) { setTimeout(function() { N(t), L() }, 0) }

            function rt(e) { hasClass(y, S.opts.appendTo) && (e.keyCode === t.UP ? (et(), e.preventDefault()) : e.keyCode === t.DOWN ? (tt(), e.preventDefault()) : e.keyCode === t.RETURN ? Z() && e.preventDefault() : e.keyCode === t.ESC && (H(), e.preventDefault())) }
            return { onKeyUp: ot, onKeyDown: rt, onFocus: at, onClick: at, onSelect: K, onItemHover: nt, init: j }
        }();
    window.Mention = y
}]);
/*752*/