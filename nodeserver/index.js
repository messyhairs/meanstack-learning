const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyparser = require('body-parser');
const cors = require('cors');
const greetus = 'Howdy this messgae is from Messy Codes';
const messyapi = require('./apis/welcome');
app.use(cors());
app.get('/welcomemessages', (req, res) => {
    res.send(greetus);
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/greetings' , messyapi);

app.listen(PORT, () => {
    console.log('app is listen on', PORT);
});