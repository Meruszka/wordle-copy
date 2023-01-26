import React from 'react';
import { UsedLetters as UsedLettersType } from '../types/common/main';
import { languages } from './languages';

function UsedLetters({
    usedLetters,
    language,
    onPress,
}: {
    usedLetters: UsedLettersType;
    language: string;
    onPress: (key: string) => void;
}) {
    const keyboard = languages.find((lang) => lang.short === language)?.keyboard || [];
    return (
        <div className="flex justify-center items-center flex-col m-10">
            <h3>Used Letters</h3>
            <div className="flex flex-row justify-center items-center">
                {['Backspace', 'Enter'].map((letter, i) => {
                    return (
                        <button
                            key={i}
                            className="flex justify-center m-1 items-center p-2 rounded bg-gray-300 border-2 border-gray-300"
                            style={{ backgroundColor: usedLetters[letter] }}
                            onClick={() => onPress(letter)}>
                            <span className="uppercase">{letter}</span>
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-col justify-center items-center">
                {keyboard.map((row, i) => {
                    return (
                        <div key={i} className="flex flex-row">
                            {row.split('').map((letter, i) => {
                                return (
                                    <button
                                        key={i}
                                        className="flex justify-center m-1 items-center w-10 h-10 rounded bg-gray-300 border-2 border-gray-300"
                                        style={{ backgroundColor: usedLetters[letter] }}
                                        onClick={() => onPress(letter)}>
                                        <span className="uppercase">{letter}</span>
                                    </button>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default UsedLetters;
