import React from 'react'
import WorkApi from './WorkApi'
import './css/Usage.css'

const Support = () => {
    return (
        <>
            <div className='main_div'>
                <div className='left_div'>
                    <p style={{ marginLeft: "5px", fontSize: "15px", paddingTop: '70px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quas!</p>
                    <div style={{ textAlign: 'left', fontSize: "25px", paddingTop: '0px', fontWeight: "700", marginLeft: "5px" }}>World Class Support is Available 24x7</div>
                    <br />
                    {
                        WorkApi.map((elem) => {
                            const { number, title, details } = elem;
                            return (
                                <>
                                    <div className={`logo1 ${number}`} ></div>
                                    <h2 className='heading1'>{title}</h2>
                                    <div className='detail'>{details}</div>
                                    <br />
                                    <br />

                                </>
                            )
                        }
                        )}
                    <button className='btn2'>Learn More</button>
</div>
                    <div className='right_div'>
                        <img src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlY2tpbmd8ZW58MHx8MHx8fDA%3D" alt="error" className='img2' />
                    </div>
                
            </div>
        </>
    )
}

export default Support