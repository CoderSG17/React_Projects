import React from 'react';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
const Cards = () => {
    return (
        <>
            <div className='text-center text-danger text-capitalize my-5 fs-1'>Welcome </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div class="card">
                            <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height='300px'/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>                    </div>
                    <div class="col-sm">
                        <div class="card" >
                            <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height='300px'/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" >
                            <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height='300px'/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards