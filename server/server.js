const express = require('express')
const app = express()
const mongoose = require('mongoose')

const {LISTENING_PORT, MONGO_URL} = require('./server.config.json')

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())


app.listen(LISTENING_PORT, () => console.log(`Server Started On Port ${LISTENING_PORT}`))