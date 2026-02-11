import express from "express";
import type { Request, Response } from "express";
import mongoose from "mongoose";
import type { Document } from "mongoose";
import { Schema, model } from "mongoose";
import bodyParser from "body-parser";
import { movieRouter } from "./movies/routes.ts";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/movie", movieRouter);

mongoose
  .connect(
    "mongodb+srv://ekzorigoo_db_user:qdgZAdNZCKRV7dSP@backend-lesson.nrl7x9z.mongodb.net/sample_mflix?appName=backend-lesson",
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(3000, () => console.log("Server running on port 3000"));
