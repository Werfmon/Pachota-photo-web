import React from 'react'
import arrow from "../img/arrow.svg";

export default function Logo( props ) {
    return (
        <div className={props.class} >
            <p>PACHOTA PHOTOS</p>
            <a href="#about">
                <img className="click-about-icon" src={arrow} alt="arrow icon" title="arrow icon to slide" />
            </a>
        </div>
    )
}
