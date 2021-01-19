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
        <div className="overlay"></div>
        <nav className="container flex flex-jc-sb flex-ai-c">
          <a className="header__logo" href="/#">
            <img src={logo} alt="Jesus Lives AG Church" />
          </a>
          <div className="header__links hide-for-mobile ">{menu}</div>
          <button className="header__toggle hide-for-desktop ">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
    );
  }
}
