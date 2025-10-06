const userModel = require("../model/user.model");
const bedgeModel = require("../model/bedge.model");

//Get all bedges (public list)
async function getAllBedges(req, res) {
  try {
    const bedges = await bedgeModel.find();
    console.log(bedges);

    res.status(201).json({
      message: 'this is previous bedges',
      bedges
    })
    
  } catch (err) {
    console.error("Error occur in getAllBedge", err);
    return res.status(500).json({ message: "Server error" });
  }
}

// Create a new bedge admin only
async function createBedge(req, res) {
  try {
    const {
      name,
      key,
      description,
      iconUrl,
      criteriaType,
      criteriaValue,
      pointsAwarded,
    } = req.body;

    const existing = await bedgeModel.findOne({ key });

    if (existing) {
      return res.status(400).json({ message: "Bedge key must be unique" });
    }

    const bedge = new bedgeModel({
      name,
      key,
      description,
      iconUrl,
      criteriaType,
      criteriaValue,
      pointsAwarded,
    });
      
      await bedge.save();

      res.status(201).json({
          message: "Bedge created successfully",
          bedge
      })
  } catch (err) {
    console.error("Error in createBedge controller : ", err);
    return res.status(500).json({ message: "Server error" });
  }
}

async function awardBedge(req, res) {
  try {
    const { userId, bedgeKey } = req.body;

    //find user
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //find bedge
    const bedge = await bedgeModel.findOne({ key: bedgeKey });

    if (!bedge) {
      return res.status(404).json({ message: "Bedge not found" });
    }

    // Check if already awarded
    const awardedAlready = user.bedges.some(
      (b) => b.bedge.toString() === bedge._id.toString()
    );

    if (awardedAlready) {
      return res.status(400).json({ message: "Bedge already awarded" });
    }

    // Add bedge
    user.bedges.push({ bedge: bedge._id, awardedAt: new Date() });

    // Save user
    await user.save();

    res.status(200).json({
      message: "Bedge awarded successfully",
      bedge: bedge.name,
      user
    });
  } catch (err) {
    console.error("Error in bedge controller", err);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
    getAllBedges,
    createBedge,
  awardBedge,
};
