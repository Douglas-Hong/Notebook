import React, {useState} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Palette from './Palette';
import getDate from '../getDate';

export default function NoteDialog(props) {
  const [dialogInput, setDialogInput] = useState(props.note);

  function handleInputChange(event) {
    const {name, value} = event.target;

    setDialogInput({
      ...dialogInput,
      [name]: value,
    });
  }

  function handleDialogColor(color) {
    setDialogInput({
      ...dialogInput,
      color: color,
    });
  }

  function resubmitNote() {
    props.onResubmit(props.index, {
      ...dialogInput,
      date: getDate() 
    });
    props.hideDialog();
  }

  return (
    <ClickAwayListener onClickAway={props.hideDialog}>
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
            name="desc"
            value={dialogInput.desc}
            style={{backgroundColor: dialogInput.color, fontFamily: "'Arial', sans-serif", fontSize: '1rem'}}
            minRows={3}
          />
        </div>
        <p className="timestamp">Edited {props.note.date}</p>
        <div className="input-buttons">
          <Palette onColorChange={handleDialogColor} />
          <button className="custom-button" onClick={resubmitNote} style={{backgroundColor: dialogInput.color}}>Submit</button>
          <button className="custom-button" onClick={props.hideDialog} style={{backgroundColor: dialogInput.color}}>Close</button>
        </div>
      </div>
    </ClickAwayListener>
  );
}