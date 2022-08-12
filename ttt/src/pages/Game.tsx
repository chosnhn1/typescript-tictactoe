import React, { useState } from 'react'
import Board from '../components/Board'

export default function Game() {
  const [player, setPlayer] = useState("X")

  return (
    <div>
      <p>Game</p>
      <Board />
    </div>
  )
}
