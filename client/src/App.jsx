import React, { Component } from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: { name: 'Bob' },
      messages: []
    };

    this.socket;

    this.postMessage = this.postMessage.bind(this);
    this.postNotification = this.postNotification.bind(this);
  }

  postMessage(username, content) {
    const message = {
      type: "postMessage",
      username: username,
      content: content
    };

    this.socket.send(JSON.stringify(message));
  }

  postNotification(content) {
    const message = {
      type: "postNotification",
      content: content
    };

    this.socket.send(JSON.stringify(message));
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = () => {
      console.log("Connected to server");
    }

    this.socket.onmessage = (event) => {
      const messages = this.state.messages.concat(
        JSON.parse(event.data)
      );

      this.setState({
        messages: messages
      });
    }
  }

  render() {
    const {messages, currentUser } = this.state, 
          {postMessage, postNotification} = this;

    return (
      <div>
        <Nav />
        <MessageList 
          messages={messages} 
        />
        <ChatBar 
          currentUser={currentUser} 
          postMessage={postMessage}
          postNotification={postNotification}
        />
      </div>
    );
  }
}
export default App;
