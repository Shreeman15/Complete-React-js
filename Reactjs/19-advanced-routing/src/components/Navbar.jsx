import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 justify-between items-center px-8  bg-linear-to-r from-blue-500 via-purple-500 to-pink-500'>
 
      <h2 className=''>Shreeman</h2>
    
     <div className='flex gap-16'>
      <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a>
     </div>

    </div>
  )
}

export default Navbar