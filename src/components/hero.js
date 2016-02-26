import React, { Component } from 'react';

import Nav from '../components/nav';
import SocialButtons from '../components/socialButtons';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Nav />
        <SocialButtons />
        <div className="hero-callout">
          <h1>The Last Supper</h1>
          <a href="#" className="btn btn-callout">Read More</a>
        </div>
      </div>
    )
  }
}
