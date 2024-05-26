import React from 'react'
import './Gkp.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

  const deleteNote=()=>{
    props.deleteItem(props.id);
  }

  return (  
    <div className='note'>
      <h1>{props.title}</h1>
      <br />
      <p>{props.content} </p>
      <button className='btn' onClick={deleteNote}>
        <div className='deleteIcon'><IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton ></div>
      </button>
    </div>
  )
}

export default Note;
