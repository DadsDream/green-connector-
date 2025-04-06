const mongoose = require('mongoose');
const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pass: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    }

});

module.exports = mongoose.model("User", userScheme);