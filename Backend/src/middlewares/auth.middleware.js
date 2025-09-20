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

module.exports = {
    authMiddleware
}