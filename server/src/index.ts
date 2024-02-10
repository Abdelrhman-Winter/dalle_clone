// src/index.ts
import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect";
import dalleRoutes from "./routes/dalleRoutes";
// import postRoutes from "./routes/postRoutes";

dotenv.config();

const app: express.Application = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8081;

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, From DALL-E!");
});
var colors = require("colors/safe");

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(colors.cyan(`Server is running on http://localhost:${PORT}`));
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
