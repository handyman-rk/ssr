import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

var props = window.__STATE__;
//delete window.__STATE__;

ReactDOM.hydrate(
  <App {...props}/>,
  document.getElementById('app')
);
