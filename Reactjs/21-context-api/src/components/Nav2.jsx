import React from 'react'
import { useState } from 'react'
const Nav2 = (props) => {
  console.log(props);
  console.log(props.children[0]);
  
  return (
    <div>
      <div className='side-options'>
        <h4>Home</h4>
        <h4>Profile</h4>
        <h4>About</h4>
        <h4>Contect</h4>
        <h4>{props.theme}</h4>
        {props.children[0]}
        {props.children[1]}
     </div>
    </div>
  )
}

export default Nav2