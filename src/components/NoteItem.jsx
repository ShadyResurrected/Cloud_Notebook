import React, { useContext } from "react";

import noteContext from "../context/notes/NoteContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }} className="my-3">
        <Card.Body>
          <div className="d-flex">
            <Card.Title>{note.title}</Card.Title>
            <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id)}}></i>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note)}}></i>
          </div>
          <Card.Text>{note.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
