import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/app'

module.exports = function render() {
  let content = ReactDOMServer.renderToString(<App />);
  return content; 
}
