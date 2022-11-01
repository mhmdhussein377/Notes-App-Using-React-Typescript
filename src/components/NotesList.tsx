import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';

interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes, setNotes}) => {

    function handleDelete(id: string) {
        setNotes(notes.filter(note => note.id !== id))
    }

    let renderNotes = ():JSX.Element[] => {
        return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        })
    }

  return (
    <>
        <h2 className='mt-3'>Notes</h2>
        { renderNotes() }
    </>
  );
};

export default NotesList;
