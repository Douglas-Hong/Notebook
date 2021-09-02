import React from 'react';
import Palette from './Palette';

export default function NoteButtons(props) {
  return (
    <div className="note-buttons">
      <Palette onColorChange={props.onColorChange} />
      <button onClick={props.onDelete} className="custom-button delete-button" style={{backgroundColor: props.color}}>Delete</button>
    </div>
  );
}