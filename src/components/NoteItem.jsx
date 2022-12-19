import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }} className="my-3">
        <Card.Body>
          <div className="d-flex">
            <Card.Title>{note.title}</Card.Title>
            <i className="fa-solid fa-trash mx-2"></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
          </div>
          <Card.Text>{note.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
