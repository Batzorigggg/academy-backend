import { Router, Request, Response } from "express";
import { Movies } from "./models";

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

movieRouter.get("/popular", async (req: Request, res: Response) => {
  try {
    const movies = await Movies.find({}).sort({ "imdb.rating": -1 }).limit(250);

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch popular movies" });
  }
});

movieRouter.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movies.findById(id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movie" });
  }
});



movieRouter.post("/addMovie", async (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ success: true });
});
