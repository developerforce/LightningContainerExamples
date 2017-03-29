import React, { Component } from 'react';
import LCC from 'lightning-container';
import JSForce from 'jsforce';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {accounts: []};

    this.handleAccountQueryResponse = this.handleAccountQueryResponse.bind(this);
  }

  componentDidMount() {
    let sid = LCC.getRESTAPISessionKey();
    let conn = new JSForce.Connection({accessToken: sid});
    conn.query("SELECT Id, Name from Account LIMIT 50", this.handleAccountQueryResponse);
  }

  handleAccountQueryResponse(error, result) {
    if (error) {
      console.log(error);
    }
    else {
      this.setState({accounts: result.records});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LCC</h2>
        </div>
        <p className="App-intro">
          {this.state.accounts.map((account) => <div key={account.Id}>{account.Name}</div>)}
        </p>
      </div>
    );
  }
}

export default App;
