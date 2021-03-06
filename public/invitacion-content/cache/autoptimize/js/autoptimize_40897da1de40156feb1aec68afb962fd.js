/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	function (a, b, c) {
		function d(c) {
			var d = b.console;
			f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
		}

		function e(b, c, e, f) {
			if (Object.defineProperty) try {
				return void Object.defineProperty(b, c, {
					configurable: !0,
					enumerable: !0,
					get: function () {
						return d(f), e
					},
					set: function (a) {
						d(f), e = a
					}
				})
			} catch (g) {}
			a._definePropertyBroken = !0, b[c] = e
		}
		a.migrateVersion = "1.4.1";
		var f = {};
		a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
			f = {}, a.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
		var g = a("<input/>", {
				size: 1
			}).attr("size") && a.attrFn,
			h = a.attr,
			i = a.attrHooks.value && a.attrHooks.value.get || function () {
				return null
			},
			j = a.attrHooks.value && a.attrHooks.value.set || function () {
				return c
			},
			k = /^(?:input|button)$/i,
			l = /^[238]$/,
			m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			n = /^(?:checked|selected)$/i;
		e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
			var j = e.toLowerCase(),
				o = b && b.nodeType;
			return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
				get: function (b, d) {
					var e, f = a.prop(b, d);
					return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
				},
				set: function (b, c, d) {
					var e;
					return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
				}
			}, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
		}, a.attrHooks.value = {
			get: function (a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
			},
			set: function (a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
			}
		};
		var o, p, q = a.fn.init,
			r = a.find,
			s = a.parseJSON,
			t = /^\s*</,
			u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		a.fn.init = function (b, e, f) {
			var g, h;
			return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
		}, a.fn.init.prototype = a.fn, a.find = function (a) {
			var b = Array.prototype.slice.call(arguments);
			if ("string" == typeof a && u.test(a)) try {
				document.querySelector(a)
			} catch (c) {
				a = a.replace(v, function (a, b, c, d) {
					return "[" + b + c + '"' + d + '"]'
				});
				try {
					document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
				} catch (e) {
					d("Attribute selector with '#' was not fixed: " + b[0])
				}
			}
			return r.apply(this, b)
		};
		var x;
		for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
		a.parseJSON = function (a) {
			return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
		}, a.uaMatch = function (a) {
			a = a.toLowerCase();
			var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: b[1] || "",
				version: b[2] || "0"
			}
		}, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
			function b(a, c) {
				return new b.fn.init(a, c)
			}
			a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
				var f = a.fn.init.call(this, d, e, c);
				return f instanceof b ? f : b(f)
			}, b.fn.init.prototype = b.fn;
			var c = b(document);
			return d("jQuery.sub() is deprecated"), b
		}, a.fn.size = function () {
			return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
		};
		var y = !1;
		a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
			var d = a.cssHooks[c] && a.cssHooks[c].get;
			d && (a.cssHooks[c].get = function () {
				var a;
				return y = !0, a = d.apply(this, arguments), y = !1, a
			})
		}), a.swap = function (a, b, c, e) {
			var f, g, h = {};
			y || d("jQuery.swap() is undocumented and deprecated");
			for (g in b) h[g] = a.style[g], a.style[g] = b[g];
			f = c.apply(a, e || []);
			for (g in b) a.style[g] = h[g];
			return f
		}, a.ajaxSetup({
			converters: {
				"text json": a.parseJSON
			}
		});
		var z = a.fn.data;
		a.fn.data = function (b) {
			var e, f, g = this[0];
			return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
		};
		var A = /\/(java|ecma)script/i;
		a.clean || (a.clean = function (b, c, e, f) {
			c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
			var g, h, i, j, k = [];
			if (a.merge(k, a.buildFragment(b, c).childNodes), e)
				for (i = function (a) {
						return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
					}, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
			return k
		});
		var B = a.event.add,
			C = a.event.remove,
			D = a.event.trigger,
			E = a.fn.toggle,
			F = a.fn.live,
			G = a.fn.die,
			H = a.fn.load,
			I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			J = new RegExp("\\b(?:" + I + ")\\b"),
			K = /(?:^|\s)hover(\.\S+|)\b/,
			L = function (b) {
				return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
			};
		a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
			a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
		}, a.event.remove = function (a, b, c, d, e) {
			C.call(this, a, L(b) || "", c, d, e)
		}, a.each(["load", "unload", "error"], function (b, c) {
			a.fn[c] = function () {
				var a = Array.prototype.slice.call(arguments, 0);
				return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
			}
		}), a.fn.toggle = function (b, c) {
			if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
			d("jQuery.fn.toggle(handler, handler...) is deprecated");
			var e = arguments,
				f = b.guid || a.guid++,
				g = 0,
				h = function (c) {
					var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
					return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
				};
			for (h.guid = f; g < e.length;) e[g++].guid = f;
			return this.click(h)
		}, a.fn.live = function (b, c, e) {
			return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
		}, a.fn.die = function (b, c) {
			return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
		}, a.event.trigger = function (a, b, c, e) {
			return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
		}, a.each(I.split("|"), function (b, c) {
			a.event.special[c] = {
				setup: function () {
					var b = this;
					return b !== document && (a.event.add(document, c + "." + a.guid, function () {
						a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
					}), a._data(this, c, a.guid++)), !1
				},
				teardown: function () {
					return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
				}
			}
		}), a.event.special.ready = {
			setup: function () {
				this === document && d("'ready' event is deprecated")
			}
		};
		var M = a.fn.andSelf || a.fn.addBack,
			N = a.fn.find;
		if (a.fn.andSelf = function () {
				return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
			}, a.fn.find = function (a) {
				var b = N.apply(this, arguments);
				return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
			}, a.Callbacks) {
			var O = a.Deferred,
				P = [
					["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
					["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
					["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
				];
			a.Deferred = function (b) {
				var c = O(),
					e = c.promise();
				return c.pipe = e.pipe = function () {
					var b = arguments;
					return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
						a.each(P, function (f, g) {
							var h = a.isFunction(b[f]) && b[f];
							c[g[1]](function () {
								var b = h && h.apply(this, arguments);
								b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
							})
						}), b = null
					}).promise()
				}, c.isResolved = function () {
					return d("deferred.isResolved is deprecated"), "resolved" === c.state()
				}, c.isRejected = function () {
					return d("deferred.isRejected is deprecated"), "rejected" === c.state()
				}, b && b.call(c, c), c
			}
		}
	}(jQuery, window);
! function (r) {
	"use strict";

	function a(e) {
		return (e || "").toLowerCase()
	}
	r.fn.cycle = function (l) {
		var e;
		return 0 !== this.length || r.isReady ? this.each(function () {
			var e, i, t, n, s = r(this),
				o = r.fn.cycle.log;
			if (!s.data("cycle.opts")) {
				for (var c in (!1 === s.data("cycle-log") || l && !1 === l.log || i && !1 === i.log) && (o = r.noop), o("--c2 init--"), e = s.data()) e.hasOwnProperty(c) && /^cycle[A-Z]+/.test(c) && (n = e[c], o((t = c.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, a)) + ":", n, "(" + typeof n + ")"), e[t] = n);
				(i = r.extend({}, r.fn.cycle.defaults, e, l || {})).timeoutId = 0, i.paused = i.paused || !1, i.container = s, i._maxZ = i.maxZ, i.API = r.extend({
					_container: s
				}, r.fn.cycle.API), i.API.log = o, i.API.trigger = function (e, t) {
					return i.container.trigger(e, t), i.API
				}, s.data("cycle.opts", i), s.data("cycle.API", i.API), i.API.trigger("cycle-bootstrap", [i, i.API]), i.API.addInitialSlides(), i.API.preInitSlideshow(), i.slides.length && i.API.initSlideshow()
			}
		}) : (e = {
			s: this.selector,
			c: this.context
		}, r.fn.cycle.log("requeuing slideshow (dom not ready)"), r(function () {
			r(e.s, e.c).cycle(l)
		}), this)
	}, r.fn.cycle.API = {
		opts: function () {
			return this._container.data("cycle.opts")
		},
		addInitialSlides: function () {
			var e = this.opts(),
				t = e.slides;
			e.slideCount = 0, e.slides = r(), t = t.jquery ? t : e.container.find(t), e.random && t.sort(function () {
				return Math.random() - .5
			}), e.API.add(t)
		},
		preInitSlideshow: function () {
			var e = this.opts();
			e.API.trigger("cycle-pre-initialize", [e]);
			var t = r.fn.cycle.transitions[e.fx];
			t && r.isFunction(t.preInit) && t.preInit(e), e._preInitialized = !0
		},
		postInitSlideshow: function () {
			var e = this.opts();
			e.API.trigger("cycle-post-initialize", [e]);
			var t = r.fn.cycle.transitions[e.fx];
			t && r.isFunction(t.postInit) && t.postInit(e)
		},
		initSlideshow: function () {
			var e, t = this.opts(),
				i = t.container;
			t.API.calcFirstSlide(), "static" == t.container.css("position") && t.container.css("position", "relative"), r(t.slides[t.currSlide]).css({
				opacity: 1,
				display: "block",
				visibility: "visible"
			}), t.API.stackSlides(t.slides[t.currSlide], t.slides[t.nextSlide], !t.reverse), t.pauseOnHover && (!0 !== t.pauseOnHover && (i = r(t.pauseOnHover)), i.hover(function () {
				t.API.pause(!0)
			}, function () {
				t.API.resume(!0)
			})), t.timeout && (e = t.API.getSlideOpts(t.currSlide), t.API.queueTransition(e, e.timeout + t.delay)), t._initialized = !0, t.API.updateView(!0), t.API.trigger("cycle-initialized", [t]), t.API.postInitSlideshow()
		},
		pause: function (e) {
			var t = this.opts(),
				i = t.API.getSlideOpts(),
				n = t.hoverPaused || t.paused;
			e ? t.hoverPaused = !0 : t.paused = !0, n || (t.container.addClass("cycle-paused"), t.API.trigger("cycle-paused", [t]).log("cycle-paused"), i.timeout && (clearTimeout(t.timeoutId), t.timeoutId = 0, t._remainingTimeout -= r.now() - t._lastQueue, (t._remainingTimeout < 0 || isNaN(t._remainingTimeout)) && (t._remainingTimeout = void 0)))
		},
		resume: function (e) {
			var t = this.opts(),
				i = !t.hoverPaused && !t.paused;
			e ? t.hoverPaused = !1 : t.paused = !1, i || (t.container.removeClass("cycle-paused"), 0 === t.slides.filter(":animated").length && t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed"))
		},
		add: function (e, n) {
			var t, s = this.opts(),
				i = s.slideCount;
			"string" == r.type(e) && (e = r.trim(e)), r(e).each(function (e) {
				var t, i = r(this);
				n ? s.container.prepend(i) : s.container.append(i), s.slideCount++, t = s.API.buildSlideOpts(i), s.slides = n ? r(i).add(s.slides) : s.slides.add(i), s.API.initSlide(t, i, --s._maxZ), i.data("cycle.opts", t), s.API.trigger("cycle-slide-added", [s, t, i])
			}), s.API.updateView(!0), s._preInitialized && i < 2 && 1 <= s.slideCount && (s._initialized ? s.timeout && (t = s.slides.length, s.nextSlide = s.reverse ? t - 1 : 1, s.timeoutId || s.API.queueTransition(s)) : s.API.initSlideshow())
		},
		calcFirstSlide: function () {
			var e, t = this.opts();
			((e = parseInt(t.startingSlide || 0, 10)) >= t.slides.length || e < 0) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, t.nextSlide < 0 && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0))
		},
		calcNextSlide: function () {
			var e, t = this.opts();
			t.reverse ? (e = t.nextSlide - 1 < 0, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1)
		},
		calcTx: function (e, t) {
			var i, n = e;
			return n._tempFx ? i = r.fn.cycle.transitions[n._tempFx] : t && n.manualFx && (i = r.fn.cycle.transitions[n.manualFx]), i = i || r.fn.cycle.transitions[n.fx], n._tempFx = null, this.opts()._tempFx = null, i || (i = r.fn.cycle.transitions.fade, n.API.log('Transition "' + n.fx + '" not found.  Using fade.')), i
		},
		prepareTx: function (e, t) {
			var i, n, s, o, c, l = this.opts();
			l.slideCount < 2 ? l.timeoutId = 0 : (!e || l.busy && !l.manualTrump || (l.API.stopTransition(), l.busy = !1, clearTimeout(l.timeoutId), l.timeoutId = 0), l.busy || 0 === l.timeoutId && !e || (n = l.slides[l.currSlide], s = l.slides[l.nextSlide], o = l.API.getSlideOpts(l.nextSlide), c = l.API.calcTx(o, e), l._tx = c, e && void 0 !== o.manualSpeed && (o.speed = o.manualSpeed), l.nextSlide != l.currSlide && (e || !l.paused && !l.hoverPaused && l.timeout) ? (l.API.trigger("cycle-before", [o, n, s, t]), c.before && c.before(o, n, s, t), i = function () {
				l.busy = !1, l.container.data("cycle.opts") && (c.after && c.after(o, n, s, t), l.API.trigger("cycle-after", [o, n, s, t]), l.API.queueTransition(o), l.API.updateView(!0))
			}, l.busy = !0, c.transition ? c.transition(o, n, s, t, i) : l.API.doTransition(o, n, s, t, i), l.API.calcNextSlide(), l.API.updateView()) : l.API.queueTransition(o)))
		},
		doTransition: function (e, t, i, n, s) {
			function o() {
				a.animate(c.animIn || {
					opacity: 1
				}, c.speed, c.easeIn || c.easing, s)
			}
			var c = e,
				l = r(t),
				a = r(i);
			a.css(c.cssBefore || {}), l.animate(c.animOut || {}, c.speed, c.easeOut || c.easing, function () {
				l.css(c.cssAfter || {}), c.sync || o()
			}), c.sync && o()
		},
		queueTransition: function (e, t) {
			var i = this.opts(),
				n = void 0 !== t ? t : e.timeout;
			return 0 === i.nextSlide && 0 == --i.loop ? (i.API.log("terminating; loop=0"), i.timeout = 0, n ? setTimeout(function () {
				i.API.trigger("cycle-finished", [i])
			}, n) : i.API.trigger("cycle-finished", [i]), void(i.nextSlide = i.currSlide)) : void 0 !== i.continueAuto && (!1 === i.continueAuto || r.isFunction(i.continueAuto) && !1 === i.continueAuto()) ? (i.API.log("terminating automatic transitions"), i.timeout = 0, void(i.timeoutId && clearTimeout(i.timeoutId))) : void(n && (i._lastQueue = r.now(), void 0 === t && (i._remainingTimeout = e.timeout), i.paused || i.hoverPaused || (i.timeoutId = setTimeout(function () {
				i.API.prepareTx(!1, !i.reverse)
			}, n))))
		},
		stopTransition: function () {
			var e = this.opts();
			e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
		},
		advanceSlide: function (e) {
			var t = this.opts();
			return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, t.nextSlide < 0 ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, 0 <= e), !1
		},
		buildSlideOpts: function (e) {
			var t, i, n = this.opts(),
				s = e.data() || {};
			for (var o in s) s.hasOwnProperty(o) && /^cycle[A-Z]+/.test(o) && (t = s[o], i = o.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, a), n.API.log("[" + (n.slideCount - 1) + "]", i + ":", t, "(" + typeof t + ")"), s[i] = t);
			(s = r.extend({}, r.fn.cycle.defaults, n, s)).slideNum = n.slideCount;
			try {
				delete s.API, delete s.slideCount, delete s.currSlide, delete s.nextSlide, delete s.slides
			} catch (e) {}
			return s
		},
		getSlideOpts: function (e) {
			var t = this.opts();
			void 0 === e && (e = t.currSlide);
			var i = t.slides[e],
				n = r(i).data("cycle.opts");
			return r.extend({}, t, n)
		},
		initSlide: function (e, t, i) {
			var n = this.opts();
			t.css(e.slideCss || {}), 0 < i && t.css("zIndex", i), isNaN(e.speed) && (e.speed = r.fx.speeds[e.speed] || r.fx.speeds._default), e.sync || (e.speed = e.speed / 2), t.addClass(n.slideClass)
		},
		updateView: function (e, t, i) {
			var n = this.opts();
			if (n._initialized) {
				var s = n.API.getSlideOpts(),
					o = n.slides[n.currSlide];
				!e && !0 !== t && (n.API.trigger("cycle-update-view-before", [n, s, o]), n.updateView < 0) || (n.slideActiveClass && n.slides.removeClass(n.slideActiveClass).eq(n.currSlide).addClass(n.slideActiveClass), e && n.hideNonActive && n.slides.filter(":not(." + n.slideActiveClass + ")").css("visibility", "hidden"), 0 === n.updateView && setTimeout(function () {
					n.API.trigger("cycle-update-view", [n, s, o, e])
				}, s.speed / (n.sync ? 2 : 1)), 0 !== n.updateView && n.API.trigger("cycle-update-view", [n, s, o, e]), e && n.API.trigger("cycle-update-view-after", [n, s, o]))
			}
		},
		getComponent: function (e) {
			var t = this.opts(),
				i = t[e];
			return "string" == typeof i ? /^\s*[\>|\+|~]/.test(i) ? t.container.find(i) : r(i) : i.jquery ? i : r(i)
		},
		stackSlides: function (e, t, i) {
			var n, s = this.opts();
			e || (e = s.slides[s.currSlide], t = s.slides[s.nextSlide], i = !s.reverse), r(e).css("zIndex", s.maxZ);
			var o = s.maxZ - 2,
				c = s.slideCount;
			if (i) {
				for (n = s.currSlide + 1; n < c; n++) r(s.slides[n]).css("zIndex", o--);
				for (n = 0; n < s.currSlide; n++) r(s.slides[n]).css("zIndex", o--)
			} else {
				for (n = s.currSlide - 1; 0 <= n; n--) r(s.slides[n]).css("zIndex", o--);
				for (n = c - 1; n > s.currSlide; n--) r(s.slides[n]).css("zIndex", o--)
			}
			r(t).css("zIndex", s.maxZ - 1)
		},
		getSlideIndex: function (e) {
			return this.opts().slides.index(e)
		}
	}, r.fn.cycle.log = function () {
		window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
	}, r.fn.cycle.version = function () {
		return "Cycle2: 2.1.6"
	}, r.fn.cycle.transitions = {
		custom: {},
		none: {
			before: function (e, t, i, n) {
				e.API.stackSlides(i, t, n), e.cssBefore = {
					opacity: 1,
					visibility: "visible",
					display: "block"
				}
			}
		},
		fade: {
			before: function (e, t, i, n) {
				var s = e.API.getSlideOpts(e.nextSlide).slideCss || {};
				e.API.stackSlides(t, i, n), e.cssBefore = r.extend(s, {
					opacity: 0,
					visibility: "visible",
					display: "block"
				}), e.animIn = {
					opacity: 1
				}, e.animOut = {
					opacity: 0
				}
			}
		},
		fadeout: {
			before: function (e, t, i, n) {
				var s = e.API.getSlideOpts(e.nextSlide).slideCss || {};
				e.API.stackSlides(t, i, n), e.cssBefore = r.extend(s, {
					opacity: 1,
					visibility: "visible",
					display: "block"
				}), e.animOut = {
					opacity: 0
				}
			}
		},
		scrollHorz: {
			before: function (e, t, i, n) {
				e.API.stackSlides(t, i, n);
				var s = e.container.css("overflow", "hidden").width();
				e.cssBefore = {
					left: n ? s : -s,
					top: 0,
					opacity: 1,
					visibility: "visible",
					display: "block"
				}, e.cssAfter = {
					zIndex: e._maxZ - 2,
					left: 0
				}, e.animIn = {
					left: 0
				}, e.animOut = {
					left: n ? -s : s
				}
			}
		}
	}, r.fn.cycle.defaults = {
		allowWrap: !0,
		autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
		delay: 0,
		easing: null,
		fx: "fade",
		hideNonActive: !0,
		loop: 0,
		manualFx: void 0,
		manualSpeed: void 0,
		manualTrump: !0,
		maxZ: 100,
		pauseOnHover: !1,
		reverse: !1,
		slideActiveClass: "cycle-slide-active",
		slideClass: "cycle-slide",
		slideCss: {
			position: "absolute",
			top: 0,
			left: 0
		},
		slides: "> img",
		speed: 500,
		startingSlide: 0,
		sync: !0,
		timeout: 4e3,
		updateView: 0
	}, r(document).ready(function () {
		r(r.fn.cycle.defaults.autoSelector).cycle()
	})
}(jQuery),
function (l) {
	"use strict";

	function a(e, t) {
		var i, n, s, o = t.autoHeight;
		if ("container" == o) n = l(t.slides[t.currSlide]).outerHeight(), t.container.height(n);
		else if (t._autoHeightRatio) t.container.height(t.container.width() / t._autoHeightRatio);
		else if ("calc" === o || "number" == l.type(o) && 0 <= o) {
			if ((s = "calc" === o ? function (e, t) {
					var i = 0,
						n = -1;
					return t.slides.each(function (e) {
						var t = l(this).height();
						n < t && (n = t, i = e)
					}), i
				}(0, t) : o >= t.slides.length ? 0 : o) == t._sentinelIndex) return;
			t._sentinelIndex = s, t._sentinel && t._sentinel.remove(), (i = l(t.slides[s].cloneNode(!0))).removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), i.css({
				position: "static",
				visibility: "hidden",
				display: "block"
			}).prependTo(t.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), i.find("*").css("visibility", "hidden"), t._sentinel = i
		}
	}

	function r(e, t, i, n, s) {
		var o = l(n).outerHeight();
		t.container.animate({
			height: o
		}, t.autoHeightSpeed, t.autoHeightEasing)
	}

	function d(e, t) {
		t._autoHeightOnResize && (l(window).off("resize orientationchange", t._autoHeightOnResize), t._autoHeightOnResize = null), t.container.off("cycle-slide-added cycle-slide-removed", a), t.container.off("cycle-destroyed", d), t.container.off("cycle-before", r), t._sentinel && (t._sentinel.remove(), t._sentinel = null)
	}
	l.extend(l.fn.cycle.defaults, {
		autoHeight: 0,
		autoHeightSpeed: 250,
		autoHeightEasing: null
	}), l(document).on("cycle-initialized", function (e, t) {
		var i, n = t.autoHeight,
			s = l.type(n),
			o = null;

		function c() {
			a(e, t)
		}
		"string" !== s && "number" !== s || (t.container.on("cycle-slide-added cycle-slide-removed", a), t.container.on("cycle-destroyed", d), "container" == n ? t.container.on("cycle-before", r) : "string" === s && /\d+\:\d+/.test(n) && (i = (i = n.match(/(\d+)\:(\d+)/))[1] / i[2], t._autoHeightRatio = i), "number" !== s && (t._autoHeightOnResize = function () {
			clearTimeout(o), o = setTimeout(c, 50)
		}, l(window).on("resize orientationchange", t._autoHeightOnResize)), setTimeout(c, 30))
	})
}(jQuery),
function (o) {
	"use strict";
	o.extend(o.fn.cycle.defaults, {
		caption: "> .cycle-caption",
		captionTemplate: "{{slideNum}} / {{slideCount}}",
		overlay: "> .cycle-overlay",
		overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
		captionModule: "caption"
	}), o(document).on("cycle-update-view", function (e, i, n, s) {
		"caption" === i.captionModule && o.each(["caption", "overlay"], function () {
			var e = n[this + "Template"],
				t = i.API.getComponent(this);
			t.length && e ? (t.html(i.API.tmpl(e, n, i, s)), t.show()) : t.hide()
		})
	}), o(document).on("cycle-destroyed", function (e, t) {
		o.each(["caption", "overlay"], function () {
			var e = t[this + "Template"];
			t[this] && e && t.API.getComponent("caption").empty()
		})
	})
}(jQuery),
function (l) {
	"use strict";
	var c = l.fn.cycle;
	l.fn.cycle = function (t) {
		var i, n, s, o = l.makeArray(arguments);
		return "number" == l.type(t) ? this.cycle("goto", t) : "string" == l.type(t) ? this.each(function () {
			var e;
			if (i = t, void 0 !== (s = l(this).data("cycle.opts"))) return i = "goto" == i ? "jump" : i, n = s.API[i], l.isFunction(n) ? ((e = l.makeArray(o)).shift(), n.apply(s.API, e)) : void c.log("unknown command: ", i);
			c.log('slideshow must be initialized before sending commands; "' + i + '" ignored')
		}) : c.apply(this, arguments)
	}, l.extend(l.fn.cycle, c), l.extend(c.API, {
		next: function () {
			var e = this.opts();
			if (!e.busy || e.manualTrump) {
				var t = e.reverse ? -1 : 1;
				!1 === e.allowWrap && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next"))
			}
		},
		prev: function () {
			var e = this.opts();
			if (!e.busy || e.manualTrump) {
				var t = e.reverse ? 1 : -1;
				!1 === e.allowWrap && e.currSlide + t < 0 || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev"))
			}
		},
		destroy: function () {
			this.stop();
			var t = this.opts(),
				i = l.isFunction(l._data) ? l._data : l.noop;
			clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stop(), t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"), t.container.removeData(), i(t.container[0], "parsedAttrs", !1), t.retainStylesOnDestroy || (t.container.removeAttr("style"), t.slides.removeAttr("style"), t.slides.removeClass(t.slideActiveClass)), t.slides.each(function () {
				var e = l(this);
				e.removeData(), e.removeClass(t.slideClass), i(this, "parsedAttrs", !1)
			})
		},
		jump: function (e, t) {
			var i, n = this.opts();
			if (!n.busy || n.manualTrump) {
				var s = parseInt(e, 10);
				isNaN(s) || s < 0 || s >= n.slides.length ? n.API.log("goto: invalid slide index: " + s) : s != n.currSlide ? (n.nextSlide = s, clearTimeout(n.timeoutId), n.timeoutId = 0, n.API.log("goto: ", s, " (zero-index)"), i = n.currSlide < n.nextSlide, n._tempFx = t, n.API.prepareTx(!0, i)) : n.API.log("goto: skipping, already on slide", s)
			}
		},
		stop: function () {
			var e = this.opts(),
				t = e.container;
			clearTimeout(e.timeoutId), e.timeoutId = 0, e.API.stopTransition(), e.pauseOnHover && (!0 !== e.pauseOnHover && (t = l(e.pauseOnHover)), t.off("mouseenter mouseleave")), e.API.trigger("cycle-stopped", [e]).log("cycle-stopped")
		},
		reinit: function () {
			var e = this.opts();
			e.API.destroy(), e.container.cycle()
		},
		remove: function (e) {
			for (var t, i, n = this.opts(), s = [], o = 1, c = 0; c < n.slides.length; c++) t = n.slides[c], c == e ? i = t : (s.push(t), l(t).data("cycle.opts").slideNum = o, o++);
			i && (n.slides = l(s), n.slideCount--, l(i).remove(), e == n.currSlide ? n.API.advanceSlide(1) : e < n.currSlide ? n.currSlide-- : n.currSlide++, n.API.trigger("cycle-slide-removed", [n, e, i]).log("cycle-slide-removed"), n.API.updateView())
		}
	}), l(document).on("click.cycle", "[data-cycle-cmd]", function (e) {
		e.preventDefault();
		var t = l(this),
			i = t.data("cycle-cmd"),
			n = t.data("cycle-context") || ".cycle-slideshow";
		l(n).cycle(i, t.data("cycle-arg"))
	})
}(jQuery),
function (o) {
	"use strict";

	function i(i, n) {
		var s;
		i._hashFence ? i._hashFence = !1 : (s = window.location.hash.substring(1), i.slides.each(function (e) {
			if (o(this).data("cycle-hash") == s) {
				if (!0 === n) i.startingSlide = e;
				else {
					var t = i.currSlide < e;
					i.nextSlide = e, i.API.prepareTx(!0, t)
				}
				return !1
			}
		}))
	}
	o(document).on("cycle-pre-initialize", function (e, t) {
		i(t, !0), t._onHashChange = function () {
			i(t, !1)
		}, o(window).on("hashchange", t._onHashChange)
	}), o(document).on("cycle-update-view", function (e, t, i) {
		i.hash && "#" + i.hash != window.location.hash && (t._hashFence = !0, window.location.hash = i.hash)
	}), o(document).on("cycle-destroyed", function (e, t) {
		t._onHashChange && o(window).off("hashchange", t._onHashChange)
	})
}(jQuery),
function (u) {
	"use strict";
	u.extend(u.fn.cycle.defaults, {
		loader: !1
	}), u(document).on("cycle-bootstrap", function (e, r) {
		var d;
		r.loader && (d = r.API.add, r.API.add = function (e, o) {
			var c = [];
			if ("string" == u.type(e)) e = u.trim(e);
			else if ("array" === u.type(e))
				for (var t = 0; t < e.length; t++) e[t] = u(e[t])[0];
			var l = (e = u(e)).length;
			if (!l) return;
			e.css("visibility", "hidden").appendTo("body").each(function (e) {
				var t = 0,
					i = u(this),
					n = i.is("img") ? i : i.find("img");
				if (i.data("index", e), !(n = n.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])')).length) return --l, void c.push(i);

				function s() {
					0 == --t && (--l, function (e) {
						var t;
						"wait" == r.loader ? (c.push(e), 0 === l && (c.sort(a), d.apply(r.API, [c, o]), r.container.removeClass("cycle-loading"))) : (t = u(r.slides[r.currSlide]), d.apply(r.API, [e, o]), t.show(), r.container.removeClass("cycle-loading"))
					}(i))
				}
				t = n.length, n.each(function () {
					this.complete ? s() : u(this).load(function () {
						s()
					}).on("error", function () {
						0 == --t && (r.API.log("slide skipped; img not loaded:", this.src), 0 == --l && "wait" == r.loader && d.apply(r.API, [c, o]))
					})
				})
			}), l && r.container.addClass("cycle-loading");

			function a(e, t) {
				return e.data("index") - t.data("index")
			}
		})
	})
}(jQuery),
function (c) {
	"use strict";

	function n(i, n, s) {
		var o;
		i.API.getComponent("pager").each(function () {
			var t = c(this);
			if (n.pagerTemplate) {
				var e = i.API.tmpl(n.pagerTemplate, n, i, s[0]);
				o = c(e).appendTo(t)
			} else o = t.children().eq(i.slideCount - 1);
			o.on(i.pagerEvent, function (e) {
				i.pagerEventBubble || e.preventDefault(), i.API.page(t, e.currentTarget)
			})
		})
	}

	function s(e, t) {
		var i = this.opts();
		if (!i.busy || i.manualTrump) {
			var n = e.children().index(t),
				s = i.currSlide < n;
			i.currSlide != n && (i.nextSlide = n, i._tempFx = i.pagerFx, i.API.prepareTx(!0, s), i.API.trigger("cycle-pager-activated", [i, e, t]))
		}
	}
	c.extend(c.fn.cycle.defaults, {
		pager: "> .cycle-pager",
		pagerActiveClass: "cycle-pager-active",
		pagerEvent: "click.cycle",
		pagerEventBubble: void 0,
		pagerTemplate: "<span>&bull;</span>"
	}), c(document).on("cycle-bootstrap", function (e, t, i) {
		i.buildPagerLink = n
	}), c(document).on("cycle-slide-added", function (e, t, i, n) {
		t.pager && (t.API.buildPagerLink(t, i, n), t.API.page = s)
	}), c(document).on("cycle-slide-removed", function (e, t, i, n) {
		t.pager && t.API.getComponent("pager").each(function () {
			var e = c(this);
			c(e.children()[i]).remove()
		})
	}), c(document).on("cycle-update-view", function (e, t, i) {
		t.pager && t.API.getComponent("pager").each(function () {
			c(this).children().removeClass(t.pagerActiveClass).eq(t.currSlide).addClass(t.pagerActiveClass)
		})
	}), c(document).on("cycle-destroyed", function (e, t) {
		var i = t.API.getComponent("pager");
		i && (i.children().off(t.pagerEvent), t.pagerTemplate && i.empty())
	})
}(jQuery),
function (e) {
	"use strict";
	e.extend(e.fn.cycle.defaults, {
		next: "> .cycle-next",
		nextEvent: "click.cycle",
		disabledClass: "disabled",
		prev: "> .cycle-prev",
		prevEvent: "click.cycle",
		swipe: !1
	}), e(document).on("cycle-initialized", function (e, t) {
		if (t.API.getComponent("next").on(t.nextEvent, function (e) {
				e.preventDefault(), t.API.next()
			}), t.API.getComponent("prev").on(t.prevEvent, function (e) {
				e.preventDefault(), t.API.prev()
			}), t.swipe) {
			var i = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
				n = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
			t.container.on(i, function (e) {
				t._tempFx = t.swipeFx, t.API.next()
			}), t.container.on(n, function () {
				t._tempFx = t.swipeFx, t.API.prev()
			})
		}
	}), e(document).on("cycle-update-view", function (e, t, i, n) {
		if (!t.allowWrap) {
			var s = t.disabledClass,
				o = t.API.getComponent("next"),
				c = t.API.getComponent("prev"),
				l = t._prevBoundry || 0,
				a = void 0 !== t._nextBoundry ? t._nextBoundry : t.slideCount - 1;
			t.currSlide == a ? o.addClass(s).prop("disabled", !0) : o.removeClass(s).prop("disabled", !1), t.currSlide === l ? c.addClass(s).prop("disabled", !0) : c.removeClass(s).prop("disabled", !1)
		}
	}), e(document).on("cycle-destroyed", function (e, t) {
		t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
	})
}(jQuery),
function (r) {
	"use strict";
	r.extend(r.fn.cycle.defaults, {
		progressive: !1
	}), r(document).on("cycle-pre-initialize", function (e, s) {
		if (s.progressive) {
			var o, t, i = s.API,
				n = i.next,
				c = i.prev,
				l = i.prepareTx,
				a = r.type(s.progressive);
			if ("array" == a) o = s.progressive;
			else if (r.isFunction(s.progressive)) o = s.progressive(s);
			else if ("string" == a) {
				if (t = r(s.progressive), !(o = r.trim(t.html()))) return;
				if (/^(\[)/.test(o)) try {
					o = r.parseJSON(o)
				} catch (e) {
					return void i.log("error parsing progressive slides", e)
				} else(o = o.split(new RegExp(t.data("cycle-split") || "\n")))[o.length - 1] || o.pop()
			}
			l && (i.prepareTx = function (e, t) {
				var i, n;
				e || 0 === o.length ? l.apply(s.API, [e, t]) : t && s.currSlide == s.slideCount - 1 ? (n = o[0], o = o.slice(1), s.container.one("cycle-slide-added", function (e, t) {
					setTimeout(function () {
						t.API.advanceSlide(1)
					}, 50)
				}), s.API.add(n)) : t || 0 !== s.currSlide ? l.apply(s.API, [e, t]) : (i = o.length - 1, n = o[i], o = o.slice(0, i), s.container.one("cycle-slide-added", function (e, t) {
					setTimeout(function () {
						t.currSlide = 1, t.API.advanceSlide(-1)
					}, 50)
				}), s.API.add(n, !0))
			}), n && (i.next = function () {
				var e = this.opts();
				if (o.length && e.currSlide == e.slideCount - 1) {
					var t = o[0];
					o = o.slice(1), e.container.one("cycle-slide-added", function (e, t) {
						n.apply(t.API), t.container.removeClass("cycle-loading")
					}), e.container.addClass("cycle-loading"), e.API.add(t)
				} else n.apply(e.API)
			}), c && (i.prev = function () {
				var e = this.opts();
				if (o.length && 0 === e.currSlide) {
					var t = o.length - 1,
						i = o[t];
					o = o.slice(0, t), e.container.one("cycle-slide-added", function (e, t) {
						t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading")
					}), e.container.addClass("cycle-loading"), e.API.add(i, !0)
				} else c.apply(e.API)
			})
		}
	})
}(jQuery),
function (a) {
	"use strict";
	a.extend(a.fn.cycle.defaults, {
		tmplRegex: "{{((.)?.*?)}}"
	}), a.extend(a.fn.cycle.API, {
		tmpl: function (e, t) {
			var i = new RegExp(t.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"),
				l = a.makeArray(arguments);
			return l.shift(), e.replace(i, function (e, t) {
				var i, n, s, o, c = t.split(".");
				for (i = 0; i < l.length; i++)
					if (s = l[i]) {
						if (1 < c.length)
							for (o = s, n = 0; n < c.length; n++) o = (s = o)[c[n]] || t;
						else o = s[t];
						if (a.isFunction(o)) return o.apply(s, l);
						if (null != o && o != t) return o
					}
				return t
			})
		}
	})
}(jQuery);
var sowb = window.sowb || {};
sowb.SiteOriginSlider = function (a) {
	return {
		playSlideVideo: function (e) {
			a(e).find("video").each(function () {
				void 0 !== this.play && this.play()
			})
		},
		pauseSlideVideo: function (e) {
			a(e).find("video").each(function () {
				void 0 !== this.pause && this.pause()
			})
		},
		setupActiveSlide: function (e, i, t) {
			var s = a(e).find(".cycle-sentinel"),
				n = a(i),
				o = n.find("video.sow-background-element");
			if (void 0 === t ? s.css("height", n.outerHeight()) : s.animate({
					height: n.outerHeight()
				}, t), o.length) {
				var d = n.outerWidth() / n.outerHeight();
				o.outerWidth() / o.outerHeight() < d ? o.css({
					width: "100%",
					height: "auto"
				}) : o.css({
					width: "auto",
					height: "100%"
				}), o.css({
					"margin-left": -Math.ceil(o.width() / 2),
					"margin-top": -Math.ceil(o.height() / 2)
				})
			}
		}
	}
}, jQuery(function (w) {
	sowb.setupSliders = sowb.setupSlider = function () {
		var u = new sowb.SiteOriginSlider(w);
		w(".sow-slider-images").each(function () {
			var n = w(this);
			if (n.data("initialized")) return n;
			var d = n.siblings(".sow-slider-pagination"),
				o = n.closest(".sow-slider-base"),
				a = o.find(".sow-slide-nav"),
				l = n.find(".sow-slider-image"),
				c = n.data("settings");
			l.each(function (e, i) {
				var t = w(i),
					s = t.data("url");
				void 0 !== s && s.hasOwnProperty("url") && (t.click(function (e) {
					e.preventDefault(), window.open(s.url, s.hasOwnProperty("new_window") && s.new_window ? "_blank" : "_self").opener = null
				}), t.find("a").click(function (e) {
					e.stopPropagation()
				}))
			});
			var r = function () {
					var e = n.closest(".so-widget-fittext-wrapper");
					if (0 < e.length && !e.data("fitTextDone")) e.on("fitTextDone", function () {
						r()
					});
					else {
						o.show();

						function t() {
							n.find(".sow-slider-image").each(function () {
								var e = w(this);
								e.css("height", e.find(".sow-slider-image-wrapper").outerHeight())
							})
						}
						if (w(window).on("resize panelsStretchRows", t).resize(), w(sowb).on("setup_widgets", t), n.on({
								"cycle-after": function (e, i, t, s, n) {
									var o = w(this);
									u.playSlideVideo(s), u.setupActiveSlide(o, s), w(s).trigger("sowSlideCycleAfter")
								},
								"cycle-before": function (e, i, t, s, n) {
									var o = w(this);
									d.find("> li").removeClass("sow-active").eq(i.slideNum - 1).addClass("sow-active"), u.pauseSlideVideo(t), u.setupActiveSlide(o, s, i.speed), w(s).trigger("sowSlideCycleBefore")
								},
								"cycle-initialized": function (e, i) {
									u.playSlideVideo(w(this).find(".cycle-slide-active")), u.setupActiveSlide(n, i.slides[0]), d.find(">li").removeClass("sow-active").eq(0).addClass("sow-active"), w(this).find(".cycle-slide-active").trigger("sowSlideInitial"), i.slideCount <= 1 && (d.hide(), a.hide()), w(window).resize(), setTimeout(function () {
										t(), u.setupActiveSlide(n, i.slides[0]), n.find(".cycle-sentinel").empty()
									}, 200)
								}
							}).cycle({
								slides: "> .sow-slider-image",
								speed: c.speed,
								timeout: c.timeout,
								swipe: c.swipe,
								"swipe-fx": "scrollHorz",
								log: !1
							}), n.find("video.sow-background-element").on("loadeddata", function () {
								u.setupActiveSlide(n, n.find(".cycle-slide-active"))
							}), d.add(a).hide(), 1 < l.length)
							if (o.hasClass("sow-slider-is-mobile")) c.nav_always_show_mobile && window.matchMedia("(max-width: " + c.breakpoint + ")").matches && (d.show(), a.show());
							else {
								var i = !1;
								o.mouseenter(function () {
									d.add(a).clearQueue().fadeIn(150), i = !1
								}).mouseleave(function () {
									i = !0, setTimeout(function () {
										i && d.add(a).clearQueue().fadeOut(150), i = !1
									}, 750)
								})
							}
						function s() {
							u.setupActiveSlide(n, n.find(".cycle-slide-active"))
						}
						w(window).on("resize", s), w(sowb).on("setup_widgets", s), d.find("> li > a").click(function (e) {
							e.preventDefault(), n.cycle("goto", w(this).data("goto"))
						}), a.find("> a").click(function (e) {
							e.preventDefault(), n.cycle(w(this).data("action"))
						}), o.keydown(function (e) {
							37 === e.which ? n.cycle("prev") : 39 === e.which && n.cycle("next")
						})
					}
				},
				e = n.find("img"),
				i = 0,
				t = !1;
			e.each(function () {
				w(this);
				this.complete ? i++ : w(this).one("load", function () {
					++i !== e.length || t || (r(), t = !0)
				}).attr("src", w(this).attr("src")), i !== e.length || t || (r(), t = !0)
			}), 0 === e.length && r(), n.data("initialized", !0)
		})
	}, sowb.setupSliders(), w(sowb).on("setup_widgets", sowb.setupSliders)
}), window.sowb = sowb;
! function (e) {
	e.flexslider = function (t, a) {
		var n = e(t);
		n.vars = e.extend({}, e.flexslider.defaults, a);
		var i, s = n.vars.namespace,
			r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
			o = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
			l = "click touchend MSPointerUp keyup",
			c = "",
			d = "vertical" === n.vars.direction,
			u = n.vars.reverse,
			v = n.vars.itemWidth > 0,
			p = "fade" === n.vars.animation,
			m = "" !== n.vars.asNavFor,
			f = {},
			g = !0;
		e.data(t, "flexslider", n), f = {
			init: function () {
				n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = e(n.vars.selector, n), n.container = e(n.containerSelector, n), n.count = n.slides.length, n.syncExists = e(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
					var e = document.createElement("div"),
						t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var a in t)
						if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
					return !1
				}(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = e(n.vars.controlsContainer).length > 0 && e(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = e(n.vars.manualControls).length > 0 && e(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function () {
					return Math.round(Math.random()) - .5
				}), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === e(n.containerSelector).length || n.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
					var t = e.keyCode;
					if (!n.animating && (39 === t || 37 === t)) {
						var a = 39 === t ? n.getTarget("next") : 37 === t && n.getTarget("prev");
						n.flexAnimate(a, n.vars.pauseOnAction)
					}
				}), n.vars.mousewheel && n.bind("mousewheel", function (e, t, a, i) {
					e.preventDefault();
					var s = t < 0 ? n.getTarget("next") : n.getTarget("prev");
					n.flexAnimate(s, n.vars.pauseOnAction)
				}), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
					n.manualPlay || n.manualPause || n.pause()
				}, function () {
					n.manualPause || n.manualPlay || n.stopped || n.play()
				}), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), o && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && e(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
					n.vars.start(n)
				}, 200)
			},
			asNav: {
				setup: function () {
					n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(s + "active-slide").eq(n.currentItem).addClass(s + "active-slide"), r ? (t._slider = n, n.slides.each(function () {
						var t = this;
						t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function (e) {
							e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
						}, !1), t.addEventListener("MSGestureTap", function (t) {
							t.preventDefault();
							var a = e(this),
								i = a.index();
							e(n.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
						})
					})) : n.slides.on(l, function (t) {
						t.preventDefault();
						var a = e(this),
							i = a.index(),
							r = a.offset().left - e(n).scrollLeft();
						r <= 0 && a.hasClass(s + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : e(n.vars.asNavFor).data("flexslider").animating || a.hasClass(s + "active-slide") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
					})
				}
			},
			controlNav: {
				setup: function () {
					n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
				},
				setupPaging: function () {
					var t, a, i = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
						r = 1;
					if (n.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + i + '"></ol>'), n.pagingCount > 1)
						for (var o = 0; o < n.pagingCount; o++) {
							if (a = n.slides.eq(o), t = "thumbnails" === n.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
								var d = a.attr("data-thumbcaption");
								"" != d && void 0 != d && (t += '<span class="' + s + 'caption">' + d + "</span>")
							}
							n.controlNavScaffold.append("<li>" + t + "</li>"), r++
						}
					n.controlsContainer ? e(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function (t) {
						if (t.preventDefault(), "" === c || c === t.type) {
							var a = e(this),
								i = n.controlNav.index(a);
							a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
						}
						"" === c && (c = t.type), f.setToClearWatchedEvent()
					})
				},
				setupManual: function () {
					n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(l, function (t) {
						if (t.preventDefault(), "" === c || c === t.type) {
							var a = e(this),
								i = n.controlNav.index(a);
							a.hasClass(s + "active") || (i > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(i, n.vars.pauseOnAction))
						}
						"" === c && (c = t.type), f.setToClearWatchedEvent()
					})
				},
				set: function () {
					var t = "thumbnails" === n.vars.controlNav ? "img" : "a";
					n.controlNav = e("." + s + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
				},
				active: function () {
					n.controlNav.removeClass(s + "active").eq(n.animatingTo).addClass(s + "active")
				},
				update: function (t, a) {
					n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append(e("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(a).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(a, t) : f.controlNav.active()
				}
			},
			directionNav: {
				setup: function () {
					var t = e('<ul class="' + s + 'direction-nav"><li><a class="' + s + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + s + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
					n.controlsContainer ? (e(n.controlsContainer).append(t), n.directionNav = e("." + s + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = e("." + s + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(l, function (t) {
						t.preventDefault();
						var a;
						"" !== c && c !== t.type || (a = e(this).hasClass(s + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(a, n.vars.pauseOnAction)), "" === c && (c = t.type), f.setToClearWatchedEvent()
					})
				},
				update: function () {
					var e = s + "disabled";
					1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + s + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + s + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
				}
			},
			pausePlay: {
				setup: function () {
					var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
					n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = e("." + s + "pauseplay a", n.controlsContainer)) : (n.append(t), n.pausePlay = e("." + s + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? s + "pause" : s + "play"), n.pausePlay.bind(l, function (t) {
						t.preventDefault(), "" !== c && c !== t.type || (e(this).hasClass(s + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === c && (c = t.type), f.setToClearWatchedEvent()
					})
				},
				update: function (e) {
					"play" === e ? n.pausePlay.removeClass(s + "pause").addClass(s + "play").html(n.vars.playText) : n.pausePlay.removeClass(s + "play").addClass(s + "pause").html(n.vars.pauseText)
				}
			},
			touch: function () {
				function e(e) {
					n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), g = d ? n.h : n.w, S = Number(new Date), x = e.touches[0].pageX, b = e.touches[0].pageY, f = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g, c = d ? b : x, m = d ? x : b, t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", i, !1))
				}

				function a(e) {
					x = e.touches[0].pageX, b = e.touches[0].pageY, h = d ? c - b : c - x, y = d ? Math.abs(h) < Math.abs(x - m) : Math.abs(h) < Math.abs(b - m);
					var t = 500;
					(!y || Number(new Date) - S > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (h /= 0 === n.currentSlide && h < 0 || n.currentSlide === n.last && h > 0 ? Math.abs(h) / g + 2 : 1), n.setProps(f + h, "setTouch")))
				}

				function i(e) {
					if (t.removeEventListener("touchmove", a, !1), n.animatingTo === n.currentSlide && !y && null !== h) {
						var s = u ? -h : h,
							r = s > 0 ? n.getTarget("next") : n.getTarget("prev");
						n.canAdvance(r) && (Number(new Date) - S < 550 && Math.abs(s) > 50 || Math.abs(s) > g / 2) ? n.flexAnimate(r, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
					}
					t.removeEventListener("touchend", i, !1), c = null, m = null, h = null, f = null
				}

				function s(e) {
					e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), T = 0, g = d ? n.h : n.w, S = Number(new Date), f = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g)
				}

				function o(e) {
					e.stopPropagation();
					var a = e.target._slider;
					if (a) {
						var n = -e.translationX,
							i = -e.translationY;
						return T += d ? i : n, h = T, y = d ? Math.abs(T) < Math.abs(-n) : Math.abs(T) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
							t._gesture.stop()
						}) : void((!y || Number(new Date) - S > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (h = T / (0 === a.currentSlide && T < 0 || a.currentSlide === a.last && T > 0 ? Math.abs(T) / g + 2 : 1)), a.setProps(f + h, "setTouch"))))
					}
				}

				function l(e) {
					e.stopPropagation();
					var t = e.target._slider;
					if (t) {
						if (t.animatingTo === t.currentSlide && !y && null !== h) {
							var a = u ? -h : h,
								n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
							t.canAdvance(n) && (Number(new Date) - S < 550 && Math.abs(a) > 50 || Math.abs(a) > g / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
						}
						c = null, m = null, h = null, f = null, T = 0
					}
				}
				var c, m, f, g, h, S, y = !1,
					x = 0,
					b = 0,
					T = 0;
				r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", s, !1), t._slider = n, t.addEventListener("MSGestureChange", o, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
			},
			resize: function () {
				!n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
			},
			smoothHeight: function (e) {
				if (!d || p) {
					var t = p ? n : n.viewport;
					e ? t.animate({
						height: n.slides.eq(n.animatingTo).height()
					}, e) : t.height(n.slides.eq(n.animatingTo).height())
				}
			},
			sync: function (t) {
				var a = e(n.vars.sync).data("flexslider"),
					i = n.animatingTo;
				switch (t) {
					case "animate":
						a.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
						break;
					case "play":
						a.playing || a.asNav || a.play();
						break;
					case "pause":
						a.pause()
				}
			},
			uniqueID: function (t) {
				return t.filter("[id]").add(t.find("[id]")).each(function () {
					var t = e(this);
					t.attr("id", t.attr("id") + "_clone")
				}), t
			},
			pauseInvisible: {
				visProp: null,
				init: function () {
					var e = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (f.pauseInvisible.visProp = e[t] + "Hidden");
					if (f.pauseInvisible.visProp) {
						var a = f.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
						document.addEventListener(a, function () {
							f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
						})
					}
				},
				isHidden: function () {
					return document[f.pauseInvisible.visProp] || !1
				}
			},
			setToClearWatchedEvent: function () {
				clearTimeout(i), i = setTimeout(function () {
					c = ""
				}, 3e3)
			}
		}, n.flexAnimate = function (t, a, i, r, l) {
			if (n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, l) || i) && n.is(":visible")) {
				if (m && r) {
					var c = e(n.vars.asNavFor).data("flexslider");
					if (n.atEnd = 0 === t || t === n.count - 1, c.flexAnimate(t, !0, !1, !0, l), n.direction = n.currentItem < t ? "next" : "prev", c.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t) return n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
					n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / n.visible)
				}
				if (n.animating = !0, n.animatingTo = t, a && n.pause(), n.vars.before(n), n.syncExists && !l && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && f.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) o ? (n.slides.eq(n.currentSlide).css({
					opacity: 0,
					zIndex: 1
				}), n.slides.eq(t).css({
					opacity: 1,
					zIndex: 2
				}), n.wrapup(y)) : (n.slides.eq(n.currentSlide).css({
					zIndex: 1
				}).animate({
					opacity: 0
				}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({
					zIndex: 2
				}).animate({
					opacity: 1
				}, n.vars.animationSpeed, n.vars.easing, n.wrapup));
				else {
					var g, h, S, y = d ? n.slides.filter(":first").height() : n.computedW;
					v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * y : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * y : u ? (n.count - 1 - t + n.cloneOffset) * y : (t + n.cloneOffset) * y, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
						clearTimeout(n.ensureAnimationEnd), n.wrapup(y)
					}), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
						n.wrapup(y)
					}, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
						n.wrapup(y)
					})
				}
				n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
			}
		}, n.wrapup = function (e) {
			p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
		}, n.animateSlides = function () {
			!n.animating && g && n.flexAnimate(n.getTarget("next"))
		}, n.pause = function () {
			clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
		}, n.play = function () {
			n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
		}, n.stop = function () {
			n.pause(), n.stopped = !0
		}, n.canAdvance = function (e, t) {
			var a = m ? n.pagingCount - 1 : n.last;
			return !!t || (!(!m || n.currentItem !== n.count - 1 || 0 !== e || "prev" !== n.direction) || (!m || 0 !== n.currentItem || e !== n.pagingCount - 1 || "next" === n.direction) && (!(e === n.currentSlide && !m) && (!!n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || e !== a || "next" === n.direction) && (!n.atEnd || n.currentSlide !== a || 0 !== e || "next" !== n.direction))))
		}, n.getTarget = function (e) {
			return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
		}, n.setProps = function (e, t, a) {
			var i = function () {
				var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
					i = function () {
						if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
						switch (t) {
							case "setTotal":
								return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
							case "setTouch":
								return u ? e : e;
							case "jumpEnd":
								return u ? e : n.count * e;
							case "jumpStart":
								return u ? n.count * e : e;
							default:
								return e
						}
					}();
				return i * -1 + "px"
			}();
			n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
		}, n.setup = function (t) {
			if (p) n.slides.css({
				width: "100%",
				"float": "left",
				marginRight: "-100%",
				position: "relative"
			}), "init" === t && (o ? n.slides.css({
				opacity: 0,
				display: "block",
				webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
				zIndex: 1
			}).eq(n.currentSlide).css({
				opacity: 1,
				zIndex: 2
			}) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(n.currentSlide).css({
				zIndex: 2
			}).css({
				opacity: 1
			}) : n.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(n.currentSlide).css({
				zIndex: 2
			}).animate({
				opacity: 1
			}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();
			else {
				var a, i;
				"init" === t && (n.viewport = e('<div class="' + s + 'viewport"></div>').css({
					overflow: "hidden",
					position: "relative"
				}).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (i = e.makeArray(n.slides).reverse(), n.slides = e(i), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = e(n.vars.selector, n), a = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
					n.newSlides.css({
						display: "block"
					}), n.doMath(), n.viewport.height(n.h), n.setProps(a * n.h, "init")
				}, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(a * n.computedW, "init"), setTimeout(function () {
					n.doMath(), n.newSlides.css({
						width: n.computedW,
						"float": "left",
						display: "block"
					}), n.vars.smoothHeight && f.smoothHeight()
				}, "init" === t ? 100 : 0))
			}
			v || n.slides.removeClass(s + "active-slide").eq(n.currentSlide).addClass(s + "active-slide"), n.vars.init(n)
		}, n.doMath = function () {
			var e = n.slides.first(),
				t = n.vars.itemMargin,
				a = n.vars.minItems,
				i = n.vars.maxItems;
			n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
		}, n.update = function (e, t) {
			n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
		}, n.addSlide = function (t, a) {
			var i = e(t);
			n.count += 1, n.last = n.count - 1, d && u ? void 0 !== a ? n.slides.eq(n.count - a).after(i) : n.container.prepend(i) : void 0 !== a ? n.slides.eq(a).before(i) : n.container.append(i), n.update(a, "add"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
		}, n.removeSlide = function (t) {
			var a = isNaN(t) ? n.slides.index(e(t)) : t;
			n.count -= 1, n.last = n.count - 1, isNaN(t) ? e(t, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(a, "remove"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
		}, f.init()
	}, e(window).blur(function (e) {
		focused = !1
	}).focus(function (e) {
		focused = !0
	}), e.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: !1,
		animationLoop: !0,
		smoothHeight: !1,
		startAt: 0,
		slideshow: !0,
		slideshowSpeed: 7e3,
		animationSpeed: 600,
		initDelay: 0,
		randomize: !1,
		fadeFirstSlide: !0,
		thumbCaptions: !1,
		pauseOnAction: !0,
		pauseOnHover: !1,
		pauseInvisible: !0,
		useCSS: !0,
		touch: !0,
		video: !1,
		controlNav: !0,
		directionNav: !0,
		prevText: "Previous",
		nextText: "Next",
		keyboard: !0,
		multipleKeyboard: !1,
		mousewheel: !1,
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 1,
		maxItems: 0,
		move: 0,
		allowOneSlide: !0,
		start: function () {},
		before: function () {},
		after: function () {},
		end: function () {},
		added: function () {},
		removed: function () {},
		init: function () {}
	}, e.fn.flexslider = function (t) {
		if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function () {
			var a = e(this),
				n = t.selector ? t.selector : ".slides > li",
				i = a.find(n);
			1 === i.length && t.allowOneSlide === !0 || 0 === i.length ? (i.fadeIn(400), t.start && t.start(a)) : void 0 === a.data("flexslider") && new e.flexslider(this, t)
		});
		var a = e(this).data("flexslider");
		switch (t) {
			case "play":
				a.play();
				break;
			case "pause":
				a.pause();
				break;
			case "stop":
				a.stop();
				break;
			case "next":
				a.flexAnimate(a.getTarget("next"), !0);
				break;
			case "prev":
			case "previous":
				a.flexAnimate(a.getTarget("prev"), !0);
				break;
			default:
				"number" == typeof t && a.flexAnimate(t, !0)
		}
	}
}(jQuery);
! function (n) {
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], n) : n(jQuery)
}(function (n) {
	"use strict";

	function e(e) {
		return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = c), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = n.extend({}, n.fn.swipe.defaults, e), this.each(function () {
			var r = n(this),
				i = r.data(P);
			i || (i = new t(this, e), r.data(P, i))
		})
	}

	function t(e, t) {
		function D(e) {
			if (!(sn() || n(e.target).closest(t.excludedElements, Fn).length > 0)) {
				var r, i = e.originalEvent ? e.originalEvent : e,
					o = O ? i.touches[0] : i;
				return Vn = E, O ? zn = i.touches.length : e.preventDefault(), Hn = 0, jn = null, qn = null, _n = 0, Qn = 0, Cn = 0, Xn = 1, Yn = 0, Gn = gn(), Wn = Tn(), an(), !O || zn === t.fingers || t.fingers === T || q() ? (hn(0, o), Zn = Pn(), 2 == zn && (hn(1, i.touches[1]), Qn = Cn = Sn(Gn[0].start, Gn[1].start)), (t.swipeStatus || t.pinchStatus) && (r = U(i, Vn))) : r = !1, r === !1 ? (Vn = y, U(i, Vn), r) : (t.hold && (ee = setTimeout(n.proxy(function () {
					Fn.trigger("hold", [i.target]), t.hold && (r = t.hold.call(Fn, i, i.target))
				}, this), t.longTapThreshold)), pn(!0), null)
			}
		}

		function L(n) {
			var e = n.originalEvent ? n.originalEvent : n;
			if (Vn !== m && Vn !== y && !cn()) {
				var r, i = O ? e.touches[0] : e,
					o = fn(i);
				if (Bn = Pn(), O && (zn = e.touches.length), t.hold && clearTimeout(ee), Vn = S, 2 == zn && (0 == Qn ? (hn(1, e.touches[1]), Qn = Cn = Sn(Gn[0].start, Gn[1].start)) : (fn(e.touches[1]), Cn = Sn(Gn[0].end, Gn[1].end), qn = yn(Gn[0].end, Gn[1].end)), Xn = mn(Qn, Cn), Yn = Math.abs(Qn - Cn)), zn === t.fingers || t.fingers === T || !O || q()) {
					if (jn = Mn(o.start, o.end), X(n, jn), Hn = On(o.start, o.end), _n = En(), wn(jn, Hn), (t.swipeStatus || t.pinchStatus) && (r = U(e, Vn)), !t.triggerOnTouchEnd || t.triggerOnTouchLeave) {
						var u = !0;
						if (t.triggerOnTouchLeave) {
							var l = Dn(this);
							u = Ln(o.end, l)
						}!t.triggerOnTouchEnd && u ? Vn = N(S) : t.triggerOnTouchLeave && !u && (Vn = N(m)), Vn != y && Vn != m || U(e, Vn)
					}
				} else Vn = y, U(e, Vn);
				r === !1 && (Vn = y, U(e, Vn))
			}
		}

		function R(n) {
			var e = n.originalEvent;
			return O && e.touches.length > 0 ? (ln(), !0) : (cn() && (zn = Kn), Bn = Pn(), _n = En(), _() || !j() ? (Vn = y, U(e, Vn)) : t.triggerOnTouchEnd || 0 == t.triggerOnTouchEnd && Vn === S ? (n.preventDefault(), Vn = m, U(e, Vn)) : !t.triggerOnTouchEnd && B() ? (Vn = m, H(e, Vn, f)) : Vn === S && (Vn = y, U(e, Vn)), pn(!1), null)
		}

		function k() {
			zn = 0, Bn = 0, Zn = 0, Qn = 0, Cn = 0, Xn = 1, an(), pn(!1)
		}

		function A(n) {
			var e = n.originalEvent;
			t.triggerOnTouchLeave && (Vn = N(m), U(e, Vn))
		}

		function I() {
			Fn.unbind(kn, D), Fn.unbind(Un, k), Fn.unbind(An, L), Fn.unbind(In, R), Nn && Fn.unbind(Nn, A), pn(!1)
		}

		function N(n) {
			var e = n,
				r = C(),
				i = j(),
				o = _();
			return !r || o ? e = y : !i || n != S || t.triggerOnTouchEnd && !t.triggerOnTouchLeave ? !i && n == m && t.triggerOnTouchLeave && (e = y) : e = m, e
		}

		function U(n, e) {
			var t = void 0;
			return z() || V() || W() || q() ? ((z() || V()) && (t = H(n, e, p)), (W() || q()) && t !== !1 && (t = H(n, e, h))) : on() && t !== !1 ? t = H(n, e, d) : un() && t !== !1 ? t = H(n, e, g) : rn() && t !== !1 && (t = H(n, e, f)), e === y && k(n), e === m && (O ? 0 == n.touches.length && k(n) : k(n)), t
		}

		function H(e, c, s) {
			var w = void 0;
			if (s == p) {
				if (Fn.trigger("swipeStatus", [c, jn || null, Hn || 0, _n || 0, zn, Gn]), t.swipeStatus && (w = t.swipeStatus.call(Fn, e, c, jn || null, Hn || 0, _n || 0, zn, Gn), w === !1)) return !1;
				if (c == m && F()) {
					if (Fn.trigger("swipe", [jn, Hn, _n, zn, Gn]), t.swipe && (w = t.swipe.call(Fn, e, jn, Hn, _n, zn, Gn), w === !1)) return !1;
					switch (jn) {
						case r:
							Fn.trigger("swipeLeft", [jn, Hn, _n, zn, Gn]), t.swipeLeft && (w = t.swipeLeft.call(Fn, e, jn, Hn, _n, zn, Gn));
							break;
						case i:
							Fn.trigger("swipeRight", [jn, Hn, _n, zn, Gn]), t.swipeRight && (w = t.swipeRight.call(Fn, e, jn, Hn, _n, zn, Gn));
							break;
						case o:
							Fn.trigger("swipeUp", [jn, Hn, _n, zn, Gn]), t.swipeUp && (w = t.swipeUp.call(Fn, e, jn, Hn, _n, zn, Gn));
							break;
						case u:
							Fn.trigger("swipeDown", [jn, Hn, _n, zn, Gn]), t.swipeDown && (w = t.swipeDown.call(Fn, e, jn, Hn, _n, zn, Gn))
					}
				}
			}
			if (s == h) {
				if (Fn.trigger("pinchStatus", [c, qn || null, Yn || 0, _n || 0, zn, Xn, Gn]), t.pinchStatus && (w = t.pinchStatus.call(Fn, e, c, qn || null, Yn || 0, _n || 0, zn, Xn, Gn), w === !1)) return !1;
				if (c == m && Y()) switch (qn) {
					case l:
						Fn.trigger("pinchIn", [qn || null, Yn || 0, _n || 0, zn, Xn, Gn]), t.pinchIn && (w = t.pinchIn.call(Fn, e, qn || null, Yn || 0, _n || 0, zn, Xn, Gn));
						break;
					case a:
						Fn.trigger("pinchOut", [qn || null, Yn || 0, _n || 0, zn, Xn, Gn]), t.pinchOut && (w = t.pinchOut.call(Fn, e, qn || null, Yn || 0, _n || 0, zn, Xn, Gn))
				}
			}
			return s == f ? c !== y && c !== m || (clearTimeout(ne), clearTimeout(ee), J() && !nn() ? ($n = Pn(), ne = setTimeout(n.proxy(function () {
				$n = null, Fn.trigger("tap", [e.target]), t.tap && (w = t.tap.call(Fn, e, e.target))
			}, this), t.doubleTapThreshold)) : ($n = null, Fn.trigger("tap", [e.target]), t.tap && (w = t.tap.call(Fn, e, e.target)))) : s == d ? c !== y && c !== m || (clearTimeout(ne), $n = null, Fn.trigger("doubletap", [e.target]), t.doubleTap && (w = t.doubleTap.call(Fn, e, e.target))) : s == g && (c !== y && c !== m || (clearTimeout(ne), $n = null, Fn.trigger("longtap", [e.target]), t.longTap && (w = t.longTap.call(Fn, e, e.target)))), w
		}

		function j() {
			var n = !0;
			return null !== t.threshold && (n = Hn >= t.threshold), n
		}

		function _() {
			var n = !1;
			return null !== t.cancelThreshold && null !== jn && (n = vn(jn) - Hn >= t.cancelThreshold), n
		}

		function Q() {
			return null === t.pinchThreshold || Yn >= t.pinchThreshold
		}

		function C() {
			var n;
			return n = !t.maxTimeThreshold || !(_n >= t.maxTimeThreshold)
		}

		function X(n, e) {
			if (t.preventDefaultEvents !== !1)
				if (t.allowPageScroll === c) n.preventDefault();
				else {
					var l = t.allowPageScroll === s;
					switch (e) {
						case r:
							(t.swipeLeft && l || !l && t.allowPageScroll != w) && n.preventDefault();
							break;
						case i:
							(t.swipeRight && l || !l && t.allowPageScroll != w) && n.preventDefault();
							break;
						case o:
							(t.swipeUp && l || !l && t.allowPageScroll != v) && n.preventDefault();
							break;
						case u:
							(t.swipeDown && l || !l && t.allowPageScroll != v) && n.preventDefault()
					}
				}
		}

		function Y() {
			var n = G(),
				e = Z(),
				t = Q();
			return n && e && t
		}

		function q() {
			return !!(t.pinchStatus || t.pinchIn || t.pinchOut)
		}

		function W() {
			return !(!Y() || !q())
		}

		function F() {
			var n = C(),
				e = j(),
				t = G(),
				r = Z(),
				i = _(),
				o = !i && r && t && e && n;
			return o
		}

		function V() {
			return !!(t.swipe || t.swipeStatus || t.swipeLeft || t.swipeRight || t.swipeUp || t.swipeDown)
		}

		function z() {
			return !(!F() || !V())
		}

		function G() {
			return zn === t.fingers || t.fingers === T || !O
		}

		function Z() {
			return 0 !== Gn[0].end.x
		}

		function B() {
			return !!t.tap
		}

		function J() {
			return !!t.doubleTap
		}

		function K() {
			return !!t.longTap
		}

		function $() {
			if (null == $n) return !1;
			var n = Pn();
			return J() && n - $n <= t.doubleTapThreshold
		}

		function nn() {
			return $()
		}

		function en() {
			return (1 === zn || !O) && (isNaN(Hn) || Hn < t.threshold)
		}

		function tn() {
			return _n > t.longTapThreshold && Hn < b
		}

		function rn() {
			return !(!en() || !B())
		}

		function on() {
			return !(!$() || !J())
		}

		function un() {
			return !(!tn() || !K())
		}

		function ln() {
			Jn = Pn(), Kn = event.touches.length + 1
		}

		function an() {
			Jn = 0, Kn = 0
		}

		function cn() {
			var n = !1;
			if (Jn) {
				var e = Pn() - Jn;
				e <= t.fingerReleaseThreshold && (n = !0)
			}
			return n
		}

		function sn() {
			return !(Fn.data(P + "_intouch") !== !0)
		}

		function pn(n) {
			n === !0 ? (Fn.bind(An, L), Fn.bind(In, R), Nn && Fn.bind(Nn, A)) : (Fn.unbind(An, L, !1), Fn.unbind(In, R, !1), Nn && Fn.unbind(Nn, A, !1)), Fn.data(P + "_intouch", n === !0)
		}

		function hn(n, e) {
			var t = void 0 !== e.identifier ? e.identifier : 0;
			return Gn[n].identifier = t, Gn[n].start.x = Gn[n].end.x = e.pageX || e.clientX, Gn[n].start.y = Gn[n].end.y = e.pageY || e.clientY, Gn[n]
		}

		function fn(n) {
			var e = void 0 !== n.identifier ? n.identifier : 0,
				t = dn(e);
			return t.end.x = n.pageX || n.clientX, t.end.y = n.pageY || n.clientY, t
		}

		function dn(n) {
			for (var e = 0; e < Gn.length; e++)
				if (Gn[e].identifier == n) return Gn[e]
		}

		function gn() {
			for (var n = [], e = 0; e <= 5; e++) n.push({
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
			return n
		}

		function wn(n, e) {
			e = Math.max(e, vn(n)), Wn[n].distance = e
		}

		function vn(n) {
			if (Wn[n]) return Wn[n].distance
		}

		function Tn() {
			var n = {};
			return n[r] = bn(r), n[i] = bn(i), n[o] = bn(o), n[u] = bn(u), n
		}

		function bn(n) {
			return {
				direction: n,
				distance: 0
			}
		}

		function En() {
			return Bn - Zn
		}

		function Sn(n, e) {
			var t = Math.abs(n.x - e.x),
				r = Math.abs(n.y - e.y);
			return Math.round(Math.sqrt(t * t + r * r))
		}

		function mn(n, e) {
			var t = e / n * 1;
			return t.toFixed(2)
		}

		function yn() {
			return Xn < 1 ? a : l
		}

		function On(n, e) {
			return Math.round(Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)))
		}

		function xn(n, e) {
			var t = n.x - e.x,
				r = e.y - n.y,
				i = Math.atan2(r, t),
				o = Math.round(180 * i / Math.PI);
			return o < 0 && (o = 360 - Math.abs(o)), o
		}

		function Mn(n, e) {
			var t = xn(n, e);
			return t <= 45 && t >= 0 ? r : t <= 360 && t >= 315 ? r : t >= 135 && t <= 225 ? i : t > 45 && t < 135 ? u : o
		}

		function Pn() {
			var n = new Date;
			return n.getTime()
		}

		function Dn(e) {
			e = n(e);
			var t = e.offset(),
				r = {
					left: t.left,
					right: t.left + e.outerWidth(),
					top: t.top,
					bottom: t.top + e.outerHeight()
				};
			return r
		}

		function Ln(n, e) {
			return n.x > e.left && n.x < e.right && n.y > e.top && n.y < e.bottom
		}
		var Rn = O || M || !t.fallbackToMouseEvents,
			kn = Rn ? M ? x ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
			An = Rn ? M ? x ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
			In = Rn ? M ? x ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
			Nn = Rn ? null : "mouseleave",
			Un = M ? x ? "MSPointerCancel" : "pointercancel" : "touchcancel",
			Hn = 0,
			jn = null,
			_n = 0,
			Qn = 0,
			Cn = 0,
			Xn = 1,
			Yn = 0,
			qn = 0,
			Wn = null,
			Fn = n(e),
			Vn = "start",
			zn = 0,
			Gn = null,
			Zn = 0,
			Bn = 0,
			Jn = 0,
			Kn = 0,
			$n = 0,
			ne = null,
			ee = null;
		try {
			Fn.bind(kn, D), Fn.bind(Un, k)
		} catch (te) {
			n.error("events not supported " + kn + "," + Un + " on jQuery.swipe")
		}
		this.enable = function () {
			return Fn.bind(kn, D), Fn.bind(Un, k), Fn
		}, this.disable = function () {
			return I(), Fn
		}, this.destroy = function () {
			I(), Fn.data(P, null), Fn = null
		}, this.option = function (e, r) {
			if (void 0 !== t[e]) {
				if (void 0 === r) return t[e];
				t[e] = r
			} else n.error("Option " + e + " does not exist on jQuery.swipe.options");
			return null
		}
	}
	var r = "left",
		i = "right",
		o = "up",
		u = "down",
		l = "in",
		a = "out",
		c = "none",
		s = "auto",
		p = "swipe",
		h = "pinch",
		f = "tap",
		d = "doubletap",
		g = "longtap",
		w = "horizontal",
		v = "vertical",
		T = "all",
		b = 10,
		E = "start",
		S = "move",
		m = "end",
		y = "cancel",
		O = "ontouchstart" in window,
		x = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
		M = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
		P = "TouchSwipe",
		D = {
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
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: "label, button, input, select, textarea, a, .noSwipe",
			preventDefaultEvents: !0
		};
	n.fn.swipe = function (t) {
		var r = n(this),
			i = r.data(P);
		if (i && "string" == typeof t) {
			if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
			n.error("Method " + t + " does not exist on jQuery.swipe")
		} else if (!(i || "object" != typeof t && t)) return e.apply(this, arguments);
		return r
	}, n.fn.swipe.defaults = D, n.fn.swipe.phases = {
		PHASE_START: E,
		PHASE_MOVE: S,
		PHASE_END: m,
		PHASE_CANCEL: y
	}, n.fn.swipe.directions = {
		LEFT: r,
		RIGHT: i,
		UP: o,
		DOWN: u,
		IN: l,
		OUT: a
	}, n.fn.swipe.pageScroll = {
		NONE: c,
		HORIZONTAL: w,
		VERTICAL: v,
		AUTO: s
	}, n.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		ALL: T
	}
});
jQuery(function (e) {
		e("body.no-js").removeClass("no-js"), e(".entry-content .flexslider:not(.metaslider .flexslider), #metaslider-demo.flexslider, .gallery-format-slider").flexslider({
			namespace: "flex-vantage-"
		}), "undefined" != typeof e.fn.fitVids && e(".entry-content, .entry-content .panel, .entry-video, .woocommerce #main, #masthead-widgets, #header-sidebar").fitVids({
			ignore: ".tableauViz"
		});
		var t = e("body").hasClass("so-vantage-mobile-device"),
			n = e("body").hasClass("so-vantage-customizer-preview"),
			i = e("nav.site-navigation.primary").hasClass("mobile-navigation");
		(!t && e("#scroll-to-top").hasClass("scroll-to-top") || n || t) && (e(window).scroll(function () {
			e(window).scrollTop() > 150 ? e("#scroll-to-top").addClass("displayed") : e("#scroll-to-top").removeClass("displayed")
		}), e("#scroll-to-top").click(function () {
			return e("html, body").animate({
				scrollTop: "0px"
			}), !1
		})), e(".vantage-carousel").each(function () {
			var t = e(this),
				n = t.closest(".widget"),
				i = n.find(".widget-title"),
				a = t.find(".carousel-entry"),
				s = a.eq(0),
				o = 0,
				r = 1,
				d = !1,
				l = !1,
				c = a.length,
				u = s.width() + parseInt(s.css("margin-right")),
				f = function () {
					o < 0 && (o = 0), o >= t.find(".carousel-entry").length - 1 && (o = t.find(".carousel-entry").length - 1, d || l || (d = !0, r++, t.append('<li class="loading"></li>'), e.get(t.data("ajax-url"), {
						query: t.data("query"),
						action: "vantage_carousel_load",
						paged: r
					}, function (n, i) {
						var a = e(n.html),
							s = a.find(".carousel-entry").appendTo(t).hide().fadeIn().length;
						c += s, 0 === s ? (l = !0, t.find(".loading").fadeOut(function () {
							e(this).remove()
						})) : t.find(".loading").remove(), d = !1
					}))), t.css("transition-duration", "0.45s"), t.css("margin-left", -(u * o) + "px")
				};
			i.find("a.previous").click(function () {
				return o -= 1, f(), !1
			}), i.find("a.next").click(function () {
				return o += 1, f(), !1
			});
			var m, h = !1,
				g = 0,
				v = 0,
				p = 0,
				y = 0;
			t.swipe({
				excludedElements: "",
				triggerOnTouchEnd: !0,
				threshold: 75,
				swipeStatus: function (e, t, n, i, a, s, r) {
					if ("start" === t) v = -(u * o), y = (new Date).getTime(), clearInterval(m);
					else if ("move" === t) {
						"left" === n && (i *= -1), w(v + i);
						var d = (new Date).getTime(),
							l = (d - y) / 1e3;
						p = (i - g) / l, y = d, g = i
					} else if ("end" === t)
						if (h = !0, "left" === n && (i *= -1), Math.abs(p) > 400) {
							p *= .1;
							var c = (new Date).getTime(),
								C = 0;
							m = setInterval(function () {
								var e = ((new Date).getTime() - c) / 1e3;
								C += p * e;
								var t = v + i + C,
									a = 30,
									s = Math.abs(p) - a < 0;
								"left" === n ? p += a : p -= a, !s && w(t) || (clearInterval(m), b())
							}, 20)
						} else b();
					else "cancel" === t && f()
				}
			});
			var w = function (e) {
					return e < 50 && e > -(u * c) && (t.css("transition-duration", "0s"), t.css("margin-left", e + "px"), !0)
				},
				b = function () {
					var e = parseInt(t.css("margin-left"));
					o = Math.abs(Math.round(e / u)), f()
				};
			t.on("click", "li.carousel-entry .thumbnail a", function (e) {
				h && (e.preventDefault(), h = !1)
			})
		}), e(".menu-item").children("a").focus(function () {
			e(this).parents("li").addClass("focus")
		}), e(".menu-item").children("a").click(function () {
			e(this).parents("li").removeClass("focus")
		}), e(".menu-item").children("a").focusout(function () {
			e(this).parents("li").removeClass("focus")
		}), e("#header-sidebar .widget_nav_menu", "#masthead-widgets .widget_nav_menu").on("mouseenter", "ul.menu li", function () {
			var t = e(this),
				n = t.find("> ul");
			n.finish().css("opacity", 0).hide().slideDown(200).animate({
				opacity: 1
			}, {
				queue: !1,
				duration: 200
			})
		}).on("mouseleave", "ul.menu li", function () {
			var t = e(this),
				n = t.find("> ul");
			n.finish().fadeOut(150)
		});
		var a = !1;
		e(document).click(function () {
			a || e("#search-icon form").fadeOut(250)
		});
		var s = navigator.userAgent.toLowerCase();
		if (e(document).on("click keydown", "#search-icon-icon", function (t) {
				if ("keydown" == t.type) {
					if (13 !== t.keyCode) return;
					t.preventDefault()
				}
				var n = e(this).parent();
				n.find("form").fadeToggle(250), s.match(/(iPad|iPhone|iPod)/i) ? n.find('input[type="search"]').focus() : setTimeout(function () {
					n.find('input[type="search"]').focus()
				}, 300)
			}), e(document).keyup(function (t) {
				27 == t.keyCode && e("#search-icon form").fadeOut(250)
			}), e(document).on("mouseenter", "#search-icon", function () {
				a = !0
			}).on("mouseleave", "#search-icon", function () {
				a = !1
			}), e(window).resize(function () {
				e("#search-icon .searchform").each(function () {
					e(this).width(e(this).closest(".full-container").width())
				})
			}).resize(), e("nav.site-navigation.primary").hasClass("use-sticky-menu") && !t || (t || n) && i) {
			var o, r, d = e("nav.site-navigation.primary"),
				l = e("body.mega-menu-primary.layout-boxed").length,
				c = function () {
					d.hasClass("sticky") || (o = d.offset().top, r = d.width());
					var t = 0;
					e("body").hasClass("admin-bar") && (t = "absolute" == e("#wpadminbar").css("position") ? 0 : e("#wpadminbar").outerHeight());
					var n = parseInt(o - e(window).scrollTop());
					n < t ? (d.addClass("sticky"), e("body").addClass("sticky-menu"), e("#masthead").css("padding-bottom", d.innerHeight()), l && d.width(r)) : d.hasClass("sticky") && (e("#masthead").css("padding-bottom", 0), d.removeClass("sticky"), e("body").removeClass("sticky-menu"), l && d.width("auto"))
				};
			e(window).scroll(c).resize(c), c()
		}
		e('body.layout-full #main-slider[data-stretch="true"]').each(function () {
			var t = e(this);
			t.find(">div").css("max-width", "100%"), t.find(".slides li").each(function () {
				var t = e(this),
					n = t.find("img.ms-default-image").eq(0);
				n.length || (n = t.find("img").eq(0)), t.css("background-image", "url(" + n.attr("src") + ")"), n.css("visibility", "hidden"), t.wrapInner('<div class="full-container"></div>');
				var i = t.find("a");
				i.length && (t.mouseover(function () {
					t.css("cursor", "hand")
				}), t.mouseout(function () {
					t.css("cursor", "pointer")
				}), t.click(function (t) {
					t.preventDefault();
					var n = e(t.target),
						a = n.is("a") ? n : i;
					window.open(a.attr("href"), a.attr("target"))
				}))
			})
		}), e("#header-sidebar").each(function () {
			var t = e(this),
				n = 0;
			if (t.find("> aside").each(function () {
					var e = (t.outerHeight() - t.find("> aside").outerHeight()) / 2;
					e > n && (n = e)
				}), n > 15 ? t.css({
					"padding-top": n,
					"padding-bottom": n
				}) : (n = -n + 15, e("#masthead .logo > *").css({
					"padding-top": n,
					"padding-bottom": n
				})), t.hasClass("no-logo-overlay")) {
				var i = function () {
					t.closest("#masthead").removeClass("force-responsive");
					var n = e("#masthead .logo").find("h1, img");
					t.offset().left < n.offset().left + n.outerWidth() && t.closest("#masthead").addClass("force-responsive")
				};
				e(window).resize(i), i()
			}
		}), e("#colophon #footer-widgets .widget_nav_menu a").each(function () {
			var t = (e(this), e(this).parents(".sub-menu").length),
				n = 10 * t + "px";
			e(this).css("padding-left", n)
		})
	}),
	function (e) {
		e(window).load(function () {
			var t = e(".masthead-logo-in-menu").height(),
				n = e(".masthead-logo-in-menu .menu > .menu-item").outerHeight(),
				i = e(".masthead-logo-in-menu .logo").outerHeight();
			t > n && e(".masthead-logo-in-menu .menu > .menu-item").css("margin-top", (t - n) / 2), t > i && e(".masthead-logo-in-menu .logo").css("margin-top", (t - i) / 2)
		})
	}(jQuery);
! function (t) {
	"use strict";
	t.fn.fitVids = function (e) {
		var i = {
			customSelector: null,
			ignore: null
		};
		if (!document.getElementById("fit-vids-style")) {
			var r = document.head || document.getElementsByTagName("head")[0],
				a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
				d = document.createElement("div");
			d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1])
		}
		return e && t.extend(i, e), this.each(function () {
			var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
			i.customSelector && e.push(i.customSelector);
			var r = ".fitvidsignore";
			i.ignore && (r = r + ", " + i.ignore);
			var a = t(this).find(e.join(","));
			a = a.not("object object"), a = a.not(r), a.each(function () {
				var e = t(this);
				if (!(e.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
					e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
					var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
						a = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
						d = i / a;
					if (!e.attr("id")) {
						var o = "fitvid" + Math.floor(999999 * Math.random());
						e.attr("id", o)
					}
					e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * d + "%"), e.removeAttr("height").removeAttr("width")
				}
			})
		})
	}
}(window.jQuery || window.Zepto);
jQuery(function (a) {
	var d = a(panelsStyles.fullContainer);
	0 === d.length && (d = a("body"));

	function e() {
		var e = a(".siteorigin-panels-stretch.panel-row-style");
		e.each(function () {
			var e = a(this),
				t = e.data("stretch-type"),
				r = "full-stretched-padded" === t ? "" : 0;
			e.css({
				"margin-left": 0,
				"margin-right": 0,
				"padding-left": r,
				"padding-right": r
			});
			var i = e.offset().left - d.offset().left,
				n = d.outerWidth() - i - e.parent().outerWidth();
			e.css({
				"margin-left": -i,
				"margin-right": -n,
				"padding-left": "full" === t ? i : r,
				"padding-right": "full" === t ? n : r
			});
			var l = e.find("> .panel-grid-cell");
			"full-stretched" === t && 1 === l.length && l.css({
				"padding-left": 0,
				"padding-right": 0
			}), e.css({
				"border-left": r,
				"border-right": r
			})
		}), e.length && a(window).trigger("panelsStretchRows")
	}
	a(window).on("resize load", e), e(), a("body").removeClass("siteorigin-panels-before-js")
});
var sowb = window.sowb || {};
! function (o) {
	o.fn.fitText = function (t, i) {
		var e = t || 1,
			n = o.extend({
				minFontSize: Number.NEGATIVE_INFINITY,
				maxFontSize: Number.POSITIVE_INFINITY
			}, i);
		return this.each(function () {
			function t() {
				i.css("font-size", Math.max(Math.min(i.width() / (10 * e), parseFloat(n.maxFontSize)), parseFloat(n.minFontSize)))
			}
			var i = o(this);
			t(), o(window).on("resize.fittext orientationchange.fittext", t), o(sowb).on("setup_widgets", t)
		})
	}
}(jQuery), jQuery(function (e) {
	sowb.runFitText = function () {
		e(".so-widget-fittext-wrapper").each(function () {
			var t = e(this);
			if (!t.is(":visible") || t.data("fitTextDone")) return t;
			var i = t.data("fitTextCompressor") || .85;
			t.find("h1,h2,h3,h4,h5,h6").each(function () {
				var t = e(this);
				t.fitText(i, {
					minFontSize: "12px",
					maxFontSize: t.css("font-size")
				})
			}), t.data("fitTextDone", !0), t.trigger("fitTextDone")
		})
	}, e(window).on("resize", sowb.runFitText), e(sowb).on("setup_widgets", sowb.runFitText), sowb.runFitText()
}), window.sowb = sowb;
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	function b(b, d) {
		var e, f, g, h = b.nodeName.toLowerCase();
		return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
	}

	function c(b) {
		return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
			return "hidden" === a.css(this, "visibility")
		}).length
	}
	a.ui = a.ui || {}, a.extend(a.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), a.fn.extend({
		scrollParent: function (b) {
			var c = this.css("position"),
				d = "absolute" === c,
				e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				f = this.parents().filter(function () {
					var b = a(this);
					return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
				}).eq(0);
			return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
		},
		uniqueId: function () {
			var a = 0;
			return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++a)
				})
			}
		}(),
		removeUniqueId: function () {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
			})
		}
	}), a.extend(a.expr[":"], {
		data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
			return function (c) {
				return !!a.data(c, b)
			}
		}) : function (b, c, d) {
			return !!a.data(b, d[3])
		},
		focusable: function (c) {
			return b(c, !isNaN(a.attr(c, "tabindex")))
		},
		tabbable: function (c) {
			var d = a.attr(c, "tabindex"),
				e = isNaN(d);
			return (e || d >= 0) && b(c, !e)
		}
	}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (b, c) {
		function d(b, c, d, f) {
			return a.each(e, function () {
				c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
			}), c
		}
		var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
			f = c.toLowerCase(),
			g = {
				innerWidth: a.fn.innerWidth,
				innerHeight: a.fn.innerHeight,
				outerWidth: a.fn.outerWidth,
				outerHeight: a.fn.outerHeight
			};
		a.fn["inner" + c] = function (b) {
			return void 0 === b ? g["inner" + c].call(this) : this.each(function () {
				a(this).css(f, d(this, b) + "px")
			})
		}, a.fn["outer" + c] = function (b, e) {
			return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function () {
				a(this).css(f, d(this, b, !0, e) + "px")
			})
		}
	}), a.fn.addBack || (a.fn.addBack = function (a) {
		return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
	}), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
		return function (c) {
			return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
		}
	}(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
		focus: function (b) {
			return function (c, d) {
				return "number" == typeof c ? this.each(function () {
					var b = this;
					setTimeout(function () {
						a(b).focus(), d && d.call(b)
					}, c)
				}) : b.apply(this, arguments)
			}
		}(a.fn.focus),
		disableSelection: function () {
			var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function () {
				return this.bind(a + ".ui-disableSelection", function (a) {
					a.preventDefault()
				})
			}
		}(),
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function (b) {
			if (void 0 !== b) return this.css("zIndex", b);
			if (this.length)
				for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
					if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
					e = e.parent()
				}
			return 0
		}
	}), a.ui.plugin = {
		add: function (b, c, d) {
			var e, f = a.ui[b].prototype;
			for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
		},
		call: function (a, b, c, d) {
			var e, f = a.plugins[b];
			if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
				for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
		}
	}
});

window.Modernizr = function (a, b, c) {
	function z(a) {
		j.cssText = a
	}

	function A(a, b) {
		return z(m.join(a + ";") + (b || ""))
	}

	function B(a, b) {
		return typeof a === b
	}

	function C(a, b) {
		return !!~("" + a).indexOf(b)
	}

	function D(a, b) {
		for (var d in a) {
			var e = a[d];
			if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
		}
		return !1
	}

	function E(a, b, d) {
		for (var e in a) {
			var f = b[a[e]];
			if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
		}
		return !1
	}

	function F(a, b, c) {
		var d = a.charAt(0).toUpperCase() + a.slice(1),
			e = (a + " " + o.join(d + " ") + d).split(" ");
		return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
	}
	var d = "2.6.2",
		e = {},
		f = !0,
		g = b.documentElement,
		h = "modernizr",
		i = b.createElement(h),
		j = i.style,
		k, l = {}.toString,
		m = " -webkit- -moz- -o- -ms- ".split(" "),
		n = "Webkit Moz O ms",
		o = n.split(" "),
		p = n.toLowerCase().split(" "),
		q = {},
		r = {},
		s = {},
		t = [],
		u = t.slice,
		v, w = function (a, c, d, e) {
			var f, i, j, k, l = b.createElement("div"),
				m = b.body,
				n = m || b.createElement("body");
			if (parseInt(d, 10))
				while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
			return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
		},
		x = {}.hasOwnProperty,
		y;
	!B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {
		return x.call(a, b)
	} : y = function (a, b) {
		return b in a && B(a.constructor.prototype[b], "undefined")
	}, Function.prototype.bind || (Function.prototype.bind = function (b) {
		var c = this;
		if (typeof c != "function") throw new TypeError;
		var d = u.call(arguments, 1),
			e = function () {
				if (this instanceof e) {
					var a = function () {};
					a.prototype = c.prototype;
					var f = new a,
						g = c.apply(f, d.concat(u.call(arguments)));
					return Object(g) === g ? g : f
				}
				return c.apply(b, d.concat(u.call(arguments)))
			};
		return e
	}), q.csstransforms = function () {
		return !!F("transform")
	}, q.csstransforms3d = function () {
		var a = !!F("perspective");
		return a && "webkitPerspective" in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
			a = b.offsetLeft === 9 && b.offsetHeight === 3
		}), a
	}, q.csstransitions = function () {
		return F("transition")
	};
	for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
	return e.addTest = function (a, b) {
		if (typeof a == "object")
			for (var d in a) y(a, d) && e.addTest(d, a[d]);
		else {
			a = a.toLowerCase();
			if (e[a] !== c) return e;
			b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
		}
		return e
	}, z(""), i = k = null, e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
		return D([a])
	}, e.testAllProps = F, e.testStyles = w, e.prefixed = function (a, b, c) {
		return b ? F(a, b, c) : F(a, "pfx")
	}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document);
(function (e) {
	if (typeof define === "function" && define.amd) {
		define(["jquery", "modernizr"], e)
	} else {
		e(window.jQuery, window.Modernizr)
	}
})(function (e, t, n) {
	"use strict";

	function r(e) {
		if (!e) {
			return ""
		}
		return e.replace(/([A-Z])/g, function (e, t) {
			return "-" + t.toLowerCase()
		}).replace(/^ms-/, "-ms-")
	}

	function g(t, n, r) {
		var i, s, o;
		var u = null;
		var a = 0;
		r = r || {};
		var f = function () {
			a = r.leading === false ? 0 : e.now();
			u = null;
			o = t.apply(i, s);
			i = s = null
		};
		return function () {
			var l = e.now();
			if (!a && r.leading === false) {
				a = l
			}
			var c = n - (l - a);
			i = this;
			s = arguments;
			if (c <= 0 || c > n) {
				clearTimeout(u);
				u = null;
				a = l;
				o = t.apply(i, s);
				i = s = null
			} else if (!u && r.trailing !== false) {
				u = setTimeout(f, c)
			}
			return o
		}
	}
	if (typeof t !== "object") {
		throw new Error("Shuffle.js requires Modernizr.\n" + "http://vestride.github.io/Shuffle/#dependencies")
	}
	var i = t.prefixed("transition");
	var s = t.prefixed("transitionDelay");
	var o = t.prefixed("transitionDuration");
	var u = {
		WebkitTransition: "webkitTransitionEnd",
		transition: "transitionend"
	}[i];
	var a = t.prefixed("transform");
	var f = r(a);
	var l = t.csstransforms && t.csstransitions;
	var c = t.csstransforms3d;
	var h = "shuffle";
	var p = "all";
	var d = "groups";
	var v = 1;
	var m = .001;
	var y = 0;
	var b = function (t, n) {
		n = n || {};
		e.extend(this, b.options, n, b.settings);
		this.$el = e(t);
		this.$window = e(window);
		this.unique = "shuffle_" + y++;
		this._fire(b.EventType.LOADING);
		this._init();
		setTimeout(e.proxy(function () {
			this.initialized = true;
			this._fire(b.EventType.DONE)
		}, this), 16)
	};
	b.EventType = {
		LOADING: "loading",
		DONE: "done",
		SHRINK: "shrink",
		SHRUNK: "shrunk",
		FILTER: "filter",
		FILTERED: "filtered",
		SORTED: "sorted",
		LAYOUT: "layout",
		REMOVED: "removed"
	};
	b.prototype = {
		_init: function () {
			var t = this,
				n, r, s = e.proxy(t._onResize, t),
				o = t.throttle ? t.throttle(s, t.throttleTime) : s,
				u = t.initialSort ? t.initialSort : null;
			t._layoutList = [];
			t._shrinkList = [];
			t._setVars();
			t._resetCols();
			t._addClasses();
			t._initItems();
			t.$window.on("resize." + h + "." + t.unique, o);
			n = t.$el.css(["paddingLeft", "paddingRight", "position"]);
			r = t._getOuterWidth(t.$el[0]);
			if (n.position === "static") {
				t.$el[0].style.position = "relative"
			}
			t.offset = {
				left: parseInt(n.paddingLeft, 10) || 0,
				top: parseInt(n.paddingTop, 10) || 0
			};
			t._setColumns(parseInt(r, 10));
			t.shuffle(t.group, u);
			if (t.supported) {
				setTimeout(function () {
					t._setTransitions();
					t.$el[0].style[i] = "height " + t.speed + "ms " + t.easing
				}, 0)
			}
		},
		_addClasses: function () {
			this.$el.addClass(h);
			this.$items.addClass("shuffle-item filtered")
		},
		_setVars: function () {
			var t = this,
				n = t.columnWidth;
			t.$items = t._getItems();
			if (n === 0 && t.sizer !== null) {
				n = t.sizer
			}
			if (typeof n === "string") {
				t.$sizer = t.$el.find(n)
			} else if (n && n.nodeType && n.nodeType === 1) {
				t.$sizer = e(n)
			} else if (n && n.jquery) {
				t.$sizer = n
			}
			if (t.$sizer && t.$sizer.length) {
				t.useSizer = true;
				t.sizer = t.$sizer[0]
			}
		},
		_filter: function (t, r) {
			var i = this,
				s = r !== n,
				o = s ? r : i.$items,
				u = e();
			t = t || i.lastFilter;
			i._fire(b.EventType.FILTER);
			if (e.isFunction(t)) {
				o.each(function () {
					var n = e(this);
					if (t.call(n[0], n, i)) {
						u = u.add(n)
					}
				})
			} else {
				i.group = t;
				if (t === p) {
					u = o
				} else {
					o.each(function () {
						var n = e(this),
							r = n.data(d),
							s = i.delimeter && !e.isArray(r) ? r.split(i.delimeter) : r;
						if (e.inArray(t, s) > -1) {
							u = u.add(n)
						}
					})
				}
			}
			i._toggleFilterClasses(o, u);
			o = null;
			r = null;
			return u
		},
		_toggleFilterClasses: function (t, n) {
			var r = "concealed",
				i = "filtered";
			t.filter(n).each(function () {
				var t = e(this);
				if (t.hasClass(r)) {
					t.removeClass(r)
				}
				if (!t.hasClass(i)) {
					t.addClass(i)
				}
			});
			t.not(n).each(function () {
				var t = e(this);
				if (!t.hasClass(r)) {
					t.addClass(r)
				}
				if (t.hasClass(i)) {
					t.removeClass(i)
				}
			})
		},
		_initItems: function (e) {
			e = e || this.$items;
			e.css(this.itemCss).data("position", {
				x: 0,
				y: 0
			})
		},
		_updateItemCount: function () {
			this.visibleItems = this.$items.filter(".filtered").length
		},
		_setTransition: function (e) {
			e.style[i] = f + " " + this.speed + "ms " + this.easing
		},
		_setTransitions: function (e) {
			var t = this;
			e = e || t.$items;
			e.each(function () {
				t._setTransition(this)
			})
		},
		_setSequentialDelay: function (t) {
			var n = this;
			if (!n.supported) {
				return
			}
			e.each(t, function (t, r) {
				r.style[s] = "0ms," + (t + 1) * n.sequentialFadeDelay + "ms";
				e(r).on(u + "." + n.unique, function (t) {
					var r = t.currentTarget;
					if (r === t.target) {
						r.style[s] = "0ms";
						e(r).off(u + "." + n.unique)
					}
				})
			})
		},
		_getItems: function () {
			return this.$el.children(this.itemSelector)
		},
		_getPreciseDimension: function (t, n) {
			var r;
			if (window.getComputedStyle) {
				r = window.getComputedStyle(t, null)[n]
			} else {
				r = e(t).css(n)
			}
			return parseFloat(r)
		},
		_getOuterWidth: function (t, n) {
			var r = t.offsetWidth;
			if (n) {
				var i = e(t).css(["marginLeft", "marginRight"]);
				var s = parseFloat(i.marginLeft) || 0;
				var o = parseFloat(i.marginRight) || 0;
				r += s + o
			}
			return r
		},
		_getOuterHeight: function (t, n) {
			var r = t.offsetHeight;
			if (n) {
				var i = e(t).css(["marginTop", "marginBottom"]);
				var s = parseFloat(i.marginTop) || 0;
				var o = parseFloat(i.marginBottom) || 0;
				r += s + o
			}
			return r
		},
		_getColumnSize: function (t, n) {
			var r;
			if (e.isFunction(this.columnWidth)) {
				r = this.columnWidth(n)
			} else if (this.useSizer) {
				r = this._getPreciseDimension(this.sizer, "width")
			} else if (this.columnWidth) {
				r = this.columnWidth
			} else if (this.$items.length > 0) {
				r = this._getOuterWidth(this.$items[0], true)
			} else {
				r = n
			}
			if (r === 0) {
				r = n
			}
			return r + t
		},
		_getGutterSize: function (t) {
			var n;
			if (e.isFunction(this.gutterWidth)) {
				n = this.gutterWidth(t)
			} else if (this.useSizer) {
				n = this._getPreciseDimension(this.sizer, "marginLeft")
			} else {
				n = this.gutterWidth
			}
			return n
		},
		_setColumns: function (e) {
			var t = e || this._getOuterWidth(this.$el[0]);
			var n = this._getGutterSize(t);
			var r = this._getColumnSize(n, t);
			var i = (t + n) / r;
			if (Math.abs(Math.round(i) - i) < .03) {
				i = Math.round(i)
			}
			this.cols = Math.max(Math.floor(i), 1);
			this.containerWidth = t;
			this.colWidth = r
		},
		_setContainerSize: function () {
			this.$el.css("height", Math.max.apply(Math, this.colYs))
		},
		_fire: function (e, t) {
			this.$el.trigger(e + "." + h, t && t.length ? t : [this])
		},
		_layout: function (t, n, r) {
			var i = this;
			n = n || i._filterEnd;
			e.each(t, function (t, s) {
				var o = e(s);
				var u = o.data();
				var a = u.position;
				var f = i._getItemPosition(o);
				o.data("position", f);
				if (f.x === a.x && f.y === a.y && u.scale === v) {
					return
				}
				var l = {
					$item: o,
					x: f.x,
					y: f.y,
					scale: v
				};
				if (r) {
					l.skipTransition = true;
					l.opacity = 0
				} else {
					l.opacity = 1;
					l.callback = n
				}
				i.styleQueue.push(l);
				i._layoutList.push(o[0])
			});
			i._processStyleQueue();
			i._setContainerSize()
		},
		_resetCols: function () {
			var e = this.cols;
			this.colYs = [];
			while (e--) {
				this.colYs.push(0)
			}
		},
		_reLayout: function () {
			this._resetCols();
			if (this.lastSort) {
				this.sort(this.lastSort, true)
			} else {
				this._layout(this.$items.filter(".filtered").get(), this._filterEnd)
			}
		},
		_getItemPosition: function (e) {
			var t = this;
			var n = t._getOuterWidth(e[0], true);
			var r = n / t.colWidth;
			if (Math.abs(Math.round(r) - r) < .03) {
				r = Math.round(r)
			}
			var i = Math.min(Math.ceil(r), t.cols);
			if (i === 1) {
				return t._placeItem(e, t.colYs)
			} else {
				var s = t.cols + 1 - i,
					o = [],
					u, a;
				for (a = 0; a < s; a++) {
					u = t.colYs.slice(a, a + i);
					o[a] = Math.max.apply(Math, u)
				}
				return t._placeItem(e, o)
			}
		},
		_placeItem: function (e, t) {
			var n = this,
				r = Math.min.apply(Math, t),
				i = 0;
			for (var s = 0, o = t.length; s < o; s++) {
				if (t[s] >= r - n.buffer && t[s] <= r + n.buffer) {
					i = s;
					break
				}
			}
			var u = {
				x: Math.round(n.colWidth * i + n.offset.left),
				y: Math.round(r + n.offset.top)
			};
			var a = r + n._getOuterHeight(e[0], true),
				f = n.cols + 1 - o;
			for (s = 0; s < f; s++) {
				n.colYs[i + s] = a
			}
			return u
		},
		_shrink: function (t, n) {
			var r = this,
				i = t || r.$items.filter(".concealed");
			n = n || r._shrinkEnd;
			if (!i.length) {
				return
			}
			r._fire(b.EventType.SHRINK);
			i.each(function () {
				var t = e(this);
				var i = t.data();
				var s = i.scale === m;
				if (s) {
					return
				}
				var o = {
					$item: t,
					x: i.position.x,
					y: i.position.y,
					scale: m,
					opacity: 0,
					callback: n
				};
				r.styleQueue.push(o);
				r._shrinkList.push(t[0])
			})
		},
		_onResize: function () {
			if (!this.enabled || this.destroyed) {
				return
			}
			var e = this._getOuterWidth(this.$el[0]);
			if (e === this.containerWidth) {
				return
			}
			this.resized()
		},
		_getItemTransformString: function (e, t, n) {
			if (c) {
				return "translate3d(" + e + "px, " + t + "px, 0) scale3d(" + n + ", " + n + ", 1)"
			} else {
				return "translate(" + e + "px, " + t + "px) scale(" + n + ", " + n + ")"
			}
		},
		_getStylesForTransition: function (e) {
			var t = {
				opacity: e.opacity
			};
			if (this.supported) {
				if (e.x !== n) {
					t[a] = this._getItemTransformString(e.x, e.y, e.scale)
				}
			} else {
				t.left = e.x;
				t.top = e.y
			}
			if (e.opacity === 1) {
				t.visibility = "visible"
			}
			return t
		},
		_transition: function (e) {
			e.$item.data("scale", e.scale);
			var t = this._getStylesForTransition(e);
			this._startItemAnimation(e.$item, t, e.callback)
		},
		_startItemAnimation: function (t, n, r) {
			var i = n.opacity === 1;
			var s = e.proxy(this._handleItemAnimationEnd, this, r || e.noop, t[0], i);
			if (this.supported) {
				t.css(n);
				if (this.initialized) {
					t.on(u + ".shuffleitem", s)
				} else {
					s()
				}
			} else {
				if ("visibility" in n) {
					t.css("visibility", n.visibility);
					delete n.visibility
				}
				t.stop(true).animate(n, this.speed, "swing", s)
			}
		},
		_handleItemAnimationEnd: function (t, n, r, i) {
			if (i) {
				if (i.target === n) {
					e(n).off(".shuffleitem")
				} else {
					return
				}
			}
			if (this._layoutList.length > 0 && e.inArray(n, this._layoutList) > -1) {
				this._fire(b.EventType.LAYOUT);
				t.call(this);
				this._layoutList.length = 0
			} else if (this._shrinkList.length > 0 && e.inArray(n, this._shrinkList) > -1) {
				t.call(this);
				this._shrinkList.length = 0
			}
			if (!r) {
				n.style.visibility = "hidden"
			}
		},
		_processStyleQueue: function () {
			var t = this;
			e.each(this.styleQueue, function (e, n) {
				if (n.skipTransition) {
					t._skipTransition(n.$item[0], function () {
						n.$item.css(t._getStylesForTransition(n))
					})
				} else {
					t._transition(n)
				}
			});
			t.styleQueue.length = 0
		},
		_shrinkEnd: function () {
			this._fire(b.EventType.SHRUNK)
		},
		_filterEnd: function () {
			this._fire(b.EventType.FILTERED)
		},
		_sortEnd: function () {
			this._fire(b.EventType.SORTED)
		},
		_skipTransition: function (t, n, r) {
			var i = t.style[o];
			t.style[o] = "0ms";
			if (e.isFunction(n)) {
				n()
			} else {
				t.style[n] = r
			}
			var s = t.offsetWidth;
			s = null;
			t.style[o] = i
		},
		_addItems: function (e, t, r) {
			var i = this;
			if (!i.supported) {
				t = false
			}
			e.addClass("shuffle-item");
			i._initItems(e);
			i._setTransitions(e);
			i.$items = i._getItems();
			e.css("opacity", 0);
			var s = i._filter(n, e);
			var o = s.get();
			i._updateItemCount();
			if (t) {
				i._layout(o, null, true);
				if (r) {
					i._setSequentialDelay(s)
				}
				i._revealAppended(s)
			} else {
				i._layout(o)
			}
		},
		_revealAppended: function (t) {
			var n = this;
			setTimeout(function () {
				t.each(function (t, r) {
					n._transition({
						$item: e(r),
						opacity: 1,
						scale: v
					})
				})
			}, n.revealAppendedDelay)
		},
		shuffle: function (e, t) {
			var n = this;
			if (!n.enabled) {
				return
			}
			if (!e) {
				e = p
			}
			n._filter(e);
			n.lastFilter = e;
			n._updateItemCount();
			n._shrink();
			if (t) {
				n.lastSort = t
			}
			n._reLayout()
		},
		sort: function (e, t) {
			var n = this,
				r = n.$items.filter(".filtered").sorted(e);
			if (!t) {
				n._resetCols()
			}
			n._layout(r, function () {
				if (t) {
					n._filterEnd()
				}
				n._sortEnd()
			});
			n.lastSort = e
		},
		resized: function (e) {
			if (this.enabled) {
				if (!e) {
					this._setColumns()
				}
				this._reLayout()
			}
		},
		layout: function () {
			this.update(true)
		},
		update: function (e) {
			this.resized(e)
		},
		appended: function (e, t, n) {
			t = t === false ? false : true;
			n = n === false ? false : true;
			this._addItems(e, t, n)
		},
		disable: function () {
			this.enabled = false
		},
		enable: function (e) {
			this.enabled = true;
			if (e !== false) {
				this.update()
			}
		},
		remove: function (e) {
			if (!e.length || !e.jquery) {
				return
			}
			var t = this;
			t._shrink(e, function () {
				var t = this;
				e.remove();
				setTimeout(function () {
					t.$items = t._getItems();
					t.layout();
					t._updateItemCount();
					t._fire(b.EventType.REMOVED, [e, t]);
					e = null
				}, 0)
			});
			t._processStyleQueue();
			return t
		},
		destroy: function () {
			var e = this;
			e.$window.off("." + e.unique);
			e.$el.removeClass(h).removeAttr("style").removeData(h);
			e.$items.removeAttr("style").removeClass("concealed filtered shuffle-item");
			e.$window = null;
			e.$items = null;
			e.$el = null;
			e.$sizer = null;
			e.sizer = null;
			e.destroyed = true
		}
	};
	b.options = {
		group: p,
		speed: 250,
		easing: "ease-out",
		itemSelector: "",
		sizer: null,
		gutterWidth: 0,
		columnWidth: 0,
		delimeter: null,
		buffer: 0,
		initialSort: null,
		throttle: g,
		throttleTime: 300,
		sequentialFadeDelay: 150,
		supported: l
	};
	b.settings = {
		$sizer: null,
		useSizer: false,
		itemCss: {
			position: "absolute",
			top: 0,
			left: 0
		},
		offset: {
			top: 0,
			left: 0
		},
		revealAppendedDelay: 300,
		enabled: true,
		destroyed: false,
		initialized: false,
		styleQueue: []
	};
	e.fn.shuffle = function (t) {
		var n = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var r = e(this),
				i = r.data(h);
			if (!i) {
				i = new b(r, t);
				r.data(h, i)
			}
			if (typeof t === "string" && i[t]) {
				i[t].apply(i, n)
			}
		})
	};
	e.fn.sorted = function (t) {
		var r = e.extend({}, e.fn.sorted.defaults, t),
			i = this.get(),
			s = false;
		if (!i.length) {
			return []
		}
		if (r.randomize) {
			return e.fn.sorted.randomize(i)
		}
		if (r.by !== e.noop && r.by !== null && r.by !== n) {
			i.sort(function (t, i) {
				if (s) {
					return 0
				}
				var o = r.by(e(t)),
					u = r.by(e(i));
				if (o === n && u === n) {
					s = true;
					return 0
				}
				if (o === "sortFirst" || u === "sortLast") {
					return -1
				}
				if (o === "sortLast" || u === "sortFirst") {
					return 1
				}
				return o < u ? -1 : o > u ? 1 : 0
			})
		}
		if (s) {
			return this.get()
		}
		if (r.reverse) {
			i.reverse()
		}
		return i
	};
	e.fn.sorted.defaults = {
		reverse: false,
		by: null,
		randomize: false
	};
	e.fn.sorted.randomize = function (e) {
		var t = e.length,
			n, r;
		if (!t) {
			return e
		}
		while (--t) {
			r = Math.floor(Math.random() * (t + 1));
			n = e[r];
			e[r] = e[t];
			e[t] = n
		}
		return e
	};
	return b
});
window.Manipulator = function (e) {
	"use strict";
	var t = window.console && typeof window.console.log === "function";
	var n = function (t) {
		var n = this;
		n.$el = e(t);
		n.init()
	};
	n.prototype.init = function () {
		var e = this;
		e.initShuffle();
		e.setupEvents()
	};
	n.prototype.initShuffle = function () {
		this.$el.shuffle({
			itemSelector: ".shuffeldiv",
			speed: 250,
			easing: "ease",
			columnWidth: function (t) {
				return parseInt(e(".shuffeldiv").css("width"))
			},
			gutterWidth: function (t) {
				return parseInt(e(".shuffeldiv").css("margin-left"))
			}
		});
		this.shuffle = this.$el.data("shuffle")
	};
	n.prototype.setupEvents = function () {
		var n = this;
		e("#sfsi_wDiv").on("click", e.proxy(n.onRandomize, n));
		n.$el.on("removed.shuffle", function (e, n, r) {
			if (!t) {
				return
			}
		})
	};
	n.prototype.onAddClick = function () {
		var t = this,
			n = 5,
			r = document.createDocumentFragment(),
			i = t.$el[0],
			s = [],
			o, u = ["w2", "h2", "w3"],
			a, f, l, c;
		for (f = 0; f < n; f++) {
			l = Math.random();
			a = document.createElement("div");
			a.className = "shuffeldiv";
			if (l > .8) {
				c = Math.floor(Math.random() * 3);
				a.className = a.className + " " + u[c]
			}
			s.push(a);
			r.appendChild(a)
		}
		i.appendChild(r);
		o = e(s);
		t.shuffle.appended(o)
	};
	n.prototype.getRandomInt = function (e, t) {
		return Math.floor(Math.random() * (t - e + 1)) + e
	};
	n.prototype.onRemoveClick = function () {
		var t = this,
			n = t.shuffle.visibleItems,
			r = Math.min(3, n),
			i = [],
			s = 0,
			o = e();
		if (!n) {
			return
		}
		for (; s < r; s++) {
			i.push(t.getRandomInt(0, n - 1))
		}
		e.each(i, function (e, n) {
			o = o.add(t.shuffle.$items.eq(n))
		});
		t.shuffle.remove(o)
	};
	n.prototype.onRandomize = function () {
		var e = this,
			t = {
				randomize: true
			};
		e.shuffle.sort(t)
	};
	return n
}(jQuery);
jQuery(document).ready(function (e) {
	jQuery("#sfsi_floater").attr("data-top", jQuery(document).height());
});

function showErrorSuc(s, i, e) {
	if ("error" == s) var t = "errorMsg";
	else var t = "sucMsg";
	return SFSI(".tab" + e + ">." + t).html(i), SFSI(".tab" + e + ">." + t).show(), SFSI(".tab" + e + ">." + t).effect("highlight", {}, 5e3), setTimeout(function () {
		SFSI("." + t).slideUp("slow");
	}, 5e3), !1;
}

function beForeLoad() {
	SFSI(".loader-img").show(), SFSI(".save_button >a").html("Saving..."), SFSI(".save_button >a").css("pointer-events", "none");
}

function sfsi_make_popBox() {
	var s = 0;
	SFSI(".sfsi_sample_icons >li").each(function () {
		"none" != SFSI(this).css("display") && (s = 1);
	}), 0 == s ? SFSI(".sfsi_Popinner").hide() : SFSI(".sfsi_Popinner").show(), "" != SFSI('input[name="sfsi_popup_text"]').val() ? (SFSI(".sfsi_Popinner >h2").html(SFSI('input[name="sfsi_popup_text"]').val()), SFSI(".sfsi_Popinner >h2").show()) : SFSI(".sfsi_Popinner >h2").hide(), SFSI(".sfsi_Popinner").css({
		"border-color": SFSI('input[name="sfsi_popup_border_color"]').val(),
		"border-width": SFSI('input[name="sfsi_popup_border_thickness"]').val(),
		"border-style": "solid"
	}), SFSI(".sfsi_Popinner").css("background-color", SFSI('input[name="sfsi_popup_background_color"]').val()), SFSI(".sfsi_Popinner h2").css("font-family", SFSI("#sfsi_popup_font").val()), SFSI(".sfsi_Popinner h2").css("font-style", SFSI("#sfsi_popup_fontStyle").val()), SFSI(".sfsi_Popinner >h2").css("font-size", parseInt(SFSI('input[name="sfsi_popup_fontSize"]').val())), SFSI(".sfsi_Popinner >h2").css("color", SFSI('input[name="sfsi_popup_fontColor"]').val() + " !important"), "yes" == SFSI('input[name="sfsi_popup_border_shadow"]:checked').val() ? SFSI(".sfsi_Popinner").css("box-shadow", "12px 30px 18px #CCCCCC") : SFSI(".sfsi_Popinner").css("box-shadow", "none");
}

function sfsi_stick_widget(s) {
	0 == initTop.length && (SFSI(".sfsi_widget").each(function (s) {
		initTop[s] = SFSI(this).position().top;
	}));
	var i = SFSI(window).scrollTop(),
		e = [],
		t = [];
	SFSI(".sfsi_widget").each(function (s) {
		e[s] = SFSI(this).position().top, t[s] = SFSI(this);
	});
	var n = !1;
	for (var o in e) {
		var a = parseInt(o) + 1;
		e[o] < i && e[a] > i && a < e.length ? (SFSI(t[o]).css({
			position: "fixed",
			top: s
		}), SFSI(t[a]).css({
			position: "",
			top: initTop[a]
		}), n = !0) : SFSI(t[o]).css({
			position: "",
			top: initTop[o]
		});
	}
	if (!n) {
		var r = e.length - 1,
			c = -1;
		e.length > 1 && (c = e.length - 2), initTop[r] < i ? (SFSI(t[r]).css({
			position: "fixed",
			top: s
		}), c >= 0 && SFSI(t[c]).css({
			position: "",
			top: initTop[c]
		})) : (SFSI(t[r]).css({
			position: "",
			top: initTop[r]
		}), c >= 0 && e[c] < i);
	}
}

function sfsi_float_widget(s) {
	function i() {
		r = "Microsoft Internet Explorer" === navigator.appName ? a - document.documentElement.scrollTop : a - window.pageYOffset, Math.abs(r) > 0 ? (window.removeEventListener("scroll", i), a -= r * o, SFSI("#sfsi_floater").css({
			top: (a + t).toString() + "px"
		}), setTimeout(i, n)) : window.addEventListener("scroll", i, !1);
	}

	function e() {
		var documentheight = SFSI("#sfsi_floater").attr("data-top");
		var fltrhght = parseInt(SFSI("#sfsi_floater").height());
		var fltrtp = parseInt(SFSI("#sfsi_floater").css("top"));
		if (parseInt(fltrhght) + parseInt(fltrtp) <= documentheight) {
			window.addEventListener("scroll", i, !1);
		} else {
			window.removeEventListener("scroll", i);
			SFSI("#sfsi_floater").css("top", documentheight + "px");
		}
	}
	if ("center" == s) {
		var t = (SFSI(window).height() - SFSI("#sfsi_floater").height()) / 2;
	} else if ("bottom" == s) {
		var t = window.innerHeight - (SFSI("#sfsi_floater").height() + parseInt(SFSI('#sfsi_floater').css('margin-bottom')));
	} else {
		var t = parseInt(s);
	}
	var n = 50,
		o = .1,
		a = 0,
		r = 0;
	SFSI("#sfsi_floater");
	var prev_onscroll = window.onscroll;
	window.onscroll = function () {
		if ('function' === typeof prev_onload) {
			prev_onload(), e();
		} else {
			e();
		}
	}
}

function sfsi_shuffle() {
	var s = [];
	SFSI(".sfsi_wicons ").each(function (i) {
		SFSI(this).text().match(/^\s*$/) || (s[i] = "<div class='" + SFSI(this).attr("class") + "'>" + SFSI(this).html() + "</div>", SFSI(this).fadeOut("slow"), SFSI(this).insertBefore(SFSI(this).prev(".sfsi_wicons")), SFSI(this).fadeIn("slow"));
	}), s = Shuffle(s), $("#sfsi_wDiv").html("");
	for (var i = 0; i < testArray.length; i++) $("#sfsi_wDiv").append(s[i]);
}

function Shuffle(s) {
	for (var i, e, t = s.length; t; i = parseInt(Math.random() * t), e = s[--t], s[t] = s[i], s[i] = e);
	return s;
}

function sfsi_setCookie(s, i, e) {
	var t = new Date();
	t.setTime(t.getTime() + 1e3 * 60 * 60 * 24 * e);
	var n = "expires=" + t.toGMTString();
	document.cookie = s + "=" + i + "; " + n;
}

function sfsfi_getCookie(s) {
	for (var i = s + "=", e = document.cookie.split(";"), t = 0; t < e.length; t++) {
		var n = e[t].trim();
		if (0 == n.indexOf(i)) return n.substring(i.length, n.length);
	}
	return "";
}

function sfsi_hideFooter() {}
window.onerror = function () {}, SFSI = jQuery, SFSI(window).on('load', function () {
	SFSI("#sfpageLoad").fadeOut(2e3);
});
var global_error = 0;
SFSI(document).ready(function (s) {
	SFSI(document).on('click', '.inerCnt a[href=""]', function (event) {
		if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
			event.preventDefault();
		}
	});
	SFSI("head").append('<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />'), SFSI("head").append('<meta http-equiv="Pragma" content="no-cache" />'), SFSI("head").append('<meta http-equiv="Expires" content="0" />'), SFSI(document).click(function (s) {
		var i = SFSI(".sfsi_FrntInner"),
			e = SFSI(".sfsi_wDiv"),
			t = SFSI("#at15s");
		i.is(s.target) || 0 !== i.has(s.target).length || e.is(s.target) || 0 !== e.has(s.target).length || t.is(s.target) || 0 !== t.has(s.target).length || i.fadeOut();
	}), SFSI("div#sfsiid_linkedin").find(".icon4").find("a").find("img").mouseover(function () {
		SFSI(this).attr("src", sfsi_icon_ajax_object.plugin_url + "images/visit_icons/linkedIn_hover.svg");
	}), SFSI("div#sfsiid_linkedin").find(".icon4").find("a").find("img").mouseleave(function () {
		SFSI(this).attr("src", sfsi_icon_ajax_object.plugin_url + "images/visit_icons/linkedIn.svg");
	}), SFSI("div#sfsiid_youtube").find(".icon1").find("a").find("img").mouseover(function () {
		SFSI(this).attr("src", sfsi_icon_ajax_object.plugin_url + "images/visit_icons/youtube_hover.svg");
	}), SFSI("div#sfsiid_youtube").find(".icon1").find("a").find("img").mouseleave(function () {
		SFSI(this).attr("src", sfsi_icon_ajax_object.plugin_url + "images/visit_icons/youtube.svg");
	}), SFSI("div#sfsiid_facebook").find(".icon1").find("a").find("img").mouseover(function () {
		SFSI(this).css("opacity", "0.9");
	}), SFSI("div#sfsiid_facebook").find(".icon1").find("a").find("img").mouseleave(function () {
		SFSI(this).css("opacity", "1");
	}), SFSI("div#sfsiid_twitter").find(".cstmicon1").find("a").find("img").mouseover(function () {
		SFSI(this).css("opacity", "0.9");
	}), SFSI("div#sfsiid_twitter").find(".cstmicon1").find("a").find("img").mouseleave(function () {
		SFSI(this).css("opacity", "1");
	}), SFSI(".pop-up").on("click", function () {
		("fbex-s2" == SFSI(this).attr("data-id") || "linkex-s2" == SFSI(this).attr("data-id")) && (SFSI("." + SFSI(this).attr("data-id")).hide(), SFSI("." + SFSI(this).attr("data-id")).css("opacity", "1"), SFSI("." + SFSI(this).attr("data-id")).css("z-index", "1000")), SFSI("." + SFSI(this).attr("data-id")).show("slow");
	}), SFSI(document).on("click", '#close_popup', function () {
		SFSI(".read-overlay").hide("slow");
	});
	var e = 0;
	sfsi_make_popBox(), SFSI('input[name="sfsi_popup_text"] ,input[name="sfsi_popup_background_color"],input[name="sfsi_popup_border_color"],input[name="sfsi_popup_border_thickness"],input[name="sfsi_popup_fontSize"],input[name="sfsi_popup_fontColor"]').on("keyup", sfsi_make_popBox), SFSI('input[name="sfsi_popup_text"] ,input[name="sfsi_popup_background_color"],input[name="sfsi_popup_border_color"],input[name="sfsi_popup_border_thickness"],input[name="sfsi_popup_fontSize"],input[name="sfsi_popup_fontColor"]').on("focus", sfsi_make_popBox), SFSI("#sfsi_popup_font ,#sfsi_popup_fontStyle").on("change", sfsi_make_popBox), SFSI(document).on("click", '.radio', function () {
		var s = SFSI(this).parent().find("input:radio:first");
		"sfsi_popup_border_shadow" == s.attr("name") && sfsi_make_popBox();
	}), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? SFSI("img.sfsi_wicon").on("click", function (s) {
		if (SFSI(s.target).parent().attr('href') == "") {
			s.preventDefault();
		}
		if (!SFSI(this).hasClass('sfsi_click_wicon')) {
			s.stopPropagation && s.stopPropagation();
		}
		var i = SFSI("#sfsi_floater_sec").val();
		SFSI("div.sfsi_wicons").css("z-index", "0"), SFSI(this).parent().parent().parent().siblings("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide(), SFSI(this).parent().parent().parent().parent().siblings("li").length > 0 && (SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_tool_tip_2").css("z-index", "0"), SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide()), SFSI(this).parent().parent().parent().css("z-index", "1000000"), SFSI(this).parent().parent().css({
			"z-index": "999"
		}), SFSI(this).attr("data-effect") && "fade_in" == SFSI(this).attr("data-effect") && (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		}), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("data-effect") && "scale" == SFSI(this).attr("data-effect") && (SFSI(this).parent().addClass("scale"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		}), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("data-effect") && "combo" == SFSI(this).attr("data-effect") && (SFSI(this).parent().addClass("scale"), SFSI(this).parent().css("opacity", "1"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		})), ("top-left" == i || "top-right" == i) && SFSI(this).parent().parent().parent().parent("#sfsi_floater").length > 0 && "sfsi_floater" == SFSI(this).parent().parent().parent().parent().attr("id") ? (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").addClass("sfsi_plc_btm"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").addClass("top_big_arow"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		}), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show()) : (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").removeClass("top_big_arow"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").removeClass("sfsi_plc_btm"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 1e3
		}), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show());
	}) : SFSI("img.sfsi_wicon").on("mouseenter", function () {
		var s = SFSI("#sfsi_floater_sec").val();
		SFSI("div.sfsi_wicons").css("z-index", "0"), SFSI(this).parent().parent().parent().siblings("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide(), SFSI(this).parent().parent().parent().parent().siblings("li").length > 0 && (SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_tool_tip_2").css("z-index", "0"), SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide()), SFSI(this).parent().parent().parent().css("z-index", "1000000"), SFSI(this).parent().parent().css({
			"z-index": "999"
		}), SFSI(this).attr("data-effect") && "fade_in" == SFSI(this).attr("data-effect") && (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		}), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("data-effect") && "scale" == SFSI(this).attr("data-effect") && (SFSI(this).parent().addClass("scale"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		}), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("data-effect") && "combo" == SFSI(this).attr("data-effect") && (SFSI(this).parent().addClass("scale"), SFSI(this).parent().css("opacity", "1"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		})), ("top-left" == s || "top-right" == s) && SFSI(this).parent().parent().parent().parent("#sfsi_floater").length > 0 && "sfsi_floater" == SFSI(this).parent().parent().parent().parent().attr("id") ? (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").addClass("sfsi_plc_btm"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").addClass("top_big_arow"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		}), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show()) : (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").removeClass("top_big_arow"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").removeClass("sfsi_plc_btm"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
			opacity: 1,
			"z-index": 10
		}), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show());
	}), SFSI("div.sfsi_wicons").on("mouseleave", function () {
		SFSI(this).children("div.inerCnt").children("a.sficn").attr("data-effect") && "fade_in" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("data-effect") && SFSI(this).children("div.inerCnt").find("a.sficn").css("opacity", "0.6"), SFSI(this).children("div.inerCnt").children("a.sficn").attr("data-effect") && "scale" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("data-effect") && SFSI(this).children("div.inerCnt").find("a.sficn").removeClass("scale"), SFSI(this).children("div.inerCnt").children("a.sficn").attr("data-ffect") && "combo" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("data-effect")
	}), SFSI("body").on("click", function () {
		SFSI(".inerCnt").find("div.sfsi_tool_tip_2").hide();
	}), SFSI(".adminTooltip >a").on("hover", function () {
		SFSI(this).offset().top, SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "1"), SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").show();
	}), SFSI(".adminTooltip").on("mouseleave", function () {
		"none" != SFSI(".gpls_tool_bdr").css("display") && 0 != SFSI(".gpls_tool_bdr").css("opacity") ? SFSI(".pop_up_box ").on("click", function () {
			SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "0"), SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").hide();
		}) : (SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "0"), SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").hide());
	}), SFSI(".expand-area").on("click", function () {
		"Read more" == SFSI(this).text() ? (SFSI(this).siblings("p").children("label").fadeIn("slow"), SFSI(this).text("Collapse")) : (SFSI(this).siblings("p").children("label").fadeOut("slow"), SFSI(this).text("Read more"));
	}), SFSI(".sfsi_wDiv").length > 0 && setTimeout(function () {
		var s = parseInt(SFSI(".sfsi_wDiv").height()) + 15 + "px";
		SFSI(".sfsi_holders").each(function () {
			SFSI(this).css("height", s);
			SFSI(".sfsi_widget");
		});
	}, 200);
});

function sfsihidemepopup() {
	SFSI(".sfsi_FrntInner_chg").fadeOut();
}
var initTop = new Array();

function close_overlay(selector) {
	if (typeof selector === "undefined") {
		selector = '.sfsi_overlay';
	}
	jQuery(selector).removeClass('show').addClass('hide').hide();
}

function sfsi_wechat_share(url) {
	if (jQuery('.sfsi_wechat_follow_overlay').length == 0) {
		jQuery('body').append("<div class='sfsi_wechat_follow_overlay sfsi_overlay show'><div class='sfsi_inner_display'><a class='close_btn' href='' onclick='event.preventDefault();close_overlay(\".sfsi_wechat_follow_overlay\")' >×</a><div style='width:95%;max-width:500px; min-height:80%;background-color:#fff;margin:0 auto;margin:10% auto;padding: 20px 0;'><div style='width:90%;margin: 0 auto;text-align:center'><div class='sfsi_wechat_qr_display' style='display:inline-block'></div></div><div style='width:80%;margin:10px auto 0 auto;text-align:center;font-weight:900;font-size:25px;'>\"Scan QR Code\" in WeChat and press ··· to share!</div></div></div>");
		new QRCode(jQuery('.sfsi_wechat_follow_overlay .sfsi_wechat_qr_display')[0], encodeURI(decodeURI(window.location.href)))
		jQuery('.sfsi_wechat_follow_overlay .sfsi_wechat_qr_display img').attr('nopin', 'nopin')
	} else {
		jQuery('.sfsi_wechat_follow_overlay').removeClass('hide').addClass('show').show();
	}
}

function sfsi_mobile_wechat_share(url) {
	if (jQuery('.sfsi_wechat_follow_overlay').length == 0) {
		jQuery('body').append("<div class='sfsi_wechat_follow_overlay sfsi_overlay show'><div class='sfsi_inner_display'><a class='close_btn' href='' onclick=\"event.preventDefault();close_overlay(\'.sfsi_wechat_follow_overlay\')\" >×</a><div style='width:95%; min-height:80%;background-color:#fff;margin:0 auto;margin:30% auto;padding: 20px 0;'><div style='width:90%;margin: 0 auto;'><input type='text' value='" + encodeURI(decodeURI(window.location.href)) + "' style='width:100%;padding:7px 0;text-align:center' /></div><div style='width:80%;margin:10px auto 0 auto'><div  class='sfsi_upload_butt_container' ><button onclick='sfsi_copy_text_parent_input(event)' class='upload_butt' >Copy</button></div><div class='sfsi_upload_butt_container' ><a href='weixin://' class='upload_butt'>Open WeChat</a></div></div></div></div>");
	} else {
		jQuery('.sfsi_wechat_scan').removeClass('hide').addClass('show');
	}
}

function sfsi_copy_text_parent_input(event) {
	var target = jQuery(event.target);
	input_target = target.parent().parent().parent().find('input');
	input_target.select();
	document.execCommand('copy');
}

function sfsi_responsive_toggle() {
	jQuery(document).scroll(function ($) {
		var y = jQuery(this).scrollTop();
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			if (jQuery(window).scrollTop() + jQuery(window).height() >= jQuery(document).height() - 100) {
				jQuery('.sfsi_outr_div').css({
					'z-index': '9996',
					opacity: 1,
					top: jQuery(window).scrollTop() + "px",
					position: "absolute"
				});
				jQuery('.sfsi_outr_div').fadeIn(200);
				jQuery('.sfsi_FrntInner_chg').fadeIn(200);
			} else {
				jQuery('.sfsi_outr_div').fadeOut();
				jQuery('.sfsi_FrntInner_chg').fadeOut();
			}
		} else {
			if (jQuery(window).scrollTop() + jQuery(window).height() >= jQuery(document).height() - 3) {
				jQuery('.sfsi_outr_div').css({
					'z-index': '9996',
					opacity: 1,
					top: jQuery(window).scrollTop() + 200 + "px",
					position: "absolute"
				});
				jQuery('.sfsi_outr_div').fadeIn(200);
				jQuery('.sfsi_FrntInner_chg').fadeIn(200);
			} else {
				jQuery('.sfsi_outr_div').fadeOut();
				jQuery('.sfsi_FrntInner_chg').fadeOut();
			}
		}
	});
}

function sfsi_time_pop_up(time_popUp) {
	jQuery(document).ready(function ($) {
		setTimeout(function () {
			jQuery('.sfsi_outr_div').css({
				'z-index': '1000000',
				opacity: 1
			});
			jQuery('.sfsi_outr_div').fadeIn(200);
			jQuery('.sfsi_FrntInner_chg').fadeIn(200);
		}, time_popUp);
	});
}

function sfsi_social_pop_up(time_popUp) {
	jQuery(document).ready(function ($) {
		sfsi_setCookie('sfsi_socialPopUp', time(), 32);
		setTimeout(function () {
			jQuery('.sfsi_outr_div').css({
				'z-index': '1000000',
				opacity: 1
			});
			jQuery('.sfsi_outr_div').fadeIn();
		}, time_popUp);
	});
}

function sfsi_plugin_version(pluginVersion) {
	jQuery(document).ready(function (e) {
		jQuery("body").addClass("sfsi_" + pluginVersion)
	});
}

function sfsi_widget_set() {
	jQuery(".sfsi_widget").each(function (index) {
		if (jQuery(this).attr("data-position") == "widget") {
			var wdgt_hght = jQuery(this).children(".norm_row.sfsi_wDiv").height();
			var title_hght = jQuery(this).parent(".widget.sfsi").children(".widget-title").height();
			var totl_hght = parseInt(title_hght) + parseInt(wdgt_hght);
			jQuery(this).parent(".widget.sfsi").css("min-height", totl_hght + "px");
		}
	});
}
var sfsi_functions_loaded = new CustomEvent('sfsi_functions_loaded', {
	detail: {
		"abc": "def"
	}
});
window.dispatchEvent(sfsi_functions_loaded);
(function ($) {
	var useWindow = window;
	if (!Object.keys) {
		Object.keys = (function () {
			'use strict';
			var hasOwnProperty = Object.prototype.hasOwnProperty,
				hasDontEnumBug = !({
					toString: null
				}).propertyIsEnumerable('toString'),
				dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
				dontEnumsLength = dontEnums.length;
			return function (obj) {
				if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
					throw new TypeError('Object.keys called on non-object');
				}
				var result = [],
					prop, i;
				for (prop in obj) {
					if (hasOwnProperty.call(obj, prop)) {
						result.push(prop);
					}
				}
				if (hasDontEnumBug) {
					for (i = 0; i < dontEnumsLength; i++) {
						if (hasOwnProperty.call(obj, dontEnums[i])) {
							result.push(dontEnums[i]);
						}
					}
				}
				return result;
			};
		}());
	}
	var limited_mode = false;
	var tick_duration = 200;
	var debug = (location.hash === "#debug");

	function debug_log(msg) {
		if (debug) {
			console.log(msg);
		}
	}
	var allUnits = ["Days", "Hours", "Minutes", "Seconds"];
	var nextUnits = {
		Seconds: "Minutes",
		Minutes: "Hours",
		Hours: "Days",
		Days: "Years"
	};
	var secondsIn = {
		Seconds: 1,
		Minutes: 60,
		Hours: 3600,
		Days: 86400,
		Months: 2678400,
		Years: 31536000
	};

	function hexToRgb(hex) {
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function (m, r, g, b) {
			return r + r + g + g + b + b;
		});
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	function isCanvasSupported() {
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	}

	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	function guid() {
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	}
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (elt) {
			var len = this.length >>> 0;
			var from = Number(arguments[1]) || 0;
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0)
				from += len;
			for (; from < len; from++) {
				if (from in this && this[from] === elt)
					return from;
			}
			return -1;
		};
	}

	function parse_date(str) {
		var match = str.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);
		if (match !== null && match.length > 0) {
			var parts = str.split(" ");
			var date = parts[0].split("-");
			var time = parts[1].split(":");
			return new Date(date[0], date[1] - 1, date[2], time[0], time[1], time[2]);
		}
		var d = Date.parse(str);
		if (!isNaN(d))
			return d;
		d = Date.parse(str.replace(/-/g, '/').replace('T', ' '));
		if (!isNaN(d))
			return d;
		return new Date();
	}

	function parse_times(diff, old_diff, total_duration, units, floor) {
		var raw_time = {};
		var raw_old_time = {};
		var time = {};
		var pct = {};
		var old_pct = {};
		var old_time = {};
		var greater_unit = null;
		for (var i = 0; i < units.length; i++) {
			var unit = units[i];
			var maxUnits;
			if (greater_unit === null) {
				maxUnits = total_duration / secondsIn[unit];
			} else {
				maxUnits = secondsIn[greater_unit] / secondsIn[unit];
			}
			var curUnits = (diff / secondsIn[unit]);
			var oldUnits = (old_diff / secondsIn[unit]);
			if (floor) {
				if (curUnits > 0) curUnits = Math.floor(curUnits);
				else curUnits = Math.ceil(curUnits);
				if (oldUnits > 0) oldUnits = Math.floor(oldUnits);
				else oldUnits = Math.ceil(oldUnits);
			}
			if (unit !== "Days") {
				curUnits = curUnits % maxUnits;
				oldUnits = oldUnits % maxUnits;
			}
			raw_time[unit] = curUnits;
			time[unit] = Math.abs(curUnits);
			raw_old_time[unit] = oldUnits;
			old_time[unit] = Math.abs(oldUnits);
			pct[unit] = Math.abs(curUnits) / maxUnits;
			old_pct[unit] = Math.abs(oldUnits) / maxUnits;
			greater_unit = unit;
		}
		return {
			raw_time: raw_time,
			raw_old_time: raw_old_time,
			time: time,
			old_time: old_time,
			pct: pct,
			old_pct: old_pct
		};
	}
	var TC_Instance_List = {};

	function updateUsedWindow() {
		if (typeof useWindow.TC_Instance_List !== "undefined") {
			TC_Instance_List = useWindow.TC_Instance_List;
		} else {
			useWindow.TC_Instance_List = TC_Instance_List;
		}
		initializeAnimationFrameHandler(useWindow);
	};

	function initializeAnimationFrameHandler(w) {
		var vendors = ['webkit', 'moz'];
		for (var x = 0; x < vendors.length && !w.requestAnimationFrame; ++x) {
			w.requestAnimationFrame = w[vendors[x] + 'RequestAnimationFrame'];
			w.cancelAnimationFrame = w[vendors[x] + 'CancelAnimationFrame'];
		}
		if (!w.requestAnimationFrame || !w.cancelAnimationFrame) {
			w.requestAnimationFrame = function (callback, element, instance) {
				if (typeof instance === "undefined")
					instance = {
						data: {
							last_frame: 0
						}
					};
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - instance.data.last_frame));
				var id = w.setTimeout(function () {
					callback(currTime + timeToCall);
				}, timeToCall);
				instance.data.last_frame = currTime + timeToCall;
				return id;
			};
			w.cancelAnimationFrame = function (id) {
				clearTimeout(id);
			};
		}
	};
	var TC_Instance = function (element, options) {
		this.element = element;
		this.container;
		this.listeners = null;
		this.data = {
			paused: false,
			last_frame: 0,
			animation_frame: null,
			interval_fallback: null,
			timer: false,
			total_duration: null,
			prev_time: null,
			drawn_units: [],
			text_elements: {
				Days: 0,
				Hours: 1,
				Minutes: 0,
				Seconds: 0
			},
			attributes: {
				canvas: null,
				context: null,
				item_size: null,
				line_width: null,
				radius: null,
				outer_radius: null
			},
			state: {
				fading: {
					Days: false,
					Hours: false,
					Minutes: false,
					Seconds: false
				}
			}
		};
		this.config = null;
		this.setOptions(options);
		this.initialize();
	};
	TC_Instance.prototype.clearListeners = function () {
		this.listeners = {
			all: [],
			visible: []
		};
	};
	TC_Instance.prototype.addTime = function (seconds_to_add) {
		if (this.data.attributes.ref_date instanceof Date) {
			var d = this.data.attributes.ref_date;
			d.setSeconds(d.getSeconds() + seconds_to_add);
		} else if (!isNaN(this.data.attributes.ref_date)) {
			this.data.attributes.ref_date += (seconds_to_add * 1000);
		}
	};
	TC_Instance.prototype.initialize = function (clear_listeners) {
		this.data.drawn_units = [];
		for (var i = 0; i < Object.keys(this.config.time).length; i++) {
			var unit = Object.keys(this.config.time)[i];
			if (this.config.time[unit].show) {
				this.data.drawn_units.push(unit);
			}
		}
		$(this.element).children('div.time_circles').remove();
		if (typeof clear_listeners === "undefined")
			clear_listeners = true;
		if (clear_listeners || this.listeners === null) {
			this.clearListeners();
		}
		this.container = $("<div>");
		this.container.addClass('time_circles');
		this.container.appendTo(this.element);
		var height = this.element.offsetHeight;
		var width = this.element.offsetWidth;
		if (height === 0)
			height = $(this.element).height();
		if (width === 0)
			width = $(this.element).width();
		if (height === 0 && width > 0)
			height = width / this.data.drawn_units.length;
		else if (width === 0 && height > 0)
			width = height * this.data.drawn_units.length;
		var canvasElement = document.createElement('canvas');
		canvasElement.width = width;
		canvasElement.height = height;
		this.data.attributes.canvas = $(canvasElement);
		this.data.attributes.canvas.appendTo(this.container);
		var canvasSupported = isCanvasSupported();
		if (!canvasSupported && typeof G_vmlCanvasManager !== "undefined") {
			G_vmlCanvasManager.initElement(canvasElement);
			limited_mode = true;
			canvasSupported = true;
		}
		if (canvasSupported) {
			this.data.attributes.context = canvasElement.getContext('2d');
		}
		this.data.attributes.item_size = Math.min(width / this.data.drawn_units.length, height);
		this.data.attributes.line_width = this.data.attributes.item_size * this.config.fg_width;
		this.data.attributes.radius = ((this.data.attributes.item_size * 0.8) - this.data.attributes.line_width) / 2;
		this.data.attributes.outer_radius = this.data.attributes.radius + 0.5 * Math.max(this.data.attributes.line_width, this.data.attributes.line_width * this.config.bg_width);
		var i = 0;
		for (var key in this.data.text_elements) {
			if (!this.config.time[key].show)
				continue;
			var textElement = $("<div>");
			textElement.addClass('textDiv_' + key);
			textElement.css("top", Math.round(0.35 * this.data.attributes.item_size));
			textElement.css("left", Math.round(i++ * this.data.attributes.item_size));
			textElement.css("width", this.data.attributes.item_size);
			textElement.appendTo(this.container);
			var headerElement = $("<h4>");
			headerElement.text(this.config.time[key].text);
			headerElement.css("font-size", Math.round(this.config.text_size * this.data.attributes.item_size));
			headerElement.css("line-height", Math.round(this.config.text_size * this.data.attributes.item_size) + "px");
			headerElement.appendTo(textElement);
			var numberElement = $("<span>");
			numberElement.css("font-size", Math.round(3 * this.config.text_size * this.data.attributes.item_size));
			numberElement.css("line-height", Math.round(this.config.text_size * this.data.attributes.item_size) + "px");
			numberElement.appendTo(textElement);
			this.data.text_elements[key] = numberElement;
		}
		this.start();
		if (!this.config.start) {
			this.data.paused = true;
		}
		var _this = this;
		this.data.interval_fallback = useWindow.setInterval(function () {
			_this.update.call(_this, true);
		}, 100);
	};
	TC_Instance.prototype.update = function (nodraw) {
		if (typeof nodraw === "undefined") {
			nodraw = false;
		} else if (nodraw && this.data.paused) {
			return;
		}
		if (limited_mode) {
			this.data.attributes.context.clearRect(0, 0, this.data.attributes.canvas[0].width, this.data.attributes.canvas[0].hright);
		}
		var diff, old_diff;
		var prevDate = this.data.prev_time;
		var curDate = new Date();
		this.data.prev_time = curDate;
		if (prevDate === null)
			prevDate = curDate;
		if (!this.config.count_past_zero) {
			if (curDate > this.data.attributes.ref_date) {
				for (var i = 0; i < this.data.drawn_units.length; i++) {
					var key = this.data.drawn_units[i];
					this.data.text_elements[key].text("0");
					var x = (i * this.data.attributes.item_size) + (this.data.attributes.item_size / 2);
					var y = this.data.attributes.item_size / 2;
					var color = this.config.time[key].color;
					this.drawArc(x, y, color, 0);
				}
				this.stop();
				return;
			}
		}
		diff = (this.data.attributes.ref_date - curDate) / 1000;
		old_diff = (this.data.attributes.ref_date - prevDate) / 1000;
		var floor = this.config.animation !== "smooth";
		var visible_times = parse_times(diff, old_diff, this.data.total_duration, this.data.drawn_units, floor);
		var all_times = parse_times(diff, old_diff, secondsIn["Years"], allUnits, floor);
		var i = 0;
		var j = 0;
		var lastKey = null;
		var cur_shown = this.data.drawn_units.slice();
		for (var i in allUnits) {
			var key = allUnits[i];
			if (Math.floor(all_times.raw_time[key]) !== Math.floor(all_times.raw_old_time[key])) {
				this.notifyListeners(key, Math.floor(all_times.time[key]), Math.floor(diff), "all");
			}
			if (cur_shown.indexOf(key) < 0)
				continue;
			if (Math.floor(visible_times.raw_time[key]) !== Math.floor(visible_times.raw_old_time[key])) {
				this.notifyListeners(key, Math.floor(visible_times.time[key]), Math.floor(diff), "visible");
			}
			if (!nodraw) {
				this.data.text_elements[key].text(Math.floor(Math.abs(visible_times.time[key])));
				var x = (j * this.data.attributes.item_size) + (this.data.attributes.item_size / 2);
				var y = this.data.attributes.item_size / 2;
				var color = this.config.time[key].color;
				if (this.config.animation === "smooth") {
					if (lastKey !== null && !limited_mode) {
						if (Math.floor(visible_times.time[lastKey]) > Math.floor(visible_times.old_time[lastKey])) {
							this.radialFade(x, y, color, 1, key);
							this.data.state.fading[key] = true;
						} else if (Math.floor(visible_times.time[lastKey]) < Math.floor(visible_times.old_time[lastKey])) {
							this.radialFade(x, y, color, 0, key);
							this.data.state.fading[key] = true;
						}
					}
					if (!this.data.state.fading[key]) {
						this.drawArc(x, y, color, visible_times.pct[key]);
					}
				} else {
					this.animateArc(x, y, color, visible_times.pct[key], visible_times.old_pct[key], (new Date()).getTime() + tick_duration);
				}
			}
			lastKey = key;
			j++;
		}
		if (this.data.paused || nodraw) {
			return;
		}
		var _this = this;
		var update = function () {
			_this.update.call(_this);
		};
		if (this.config.animation === "smooth") {
			this.data.animation_frame = useWindow.requestAnimationFrame(update, _this.element, _this);
		} else {
			var delay = (diff % 1) * 1000;
			if (delay < 0)
				delay = 1000 + delay;
			delay += 50;
			_this.data.animation_frame = useWindow.setTimeout(function () {
				_this.data.animation_frame = useWindow.requestAnimationFrame(update, _this.element, _this);
			}, delay);
		}
	};
	TC_Instance.prototype.animateArc = function (x, y, color, target_pct, cur_pct, animation_end) {
		if (this.data.attributes.context === null)
			return;
		var diff = cur_pct - target_pct;
		if (Math.abs(diff) > 0.5) {
			if (target_pct === 0) {
				this.radialFade(x, y, color, 1);
			} else {
				this.radialFade(x, y, color, 0);
			}
		} else {
			var progress = (tick_duration - (animation_end - (new Date()).getTime())) / tick_duration;
			if (progress > 1)
				progress = 1;
			var pct = (cur_pct * (1 - progress)) + (target_pct * progress);
			this.drawArc(x, y, color, pct);
			if (progress >= 1)
				return;
			var _this = this;
			useWindow.requestAnimationFrame(function () {
				_this.animateArc(x, y, color, target_pct, cur_pct, animation_end);
			}, this.element);
		}
	};
	TC_Instance.prototype.drawArc = function (x, y, color, pct) {
		if (this.data.attributes.context === null)
			return;
		var clear_radius = Math.max(this.data.attributes.outer_radius, this.data.attributes.item_size / 2);
		if (!limited_mode) {
			this.data.attributes.context.clearRect(x - clear_radius, y - clear_radius, clear_radius * 2, clear_radius * 2);
		}
		if (this.config.use_background) {
			this.data.attributes.context.beginPath();
			this.data.attributes.context.arc(x, y, this.data.attributes.radius, 0, 2 * Math.PI, false);
			this.data.attributes.context.lineWidth = this.data.attributes.line_width * this.config.bg_width;
			this.data.attributes.context.strokeStyle = this.config.circle_bg_color;
			this.data.attributes.context.stroke();
		}
		var startAngle, endAngle, counterClockwise;
		var defaultOffset = (-0.5 * Math.PI);
		var fullCircle = 2 * Math.PI;
		startAngle = defaultOffset + (this.config.start_angle / 360 * fullCircle);
		var offset = (2 * pct * Math.PI);
		if (this.config.direction === "Both") {
			counterClockwise = false;
			startAngle -= (offset / 2);
			endAngle = startAngle + offset;
		} else {
			if (this.config.direction === "Clockwise") {
				counterClockwise = false;
				endAngle = startAngle + offset;
			} else {
				counterClockwise = true;
				endAngle = startAngle - offset;
			}
		}
		this.data.attributes.context.beginPath();
		this.data.attributes.context.arc(x, y, this.data.attributes.radius, startAngle, endAngle, counterClockwise);
		this.data.attributes.context.lineWidth = this.data.attributes.line_width;
		this.data.attributes.context.strokeStyle = color;
		this.data.attributes.context.stroke();
	};
	TC_Instance.prototype.radialFade = function (x, y, color, from, key) {
		var rgb = hexToRgb(color);
		var _this = this;
		var step = 0.2 * ((from === 1) ? -1 : 1);
		var i;
		for (i = 0; from <= 1 && from >= 0; i++) {
			(function () {
				var delay = 50 * i;
				var rgba = "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + (Math.round(from * 10) / 10) + ")";
				useWindow.setTimeout(function () {
					_this.drawArc(x, y, rgba, 1);
				}, delay);
			}());
			from += step;
		}
		if (typeof key !== undefined) {
			useWindow.setTimeout(function () {
				_this.data.state.fading[key] = false;
			}, 50 * i);
		}
	};
	TC_Instance.prototype.timeLeft = function () {
		if (this.data.paused && typeof this.data.timer === "number") {
			return this.data.timer;
		}
		var now = new Date();
		return ((this.data.attributes.ref_date - now) / 1000);
	};
	TC_Instance.prototype.start = function () {
		useWindow.cancelAnimationFrame(this.data.animation_frame);
		useWindow.clearTimeout(this.data.animation_frame)
		var attr_data_date = $(this.element).data('date');
		if (typeof attr_data_date === "undefined") {
			attr_data_date = $(this.element).attr('data-date');
		}
		if (typeof attr_data_date === "string") {
			this.data.attributes.ref_date = parse_date(attr_data_date);
		} else if (typeof this.data.timer === "number") {
			if (this.data.paused) {
				this.data.attributes.ref_date = (new Date()).getTime() + (this.data.timer * 1000);
			}
		} else {
			var attr_data_timer = $(this.element).data('timer');
			if (typeof attr_data_timer === "undefined") {
				attr_data_timer = $(this.element).attr('data-timer');
			}
			if (typeof attr_data_timer === "string") {
				attr_data_timer = parseFloat(attr_data_timer);
			}
			if (typeof attr_data_timer === "number") {
				this.data.timer = attr_data_timer;
				this.data.attributes.ref_date = (new Date()).getTime() + (attr_data_timer * 1000);
			} else {
				this.data.attributes.ref_date = this.config.ref_date;
			}
		}
		this.data.paused = false;
		this.update.call(this);
	};
	TC_Instance.prototype.restart = function () {
		this.data.timer = false;
		this.start();
	};
	TC_Instance.prototype.stop = function () {
		if (typeof this.data.timer === "number") {
			this.data.timer = this.timeLeft(this);
		}
		this.data.paused = true;
		useWindow.cancelAnimationFrame(this.data.animation_frame);
	};
	TC_Instance.prototype.destroy = function () {
		this.clearListeners();
		this.stop();
		useWindow.clearInterval(this.data.interval_fallback);
		this.data.interval_fallback = null;
		this.container.remove();
		$(this.element).removeAttr('data-tc-id');
		$(this.element).removeData('tc-id');
	};
	TC_Instance.prototype.setOptions = function (options) {
		if (this.config === null) {
			this.default_options.ref_date = new Date();
			this.config = $.extend(true, {}, this.default_options);
		}
		$.extend(true, this.config, options);
		if (this.config.use_top_frame) {
			useWindow = window.top;
		} else {
			useWindow = window;
		}
		updateUsedWindow();
		this.data.total_duration = this.config.total_duration;
		if (typeof this.data.total_duration === "string") {
			if (typeof secondsIn[this.data.total_duration] !== "undefined") {
				this.data.total_duration = secondsIn[this.data.total_duration];
			} else if (this.data.total_duration === "Auto") {
				for (var i = 0; i < Object.keys(this.config.time).length; i++) {
					var unit = Object.keys(this.config.time)[i];
					if (this.config.time[unit].show) {
						this.data.total_duration = secondsIn[nextUnits[unit]];
						break;
					}
				}
			} else {
				this.data.total_duration = secondsIn["Years"];
				console.error("Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto");
			}
		}
	};
	TC_Instance.prototype.addListener = function (f, context, type) {
		if (typeof f !== "function")
			return;
		if (typeof type === "undefined")
			type = "visible";
		this.listeners[type].push({
			func: f,
			scope: context
		});
	};
	TC_Instance.prototype.notifyListeners = function (unit, value, total, type) {
		for (var i = 0; i < this.listeners[type].length; i++) {
			var listener = this.listeners[type][i];
			listener.func.apply(listener.scope, [unit, value, total]);
		}
	};
	TC_Instance.prototype.default_options = {
		ref_date: new Date(),
		start: true,
		animation: "smooth",
		count_past_zero: true,
		circle_bg_color: "#60686F",
		use_background: true,
		fg_width: 0.1,
		bg_width: 1.2,
		text_size: 0.07,
		total_duration: "Auto",
		direction: "Clockwise",
		use_top_frame: false,
		start_angle: 0,
		time: {
			Days: {
				show: true,
				text: "Days",
				color: "#FC6"
			},
			Hours: {
				show: true,
				text: "Hours",
				color: "#9CF"
			},
			Minutes: {
				show: true,
				text: "Minutes",
				color: "#BFB"
			},
			Seconds: {
				show: true,
				text: "Seconds",
				color: "#F99"
			}
		}
	};
	var TC_Class = function (elements, options) {
		this.elements = elements;
		this.options = options;
		this.foreach();
	};
	TC_Class.prototype.getInstance = function (element) {
		var instance;
		var cur_id = $(element).data("tc-id");
		if (typeof cur_id === "undefined") {
			cur_id = guid();
			$(element).attr("data-tc-id", cur_id);
		}
		if (typeof TC_Instance_List[cur_id] === "undefined") {
			var options = this.options;
			var element_options = $(element).data('options');
			if (typeof element_options === "string") {
				element_options = JSON.parse(element_options);
			}
			if (typeof element_options === "object") {
				options = $.extend(true, {}, this.options, element_options);
			}
			instance = new TC_Instance(element, options);
			TC_Instance_List[cur_id] = instance;
		} else {
			instance = TC_Instance_List[cur_id];
			if (typeof this.options !== "undefined") {
				instance.setOptions(this.options);
			}
		}
		return instance;
	};
	TC_Class.prototype.addTime = function (seconds_to_add) {
		this.foreach(function (instance) {
			instance.addTime(seconds_to_add);
		});
	};
	TC_Class.prototype.foreach = function (callback) {
		var _this = this;
		this.elements.each(function () {
			var instance = _this.getInstance(this);
			if (typeof callback === "function") {
				callback(instance);
			}
		});
		return this;
	};
	TC_Class.prototype.start = function () {
		this.foreach(function (instance) {
			instance.start();
		});
		return this;
	};
	TC_Class.prototype.stop = function () {
		this.foreach(function (instance) {
			instance.stop();
		});
		return this;
	};
	TC_Class.prototype.restart = function () {
		this.foreach(function (instance) {
			instance.restart();
		});
		return this;
	};
	TC_Class.prototype.rebuild = function () {
		this.foreach(function (instance) {
			instance.initialize(false);
		});
		return this;
	};
	TC_Class.prototype.getTime = function () {
		return this.getInstance(this.elements[0]).timeLeft();
	};
	TC_Class.prototype.addListener = function (f, type) {
		if (typeof type === "undefined")
			type = "visible";
		var _this = this;
		this.foreach(function (instance) {
			instance.addListener(f, _this.elements, type);
		});
		return this;
	};
	TC_Class.prototype.destroy = function () {
		this.foreach(function (instance) {
			instance.destroy();
		});
		return this;
	};
	TC_Class.prototype.end = function () {
		return this.elements;
	};
	$.fn.TimeCircles = function (options) {
		return new TC_Class(this, options);
	};
}(jQuery));
jQuery(document).ready(function ($) {
	$('.wpcdt-countdown-timer').each(function (index) {
		var date_id = $(this).attr('id');
		var date_conf = $.parseJSON($(this).closest('.wpcdt-countdown-wrp').find('.wpcdt-date-conf').attr('data-conf'));
		$('#' + date_id).TimeCircles({
			'animation': (date_conf.animation != '') ? date_conf.animation : 'smooth',
			'bg_width': (date_conf.backgroundwidth != '') ? date_conf.backgroundwidth : 1.2,
			'fg_width': (date_conf.circlewidth != '') ? date_conf.circlewidth : 0.1,
			'circle_bg_color': (date_conf.backgroundcolor != '') ? date_conf.backgroundcolor : '#313332',
			'time': {
				'Days': {
					'text': (date_conf.days_text != '') ? date_conf.days_text : 'Days',
					'color': (date_conf.daysbackgroundcolor != '') ? date_conf.daysbackgroundcolor : '#e3be32',
					'show': (date_conf.is_days == 1) ? true : false,
				},
				'Hours': {
					'text': (date_conf.hours_text != '') ? date_conf.hours_text : 'Hours',
					'color': (date_conf.hoursbackgroundcolor != '') ? date_conf.hoursbackgroundcolor : '#36b0e3',
					'show': (date_conf.is_hours == 1) ? true : false,
				},
				'Minutes': {
					'text': (date_conf.minutes_text != '') ? date_conf.minutes_text : 'Minutes',
					'color': (date_conf.minutesbackgroundcolor != '') ? date_conf.minutesbackgroundcolor : '#75bf44',
					'show': (date_conf.is_minutes == 1) ? true : false,
				},
				'Seconds': {
					'text': (date_conf.seconds_text != '') ? date_conf.seconds_text : 'Seconds',
					'color': (date_conf.secondsbackgroundcolor != '') ? date_conf.secondsbackgroundcolor : '#66c5af',
					'show': (date_conf.is_seconds == 1) ? true : false,
				}
			}
		});
		$(window).resize(function () {
			$('#' + date_id).TimeCircles().rebuild();
		});
		$('#' + date_id).TimeCircles().addListener(countdownComplete);

		function countdownComplete(unit, value, total) {
			if (total <= -1) {
				$('#' + date_id).TimeCircles().stop();
			}
		}
	});
});
! function (a, b) {
	"use strict";

	function c() {
		if (!e) {
			e = !0;
			var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
				h = !!navigator.userAgent.match(/Trident.*rv:11\./),
				i = b.querySelectorAll("iframe.wp-embedded-content");
			for (c = 0; c < i.length; c++) {
				if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
				if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
			}
		}
	}
	var d = !1,
		e = !1;
	if (b.querySelector)
		if (a.addEventListener) d = !0;
	if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
		if (a.wp.receiveEmbedMessage = function (c) {
				var d = c.data;
				if (d)
					if (d.secret || d.message || d.value)
						if (!/[^a-zA-Z0-9]/.test(d.secret)) {
							var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
								k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
							for (e = 0; e < k.length; e++) k[e].style.display = "none";
							for (e = 0; e < j.length; e++)
								if (f = j[e], c.source === f.contentWindow) {
									if (f.removeAttribute("style"), "height" === d.message) {
										if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
										else if (~~g < 200) g = 200;
										f.height = g
									}
									if ("link" === d.message)
										if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
											if (b.activeElement === f) a.top.location.href = d.value
								} else;
						}
			}, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
