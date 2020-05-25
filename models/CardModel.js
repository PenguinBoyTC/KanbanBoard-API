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
    resume: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: false,
    },
    phoneScreenRate: {
        type: Number,
        required: false,
        default: 0,
    },
    onsiteRate: {
        type: Number,
        required: false,
        default: 0,
    },
    behaviorRate: {
        type: Number,
        required: false,
        default: 0,
    },
    averageRate: {
        type: Number,
        required: false,
        default: 0,
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cards', CardSchema);