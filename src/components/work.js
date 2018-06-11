import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (


      <section id="work-process">
  <div className="container">
    <h2>Work Process</h2>
    <hr className="sep" />
    <p>What Happen In The Background</p>
    <div className="row wow fadeInUp" data-wow-delay=".3s">
      <div className="col-lg-3">
        <span className="icon-chat" />
        <h4>1.Discuss</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-circle-compass" />
        <h4>2.Sketch</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-browser" />
        <h4>3.Make</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-global" />
        <h4>4.Publish</h4>
      </div>
    </div>
  </div>
</section>






    );
  }
}

export default Welcome;
