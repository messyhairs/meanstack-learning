const express = require('express');
const router = express.Router();
const userdatas = require('./users');
// Routes
router.get('/greetus', function (req, res) {
    res.send('howdy messy codes!');
});

router.get('/user', function (req, res) {
    res.send(userdatas);
});

// Return router
module.exports = router;