const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date, required: true },
    diseaseType: { type: String, required: true },
    // Add more fields as needed
}, { timestamps: true }); // Adding timestamps for createdAt and updatedAt

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
