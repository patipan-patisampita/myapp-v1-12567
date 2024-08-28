const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.status(200).json({ status: true, message: 'Home API' })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`SERVER running at http://localhost:${PORT}`)
})