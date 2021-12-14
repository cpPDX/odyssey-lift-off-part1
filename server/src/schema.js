const {
    gql
} = require('apollo-server');

const typeDefs = gql `
"A track is a group of Modules that teaches about a specific topic"
type Track {
    "id - id for the track, required"
    id: ID!
    "title - what is a track without a title, required"
    title: String!
    "author - can't have a track without an author, required"
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}

"Author of a complete Track or a Module"
type Author {
    id: ID!
    name: String!
    photo: String
}

type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
`;
module.exports = typeDefs;