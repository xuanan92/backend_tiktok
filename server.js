import express from 'express'
import mongoose from 'mongoose'
import Extrain from './data.js'

// app config
const app = express()
const port = process.env.PORT || 8000

// DB config
const connection_url = "mongodb+srv://nguyentruongxuananhn:superAnIT01!@cluster0.ytehc68.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


// api endpoint
app.get('/', (req, res) => res.status(200).send("hllo there"))
app.get('/posts', (req, res) => res.status(200).send(Extrain))

app.post('/posts', (req, res) => {
  const dbName = req.body
  Data.create(dbName, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})


// app listener
app.listen(port, () => console.log(`Listen on port: ${port}`))
