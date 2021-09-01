import React from 'react';

export default function Note(props) {
  function deleteNote() {
    props.onDelete(props.index);
  }

  return (
    <div className="note-box" style={{backgroundColor: props.note.color}}>
      <div className="note-title">
        <h3 className="note-title-heading">{props.note.title}</h3>
      </div>
      <p className="note-desc">{props.note.desc}</p>
      <button onClick={deleteNote} className="custom-button delete-button" style={{backgroundColor: props.note.color}}>Delete</button>
    </div>
  );
}
