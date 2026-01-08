import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { typeDefs, resolvers } from "./apolloServer.ts";
import { Users } from "./movies/db/models.ts";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

mongoose
  .connect(
    "mongodb+srv://ekzorigoo_db_user:qdgZAdNZCKRV7dSP@backend-lesson.nrl7x9z.mongodb.net/sample_mflix?appName=backend-lesson"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

export interface IContext {
  user?: null;
  movie?: null;
}

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const token = req.headers.authorization;

    console.log("a", token);
    if (!token) {
      return "token bhgu";
    }
    if (!SECRET_KEY) {
      return "secret key bhgu";
    }
    const decoded = jwt.verify(token, SECRET_KEY);

    const userDetail = await Users.findOne({
      email: decoded.email,
    });
    if (!userDetail) {
      return "user bhgu bn";
    }

    return {
      user: userDetail,
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
