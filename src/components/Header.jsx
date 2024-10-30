import React, { useContext } from 'react'
import { DataContext } from '../context/Usercontext'
// import {DataContext} from '../context/Usercontext'

const Header = () => {
  let username = useContext(DataContext)
  return (
   <>
    <h1> I AM FOOTER {username.name}</h1>
   </>
  )
}

export default Header