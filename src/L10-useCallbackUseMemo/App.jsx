import {useState, useCallback} from 'react'
import GreetingBox from './GreetingBox'

const App = () => {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)

  const getGreeting = useCallback(()=>{
    return `Hello ${name}!`
  }, [name])

  return (
    <div>
      <input 
        type="text"
        placeholder='Enter your name'
        value={name}
        onChange={e=>setName(e.target.value)} />
        <GreetingBox getGreeting={getGreeting} />
        {count}
        <br/>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default App