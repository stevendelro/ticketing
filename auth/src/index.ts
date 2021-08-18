import express from 'express'
import { json } from 'body-parser'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json('hi there')
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
