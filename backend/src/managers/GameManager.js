import Game from "../components/Game";

export default class GameManager {
    constructor() {
        this.games = new Map();
        this.nextGameID = 0;
    }

    createGame(user, opts) {
        const newGame = new Game(opts);
        newGame.id = this.nextGameID;
        this.nextGameID++;
        newGame.addUser(user);
        this.games.set(newGame.id, newGame);
    }

    getGameByID(id) {
        return this.games.get(id);
    }

    getOpenGames() {
        return this.games.values().filter(g => g.status == "setup");
    }
}
