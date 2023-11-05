import {useRef, useEffect, useState} from 'react'

function Counter() {

  const [searchTerm, setSearchTerm] = useState('')
  const countRef = useRef(0)

  // this would lead to an infinite loop, since useEffect will run on every render and whenever the state changes there is a re-render
  useEffect(()=>{
    countRef.current++
  })

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={e=>setSearchTerm(e.target.value)} />
      <br/>
      <br/>
      {countRef.current}
    </div>
  )
}

export default Counter