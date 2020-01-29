 const userModel = require('../models/userGroupModel');
const userGroup = userModel.userGroup;
var nodemailer = require('nodemailer');

const user_group = {
    getEmailInformation: async (req, res) => {
        try {
            userGroup.find({'email':req.body.info}, (err , user ) => {
        if (err) res.status(401).json({ statusCode: 401, message: 'not a valid email id' });
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'chauhan1995sumit@gmail.com',
                pass: 'Sumit@12345'
            }
        });
        var mailOptions = {
            from: 'chauhan1995sumit@gmail.com',
            to: req.body.info,
            text: 'resend email',
            subject: 'Sending Email using Node.js',
       
            html: '<p>Click</p> <h1>Hello sir/mam <p> Hope u are doing well. I need a blood group , Please help me.</p><br><h5>Thanks & Regards<br> By sender</h5></h1> '
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
      })
        } catch(e){
            res.status(500).json({ statusCode: 500, error: e });
        }
        
    }


};

module.exports = user_group;