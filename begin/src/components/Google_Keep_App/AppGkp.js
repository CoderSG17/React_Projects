import React , { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Gkp from "./Gkp";
import './components/Google_Keep_App/Gkp.css';
import Note from "./Note";

function AppGkp() {

  const [addItem , setAddItem] =useState([]);



  const addNote=(note)=>{
    // alert('Im clicked');
    setAddItem((prevData)=>{
      return [...prevData,note];
    })
  
  console.log(note);
    // note.preventDefault();

  }

  const onDelete=(id)=>{
    setAddItem((oldData)=>{
      return oldData.filter((arrElem , index)=>{
        return index!==id;
      }
    )})

  }

    return (
      <>
      <Gkp></Gkp>
      <CreateNote passNote={addNote}></CreateNote>

      {addItem.map((val,index)=>{
        return (
          <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem ={onDelete}
        />
        )

      })}
      <Footer></Footer>

      </>
    );
  }
  
  export default AppGkp;
  