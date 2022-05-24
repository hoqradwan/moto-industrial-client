import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Parts></Parts>
         <Reviews></Reviews>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;