import React, { Component } from 'react';
import fire from "../../config/config";
import Loading from "../loading"
import {Link} from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      authenticatedUser: {},
      authenticated: false,
      dashboardLoaded: false
    }
  }

  componentWillMount(){
    let self = this
    fire.auth().onAuthStateChanged(function(user) {
      if(user == null){
        self.setState({authenticatedUser: null,  authenticated: false, dashboardLoaded:false});
        self.props.history.push('/login')
      }else{
        self.setState({authenticatedUser: user,  authenticated: true, dashboardLoaded:false});
      }

    })
  }
  render() {
    console.log("props for dashboard",this.props);
    return (
      <div>
        {this.state.dashboardLoaded ? <Loading/> :
        <div>
          {this.state.authenticated ?
            <div>
              Welcome
              <br/>
              {/* Welcome {this.state.user.emailVerified ? <span>Email Verified</span> : <span>Email needs verification</span>} */}
              <br/>
            <Link to="/logout">Logout</Link>
            </div>
            :
            null
          }
        </div>

      }
      </div>









    );
  }
}

export default Dashboard;
