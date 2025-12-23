import { Document, Schema, Model, ObjectId, Date } from "mongoose";
export interface IComments extends Document {
  name: string;
  email: string;
  movie_id: ObjectId;
  text: string;
  date: Date;
}

const CommentSchema: Schema<IComments> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  movie_id: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true },
});
