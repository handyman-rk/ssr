import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/appServer';

module.exports = function render(data) {
  let content = ReactDOMServer.renderToString(<App {...data} />);
  return content;
}
