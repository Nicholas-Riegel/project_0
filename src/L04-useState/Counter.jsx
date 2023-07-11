import {useState} from 'react'

function Counter() {

  // this is called 'lazy initializaiton' bc it will only be done once, at the beginning
  const [count, setCount] = useState(() => Math.floor(Math.random() * 16))

  return (
    <div className='counter-box'>
      {/* could use setCount(count - 1) but...*/}
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <span>{count}</span>
      {/* using prev is better because of 'closure' */}
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default Counter