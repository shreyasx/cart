import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
      {counters.map(c =>
        <Counter onIncrement={onIncrement} onDelete={onDelete} key={c.id} counter={c} />)}
    </div>;
  }
}

export default Counters;