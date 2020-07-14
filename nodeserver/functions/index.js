const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const messyapi = require('./userdatas/userdeetails');
const imageserver = require('./imageapi/imageapis');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));

app.get('/get-timestamp', (request, response) => {
    response.send(`${Date.now()}`)
});
app.get('/welcome', (request, response) => {
    response.send('hello messy codes')
});
app.use('/userdetails', messyapi);
app.use('/image', imageserver);



exports.app = functions.https.onRequest(app);
