import { Carousel , Affix} from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import "../../assets/css/Login.css";
import FormLogin from "./FormLogin"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component{
  render(){
    return( 
      <div>
        <Carousel autoplay="true" vertical="true">
          <div className="a1"></div>
          <div className="a2">1</div>
          <div className="a3">2</div>
          <div className="a4">3</div>
      </Carousel>
      <div className="a"> 
      <FormLogin></FormLogin>
      <Link to="/registration">注册</Link> 
      <Link to="/side">菜单</Link> 
      </div>

      </div>
      );
  }
}


export default Login;