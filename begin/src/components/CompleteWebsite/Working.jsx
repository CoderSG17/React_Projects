import React, { useState } from 'react'
import './css/Working.css'
import WorkApi from './WorkApi'

const Working = () => {

    const [workData, setWorkData] = useState(WorkApi)
    // console.log(workData)
    return (
        <>
        <div className='outer_div'>
            <div style={{textAlign:'center' , fontSize:"25px" , paddingTop:'30px' , fontWeight:"700"}}>How does it work?</div>
            <br />
            <div className='main-div'>
                {
                    workData.map((elem, index) => {
                        const { id, logo, title, details } = elem;
                        return (
                            <>
                            <div>
                                <i className={`logo ${logo}`} ></i>
                                <br />
                                <h2 className='heading'>{title}</h2>
                                <br />
                                <div className='detail'>{details}</div>
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

export default Working