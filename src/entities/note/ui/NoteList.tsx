import React, { useEffect, useState } from "react";
import "./style.sass";
import NoteItem from "./NoteItem";
import { INote } from "../types";
import { loadNotesByClient } from "../api";

type NoteListProps = {
  clientId: number;
};

export default function NoteList({ clientId }: NoteListProps) {
  const [noteData, setNoteData] = useState<INote[]>([]);

  useEffect(() => {
    loadNotesByClient(clientId).then((notes) => setNoteData(notes));
  }, [clientId]);

  return (
    <ul className="note-list">
      {noteData.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}
