const path = require('path');

module.exports = {
  entry: "./src/client.js",
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      test: /\.js$/,
      exclude: node_modules,
      loader: {
        use: "babel-loader",
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  }
}
