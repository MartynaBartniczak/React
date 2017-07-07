import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MainMenu from './MainMenu'
import SignUpForm from './SignUpForm'
import Counters from './Counters'
import Employees from './Employees'

const BasicExample = () => (
  <Router>
    <div>
      <MainMenu/>

      <hr/>

      <Route exact path="/" component={SignUpForm}/>
      <Route path="/counters" component={Counters}/>
      <Route path="/employees" component={Employees}/>
    </div>
  </Router>
)
export default BasicExample