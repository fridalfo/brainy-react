import React from 'react';
import ReactWOW from 'react-wow';

export default function AboutSection(){

    const servicesItems = [
        {
            name : "Website Design",
            icon : "icon-website.png"
        },
        {
            name : "Custom System",
            icon : "icon-system.png"
        },
        {
            name : "Mobile App",
            icon : "icon-mobile.png"
        },
        {
            name : "Brand Design",
            icon : "icon-brand.png",
            extraClass : "offset-md-2" 
        },
        {
            name : "Digital Marketing",
            icon : "icon-digital.png",
            extraClass : "offset-md-0 offset-xs-3 " 
        },
    ]

    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <h1 className="about-title">Partner<br/>Solusi Digital Anda</h1>
                                <p className="about-text">Kami terbiasa membantu client kami dalam meningkatkan nilai bisnis mereka dengan solusi digital terbaik dari kami.</p>
                            </div>
                            <ReactWOW animation="bounceInUp" delay="0.8s">
                                <div className="col-md-6 ilustrasi-grow" style={{
                                    textAlign:"right"
                                }}>
                                    <img src="images/grow-illustration.png" alt="" className="img-responsive"/>
                                </div>
                            </ReactWOW>
                            
                        </div>
                        <h3 className="service-title mt-5">our services.</h3>
                        <div className="row row-service justify-content-center" >
                            {
                                servicesItems.map((x,i)=>
                                    <div key={i} className={"col-6 col-md-4 "} >
                                        <ReactWOW   animation="bounceInUp" delay={(0.08*i).toString()+"s"} >
                                                <div className="card">
                                                    <div className="item-service">
                                                        <img src={"images/"+x.icon} alt={x.name}/>
                                                        <span>{x.name}</span>
                                                    </div>
                                                </div>
                                        </ReactWOW>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    
    )
}
