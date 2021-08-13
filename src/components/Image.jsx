import React from 'react'

export default function Image(props) {
    return (
        <div className='image-part'>
            <img src={props.link} alt="image" title='image' className='image-display'/>
            <p className='image-description'>{props.description}</p>
        </div>
    )
}