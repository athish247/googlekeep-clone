import React from 'react'
import "./Notes.css";
import DeleteIcon from '@material-ui/icons/Delete';

const Notes = (props) => {

  const handleClick = ()=>{
    props.deleteNote(props.id)

  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick = {handleClick}>
      <DeleteIcon />
      </button>
    </div>
  );
};

export default Notes
