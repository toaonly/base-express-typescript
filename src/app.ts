import express, { Request, Response } from 'express'
import http from 'http'
import api from './api'
import bodyParser from 'body-parser'

const port = 3000
const app = express()
const server = http.createServer(app)

app.disable('x-powered-by')
app.use(bodyParser.json())

app.use('/', api)

app.use((err: any, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server
  .listen(port)
  .on('error', err => console.warn(err))
  .on('listening', () => {
    console.debug(`Listening on port ${port}`)
  })