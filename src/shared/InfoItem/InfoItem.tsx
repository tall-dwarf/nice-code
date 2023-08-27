import React from "react"
import "./style.sass"
import IconCameraBlue from "../../app/img/icons/camera-blue.svg"
import IconCalendarBlue from "../../app/img/icons/calendar-blue.svg"
import IconClockBlue from "../../app/img/icons/clock-blue.svg"

const icons = {
    camera: IconCameraBlue,
    calendar: IconCalendarBlue,
    clock: IconClockBlue
}

type InfoItemProps = {
    text: string,
    icon: keyof typeof icons
}

export default function InfoItem({ text, icon }: InfoItemProps){

    return(
        <div className="info-item">
            <img className="info-item__img" src={icons[icon]} alt="Иконка" />
            <span className="info-item__text">{text}</span>
        </div>
    )
}