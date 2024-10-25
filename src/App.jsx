import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
   </Routes>
   </>
  )
}

export default App