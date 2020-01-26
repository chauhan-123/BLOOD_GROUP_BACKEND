const bloodModel = require('../models/bloodGroupModel');
const bloodGroup = bloodModel.bloodGroup;
const blood_group = {
    getBloodGroup: (req, res) => {
        try {
            bloodGroup.find().then((user, err) => {
                res.status(200).json({ statusCode: 200, message: 'data successfully get from database', data: user })
            })
        } catch (e) {
            res.status(500).json({ statusCode: 500, error: e });
        }

// try{
        //     var data = {
        //         bloodGroupName: req.body.bloodGroupName
        //     }
        //     var myData = new bloodGroup(data);
        //     myData.save().then(item => {
        //         res.status(200).json({ statusCode: 200, message: 'item saved to the database', result: item })
        //     })
        // } catch (e) {
        //     res.status(500).json({ statusCode: 500, error: e });
        // }
    }


};

module.exports = blood_group;