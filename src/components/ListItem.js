import React from 'react'
import { Link } from 'react-router-dom'


export default function ListItem(props) {
    return (
        <li>
            <Link to={`/${props.to}`} className={props.className} onClick={props.delOverflow} >{props.text}</Link>
        </li>
    )
}