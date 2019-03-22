const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 3000;

const serverState = {
    users: [],
    games: []
};
const gameCount = 0;

server.listen(port);
console.log(`listening on localhost:${port}`);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", clientSocket => {
    console.log("user connected");
    let socketInfo = {};

    clientSocket.on("login", (data) => {
        const { userName } = data;
        socketInfo.userName = userName;
        console.log(`User ${userName} has logged in.`, serverState);
        io.emit("serverState", serverState);
    });

    clientSocket.on("newGame", (data) => {
        const newGame = {
            id: gameCount,

        } 
    });
    
    clientSocket.on("disconnect", () => {
        console.log("user disconnected");
        serverState.users = serverState.users.filter(user => !(user.userName == socketInfo.userName));
        io.emit("serverState", serverState);
    });
});
