! function(e) {
    var t = {};

    function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports }
    return r.m = e, r.c = t, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) { return e[t] }.bind(null, o));
        return n
    }, r.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = 226)
}({
    201: function(e, t, r) {
        var n = r(46),
            o = window,
            i = o.onDOMReady;
        i(function() { try { n.initGrip() } catch (e) {} })
    },
    226: function(e, t, r) { e.exports = r(201) },
    46: function(e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.initGrip = n;

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function n() {
            var e = 7,
                t = "remixgp",
                r = { preprocessor: function(e, t) { return "user_agent" === e ? [] : t }, excludeLanguage: !0 };
            new o(r).get(function(r) { getCookie(t) !== r && setCookie(t, r, e, 1) })
        }
        var o = function() {
            function e(t) {
                r(this, e);
                var n = { detectScreenOrientation: !0, sortPluginsFor: [/palemoon/i], excludeDoNotTrack: !0 };
                this.options = e.extend(t, n), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
            }
            return e.extend = function(e, t) { if (null == e) return t; for (var r in e) null != e[r] && t[r] !== e[r] && (t[r] = e[r]); return t }, e.prototype.get = function(t) {
                var r = this,
                    n = { data: [], addPreprocessedComponent: function(e) { var t = e.value; "function" == typeof r.options.preprocessor && (t = r.options.preprocessor(e.key, t)), n.data.push({ key: e.key, value: t }) } };
                n = this.userAgentKey(n), n = this.languageKey(n), n = this.colorDepthKey(n), n = this.deviceMemoryKey(n), n = this.pixelRatioKey(n), n = this.hardwareConcurrencyKey(n), n = this.screenResolutionKey(n), n = this.availableScreenResolutionKey(n), n = this.timezoneOffsetKey(n), n = this.sessionStorageKey(n), n = this.localStorageKey(n), n = this.indexedDbKey(n), n = this.addBehaviorKey(n), n = this.openDatabaseKey(n), n = this.cpuClassKey(n), n = this.platformKey(n), n = this.doNotTrackKey(n), n = this.pluginsKey(n), n = this.canvasKey(n), n = this.webglKey(n), n = this.webglVendorAndRendererKey(n), n = this.adBlockKey(n), n = this.hasLiedLanguagesKey(n), n = this.hasLiedResolutionKey(n);
                try { n = this.hasLiedOsKey(n), n = this.hasLiedBrowserKey(n) } catch (o) {}
                n = this.touchSupportKey(n), n = this.customEntropyFunction(n), n = this.isJavaEnabled(n), n = this.getMimeTypes(n), n = this.wheelEvent(n), n = this.boundingClientRect(n), n = this.has3d(n), n = this.silverlight(n);
                var i = [];
                r.each(n.data, function(e) {
                    var t = e.value;
                    t && "function" == typeof t.join && (t = t.join(";")), i.push(t)
                });
                var a = e.x64hash128(i.join("~~~"), 31);
                return t(a, n.data)
            }, e.prototype.customEntropyFunction = function(e) { return "function" == typeof this.options.customFunction && e.addPreprocessedComponent({ key: "custom", value: this.options.customFunction() }), e }, e.prototype.userAgentKey = function(t) { return this.options.excludeUserAgent || t.addPreprocessedComponent({ key: "user_agent", value: e.getUserAgent() }), t }, e.getUserAgent = function() { return navigator.userAgent }, e.prototype.languageKey = function(e) { return this.options.excludeLanguage || e.addPreprocessedComponent({ key: "language", value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "" }), e }, e.prototype.colorDepthKey = function(e) { return this.options.excludeColorDepth || e.addPreprocessedComponent({ key: "color_depth", value: window.screen.colorDepth || -1 }), e }, e.prototype.deviceMemoryKey = function(t) { return this.options.excludeDeviceMemory || t.addPreprocessedComponent({ key: "device_memory", value: e.getDeviceMemory() }), t }, e.getDeviceMemory = function() { return navigator.deviceMemory || -1 }, e.prototype.pixelRatioKey = function(t) { return this.options.excludePixelRatio || t.addPreprocessedComponent({ key: "pixel_ratio", value: e.getPixelRatio() }), t }, e.getPixelRatio = function() { return window.devicePixelRatio || "" }, e.prototype.screenResolutionKey = function(e) { return this.options.excludeScreenResolution ? e : this.getScreenResolution(e) }, e.prototype.getScreenResolution = function(e) { var t = void 0; return t = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height], e.addPreprocessedComponent({ key: "resolution", value: t }), e }, e.prototype.availableScreenResolutionKey = function(e) { return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e) }, e.prototype.getAvailableScreenResolution = function(e) { var t = void 0; return window.screen.availWidth && window.screen.availHeight && (t = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]), "undefined" != typeof t && e.addPreprocessedComponent({ key: "available_resolution", value: t }), e }, e.prototype.timezoneOffsetKey = function(e) { return this.options.excludeTimezoneOffset || e.addPreprocessedComponent({ key: "timezone_offset", value: (new Date).getTimezoneOffset() }), e }, e.prototype.sessionStorageKey = function(t) { return !this.options.excludeSessionStorage && e.hasSessionStorage() && t.addPreprocessedComponent({ key: "session_storage", value: 1 }), t }, e.prototype.localStorageKey = function(t) { return !this.options.excludeSessionStorage && e.hasLocalStorage() && t.addPreprocessedComponent({ key: "local_storage", value: 1 }), t }, e.prototype.indexedDbKey = function(t) { return !this.options.excludeIndexedDB && e.hasIndexedDB() && t.addPreprocessedComponent({ key: "indexed_db", value: 1 }), t }, e.prototype.addBehaviorKey = function(e) { return !this.options.excludeAddBehavior && document.body && document.body.addBehavior && e.addPreprocessedComponent({ key: "add_behavior", value: 1 }), e }, e.prototype.openDatabaseKey = function(e) { return !this.options.excludeOpenDatabase && window.openDatabase && e.addPreprocessedComponent({ key: "open_database", value: 1 }), e }, e.prototype.cpuClassKey = function(t) { return this.options.excludeCpuClass || t.addPreprocessedComponent({ key: "cpu_class", value: e.getNavigatorCpuClass() }), t }, e.prototype.platformKey = function(t) { return this.options.excludePlatform || t.addPreprocessedComponent({ key: "navigator_platform", value: e.getNavigatorPlatform() }), t }, e.prototype.doNotTrackKey = function(t) { return this.options.excludeDoNotTrack || t.addPreprocessedComponent({ key: "do_not_track", value: e.getDoNotTrack() }), t }, e.prototype.canvasKey = function(t) { return !this.options.excludeCanvas && e.isCanvasSupported() && t.addPreprocessedComponent({ key: "canvas", value: this.getCanvasFp() }), t }, e.prototype.webglKey = function(t) { return !this.options.excludeWebGL && e.isWebGlSupported() && t.addPreprocessedComponent({ key: "webgl", value: this.getWebglFp() }), t }, e.prototype.webglVendorAndRendererKey = function(t) { return !this.options.excludeWebGLVendorAndRenderer && e.isWebGlSupported() && t.addPreprocessedComponent({ key: "webgl_vendor", value: e.getWebglVendorAndRenderer() }), t }, e.prototype.adBlockKey = function(t) { return this.options.excludeAdBlock || t.addPreprocessedComponent({ key: "adblock", value: e.getAdBlock() }), t }, e.prototype.hasLiedLanguagesKey = function(t) { return this.options.excludeHasLiedLanguages || t.addPreprocessedComponent({ key: "has_lied_languages", value: e.getHasLiedLanguages() }), t }, e.prototype.hasLiedResolutionKey = function(t) { return this.options.excludeHasLiedResolution || t.addPreprocessedComponent({ key: "has_lied_resolution", value: e.getHasLiedResolution() }), t }, e.prototype.hasLiedOsKey = function(t) { return this.options.excludeHasLiedOs || t.addPreprocessedComponent({ key: "has_lied_os", value: e.getHasLiedOs() }), t }, e.prototype.hasLiedBrowserKey = function(t) { return this.options.excludeHasLiedBrowser || t.addPreprocessedComponent({ key: "has_lied_browser", value: e.getHasLiedBrowser() }), t }, e.prototype.pluginsKey = function(t) { return this.options.excludePlugins || (e.isIE() ? this.options.excludeIEPlugins || t.addPreprocessedComponent({ key: "ie_plugins", value: this.getIEPlugins() }) : t.addPreprocessedComponent({ key: "regular_plugins", value: this.getRegularPlugins() })), t }, e.prototype.getRegularPlugins = function() {
                var e = [];
                if (navigator.plugins)
                    for (var t = 0, r = navigator.plugins.length; r > t; t++) navigator.plugins[t] && e.push(navigator.plugins[t]);
                return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) { return e.name > t.name ? 1 : e.name < t.name ? -1 : 0 })), this.map(e, function(e) { var t = this.map(e, function(e) { return [e.type, e.suffixes].join("~") }).join(","); return [e.name, e.description, t].join("::") }, this)
            }, e.prototype.getIEPlugins = function() {
                var e = [];
                if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                    var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                    e = this.map(t, function(e) { try { return new window.ActiveXObject(e), e } catch (t) { return null } })
                }
                return navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
            }, e.prototype.pluginsShouldBeSorted = function() { for (var e = !1, t = 0, r = this.options.sortPluginsFor.length; r > t; t++) { var n = this.options.sortPluginsFor[t]; if (navigator.userAgent.match(n)) { e = !0; break } } return e }, e.prototype.touchSupportKey = function(t) { return this.options.excludeTouchSupport || t.addPreprocessedComponent({ key: "touch_support", value: e.getTouchSupport() }), t }, e.prototype.hardwareConcurrencyKey = function(t) { return this.options.excludeHardwareConcurrency || t.addPreprocessedComponent({ key: "hardware_concurrency", value: e.getHardwareConcurrency() }), t }, e.hasSessionStorage = function() { try { return !!window.sessionStorage } catch (e) { return !0 } }, e.hasLocalStorage = function() { try { return !!window.localStorage } catch (e) { return !0 } }, e.hasIndexedDB = function() { try { return !!window.indexedDB } catch (e) { return !0 } }, e.getHardwareConcurrency = function() { return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown" }, e.getNavigatorCpuClass = function() { return navigator.cpuClass ? navigator.cpuClass : "unknown" }, e.getNavigatorPlatform = function() { return navigator.platform ? navigator.platform : "unknown" }, e.getDoNotTrack = function() { return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown" }, e.getTouchSupport = function() {
                var e = 0,
                    t = !1;
                "undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
                try { document.createEvent("TouchEvent"), t = !0 } catch (r) {}
                var n = "ontouchstart" in window;
                return [e, t, n]
            }, e.prototype.getCanvasFp = function() {
                var e = [],
                    t = document.createElement("canvas");
                t.width = 2e3, t.height = 200, t.style.display = "inline";
                var r = t.getContext("2d");
                return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), e.push("canvas winding:" + (r.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", r.font = this.options.dontUseFakeFontInCanvas ? "11pt Arial" : "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), t.toDataURL && e.push("canvas fp:" + t.toDataURL()), e.join("~")
            }, e.prototype.getWebglFp = function() {
                var t = void 0,
                    r = function(e) { return t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), "[" + e[0] + ", " + e[1] + "]" },
                    n = function(e) { var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic"); if (t) { var r = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT); return 0 === r && (r = 2), r } return null };
                if (t = e.getWebglCanvas(), !t) return null;
                var o = [],
                    i = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
                    a = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
                    s = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, s);
                var u = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                t.bufferData(t.ARRAY_BUFFER, u, t.STATIC_DRAW), s.itemSize = 3, s.numItems = 3;
                var c = t.createProgram(),
                    d = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(d, i), t.compileShader(d);
                var l = t.createShader(t.FRAGMENT_SHADER);
                t.shaderSource(l, a), t.compileShader(l), t.attachShader(c, d), t.attachShader(c, l), t.linkProgram(c), t.useProgram(c), c.vertexPosAttrib = t.getAttribLocation(c, "attrVertex"), c.offsetUniform = t.getUniformLocation(c, "uniformOffset"), t.enableVertexAttribArray(c.vertexPosArray), t.vertexAttribPointer(c.vertexPosAttrib, s.itemSize, t.FLOAT, !1, 0, 0), t.uniform2f(c.offsetUniform, 1, 1), t.drawArrays(t.TRIANGLE_STRIP, 0, s.numItems);
                try { o.push(t.canvas.toDataURL()) } catch (p) {}
                o.push("extensions:" + (t.getSupportedExtensions() || []).join(";")), o.push("aliased line width range:" + r(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))), o.push("aliased point size range:" + r(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))), o.push("alpha bits:" + t.getParameter(t.ALPHA_BITS)), o.push("antialiasing:" + (t.getContextAttributes().antialias ? "yes" : "no")), o.push("blue bits:" + t.getParameter(t.BLUE_BITS)), o.push("depth bits:" + t.getParameter(t.DEPTH_BITS)), o.push("green bits:" + t.getParameter(t.GREEN_BITS)), o.push("max anisotropy:" + n(t)), o.push("max combined texture image units:" + t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), o.push("max cube map texture size:" + t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)), o.push("max fragment uniform vectors:" + t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)), o.push("max render buffer size:" + t.getParameter(t.MAX_RENDERBUFFER_SIZE)), o.push("max texture image units:" + t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)), o.push("max texture size:" + t.getParameter(t.MAX_TEXTURE_SIZE)), o.push("max varying vectors:" + t.getParameter(t.MAX_VARYING_VECTORS)), o.push("max vertex attribs:" + t.getParameter(t.MAX_VERTEX_ATTRIBS)), o.push("max vertex texture image units:" + t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), o.push("max vertex uniform vectors:" + t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)), o.push("max viewport dims:" + r(t.getParameter(t.MAX_VIEWPORT_DIMS))), o.push("red bits:" + t.getParameter(t.RED_BITS)), o.push("renderer:" + t.getParameter(t.RENDERER)), o.push("shading language version:" + t.getParameter(t.SHADING_LANGUAGE_VERSION)), o.push("stencil bits:" + t.getParameter(t.STENCIL_BITS)), o.push("vendor:" + t.getParameter(t.VENDOR)), o.push("version:" + t.getParameter(t.VERSION));
                try {
                    var h = t.getExtension("WEBGL_debug_renderer_info");
                    h && (o.push("unmasked vendor:" + t.getParameter(h.UNMASKED_VENDOR_WEBGL)), o.push("unmasked renderer:" + t.getParameter(h.UNMASKED_RENDERER_WEBGL)))
                } catch (p) {}
                return t.getShaderPrecisionFormat ? (o.push("hf p:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision), o.push("hf p rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMin), o.push("hf p rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMax), o.push("mf p:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision), o.push("mf p rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMin), o.push("mf p rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMax), o.push("lf p:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).precision), o.push("lf p rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMin), o.push("lf p rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMax), o.push("hf p:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision), o.push("hf p rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMin), o.push("hf p rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMax), o.push("mf p:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision), o.push("mf p rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMin), o.push("mf p rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMax), o.push("lf p:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).precision), o.push("lf p rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMin), o.push("lf p rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMax), o.push("hi p:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).precision), o.push("hi p rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMin), o.push("hi p rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMax), o.push("mi p:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).precision), o.push("mi p rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMin), o.push("mi p rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMax), o.push("low int p:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).precision), o.push("low int p rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMin), o.push("low int p rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMax), o.push("hi p:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).precision), o.push("hi p rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMin), o.push("hi p rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMax), o.push("mi p:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).precision), o.push("mi p rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMin), o.push("mi p rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMax), o.push("low int p:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).precision), o.push("low int p rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMin), o.push("low int p rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMax), o.join("~")) : o.join("~")
            }, e.getWebglVendorAndRenderer = function() {
                try {
                    var t = e.getWebglCanvas(),
                        r = t.getExtension("WEBGL_debug_renderer_info");
                    return t.getParameter(r.UNMASKED_VENDOR_WEBGL) + "~" + t.getParameter(r.UNMASKED_RENDERER_WEBGL)
                } catch (n) { return null }
            }, e.getAdBlock = function() {
                var e = document.createElement("div");
                e.innerHTML = "&nbsp;", e.className = "adsbox";
                var t = !1;
                try { document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e) } catch (r) { t = !1 }
                return t
            }, e.getHasLiedLanguages = function() {
                if ("undefined" != typeof navigator.languages) try { var e = navigator.languages[0].substr(0, 2); if (e !== navigator.language.substr(0, 2)) return !0 } catch (t) { return !0 }
                return !1
            }, e.getHasLiedResolution = function() { return window.screen.width < window.screen.availWidth ? !0 : window.screen.height < window.screen.availHeight }, e.getHasLiedOs = function() {
                var e = navigator.userAgent.toLowerCase(),
                    t = navigator.oscpu,
                    r = navigator.platform.toLowerCase(),
                    n = void 0;
                n = e.includes("windows phone") ? "Windows Phone" : e.includes("win") ? "Windows" : e.includes("android") ? "Android" : e.includes("linux") ? "Linux" : e.includes("iphone") || e.includes("ipad") ? "iOS" : e.includes("mac") ? "Mac" : "Other";
                var o = void 0;
                if (o = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, o && "Windows Phone" !== n && "Android" !== n && "iOS" !== n && "Other" !== n) return !0;
                if ("undefined" != typeof t) { if (t = t.toLowerCase(), t.includes("win") && "Windows" !== n && "Windows Phone" !== n) return !0; if (t.includes("linux") && "Linux" !== n && "Android" !== n) return !0; if (t.includes("mac") && "Mac" !== n && "iOS" !== n) return !0; if ((!t.includes("win") && !t.includes("linux") && !t.includes("mac")) != ("Other" === n)) return !0 }
                return r.includes("win") && "Windows" !== n && "Windows Phone" !== n ? !0 : (r.includes("linux") || r.includes("android") || r.includes("pike")) && "Linux" !== n && "Android" !== n ? !0 : (r.includes("mac") || r.includes("ipad") || r.includes("ipod") || r.includes("iphone")) && "Mac" !== n && "iOS" !== n ? !0 : (!r.includes("win") && !r.includes("linux") && !r.includes("mac")) != ("Other" === n) ? !0 : "undefined" == typeof navigator.plugins && "Windows" !== n && "Windows Phone" !== n
            }, e.getHasLiedBrowser = function() {
                var e = navigator.userAgent.toLowerCase(),
                    t = navigator.productSub,
                    r = void 0;
                if (r = e.includes("firefox") ? "Firefox" : e.includes("opera") || e.includes("opr") ? "Opera" : e.includes("chrome") ? "Chrome" : e.includes("safari") ? "Safari" : e.includes("trident") ? "Internet Explorer" : "Other", ("Chrome" === r || "Safari" === r || "Opera" === r) && "20030107" !== t) return !0;
                var n = eval.toString().length;
                if (37 === n && "Safari" !== r && "Firefox" !== r && "Other" !== r) return !0;
                if (39 === n && "Internet Explorer" !== r && "Other" !== r) return !0;
                if (33 === n && "Chrome" !== r && "Opera" !== r && "Other" !== r) return !0;
                var o = void 0;
                try { throw "a" } catch (i) { try { i.toSource(), o = !0 } catch (a) { o = !1 } }
                return o && "Firefox" !== r && "Other" !== r ? !0 : !1
            }, e.isCanvasSupported = function() { var e = document.createElement("canvas"); return !(!e.getContext || !e.getContext("2d")) }, e.isWebGlSupported = function() { if (!e.isCanvasSupported()) return !1; var t = e.getWebglCanvas(); return !!window.WebGLRenderingContext && !!t }, e.isIE = function() { return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1 }, e.getWebglCanvas = function() {
                var e = document.createElement("canvas"),
                    t = null;
                try { t = e.getContext("webgl") || e.getContext("experimental-webgl") } catch (r) {}
                return t || (t = null), t
            }, e.prototype.isJavaEnabled = function(e) { return this.options.excludeJavaEnabled || e.addPreprocessedComponent({ key: "java_enabled", value: navigator.javaEnabled() }), e }, e.prototype.getMimeTypes = function(e) {
                if (this.options.excludeMimeTypes) return e;
                for (var t = [], r = 0; r < navigator.mimeTypes.length; r++) {
                    var n = navigator.mimeTypes[r].description;
                    n && t.push(n)
                }
                return e.addPreprocessedComponent({ key: "mime_types", value: t.join(",") }), e
            }, e.prototype.wheelEvent = function(e) { if (this.options.excludeWheelEvent) return e; var t = "onwheel" in ce("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : browser.mozilla ? "MozMousePixelScroll" : "DOMMouseScroll"; return e.addPreprocessedComponent({ key: "wheel_event", value: t }), e }, e.prototype.boundingClientRect = function(e) { return this.options.excludeBoundingClientRect ? e : (e.addPreprocessedComponent({ key: "bounding_client_rect", value: "getBoundingClientRect" in ce("div") }), e) }, e.prototype.has3d = function t(e) {
                if (this.options.excludeHas3d) return e;
                var t = function(e) {
                    if ("WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix) return !0;
                    if ("MSCSSMatrix" in e && "m11" in new e.MSCSSMatrix) return !0;
                    if ("CSSMatrix" in e && "m11" in new e.CSSMatrix) return !0;
                    try {
                        var t = ce("div"),
                            r = getCssPropertyName(t, "transform");
                        return r ? (t.style[r] = "translate3d(1px,1px,1px)", t.style[r] && "none" != t.style[r]) : !1
                    } catch (n) { return !1 }
                }(window);
                return e.addPreprocessedComponent({ key: "has_3d", value: t }), e
            }, e.prototype.silverlight = function(e) {
                if (this.options.excludeSilverlight) return e;
                var t = { installed: !1, supported: !1, versions: [] },
                    r = ["5.1.41212", "5.1.41105", "5.1.40728", "5.1.40416", "5.1.30514", "5.1.30214", "5.1.20913", "5.1.20513", "5.1.20125", "5.1.10411", "5.0.61118", "5.0.60818", "5.0.60401", "4.1.10329", "4.1.10111", "4.0.60831", "4.0.60531", "4.0.60310", "4.0.60129", "4.0.51204", "4.0.50917", "4.0.50826", "4.0.50524", "4.0.50401", "3.0.50611", "3.0.50106", "3.0.40818", "3.0.40723", "3.0.40624", "2.0.40115", "2.0.31005", "1.0.30715", "1.0.30401", "1.0.30109", "1.0.21115", "1.0.20816"];
                if ("undefined" != typeof Silverlight) {
                    if ("function" == typeof Silverlight.isInstalled) {
                        var n = r.filter(Silverlight.isInstalled);
                        t.installed = n.length > 0, t.versions = n
                    }
                    "function" == typeof Silverlight.supportedUserAgent && (t.supported = Silverlight.supportedUserAgent())
                } else try {
                    var o = navigator.plugins["Silverlight Plug-In"];
                    t.installed = !!o, t.installed && t.versions.push(o.version)
                } catch (i) {}
                return t.installed === !1 ? e : (e.addPreprocessedComponent({ key: "silverlight", value: [t.installed, t.versions.join("~")] }), e)
            }, e.prototype.each = function(e, t, r) {
                if (null !== e)
                    if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, r);
                    else if (e.length === +e.length) {
                    for (var n = 0, o = e.length; o > n; n++)
                        if (t.call(r, e[n], n, e) === {}) return
                } else
                    for (var i in e)
                        if (e.hasOwnProperty(i) && t.call(r, e[i], i, e) === {}) return
            }, e.prototype.map = function(e, t, r) { var n = []; return null == e ? n : this.nativeMap && e.map === this.nativeMap ? e.map(t, r) : (this.each(e, function(e, o, i) { n[n.length] = t.call(r, e, o, i) }), n) }, e.x64Add = function(e, t) { e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]; var r = [0, 0, 0, 0]; return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]] }, e.x64Multiply = function(e, t) { e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]; var r = [0, 0, 0, 0]; return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]] }, e.x64Rotl = function(e, t) { return t %= 64, 32 === t ? [e[1], e[0]] : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]) }, e.x64LeftShift = function(e, t) { return t %= 64, 0 === t ? e : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0] }, e.x64Xor = function(e, t) { return [e[0] ^ t[0], e[1] ^ t[1]] }, e.x64Fmix = function(t) { return t = e.x64Xor(t, [0, t[0] >>> 1]), t = e.x64Multiply(t, [4283543511, 3981806797]), t = e.x64Xor(t, [0, t[0] >>> 1]), t = e.x64Multiply(t, [3301882366, 444984403]), t = e.x64Xor(t, [0, t[0] >>> 1]) }, e.x64hash128 = function() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = t.length % 16, o = t.length - n, i = [0, r], a = [0, r], s = [0, 0], u = [0, 0], c = [2277735313, 289559509], d = [1291169091, 658871167], l = 0; o > l; l += 16) s = [255 & t.charCodeAt(l + 4) | (255 & t.charCodeAt(l + 5)) << 8 | (255 & t.charCodeAt(l + 6)) << 16 | (255 & t.charCodeAt(l + 7)) << 24, 255 & t.charCodeAt(l) | (255 & t.charCodeAt(l + 1)) << 8 | (255 & t.charCodeAt(l + 2)) << 16 | (255 & t.charCodeAt(l + 3)) << 24], u = [255 & t.charCodeAt(l + 12) | (255 & t.charCodeAt(l + 13)) << 8 | (255 & t.charCodeAt(l + 14)) << 16 | (255 & t.charCodeAt(l + 15)) << 24, 255 & t.charCodeAt(l + 8) | (255 & t.charCodeAt(l + 9)) << 8 | (255 & t.charCodeAt(l + 10)) << 16 | (255 & t.charCodeAt(l + 11)) << 24], s = e.x64Multiply(s, c), s = e.x64Rotl(s, 31), s = e.x64Multiply(s, d), i = e.x64Xor(i, s), i = e.x64Rotl(i, 27), i = e.x64Add(i, a), i = e.x64Add(e.x64Multiply(i, [0, 5]), [0, 1390208809]), u = e.x64Multiply(u, d), u = e.x64Rotl(u, 33), u = e.x64Multiply(u, c), a = e.x64Xor(a, u), a = e.x64Rotl(a, 31), a = e.x64Add(a, i), a = e.x64Add(e.x64Multiply(a, [0, 5]), [0, 944331445]);
                switch (s = [0, 0], u = [0, 0], n) {
                    case 15:
                        u = e.x64Xor(u, e.x64LeftShift([0, t.charCodeAt(l + 14)], 48));
                    case 14:
                        u = e.x64Xor(u, e.x64LeftShift([0, t.charCodeAt(l + 13)], 40));
                    case 13:
                        u = e.x64Xor(u, e.x64LeftShift([0, t.charCodeAt(l + 12)], 32));
                    case 12:
                        u = e.x64Xor(u, e.x64LeftShift([0, t.charCodeAt(l + 11)], 24));
                    case 11:
                        u = e.x64Xor(u, e.x64LeftShift([0, t.charCodeAt(l + 10)], 16));
                    case 10:
                        u = e.x64Xor(u, e.x64LeftShift([0, t.charCodeAt(l + 9)], 8));
                    case 9:
                        u = e.x64Xor(u, [0, t.charCodeAt(l + 8)]), u = e.x64Multiply(u, d), u = e.x64Rotl(u, 33), u = e.x64Multiply(u, c), a = e.x64Xor(a, u);
                    case 8:
                        s = e.x64Xor(s, e.x64LeftShift([0, t.charCodeAt(l + 7)], 56));
                    case 7:
                        s = e.x64Xor(s, e.x64LeftShift([0, t.charCodeAt(l + 6)], 48));
                    case 6:
                        s = e.x64Xor(s, e.x64LeftShift([0, t.charCodeAt(l + 5)], 40));
                    case 5:
                        s = e.x64Xor(s, e.x64LeftShift([0, t.charCodeAt(l + 4)], 32));
                    case 4:
                        s = e.x64Xor(s, e.x64LeftShift([0, t.charCodeAt(l + 3)], 24));
                    case 3:
                        s = e.x64Xor(s, e.x64LeftShift([0, t.charCodeAt(l + 2)], 16));
                    case 2:
                        s = e.x64Xor(s, e.x64LeftShift([0, t.charCodeAt(l + 1)], 8));
                    case 1:
                        s = e.x64Xor(s, [0, t.charCodeAt(l)]), s = e.x64Multiply(s, c), s = e.x64Rotl(s, 31), s = e.x64Multiply(s, d), i = e.x64Xor(i, s)
                }
                return i = e.x64Xor(i, [0, t.length]), a = e.x64Xor(a, [0, t.length]), i = e.x64Add(i, a), a = e.x64Add(a, i), i = e.x64Fmix(i), a = e.x64Fmix(a), i = e.x64Add(i, a), a = e.x64Add(a, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
            }, e
        }()
    }
});
/*1*/