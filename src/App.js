import React, {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css'
import './index.scss'


import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import route from './pages/route'
import NotFound from './error'


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splashScreen = document.getElementById("splash-screen");

    function loadingOn(){
      splashScreen.classList.remove("hidden");
      setLoading(true)
    }

    function loadingOff(){
      splashScreen.classList.add("hidden");
      setLoading(false)
    }

    loadingOff();

    window.onloadstart = loadingOn();
    window.onload = loadingOff();

    
  },[loading])

  if(loading) return null

  return (
    <Router>
        <Switch>
        {
            route.map(x=><Route key={x.name} exact={x.exact} path={x.to} component={x.component} />)
        }
          <Route component={NotFound} />
        </Switch>
    </Router>
  )
}

export default App;
