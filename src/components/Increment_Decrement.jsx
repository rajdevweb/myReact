// import React from 'react'
import React ,{useState} from 'react'


const Increment_Decrement = () => {
  
  const [changeNum, setchangeNum] = useState(0)
  console.log(changeNum);
  
  return (
  <>
  <div>
    <p>Your input number {changeNum}</p>
    <button onClick={()=>setchangeNum(changeNum + (10*3/2))}>Increment</button>
    <button onClick={()=>setchangeNum(changeNum - 10)}>Decrement</button>
  </div>
  </>
  )
}

export default Increment_Decrement