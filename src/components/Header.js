import React, { Component } from 'react';
import logo from '../assets/img/header-logo.svg';

export default class Header extends Component {
  render() {
    const menu = (
      <>
        <a href="/#">Home</a>
        <a href="/#">Message</a>
        <a href="/#">Requests</a>
        <a href="/#">Gallery</a>
        <a href="/#">About Us</a>
      </>
    );
    return (
      <header className="header">
        <nav className="flex flex-jc-sb flex-ai-c">
          <a className="header__logo" href="/#">
            <img src={logo} alt="Jesus Lives AG Church" />
          </a>
          <div className="header__links">{menu}</div>
          <div className="header__toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    );
  }
}
