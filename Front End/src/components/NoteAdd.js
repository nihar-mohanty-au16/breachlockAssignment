import React, { useState } from "react";

function NoteAdd({ handleNoteAdd }) {
  const [noteText, setNoteText] = useState(" ");
  const charLimit = 100;

  const onChangeHandler = (event) => {
    // console.log(event.target.value);
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const SaveHandler = () => {
    if (noteText.trim().length > 0) {
      handleNoteAdd(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="newNote">
      <div className="divText">
        <textarea
          className
          value={noteText}
          placeholder="Please type here to add a note"
          onChange={onChangeHandler}
        ></textarea>
        <div className="noteFooter">
          <small>{charLimit - noteText.length} characters remaining</small>
        </div>
        <button className="save" onClick={SaveHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default NoteAdd;
