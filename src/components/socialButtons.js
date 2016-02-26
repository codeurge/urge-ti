import React, { Component } from 'react';

export default class SocialButtons extends Component {
  render() {
    return (
      <div className="container">
        <ul className="social-buttons pull-right">
          <li>
            <a href="#"><img src="/public/images/fb.png" /></a>
          </li>
          <li>
            <a href="#"><img src="/public/images/tw.png" /></a>
          </li>
          <li>
            <a href="#"><img src="/public/images/pin.png" /></a>
          </li>
          <li>
            <a href="#"><img src="/public/images/in.png" /></a>
          </li>
        </ul>
      </div>
    )
  }
}
