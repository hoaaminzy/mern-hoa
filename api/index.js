import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((err) => console.log(err));
const app = express();
// const PORT = process.env.PORT
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
