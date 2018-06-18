import React, {Component, StyleSheet} from 'react';
import fire from "../../config/config.js";
import SplashNavbar from "../navbars/splashNavbar"
const errorMessage = {
  fontSize: "14px",
  color: "red",
  textAlign: "left"
}
class Login extends Component {
  constructor() {
    super()
    this.state = {
      move: "",
      email: "",
      errorcode: "",
      firstname: "",
      lastname: ""
    }
  }
  addClassMove() {
    this.setState({move: "move"})
  }
  removeClassMove() {
    this.setState({move: ""})
  }
  setInputValue(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // submit user input to firbase database for registration
  register(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(response => {
      console.log("registration", response);
      const userDatabase = fire.database().ref("users");
      const userInfo = {
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      };
      userDatabase.push(userInfo);

    }).catch(error => {
      console.log(error);
      this.setState({errorCode: error.code, errorMessage: error.message})
    })
  }
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(response => {
      console.log("login ", response);


    }).catch(error => {
      console.log(error);
      this.setState({errorCode: error.code, errorMessage: error.message})
    })
  }
  render() {
    console.log("state", this.state);
    console.log("log in props", this.props.loggedInUserData);
    return (
      <div className="LoginContainer">
      <SplashNavbar/>
      <div className="veen">
        <div className={this.state.move === "" ? "wrapper" : "wrapper move"}>
          <div id="login">
            <h3>Please Login</h3>
            <div className="mail">
              <input onChange={this.setInputValue.bind(this)} value={this.state.email} type="email" name="email"/>
              <label>Email</label>
            </div>
            <div className="passwd">
              <input onChange={this.setInputValue.bind(this)} value={this.state.password} type="password" name="password"/>
              <label>Password</label>
            </div>
            <div className="submit">
              <button onClick={this.login.bind(this)} className="login">Login</button>
            </div>
            <a className="forgot" href="#">Forgot your password?</a>
            <button onClick={this.addClassMove.bind(this)} id="loginbtn">Don`t have an account?</button>
          </div>
          <div id="register">
            <h3>Please Register</h3>
            <div className="name">
              <input type="text" onChange={this.setInputValue.bind(this)} value={this.state.firstname} name="firstname"/>
              <label>First Name</label>
            </div>
            <div className="name">
              <input type="text" onChange={this.setInputValue.bind(this)} value={this.state.lastname} name="lastname"/>
              <label>Last Name</label>
            </div>
            <div className="mail">
              <input onChange={this.setInputValue.bind(this)} value={this.state.email} type="email" name="email"/>
              <label>Email</label>
              {
                this.state.errorCode === "auth/email-already-in-use"
                  ? <h4 style={errorMessage}>Email already in use</h4>
                  : null
              }
            </div>
            {/* <div className="uid">
              <input onChange={this.setInputValue.bind(this)} value={this.state.username} type="text" name="username"/>
              <label>User Name</label>
            </div> */
            }
            <div className="passwd">
              <input onChange={this.setInputValue.bind(this)} value={this.state.password} type="password" name="password"/>
              <label>Password</label>
              {
                this.state.errorCode === "auth/weak-password"
                  ? <h4 style={errorMessage}>{this.state.errorMessage}</h4>
                  : null
              }
            </div>
            <div className="submit">
              <button onClick={this.register.bind(this)} className="register">Register</button>
            </div>
            <button onClick={this.removeClassMove.bind(this)} id="registerbtn">Already an user?</button>
          </div>
        </div>
      </div>

    </div>
  );
  }
}

export default Login;
