import React from 'react';

export default function Tooltip(props) {
  return (
    <div className='tooltip-container'>
      {props.content}
      <div className='tooltip-title' style={props.customStyle}>
        {props.title}
      </div>
    </div>
  );
}
