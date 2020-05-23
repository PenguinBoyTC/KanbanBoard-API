const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: false,
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cards', CardSchema);