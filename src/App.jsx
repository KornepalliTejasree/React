import React, { useState } from 'react'

const App = () => {
  const [items,setItems]=useState(["Apple","Banana"]);
  function additem(){
    setItems([...items,"Mango"]);
  }
  return (
    <div>
      {
        items.map((fruit,index)=>(
          <p key={index}>{fruit}</p>
        ))
      }
      <button onClick={additem}>Add item</button>
    </div>
  )
}

export default App
