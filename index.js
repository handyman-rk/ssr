const express = require('express'),
          app = express(),
         path = require('path');


// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');

// start the server
app.listen(process.env.PORT || 3000);


// our apps data model
const data = require('./assets/data.json');

// demo state
var state = {
  "fetch_error": false,
  "sections": []
}

//SSR function import
const ssr = require('./views/server');

// server rendered home page
app.get('/', (req, res) => {
  state.sections = data;
  let content = ssr(state);
  let response = html("Server Rendered Page", state, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
  let response = html('Client Side Rendered page')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// tiny trick to stop server during localdevelopment

  app.get('/exit', (req, res) => {
    if(process.env.PORT) {
      res.send("Sorry, the server denies your request");
    } else {
      res.send("shutting down");
      process.exit(0);
    }

  });


// html skeleton provider
function html(title, state = {}, content = ""){
  let scripts, page;

  if(content){
    scripts = `
               <script>
                  window.__STATE__ = ${JSON.stringify(state)}
               </script>
               <script src="assets/client.js"></script>
              `;
  } else {
    scripts = `
               <script src="assets/bundle.js"></script>
              `;
  }

     page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/style.css" rel="stylesheet">
                <meta name="google-site-verification" content="qE1qNLn82RtfjKrtO-y8kh1G-mn2uqB65eGCY-EMSbM" />
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                ${scripts}
              </body>
              `;

  return page;
}
