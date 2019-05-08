import Game from "../src/components/Game";

export function guessWordTest(word) {
    const game = new Game({});
    game.setup();
    console.log(game.guessWord(word));
    console.log(game.words);
}
