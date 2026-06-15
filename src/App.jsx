import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./App.css"
import Loader from "./components/Loader"
const App = () => {
  
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setProducts(res.data)
      setLoading(false)
    }).
    catch((err)=>{
      setLoading(false)
      setError("Please try after sometime.")
      console.log("Error fetching")
    })
  },[])
 
  return (
   <div className='products-container'>
   <h2 className='products-title'>Products-List</h2>
   <div className='products-grid' >
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
   <div>{loading && (<Loader/>)}</div>
   <div>{error && <p>{error}</p>}</div>
   </div>
  )
}

export default App
