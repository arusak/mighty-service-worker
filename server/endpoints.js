import {nanoid} from 'nanoid'
import {readNotes, writeNotes} from './persist.js'

export const endpoints = (app) => {
  // Endpoint to create a note
  app.post('/api/note', (req, res) => {
    const noteText = req.body.note
    if (!noteText) {
      return res.status(400).json({error: 'Note is required'})
    }
    const notes = readNotes()
    const note = {id: nanoid(), note: noteText, deleted: false}
    notes.push(note)
    writeNotes(notes)
    res.status(201).json(note)
  })

  // Endpoint to get all notes (excluding soft-deleted notes)
  app.get('/api/note', (req, res) => {
    const notes = readNotes().filter((note) => !note.deleted)
    res.json(notes)
  })

  // Endpoint to update a note
  app.put('/api/note/:id', (req, res) => {
    const noteId = req.params.id
    const newNoteText = req.body.note
    if (!newNoteText) {
      return res.status(400).json({error: 'Note is required'})
    }

    let notes = readNotes()
    const noteIndex = notes.findIndex((note) => note.id === noteId && !note.deleted)

    if (noteIndex === -1) {
      return res.status(404).json({error: 'Note not found'})
    }

    notes[noteIndex].note = newNoteText
    writeNotes(notes)
    res.json({message: 'Note updated', note: notes[noteIndex]})
  })

  // Endpoint to soft-delete a note
  app.delete('/api/note/:id', (req, res) => {
    const noteId = req.params.id

    let notes = readNotes()
    const noteIndex = notes.findIndex((note) => note.id === noteId)

    if (noteIndex === -1) {
      return res.status(404).json({error: 'Note not found'})
    }

    notes[noteIndex].deleted = true
    writeNotes(notes)
    res.json({message: 'Note deleted', note: notes[noteIndex]})
  })
}
