import React from 'react'
import { NavLink } from 'react-router-dom'
import './Website.scss'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '/node_modules/bootstrap/dist/js/bootstrap.bundle'

const Navbar = () => {
  return (
    <>
    <div class="navbar">
        <div className='fig'>
        <NavLink className='fig' to="/" >BansiWale</NavLink>
        </div>
      <div className='innerDiv'>
      <NavLink  className='navLink' to="/home" >Home</NavLink>
      <NavLink  className='navLink' to="/about" >About</NavLink>
      <NavLink  className='navLink' to="/services">Services</NavLink>
      <NavLink  className='navLink' to="/contact" >Contact</NavLink>
      </div>
      </div>

    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink  className='navLink' to="/"  style={{paddingRight:'20px'}}>BansiWale</NavLink>
      <NavLink  className='navLink' to="/home"  style={{paddingRight:'20px'}}>Home</NavLink>
      <NavLink  className='navLink' to="/about"  style={{paddingRight:'20px'}}>About</NavLink>
      <NavLink  className='navLink' to="/services" style={{paddingRight:'20px'}}>Services</NavLink>
      <NavLink  className='navLink' to="/contact"  style={{paddingRight:'20px'}}>Contact</NavLink>
      </div>
    </div>
  </div>
</nav> */}

    </>
  )
}

export default Navbar