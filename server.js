const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app =express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
dotenv.config();