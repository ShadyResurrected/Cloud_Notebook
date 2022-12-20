import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5ODRjMmMzZGNkYjNmNWQyODU2NjlmIn0sImlhdCI6MTY3MTAwNjg0OH0.NgqgS07UTQ3Wa5u55Etj44MeY_j-4_5tMJTlh4QJpzU",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5ODRjMmMzZGNkYjNmNWQyODU2NjlmIn0sImlhdCI6MTY3MTAwNjg0OH0.NgqgS07UTQ3Wa5u55Etj44MeY_j-4_5tMJTlh4QJpzU",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

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
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5ODRjMmMzZGNkYjNmNWQyODU2NjlmIn0sImlhdCI6MTY3MTAwNjg0OH0.NgqgS07UTQ3Wa5u55Etj44MeY_j-4_5tMJTlh4QJpzU",
      },
    });
    const json = response.json();
    
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5ODRjMmMzZGNkYjNmNWQyODU2NjlmIn0sImlhdCI6MTY3MTAwNjg0OH0.NgqgS07UTQ3Wa5u55Etj44MeY_j-4_5tMJTlh4QJpzU",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }

    setNotes(newNotes);
  };
  return (
    // here the functions are being exported
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
