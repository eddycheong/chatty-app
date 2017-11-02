import React, { Component } from 'react';

import { Message, Notification } from './Message.jsx';

const messageType = require('../../lib/messageType');

class MessageList extends Component {

  render() {
    const messages = this.props.messages.map(message => {
      if (messageType.isNotification(message)) {
        return <Notification key={message.id} message={message} />
      }

      return <Message key={message.id} message={message} />
    });

    return (
      <main className="messages" >
        {messages}
      </main>
    );
  }
}
export default MessageList;
