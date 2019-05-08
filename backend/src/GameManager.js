export default () => {
    const games = new Map();

    function createGame(game){
        games.set(game.id, game);
    }
}