import { Layout, Menu, Breadcrumb,Avatar,Card ,Button} from 'antd';
import React from "react";
import Menu1 from "./Menu";
import Contents from "./Contents";
import Gallery from "./Gallery";
import User from "./User";
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
const { Header, Content, Footer } = Layout;
class Heade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
            <Layout className="layout">
                <Header className="header" style={{background:'#fff',height:50}}>
                    <Menu1>
                    </Menu1>
                    <img style={{height:60,width:60,marginLeft:-300,marginTop:-15 }} src={require('../../assets/images/ciyuan.png')} />
                    <Button type="primary" style={{float:"right",marginTop:10}}>发布动态</Button>
                    <Avatar style={{float:"right",marginTop:10}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#F0F2F5', padding: 24, minHeight: 280 ,marginTop:60,textAlign:"center"}}>

                        <Route exact path='/home/' component={Contents} />
                        <Route path='/home/Gallery' component={Gallery} />
                        <Route path='/home/user' component={User}   />

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                次元结界 ©2019 Created by ranger
    </Footer>
    <style>{`
        .header {
        position: fixed;
        top: 0;
        width:100%;
        z-index: 301;  
        }
    `}</style>
            </Layout>
            </Router>
        );
    }
}

export default Heade;
