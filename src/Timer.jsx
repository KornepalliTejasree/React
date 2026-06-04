import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(0);
    useEffect(()=>{
        console.log("Timer started");
       const interval= setInterval(()=>{
        setTime((prev)=>prev+1);
        },1000);
        return ()=>{
         console.log("Timer stopped");
         clearInterval(interval);
        }
    },[]);
  return (
    <div>
      {time}
    </div>
  )
}

export default Timer
