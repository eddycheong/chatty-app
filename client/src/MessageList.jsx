import React, { Component } from 'react';

import { UserMessage, SystemMessage } from './Message.jsx';

const messageType = require('../../lib/messageType');

class MessageList extends Component {

  render() {
    const messages = this.props.messages.map(message => {
      if (messageType.isNotification(message)) {
        return <SystemMessage key={message.id} message={message} />
      }

      return <UserMessage key={message.id} message={message} />
    });

    return (
      <main className="messages" >
        {messages}
      </main>
    );
  }
}
export default MessageList;
