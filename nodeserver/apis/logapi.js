const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const notifier = require('node-notifier');
const User = require('../models/logdetails');

router.post('/login', (req, res) => {

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
	let story = 'user details added successfully';
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
					console.log(newUser.email);
					let transporter = nodeMailer.createTransport({
						host: 'smtp.gmail.com',
						port: 465,
						secure: true,
						auth: {
							user: 'your@gmail.com',
							pass: 'yourpassword'
						}
					});
					let mailOptions = {
						from: '"Messy Codes" <userinterface18@gmail.com>', // sender address
						to: newUser.email, // list of receivers
						subject: story, // Subject line
						text: req.body.body, // plain text body
						html: '<img src="https://starsunfolded.com/wp-content/uploads/2016/02/Shirley-Setia.jpg">' // html body
					};
					transporter.sendMail(mailOptions, (error, info) => {
						if (error) {
							return console.log(error);
						}
						console.log('Message %s sent: %s', info.messageId, info.response);
						res.render('index');
					});
					return res.status(201).send({
						message: "User added successfully."
					});
				}
			});
		}
		if (res.status(201)) {
			notifier.notify({
				title: 'Howdy',
				message: newUser.name
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

router.route('/edit/:id').get(function (req, res) {
	let id = req.params.id;
	User.findById(id, function (err, newUser) {
		res.json(newUser);
	});
});

router.route('/update/:id').post(function (req, res) {
	User.findById(req.params.id, function (err, newUser) {
		if (!newUser) {
			res.send('error');
		}
		else {
			newUser.name = req.body.name;
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

router.route('/delete/:id').get(function (req, res) {
	User.findByIdAndRemove({ _id: req.params.id }, function (err, newUser) {
		if (err) res.json(err);
		else res.json('Successfully removed');
	});
});


module.exports = router; 
