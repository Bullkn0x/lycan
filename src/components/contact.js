import React, { Component } from 'react';

class Facts extends Component {
  render() {
    return (


      <section id="contact">
  <div className="container">
    <h2>Contact</h2>
    <hr className="sep" />
    <p>Get In Touch</p>
    <div className="col-md-6 col-md-offset-3 wow fadeInUp" data-wow-delay=".3s">
      <form id="contactform" method="post" action="https://formspree.io/tech@theaterhouse.com">
        <div className="form-group">
          <input type="text" className="form-control" id="Name" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="Email" placeholder="Email" />
        </div>
        <div className="form-group">
          <textarea className="form-control" rows={3} placeholder="Message" defaultValue={""} />
        </div>
        <a href="" form="contactform" type="submit" className="btn-block"><button  className="btn-block" form="contactform" type="submit" id="contact-submit" data-submit="...Sending">Submit</button></a>

      </form>
    </div>
  </div>
</section>









    );
  }
}

export default Facts;
