const express = require('express')
const app = express()
const port = (process.env.NODE_ENV || 7001)
const queries = require("./queries")

app.get('/', (req, res, next) => {
    queries.getAll()
        .then(cats => res.json({cats}))
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})