const db = require('../config/connection');
const { User, Game, Room, Object, Interaction, Motive, Solution, GameUserInteraction  } = require('../models');
const gameSeeds = require('./games.json');
const roomSeeds = require('./rooms.json');

db.once('open', async () => {
  try {
    await Game.deleteMany({});
    await Room.deleteMany({});
    await Game.insertMany(gameSeeds);
    await Room.insertMany(roomSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});