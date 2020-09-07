import React from 'react'
import {
    Route,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'

import Header from '../component/Header/'

import route from "./route"


export default class Pages extends React.Component {
    render (){
        return <Router>
            <div>
                <Header/>
                <Switch>
                    {
                        route.map(x=><Route key={x.name} exact={x.exact} path={x.to} component={x.component} />)
                    }
                </Switch>
            </div>
        </Router>
    }
}