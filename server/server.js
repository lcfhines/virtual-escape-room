// importing express object
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

// port used by the express server
const PORT = process.env.PORT || 3001;

// create the express server
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})

// middleware to allow JSON to be sent and decoded from the request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  // start up the database 
  db.once('open', () => {
    // express server is listening
    app.listen(PORT, () => {
      console.log(`Server has started... Listening on http://localhost:${PORT}/`);
      console.log('Time:', Intl.DateTimeFormat('en-US',{dateStyle: 'long', timeStyle: 'long'}).format(new Date()));
    })
  })
}

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);