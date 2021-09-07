import React, { useState } from 'react';
import Navbar from './Navbar';
import InputArea from './InputArea';
import Note from './Note';

export default function App() {
  checkLocalStorage();

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));
  const [pinnedNotes, setPinnedNotes] = useState(JSON.parse(localStorage.getItem("pinnedNotes")));
  const [triggerOpacity, setTriggerOpacity] = useState(false);

  function addNote(note) {
    setNotes((prev) => {
      let newNotes = [note, ...prev];
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return newNotes;
    });
  }

  function deleteNote(noteIndex) {
    setNotes((prev) => {
      let newNotes = prev.filter((note, index) => index !== noteIndex);
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return newNotes;
    });
  }

  function addPinnedNote(note) {
    setPinnedNotes((prev) => {
      let newNotes = [note, ...prev];
      localStorage.setItem("pinnedNotes", JSON.stringify(newNotes));
      return newNotes;
    });
  }

  function deletePinnedNote(noteIndex) {
    setPinnedNotes((prev) => {
      let newNotes = prev.filter((note, index) => index !== noteIndex);
      localStorage.setItem("pinnedNotes", JSON.stringify(newNotes));
      return newNotes;
    });
  }

  function handleColorChange(noteIndex, newColor) {
    setNotes((prev) => {
      prev[noteIndex].color = newColor;
      localStorage.setItem("notes", JSON.stringify(prev));
      return prev;
    });
  }

  function handlePinnedColorChange(noteIndex, newColor) {
    setPinnedNotes((prev) => {
      prev[noteIndex].color = newColor;
      localStorage.setItem("pinnedNotes", JSON.stringify(prev));
      return prev;
    });
  }

  function editNote(noteIndex, newNote) {
    setNotes((prev) => {
      prev[noteIndex] = newNote;
      localStorage.setItem("notes", JSON.stringify(prev));
      return prev;
    });
  }

  function editPinnedNote(noteIndex, newNote) {
    setPinnedNotes((prev) => {
      prev[noteIndex] = newNote;
      localStorage.setItem("pinnedNotes", JSON.stringify(prev));
      return prev;
    });
  }

  function handleOpacity() {
    setTriggerOpacity(!triggerOpacity);
  }

  return (
    <div>
      <div id="opacity-container" style={{display: triggerOpacity ? 'block' : 'none'}}></div>
      <Navbar />
      <div className="notebook-container">
        <InputArea onAdd={addNote} onPinnedAdd={addPinnedNote} />
        <div className="notes-container">
          {pinnedNotes.length > 0 && <h5 className="note-category">PINNED</h5>}
          {pinnedNotes.map((note, index) => {
            return (
              <Note 
                note={note}
                key={index}
                index={index}
                onDelete={deletePinnedNote}
                onColorChange={handlePinnedColorChange}
                onOpacityChange={handleOpacity}
                onResubmit={editPinnedNote}
              />
            );
          })}
          {pinnedNotes.length > 0 && notes.length > 0 && <h5 className="note-category">OTHERS</h5>}
          {notes.map((note, index) => {
            return (
              <Note 
                note={note}
                key={index}
                index={index}
                onDelete={deleteNote}
                onColorChange={handleColorChange}
                onOpacityChange={handleOpacity}
                onResubmit={editNote}
              />
            );
          })}
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
