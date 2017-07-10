import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainMenu from './MainMenu'
import SignUpForm from './SignUpForm'
import Counters from './Counters'
import Employees from './Employees'
import Employee from './Employee'
import Students from './Students'
import Groups from './Groups'

const BasicExample = () => (
  <Router>
    <div>
      <MainMenu/>

      <hr/>

      <Route exact path="/" component={SignUpForm}/>
      <Route path="/counters" component={Counters}/>
      <Route exact path="/employees" component={Employees}/>
      <Route path="/employees/:employeeId" component={Employee}/>
      <Route path="/students" component={Students}/>
      <Route path="/groups" component={Groups}/>
    </div>
  </Router>
)
export default BasicExample