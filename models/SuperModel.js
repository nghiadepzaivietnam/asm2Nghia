var mongoose = require('mongoose');

var SuperSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    price: {
        type: Number,
        min: 0
    },
    endow: {
        type: String,
    },
    insurance: {
        type: String,
    },
    transport: {
        type: String,
    },
    sectors: {
        type: String,
    },
    version: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
});

const SuperModel = mongoose.model('super', SuperSchema, 'supers');

module.exports = SuperModel;