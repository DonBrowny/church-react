import React, { Component } from 'react';
import { enquireScreen } from 'enquire-js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Banner from './Banner';

let isMobile = false;

enquireScreen((b) => {
  isMobile = b;
});

export default class Shell extends Component {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  };

  render() {
    return (
      <>
        <Header
          key="header"
          isFirstScreen={this.state.isFirstScreen}
          isMobile={this.state.isMobile}
        />
        <Banner key="banner" onEnterChange={this.onEnterChange} />
        <Footer key="footer" />
      </>
    );
  }
}
