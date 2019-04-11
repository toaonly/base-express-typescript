import { Router, RouterOptions } from 'express'

const router = Router()

router.post('/signin', (req, res) => {
  const { email, password } = req.body

  res
    .status(200)
    .json({ email, password })
})

export default router
