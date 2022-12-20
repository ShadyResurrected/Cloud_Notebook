import React, { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <Form>
          <Form.Group className="mb-3" id="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              placeholder="Enter email"
              onChange={onChange}
              required
              minLength={5}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="description">
            <Form.Label>Decription</Form.Label>
            <Form.Control
              type="text"
              id="description"
              name="description"
              placeholder="description"
              onChange={onChange}
              required
              minLength={5}
            />
          </Form.Group>
          <Form.Group className="mb-3" id="tag">
            <Form.Label>Tag</Form.Label>
            <Form.Control
              type="text"
              id="tag"
              name="tag"
              placeholder="tag"
              onChange={onChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClick}>
            Add Note
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddNote;
