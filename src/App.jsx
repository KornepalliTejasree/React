import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./App.css"
const App = () => {
  
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>setProducts(res.data)).
    catch((err)=>{console.log("Error fetching")})
  },[])
 
  return (
   <div className='products-container'>
   <h2 className='products-title'>Products-List</h2>
   <div className='products-grid'>
    {
      products.map((product)=>(
        <div className='product-card' key={product.id}>
          <img src={product.image} alt="" />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.rating.rate}</p>
        </div>
      ))
    }
   </div>
   </div>
  )
}

export default App
