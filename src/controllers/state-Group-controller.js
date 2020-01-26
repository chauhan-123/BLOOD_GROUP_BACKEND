const stateModel = require('../models/stateGroupModel');
const stateGroup = stateModel.stateGroup;
const state_group = {
    getstateGroup: (req, res) => {
            try {
                stateGroup.find().then((user, err) => {
                    res.status(200).json({ statusCode: 200, message: 'data successfully get from database', data: user })
                })
            } catch (e) {
                res.status(500).json({ statusCode: 500, error: e });
            }
        
    }


};

module.exports = state_group;