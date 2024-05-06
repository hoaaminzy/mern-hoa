import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouters from "./routes/user.route.js";
import authRouters from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser())
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((err) => console.log(err));
// const PORT = process.env.PORT

app.use("/api/user", userRouters);
app.use("/api/auth", authRouters);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
