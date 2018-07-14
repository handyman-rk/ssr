// html skeleton provider
function template(title, initialState = {}, content = ""){
  let scripts = ''; // Dynamically ship scripts based on render type
  if(content){
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
                `
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `
  }
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

                  ${scripts}
              </body>
              `;

  return page;
}

module.exports = template;
