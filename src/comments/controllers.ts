import { Request, Response } from "express";
import { Comments } from "./models.ts";

export const Commentsontroller = async (req: Request, res: Response) => {
  const comment = await Comments.find({});
  res.send(comment);
};
export const CommentsIdController = async (req: Request, res: Response) => {
  const comment = await Comments.findOne({ title: "The Great Train Robbery" });
  res.send(comment);
};
