import React from 'react'

import getCookie from '../getCookiesFnc'
import AdminChanges from './AdminChanges.jsx'
import LoginForm from './LoginForm.jsx'


export default function Admin() {
    if(!getCookie('token')){
        return (
            <div className='admin-anim'>
                <LoginForm />
            </div>
        )
    }
    return <AdminChanges />
}
