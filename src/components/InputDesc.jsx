import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function InputDesc(props) {
  return (
    <div className='input-desc'>
      <TextareaAutosize
        onClick={props.onExpand}
        onChange={props.onChange}
        name='desc'
        placeholder='Take a note...'
        value={props.userInput.desc}
        style={
          props.areaIsClicked
            ? {
                backgroundColor: props.userInput.color,
                fontFamily: "'Roboto', sans-serif",
                fontSize: '1rem',
                paddingTop: '0',
              }
            : { backgroundColor: props.userInput.color }
        }
        minRows={props.areaIsClicked ? 3 : 1}
        maxRows={20}
      />
    </div>
  );
}
