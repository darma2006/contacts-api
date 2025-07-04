const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let dbConnection;

module.exports = {
  connectToServer: async function () {
    try {
      await client.connect();
      dbConnection = client.db("contactsDB"); // This should match your DB name
      console.log("✅ Connected to MongoDB");
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error);
    }
  },
  getDb: function () {
    return dbConnection;
  }
};
