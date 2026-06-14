import React from 'react'
import { useContext } from 'react'
import {UserContext} from "./UserContext"
const Username = () => {
  const {name,count,increase}=useContext(UserContext);
  return (
    <div>
      <p>Username:{name}</p>
      <p>Count:{count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Username
