import React from 'react'
import Username from "./Username"
const Dashboard = ({name}) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Username name={name}/>
    </div>
  )
}

export default Dashboard
