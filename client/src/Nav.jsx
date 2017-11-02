import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p>{this.props.activeUsers} users online</p>
      </nav>
    );
  }
}
export default Nav;
