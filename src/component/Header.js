
function Header({score, high}) {
    return (
        <div className='topDiv'>
            <header>
                <h1>
                    Avatar: The Last Memorizer
                </h1>
            </header>

            <div className='score'>
                <div className='bestScore'>
                    <h1>
                        High Score: 
                    </h1>
                    <h1>
                        {high}
                    </h1>
                </div>
                <div className='curScore'>
                    <h1>
                        Current Score:
                    </h1>
                    <h1>
                        {score}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Header