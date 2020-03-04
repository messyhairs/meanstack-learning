const express = require('express');
const app = express();
const formrouter = express.Router();
let form_models = require('../models/userdetailmodel');
const errormessage = 'is already exist';

formrouter.route('/moredetails').post(function (req, res) {
    let formsdatas = new form_models(req.body);

    formsdatas.save()
        .then(formsdatas => {
            res.status(200).json({ 'messages': 'userdetails  added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
module.exports = formrouter;