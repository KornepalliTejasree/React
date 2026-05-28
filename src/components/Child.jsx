import React from 'react';
import "./Child.css";
const Child = (prop) => {
  return (
    <div className="card">
  <img src={prop.Biryani} alt="" width={700}/>
  <h1>{prop.title}</h1>
  <h1>{prop.Price}</h1>
  <a href='https://www.swiggy.com/'> <button>Order now from swiggy</button></a>
    </div>
  )
}

export default Child
