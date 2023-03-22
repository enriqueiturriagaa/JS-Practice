import React from 'react'
import { useState } from 'react'

function Counter() {

    const [number, setNumber] = useState(0)

  return (
    <div className='counter'>
        <h1>Counter is at {number} 👊 </h1>
        <br />
        <button className="btn" onClick={() => setNumber(number+1)}>Add a 👊</button>
        <button className="btn" onClick={() => setNumber(0)}>Reset Counter</button>

    </div>
  )
}

export default Counter