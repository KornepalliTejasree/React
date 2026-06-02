import React, { useState } from 'react'
import "./App.css";
const App = () => {
 const [text,setText]=useState("");
 const [submition,setSubmition]=useState("");
 function handleSubmission(event){
  event.preventDefault();
  setSubmition(text);
 }
  return (
    <div>
      <form onSubmit={handleSubmission}>
      <input type="text" placeholder='Enter the text'  onChange={(e)=>setText(e.target.value)} />
      <button>Submit</button>
      <p>You entered {text}</p>
      </form>
      <h1>{submition}</h1>
    </div>
  )
}

export default App
