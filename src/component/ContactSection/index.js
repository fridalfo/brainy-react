import React from 'react'; 

import './contact.scss'

export default function ContactSection(){
    return (
        <section className="contact-section">
			<div className="container">
				<div className="contact-us-email">
					<div className="title">Contact Us</div>
					<div className="email">hello@brainy.id</div>
				</div>
				<div className="contact-us-wa">
					<img className="img-wa" src="images/icon-wa.png" alt="icon whatsapp"/>
					<div className="wa-number">0812 8620 1710</div>
				</div>
			</div>
		</section>
    )
}