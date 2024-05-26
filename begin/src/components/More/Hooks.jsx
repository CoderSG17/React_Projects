import React, { useState } from 'react';

const Hooks = () => {
    
    //hook
    // const state = useState();
    // console.log(state);

    // const [currentData, updatedData] = useState(initialData);
    const [count, setCount] = useState(0); //start from 0
    // const [count, setCount] = useState(10); //start from 10
    //jo bhi value hum useState mein pass karenge wo count ko assign ho jayegi 

    const IncNum = () => {
        setCount(count + 1); //increment // isse jo count ki value hai wo update ho jayegi to count+1
        // setCount(count - 1); //decrement // isse jo count ki value hai wo update ho jayegi to count-1
        // console.log("clicked " + count++);
    };

    return(
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Click Me </button>
        </> 
    );
};    


export default Hooks;

