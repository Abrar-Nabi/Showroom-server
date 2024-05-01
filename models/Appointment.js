// models/Appointment.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
    Name: { type: String, required: true },
    date: { type: Date, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    carModel: { type: String, required: true },
    carVariant: { type: String, required: true },
    carColour: { type: String, required: true },
    testDrive: { type: String, required: true }, 
    paymentType: { type: String, required: true }, 
	// Add more fields as needed
});

const Appointment =
	mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
