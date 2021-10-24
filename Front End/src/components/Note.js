import React from "react";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <h6>{text}</h6>
      <div className="noteFooter">
        <small>{date}</small>
      </div>
      <button className="delButton" onClick={() => handleDeleteNote(id)}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
