import { Router, Request, Response } from "express";
import { Movies } from "./models";
import { MovieAddController } from "./controllers";

export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  const { genre } = req.query;

  const query = {} as any;

  if (genre) {
    query.genres = genre;
  }

  const movies = await Movies.find(query).limit(100);

  res.json(movies);
});

movieRouter.post("/2", async (req: Request, res: Response) => {
  await MovieAddController(req, res);
});

movieRouter.put("/3", async (req: Request, res: Response) => {
  const a = () => {};
});
