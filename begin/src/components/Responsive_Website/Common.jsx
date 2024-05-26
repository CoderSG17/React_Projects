// Iska use isliye kiya hai kyonki about and home page almost same the toh same code copy krne ki jagah we just used props 

import React from 'react'
import './Website.scss'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
    <div className='mainDiv'>
      <div className='leftDiv'>
        <div style={{fontSize:'30px'}}>{props.name}</div>
        <div  style={{fontSize:'30px' , color:'skyblue' , marginBottom:'20px'}}>BansiWale</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> <br />
        <NavLink className='button' to={props.visit}>{props.btnname}</NavLink>
      </div>

      <div className='rightDiv'>
        <img src={props.imgsrc} alt="error" />
      </div>
      </div>
    </>
  )
}

export default Common