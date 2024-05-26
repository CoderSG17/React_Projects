import React from 'react'
import '../css/Error.css'
import { NavLink} from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';
// import { useNavigate } from "react-router-dom";

function Error() {

    const leftImage="https://blog.stackfindover.com/wp-content/uploads/2021/03/image-left.png";
    const rightImage="https://blog.stackfindover.com/wp-content/uploads/2021/03/right-shape.png";
    // const navigate = useNavigate();

  return (
    <>
    <Navbar></Navbar>
    <div className="errorpage_container">
        <div className="wrapper">
            <div className="container"> 
                <div className="grid-row">
                    <div className="colmun column-left">
                        <img src={leftImage} alt="error"></img>
                        <h1 className="px-spc-b-20">We can't find the page you are looking for.</h1>
                        <span className="px-spc-b-20">This page has been relocated or removed.</span>

                        {/* <button className="go-home" onClick={()=> {navigate('/')}}><i className="fa fa-home"></i> Go To Home</button> */}
                        <NavLink to='/'><button className="go-home"><i className="fa fa-home"></i> Go To Home</button></NavLink>
                    </div>
                    <div className="colmun colmun-right">
                        <img src={rightImage} alt="right-shape"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Error

{/* <img alt="error" class="position-absolute" height="415" width="940" style={"top: -20px; left: -20px; z-index: 1; width: 110%; height: 425px"} /> */}
