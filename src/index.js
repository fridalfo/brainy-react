import React from 'react'
import ReactDOM from 'react-dom'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import './index.scss'
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import Pages from'./pages'
import NotFound from './error'


const routing = (
  <Router>
      <Switch>
        <Route path="/" component={Pages} />
        <Route component={NotFound} />
      </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))