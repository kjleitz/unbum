module.exports = {
  test: /\.js?(\.erb)?$/,
  use: [{
    loader: 'babel-loader',
  }],
  exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
};
