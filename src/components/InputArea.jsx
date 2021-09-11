import React, { useState } from 'react';
import InputTitle from './InputTitle';
import InputDesc from './InputDesc';
import InputButtons from './InputButtons';
import getDate from '../getDate';

export default function InputArea(props) {
  const [userInput, setUserInput] = useState({
    title: '',
    desc: '',
    color: '#fff'
  });
  const [isPinned, setIsPinned] = useState(false);
  const [areaIsClicked, setAreaIsClicked] = useState(false);

  function handleInputChange(event) {
    const {name, value} = event.target;

    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handlePin() {
    setIsPinned((prev) => !prev);
  }

  function expandArea() {
    setAreaIsClicked(true);
  }

  function changeColor(color) {
    setUserInput((prev) => {
      return {
        ...prev,
        color: color
      };
    });
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
      const timestampedInput = {
        ...userInput,
        date: getDate()
      }

      if (isPinned) {
        props.onPinnedAdd(timestampedInput);
        setIsPinned(false);
      } else {
        props.onAdd(timestampedInput);
      }

      setUserInput({
        title: '',
        desc: '',
        color: '#fff'
      });
    }

    closeArea();
  }

  return (
    <form className="input-box" autoComplete="off" style={{backgroundColor: userInput.color}}>
      {areaIsClicked && 
        <InputTitle 
          onChange={handleInputChange}
          onPin={handlePin}
          userInput={userInput}
          isPinned={isPinned}
        />
      }
      <InputDesc
        onExpand={expandArea}
        onChange={handleInputChange}
        userInput={userInput}
        areaIsClicked={areaIsClicked}
      />
      {areaIsClicked && 
        <InputButtons 
          onColorChange={changeColor}
          submitNote={submitNote}
          closeArea={closeArea}
          userInput={userInput}
        />
      }
    </form>
  );
}
