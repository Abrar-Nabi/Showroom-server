// routes/appointments.js

const express = require('express');
const router = express.Router();
const Appointment =
	require('../models/Appointment');

// Get all appointments
router.route('/').get((req, res) => {
	Appointment.find()
		.then(appointments =>
			res.json(appointments))
		.catch(err =>
			res.status(400).json('Error: ' + err));
});

// Add new appointment
router.route('/add').post((req, res) => {
	const { Name, date, phone, email,carModel,carVariant,carColour,testDrive,paymentType } = req.body;
	const newAppointment =
		new Appointment({ Name, date, phone, email,carModel,carVariant,carColour,testDrive,paymentType });

	newAppointment.save()
		.then(savedAppointment => res.json(savedAppointment))
		.catch(err => res.status(400).json('Error: ' + err));
});

// Update appointment data
router.route('/update/:id').post((req, res) => {
	Appointment.findById(req.params.id)
		.then(appointment => {
			appointment.Name =
				req.body.Name;
			appointment.date =
				req.body.date;
				appointment.phone =
				req.body.phone;
				appointment.email =
				req.body.email;
				appointment.carModel =
				req.body.carModel;
				appointment.carVariant =
				req.body.carVariant;
				appointment.carColour =
				req.body.carColour;
				appointment.testDrive =
				req.body.testDrive;
				appointment.paymentType =
				req.body.paymentType;

			appointment.save()
				.then(
					() =>
						res.json('Appointment updated!'))
				.catch(
					err => res.status(400)
						.json('Error: ' + err));
		})
		.catch(
			err => res.status(400)
				.json('Error: ' + err));
});

// Delete appointment
router.route('/delete/:id')
	.delete((req, res) => {
		Appointment.findByIdAndDelete(req.params.id)
			.then(
				() => res
					.json('Appointment deleted.'))
			.catch(
				err => res
					.status(400).json('Error: ' + err));
	});

module.exports = router;
