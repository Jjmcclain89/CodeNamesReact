import { getRandom } from "../lib/utils";
import defaultWordList from "../resources/wordList";
import Event from "../components/Event";
import Word from "./Word";

export default class Game {
    constructor(io, { id, wordList }) {
        this.id = id;
        this.status = "setup";
        this.users = new Map();
        this.words = new Map();
        this.clues = [];
        this.guesses = [];
        this.whichTeamsTurn = 1;
        this.io = io;
        wordList
            ? (this.wordList = opts.wordList)
            : (this.wordList = defaultWordList);
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
        console.log(`Starting game #${this.id}`);
        return this.getGameState();
    }

    validateTurn(user, shouldBeClueGiver) {
        if (
            user.team == this.whichTeamsTurn &&
            user.isClueGiver == shouldBeClueGiver
        ) {
            return true;
        } else {
            console.log("Validation Error");
        }
    }

    guessWord({ userID, word }) {
        let user = this.users.get(userID);
        if (this.validateTurn(user, false)) {
            let w = this.words.get(word);
            w.isGuessed = true;
            this.guesses.push({ user, word });
            return w.team;
        } else {
            return false;
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
        return this.validateTurn(user, true) && this.clues.push(clue);
    }

    addUser(user) {
        this.users.set(user.id, user);
        console.log(user.client);
        user.client.join(`${this.id}`, err => {
            err && console.log(err);
            console.log(Array.from(this.io.to(this.id).connected).length);
        });
        this.broadcastEvent(`userJoined`);
        console.log(`${user.userName} has joined game #${this.id}`);
    }

    getUsers(getOnlyNames = false) {
        return Array.from(this.users.values()).map(u =>
            getOnlyNames ? u.userName : u
        );
    }

    getGameState() {
        return {
            words: this.getWordValues(),
            users: this.getUsers(true),
            status: this.status,
            clues: this.clues,
            guesses: this.guesses,
            whichTeamsTurn: this.whichTeamsTurn
        };
    }

    broadcastEvent(eventName) {
        this.io
            .to(`${this.id}`)
            .emit("event", new Event(eventName, this.getGameState()));
    }
}
