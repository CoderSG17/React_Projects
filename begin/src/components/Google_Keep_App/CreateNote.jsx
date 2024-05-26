import React, { useState } from 'react'
import './Gkp.css';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

  const [expand, setExpand] = useState(false);


  const [note, newNote] = useState({
    title: "",
    content: "",
  });

  const InpEve = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    newNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
    // console.log(note);

  }

  const addEvent = (event) => {
    event.preventDefault();
    props.passNote(note);
    newNote({
      title: "",
      content: "",
    });
  }

  const expnd=()=> {
    setExpand(true);
  }

  const hide=()=> {
    setExpand(false);
  }

  return (
    <div className='main_note' onDoubleClick={hide}>
      <form>
        {expand?
        <input 
        type="text" 
        placeholder=' Title' 
        autoComplete='off' 
        onChange={InpEve} 
        value={note.title} 
        name='title' 
        />: null}

        <textarea cols="30" rows="10" placeholder=' Write a note...'
         onChange={InpEve} 
         value={note.content}
          name='content' 
          onClick={expnd}
          >
          </textarea>

        {expand?
        <button className='MuiButton-root' onClick={addEvent}>
          <AddIcon className='plus-sign'></AddIcon>
        </button>: null}

      </form>
    </div>
  )
}

export default CreateNote;