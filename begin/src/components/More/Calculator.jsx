import React from "react";

function Calculator (){

    function add(a,b){
        return a + b;
    }

    function sub(a,b){
        return a - b;
    }

    function mul(a,b){
        return a*b;
    }

    function div(a,b){
        return a/b;
    }

    return (
        <>
            <ol>
                <li>Addition : {add(30,2)}</li>
                <li>Subtraction : {sub(30,2)} </li>
                <li>Multiplication : {mul(30,2)}</li>
                <li>Divison : {div(30,2)}</li>
            </ol>
        </>
    );


}

export default Calculator;