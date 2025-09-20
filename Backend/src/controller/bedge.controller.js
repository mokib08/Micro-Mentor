const userModel = require("../model/user.model")
const bedgeModel = require("../model/bedge.model")

async function awardBedge(req, res ) {
    try {
        const { userId, bedgeKey } = req.body;

        //find user
        const user = await userModel.findById(userId)

        if (!user) {
            return res.status(404).json({message : "User not found"})
        }

        //find bedge
        const bedge = await bedgeModel.findOne({key: bedgeKey})

        if (!bedge) {
            return res.status(404).json({message : "Bedge not found"})
        }

        // Check if already awarded
        const awardedAlready = user.bedges.some(
            (b) => b.bedge.toString() === bedge._id.toString()
        )

        if (awardedAlready) {
            return res.status(400).json({message: "Bedge already awarded"})
        }

        // Add bedge
        user.bedges.push({bedge: bedge_id, awardedAt: new Date() })

        // Save user
        await user.save();

        res.status(200).json({
            message: "Bedge awarded successfully",
            bedge: bedge.name
        })


    } catch (err) {
        console.error("Error in bedge controller",err)
        return res.status(500).json({message: "Server error"})
    }
}

module.exports = {
    awardBedge
}