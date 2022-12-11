const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    email: String
    password: String
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
    objectInteractions(objectId: String!): [Interaction]!  
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
    startGame(start: Boolean): [GameUserInteraction]  
    addGameUserInteraction(interaction_id: ID!): GameUserInteraction 
    checkSolution(character_id: ID!, thing_id: ID!, motive_id: ID!): Solution
    endGame(solutionTime: Int): User
  }
`;

module.exports = typeDefs;
