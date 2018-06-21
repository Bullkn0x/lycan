import React, { Component } from 'react';
import Header from './header.js';
import Welcome from './welcome.js';
import Services from './services.js';
import Portfolio from './portfolio.js';
import Work from './work.js';
import Facts from './facts.js';
import Team from './team.js';
import Testimonials from './testimonals.js';
import Contact from './contact.js';
import Footer from './footer.js';


import '../css/App.css';
import '../css/custom.css';

class Homepage extends Component {
  render() {

    return (
      <div>

      {/* Header============================================= */}
        <Header />
      {/* Welcome============================================= */}
        <Welcome/>
      {/* Services============================================= */}
        <Services/>
      {/* Portfolio============================================= */}
        <Portfolio/>
      {/* Work============================================= */}
        <Work/>
      {/* Facts============================================= */}
        <Facts/>
      {/* Team============================================= */}
        <Team/>
      {/* Testimonials============================================= */}
        <Testimonials/>
      {/* Contact============================================= */}
        <Contact/>
      {/* Map============================================= */}
        <div id="map"></div>
      {/* Footer============================================= */}
        <Footer/>

      </div>

    );
  }
}

export default Homepage;
