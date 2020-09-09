import React, { useEffect, useState} from 'react';

import { NavLink, Link } from 'react-router-dom'
import "./header.scss"
import route from '../../pages/route'

export default function Header(){

    const [mini, setMini] = useState(false);

    useEffect(()=>{
        function onScroll(ev){
            const pageOffset = window.pageYOffset;
            setMini(pageOffset > 100);
        }
        window.onscroll = onScroll;
    },[])

    return (
        <header className={"br-navbar " + (mini ? "br-navbar-mini" : "") }>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="images/logo.png" alt=""/></Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarBrainy" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarBrainy">
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
    )
}