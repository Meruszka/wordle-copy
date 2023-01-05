// Words are stored in memory, so they will be lost after server restart
// Should be replaced with database OR file storage...
import fs from 'fs';


const getRandomWord = (args: { language: string }): string | undefined => {
    const lines = fs.readFileSync(`${process.cwd()}/src/types/word/data/${args.language}.txt`, 'utf8');
    const words = lines.split('\n');
    let word = words[Math.floor(Math.random() * words.length)];
    word = word.replace('\r', '');
    return word;
};

const createWord = (args: { input: { word: string; language: string } }): string => {
    fs.writeFile(`${process.cwd()}/src/types/word/data/${args.input.language}.txt`, args.input.word, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });
    return args.input.word;
};


const resolvers = {
    Query: {
        randomWord: (_:any, args: { language: string }) => getRandomWord(args),
    },
    Mutation: {
        createWord: (args: { input: { word: string; language: string } }) =>
        createWord(args),
    },

};

export default resolvers;
