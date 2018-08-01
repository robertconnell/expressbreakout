const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res, next) => {
    res.send('scared cat')
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})