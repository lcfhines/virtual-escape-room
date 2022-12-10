const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    email: String
    password: String
    games_played: Int
    best_score: Int
  }

  type Game {
    _id: ID
    title: String
    story_line: String
    time_limit: Int
    rooms:[Room]
  }

  type Room {
    _id: ID
    is_default: Boolean
    title: String
    description: String
    game_id: ID
  }

  type Object{
    _id: ID
    type: String
    is_weapon: Boolean
    description: String
    room_id: ID
  }

  type Interaction{
    _id: ID
    display_if_visited_interaction_id: ID
    description: String
    object_id: ID
  }

  type Reaction{
    _id: ID
    description: String
    interaction_id: ID
  }

  type GameUserInteraction{
    _id: ID
    title: String
    story_line: String
    time_limit: Int
  }

  type Motive{
    _id: ID
    description: String
    object_id: ID
  }

  type Solution{
    _id: ID
    character_id: ID
    object_id: ID
    motive_id: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    games: [Game]!
    game(gameId: ID!): Game
    room: (roomId: ID!): Room

  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    startGame()
  }
`;
//start game in mutation will wipe out game user interaction story

module.exports = typeDefs;
