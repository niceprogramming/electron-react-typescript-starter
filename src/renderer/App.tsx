import * as React from 'react';
import { Component } from 'react';

import Counter from './components/Counter/Counter';
// tslint:disable-next-line:no-import-side-effect

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;