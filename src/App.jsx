import {useEffect, useState} from 'react'

// import Card from './components/Card'
import axios from 'axios'

const App = () => {
//  const [data, setData] = useState([])
//  const getData = async()=>{
//   const jsonData =await axios.get('https://picsum.photos/id/0/info')
   
//    setData(setData.jsonData)
//    console.log(setData);
   
     
//  }
    const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://picsum.photos/id/0/info');
      setData(response.data.id); // Set the data to state
      console.log(response.data.id);
      
      
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call the getData function when the component loads
  useEffect(() => {
    getData();
  }, []); 

  return (
    <>
  
    <div className='p-10'>
   <button onClick={getData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Button
</button>
    </div>
    <div>
    {data.map((item) => (
         
         <div key={item.id}></div>
        ))}
  
    </div>
   
    </>
  
    

  )
}

export default App