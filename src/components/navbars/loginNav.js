import React, {Component} from 'react';
import logo from "../../images/logo.png"
class LoginNav extends Component {


  render() {
    console.log("props in navbar", this.props.loggedInUserData);
    return (<nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <a className="navbar-brand" href="/"><img src={logo} style={{height:"70px",width:"auto"}} alt="" /> </a>
        </div>
        <div className="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
          <div className="col-md-8 col-xs-12 nav-wrap">
            <ul className="nav navbar-nav">

            </ul>
          </div>
          <div className="social-media hidden-sm hidden-xs">
            <ul className="nav navbar-nav">
              <li>
                <a href="/login">Sign In</a>
              </li>
              {/* <li>
                <a href="/signup">Sign Up</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>);
  }
}

export default LoginNav;
