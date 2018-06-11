import React, { Component } from 'react';
import Navbar from "./navbar"
import logo from "../images/logo.png"
class Header extends Component {
  render() {
    
    return (

      <section className="main-header">
      <Navbar loggedInUserData={this.props.loggedInUserData}/>
        <div id="owl-hero" className="owl-carousel owl-theme">
          <div className="item">
            {/* <div className="caption"> */}
              <div id="parallax">
    <div className="layer" data-depth="0.6">
      <div className="some-space">
    <img alt="" className="imgLogo" src={logo} alt=""/>
     <p>Crypto Automated <br />Let us handle your trades</p>
      </div>
    </div>
    <div className="layer" data-depth="0.4">
      <div id="particles-js" className="particleDiv" />
    </div>

    </div>
            {/* </div> */}
          </div>
          {/* <div className="item" style={{backgroundImage: 'url(http://www.noventasclothing.com/wp-content/uploads/2018/03/home_hiphop_slider_slide1_bg.jpg)'}}>
            <div className="caption">
              <h6>Branding / Design / Creativty</h6>
              <h1>We Are <span>Rise</span></h1>
              <a className="btn btn-transparent" href="">Learn More</a><a className="btn btn-light" href="">Buy Now</a>
            </div>
          </div>

          <div className="item" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/172203/banner3.jpg)'}}>
            <div className="caption">
              <h6>Branding / Design / Creativty</h6>
              <h1>Clean <span>Code</span></h1>
              <a className="btn btn-transparent" href="">Learn More</a><a className="btn btn-light" href="">Buy Now</a>
            </div>
          </div> */}
        </div>
      </section>



    );
  }
}

export default Header;
