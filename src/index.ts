import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/schema.ts";
import { resolvers } from "./graphql/resolvers.ts";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app: app as any });
  await mongoose.connect(
    "mongodb+srv://ekzorigoo_db_user:qdgZAdNZCKRV7dSP@backend-lesson.nrl7x9z.mongodb.net/sample_mflix?appName=backend-lesson"
  );
  console.log("MongoDB connected");

  app.listen({ port: 4000 }, () =>
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
