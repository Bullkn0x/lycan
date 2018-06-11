import React, { Component } from 'react';
import logo from "../images/image.png"
class Welcome extends Component {
  render() {
    return (


<section id="welcome">
  <div className="container">
    <h2>Welcome To <span>Lycan</span></h2>
    <hr className="sep" />
    <p>Crypto Currency Trading Automated</p>
    <img className="img-responsive center-block wow fadeInUp" data-wow-delay=".3s" src={logo} alt="logo"/>
  </div>
</section>




    );
  }
}

export default Welcome;
