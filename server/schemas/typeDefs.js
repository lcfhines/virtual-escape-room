const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    email: String
    password: String
  }

  type LeaderBoard {
    _id: ID
    game_id: Int
    user_id: String
    first_name: String
    last_name: String
    number_of_attempts: Int
    final_solution_time: Int
  }

  type Game {
    _id: ID
    title: String
    game_id: Int
    story_line: String
    time_limit: Int
    rooms: [Room]
    solution: Solution
    solutionLetters: [SolutionLetter]
  }

  type Room {
    _id: ID
    is_default: Boolean
    room_id: Int
    title: String
    description: String
    game_id: Int
    objects: [Object]
    image: String
  }

  type Object{
    _id: ID
    type: String
    object_id: String  
    isWeapon: Boolean
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
    suspect_id: String
    weapon_id: String
    motive_id: String
  }

  type SolutionLetter{
    _id: ID
    success: Boolean
    message: String
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    me: User
    games: [Game]!
    game(gameId: Int!): Game 
    room(roomId: Int!): Room 
    leaderBoard(gameId: Int!): [LeaderBoard]!
    objectInteractions(objectId: String!): [Interaction]!  
    
    users: [User]!
    rooms: [Room]!
    objects: [Object]!
    interactions: [Interaction]!
    gameUserInteractions: [GameUserInteraction]!
    motives: [Motive]!
    leaderBoards: [LeaderBoard]!
    solutions: [Solution]!
    solutionLetters: [SolutionLetter]!
  }

  type Mutation {
    addUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    startGame(start: Boolean): [GameUserInteraction]  

    addGameUserInteraction(interaction_id: ID!): GameUserInteraction 

    endGame(gameId: Int!, final_solution_time: Int): LeaderBoard
  }
`;

module.exports = typeDefs;
