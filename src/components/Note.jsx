import React, { useState, useEffect } from 'react';
import NoteButtons from './NoteButtons';
import NoteDialog from './NoteDialog';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Pin from './Pin';

export default function Note(props) {
  const [noteColor, setNoteColor] = useState(props.note.color);
  const [showDialog, setShowDialog] = useState(false);
  const [isPinned, setIsPinned] = useState(props.isPinned);

  useEffect(() => {
    setNoteColor(props.note.color);
    setIsPinned(props.isPinned);
  }, [props.note.color, props.isPinned]);

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

  function handlePin(note) {
    props.onDelete(props.index);
    props.onPinnedAdd(note);
    setIsPinned((prev) => !prev);
  }

  return (
    <div>
      <div
        className='note-box'
        style={{ backgroundColor: noteColor }}
        onClick={handleClick}
      >
        <div className='note-title'>
          <TextareaAutosize
            style={{
              backgroundColor: noteColor,
              color:
                props.note.title === '' && props.note.desc === ''
                  ? '#828282'
                  : '#000',
            }}
            value={
              props.note.title === '' && props.note.desc === ''
                ? 'Empty Note'
                : props.note.title
            }
            maxRows={15}
            disabled
          />
          <div className='note-pin'>
            <Pin
              isPinned={isPinned}
              onClick={(event) => {
                event.stopPropagation();
                handlePin(props.note);
              }}
            />
          </div>
        </div>
        <div className='note-desc'>
          <TextareaAutosize
            style={{ backgroundColor: noteColor }}
            value={props.note.desc}
            maxRows={15}
            disabled
          />
        </div>
        <NoteButtons
          onDelete={deleteNote}
          color={noteColor}
          onColorChange={changeNoteColor}
        />
      </div>
      {showDialog && (
        <NoteDialog
          note={props.note}
          index={props.index}
          hideDialog={hideDialog}
          onResubmit={props.onResubmit}
          isPinned={isPinned}
          onPin={handlePin}
        />
      )}
    </div>
  );
}
