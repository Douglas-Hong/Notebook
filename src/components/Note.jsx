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
          <TextareaAutosize style={{backgroundColor: noteColor}} value={props.note.title} disabled />
        </div>
        <div className="note-desc">
          <TextareaAutosize style={{backgroundColor: noteColor}} value={props.note.desc} disabled />
        </div>
        <NoteButtons onDelete={deleteNote} color={noteColor} onColorChange={changeNoteColor} />
      </div>
      {showDialog && <NoteDialog note={props.note} index={props.index} hideDialog={hideDialog} onResubmit={props.onResubmit}/>}
    </div>
  );
}

