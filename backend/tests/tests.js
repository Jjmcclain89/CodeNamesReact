import Game from "../src/components/Game";
import { connectDB } from "../src/lib/db";

export function testGuessWord(word) {
    const game = new Game({});
    game.start();
    word ? word : (word = game.getWords()[0]);
    console.log(
        word,
        game.guessWord({ team: 1, isClueGiver: false }, word),
        game.words
    ); 
}

export function testConnectDB() {
    db = connectDB();
}
