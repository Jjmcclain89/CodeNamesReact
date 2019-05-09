webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Lobby.js":
/*!*****************************!*\
  !*** ./components/Lobby.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/socket */ "./lib/socket.js");
/* harmony import */ var _GameList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameList */ "./components/GameList.js");
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserList */ "./components/UserList.js");

var _jsxFileName = "C:\\Users\\Josh Mcclain\\projects\\CodeNamesReact\\frontend\\components\\Lobby.js";





function Lobby(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_lib_socket__WEBPACK_IMPORTED_MODULE_2__["openSocketToServer"])()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      socket = _useState2[0],
      setSocket = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    userName: "lol"
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  function handleLogIn() {
    Object(_lib_socket__WEBPACK_IMPORTED_MODULE_2__["logIn"])(socket, user);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {});
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "lobby",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Lobby!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GameList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: handleLogIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Log In"));
}

/* harmony default export */ __webpack_exports__["default"] = (Lobby);

/***/ })

})
//# sourceMappingURL=index.js.45df4ced7867b25deac6.hot-update.js.map