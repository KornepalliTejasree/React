import React, { useState } from 'react'

const App = () => {
  const [but ,setBut]=useState("Active")
  const handleClick=()=>{
    if(but==="Active"){
      setBut("Inactive");
    }
    else{
      setBut("Active");
    }
  }
  return (
    <div>
      <button onClick={handleClick} className={but}>{but}</button>
    </div>
  )
}

export default App
