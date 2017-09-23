import React, { Component } from 'react';
import LCC from "lightning-container";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  callApex() {
    LCC.callApex("ApexController.getAccount",
                 this.state.name,
                 this.handleAccountQueryResponse,
                 {escape: true});
  }

  handleAccountQueryResponse(result, event) {
    if (event.status) {
      this.setState({account: result});
    }
    else if (event.type === "exception") {
      console.log(event.message + " : " + event.where);
    }
  }

  render() {
    var account = this.state.account;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LCC</h2>
        </div>
        <p className="App-intro">
          Account Name: <input type="text" id="accountName" value={this.state.name} onChange={e => this.onAccountNameChange(e)}/><br/>
          <input type="submit" value="Call Apex Controller" onClick={this.callApex}/><br/>
          Id: {account.Id}<br/>
          Phone: {account.Phone}<br/>
          Type: {account.Type}<br/>
          Number of Employees: {account.NumberOfEmployees}<br/>
        </p>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      account: {}
    };

    this.handleAccountQueryResponse = this.handleAccountQueryResponse.bind(this);
    this.onAccountNameChange = this.onAccountNameChange.bind(this);
    this.callApex = this.callApex.bind(this);
  }

  onAccountNameChange(e) {
    this.setState({name: e.target.value});
  }
}

export default App;
