import { Document, Schema, model } from "mongoose";

interface IRating {
  rating: number;
  numReviews?: number;
  meter?: number;
}

interface ITomatoes extends Document {
  viewer?: IRating;
  fresh?: number;
  critic?: IRating;
  rotten?: number;
  lastUpdated?: Date;
}

export interface IMoviesDocument extends Document {
  title?: string;
  year?: number;
  plot?: string;
  genre?: string[];
  runtime?: number;
  cast?: string[];
  poster?: string;
  fullplot?: string;
  released?: Date;
  imdb?: number;
  languages?: string[];
  directors?: string[];
  metacritic?: number;
  awards?: {
    wins: number;
    nominations: number;
    text: string;
  };
  tomatoes?: ITomatoes;
}

const TomatoesSchema: Schema<ITomatoes> = new Schema(
  {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    critic: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    rotten: Number,
    lastUpdated: Date,
  },
  { _id: false }
);

const MovieSchema: Schema<IMoviesDocument> = new Schema({
  plot: { type: String, required: false },
  genre: { type: [String], required: false },
  title: { type: String, required: false },
  year: { type: Number, required: false },
  runtime: { type: Number, required: false },
  cast: { type: [String], required: false },
  poster: { type: String, required: false },
  fullplot: { type: String, required: false },
  imdb: { type: Number, required: false },
  metacritic: { type: Number },
  released: { type: Date, required: false, default: new Date() },
  languages: { type: [String], required: false },
  directors: { type: [String], required: false },
  awards: {
    wins: { type: Number },
    nominations: { type: Number },
    text: { type: String },
  },
  tomatoes: TomatoesSchema,
});

export const Movies = model<IMoviesDocument>("movies", MovieSchema);
