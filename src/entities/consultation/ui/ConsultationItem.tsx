import React from "react"
import IconButton from "../../../shared/IconButton/IconButton"
import "./style.sass"
export default function ConsultationItem() {


    const onConsultationClick = () => {

    }

    return(
        <li className="consultation-item">
            <span className="consultation-item__warn">Не подтверждена</span>
            <IconButton icon={"frends"} onClick={onConsultationClick} />
            <div className="consultation-item__info">
                <h4 className="consultation-item__title">Online консультация</h4>
                <h5 className="consultation-item__date">15.01.2019, 12:30-13:00</h5>
            </div>
        </li>
    )
}