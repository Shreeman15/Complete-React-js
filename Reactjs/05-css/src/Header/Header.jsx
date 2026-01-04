import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div className= {styles.header}>
      <h1>Google</h1>
      <button className= {styles.btn}>login</button>
    </div>
  )
}

export default Header