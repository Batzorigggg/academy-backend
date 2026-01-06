export const movieTypesDefs = `
  type Award {
     wins: Int
     nominations: Int
     text: String
  }

  type Movie {
    _id: ID
    title: String
    author: String
    awards: [Award]
   
  }

  input MovieInput {
    title: String
    author: String
  }

`;

export const movieQueryTypeDefs = `
  movie(_id: ID): Movie
  movies(title:String,page: Int!): [Movie]
`;

export const movieMutationTypeDefs = `
 addMovie(input: MovieInput): String
`;

export const userMutationTypeDefs = `
  addUser(name:String, email:String,password:String): String
`;
// ----------
export const userTypeDefs = `
  type User {
    _id: ID
    name: String
    email: String
  }
    input UserInput {
    name: String
    email: String
    password: String
    }
`;

export const userQueryTypeDefs = `
  userDetail(_id: ID): User
`;
