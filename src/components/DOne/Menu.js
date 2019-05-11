import { Menu, Icon , Avatar } from 'antd';
import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import Contents from "./Contents";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menu1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'mail',
          }
    }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{float:"left",fontWeight:"bold",marginTop:5}}
      >
        <Menu.Item key="mail">
        <Link to="/home/" />
          <Icon type="home"/>次元动态
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/home/Gallery" />
          <Icon type="appstore" />画廊
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />私信</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default Menu1;