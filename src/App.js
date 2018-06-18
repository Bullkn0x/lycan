import React, {Component} from 'react';
import Homepage from './components/homepage.js';
import Login from './components/login/login.js';
import Loading from './components/loading.js';
import Dashboard from './components/dashboard/dashboard.js';
import fire from "./config/config.js";
import {BrowserRouter as Router, Route,Redirect} from "react-router-dom";

import './css/App.css';
import './css/custom.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {uid:""},
      loggedin: false
    }

    let self = this
    fire.auth().onAuthStateChanged(function(user) {
      if(user == null){
        console.log("no firebase user found", user);
        self.setState({"user": {},  loggedin: false});
      }else{
        console.log("firebase user found", user);
        self.setState({"user": user,  loggedin: true});
      }

    });
  }
  render() {
    console.log("user authenticated from appjs", this.state);
    return (
      {this.state.loggedin ?
        <div>
          {this.state.loggedin ?
            // if user is logged in set routes for Dashboard
              <div>
                <Router>
                  <Route path="/" exact render={props => <Dashboard loggedInUserData={this.state.user}/>} />
                </Router>
                <Router>
                  <Route path="/login" exact render={props => <Dashboard loggedInUserData={this.state.user}/>} />
                </Router>
              </div>
            :
              <div>
                <Router>
                  <Route path="/"  render={props => <Homepage/>} />
                </Router>
                <Router>
                  <Route path="/login" exact render={props => <Login/>} />
                </Router>
              </div>

          }
        </div>
        :
        <div>
          {this.state.loggedin ?
            // if user is logged in set routes for Dashboard
              <div>
                <Router>
                  <Route path="/" exact render={props => <Dashboard loggedInUserData={this.state.user}/>} />
                </Router>
                <Router>
                  <Route path="/login" exact render={props => <Dashboard loggedInUserData={this.state.user}/>} />
                </Router>
              </div>
            :
              <div>
                <Router>
                  <Route path="/" exact render={props => <Homepage/>} />
                </Router>
                <Router>
                  <Route path="/login" exact render={props => <Login/>} />
                </Router>
              </div>

          }
        </div>

      }




        //     <div>
        //       {this.state.user == null ?
        //         <Loading/>
        //         :
        //         <div>
        //         <Router>
        //           <Route path="/" exact render={props => <Dashboard loggedInUserData={this.state.user}/>} />
        //         </Router>
        //         <Router>
        //           <Route path="/login" exact render={props => <Dashboard loggedInUserData={this.state.user}/>} />
        //         </Router>
        //       </div>
        //       }
        //     </div>
        //       :
        //       <div>
        //       <Router>
        //         <Route path="/" exact render={props => <Homepage/>} />
        //       </Router>
        //       <Router>
        //         <Route path="/login" exact render={props => <Login/>} />
        //       </Router>
        //     </div>
        //
        //     }
        //   }
        // </div>
          );
  }
}

export default App;
