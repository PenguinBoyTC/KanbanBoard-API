const UserModel = require('../models/UserModel');

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function (app) {
    app.post('/login', async (req, res) => {
        if (!req.body.username || !req.body.password) {
            res.status("400");
            res.json({message:"Invalid details!"});
        }
        try {
            const existUser = await UserModel.findOne({ username: req.body.username })
            const match = await bcrypt.compare(req.body.password, existUser.password);
            if (match) {
                res.json({token: existUser.password + Date.now()})
            } else {
                res.status("400").json({message: "Wrong password"})
            }
        } catch (err) {
            res.status("400").json({message: "User does not exist"})
        }
    })
    app.post('/register', async (req, res) => {
        if (!req.body.username || !req.body.password) {
            res.status("400");
            res.json({message:"Invalid details!"});
        }
        try {
            const hash = await bcrypt.hash(req.body.password, saltRounds)
            const newUser = new UserModel({
                username: req.body.username,
                password: hash,
            });
            const saveUser = await newUser.save();
            res.json({message: `Create ${req.body.username} successful`});
        } catch (err) {
            res.status("400").json({message: "User Name ready exist"})
        }
    })
}