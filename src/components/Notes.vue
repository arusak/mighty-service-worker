<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Data List</h1>
    <ul>
      <li
        v-for="item in dataList"
        :key="item.id"
        class="mb-2 p-4 bg-white rounded-lg shadow-md flex"
      >
        <span class="flex-1">{{ item.note }}</span>
        <span>
          <button @click="() => deleteNote(item.id)">Delete</button>
        </span>
      </li>
    </ul>
    <button
      @click="promptAddNote"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Add New Note
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api, { Note } from "../api";

export default defineComponent({
  data() {
    return {
      dataList: [] as Note[],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await api.notes.getAllNotesRaw();

        if (!response.raw.ok) {
          throw new Error("Failed to fetch data");
        }

        this.dataList = await response.value();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async addNote(noteText: string) {
      try {
        const response = await api.notes.createNoteRaw({
          createNoteRequest: { note: noteText },
        });

        if (!response.raw.ok) {
          throw new Error("Failed to add note");
        }

        const newNote = await response.value();
        this.dataList.push(newNote);
      } catch (error) {
        console.error("Error adding note:", error);
      }
    },

    async deleteNote(id: string) {
      try {
        const response = await api.notes.deleteNoteRaw({ id });

        if (!response.raw.ok) {
          throw new Error("Failed to delete note");
        }

        let idx = this.dataList.findIndex((n) => n.id === id);
        this.dataList.splice(idx, 1);
      } catch (error) {
        console.error("Error deleting note:", error);
      }
    },

    promptAddNote() {
      const noteText = prompt("Enter the new note:");
      if (noteText) {
        this.addNote(noteText);
      }
    },
  },
});
</script>
