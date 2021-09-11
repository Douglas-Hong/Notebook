import React from 'react';
import Tooltip from './Tooltip';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function InputTitle(props) {
  return (
    <div className="input-title">
      <TextareaAutosize
        onChange={props.onChange}
        name="title"
        placeholder="Title"
        value={props.userInput.title}
        style={{backgroundColor: props.userInput.color}}
        maxRows={20}
      />
      <Tooltip
        title={props.isPinned ? 'Unpin note' : 'Pin note'} 
        content={<i className="fas fa-thumbtack pin-icon" onClick={props.onPin} style={props.isPinned ? {color: '#000'} : {color: 'gray'}} />}
        customStyle={props.isPinned 
          ? {
            top: '35px',
            left: '-28px'
          } 
          : {
            top: '35px',
            left: '-18px'
          }
        }
      />
    </div>
  );
}