import React, { Component } from 'react';

class UserMessage extends Component {
  render() {
    const { username, content } = this.props.message;

    return (
      <div className="message">
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
    );
  }
}

class SystemMessage extends Component {
  render() {
    const { content } = this.props.message;

    return (
      <div className="message system">
        {content}
      </div>
    );
  }
}

export { UserMessage, SystemMessage };
