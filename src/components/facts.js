import React, { Component } from 'react';

class Facts extends Component {
  render() {
    return (


      <section id="fun-facts">
  <div className="container">
    <h2>Some Fun Facts </h2>
    <hr className="light-sep" />
    <p>Fun Facts</p>
    <div className="row wow fadeInUp" data-wow-delay=".3s">
      <div className="col-lg-3">
        <span className="icon-happy" />
        <h2 className="number timer">367</h2>
        <h4>Happy Clients</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-trophy" />
        <h2 className="number timer">150</h2>
        <h4>Project Done</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-wine" />
        <h2 className="number timer">121</h2>
        <h4>Glass Of Wine</h4>
      </div>
      <div className="col-lg-3">
        <span className="icon-documents" />
        <h2 className="number timer">10000</h2>
        <h4>Lines Of Code</h4>
      </div>
    </div>
  </div>
</section>







    );
  }
}

export default Facts;
