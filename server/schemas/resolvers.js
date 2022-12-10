const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Room, Object, Interaction, GameUserInteraction} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      users: async () => {
        return User.find();
      },
  
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
      // By adding context to our query, we can retrieve the logged in user without specifically searching for them
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      games: async () => {
        return Game.find();
      },
  
      game: async (parent, { gameId }) => {
        return Game.findOne({ _id: gameId }).populate('rooms');
      },

      room: async (parent, { roomId }) => {
        return Room.findOne({ _id: roomId }).populate('objects');
      },
      object: async (parent, { objectId }) => {
        return Object.findOne({ _id: objectId }).populate('interactions');
      },

      interaction: async (parent, { gameId }) => {
        return Interaction.findOne({ _id: gameId });
      },
      checkUserInteraction: async (parent, { interactionId }) => {
      return GameUserInteraction.findOne({ interactionId: interactionId });
      },
  },

  Mutation: {
    addUser: async (parent, { first_name, last_name, email, password }) => {
      const user = await User.create({ first_name, last_name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials!');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
} 
   
module.exports = resolvers;
