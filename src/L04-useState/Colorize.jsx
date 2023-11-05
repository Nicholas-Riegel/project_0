import React from 'react'
import { useState } from 'react'
import './Colorize.css'

function Colorize() {

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

  const [color, setColor] = useState(getRandomColor)

  return (
    <div className='colorizer'>
      <div className="box" style={{ backgroundColor: color }}>{color}</div>
      <button onClick={() => setColor(getRandomColor)}>Change Color</button>
    </div>
  )
}

export default Colorize