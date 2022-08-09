import React, { useState } from 'react'

interface SquareProps {
  children?: React.ReactNode
  position: number
  onClick?: (i: number) => void
  value?: string|void
}

const Square = (props: SquareProps) => {
  const [value, setValue] = useState<string|null>(null)
  const handleClick = () => {
    setValue("X")
  }

  return (
    <button className="square" onClick={() => handleClick()}>
      <>{value}</>
      {/* <>{props.position}</> */}
    </button>
  )
}

export default Square