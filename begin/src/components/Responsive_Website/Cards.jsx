import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div class="card" style={{marginLeft: "50px", height: "390px", marginTop: '20px',marginBottom:'20px', width: "350px" , display:'inline-block'}}>
                <img src={props.imgsrc} class="card-img-top" alt="error" style={{ height: '200px' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.content}</p>
                    <a href="/" class="btn btn-outline-success">Go Home</a>
                </div>
            </div>
        </>
    )
}

export default Cards;