import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Parts></Parts>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;