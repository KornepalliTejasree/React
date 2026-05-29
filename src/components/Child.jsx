import React from 'react'

const Child = ({count,counter}) => {
  const click=()=>{
    counter(count+100);
  }
  const clickab=()=>{
    counter(count-100);
  }
  const clicka=()=>{
    counter(count*0);
  }
  return (
    <div>
      <button onClick={click}>You know smtg Jon Snow!</button>
      <button onClick={clickab}>You know ntg Jon Snow!</button>
      <button onClick={clicka}>Did you know somthing Jon Snow?</button>
    </div>
  )
}

export default Child
