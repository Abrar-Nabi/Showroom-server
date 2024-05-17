const express = require('express');
const router = express.Router();
const Appointment = require('../models/Booking');

// Get all appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Add new appointment
router.post('/add', async (req, res) => {
    const { patientName, doctorName, date, phone, email, dob, diseaseType } = req.body;
    try {
        const newAppointment = new Appointment({ patientName, doctorName, date, phone, email, dob, diseaseType });
        const savedAppointment = await newAppointment.save();
        res.json(savedAppointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update appointment data
router.put('/update/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.json('Appointment updated!');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete appointment
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.json('Appointment deleted.');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
