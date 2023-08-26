import React from "react"
import ClientItem from "./ClientItem"
import "./style.sass"
import { clientsData } from "../data"

export default function ClientList(){

    return(
        <ul className="client-list">
            <li className="client-list__item">
                <ClientItem />
            </li>
            <li className="client-list__item">
                <ClientItem />
            </li>
        </ul>
    )
}