import React from 'react';
import './Gkp.css';

const Footer = () => {

  const year=new Date().getFullYear();
  return (
    <footer>
      <p>copyright ©️ {year}</p>
    </footer>
  )
}

export default Footer;