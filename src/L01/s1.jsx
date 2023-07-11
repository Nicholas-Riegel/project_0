import React from "react";

function App() {

  const subject = 'React'
  const age = 39;
  const likes = ['React', 'JSX', 'Redux']

  return (
    <div>
      <h1>{subject} is great</h1> 
      <h2>{String(true)}</h2>      
      {/* if else statements don't work in JSX. 
      must use ternaries */}
      
      { 
        age === 39 ? <p>I'm {age}</p> : null 
      }
      
      {/* likewise, loops don't work.
      must use map() method */}

      <ul>
        {likes.map((x, i) => {
          return <li key={i}>{x}</li>
        })}
      </ul>

    </div>
  );
}

export default App
