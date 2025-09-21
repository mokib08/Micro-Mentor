const userModel = require("../model/user.model")
const jwt = require("jsonwebtoken")

async function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({message : 'Unauthorized'})
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = decoded;

        req.user = user;  //attached user info to request

        next();
    } catch (err) {
        return res.status(401).json({message: "Unauthorized"})
    }
}

async function isAdmin(req, res, next) {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        return res.status(404).json({message : "not authorized as Admin"})
    }
}

module.exports = {
    authMiddleware,
    isAdmin
}