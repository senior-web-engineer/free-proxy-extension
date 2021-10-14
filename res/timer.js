(function () {
  if (document.readyState == "complete") {
    a();
  } else {
    window.addEventListener("load", a);
  }
  function a() {
    setTimeout(function () {
      var b = performance.timing;
      var g = b.redirectStart == 0 ? b.fetchStart : b.redirectStart;
      if (b.loadEventEnd > 0) {
        var f = String(((b.loadEventEnd - g) / 1000).toPrecision(3)).substring(
          0,
          4
        );
        var c =
          chrome.runtime && chrome.runtime.sendMessage
            ? "runtime"
            : "extension";
        var d = {};
        for (var e in b) {
          if (typeof b[e] !== "function") {
            d[e] = b[e];
          }
        }
        chrome[c].sendMessage({ time: f, timing: d });
      }
    }, 0);
  }
})();
