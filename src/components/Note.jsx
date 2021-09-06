import React, {useState} from 'react';
import NoteButtons from './NoteButtons';
import NoteDialog from './NoteDialog';

export default function Note(props) {
  const [noteColor, setNoteColor] = useState(props.note.color);
  const [showDialog, setShowDialog] = useState(false);

  function deleteNote() {
    props.onDelete(props.index);
  }

  function changeNoteColor(color) {
    props.onColorChange(props.index, color);
    setNoteColor(color);
  }

  function handleClick() {
    setShowDialog(true);
    props.onOpacityChange();
  }

  function hide() {
    setShowDialog(false);
    props.onOpacityChange();
  }

  return (
    <div>
      <div className="note-box" style={{backgroundColor: noteColor}} onClick={handleClick}>
        <div className="note-title">
          <h3 className="note-title-heading">{props.note.title}</h3>
        </div>
        <p className="note-desc">{props.note.desc}</p>
        <NoteButtons onDelete={deleteNote} color={noteColor} onColorChange={changeNoteColor} />
      </div>
      {showDialog && <NoteDialog note={props.note} index={props.index} hide={hide} onResubmit={props.onResubmit}/>}
    </div>
  );
}

