import React, {Component} from 'react';
import fire from "../../config/config";
class SplashNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "user": {},
      loggedin: false,
      isLoading: false
      }
    }
logout(){
  fire.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
}
componentDidMount(){
  let self = this
  fire.auth().onAuthStateChanged(function(user) {
    if(user == null){
      self.setState({"user": {},  loggedin: false, isLoading:false});
    }else{
      self.setState({"user": user,  loggedin: true,isLoading:false});
    }

  })
}
  render() {
    // console.log("user in navbar", this.state.user);
    if(this.state.user === "{}"){
      // console.log("user not there");
    }else{
      // console.log("user there");
    }
    return (<nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          {/* <a className="navbar-brand" href=""><img src="http://www.noventasclothing.com/wp-content/uploads/2018/03/favicoblanco.png" alt="" /> </a> */}
        </div>
        <div className="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
          <div className="col-md-8 col-xs-12 nav-wrap">
            <ul className="nav navbar-nav">
              <li>
                <a href="/" className="page-scroll">Home</a>
              </li>
              <li>
                <a href="#services" className="page-scroll">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">Software</a>
              </li>
              <li>
                <a href="#team" className="page-scroll">About</a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">Contact</a>
              </li>
              {this.state.user === {} ?
              <li>
                <a href="/login">Sign In</a>
              </li>
              :
              null

              }


            </ul>
          </div>
          <div className="social-media hidden-sm hidden-xs">
            <ul className="nav navbar-nav">
              <li>
                <a href=""><i className="fa fa-facebook"/></a>
              </li>
              <li>
                <a href=""><i className="fa fa-twitter"/></a>
              </li>
              <li>
                <a href=""><i className="fa fa-send-o"/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>);
  }
}

export default SplashNavbar;
