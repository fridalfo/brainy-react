import React from 'react';

import { NavLink } from 'react-router-dom'
import "./header.scss"
import route from '../../pages/route'

export default class Header extends React.Component{
    render(){
        return <header className="br-navbar">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img src="images/logo.png" alt="" className="img-responsive"/></NavLink>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            {
                                route.map(x=> <li key={x.name}  className="nav-item">
                                <NavLink exact={x.exact} to={x.to}  className="nav-link" activeClassName="active">{x.name}</NavLink>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    }
}