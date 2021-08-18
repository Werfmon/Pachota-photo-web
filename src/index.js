import React, { Fragment }from 'react'
import ReactDOM from 'react-dom'

import Favicon from 'react-favicon'

import App from './App.jsx'

import favicon from './img/camera.svg'

import './style/style.css'

ReactDOM.render((
    <Fragment>
        <App />
        <Favicon url={favicon} />
    </Fragment>
), document.getElementById('root'))