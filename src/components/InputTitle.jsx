import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Pin from './Pin';

export default function InputTitle(props) {
  return (
    <div className='input-title'>
      <TextareaAutosize
        onChange={props.onChange}
        name='title'
        placeholder='Title'
        value={props.userInput.title}
        style={{ backgroundColor: props.userInput.color }}
        maxRows={20}
      />
      <Pin isPinned={props.isPinned} onClick={props.onPin} />
    </div>
  );
}
