import React, {useState} from 'react';
import NoteButtons from './NoteButtons';

export default function Note(props) {
  const [noteColor, setNoteColor] = useState(props.note.color);

  function deleteNote() {
    props.onDelete(props.index);
  }

  function changeNoteColor(color) {
    setNoteColor(color);
    props.onColorChange(props.index, color);
  }

  return (
    <div className="note-box" style={{backgroundColor: noteColor}}>
      <div className="note-title">
        <h3 className="note-title-heading">{props.note.title}</h3>
      </div>
      <p className="note-desc">{props.note.desc}</p>
      <NoteButtons onDelete={deleteNote} color={noteColor} onColorChange={changeNoteColor} />
    </div>
  );
}
