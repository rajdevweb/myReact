// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Card from './components/Card';
{ useState }

// import './index.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

const App = () => {
  // const [num, setnum] = useState(0);

  const student = [
  {
    "name": "John Smith",
    "student_id": "S101",
    "division": "A",
    "gender": "Male",
    "grade": "B"
  },
  {
    "name": "Emily Johnson",
    "student_id": "S102",
    "division": "B",
    "gender": "Female",
    "grade": "A"
  },
  {
    "name": "Michael Brown",
    "student_id": "S103",
    "division": "A",
    "gender": "Male",
    "grade": "C"
  },
  {
    "name": "Sophia Garcia",
    "student_id": "S104",
    "division": "C",
    "gender": "Female",
    "grade": "B+"
  },
  {
    "name": "Liam Martinez",
    "student_id": "S105",
    "division": "B",
    "gender": "Male",
    "grade": "A-"
  }
]


  return (
    <>
      {/* <h1 className='text-xl'>Your number is : {num} </h1>

      <div id='mainBtn'>
        <button onClick={() => setnum(num + 10)}>Increment</button>
        <button onClick={() => setnum(num - 10)}>Decrement</button>
        <button onClick={() => setnum(num - 10)}>Decrement</button>

        <div className='flag'>
          <div className='orange'>orange</div>
          <div className='white'>white</div>
          <div className='green'>green</div>
        </div>
      </div>
      <div>krishna</div> */}
      {/* components */}

       <Navbar/> 
      {student.map(function(student,index){
        return <Card key={index} name={student.name} student_id={student.student_id} division={student.division} gender={student.gender} />
      })}
      
       {/* <div className='flex gap-5'>
       <Card title = "pollar bear" about = "
Polar bears (Ursus maritimus) are one of the most iconic animals on Earth, recognized for their beauty, strength, and ability to survive in some of the planet’s harshest environments. They are the largest carnivorous land mammals and are native to the Arctic Circle, where they have evolved over thousands of years to thrive in the freezing conditions. Their existence, however, is increasingly under threat due to climate change, which is causing their habitat to shrink at an alarming rate. Here's a comprehensive look at polar bears, their biology, lifestyle, and the challenges they face." 
tag="bear" tag2= "snow" 
/>
    
    <Card title = "pollar bear" about = "
Polar bears (Ursus maritimus) are one of the most iconic animals on Earth, recognized for their beauty, strength, and ability to survive in some of the planet’s harshest environments. They are the largest carnivorous land mammals and are native to the Arctic Circle, where they have evolved over thousands of years to thrive in the freezing conditions. Their existence, however, is increasingly under threat due to climate change, which is causing their habitat to shrink at an alarming rate. Here's a comprehensive look at polar bears, their biology, lifestyle, and the challenges they face." 
tag="bear" tag2= "snow" 
/>
</div>         */}




    </>
  )
}

export default App

