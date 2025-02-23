const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("MONGO_URI is not defined");
}

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("carRental");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; 
  }
}

module.exports ={connectToDatabase, client}