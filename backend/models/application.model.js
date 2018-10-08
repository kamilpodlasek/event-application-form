const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
});

module.exports = mongoose.model('Application', ApplicationSchema);
