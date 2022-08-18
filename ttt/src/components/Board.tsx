import React, { SetStateAction, useState } from 'react'
import Square from './Square'

interface Props {
  squares: Array<string|null>
  handleClick: (i: number) => void
}

export default function Board(props: Props) {
  const renderSquare = (i: number) => {
    return (<Square
      position={i}
      value={props.squares[i]}
      onClick={() => props.handleClick(i)}>
    </Square>)
  }


  return (
    <div className='game'>
      <p>
        Board {props.squares}
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
