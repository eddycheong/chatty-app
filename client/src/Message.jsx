import React, { Component } from 'react';

class UserMessage extends Component {
  render() {
    const { username, usercolor, content } = this.props.message;

    return (
      <div className="message">
        <span className="message-username" style={{color: usercolor}}>{username}</span>
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
