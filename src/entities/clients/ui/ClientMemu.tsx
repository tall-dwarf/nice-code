import React from "react"
import Radio from "../../../shared/Radio/Radio"
import IconButton from "../../../shared/IconButton/IconButton"

const radioData = [
    {
        id: 1,
        label: "Заметки"
    },
    {
        id: 2,
        label: "Консультации"
    },
    {
        id: 3,
        label: "Видео"
    },
    {
        id: 4,
        label: "Мероприятия"
    }

]

type ClientMemuProps = {
    activMenuId: number
    updateMenuId: (newId: number) => void
    onBtnAddClick: () => void
}

export default function ClientMemu({ activMenuId, updateMenuId, onBtnAddClick }: ClientMemuProps){

    
    return( 
        <div className="client-memu">
            <Radio activeItemId={activMenuId} onRadioClick={updateMenuId} radioItems={radioData} />
            <div className="client-memu__controlls">
                <span className="client-memu__controlls-text">Новая заметка</span>
                <IconButton onClick={onBtnAddClick} icon="add" />
            </div>
        </div>
    )
}