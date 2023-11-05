
const Greeting = () => {

  const randomNumber = Math.floor(Math.random() * 5) + 1;
  
  const greeting = (
    randomNumber === 1 ? 'hi 1'
    : randomNumber === 2 ? 'howdy 2'
    : randomNumber === 3 ? 'hello 3'
    : randomNumber === 4 ? 'hey 4'
    : 'yo 5'
  )
  
  return (
    <div className="greeting">
      <h1>Random Greeting</h1>
      <h2 className="message">{greeting}</h2>
    </div>
  );
};

export default Greeting;