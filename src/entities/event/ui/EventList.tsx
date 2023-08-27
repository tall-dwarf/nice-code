import React from "react"
import EventItem from "./EventItem"
import "./style.sass"
export default function EventList(){


    return(
        <ul className="event-list">
            <EventItem />
            <EventItem />
        </ul>
    )
}