const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return [
        { _id: '1', name: 'Eileen', email: 'eileenrdolan@gmail.com', password: 'password'},
        { _id: '2', name: 'Michel', email: 'eileenrdolan@gmail.com', password: 'password'}];
    },

  },

}
   
module.exports = resolvers;
