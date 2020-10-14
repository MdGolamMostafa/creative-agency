import React from 'react';
import BigClient from '../BigClient/BigClient';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import ProvideServices from '../ProvideServices/ProvideServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BigClient/>
            <ProvideServices/>
            <OurWorks/>
            <ClientFeedback/>
            <ContactUs/>
        </div>
    );
};

export default Home;