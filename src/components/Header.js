import React, { useState, Fragment } from "react";
import { IconButton, withStyles } from "@material-ui/core";

import menu from "../img/menu.svg";

import ListItem from './ListItem'
import SwitchChange from "./SwitchChange";
import Logo from './Logo'

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
      <div className="sec-body">

        {boolChange ? (
          <div>
            <header className="burger-header">
              <MyIconButton onClick={openBurgerMenu} className="myIconButton">
                <img src={menu} alt="menu icon" title="menu" />
              </MyIconButton>
              <Logo class='main-logo-burger' />
            </header>
            <SwitchChange />
            </div>
        ) : (
          <header className="burger-container">
            <MyIconButton onClick={openBurgerMenu}>
              <img src={menu} alt="menu icon" title="menu" />
            </MyIconButton>
            <nav className="burger-navigation">
              <ul className="second-list">
                  <ListItem to='' text='Home' class="burger-nav-link" delOverflow={delOverflow}/>                
                  <ListItem to='about' text='O mně' class="burger-nav-link" delOverflow={delOverflow}/>                
                  <ListItem to='creation' text='Tvorba' class="burger-nav-link" delOverflow={delOverflow}/>                
                  <ListItem to='contact' text='Kontakt' class="burger-nav-link" delOverflow={delOverflow}/>                
              </ul>
            </nav>
          </header>
        )}
        </div>
    );
  } else {
    return (
      <Fragment>
        <div className="sec-body">

      <header className="main-header">
        <nav className="main-navigation">
          <ul>
            <ListItem to='' text='Home'  class="main-nav-link"/>
          </ul>
          <ul className="second-list">
            <ListItem to='about' text='O mně' class="main-nav-link"/>
            <ListItem to='creation' text='Tvorba' class="main-nav-link"/>
            <ListItem to='contact' text='Kontakt' class="main-nav-link"/>
          </ul>
        </nav>
        <Logo class='main-logo'/>
      </header>
        </div>
        <SwitchChange />
      </Fragment>
    );
  }
}
