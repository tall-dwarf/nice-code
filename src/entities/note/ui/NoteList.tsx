import React from "react";
import "./style.sass";
import NoteItem from "./NoTeItem";

export default function NoteList(){

    return(
        <ul className="note-list">
            <NoteItem />
            <NoteItem />
        </ul>
    )
}