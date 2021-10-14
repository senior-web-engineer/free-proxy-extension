require = (function e(b, g, d) {
	function c(m, j) {
		if (!g[m]) {
			if (!b[m]) {
				var i = typeof require == "function" && require;
				if (!j && i) {
					return i(m, !0)
				}
				if (a) {
					return a(m, !0)
				}
				var k = new Error("Cannot find module '" + m + "'");
				throw k.code = "MODULE_NOT_FOUND", k
			}
			var h = g[m] = {
				exports: {}
			};
			b[m][0].call(h.exports, function(l) {
				var o = b[m][1][l];
				return c(o ? o : l)
			}, h, h.exports, e, b, g, d)
		}
		return g[m].exports
	}
	var a = typeof require == "function" && require;
	for (var f = 0; f < d.length; f++) {
		c(d[f])
	}
	return c
})({
	"./config": [function(b, c, a) {
		c.exports = {
			name: "FreeProxies",
			freeproxies: {
				apiPrefix: "https://d1blmth2c5vbem.cloudfront.net/v1/",
				locationApiPrefix: "https://d2nib9hpvmumkf.cloudfront.net/v1/"
			},
			proxy: {
				defaultCountry: "nl",
				settings: {
					version: 4,
					countries: {
						nl: {
							servers: [{
								host: "nl1.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl2.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl3.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl4.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl5.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl6.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl7.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl8.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl9.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl10.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl11.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl12.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl13.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl14.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl15.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl16.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl17.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl18.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl19.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl20.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "nl22.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}]
						},
						uk: {
							servers: [{
								host: "uk1.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk2.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk3.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk4.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk5.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk6.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk7.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk8.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk9.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk10.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk11.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk12.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "uk13.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}]
						},
						sg: {
							servers: [{
								host: "sg1.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg2.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg3.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg4.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg5.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg6.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg7.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg8.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg9.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg10.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "sg11.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}]
						},
						us: {
							servers: [{
								host: "us1.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us2.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us3.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us4.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us5.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us6.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us7.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us8.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us9.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us10.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us11.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us12.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us13.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us14.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us15.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us16.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us17.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us18.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us19.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us20.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us21.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us22.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us23.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us24.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}, {
								host: "us25.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}]
						},
						us_test: {
							hidden: true,
							servers: [{
								host: "us-test-1.postls.com",
								port: 443,
								alt_ports: [444, 8443]
							}]
						}
					}
				}
			}
		}
	}, {}],
	1: [function(b, c, a) {
		(function(d, f) {
				if (typeof c == "object" && c.exports) {
					c.exports = f()
				} else {
					if (typeof define == "function" && define.amd) {
						define(f)
					} else {
						d.Spinner = f()
					}
				}
			}
			(this, function() {
				var h = ["webkit", "Moz", "ms", "O"],
					l;

				function j(q, t) {
					var r = document.createElement(q || "div"),
						s;
					for (s in t) {
						r[s] = t[s]
					}
					return r
				}

				function k(r) {
					for (var q = 1, s = arguments.length; q < s; q++) {
						r.appendChild(arguments[q])
					}
					return r
				}

				function o(u, v) {
					var t = u.style,
						q, r;
					v = v.charAt(0).toUpperCase() + v.slice(1);
					if (t[v] !== undefined) {
						return v
					}
					for (r = 0; r < h.length; r++) {
						q = h[r] + v;
						if (t[q] !== undefined) {
							return q
						}
					}
				}

				function i(q, s) {
					for (var r in s) {
						q.style[o(q, r) || r] = s[r]
					}
					return q
				}

				function m(s) {
					for (var q = 1; q < arguments.length; q++) {
						var r = arguments[q];
						for (var t in r) {
							if (s[t] === undefined) {
								s[t] = r[t]
							}
						}
					}
					return s
				}

				function p(r, q) {
					return typeof r == "string" ? r : r[q % r.length]
				}
				var g = {
					lines: 12,
					length: 7,
					width: 5,
					radius: 10,
					scale: 1,
					corners: 1,
					color: "#000",
					opacity: 1 / 4,
					rotate: 0,
					direction: 1,
					speed: 1,
					trail: 100,
					fps: 20,
					zIndex: 2000000000,
					className: "spinner",
					top: "50%",
					left: "50%",
					shadow: false,
					hwaccel: false,
					position: "absolute"
				};

				function f(q) {
					this.opts = m(q || {}, f.defaults, g)
				}
				f.defaults = {};
				m(f.prototype, {
					spin: function(s) {
						this.stop();
						var q = this,
							t = q.opts,
							r = q.el = j(null, {
								className: t.className
							});
						i(r, {
							position: t.position,
							width: 0,
							zIndex: t.zIndex,
							left: t.left,
							top: t.top
						});
						if (s) {
							s.insertBefore(r, s.firstChild || null)
						}
						r.setAttribute("role", "progressbar");
						q.lines(r, q.opts);
						return q
					},
					stop: function() {
						var q = this.el;
						if (q) {
							clearTimeout(this.timeout);
							if (q.parentNode) {
								q.parentNode.removeChild(q)
							}
							this.el = undefined
						}
						return this
					},
					lines: function(s, u) {
						var r = 0,
							v = (u.lines - 1) * (1 - u.direction) / 2,
							q;

						function t(w, x) {
							return i(j(), {
								position: "absolute",
								width: u.scale * (u.length + u.width) + "px",
								height: u.scale * u.width + "px",
								background: w,
								boxShadow: x,
								transformOrigin: "left",
								transform: "rotate(" + ~~(360 / u.lines * r + u.rotate) + "deg) translate(" + u.scale * u.radius + "px,0)",
								borderRadius: (u.corners * u.scale * u.width >> 1) + "px"
							})
						}
						for (; r < u.lines; r++) {
							q = i(j(), {
								position: "absolute",
								top: 1 + ~(u.scale * u.width / 2) + "px",
								transform: u.hwaccel ? "translate3d(0,0,0)" : "",
								opacity: u.opacity
							});
							if (u.shadow) {
								k(q, i(t("#000", "0 0 4px #000"), {
									top: "2px"
								}))
							}
							k(s, k(q, t(p(u.color, r), "0 0 1px rgba(0,0,0,.1)")))
						}
						return s
					},
					opacity: function(r, q, s) {
						if (q < r.childNodes.length) {
							r.childNodes[q].style.opacity = s
						}
					}
				});

				function n() {
					function q(s, r) {
						return j("<" + s + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', r)
					}
					l.addRule(".spin-vml", "behavior:url(#default#VML)");
					f.prototype.lines = function(v, u) {
						var t = u.scale * (u.length + u.width),
							B = u.scale * 2 * t;

						function A() {
							return i(q("group", {
								coordsize: B + " " + B,
								coordorigin: -t + " " + -t
							}), {
								width: B,
								height: B
							})
						}
						var w = -(u.width + u.length) * u.scale * 2 + "px",
							z = i(A(), {
								position: "absolute",
								top: w,
								left: w
							}),
							y;

						function x(s, r, C) {
							k(z, k(i(A(), {
								rotation: 360 / u.lines * s + "deg",
								left: ~~r
							}), k(i(q("roundrect", {
								arcsize: u.corners
							}), {
								width: t,
								height: u.scale * u.width,
								left: u.scale * u.radius,
								top: -u.scale * u.width >> 1,
								filter: C
							}), q("fill", {
								color: p(u.color, s),
								opacity: u.opacity
							}), q("stroke", {
								opacity: 0
							}))))
						}
						if (u.shadow) {
							for (y = 1; y <= u.lines; y++) {
								x(y, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
							}
						}
						for (y = 1; y <= u.lines; y++) {
							x(y)
						}
						return k(v, z)
					};
					f.prototype.opacity = function(s, r, u, t) {
						var v = s.firstChild;
						t = t.shadow && t.lines || 0;
						if (v && r + t < v.childNodes.length) {
							v = v.childNodes[r + t];
							v = v && v.firstChild;
							v = v && v.firstChild;
							if (v) {
								v.opacity = u
							}
						}
					}
				}
				if (typeof document !== "undefined") {
					l = (function() {
							var q = j("style", {
								type: "text/css"
							});
							k(document.getElementsByTagName("head")[0], q);
							return q.sheet || q.styleSheet
						}
						());
					var d = i(j("group"), {
						behavior: "url(#default#VML)"
					});
					if (!o(d, "transform") && d.adj) {
						n()
					}
				}
				return f
			}))
	}, {}],
	2: [function(b, c, a) {
		b("./utils/format");
		b("./utils/ends_with");
		b("./utils/starts_with");
		b("./utils/error_handler")
	}, {
		"./utils/ends_with": 7,
		"./utils/error_handler": 8,
		"./utils/format": 9,
		"./utils/starts_with": 10
	}],
	3: [function(b, c, a) {
		(function(d) {
			if (config.enabled) {}
		}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {
		"./config": "./config"
	}],
	4: [function(d, f, c) {
		var g = d("jquery");

		function b(h) {
			return h.replace(/__MSG_(.+)__/g, function(i, j) {
				return chrome.i18n.getMessage(j)
			})
		}

		function a() {
			document.title = b(document.title);
			document.getElementsByTagName("body")[0].innerHTML = b(document.getElementsByTagName("body")[0].innerHTML)
		}
		g(document).ready(function() {
			a()
		})
	}, {
		jquery: "jquery"
	}],
	5: [function Sel(d, c, g) {
		d("./common");
		d("./i18n");
		d("./select");
		var f = d("spin.js");
		var h = d("jquery");
		var a = chrome.extension.getBackgroundPage();
		var i = a.proxy;
		var b = a.freeproxies;

		function j() {
			var k = i.connected();
			if (!k) {
				h(".content-box-other").removeClass("active")
			} else {
				h(".content-box-other").addClass("active");
				h("select option[value='" + k + "']").attr("selected", "selected");
				h("select").select("destroy").select()
			}
		}
		h(document).ready(function() {
			b.ipInfo(function(l) {
				h(".country").html(chrome.i18n.getMessage("popup_your_location") + l.country_name)
			});
			h(".link-on").click(function() {
				var l = i.lastConnected();
				i.setProxySettings(l, function() {
					j()
				})
			});
			h(".link-off").click(function() {
				i.clearProxySettings(function() {
					j()
				})
			});
			j();
			h("select").change(function() {
				var l = h("select option:selected").val();
				i.setProxySettings(l)
			});
			h(".link-appstore").click(function(l) {});
			var k = new f({
				scale: 0.5
			}).spin(document.querySelector(".selectmenu"));
			i.countryCodes(function(n) {
				k.stop();
				var m = [];
				n.forEach(function(q) {
					var s = chrome.i18n.getMessage("country_name_" + q.toUpperCase());
					if (s === "" || typeof s === "undefined") {
						var o = "n/a";
						if (typeof chrome.i18n.getUILanguage === "function") {
							o = chrome.i18n.getUILanguage()
						}
						var p = "n/a";
						if (chrome.runtime.getManifest()) {
							p = chrome.runtime.getManifest().version
						}
						var r = "failed to look up country name for: " + q + " with locale: " + o + " at res/popup.js";
						s = q.toUpperCase() || "N/A"
					}
					m.push({
						code: q,
						name: s
					})
				});
				m.sort(function(p, o) {
					return p.name > o.name ? 1 : p.name < o.name ? -1 : 0
				});
				var l = h("select").empty();
				h.each(m, function(o, p) {
					l.append(h("<option />").val(p.code).text(p.name))
				});
				j()
			})
		})
	}, {
		"./common": 2,
		"./i18n": 4,
		"./select": 6,
		jquery: "jquery",
		"spin.js": 1
	}],
	6: [function(b, c, a) {
		var d = jQuery = b("jquery");
		d(function f() {
			if (d("select").size()) {
				var g = d("select").not(".default").select();
				d(".selectmenu-menu .unable").click(function() {
					return false
				})
			}
		});
		d.fn.select = function(h) {
			var r = d.fn.select.method,
				k = jQuery.Event("itemClick"),
				q = jQuery.Event("selectReady"),
				m = jQuery.Event("enabled"),
				j = jQuery.Event("disabled"),
				p = jQuery.Event("destroyed");
			if (typeof h == "string" && h in d.fn.select.method) {
				var n = d(this);
				r[h](n, arguments[1]);
				return d(this)
			}
			if (!("method" in d.fn.select)) {
				d.fn.select.method = {
					destroy: function(o) {
						if (o.data("customized")) {
							o.off("change" + h.namespace);
							o.each(function() {
								var s = d(this);
								s.data("customSelect").remove();
								d(document).off("mousedown", s.data("mousedownHandler"));
								d(window).off("resize", s.data("resizeHandler"))
							});
							o.removeData();
							o.trigger("destroyed")
						} else {
							throw new Error("объект не проинициализирован")
						}
					},
					enable: function(o) {
						if (o.data("disable")) {
							o.attr("disabled", false);
							o.data("customSelect").first().on("click" + h.namespace, o.data("openerHandler")).removeClass("disabled");
							o.trigger("enabled")
						}
					},
					disable: function(o) {
						if (!o.data("disable")) {
							o.data("disable", true);
							o.attr("disabled", true);
							o.data("openerHandler", d._data(o.data("customSelect").first().get(0), "events").click[0].handler);
							o.data("customSelect").first().off("click").addClass("disabled");
							o.trigger("disabled")
						}
					},
					pick: function(o, s) {
						o.each(function() {
							this.selectedIndex = s
						});
						o.trigger("change" + h.namespace)
					}
				};
				r = d.fn.select.method
			}
			h = d.extend({
				list: "ul",
				namespace: ".select",
				item: "li",
				itemHTML: "li span",
				openerClass: "selectmenu",
				icoClass: "selectmenu-icon",
				selectedClass: "selectmenu-status",
				activeItemClass: "active",
				activeOpenerClass: "active",
				dropDownClass: "selectmenu-menu",
				style: "dropdown",
				transferClass: true,
				dropdownHasBorder: true,
				hasIcons: true,
				resizable: false,
				triggerEvents: true
			}, h);
			var n = [],
				l = d("body"),
				g = d('<a class="' + h.openerClass + '"><span class="' + h.icoClass + '"></span><span class="' + h.selectedClass + '"></span></a>'),
				i = d("<div class=" + h.dropDownClass + '><div class="select-top"><div class="select-l"></div><div class="select-r"></div></div><div class="select-c"><div class="c appendHere"></div></div><div class="select-bottom"><div class="select-l"></div><div class="select-r"></div></div></div>');
			d(this).each(function(o) {
				if (!d(this).data("customized")) {
					n.push(this)
				}
			});
			if (n.length) {
				d(n).each(function() {
					var z = g.clone(),
						x = d(this),
						y = x.find("option[title]").text(),
						D = x.find("option[title]").attr("disabled", true).end().find("option"),
						C = D.size() - 1,
						B = i.clone(),
						A = h.itemHTML.split(" "),
						u = A.length >= 2,
						v = "<" + h.list + ">";
					x.find("option").each(function(G, H) {
						if (d(this).attr("title")) {
							v += "<" + h.item + " class='title' style='display:none;'>" + (H.childNodes.length > 0 ? H.childNodes[0].nodeValue : "") + "</" + h.item + ">"
						} else {
							if (!u) {
								v += "<" + h.item + ">" + (H.childNodes.length > 0 ? H.childNodes[0].nodeValue : "") + "</" + h.item + ">"
							} else {
								var E = "";
								for (var F = A.length - 1; F != 0; F--) {
									if (!E) {
										E += "<" + A[F] + ">" + (H.childNodes.length > 0 ? H.childNodes[0].nodeValue : "") + "</" + A[F] + ">"
									} else {
										if (F != 0 && A.length > 2) {
											E = "<" + A[F] + ">" + E + "</" + A[F] + ">"
										}
									}
								}
								E = "<" + A[0] + ">" + E + "</" + A[0] + ">";
								v += E
							}
						}
						if (G == C) {
							v += "</" + h.list + ">"
						}
					});
					v = d(v);
					B = B.find(".appendHere").removeClass("appendHere").append(v).end();
					z.insertAfter(x);
					z.find("." + h.selectedClass).text(x.find("option:selected").text());
					l.append(B);
					(h.dropdownHasBorder) ? B.width(z.width()): B.width(z.outerWidth());
					if (h.transferClass) {
						z.addClass(z.attr("class") + " " + x.attr("class"));
						B.addClass(B.attr("class") + " " + x.attr("class"))
					}
					d(this).data("customSelect", z.add(B));
					d(this).data("customized", true);
					var t = v.find(">" + h.item),
						w = B.outerWidth(),
						o = B.outerHeight();
					selectedByHover = "", selected = "";
					if (!h.resizable) {
						z.width(x.outerWidth());
						(h.dropdownHasBorder) ? w = B.width(z.width()): w = B.width(z.outerWidth())
					} else {
						d(window).on("resize.opener", function() {
							(h.dropdownHasBorder) ? w = B.width(z.width()): w = B.width(z.outerWidth())
						}).trigger("resize.opener")
					}
					if (y) {
						z.find("." + h.selectedClass).text(y);
						x.trigger("change" + h.namespace, [D.filter(":selected").index()])
					}
					x.on("change" + h.namespace, function(G, E, F, H) {
						if (H) {
							return
						}
						if (!E && E !== 0) {
							E = this.selectedIndex
						}
						this.selectedIndex = E;
						t.removeClass(h.activeItemClass).eq(E).addClass(h.activeItemClass);
						selected = D.eq(E);
						z.find("." + h.selectedClass).text(selected.text());
						if (!F) {
							B.hide();
							z.removeClass(h.activeOpenerClass)
						}
						x.trigger("change", [null, null, true])
					});
					if (h.hasIcons) {
						D.each(function(E) {
							t.eq(E).addClass(this.className).prepend("<span></span>")
						});
						x.on("change" + h.namespace, function(G, E, F, H) {
							if (H) {
								return
							}
							z.find("." + h.selectedClass).prepend('<span class="' + selected.attr("class") + '"></span>')
						});
						z.find("." + h.selectedClass).prepend('<span class="' + D.filter(":selected").attr("class") + '"></span>')
					}
					x.hide();
					t.click(function(E) {
						if (d(this).hasClass("unable")) {
							return false
						}
						if (!d(this).hasClass(h.activeItemClass)) {
							x.trigger("change" + h.namespace, [d(this).index()])
						}
						B.hide();
						z.removeClass(h.activeOpenerClass)
					});
					z.click(function(E) {
						if (B.is(":hidden")) {
							B.show();
							z.addClass(h.activeOpenerClass);
							s()
						} else {
							B.hide();
							z.removeClass(h.activeOpenerClass)
						}
					});
					x.data("resizeHandler", function() {
						if (B.is(":visible")) {
							s()
						}
					});
					x.data("mousedownHandler", function(E) {
						if (!d(E.target).closest(B).size() && !d(E.target).closest(z).size()) {
							B.hide();
							z.removeClass(h.activeOpenerClass)
						}
					});
					d(document).ready(function() {
						d(".refreshL").click(function() {
							setTimeout(function() {
								location.reload()
							}, 200)
						})
					});
					d(document).ready(function() {
						d(".refreshR").click(function() {
							setTimeout(function() {
								location.reload()
							}, 200)
						})
					});
					d(document).ready(function() {
						d(".link-off").click(function() {
							setTimeout(function() {
								location.reload()
							}, 200)
						})
					});
					d(document).ready(function() {
						d(".content-info .link-on").click(function() {
							setTimeout(function() {
								location.reload()
							}, 200)
						})
					});
					d(document).ready(function() {
						d(".refreshIP").click(function() {
							{
								x.trigger("change" + h.namespace)
								location.reload()
							}
						})
					});
					d(window).on("resize", x.data("resizeHandler"));
					d(document).on("mousedown", x.data("mousedownHandler"));
					if (h.triggerEvents) {
						t.click(function(E) {
							x.trigger(k, [d(this).text()]);
							setTimeout(function() {
								location.reload()
							}, 500)
						});
						x.trigger(q, [B])
					}

					function s() {
						if (h.style == "dropdown") {
							var F = z.offset().top + z.outerHeight(),
								E = z.offset().left;
							B.css({
								top: F,
								left: E
							})
						} else {
							var G = t.eq(x.get(0).selectedIndex);
							G = G.hasClass("title") ? G.next() : G;
							var F = z.offset().top - G.position().top,
								E = z.offset().left;
							B.css({
								top: F,
								left: E
							})
						}
					}
					if (x.is(":disabled")) {
						x.select("disable")
					}
				})
			} else {
				throw Error('селектор $("' + d(this).selector + '") ничего не возвратил')
			}
		}
	}, {
		jquery: "jquery"
	}],
	7: [function(b, c, a) {
		if (!String.prototype.endsWith) {
			String.prototype.endsWith = function(d) {
				return this.indexOf(d, this.length - d.length) !== -1
			}
		}
	}, {}],
	8: [function(b, c, a) {
		window.onerror = function(g, f, i) {
			try {
				var d = "n/a";
				if (chrome.runtime.getManifest()) {
					d = chrome.runtime.getManifest().version
				}
			} catch (h) {}
			return false
		}
	}, {}],
	9: [function(b, c, a) {
		function d(g, f) {
			return g.replace(/{(\d+)}/g, function(h, i) {
				return typeof f[i] != "undefined" ? f[i] : h
			})
		}
		if (!String.prototype.format) {
			String.prototype.format = function() {
				return d(this, arguments)
			}
		}
		c.exports = d
	}, {}],
	10: [function(b, c, a) {
		if (!String.prototype.startsWith) {
			String.prototype.startsWith = function(d) {
				return this.indexOf(d) === 0
			}
		}
	}, {}]
}, {}, [5]);