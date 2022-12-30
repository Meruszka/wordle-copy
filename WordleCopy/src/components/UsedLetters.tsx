import { UsedLetters as UsedLettersType } from '../types/common/main';

function UsedLetters({ usedLetters }: { usedLetters: UsedLettersType }) {
    const keyboard = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return (
        <div className="flex justify-center items-center flex-col m-10">
            <h3>Used Letters</h3>
            <div className="flex flex-col justify-center items-center">
                {keyboard.map((row, i) => {
                    return (
                        <div key={i} className="flex flex-row">
                            {row.split('').map((letter, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="flex justify-center m-1 items-center w-10 h-10 rounded bg-gray-300 border-2 border-gray-300"
                                        style={{ backgroundColor: usedLetters[letter] }}>
                                        <span className="uppercase">{letter}</span>
                                    </div>
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
