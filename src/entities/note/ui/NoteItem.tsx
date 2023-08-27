import React from "react";
import IconButton from "../../../shared/IconButton/IconButton";
import "./style.sass";
import DropDown from "../../../shared/DropDown/DropDown";
export default function NoteItem() {
  const test = () => {};

  return (
    <li className="note-item">
      <div className="note-item__content">
        <p className="note-item__text">
          <span className="note-item__date">20.12.2019</span>
          &#160; Физические упражнения способствуют активизации мышечных
          сокращений, кровотока в тканях, снимают отечность, повышают
          энергетические возможности мышц. Улучшенное питание мышечной ткани
          ускоряет замещение различных посттравматических дефектов в самих
          мышцах, костной ткани, связках и сухожилиях.
        </p>
        <img className="note-item__img" src="/public/note/1.jpg" alt="Фотография" />
      </div>
      <div className="note-item__menu">
        <DropDown onBtnChangeClick={test} onBtnDelClick={test} />
      </div>
    </li>
  );
}
