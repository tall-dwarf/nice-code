import React from "react"
import DropDown from "../../../shared/DropDown/DropDown"
export default function ClientProfile(){
    
    const onBtnChangeClick = () => {

    }

    const onBtnDelClick = () => {

    }

    return(
        <div className="client-profile">
            <div className="client-profile__photo">
                <img src="/public/clients/1.png" alt="Фотография" />
            </div>
            <div className="client-profile__info">
                <h2 className="client-profile__name">Рожков Денис Петрович</h2>
                <h3 className="client-profile__age">30 лет, муж</h3>
            </div>
            <div className="client-profile__menu">
                <DropDown onBtnChangeClick={onBtnChangeClick} onBtnDelClick={onBtnDelClick} />
            </div>
        </div>
    )
}