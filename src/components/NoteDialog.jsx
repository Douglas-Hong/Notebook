import React, {useState} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Palette from './Palette';

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
    props.onResubmit(props.index, dialogInput);
    handleClickAway();
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="note-dialog">
        <div className="input-title">
          <TextareaAutosize 
            placeholder="Title"
            onChange={handleInputChange}
            name="title"
            value={dialogInput.title}
          />
        </div>
        <div className="input-desc">
          <TextareaAutosize 
            placeholder="Take a note..."
            onChange={handleInputChange}
            style={{fontSize: '1rem', fontFamily: '"Arial", sans-serif'}}
            name="desc"
            value={dialogInput.desc}
            minRows={3}
          />
        </div>
        <div className="input-buttons">
          <Palette />
          <button className="custom-button" onClick={resubmitNote}>Submit</button>
          <button className="custom-button" onClick={handleClickAway}>Close</button>
        </div>
      </div>
    </ClickAwayListener>
  );
}