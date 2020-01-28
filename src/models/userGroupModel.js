var mongoose = require('mongoose');

var userGroupSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true
    },
    gender:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    phoneNumber:{
        type:Number,
        maxlength:10
    },
    bloodGroupName:{
        type: String,
        trim:true
    },
    districtCode: {
        type: Number,
        required: true
    },
    stateUniqueName: {
        type: String,
        trim: true
    },
    countryUniqueName: {
        type: String,
        trim: true
    },
    districtUniqueName:{
        type: String,
        trim: true
    }
})

var userGroup = mongoose.model("userGroup", userGroupSchema)


module.exports.userGroup = userGroup;