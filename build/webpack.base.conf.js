const path = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  target: 'node',

  node: {
    __dirname: true
  },

  context: path.resolve(__dirname, '../'),

  entry: './bin/www.ts',

  output: {
    publicPath: '../',
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist')
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  },

  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['npm start']
    })
  ]
}
