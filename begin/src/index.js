// var REACT = require('react');  //ES5
// var ReactDOM = require('react-dom');  //ES5


// import React from 'react'; //isko import krna pdta hai to use jsx (<h1>Hello</h1) //ES6 
// import ReactDOM from 'react-dom';//ES6
// import "./index.css"

//In React v16+ it's possible for render() to return an array of elements.
// ReactDOM.render([
//     <h1>Hello</h1>, <p>hey you</p>
//     ],
//     document.getElementById('root')
//     );





//METHOD -1 TO RENDER (SHOW) -- BEST ONE

// ReactDOM.render('kya dikhana hai what to show',
// 'kaha dikhan hai where to show', 'callback function');



//div use krne ki jagah we can use react fragment ya <></> jisse ek extra div na bne 
// ReactDOM.render(<React.Fragment>
//     <h1 contentEditable='true'>Hello</h1> <p>hey you</p>
//     <img src='https://picsum.photos/200/300' alt='error'/>
//     <img src='https://picsum.photos/300/300' alt='error'/>
//     <img src='https://picsum.photos/400/300' alt='error'/>  
//     </React.Fragment>,
//     document.getElementById('root')
//     );



//METHOD -2 TO RENDER (SHOW) -expansion of M1
// ReactDOM.render(
//     React.createElement("h1", null, "hello"),
//     document.getElementById("root")
//     );


//METHOD -3 TO RENDER (SHOW)
//Using pure js 
// var h1 = document.createElement("h1");
// h1.innerHTML = "hello";
// document.getElementById("root").appendChild(h1);


import React from 'react';
// import ReactDOM from 'react-dom'; 
import "./index.css"
import App from './App';
import App1 from './App1';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    <App1></App1>
  </BrowserRouter>

  </React.StrictMode>
);

