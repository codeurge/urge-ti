import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hero from './src/components/hero';
import FeaturedVideo from './src/components/featuredVideo';

require('./src/styles.scss');

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Hero />
        <FeaturedVideo />
        <div className="ships"></div>
        <div className="spacer"></div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
