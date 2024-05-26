import React, {useState } from 'react';

const  DigitalClock=()=>{
    
    let currTime = new Date().toLocaleTimeString();
    const [cTime, setCtime] = useState(currTime); 
    

    const getTime = () => { 
        currTime = new Date().toLocaleTimeString();
        setCtime(currTime); 
    };

    setInterval(getTime,1)
    //yeh every 1s getTime function ko call krta rhega 

    return(
        <>
            <h1>{cTime}</h1>  
            {/* <button onClick={getTime}> Click me </button> */}
            
        </> 
    );
};    


export default DigitalClock;


