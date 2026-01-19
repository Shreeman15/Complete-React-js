import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [Data, setData] = useState([])
  
  const userData = async() => {
   const userdata = await axios.get("https://picsum.photos/v2/list?page=3&limit=10")
   setData(userdata.data)
   console.log(userdata.data);
 }

 useEffect(function(){
  userData()
 },[])

 let printUserData = <p className="text-white">No User Available</p>
 if(Data.length > 0){
  printUserData = Data.map(function(elem,idx){
    return <div key={idx} className='text-white'>
      <a href={elem.url} target='_blank'>
        <div className='h-64 w-64 overflow-hidden font-bold bg-gray-900 rounded m-1'>
          <img src={elem.download_url} className='h-full object-cover w-full'/>
        </div>
          <h3>{elem.author}</h3>
      </a>
    </div>
  })
 }
  
  return (
    <div
     className= 'h-screen bg-black overflow-auto p-5'>
      <div className='flex gap-4 flex-wrap'>
        {printUserData}
      </div>
    </div>
  )
}

export default App