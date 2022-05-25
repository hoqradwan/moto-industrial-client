import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Parts from './Parts';
import Reviews from './Reviews';
import Services from './Services';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Parts></Parts>
         <Services></Services>
         <Summary></Summary>
         <Reviews></Reviews>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;