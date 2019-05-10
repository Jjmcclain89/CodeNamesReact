webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/socket.js":
/*!***********************!*\
  !*** ./lib/socket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var BACKEND_URL = "localhost:2323";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var socket = io.connect(BACKEND_URL);

  function signIn(userName) {
    socket.emit("signIn", {
      userName: userName
    });
  }

  function createGame(opts) {
    var userID = socket.id;
    var msg = {
      userID: userID,
      opts: opts
    };
    socket.emit("createGame", msg);
  }

  function joinGame(gameID) {
    var userID = socket.id;
    socket.emit("joinGame", {
      gameID: gameID,
      userID: userID
    });
  }

  function subscribeSocket(lobby) {
    socket.on("event", function (msg) {
      if (msg.event === "userJoined") {
        lobby.setState({
          gameState: msg.data.gameState
        });
      }

      console.log(msg);
    });
    console.log("socket subscribed");
  }

  function startGame(gameID) {
    socket.emit("startGame", {
      gameID: gameID
    });
  }

  return {
    signIn: signIn,
    createGame: createGame,
    joinGame: joinGame,
    startGame: startGame,
    subscribeSocket: subscribeSocket
  };
});

/***/ })

})
//# sourceMappingURL=index.js.7c9186e0cfb629726840.hot-update.js.map