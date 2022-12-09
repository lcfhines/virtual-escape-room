// importing express object
const express = require('express');
const path = require('path');
const db = require('./config/connection');

// port used by the express server
const PORT = process.env.PORT || 3001;

// create the express server
const app = express();

// middleware to allow JSON to be sent and decoded from the request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// start up the database 
db.once('open', () => {
  // express server is listening
  app.listen(PORT, () => {
    console.log(`Server has started... Listening on http://localhost:${PORT}/`);
    console.log('Time:', Intl.DateTimeFormat('en-US',{dateStyle: 'long', timeStyle: 'long'}).format(new Date()));
  })
});


