import React from "react"
import EventItem from "./EventItem"
import "./style.sass"
export default function EventList(){
    console.log("События");

    return(
        <ul className="event-list">
            <EventItem />
            <EventItem />
        </ul>
    )
}