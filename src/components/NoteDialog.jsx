import React, {useState} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Palette from './Palette';
import getDate from '../getDate';

export default function NoteDialog(props) {
  const [dialogInput, setDialogInput] = useState(props.note);

  function handleClickAway() {
    props.hide();
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setDialogInput({
      ...dialogInput,
      [name]: value,
    });
  }

  function resubmitNote() {
    props.onResubmit(props.index, {
      ...dialogInput,
      date: getDate() 
    });
    handleClickAway();
  }

  function handleDialogColor(color) {
    setDialogInput({
      ...dialogInput,
      color: color,
    });
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="note-dialog" style={{backgroundColor: dialogInput.color}}>
        <div className="input-title">
          <TextareaAutosize 
            placeholder="Title"
            onChange={handleInputChange}
            name="title"
            value={dialogInput.title}
            style={{backgroundColor: dialogInput.color}}
          />
        </div>
        <div className="input-desc">
          <TextareaAutosize 
            placeholder="Take a note..."
            onChange={handleInputChange}
            style={{fontSize: '1rem', fontFamily: '"Arial", sans-serif', backgroundColor: dialogInput.color}}
            name="desc"
            value={dialogInput.desc}
            minRows={3}
          />
        </div>
        <p className="timestamp">Edited {props.note.date}</p>
        <div className="input-buttons">
          <Palette onColorChange={handleDialogColor} />
          <button className="custom-button" onClick={resubmitNote} style={{backgroundColor: dialogInput.color}}>Submit</button>
          <button className="custom-button" onClick={handleClickAway} style={{backgroundColor: dialogInput.color}}>Close</button>
        </div>
      </div>
    </ClickAwayListener>
  );
}