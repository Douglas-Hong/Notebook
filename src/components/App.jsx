import React, { useState } from 'react';
import Navbar from './Navbar';
import InputArea from './InputArea';
import Note from './Note';

function App() {
  checkLocalStorage();

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));
  const [pinnedNotes, setPinnedNotes] = useState(JSON.parse(localStorage.getItem("pinnedNotes")));

  function addNote(note) {
    setNotes([...notes, note]);
    addStorageNote("notes", note);
  }

  function deleteNote(noteIndex) {
    setNotes(notes.filter((note, index) => index !== noteIndex));
    deleteStorageNote("notes", noteIndex);
  }

  function addPinnedNote(note) {
    setPinnedNotes([...pinnedNotes, note]);
    addStorageNote("pinnedNotes", note);
  }

  function deletePinnedNote(noteIndex) {
    setPinnedNotes(pinnedNotes.filter((note, index) => index !== noteIndex));
    deleteStorageNote("pinnedNotes", noteIndex);
  }

  return (
    <div>
      <Navbar />
      <div className="notebook-container">
        <InputArea onAdd={addNote} onPinnedAdd={addPinnedNote} />
        <div className="notes-container">
          {pinnedNotes.length > 0 && <h5 className="note-category">PINNED</h5>}
          {pinnedNotes.map((note, index) => <Note title={note.title} desc={note.desc} key={index} index={index} onDelete={deletePinnedNote} />)}
          {pinnedNotes.length > 0 && notes.length > 0 && <h5 className="note-category">OTHERS</h5>}
          {notes.map((note, index) => <Note title={note.title} desc={note.desc} key={index} index={index} onDelete={deleteNote} />)}
        </div>
      </div>
    </div>
  );
}

function checkLocalStorage() {
  if (!localStorage.getItem("notes")) {
    localStorage.setItem("notes", JSON.stringify([]));
  }
  if (!localStorage.getItem("pinnedNotes")) {
    localStorage.setItem("pinnedNotes", JSON.stringify([]));
  }
}

function addStorageNote(key, note) {
  let oldNotes = JSON.parse(localStorage.getItem(key));
  oldNotes.push(note);
  localStorage.setItem(key, JSON.stringify(oldNotes));
}

function deleteStorageNote(key, noteIndex) {
  let oldNotes = JSON.parse(localStorage.getItem(key));
  localStorage.setItem(key, JSON.stringify(oldNotes.filter((note, index) => index !== noteIndex)));
}

export default App;