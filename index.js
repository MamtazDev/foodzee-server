import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import messagesRoutes from "./modules/messages/messages.routes.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/message", messagesRoutes);

app.get("/", (req, res) => {
  res.send("Server is runnig");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
