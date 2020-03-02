const express = require('express');
const app = express();
const formrouter = express.Router();
let form_models = require('../models/forms');
const errormessage = 'is already exist';

formrouter.route('/add').post(function (req, res) {
    let formsdatas = new form_models(req.body);
    form_models.find({ email: formsdatas.email }, function (err, docs) {
        if (docs.length) {
            res.status(400).send('Email already exists');
        }
        else {
            formsdatas.save()
                .then(formsdatas => {
                    res.status(200).json({ 'messages': 'datas are added successfully' });
                })
                .catch(err => {
                    res.status(400).send("unable to save to database");
                });
        }
    });
});
module.exports = formrouter;