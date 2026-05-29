import React,{useState} from 'react'
import Child from "./components/Child"
const App = () => {
  const [count,setCount]=useState(100);
  return (
    <div>
      <p>{count}</p>
      <Child count={count} counter={setCount}/>
    </div>
  )
}

export default App
