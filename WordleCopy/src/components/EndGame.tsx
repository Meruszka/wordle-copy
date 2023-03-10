function EndGame({ score, word }: { score: string, word: string }) {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="text-2xl">{score}</h1>
            <h2 className="text-l">The word was: {word}</h2>
            <button
                className="bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.location.reload()}>
                Play Again
            </button>
        </div>
    );
}

export default EndGame;
