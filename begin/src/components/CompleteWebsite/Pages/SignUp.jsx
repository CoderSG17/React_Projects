import React from 'react'
// import '../css/LoginPage.css'
import Navbar from '../Navbar'

const SignUp = () => {
  return (
    <>
    <Navbar></Navbar>
    <div style={{backgroundColor:"#A9B388",height:"100vh",overflowX:"hidden" ,overflowY:"hidden"}}>
        <div className="form-container" style={{marginTop:"15px"}} >
                <h1 className='h1'>Sign Up</h1>
                <form className='form'>
                    <label className='lbl' >Username</label>
                    <input className="inp5" type="text" id="new-username" name="new-username" required />
                    <label  className='lbl' >Email</label>
                    <input className="inp5" type="email" id="new-email" name="new-email" required />
                    <label className='lbl' >Password</label>
                    <input className="inp5" type="password" id="new-password" name="new-password" required />
                    <button className='btn5' type="submit">Sign Up</button>
                </form>
                <p className='p' style={{marginTop:'5px'}}>Already have an account? <a className='anc' href="/login" id="login-link">LOGIN</a></p>
            </div>
            </div>
    </>
  )
}

export default SignUp