import { Request, Response } from "express";
import { Movies } from "./models.ts";
import { cp } from "node:fs";

export const MoviesController = async (req: Request, res: Response) => {
  const movie = await Movies.find({}).limit(100);
  res.send(movie);
};
export const MovieIdController = async (req: Request, res: Response) => {
  // const movie = await Movies.findOne({ title: "The Great Train Robbery" });
  // res.send(movie);
  const movie = await Movies.find({}).limit(100);
  res.send(movie);
};

export const MovieAddController = async (req: Request, res: Response) => {
  const movie = await Movies.insertOne({
    title: "Galaxy Quest",
    year: 2023,
    genre: ["sci-fi", "comedy"],
    directors: ["Jane Smith"],
    cast: ["Actor X", "Actor Y"],
    imdb: 7.8,
    metacritic: 75,
  });
  res.send(movie);
};
