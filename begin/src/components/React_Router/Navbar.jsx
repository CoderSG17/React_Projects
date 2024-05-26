import React from 'react'
import { NavLink } from 'react-router-dom'
import './Router.css'

const Navbar = () => {
  return (
    <>
        
    {/* <a href="/" style={{padding:'20px'}}>About</a>
    <a href="/contact">Contact</a> */}
    {/* Instead of anchor tags we'll use link  */}

    {/* benefit is that the page will not relaod  */}
    <div className='navbar'>
    <NavLink  className='navLink' to="/"  style={{paddingRight:'20px'}}>About</NavLink>
    <NavLink  className='navLink' to="/contact"  style={{paddingRight:'20px'}}>Contact</NavLink>
    <NavLink  className='navLink' to="/user/shray/gupta"  style={{paddingRight:'20px'}}>User</NavLink>
    <NavLink  className='navLink' to="/search"  style={{paddingRight:'20px'}}>Search</NavLink>
    <NavLink  className='navLink' to="/services" >Services</NavLink>
    </div>
    </>
  )
}

export default Navbar