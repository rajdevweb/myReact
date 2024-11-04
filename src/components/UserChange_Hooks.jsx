import React, {useState} from 'react'


const UserChange_Hooks = () => {
  let [userMe = "raj", setuserMe] = useState()
  
  return (
   <>
   <div>
    <p>you name is {userMe}</p>
    <button onClick={function setuserMe(){
    console.log(userMe);
    userMe = "krishna"
    console.log(userMe);
    
    
    } }>ChangeName</button>
   </div>
   </>
  )
}

export default UserChange_Hooks