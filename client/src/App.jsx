import React, { Component } from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';

import data from '../data.json';

class App extends Component {
  constructor() {
    super();

    this.state = data;
    this.socket;

    this.onMessages = this.onMessages.bind(this);
  }

  onMessages(username, content) {
    const message = {
      username: username,
      content: content
    };

    this.socket.send(JSON.stringify(message));

    // const messages = this.state.messages.concat({
    //   username: username,
    //   content: message
    // });

    // this.setState({
    //   messages: messages
    // });
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages })
    }, 3000);

    this.socket = new WebSocket('ws://localhost:3001');
    console.log("Connected to server");
  }

  render() {
    return (
      <div>
        <Nav />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} onMessages={this.onMessages} />
      </div>
    );
  }
}
export default App;
