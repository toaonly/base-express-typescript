import { Router } from 'express'

const router = Router()

router.get('/test', (req, res) => {
  res
    .status(200)
    .json({ result: true })
})

router.post('/signin', (req, res) => {
  const { email, password } = req.body

  res
    .status(200)
    .json({ email, password })
})

export default router
