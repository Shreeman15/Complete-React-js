import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import axios from 'axios'
const App = () => {
  const [Data, setData] = useState([])
  const [index, setindex] = useState(1)
  
  const userData = async() => {
   const userdata = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setData(userdata.data)
   console.log(userdata.data);
 }

 useEffect(function(){
  userData()
 },[index])

 let printUserData = <p className="text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold" >Loading......</p>
 if(Data.length > 0){
  printUserData = Data.map(function(elem,idx){
    return <div key={idx} className='text-white'>
       <Card elem={elem}/>
    </div>
  })
 }
  
  return (
    <div
     className= 'h-screen bg-black overflow-auto p-5'>
     
      <div className='flex gap-4 flex-wrap'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-6 p-10'>
        <button onClick={() => {
         if(index > 1){
          setindex(index - 1)
          setData([])
         }
        }} className='bg-amber-400 px-4 py-2 rounded cursor-pointer font-semibold hover:bg-amber-300 active:scale-95'>Prev</button>
        <h4 className='text-white'>Page {index}</h4>
        <button onClick={() => {
        setindex(index + 1)
        setData([])
        }} className='bg-amber-400 px-4 py-2 rounded cursor-pointer font-semibold hover:bg-amber-300 active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App