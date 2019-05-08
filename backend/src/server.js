import { setupGame } from "./lib/game";
import wordList from "./resources/wordList";
import { connectDB } from "./lib/db";
import ClientManager from "./ClientManager";

const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 2323;
const clientManager = new ClientManager();

io.on("connection", client => {
    clientManager.addClient(client);
    console.log(clientManager.getClients());

    client.on("disconnect", handleDisconnect)
    
    function handleDisconnect(){
        clientManager.removeClient(client);
        console.log(clientManager.getClients());
    }

    function handleSignIn(user){
        clientManager.clientSignIn(client, user);
    }
});

server.listen(port, () => console.log(`listening on localhost:${port}`));
