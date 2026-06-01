import React, { useState } from 'react'

const App = () => {
  const [showPassword,setShowPassword]=useState(false);
  return (
    <div>
      <input type={showPassword?'text':'password'} placeholder='Enter the password'></input><button onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?"Hide":"Show"}</button>
    </div>
  )
}

export default App
