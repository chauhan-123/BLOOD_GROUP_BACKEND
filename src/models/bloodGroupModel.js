var mongoose = require('mongoose');

var bloodGroupSchema = new mongoose.Schema({
    bloodGroupName:{
        type: String,
        required: true,
        trim:true
    }
})

var bloodGroup = mongoose.model("bloodGroup" , bloodGroupSchema)


module.exports.bloodGroup = bloodGroup;