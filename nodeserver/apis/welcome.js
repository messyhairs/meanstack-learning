const express = require('express');
const router = express.Router();
const userdatas = require('../userdatas/users');
// Routes
router.get('/greetus', function (req, res) {
    res.send('howdy messy codes!');
});

router.get('/userdetails', function (req, res) {
    res.send(userdatas);
});

// Return router
module.exports = router;