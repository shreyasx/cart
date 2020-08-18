import React, { Component } from 'react';
class Navbar extends Component {
  render() {
    return (<nav className="navbar navbar-light bg-light">
      <a className="navbar-brand mb-0 h1" href="#">Navbar
        <span className="badge badge-pill badge-secondary">{this.props.total}</span>
      </a>
    </nav>);
  }
}

export default Navbar;