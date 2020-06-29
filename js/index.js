(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    105: function (e, t, a) {
        e.exports = !a(34) && !a(61)(function () {
            return 7 != Object.defineProperty(a(80)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, 106: function (e, t, a) {
        var n = a(41);
        e.exports = function (e, t) {
            if (!n(e)) return e;
            var a, i;
            if (t && "function" == typeof (a = e.toString) && !n(i = a.call(e))) return i;
            if ("function" == typeof (a = e.valueOf) && !n(i = a.call(e))) return i;
            if (!t && "function" == typeof (a = e.toString) && !n(i = a.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, 107: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, 108: function (e, t, a) {
        var n = a(85);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == n(e) ? e.split("") : Object(e)
        }
    }, 109: function (e, t, a) {
        var n = a(84), i = a(86), r = a(110);
        e.exports = function (e) {
            return function (t, a, o) {
                var s, l = n(t), c = i(l.length), m = r(o, c);
                if (e && a != a) {
                    for (; c > m;) if ((s = l[m++]) != s) return !0
                } else for (; c > m; m++) if ((e || m in l) && l[m] === a) return e || m || 0;
                return !e && -1
            }
        }
    }, 11: function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return c
        });
        var n = a(1), i = a.n(n), r = a(0), o = a.n(r), s = (a(5), a(4)), l = a.n(s);
        a(29);

        function c(e) {
            var t = e.theme, a = e.label, n = e.copy, r = e.link;
            return o.a.createElement("div", {className: "wrapper"}, o.a.createElement("div", {
                "data-component-location": "./components/global/Box.js",
                "data-theme": t,
                className: "jsx-3109644517"
            }, a && o.a.createElement("h1", {className: "jsx-3109644517 h1-seo"}, a), o.a.createElement("p", {className: "jsx-3109644517"}, n), o.a.createElement("br", {className: "jsx-3109644517"}), r && o.a.createElement(l.a, {href: r.path}, o.a.createElement("a", {className: "jsx-3109644517 link"}, r.text, o.a.createElement("span", {className: "jsx-3109644517 arrow"}, "→"))), o.a.createElement(i.a, {
                styleId: "3109644517",
                css: []
            })))
        }
    }, 110: function (e, t, a) {
        var n = a(45), i = Math.max, r = Math.min;
        e.exports = function (e, t) {
            return (e = n(e)) < 0 ? i(e + t, 0) : r(e, t)
        }
    }, 111: function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, 112: function (e, t, a) {
        var n = a(39).f, i = a(42), r = a(24)("toStringTag");
        e.exports = function (e, t, a) {
            e && !i(e = a ? e : e.prototype, r) && n(e, r, {configurable: !0, value: t})
        }
    }, 113: function (e, t, a) {
        var n = a(49);
        e.exports = function (e) {
            return Object(n(e))
        }
    }, 130: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a(1), i = a.n(n), r = a(0), o = a.n(r), s = a(6), l = a(7), c = a(12), m = a(3), p = a(66);

        function d() {
            return o.a.createElement("div", {
                "data-component-location": "./components/index/Masthead.js",
                className: "jsx-2403155244"
            }, o.a.createElement(p.a, {theme: "dark"}), o.a.createElement(i.a, {
                styleId: "2403155244",
                css: []
            }))
        }

        var x = a(11);

        function h() {
            return null
        }

        var u = a(2);
        a(167);

        function f(e) {
            return null
        }

        function b(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function g(e, t) {
            return !t || "object" !== f(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function w(e) {
            return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function y(e, t) {
            return (y = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var j = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), g(this, w(t).apply(this, arguments))
            }

            var a, n, r;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
            }(t, o.a.Component), a = t, (n = [{
                key: "componentDidMount", value: function () {
                    var e = new ScrollMagic.Controller;
                    Array.from(document.querySelectorAll("section")).forEach(function (t) {
                        new ScrollMagic.Scene({
                            triggerElement: t,
                            duration: "120%",
                            offset: 150
                        }).setClassToggle(t, "active").addTo(e)
                    }), Array.from(document.querySelectorAll("section")).forEach(function (t) {
                        var a = (new TimelineMax).add("start").to(t, 1, {
                            opacity: 1,
                            y: "-=100",
                            ease: Power3.easeInOut
                        });
                        new ScrollMagic.Scene({
                            triggerElement: t,
                            duration: 250,
                            triggerHook: 1,
                            offset: 0
                        }).setTween(a).addTo(e)
                    })
                }
            }, {
                key: "render", value: function () {
                    return null
                }
            }]) && b(a.prototype, n), r && b(a, r), t
        }();

        function k() {
            return null
        }

        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function E(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function z(e, t) {
            return !t || "object" !== v(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function N(e) {
            return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function S(e, t) {
            return (S = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var C = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), z(this, N(t).apply(this, arguments))
            }

            var a, n, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
            }(t, o.a.Component), a = t, (n = [{
                key: "", value: function () {
                    this.scrollController = new ScrollMagic.Controller, this.createScene({name: "insuranceTech"}), this.createScene({name: "finTech"}), this.createScene({name: "consumerFinance"}), this.createScene({name: "globalEnergy"})
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.scrollController = null
                }
            }, {
                key: "createScene", value: function (e) {
                    var t = e.name, a = e.duration, n = void 0 === a ? .4 : a, i = e.fromObj,
                        r = void 0 === i ? {opacity: 0, y: "0"} : i, o = e.toObj,
                        s = void 0 === o ? {opacity: 1, y: "-=10", ease: Power4.EaseIn} : o, l = e.position,
                        c = void 0 === l ? "+=0.15" : l, m = e.debug, p = void 0 !== m && m;
                    this["".concat(t, "Timeline")] = new TimelineMax({pause: !0}).add("start").fromTo(this["".concat(t, "Container")], n, r, s, c), this["".concat(t, "Scene")] = new ScrollMagic.Scene({
                        triggerElement: this["".concat(t, "Container")],
                        offset: -300
                    }).reverse(!1).setTween(this["".concat(t, "Timeline")]).addTo(this.scrollController), p && this["".concat(t, "Scene")].addIndicators()
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    return o.a.createElement("div", {
                        "data-component-location": "./components/index/InTheShop.js",
                        "data-theme": "light",
                        className: "jsx-283928841"
                    }, o.a.createElement("div", {className: "jsx-283928841 wrapper"}, o.a.createElement("div", {className: "jsx-283928841 content-wrap-large"}, o.a.createElement(m.a, {

                    }), o.a.createElement(m.a, {

                    })), o.a.createElement(m.a, {
                        hM: "0",
                        hT: "0",
                        hD: "0"
                    }), o.a.createElement("div", {
                        ref: function (t) {
                            return e.finTechContainer = t
                        }, className: "jsx-283928841 card-wrap"
                    }, o.a.createElement("div", {className: "jsx-283928841 card"}, o.a.createElement("picture", {className: "jsx-283928841 card-image"}, o.a.createElement("source", {

                    })), o.a.createElement("div", {
                        ref: function (t) {
                            return null
                        }, className: "jsx-283928841 card-copy"
                    }, o.a.createElement("div", {className: "jsx-283928841 pull-layer-up"}, o.a.createElement(u.e, {
                        type: "h2",
                        headingStyle: "h3"
                    }), o.a.createElement(u.f, null, ""))))), o.a.createElement(m.a, {

                    }), o.a.createElement("div", {
                        ref: function (t) {
                            return null
                        }, className: "jsx-283928841 card-wrap"
                    }, o.a.createElement("div", {className: "jsx-283928841 card"}, o.a.createElement("div", {
                        ref: function (t) {
                            return null
                        }, className: "jsx-283928841 card-copy"
                    }, o.a.createElement("div", {className: "jsx-283928841 pull-layer-up"}, o.a.createElement(u.e, {
                        type: "h2",
                        headingStyle: "h3"
                    }), o.a.createElement(u.f, null, ""))), o.a.createElement("picture", {className: "jsx-283928841 card-image"}, o.a.createElement("source", {

                    })))), o.a.createElement(m.a, {

                    }), o.a.createElement("div", {
                        ref: function (t) {
                            return e.globalEnergyContainer = t
                        }, className: "jsx-283928841 card-wrap"
                    }, o.a.createElement("div", {className: "jsx-283928841 card"}, o.a.createElement("picture", {className: "jsx-283928841 card-image"}, o.a.createElement("source", {
                        type: "image/webp",
                        className: "jsx-283928841"
                    })), o.a.createElement("div", {
                        ref: function (t) {
                            return null
                        }, className: "jsx-283928841 card-copy"
                    }, o.a.createElement("div", {className: "jsx-283928841 pull-layer-up"}, o.a.createElement(u.e, {
                        type: "h2",
                        headingStyle: "h3"
                    }), o.a.createElement(u.f, null, ""))))), o.a.createElement(m.a, {
                        hM: "0",
                        hT: "0",
                        hD: "0"
                    })), o.a.createElement(i.a, {
                        styleId: "283928841",
                        css: []
                    }))
                }
            }]) && E(a.prototype, n), s && E(a, s), t
        }(), T = a(15);

        function O() {
            return null
        }

        var A = a(89), B = a(9), _ = a(10), P = a(8), F = a(19), I = a(16), Y = a(62);

        function M() {
            return o.a.createElement("div", {
                "data-page-location": "./pages/index.js",
                className: "jsx-1888127629"
            }, o.a.createElement(s.a, null, o.a.createElement(Y.a, null)), o.a.createElement(i.a, {
                styleId: "4263644393",
                css: ["*,::before,::after{background-repeat:no-repeat;-webkit-box-sizing:inherit;box-sizing:inherit;}", "::before,::after{-webkit-text-decoration:inherit;text-decoration:inherit;vertical-align:inherit;}", "html{-webkit-box-sizing:border-box;box-sizing:border-box;cursor:auto;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}", "article,aside,footer,header,nav,section{display:block;}", "body{margin:0;}", "h1{font-size:2em;margin:0.67em 0;}", "figcaption,figure,main{display:block;}", "figure{margin:1em 40px;}", "hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;}", "nav ol,nav ul{list-style:none;}", "pre{font-family:monospace,monospace;font-size:1em;}", "a{background-color:transparent;-webkit-text-decoration-skip:objects;}", "abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}", "b,strong{font-weight:inherit;}", "b,strong{font-weight:bolder;}", "code,kbd,samp{font-family:monospace,monospace;font-size:1em;}", "dfn{font-style:italic;}", "mark{background-color:#ffff00;color:#000000;}", "small{font-size:80%;}", "sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}", "sub{bottom:-0.25em;}", "sup{top:-0.5em;}", "::-moz-selection{background-color:#b3d4fc;color:#000000;text-shadow:none;}", "::selection{background-color:#b3d4fc;color:#000000;text-shadow:none;}", "audio,canvas,iframe,img,svg,video{vertical-align:middle;}", "audio,video{display:inline-block;}", "audio:not([controls]){display:none;height:0;}", "img{border-style:none;}", "svg{fill:currentColor;}", "svg:not(:root){overflow:hidden;}", "table{border-collapse:collapse;}", "button,input,optgroup,select,textarea{margin:0;}", "button,input,select,textarea{color:inherit;font-family:inherit;font-size:inherit;line-height:inherit;}", "button,input{overflow:visible;}", "button,select{text-transform:none;}", "button,html [type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}", "button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}", "button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}", "legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}", "progress{display:inline-block;vertical-align:baseline;}", "textarea{overflow:auto;resize:vertical;}", "[type='checkbox'],[type='radio']{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;}", "[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}", "[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}", "[type='search']::-webkit-search-cancel-button,[type='search']::-webkit-search-decoration{-webkit-appearance:none;}", "::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}", "details,menu{display:block;}", "summary{display:list-item;}", "canvas{display:inline-block;}", "template{display:none;}", "a,area,button,input,label,select,summary,textarea,[tabindex]{-ms-touch-action:manipulation;touch-action:manipulation;}", "[hidden]{display:none;}", "[aria-busy='true']{cursor:progress;}", "[aria-controls]{cursor:pointer;}", "[aria-hidden='false'][hidden]:not(:focus){-webkit-clip:rect(0,0,0,0);clip:rect(0,0,0,0);display:inherit;position:absolute;}", "[aria-disabled]{cursor:default;}", "[data-theme='light']{--txtColor:#4f5d66;--headingColor:#171c1f;}", "[data-theme='dark']{--txtColor:#89979c;--headingColor:white;}", "[data-page-type='longform']{--contentBreak:1em;}", "*{margin:0;padding:0;}", "*::-moz-selection{background:#00ba40;color:white;text-shadow:0 1px 0 rgba(0,0,0,.2);}", "*::selection{background:#00ba40;color:white;text-shadow:0 1px 0 rgba(0,0,0,.2);}", "h1,figure{margin:0;}", "html{font-size:10px;}", "body{font-family:GT America,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;line-height:1.75;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:18px;font-size:1.8rem;line-height:28px;line-height:2.8rem;overflow-x:hidden;position:relative;}", "h1,h2,h3,h4,h5,h6{font-family:Altis-Bold,-apple-system,BlinkMacSystemFont,Segoe UI, Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;line-height:1.15;font-weight:normal;}", ".h2{color:var(--headingColor);font-size:calc(3.2rem + 1 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(3.2rem + 1 * ((100vw - 42rem) / 86));line-height:1.1;margin-bottom:calc(var(--contentBreak) * 0.25);}", "@media screen and (min-width:1280px){.h2{font-size:4.2rem;}}", "@media screen and (max-width:420px){.h2{font-size:3.2rem;}}", "@media screen and (min-width:1000px){.h2{font-size:4.2rem;}}", "@media screen and (max-width:699px){.h2{font-size:3.2rem;}}", ".h3{color:var(--headingColor);font-size:calc(2.4rem + 0.8000000000000003 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(2.4rem + 0.8000000000000003 * ((100vw - 42rem) / 86));line-height:1.3;margin-bottom:calc(var(--contentBreak) * 0.5);}", "@media screen and (min-width:1280px){.h3{font-size:3.2rem;}}", "@media screen and (max-width:420px){.h3{font-size:2.4rem;}}", "@media screen and (min-width:1000px){.h3{font-size:3.2rem;}}", "@media screen and (max-width:699px){.h3{font-size:2.4rem;}}", ".h4{color:var(--headingColor);font-size:calc(1.8rem + 0.5999999999999999 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(1.8rem + 0.5999999999999999 * ((100vw - 42rem) / 86));line-height:1.3;margin-bottom:calc(var(--contentBreak) * 0.25);}", "@media screen and (min-width:1280px){.h4{font-size:2.4rem;}}", "@media screen and (max-width:420px){.h4{font-size:1.8rem;}}", "@media screen and (min-width:1000px){.h4{font-size:2.4rem;}}", "@media screen and (max-width:699px){.h4{font-size:1.8rem;}}", ".lockup-type-h2-main{color:var(--headingColor);font-size:calc(3.2rem + 1 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(3.2rem + 1 * ((100vw - 42rem) / 86));line-height:1.1;margin-bottom:0.25em;}", "@media screen and (min-width:1280px){.lockup-type-h2-main{font-size:4.2rem;}}", "@media screen and (max-width:420px){.lockup-type-h2-main{font-size:3.2rem;}}", "@media screen and (min-width:1000px){.lockup-type-h2-main{font-size:4.2rem;}}", "@media screen and (max-width:699px){.lockup-type-h2-main{font-size:3.2rem;}}", ".lockup-type-h2-sub{color:#89979c;font-size:calc(1.8rem + 0.5999999999999999 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(1.8rem + 0.5999999999999999 * ((100vw - 42rem) / 86));line-height:1.3;}", "@media screen and (min-width:1280px){.lockup-type-h2-sub{font-size:2.4rem;}}", "@media screen and (max-width:420px){.lockup-type-h2-sub{font-size:1.8rem;}}", "@media screen and (min-width:1000px){.lockup-type-h2-sub{font-size:2.4rem;}}", "@media screen and (max-width:699px){.lockup-type-h2-sub{font-size:1.8rem;}}", ".lockup-type-h3-main{color:var(--headingColor);font-size:calc(2.4rem + 0.8000000000000003 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(2.4rem + 0.8000000000000003 * ((100vw - 42rem) / 86));line-height:1.3;margin-bottom:calc(var(--contentBreak) * 0.5);}", "@media screen and (min-width:1280px){.lockup-type-h3-main{font-size:3.2rem;}}", "@media screen and (max-width:420px){.lockup-type-h3-main{font-size:2.4rem;}}", "@media screen and (min-width:1000px){.lockup-type-h3-main{font-size:3.2rem;}}", "@media screen and (max-width:699px){.lockup-type-h3-main{font-size:2.4rem;}}", ".lockup-type-h3-sub{color:#89979c;font-size:calc(2.2rem + 0.7999999999999998 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(2.2rem + 0.7999999999999998 * ((100vw - 42rem) / 86));line-height:1.1;margin-bottom:1em;}", "@media screen and (min-width:1280px){.lockup-type-h3-sub{font-size:3rem;}}", "@media screen and (max-width:420px){.lockup-type-h3-sub{font-size:2.2rem;}}", "@media screen and (min-width:1000px){.lockup-type-h3-sub{font-size:3rem;}}", "@media screen and (max-width:699px){.lockup-type-h3-sub{font-size:2.2rem;}}", ".lockup-type-h4-main{color:var(--headingColor);font-size:calc(1.8rem + 0.5999999999999999 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(1.8rem + 0.5999999999999999 * ((100vw - 42rem) / 86));line-height:1.5;margin-bottom:0.5em;}", "@media screen and (min-width:1280px){.lockup-type-h4-main{font-size:2.4rem;}}", "@media screen and (max-width:420px){.lockup-type-h4-main{font-size:1.8rem;}}", "@media screen and (min-width:1000px){.lockup-type-h4-main{font-size:2.4rem;}}", "@media screen and (max-width:699px){.lockup-type-h4-main{font-size:1.8rem;}}", ".lockup-type-h4-sub{color:#89979c;font-size:calc(1.6rem + 0.19999999999999996 * ((100vw - 69.9rem) / 30.099999999999994));font-size:calc(1.6rem + 0.19999999999999996 * ((100vw - 42rem) / 86));line-height:1.5;}", "@media screen and (min-width:1280px){.lockup-type-h4-sub{font-size:1.8rem;}}", "@media screen and (max-width:420px){.lockup-type-h4-sub{font-size:1.6rem;}}", "@media screen and (min-width:1000px){.lockup-type-h4-sub{font-size:1.8rem;}}", "@media screen and (max-width:699px){.lockup-type-h4-sub{font-size:1.6rem;}}", ".ul--bulleted{padding-left:1.6em;}", ".ul--bulleted li{list-style-type:none;margin-bottom:24px;position:relative;}", ".ul--bulleted li:before{background-color:#00ba40;content:'';display:inline-block;height:8px;left:-1.6em;position:absolute;top:0.5em;width:8px;}", "img{max-width:100%;}", "dt{font-weight:bold;}", "input,textarea{-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;}", ".wrapper{width:100%;max-width:1400px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;}", "@media (min-width:700px){.wrapper{padding-left:40px;padding-right:40px;}}", "@media (min-width:1000px){.wrapper{padding-left:100px;padding-right:100px;}}", ".content-wrap-large{max-width:1000px;margin-left:auto;margin-right:auto;}", ".content-wrap{max-width:666px;margin-left:auto;margin-right:auto;}", ".content-wrap-small{max-width:600px;margin-left:auto;margin-right:auto;}", ".link-underline{background-image:-webkit-gradient(linear,left top,left bottom,from(#89979c),to(#89979c));background-image:linear-gradient(#89979c,#89979c);background-position:0 100%;background-repeat:repeat-x;background-size:1px 1px;color:#89979c;cursor:pointer;font-size:inherit;line-height:1.2;-webkit-text-decoration:none;text-decoration:none;text-shadow:0.03em 0 white,-0.03em 0 white,0 0.03em white,0 -0.03em white, 0.06em 0 white,-0.06em 0 white,0.09em 0 white,-0.09em 0 white, 0.12em 0 white,-0.12em 0 white,0.15em 0 white,-0.15em 0 white;-webkit-transition:all 0.2s;-webkit-transition:all 0.2s;transition:all 0.2s;}", ".link-underline:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(#00ba40),to(#00ba40));background-image:linear-gradient(#00ba40,#00ba40);color:#00ba40;}", ".inline-blockquote{color:#89979c;font-family:GT America,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:32px;line-height:1.3;margin:80px -7%;text-align:center;}", ".lede{color:#89979c;font-family:GT America,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;line-height:1.3;font-size:20px;font-size:2rem;}", "@media (min-width:700px){.lede{font-size:2.8rem;}}", "@media (min-width:1000px){.lede{font-size:3.2rem;}}", ".dot{color:#00ba40;}", ".intro-pull{position:relative;}", "@media (min-width:700px){.intro-pull{-webkit-animation:scrolldown 1.4s cubic-bezier(0.645,0.045,0.355,1) forwards;-webkit-animation:scrolldown 1.4s cubic-bezier(0.645,0.045,0.355,1) forwards;animation:scrolldown 1.4s cubic-bezier(0.645,0.045,0.355,1) forwards;}}", "@-webkit-keyframes scrolldown{0%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}100%{-webkit-transform:translateY(-80px);-webkit-transform:translateY(-80px);-ms-transform:translateY(-80px);transform:translateY(-80px);}}", "@-webkit-keyframes scrolldown{0%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}100%{-webkit-transform:translateY(-80px);-webkit-transform:translateY(-80px);-ms-transform:translateY(-80px);transform:translateY(-80px);}}", "@keyframes scrolldown{0%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}100%{-webkit-transform:translateY(-80px);-webkit-transform:translateY(-80px);-ms-transform:translateY(-80px);transform:translateY(-80px);}}", ".pre-footer{background-color:#171c1f;}", ".centered-text{width:100%;max-width:1400px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;}", "@media (min-width:700px){.centered-text{padding-left:40px;padding-right:40px;}}", "@media (min-width:1000px){.centered-text{padding-left:100px;padding-right:100px;}}", ".centered-text{text-align:center;}"]
            }), o.a.createElement(l.a, {theme: "dark"}), o.a.createElement("div", {className: "jsx-1888127629 content"}, o.a.createElement("div", {
                "data-theme": "dark",
                className: "jsx-1888127629"
            }, o.a.createElement(d, null), o.a.createElement("div", {className: "jsx-1888127629 intro-pull"}, o.a.createElement(h, null)), o.a.createElement(k, null), o.a.createElement(j, null)), o.a.createElement("div", {
                "data-theme": "light",
                className: "jsx-1888127629"
            }, o.a.createElement(C, null), o.a.createElement(O, null), o.a.createElement(A.a, null)), o.a.createElement(B.a, {theme: "dark"}), o.a.createElement(_.a, {resourcePieces: I.a}), o.a.createElement(m.a, {
                hM: "60px",
                hT: "60px",
                hd: "60px"
            }), o.a.createElement(F.a, {theme: "light"})), o.a.createElement(P.a, null), o.a.createElement(i.a, {
                styleId: "3559310701",
                css: ["[data-theme='light'].jsx-1888127629{--txtColor:#4f5d66;--headingColor:#171c1f;}", "[data-theme='dark'].jsx-1888127629{--txtColor:#89979c;--headingColor:white;}", "[data-page-type='longform'].jsx-1888127629{--contentBreak:1em;}", "[data-page-location='./pages/index.js'].jsx-1888127629{background:#171c1f;background-size:auto 8%;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "@media (min-width:700px){[data-page-location='./pages/index.js'].jsx-1888127629{background-size:contain;}}", ".content.jsx-1888127629{-webkit-box-flex:1;-ms-flex:1 1 auto;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}"]
            }))
        }
        a.d(t, "default", function () {
            return M
        })
    }, 15: function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return null
        });
        var n = a(1), i = a.n(n), r = a(0), o = a.n(r), s = a(4), l = a.n(s);
        a(5);

        function c(e) {
            return null
        }
    }, 16: function (e, t, a) {
        "use strict";
        t.a = [{

        }, {

        }, {

        }, {

        }, {

        }, {}]
    }, 167: function (e, t, a) {
        a(168), a(178), e.exports = a(26).Array.from
    }, 168: function (e, t, a) {
        "use strict";
        var n = a(169)(!0);
        a(170)(String, "String", function (e) {
            this._t = String(e), this._i = 0
        }, function () {
            var e, t = this._t, a = this._i;
            return a >= t.length ? {value: void 0, done: !0} : (e = n(t, a), this._i += e.length, {value: e, done: !1})
        })
    }, 169: function (e, t, a) {
        var n = a(45), i = a(49);
        e.exports = function (e) {
            return function (t, a) {
                var r, o, s = String(i(t)), l = n(a), c = s.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : r : e ? s.slice(l, l + 2) : o - 56320 + (r - 55296 << 10) + 65536
            }
        }
    }, 17: function (e, t, a) {
        a(18), e.exports = self.fetch.bind(self)
    }, 170: function (e, t, a) {
        "use strict";
        var n = a(78), i = a(79), r = a(81), o = a(33), s = a(83), l = a(171), c = a(112), m = a(177),
            p = a(24)("iterator"), d = !([].keys && "next" in [].keys()), x = function () {
                return this
            };
        e.exports = function (e, t, a, h, u, f, b) {
            l(a, t, h);
            var g, w, y, j = function (e) {
                    if (!d && e in z) return z[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function () {
                                return new a(this, e)
                            }
                    }
                    return function () {
                        return new a(this, e)
                    }
                }, k = t + " Iterator", v = "values" == u, E = !1, z = e.prototype,
                N = z[p] || z["@@iterator"] || u && z[u], S = N || j(u), C = u ? v ? j("entries") : S : void 0,
                T = "Array" == t && z.entries || N;
            if (T && (y = m(T.call(new e))) !== Object.prototype && y.next && (c(y, k, !0), n || "function" == typeof y[p] || o(y, p, x)), v && N && "values" !== N.name && (E = !0, S = function () {
                return N.call(this)
            }), n && !b || !d && !E && z[p] || o(z, p, S), s[t] = S, s[k] = x, u) if (g = {
                values: v ? S : j("values"),
                keys: f ? S : j("keys"),
                entries: C
            }, b) for (w in g) w in z || r(z, w, g[w]); else i(i.P + i.F * (d || E), t, g);
            return g
        }
    }, 171: function (e, t, a) {
        "use strict";
        var n = a(172), i = a(50), r = a(112), o = {};
        a(33)(o, a(24)("iterator"), function () {
            return this
        }), e.exports = function (e, t, a) {
            e.prototype = n(o, {next: i(1, a)}), r(e, t + " Iterator")
        }
    }, 172: function (e, t, a) {
        var n = a(40), i = a(173), r = a(111), o = a(87)("IE_PROTO"), s = function () {
        }, l = function () {
            var e, t = a(80)("iframe"), n = r.length;
            for (t.style.display = "none", a(176).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l.prototype[r[n]];
            return l()
        };
        e.exports = Object.create || function (e, t) {
            var a;
            return null !== e ? (s.prototype = n(e), a = new s, s.prototype = null, a[o] = e) : a = l(), void 0 === t ? a : i(a, t)
        }
    }, 173: function (e, t, a) {
        var n = a(39), i = a(40), r = a(174);
        e.exports = a(34) ? Object.defineProperties : function (e, t) {
            i(e);
            for (var a, o = r(t), s = o.length, l = 0; s > l;) n.f(e, a = o[l++], t[a]);
            return e
        }
    }, 174: function (e, t, a) {
        var n = a(175), i = a(111);
        e.exports = Object.keys || function (e) {
            return n(e, i)
        }
    }, 175: function (e, t, a) {
        var n = a(42), i = a(84), r = a(109)(!1), o = a(87)("IE_PROTO");
        e.exports = function (e, t) {
            var a, s = i(e), l = 0, c = [];
            for (a in s) a != o && n(s, a) && c.push(a);
            for (; t.length > l;) n(s, a = t[l++]) && (~r(c, a) || c.push(a));
            return c
        }
    }, 176: function (e, t, a) {
        var n = a(21).document;
        e.exports = n && n.documentElement
    }, 177: function (e, t, a) {
        var n = a(42), i = a(113), r = a(87)("IE_PROTO"), o = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = i(e), n(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
        }
    }, 178: function (e, t, a) {
        "use strict";
        var n = a(82), i = a(79), r = a(113), o = a(179), s = a(180), l = a(86), c = a(181), m = a(182);
        i(i.S + i.F * !a(184)(function (e) {
            Array.from(e)
        }), "Array", {
            from: function (e) {
                var t, a, i, p, d = r(e), x = "function" == typeof this ? this : Array, h = arguments.length,
                    u = h > 1 ? arguments[1] : void 0, f = void 0 !== u, b = 0, g = m(d);
                if (f && (u = n(u, h > 2 ? arguments[2] : void 0, 2)), null == g || x == Array && s(g)) for (a = new x(t = l(d.length)); t > b; b++) c(a, b, f ? u(d[b], b) : d[b]); else for (p = g.call(d), a = new x; !(i = p.next()).done; b++) c(a, b, f ? o(p, u, [i.value, b], !0) : i.value);
                return a.length = b, a
            }
        })
    }, 179: function (e, t, a) {
        var n = a(40);
        e.exports = function (e, t, a, i) {
            try {
                return i ? t(n(a)[0], a[1]) : t(a)
            } catch (t) {
                var r = e.return;
                throw void 0 !== r && n(r.call(e)), t
            }
        }
    }, 18: function (e, t, a) {
        "use strict";
        a.r(t), a.d(t, "Headers", function () {
            return c
        }), a.d(t, "Request", function () {
            return f
        }), a.d(t, "Response", function () {
            return g
        }), a.d(t, "DOMException", function () {
            return y
        }), a.d(t, "fetch", function () {
            return j
        });
        var n = {
            searchParams: "URLSearchParams" in self,
            iterable: "Symbol" in self && "iterator" in Symbol,
            blob: "FileReader" in self && "Blob" in self && function () {
                try {
                    return new Blob, !0
                } catch (e) {
                    return !1
                }
            }(),
            formData: "FormData" in self,
            arrayBuffer: "ArrayBuffer" in self
        };
        if (n.arrayBuffer) var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            r = ArrayBuffer.isView || function (e) {
                return e && i.indexOf(Object.prototype.toString.call(e)) > -1
            };

        function o(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return null
        }

        function s(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function l(e) {
            var t = {
                next: function () {
                    var t = e.shift();
                    return null
                }
            };
            return null
        }

        function c(e) {
            this.map = {}, e instanceof c ? e.forEach(function (e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function (e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t])
            }, this)
        }

        function m(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function p(e) {
            return null
        }

        function d(e) {
            var t = new FileReader, a = p(t);
            return t.readAsArrayBuffer(e), a
        }

        function x(e) {

            return null
        }

        function h() {
            return null
        }

        c.prototype.append = function (e, t) {
            e = o(e), t = s(t);
            var a = this.map[e];
            this.map[e] = a ? a + ", " + t : t
        }, c.prototype.delete = function (e) {
            delete this.map[o(e)]
        }, c.prototype.get = function (e) {
            return e = o(e), this.has(e) ? this.map[e] : null
        }, c.prototype.has = function (e) {
            return this.map.hasOwnProperty(o(e))
        }, c.prototype.set = function (e, t) {
            this.map[o(e)] = s(t)
        }, c.prototype.forEach = function (e, t) {
            for (var a in this.map) this.map.hasOwnProperty(a) && e.call(t, this.map[a], a, this)
        }, c.prototype.keys = function () {
            var e = [];
            return this.forEach(function (t, a) {
                e.push(a)
            }), l(e)
        }, c.prototype.values = function () {
            var e = [];
            return this.forEach(function (t) {
                e.push(t)
            }), l(e)
        }, c.prototype.entries = function () {
            var e = [];
            return this.forEach(function (t, a) {
                e.push([a, t])
            }), l(e)
        }, n.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var u = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

        function f(e, t) {
            var a, n, i = (t = t || {}).body;
            if (e instanceof f) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new c(t.headers)), this.method = (a = t.method || this.method || "GET", n = a.toUpperCase(), u.indexOf(n) > -1 ? n : a), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }

        function b(e) {
            return null
        }

        function g(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
        }

        f.prototype.clone = function () {
            return new f(this, {body: this._bodyInit})
        }, h.call(f.prototype), h.call(g.prototype), g.prototype.clone = function () {
            return null
        }, g.error = function () {
            var e = new g(null, {status: 0, statusText: ""});
            return e.type = "error", e
        };
        var w = [301, 302, 303, 307, 308];
        g.redirect = function (e, t) {
            if (-1 === w.indexOf(t)) throw new RangeError("Invalid status code");
            return new g(null, {status: t, headers: {location: e}})
        };
        var y = self.DOMException;
        try {
            new y
        } catch (e) {
            (y = function (e, t) {
                this.message = e, this.name = t;
                var a = Error(e);
                this.stack = a.stack
            }).prototype = Object.create(Error.prototype), y.prototype.constructor = y
        }

        function j(e, t) {
            return null
        }

        j.polyfill = !0, self.fetch || (self.fetch = j, self.Headers = c, self.Request = f, self.Response = g)
    }, 180: function (e, t, a) {
        var n = a(83), i = a(24)("iterator"), r = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (n.Array === e || r[i] === e)
        }
    }, 181: function (e, t, a) {
        "use strict";
        var n = a(39), i = a(50);
        e.exports = function (e, t, a) {
            t in e ? n.f(e, t, i(0, a)) : e[t] = a
        }
    }, 182: function (e, t, a) {
        var n = a(183), i = a(24)("iterator"), r = a(83);
        e.exports = a(26).getIteratorMethod = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || r[n(e)]
        }
    }, 183: function (e, t, a) {
        var n = a(85), i = a(24)("toStringTag"), r = "Arguments" == n(function () {
            return null
        }());
        e.exports = function (e) {
            var t, a, o;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (a = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }(t = Object(e), i)) ? a : r ? n(t) : "Object" == (o = n(t)) && "function" == typeof t.callee ? "Arguments" : o
        }
    }, 184: function (e, t, a) {
        var n = a(24)("iterator"), i = !1;
        try {
            var r = [7][n]();
            r.return = function () {
                i = !0
            }, Array.from(r, function () {
                throw 2
            })
        } catch (e) {
        }
        e.exports = function (e, t) {
            if (!t && !i) return !1;
            var a = !1;
            try {
                var r = [7], o = r[n]();
                o.next = function () {
                    return {done: a = !0}
                }, r[n] = function () {
                    return o
                }, e(r)
            } catch (e) {
            }
            return a
        }
    }, 19: function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return c
        });
        var n = a(1), i = a.n(n), r = a(0), o = a.n(r), s = a(4), l = a.n(s);
        a(5), a(2);

        function c() {
            return null
        }
    }, 21: function (e, t) {
        var a = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = a)
    }, 24: function (e, t, a) {
        var n = a(88)("wks"), i = a(46), r = a(21).Symbol, o = "function" == typeof r;
        (e.exports = function (e) {
            return n[e] || (n[e] = o && r[e] || (o ? r : i)("Symbol." + e))
        }).store = n
    }, 26: function (e, t) {
        var a = e.exports = {version: "2.5.7"};
        "number" == typeof __e && (__e = a)
    }, 33: function (e, t, a) {
        var n = a(39), i = a(50);
        e.exports = a(34) ? function (e, t, a) {
            return n.f(e, t, i(1, a))
        } : function (e, t, a) {
            return e[t] = a, e
        }
    }, 34: function (e, t, a) {
        e.exports = !a(61)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, 362: function (e, t, a) {
        __NEXT_REGISTER_PAGE("/", function () {
            return e.exports = a(130), {page: e.exports.default}
        })
    }, 39: function (e, t, a) {
        var n = a(40), i = a(105), r = a(106), o = Object.defineProperty;
        t.f = a(34) ? Object.defineProperty : function (e, t, a) {
            if (n(e), t = r(t, !0), n(a), i) try {
                return o(e, t, a)
            } catch (e) {
            }
            if ("get" in a || "set" in a) throw TypeError("Accessors not supported!");
            return "value" in a && (e[t] = a.value), e
        }
    }, 40: function (e, t, a) {
        var n = a(41);
        e.exports = function (e) {
            if (!n(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, 41: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, 42: function (e, t) {
        var a = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return a.call(e, t)
        }
    }, 45: function (e, t) {
        var a = Math.ceil, n = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? n : a)(e)
        }
    }, 46: function (e, t) {
        var a = 0, n = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++a + n).toString(36))
        }
    }, 49: function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, 50: function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, 61: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, 62: function (e, t, a) {
        "use strict";
        var n = a(0), i = a.n(n);
        t.a = function () {
            return i.a.createElement(n.Fragment, null, i.a.createElement("script", {src: "https://identity.netlify.com/v1/netlify-identity-widget.js"}), i.a.createElement("script", {dangerouslySetInnerHTML: {__html: "(function () {\n          netlifyIdentity.on('init', function (user) {\n            if (!user) {\n              netlifyIdentity.on('login', function () {\n                document.location.href = '/admin/';\n              });\n            }\n          });\n        })();"}}))
        }
    }, 66: function (e, t, a) {
        "use strict";
        var n = a(1), i = a.n(n), r = (a(5), a(0)), o = a.n(r), s = function (e) {
            null == e && (e = Math), this.grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]], this.p = [];
            for (var t = 0; t < 256; t++) this.p[t] = Math.floor(256 * e.random());
            this.perm = [];
            for (t = 0; t < 512; t++) this.perm[t] = this.p[255 & t]
        };
        s.prototype.dot = function (e, t, a, n) {
            return e[0] * t + e[1] * a + e[2] * n
        }, s.prototype.mix = function (e, t, a) {
            return (1 - a) * e + a * t
        }, s.prototype.fade = function (e) {
            return e * e * e * (e * (6 * e - 15) + 10)
        }, s.prototype.noise = function (e, t, a) {
            var n = Math.floor(e), i = Math.floor(t), r = Math.floor(a);
            e -= n, t -= i, a -= r, n &= 255, i &= 255, r &= 255;
            var o = this.perm[n + this.perm[i + this.perm[r]]] % 12,
                s = this.perm[n + this.perm[i + this.perm[r + 1]]] % 12,
                l = this.perm[n + this.perm[i + 1 + this.perm[r]]] % 12,
                c = this.perm[n + this.perm[i + 1 + this.perm[r + 1]]] % 12,
                m = this.perm[n + 1 + this.perm[i + this.perm[r]]] % 12,
                p = this.perm[n + 1 + this.perm[i + this.perm[r + 1]]] % 12,
                d = this.perm[n + 1 + this.perm[i + 1 + this.perm[r]]] % 12,
                x = this.perm[n + 1 + this.perm[i + 1 + this.perm[r + 1]]] % 12, h = this.dot(this.grad3[o], e, t, a),
                u = this.dot(this.grad3[m], e - 1, t, a), f = this.dot(this.grad3[l], e, t - 1, a),
                b = this.dot(this.grad3[d], e - 1, t - 1, a), g = this.dot(this.grad3[s], e, t, a - 1),
                w = this.dot(this.grad3[p], e - 1, t, a - 1), y = this.dot(this.grad3[c], e, t - 1, a - 1),
                j = this.dot(this.grad3[x], e - 1, t - 1, a - 1), k = this.fade(e), v = this.fade(t), E = this.fade(a),
                z = this.mix(h, u, k), N = this.mix(g, w, k), S = this.mix(f, b, k), C = this.mix(y, j, k),
                T = this.mix(z, S, v), O = this.mix(N, C, v);
            return this.mix(T, O, E)
        };
        var l = s, c = function (e, t, a, n) {
            return Math.sqrt((a -= e) * a + (n -= t) * n)
        };

        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function p(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var a = [], n = !0, i = !1, r = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (a.push(o.value), !t || a.length !== t); n = !0) ;
                } catch (e) {
                    i = !0, r = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return a
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function d(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
                    return a
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function x(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function h(e, t) {
            return !t || "object" !== m(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function f(e, t) {
            return (f = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        a.d(t, "a", function () {
            return j
        });
        var b, g, w,
            y = {light: {lineColor: "#F3F4F4", bgColor: "#FFFFFF"}, dark: {lineColor: "#f3c740", bgColor: "#eab71c"}},
            j = function (e) {
                function t() {
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), h(this, u(t).apply(this, arguments))
                }

                var a, n, r;
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(t, o.a.Component), a = t, (n = [{
                    key: "componentDidMount", value: function () {
                        var e, t, a = this.props, n = a.segments, i = a.growth, r = a.step, o = a.rows, s = a.lineDiff,
                            m = a.curveDiff, x = a.lineWidth, h = a.theme, u = y[h], f = u.lineColor, b = u.bgColor,
                            g = /Trident|MSIE/.test(navigator.userAgent), w = 0,
                            j = document.getElementById("myCanvas-wrapper"), k = document.getElementById("myCanvas"),
                            v = new l, E = k.getContext("2d", {alpha: !1});
                        j.style.opacity = 1;
                        var z = function (a) {
                            var r = t * a, o = v.noise(w, a * s, 0);
                            return ["M0,".concat(r + o * i)].concat(d(new Array(n).fill(null).map(function (t, n) {
                                var o = p(function (t, a, n) {
                                    var r = v.noise(w, t * s, a * m), o = v.noise(w, t * s, (a - .5) * m);
                                    return [e * (a - 1) + e / 2, n + r * i, e * a, n + o * i]
                                }(a, n, r), 4), l = o[0], c = o[1], d = o[2], x = o[3];
                                return "S".concat(l, ",").concat(c, " ").concat(d, ",").concat(x)
                            }))).join(" ")
                        }, N = function () {
                            var a = 2 * window.innerWidth, r = 1.5 * window.innerHeight;
                            k.width = a, k.height = r, E.strokeStyle = f, E.lineWidth = x, E.fillStyle = b, e = c(0, r / 2, a, r / 2) / n, t = (r - i) / (o + 1)
                        };
                        N(), window.addEventListener("resize", N), g || function e() {
                            E.fillRect(0, 0, k.width, k.height);
                            var t = new Array(o).fill(null).map(function (e, t) {
                                return z(t)
                            }).join(" ");
                            w += r, E.stroke(new Path2D(t)), requestAnimationFrame(e)
                        }()
                    }
                }, {
                    key: "render", value: function () {
                        return o.a.createElement("div", {
                            id: "myCanvas-wrapper",
                            className: i.a.dynamic([["857361579", [this.props.rotate]]])
                        }, o.a.createElement("canvas", {
                            id: "myCanvas",
                            className: i.a.dynamic([["857361579", [this.props.rotate]]])
                        }), o.a.createElement(i.a, {
                            styleId: "857361579",
                            css: ["#myCanvas.__jsx-style-dynamic-selector{position:absolute;top:-200px;left:-50%;-webkit-transform:rotate(".concat(this.props.rotate, "deg);-webkit-transform:rotate(").concat(this.props.rotate, "deg);-ms-transform:rotate(").concat(this.props.rotate, "deg);transform:rotate(").concat(this.props.rotate, "deg);}"), "#myCanvas-wrapper.__jsx-style-dynamic-selector{opacity:0;-webkit-transition:opacity 1000ms;-webkit-transition:opacity 1000ms;transition:opacity 1000ms;}"],
                            dynamic: [this.props.rotate]
                        }))
                    }
                }]) && x(a.prototype, n), r && x(a, r), t
            }();
        w = {
            theme: "light",
            segments: 6,
            growth: 70,
            step: .003,
            rows: 60,
            lineDiff: .06,
            curveDiff: 1,
            lineWidth: 2,
            rotate: -8
        }, (g = "defaultProps") in (b = j) ? Object.defineProperty(b, g, {
            value: w,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : b[g] = w
    }, 78: function (e, t) {
        e.exports = !1
    }, 79: function (e, t, a) {
        var n = a(21), i = a(26), r = a(33), o = a(81), s = a(82), l = function (e, t, a) {
            var c, m, p, d, x = e & l.F, h = e & l.G, u = e & l.S, f = e & l.P, b = e & l.B,
                g = h ? n : u ? n[t] || (n[t] = {}) : (n[t] || {}).prototype, w = h ? i : i[t] || (i[t] = {}),
                y = w.prototype || (w.prototype = {});
            for (c in h && (a = t), a) p = ((m = !x && g && void 0 !== g[c]) ? g : a)[c], d = b && m ? s(p, n) : f && "function" == typeof p ? s(Function.call, p) : p, g && o(g, c, p, e & l.U), w[c] != p && r(w, c, d), f && y[c] != p && (y[c] = p)
        };
        n.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
    }, 80: function (e, t, a) {
        var n = a(41), i = a(21).document, r = n(i) && n(i.createElement);
        e.exports = function (e) {
            return r ? i.createElement(e) : {}
        }
    }, 81: function (e, t, a) {
        var n = a(21), i = a(33), r = a(42), o = a(46)("src"), s = Function.toString, l = ("" + s).split("toString");
        a(26).inspectSource = function (e) {
            return s.call(e)
        }, (e.exports = function (e, t, a, s) {
            var c = "function" == typeof a;
            c && (r(a, "name") || i(a, "name", t)), e[t] !== a && (c && (r(a, o) || i(a, o, e[t] ? "" + e[t] : l.join(String(t)))), e === n ? e[t] = a : s ? e[t] ? e[t] = a : i(e, t, a) : (delete e[t], i(e, t, a)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[o] || s.call(this)
        })
    }, 82: function (e, t, a) {
        var n = a(107);
        e.exports = function (e, t, a) {
            if (n(e), void 0 === t) return e;
            switch (a) {
                case 1:
                    return function (a) {
                        return e.call(t, a)
                    };
                case 2:
                    return function (a, n) {
                        return e.call(t, a, n)
                    };

            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, 83: function (e, t) {
        e.exports = {}
    }, 84: function (e, t, a) {
        var n = a(108), i = a(49);
        e.exports = function (e) {
            return n(i(e))
        }
    }, 85: function (e, t) {
        var a = {}.toString;
        e.exports = function (e) {
            return a.call(e).slice(8, -1)
        }
    }, 86: function (e, t, a) {
        var n = a(45), i = Math.min;
        e.exports = function (e) {
            return e > 0 ? i(n(e), 9007199254740991) : 0
        }
    }, 87: function (e, t, a) {
        var n = a(88)("keys"), i = a(46);
        e.exports = function (e) {
            return n[e] || (n[e] = i(e))
        }
    }, 88: function (e, t, a) {
        var n = a(26), i = a(21), r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: n.version,
        })
    }, 89: function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return m
        });
        var n = a(1), i = a.n(n), r = a(0), o = a.n(r), s = a(4), l = a.n(s), c = a(2);

        function m() {
            return null
        }
    }, 9: function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return f
        });
        var n = a(1), i = a.n(n), r = a(0), o = a.n(r), s = (a(5), a(4)), l = a.n(s), c = (a(17), a(3)), m = a(2);


        function d(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function x(e) {
            return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function u(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var f = function (e) {
            function t(e) {
                var a, n, i;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = this, (a = !(i = x(t).call(this, e)) || "object" !== p(i) && "function" != typeof i ? u(n) : i).handleSubmit = a.handleSubmit.bind(u(u(a))), a
            }

            var a, n, r;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }(t, o.a.Component), a = t, (n = [{
                key: "handleSubmit", value: function (e) {
                    e.preventDefault();
                    var t = new FormData(document.getElementById("contact-form"));
                    window.dataLayer && window.dataLayer.push({
                        event: "formSubmitted",
                    }), fetch("".concat("https://api.mojotech.com", "/api/v2/contact_request"), {
                        method: "POST",
                        body: t
                    }).then(function (e) {
                        e.ok && (document.getElementById("submit-contact-button").style.display = "none", document.getElementById("thank-you-confirmation").style.display = "block")
                    })
                }
            }, {
                key: "render", value: function () {
                    return null
                }
            }]) && d(a.prototype, n), r && d(a, r), t
        }()
    }
}, [[362, 1, 0]]]);