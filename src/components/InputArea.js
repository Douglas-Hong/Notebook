import React, { useState } from "react";

export default function InputArea(props) {
  const [userInput, setUserInput] = useState({
    "title": "",
    "desc": ""
  })

  const [areaIsClicked, setAreaIsClicked] = useState(false);

  function expandArea() {
    setAreaIsClicked(true);
  }

  function closeArea() {
    setAreaIsClicked(false);
    setUserInput({
      "title": "",
      "desc": ""
    });
  }

  function handleChange(event) {
    const {name, value} = event.target;

    setUserInput({
      ...userInput,
      [name]: value
    });
  }

  function submitNote(event) {
    event.preventDefault();

    if (userInput.title !== "" || userInput.desc !== "") {
      props.onAdd(userInput);
      setUserInput({
        "title": "",
        "desc": ""
      });
    }
    
    closeArea();
  }

  return (
    <div>
      <form className="input-box" id="input-area-box" autoComplete="off">
        {areaIsClicked && <input onChange={handleChange} name="title" placeholder="Title" value={userInput.title} />}      
        <textarea onClick={expandArea} onChange={handleChange} name="desc" placeholder="Take a note..." value={userInput.desc} 
          style={areaIsClicked ? {fontSize: "0.85rem"} : {fontSize: "1.2rem"}}rows={areaIsClicked ? "3" : "1"} />
        <div className="button-container">
          {areaIsClicked && <button onClick={submitNote} className="custom-button">Submit</button>}
          {areaIsClicked && <button onClick={closeArea} className="custom-button">Close</button>}
        </div>
      </form>
    </div>
  );
}