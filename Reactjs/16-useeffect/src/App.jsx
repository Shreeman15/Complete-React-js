import React, { useEffect, useState } from 'react'
// useEffect 
const App = () => {

  const [first, setfirst] = useState(0)
  const [second, setsecond] = useState(0)
  
  useEffect(() => {
    console.log("from this first : "+first);
    
  },[first])

  useEffect(() => {
    console.log("from the second : "+second);
  },[second])

  return (
    <div className='w-full min-h-screen p-10 bg-gray-900 flex flex-col content-between gap-4 flex-wrap'>
      <h1 className='text-white'>{first}</h1>
      <h1 className='text-white'>{second}</h1>
      <button onClick={() => {
        setfirst(prev => prev + 1)
      }}
       className='bg-gray-800 px-8 py-4 rounded cursor-pointer active:scale-95 text-white hover:bg-gray-700'>
        Click first
        </button>
      
      <button onClick={() => {
        setsecond(prev => prev + 1)
      }} 
      className='bg-gray-800 px-8 py-4 rounded cursor-pointer active:scale-95 text-white hover:bg-gray-700'>
        Click second
        </button>
    </div>
  )
}

export default App