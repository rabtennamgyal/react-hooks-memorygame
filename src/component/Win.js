function Win({ restartGame }) {
    return (
        <div className='winCard'>
            <h1>
                You Won 🏆, Congratulations ✨🥳
                <button onClick={restartGame}>
                    PLay Again 😎
                </button>
            </h1>
        </div>
    )
}

export default Win