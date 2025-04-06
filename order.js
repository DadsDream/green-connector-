const mongoose = require('mongoose');
const orderScheme = new mongoose.Schema({
    product: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    seller: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    buyer: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    requested: {
        type: String,
        required: true,
    },
    code: {
        type: String,
    },
    expire: {
        type: Number,
    },
    handed: {
        type: String,
    }
});

module.exports = mongoose.model("Order", orderScheme);