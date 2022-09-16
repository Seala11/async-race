const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8800,
    open: true,
    historyApiFallback: true
  },
};
