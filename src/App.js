import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    counters[i] = { ...counter };
    ++counters[i].value;
    this.setState({ counters });
  }

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar total={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Counters counters={this.state.counters} onDelete={this.handleDelete}
            onIncrement={this.handleIncrement} onReset={this.handleReset} />
        </main>
      </React.Fragment >
    );
  }
}
export default App;