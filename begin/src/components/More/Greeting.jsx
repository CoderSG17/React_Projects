import React from "react";


function Greeting(){

    let curDate = new Date();
let hour = curDate.getHours();
//    var  min=curDate.getMinutes();
//    var  sec=curDate.getSeconds();
//    var session ='AM';
let greet = "";

//    if (hour > 12) {
//     hour = hour - 12;

//    }

//    if (hour>=12){
//     session = "PM";
//  }

const style = {};

style.textDecoration = "underline";

if (hour >= 1 && hour < 12) {
    greet = "Good Morning";
    style.color = "green"
}

else if (hour >= 12 && hour < 19) {
    greet = "Good Afternoon";
    style.color = "orange"


}
else {
    greet = 'Good Night';
    style.color = "black"


}
return (
    <>
    {/* <h1>Hello Sir , {`${hour} : ${min} : ${sec} ${session}`}</h1>,
    <h1>Hello Sir , {`${hour} ${session}`}</h1>,
    <> */}
        <div>
            <h1>Hello Sir , <span style={style}>{greet}</span></h1>
        </div>
    </>
);
}

export default Greeting;