import express from 'express'
import http from 'http'

const port = 3000
const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.json({ result: true })
})

app.get('/test', (req, res) => {
  res.json({ test: true })
})

server
  .listen(port)
  .on('error', err => console.warn(err))
  .on('listening', () => {
    console.debug(`Listening on port ${port}`)
  })