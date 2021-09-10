import React from 'react';
import Palette from './Palette';

export default function InputButtons(props) {
  return (
    <div className="input-buttons">
      <Palette onColorChange={props.onColorChange} />
      <button onClick={props.submitNote} className="custom-button" style={{backgroundColor: props.userInput.color}}>Submit</button>
      <button onClick={props.closeArea} className="custom-button" style={{backgroundColor: props.userInput.color}}>Close</button>
    </div>
  );
}