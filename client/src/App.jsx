import React, { Component } from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';

const colors = ['#EF6F6C', '#465775', '#56E39F', '#3454D1'];

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeUsers: 0,
      currentUser: { 
        name: 'Bob', 
        color: colors[Math.floor(Math.random()*colors.length)],
      },
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
      usercolor: this.state.currentUser.color,
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

      const data = JSON.parse(event.data)
      switch (data.type) {
        case "incomingMessage":
          // handle incoming message
          this.setState({
            messages: this.state.messages.concat(data)
          });
          break;
        case "incomingNotification":
          // handle incoming notification
          this.setState({
            messages: this.state.messages.concat(data)
          });
          break;
        case "incomingServerState":
          this.setState({
            activeUsers: data.activeUsers
          });
          break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error("Unknown event type " + data.type);
      }
    }
  }

  render() {
    const { messages, currentUser, activeUsers } = this.state,
      { postMessage, postNotification } = this;

    return (
      <div>
        <Nav activeUsers={activeUsers} />
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
