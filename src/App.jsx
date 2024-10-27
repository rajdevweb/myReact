import React from 'react'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Navbar from './components/Navbar'
// import contextAPI from './context/contextAPI'
// import { Routes, Route } from 'react-router-dom';
import Usercontext from './context/Usercontext.jsx'
// import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'


const App = () => {
  
  return (
   <>
    <contextAPI/>
    {/* <Card/> */}
    <Footer/>
    <Header/>

   {/* <Navbar/> */}
  
   {/* <Routes>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
   </Routes> */}
   </>
  )
}

export default App