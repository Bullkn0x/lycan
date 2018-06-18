import React, { Component } from 'react';
import fire from "../../config/config";

class Dashboard extends Component {
  logout(){
    fire.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });
  }
  render() {
    console.log("props, dashboard",this.props.loggedInUserData);
    return (


      <div>
        Welcome {this.props.loggedInUserData.email}
        <br/>
        Welcome {this.props.loggedInUserData.emailVerified ? <span>Email Verified</span> : <span>Email needs verification</span>}
        <br/>
      <button onClick={this.logout.bind(this)}>Log Out</button>
      </div>









    );
  }
}

export default Dashboard;
