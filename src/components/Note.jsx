import React, {useState, useEffect} from 'react';
import NoteButtons from './NoteButtons';
import NoteDialog from './NoteDialog';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Note(props) {
  const [noteColor, setNoteColor] = useState(props.note.color);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setNoteColor(props.note.color);
  }, [props.note.color]);

  function handleClick() {
    setShowDialog(true);
    props.onOpacityChange();
  }

  function deleteNote() {
    props.onDelete(props.index);
  }

  function changeNoteColor(color) {
    props.onColorChange(props.index, color);
    setNoteColor(color);
  }

  function hideDialog() {
    setShowDialog(false);
    props.onOpacityChange();
  }

  return (
    <div>
      <div className="note-box" style={{backgroundColor: noteColor}} onClick={handleClick}>
        <div className="note-title">
          <h3 className="note-title-heading">{props.note.title}</h3>
        </div>
        <TextareaAutosize 
          className="note-desc" 
          style={{backgroundColor: noteColor, color: '#000', fontFamily: "'Arial', sans-serif", fontSize: '1rem', padding: '0'}} 
          value={props.note.desc}
          disabled
        />
        <NoteButtons onDelete={deleteNote} color={noteColor} onColorChange={changeNoteColor} />
      </div>
      {showDialog && <NoteDialog note={props.note} index={props.index} hideDialog={hideDialog} onResubmit={props.onResubmit}/>}
    </div>
  );
}

