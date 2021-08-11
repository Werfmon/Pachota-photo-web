import React from 'react'
import { Route, Switch} from 'react-router-dom'
import About from './About'
import Contact from './Contact'


export default function SwitchChange() {
    return  (
      <Switch>
          <Route path="/about" render={() => <About />}></Route>
          <Route path="/creation"></Route>
          <Route path="/contact" render={() => <Contact/>}></Route>
          <Route path="/"></Route>
        </Switch>
    )
  }