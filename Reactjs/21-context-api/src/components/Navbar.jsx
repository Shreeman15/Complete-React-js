import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
  return (
    <div className='main'>
      <h1 className='heading'>Shreeman</h1>
    <Nav2 theme = {props.theme}>
      <h4>this is nav bar</h4>
      <h4>this is the second nav bar</h4>
    </Nav2>
    </div>
  )
}

export default Navbar