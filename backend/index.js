const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
var bodyParser = require("body-parser");
const app = express();
dotenv.config();
app.use(cors);
app.use(bodyParser.json({ type: "application/*+json" }));

app.use(cookieParser());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("connected to MBDB");
});
//Route
app.use("/v1/auth", authRoute);
app.listen(9000, () => {
  console.log("server is running");
});
