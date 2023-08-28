import { noteData } from "./data"

export const loadNotesByClient = async (clientId: number) => {
    return noteData.filter(note => note.clientId === clientId)
}