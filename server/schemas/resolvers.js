const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return [
        { _id: '1', name: 'Eileen', email: 'eileenrdolan@gmail.com', password: 'password'},
        { _id: '2', name: 'Michel', email: 'eileenrdolan@gmail.com', password: 'password'}];
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
