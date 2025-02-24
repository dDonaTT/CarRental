const express = require("express");
const carController = require("../controllers/carController");

const router = express.Router();

router.get("/rental-cars", carController.getRentalCar);

module.exports = router;