import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function InputDesc(props) {
  return (
    <div className="input-desc">
      <TextareaAutosize
        onClick={props.onExpand}
        onChange={props.onChange}
        name="desc"
        placeholder="Take a note..."
        value={props.userInput.desc}
        style={props.areaIsClicked 
          ? { fontSize: '1rem', fontFamily: '"Arial", sans-serif', paddingTop: '0', backgroundColor: props.userInput.color} 
          : {backgroundColor: props.userInput.color}}
        minRows={props.areaIsClicked ? '3' : '1'}
      />
    </div>
  );
}