import React from 'react'
import '../css/LoginPage.css'
import Navbar from '../Navbar'

const Login = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="ctnr">
            <div className="form-container" id="login-form">
                <h1 className='h1'>Login</h1>
                <form  className='form'>
                    <label className='lbl' >Username</label>
                    <input className="inp5" type="text" id="username" name="username" required />
                    <label className='lbl' >Password</label>
                    <input className="inp5" type="password" id="password" name="password" required />
                    <button className='btn5' type="submit">Login</button>
                </form>
                <p style={{marginTop:'5px'}}>Don't have an account? <a className="anc" style={{color:'pink' ,padding:'5px' , }} href="/signup">SIGN UP</a></p>
            </div>
        </div></>
    )
}

export default Login