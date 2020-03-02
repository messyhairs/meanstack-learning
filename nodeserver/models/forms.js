const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userschema = new mongoose.Schema({
    username: {
        type: String, lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
},
    {
        collection: 'users'
    });
userschema.plugin(uniqueValidator, { message: 'is already taken.' });
module.exports = mongoose.model('Usersdatas', userschema);
