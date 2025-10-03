import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); //to parse JSON
app.use(cookieParser()); //for refresh tokens in cookies
app.use(cors());

app.get("/", (req, res) => {
  res.send("TASKKAR API IS RUNNING");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
