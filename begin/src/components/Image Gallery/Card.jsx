import React from 'react'
import './style.css'

const Card = ({ items }) => {
    return (
        <>
            {
                items.map((val) => {
                    const { id, title, image_link, description, price } = val;
                    return (
                        <div className="card mb-3 d-inline-block" key={id} style={{ maxWidth: '380px', maxHeight: '250px', marginLeft: '30px', marginTop: '30px', boxShadow: '10px 10px 8px #888888' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={image_link} className="img-fluid rounded-start img" alt="error" style={{ objectFit: 'cover', height: '249px' }} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{title} </h5>
                                        <p className="card-text" style={{ fontSize: '15px' }}>{description}</p>
                                        <p className="card-text"><small className="text-muted">Price: {price}</small></p>
                                        <button>Order Now</button>
                                        <p style={{ fontSize: '12px', paddingTop: '20px', bottom: '0px' }}>Prices may vary for different occasions</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </>
    )
}

export default Card