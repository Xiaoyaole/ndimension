import React from "react";
import { Layout, Menu, Icon, Avatar } from "antd";
import "../../assets/css/one.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserInfo from "./user/UserInfo";
import UserNews from "./user/UserNews";
import UserGallery from "./user/UserGallery"
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Router>
            <div>
                <Header className="back">
                </Header>
                <Content>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{ fontWeight: "bold" }}
                    >
                        <Menu.Item key="mail">
                            <Icon type="home" />次元动态
                        </Menu.Item>
                        <Menu.Item key="app">
                            <Icon type="appstore" />个人画廊
                        </Menu.Item>
                        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />个人资料</span>}>
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
                    <Avatar size={100} style={{position:"absolute",left:550,top:230}}></Avatar>
                    <Route exact path='/home/user' component={UserNews} />
                    <Route path='/home/user/gallery' component={UserGallery} />
                    <Route path='/home/user/userinfo' component={UserInfo}   />
                </Content>
            </div>
            </Router>
        );
    }
}

export default User;