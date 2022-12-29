function Loading() {
    return (
        <div className="overflow-hidden flex flex-row justify-center items-center h-screen w-screen">
            <div className="m-2 h-5 w-5 animate-spin rounded-full border-b-2 border-sky-300"></div>
            <span>Loading...</span>
        </div>
    );
}

export default Loading;
