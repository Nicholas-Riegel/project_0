// using local storage and cleanup effect

import {useState, useEffect} from 'react'

const Greeting = () => {

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 5) + 1
  )
  
  const [greeting, setGreeting] = useState('')

  useEffect(() => {

    window.localStorage.setItem('randomNumber', randomNumber)

    switch(randomNumber){
      case 1: 
        setGreeting('hi 1') 
        break;
      case 2: 
        setGreeting('howdy 2')
        break;
      case 3:
        setGreeting('hello 3')
        break;
      case 4:
        setGreeting('hey 4')
        break;
      default:
        setGreeting('yo 5')
    }

    return () => window.localStorage.clear()

  }, [randomNumber])
  
  return (
    <div className="greeting">
      <h1>Random Greeting</h1>
      <h2 className="message">{greeting}</h2>
    </div>
  );
};

export default Greeting;