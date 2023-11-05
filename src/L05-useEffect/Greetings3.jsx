import { useState, useEffect } from "react";

const Greeting = ({ randomMax }) => {

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * randomMax) + 1
  );
  
  const [greeting, setGreeting] = useState();

  useEffect(() => {
  
    window.localStorage.setItem("randomNumber", randomNumber);
  
    if (randomMax === randomNumber) {
      window.localStorage.setItem("jackpot", true);
    } else {
      window.localStorage.setItem("jackpot", false);
    }

    setGreeting(
      randomNumber === 1 ? "Howdy"
      : randomNumber === 2 ? "Bonjour"
      : randomNumber === 3 ? "Hola"
      : randomNumber === 4 ? "Guten Tag"
      : randomNumber === 5 ? "Ciao"
      : randomNumber === 6 ? "Salut"
      : randomNumber === 7 ? "Hallo"
      : randomNumber === 8 ? "Cześć"
      : "Hello"
    )

    // this runs on dismount. to see it, comment out the component in the parent component
    return () => window.localStorage.clear()
    
  }, [randomNumber, randomMax]);

  return (
    <div className="greeting">
      <h1>Random Greeting</h1>
      <h2 className="message">{greeting}</h2>
    </div>
  );
};

export default Greeting;