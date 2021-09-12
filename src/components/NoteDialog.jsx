import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Palette from './Palette';
import Pin from './Pin';
import getDate from '../getDate';

export default function NoteDialog(props) {
  const [dialogInput, setDialogInput] = useState(props.note);
  const [isPinned, setIsPinned] = useState(props.isPinned);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setDialogInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleDialogColor(color) {
    setDialogInput((prev) => {
      return {
        ...prev,
        color: color,
      };
    });
  }

  function resubmitNote() {
    props.hideDialog();
    props.onResubmit(props.index, {
      ...dialogInput,
      date: getDate(),
    });
    if (props.isPinned !== isPinned) {
      props.onPin(dialogInput);
    }
  }

  function handlePin() {
    setIsPinned((prev) => !prev);
  }

  return (
    <ClickAwayListener onClickAway={props.hideDialog}>
      <div
        className='note-dialog'
        style={{ backgroundColor: dialogInput.color }}
      >
        <div className='note-dialog-title'>
          <TextareaAutosize
            placeholder='Title'
            onChange={handleInputChange}
            name='title'
            value={dialogInput.title}
            style={{ backgroundColor: dialogInput.color }}
            maxRows={15}
          />
          <Pin isPinned={isPinned} onClick={handlePin} />
        </div>
        <div className='note-dialog-desc'>
          <TextareaAutosize
            placeholder='Take a note...'
            onChange={handleInputChange}
            name='desc'
            value={dialogInput.desc}
            style={{ backgroundColor: dialogInput.color }}
            minRows={3}
            maxRows={15}
          />
        </div>
        <p className='timestamp'>Edited {props.note.date}</p>
        <div className='input-buttons'>
          <Palette onColorChange={handleDialogColor} />
          <button
            className='custom-button'
            onClick={resubmitNote}
            style={{ backgroundColor: dialogInput.color }}
          >
            Submit
          </button>
          <button
            className='custom-button'
            onClick={props.hideDialog}
            style={{ backgroundColor: dialogInput.color }}
          >
            Close
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
}
