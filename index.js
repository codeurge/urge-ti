import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hero from './src/components/hero';

require('./src/styles.scss');

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Hero />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
