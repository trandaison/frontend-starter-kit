require('./markup-menu')(window.document);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '"MARKUP-TOOLS"' };
  }

  render() {
    return (
      <div>React component {this.state.name}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.wrapper'));
