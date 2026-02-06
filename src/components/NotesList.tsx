import type { Note } from '../types/Note';
import { NoteCard } from './NoteCard';

interface NotesListProps {
  notes: Note[];
  onRemove: (id: number) => void;
}

export const NotesList = ({ notes, onRemove }: NotesListProps) => {
  return (
    <div>
      {notes.map((note: Note) => (
        <NoteCard
          key={note.id}
          note={note}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};
