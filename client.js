const io = require('socket.io');
const socket = io.connect("http://localhost:3000");

socket.on("hi", function(data) {
    console.log(data);
});

function createGame() {
    console.log("createGame");
    socket.emit("createGame", { userID: 0 });
}