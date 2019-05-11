import { Carousel , Affix,Card} from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import RegistrationForm from "./RegistrationForm"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../assets/css/Registration.css"
import Avatar from "./Avatar";

class Registration extends React.Component{
  render(){
    return( 
      <div className="Registration">
        <Card>
        <RegistrationForm></RegistrationForm>
        </Card>
      
      </div>
      );
  }
}


export default Registration;