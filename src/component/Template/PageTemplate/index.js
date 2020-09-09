import React from 'react';
import Header from '../../Header';
import ContactSection from '../../ContactSection';
import Footer from '../../Footer';

export default function PageTemplate(props){
    return(
        <>
            <Header/>
            {props.children}
            <ContactSection/>
            <Footer/>
        </>
    );
}