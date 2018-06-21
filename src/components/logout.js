import React, {Component} from 'react';
import fire from "../config/config";
import {Link} from "react-router-dom";

export default class Logout extends Component{
  componentDidMount(){
    console.log("logout props",this.props);
    fire.auth().signOut().then(function() {
    // this.props.history.push('/login')
  }, function(error) {
    console.log("error logging out:", error);
  });
  }

  render(){
    console.log("You have been logged out and redirected");

    return(
      <div></div>
    )
  }

}
