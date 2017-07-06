import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css'
import App from './components/App'


ReactDOM.render(
  <App
    color="green"
    name="Super Zupa"
    author="Chuck Norris"
    mainMenuAppNamePrefix="<3"
  />,
  document.getElementById('root')
)