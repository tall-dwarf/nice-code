import React, { useState } from "react"
import IconButton from '../../shared/IconButton/IconButton';
import "./style.sass"

type DropDownProps = {
    onBtnChangeClick: () => void
    onBtnDelClick: () => void
}

export default function DropDown({onBtnChangeClick, onBtnDelClick}: DropDownProps){
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    return(
        <div className="drop-down">
            <IconButton onClick={toggle} icon='ellipsis' />
            <ul className={"drop-down__list " + (isOpen && " drop-down__list--open")}>
                <li className="drop-down__item">
                    <button onClick={onBtnChangeClick} className="drop-down__btn">Изменить</button>
                </li>
                <li className="drop-down__item">
                    <button onClick={onBtnDelClick} className="drop-down__btn">Удалить</button>
                </li>
            </ul>
        </div>
    )
}