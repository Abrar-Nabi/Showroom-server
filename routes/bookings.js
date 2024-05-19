

const express = require('express');
const router = express.Router();
const Booking =
	require('../models/Bookings');


router.route('/').get((req, res) => {
	Booking.find()
		.then(Bookings =>
			res.json(Bookings))
		.catch(err =>
			res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const { Name, date, phone, email,carModel,carVariant,carColour,testDrive,paymentType } = req.body;
	const newBooking =
		new Booking({ Name, date, phone, email,carModel,carVariant,carColour,testDrive,paymentType });

	newBooking.save()
		.then(savedBooking => res.json(savedBooking))
		.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
	Booking.findById(req.params.id)
		.then(Booking => {
			Booking.Name =
				req.body.Name;
			Booking.date =
				req.body.date;
				Booking.phone =
				req.body.phone;
				Booking.email =
				req.body.email;
				Booking.carModel =
				req.body.carModel;
				Booking.carVariant =
				req.body.carVariant;
				Booking.carColour =
				req.body.carColour;
				Booking.testDrive =
				req.body.testDrive;
				Booking.paymentType =
				req.body.paymentType;

			Booking.save()
				.then(
					() =>
						res.json('Booking updated!'))
				.catch(
					err => res.status(400)
						.json('Error: ' + err));
		})
		.catch(
			err => res.status(400)
				.json('Error: ' + err));
});


router.route('/delete/:id')
	.delete((req, res) => {
		Booking.findByIdAndDelete(req.params.id)
			.then(
				() => res
					.json('Booking deleted.'))
			.catch(
				err => res
					.status(400).json('Error: ' + err));
	});

module.exports = router;
