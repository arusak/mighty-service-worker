<template>
  <div>
    <h1 class="mb-4 text-3xl font-bold">Data List</h1>
    <ul>
      <li
        v-for="item in dataList"
        :key="item.id"
        class="mb-2 flex rounded-lg bg-white p-4 shadow-md"
      >
        <span class="flex-1">{{ item.note }}</span>
        <span>
          <button @click="deleteNote(item.id)">Delete</button>
        </span>
      </li>
    </ul>
    <button class="mt-4 rounded bg-blue-500 px-4 py-2 text-white" @click="promptAddNote">
      Add New Note
    </button>
  </div>
</template>

<script lang="ts">
  import {computed, defineComponent, onMounted} from 'vue'
  import {useNotesStore} from '../stores/NotesStore.ts'

  export default defineComponent({
    setup() {
      const notesStore = useNotesStore()

      const dataList = computed(() => notesStore.getDataList)

      const fetchData = async () => {
        await notesStore.fetchData()
      }

      const addNote = async (noteText: string) => {
        await notesStore.addNote(noteText)
      }

      const deleteNote = async (id: string) => {
        await notesStore.deleteNote(id)
      }

      const promptAddNote = () => {
        const noteText = prompt('Enter the new note:')
        if (noteText) {
          addNote(noteText)
        }
      }

      onMounted(() => {
        fetchData()
      })

      return {
        dataList,
        promptAddNote,
        deleteNote,
      }
    },
  })
</script>
