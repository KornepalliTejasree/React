import React from 'react'
import Child from "./components/Child";
import Biryani from "./assets/biryani.jpg";
const App = () => {
  const title="BIRYANI";
  const Price="Price:500 only";
  return (
    <div>
    <Child Biryani={Biryani} title={title} Price={Price}/>
    <p>Birayni2</p>
    <Child Biryani={Biryani} title={title} Price={Price}/>
    <Child Biryani={Biryani} title={title} Price={Price}/>
    </div>
  )
}

export default App
