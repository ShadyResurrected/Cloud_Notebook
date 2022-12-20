import React, { useContext, useEffect, useState, useRef } from "react";
import noteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Notes = () => {
  const context = useContext(noteContext);

  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    // this button updates the note
    setShow(false);
    editNote(note.id, note.etitle, note.edescription, note.etag);
  };

  const handleShow = () => setShow(true);

  const ref = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button
        className="d-none"
        variant="primary"
        onClick={handleShow}
        ref={ref}
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                id="etitle"
                name="etitle"
                placeholder="Enter title"
                value={note.etitle}
                onChange={onChange}
                required
                minLength={5}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="description">
              <Form.Label>Decription</Form.Label>
              <Form.Control
                type="text"
                id="edescription"
                name="edescription"
                placeholder="description"
                value={note.edescription}
                onChange={onChange}
                required
                minLength={5}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="tag">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                id="etag"
                name="etag"
                placeholder="tag"
                value={note.etag}
                onChange={onChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
