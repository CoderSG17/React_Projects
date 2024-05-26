import React from "react";

function DateTime() {

    // const name = "sg";
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    return (
        <>
            {/* <h1>Hello, My name is {name}</h1> */}
            <p> Current Date is = {currDate} </p>
            <p> Current Time is = {currTime} </p>
            </>
    );

    
}


function FnameLname() {
    const fname = "shray";
    const lname = "gupta";
    //usage of ``(backtick) instead of {fname+""+lname} or {fname} {lname}
    //no need to use concatination operater just write like string 
    return (
        <>
            <h1>my name is {`${fname} ${lname}`}</h1>

            {/* <h1> {`my name is ${fname} ${lname}`}</h1>  */}
            {/* sab kuch {} ke andar bhi likh skte hai   */}


            {/* <p> my lucky number is {6} </p> */}
        </>

    );
  
}

export default DateTime;
export {FnameLname};