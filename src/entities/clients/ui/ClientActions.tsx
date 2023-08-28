import React from "react";

type ClientActionsProps = {
  isEdit: boolean,
  updateIsEdit: (newEdit: boolean) => void
  setAllClientEdit: (value: boolean) => void
}

export default function ClientActions({isEdit, updateIsEdit, setAllClientEdit}: ClientActionsProps) {

  return (
    <div className="client-actions">
      {isEdit ? (
        <div className="client-actions__active">
          <div className="client-actions__info">
            <input onClick={(event) => setAllClientEdit(event.currentTarget.checked)} className="custom-checkbox" type="checkbox" />
            <span className="client-actions__text">Все</span>
            <div className="client-actions__count client-actions__count--active">
              213
            </div>
          </div>
          <div className="client-actions__menu">
            <button className="client-actions__btn">Действия</button>
            <button onClick={() => updateIsEdit(false)} className="client-actions__btn">Отменить</button>
          </div>
        </div>
      ) : (
        <div className="client-actions__default">
          <div className="client-actions__count">213</div>
          <button onClick={() => updateIsEdit(true)} className="client-actions__btn">Выбрать</button>
        </div>
      )}
    </div>
  );
}
