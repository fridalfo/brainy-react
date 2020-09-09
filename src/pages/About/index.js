import React from 'react'           
import PageTemplate from '../../component/Template/PageTemplate';
import './style/about.scss'
import ReactWOW from 'react-wow';

function AboutPage(){
    return (
        <PageTemplate>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ReactWOW animation="bounceInLeft">
                                    <img className="about-image-desktop img-responsive " alt="" src="images/about-illustration.png"/>
                            </ReactWOW>
                            
                            <ReactWOW animation="bounceInDown">
                                <img className="about-image-mobile img-responsive" alt="" src="images/about-illustration-m.png"/>
                            </ReactWOW>
                        </div>
                        <div className="col-md-6">
                            <ReactWOW animation="bounceInRight">
                                <img className="about-image-desktop about-image-splatter img-responsive" alt="" src="images/about-splatter.png"/>
                            </ReactWOW>
                            <h2 className="about-title">About Us</h2>
                            <h1 className="about-tagline">Kami Senang<br/>Membantu Anda</h1>
                            <p className="about-text">
                                Brainy adalah tim yang akan membantu Anda untuk segala kegiatan bisnis Anda di dunia digital.<br/>Kami bergerak di bidang jasa konsultasi dan implementasi solusi digital. Kami menggabungkan unsur kreatifitas dan kecerdasan teknologi untuk membantu Anda mengembangkan nilai bisnis Anda. 
                                <br/><br/>
                                <strong>Be Creative, Be Brainy.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PageTemplate>
    )
}

export default AboutPage;