import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (req, _res) => {
  const { date, weather, visibility, comment } = req.body

  diaryServices.addDiary({
    date,
    weather,
    visibility,
    comment
  }
  )
})

router.get('/:id', (req, res) => {

  const diary = diaryServices.findById(+req.params.id)

  res.send(diary)
})

export default router
