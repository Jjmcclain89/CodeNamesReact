import { setupGame } from "./lib/game";
import wordList from "./resources/wordList";
import { connectDB } from "./lib/db";

const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 2323;

const gameCount = 0;
const db = await connectDB();

server.listen(port);

console.log(`listening on localhost:${port}`);

io.on("connection", clientSocket => {
    console.log("user connected");
    let socketInfo = {};

    clientSocket.on("disconnect", () => {
        console.log("user disconnected");
        serverState.users = serverState.users.filter(
            user => !(user.userName == socketInfo.userName)
        );
        backupServerState();
        io.emit("serverState", serverState);
    });

    clientSocket.on("logIn", data => {
        const { userName } = data;
        socketInfo.userName = userName;
        serverState.users.push(data);
        backupServerState();
        console.log(`User ${userName} has logged in.`, serverState);
        io.emit("serverState", serverState);
    });

    clientSocket.on("newGame", data => {
        const newGame = {
            id: gameCount,
            status: "new",
            words: []
        };
    });
});



setupGame({ id: gameCount }, { wordList });
