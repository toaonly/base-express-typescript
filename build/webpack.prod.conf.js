const path = require('path')
const dotenv = require('dotenv')
const WebpackDotenv = require('dotenv-webpack')
const base = require('./webpack.base.conf')

const envPath = path.join(__dirname, '../.env')

dotenv.config({
  path: envPath
})

base.mode = process.env.NODE_ENV
base.plugins.push(new WebpackDotenv({ path: envPath }))

module.exports = base
