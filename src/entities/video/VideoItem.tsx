import React from "react"
import "./style.sass"
export default function VideoItem(){

    return(
        <li className="video-item">
            <div className="video-item__preview">
                <img src="/public/video/1.jpg" alt="Видео" />
            </div>
            <div className="video-item__content">
                <h4 className="video-item__name">Разминка для локтевого суставаРазминка для локтевого..</h4>
                <div className="video-item__info">
                    <h5 className="video-item__author">Астахова Е.В.</h5>
                    <h6 className="video-item__date">15.01.2019 - 22.01.2019</h6>
                </div>
            </div>
        </li>
    )
}