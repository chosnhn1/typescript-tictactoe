import React, { useState } from 'react'
import Square from './Square'

interface Props {
  squares: Array<string>
  setSquares: React.Dispatch<React.SetStateAction<Array<string>>>
}

export default function Board() {
  const [squares, setSquares] = useState<string[]>(Array(10).fill(null))
  const [isNextX, setIsNextX] = useState<boolean>(true)
  const handleClick = (event: React.MouseEventHandler, i: number) => {
    const newSqaures: Array<string> = squares.slice()
    newSqaures[i] = isNextX ? "X" : "O"
    setIsNextX(isNextX ? false : true )
    setSquares([...newSqaures])
  }

  const calcWinner = (squares: Array<string>) => {
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

  const winner = calcWinner(squares)
  let gameStatus: string
  if (winner) {
    gameStatus = "Winner: " + winner
  } else {
    gameStatus = "Next Player: " + (isNextX? "X" : "O")
  }

  const renderSquare = (i: number) => {
    return (<Square position={i} onClick={(e: React.MouseEventHandler) => handleClick(e, i)} value={squares[i]}>

    </Square>)
  }

  return (
    <div className='game'>
      <p>
        Board {squares}
      </p>
      <p>
        {gameStatus}
      </p>
      <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>



    </div>
  )
}
