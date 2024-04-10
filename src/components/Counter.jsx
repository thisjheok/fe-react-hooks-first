import React from 'react'
import { useState } from 'react'
const Counter = () => {
  const [counter,setCount] = useState(0);
  const Increase = ()=>{
    setCount(counter+1);
  }
  const Decrease = ()=>{
    setCount(counter-1);
  }

  return (
    <div className="counter">
      <h>Counter 1</h>
      <hr></hr>
      <p>{counter}</p>
      <button onClick={Decrease}>-1</button>
      <button onClick={Increase}>+1</button>
    </div>
  )
}

export default Counter
