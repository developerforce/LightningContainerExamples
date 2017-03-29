import React, { Component } from 'react';
import LCC from 'lightning-container';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messageReceived: "",
      messageToSend: ""
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.onMessageToSendChange = this.onMessageToSendChange.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.onMessageError = this.onMessageError.bind(this);
  }

  componentDidMount() {
    LCC.addMessageHandler(this.onMessage);
    LCC.addMessageErrorHandler(this.onMessageError);
  }

  componentWillUnmount() {
    LCC.removeMessageHandler(this.oneMessage);
    LCC.removeMessageErrorHandler(this.onMessageError);
  }

  onMessage(msg) {
    let name = msg.name;
    if (name === "General") {
      let value = msg.value;
      this.setState({messageReceived: value});
    }
    else if (name === "Foo") {
      // A different response
    }
  }

  onMessageError(errMsg) {
    console.log(errMsg);
  }

  onMessageToSendChange(e) {
    this.setState({messageToSend: e.target.value});
  }

  sendMessage() {
    LCC.sendMessage({name: "General", value: this.state.messageToSend});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LCC</h2>
        </div>
        <p className="App-intro">
          Message to send to container:
          <input type="text" id="messageToSend" value={this.state.messageToSend} onChange={e => this.onMessageToSendChange(e)}/>
          <input type="submit" value="Send" onClick={this.sendMessage}/>

          <br/>
          <br/>

          Message received from container: {this.state.messageReceived}
        </p>
      </div>
    );
  }
}

export default App;
