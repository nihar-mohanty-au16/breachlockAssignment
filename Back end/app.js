const express = require("express");
const carRouter = require("./routes/carRouter");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/v1/cars", carRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
