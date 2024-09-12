import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Technologies from '../Technologies/Technologies';

const Home = () => {
    return (
        <div className='container mx-auto font-montserrat'>
            <Header></Header>
            <Banner></Banner>
            <Technologies></Technologies>
        </div>
    );
};

export default Home;