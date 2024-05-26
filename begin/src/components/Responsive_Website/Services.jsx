import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cards from './Cards';
import SData from './SData';
// import '/node_modules/bootstrap/dist/js/bootstrap.bundle'

const Services = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", paddingTop: '10px', fontSize: '30px'}}>Our Services</h1>
            {SData.map((val, index) => {
                // console.log(index);
                return (

                    <Cards
                        key={index}
                        imgsrc={val.imgSrc}
                        title={val.title}
                        content={val.content}
                    ></Cards>

                );
            })}

        </>
    )
}

export default Services