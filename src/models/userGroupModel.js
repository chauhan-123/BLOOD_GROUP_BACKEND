var mongoose = require('mongoose');

var userGroupSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    gender:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    phoneNumber:{
        type:Number,
        required:true,
        maxlength:10
    },
    bloodGroupName:{
        type: String,
        required: true,
        trim:true
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

var userGroup = mongoose.model("userGroup", userGroupSchema)


module.exports.userGroup = userGroup;