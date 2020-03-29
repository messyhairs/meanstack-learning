const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const messyapi = require('./userdatas/userdeetails');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/get-timestamp', (request, response) => {
    response.send(`${Date.now()}`)
});
app.get('/welcome', (request, response) => {
    response.send('hello messy codes')
});
app.use('/userdetails', messyapi);


exports.app = functions.https.onRequest(app);
