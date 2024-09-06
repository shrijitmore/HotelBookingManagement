const User = require('../models/User');
const bcrypt = require('bcryptjs')
const createError = require('../utils/error.js')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");

module.exports = {}
dotenv.config()
module.exports.register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            ...req.body,
            password: hash,
        });
        await newUser.save();
        res.status(200).send("User Has Been Created")
    } catch (err){
        next(err)
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username});
        if(!user) return next(createError(404, "User Not Found"))
        
        const isPasswordCorrect = await  bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(403, 'Wrong Password'))

        // Sign JWT token
        const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.JWTToken);

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({details: {...otherDetails}, isAdmin}) 
    } catch (err){
        next(err)
    }
}
