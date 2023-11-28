const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    }
});

const Players = mongoose.model('Players', PlayerSchema)
module.exports = Players;