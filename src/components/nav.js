import React, { Component } from 'react';
import _ from 'lodash';

import { makeKeyFromName } from '../helpers';
import NavItem from './navItem';

const navData = require('../data.json').data;

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-galatica">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src="/public/images/logo.png" /></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {navData.map((navItem) => {
                return <NavItem navItem={navItem} key={makeKeyFromName(navItem.name)} />
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
