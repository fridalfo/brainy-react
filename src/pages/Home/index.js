
import React from 'react'
import "./style/home.scss"
import HeroBanner from './HeroBanner';
import OurClient from './OurClient';
import AboutSection from './AboutSection';
import PageTemplate from '../../component/Template/PageTemplate/index';
export default function HomePage(){


    return(
        <PageTemplate>
            <HeroBanner/> 
            <OurClient/>
            <AboutSection/>
        </PageTemplate>
    )
}