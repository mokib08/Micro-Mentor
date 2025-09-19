const userModel = require("../model/user.model")

async function register(req, res) {
    const { username, email, password, fullName: { firstName, lastName } } = req.body;

    
}