import React, { useState } from 'react'

import arrow from '../img/arrow2.svg'

export default function BackButton() {
    const [style, setStyle] = useState('none');
    
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
            setStyle('block')
        } else {
            setStyle('none')
        }
    })
    function scrollToTop() {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth',
            }
        )
    }
    return (
        <div className='back-button'>
            <img src={arrow} onClick={scrollToTop} style={{ display: style }} alt='button to go back' title='button to go back' />
        </div>
    )
}
