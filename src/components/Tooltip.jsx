import React from 'react';

export default function Tooltip(props) {
  return (
    <div className="tooltip-container">
      {props.content}
      <span className="tooltip-title" style={props.customStyle}>{props.title}</span>
    </div>
  );
}