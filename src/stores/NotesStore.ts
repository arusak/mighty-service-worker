import { defineStore } from 'pinia';
import { Note } from 'api';
import notesService from 'services/NotesService';

export const useNotesStore = defineStore('notes', {
    state: () => ({
        dataList: [] as Note[],
    }),
    actions: {
        async fetchData() {
            try {
                this.dataList = await notesService.getAllNotes();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async addNote(noteText: string) {
            try {
                const newNote = await notesService.createNote(noteText);
                this.dataList.push(newNote);
            } catch (error) {
                console.error('Error adding note:', error);
            }
        },
        async deleteNote(id: string) {
            try {
                await notesService.deleteNote(id);
                this.dataList = this.dataList.filter(note => note.id !== id);
            } catch (error) {
                console.error('Error deleting note:', error);
            }
        },
    },
    getters: {
        getDataList: (state) => state.dataList,
    },
});
