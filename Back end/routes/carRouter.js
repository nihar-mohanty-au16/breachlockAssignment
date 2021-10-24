const router = require("express").Router();
const Cars = require("../models/cars");

router.get("/:carNumber", async (req, res) => {
  const carNumber = req.params.carNumber;
  try {
    const cars = await Cars.find({ carNumber });
    res.status(200).json({
      status: "success",
      data: {
        cars,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  const { carNumber, name } = req.body;

  try {
    const car = new Cars({
      name,
      carNumber,
      parkingSlot: Math.floor(Math.random() * 10),
    });
    car.save();
    if (car.length > 10) {
      res.status(404).json({
        message: "slots are full",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          slotNumber: car.parkingSlot,
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

router.delete("/:slotNumber", async (req, res) => {
  const slotNumber = req.params.slotNumber;
  try {
    const car = await Cars.find({ parkingSlot: slotNumber });

    let unpark;
    if (car) {
      unpark = await Cars.findOneAndDelete({ parkingSlot: slotNumber });
    }

    res.status(201).send(unpark);
  } catch (err) {}
});

module.exports = router;
