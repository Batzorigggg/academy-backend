import { Movies, Users } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";
import { type IUser } from "../types/user.ts";
import bcrypt from "bcrypt";

export const movieMutations = {
  addMovie: async (_root: any, { input }: { input: IMovie }) => {
    const movie = await Movies.insertOne(input);

    return "Success";
  },
};

export const userMutations = {
  // loginUser: async (_root: any, { input }: { input: IUser }) => {
  //   let { email, password } = input;
  //   const data = await Users.find({
  //     email,
  //     password,
  //   });
  //   return "login succesfull";
  // },

  signupUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password, name } = input;
    console.log(input);
    const hashedPassword = await bcrypt.hash(password, 10);

    const check = await Users.find({
      email: email,
    });

    if (!check) {
      return " bvrtgeltei bn";
    }
    const user = await Users.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    return user.name;
  },
};
