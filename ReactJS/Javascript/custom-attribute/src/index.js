import React from 'react';
import ReactDOM from 'react-dom';
import QueryString from 'query-string';
import App from './App';
import './index.css';

let greeting = "";
const queryParams = QueryString.parse(location.search);
if (queryParams && queryParams.greeting) {
    greeting = decodeURIComponent(queryParams.greeting).replace(/\+/g, ' ');
}

ReactDOM.render(
  <App greeting={greeting}/>,
  document.getElementById('root')
);
