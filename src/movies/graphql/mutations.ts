import { Movies, Users } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";
import { type IUser } from "../types/user.ts";
import { userMutationTypeDefs } from "./schema.ts";

export const movieMutations = {
  addMovie: async (_root: any, { input }: { input: IMovie }) => {
    const movie = await Movies.insertOne({});

    return "Success";
  },
};

export const userMutation = {
  addUser: async (
    _root: undefined,
    { input }: { input: IUser },
    { name }: { name: string },
    { email }: { email: string },
    { password }: { password: string }
  ) => {
    const user = await Users.insertOne({ name, email, password });
    return user;
  },
};
// export const userMutation = {
//   user: async (
//     _: any,
//     { name }: { name: string },
//     { email }: { email: string },
//     { password }: { password: string }
//   ) => {
//     return await Users.insertOne({ name, email, password });
//   },
// };
