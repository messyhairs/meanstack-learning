const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userschema = new mongoose.Schema({
    mobilenumber: {
        type: Number
    },
    gender: {
        type: String
    },
    dob: {
        type: Date
    },
    useremail: {
        type: String
    },
    status:{
        type: Boolean
    }
},
    {
        collection: 'userdetails'
    });
userschema.plugin(uniqueValidator, { message: 'is already taken.' });
module.exports = mongoose.model('Moredetails', userschema);
