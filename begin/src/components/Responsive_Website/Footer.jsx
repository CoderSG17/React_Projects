import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
        <footer style={{ textAlign: "center", fontSize:'10px'}}>©️ {year} BansiWale All Rights Reserved | Terms and Conditions</footer>
    </>
  )
}

export default Footer