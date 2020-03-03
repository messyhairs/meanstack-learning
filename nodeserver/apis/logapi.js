// Importing modules 
const express = require('express');
const router = express.Router();

// Importing User Schema 
const User = require('../models/logdetails');

// User login api 
router.post('/login', (req, res) => {

	// Find user with requested email 
	User.findOne({ email: req.body.email }, function (err, user) {
		if (user === null) {
			return res.status(400).send({
				message: "User not found."
			});
		}
		else {
			if (user.validPassword(req.body.password)) {
				return res.status(201).send({
					message: "User Logged In",
				})
			}
			else {
				return res.status(400).send({
					message: "Wrong Password"
				});
			}
		}
	});
});

// User signup api 
router.post('/signup', (req, res, next) => {
	let newUser = new User();
	newUser.name = req.body.name,
		newUser.email = req.body.email
	newUser.setPassword(req.body.password);
	User.find({ email: newUser.email }, function (err, docs) {
		if (docs.length) {
			return res.status(400).send({
				message: "user email already exist"
			});
		} else {
			newUser.save((err, User) => {
				if (err) {
					return res.status(400).send({
						message: "Failed to add user."
					});
				}
				else {
					return res.status(201).send({
						message: "User added successfully."
					});
				}
			});
		}
	});

});

module.exports = router; 
