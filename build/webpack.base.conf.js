const path = require('path')

module.exports = {
  target: 'node',

  node: {
    __dirname: true
  },

  context: path.resolve(__dirname, '../'),

  entry: './src/app.ts',

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
    
  ]
}
