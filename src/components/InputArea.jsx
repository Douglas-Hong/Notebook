import React, { useState } from 'react';
import InputTitle from './InputTitle';
import InputDesc from './InputDesc';
import InputButtons from './InputButtons';

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

  return (
    <div>
      <form className="input-box" autoComplete="off" style={{backgroundColor: userInput.color}}>
        {areaIsClicked && 
          <InputTitle 
            onChange={handleInputChange}
            onPin={handlePin}
            userInput={userInput}
            isPinned={isPinned}
          />}
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
    </div>
  );
}
