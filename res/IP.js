function getIPAddress(d, b) {
  var c = "https://v4.ident.me";
  var a = new XMLHttpRequest();
  a.open("GET", c);
  a.responseType = "text";
  a.onload = function () {
    var e = a.response;
    if (!e) {
      b("No response.");
      return;
    }
    var g =
      /\b(([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5])\b/;
    var f = g.exec(e);
    d(f[0]);
  };
  a.onerror = function () {
    b("Network Error");
  };
  a.send();
}
function renderRefreshing() {
  var a = document.createElement("img");
  a.src = "images/wait.gif";
  var b = document.getElementById("status");
  b.replaceChild(a, b.childNodes[0]);
}
function renderText(a) {
  document.getElementById("status").textContent = a;
//   setTimeout(function () {
//     $(document).ready(function () {
//       $("#progress").click();
//     });
//   }, 200);
}
document.addEventListener("DOMContentLoaded", function () {
  renderRefreshing();
  getIPAddress(
    function (a) {
      renderText(a);
    },
    function (a) {
      renderText("Disconnected");
    }
  );
});
