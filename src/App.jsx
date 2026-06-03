import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name1,setName1]=useState("");
  const [email1,setEmail1]=useState("");
  const [password1,setPassword1]=useState("");
  const handleSubmittion=(event)=>{
    event.preventDefault();
    setName1(name);
    setEmail1(email);
    setPassword1(password);
  }
  return (
    <div>
      <form onSubmit={handleSubmittion}>
       <input type="text" onClick={()=>{setName(name)}} placeholder='Enter the name' onChange={(e)=>setName(e.target.value)}/><p>You are entering {name}</p>
       <input type="email" onClick={()=>{setEmail(email)}} placeholder='Enter the email' onChange={(e)=>setEmail(e.target.value)}/> <p>Your entering mail is {email}</p>
       <input type="password" onClick={()=>{setPassword(password)}} placeholder='Enter the password' onChange={(e)=>setPassword(e.target.value)}/><p>Your entering password is {password}</p>
       <button >Submit</button>
      </form>
      <p>Your name is {name1}</p>
      <p>Your mail is {email1}</p>
      <p>Your password is {password1}</p>
    </div>
  )
}

export default App
