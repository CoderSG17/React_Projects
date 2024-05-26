import React, { useState } from 'react'
import './css/Navbar.css'
    import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
    import '/node_modules/bootstrap/dist/js/bootstrap.bundle'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [toggleButton, setToggleButton] = useState(true);


    const toggle = () => {
        setToggleButton(false)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg w-100">
                <div className="container-fluid">
                    <NavLink to='/home' className="title" href="/">RadheRadhe</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" onClick={toggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${toggleButton ? "show" : ""} `} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink to='/home' className="nav-link active" aria-current="page" href="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link active" aria-current="page" href="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/services' className="nav-link active" aria-current="page" href="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link active" aria-current="page" href="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex justify-content-lg-start">
                            <NavLink to='/signup'><button className="button" type="submit">SIGN UP</button></NavLink>
                            <NavLink to='/login'><button className="button btn_style" type="submit">LOGIN</button></NavLink>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar