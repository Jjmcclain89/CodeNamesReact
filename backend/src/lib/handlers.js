import Event from "../components/Event";

export default function(client, clientManager, gameManager) {
    function handleSignIn(user) {
        clientManager.clientSignIn(client, user);
    }

    function handleDisconnect() {
        clientManager.removeClient(client);
        console.log(`Client "${client.id}" disconnected`);
    }

    function handleCreateGame({ userID, opts }) {
        gameManager.createGame(clientManager.getUserByID(userID), opts);
    }

    function handleJoinGame({ gameID, userID }) {
        gameManager
            .getGameByID(gameID)
            .addUser(clientManager.getUserByID(userID));
    }

    function handleStartGame({ gameID }) {
        let game = gameManager.getGameByID(gameID);
        game.start();
        game.getUsers().map(user => {
            user.isClueGiver
                ? (words = game.getWords())
                : (words = game.getWordValues());

            user.client.emit(
                `event`,
                new Event(`startGame`, { words, users: game.getUsers() })
            );
        });
    }

    function handleGiveClue({ gameID, userID, clue }) {
        game = gameManager.getGameByID(gameID);
        user = clientManager.getUserByID(userID);
        users = game.getUsers();
        if (game.validateTurn(user, true)) {
            game.clues.push(clue);
            users.map(u => {
                u.client.emit()
            })
        } else {
            console.log("Validate Turn failed");
        }
    }

    function handleGuess({ gameID, userID, guess }) {
        let game = getGame(gameID),
            user = getUserByID(userID);
        if (game.validateTurn(user, false)) {
            game.guesses.push(guess);
        } else {
            console.log("Validate Turn failed");
        }
    }

    function getGame(id) {
        return gameManager.getGameByID(id);
    }

    function getUser(id) {
        return clientManager.getUserByID(id);
    }

    return {
        handleSignIn,
        handleDisconnect,
        handleCreateGame,
        handleJoinGame,
        handleStartGame,
        handleGiveClue,
        handleGuess
    };
}
