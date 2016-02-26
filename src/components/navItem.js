import React, { Component } from 'react';

import { makeKeyFromName } from '../helpers';

export default class NavItem extends Component {
  renderNavItem(navItem) {
    if (navItem.children.length > 0) {
      return (
        <li key={makeKeyFromName(navItem.name)}>
          <a href="#" className="nav-item dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{navItem.name}</a>
          <ul className="dropdown-menu">
            {navItem.children.map((child) => {
              return this.renderNavItem(child)
            })}
          </ul>
        </li>
      )
    } else {
      return (
        <li key={makeKeyFromName(navItem.name)}>
          <a href="#" className="nav-item">{navItem.name}</a>
        </li>
      )
    }
  }

  render() {
    return this.renderNavItem(this.props.navItem)
  }
}
