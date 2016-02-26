import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <p>This is the component you are looking for.</p>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
