import React, { useState } from 'react'
import Dashboard from './components/Dashboard';
const App = () => {
  const [name,setName]=useState("Rohith");
  return (
    <div>
      <p>App</p>
      <Dashboard name={name}/>
    </div>
  )
}

export default App
