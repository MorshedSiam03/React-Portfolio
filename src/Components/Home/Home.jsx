import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Technologies from '../Technologies/Technologies';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='container mx-auto font-montserrat'>
            <Header></Header>
            <Banner></Banner>
            <Technologies></Technologies>
            <Projects></Projects>
            <Resume></Resume>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;