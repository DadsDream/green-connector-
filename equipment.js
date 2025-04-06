const mongoose = require('mongoose');
const equipScheme = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    rent: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    created: {
        type: String,
        required: true,
    },
    last_updated: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Equipment", equipScheme);
