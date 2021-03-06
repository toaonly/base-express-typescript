import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './api'

const app = express()

app.disable('x-powered-by')
app.use(cors({
  optionsSuccessStatus: 200
}))
app.use(bodyParser.json())

app.use('/', api)

app.use((req: Request, res: Response) => {
  res.status(404)
  res.send('404 Not Found')
})

export default app
