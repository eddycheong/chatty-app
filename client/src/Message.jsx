import React, { Component } from 'react';

function image(link) {
  return (
    <img src={link} />
  );
}

class UserMessage extends Component {
  render() {
    const { username, usercolor, content } = this.props.message;

    // console.log(/\.jpg|\.png|\.gif/.test(content))
    const imageLink = /\b(https?:\/\/.*?\.(?:jpe?g|png|gif))\b/;
    const messageContent = content.split(imageLink).map(x => {
      if(imageLink.test(x)) {
        return image(x);
      }

      return (
        <div>{x}</div>
      );
    });

    console.log(messageContent);

    // if(/https?:\/\/.*(\.jpe?g|\.png|\.gif)/.test(content)) {
    return (
      <div className="message">
        <span className="message-username" style={{ color: usercolor }}>{username}</span>
        <span className="message-content">
          {messageContent}
        </span>
      </div>
    );
    // }
    // else {
    //   return (
    //     <div className="message">
    //       <span className="message-username" style={{color: usercolor}}>{username}</span>
    //       <span className="message-content">
    //         {content}
    //       </span>
    //     </div>
    //   );
    // }

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
