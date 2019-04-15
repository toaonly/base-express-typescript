const base = require('./webpack.base.conf')
const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')

const envPath = './.env.development'

dotenv.config({
  path: envPath
})

base.mode = process.env.NODE_ENV
base.plugins.push(new Dotenv({ path: envPath }))

module.exports = base