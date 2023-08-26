import React, { useState } from "react"
import IconButton from "../../shared/IconButton/IconButton"
import "./style.sass"
type CustomInputProps = {
    onBtnSearchClick: (text: string) => void,
    onBtnFilterClick: () => void,
    onBtnAddClick: () => void
}

export default function CustomInput({onBtnSearchClick, onBtnFilterClick, onBtnAddClick}: CustomInputProps){
    const [inputState, setInputState] = useState("")

    return(
        <div className="custom-input">
            <IconButton onClick={() => onBtnSearchClick(inputState)} icon="search" />
            <input onChange={(event) => setInputState(event.currentTarget.value)} value={inputState} className="custom-input__input" type="text" />
            <IconButton onClick={onBtnFilterClick} icon="filter" />
            <IconButton onClick={onBtnAddClick} icon="add" />
        </div>
    )
}