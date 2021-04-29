import React from 'react';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Works from '../Works/Works';

import Footer from '../../Shared/Footer/Footer'
import Team from '../Team/Team';
import FeaturedService from '../FeaturedService/FeaturedService';
import Reason from '../Reason/Reason';
import About from '../About/About';

const Home = () => {
      return (
            <div>
                  <Header />
                  <Services />
                  <FeaturedService/>
                  <Works />
                  <About/>
                  <Reason/>
                  <Team />
                  <Reviews />
                  <Footer />
            </div>
      );
};

export default Home;