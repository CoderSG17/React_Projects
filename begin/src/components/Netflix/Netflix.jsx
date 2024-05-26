import React from "react";

import './Netflix.css';

function Navbar() {
    return (
        <h1 className="heading_style">Top 5 movies on NETFLIX</h1>
    );
}

function Netflix(props) {
    return (
        <>
                <div className="cards">
                    <div className="card ">
                        <img src={props.imgsrc} alt="myPic" className="card_img" />
                        <div className="card_info">
                            <span className="card_category">{props.category} </span>
                            <h3 className="card_title"> {props.title}</h3>
                            <a href={props.link} target="_blank" rel="noreferrer">
                                <button> Watch Now </button>
                            </a>
                        </div>
                    </div>
                </div>
        </>

    );
}

export default Netflix;
export { Navbar };