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
          <button @click="deleteNote(item.id)">Delete</button>
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
import {computed, defineComponent, onMounted} from 'vue';
import {useNotesStore} from "../stores/NotesStore.ts";

export default defineComponent({
  setup() {
    const notesStore = useNotesStore();

    const dataList = computed(() => notesStore.getDataList);

    const fetchData = async () => {
      await notesStore.fetchData();
    };

    const addNote = async (noteText: string) => {
      await notesStore.addNote(noteText);
    };

    const deleteNote = async (id: string) => {
      await notesStore.deleteNote(id);
    };

    const promptAddNote = () => {
      const noteText = prompt("Enter the new note:");
      if (noteText) {
        addNote(noteText);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      dataList,
      promptAddNote,
      deleteNote,
    };
  },
});
</script>
