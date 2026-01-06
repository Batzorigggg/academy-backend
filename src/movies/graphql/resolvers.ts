import { Movies } from "../db/models.ts";
import { Users } from "../db/models.ts";
export const resolvers = {
  Query: {
    movies: async () => {
      return await Movies.find({});
    },
    movie: async (_: any, { id }: { id: string }) => {
      return await Movies.findById(id);
    },
  },
  Mutation: {
    user: async (
      _: any,
      { name }: { name: string },
      { email }: { email: string },
      { password }: { password: string }
    ) => {
      return await Users.insertOne({ name, email, password });
    },
  },
};
