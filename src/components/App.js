import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import MainMenu from './MainMenu'
import SignUpForm from './SignUpForm'
import Counters from './Counters'
import Employees from './Employees'
import Employee from './Employee'
import Students from './Students'
import Student from './Student'
import Groups from './Groups'
import Group from './Group'
import SmartCounter from './SmartCounter'

const App = () => (
  <Router>
    <Grid>
      <MainMenu/>

      <hr/>

      <Route exact path="/" component={SignUpForm}/>
      <Route exact path="/smart-counter" component={SmartCounter}/>
      <Route path="/counters" component={Counters}/>
      <Route exact path="/employees" component={Employees}/>
      <Route path="/employees/:employeeId" component={Employee}/>
      <Route exact path="/students" component={Students}/>
      <Route path="/students/:studentId" component={Student}/>
      <Route exact path="/groups" component={Groups}/>
      <Route path="/groups/:groupId" component={Group}/>
    </Grid>
  </Router>
)
export default App