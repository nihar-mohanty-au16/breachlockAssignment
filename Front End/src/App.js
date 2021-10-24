// import Note from "./components/Note";
import Notelist from "./components/Notelist";
import React, { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "Write note here",
    //   date: "24/10/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "Write note here",
    //   date: "24/10/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "Write note here",
    //   date: "24/10/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "Here note will be rendered",
    //   date: "24/10/2021"
    // },
  ]);

  const noteAdd = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>Breachlock Note App</h1>
      <Notelist
        notes={notes}
        handleNoteAdd={noteAdd}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
