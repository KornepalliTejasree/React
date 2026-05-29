import React from 'react'
import "./Parent.css";
const Parent = (prop) => {
  return (
    <div className='card2'>
      <img src={prop.Parota} alt="" width={700}/>
      <p>{prop.title2}</p>
      <p>{prop.Price2}</p>
       <a href='https://www.swiggy.com/'> <button>Order now from swiggy</button></a>
    </div>
  )
}

export default Parent
