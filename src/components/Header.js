import React, { useState, Fragment } from "react";

import { Button, IconButton, withStyles } from "@material-ui/core";

import arrow from "../img/arrow.svg";

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
    setTimeout(() => setCounter(counter + 1), 350);
  }
  if (state <= 700) {
    return (
      <Fragment>
        {counter % 2 === 0 ? (
          <header className="burger-header">
            <MyIconButton onClick={openBurgerMenu} className='myIconButton'>
              <svg
                height="100px"
                viewBox="0 0 28 28"
                width="100px"
                id="header_burger_svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                  fill="#fff"
                />
                <path
                  d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                  fill="#fff"
                />
                <path
                  d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
                  fill="#fff"
                />
              </svg>
            </MyIconButton>
            <div className="main-logo-burger">
              <p>PACHOTA PHOTOS</p>
              <img className="click-about-icon" src={arrow} alt="arrow icon" />
            </div>
          </header>
        ) : (
          <header className="burger-container">
            <MyIconButton onClick={openBurgerMenu}>
              <svg
                height="100px"
                viewBox="0 0 28 28"
                width="100px"
                id="header-burger-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                  fill="#fff"
                />
                <path
                  d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                  fill="#fff"
                />
                <path
                  d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
                  fill="#fff"
                />
              </svg>
            </MyIconButton>
            <nav className="burger-navigation">
              <ul className="second-list">
                <li>
                  <Button className="burger-nav-link">Home</Button>
                </li>
                <li>
                  <Button className="burger-nav-link">O mně</Button>
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
              <Button className="main-nav-link">O mně</Button>
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
          <img className="click-about-icon" src={arrow} alt="arrow icon" />
        </div>
      </header>
      
    );
  }
}
