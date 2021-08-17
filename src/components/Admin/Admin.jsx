import React from 'react'
import getCookie from '../getCookiesFnc'
import AdminChanges from './AdminChanges'
import LoginForm from './LoginForm'


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
