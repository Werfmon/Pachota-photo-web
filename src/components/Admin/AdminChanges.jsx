import React from 'react'
import menu from './img/menu2.svg'
import AddCategory from './addCategory/AddCategory.jsx'
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom'


function navOpen() {
    let nav_class = document.getElementById('nav_admin_id');
    nav_class.classList.toggle('admin-change-js'); 
}

function checkToken(component) {
    return localStorage.getItem('token') && component;
}
function removeToken() {
    localStorage.removeItem('token');
    window.location.reload();
}
export default function AdminChanges() {

    const {path, url} = useRouteMatch();

    return (
        <div className='admin-bg'>
            <nav id='nav_admin_id' className='admin-change-js-none'>
                <ul className='admin-list'>
                    <li><NavLink to={`${url}/add-category`}>Přidat kategorii</NavLink></li>
                    <li><NavLink to={`${url}/remove-category`}>Odebrat kategorii</NavLink></li>
                    <li><NavLink to={`${url}/change-Category`}>Změnit kategorii</NavLink></li> 
                    <li><NavLink to={`${url}/feedback`}>Feedback</NavLink></li>
                    <br />
                    <li onClick={removeToken}>Odhlásit se</li>
                </ul>
            </nav>

            <button onClick={navOpen} id='admin_nav'><img src={menu} alt="menu" title='menu' /></button>
            <header className='admin-logged-header'>
                <h1>Admin panel</h1>
            </header>
            <main>
                <Switch>
                    <Route path={`${path}/add-category`} render={() => checkToken(<AddCategory />)}></Route>
                    <Route path={`${path}/remove-category`}></Route>
                    <Route path={`${path}/change-Category`}></Route>
                    <Route path={`${path}/feedback`}></Route>
                </Switch>
            </main>
        </div>
    )
}
