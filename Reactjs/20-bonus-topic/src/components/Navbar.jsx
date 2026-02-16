import React from 'react'

const Navbar = (props) => {

  function changeTheme(){
    console.log("change theme")
    props.setTheme('Dark')
  }
  return (
    <div>
      <p>{props.theme}</p>
      <button onClick={changeTheme}>change theme</button>
    </div>
  )
}

export default Navbar