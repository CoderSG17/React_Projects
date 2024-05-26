import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Service from './Pages/Service'
import About from './Pages/About'
import Error from './Pages/Error'
import Contact from './Pages/Contact'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

const AppWeb = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/services' element={<Service></Service>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </>
  )
}

export default AppWeb