const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parkingSlot: {
      type: String,
      required: true,
      unique: true,
    },
    carNumber: {
      type: Number,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cars = mongoose.model("Cars", CarSchema);

module.exports = Cars;
