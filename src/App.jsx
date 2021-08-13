import React, { Fragment, useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import BackButton from "./components/BackButton.jsx";
import Header from "./components/Header.jsx";
import LoginForm from "./components/Admin/LoginForm.jsx";

export const context = createContext([]);
const ContextProvider = context.Provider;


export default function App() {

  const [images, setImages] = useState([]);
     useEffect(() => {
                fetch('https://pachota-photo-backend.herokuapp.com/api/images', {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
             }
         })
         .then(res => res.json())
         .then(data => setImages(data))
         .catch(err => {
         })
     }, []);


  return (
    <ContextProvider value={images}>
      <Router>
          <Switch>
            <Route path='/admin' render={() => (
              <LoginForm />
              )}>
            </Route>
            <Route path='/' render={() => (
              <Fragment>
                <Header />
                <BackButton />
              </Fragment>
            )}></Route>
          </Switch>
      </Router>
    </ContextProvider>
  );
}
