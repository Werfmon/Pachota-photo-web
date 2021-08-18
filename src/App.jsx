import React, { Fragment, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PropTypes from 'prop-types'

import BackButton from "./components/BackButton.jsx";
import Header from "./components/Header.jsx";
import Admin from "./components/Admin/Admin.jsx";

export const context = createContext([]);
const ContextProvider = context.Provider;

export default function App() {
  function validateEmail(value) {
    let err;
    if(!value) {
        err = "Zadejte e-mail";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        err = "Neplatný e-mail";
    }
    return err;
}
  return (
    <ContextProvider value={validateEmail}>
      <Router>
        <Switch>
          <Route path="/admin" render={() => <Admin />}></Route>
          <Route
            path="/"
            render={() => (
              <Fragment>
                <Header />
                <BackButton />
              </Fragment>
            )}
          ></Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}
ContextProvider.propTypes = {
  value: PropTypes.func.isRequired
}