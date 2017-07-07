import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import SignUpForm from './SignUpForm'
import Counters from './Counters'
import Employees from './Employees'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Sign Up</Link></li>
        <li><Link to="/counters">Counters</Link></li>
        <li><Link to="/employees">Employees</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={SignUpForm}/>
      <Route path="/counters" component={Counters}/>
      <Route path="/employees" component={Employees}/>
    </div>
  </Router>
)
export default BasicExample