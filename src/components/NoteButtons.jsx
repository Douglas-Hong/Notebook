import React from 'react';
import Palette from './Palette';

export default function NoteButtons(props) {
  function deleteNote(event) {
    event.stopPropagation();
    props.onDelete();
  }

  return (
    <div className='note-buttons'>
      <Palette onColorChange={props.onColorChange} />
      <button
        onClick={deleteNote}
        className='custom-button delete-button'
        style={{ backgroundColor: props.color }}
      >
        Delete
      </button>
    </div>
  );
}
