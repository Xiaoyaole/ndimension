import React, { Component } from 'react';
//import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Login from "./components/Login/Login"
import routes from './components/router';
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import SiderCustom from "./components/Home/SiderCustom"
import Heade from "./components/DOne/Heade";
import HomeTwo from "./components/DTwo/HomeTwo"
import Home3 from "./components/DThree/Home3";
import Gallery from "./components/DOne/Gallery"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

        <Route exact  path="/" component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/side' component={Home3} />        
        <Route path='/home' component={Heade} />   
      </div>
      </Router>
      
    );
  }
}

export default withRouter(App);
