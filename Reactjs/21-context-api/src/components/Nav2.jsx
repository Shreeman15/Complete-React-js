import React from 'react'
import { useState } from 'react'
const Nav2 = (props) => {
  
  return (
    <div>
      <div className='side-options'>
        <h4>Home</h4>
        <h4>Profile</h4>
        <h4>About</h4>
        <h4>Contect</h4>
        <h4>{props.theme}</h4>
     </div>
    </div>
  )
}

export default Nav2