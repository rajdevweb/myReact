import React, {useState} from 'react'



const hooksEx = () => {
  
    const [userName, setuserName] = useState('')

    const hookState = (event) =>{
    setuserName(event.target.value)
    }
    
  return (
    <>
    <div>
     <ul>
        <li><label htmlFor="name">Enter Your name</label></li>
        <li><input type="text" id='name' value={userName} onChange={hookState} /></li>
     </ul>
     <div>Hello {userName}</div>
    </div>
    </>
  )
}

export default hooksEx