const path = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  mode: 'development',

  target: 'node',

  entry: './src/app.ts',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist')
  },

  resolve: {
    extensions: [ '.ts', '.js' ]
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
      onBuildEnd: [ 'npm run run:dev' ]
    })
  ]
}