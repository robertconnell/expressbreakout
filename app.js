const express = require('express')
const app = express()
const port = 7001 || process.env.NODE_ENV
const queries = require("./queries")

app.get('/', (req, res, next) => {
    queries.getAll()
        .then(cats => res.json({cats}))
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})