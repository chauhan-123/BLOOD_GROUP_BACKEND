var mongoose = require('mongoose');

var stateGroupSchema = new mongoose.Schema({
    stateName: {
        type: String,
        required: true,
        trim: true
    },
    stateCode: {
        type: Number,
        required: true
    },
    stateUniqueName: {
        type: String,
        required: true,
        trim: true
    },
    countryUniqueName: {
        type: String,
        required: true,
        trim: true
    }
})

var stateGroup = mongoose.model("stateGroup", stateGroupSchema)


module.exports.stateGroup = stateGroup;