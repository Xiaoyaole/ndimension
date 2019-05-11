import { Layout, Menu, Icon } from 'antd';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Gallery from "./Gallery";
const {
  Header, Content, Footer, Sider,
} = Layout;

class Home3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Layout>
            
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#F0F2F5', minHeight: 360 }}>
                  <Gallery></Gallery>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                次元结界 ©2019 Created by ranger
              </Footer>

            </Layout>
            <Sider
              style ={{float:"right"}}
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => { console.log(broken); }}
              onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
              <div className="logo" style={{height: 32,background: "#F0F2F5", margin: 16,}} />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                    <Link to="/home"  />
                    <Icon type="user" />
                    <span className="nav-text">次元</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="user" />
                  <span className="nav-text">nav 4</span>
                </Menu.Item>
              </Menu>
            </Sider>
          </Layout>
        );
    }
}

export default Home3;