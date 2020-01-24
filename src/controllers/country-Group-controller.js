const countryModel = require('../models/countryGroupModel');
const countryGroup = countryModel.countryGroup;
const country_group = {
    getcountryGroup: (req, res) => {
        console.log("working on" , req.body)
        try{
            var data = {
                countryName: req.body.countryName,
                countryCode:req.body.countryCode,
                countryUniqueName:req.body.countryUniqueName
            }
            console.log(data , "data")
            var myData = new countryGroup(data);
            myData.save().then(item => {
                res.status(200).json({ statusCode: 200, message: 'item saved to the database', result: item })
            })
        } catch (e) {
            res.status(500).json({ statusCode: 500, error: e });
        }
    }


};

module.exports = country_group;