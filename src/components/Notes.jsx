import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
    <AddNote/>
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
      })}
    </div>
    </>
  );
};

export default Notes;
