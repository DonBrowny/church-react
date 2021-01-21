import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import './Header.scss';

const Header = () => {
  const [isActive, toggleActive] = useState(undefined);
  const changeActive = () => {
    toggleActive(!isActive);
    isActive
      ? (document.body.style.overflow = 'inherit')
      : (document.body.style.overflow = 'hidden');
  };

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
    <>
      <header className={'header ' + (isActive ? 'open' : '')}>
        <nav className="container flex flex-jc-sb flex-ai-c">
          <a className="header__logo" href="/#">
            <img src={logo} alt="Jesus Lives AG Church" />
            <span>Jesus Lives AG</span>
          </a>
          <div className="nav-links hide-for-mobile ">{menu}</div>
          <button
            className="header__toggle hide-for-desktop"
            onClick={changeActive}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        <div
          className={'overlay hidden ' + (isActive ? 'swing-in' : 'fade-out ')}
        ></div>
        <div
          className={
            'header__links nav-links hidden ' +
            (isActive ? 'swing-in' : 'fade-out ')
          }
        >
          {menu}
        </div>
      </header>
    </>
  );
};

export default Header;
