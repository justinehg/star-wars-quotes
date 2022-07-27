const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();



MongoClient.connect('mongodb+srv://jhoang:Quynh2001@cluster0.mcjk6.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.listen(3000, function() {
            console.log('listening on 3000')
        })
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        })
        app.post('/quotes', (req, res) => {
            console.log(req.body)
        })
    })
    .catch(console.error)

