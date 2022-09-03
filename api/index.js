const express = require('express')
const cors = require('cors')

const app = express()
const port = 5500
const transactionArr = []

app.get('/transaction', (req, res) => {
    res.send(JSON.stringify(transactionArr))
})

app.post('/transaction', (req, res) => {
    let transaction = req.body
    transactionArr.push(transaction)
    res.send(JSON.stringify('solve'))
    console.log(transactionArr)
})

app.listen(port, () => {
    console.log(`execute in http://localhost:${port}`)
})