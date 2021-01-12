import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import logo from '../assets/img/logo.png';
import './Header.css';

export default class Header extends Component {
  state = {
    menuVisible: false,
  };

  render() {
    const { isMoblie } = this.props;
    // const { menuVisible } = this.state;
    const menuMode = isMoblie ? 'inline' : 'horizontal';

    const menu = (
      <Menu mode={menuMode} defaultSelectedKeys={['home']} id="nav" key="nav">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="message">Message</Menu.Item>
        <Menu.Item key="prayers">Prayers</Menu.Item>
        <Menu.Item key="events">Events</Menu.Item>
        <Menu.Item key="videos">Videos</Menu.Item>
        <Menu.Item key="about">About Us</Menu.Item>
      </Menu>
    );

    return (
      <header>
        <Row justify="start" align="middle">
          <Col lg={8} md={11} sm={24} xs={24} className="logo">
            <a id="logo" href="/#">
              <img alt="logo" src={logo} />
              <span>Jesus Lives AG</span>
            </a>
          </Col>
          <Col lg={16} md={13} sm={0} xs={0} className="menu">
            {menuMode === 'horizontal' && menu}
          </Col>
        </Row>
      </header>
    );
  }
}
