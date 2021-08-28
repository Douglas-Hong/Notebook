import React, { useState } from "react";
import Navbar from "./Navbar";
import InputArea from "./InputArea";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(noteIndex) {
    setNotes(notes.filter((note, index) => index !== noteIndex));
  }

  return (
    <div>
      <Navbar />
      <InputArea onAdd={addNote}/>
      <div className="notes-container">
        {notes.map((note, index) => <Note title={note.title} desc={note.desc} key={index} index={index} onDelete={deleteNote} />)}
      </div>
    </div>
  );
}

export default App;
