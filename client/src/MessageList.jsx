import React, { Component } from 'react';

import { UserMessage, SystemMessage } from './Message.jsx';

const messageLib = require('../../lib/messageLib');

const userMessage = (message) => (
  <UserMessage
    key={message.id}
    username={message.username}
    content={message.content}
  />
);

const systemMessage = (message) => (
  <SystemMessage
    key={message.id}
    content={message.content}
  />
);

class MessageList extends Component {

  render() {
    const messages = this.props.messages.map(message => {
      if (messageLib.isNotification(message)) {
        return systemMessage(message);
      }

      return userMessage(message);
    });

    return (
      <main className="messages" >
        {messages}
      </main>
    );
  }
}
export default MessageList;
