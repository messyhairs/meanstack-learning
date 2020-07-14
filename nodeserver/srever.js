const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./database/db');
const formrouters = require('./apis/formapi');
const logrouters = require('./apis/logapi');
const userdatas = require('./apis/userdetailsapi');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/users', formrouters);
app.use('/log', logrouters);
app.use('/log', userdatas);
app.use(express.static("public"));

const port = process.env.PORT || 8090;

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
