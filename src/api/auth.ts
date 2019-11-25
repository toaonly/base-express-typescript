import { Request, Response, Router } from 'express'
import jwt from 'jsonwebtoken'
import { verify, generateToken } from '../middlewares/jwt'

const router = Router()

router.get('/test', (req, res) => {
  res
    .status(200)
    .json({ NODE_ENV: process.env.NODE_ENV })
})

router.post('/signin', (req, res) => {
  const { email, password } = req.body

  res
    .status(200)
    .json({ token: generateToken(email) })
})

router.get('/:id', [verify], (req: Request, res: Response) => {
  res.status(200)
    .json({
      id: req.params.id
    })
})

export default router
