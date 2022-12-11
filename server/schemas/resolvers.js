const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Room, Object, Interaction, GameUserInteraction} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    games: async () => {
      return Game.find({});
    },

    game: async (parent, { gameId }) => {
      return Game.findOne({ game_id: gameId }).populate('rooms');
    },

    room: async (parent, { roomId }) => {
      return Room.findOne({ room_id: roomId }).populate('objects');
    },
    
    objectInteractions: async (parent, { objectId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const resp = Interaction.findOne({ object_id: objectId });

      // Check whether the interaction has to be displayed by checking whether
      // another interaction has been performed, as tracked on the GameUserInteraction collection table
      const interactions = resp.filter(item =>{
        // if display_if_visited_interaction_id is populated, then check the GameUserInteraction collection for a logged in user
        if (item.display_if_visited_interaction_id){
          const gameUserInteraction = 
            GameUserInteraction.findOne({
              user_id: context.user._id,
              interaction_id: item.display_if_visited_interaction_id 
            });
          // if found then return interaction
          if (gameUserInteraction){ 
            return true
          }
          else {
            return false
          }
        } else {
          return true
        }
      })

      return interactions;
    },

    // auxillary queries
      users: async () => {
        return User.find({});
      },
      rooms: async () => {
        return Room.find({});
      },
      objects: async () => {
        return Object.find({});
      },
      interactions: async () => {
        return Interaction.find({});
      },
      gameUserInteractions: async () => {
        return GameUserInteraction.find({});
      },
      motives: async () => {
        return Motive.find({});
      },
      solutions: async () => {
        return Solution.find({});
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

    startGame: async (parent, _, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

     return await GameUserInteraction.deleteMany({ user_id: context.user._id });
    },

    addGameUserInteraction: async (parent, {interaction_id}, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      // check if already interacted
      const interaction = GameUserInteraction.findOne({
        user_id: context.user._id,
        interaction_id
      });

      // create only if not interacted yet
      let userInteraction = null;
      if (!interaction) {
        userInteraction = await GameUserInteraction.create({ 
          user_id: context.user._id,
          interaction_id 
        });
      }

      return userInteraction;
    },
  },
} 
   
module.exports = resolvers;
