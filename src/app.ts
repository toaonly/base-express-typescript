import express, { Request, Response } from 'express'
import http from 'http'
import api from './api'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)

app.disable('x-powered-by')
app.use(bodyParser.json())

app.use('/', api)

app.use((req: Request, res: Response) => {
  res.status(404)
  res.send('404 Not Found')
})

server
  .listen(port)
  .on('error', err => console.warn(err))
  .on('listening', () => {
    console.debug(`Listening on port ${port} mode ${process.env.NODE_ENV}`)
  })