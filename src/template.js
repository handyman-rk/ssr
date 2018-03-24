// html skeleton provider
function template(title, state = {}, content = ""){
  let scripts = '';
  if(content){
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(state)}
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

module.exports = template;
