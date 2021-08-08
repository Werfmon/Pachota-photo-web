import { Button, IconButton } from "@material-ui/core";
import React, { useState, Fragment } from "react";

export default function Header() {
  const [state, setState] = useState(window.innerWidth);
  const [bgStyle, setBgStyle] = useState([]);
  const [counter, setCounter] = useState(0);
  const [navDisplay, setNavDisplay] = useState("block");

  window.addEventListener("resize", () => {
    setState(window.innerWidth);
  });
  function openBurgerMenu() {
    if (counter % 2 === 0) {
    } else {
    }
    setCounter(counter + 1);
  }
  if (state <= 700) {
    return (
      <header className="burger-header">
        {counter % 2 === 0 ? (
          <Fragment>
            <img
              className="img-fotograf"
              id="burger_img_fotograf"
              src="https://images.unsplash.com/photo-1625492600712-84d1b02dc263?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt=""
            />
            <IconButton onClick={openBurgerMenu}>
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
            </IconButton>
          </Fragment>
        ) : (
          <div className='burger-container'>
            <IconButton onClick={openBurgerMenu}>
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
            </IconButton>
            <nav
              className="burger-navigation"
            >
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
          </div>
        )}
        
      </header>
    );
  } else {
    return (
      <header className="main-header">
        <img
          className="img-fotograf"
          src="https://images.unsplash.com/photo-1625492600712-84d1b02dc263?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt=""
        />
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
        </div>
      </header>
    );
  }
}
