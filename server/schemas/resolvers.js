const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Room, Object, Interaction, Motive, GameUserInteraction, Solution, LeaderBoard, SolutionLetter } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    games: async () => {
      return await Game.find({});
    },

    game: async (parent, { gameId }) => {
      const game =  await Game.findOne({ game_id: gameId })
        .populate({
          path: 'rooms',
            populate: {
              path: 'objects',
                populate: {
                  path: 'interactions',
                    populate: {
                      path: 'motives'
                    }
                }
            }
      });

      const solution = await Solution.findOne();
      game.solution = solution;

      return game;
    },

    room: async (parent, { roomId }) => {
      return await Room.findOne({ room_id: roomId }).populate('objects');
    },
    

    objectInteractions: async (parent, { objectId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const resp = await Interaction.findOne({ object_id: objectId });

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

    leaderBoard: async (parent, { gameId }) => {
      return await LeaderBoard.find({ game_id: gameId });
    },

    // auxillary queries
      users: async () => {
        return await User.find({});
      },
      rooms: async () => {
        return await Room.find({});
      },
      objects: async () => {
        return await Object.find({});
      },
      interactions: async () => {
        return await Interaction.find({});
      },
      gameUserInteractions: async () => {
        return await GameUserInteraction.find({});
      },
      motives: async () => {
        return await Motive.find({});
      },
      solutions: async () => {
        return await Solution.find({});
      },
      solutionLetters: async () => {
        return await SolutionLetter.find({});
      },
      leaderBoards: async () => {
        return await LeaderBoard.find({});
      },
  },

  Mutation: {
    addUser: async (parent, { first_name, last_name, email, password }) => {
      const user = await User.create({ first_name, last_name, email, password });
      const token = signToken(user);
      return { token, user };
    },

    endGame: async (parent, { gameId, final_solution_time = 0 }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      let leaderboard = await LeaderBoard.findOne(
        { 
          user_id: context.user._id,
          game_id: gameId
        }
      );
      
      if (leaderboard){
        if (leaderboard.final_solution_time === 0) {        
          leaderboard = await LeaderBoard.updateOne(
            { 
              user_id: context.user._id,
              game_id: gameId
            },
            { 
              number_of_attempts: leaderboard.number_of_attempts + 1,
              final_solution_time: 
              leaderboard.final_solution_time > 0 
                  ? leaderboard.final_solution_time 
                  : final_solution_time
            },
            { new: true }
          )
          console.log(leaderboard);
          }
      } else {
          const user = await User.findOne({ _id: context.user._id });
          leaderboard = await LeaderBoard.create({
            game_id: gameId,
            user_id: context.user._id,
            first_name: user.first_name,
            last_name: user.last_name,
          })
      };


      return leaderboard;
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
      const interaction = await GameUserInteraction.findOne({
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
