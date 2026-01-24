import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 justify-between items-center px-8  bg-linear-to-r from-blue-500 via-purple-500 to-pink-500'>
 
      <h2 className=''>Shreeman</h2>
    
     <div className='flex gap-16'>
      <Link to = '/'>Home</Link>
      <Link to = '/About'>About</Link>
      <Link to = '/Contact'>Contact</Link>
     
     </div>

    </div>
  )
}

export default Navbar