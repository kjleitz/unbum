module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader',
    // options: { extractCSS }, // removed in vue-loader v15.x
  }],
};
