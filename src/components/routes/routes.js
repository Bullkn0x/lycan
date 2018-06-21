import React, {Component} from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import fire from "../../config/config";
import Homepage from "../homepage"
import Login from "../login/login"
import Logout from "../logout"
import Dashboard from "../dashboard/dashboard"

export default class Routes extends Component{
  logout(){
    fire.auth().signOut().then(function() {
    console.log("you have logged out");
  }, function(error) {
    // An error happened.
  });
  }
  render(){
    console.log("this is your routes props", this.props.loggedInUserData);

    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={props => <Homepage {...props} />} />
          <Route path="/login" exact render={props => <Login loggedInUserData={this.props.loggedInUserData} {...props} />} />
          <Route path="/logout" exact render={props =>  <Logout {...props} />} />
          <Route path="/dashboard" exact render={props => <Dashboard  {...props}/>} />
        </Switch>
      </BrowserRouter>)
  }

}
