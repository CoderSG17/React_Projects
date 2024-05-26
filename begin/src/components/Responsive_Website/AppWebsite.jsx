import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Error from './Error'
import Navbar from './Navbar'
import Footer from './Footer'

const AppWebsite = () => {
  return (
    <>
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='*' element={<Error></Error>}></Route>

        </Routes>
        <Footer></Footer>
    </>
  )
}

export default AppWebsite

