import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'

import Women from './pages/Women'
import Man from './pages/Man'
const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/About' element = {<About />} />
        <Route path = '/Contact' element = {<Contact />} />
        <Route path = '/Product' element = {<Product />} />
        <Route path = '/Product/Man' element = {<Man />} />
        <Route path = '/Product/Women' element = {<Women />} />
        <Route path = '*' element = {<NotFound />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App