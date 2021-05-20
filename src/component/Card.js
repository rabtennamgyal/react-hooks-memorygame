import { useEffect } from "react"

function Card(props) {
    const addScore = props.addScore
    const cards = document.querySelectorAll('.box')

    useEffect(() => {
        cards.forEach(el => {
            const random = Math.floor(Math.random() * 12)
            el.style.order = random
        })
    })

    return (
        <div className='bottomDiv'>
            <div className='Card'>
                <button id='Aang' className='one box' onClick={(e) => addScore(e)}>

                </button>
                <button id='Appa' className='two box' onClick={(e) => addScore(e)}>

                </button>
                <button id='Azula' className='three box' onClick={(e) => addScore(e)}>

                </button>
                <button id='Bumi' className='four box' onClick={(e) => addScore(e)}>

                </button>
                <button id='cabbage' className='five box' onClick={(e) => addScore(e)}>

                </button>
                <button id='iroh' className='six box' onClick={(e) => addScore(e)}>

                </button>
                <button id='katara' className='seven box' onClick={(e) => addScore(e)}>

                </button>
                <button id='momo' className='eight box' onClick={(e) => addScore(e)}>

                </button>
                <button id='sokka' className='nine box' onClick={(e) => addScore(e)}>

                </button>
                <button id='suki' className='ten box' onClick={(e) => addScore(e)}>

                </button> 
                <button id='toph' className='eleven box' onClick={(e) => addScore(e)}>

                </button>
                <button id='zuko' className='twelve box' onClick={(e) => addScore(e)}>
                    
                </button>
            </div>
        </div>
    )
}

export default Card