import React, { useState } from 'react'
import Dashboard from './components/Dashboard';
import {UserContext} from "./components/UserContext"
const App = () => {
  const [name,setName]=useState("Rohith");
  const [count,setCount]=useState(100);
  return (
    <UserContext.Provider value={{name,count}}>
      <p>App</p>
      <Dashboard/>
    </UserContext.Provider>
  )
}

export default App
