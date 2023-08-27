import React from "react"
import VideoItem from "./VideoItem"
export default function VideoList(){

    return(
        <ul className="video-list">
            <VideoItem />
            <VideoItem />
        </ul>
    )
}