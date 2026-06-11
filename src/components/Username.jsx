import React from 'react'
import { useContext } from 'react'
import {UserContext} from "./UserContext"
const Username = () => {
  const {name,count}=useContext(UserContext);
  return (
    <div>
      <p>Username:{name}</p>
      <p>Count:{count}</p>
    </div>
  )
}

export default Username
