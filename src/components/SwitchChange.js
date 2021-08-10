import React from 'react'
import { Route, Switch} from 'react-router-dom'
import About from './About'


export default function SwitchChange() {
    return  (
      <Switch>
          <Route path="/home"></Route>
          <Route path="/about" render={() => <About />}></Route>
          <Route path="/creation"></Route>
          <Route path="/contact"></Route>
        </Switch>
    )
  }