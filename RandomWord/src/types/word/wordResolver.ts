// Words are stored in memory, so they will be lost after server restart
// Should be replaced with database OR file storage...
const words = [
    {id: 0, word: 'kot', language: 'pl'},
    {id: 1, word: 'pies', language: 'pl'},
    {id: 2, word: 'kot', language: 'en'},
    {id: 3, word: 'dog', language: 'en'},

]
const getRandomWord = (args: {language: string}) : string | undefined => {
    const wordsByLanguage = words.filter(word => word.language === args.language);
    const randomIndex = Math.floor(Math.random() * wordsByLanguage.length);
    return wordsByLanguage[randomIndex].word;
}

const createWord = (args: {input: {word: string, language: string}}) : Word => {
    const word = {
        id: words.length + 1,
        word: args.input.word,
        language: args.input.language
    }
    words.push(word);
    return word;
}

const updateWord = (args: {id: number, input: {word: string, language: string}}) : Word | undefined => {
    const word = words.find(word => word.id === args.id);
    if (word) {
        word.word = args.input.word;
        word.language = args.input.language;
    }
    return word;
}

const deleteWord = (args: {id: number}) : Word | undefined => {
    const word = words.find(word => word.id === args.id);
    if (word) {
        words.splice(words.indexOf(word), 1);
    }
    return word;
}

const root = {
    randomWordPL: () => getRandomWord({language: 'pl'}),
    randomWordEN: () => getRandomWord({language: 'en'}),
    createWord: (args: {input: {word: string, language: string}}) => createWord(args),
    updateWord: (args: {id: number, input: {word: string, language: string}}) => updateWord(args),
    deleteWord: (args: {id: number}) => deleteWord(args)
}

export default root;