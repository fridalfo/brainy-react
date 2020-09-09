import  React  from 'react';

import './footer.scss'

export default function Footer(){
    return (
        <footer className="site-footer">
			<div className="container">
                <div className="float-left">
                    &copy; <a href="https://www.brainy.id">Brainy Kreatif Digital</a> {new Date().getFullYear()}.
                </div>

                <div className="float-right">
                    <i className="fa fa-instagram" style={{fontSize:"20px"}} aria-hidden="true"></i>&nbsp;&nbsp;<a href="https://www.instagram.com/brainy.id">@brainy.id</a>
                </div>
            </div>
		</footer>
    )
}