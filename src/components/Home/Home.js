import React from "react";
import Menu1 from "./Menu";
import SideMenu from "./SideMenu";
import Contents from "./Contents";
import "../../assets/css/home.css"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="left"><SideMenu></SideMenu></div>
                <div className="right">
                <div className="top"><Menu1></Menu1></div>
                {/*<div className="middle"> <Contents className="bodys"></Contents></div>*/}
                </div>
            </div>
            
            
        );
    }
}

export default Home;