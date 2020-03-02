const express = require('express');
const app = express();
const formrouter = express.Router();
let form_models = require('../models/forms');
const errormessage = 'is already exist';

formrouter.route('/add').post(function (req, res) {
    let formsdatas = new form_models(req.body);
    formsdatas.save().then(formsdatas => {
        res.status(200).json({ message: 'datas added sucessfully' })
    })
        .catch(err => {

            res.status(400).send('sorry unable to add datas');
        });
});
module.exports = formrouter;