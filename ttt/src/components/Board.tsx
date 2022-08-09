import React, { useState } from 'react'
import Square from './Square'



export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const handleClick = (i: number) => {
    const newSqaures = squares.slice()
    newSqaures[i] = 'X'
    setSquares([...newSqaures])
  }

  const renderSquare = (i: number) => {
    return (<Square position={squares[i]} onClick={() => {handleClick(i)}}>

    </Square>)
  }

  return (
    <div>
      <p>
        Board
      </p>
      <p>
        Next Player:
      </p>
      <div>
        <Square position={1}></Square>
        <Square position={2}></Square>
        <Square position={3}></Square>
      </div>
      <div>
        <Square position={4}></Square>
        <Square position={5}></Square>
        <Square position={6}></Square>
      </div>
      <div>
        <Square position={7}></Square>
        <Square position={8}></Square>
        <Square position={9}></Square>
      </div>



    </div>
  )
}
