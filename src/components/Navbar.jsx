import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <>
    <div className='mamainNavin flex' style={{margin:'15px', backgroundColor:'#343a40',padding:'15px' }}>
        <div><h1 style={{color:'white'}}>Framer</h1></div>
        <input style={{marginLeft:"14px"}} type="text" />
        <div className='mainNav flex space-x-5' >
            {/* without link method */}
             {/* <a style={{color:'white'}} href="/home">Home</a>
             <a style={{color:'white'}} href="/about">About</a>
             <a style={{color:'white'}} href="/contact">Contact</a>
             <a style={{color:'white'}} href="/login">Login</a> */}

             {/* with link method */}
             <Link style={{color:'white'}} to="/about">About</Link>
             <Link style={{color:'white'}} to="/home">Home</Link>
             <Link style={{color:'white'}} to="/contact">Contact</Link>
             <Link style={{color:'white'}} to="/login">Login</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar