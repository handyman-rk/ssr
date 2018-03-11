const express = require('express'),
          app = express(),
  compression = require('compression'),
         path = require('path');

//SSR function import
const ssr = require('./views/server');


// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// Using Gzip compression
app.use(compression())

// hide powered by express
app.disable('x-powered-by');

// start the server
app.listen(process.env.PORT || 3000);


// server rendered home page
app.get('/', (req, res) => {
  let content = ssr();
  let response = html("Server Rendered Page", content);
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// client sider endering
app.get('/client', (req, res) => {
  let response = html("Renders on Client", " ");
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// tiny trick to stop server during localdevelopment
if(!process.env.PORT){
  app.get('/exit', (req, res) => {
    res.send("shutting down");
    process.exit(0);
  });
}


// html skeleton provider
function html(title, content){
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                <script src="assets/bundle.js"></script>
              </body>
              `;

  return page;
}
