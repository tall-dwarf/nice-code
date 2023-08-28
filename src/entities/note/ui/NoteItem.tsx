import React from "react";
import "./style.sass";
import DropDown from "../../../shared/DropDown/DropDown";
import { INote } from "../types";

type NoteItemProps = {
  note: INote;
};

export default function NoteItem({ note }: NoteItemProps) {
  const test = () => {};

  return (
    <li className="note-item">
      <div className="note-item__content">
        <p className="note-item__text">
          <span className="note-item__date">{note.date}</span>
          &#160; {note.text}
        </p>
        {note.photo && (
          <img className="note-item__img" src={note.photo} alt="Фотография" />
        )}
      </div>
      <div className="note-item__menu">
        <DropDown onBtnChangeClick={test} onBtnDelClick={test} />
      </div>
    </li>
  );
}
