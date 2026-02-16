import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
  return (
    <div className='main'>
      <h1 className='heading'>Shreeman</h1>
    <Nav2 theme = {props.theme}/>
    </div>
  )
}

export default Navbar