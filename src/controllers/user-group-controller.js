const userModel = require('../models/userGroupModel');
const userGroup = userModel.userGroup;
const user_group = {
    getuserGroup: async (req, res) => {
        console.log(req.body, "=======>")
        // try{
        //     var data = {
        //         userName: req.body.userName,
        //         gender:req.body.gender,
        //         email:req.body.email,
        //         phoneNumber:req.body.phoneNumber,
        //         bloodGroupName:req.body.bloodGroupName,
        //         districtCode:req.body.districtCode,
        //         stateUniqueName:req.body.stateUniqueName,
        //         countryUniqueName:req.body.countryUniqueName,
        //         districtUniqueName:req.body.districtUniqueName
        //     }
        //     var myData = new userGroup(data);
        //     myData.save().then(item => {
        //         res.status(200).json({ statusCode: 200, message: 'item saved to the database', result: item })
        //     })
        // } catch (e) {
        //     res.status(500).json({ statusCode: 500, error: e });
        // }
            try {
                let user = await userGroup.aggregate([{$match:{
                     "bloodGroupName":`${req.body.bloodGroup}`, 
                     "countryUniqueName":`${req.body.countryGroup}` , 
                     "stateUniqueName":`${req.body.stateGroup}` , 
                     "districtUniqueName":`${req.body.districtGroup}`}}])
                    res.status(200).json({ statusCode: 200, message: 'data successfully get from database', data: user })
            } catch (e) {
                res.status(500).json({ statusCode: 500, error: e });
            }
        
    }


};

module.exports = user_group;