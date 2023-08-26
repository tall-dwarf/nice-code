import React from "react"
import IconSearch from "../../app/img/search.svg"
import IconSearchActive from "../../app/img/search-active.svg"
import IconFilter from "../../app/img/filter.svg"
import IconFilterActive from "../../app/img/filter-active.svg"
import IconAdd from "../../app/img/add.svg"
import IconAddActive from "../../app/img/add-active.svg"
import "./style.sass"

const iconsData = {
    search: {
        active: IconSearchActive,
        default: IconSearch
    },
    filter: {
        active: IconFilterActive,
        default: IconFilter
    },
    add: {
        active: IconAddActive,
        default: IconAdd
    },
}

type IconButtonProps = {
    icon: keyof typeof iconsData
}

export default function IconButton({ icon }: IconButtonProps){

    

    return(
        <div className="icon-button " role="button">
            <img className="icon-button__img" src={iconsData[icon].default} alt="Кнопка" />
            <img className="icon-button__img--active" src={iconsData[icon].active} alt="Кнопка" />
        </div>
    )
}