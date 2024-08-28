const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const router=require("./route")
const app = express();
const cors=require("cors")
app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI) //MongoDB Atlas is being used,the URI is stored in the .env file for security reason.
  .then(() => app.listen(process.env.PORT, () => console.log("Connected and listening")))
  .catch((err) => console.log(err));

  app.use("/api",router)
