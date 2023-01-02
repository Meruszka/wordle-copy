import { useEffect, useState } from 'react';
import { useWord } from '../hooks/useWord';
import Box from './Box';
import UsedLetters from './UsedLetters';
import { Letters, Colors, UsedLetters as UsedLettersType } from '../types/common/main';
import EndGame from './EndGame';
import Loading from './Loading';
import SwitchLang from './SwitchLang';

function Game() {
    const [word, setWord] = useState<string | null>(null);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [gameLanguage, setGameLanguage] = useState<string>('pl');
    const [wordData, wordError, wordLoading] = useWord({
        language: gameLanguage,
    });
    const maxRounds = 5;
    const roundsArray = Array.from(Array(maxRounds).keys());
    const [possibleLanguages, setPossibleLanguages] = useState<string[]>(['pl', 'en']);

    useEffect(() => {
        if (wordData) {
            setWord(wordData.randomWord);
            for (let i = 0; i < maxRounds; i++) {
                setLetters((prev) => {
                    return {
                        ...prev,
                        [i]: wordData.randomWord.split('').map(() => {
                            return '';
                        }),
                    };
                });
                setColors((prev) => {
                    return {
                        ...prev,
                        [i]: wordData.randomWord.split('').map(() => {
                            return 'white';
                        }),
                    };
                });
            }
            // console.log(wordData)
        }
    }, [wordData]);

    // useEffect(() => {
    //     if (wordError) {
    //         console.log(wordError);
    //     }
    // }, [wordError]);

    // useEffect(() => {
    //     if (wordLoading) {
    //         console.log(wordLoading);
    //     }
    // }, [wordLoading]);

    // Main game logic
    const [letters, setLetters] = useState<Letters>([]);
    const [colors, setColors] = useState<Colors>([]);
    const [index, setIndex] = useState<number>(0);
    const [round, setRound] = useState<number>(0);
    const [win, setWin] = useState<number>(0);
    const [usedLetters, setUsedLetters] = useState<UsedLettersType>({});
    const [wordExists, setWordExists] = useState<boolean>(false);

    useEffect(() => {
        if (letters[round] && letters[round].length === word?.length) {
            checkIfWordExists(letters[round].join(''));
        }
    }, [letters[round]]);

    const checkIfWordExists = async (word: string) => {
        const response = await fetch(`https://api.datamuse.com/words?sp=${word}&md=d`);
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
            setWordExists(true);
        }
        setWordExists(false);
    };

    const keyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Backspace') {
            if (index === 0) return;
            const everyLetter = letters;
            const newLetters = [...letters[round]];
            newLetters[index - 1] = '';
            everyLetter[round] = newLetters;
            setLetters(everyLetter);

            const everyColor = colors;
            const newColors = [...colors[round]];
            newColors[index - 1] = 'white';
            everyColor[round] = newColors;
            setColors(everyColor);

            setIndex(index - 1);
        } else if (event.key.length === 1) {
            const everyLetter = letters;
            const newLetters = [...letters[round]];
            newLetters[index] = event.key;
            everyLetter[round] = newLetters;
            setLetters(everyLetter);
            setIndex(index + 1);
        } else if (event.key === 'Enter') {
            if (word) {
                if (index < word.length) return;
            }
            // check if word exists
            // if (!wordExists) {
            //     console.log('word does not exist');
            //     return;
            // }

            // check win if yes end game
            checkWin();

            // check letters and set colors
            checkLetters();

            // add used letters
            const newLetters = [...letters[round]];
            newLetters.forEach((letter) => {
                if (letter !== '') {
                    setUsedLetters((prev) => {
                        return {
                            ...prev,
                            [letter]: colors[round][newLetters.indexOf(letter)],
                        };
                    });
                }
            });
            setRound(round + 1);
            setIndex(0);
        }
    };

    const checkWin = () => {
        if (word) {
            if (round === maxRounds - 1) {
                setWin(2);
            }
            const newLetters = [...letters[round]];
            if (newLetters.join('') === word) {
                setWin(1);
            }
        }
    };

    const checkLetters = () => {
        const everyColor = colors;
        const newColors = [...colors[round]];
        if (word === null) return;
        for (let i = 0; i < word?.length; i++) {
            if (letters[round][i] === word?.[i]) {
                // green
                newColors[i] = '#349130';
            } else if (word.includes(letters[round][i])) {
                // yellow
                newColors[i] = '#CAD02F';
            } else {
                // gray
                newColors[i] = '#757575';
            }
        }
        everyColor[round] = newColors;
        setColors(everyColor);
    };

    return (
        <div
            className="overflow-hidden flex flex-col justify-center items-center h-screen w-screen outline-none"
            onKeyDown={keyDown}
            tabIndex={-1}>
            {!word ? <Loading /> : null}
            {win === 1 ? <EndGame score="You Win!" /> : null}
            {win === 2 ? <EndGame score="You Lose!" /> : null}
            <SwitchLang possibleLanguages={possibleLanguages} setGameLanguage={setGameLanguage}/>

            <main className="p-5 flex flex-col justify-center items-center">

                <h1 className="text-2xl">Random Word</h1>
                {/* <h2 className='text-l'>with definition</h2> */}
                {/* <Definition word={word}/> */}
                <div className="flex flex-col">
                    {roundsArray.map((ele, Rindex) => {
                        return (
                            <div className="flex flex-row" key={Rindex}>
                                {word?.split('').map((letter, index) => (
                                    <Box
                                        key={index}
                                        letter={letters[ele][index]}
                                        color={colors[ele][index]}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </div>
                <UsedLetters usedLetters={usedLetters} />
            </main>
        </div>
    );
}

export default Game;
