var mongoose = require('mongoose');

var getEmailSchema = new mongoose.Schema({
    email:{
        type: String,
        trim:true
    }
})

var getEmail = mongoose.model("getEmail" , getEmailSchema)


module.exports.getEmail = getEmail;