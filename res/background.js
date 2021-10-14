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
			},
			proxyOffline:{
				"version": 20211001092503,
				"countries": {
				  "at": {
					"timezoneOffset": 60,
					"premium_servers": [{ "host": "at11.lunrac.com", "port": 443 }]
				  },
				  "au": {
					"timezoneOffset": 660,
					"premium_servers": [
					  { "host": "au1.lunrac.com", "port": 443 },
					  { "host": "au2.lunrac.com", "port": 443 },
					  { "host": "au3.lunrac.com", "port": 443 },
					  { "host": "au4.lunrac.com", "port": 443 },
					  { "host": "au5.lunrac.com", "port": 443 },
					  { "host": "au6.lunrac.com", "port": 443 },
					  { "host": "au7.lunrac.com", "port": 443 },
					  { "host": "au8.lunrac.com", "port": 443 },
					  { "host": "au9.lunrac.com", "port": 443 },
					  { "host": "au10.lunrac.com", "port": 443 },
					  { "host": "au11.lunrac.com", "port": 443 },
					  { "host": "au12.lunrac.com", "port": 443 },
					  { "host": "au13.lunrac.com", "port": 443 }
					]
				  },
				  "be": {
					"timezoneOffset": 60,
					"premium_servers": [
					  { "host": "be1.lunrac.com", "port": 443 },
					  { "host": "be2.lunrac.com", "port": 443 },
					  { "host": "be3.lunrac.com", "port": 443 },
					  { "host": "be4.lunrac.com", "port": 443 },
					  { "host": "be5.lunrac.com", "port": 443 },
					  { "host": "be6.lunrac.com", "port": 443 },
					  { "host": "be7.lunrac.com", "port": 443 },
					  { "host": "be8.lunrac.com", "port": 443 },
					  { "host": "be9.lunrac.com", "port": 443 },
					  { "host": "be10.lunrac.com", "port": 443 },
					  { "host": "be11.lunrac.com", "port": 443 },
					  { "host": "be12.lunrac.com", "port": 443 },
					  { "host": "be13.lunrac.com", "port": 443 },
					  { "host": "be14.lunrac.com", "port": 443 },
					  { "host": "be15.lunrac.com", "port": 443 },
					  { "host": "be16.lunrac.com", "port": 443 },
					  { "host": "be17.lunrac.com", "port": 443 },
					  { "host": "be18.lunrac.com", "port": 443 },
					  { "host": "be19.lunrac.com", "port": 443 },
					  { "host": "be20.lunrac.com", "port": 443 },
					  { "host": "be21.lunrac.com", "port": 443 },
					  { "host": "be22.lunrac.com", "port": 443 },
					  { "host": "be23.lunrac.com", "port": 443 },
					  { "host": "be24.lunrac.com", "port": 443 },
					  { "host": "be25.lunrac.com", "port": 443 },
					  { "host": "be26.lunrac.com", "port": 443 },
					  { "host": "be27.lunrac.com", "port": 443 },
					  { "host": "be28.lunrac.com", "port": 443 },
					  { "host": "be29.lunrac.com", "port": 443 },
					  { "host": "be30.lunrac.com", "port": 443 },
					  { "host": "be31.lunrac.com", "port": 443 },
					  { "host": "be32.lunrac.com", "port": 443 },
					  { "host": "be33.lunrac.com", "port": 443 },
					  { "host": "be34.lunrac.com", "port": 443 },
					  { "host": "be35.lunrac.com", "port": 443 },
					  { "host": "be36.lunrac.com", "port": 443 },
					  { "host": "be37.lunrac.com", "port": 443 },
					  { "host": "be38.lunrac.com", "port": 443 },
					  { "host": "be39.lunrac.com", "port": 443 },
					  { "host": "be40.lunrac.com", "port": 443 }
					]
				  },
				  "bg": {
					"timezoneOffset": 120,
					"premium_servers": [
					  { "host": "bg1.lunrac.com", "port": 443 },
					  { "host": "bg2.lunrac.com", "port": 443 },
					  { "host": "bg3.lunrac.com", "port": 443 },
					  { "host": "bg4.lunrac.com", "port": 443 }
					]
				  },
				  "br": {
					"timezoneOffset": -180,
					"premium_servers": [{ "host": "br1.lunrac.com", "port": 443 }]
				  },
				  "ca": {
					"timezoneOffset": -240,
					"premium_servers": [
					  { "host": "ca1.lunrac.com", "port": 443 },
					  { "host": "ca2.lunrac.com", "port": 443 }
					]
				  },
				  "ch": {
					"timezoneOffset": 60,
					"premium_servers": [{ "host": "ch2.lunrac.com", "port": 443 }]
				  },
				  "cl": {
					"timezoneOffset": -180,
					"premium_servers": [{ "host": "cl1.lunrac.com", "port": 443 }]
				  },
				  "cz": {
					"timezoneOffset": 60,
					"premium_servers": [{ "host": "cz6.lunrac.com", "port": 443 }]
				  },
				  "de": {
					"timezoneOffset": 60,
					"premium_servers": [
					  { "host": "de1.lunrac.com", "port": 443 },
					  { "host": "de2.lunrac.com", "port": 443 },
					  { "host": "de5.lunrac.com", "port": 443 },
					  { "host": "de11.lunrac.com", "port": 443 }
					]
				  },
				  "dk": {
					"timezoneOffset": 60,
					"premium_servers": [
					  { "host": "dk1.lunrac.com", "port": 443 },
					  { "host": "dk2.lunrac.com", "port": 443 },
					  { "host": "dk3.lunrac.com", "port": 443 },
					  { "host": "dk4.lunrac.com", "port": 443 },
					  { "host": "dk5.lunrac.com", "port": 443 },
					  { "host": "dk6.lunrac.com", "port": 443 },
					  { "host": "dk7.lunrac.com", "port": 443 },
					  { "host": "dk8.lunrac.com", "port": 443 },
					  { "host": "dk9.lunrac.com", "port": 443 },
					  { "host": "dk10.lunrac.com", "port": 443 },
					  { "host": "dk11.lunrac.com", "port": 443 },
					  { "host": "dk12.lunrac.com", "port": 443 }
					]
				  },
				  "es": {
					"timezoneOffset": 60,
					"premium_servers": [
					  { "host": "es1.lunrac.com", "port": 443 },
					  { "host": "es2.lunrac.com", "port": 443 },
					  { "host": "es3.lunrac.com", "port": 443 },
					  { "host": "es4.lunrac.com", "port": 443 },
					  { "host": "es5.lunrac.com", "port": 443 }
					]
				  },
				  "fi": {
					"timezoneOffset": 120,
					"premium_servers": [
					  { "host": "fi1.lunrac.com", "port": 443 },
					  { "host": "fi2.lunrac.com", "port": 443 },
					  { "host": "fi3.lunrac.com", "port": 443 },
					  { "host": "fi4.lunrac.com", "port": 443 },
					  { "host": "fi5.lunrac.com", "port": 443 },
					  { "host": "fi6.lunrac.com", "port": 443 },
					  { "host": "fi7.lunrac.com", "port": 443 },
					  { "host": "fi8.lunrac.com", "port": 443 },
					  { "host": "fi9.lunrac.com", "port": 443 },
					  { "host": "fi10.lunrac.com", "port": 443 },
					  { "host": "fi11.lunrac.com", "port": 443 }
					]
				  },
				  "fr": {
					"timezoneOffset": 60,
					"premium_servers": [
					  { "host": "fr1.lunrac.com", "port": 443 },
					  { "host": "fr2.lunrac.com", "port": 443 },
					  { "host": "fr3.lunrac.com", "port": 443 },
					  { "host": "fr4.lunrac.com", "port": 443 },
					  { "host": "fr5.lunrac.com", "port": 443 },
					  { "host": "fr6.lunrac.com", "port": 443 },
					  { "host": "fr7.lunrac.com", "port": 443 },
					  { "host": "fr8.lunrac.com", "port": 443 },
					  { "host": "fr9.lunrac.com", "port": 443 },
					  { "host": "fr10.lunrac.com", "port": 443 },
					  { "host": "fr11.lunrac.com", "port": 443 },
					  { "host": "fr12.lunrac.com", "port": 443 },
					  { "host": "fr13.lunrac.com", "port": 443 }
					]
				  },
				  "hk": {
					"timezoneOffset": 480,
					"premium_servers": [
					  { "host": "hk1.lunrac.com", "port": 443 },
					  { "host": "hk2.lunrac.com", "port": 443 },
					  { "host": "hk3.lunrac.com", "port": 443 },
					  { "host": "hk4.lunrac.com", "port": 443 },
					  { "host": "hk5.lunrac.com", "port": 443 },
					  { "host": "hk6.lunrac.com", "port": 443 },
					  { "host": "hk7.lunrac.com", "port": 443 }
					]
				  },
				  "hu": {
					"timezoneOffset": 120,
					"premium_servers": [{ "host": "hu1.lunrac.com", "port": 443 }]
				  },
				  "ie": {
					"timezoneOffset": 0,
					"premium_servers": [
					  { "host": "ie1.lunrac.com", "port": 443 },
					  { "host": "ie2.lunrac.com", "port": 443 },
					  { "host": "ie3.lunrac.com", "port": 443 },
					  { "host": "ie4.lunrac.com", "port": 443 },
					  { "host": "ie5.lunrac.com", "port": 443 },
					  { "host": "ie6.lunrac.com", "port": 443 }
					]
				  },
				  "il": {
					"timezoneOffset": 180,
					"premium_servers": [{ "host": "il1.lunrac.com", "port": 443 }]
				  },
				  "in": {
					"timezoneOffset": 330,
					"premium_servers": [
					  { "host": "in3.lunrac.com", "port": 443 },
					  { "host": "in4.lunrac.com", "port": 443 },
					  { "host": "in5.lunrac.com", "port": 443 },
					  { "host": "in6.lunrac.com", "port": 443 }
					]
				  },
				  "is": {
					"timezoneOffset": 0,
					"premium_servers": [
					  { "host": "is1.lunrac.com", "port": 443 },
					  { "host": "is2.lunrac.com", "port": 443 },
					  { "host": "is3.lunrac.com", "port": 443 },
					  { "host": "is4.lunrac.com", "port": 443 }
					]
				  },
				  "it": {
					"timezoneOffset": 60,
					"premium_servers": [
					  { "host": "it1.lunrac.com", "port": 443 },
					  { "host": "it2.lunrac.com", "port": 443 },
					  { "host": "it3.lunrac.com", "port": 443 }
					]
				  },
				  "jp": {
					"timezoneOffset": 540,
					"premium_servers": [
					  { "host": "jp1.lunrac.com", "port": 443 },
					  { "host": "jp2.lunrac.com", "port": 443 },
					  { "host": "jp3.lunrac.com", "port": 443 },
					  { "host": "jp4.lunrac.com", "port": 443 },
					  { "host": "jp5.lunrac.com", "port": 443 },
					  { "host": "jp6.lunrac.com", "port": 443 },
					  { "host": "jp7.lunrac.com", "port": 443 },
					  { "host": "jp8.lunrac.com", "port": 443 },
					  { "host": "jp9.lunrac.com", "port": 443 },
					  { "host": "jp10.lunrac.com", "port": 443 },
					  { "host": "jp11.lunrac.com", "port": 443 },
					  { "host": "jp12.lunrac.com", "port": 443 },
					  { "host": "jp13.lunrac.com", "port": 443 },
					  { "host": "jp14.lunrac.com", "port": 443 },
					  { "host": "jp15.lunrac.com", "port": 443 },
					  { "host": "jp16.lunrac.com", "port": 443 },
					  { "host": "jp17.lunrac.com", "port": 443 },
					  { "host": "jp18.lunrac.com", "port": 443 },
					  { "host": "jp19.lunrac.com", "port": 443 },
					  { "host": "jp20.lunrac.com", "port": 443 },
					  { "host": "jp21.lunrac.com", "port": 443 },
					  { "host": "jp22.lunrac.com", "port": 443 },
					  { "host": "jp23.lunrac.com", "port": 443 },
					  { "host": "jp24.lunrac.com", "port": 443 },
					  { "host": "jp25.lunrac.com", "port": 443 },
					  { "host": "jp26.lunrac.com", "port": 443 },
					  { "host": "jp27.lunrac.com", "port": 443 },
					  { "host": "jp28.lunrac.com", "port": 443 },
					  { "host": "jp29.lunrac.com", "port": 443 },
					  { "host": "jp30.lunrac.com", "port": 443 },
					  { "host": "jp31.lunrac.com", "port": 443 },
					  { "host": "jp32.lunrac.com", "port": 443 },
					  { "host": "jp33.lunrac.com", "port": 443 },
					  { "host": "jp34.lunrac.com", "port": 443 },
					  { "host": "jp35.lunrac.com", "port": 443 },
					  { "host": "jp36.lunrac.com", "port": 443 },
					  { "host": "jp37.lunrac.com", "port": 443 },
					  { "host": "jp38.lunrac.com", "port": 443 },
					  { "host": "jp39.lunrac.com", "port": 443 },
					  { "host": "jp40.lunrac.com", "port": 443 },
					  { "host": "jp41.lunrac.com", "port": 443 },
					  { "host": "jp42.lunrac.com", "port": 443 },
					  { "host": "jp43.lunrac.com", "port": 443 },
					  { "host": "jp44.lunrac.com", "port": 443 },
					  { "host": "jp45.lunrac.com", "port": 443 },
					  { "host": "jp46.lunrac.com", "port": 443 },
					  { "host": "jp47.lunrac.com", "port": 443 },
					  { "host": "jp48.lunrac.com", "port": 443 },
					  { "host": "jp49.lunrac.com", "port": 443 },
					  { "host": "jp50.lunrac.com", "port": 443 },
					  { "host": "jp51.lunrac.com", "port": 443 },
					  { "host": "jp52.lunrac.com", "port": 443 },
					  { "host": "jp53.lunrac.com", "port": 443 },
					  { "host": "jp54.lunrac.com", "port": 443 },
					  { "host": "jp55.lunrac.com", "port": 443 },
					  { "host": "jp56.lunrac.com", "port": 443 },
					  { "host": "jp57.lunrac.com", "port": 443 },
					  { "host": "jp58.lunrac.com", "port": 443 }
					]
				  },
				  "kr": {
					"timezoneOffset": 540,
					"premium_servers": [
					  { "host": "kr1.lunrac.com", "port": 443 },
					  { "host": "kr2.lunrac.com", "port": 443 },
					  { "host": "kr3.lunrac.com", "port": 443 },
					  { "host": "kr4.lunrac.com", "port": 443 },
					  { "host": "kr5.lunrac.com", "port": 443 },
					  { "host": "kr6.lunrac.com", "port": 443 },
					  { "host": "kr7.lunrac.com", "port": 443 },
					  { "host": "kr8.lunrac.com", "port": 443 },
					  { "host": "kr9.lunrac.com", "port": 443 },
					  { "host": "kr10.lunrac.com", "port": 443 },
					  { "host": "kr11.lunrac.com", "port": 443 },
					  { "host": "kr12.lunrac.com", "port": 443 }
					]
				  },
				  "lt": {
					"timezoneOffset": 120,
					"premium_servers": [
					  { "host": "lt1.lunrac.com", "port": 443 },
					  { "host": "lt2.lunrac.com", "port": 443 },
					  { "host": "lt3.lunrac.com", "port": 443 },
					  { "host": "lt4.lunrac.com", "port": 443 },
					  { "host": "lt5.lunrac.com", "port": 443 },
					  { "host": "lt6.lunrac.com", "port": 443 }
					]
				  },
				  "lu": {
					"timezoneOffset": 60,
					"premium_servers": [{ "host": "lu2.lunrac.com", "port": 443 }]
				  },
				  "lv": {
					"timezoneOffset": 120,
					"premium_servers": [{ "host": "lv2.lunrac.com", "port": 443 }]
				  },
				  "nl": {
					"timezoneOffset": 60,
					"premium_servers": [
					  { "host": "nl9.lunrac.com", "port": 443 },
					  { "host": "nl10.lunrac.com", "port": 443 },
					  { "host": "nl11.lunrac.com", "port": 443 },
					  { "host": "nl12.lunrac.com", "port": 443 },
					  { "host": "nl13.lunrac.com", "port": 443 },
					  { "host": "nl14.lunrac.com", "port": 443 },
					  { "host": "nl15.lunrac.com", "port": 443 },
					  { "host": "nl16.lunrac.com", "port": 443 }
					],
					"servers": [
					  { "host": "nl51.tcdn.me", "port": 443 },
					  { "host": "nl53.tcdn.me", "port": 443 },
					  { "host": "nl54.tcdn.me", "port": 443 },
					  { "host": "nl55.tcdn.me", "port": 443 },
					  { "host": "nl56.tcdn.me", "port": 443 },
					  { "host": "nl57.tcdn.me", "port": 443 },
					  { "host": "nl58.tcdn.me", "port": 443 },
					  { "host": "nl59.tcdn.me", "port": 443 },
					  { "host": "nl60.tcdn.me", "port": 443 },
					  { "host": "nl61.tcdn.me", "port": 443 },
					  {
						"host": "nl62.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl63.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl64.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl65.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl66.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl67.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl68.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl69.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl70.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl71.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl72.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl73.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl74.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl75.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl76.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl77.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl78.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl79.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl80.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl81.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl82.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl83.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl84.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl85.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl86.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl87.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl88.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl89.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl90.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl91.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl92.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl93.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl94.tcdn.me",
						"port": 443
					  },
					  {
						"host": "nl95.tcdn.me",
						"port": 443
					  }
					],
					"fast_servers": [
					  {
						"host": "fnl52.tcdn.me",
						"port": 443
					  }
					]
				  },
				  "no": {
					"timezoneOffset": 60,
					"premium_servers": [
					  {
						"host": "no1.lunrac.com",
						"port": 443
					  },
					  {
						"host": "no2.lunrac.com",
						"port": 443
					  },
					  {
						"host": "no3.lunrac.com",
						"port": 443
					  },
					  {
						"host": "no4.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "nz": {
					"timezoneOffset": 780,
					"premium_servers": [
					  {
						"host": "nz1.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "pl": {
					"timezoneOffset": 60,
					"premium_servers": [
					  {
						"host": "pl1.lunrac.com",
						"port": 443
					  },
					  {
						"host": "pl2.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "ro": {
					"timezoneOffset": 120,
					"premium_servers": [
					  {
						"host": "ro4.lunrac.com",
						"port": 443
					  },
					  {
						"host": "ro5.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "rs": {
					"timezoneOffset": 120,
					"premium_servers": [
					  {
						"host": "rs1.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "ru": {
					"timezoneOffset": 180,
					"premium_servers": [
					  {
						"host": "ru6.lunrac.com",
						"port": 443
					  },
					  {
						"host": "ru7.lunrac.com",
						"port": 443
					  },
					  {
						"host": "ru8.lunrac.com",
						"port": 443
					  },
					  {
						"host": "ru9.lunrac.com",
						"port": 443
					  },
					  {
						"host": "ru10.lunrac.com",
						"port": 443
					  },
					  {
						"host": "ru11.lunrac.com",
						"port": 443
					  },
					  {
						"host": "ru12.lunrac.com",
						"port": 443
					  },
					  {
						"host": "ru13.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "se": {
					"timezoneOffset": 60,
					"premium_servers": [
					  {
						"host": "se10.lunrac.com",
						"port": 443
					  },
					  {
						"host": "se11.lunrac.com",
						"port": 443
					  },
					  {
						"host": "se12.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "sg": {
					"timezoneOffset": 480,
					"servers": [
					  {
						"host": "sg2.tcdn.me",
						"port": 443
					  },
					  {
						"host": "sg3.tcdn.me",
						"port": 443
					  },
					  {
						"host": "sg4.tcdn.me",
						"port": 443
					  },
					  {
						"host": "sg5.tcdn.me",
						"port": 443
					  },
					  {
						"host": "sg6.tcdn.me",
						"port": 443
					  },
					  {
						"host": "sg7.tcdn.me",
						"port": 443
					  },
					  {
						"host": "sg8.tcdn.me",
						"port": 443
					  },
					  {
						"host": "sg9.tcdn.me",
						"port": 443
					  },
					  {
						"host": "sg10.tcdn.me",
						"port": 443
					  }
					],
					"premium_servers": [
					  {
						"host": "sg5.lunrac.com",
						"port": 443
					  },
					  {
						"host": "sg6.lunrac.com",
						"port": 443
					  },
					  {
						"host": "sg7.lunrac.com",
						"port": 443
					  },
					  {
						"host": "sg8.lunrac.com",
						"port": 443
					  },
					  {
						"host": "sg9.lunrac.com",
						"port": 443
					  },
					  {
						"host": "sg10.lunrac.com",
						"port": 443
					  },
					  {
						"host": "sg11.lunrac.com",
						"port": 443
					  },
					  {
						"host": "sg12.lunrac.com",
						"port": 443
					  }
					],
					"fast_servers": [
					  {
						"host": "fsg1.tcdn.me",
						"port": 443
					  }
					]
				  },
				  "si": {
					"timezoneOffset": 120,
					"premium_servers": [
					  {
						"host": "si1.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "tr": {
					"timezoneOffset": 180,
					"premium_servers": [
					  {
						"host": "tr1.lunrac.com",
						"port": 443
					  },
					  {
						"host": "tr2.lunrac.com",
						"port": 443
					  },
					  {
						"host": "tr3.lunrac.com",
						"port": 443
					  },
					  {
						"host": "tr4.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "ua": {
					"timezoneOffset": 180,
					"premium_servers": [
					  {
						"host": "ua2.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "uk": {
					"timezoneOffset": 0,
					"premium_servers": [
					  {
						"host": "uk5.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk6.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk7.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk9.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk10.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk11.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk12.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk15.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk17.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk20.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk23.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk25.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk29.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk33.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk37.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk40.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk41.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk42.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk43.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk45.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk47.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk53.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk54.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk56.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk57.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk58.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk59.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk60.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk61.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk62.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk63.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk64.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk65.lunrac.com",
						"port": 443
					  },
					  {
						"host": "uk66.lunrac.com",
						"port": 443
					  }
					],
					"servers": [
					  {
						"host": "uk23.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk24.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk25.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk26.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk27.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk28.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk29.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk30.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk31.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk32.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk33.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk34.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk35.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk36.tcdn.me",
						"port": 443
					  },
					  {
						"host": "uk37.tcdn.me",
						"port": 443
					  }
					],
					"fast_servers": [
					  {
						"host": "fuk22.tcdn.me",
						"port": 443
					  }
					]
				  },
				  "us": {
					"timezoneOffset": -300,
					"premium_servers": [
					  {
						"host": "us1.lunrac.com",
						"port": 443
					  },
					  {
						"host": "us2.lunrac.com",
						"port": 443
					  },
					  {
						"host": "us7.lunrac.com",
						"port": 443
					  },
					  {
						"host": "us10.lunrac.com",
						"port": 443
					  },
					  {
						"host": "us11.lunrac.com",
						"port": 443
					  },
					  {
						"host": "us12.lunrac.com",
						"port": 443
					  },
					  {
						"host": "us13.lunrac.com",
						"port": 443
					  },
					  {
						"host": "us14.lunrac.com",
						"port": 443
					  }
					],
					"servers": [
					  {
						"host": "us23.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us24.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us25.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us26.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us28.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us29.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us30.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us31.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us32.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us34.tcdn.me",
						"port": 443
					  },
					  {
						"host": "us35.tcdn.me",
						"port": 443
					  }
					],
					"fast_servers": [
					  {
						"host": "fus21.tcdn.me",
						"port": 443
					  }
					]
				  },
				  "usw": {
					"timezoneOffset": -360,
					"premium_servers": [
					  {
						"host": "usw1.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw2.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw3.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw4.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw5.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw6.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw7.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw8.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw9.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw10.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw11.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw12.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw13.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw14.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw15.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw16.lunrac.com",
						"port": 443
					  },
					  {
						"host": "usw17.lunrac.com",
						"port": 443
					  }
					]
				  },
				  "za": {
					"timezoneOffset": 120,
					"premium_servers": [
					  {
						"host": "za1.lunrac.com",
						"port": 443
					  },
					  {
						"host": "za2.lunrac.com",
						"port": 443
					  },
					  {
						"host": "za3.lunrac.com",
						"port": 443
					  },
					  {
						"host": "za4.lunrac.com",
						"port": 443
					  },
					  {
						"host": "za5.lunrac.com",
						"port": 443
					  },
					  {
						"host": "za6.lunrac.com",
						"port": 443
					  },
					  {
						"host": "za7.lunrac.com",
						"port": 443
					  }
					]
				  }
				},
				"domains": {
				  "free": ["tcdn.me"],
				  "premium": ["lunrac.com"]
				}
			  }
			  
		}
	}, {}],
	1: [function(d, f, b) {
		function h(j) {
			return Math.floor(Math.random() * j)
		}

		function c(o) {
			var n = [];
			var j = 0;
			for (var k = 0; k < o.length; k++) {
				var m = o[k].weight || 1;
				n.push({
					start: j,
					end: j + m
				});
				j += m
			}
			var l = h(j);
			for (k = 0; k < n.length; k++) {
				if ((l >= n[k].start) && (l < n[k].end)) {
					return o[k]
				}
			}
		}

		function i(j) {
			return j.slice(0)
		}

		function g(n) {
			var m = i(n);
			var l = m.length;
			while (0 !== l) {
				var j = h(l);
				l--;
				var k = m[l];
				m[l] = m[j];
				m[j] = k
			}
			return m
		}

		function a(n) {
			var m = i(n);
			var j = [];
			for (var k = 0; k < n.length; k++) {
				var l = c(m);
				j.push(l);
				m.splice(m.indexOf(l), 1)
			}
			return j
		}
		b.weightedShuffle = a;
		b.shuffle = g
	}, {}],
	2: [function(b, c, a) {
		(function(h) {
			var k = b("jquery");
			b("./common");
			var g = h.proxy = b("./proxy");
			var f = h.scheduler = b("./update_scheduler");
			chrome.proxy.settings.onChange.addListener(g.onChange.bind(g));
			var j = h.ui = b("./ui");
			var i = h.freeproxies = b("./freeproxies");
			i.init();
			chrome.webRequest.onAuthRequired.addListener(function(o, q) {
				try {
					if (o.isProxy && o.realm == "FreeProxies" && (o.challenger.host == "postlm.com" || o.challenger.host.endsWith(".postlm.com") || o.challenger.host == "postls.com" || o.challenger.host.endsWith(".postls.com"))) {
						var p = localStorage.userId || localStorage.email;
						var n = localStorage.password;
						if (!p || !n || (p.indexOf("@") > 0 && d(o))) {
							var m = i.signup();
							if (m) {
								delete localStorage.email;
								localStorage.userId = p = m.user_id;
								localStorage.password = n = m.password
							} else {
								g.clearProxySettings();
								alert(chrome.i18n.getMessage("signup_error"));
								return
							}
						}
						q({
							authCredentials: {
								username: p,
								password: n
							}
						})
					} else {
						q()
					}
				} finally {}
			}, {
				urls: ["<all_urls>"]
			}, ["asyncBlocking"]);
			var l = new RegExp("^HTTP/1.[01] 408");
			chrome.webRequest.onHeadersReceived.addListener(function(m) {
				if (localStorage.connected && localStorage.connected != "off") {
					if (l.test(m.statusLine)) {}
				}
			}, {
				urls: ["<all_urls>"]
			});

			function d(o) {
				var p = 15000;
				var n = 3;
				var r = localStorage.authHistory ? JSON.parse(localStorage.authHistory) : {};
				try {
					var m = r[o.challenger.host];
					if (!m || !m.periodStart || !m.authRequestsNum) {
						m = r[o.challenger.host] = {
							periodStart: o.timeStamp,
							authRequestsNum: 1
						}
					} else {
						var q = m.periodStart;
						if (o.timeStamp - q > p) {
							m.periodStart = o.timeStamp;
							m.authRequestsNum = 1
						} else {
							m.authRequestsNum++;
							if (m.authRequestsNum >= n) {
								delete m.periodStart;
								delete m.authRequestsNum;
								return true
							}
						}
					}
					return false
				} finally {
					localStorage.authHistory = JSON.stringify(r)
				}
			}
			chrome.runtime.onInstalled.addListener(function(o) {
				if (o.reason == "install") {
					g.detectDefaultCountry(function() {
						g.setProxySettings(g.lastConnected(), function(p) {
							k.ajax({
								url: "",
								cache: false,
								complete: function(q, r) {}
							})
						})
					})
				} else {
					if (o.reason == "update") {
						var n = o.previousVersion;
						var m = chrome.runtime.getManifest().version;
						if (n <= "2.2.99" && m >= "2.3.0") {
							if (g.connected() === "de") {
								g.setProxySettings("uk")
							}
						} else {
							if (g.connected()) {
								g.setProxySettings(g.lastConnected(), function() {
									j.updateUiConnectionStatus()
								})
							}
						}
					} else {
						if (g.connected()) {
							g.setProxySettings(g.lastConnected(), function() {
								j.updateUiConnectionStatus()
							})
						}
					}
				}
				j.updateUiConnectionStatus()
			});
			chrome.proxy.onProxyError.addListener(function(m) {
				g.checkProxySet(function(n) {
					if (n) {}
				})
			});
			chrome.runtime.onStartup.addListener(function() {
				delete localStorage.lastRedirectOnError;
				j.updateUiConnectionStatus()
			});
			f.init()
		}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {
		"./freeproxies": 3,
		"./common": 4,
		"./proxy": 6,
		"./ui": 8,
		"./update_scheduler": 9,
		jquery: "jquery"
	}],
	3: [function(c, d, a) {
		var g = c("jquery");
		var b = c("./config").freeproxies;
		var f = function() {
			var i = b.apiPrefix || "https://d1blmth2c5vbem.cloudfront.net/v1/";
			var h = b.locationApiPrefix || "https://d1blmth2c5vbem.cloudfront.net/v1/";
			return {
				init: function() {
					g.ajaxSetup({
						tryCount: 0,
						retryLimit: 1,
						timeout: 10000,
						retry: function() {
							this.tryCount++;
							if (this.tryCount <= this.retryLimit) {
								g.ajax(this);
								return true
							} else {
								return false
							}
						}
					})
				},
				checkCredentials: function(l, k) {
					try {
						var j = false;
						g.ajax({
							type: "POST",
							url: i + "auth",
							data: {
								email: l,
								password: k
							},
							async: false,
							success: function(n, o, m) {
								if (n.status === 0) {
									j = true
								}
							},
							error: function(m, o, n) {
								if (!this.retry()) {
									throw n
								}
							}
						});
						return j
					} finally {}
				},
				clearCredentials: function() {
					delete localStorage.userId;
					delete localStorage.email;
					delete localStorage.password
				},
				ipInfo: function(k) {
					var j;
					g.ajax({
						type: "GET",
						url: h + "location?locale=" + chrome.runtime.getManifest().current_locale,
						async: true,
						success: function(m, n, l) {
							k(m)
						},
						error: function(l, n, m) {
							this.retry()
						},
						beforeSend: function() {
							j = Date.now()
						},
						complete: function() {
							var l = Date.now() - j
						}
					})
				},
				signup: function() {
					try {
						var j = null;
						g.ajax({
							type: "POST",
							url: i + "signup",
							async: false,
							success: function(l, m, k) {
								if (l.status === 0) {
									j = l.result
								}
							},
							error: function(k, m, l) {
								if (!this.retry()) {}
							}
						});
						return j
					} finally {}
				},
				servers: function(m) {
					var j = false;
					var l = g.ajax({
						type: "GET",
						url: i + "servers",
						async: true,
						success: function(o, p, n) {
							if (j) {
								if (typeof m === "function") {
									m("canceled")
								}
								return
							}
							if (typeof m === "function") {
								m(null, o)
							}
						},
						error: function(o, q, p) {
							if (j) {
								if (typeof m === "function") {
									m("canceled")
								}
								return
							}
							var n = {
								status: q,
								error: p
							};
							m(n)
						}
					});
					var k = {
						cancel: function() {
							j = true;
							l.abort()
						}
					};
					return k
				}
			}
		}();
		d.exports = f
	}, {
		"./config": "./config",
		jquery: "jquery"
	}],
	4: [function(b, c, a) {
		b("./utils/format");
		b("./utils/ends_with");
		b("./utils/starts_with");
		b("./utils/error_handler")
	}, {
		"./utils/ends_with": 11,
		"./utils/error_handler": 12,
		"./utils/format": 13,
		"./utils/starts_with": 14
	}],
	5: [function(b, c, a) {}, {
		"./config": "./config"
	}],
	6: [function(b, c, a) {
		(function(h) {
			var d = b("./array").weightedShuffle;
			var f = b("./config").proxy;
			var i = b("./server_list");
			var g = function() {
				var n = [""];
				var j = 'function domainIs(host,domain){return host==domain||dnsDomainIs(host,"."+domain)}function FindProxyForURL(url,host){var config="{0}";var bypass={1};host=host.toLowerCase();if(isPlainHostName(host)||isInNetEx(host,"127.0.0.0/8")||isInNetEx(host,"10.0.0.0/8")||isInNetEx(host,"172.16.0.0/12")||isInNetEx(host,"192.168.0.0/16")||isInNetEx(host,"fc00::/7")||isInNetEx(host,"fe80::/10")){return"DIRECT"}for(var i=0;i<bypass.length;i++){if(domainIs(host,bypass[i])){return"DIRECT"}}return config}';
				var m = f.defaultCountry || "nl";

				function l(u, q) {
					var r = "";
					var v = d(u.servers);
					for (var p = 0; p < v.length; p++) {
						var t = v[p];
						var o = k(t, q);
						r += "HTTPS " + t.host + ":" + o + "; "
					}
					if (u.backupServers) {
						var s = d(u.backupServers);
						for (var p = 0; p < s.length; p++) {
							var t = s[p];
							var o = k(t, q);
							r += "HTTPS " + t.host + ":" + o + "; "
						}
					}
					return r
				}

				function k(p, o) {
					if (o && Array.isArray(p.alt_ports) && p.alt_ports.indexOf(o) >= 0) {
						return o
					} else {
						return p.port
					}
				}
				return {
					countryCodes: function(p, o) {
						if (typeof o === "undefined") {
							o = this.isIncludeHidden()
						}
						i.get(function(s, r) {
							if (s) {
								p([]);
								return
							}
							var q = r.countries;
							var t = Object.keys(q).filter(function(u) {
								return o || !q[u].hidden
							}).filter(function(u) {
								return Array.isArray(q[u].servers)
							});
							p(t)
						})
					},
					isIncludeHidden: function() {
						return localStorage.includeHidden && JSON.parse(localStorage.includeHidden)
					},
					setIncludeHidden: function(o) {
						localStorage.includeHidden = JSON.stringify(o)
					},
					isProxySet: function(o) {
						if (o.levelOfControl == "controlled_by_this_extension") {
							if (o.value.mode == "pac_script") {
								return true
							}
						}
						return false
					},
					checkProxySet: function(o) {
						chrome.proxy.settings.get({
							incognito: false
						}, function(p) {
							var q = this.isProxySet(p);
							o(q)
						}.bind(this))
					},
					setSingleProxy: function(o) {
						var p = {
							mode: "pac_script",
							pacScript: {
								data: "function FindProxyForURL(url, host) { return 'HTTPS " + o + "';}"
							}
						};
						chrome.proxy.settings.set({
							scope: "regular",
							value: p
						})
					},
					setProxySettings: function(o, p) {
						chrome.proxy.settings.get({
							incognito: false
						}, function(q) {
							if (typeof q != "undefined" && q.levelOfControl != "controllable_by_this_extension" && q.levelOfControl != "controlled_by_this_extension") {
								alert(chrome.i18n.getMessage("error_unable_change_proxy_settings"));
								if (typeof p == "function") {
									p(false)
								}
							} else {
								var r = localStorage.altPort && Number(localStorage.altPort);
								i.get(function(v, u) {
									if (v) {
										p(false);
										return
									}
									var s = u.countries;
									var x = s[o];
									if (!x) {
										o = m;
										x = s[o]
									}
									if (!x) {
										delete localStorage.lastConnected;
										localStorage.connected = "off";
										p(false);
										return
									}
									var w = l(x, r);
									var t = {
										mode: "pac_script",
										pacScript: {
											data: j.format(w, JSON.stringify(n))
										}
									};
									chrome.proxy.settings.set({
										scope: "regular",
										value: t
									}, function() {
										localStorage.connected = localStorage.lastConnected = o;
										if (typeof p == "function") {
											p(true)
										}
									})
								})
							}
						}.bind(this))
					},
					clearProxySettings: function(o) {
						chrome.proxy.settings.clear({
							scope: "regular"
						}, function() {
							localStorage.connected = "off";
							if (typeof o == "function") {
								o(true)
							}
						})
					},
					logProxySettings: function() {
						chrome.proxy.settings.get({
							incognito: false
						}, function(o) {})
					},
					onChange: function(o) {
						this.checkProxySet(function(p) {
							ui.setUiConnectionStatus(p);
							if (!p) {
								localStorage.connected = "off"
							}
						})
					},
					connected: function(p) {
						p = p || h.localStorage;
						var o = p.connected;
						if (o === "off") {
							return false
						} else {
							return o
						}
					},
					lastConnected: function(o) {
						o = o || h.localStorage;
						return o.lastConnected || m
					},
					detectDefaultCountry: function(o) {
						freeproxies.ipInfo(function(p) {
							if (p.continent_code === "NA" || p.continent_code === "SA") {
								m = "us"
							} else {
								if (p.country_code === "SG" || p.country_code === "MY" || p.country_code === "ID" || p.country_code === "PH" || p.country_code === "TH") {
									m = "sg"
								} else {
									if (p.country_code === "UK" || p.country_code === "IE") {
										m = "uk"
									}
								}
							}
							o()
						})
					}
				}
			}();
			c.exports = g
		}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {
		"./array": 1,
		"./config": "./config",
		"./server_list": 7
	}],
	7: [function(c, a, f) {
		var g = c("./config").proxy.settings || {};
		f.set = function i(l, n) {
			var k = h(l);
			if (k) {
				throw new j(k)
			}
			try {
				// localStorage.currentConfig = JSON.stringify(l);
				if (typeof n === "function") {
					setTimeout(function() {
						n(null)
					}, 0)
				}
			} catch (m) {
				if (typeof n === "function") {
					setTimeout(function() {
						n(m)
					}, 0)
				}
			}
		};

		function h(n) {
			if (typeof n !== "object" || n === null) {
				return "settings should be an object"
			}
			if (!n.hasOwnProperty("countries")) {
				return 'settings should have a "countries" property'
			}
			var m = n.countries;
			if (Object.keys(m).length === 0) {
				return "config should have at least one key (country)"
			}
			for (var k in m) {
				if (!m.hasOwnProperty(k)) {
					continue
				}
				var o = m[k];
				if (!Array.isArray(o.servers) && !Array.isArray(o.premium_servers)) {
					return "country must have either 'servers' or 'premium_servers' fields set to an array of servers"
				}
				var l;
				if (Array.isArray(o.servers)) {
					l = d(o.servers);
					if (l) {
						return l
					}
				}
				if (Array.isArray(o.premium_servers)) {
					l = d(o.premium_servers);
					if (l) {
						return l
					}
				}
			}
			return null
		}

		function d(m) {
			for (var k = 0; k < m.length; k++) {
				var l = m[k];
				if (typeof l.host !== "string") {
					return "server must have a 'host' property"
				}
				if (!(typeof l.port === "string" || typeof l.port === "number")) {
					return "server must have a 'port' property"
				}
			}
			return null
		}

		function j(k) {
			this.name = "ValidationError";
			this.message = k || "";
			this.stack = (new Error()).stack
		}
		j.prototype = Object.create(Error.prototype);
		j.prototype.constructor = j;
		f.get = function b(s) {
			// var q = localStorage.currentConfig;
			var q = JSON.stringify(c("./config").proxyOffline);
			if (typeof q === "string") {
				try {
					var l = JSON.parse(q);
					var o = h(l);
					if (o) {
						throw new j(o)
					}
					setTimeout(function() {
						s(null, l || g)
					}, 0)
				} catch (m) {
					var n = "n/a";
					if (chrome.runtime && chrome.runtime.getManifest()) {
						n = chrome.runtime.getManifest().version
					}
					var t = m.toString();
					try {
						var p = m.stack.split("\n");
						for (var k = 0; k < p.length; k++) {
							if (/ at .*\.js:.*/.test(p[k])) {
								t = t + p[k];
								break
							}
						}
					} catch (r) {}
					// delete localStorage.currentConfig;
					setTimeout(function() {
						s(null, g)
					}, 0)
				}
			} else {
				setTimeout(function() {
					s(null, g)
				}, 0)
			}
		};
		f.clear = function(k) {
			// delete localStorage.currentConfig;
			if (typeof k === "function") {
				setTimeout(k, 0)
			}
		}
	}, {
		"./config": "./config"
	}],
	8: [function(b, d, a) {
		var c = b("./proxy");
		var f = {
			setUiConnectionStatus: function(g) {
				if (g) {
					chrome.browserAction.setIcon({
						path: "images/icon48.png"
					})
				} else {
					chrome.browserAction.setIcon({
						path: "images/icon-disabled.png"
					})
				}
			},
			updateUiConnectionStatus: function() {
				c.checkProxySet(function(g) {
					this.setUiConnectionStatus(g)
				}.bind(this))
			}
		};
		d.exports = f
	}, {
		"./proxy": 6
	}],
	9: [function(d, a, g) {
		var k = d("./update_task");
		var i = 6 * 3600 * 1000;
		var h = 5 * 60 * 1000;
		var b = h;
		var c = i;

		function f() {
			var m;
			var l = false;
			var n = setTimeout(function() {
				f();
				l = true;
				if (m) {
					m.cancel()
				}
			}, b);
			m = k.start(function(o) {
				clearTimeout(n);
				setTimeout(function() {
					f()
				}, c)
			})
		}
		g.init = function j(l) {
			l = l || {};
			b = l.retryTimeout || b;
			c = l.refreshTimeout || c;
			setTimeout(f, 0)
		}
	}, {
		"./update_task": 10
	}],
	10: [function(b, f, a) {
		var d = b("./server_list");
		var c = b("./proxy");
		var g = b("./freeproxies");
		a.start = function h(j) {
			var i = function() {
				var k = false;
				var n;
				n = g.servers(function(o, p) {
					if (o) {
						if (typeof j === "function") {
							j(o)
						}
						return
					}
					if (k) {
						if (typeof j === "function") {
							j("canceled")
						}
						return
					}
					d.set(p, function(q) {
						if (q) {
							if (typeof j === "function") {
								j(q)
							}
							return
						}
						if (k) {
							if (typeof j === "function") {
								j("canceled")
							}
							return
						}
						if (c.connected(localStorage)) {
							var r = c.lastConnected(localStorage);
							c.setProxySettings(r, function(s) {
								if (k) {
									if (typeof j === "function") {
										j("canceled")
									}
									return
								}
								if (typeof j === "function") {
									if (s) {
										j()
									} else {
										j(new Error("failed to update proxy settings"))
									}
								}
							})
						} else {
							if (k) {
								if (typeof j === "function") {
									j("canceled")
								}
								return
							} else {
								if (typeof j === "function") {
									j(null);
									return
								}
							}
						}
					})
				});
				var l = {
					cancel: function m() {
						k = true;
						if (n) {
							n.cancel()
						}
					}
				};
				return l
			}();
			return i
		}
	}, {
		"./freeproxies": 3,
		"./proxy": 6,
		"./server_list": 7
	}],
	11: [function(b, c, a) {
		if (!String.prototype.endsWith) {
			String.prototype.endsWith = function(d) {
				return this.indexOf(d, this.length - d.length) !== -1
			}
		}
	}, {}],
	12: [function(b, c, a) {
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
	13: [function(b, c, a) {
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
	14: [function(b, c, a) {
		if (!String.prototype.startsWith) {
			String.prototype.startsWith = function(d) {
				return this.indexOf(d) === 0
			}
		}
	}, {}]
}, {}, [2]);
