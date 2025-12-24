import { Router, Request, Response } from "express";
import { Movies } from "./models";
import { MovieAddController } from "./controllers";

export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  try {
    const movie = await Movies.findOne({ title: "The Great Train Robbery" });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving movie" });
  }
});

movieRouter.post("/2", async (req: Request, res: Response) => {
  await MovieAddController(req, res);
});

movieRouter.put("/3", async (req: Request, res: Response) => {
  const a = () => {};
});
