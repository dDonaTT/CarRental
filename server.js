const express = require("express");

const { connectToDatabase } = require("./lib/rent");

const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}
startServer();
