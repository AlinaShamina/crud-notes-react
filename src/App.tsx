import React from 'react';
import type { Note } from './types/Note';
import { NotesForm } from './components/NotesForm';
import { NotesList } from './components/NotesList';

const API_URL = 'http://localhost:7070/notes';

interface AppState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    notes: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(API_URL);
      const data: Note[] = await response.json();

      this.setState({ notes: data });
    } catch (e) {
      this.setState({ error: 'Ошибка загрузки' });
    } finally {
      this.setState({ loading: false });
    }
  };

  addNote = async (content: string) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 0,
        content,
      }),
    });

    this.loadNotes();
  };

  removeNote = async (id: number) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    this.loadNotes();
  };

  render() {
    const { notes, loading, error } = this.state;

    return (
      <div style={{ padding: 20, maxWidth: 600 }}>
        <h1>Заметки</h1>

        <button onClick={this.loadNotes}>🔄 Обновить</button>

        <NotesForm onAdd={this.addNote} />

        {loading && <p>Загрузка...</p>}
        {error && <p>{error}</p>}

        <NotesList notes={notes} onRemove={this.removeNote} />
      </div>
    );
  }
}

export default App;
