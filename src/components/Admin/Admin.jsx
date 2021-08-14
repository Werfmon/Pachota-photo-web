import React from 'react'
import AdminChanges from './AdminChanges'
import LoginForm from './LoginForm'


export default function Admin() {
    if(!localStorage.getItem('token')){
        return (
            <div className='admin-anim'>
                <LoginForm />
            </div>
        )
    }
    return <AdminChanges />
}
