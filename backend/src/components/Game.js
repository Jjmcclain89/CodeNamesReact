import { getRandom } from "../lib/utils";
import defaultWordList from "../resources/wordList";
import Word from "./Word";

export default class Game {
    constructor(opts) {
        this.words = new Map();
        this.players = new Map();
        opts.wordList
            ? (this.wordList = opts.wordList)
            : (this.wordList = defaultWordList);
        this.status = "setup";
        this.clues = [];
        this.guesses = [];
        this.whichTeamsTurn = 1;
    }

    setup() {
        let words = getRandom(this.wordList, 25);
        words = words.map(word => {
            return new Word({ word, team: 0, isGuessed: false });
        });

        const redWordCount = 9;
        const blueWordCount = 8;

        // set 9 words to team 1
        for (let i = 0; i < redWordCount; i++) {
            words[i].team = 1;
        }
        // 8 to team 2
        for (let i = 9; i < redWordCount + blueWordCount; i++) {
            words[i].team = 2;
        }
        // assign the assassin
        words[redWordCount + blueWordCount].team = -1;

        words.map(w => this.words.set(w.word, w));
        let lol = new Word({ word: "LOL", team: 99, isGuessed: false });
        this.words.set(lol.word, lol);
        console.log(lol);
    }

    validateTurn(player) {
        return player.team == whichTeamsTurn;
    }

    guessWord(word) {
        let w = this.words.get(word);
        w.isGuessed = true;
        return w.team;
    }

    giveClue(player, clue) {
        validateTurn(player) && this.clues.push(clue);
    }

    addPlayer(player) {
        this.players.set(player.userName, player)
    }

}
