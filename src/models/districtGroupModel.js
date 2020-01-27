var mongoose = require('mongoose');

var districtGroupSchema = new mongoose.Schema({
    districtName: {
        type: String,
        required: true,
        trim: true
    },
    districtCode: {
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

var districtGroup = mongoose.model("districtGroup", districtGroupSchema)


module.exports.districtGroup = districtGroup;