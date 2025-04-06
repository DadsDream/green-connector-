const mongoose = require('mongoose');
const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    ordered: {
        type: String,
        required: true,
        default: "0",
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    seller: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
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

module.exports = mongoose.model("Product", productScheme);