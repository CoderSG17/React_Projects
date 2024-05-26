import React from 'react'
import './Website.scss'
// import { NavLink } from 'react-router-dom'
import Common from './Common'

const Home = () => {

  const img = 'https://img.freepik.com/free-vector/flat-design-finance-leaders-concept-with-rocket_23-2149154575.jpg' ;
  return (
    <>
      <Common name='Grow Your buisness with' imgsrc={img} visit='/services' btnname='Get Started'> </Common>
    </>
  )
}

export default Home