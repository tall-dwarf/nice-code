import React from "react"
import ConsultationItem from "./ConsultationItem"
import "./style.sass"

export default function ConsultationList(){

    return(
        <ul className="consultation-list">
            <ConsultationItem />
            <ConsultationItem />
        </ul>
    )
}