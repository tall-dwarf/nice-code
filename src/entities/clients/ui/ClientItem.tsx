import React from "react"
import "./style.sass"
export default function ClientItem(){
    
    return(
        <div className="client-item client-item--active">
            <div className="client-item__primary"></div>
            <img className="client-item__photo" src="/public/clients/1.png" alt="Фотография" />
            <h4 className="client-item__name">Рожков Денис Петрович</h4>
            <img className="client-item__warning" src="/public/icons/warning.svg" alt="Ошибка" />
            <img className="client-item__telegram" src="/public/icons/telegram.svg" alt="Телеграм" />
        </div>
    )
}