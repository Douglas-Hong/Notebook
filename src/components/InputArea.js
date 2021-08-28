import React, { useState } from "react";

export default function InputArea(props) {
  const [userInput, setUserInput] = useState({
    "title": "",
    "desc": ""
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setUserInput({
      ...userInput,
      [name]: value
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(userInput);
    setUserInput({
      "title": "",
      "desc": ""
    })
  }

  return (
    <div>
      <form className="input-box" autoComplete="off">
        <input onChange={handleChange} name="title" placeholder="Title" value={userInput.title} />
        <textarea onChange={handleChange} name="desc" placeholder="Description" value={userInput.desc} />
        <button onClick={submitNote} className="custom-button submit-button">Submit</button>
      </form>
    </div>
  );
}