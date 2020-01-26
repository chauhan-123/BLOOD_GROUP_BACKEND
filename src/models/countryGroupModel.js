var mongoose = require('mongoose');

var countryGroupSchema = new mongoose.Schema({
    countryName:{
        type: String,
        required: true,
        trim:true
    },
    countryCode:{
         type:String, 
         required:true 
    },
    countryUniqueName:{
     type:String,
     required:true,
     trim:true
    }
})

var countryGroup = mongoose.model("countryGroup" , countryGroupSchema)


module.exports.countryGroup = countryGroup;