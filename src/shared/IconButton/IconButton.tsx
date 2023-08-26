import React from "react"
import IconSearch from "../../app/img/icons/search.svg"
import IconSearchActive from "../../app/img/icons/search-active.svg"
import IconFilter from "../../app/img/icons/filter.svg"
import IconFilterActive from "../../app/img/icons/filter-active.svg"
import IconAdd from "../../app/img/icons/add.svg"
import IconAddActive from "../../app/img/icons/add-active.svg"
import IconEllipsis from "../../app/img/icons/ellipsis.svg"
import IconEllipsisActive from "../../app/img/icons/ellipsis-active.svg"

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
    ellipsis: {
        active: IconEllipsisActive,
        default: IconEllipsis
    }
}

type IconButtonProps = {
    icon: keyof typeof iconsData,
    onClick: () => void
}

export default function IconButton({ icon, onClick }: IconButtonProps){

    

    return(
        <div onClick={onClick} className="icon-button " role="button">
            <img className="icon-button__img" src={iconsData[icon].default} alt="Кнопка" />
            <img className="icon-button__img--active" src={iconsData[icon].active} alt="Кнопка" />
        </div>
    )
}