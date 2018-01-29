import * as React from 'react';
import { Component } from 'react';
// tslint:disable-next-line:no-import-side-effect

// tslint:disable-next-line:no-import-side-effect
import './Counter.scss';
interface ICounterState {
  count: number;
}
class Counter extends Component<{}, ICounterState> {
  public state: ICounterState = {
    count: 5,
  };

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <h1 className="hello" onClick={() => this.incrementCount()}>Clicks: {this.state.count}</h1>
    );
  }
}

export default Counter;