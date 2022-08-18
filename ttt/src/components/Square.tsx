import React, { useState } from 'react'

interface SquareProps {
  children?: React.ReactNode
  position: number
  onClick?: any
  value?: string|null
}

const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      <>{props.value}</>
    </button>
  )
}

export default Square