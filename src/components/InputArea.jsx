import React, { useState } from 'react';
import Tooltip from './Tooltip';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Palette from './Palette';

export default function InputArea(props) {
  const [userInput, setUserInput] = useState({
    title: '',
    desc: '',
    color: '#fff'
  });
  const [isPinned, setIsPinned] = useState(false);
  const [areaIsClicked, setAreaIsClicked] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  function changeColor(color) {
    setUserInput({
      ...userInput,
      color: color
    })
  }

  function handlePin() {
    setIsPinned(!isPinned);
  }

  function expandArea() {
    setAreaIsClicked(true);
  }

  function closeArea() {
    setAreaIsClicked(false);
    setIsPinned(false);
    setUserInput({
      title: '',
      desc: '',
      color: '#fff'
    });
  }

  function submitNote(event) {
    event.preventDefault();

    if (userInput.title !== '' || userInput.desc !== '') {
      if (isPinned) {
        props.onPinnedAdd(userInput);
        setIsPinned(false);
      } else {
        props.onAdd(userInput);
      }

      setUserInput({
        title: '',
        desc: '',
        color: '#fff'
      });
    }

    closeArea();
  }

  // TODO:
  // Change color of pin icon
  // Use flexbox better for input-title?

  return (
    <div>
      <form className="input-box" autoComplete="off" style={{backgroundColor: userInput.color}}>
        {areaIsClicked &&
          <div>
            <span className="input-title">
              <TextareaAutosize
                onChange={handleInputChange}
                name="title"
                placeholder="Title"
                value={userInput.title}
                style={{backgroundColor: userInput.color}}
              />
            </span>
            <Tooltip 
              title={isPinned ? 'Unpin note' : 'Pin note'} 
              content={<i className="fas fa-thumbtack pin-icon" onClick={handlePin} style={isPinned ? { color: '#fbbc04' } : null} />}>
            </Tooltip>
          </div>
        }
        <div className="input-desc">
          <TextareaAutosize
            onClick={expandArea}
            onChange={handleInputChange}
            name="desc"
            placeholder="Take a note..."
            value={userInput.desc}
            style={areaIsClicked ? { fontSize: '1rem', fontFamily: '"Arial", sans-serif', backgroundColor: userInput.color} : {backgroundColor: userInput.color}}
            minRows={areaIsClicked ? '3' : '1'}
          />
        </div>
        {areaIsClicked && 
          <div className="input-buttons">
            <Palette onColorChange={changeColor}/>
            <button onClick={submitNote} className="custom-button" style={{backgroundColor: userInput.color}}>Submit</button>
            <button onClick={closeArea} className="custom-button" style={{backgroundColor: userInput.color}}>Close</button>
          </div>
        }
      </form>
    </div>
  );
}
