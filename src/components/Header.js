import React, { useState, Fragment } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { IconButton, withStyles } from "@material-ui/core";

import arrow from "../img/arrow.svg";
import menu from "../img/menu.svg";
import About from "./About";

const MyIconButton = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}))(IconButton);

export default function Header() {
  const [state, setState] = useState(window.innerWidth);
  const [boolChange, setBoolChange] = useState(true);

  function delOverflow() {
    setBoolChange(true);
      document.body.style.overflow = "visible";
  }

  window.addEventListener("resize", () => {
    setState(window.innerWidth);
  });
  function openBurgerMenu() {
    if (boolChange) {
      document.body.style.overflow = "hidden";
      setBoolChange(false);
    } else {
      document.body.style.overflow = "visible";
     setBoolChange(true);
    }
  }
  if (state <= 730) {
    return (
      <Fragment>
        {boolChange ? (
          <header className="burger-header">
            <MyIconButton onClick={openBurgerMenu} className="myIconButton">
              <img src={menu} alt="menu icon" title="menu" />
            </MyIconButton>
            <div className="main-logo-burger">
              <p>PACHOTA PHOTOS</p>
              <a href="#about">
                <img className="click-about-icon" src={arrow} alt="arrow icon" title="arrow icon to slide" />
              </a>
            </div>
          </header>
        ) : (
          <header className="burger-container">
            <MyIconButton onClick={openBurgerMenu}>
              <img src={menu} alt="menu icon" title="menu" />
            </MyIconButton>
            <nav className="burger-navigation">
              <ul className="second-list">
                  <ListItem to='/home' text='Home' className="burger-nav-link" delOverflow={delOverflow}/>                
                  <ListItem to='/about' text='O mně' className="burger-nav-link" delOverflow={delOverflow}/>                
                  <ListItem to='/creation' text='Tvorba' className="burger-nav-link" delOverflow={delOverflow}/>                
                  <ListItem to='contact' text='Kontakt' className="burger-nav-link" delOverflow={delOverflow}/>                
              </ul>
            </nav>
          </header>
        )}
        <SwitchChange />
      </Fragment>
    );
  } else {
    return (
      <header className="main-header">
        <nav className="main-navigation">
          <ul>
            <ListItem to='home' text='Home'  className="main-nav-link"/>
          </ul>
          <ul className="second-list">
            <ListItem to='about' text='O mně' className="main-nav-link"/>
            <ListItem to='creation' text='Tvorba' className="main-nav-link"/>
            <ListItem to='contact' text='Kontakt' className="main-nav-link"/>
          </ul>
        </nav>
        <div className="main-logo">
          <p>PACHOTA PHOTOS</p>
          <a href="#about">
            <img className="click-about-icon" src={arrow} alt="arrow icon" title="arrow icon to slide"/>
          </a>
        </div>
        <SwitchChange />
      </header>
    );
  }
  
}
export function ListItem(props) {
  return(
    <li>
      <Link to={`/${props.to}`} className={props.className} onClick={props.delOverflow} >{props.text}</Link>
    </li>
  )
}
export function SwitchChange() {
  return  (
    <Switch>
        <Route path="/home"></Route>
        <Route path="/about" render={() => <About />}></Route>
        <Route path="/creation"></Route>
        <Route path="/contact"></Route>
      </Switch>
  )
}