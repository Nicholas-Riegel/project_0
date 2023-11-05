import {useState} from 'react'
import Child from './Child'

const Parent = () => {

  const [count, setCount] = useState(0)
  
  console.log('Parent Rendering')
  
  return (
    <div style={{ border: 'black solid 1px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header>I am the parent component</header>
      <p>You clicked {count } times</p>
      {/* <button onClick={()=>setCount(prev=>prev+1)}>Click me</button> */}
      <button onClick={()=>setCount(prev=>prev)}>Click me</button>
      <Child count={count}/>
    </div>
  )
}

export default Parent