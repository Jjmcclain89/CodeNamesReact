import { connectDB } from "./lib/db";
import ClientManager from "./managers/ClientManager";
import GameManager from "./managers/GameManager";
import createHandlers from "./lib/handlers";
import Game from "./components/Game";
import { testGuessWord } from "../tests/tests";

const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 2323;
const clientManager = new ClientManager();
const gameManager = new GameManager();

io.on("connection", client => {
    const {
        handleSignIn,
        handleDisconnect,
        handleCreateGame,
        handleJoinGame,
        handleStartGame,
        handleGiveClue,
        handleGuess
    } = createHandlers(io, client, clientManager, gameManager);

    clientManager.addClient(client);

    // client.join("test", () => {
    //     let room = io.to(`test`);
    //     console.log({
    //         rooms: client.rooms,
    //         room: room.name,
    //         clients: room.connected
    //     });
    // });

    client.on("signIn", handleSignIn);

    client.on("disconnect", handleDisconnect);

    client.on("createGame", handleCreateGame);

    client.on("joinGame", handleJoinGame);

    client.on("startGame", handleStartGame);

    client.on("giveClue", handleGiveClue);

    client.on("guess", handleGuess);
});

server.listen(port, () => console.log(`listening on localhost:${port}`));
// setInterval(() => {
//     let room = io.of('/test');
//     console.log(room.connected);
//     io.of("/test").emit("event", "test");
// }, 2000);
// setInterval(()=>console.log(clientManager.getUsers(true)), 1000);
// testGuessWord();
