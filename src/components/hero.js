import React, { Component } from 'react';

import Nav from '../components/nav';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Nav />
        <div className="hero-callout">
          <h1>The Last Supper</h1>
          <a href="#" className="btn btn-callout">Read More</a>
        </div>
      </div>
    )
  }
}
