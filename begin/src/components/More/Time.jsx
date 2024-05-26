import React, { useState } from 'react';

const Time = () => {
    
    let currTime = new Date().toLocaleTimeString();
    const [cTime, setCtime] = useState(currTime); 
    

    const getTime = () => { 
        currTime = new Date().toLocaleTimeString();
        setCtime(currTime); 
    };

    return(
        <>
            <h1> {currTime} </h1>
            <button onClick={getTime}> Get Time </button>
        </> 
    );
};    


export default Time;

