// import React from 'react'
import React, { useState } from 'react';


const Counter = () => {
    const [count, setcount] = useState(4)
    console.log(count);
    

  return (
   <>
   <p>NUMBER:{count}</p>
  
    
   <button onClick={()=>setcount(count * 2)}>Click me</button>
   <button onClick={()=>setcount(count * 2)}>Click me</button>
   <button onClick={()=>setcount(count * 2)}>Click me</button>
   </>
  )
}

export default Counter