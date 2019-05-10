import Game from "../components/Game";

export default class GameManager {
    constructor() {
        this.games = new Map();
        this.nextGameID = 0;
    }

    createGame(io, user, opts) {
        const newGame = new Game(io, {...opts, id: this.nextGameID});
        this.nextGameID++;
        newGame.addUser(user);
        this.games.set(newGame.id, newGame);
        console.log(`${user.userName} created game# ${newGame.id}`);
        return newGame.id;
    }

    getGameByID(id) {
        return this.games.get(id);
    }

    getOpenGames() {
        return this.games.values().filter(g => g.status == "setup");
    }
}
