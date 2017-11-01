import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser.name,
      content: ''
    };

    this.onContent = this.onContent.bind(this);
    this.onUsername = this.onUsername.bind(this);
  }

  onUsername(event) {
    this.setState({
      username: (event.target.value.length > 0 ? event.target.value : 'Anonymous')
    });
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
          defaultValue={this.state.username}
          placeholder="Your Name (Optional)"
          onChange={this.onUsername}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.props.onMessages(this.state.username, event.target.value)
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
