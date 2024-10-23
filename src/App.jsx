import {useState} from 'react'
{useState}
// import Card from './components/Card'
import axios from 'axios'

const App = () => {
 
 const getData =()=>{
  const jsonData = axios.get('https://dummyjson.com/user/login')
  console.log(jsonData);
  
 }
  return (
    <>
  
    <div className='p-10'>
   <button onClick={getData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Button
</button>
    </div>
 
    </>
  
    
  )
}

export default App