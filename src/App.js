import React, {Component} from 'react';
import Homepage from './components/homepage.js';
import Login from './components/login/login.js';
import Dashboard from './components/dashboard/dashboard.js';
import fire from "./config/config.js";
import {BrowserRouter as Router, Route,Redirect} from "react-router-dom";

import './css/App.css';
import './css/custom.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      loggedin: false
    }

    let self = this
    fire.auth().onAuthStateChanged(function(user) {
      self.setState({"user": user.uid, loggedin: true});
    });
  }
  render() {
    console.log("user authenticated from appjs", this.state);
    return (<div>
      <Router>
          <Route path="/" exact render={props => <Homepage loggedInUserData={this.state.user}/>} />
      </Router>
      <Router>
        <Route path="/dashboard" exact render={props => <Dashboard />} />
      </Router>
      {this.state.loggedin ?
        <Router>
            <Route path="/login" render={props =>  <Redirect to="/dashboard"/>} />
        </Router>
        :
        <Router>
            <Route path="/login" exact render={props => <Login />} />
        </Router>
      }

    </div>);
  }
}

export default App;
