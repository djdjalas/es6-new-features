var path = require('path');

module.exports = {
  entry : ['babel-polyfill', './app'],
  output : {
    path : path.join(__dirname, 'build'),
    filename : 'bundle.js'
  },
  devServer : {
    inline : true,
    port : 3000,
    contentBase : './build'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader',
        query : {
          presets: ['es2015']
        }
      }
    ]
  }
};
