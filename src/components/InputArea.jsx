import React, { useState } from 'react';

export default function InputArea(props) {
  const [userInput, setUserInput] = useState({
    title: '',
    desc: '',
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

  function handlePin() {
    setIsPinned(!isPinned);
  }

  function expandArea() {
    setAreaIsClicked(true);
  }

  function closeArea() {
    setAreaIsClicked(false);
    setUserInput({
      title: '',
      desc: '',
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
      });
    }

    closeArea();
  }

  return (
    <div>
      <form className="input-box" autoComplete="off">
        <div>
          {areaIsClicked && <input onChange={handleInputChange} name="title" placeholder="Title" value={userInput.title} />}
          {areaIsClicked && <i className="fas fa-thumbtack pin-icon" onClick={handlePin} style={isPinned ? { color: '#fbbc04' } : null} />}
        </div>
        <textarea
          onClick={expandArea}
          onChange={handleInputChange}
          name="desc"
          placeholder="Take a note..."
          value={userInput.desc}
          style={areaIsClicked ? { fontSize: '1rem', fontFamily: 'Arial, sans-serif' } : null}
          rows={areaIsClicked ? '3' : '1'}
        />
        <div className="button-container">
          {areaIsClicked && <button onClick={submitNote} className="custom-button">Submit</button>}
          {areaIsClicked && <button onClick={closeArea} className="custom-button">Close</button>}
        </div>
      </form>
    </div>
  );
}
