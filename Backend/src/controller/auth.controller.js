const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    try {
        const {
            name,
            email,
            password,
        } = req.body;

        const isUserAlreadyExists = await userModel.findOne({
            email
        });

        if (isUserAlreadyExists) {
            return res
                .status(409)
                .json({ message: "username and email already exists" });
        }

        const hash = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            password: hash,
        });

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,                
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "30d",
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,            }
        });
    } catch (err) {
        console.error("Error in registerUser : ", err)
        res.status(500).json({message : 'Internal server error'})
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({email}).select('+password')

        if (!user) {
            return res.status(401).json({message : "Invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password, user.password || '')

        if (!isMatch) {
            return res.status(401).json({message : "Invalid credentials"})
        }

        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: '30d' })
        
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            maxAge : 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            message: "User loggedIn Successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (err) {
        console.error('Error in login user : ', err)
        return res.status(500).json({message : 'Internal server error'})
    }
}

async function getCurrentUser(req, res) {
    return res.status(200).json({
        message: "Current user fetched successfully",
        user: req.user
    })
}

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
};
