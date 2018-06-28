'use strict'
import awsServerlessExpress from 'aws-serverless-express'
import express from 'express'
const app = express()
const server = awsServerlessExpress.createServer(app)

app.get('/teste', (req,res) => {
    res.send({robsera: 'otavera'})
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)