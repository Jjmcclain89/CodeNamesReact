webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Josh Mcclain\\projects\\CodeNamesReact\\frontend\\components\\UserList.js";


function UserList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    userName: "lol"
  }]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      userList = _useState2[0],
      setUserList = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, userList.map(function (user) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: user.userName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, user.userName);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ })

})
//# sourceMappingURL=index.js.4ab39efcca0964626106.hot-update.js.map