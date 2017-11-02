import React, { Component } from 'react';

function Message(props) {
  const { username, usercolor, content } = props.message;

  const imageLink = /\b(https?:\/\/.*?\.(?:jpe?g|png|gif))\b/;
  const messageContent = content.split(imageLink).map(partialContent => {
    if (imageLink.test(partialContent)) {
      return (<img className="image-content" src={partialContent} />);
    }

    return (<div>{partialContent}</div>);
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

function Notification(props) {
  return (
    <div className="message system">
      {props.message.content}
    </div>
  )
}

export { Message, Notification };
