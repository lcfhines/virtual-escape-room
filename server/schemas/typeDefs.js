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
    user_id: String
    interaction_id: String
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
    games: [Game]!
    game(gameId: Int!): Game 
    room(roomId: Int!): Room 
    objectInteractions(objectId: String!): Object  
    me: User
    
    users: [User]!
    rooms: [Room]!
    objects: [Object]!
    interactions: [Interaction]!
    gameUserInteractions: [GameUserInteraction]!
    motives: [Motive]!
    solutions: [Solution]!
  }

  type Mutation {
    addUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
    startGame(user_id: ID!): Game  -- wipe out GameUserInteractions
    addUserInteraction(user_id: ID!, interaction_id: ID!): GameUserInteraction -- adds to gameuserinteractions
    
    checkSolution(character_id: ID!, thing_id: ID!, motive_id: ID!): Boolean

    updateUser(userId: ID!, games_played: Int, best_score: Int): User
  }
`;
//startGame - start game in mutation will wipe out game user interaction table for that userId and start coutndown timer, switch room, click on object
// addUserInteraction - add user interaction, Interactions written to game user interaction table
// checkSolution - check 3 dropdowns (character id, object id and motive id) against background solution table to see if they match and if so we return true or false

// games: [Game]!
//     game(game_id: Int!): Game -- gets one game and all rooms
//     room(roomId: Int!): Room -- gets one room and all objects

//     object(objectId: String!): Object  -- get all interactions and check whether he interacted in order to display or not

    
//     -- get all characters 
//     -- get all things that are weapons that he interacted with
//     -- get all motives from the interactions that he interacted with  
//     -- get leaderboard    
    
    
    
//     interaction(interactionId: String!): Interaction
    
//     users: [User]!
//     user(userId: ID!): User
//     me: User

//     checkUserInteraction(interactionId: String!): GameUserInteraction
//   }

//   type Mutation {
//     addUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
    
//     startGame(user_id: ID!): Game  -- wipe out GameUserInteractions
//     addUserInteraction(user_id: ID!, interaction_id: ID!): GameUserInteraction -- adds to gameuserinteractions
//     checkSolution(character_id: ID!, thing_id: ID!, motive_id: ID!): Boolean

//     updateUser(userId: ID!, games_played: Int, best_score: Int): User
//   }

module.exports = typeDefs;
