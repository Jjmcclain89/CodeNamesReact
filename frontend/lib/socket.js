const io = require("socket.io-client");

const BACKEND_URL = `localhost:2323`;

export default function() {
    const socket = io.connect(BACKEND_URL);

    function signIn(userName) {
        socket.emit("signIn", { userName });
    }

    function createGame(opts) {
        let userID = socket.id;
        let msg = { userID, opts };
        socket.emit("createGame", msg);
    }

    function joinGame(gameID) {
        let userID = socket.id;
        socket.emit("joinGame", { gameID, userID });
    }

    function subscribeSocket(lobby) {
        socket.on("event", msg => {
            if (msg.event === `userJoined`) {
                lobby.setState({ gameState: msg.data.gameState });
            }
            console.log(msg);
        });
        console.log(`socket subscribed`);
    }

    function startGame(gameID) {
        socket.emit("startGame", { gameID });
    }

    return {
        signIn,
        createGame,
        joinGame,
        startGame,
        subscribeSocket
    };
}
