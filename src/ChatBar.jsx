import React, { Component } from 'react';

class ChatBar extends Component {
  constructor() {
    super();

    this.state = {
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
          defaultValue={this.props.currentUser.name}
          placeholder="Your Name (Optional)"
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.props.onMessages(event.target.value)
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
