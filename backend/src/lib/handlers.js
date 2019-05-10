import Event from "../components/Event";

export default function(io, client, clientManager, gameManager) {
    function handleSignIn({ userName }) {
        clientManager.clientSignIn(client, { userName });
    }

    function handleDisconnect() {
        clientManager.removeClient(client);
    }

    function handleCreateGame({ userID, opts }) {
        gameManager.createGame(io, getUser(userID), { ...opts });
    }

    function handleJoinGame({ gameID, userID }) {
        let game = getGame(gameID);
        game.addUser(getUser(userID));
    }

    function handleStartGame({ gameID }) {
        let game = getGame(gameID);
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
        game.broadcastEvent(`gameStarted`);
        
    }

    function handleGiveClue({ gameID, userID, clue }) {
        game = getGame(gameID);
        user = getUser(userID);
        users = game.getUsers();
        if (game.giveClue(user, clue)) {
            game.broadcastEvent(`giveClue`);
        }
    }

    function handleGuess({ gameID, userID, word }) {
        let game = getGame(gameID);
        game.guessWord({ userID, word });
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
