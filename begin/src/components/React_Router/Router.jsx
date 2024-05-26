import React from 'react';
import About from './About';
import Contact from './Contact';
import { Route ,Routes } from 'react-router-dom';
// import {  Navigate } from 'react-router-dom';
import Error from './Error';
import './Router.css'
import Services from './Services';
import User from './User';
import Search from './Search';
import Navbar from './Navbar';

const Router = () => {
  return (
    <>

    <Navbar></Navbar>
    <Routes>
      <Route  path='/' element ={<About></About>}></Route>
      <Route  path='/contact' element={<Contact></Contact>}></Route>
      {/* <Route  path='/user' element={<User></User>}></Route> */}
      <Route  path='/user/:fname/:lname' element={<User></User>}></Route>
      <Route  path='/services' element={<Services></Services>}></Route>
      <Route  path='/services' element={<Services></Services>}></Route>
      <Route  path='/search' element={<Search></Search>}></Route>
      <Route  path='*' element={<Error></Error>}></Route>
      {/* <Route  path='*' element={<Navigate to='/'></Navigate>}> </Route>  */}
      {/* for redirecting to the about page when someone tery to visit invalid page */}
    </Routes>
    </>
  )
}

export default Router