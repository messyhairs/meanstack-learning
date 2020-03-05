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
				// return res.status(201).send({
				// 	message: "User Logged In"
				// });
				res.send(user);
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
router.route('/userdetails').get(function (req, res) {
	let newUser = new User();
	newUser.find(function (err, newUser) {
		if (err) {
			console.log(err);
		}
		else {
			res.json(newUseres);
		}
	});
});

// Defined edit route
router.route('/edit/:id').get(function (req, res) {
	// let newUser = new User();
	let id = req.params.id;
	User.findById(id, function (err, newUser) {
		res.json(newUser);
	});
});

//  Defined update route
router.route('/update/:id').post(function (req, res) {
	// let newUser = new User();
	User.findById(req.params.id, function (err, next, newUser) {
		if (!newUser)
			return next(new Error('Could not load Document'));
		else {
			newUser.username = req.body.username;
			newUser.email = req.body.email;
			newUser.mobilenumber = req.body.mobilenumber;

			newUser.save().then(newUser => {
				res.json('Update complete');
			})
				.catch(err => {
					res.status(400).send("unable to update the database");
				});
		}
	});
});

// Defined delete | remove | destroy route
router.route('/delete/:id').get(function (req, res) {
	// let newUser = new User();
	User.findByIdAndRemove({ _id: req.params.id }, function (err, newUser) {
		if (err) res.json(err);
		else res.json('Successfully removed');
	});
});


module.exports = router; 
