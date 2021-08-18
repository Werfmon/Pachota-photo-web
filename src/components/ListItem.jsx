import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'


export default function ListItem(props) {
    return (
        <li>
            <Link to={`/${props.to}`} className={props.class} onClick={props.delOverflow} >{props.text}</Link>
        </li>
    )
}
ListItem.propTypes = {
    to: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    delOverflow: PropTypes.func,
    text: PropTypes.string,
}