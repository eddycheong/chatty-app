import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { username, usercolor, content } = this.props.message;

    const imageLink = /\b(https?:\/\/.*?\.(?:jpe?g|png|gif))\b/;
    const messageContent = content.split(imageLink).map(partialContent => {
      if(imageLink.test(partialContent)) {
        return (<img className="image-content" src={partialContent} />)
      }

      return (
        <div>{partialContent}</div>
      );
    });

    return (
      <div className="message">
        <span className="message-username" style={{ color: usercolor }}>{username}</span>
        <span className="message-content">
          {messageContent}
        </span>
      </div>
    );
  }
}

class Notification extends Component {
  render() {
    const { content } = this.props.message;

    return (
      <div className="message system">
        {content}
      </div>
    );
  }
}

export { Message, Notification };
