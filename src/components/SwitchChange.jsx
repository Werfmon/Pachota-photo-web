import React from 'react'
import { Route, Switch} from 'react-router-dom'

import About from './About.jsx'
import Contact from './Contact.jsx'
import Creation from './Creation.jsx'


export default function SwitchChange() {
    return  (
      <Switch>
          <Route path="/creation" render={() => <Creation />}></Route>
          <Route path="/contact" render={() => <Contact/>}></Route>
          <Route path="/" render={() => <About />}></Route>
      </Switch>
    )
  }