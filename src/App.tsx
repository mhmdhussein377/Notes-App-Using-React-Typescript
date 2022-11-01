import React, { useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateList from "./components/CreateList";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {

  let [notes, setNotes] = useState<Note[]>([]);

  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App