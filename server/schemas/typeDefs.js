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
    objects: [Object]
  }

  type Object{
    _id: ID
    type: String  
    is_weapon: Boolean
    room_id: ID
    name: String
    interactions: [Interaction]
    motives: [Motive]
  }

  type Interaction{
    _id: ID
    display_if_visited_interaction_id: ID
    description: String
    object_id: ID
    reactions: [Reaction]
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
    me: User
    games: [Game]!
    game(gameId: ID!): Game
    room: (roomId: ID!): Room
    object: (objectId: ID!): Object    
    interaction: (interactionId: ID!): Interaction
    checkUserInteraction: (interactionId: ID!): GameUserInteraction
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    startGame(user_id: ID!): Game
    addUserInteraction(user_id: ID!, interaction_id: ID!): GameUserInteraction
    checkSolution(character_id: ID!, thing_id: ID!, motive_id: ID!): Boolean
  }
`;
//startGame - start game in mutation will wipe out game user interaction table for that userId and start coutndown timer, switch room, click on object
// addUserInteraction - add user interaction, Interactions written to game user interaction table
// checkSolution - check 3 dropdowns (character id, object id and motive id) against background solution table to see if they match and if so we return true or false

module.exports = typeDefs;
