import React from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import About from '../components/about'
import Experience from '../components/experience'
import Service from '../components/service'
import Portofolio from '../components/portofolio'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Homescreen = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portofolio/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Homescreen;