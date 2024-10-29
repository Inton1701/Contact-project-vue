// npm install mongoose
const mongoose = require('mongoose');

// dito kayo mag iinitialize ng connection
const connectDB = async () => {
  try {
    // yung process.env.CONNECTION_STRING ay makikita nyo sa .env na file
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connected: ", connect.connection.host, connect.connection.name);
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
