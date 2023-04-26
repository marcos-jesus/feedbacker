module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ],
    test: /\.css$/,
    use: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      'postcss-loader'
    ]
  }
}
