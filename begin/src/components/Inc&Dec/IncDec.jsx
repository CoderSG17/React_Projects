import React, { useState } from "react";
import './IncDec.css'

const IncDec =()=>{

    const [num , setnum] = useState(0);

    const inc=()=>{
            setnum(num+1)
    };

    const dec=()=>{
            if(num > 0) {
            setnum(num-1)
            }
            else{
                alert('limit reached')
            }
    };

    return(
        <div className="main_div">
        <div className="centre_div">
            <h1>{num}</h1>
            <div className="btn_div">
                <button onClick={inc}>Increment</button>
                <button onClick={dec}>Decrement</button>
            </div>
        </div>

        </div>
    )
}

export default IncDec;