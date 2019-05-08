import Game from "../lib/game";

export default class GameManager {
    constructor() {
        this.games = new Map();
    }

    createGame(game) {
        const newGame = new Game()
        this.games.set(game.id, game);
    }

    getOpenGames() {
        return this.games.values().filter(g => g.status == "setup");
    }

    
}
