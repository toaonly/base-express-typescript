const path = require('path')
const dotenv = require('dotenv')
const WebpackDotenv = require('dotenv-webpack')
const base = require('./webpack.base.conf')

const envPath = path.join(__dirname, '../.env')
const envDevPath = path.join(__dirname, '../.env.development')

dotenv.config({
  path: envPath
})

base.mode = process.env.NODE_ENV
base.plugins.push(new WebpackDotenv({
  path: envDevPath,
  expand: true,
  default: envPath
}))

module.exports = base
