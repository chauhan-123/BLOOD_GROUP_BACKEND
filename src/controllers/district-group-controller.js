const districtModel = require('../models/districtGroupModel');
const districtGroup = districtModel.districtGroup;
const district_group = {
    getdistrictGroup: (req, res) => {
        console.log("====>" , req.body);
        // try{
        //     var data = {
        //         districtName: req.body.districtName,
        //         districtCode:req.body.districtCode,
        //         stateUniqueName:req.body.stateUniqueName,
        //         countryUniqueName:req.body.countryUniqueName
        //     }
        //     var myData = new districtGroup(data);
        //     myData.save().then(item => {
        //         res.status(200).json({ statusCode: 200, message: 'item saved to the database', result: item })
        //     })
        // } catch (e) {
        //     res.status(500).json({ statusCode: 500, error: e });
        // }
            try {
                districtGroup.aggregate([{$match:{"countryUniqueName":`${req.body.country}`,"stateUniqueName":`${req.body.state}`}}]).then((user, err) => {
                    res.status(200).json({ statusCode: 200, message: 'data successfully get from database', data: user })
                })
            } catch (e) {
                res.status(500).json({ statusCode: 500, error: e });
            }
        
    }


};

module.exports = district_group;