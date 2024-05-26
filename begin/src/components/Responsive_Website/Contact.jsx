import React from 'react'
import './Website.scss'

const Contact = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '30px', paddingTop: '10px' }}>Contact US</h1>
      <form className='form' autoComplete='off'>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">Email:</label>
          <input autocomplete="off" type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">Phone Number:</label>
          <input type="number" class="form-control" id="email" placeholder="Enter Phone Number" name="email" />
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Password:</label>
          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
        </div>
        <label for="message">Message:</label>
        <textarea class="form-control" rows="5" id="comment" name="text" style={{height:'70px'}}></textarea>
        <br />
        <button onClick={()=>{
          alert('Form Submitted')
        }}type="submit" class="btn btn-primary">Submit</button>
      </form>


    </>
  )
}

export default Contact