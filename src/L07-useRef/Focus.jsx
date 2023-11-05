import {useEffect, useRef} from 'react'

function Focus() {

  const inputRef = useRef()

  useEffect(()=>{
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = 'yellow'
  }, [])

  return (
    <div>
      <input 
      type="text"
      ref={inputRef} />
    </div>
  )
}

export default Focus