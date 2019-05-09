export default function(client, clientManager, gameManager) {
    function handleSignIn(user) {
        clientManager.clientSignIn(client, user);
    }

    function handleDisconnect() {
        clientManager.removeClient(client);
        console.log(`Client "${client.id}" disconnected`);
    }

    function handleCreateGame(userID, opts) {
        gameManager.createGame(clientManager.getUserByID(userID), opts);
    }

    function handleJoinGame(userID, gameID) {
        gameManager
            .getGameByID(gameID)
            .addUser(clientManager.getUserByID(userID));
    }

    function handleStartGame(gameID) {
        let game = gameManager.getGameByID(gameID);
        game.start();
        game.getUsers().map(user => {
            user.isClueGiver
                ? (words = game.getWords())
                : (words = game.getWordValues());
            user.client.emit(`event`, {
                event: `startGame`,
                words,
                users: game.getUsers()
            });
        });
    }

    return {
        handleSignIn,
        handleDisconnect,
        handleCreateGame,
        handleJoinGame,
        handleStartGame
    };
}
