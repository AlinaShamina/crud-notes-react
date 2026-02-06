import { useState } from 'react';

interface NotesFormProps {
  onAdd: (content: string) => void;
}

export const NotesForm = ({ onAdd }: NotesFormProps) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      alert('Заметка не может быть пустой');
      return;
    }

    onAdd(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
        style={{ width: '100%' }}
      />

      <button type="submit">Добавить</button>
    </form>
  );
};
