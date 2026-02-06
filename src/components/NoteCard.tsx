import type { Note } from '../types/Note';

interface NoteCardProps {
  note: Note;
  onRemove: (id: number) => void;
}

export const NoteCard = ({ note, onRemove }: NoteCardProps) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: 10,
        marginBottom: 10,
        position: 'relative',
      }}
    >
      <button
        onClick={() => onRemove(note.id)}
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
        }}
      >
        ✖
      </button>

      {note.content}
    </div>
  );
};
