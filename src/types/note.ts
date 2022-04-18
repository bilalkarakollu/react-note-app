export interface Note {
    id: string;
    content: string;
    title: string;
    color: string;
}

export interface NotesState {
    notes: Note[];
    total:number;
    status: 'idle' | 'loading' | 'failed';
  }