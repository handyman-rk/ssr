const express = require('express'),
          app = express(),
         path = require('path');


// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));


// start the server
app.listen(process.env.PORT || 3000);


// server rendered home page
app.get('/', (req, res) => {
  res.send("Server Rendered Page ");
});

// client sider endering
app.get('/client', (req, res) => {
  res.send("Clent Side Rendering");
});


// html skeleton provider
function html(title){
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/style.css rel="stylesheet">
                <script src="assets/bundle.js"></script>
              </head>
              <body>
                <div class="content">
                   <div class="wrap-inner">
                      <!--- magic happens here -->
                   </div>
                </div>
              </body>
              `;

  return page;
}
