import React, { useState } from "react";
import './Forms.css'

const Forms = () => {

    const [fullName, setfullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });


    //event is object name
    const sub = (event) => {
        event.preventDefault(); // it prevents reloading of page as in forms page reloads itself by deafult on submitting the form 
        alert('form submitted');
    }

    //onChange( or kisi bhi event listener) ko use krne pr ek object bnta hai toh humne "event.target.value" se event(object name) ke target element ki value fetch kr li .. mtlb input feild mein jo bhi user likh rha hai wo hum store kr skte hai .
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // setnaam(event.target.value);

        // const value =event.target.value;
        // const name =event.target.name;

        const{name,value} = event.target; // one line code for above 2 lines

    setfullName((object) => {
        // console.log(object);

        return{
            ...object,
            [name]: value,
        };

        //instead of writing so many lines (that are written below)  we can write just 2 lines (that are written above)  

        // if (name === "fname") {
        //     return {
        //         fname: value,
        //         lname: object.lname,
        //         email:object.email,
        //         phone:object.phone,
        //     };
        // } else if (name === "lname") {
        //     return {
        //         fname: object.fname,
        //         lname: value,
        //         email:object.email,
        //         phone:object.phone,
        //     };
        // }
        // else if (name === "email") {
        //     return {
        //         fname: object.fname,
        //         lname:  object.lname,
        //         email:value,
        //         phone:object.phone,
        //     };
        // }
        // else if (name === "phone") {
        //     return {
        //         fname: object.fname,
        //         lname:object.lname ,
        //         email:object.email,
        //         phone:value,
        //     };
        // }


    });
};

return (
    <form onSubmit={sub}>
        <div>
            <h1>Hello {fullName.fname}  {fullName.lname}  </h1>
            <br />
            <h2>{fullName.email}  {fullName.phone} </h2>
            <input type="text" placeholder="Enter your first name" onChange={inputEvent} value={fullName.fname} name="fname" autoComplete="off"/>
            <br />
            <input type="text" placeholder="Enter your last name" onChange={inputEvent} value={fullName.lname} name="lname" autoComplete="off"/>
            <br />
            <input type="email" placeholder="Enter your email" onChange={inputEvent} value={fullName.email} name="email" autoComplete="off"/>
            <br />
            <input type="number" placeholder="Enter your mobile number" onChange={inputEvent} value={fullName.phone} name="phone" autoComplete="off"/>
            <br />
            <button type="submit">Submit 💁</button>

        </div>
    </form>
);
}

export default Forms;