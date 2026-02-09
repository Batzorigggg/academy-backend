// import { MongoClient } from "mongodb";

// const uri =
//   "mongodb+srv://ekzorigoo_db_user:qdgZAdNZCKRV7dSP@backend-lesson.nrl7x9z.mongodb.net/sample_mflix?appName=backend-lesson";

// const client = new MongoClient(uri);

// const run = async () => {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("sample_mflix").command({ ping: 1 });

//     const aa = await client.db("sample_mflix").collection("movies").findOne();
//     console.log(aa);

//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// };

// run();

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

// TypeScript interface for Student
// interface IStudent extends Document {
//   name: string;
//   age: number;
// }

// // Schema and Model
// const StudentSchema: Schema<IStudent> = new Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
// });

// const Student = model<IStudent>("Student", StudentSchema);

// // REST API Endpoints

// // GET all students
// app.get("/students", async (req: Request, res: Response) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (err) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// POST new student
// app.post("/students", async (req: Request, res: Response) => {
//   try {
//     const student = new Student(req.body);
//     await student.save();
//     res.status(201).json(student);
//   } catch (err) {
//     res.status(400).json({ error: "Invalid data" });
//   }
// });

// // Start server
app.listen(3000, () => console.log("Server running on port 3000"));
