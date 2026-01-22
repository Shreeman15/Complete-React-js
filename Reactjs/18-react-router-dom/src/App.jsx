import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './Components/Navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/About' element = {<About/>} />
        <Route path = '/Contact' element = {<Contact/>} />
      </Routes>
    </div>
  )
}

export default App