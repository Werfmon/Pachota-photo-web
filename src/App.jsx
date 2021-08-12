import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import BackButton from "./components/BackButton.jsx";
import Header from "./components/Header.jsx";
import LoginForm from "./components/Admin/LoginForm.jsx";


export default function App() {
  return (
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
  );
}
