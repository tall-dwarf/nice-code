import React, { useEffect, useState } from "react"
import DropDown from "../../../shared/DropDown/DropDown"
import { useAppSelector } from "../../../shared/hooks/redux"
import { loadProfileData } from "../api"
import { IClientProfile } from "../types"

export default function ClientProfile(){
    const clientId = useAppSelector(state => state.client.activClientId)
    const [clientProfile, setClientProfile] = useState<null | IClientProfile>(null)

    useEffect(() => {
        loadProfileData(clientId).then(data => {
            if(data){
                setClientProfile(data)
            }
        })
    },[clientId])

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
                <h2 className="client-profile__name">{clientProfile?.name}</h2>
                <h3 className="client-profile__age">{clientProfile?.age} лет, {clientProfile?.gender}</h3>
            </div>
            <div className="client-profile__menu">
                <DropDown onBtnChangeClick={onBtnChangeClick} onBtnDelClick={onBtnDelClick} />
            </div>
        </div>
    )
}