import React, { createContext } from 'react'
export const DataContext = createContext()

const Usercontext = ({children}) => {
  // console.log(props);
  
  // const name = "raj vishwakaram"
  //this is object 
  const ObjectMe = {
    name:"raj vishwakarma",
    age:21,
    job:"front-developer"
  }
  return (
    <>
    
      <DataContext.Provider value={ObjectMe}>
        {children}
      </DataContext.Provider>
    </>
  
  )
}

export default Usercontext