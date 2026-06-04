import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
        setTime((prev)=>prev=prev+1);
        },1000);
    },[]);
  return (
    <div>
      {time}
    </div>
  )
}

export default Timer
