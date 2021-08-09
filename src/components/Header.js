import React, { useState, Fragment } from "react";

import { Button, IconButton, withStyles } from "@material-ui/core";

import arrow from "../img/arrow.svg";
import menu from "../img/menu.svg";

const MyIconButton = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}))(IconButton);

export default function Header() {

  const [state, setState] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);

  window.addEventListener("resize", () => {
    setState(window.innerWidth);
  });
  function openBurgerMenu() {
    if(counter % 2 == 0) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "visible";
    }
    setTimeout(() => setCounter(counter + 1), 350);
  }
  if (state <= 700) {
    return (
      <Fragment>
        {counter % 2 === 0 ? (
          <header className="burger-header">
            <MyIconButton onClick={openBurgerMenu} className='myIconButton'>
              <img src={menu} alt="menu icon" title='menu' />
            </MyIconButton>
            <div className="main-logo-burger">
              <p>PACHOTA PHOTOS</p>
              <a href='#about'>
                <img className="click-about-icon" src={arrow} alt="arrow icon" title='arrow icon to slide' />
              </a>
            </div>
          </header>
        ) : (
          <header className="burger-container">
            <MyIconButton onClick={openBurgerMenu}>
              <img src={menu} alt="menu icon" title='menu' />
            </MyIconButton>
            <nav className="burger-navigation">
              <ul className="second-list">
                <li>
                  <Button className="burger-nav-link">Home</Button>
                </li>
                <li>
                  <Button href='#about' className="burger-nav-link">O mně</Button>
                </li>
                <li>
                  <Button className="burger-nav-link">Tvorba</Button>
                </li>
                <li>
                  <Button className="burger-nav-link">Kontakt</Button>
                </li>
              </ul>
            </nav>
          </header>
        )}
      </Fragment>
    );
  } else {
    return (
      <header className="main-header">
        <nav className="main-navigation">
          <ul>
            <li>
              <Button className="main-nav-link">Home</Button>
            </li>
          </ul>
          <ul className="second-list">
            <li>
              <Button href='#about' className="main-nav-link">O mně</Button>
            </li>
            <li>
              <Button className="main-nav-link">Tvorba</Button>
            </li>
            <li>
              <Button className="main-nav-link">Kontakt</Button>
            </li>
          </ul>
        </nav>
        <div className="main-logo">
          <p>PACHOTA PHOTOS</p>
          <a href='#about'>
            <img className="click-about-icon" src={arrow} alt="arrow icon" title='arrow icon to slide' />
          </a>
        </div>
      </header>

    );
  }
}
