import React, { useState } from 'react'
import menu from './../../img/menu2.svg'
import AddCategory from './AddCategory.jsx'
import DeleteCategory from './DeleteCategory.jsx'
import Feedback from './Feedback'
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom'

function checkToken(component) {
    return localStorage.getItem('token') && component;
}
function removeToken() {
    localStorage.removeItem('token');
    window.location.reload();
}
export default function AdminChanges() {
    const [state, setState] = useState(true);
    
    const {path, url} = useRouteMatch();
    
    function navOpen() {
        let nav_class = document.getElementById('nav_admin_id');
        nav_class.classList.toggle('admin-change-js'); 
        if(state) {
            setState(false)
            document.getElementById('nav_admin_id').style.display = "none"
        }
        else{
            setState(true)
            document.getElementById('nav_admin_id').style.display = "block"
        }
    }
    return (
        <div className='admin-bg'>
            <nav id='nav_admin_id' className='admin-change-js-none'>
                <ul className='admin-list'>
                    <li><NavLink to={`${url}/add-category`}>Přidat kategorie</NavLink></li>
                    <li><NavLink to={`${url}/remove-category`}>Odebrat kategorie</NavLink></li>
                    <li><NavLink to={`${url}/feedback`}>Feedback</NavLink></li>
                    <li onClick={removeToken}>Odhlásit se</li>
                </ul>
            </nav>
            <button onClick={navOpen} id='admin_nav'><img src={menu} alt="menu" title='menu' /></button>
            <header className='admin-logged-header'>
                <h1>Admin panel</h1>
            </header>
            <main>
                <Switch>
                    <Route path={`${path}/add-category`} render={() => checkToken(<AddCategory  />)} />
                    <Route path={`${path}/remove-category`} render={() => checkToken(<DeleteCategory />)} />
                    <Route path={`${path}/feedback`}  render={() => checkToken(<Feedback />)}/>
                </Switch>
            </main>
        </div>
    )
}
