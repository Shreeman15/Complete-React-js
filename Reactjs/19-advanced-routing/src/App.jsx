import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/About' element = {<About />} />
        <Route path = '/Contact' element = {<Contact />} />
        <Route path = '*' element = {<NotFound />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App