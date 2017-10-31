import React, { Component } from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}
export default App;
