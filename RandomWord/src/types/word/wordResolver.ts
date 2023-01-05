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

const deleteWord = (args: { input: { word: string; language: string } }): string => {
    fs.readFile(`${process.cwd()}/src/types/word/data/${args.input.language}.txt`, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const lines = data.split('\n');
        const index = lines.indexOf(args.input.word);
        if (index > -1) {
            lines.splice(index, 1);
        }
        fs.writeFile(`${process.cwd()}/src/types/word/data/${args.input.language}.txt`, lines.join('\n'), (err) => {
            if (err) {
                console.error(err)
                return
            }
        });
    });
    return args.input.word;
};

const updateWord = (args: { input: { word: string; language: string } }): string => {
    fs.readFile(`${process.cwd()}/src/types/word/data/${args.input.language}.txt`, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const lines = data.split('\n');
        const index = lines.indexOf(args.input.word);
        if (index > -1) {
            lines[index] = args.input.word;
        }
        fs.writeFile(`${process.cwd()}/src/types/word/data/${args.input.language}.txt`, lines.join('\n'), (err) => {
            if (err) {
                console.error(err)
                return
            }
        });
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
        deleteWord: (args: { input: { word: string; language: string } }) =>
        deleteWord(args),
        updateWord: (args: { input: { word: string; language: string } }) =>
        updateWord(args),
    },

};

export default resolvers;
