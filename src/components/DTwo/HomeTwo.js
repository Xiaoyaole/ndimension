import { Layout, Menu, Icon } from 'antd';
import React from "react";
import Contents from "./Contents"
import Home from '../Home/Home';
const { Header, Sider, Content } = Layout;

class HomeTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
    }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{marginTop:20,fontWeight:"bold"}}>
            <img style={{width:60,height:60}} src={require('../../assets/images/ciyuan.png')}></img>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>次元动态</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>画廊</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>私信</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{float:"left",width:70,height:70,marginTop:25}}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,background:'#F0F2F5'
          }}
          >
          <div style={{textAlign:"left",width:1000,background:'#fff',padding:"30px 30px 30px 30px",borderRadius:9}}><Contents></Contents></div>
        
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default HomeTwo;