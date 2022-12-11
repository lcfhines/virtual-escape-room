const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    email: String
    password: String
    games_played: Int
    best_score: Int
  }

  type Game {
    _id: ID
    title: String
    game_id: Int
    story_line: String
    time_limit: Int
    rooms: [Room]
  }

  type Room {
    _id: ID
    is_default: Boolean
    room_id: Int
    title: String
    description: String
    game_id: Int
    objects: [Object]
  }

  type Object{
    _id: ID
    type: String
    object_id: String  
    is_weapon: Boolean
    room_id: Int
    name: String
    interactions: [Interaction]
  }

  type Interaction{
    _id: ID
    interaction_id: String
    display_if_visited_interaction_id: String
    description: String
    object_id: String
    reaction: String
    motives: [Motive]
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
    motive_id: String
    interaction_id: String
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
    game(game_id: Int!): Game
    room(roomId: Int!): Room
    object(objectId: String!): Object    
    interaction(interactionId: String!): Interaction
    checkUserInteraction(interactionId: String!): GameUserInteraction
  }

  type Mutation {
    addUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth
    updateUser(userId: ID!, games_played: Int, best_score: Int): User
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
