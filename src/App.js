import Header from './component/Header'
import Card from './component/Card'
import Modal from './component/Modal'
import Win from './component/Win'
import { useState } from 'react';


function App() {
  const [score, setScore] = useState(0)
  const [high, setHigh] = useState(0)
  const [check, setCheck] = useState([])
  const [modal, setModal] = useState(false)
  const [game, setGame] = useState(true)
  const [win, setWin] = useState(false)

  const setHighScore = (score, high) => {
    if (score > high) {
      setHigh(score)
    } else {
      setHigh(high)
    }
  }
  
  const addScore = (e, prevState) => {
    if (check.includes(e.target.id)) {
      setHighScore(score, high)
      setScore(0)
      setCheck([])
      setModal(true)
      setGame(false)
    } else {
      if (check.length === 11) {
        const score = 0
        const high = 12;
        setHighScore(score, high)
        setScore(0)
        setCheck([])
        setGame(false)
        setWin(true)
      } else {
        setScore((prevState) => prevState + 1)
        setCheck([...check, e.target.id])
      }
    }
  }

  const restartGame = () => {
    setModal(false)
    setWin(false)
    setGame(true)
  }

  return (
    <div className='App'>
      { win && <Win restartGame={restartGame} /> }
      { modal && <Modal restartGame={restartGame} /> }
      { game && <Header score={score} high={high}/> }
      { game && <Card addScore={addScore} /> }
    </div>
  )
}

export default App;
