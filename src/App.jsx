import { useState} from 'react'
{useState}
// import Card from './components/Card'
// import axios from 'axios'
import Card from './components/Card'

const App = () => {

    const students = [
    {
      name: "John Smith",
      student_id: "S101",
      division: "A",
      gender: "Male",
      grade: "B",
     
    },
    {
      name: "Emily Johnson",
      student_id: "S102",
      division: "B",
      gender: "Female",
      grade: "A"
    },
    {
      name: "Michael Brown",
      student_id: "S103",
      division: "A",
      gender: "Male",
      grade: "C"
    },
    {
      name: "Sophia Garcia",
      student_id: "S104",
      division: "C",
      gender: "Female",
      grade: "B+"
    },
    {
      name: "Liam Martinez",
      student_id: "S105",
      division: "B",
      gender: "Male",
      grade: "A-"
    }
  ];

  //   const [data, setData] = useState([]);
  // const getData = async () => {
  //   try {
  //     const response = await axios.get('https://picsum.photos/id/0/info');
  //     setData(response.data.id); // Set the data to state
  //     console.log(response.data.id);
      
      
     
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // // Call the getData function when the component loads
  // useEffect(() => {
  //   getData();
  // }, []); 


  
  return (
    <>

    {students.map(function(data,index){
  return <Card  key ={index} name={data.name}student_id={data.student_id}division={data.division} gender={data.gender} grade={data.grade} pic={data.pic} />
  })}
    <div>

    </div>
    <div className='p-10'>
   {/* <button onClick={getData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Button
</button> */}
    </div>
    <div>
    {/* {data.map((item) => (
         
         <div key={item.id}></div>
        ))} */}
  
    </div>
   
    </>
  
    

  )
}

export default App