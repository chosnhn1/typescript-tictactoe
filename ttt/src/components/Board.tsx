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
        Next Player: {isNextX ? "X" : "O"}
      </p>
      <div className='board'>
        <div className='board-row'>
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
        </div>
        <div className='board-row'>
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
        </div>
        <div className='board-row'>
          {renderSquare(7)}
          {renderSquare(8)}
          {renderSquare(9)}
        </div>
      </div>



    </div>
  )
}
