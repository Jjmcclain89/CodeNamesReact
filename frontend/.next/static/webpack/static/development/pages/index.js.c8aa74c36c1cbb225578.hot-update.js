webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/socket.js":
/*!***********************!*\
  !*** ./lib/socket.js ***!
  \***********************/
/*! exports provided: openSocketToServer, logIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSocketToServer", function() { return openSocketToServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);

var BACKEND_URL = "localhost:2323";
var openSocketToServer = function openSocketToServer() {
  var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(BACKEND_URL);
  socket.on("serverState", function (data) {
    console.log(data);
  });
  return socket;
};
var logIn = function logIn(socket, user) {
  socket.emit("test", user, "arg3", "arg4");
};

/***/ })

})
//# sourceMappingURL=index.js.c8aa74c36c1cbb225578.hot-update.js.map