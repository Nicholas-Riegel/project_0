import React from "react";

function App() {
  // could do it like this
  // return React.createElement('h1', null, "JSX is awesome!!!");
  // in fact this is what React does
  // but this would get messy and really difficult quickly

  const jsx = <div><h1>JSX is great</h1> </div>
  
  //this returns an object within an object; that's the key here
  console.log(jsx) 

  return jsx;

}

export default App
