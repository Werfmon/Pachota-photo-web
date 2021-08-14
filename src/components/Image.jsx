import React, { Fragment } from 'react'

export default function Image({link, description}) {
    
    return (
        <Fragment>
            <img src={link} alt={description} title={description} className='image-display'/>
            <p className='image-description'>{description}</p>
        </Fragment>
    )
}