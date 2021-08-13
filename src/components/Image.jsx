import React from 'react'

export default function Image({link, description}) {
    
    return (
        <div className='image-part'>
            <img src={link} alt={description} title={description} className='image-display'/>
            <p className='image-description'>{description}</p>
        </div>
    )
}