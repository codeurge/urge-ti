import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class FeaturedVideo extends Component {
  render() {
    return (
      <div className="featured-video container">
        <div className="row">
          <div className="col-md-6 video-thumbnail">
            <div className="embed-responsive embed-responsive-16by9">
              <Iframe url="https://www.youtube.com/embed/UObR_hm7HvI?rel=0&amp;controls=0&amp;showinfo=0" width='100%' height='315px' position='relative'/>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="video-title">Video: A Growing Number of Cylons are Feeling Misunderstood</h1>
            <p className="video-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
        </div>
      </div>
    )
  }
}
