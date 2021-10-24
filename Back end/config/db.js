require("dotenv").config();
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

const connectDB = () => {
  mongoose
    .connect(DB)
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
