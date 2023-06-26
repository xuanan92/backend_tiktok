import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Data from './data.js'
import Videos from './dbModel.js'

// app config
const app = express()
const port = process.env.PORT || 8000

// app middleware
app.use(express.json())
app.use(cors())

// DB config
const connection_url = "mongodb+srv://nguyentruongxuananhn:superAnIT01!@cluster0.ytehc68.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


// api endpoint
app.get('/', (req, res) => res.status(200).send("hllo there"))

app.get('/posts', (req, res) => res.status(200).send(Data))

app.get('/v2/posts', (req, res) => {
  Videos.find()
    .then((data) => {
      res.status(201).send(data)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})
app.post('/v2/posts', (req, res) => {
  const dbVideos = req.body
  // return promise and not callback anymore, so the Model.create data look for promise return, if it success then send data, else not send error
  Videos.create(dbVideos)
    .then((result) => {
      res.status(201).send(result) // result with result return id and __v differ from other options
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})


// app listener
app.listen(port, () => console.log(`Listen on port: ${port}`))
