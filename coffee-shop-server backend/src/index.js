import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import menuRoutes from "./routes/menu.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Coffee shop server running on port " + (process.env.PORT || 3000));
});

app.use("/menu", menuRoutes);

// start
const PORT = process.env.PORT || 3000;

connectDB(process.env.MONGODB_URI, process.env.DB_NAME).then(() => {
  app.listen(PORT, () => {
    console.log(`Coffee shop server running on port ${PORT}`);
  });
});
