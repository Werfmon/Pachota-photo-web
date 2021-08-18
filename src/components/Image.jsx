import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

export default function Image({link, description}) { 
    return (
        <Fragment>
            <img src={link} alt={description} title={description} className='image-display'/>
            <p className='image-description'>{description}</p>
        </Fragment>
    )
}
Image.propTypes = {
    link: PropTypes.string.isRequired,
    description: PropTypes.string
}

