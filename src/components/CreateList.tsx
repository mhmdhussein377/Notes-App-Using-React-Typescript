import * as React from 'react';
import { Form, Button, Alert } from "react-bootstrap"
import { Note } from '../models/note.model';

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes ,setNotes}) => {
    let [error, setError] = React.useState<string>("")
    let title = React.useRef<HTMLInputElement | null>(null);
    let text = React.useRef<HTMLTextAreaElement | null>(null);
    let color = React.useRef<HTMLInputElement | null>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (title.current?.value === "" || text.current?.value === "") {
            return setError("All Fields are mandatory");
        }
            setError("");
            setNotes([
            ...notes,
            {
                id: Date.now().toString(),
                title: (title.current as HTMLInputElement).value,
                text: (text.current as HTMLTextAreaElement).value,
                color: (color.current as HTMLInputElement).value,
                date: new Date().toString(),
            },
            ]);

            (title.current as HTMLInputElement).value = "";
            (text.current as HTMLTextAreaElement).value = "";
        } 
    

  return (
    <>
      <h2>Create Notes</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title for the note"
            ref={title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your notes"
            as="textarea"
            rows={3}
            ref={text}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Note Color</Form.Label>
          <Form.Control
            type="color"
            placeholder="Enter your note color"
            id="colorInput"
            defaultValue="#dfdfdf"
            ref={color}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
