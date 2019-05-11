import { Menu, Icon, Button } from 'antd';
import React from "react";
import "../../assets/css/home.css"

const SubMenu = Menu.SubMenu;

class SideMenu extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={{ width: 256 }}>
        <Menu
          className="Left"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
        <img src={require('../../assets/images/ciyuan.png')} />
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                一次元
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>二次元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;次元三&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SideMenu;