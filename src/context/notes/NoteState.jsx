import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63999370e42d9babb393b46f",
      user: "63984c2c3dcdb3f5d285669f",
      title: "My Title",
      description: "Listening to music everyday is a good",
      tag: "personal",
      date: "2022-12-14T09:12:16.552Z",
      __v: 0,
    },
    {
      _id: "63999370e42d9babb393b461",
      user: "63984c2c3dcdb3f5d285669f",
      title: "My Title",
      description: "Listening to music everyday is a good",
      tag: "personal",
      date: "2022-12-14T09:12:16.552Z",
      __v: 0,
    },
    {
      _id: "63999370e42d9babb393b462",
      user: "63984c2c3dcdb3f5d285669f",
      title: "My Title",
      description: "Listening to music everyday is a good",
      tag: "personal",
      date: "2022-12-14T09:12:16.552Z",
      __v: 0,
    },
    {
      _id: "63999370e42d9babb393b463",
      user: "63984c2c3dcdb3f5d285669f",
      title: "My Title",
      description: "Listening to music everyday is a good",
      tag: "personal",
      date: "2022-12-14T09:12:16.552Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    console.log("Adding a new note")
    const note = {
      _id: "63999370e42d9babb393b469",
      user: "63984c2c3dcdb3f5d285669f",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-14T09:12:16.552Z",
      __v: 0,
    };
    setNotes(notes.concat(note)); // concat returns a new array
  };

  // Delete a Note
  const deleteNote = () => {};

  // Edit a Note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
