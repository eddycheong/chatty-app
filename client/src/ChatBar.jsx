import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser.name,
      content: ''
    };

    this.onContent = this.onContent.bind(this);
  }

  onContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          onKeyPress={event => {
            if (event.key === 'Enter') {
              const username = event.target.value.length > 0 ? event.target.value : 'Anonymous';
              const message = `${this.state.username} has changed their name to ${username}.`;
              
              this.props.postNotification(message);
              this.setState({
                username: username
              });
            }
          }}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.props.postMessage(this.state.username, event.target.value)
              this.setState({ content: '' })
            }
          }}
          onChange={this.onContent}
          value={this.state.content}

        />
      </footer>
    );
  }
}
export default ChatBar;
