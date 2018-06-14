import React, {Component} from 'react';
import Steven from "../images/steven.jpg"
import Rich from "../images/rich.jpg"
import Lester from "../images/lester.jpg"

class Team extends Component {
  render() {
    return (<section id="team">
      <div className="container">
        <h2>Our Team</h2>
        <hr className="sep"/>
        <p>Designers Behind This Work</p>
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          <div className="col-md-4">
            <div className="team">
              <img className="img-responsive_center-block" src={Steven} alt={1}/>
              <h4>Steven Forkosh</h4>
              <p>Chief Executive Officer</p>
              <div className="team-social-icons">
                <a href="https://www.linkedin.com/in/steven-forkosh-9ba1b753"><i className="fa fa-linkedin-square"/></a>
                <a href=""><i className="fa fa-envelope-square"/></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team">
              <img className="img-responsive_center-block" src={Rich} alt={2}/>
              <h4>Rich Duchin</h4>
              <p>Chief Technology Officer</p>
              <div className="team-social-icons">
                <a href="https://www.linkedin.com/in/richard-duchin-051082136"><i className="fa fa-linkedin-square"/></a>
                <a href=""><i className="fa fa-envelope-square"/></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team">
              <img className="img-responsive_center-block" src={Lester} alt={3}/>
              <h4>Lester Loor</h4>
              <p>Senior Developer</p>
              <div className="team-social-icons">
                <a href="https://www.linkedin.com/in/lester-loor-915466110"><i className="fa fa-linkedin-square"/></a>
                <a href=""><i className="fa fa-envelope-square"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

export default Team;
