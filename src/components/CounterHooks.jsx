
import React, {useState} from 'react'


const CounterHooks = () => {
   const [clicker, setclicker] = useState(0)
    console.log(clicker);
  return (
    <>
    <div>
      <p>you do click {clicker}</p>
      <button onClick={() => setclicker(clicker + 1)}>Click</button>
    </div>
    
    </>
  )
}

export default CounterHooks