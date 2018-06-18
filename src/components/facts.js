import React, { Component } from 'react';



class Facts extends Component {
  render() {
    return (


      <section id="fun-facts">
  <div className="container">
    <h2>Project Milestones</h2>
    <hr className="light-sep" />
    <div className="row wow fadeInUp" data-wow-delay=".3s">
      <div className="col-lg-3">
        <span className="icon-happy" />
        <span className="number timer">367</span>
        <h4>Number of Users</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-trophy" />
        <span className="dollar">$</span>
        <span className="number timer">130</span>
        <span className= "units">M</span>
        <h4>Capital Raised</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-wine" />
        <span className="number timer">120</span>
        <span className="units"> DAYS</span>
        <h4>Beta Launch</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-documents" />
        <span className="number timer">5245</span>
        <h4>Lines Of Code</h4>
      </div>
    </div>
  </div>
</section>







    );
  }
}

export default Facts;
