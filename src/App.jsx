import React, { useState } from 'react'
import Counter from './Counter';
import Reset from './Reset';
const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
      <Counter count={count} setCount={setCount}/>
      <Reset setCount={setCount}/>
    </div>
  )
}

export default App
