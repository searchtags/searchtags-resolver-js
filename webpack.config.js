const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  target: 'web',
  output: {
    filename: 'searchTagResolver.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'searchTagsResolver'
  }
};