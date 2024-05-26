import React, { useState } from "react";
import { Questions } from "./Questions";
import './Accordion.css'
import MyAccordion from "./MyAccordion";

const Accordion =()=>{

    const[Data,setData] = useState(Questions);

    return (
        <>
        <section className="main-div">
            <h1>Question and Answers</h1>
        {
        Data.map ((currElem)=>{
            // const{id,ques,ans}=currElem;
            const{id}=currElem;
            return (<MyAccordion key={id}{...currElem}
            ></MyAccordion>)
        })
}      </section>
        </>
    )
}

export default Accordion;