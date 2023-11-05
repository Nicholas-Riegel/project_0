import { useState, useEffect} from "react";

const GetTodos = () => {

  const [data, setData] = useState([])
  const [userId_in, setUserId_in] = useState('')
  const [userId_out, setUserId_out] = useState('')

  const fetchData = async () => {    
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      const responseData = await response.json();
      setData(responseData)  
    } catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

  const getResults = (e) => {
    e.preventDefault()
    setUserId_out(userId_in)
    setUserId_in('')
  }

  return (
    <>
      <form onSubmit={getResults}>
        <input 
          type="number" 
          value={userId_in}
          onChange={e=>setUserId_in(e.target.value)}
        />
        <button>Submit</button>
      </form>

      {(data && userId_out) 
        && data.map(
          (item, i) => (
            item.userId == userId_out 
            && <p key={i}>{item.title}</p>
          )
        )
      }
    </>
  );
};

export default GetTodos;