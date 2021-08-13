import React from 'react'
import { useContext} from 'react'
import {context} from '../App' 
export default function Creation() {
    const images = useContext(context)
    return <div>{images[0].link}</div>
}
