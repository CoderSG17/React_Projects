import React from 'react'
import './css/Header.css'

const Header = () => {
  return (
    <>
      <div className="main_div">
        <div className="left_div">
          <div className='para' style={{fontWeight:'1000' , fontSize:'20px' ,marginTop:"-40px" ,marginBottom:"40px"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat quos minus quasi 
          </div>
          <br />
          <p style={{fontSize:'10px',marginTop:"-20px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius delectus a! At, cumque sint quibusdam molestias porro maiores aspernatur dignissimos doloremque sequi soluta, et illo! Ratione facere vel voluptates!
          </p>
          <div style={{fontSize:'15px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus.
          </div>
          <br />
          <div className="inpBtn" >
            <input type="text" className="inp" placeholder="Enter your email"/>
              <button className="btn1" type="button">Button</button>
          </div>

        </div>

        <div className='right_div'>
          <img src="https://images.unsplash.com/photo-1548867450-e6b40186934b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="error" className='img' />

          <img src="https://plus.unsplash.com/premium_photo-1661497219618-6b9f8e3acf8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="error" className='img1' />
        </div>
      </div>
    </>
  )
}

export default Header