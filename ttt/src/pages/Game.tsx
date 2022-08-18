import React, { useState } from 'react'
import Board from '../components/Board'

export default function Game() {
  type SquareType = Array<string> | null
  type HistoryType = {
    squares: Array<string|null>
  }
  const [history, setHistory] = useState<Array<HistoryType>>(
    [{squares: Array(9).fill(null)}]
  )
  const [isNextX, setIsNextX] = useState<boolean>(true)
  const [stepNumber, setStepNumber] = useState<number>(0)
  
  const nHistory = history.slice(0, stepNumber + 1)
  const current: {squares: Array<string | null>} = nHistory[nHistory.length - 1]
  







  // const [squares, setSquares] = useState<string[]>(Array(9).fill(null))

  const calcWinner = (squares: Array<string|null>) => {
    const lines: Array<Array<number>> = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c]: Array<number> = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }

  
  const winner = calcWinner(current.squares)
  let gameStatus: string
  if (winner) {
    gameStatus = "Winner: " + winner
  } else {
    gameStatus = "Next Player: " + (isNextX? "X" : "O")
  }

  const handleClick = (i: number) => {
    
    const newSquares: Array<string|null> = current.squares.slice()

    // game already ended
    if (calcWinner(current.squares) || current.squares[i]) {
      return
    }

    newSquares[i] = isNextX ? "X" : "O"
    setHistory(nHistory.concat([{
      squares: newSquares,
    }]))
    setIsNextX(!isNextX)
    setStepNumber(nHistory.length)
  }


  const jumpTo = (step: number) => {
    setStepNumber(step)
    setIsNextX((step % 2) === 0)
  }
  const moves = nHistory.map((step, move) => {
    const desc = move ?
      "Go to move #" + move :
      "Go to Game Start"
    
      return (
        <li>
          <button onClick={() => jumpTo(move)}>{desc}</button>

        </li>

      )
  })


  return (
    <div className="game">
      <p>Game</p>
      <div className="game-board">
        <Board squares={current.squares} handleClick={handleClick} />
      </div>
      <div className="game-info">
        {gameStatus}
      </div>
      <div>
        {current.squares}
        {moves}
      </div>

    </div>
  )
}
