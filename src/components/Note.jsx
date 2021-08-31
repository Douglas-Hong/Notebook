import React from 'react';

export default function Note(props) {
  function deleteNote() {
    props.onDelete(props.index);
  }

  return (
    <div className="note-box" style={{backgroundColor: props.color}}>
      <h3 className="note-title">{props.title}</h3>
      <p className="note-desc">{props.desc}</p>
      <button onClick={deleteNote} className="custom-button delete-button" style={{backgroundColor: props.color}}>Delete</button>
    </div>
  );
}
