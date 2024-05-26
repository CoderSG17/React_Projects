import React, { useState } from 'react'
import './css/Working.css'
import MoneyApi from './MoneyApi'
import './css/Money.css'

const Money = () => {

    const [serviceData, setServiceData] = useState(MoneyApi)
    // console.log(workData)
    return (
        <>
        <div className='outr_div'>
            <div style={{textAlign:'center' , fontSize:"25px"  , fontWeight:"700"}}>How to Send Money</div>
            <br /> <br />
            <div className='top_div'>
                {
                    serviceData.map((elem) => {
                        const { id , logo, title, details } = elem;
                        return (
                            <>
                            <div key={id} className='inner-div'>
                                <i className={`logo1 ${logo}`} ></i>
                                <br />
                                <h2 className='heading2'>{title}</h2>
                                <br />
                                <div className='detail1'>{details}</div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
            </div>
        </>
    )
}

export default Money