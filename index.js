const express = require('express')
const app = express()
const logger = require('morgan')
require('dotenv').config()
require('./database/index')

//middleware logger
app.use(logger('dev'))

//parse application/x-www-form-urlencoded, 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log(req.body)
    return res.status(200).json({ status: true, message: 'Home API' })
})

const PORT = process.env.PORT || 3009

app.listen(PORT, () => {
    console.log(`SERVER running at http://localhost:${PORT}`)
})