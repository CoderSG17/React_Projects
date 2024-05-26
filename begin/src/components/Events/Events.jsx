import React, { useState } from 'react';
import './Events.css'

//hume button click hone pr color/text change krna hai mtlb state  chamge krna hai so here we'll use hooks  
const  Events=()=>{

    const color='#8e44ad';
    const [bg,setbg]= useState(color);
    const naam='CLick ME';
    const[name,setname]= useState(naam);

    const change=()=>{
        // console.log("clicked");
        let newbg="orange"
        setbg(newbg);
        let newnaam="Ouch! 😠"
        setname(newnaam);
    };

    const revert=()=>{
        setbg(color);
        setname('Ayyo!! 🖕');

    };

    return(
        <>
            <div style={{backgroundColor:bg}}>
            <button onClick={change} onDoubleClick={revert}> {name} </button>
            </div>
            
        </> 
    );
};    


export default Events;


