const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')
//var router = express.Router()
const postRoute = require('./Route/post')
//mongoose
const mongoose = require('mongoose')
require('dotenv').config()

//midleware
app.use(cors())
app.use(bodyParser.json())
app.use('/post', postRoute)
app.use('/', postRoute)

//Connect to db
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { usrNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB connected successfully')
})
/*port */
const port = process.env.PORT || 2000

//listening to the server//
app.listen(port, () => {
  console.log(`server is loading from port:${port}`)
})
