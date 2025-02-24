const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/my-profile", authMiddleware.authenticate, userController.getProfile);

module.exports = router;