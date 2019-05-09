import { getRandom } from "../lib/utils";
import defaultWordList from "../resources/wordList";
import Word from "./Word";

export default class Game {
    constructor(opts) {
        this.words = new Map();
        this.users = new Map();
        opts.wordList
            ? (this.wordList = opts.wordList)
            : (this.wordList = defaultWordList);
        this.status = "setup";
        this.clues = [];
        this.guesses = [];
        this.whichTeamsTurn = 1;
    }

    start() {
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
    }

    validateTurn(user, shouldBeClueGiver) {
        return (
            user.team == this.whichTeamsTurn &&
            user.isClueGiver == shouldBeClueGiver
        );
    }

    guessWord(user, word) {
        if (this.validateTurn(user, false)) {
            let w = this.words.get(word);
            w.isGuessed = true;
            return w.team;
        } else {
            return `Error, it is not this user's turn`;
        }
    }

    getWordValues() {
        return Array.from(this.words.values()).map(w => {
            w.word, w.isGuessed;
        });
    }

    getWords() {
        return Array.from(this.words.values());
    }

    giveClue(user, clue) {
        this.validateTurn(user, true) && this.clues.push(clue);
    }

    addUser(user) {
        this.users.set(user.id, user);
    }

    getUsers() {
        return Array.from(this.users.values());
    }
}
