import React, { useState } from 'react';
import Navbar from './Navbar';
import InputArea from './InputArea';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(noteIndex) {
    setNotes(notes.filter((note, index) => index !== noteIndex));
  }

  function addPinnedNote(note) {
    setPinnedNotes([...pinnedNotes, note]);
  }

  function deletePinnedNote(noteIndex) {
    setPinnedNotes(pinnedNotes.filter((note, index) => index !== noteIndex));
  }

  return (
    <div>
      <Navbar />
      <InputArea onAdd={addNote} onPinnedAdd={addPinnedNote} />
      <div className="notes-container">
        {pinnedNotes.length > 0 && <h5 className="note-category">PINNED</h5>}
        {pinnedNotes.map((note, index) => <Note title={note.title} desc={note.desc} key={index} index={index} onDelete={deletePinnedNote} />)}
        {pinnedNotes.length > 0 && notes.length > 0 && <h5 className="note-category">OTHERS</h5>}
        {notes.map((note, index) => <Note title={note.title} desc={note.desc} key={index} index={index} onDelete={deleteNote} />)}
      </div>
    </div>
  );
}

export default App;
