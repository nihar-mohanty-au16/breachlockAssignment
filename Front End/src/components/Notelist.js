import React from "react";
import Note from "./Note";
import NoteAdd from "./NoteAdd";

function Notelist({ notes, handleNoteAdd, handleDeleteNote }) {
  return (
    <div className="noteList">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <NoteAdd handleNoteAdd={handleNoteAdd} />
    </div>
  );
}

export default Notelist;
