import React, {Component} from 'react';
import fire from "./config/config.js";
import Routes from "./components/routes/routes"
import './css/App.css';
import './css/custom.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "user": null,
      loggedin: false,
      isLoading: true
      }
    }
    componentDidMount(){
      let self = this
      fire.auth().onAuthStateChanged(function(user) {
        if(user == null){
          self.setState({"user": null,  loggedin: false, isLoading:false});
        }else{
          self.setState({"user": user,  loggedin: true, isLoading:false});
        }
      })
    }


  render() {

    return (
        <div>
          <Routes loggedInUserData={this.state} />
        </div>

          );
  }
}

export default App;
