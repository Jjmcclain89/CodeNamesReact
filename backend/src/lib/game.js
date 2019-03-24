import { getRandom } from "./utils";

export const setupGame = (game, options) => {
    const { wordList } = options;
    game.words = getWords(wordList);
    
    console.log(game.words);
};

const getWords = wordList => {
    let words = getRandom(wordList, 25);
    words = words.map(word => {
        return {
            word,
            isGuessed: false
        };
    });

    const redWordCount = 9;
    const blueWordCount = 8;

    // set 9 words to team 0
    for (let i = 0; i < redWordCount; i++) {
        words[i].team = 0;
    }
    // 8 to team 1
    for (let i = 9; i < redWordCount+blueWordCount; i++) {
        words[i].team = 1;
    }
    // assign the assassin
    words[redWordCount + blueWordCount].team = -1;

    return words;
};
