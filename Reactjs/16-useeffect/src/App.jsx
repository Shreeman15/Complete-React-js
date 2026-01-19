import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(0)
  useEffect(() => {
    console.log("useEffect is running....");
    
  },[num])
  return (
    <div className='min-h-screen h-full w-full bg-gray-900 flex flex-col flex-wrap content-between p-10'>
      <h1 className='text-white p-2'>{num}</h1>
      <h1 className='text-white p-2'>{num2}</h1>
      <button onMouseEnter={() => {
        setnum(prev => prev + 1)
      }} onMouseLeave={() => {
        setnum2(prev => prev + 10)
      }} className='bg-blue-950 text-white rounded py-2 px-8 hover:bg-blue-900 cursor-pointer'>Click</button>
    </div>
  )
}

export default App