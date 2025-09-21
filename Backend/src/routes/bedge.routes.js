const express = require("express")
const bedgeController = require("../controller/bedge.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const router = express.Router();

//GET /api/bedges/ == PUBLIC
router.get('/', bedgeController.getAllBedges)

// POST /api/bedges/ == Admin only
router.post('/', bedgeController.createBedge)

// POST /  ==> assign bedge to a user
router.post('/users/:id/bedges',authMiddleware.authMiddleware, authMiddleware.isAdmin, bedgeController.awardBedge)



module.exports = router;