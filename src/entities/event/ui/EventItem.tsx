import React from "react"
import InfoItem from "../../../shared/InfoItem/InfoItem"
import "./style.sass"

export default function EventItem(){

    return(
        <li className="event-item">
            <div className="event-item__logo">
                <img className="event-item__img" src="/public/events/1.jpg" alt="" />
            </div>
            <div className="event-item__content">
                <h3 className="event-item__name">Тяга резинки в шаге со сгибанием локтя под 90 градусов </h3>
                <div className="event-item__info">
                    <InfoItem icon={"camera"} text="Вебинар" />
                    <InfoItem icon={"calendar"} text="9 марта 2021" />
                    <InfoItem icon={"clock"} text="17:00" />
                </div>
            </div>
        </li>
    )
}