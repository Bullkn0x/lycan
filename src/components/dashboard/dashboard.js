import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    console.log("props, dashboard",this.props.loggedInUserData);
    return (


      <div>
        Welcome {this.props.loggedInUserData.email}
        <br/>
        Welcome {this.props.loggedInUserData.emailVerified ? <span>Email Verified</span> : <span>Email needs verification</span>}
      </div>









    );
  }
}

export default Dashboard;
