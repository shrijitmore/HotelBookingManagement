const createError = require('../utils/error.js')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config()

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers.Authtoken;
    if (!token) {
        return next(createError(401, "You are not authenticated"))
    }
    jwt.verify(token, process.env.JWTToken, (err, user) => {
        if (err) return next(createError(401, "Token is not valid"))
        req.user = user
        next()
    })
};

module.exports.verifyUser = (req, res, next) => {
    module.exports.verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized"))
        }
    })
}

module.exports.verifyAdmin = (req, res, next) => {
    module.exports.verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized"))
        }
    })
}
