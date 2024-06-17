import api, { Note } from "../api";

class NotesService {
    async getAllNotes(): Promise<Note[]> {
        try {
            const response = await api.notes.getAllNotesRaw();
            if (!response.raw.ok) {
                throw new Error("Failed to fetch data");
            }
            return await response.value();
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    async createNote(noteText: string): Promise<Note> {
        try {
            const response = await api.notes.createNoteRaw({
                createNoteRequest: { note: noteText },
            });
            if (!response.raw.ok) {
                throw new Error("Failed to add note");
            }
            return await response.value();
        } catch (error) {
            console.error("Error adding note:", error);
            throw error;
        }
    }

    async deleteNote(id: string): Promise<void> {
        try {
            const response = await api.notes.deleteNoteRaw({ id });
            if (!response.raw.ok) {
                throw new Error("Failed to delete note");
            }
        } catch (error) {
            console.error("Error deleting note:", error);
            throw error;
        }
    }
}

export default new NotesService();
