import { Router, Request, Response } from "express";
import { Comments } from "./models";

export const commentRouter = Router();

commentRouter.get(
  "movies/:_id/comments",
  async (req: Request, res: Response) => {
    const movie_id = "573a1390f29313caabcd446f";
    const comment = await Comments.find({ movie_id: movie_id });
    console.log(comment);
    return comment;
  },
);

commentRouter.post("movies/comments", async (req: Request, res: Response) => {
  // const movie_id = "573a1390f29313caabcd446f";
  const { email, id, text } = req.body;
  // const comment = await Comments.find({ movie_id: movie_id });


  const ddd= await Comments.insertOne({
 req.body
  }) 
  console.log(comment);
  return comment;
});
