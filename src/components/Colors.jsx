import React from 'react';

export default function Colors(props) {
  const colors = ['#fff', '#f3948b', '#fbc117', '#fff580', '#d0ff98', '#aeffec',
    '#cff1f9', '#b4cffa', '#dab4fb', '#fdd3ea', '#e8cdae', '#eaecee'];

  function handleColorClick(color) {
    return function () {
      props.onColorChange(color);
    }
  }

  return (
    <span className="color-selection">
      {colors.map((color, index) => <div className="color-option" onClick={handleColorClick(color)} key={index} style={{backgroundColor: color}}></div>)}
    </span>
  );
}